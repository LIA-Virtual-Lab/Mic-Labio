const setup = (options, onReady) => {
  const settings = {
    width: options.width,
    height: options.height,
    backgroundColor: options.backgroundColor,
    antialias: true,
  };

  let app;
  PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;

  // WebGL support condition
  if (PIXI.utils.isWebGLSupported()) {
    app = new PIXI.Application(settings);
  } else {
    settings.forceCanvas = true;
    app = new PIXI.Application(settings);
  }

  const fontsToLoad = [];
  options.fontFamilies.forEach((fontFamily) => {
    const font = new FontFaceObserver(fontFamily);
    fontsToLoad.push(font);
  });

  document.querySelector(options.targetSelector).appendChild(app.view);

  PixiPlugin.registerPIXI(PIXI);

  const pixiLoader = new PIXI.Loader();
  Object.keys(options.resources).forEach((id) => {
    pixiLoader.add(id, options.resources[id]);
  });

  Promise.all(fontsToLoad.map((font) => font.load())).then(() => {
    pixiLoader.load((_, pixiResources) => {
      onReady(app, pixiResources);
    });
  });

  // Ativação de zIndex
  app.stage.sortableChildren = true;

  // Ajusta a visualização de acordo com a proporção da tela e a fixa de 800px por 600px
  app.stage.x = window.screen.width / 2 - 400;
  app.stage.y = window.screen.height / 2 - 300;

  /* Storing user's device details in a variable*/
  let details = navigator.userAgent;

  /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i;

  /* Using test() method to search regexp in details
        it returns boolean value*/
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    console.log("Mobile");

    // const buttonFullScrenn = new PIXI.Sprite(
    //   "https://liaser.s3.sa-east-1.amazonaws.com/praticas/_general/tela%2Bcheia.png"
    // );
    // configureObject2(app, buttonFullScrenn, 0.5, 400, 200, true, true);
    // buttonFullScrenn.zIndex = 100;
    // buttonFullScrenn.on("pointerdown", async () => {
    //   if (
    //     !document.fullscreenElement && // alternative standard method
    //     !document.mozFullScreenElement &&
    //     !document.webkitFullscreenElement &&
    //     !document.msFullscreenElement
    //   ) {
    //     let flag = false;

    //     // current working methods
    //     if (document.documentElement.requestFullscreen) {
    //       await document.documentElement.requestFullscreen();
    //       flag = true;
    //     } else if (document.documentElement.msRequestFullscreen) {
    //       document.documentElement.msRequestFullscreen();
    //       flag = true;
    //     } else if (document.documentElement.mozRequestFullScreen) {
    //       document.documentElement.mozRequestFullScreen();
    //       flag = true;
    //     } else if (document.documentElement.webkitRequestFullscreen) {
    //       document.documentElement.webkitRequestFullscreen(
    //         Element.ALLOW_KEYBOARD_INPUT
    //       );
    //       flag = true;
    //     }

    //     if (flag) buttonFullScrenn.visible = false;
    //   }
    // });

    let value = 0.5;
    app.stage.scale.x = value;
    app.stage.scale.y = value;

    app.stage.x = window.screen.width / 2 - 200;
    app.stage.y = window.screen.height / 2 - 140;
  } else {
    console.log("Desktop");

    if (
      window.screen.width >= 1280 &&
      window.screen.height >= 720 &&
      window.screen.width < 1920 &&
      window.screen.height < 1080
    ) {
      let value = 0.95;
      app.stage.scale.x = value;
      app.stage.scale.y = value;

      app.stage.x = window.screen.width / 2 - 385;
      app.stage.y = window.screen.height / 2 - 260;
    } else if (
      window.screen.width >= 1920 &&
      window.screen.height >= 1080 &&
      window.screen.width < 2048
    ) {
      let value = 1.4;
      app.stage.scale.x = value;
      app.stage.scale.y = value;

      app.stage.x = window.screen.width / 2 - 560;
      app.stage.y = window.screen.height / 2 - 390;
    } else if (window.screen.width >= 2048 && window.screen.height >= 1080) {
      let value = 1.45;
      app.stage.scale.x = value;
      app.stage.scale.y = value;

      app.stage.x = window.screen.width / 2 - 600;
      app.stage.y = window.screen.height / 2 - 390;
    }
  }
};

export default setup;
