/**
 * Pdf
 *
 * Created by sunvisor on 2025/02/28.
 * Copyright (C) Sunvisor Lab. 2025.
 */
import { makePdf } from '@/pdf/makePdf';
import { NextResponse } from 'next/server';


export async function GET() {
  const stream = makePdf();

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="bill.pdf"',
    },
  });
}
