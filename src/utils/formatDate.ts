export function formatDate(date: string) {
  return new Intl.DateTimeFormat('is-IS', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(date))
}
