export const SITE_TIME_ZONE = 'Asia/Jakarta';
export const SITE_LAST_MODIFIED = '2026-06-16T00:00:00+07:00';
export const LEGAL_LAST_UPDATED = '2026-06-16';

export function getCurrentYearInSiteTimeZone() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: SITE_TIME_ZONE,
    year: 'numeric',
  }).format(new Date());
}

export function formatSiteDate(date: string) {
  const [year, month, day] = date.split('-').map(Number);
  const stableDate = new Date(Date.UTC(year, month - 1, day, 12));

  return new Intl.DateTimeFormat('en-US', {
    timeZone: SITE_TIME_ZONE,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(stableDate);
}
