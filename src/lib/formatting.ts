export async function httpResponseToString(response: Response): Promise<string> {
  let headerString = '';
  for (const [key, value] of response.headers.entries()) {
    headerString += `  ${key}: ${value}\n`;
  }

  return `${response.status}: ${response.statusText}\nHeaders:\n${headerString}`;
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
