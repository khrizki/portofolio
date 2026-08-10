import { redirect, type ActionFunctionArgs } from '@remix-run/node';

// Server-side utilities and actions can be exported here
export function badRequest<T>(data: T) {
  return redirect('/', { status: 400 });
}

export function notFound<T>(data: T) {
  return redirect('/404', { status: 404 });
}
