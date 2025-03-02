/**
 * Font
 *
 * Created by sunvisor on 2025/02/28.
 * Copyright (C) Sunvisor Lab. 2025.
 */
import { AdditionalFontMap } from '@sunvisor/super-leopard-pdf';


export const additionalPdfFontMap: AdditionalFontMap = {
  'NotoSerifJP': {
    normal: {
      name: 'NotoSerifJP-Regular',
      fileName: 'NotoSerifJP-Regular.otf',
    },
    bold: {
      name: 'NotoSerifJP-Bold',
      fileName: 'NotoSerifJP-Bold.otf',
    },
    italic: {
      name: 'NotoSerifJP-Regular',
      fileName: 'NotoSerifJP-Regular.otf',
      options: { oblique: true }
    },
    boldItalic: {
      name: 'NotoSerifJP-Bold',
      fileName: 'NotoSerifJP-Bold.otf',
      options: { oblique: true }
    }
  },
  'NotoSansJP': {
    normal: {
      name: 'NotoSansJP-Regular',
      fileName: 'NotoSansJP-Regular.ttf',
    },
    bold: {
      name: 'NotoSansJP-Bold',
      fileName: 'NotoSansJP-Bold.ttf',
    },
    italic: {
      name: 'NotoSansJP-Regular',
      fileName: 'NotoSansJP-Regular.ttf',
      options: { oblique: true }
    },
    boldItalic: {
      name: 'NotoSansJP-Bold',
      fileName: 'NotoSansJP-Bold.ttf',
      options: { oblique: true }
    }
  },
  'RampartOne': {
    normal: {
      name: 'RampartOne-Regular',
      fileName: 'RampartOne-Regular.ttf',
    },
    italic: {
      name: 'RampartOne-Regular',
      fileName: 'RampartOne-Regular.ttf',
      options: { oblique: true }
    },
  },
  'MPlusRounded1c': {
    normal: {
      name: 'MPLUSRounded1c-Regular',
      fileName: 'MPLUSRounded1c-Regular.ttf',
    },
    bold: {
      name: 'MPLUSRounded1c-Bold',
      fileName: 'MPLUSRounded1c-Bold.ttf',
    },
    italic: {
      name: 'MPLUSRounded1c-Regular',
      fileName: 'MPLUSRounded1c-Regular.ttf',
      options: { oblique: true }
    },
    boldItalic: {
      name: 'MPLUSRounded1c-Bold',
      fileName: 'MPLUSRounded1c-Bold.ttf',
      options: { oblique: true }
    }
  }
};
