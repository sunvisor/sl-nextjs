'use client';
/**
 * Editor
 *
 * Created by sunvisor on 2025/02/23.
 * Copyright (C) Sunvisor Lab. 2025.
 */
import React, { useCallback } from "react";
import { ReportEditor, ReportId, useReportStates } from '@sunvisor/super-leopard-component';
import { ReportData } from '@sunvisor/super-leopard-core';
import { IconButton, NoSsr } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

function HistoryTool() {
  const { undo, redo, canUndo, canRedo } = useReportStates();

  const handleUndo = useCallback(() => {
    undo();
  }, [undo]);

  const handleRedo = useCallback(() => {
    redo();
  }, [redo]);

  return (
    <>
      <IconButton size="small" color="inherit" onClick={handleUndo} aria-label={'undo'} disabled={!canUndo}>
        <UndoIcon/>
      </IconButton>
      <IconButton size="small" color="inherit" onClick={handleRedo} aria-label={'redo'} disabled={!canRedo}>
        <RedoIcon/>
      </IconButton>
    </>
  )
}

export default function Editor() {
  const handleSave = useCallback(
    (id: ReportId, title: string, report: ReportData) => {
      console.log(id, title, report);
    },
    []
  );

  return (
    <NoSsr>
      <ReportEditor
        reportId={"new"}
        title={"sample report"}
        onSave={handleSave}
        additionalTools={{
          before:(
            <HistoryTool/>
          )
        }}
      />
    </NoSsr>
  );
}
