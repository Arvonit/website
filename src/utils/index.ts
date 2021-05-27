export function getISODate(date: Date): string {
  const offset = date.getTimezoneOffset();
  const finalDate = new Date(date.getTime() - offset * 60 * 1000);
  return finalDate.toISOString().split('T')[0];
}
