import { useEffect, useRef } from "react";

import Nav from "./Nav";
import * as S from "./style";

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
    imagesPaths?: string[];
    images?: HTMLImageElement[] | null;
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
    canvasOpacityIn?: any[];
    canvasOpacityOut?: any[];
  };
};

const AirMug = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (() => {
      let yOffset = 0; // window pageYOffset
      let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 높이 값의 합
      let currentScene = 0; // 현재 보고 있는 scene (혹은 scroll-section)
      let isNewScene = false;

      const sceneList: Scene[] = [
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
            messageA: document.querySelector(
              "#scroll-section-2 .a"
            ) as HTMLElement,
            messageB: document.querySelector(
              "#scroll-section-2 .b"
            ) as HTMLElement,
            messageC: document.querySelector(
              "#scroll-section-2 .c"
            ) as HTMLElement,
            pinB: document.querySelector(
              "#scroll-section-2 .b .pin"
            ) as HTMLElement,
            pinC: document.querySelector(
              "#scroll-section-2 .c .pin"
            ) as HTMLElement,
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
            canvasOpacityIn: [0, 1, { start: 0, end: 0.1 }],
            canvasOpacityOut: [1, 0, { start: 0.95, end: 1 }],
          },
        },
        {
          type: "animation",
          heightNum: 5,
          scrollHeight: 0,
          objects: {
            container: document.querySelector("#scroll-section-3"),
            canvasCaption: document.querySelector(
              ".canvas-caption"
            ) as HTMLElement,
            canvas: document.querySelector(".image-blend-canvas") as any,
            imagesPaths: [
              "/images/blend-image-1.jpg",
              "/images/blend-image-2.jpg",
            ],
            images: [],
          },
          values: {},
        },
      ];

      const setCanvasImages = () => {
        if (
          !sceneList ||
          !Array.isArray(sceneList) ||
          sceneList.length === 0 ||
          !sceneList[0]?.values?.videoImageCount ||
          !sceneList[0].objects.videoImages ||
          !sceneList[2]?.values?.videoImageCount ||
          !sceneList[2].objects.videoImages ||
          !sceneList[3].objects.imagesPaths ||
          sceneList[3].objects.imagesPaths.length === 0 ||
          !sceneList[3].objects.images
        )
          return;

        for (let i = 0; i < sceneList[0].values.videoImageCount; i++) {
          const imgElem = new Image();
          imgElem.src = `/videos/001/IMG_${6726 + i}.JPG`;
          sceneList[0].objects.videoImages.push(imgElem);
        }

        for (let i = 0; i < sceneList[2].values.videoImageCount; i++) {
          const imgElem = new Image();
          imgElem.src = `/videos/002/IMG_${7027 + i}.JPG`;
          sceneList[2].objects.videoImages.push(imgElem);
        }

        for (let i = 0; i < sceneList[3].objects.imagesPaths.length; i++) {
          const imgElem = new Image();
          imgElem.src = sceneList[3].objects.imagesPaths[i];
          sceneList[3].objects.images.push(imgElem);
        }

        console.log(sceneList[3].objects.images);
      };

      const handleChangeLayout = () => {
        if (!containerRef?.current) return;

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;

        sceneList.forEach((scene) => {
          if (scene.objects.container) {
            if (scene.type === "animation") {
              scene.scrollHeight = scene.heightNum * window.innerHeight;
            } else if (scene.type === "normal") {
              scene.scrollHeight = scene.objects.container.offsetHeight;
            }
            scene.objects.container.style.height = `${scene.scrollHeight}px`;
          }
        });

        for (let i in sceneList) {
          totalScrollHeight += sceneList[i].scrollHeight;
          if (totalScrollHeight > yOffset) {
            currentScene = Number(i);
            break;
          }
        }

        containerRef.current.setAttribute("id", `show-scene-${currentScene}`);

        const heightRatio = window.innerHeight / 1080;
        sceneList[0].objects.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
        sceneList[2].objects.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
      };

      const handleClear = () => {
        yOffset = window.pageYOffset;
        prevScrollHeight = 0;
      };

      const animationCalcValues = (values: any[], currentYOffset: number) => {
        let result;
        const scrollHeight = sceneList[currentScene]?.scrollHeight || 0;
        const scrollRatio = currentYOffset / scrollHeight;

        if (values.length > 2) {
          const partScrollStart = values[2].start * scrollHeight;
          const partScrollEnd = values[2].end * scrollHeight;
          const partScrollHeight = partScrollEnd - partScrollStart;

          if (
            currentYOffset >= partScrollStart &&
            currentYOffset <= partScrollEnd
          ) {
            const partScrollRatio =
              (currentYOffset - partScrollStart) / partScrollHeight;
            result = partScrollRatio * (values[1] - values[0]) + values[0];
          } else if (currentYOffset < partScrollStart) {
            result = values[0];
          } else if (currentYOffset > partScrollEnd) {
            result = values[1];
          }
        } else {
          result = scrollRatio * (values[1] - values[0]) + values[0];
        }

        return result;
      };

      const playAnimation = () => {
        const scene = sceneList[currentScene];
        const scrollHeight = scene?.scrollHeight || 1;
        const objects = scene.objects || null;
        const values = scene.values || null;
        const currentYOffset = yOffset - prevScrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        if (!objects || !values) return;

        switch (currentScene) {
          case 0:
            if (
              objects.messageA &&
              objects.messageB &&
              objects.messageC &&
              objects.messageD &&
              values.messageA_opacityIn &&
              values.messageA_opacityOut &&
              values.messageA_translateY_in &&
              values.messageA_translateY_out &&
              values.messageB_opacityIn &&
              values.messageB_opacityOut &&
              values.messageB_translateY_in &&
              values.messageB_translateY_out &&
              values.messageC_opacityIn &&
              values.messageC_opacityOut &&
              values.messageC_translateY_in &&
              values.messageC_translateY_out &&
              values.messageD_opacityIn &&
              values.messageD_opacityOut &&
              values.messageD_translateY_in &&
              values.messageD_translateY_out &&
              values.imageSequence &&
              values.canvasOpacity &&
              objects.canvas &&
              objects.videoImages
            ) {
              const sequence = Math.round(
                animationCalcValues(values.imageSequence, currentYOffset)
              );
              const context = objects.canvas.getContext("2d");
              context.drawImage(objects.videoImages[sequence], 0, 0);

              objects.canvas.style.opacity = animationCalcValues(
                values.canvasOpacity,
                currentYOffset
              );

              const intersection01 =
                (values.messageA_opacityIn[2].end +
                  values.messageA_opacityOut[2].start) /
                2;
              const intersection02 =
                (values.messageB_opacityIn[2].end +
                  values.messageB_opacityOut[2].start) /
                2;
              const intersection03 =
                (values.messageC_opacityIn[2].end +
                  values.messageC_opacityOut[2].start) /
                2;

              const intersection04 =
                (values.messageD_opacityIn[2].end +
                  values.messageD_opacityOut[2].start) /
                2;

              if (scrollRatio <= intersection01) {
                objects.messageA.style.opacity = animationCalcValues(
                  values.messageA_opacityIn,
                  currentYOffset
                ).toString();
                objects.messageA.style.transform = `translateY(${animationCalcValues(
                  values.messageA_translateY_in,
                  currentYOffset
                )}%)`;
              } else {
                objects.messageA.style.opacity = animationCalcValues(
                  values.messageA_opacityOut,
                  currentYOffset
                ).toString();
                objects.messageA.style.transform = `translateY(${animationCalcValues(
                  values.messageA_translateY_out,
                  currentYOffset
                )}%)`;
              }

              if (scrollRatio <= intersection02) {
                objects.messageB.style.opacity = animationCalcValues(
                  values.messageB_opacityIn,
                  currentYOffset
                );
                objects.messageB.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageB_translateY_in,
                  currentYOffset
                )}%, 0)`;
              } else {
                objects.messageB.style.opacity = animationCalcValues(
                  values.messageB_opacityOut,
                  currentYOffset
                );
                objects.messageB.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageB_translateY_out,
                  currentYOffset
                )}%, 0)`;
              }

              if (scrollRatio <= intersection03) {
                objects.messageC.style.opacity = animationCalcValues(
                  values.messageC_opacityIn,
                  currentYOffset
                );
                objects.messageC.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageC_translateY_in,
                  currentYOffset
                )}%, 0)`;
              } else {
                objects.messageC.style.opacity = animationCalcValues(
                  values.messageC_opacityOut,
                  currentYOffset
                );
                objects.messageC.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageC_translateY_out,
                  currentYOffset
                )}%, 0)`;
              }

              if (scrollRatio <= intersection04) {
                objects.messageD.style.opacity = animationCalcValues(
                  values.messageD_opacityIn,
                  currentYOffset
                );
                objects.messageD.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageD_translateY_in,
                  currentYOffset
                )}%, 0)`;
              } else {
                objects.messageD.style.opacity = animationCalcValues(
                  values.messageD_opacityOut,
                  currentYOffset
                );
                objects.messageD.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageD_translateY_out,
                  currentYOffset
                )}%, 0)`;
              }
            }

            break;
          case 2:
            if (
              objects.messageA &&
              objects.messageB &&
              objects.messageC &&
              objects.pinB &&
              objects.pinC &&
              objects.videoImages &&
              objects.canvas &&
              values.messageA_opacityIn &&
              values.messageA_opacityOut &&
              values.messageA_translateY_in &&
              values.messageA_translateY_out &&
              values.messageB_opacityIn &&
              values.messageB_opacityOut &&
              values.messageB_translateY_in &&
              values.messageB_translateY_out &&
              values.pinB_scaleY &&
              values.messageC_translateY_in &&
              values.messageC_translateY_out &&
              values.messageC_opacityIn &&
              values.messageC_opacityOut &&
              values.pinC_scaleY &&
              values.imageSequence &&
              values.canvasOpacityIn &&
              values.canvasOpacityOut
            ) {
              const sequence2 = Math.round(
                animationCalcValues(values.imageSequence, currentYOffset)
              );
              const context = objects.canvas.getContext("2d");
              context.drawImage(objects.videoImages[sequence2], 0, 0);

              if (scrollRatio <= 0.5) {
                objects.canvas.style.opacity = animationCalcValues(
                  values.canvasOpacityIn,
                  currentYOffset
                );
              } else {
                objects.canvas.style.opacity = animationCalcValues(
                  values.canvasOpacityOut,
                  currentYOffset
                );
              }

              if (scrollRatio <= 0.25) {
                objects.messageA.style.opacity = animationCalcValues(
                  values.messageA_opacityIn,
                  currentYOffset
                );
                objects.messageA.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageA_translateY_in,
                  currentYOffset
                )}%, 0)`;
              } else {
                objects.messageA.style.opacity = animationCalcValues(
                  values.messageA_opacityOut,
                  currentYOffset
                );
                objects.messageA.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageA_translateY_out,
                  currentYOffset
                )}%, 0)`;
              }

              if (scrollRatio <= 0.57) {
                objects.messageB.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageB_translateY_in,
                  currentYOffset
                )}%, 0)`;
                objects.messageB.style.opacity = animationCalcValues(
                  values.messageB_opacityIn,
                  currentYOffset
                );
                objects.pinB.style.transform = `scaleY(${animationCalcValues(
                  values.pinB_scaleY,
                  currentYOffset
                )})`;
              } else {
                objects.messageB.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageB_translateY_out,
                  currentYOffset
                )}%, 0)`;
                objects.messageB.style.opacity = animationCalcValues(
                  values.messageB_opacityOut,
                  currentYOffset
                );
                objects.pinB.style.transform = `scaleY(${animationCalcValues(
                  values.pinB_scaleY,
                  currentYOffset
                )})`;
              }

              if (scrollRatio <= 0.83) {
                objects.messageC.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageC_translateY_in,
                  currentYOffset
                )}%, 0)`;
                objects.messageC.style.opacity = animationCalcValues(
                  values.messageC_opacityIn,
                  currentYOffset
                );
                objects.pinC.style.transform = `scaleY(${animationCalcValues(
                  values.pinC_scaleY,
                  currentYOffset
                )})`;
              } else {
                objects.messageC.style.transform = `translate3d(0, ${animationCalcValues(
                  values.messageC_translateY_out,
                  currentYOffset
                )}%, 0)`;
                objects.messageC.style.opacity = animationCalcValues(
                  values.messageC_opacityOut,
                  currentYOffset
                );
                objects.pinC.style.transform = `scaleY(${animationCalcValues(
                  values.pinC_scaleY,
                  currentYOffset
                )})`;
              }
            }
            break;
          case 3:
            if (
              !objects.canvas ||
              !objects.images ||
              objects.images.length === 0
            )
              return;

            const { canvas } = objects;

            // 캔버스의 Scale 값 구하기.
            // 캔버스보다 브라우저 창이 홀쭉하면 heightRatio, 아니면 widthRatio로 세팅
            const widthRatio = window.innerWidth / canvas.width;
            const heightRatio = window.innerHeight / canvas.height;
            const canvasScaleRatio =
              widthRatio >= heightRatio ? heightRatio : widthRatio;
            canvas.style.transform = `scale(${canvasScaleRatio})`;

            // 캔버스에 첫번째 이미지 (blend-image-1.jpg) 그려주기
            const context = objects.canvas.getContext("2d");
            context.drawImage(objects.images[0], 0, 0);

            break;
        }
      };

      const scrollLoop = () => {
        if (!containerRef?.current) return;
        isNewScene = false;

        for (let i = 0; i < currentScene; i++) {
          if (currentScene >= sceneList.length) break;

          const scene = sceneList[i];
          prevScrollHeight += scene.scrollHeight || 0;
        }

        if (
          yOffset >
            prevScrollHeight + (sceneList[currentScene]?.scrollHeight || 0) &&
          currentScene < sceneList.length
        ) {
          isNewScene = true;
          currentScene++;
          containerRef.current.setAttribute("id", `show-scene-${currentScene}`);
        }

        if (yOffset < prevScrollHeight && currentScene > 0) {
          isNewScene = true;
          currentScene--;
          containerRef.current.setAttribute("id", `show-scene-${currentScene}`);
        }

        if (isNewScene) return;

        playAnimation();
      };

      setCanvasImages();

      window.addEventListener("scroll", () => {
        handleClear();
        scrollLoop();
      });
      window.addEventListener("resize", handleChangeLayout);

      // DomContentLoaded -> 이미지 로딩 안기다리고 HTML DOM 로딩만 기다림
      // load -> 이미지, HTML DOM 로딩 모두 기다림
      // window.addEventListener("DomContentLoaded", handleChangeLayout);
      window.addEventListener("load", () => {
        handleChangeLayout();
        const objects = sceneList[0].objects;

        if (objects && objects.canvas && objects.videoImages) {
          const context = objects.canvas.getContext("2d");
          context.drawImage(objects.videoImages[0], 0, 0);
        }
      });
    })();
  }, []);

  return (
    <S.Container ref={containerRef}>
      <Nav />
      <S.ScrollSection id="scroll-section-0" sectionId={0}>
        <h1>AirMug Pro</h1>
        <S.StickyBox stickyId={0} className="sticky sticky-canvas">
          <canvas id="video-canvas-0" width="1920" height="1080" />
        </S.StickyBox>
        <S.StickyBox stickyId={0} className="sticky main-message a">
          <p>
            온전히 빠져들게 하는
            <br />
            최고급 세라믹
          </p>
        </S.StickyBox>
        <S.StickyBox stickyId={0} className="sticky main-message b">
          <p>주변 맛을 느끼게 해주는 주변 맛 허용 모드</p>
        </S.StickyBox>
        <S.StickyBox stickyId={0} className="sticky main-message c">
          <p>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </S.StickyBox>
        <S.StickyBox stickyId={0} className="sticky main-message d">
          <p>
            새롭게 입가를
            <br />
            찾아온 매혹
          </p>
        </S.StickyBox>
      </S.ScrollSection>
      <S.ScrollSection id="scroll-section-1" sectionId={1}>
        <p className="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas
          velit porro veniam necessitatibus non repellendus aliquid error.
          Accusantium quia omnis qui ex aperiam optio dicta ea, sequi facere
          officia ipsam impedit itaque, iure illo totam doloremque repellat
          illum voluptas, neque cupiditate libero cumque quos maxime? Corporis
          iure, quas quo blanditiis consectetur obcaecati dolorum eos adipisci
          non error eius illo quisquam hic? Delectus placeat nam reiciendis
          molestias animi distinctio architecto voluptatum, quae enim maxime
          tempore aperiam debitis in illo at blanditiis. Porro, quasi
          distinctio. Temporibus ducimus, commodi earum ipsum corrupti officiis
          ipsa. Repellat hic exercitationem cum ratione facere accusamus sint
          voluptatem amet, vero modi harum earum, nobis, dolorum sit commodi et
          minus ipsa doloribus voluptatibus nulla? Alias est autem saepe veniam
          dolorem doloremque laboriosam sunt soluta nostrum placeat quos
          distinctio impedit, quam quas nobis porro nulla fugit iure. Cum sed
          maiores vitae blanditiis dolorem similique, eos excepturi consectetur.
          Explicabo, consequatur iste ratione quod distinctio enim sint nulla
          nesciunt aperiam! Quam facilis odit, eveniet libero, nisi aliquam
          incidunt ipsam corporis veritatis laborum est. Temporibus voluptatibus
          unde animi adipisci cumque magnam, debitis impedit. Dignissimos et
          facilis est, modi beatae magnam nostrum fugiat ex culpa, facere
          doloribus vel sapiente excepturi ratione reprehenderit numquam?
        </p>
      </S.ScrollSection>
      <S.ScrollSection id="scroll-section-2" sectionId={2}>
        <S.StickyBox stickyId={1} className="sticky sticky-canvas">
          <canvas id="video-canvas-1" width="1920" height="1080" />
        </S.StickyBox>
        <S.StickyBox stickyId={1} className="sticky main-message a">
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </S.StickyBox>
        <S.StickyBox stickyId={1} className="sticky desc-message b">
          <p>
            편안함 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
            오롯이 당신과 음료만 남게 되죠.
          </p>
          <div className="pin" />
        </S.StickyBox>
        <S.StickyBox stickyId={1} className="sticky desc-message c">
          <p>
            디자인 앤 퀄리티 오브 스웨덴,
            <br />
            메이드 인 코리아
          </p>
          <div className="pin" />
        </S.StickyBox>
      </S.ScrollSection>
      <S.ScrollSection id="scroll-section-3" sectionId={3}>
        <p className="mid-message">
          <strong>Retina 머그</strong>
          <br />
          아이디어를 광활하게 펼칠
          <br />
          아름답고 부드러운 음료 공간.
        </p>
        <canvas className="image-blend-canvas" width="1920" height="1080" />
        <p className="canvas-caption">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
          fuga quae perspiciatis veniam impedit et, ratione est optio porro.
          Incidunt aperiam nemo voluptas odit quisquam harum in mollitia.
          Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
          inventore a rerum distinctio vero illo magni possimus temporibus
          dolores neque adipisci, repudiandae repellat. Ducimus accusamus
          similique quas earum laborum. Autem tempora repellendus asperiores
          illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
          rerum neque error deleniti quis, et, quibusdam, est autem voluptate
          rem voluptas. Ratione soluta similique harum nihil vel. Quas inventore
          perferendis iusto explicabo animi eos ratione obcaecati.
        </p>
      </S.ScrollSection>
      <S.Footer>2023, wkdaudwn11 (MJ)</S.Footer>
    </S.Container>
  );
};

export default AirMug;
