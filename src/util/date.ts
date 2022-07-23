export function getISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function getLongFormDate(date: Date): string {
  return date.toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'full'
  });
}

export function getAmericanDate(date: Date): string {
  return date.toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'medium'
  });
}
