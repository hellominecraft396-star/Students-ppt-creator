export interface HandwritingPersona {
  id: string;
  name: string;
  initials: string;
  description: string;
  fontClass: string;
  badge?: string;
  tag?: string;
  clarity?: string;
}

export interface ImperfectionSettings {
  jitter: number; // 0 - 100
  baselineDrift: number; // -10 to +10 degrees
  wordSpacing: number; // 10 - 90
  pressureVariance: number; // 0 - 100
}

export type PaperTexture = 'college-ruled' | 'cornell-grid' | 'dot-matrix' | 'kraft';

export interface InkColor {
  id: string;
  name: string;
  hex: string;
  bgTailwind: string;
  nib: string;
}

export interface HeaderStampSettings {
  showMarginHeader: boolean;
  showPageStamp: boolean;
  simulateSmudge: boolean;
  watermarkText: string;
}

export type ExportFormat = 'pdf' | 'pptx' | 'png';

export type SourceMode = 'chat' | 'scans' | 'pdf' | 'ppt' | 'research';

export type ViewMode = 'handwritten' | 'computerized';

export interface DocumentPage {
  id: number;
  rollNumber: string;
  course: string;
  date: string;
  sheetLabel: string;
  chapterTitle: string;
  chapterSubtitle: string;
  introText: string;
  formula: {
    math: string;
    caption: string;
  };
  bulletPoints: {
    title: string;
    description: string;
    tilt?: number;
  }[];
  diagram: {
    title: string;
    type: 'gradient-descent' | 'neural-graph' | 'regularization-contour' | 'attention-matrix';
    simulatedPressure: string;
    svgNodes: number;
  };
  instructorNote: string;
}
