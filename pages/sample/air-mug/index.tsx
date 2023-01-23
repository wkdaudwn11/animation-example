import { useEffect, useState } from "react";

import Nav from "./Nav";
import * as S from "./style";

type Scene = {
  type: "animation" | "normal";
  heightNum: number;
  scrollHeight: number;
  objects: {
    container: HTMLElement | null;
  };
};

const AirMug = () => {
  useEffect(() => {
    (() => {
      let yOffset = 0; // window pageYOffset
      let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 높이 값의 합
      let currentScene = 0; // 현재 보고 있는 scene (혹은 scroll-section)

      const sceneList: Scene[] = [
        {
          type: "animation",
          heightNum: 5,
          scrollHeight: 0,
          objects: {
            container: document.querySelector("#scroll-section-0"),
          },
        },
        {
          type: "normal",
          heightNum: 5,
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
          },
        },
        {
          type: "animation",
          heightNum: 5,
          scrollHeight: 0,
          objects: {
            container: document.querySelector("#scroll-section-3"),
          },
        },
      ];

      const handleChangeLayout = () => {
        sceneList.forEach((scene) => {
          scene.scrollHeight = scene.heightNum * window.innerHeight;
          if (scene.objects.container) {
            scene.objects.container.style.height = `${scene.scrollHeight}px`;
          }
        });
      };

      const handleClear = () => {
        yOffset = window.pageYOffset;
        prevScrollHeight = 0;
      };

      const scrollLoop = () => {
        for (let i = 0; i < currentScene; i++) {
          if (currentScene >= sceneList.length) break;

          const scene = sceneList[i];
          prevScrollHeight += scene.scrollHeight;
        }

        if (
          yOffset > prevScrollHeight + sceneList[currentScene].scrollHeight &&
          currentScene < sceneList.length
        ) {
          currentScene++;
        }

        if (yOffset < prevScrollHeight && currentScene > 0) {
          currentScene--;
        }

        console.log(currentScene);
      };

      handleChangeLayout();

      window.addEventListener("resize", handleChangeLayout);
      window.addEventListener("scroll", () => {
        handleClear();
        scrollLoop();
      });
    })();
  }, []);

  return (
    <S.Container>
      <Nav />
      <S.ScrollSection id="scroll-section-0" sectionId={0}>
        <h1>AirMug Pro</h1>
        <S.StickyBox stickyId={0} className="sticky main-message">
          <p>
            온전히 빠져들게 하는
            <br />
            최고급 세라믹
          </p>
        </S.StickyBox>
        <S.StickyBox stickyId={0} className="sticky main-message">
          <p>주변 맛을 느끼게 해주는 주변 맛 허용 모드</p>
        </S.StickyBox>
        <S.StickyBox stickyId={0} className="sticky main-message">
          <p>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </S.StickyBox>
        <S.StickyBox stickyId={0} className="sticky ain-message">
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
        <S.StickyBox stickyId={1} className="sticky main-message">
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </S.StickyBox>
        <S.StickyBox stickyId={1} className="sticky desc-message">
          <p>
            편안함 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
            오롯이 당신과 음료만 남게 되죠.
          </p>
          <div className="pin" />
        </S.StickyBox>
        <S.StickyBox stickyId={1} className="sticky desc-message">
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
