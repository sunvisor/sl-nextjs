/**
 * Home
 *
 * Created by sunvisor on 2025/02/27.
 * Copyright (C) Sunvisor Lab. 2025.
 */
import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <h2>
            Super Leopard Sample
          </h2>
        </Toolbar>
      </AppBar>
      <Box sx={{ m: 4 }}>
        <Button href="/edit" variant="contained">
          Edit PDF
        </Button>
      </Box>
      <Box sx={{ m: 4 }}>
        <Button href="/api/pdf" variant="contained">
          Download PDF
        </Button>
      </Box>
    </Box>
  )
}
