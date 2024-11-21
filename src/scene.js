const size = (app, obj, width, height) => {
  if (typeof obj == "object") {
    obj.pivot.set(obj.width / 2, obj.height / 2);
    obj.width = width;
    obj.height = height;
  } else if (typeof obj == "array") {
    obj = width;
    obj = height;
  }
  app.stage.addChild(obj);
};

const position = (app, obj, x, y) => {
  if (typeof obj == "object") {
    obj.pivot.set(obj.width / 2, obj.height / 2);
    obj.x = x;
    obj.y = y;
  } else if (typeof obj == "array") {
    obj = x;
    obj = y;
  }
  app.stage.addChild(obj);
};

const configureContainer = (
  app,
  object,
  x,
  y,
  moveItem = false,
  visible = true
) => {
  position(app, object, x, y);
  if (moveItem) {
    object.interactive = true;
    object.buttonMode = true;
  }
  object.visible = visible;

  app.stage.addChild(object);
};

const configureObject = (
  app,
  object,
  width,
  height,
  x,
  y,
  moveItem = false,
  visible = true
) => {
  position(app, object, x, y);
  size(app, object, width, height);
  if (moveItem) {
    object.interactive = true;
    object.buttonMode = true;
  }
  object.visible = visible;

  app.stage.addChild(object);
};

const configureObject2 = (
  app,
  object,
  scale,
  x,
  y,
  moveItem = false,
  visible = true
) => {
  position(app, object, x, y);
  object.scale.set(scale);

  if (moveItem) {
    object.interactive = true;
    object.buttonMode = true;
  }
  object.visible = visible;

  app.stage.addChild(object);
};

function animaOpacity(obj) {
  obj.on("pointerover", () => {
    gsap.to(obj, { alpha: 1 });
  });
  obj.on("pointerout", () => {
    gsap.to(obj, { alpha: 0.5 });
  });
}

function efectTransition() {
  gsap.from("#animation", { opacity: 0 });
  gsap.to("#animation", { opacity: 1, delay: 1 });
  return;
}

function focusHover(array) {
  array.forEach((obj) => {
    if (obj.noButton) return;
    obj
      .on("pointerover", () => {
        gsap.to(obj, { pixi: { tint: "0xDAA520" } });
      })
      .on("pointerout", () => {
        gsap.to(obj, { pixi: { tint: "0xFFFFFF" } });
      });
  });
}

const createObjectsScene = (app, resources) => {
  let objectsScene = {};

  //--------------------------------------------------------------------------------
  const btnOpenStorage = new PIXI.Sprite(resources.doorOpen.texture);
  configureObject2(app, btnOpenStorage, 1, 400, 250, true, false);
  btnOpenStorage.alpha = 0.5;
  btnOpenStorage.zIndex = 10002;
  animaOpacity(btnOpenStorage);
  btnOpenStorage.on("pointerdown", sceneStorageOpen);
  objectsScene.btnOpenStorage = btnOpenStorage;

  function openStorage(direction = "") {
    if (direction === "tableFront") {
      btnOpenStorage.x = 1070;
      btnOpenStorage.y = 310;
      btnOpenStorage.visible = true;
      btnOpenStorage.scale.set(0.7);
    } else if (direction === "tableLeft") {
      btnOpenStorage.x = 350;
      btnOpenStorage.y = 250;
      btnOpenStorage.scale.set(0.5);
      btnOpenStorage.visible = true;
    } else if (direction === "TableBack") {
      btnOpenStorage.x = 0;
      btnOpenStorage.scale.set(0.3);
      btnOpenStorage.visible = false;
    } else if (direction === "tableRight") {
      btnOpenStorage.x = 340;
      btnOpenStorage.scale.set(0.4);
      btnOpenStorage.visible = false;
    } else if (direction === "tableRight") {
      btnOpenStorage.visible = false;
    } else {
      btnOpenStorage.visible = false;
    }
  }
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const btnOpenGabinet = new PIXI.Sprite(resources.doorOpen.texture);
  configureObject2(app, btnOpenGabinet, 1, 500, 270, true, false);
  btnOpenGabinet.alpha = 0.5;
  btnOpenGabinet.zIndex = 10002;
  animaOpacity(btnOpenGabinet);
  btnOpenGabinet.on("pointerdown", openGabinetInStorage);
  objectsScene.btnOpenGabinet = btnOpenGabinet;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgMiniMapa = new PIXI.Sprite(resources.bgMiniMapa.texture);
  configureObject2(app, bgMiniMapa, 0.8, 0, 0, false, true);
  objectsScene.bgMiniMapa = bgMiniMapa;

  const camMiniMapa = new PIXI.Sprite(resources.camMiniMapa.texture);
  configureObject2(app, camMiniMapa, 0.8, 0, 0, false, true);
  objectsScene.camMiniMapa = camMiniMapa;

  setInterval(() => {
    const time = gsap.timeline();
    time.to(camMiniMapa, { alpha: 0.5 });
    time.to(camMiniMapa, { alpha: 1, delay: 1 });
  }, 1010);

  const ctnMiniMapa = new PIXI.Container();
  configureContainer(app, ctnMiniMapa, 930, 30, true, true);
  ctnMiniMapa.on("pointerdown", zomMiniMapa);
  ctnMiniMapa.toggle = true;
  function zomMiniMapa() {
    const time = 0.4;
    ctnMiniMapa.toggle
      ? gsap.to(ctnMiniMapa, {
          pixi: { scale: 2, x: 400, y: 250 },
          duration: time,
        })
      : gsap.to(ctnMiniMapa, {
          pixi: { scale: 1, x: 930, y: 30 },
          duration: time,
        });
    ctnMiniMapa.toggle = !ctnMiniMapa.toggle;
  }
  ctnMiniMapa.addChild(bgMiniMapa, camMiniMapa);
  ctnMiniMapa.zIndex = 1000;

  ctnMiniMapa.changeEye = (direction) => {
    openStorage(direction);
    if (direction === "skeleton") {
      camMiniMapa.x = 10;
      camMiniMapa.y = -55;
      camMiniMapa.angle = -140;
    } else if (direction === "tableFront") {
      camMiniMapa.x = -40;
      camMiniMapa.y = -5;
      camMiniMapa.angle = 180;
    } else if (direction === "tableLeft") {
      camMiniMapa.x = -70;
      camMiniMapa.y = -15;
      camMiniMapa.angle = -90;
    } else if (direction === "TableBack") {
      camMiniMapa.x = -40;
      camMiniMapa.y = -30;
      camMiniMapa.angle = 0;
    } else if (direction === "tableRight") {
      camMiniMapa.x = -15;
      camMiniMapa.y = -15;
      camMiniMapa.angle = 90;
    } else if (direction === "tableFrontZom") {
      camMiniMapa.x = -55;
      camMiniMapa.y = -25;
      camMiniMapa.angle = 180;

      skipScene(() => {
        ctnSceneMain1.visible = true;
        ctnSceneMain2.visible = false;
        ctnSceneMain3.visible = false;
        ctnSceneMain4.visible = false;

        ctnSceneTable.visible = false;
        openStorage("noHide");

        ctnSceneStorage1.visible = false;
        ctnSceneStorage2.visible = false;

        btnOpenStorage.visible = false;
      }, "tableFront");
    } else if (direction === "storage") {
      camMiniMapa.x = 80;
      camMiniMapa.y = -42;
      camMiniMapa.angle = -90;
    } else {
      console.error("Mini mapa com valor invalido!");
      camMiniMapa.x = 0;
      camMiniMapa.y = 0;
      setInterval(() => {
        camMiniMapa.angle += 1;
      }, 10);
    }
    return;
  };
  ctnMiniMapa.changeEye("tableFront");
  objectsScene.ctnMiniMapa = ctnMiniMapa;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgWalkMap = new PIXI.Sprite(resources.bgWalkMap.texture);
  configureObject2(app, bgWalkMap, 0.8, 0, 0, false, true);
  bgWalkMap.tint = "0x6E6E6E";
  objectsScene.bgWalkMap = bgWalkMap;

  const tintButton = "0xc1c1c1";

  const btnWalkFront = new PIXI.Sprite(resources.btnWalk.texture);
  configureObject2(app, btnWalkFront, 0.8, 0, -92, true, true);
  btnWalkFront.placeHolde = "  Bancada";
  btnWalkFront.center = true;
  btnWalkFront.type = "button";
  btnWalkFront.tint = tintButton;
  objectsScene.btnWalkFront = btnWalkFront;

  const btnWalkLeft = new PIXI.Sprite(resources.btnWalk.texture);
  configureObject2(app, btnWalkLeft, 0.8, -100, -30, true, true);
  btnWalkLeft.placeHolde = " Esquerda";
  btnWalkLeft.type = "button";
  btnWalkLeft.tint = tintButton;
  btnWalkLeft.angle = -90;
  objectsScene.btnWalkLeft = btnWalkLeft;

  const btnWalkRight = new PIXI.Sprite(resources.btnWalk.texture);
  configureObject2(app, btnWalkRight, 0.8, 95, -30, true, true);
  btnWalkRight.placeHolde = "   Direita";
  btnWalkRight.type = "button";
  btnWalkRight.tint = tintButton;
  btnWalkRight.angle = 90;
  objectsScene.btnWalkRight = btnWalkRight;

  const styleWalk = new PIXI.TextStyle({
    fill: "#ffffff",
    fontSize: 21,
  });
  const textWalk = new PIXI.Text("navegação", styleWalk);
  configureObject2(app, textWalk, 1, 0, -23);
  textWalk.placeHolde = "navegação";
  objectsScene.textWalk = textWalk;

  const ctnWalkMap = new PIXI.Container();
  configureContainer(app, ctnWalkMap, 400, 600, false, true);
  ctnWalkMap.addChild(
    bgWalkMap,
    btnWalkFront,
    btnWalkLeft,
    btnWalkRight,
    textWalk
  );
  ctnWalkMap.children.forEach((obj) => {
    addEfectButton(obj);
  });

  function addEfectButton(obj) {
    const time = 0.3;
    obj
      .on("pointerover", () => {
        gsap.to(obj, {
          pixi: { scale: 1.1, tint: "0xffffff" },
          duration: time,
        });
        textWalk.text = obj.placeHolde;
      })
      .on("pointerout", () => {
        gsap.to(obj, {
          pixi: { scale: 0.8, tint: "0xc1c1c1" },
          duration: time,
        });
        textWalk.text = textWalk.placeHolde;
      })
      .on("pointerdown", () => {
        gsap.from([bgWalkMap, textWalk], {
          pixi: { scale: 0.6 },
          ease: "elastic",
        });
        gsap.to([bgWalkMap, textWalk], {
          pixi: { scale: 0.8 },
          duration: 0.1,
          delay: 1,
        });
      });
  }
  objectsScene.addEfectButton = addEfectButton;

  objectsScene.ctnWalkMap = ctnWalkMap;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const ctnHud = new PIXI.Container();
  configureContainer(app, ctnHud, 0, 0, false, true);
  ctnHud.addChild(ctnMiniMapa, ctnWalkMap);
  ctnHud.zIndex = 1000;
  objectsScene.ctnHud = ctnHud;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgSceneSkeleton = new PIXI.Sprite(resources.sceneSkeleton.texture);
  configureObject2(app, bgSceneSkeleton, 0.9, 0, 0);
  objectsScene.bgSceneSkeleton = bgSceneSkeleton;

  const skeletonHead = new PIXI.Sprite(resources.clickHand.texture);
  configureObject2(app, skeletonHead, 0.4, 120, -250, true, true);

  skeletonHead.on("pointerdown", () => {
    document.getElementById("myModal").style.display = "block";
  });

  const ctnSceneSkeleton = new PIXI.Container();
  configureContainer(app, ctnSceneSkeleton, 400, 250, false, false);
  ctnSceneSkeleton.addChild(bgSceneSkeleton, skeletonHead);
  objectsScene.ctnSceneSkeleton = ctnSceneSkeleton;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgSceneMain1 = new PIXI.Sprite(resources.main1.texture);
  configureObject2(app, bgSceneMain1, 0.9, 0, 0);
  objectsScene.bgSceneMain1 = bgSceneMain1;

  const acessSkeleton = new PIXI.Sprite(resources.clickHand.texture);
  configureObject2(app, acessSkeleton, 0.65, 450, 50, true, true);

  acessSkeleton.on("pointerdown", () => {
    efectTransition();
    ctnSceneMain1.visible = false;
    ctnSceneSkeleton.visible = true;

    ctnMiniMapa.changeEye("skeleton");

    skipScene(() => {
      ctnSceneMain1.visible = true;
      ctnSceneMain2.visible = false;
      ctnSceneMain3.visible = false;
      ctnSceneMain4.visible = false;

      ctnSceneTable.visible = false;
      openStorage("noHide");

      ctnSceneStorage1.visible = false;
      ctnSceneStorage2.visible = false;

      ctnSceneSkeleton.visible = false;

      btnOpenStorage.visible = false;
    }, "tableFront");
  });

  const ctnSceneMain1 = new PIXI.Container();
  configureContainer(app, ctnSceneMain1, 400, 250, false, true);
  ctnSceneMain1.addChild(bgSceneMain1, acessSkeleton);
  objectsScene.ctnSceneMain1 = ctnSceneMain1;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgSceneMain2 = new PIXI.Sprite(resources.main2.texture);
  configureObject2(app, bgSceneMain2, 0.9, 0, 0);
  objectsScene.bgSceneMain2 = bgSceneMain2;

  const ctnSceneMain2 = new PIXI.Container();
  configureContainer(app, ctnSceneMain2, 400, 250, false, false);
  ctnSceneMain2.addChild(bgSceneMain2);
  objectsScene.ctnSceneMain2 = ctnSceneMain2;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgSceneMain3 = new PIXI.Sprite(resources.main3.texture);
  configureObject2(app, bgSceneMain3, 0.9, 0, 0);
  objectsScene.bgSceneMain3 = bgSceneMain3;

  const ctnSceneMain3 = new PIXI.Container();
  configureContainer(app, ctnSceneMain3, 400, 250, false, false);
  ctnSceneMain3.addChild(bgSceneMain3);
  objectsScene.ctnSceneMain3 = ctnSceneMain3;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgSceneMain4 = new PIXI.Sprite(resources.main4.texture);
  configureObject2(app, bgSceneMain4, 0.9, 0, 0);
  objectsScene.bgSceneMain4 = bgSceneMain4;

  const ctnSceneMain4 = new PIXI.Container();
  configureContainer(app, ctnSceneMain4, 400, 250, false, false);
  ctnSceneMain4.addChild(bgSceneMain4);
  objectsScene.ctnSceneMain4 = ctnSceneMain4;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgSceneTable = new PIXI.Sprite(resources.table.texture);
  configureObject2(app, bgSceneTable, 0.9, 0, 0);
  bgSceneTable.noButton = true;
  objectsScene.bgSceneTable = bgSceneTable;

  const itenTableMicroscope = new PIXI.Sprite(
    resources.tableMicroscope.texture
  );
  configureObject2(app, itenTableMicroscope, 0.8, 0, 100, true, false);
  itenTableMicroscope.noButton = true;
  objectsScene.itenTableMicroscope = itenTableMicroscope;

  const itenTableBoxOfSlides = new PIXI.Sprite(
    resources.tableBoxOfSlides.texture
  );
  configureObject2(app, itenTableBoxOfSlides, 0.8, 400, 100, true, false);
  objectsScene.itenTableBoxOfSlides = itenTableBoxOfSlides;

  const ctnSceneTable = new PIXI.Container();
  configureContainer(app, ctnSceneTable, 400, 250, false, false);
  ctnSceneTable.addChild(
    bgSceneTable,
    itenTableMicroscope,
    itenTableBoxOfSlides
  );
  objectsScene.ctnSceneTable = ctnSceneTable;

  focusHover(ctnSceneTable.children);
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgSceneStorage1 = new PIXI.Sprite(resources.storage1.texture);
  configureObject2(app, bgSceneStorage1, 0.9, 0, 0);
  objectsScene.bgSceneStorage1 = bgSceneStorage1;

  const ctnSceneStorage1 = new PIXI.Container();
  configureContainer(app, ctnSceneStorage1, 400, 250, false, false);
  ctnSceneStorage1.addChild(bgSceneStorage1);
  objectsScene.ctnSceneStorage1 = ctnSceneStorage1;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const bgSceneStorage2 = new PIXI.Sprite(resources.storage2.texture);
  configureObject2(app, bgSceneStorage2, 0.9, 0, 0);
  bgSceneStorage2.noButton = true;
  objectsScene.bgSceneStorage2 = bgSceneStorage2;

  const itenStorageMicroscope = new PIXI.Sprite(
    resources.gabinetMicroscope.texture
  );
  configureObject2(app, itenStorageMicroscope, 0.9, -5, -122, true, true);
  itenStorageMicroscope.inTable = itenTableMicroscope;
  objectsScene.itenStorageMicroscope = itenStorageMicroscope;

  const itenStorageBoxOfSlides = new PIXI.Sprite(
    resources.gabinetBoxOfSlides.texture
  );
  configureObject2(app, itenStorageBoxOfSlides, 0.9, 126, -84, true, true);
  itenStorageBoxOfSlides.inTable = itenTableBoxOfSlides;
  objectsScene.itenStorageBoxOfSlides = itenStorageBoxOfSlides;

  const ctnSceneStorage2 = new PIXI.Container();
  configureContainer(app, ctnSceneStorage2, 400, 250, false, false);
  ctnSceneStorage2.addChild(
    bgSceneStorage2,
    itenStorageMicroscope,
    itenStorageBoxOfSlides
  );

  focusHover(ctnSceneStorage2.children);

  [itenStorageMicroscope, itenStorageBoxOfSlides].forEach((el) => {
    el.visible = true;
  });

  objectsScene.ctnSceneStorage2 = ctnSceneStorage2;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  let countScene = 1;
  const swapScene = (direction = "") => {
    if (direction === "left") {
      countScene += 1;
    } else if (direction === "right") {
      countScene -= 1;
    } else if (direction === "table") {
      ctnMiniMapa.changeEye("tableFrontZom");
      ctnSceneMain1.visible = false;
      ctnSceneMain2.visible = false;
      ctnSceneMain3.visible = false;
      ctnSceneMain4.visible = false;

      ctnSceneTable.visible = true;
      return;
    }

    if (countScene < 1) countScene = 4;

    efectTransition();
    switch (countScene) {
      case 1:
        ctnMiniMapa.changeEye("tableFront");
        ctnSceneMain1.visible = true;
        ctnSceneMain2.visible = false;
        ctnSceneMain3.visible = false;
        ctnSceneMain4.visible = false;
        break;
      case 2:
        ctnMiniMapa.changeEye("tableLeft");
        ctnSceneMain1.visible = false;
        ctnSceneMain2.visible = true;
        ctnSceneMain3.visible = false;
        ctnSceneMain4.visible = false;
        break;
      case 3:
        ctnMiniMapa.changeEye("TableBack");
        ctnSceneMain1.visible = false;
        ctnSceneMain2.visible = false;
        ctnSceneMain3.visible = true;
        ctnSceneMain4.visible = false;
        break;
      case 4:
        ctnMiniMapa.changeEye("tableRight");
        ctnSceneMain1.visible = false;
        ctnSceneMain2.visible = false;
        ctnSceneMain3.visible = false;
        ctnSceneMain4.visible = true;
        break;
      default:
        countScene = 1;
        ctnMiniMapa.changeEye("tableFront");
        ctnSceneMain1.visible = true;
        ctnSceneMain2.visible = false;
        ctnSceneMain3.visible = false;
        ctnSceneMain4.visible = false;
        break;
    }
  };
  objectsScene.swapScene = swapScene;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  function skipScene(fun, minimapa = "Outher") {
    ctnWalkMap.children.forEach((btn) => {
      if (btn.center && btn.type === "button") {
        btn.angle = -180;
        btn.placeHolde = "    Voltar";
        btn.off("pointerdown");

        addEfectButton(btn);

        btn.on("pointerdown", fun);
        btn.on("pointerdown", () => {
          efectTransition();
          ctnMiniMapa.changeEye(minimapa);
          btnOpenGabinet.visible = false;

          ctnWalkMap.children.forEach((btn) => {
            if (btn.center && btn.type === "button") {
              btn.angle = 0;
              btn.placeHolde = "  Bancada";
              btn.off("pointerdown");

              addEfectButton(btn);

              btn.on("pointerdown", () => {
                efectTransition();
                swapScene("table");
              });
            } else if (btn.type === "button") btn.visible = true;
          });
        });
      } else if (btn.type === "button") {
        btn.visible = false;
      }
    });
  }
  objectsScene.skipScene = skipScene;
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  function sceneStorageOpen() {
    efectTransition();

    ctnMiniMapa.changeEye("storage");
    btnOpenGabinet.visible = true;

    this.visible = false;

    skipScene(() => {
      ctnSceneMain1.visible = true;
      ctnSceneMain2.visible = false;
      ctnSceneMain3.visible = false;
      ctnSceneMain4.visible = false;

      ctnSceneStorage1.visible = false;
      ctnSceneStorage2.visible = false;
    }, "tableFront");

    ctnSceneMain1.visible = false;
    ctnSceneMain2.visible = false;
    ctnSceneMain3.visible = false;
    ctnSceneMain4.visible = false;

    ctnSceneStorage1.visible = true;
    ctnSceneStorage2.visible = false;
  }
  objectsScene.sceneStorageOpen = sceneStorageOpen;

  function openGabinetInStorage() {
    efectTransition();

    ctnMiniMapa.changeEye("storage");

    this.visible = false;

    ctnSceneMain1.visible = false;
    ctnSceneMain2.visible = false;
    ctnSceneMain3.visible = false;
    ctnSceneMain4.visible = false;

    ctnSceneStorage1.visible = false;
    ctnSceneStorage2.visible = true;
  }
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  // Funcionalidade de execução
  //--------------------------------------------------------------------------------
  btnWalkFront.on("pointerdown", () => swapScene("table"));
  btnWalkLeft.on("pointerdown", () => swapScene("left"));
  btnWalkRight.on("pointerdown", () => swapScene("right"));

  function openSceneTable() {
    ctnSceneMain1.visible = false;
    ctnSceneMain2.visible = false;
    ctnSceneMain3.visible = false;
    ctnSceneMain4.visible = false;

    ctnSceneTable.visible = true;

    ctnSceneStorage1.visible = false;
    ctnSceneStorage2.visible = false;

    btnOpenStorage.visible = false;

    ctnMiniMapa.changeEye("tableFrontZom");

    ctnWalkMap.children.forEach((btn) => {
      if (btn.center && btn.type === "button") {
        btn.angle = -180;
        btn.placeHolde = "  Armário";

        btn.off("pointerdown");
        btn.on("pointerdown", () => {
          efectTransition();
          openSceneGabinet();
        });
      } else if (btn.type === "button") {
        btn.visible = false;
      }
    });
  }

  function openSceneGabinet() {
    ctnSceneMain1.visible = false;
    ctnSceneMain2.visible = false;
    ctnSceneMain3.visible = false;
    ctnSceneMain4.visible = false;

    ctnSceneTable.visible = false;
    // openStorage("noHide");

    ctnSceneStorage1.visible = false;
    ctnSceneStorage2.visible = true;

    btnOpenStorage.visible = false;

    ctnMiniMapa.changeEye("storage");

    ctnWalkMap.children.forEach((btn) => {
      if (btn.center && btn.type === "button") {
        btn.angle = -180;
        btn.placeHolde = "  Bancada";

        btn.off("pointerdown");
        btn.on("pointerdown", () => {
          efectTransition();
          openSceneTable();
        });
      } else if (btn.type === "button") {
        btn.visible = false;
      }
    });
  }

  ctnSceneStorage2.children.forEach((obj) => {
    if (obj.noButton) return;
    obj.on("pointerdown", () => {
      gsap.to(obj, { visible: false, alpha: 0 });
      obj.selected = true;
      obj.inTable.visible = true;

      ctnWalkMap.children.forEach((btn) => {
        if (btn.center && btn.type === "button") {
          btn.angle = -180;
          btn.placeHolde = "  Bancada";

          btn.off("pointerdown");
          btn.on("pointerdown", () => {
            openSceneTable();
          });
        } else if (btn.type === "button") {
          btn.visible = false;
        }
      });
      //
    });
  });

  function onDragStart(event) {
    this.data = event.data;
    this.dragging = true;
  }

  function onDragEnd() {
    this.dragging = false;
    this.data = null;
  }

  function onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }

  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  const ctnMainScene = new PIXI.Container();
  configureContainer(app, ctnMainScene, 0, 0);
  ctnMainScene.addChild(
    ctnSceneSkeleton,
    ctnSceneMain1,
    ctnSceneMain2,
    ctnSceneMain3,
    ctnSceneMain4,
    ctnSceneTable,
    ctnSceneStorage1,
    ctnSceneStorage2
  );
  objectsScene.ctnMainScene = ctnMainScene;

  function removeScene() {
    gsap.to([ctnMainScene, ctnHud], { visible: false });
  }

  // funcionalidade de remover cenario
  itenTableMicroscope.on("pointerdown", removeScene);

  //config
  ctnHud.zIndex = 10001;
  ctnMainScene.zIndex = 10000;
  ctnHud.interactive = true;
  ctnMainScene.interactive = true;
  console.log("versão beta: 0.1.1");
  return objectsScene;
};

// export { options, createObjectsScene };
export { createObjectsScene };
