/**
 * PrintPage
 *
 * Created by sunvisor on 2025/02/28.
 * Copyright (C) Sunvisor Lab. 2025.
 */
import { Box, Button } from '@mui/material';
import React from 'react';

export default function PrintPage() {
  return (
    <Box
      sx={{ m: 4 }}
    >
      <Button
        href="api/pdf"
        variant="contained"
      >
        Download PdF
      </Button>
    </Box>
  )
}
