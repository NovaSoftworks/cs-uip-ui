export async function formatHttpResponse(response: Response): Promise<string> {
  return `${response.status}: ${response.statusText}`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
  }).format(date);
}
