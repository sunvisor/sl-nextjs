'use client';
/**
 * Editor
 *
 * Created by sunvisor on 2025/02/23.
 * Copyright (C) Sunvisor Lab. 2025.
 */
import React, { useCallback } from "react";
import { ReportEditor, ReportId } from '@sunvisor/super-leopard-component';
import { ReportData } from '@sunvisor/super-leopard-core';
import { NoSsr } from '@mui/material';

export default function Editor() {
  const handleSave = useCallback(
    (id: ReportId, title: string, report: ReportData) => {
      console.log(id, title, report);
    },
    []
  )

  return (
    <NoSsr>
      <ReportEditor
        reportId={"new"}
        title={"sample report"}
        onSave={handleSave}
      />
    </NoSsr>
  );
}
