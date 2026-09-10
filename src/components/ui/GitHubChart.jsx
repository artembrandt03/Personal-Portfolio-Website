import { useEffect, useMemo, useState } from "react";
import { getCopy } from "../../i18n/copy.js";

const GITHUB_USERNAME = "artembrandt03";
const YEARS = [2026, 2025, 2024];
const WEEKDAY_LABEL_ROWS = { 1: "Mon", 3: "Wed", 5: "Fri" };

// Groups a year's daily contributions into Sun–Sat week columns, padding
// the first/last week so every column lines up with a real calendar week
// (matches how GitHub itself lays the grid out).
function buildWeeks(contributions, year) {
  const dayMap = new Map(contributions.map((d) => [d.date, d]));
  const jan1 = new Date(Date.UTC(year, 0, 1));
  const dec31 = new Date(Date.UTC(year, 11, 31));

  const gridStart = new Date(jan1);
  gridStart.setUTCDate(gridStart.getUTCDate() - gridStart.getUTCDay());

  const gridEnd = new Date(dec31);
  gridEnd.setUTCDate(gridEnd.getUTCDate() + (6 - gridEnd.getUTCDay()));

  const days = [];
  for (let d = new Date(gridStart); d <= gridEnd; d.setUTCDate(d.getUTCDate() + 1)) {
    const iso = d.toISOString().slice(0, 10);
    const inYear = d >= jan1 && d <= dec31;
    days.push(inYear ? dayMap.get(iso) ?? { date: iso, count: 0, level: 0 } : null);
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

// Picks the first week-column each new month starts in, for the Jan/Feb/...
// header row above the grid.
function monthLabels(weeks) {
  const labels = [];
  let lastMonth = null;
  weeks.forEach((week, index) => {
    const firstDay = week.find(Boolean);
    if (!firstDay) return;
    const month = new Date(firstDay.date).getUTCMonth();
    if (month !== lastMonth) {
      labels.push({ index, month });
      lastMonth = month;
    }
  });
  return labels;
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatShortDate(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  return `${MONTH_NAMES[d.getUTCMonth()]} ${d.getUTCDate()}`;
}

// The API pads the year with future dates (0 contributions) even for the
// current, still-in-progress year — so stats only look at days that have
// actually happened, otherwise daily average etc. would be skewed low.
function computeStats(contributions, year) {
  const now = new Date();
  const dec31 = new Date(Date.UTC(year, 11, 31));
  const endDate = now < dec31 ? now : dec31;

  const elapsed = contributions.filter((d) => new Date(`${d.date}T00:00:00Z`) <= endDate);
  if (!elapsed.length) return null;

  const total = elapsed.reduce((sum, d) => sum + d.count, 0);
  const dailyAverage = total / elapsed.length;

  let bestDay = elapsed[0];
  for (const d of elapsed) {
    if (d.count > bestDay.count) bestDay = d;
  }

  let longestStreak = 0;
  let current = 0;
  for (const d of elapsed) {
    current = d.count > 0 ? current + 1 : 0;
    longestStreak = Math.max(longestStreak, current);
  }

  return { dailyAverage, bestDay, longestStreak };
}

export default function GitHubChart({ language = "en" }) {
  const c = getCopy(language);

  const [year, setYear] = useState(YEARS[0]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        setData(json);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [year]);

  const weeks = useMemo(() => {
    if (!data?.contributions) return [];
    return buildWeeks(data.contributions, year);
  }, [data, year]);

  const months = useMemo(() => monthLabels(weeks), [weeks]);
  const stats = useMemo(() => {
    if (!data?.contributions) return null;
    return computeStats(data.contributions, year);
  }, [data, year]);
  const total = data?.total?.[year];

  const contributionsText = c.githubChart.contributionsLabel
    .replace("{count}", total ?? "…")
    .replace("{year}", year);

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        padding: 16,
        background: "var(--panel-bg)",
        color: "var(--fg)",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div className="sectionTitle" style={{ margin: 0 }}>
          {c.githubChart.title}
        </div>

        <div className="ghYearRow" role="group" aria-label="Select year">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              className="ghYearBtn"
              aria-pressed={year === y}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="ghLayout">
        <div className="ghMain">
          <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 10 }}>
            {status === "error"
              ? c.githubChart.error
              : status === "loading"
                ? c.githubChart.loading
                : contributionsText}
          </div>

          {status === "error" ? (
            <img
              src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
              alt={c.githubChart.alt}
              className="githubChartImg"
              loading="lazy"
            />
          ) : (
            <>
              <div className="githubChartScroll">
                <div className="ghGrid" aria-label={c.githubChart.alt} role="img">
                  <div className="ghGridBody">
                    <div className="ghWeekdayCol">
                      <span className="ghWeekdayLabel ghMonthRowSpacer" aria-hidden="true" />
                      {[0, 1, 2, 3, 4, 5, 6].map((row) => (
                        <span key={row} className="ghWeekdayLabel">
                          {WEEKDAY_LABEL_ROWS[row] ?? ""}
                        </span>
                      ))}
                    </div>

                    <div className="ghWeeksCol">
                      <div className="ghMonthRow">
                        {weeks.map((week, wIndex) => {
                          const label = months.find((m) => m.index === wIndex);
                          return (
                            <span key={wIndex} className="ghMonthCell">
                              {label ? MONTH_NAMES[label.month] : ""}
                            </span>
                          );
                        })}
                      </div>

                      <div className="ghWeeks">
                        {(weeks.length ? weeks : Array.from({ length: 53 }, () => Array(7).fill(null))).map(
                          (week, wIndex) => (
                            <div className="ghWeek" key={wIndex}>
                              {week.map((day, dIndex) =>
                                day ? (
                                  <span
                                    key={dIndex}
                                    className="ghDay"
                                    data-level={day.level}
                                    title={`${day.count} contributions on ${day.date}`}
                                  />
                                ) : (
                                  <span key={dIndex} className="ghDay ghDayEmpty" aria-hidden="true" />
                                )
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ghFooterRow">
                <span className="ghLegend">
                  {c.githubChart.less}
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span key={level} className="ghDay ghLegendSwatch" data-level={level} aria-hidden="true" />
                  ))}
                  {c.githubChart.more}
                </span>
              </div>

              <div className="githubChartScrollHint">{c.githubChart.scrollHint}</div>
            </>
          )}
        </div>

        {status !== "error" && (
          <div className="ghStatsCol">
            <div className="ghStatTile">
              <div className="ghStatLabel">{c.githubChart.statsDailyAvg}</div>
              <div className="ghStatValue">{stats ? stats.dailyAverage.toFixed(1) : "—"}</div>
            </div>

            <div className="ghStatTile">
              <div className="ghStatLabel">{c.githubChart.statsBestDay}</div>
              <div className="ghStatValue">{stats ? stats.bestDay.count : "—"}</div>
              <div className="ghStatSub">{stats ? formatShortDate(stats.bestDay.date) : ""}</div>
            </div>

            <div className="ghStatTile">
              <div className="ghStatLabel">{c.githubChart.statsStreak}</div>
              <div className="ghStatValue">{stats ? stats.longestStreak : "—"}</div>
              <div className="ghStatSub">{stats ? c.githubChart.statsDaysUnit : ""}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
