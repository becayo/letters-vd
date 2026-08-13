import type { APIRoute } from 'astro';
import { db } from '@/db/client';
import { pushSubscriptions } from '@/db/schema';

export const GET: APIRoute = async () => {
  try {
    await db.delete(pushSubscriptions);
    return new Response(JSON.stringify({ success: true, message: 'Todas las suscripciones de push han sido eliminadas.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
