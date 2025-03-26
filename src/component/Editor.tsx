'use client';
/**
 * Editor
 *
 * Created by sunvisor on 2025/02/23.
 * Copyright (C) Sunvisor Lab. 2025.
 */
import { useCallback } from "react";
import "@fontsource/noto-sans-jp";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-serif-jp/700.css";
import "@fontsource/rampart-one";
import "@fontsource/m-plus-rounded-1c";
import "@fontsource/m-plus-rounded-1c/700.css";
import {
  defaultSettings, ImageListData,
  ReportEditor,
  SettingData, useReportManipulator,
  WebFontMap
} from '@sunvisor/super-leopard-component';
import { ReportData } from '@sunvisor/super-leopard-core';
import { IconButton, NoSsr } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

/**
 * sample font map to use japanese fonts
 */
const fontMap: WebFontMap = {
  ...defaultSettings.fontMap,
  NotoSerifJP: {
    label: 'Noto Serif JP',
    family: 'Noto Serif JP',
    weight: {
      regular: '400',
      bold: '700',
    },
    style: ['bold', 'italic'],
  },
  NotoSansJP: {
    label: 'Noto Sans JP',
    family: "'Noto Sans JP'",
    weight: {
      regular: '400',
      bold: '700',
    },
    style: ['bold', 'italic'],
  },
  RampartOne: {
    label: 'Rampart One',
    family: "'Rampart One'",
    weight: {
      regular: '400',
    },
    style: ['italic'],
  },
  MPlusRounded1c: {
    label: 'M PLUS Rounded 1c',
    family: "'M PLUS Rounded 1c'",
    weight: {
      regular: '400',
      bold: '700',
    },
    style: ['bold', 'italic'],
  }
}

/**
 * sample settings
 */
const settings: SettingData = {
  ...defaultSettings,
  fontMap,
  image: {
    ...defaultSettings.image,
    getImageUrl: (src: string) => `/images/${src}`,
    getImageList: async (): Promise<ImageListData[]> => [
      {
        "type": "image/png",
        "name": "sunvisorlab_icon.png",
      }
    ],
  }
}


function HistoryTool() {
  const { undo, redo, canUndo, canRedo } = useReportManipulator();

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
    (report: ReportData) => {
      console.log(report);
    },
    []
  );
  const handleChangeTitle = useCallback((title: string) => {
    console.log('title', title);
  }, []);

  return (
    <NoSsr>
      <ReportEditor
        title={"sample report"}
        onSave={handleSave}
        settings={settings}
        additionalTools={{
          before:(
            <HistoryTool/>
          )
        }}
        onChangeTitle={handleChangeTitle}/>
    </NoSsr>
  );
}
