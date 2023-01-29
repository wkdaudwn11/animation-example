type Scene = {
  type: "animation" | "normal";
  heightNum: number;
  scrollHeight: number;
  objects: {
    container: HTMLElement | null;
    messageA?: HTMLElement | null;
    messageB?: HTMLElement | null;
    messageC?: HTMLElement | null;
    messageD?: HTMLElement | null;
    pinB?: HTMLElement | null;
    pinC?: HTMLElement | null;
    canvas?: any | null;
    videoImages?: any[];
    canvasCaption?: HTMLElement | null;
  };
  values?: {
    messageA_opacityIn?: any[];
    messageB_opacityIn?: any[];
    messageC_opacityIn?: any[];
    messageD_opacityIn?: any[];
    messageA_translateY_in?: any[];
    messageB_translateY_in?: any[];
    messageC_translateY_in?: any[];
    messageD_translateY_in?: any[];
    messageA_opacityOut?: any[];
    messageB_opacityOut?: any[];
    messageC_opacityOut?: any[];
    messageD_opacityOut?: any[];
    messageA_translateY_out?: any[];
    messageB_translateY_out?: any[];
    messageC_translateY_out?: any[];
    messageD_translateY_out?: any[];
    pinB_scaleY?: any[];
    pinC_scaleY?: any[];
    pinB_opacityIn?: any[];
    pinC_opacityIn?: any[];
    pinB_opacityOut?: any[];
    pinC_opacityOut?: any[];
    videoImageCount?: number;
    imageSequence?: number[];
    canvasOpacity?: any[];
  };
};

export const sceneList: Scene[] = [
  {
    type: "animation",
    heightNum: 5,
    scrollHeight: 0,
    objects: {
      container: document.querySelector("#scroll-section-0"),
      messageA: document.querySelector(
        "#scroll-section-0 .main-message.a"
      ) as HTMLElement,
      messageB: document.querySelector(
        "#scroll-section-0 .main-message.b"
      ) as HTMLElement,
      messageC: document.querySelector(
        "#scroll-section-0 .main-message.c"
      ) as HTMLElement,
      messageD: document.querySelector(
        "#scroll-section-0 .main-message.d"
      ) as HTMLElement,
      canvas: document.querySelector("#video-canvas-0") as any,
      videoImages: [],
    },
    values: {
      messageA_opacityIn: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacityIn: [0, 1, { start: 0.3, end: 0.4 }],
      messageC_opacityIn: [0, 1, { start: 0.5, end: 0.6 }],
      messageD_opacityIn: [0, 1, { start: 0.7, end: 0.8 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
      messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
      messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
      messageA_opacityOut: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opacityOut: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opacityOut: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opacityOut: [1, 0, { start: 0.85, end: 0.9 }],
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
      messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
      videoImageCount: 300,
      imageSequence: [0, 299],
      canvasOpacity: [1, 0, { start: 0.9, end: 1 }],
    },
  },
  {
    type: "normal",
    heightNum: 1,
    scrollHeight: 0,
    objects: {
      container: document.querySelector("#scroll-section-1"),
    },
  },
  {
    type: "animation",
    heightNum: 5,
    scrollHeight: 0,
    objects: {
      container: document.querySelector("#scroll-section-2"),
      messageA: document.querySelector("#scroll-section-2 .a") as HTMLElement,
      messageB: document.querySelector("#scroll-section-2 .b") as HTMLElement,
      messageC: document.querySelector("#scroll-section-2 .c") as HTMLElement,
      pinB: document.querySelector("#scroll-section-2 .b .pin") as HTMLElement,
      pinC: document.querySelector("#scroll-section-2 .c .pin") as HTMLElement,
      canvas: document.querySelector("#video-canvas-1") as any,
      videoImages: [],
    },
    values: {
      messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
      messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
      messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
      messageA_opacityIn: [0, 1, { start: 0.15, end: 0.2 }],
      messageB_opacityIn: [0, 1, { start: 0.5, end: 0.55 }],
      messageC_opacityIn: [0, 1, { start: 0.72, end: 0.77 }],
      messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
      messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
      messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
      messageA_opacityOut: [1, 0, { start: 0.3, end: 0.35 }],
      messageB_opacityOut: [1, 0, { start: 0.58, end: 0.63 }],
      messageC_opacityOut: [1, 0, { start: 0.85, end: 0.9 }],
      pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
      pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
      pinB_opacityIn: [0, 1, { start: 0.5, end: 0.55 }],
      pinC_opacityIn: [0, 1, { start: 0.72, end: 0.77 }],
      pinB_opacityOut: [1, 0, { start: 0.58, end: 0.63 }],
      pinC_opacityOut: [1, 0, { start: 0.85, end: 0.9 }],
      videoImageCount: 960,
      imageSequence: [0, 959],
      canvasOpacity: [1, 0, { start: 0.9, end: 1 }],
    },
  },
  {
    type: "animation",
    heightNum: 5,
    scrollHeight: 0,
    objects: {
      container: document.querySelector("#scroll-section-3"),
      canvasCaption: document.querySelector(".canvas-caption") as HTMLElement,
    },
  },
];
