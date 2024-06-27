import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  mobileAndTabletCheck,
  BloomPlugin,
  Vector3,
  GammaCorrectionPlugin,
  MeshBasicMaterial2,
  Color,
  AssetImporter,
} from "webgi";
//import "./sass/main.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

//lenis.stop(); // dev perpuse
lenis.start();

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

async function setupViewer() {
  const viewer = new ViewerApp({
    canvas: document.getElementById("webgi-canvas") as HTMLCanvasElement,
    // isAntialiased: true,
  });

  const isMobile = mobileAndTabletCheck();
  // console.log(isMobile)

  const manager = await viewer.addPlugin(AssetManagerPlugin);
  const camera = viewer.scene.activeCamera;
  const position = camera.position;
  const target = camera.target;

  // Add plugins individually.
  await viewer.addPlugin(GBufferPlugin);
  await viewer.addPlugin(new ProgressivePlugin(32));
  await viewer.addPlugin(new TonemapPlugin(true));
  await viewer.addPlugin(GammaCorrectionPlugin);
  await viewer.addPlugin(SSRPlugin);
  await viewer.addPlugin(SSAOPlugin);
  await viewer.addPlugin(BloomPlugin);

  // Loader
  const importer = manager.importer as AssetImporter;

  // importer.addEventListener("onProgress", (ev) => {
  //   const progressRatio = ev.loaded / ev.total;
  //   // console.log(progressRatio)
  //   document
  //     .querySelector(".progress")
  //     ?.setAttribute("style", `transform: scaleX(${progressRatio})`);
  // });

  // importer.addEventListener("onLoad", (ev) => {
  //   gsap.to(".loader", {
  //     x: "100%",
  //     duration: 0.8,
  //     ease: "power4.inOut",
  //     delay: 1,
  //     onComplete: () => {
  //       document.body.style.overflowY = "auto";
  //       lenis.start();
  //     },
  //   });
  // });

  viewer.renderer.refreshPipeline();

  await manager.addFromPath("./assets/maple_leaf.glb");

  viewer.getPlugin(TonemapPlugin)!.config!.clipBackground = true; // in case its set to false in the glb

  viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true });

  window.scrollTo(0, 0);

  position.set(3.046914065, 10.8321257795, 2.883528059);
  target.set(-0.1225895548, -0.2527770652, 4.2156502974);

  function setupScrollanimation() {
    const tl = gsap.timeline();

    // FEATURE1 SECTION

    tl.to(position, {
      x: -4.7082081782,
      y: 10.6153455238,
      z: 0.2405896356,
      scrollTrigger: {
        trigger: ".feature--1",
        start: "top center",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
      onUpdate,
    })
      .to(target, {
        x: -1.8179975805,
        y: -0.0000021877,
        z: 3.936053016,
        scrollTrigger: {
          trigger: ".feature--1",
          start: "top center",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // FEATURE2 SECTION

      .to(position, {
        x: 3.046914065,
        y: 10.8321257795,
        z: 2.883528059,
        scrollTrigger: {
          trigger: ".feature--2",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
        onUpdate,
      })

      .to(target, {
        x: -0.1225895548,
        y: -0.2527770652,
        z: 4.2156502974,
        scrollTrigger: {
          trigger: ".feature--2",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
    // FEATURE3 SECTION
    tl.to(position, {
      x: -4.7082081782,
      y: 10.6153455238,
      z: 0.2405896356,
      scrollTrigger: {
        trigger: ".feature--3",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
      onUpdate,
    }).to(target, {
      x: -1.8179975805,
      y: -0.0000021877,
      z: 3.936053016,
      scrollTrigger: {
        trigger: ".feature--3",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });

    // FEATURE4 SECTION
    tl.to(position, {
      x: 3.046914065,
      y: 10.8321257795,
      z: 2.883528059,
      scrollTrigger: {
        trigger: ".feature--4",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
      onUpdate,
    }).to(target, {
      x: -0.1225895548,
      y: -0.2527770652,
      z: 4.2156502974,
      scrollTrigger: {
        trigger: ".feature--4",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });

    // FEATURE5 SECTION
    tl.to(position, {
      x: -4.7082081782,
      y: 10.6153455238,
      z: 0.2405896356,
      scrollTrigger: {
        trigger: ".feature--5",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
      onUpdate,
    }).to(target, {
      x: -1.8179975805,
      y: -0.0000021877,
      z: 3.936053016,
      scrollTrigger: {
        trigger: ".feature--5",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });
  }

  setupScrollanimation();

  // WEBGI UPDATE
  let needsUpdate = true;

  function onUpdate() {
    needsUpdate = true;
    // viewer.renderer.resetShadows()
    viewer.setDirty();
  }

  viewer.addEventListener("preFrame", () => {
    if (needsUpdate) {
      camera.positionTargetUpdated(true);
      needsUpdate = false;
    }
  });

  // SCROLL TO TOP
  document.querySelectorAll(".button--footer")?.forEach((item) => {
    item.addEventListener("click", () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  });
}

setupViewer();

//////////////////////////////////////////////////////////////
//////////////////////// Startup animation
const logoContainer = document.querySelector(".logo__container") as HTMLElement;
const logo = document.querySelector(".logo--1") as HTMLElement;
const logoName = document.querySelector(".logo--2") as HTMLElement;
const logoElectric = document.querySelector(".logo--3") as HTMLElement;
const logoElipse = document.querySelector(".logo--4") as HTMLElement;

const TL = gsap.timeline({
  defaults: {
    duration: 2,
    ease: "power4.out",
  },
});
TL.from(logoName, { autoAlpha: 0, y: 300, display: "block" })
  .from(logoElectric, { y: -200 }, "<")
  .from(logoContainer, {
    transform: "translate(0px, 0%)",
    scale: 0,
    height: "100vh",
  })
  .from(logoElipse, { autoAlpha: 0 }, "<")
  .from(".plant", { autoAlpha: 0 }, "-=0.7")
  .from(".hero", { autoAlpha: 0 }, "<")
  .to(".index", { backgroundSize: "cover", duration: 0 }, "<");

//////////////////////////////////////////////////////////////
//////////////////////// transition page animation

document.addEventListener("DOMContentLoaded", function () {
  const TL = gsap.timeline();
  TL.to(["body.home", "body.who"], {
    autoAlpha: 1,
    duration: 1,
    delay: 0.5,
  });
});

//////////////////////////////////////////////////////////////
//////////////////////// plants animation

document.addEventListener("DOMContentLoaded", () => {
  const controls = document.querySelectorAll(".plants__control");
  const slidesContainer = document.querySelector(
    ".plants__imgs_container"
  ) as HTMLElement;
  const slides = document.querySelectorAll(".plants__img_container");
  const slideHeight = slides[0].clientHeight;

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const slideIndex = parseInt(control.getAttribute("data-slide")!);
      const offset = -slideIndex * slideHeight;
      const TL = gsap.timeline();
      if (slideIndex === 1) {
        TL.to(slidesContainer, { y: offset, duration: 0.5 })
          .from([".plants__heading", ".plants__breif"], {
            autoAlpha: 0,
            y: 100,
          })
          .set(
            ".plants__heading",
            {
              textContent: "apple",
            },
            "-=.50"
          )
          .set(
            ".plants__breif",
            {
              textContent:
                "Apple plants are deciduous fruit trees known for their sweet.",
            },
            "-=.50"
          );
      } else if (slideIndex === 0) {
        TL.to(slidesContainer, { y: offset, duration: 0.5 })
          .from([".plants__heading", ".plants__breif"], {
            autoAlpha: 0,
            y: 100,
          })
          .set(
            ".plants__heading",
            {
              textContent: "cactus",
            },
            "-=.50"
          )
          .set(
            ".plants__breif",
            {
              textContent:
                "Cactus plants are resilient, spiky succulents adapted to arid environments.",
            },
            "-=.50"
          );
      } else {
        TL.to(slidesContainer, { y: offset, duration: 0.5 })
          .from([".plants__heading", ".plants__breif"], {
            autoAlpha: 0,
            y: 100,
          })
          .set(
            ".plants__heading",
            {
              textContent: "orange",
            },
            "-=.50"
          )
          .set(
            ".plants__breif",
            {
              textContent:
                "Orange plants are citrus trees that produce juicy, tangy fruit.",
            },
            "-=.50"
          );
      }
    });
  });
});

//////////////////////////////////////////////////////////////
//////////////////////// Toggle nav

const navIcon = document.querySelector(".nav__icon");
const navContainer = document.querySelector(".nav__contanier");
console.log(navIcon, navContainer);

navIcon?.addEventListener("click", function () {
  navContainer?.classList.toggle("show_nav");
  console.log("clicked");
});
