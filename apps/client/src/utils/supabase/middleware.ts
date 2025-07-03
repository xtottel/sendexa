// utils/supabase/middleware.ts

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import type { NextResponse } from 'next/server';

export function createClient(req: NextRequest, res: NextResponse) {
  return createMiddlewareClient({
    req,
    res,
  });
}
