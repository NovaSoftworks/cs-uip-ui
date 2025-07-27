import { ADMIN_API_BASE_URL } from '$lib/server/config';
import { KratosAdminError } from './kratos-admin-error';

export async function getIdentityById(id: string): Promise<any> {
  const res = await fetch(`${ADMIN_API_BASE_URL}/admin/identities/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new KratosAdminError(errorData.error.message, errorData.error.code, errorData.error.status);
  }

  return await res.json();
}
