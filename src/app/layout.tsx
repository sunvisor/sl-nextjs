/**
 * Layout
 *
 * Created by sunvisor on 2025/02/27.
 * Copyright (C) Sunvisor Lab. 2025.
 */
import type { Metadata } from 'next'
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from '@/app/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

export const metadata: Metadata = {
  title: 'Super Leopard',
  description: 'Super Leopard by Sunvisor',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <body style={{ height: '100vh' }}>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          {children}
        </CssBaseline>
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  )
}
