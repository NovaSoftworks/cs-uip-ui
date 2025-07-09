export async function formatHttpResponse(response: Response): Promise<string> {
  return `${response.status}: ${response.statusText}`;
}

export function formatDate(dateString: string, locale: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'long',
      timeStyle: 'short'
    }).format(date);
  } catch {
    return dateString;
  }
}
