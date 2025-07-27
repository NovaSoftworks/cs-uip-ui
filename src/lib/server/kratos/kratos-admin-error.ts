export class KratosAdminError extends Error {
  code?: number;
  status?: string;

  constructor(message: string, code?: number, status?: string) {
    super(message);
    this.name = 'KratosAdminError';
    this.code = code;
    this.status = status;
  }
}
