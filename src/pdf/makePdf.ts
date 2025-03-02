import { createReportDrawer, GetPdfImagePath, PdfFont } from '@sunvisor/super-leopard-pdf';
import { ReportData } from '@sunvisor/super-leopard-core';
import * as fs from 'node:fs';
import { additionalPdfFontMap } from '@/pdf/font';
import { PassThrough } from 'node:stream';
import path from 'node:path';

/**
 * MakePdf
 *
 * Created by sunvisor on 2025/02/23.
 * Copyright (C) Sunvisor Lab. 2025.
 */
export function makePdf() {
  const filePath = path.join(process.cwd(), 'private');
  // read report definition
  const report = readJson(`${filePath}/testBill.json`) as unknown as ReportData;
  // read report data
  const values = readJson(`${filePath}/billValues.json`) as unknown as Record<string, string | number>
  // read report list records
  const listRecords = readJson(`${filePath}/billListRecords.json`) as unknown as Record<string, string | number>[];
  // return image path
  const getImagePath: GetPdfImagePath = (src: string) => `${filePath}/images/${src}`;
  // create fonts object
  const fonts = new PdfFont({
    additionalFontMap: additionalPdfFontMap,
    fontPath: `${filePath}/fonts`,
  });
  // create stream
  const stream = new PassThrough();
  // create PDF drawer
  const drawer = createReportDrawer({
    report,
    getImagePath,
    fonts,
  });
  // attach stream to PDF drawer
  drawer.document.open(stream);
  // draw
  drawer.draw({
    values,
    listRecords,
  });
  // close
  drawer.document.close();

  return stream as unknown as ReadableStream;
}

function readJson(filePath: string) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}
