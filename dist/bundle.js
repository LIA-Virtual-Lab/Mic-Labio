/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigureText: () => (/* binding */ ConfigureText),
/* harmony export */   checkArea: () => (/* binding */ checkArea),
/* harmony export */   configureContainer: () => (/* binding */ configureContainer),
/* harmony export */   configureObject: () => (/* binding */ configureObject),
/* harmony export */   configureObject2: () => (/* binding */ configureObject2),
/* harmony export */   noBugClicking: () => (/* binding */ noBugClicking),
/* harmony export */   randomFloatNumber: () => (/* binding */ randomFloatNumber),
/* harmony export */   randomNumber: () => (/* binding */ randomNumber),
/* harmony export */   removeContainer: () => (/* binding */ removeContainer),
/* harmony export */   resetZoom: () => (/* binding */ resetZoom),
/* harmony export */   resizeScreen: () => (/* binding */ resizeScreen),
/* harmony export */   size: () => (/* binding */ size),
/* harmony export */   zoomIn: () => (/* binding */ zoomIn)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
//generates random numbers
var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var randomFloatNumber = function randomFloatNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
};
var size = function size(app, obj, width, height) {
  if (_typeof(obj) == "object") {
    obj.pivot.set(obj.width / 2, obj.height / 2);
    obj.width = width;
    obj.height = height;
  } else if (typeof obj == "array") {
    obj = width;
    obj = height;
  }
  app.stage.addChild(obj);
};
var position = function position(app, obj, x, y) {
  if (_typeof(obj) == "object") {
    obj.pivot.set(obj.width / 2, obj.height / 2);
    obj.x = x;
    obj.y = y;
  } else if (typeof obj == "array") {
    obj = x;
    obj = y;
  }
  app.stage.addChild(obj);
};
var configureContainer = function configureContainer(app, object, x, y) {
  var moveItem = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var visible = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  position(app, object, x, y);
  if (moveItem) {
    object.interactive = true;
    object.buttonMode = true;
  }
  object.visible = visible;
  app.stage.addChild(object);
};
var configureObject = function configureObject(app, object, width, height, x, y) {
  var moveItem = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var visible = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
  position(app, object, x, y);
  size(app, object, width, height);
  if (moveItem) {
    object.interactive = true;
    object.buttonMode = true;
  }
  object.visible = visible;
  app.stage.addChild(object);
};
var configureObject2 = function configureObject2(app, object, scale, x, y) {
  var moveItem = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var visible = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  position(app, object, x, y);
  object.scale.set(scale);
  if (moveItem) {
    object.interactive = true;
    object.buttonMode = true;
  }
  object.visible = visible;
  app.stage.addChild(object);
};
var removeContainer = function removeContainer(container, object) {
  app.stage.addChild(container.removeChildAt(container.getChildIndex(object)));
};
var ConfigureText = /*#__PURE__*/function (_PIXI$Text) {
  _inherits(ConfigureText, _PIXI$Text);
  var _super = _createSuper(ConfigureText);
  function ConfigureText(app, text, x, y) {
    var _this;
    var visible = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    _classCallCheck(this, ConfigureText);
    _this = _super.call(this, text);
    _this.x = x;
    _this.y = y;
    _this.visible = visible;
    _this.anchor.set(0.5);
    _this.style = {
      fontFamily: "Tahoma",
      fontSize: 14,
      lineHeight: 17,
      fill: 0xffffff,
      align: "left"
    };
    app.stage.addChild(_assertThisInitialized(_this));
    return _this;
  }
  return _createClass(ConfigureText);
}(PIXI.Text);
function resizeScreen(app, width, height) {
  app.renderer.resize(app.renderer.width * 1.25, app.renderer.height * 1.25);
  app.stage.scale.set(width / 800, height / 600);
}
function checkArea(object1, object2) {
  var bounds1 = object1.getBounds();
  var bounds2 = object2.getBounds();
  return bounds1.x < bounds2.x + bounds2.width && bounds1.x + bounds1.width > bounds2.x && bounds1.y < bounds2.y + bounds2.height && bounds1.y + bounds1.height > bounds2.y;
}

// Variáveis para guardar os valores originais da escala e do pivot
var originalScaleX, originalScaleY, originalPivotX, originalPivotY;
function zoomIn(app, zoomScale, x, y) {
  var zoomTimeline = gsap.timeline();

  // Salvando os valores originais
  originalScaleX = app.stage.scale.x;
  originalScaleY = app.stage.scale.y;
  originalPivotX = app.stage.pivot.x;
  originalPivotY = app.stage.pivot.y;
  var targetScaleX = app.renderer.width / app.view.width * zoomScale;
  var targetScaleY = app.renderer.height / app.view.height * zoomScale;
  zoomTimeline.to(app.stage.scale, {
    x: targetScaleX,
    y: targetScaleY,
    duration: 1.5
  }, 0);
  zoomTimeline.to(app.stage.pivot, {
    x: x,
    y: y,
    duration: 1.5
  }, 0);
  return zoomTimeline;
}
function resetZoom(app) {
  var resetTimeline = gsap.timeline();
  resetTimeline.to(app.stage.scale, {
    x: originalScaleX,
    y: originalScaleY,
    duration: 1.5
  }, 0);
  resetTimeline.to(app.stage.pivot, {
    x: originalPivotX,
    y: originalPivotY,
    duration: 1.5
  }, 0);
  return resetTimeline;
}
function noBugClicking(obj) {
  obj.interactive = false;
  setTimeout(function () {
    obj.interactive = true;
  }, 500);
}


/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createObjects: () => (/* binding */ createObjects),
/* harmony export */   options: () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var _texts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texts.json */ "./src/texts.json");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


var options = {
  width: window.screen.width,
  height: window.screen.height,
  backgroundColor: 0x7193bc,
  targetSelector: "#animation",
  fontFamilies: ["Roboto", "DS-DIGI"],
  resources: {
    buttonFullScrenn: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/_general/tela%2Bcheia.png",
    //mini mapa
    bgMiniMapa: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/mini-mapa.png",
    camMiniMapa: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_oficiais/mini_mapa/cam.png",
    // Navegaçao
    bgWalkMap: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_oficiais/walk_map/walk-map.png",
    btnWalk: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_oficiais/walk_map/walk-button.png",
    //cenario
    view1: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-bancada-principal.JPG",
    view2: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-lateral.JPG",
    view3: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-bancada-atras.JPG",
    view4: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-entrada.JPG",
    view1_2: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-bancada.png",
    //Cena armazém
    storage1: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/armario-fechadp.JPG",
    storage2: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/armario-aberto.JPG",
    //Cena esqueleto em foco
    sceneSkeleton: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/cena-esquele-foco.JPG",
    //icone
    doorOpen: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_oficiais/icone/opendoor.png",
    clickHand: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/clickhand.png",
    // itens da bancada
    tableMicroscope: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/Microscopio.png",
    tableBoxOfSlides: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/Caixa.png",
    // itens do armario
    gabinetMicroscope: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/Microscopio+2.png",
    gabinetBoxOfSlides: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/Caixa+2.png",
    hitArea: "https://lia-labv.s3.sa-east-1.amazonaws.com/praticas/p04-dimensao-tijolo/hitbox-requa.png",
    seta_esquerda: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_temp/seta_esquerda.png",
    seta_direita: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_temp/seta_direita.png",
    //tela do microscopio
    tela_preta: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/tela_preta.png",
    revolver: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/revolver.png",
    painel_bg: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/painel_bgtexture4.png",
    roda_menor: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/roda_menor.png",
    roda_maior: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/roda_maior.png",
    btn_retroceder: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/btn_retroceder.png",
    btn_gaveta: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/btn_gaveta.png",
    gaveta_laminas: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/gaveta_laminas.png",
    lamina: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/lamina.png",
    //controles
    btn04x: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/btn04x.png",
    btn10x: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/btn10x.png",
    btn40x: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/btn40x.png",
    btn100x: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/btn100x.png",
    seta_luz: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/setinha.png",
    up_verde: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/up_verde.png",
    right_verde: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/right_verde.png",
    down_verde: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/down_verde.png",
    left_verde: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/left_verde.png",
    // parte para efeituar a troca de  laminas no microscopio
    bg_select_sample: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/bg_box_sample.png",
    btn_posicionar: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/botao_escolher_l%C3%A2minas.png",
    btn_scroll: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/scroll.png",
    //Adicionar e retirar imagens das laminas 

    imagem_lamina_coracao: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/LaminasFinal/Labio+HB/Untitled3-gigapixel-low_res-scale-4_00x.png",
    imagem_lamina_pulmonar: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/LaminasFinal/Labio+HB/Untitled2-gigapixel-art-scale-2_00x.png",
    imagem_lamina_arterioscieros: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/LaminasFinal/Labio+HB/Untitled1-gigapixel-low_res-scale-4_00x.png"
  }
};

// load openning resources
if (introOptions) {
  Object.keys(introOptions.resources).forEach(function (id) {
    options.resources[id] = introOptions.resources[id];
  });
}

// load footer resources
if (footerOptions) {
  Object.keys(footerOptions.resources).forEach(function (id) {
    options.resources[id] = footerOptions.resources[id];
  });
}
var createObjects = function createObjects(app, resources) {
  var allObjects = {};

  //CENARIOS DE FUNDO
  //utencilios bancada vazia -- tela inicial
  var view1 = new PIXI.Sprite(resources.view1.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, view1, 0.9, 400, 250);
  allObjects.view1 = view1;
  //tv e prateleira cheia -- tela nav pra cima
  var view1_2 = new PIXI.Sprite(resources.view1_2.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, view1_2, 0.9, 400, 250);
  allObjects.view1_2 = view1_2;
  //zoom esqueleto
  var view1_3 = new PIXI.Sprite(resources.sceneSkeleton.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, view1_3, 0.9, 400, 250);
  allObjects.view1_3 = view1_3;
  //bancada lateral -- tela nav direita
  var view2 = new PIXI.Sprite(resources.view2.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, view2, 0.9, 400, 250);
  allObjects.view2 = view2;
  //sala lateral -- tela nav esquerda
  var view3 = new PIXI.Sprite(resources.view3.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, view3, 0.9, 400, 250);
  allObjects.view3 = view3;
  //bancada com items -- tela nav duas pra esquerda ou duas pra direita
  var view4 = new PIXI.Sprite(resources.view4.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, view4, 0.9, 400, 250);
  allObjects.view4 = view4;

  //armario com porta fechada
  var view_storage = new PIXI.Sprite(resources.storage1.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, view_storage, 0.9, 400, 250);
  allObjects.view_storage = view_storage;

  //armario com porta aberta
  var view_storage2 = new PIXI.Sprite(resources.storage2.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, view_storage2, 0.9, 400, 250, false);
  allObjects.view_storage2 = view_storage2;

  //containers de cada sala ---- cada um eh composto pelo fundo e seus objetos
  var view1_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, view1_container, 0, 0, false, true);
  view1_container.addChild(view1);
  allObjects.view1_container = view1_container;
  var view2_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, view2_container, 0, 0, false, true);
  view2_container.addChild(view2);
  allObjects.view2_container = view2_container;
  view2_container.visible = false;
  var view3_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, view3_container, 0, 0, false, true);
  view3_container.addChild(view3);
  allObjects.view3_container = view3_container;
  view3_container.visible = false;
  var view4_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, view4_container, 0, 0, false, true);
  view4_container.addChild(view4);
  allObjects.view4_container = view4_container;
  view4_container.visible = false;
  var view12_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, view12_container, 0, 0, false, true);
  view12_container.addChild(view1_2);
  allObjects.view12_container = view12_container;
  view12_container.visible = false;
  var view13_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, view13_container, 0, 0, false, true);
  view13_container.addChild(view1_3);
  allObjects.view13_container = view13_container;
  view13_container.visible = false;
  var view_storage_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, view_storage_container, 0, 0, false, true);
  view_storage_container.addChild(view_storage);
  allObjects.view_storage_container = view_storage_container;
  view_storage_container.visible = false;
  // view_storage_container.zIndex = 10;

  var view_storage2_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, view_storage2_container, 0, 0, false, true);
  view_storage2_container.addChild(view_storage2);
  allObjects.view_storage2_container = view_storage2_container;
  view_storage2_container.visible = false;
  // view_storage2_container.zIndex = 10;

  var btnOpenStorage = new PIXI.Sprite(resources.doorOpen.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btnOpenStorage, 0.8, 1070, 310, true, true);
  btnOpenStorage.alpha = 0.5;
  allObjects.btnOpenStorage = btnOpenStorage;
  btnOpenStorage.zIndex = 100;
  var skeletonHead = new PIXI.Sprite(resources.clickHand.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, skeletonHead, 0.8, 850, 300, true, true);
  allObjects.skeletonHead = skeletonHead;
  skeletonHead.zIndex = 100;

  //container com todas as salas para controlar navegacao
  var rooms_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, rooms_container, 0, 0, false, true);
  rooms_container.addChild(view1_container, view2_container, view3_container, view4_container, view12_container, view13_container, view_storage_container, view_storage2_container);
  allObjects.rooms_container = rooms_container;

  //minimapa
  var bgMiniMapa = new PIXI.Sprite(resources.bgMiniMapa.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, bgMiniMapa, 0.8, 0, 0, false, true);
  allObjects.bgMiniMapa = bgMiniMapa;
  var camMiniMapa = new PIXI.Sprite(resources.camMiniMapa.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, camMiniMapa, 0.8, -40, 0, false, true);
  allObjects.camMiniMapa = camMiniMapa;
  camMiniMapa.angle = 180;
  var ctnMiniMapa = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, ctnMiniMapa, 930, 30, true, true);
  ctnMiniMapa.addChild(bgMiniMapa, camMiniMapa);
  allObjects.ctnMiniMapa = ctnMiniMapa;
  // rooms_container.addChild(ctnMiniMapa);

  //NAVEGAÇÃO
  //--------------------------------------------------------------------------------
  var bgWalkMap = new PIXI.Sprite(resources.bgWalkMap.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, bgWalkMap, 0.8, 0, 0, false, true);
  bgWalkMap.tint = "0x6E6E6E";
  allObjects.bgWalkMap = bgWalkMap;
  var tintButton = "0xc1c1c1";
  var btnWalkFront = new PIXI.Sprite(resources.btnWalk.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btnWalkFront, 0.8, 0, -92, true, true);
  btnWalkFront.placeHolder = "  Bancada";
  btnWalkFront.center = true;
  btnWalkFront.type = "button";
  btnWalkFront.tint = tintButton;
  allObjects.btnWalkFront = btnWalkFront;
  var btnWalkLeft = new PIXI.Sprite(resources.btnWalk.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btnWalkLeft, 0.8, -100, -30, true, true);
  btnWalkLeft.placeHolder = " Esquerda";
  btnWalkLeft.type = "button";
  btnWalkLeft.tint = tintButton;
  btnWalkLeft.angle = -90;
  allObjects.btnWalkLeft = btnWalkLeft;
  var btnWalkRight = new PIXI.Sprite(resources.btnWalk.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btnWalkRight, 0.8, 95, -30, true, true);
  btnWalkRight.placeHolder = "   Direita";
  btnWalkRight.type = "button";
  btnWalkRight.tint = tintButton;
  btnWalkRight.angle = 90;
  allObjects.btnWalkRight = btnWalkRight;
  var styleWalk = new PIXI.TextStyle({
    fill: "#ffffff",
    fontSize: 21
  });
  var textWalk = new PIXI.Text("navegação", styleWalk);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, textWalk, 1, 0, -23);
  textWalk.placeHolder = "navegação";
  allObjects.textWalk = textWalk;
  var navegation_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, navegation_container, 400, 600, false, true);
  navegation_container.addChild(bgWalkMap, btnWalkFront, btnWalkLeft, btnWalkRight, textWalk);
  allObjects.navegation_container = navegation_container;
  navegation_container.zIndex = 1000;

  //hitarea do view12 para ao ocorrer pointerover sumir o alerta
  var hitarea = PIXI.Sprite.from(resources.hitArea.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject)(app, hitarea, 1200, 600, 400, 250);
  allObjects.hitarea = hitarea;
  hitarea.alpha = 0;
  hitarea.interactive = true;

  //objetos da mesa
  var microscope = new PIXI.Sprite(resources.tableMicroscope.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, microscope, 0.8, 400, 300, true, false);
  allObjects.microscope = microscope;
  microscope.hitArea = new PIXI.Rectangle(140, 50, 280, 600);
  var box_slides = new PIXI.Sprite(resources.tableBoxOfSlides.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, box_slides, 0.8, 800, 350, true, false);
  allObjects.box_slides = box_slides;
  view12_container.addChild(hitarea, microscope, box_slides);

  //itens armario
  var storageMicroscope = new PIXI.Sprite(resources.gabinetMicroscope.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, storageMicroscope, 0.9, 395, 125, true, true);
  allObjects.storageMicroscope = storageMicroscope;
  var storageBoxOfSlides = new PIXI.Sprite(resources.gabinetBoxOfSlides.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, storageBoxOfSlides, 0.9, 530, 170, true, true);
  allObjects.storageBoxOfSlides = storageBoxOfSlides;
  view_storage2_container.addChild(storageMicroscope, storageBoxOfSlides);

  // //setas do cranio
  // const seta_esquerda = new PIXI.Sprite(resources.seta_esquerda.texture);
  // configureObject2(app, seta_esquerda, 0.4, 130, 170, true, false);
  // allObjects.seta_esquerda = seta_esquerda;
  // seta_esquerda.zIndex = 200000;

  // const seta_direita = new PIXI.Sprite(resources.seta_direita.texture);
  // configureObject2(app, seta_direita, 0.4, 730, 170, true, false);
  // allObjects.seta_direita = seta_direita;

  //ABAIXO SAO OS OBJETOS DA TABELA DE SELEÇAO DE LAMINAS SARA (É A TELINHA QUE APARECE QUANDO CLICA NA CAIXA DE LAMINAS)
  //Aq serão criados os elementos por exemplo(nome,tipo, setinha pra baixo, e btn de posicionar) de cada lamina

  //Background cinza claro
  var bg_select_sample = new PIXI.Sprite(resources.bg_select_sample.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, bg_select_sample, 0.25, 0, 270, false, true);
  bg_select_sample.zIndex = 1000;
  bg_select_sample.alpha = 0.95;
  bg_select_sample.bg = true;

  //fonte dos textinhos
  var box_slades_style = {
    fontFamily: "Arial",
    fontSize: 22,
    fill: 0x000000
  };

  //botao de close "x" SARA
  var btn_x = new PIXI.Text("X", box_slades_style);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn_x, 1, 160, 100, true, true);
  allObjects.btn_x = btn_x;
  btn_x.bg = true;
  btn_x.style.fontSize = 30;

  //aqui é a segunda coluna
  // nomes

  //1
  var nome1 = new PIXI.Text("Labio1", box_slades_style);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, nome1, 1, 0, 220, false, true);
  allObjects.nome1 = nome1;
  nome1.bg = false;

  //2
  var nome2 = new PIXI.Text("Labio2", box_slades_style);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, nome2, 1, 0, 270, false, true);
  allObjects.nome2 = nome2;
  nome2.bg = false;

  //3
  var nome3 = new PIXI.Text("Labio3", box_slades_style); //escrito errado
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, nome3, 1, 0, 320, false, true); //ai no caso tu vai acrescentdo de 50 em 50 pra ir alinhando os nomes na tabelinha
  allObjects.nome3 = nome3;
  nome3.bg = false;

  //verificar btn_posicionar para ver se estao setados os novos botoes

  //botoes para selecionar a lamina sara, acefala, essa é o botao posicionar
  //botao de posicionar 1
  var btn_posicionar = new PIXI.Sprite(resources.btn_posicionar.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn_posicionar, 0.65, 0, 220, true, true);
  allObjects.btn_posicionar = btn_posicionar;
  btn_posicionar.bg = false;

  //botao de posicionar 2
  var btn_posicionar2 = new PIXI.Sprite(resources.btn_posicionar.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn_posicionar2, 0.65, 0, 270, true, true);
  allObjects.btn_posicionar2 = btn_posicionar2;
  ;
  btn_posicionar2.bg = false;
  var btn_posicionar3 = new PIXI.Sprite(resources.btn_posicionar.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn_posicionar3, 0.65, 0, 320, true, true);
  allObjects.btn_posicionar3 = btn_posicionar3;
  btn_posicionar3.bg = false;
  var btn_scroll = new PIXI.Sprite(resources.btn_scroll.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn_scroll, 0.8, 175, 220, true, true);
  allObjects.btn_scroll = btn_scroll;
  btn_scroll.bg = true;

  // AQUI É O CONTAINER COM TODOS OS OBJETOS DA TELINHA DA CAIXA DE LAMINAS SARA
  // Adicionar aqui todos os btns de poscionar, nomes, tipos, etc
  var box_slides_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureContainer)(app, box_slides_container, 0, -30, false); //qnd completar td adicianar um false após o false para ele apenas aparecer qnd clica na caixinha
  box_slides_container.addChild(bg_select_sample, btn_scroll, btn_x, btn_posicionar, btn_posicionar2, btn_posicionar3, nome1, nome2, nome3);
  allObjects.box_slides_container = box_slides_container;
  box_slides_container.zIndex = 1000000;
  window.addEventListener("wheel", function (event) {
    box_slides_container.emit("scroll", event);
  });
  box_slides_container.interactive = true;
  box_slides_container.on("scroll", function (event) {
    var scroll_dir = event.deltaY;
    if (scroll_dir > 0) {
      console.log('descendo');
    }
    if (scroll_dir < 0) {
      console.log('subindo');
    }
  });

  //Microscópio
  //--------------------------------------------------------------------------------

  //1
  var imagem_lamina_coracao = new PIXI.Sprite(resources.imagem_lamina_coracao.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, imagem_lamina_coracao, 0.09, 410, 250, false, false);
  imagem_lamina_coracao.zIndex = 1;
  allObjects.imagem_lamina_coracao = imagem_lamina_coracao;
  imagem_lamina_coracao.interactive = true;
  imagem_lamina_coracao.type = "fundo";
  imagem_lamina_coracao.initialX = 410;
  imagem_lamina_coracao.initialY = 250;

  //2
  var imagem_lamina_pulmonar = new PIXI.Sprite(resources.imagem_lamina_pulmonar.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, imagem_lamina_pulmonar, 0.09, 410, 300, false, false);
  imagem_lamina_pulmonar.zIndex = 1;
  allObjects.imagem_lamina_pulmonar = imagem_lamina_pulmonar;
  imagem_lamina_pulmonar.interactive = true;
  imagem_lamina_pulmonar.type = "fundo";
  imagem_lamina_pulmonar.initialX = 410;
  imagem_lamina_pulmonar.initialY = 300;

  //3
  var imagem_lamina_arterioscieros = new PIXI.Sprite(resources.imagem_lamina_arterioscieros.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, imagem_lamina_arterioscieros, 0.09, 410, 300, false, false);
  imagem_lamina_arterioscieros.zIndex = 1;
  allObjects.imagem_lamina_arterioscieros = imagem_lamina_arterioscieros;
  imagem_lamina_arterioscieros.interactive = true;
  imagem_lamina_arterioscieros.type = "fundo";
  imagem_lamina_arterioscieros.initialX = 410;
  imagem_lamina_arterioscieros.initialY = 300;

  // NAO MUDAR NADA ABAIXO SARA
  //BACKGROUNDS
  //img preta sobrepondo a lamina para criar o efeito de luz
  var tela_preta = new PIXI.Sprite(resources.tela_preta.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, tela_preta, 1, 410, 250, false);
  tela_preta.zIndex = 1;
  tela_preta.alpha = 1;
  allObjects.tela_preta = tela_preta;
  tela_preta.type = "fundo";

  //objeto espoleta
  var revolver = new PIXI.Sprite(resources.revolver.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, revolver, 1, 410, -30, false);
  revolver.zIndex = 1;
  allObjects.revolver = revolver;
  revolver.interactive = true;
  revolver.type = "fundo";

  //painel background
  var painel = new PIXI.Sprite(resources.painel_bg.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, painel, 1, 400, 240);
  painel.zIndex = 1;
  allObjects.painel = painel;
  painel.type = "fundo";

  //OBJETOS
  //roda menor
  var roda_menor = new PIXI.Sprite(resources.roda_menor.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, roda_menor, 1, 405, 250, true);
  roda_menor.zIndex = 1;
  allObjects.roda_menor = roda_menor;
  roda_menor.hitArea = new PIXI.Circle(240, 240, roda_menor.width / 2);
  //roda maior
  var roda_maior = new PIXI.Sprite(resources.roda_maior.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, roda_maior, 1, 405, 250, true);
  roda_maior.zIndex = 1;
  allObjects.roda_maior = roda_maior;
  roda_maior.hitArea = new PIXI.Circle(305, 305, roda_maior.width / 2);

  //botoes
  var btn_retroceder = new PIXI.Sprite(resources.btn_retroceder.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn_retroceder, 1, 1000, -35, true);
  btn_retroceder.zIndex = 1;
  allObjects.btn_retroceder = btn_retroceder;

  //ELEMENTOS DO PAINEL DE CONTROLE
  //botoes vermelho, amarelo, azul e cinza
  var btn04x = new PIXI.Sprite(resources.btn04x.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn04x, 1, -150, 60, true);
  btn04x.zIndex = 1;
  allObjects.btn04x = btn04x;
  btn04x.hitArea = new PIXI.Circle(35, 40, btn04x.width / 2);
  var btn10x = new PIXI.Sprite(resources.btn10x.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn10x, 1, -70, 60, true);
  btn10x.zIndex = 1;
  allObjects.btn10x = btn10x;
  btn10x.hitArea = new PIXI.Circle(35, 40, btn10x.width / 2);
  var btn40x = new PIXI.Sprite(resources.btn40x.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn40x, 1, -150, 140, true);
  btn40x.zIndex = 1;
  allObjects.btn40x = btn40x;
  btn40x.hitArea = new PIXI.Circle(35, 40, btn40x.width / 2);
  var btn100x = new PIXI.Sprite(resources.btn100x.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, btn100x, 1, -70, 140, true);
  btn100x.zIndex = 1;
  allObjects.btn100x = btn100x;
  btn100x.hitArea = new PIXI.Circle(35, 40, btn100x.width / 2);

  //setinha vermelha do controle de luz
  var seta_luz = new PIXI.Sprite(resources.seta_luz.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, seta_luz, 0.3, -195, 532, true);
  seta_luz.zIndex = 1;
  allObjects.seta_luz = seta_luz;

  //setas verdes
  var up_verde = new PIXI.Sprite(resources.up_verde.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, up_verde, 1, -115, 290, true);
  up_verde.zIndex = 1;
  allObjects.up_verde = up_verde;
  // Defina os pontos do quadrilátero
  var hitAreaPoints = [-10, 10,
  // Ponto superior esquerdo
  120, 10,
  // Ponto superior direito
  50, 80,
  // Ponto inferior direito
  50, 80 // Ponto inferior esquerdo
  ];

  var hitArea = new PIXI.Polygon(hitAreaPoints);
  // Atribua a área de colisão personalizada ao sprite
  up_verde.hitArea = hitArea;
  var right_verde = new PIXI.Sprite(resources.right_verde.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, right_verde, 1, -64, 341, true);
  right_verde.zIndex = 1;
  allObjects.right_verde = right_verde;
  var rightPoints = [0, 40,
  // Ponto superior esquerdo
  60, 0,
  // Ponto superior direito
  60, 120,
  // Ponto inferior direito
  0, 70 // Ponto inferior esquerdo
  ];

  var right_hitarea = new PIXI.Polygon(rightPoints);
  right_verde.hitArea = right_hitarea;
  var down_verde = new PIXI.Sprite(resources.down_verde.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, down_verde, 1, -114, 392, true);
  down_verde.zIndex = 1;
  allObjects.down_verde = down_verde;
  var downPoints = [20, 10,
  // Ponto superior esquerdo
  80, 10,
  // Ponto superior direito
  120, 70,
  // Ponto inferior direito
  0, 70 // Ponto inferior esquerdo
  ];

  var down_hitarea = new PIXI.Polygon(downPoints);
  down_verde.hitArea = down_hitarea;
  var left_verde = new PIXI.Sprite(resources.left_verde.texture);
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, left_verde, 1, -165, 342, true);
  left_verde.zIndex = 1;
  allObjects.left_verde = left_verde;
  var leftPoints = [0, 0,
  // Ponto superior esquerdo
  60, 40,
  // Ponto superior direito
  60, 80,
  // Ponto inferior direito
  20, 120 // Ponto inferior esquerdo
  ];

  var left_hitarea = new PIXI.Polygon(leftPoints);
  left_verde.hitArea = left_hitarea;

  //barra a interacao com o centro da lente 
  var zonaInativaCirculo = new PIXI.Graphics();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject2)(app, zonaInativaCirculo, 1, 0, 0, false, true);
  zonaInativaCirculo.beginFill(0xffffff, 0.01); // Cor vermelha transparente
  zonaInativaCirculo.drawCircle(405, 250, 180); // Círculo com raio de 50 pixels
  zonaInativaCirculo.endFill();
  zonaInativaCirculo.zIndex = 10;
  zonaInativaCirculo.interactive = true;
  allObjects.zonaInativaCirculo = zonaInativaCirculo;
  var simulador_container = new PIXI.Container();
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.configureObject)(app, simulador_container, 800, 600, 0, 0);
  simulador_container.addChild(
  //ADICIONAR OS NOMES DAS LAMINAS AQUI SARA

  imagem_lamina_coracao, imagem_lamina_pulmonar, imagem_lamina_arterioscieros, tela_preta, revolver, painel, btn_retroceder, roda_maior, roda_menor, btn04x, btn10x, btn40x, btn100x, seta_luz, up_verde, right_verde, down_verde, left_verde, zonaInativaCirculo);
  allObjects.simulador_container = simulador_container;
  simulador_container.alpha = 0;
  simulador_container.visible = false;
  return allObjects;
};


/***/ }),

/***/ "./src/setup-v3.js":
/*!*************************!*\
  !*** ./src/setup-v3.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var setup = function setup(options, onReady) {
  var settings = {
    width: options.width,
    height: options.height,
    backgroundColor: options.backgroundColor,
    antialias: true
  };
  var app;
  PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;

  // WebGL support condition
  if (PIXI.utils.isWebGLSupported()) {
    app = new PIXI.Application(settings);
  } else {
    settings.forceCanvas = true;
    app = new PIXI.Application(settings);
  }
  var fontsToLoad = [];
  options.fontFamilies.forEach(function (fontFamily) {
    var font = new FontFaceObserver(fontFamily);
    fontsToLoad.push(font);
  });
  document.querySelector(options.targetSelector).appendChild(app.view);
  PixiPlugin.registerPIXI(PIXI);
  var pixiLoader = new PIXI.Loader();
  Object.keys(options.resources).forEach(function (id) {
    pixiLoader.add(id, options.resources[id]);
  });
  Promise.all(fontsToLoad.map(function (font) {
    return font.load();
  })).then(function () {
    pixiLoader.load(function (_, pixiResources) {
      onReady(app, pixiResources);
    });
  });

  // Ativação de zIndex
  app.stage.sortableChildren = true;

  // Ajusta a visualização de acordo com a proporção da tela e a fixa de 800px por 600px
  app.stage.x = window.screen.width / 2 - 400;
  app.stage.y = window.screen.height / 2 - 300;

  /* Storing user's device details in a variable*/
  var details = navigator.userAgent;

  /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
  var regexp = /android|iphone|kindle|ipad/i;

  /* Using test() method to search regexp in details
        it returns boolean value*/
  var isMobileDevice = regexp.test(details);
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

    var value = 0.5;
    app.stage.scale.x = value;
    app.stage.scale.y = value;
    app.stage.x = window.screen.width / 2 - 200;
    app.stage.y = window.screen.height / 2 - 140;
  } else {
    console.log("Desktop");
    if (window.screen.width >= 1280 && window.screen.height >= 720 && window.screen.width < 1920 && window.screen.height < 1080) {
      var _value = 0.95;
      app.stage.scale.x = _value;
      app.stage.scale.y = _value;
      app.stage.x = window.screen.width / 2 - 385;
      app.stage.y = window.screen.height / 2 - 260;
    } else if (window.screen.width >= 1920 && window.screen.height >= 1080 && window.screen.width < 2048) {
      var _value2 = 1.4;
      app.stage.scale.x = _value2;
      app.stage.scale.y = _value2;
      app.stage.x = window.screen.width / 2 - 560;
      app.stage.y = window.screen.height / 2 - 390;
    } else if (window.screen.width >= 2048 && window.screen.height >= 1080) {
      var _value3 = 1.45;
      app.stage.scale.x = _value3;
      app.stage.scale.y = _value3;
      app.stage.x = window.screen.width / 2 - 600;
      app.stage.y = window.screen.height / 2 - 390;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);

/***/ }),

/***/ "./src/texts.json":
/*!************************!*\
  !*** ./src/texts.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"footer":{"title":"Cenário-Engenharia","version":3,"year":2023,"collaborators":{"Desenvolvedores":"Angélica Martiniano","Consultoria":"John Doe","designer":"Cleison Ferreira","Direção":"Heloisa Pimentel, Adilson Da Silva"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_v3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-v3 */ "./src/setup-v3.js");
/* harmony import */ var _texts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texts.json */ "./src/texts.json");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
var _excluded = ["navegation_container", "textWalk", "bgWalkMap", "btnWalkFront", "btnWalkRight", "btnWalkLeft", "view1_container", "view2_container", "view3_container", "view4_container", "view12_container", "view13_container", "view_storage_container", "view_storage2_container", "ctnMiniMapa", "simulador_container", "imagem_lamina_coracao", "imagem_lamina_pulmonar", "imagem_lamina_arterioscieros", "tela_preta", "revolver", "roda_menor", "roda_maior", "btn_retroceder", "btn04x", "btn10x", "btn40x", "btn100x", "seta_luz", "up_verde", "right_verde", "down_verde", "left_verde"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




// import { createObjectsScene } from "./scene";

//MAIN
(function main() {
  (0,_setup_v3__WEBPACK_IMPORTED_MODULE_0__["default"])(_objects__WEBPACK_IMPORTED_MODULE_2__.options, function (app, resources) {
    gsap.from("#animation", {
      opacity: 0,
      scale: 0.5
    });

    // const {ctnMainScene, ctnHud} = createObjectsScene(app, resources);

    /* CREATE ITEMS SCOPE */
    var allObjects = (0,_objects__WEBPACK_IMPORTED_MODULE_2__.createObjects)(app, resources);
    var navegation_container = allObjects.navegation_container,
      textWalk = allObjects.textWalk,
      bgWalkMap = allObjects.bgWalkMap,
      btnWalkFront = allObjects.btnWalkFront,
      btnWalkRight = allObjects.btnWalkRight,
      btnWalkLeft = allObjects.btnWalkLeft,
      view1_container = allObjects.view1_container,
      view2_container = allObjects.view2_container,
      view3_container = allObjects.view3_container,
      view4_container = allObjects.view4_container,
      view12_container = allObjects.view12_container,
      view13_container = allObjects.view13_container,
      view_storage_container = allObjects.view_storage_container,
      view_storage2_container = allObjects.view_storage2_container,
      ctnMiniMapa = allObjects.ctnMiniMapa,
      simulador_container = allObjects.simulador_container,
      imagem_lamina_coracao = allObjects.imagem_lamina_coracao,
      imagem_lamina_pulmonar = allObjects.imagem_lamina_pulmonar,
      imagem_lamina_arterioscieros = allObjects.imagem_lamina_arterioscieros,
      tela_preta = allObjects.tela_preta,
      revolver = allObjects.revolver,
      roda_menor = allObjects.roda_menor,
      roda_maior = allObjects.roda_maior,
      btn_retroceder = allObjects.btn_retroceder,
      btn04x = allObjects.btn04x,
      btn10x = allObjects.btn10x,
      btn40x = allObjects.btn40x,
      btn100x = allObjects.btn100x,
      seta_luz = allObjects.seta_luz,
      up_verde = allObjects.up_verde,
      right_verde = allObjects.right_verde,
      down_verde = allObjects.down_verde,
      left_verde = allObjects.left_verde,
      all = _objectWithoutProperties(allObjects, _excluded);

    //NAVEGAÇÃO
    //efeito de hover nos botoes e exibir placeholder
    function addEfectButton(obj) {
      var time = 0.3;
      obj.on("pointerover", function () {
        gsap.to(obj, {
          pixi: {
            scale: 1.1
          },
          //tint: "0xffffff"
          duration: time
        });
        textWalk.text = obj.placeHolder;
      }).on("pointerout", function () {
        gsap.to(obj, {
          pixi: {
            scale: 0.8
          },
          //tint: "0xc1c1c1"
          duration: time
        });
        textWalk.text = textWalk.placeHolder;
      }).on("pointerdown", function () {
        gsap.from([bgWalkMap, textWalk], {
          pixi: {
            scale: 0.6
          },
          ease: "elastic"
        });
        gsap.to([bgWalkMap, textWalk], {
          pixi: {
            scale: 0.8
          },
          duration: 0.1,
          delay: 1
        });
      });
    }
    allObjects.addEfectButton = addEfectButton;
    function efectTransition() {
      gsap.from("#animation", {
        opacity: 0
      });
      gsap.to("#animation", {
        opacity: 1,
        delay: 1
      });
      return;
    }
    var up_used = false;
    var scenary1 = true;
    var scenaryup = false;
    var scenarystorage = false;
    var scenarystorage2 = false;
    var scenarytable = false;
    var scenarySkeleton = false;
    var microscope_ontable = false;
    var box_ontable = false;
    navegation_container.children.forEach(function (btn) {
      //adiciona efeito hover
      addEfectButton(btn);
    });
    addEfectButton(all.skeletonHead);
    addEfectButton(all.btnOpenStorage);
    var countScene = 1;
    var swapScene = function swapScene() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (direction === "left") {
        countScene -= 1;
      } else if (direction === "right") {
        countScene += 1;
      } else if (direction === "up") {
        view1_container.visible = false;
        view2_container.visible = false;
        view3_container.visible = false;
        view4_container.visible = false;
        view12_container.visible = true;
        view_storage_container.visible = false;
        view_storage2_container.visible = false;
        scenarytable = true;
      } else if (direction === "back") {
        view1_container.visible = true;
        view2_container.visible = false;
        view3_container.visible = false;
        view4_container.visible = false;
        view12_container.visible = false;
        view13_container.visible = false;
        view_storage_container.visible = false;
        all.btnOpenStorage.visible = true;
      } else if (direction === "armario") {
        view1_container.visible = false;
        view2_container.visible = false;
        view3_container.visible = false;
        view4_container.visible = false;
        view12_container.visible = false;
        view_storage_container.visible = true;
        view_storage2_container.visible = false;
        all.btnOpenStorage.x = 500;
        all.btnOpenStorage.y = 280;
        all.btnOpenStorage.visible = true;
      } else if (direction === "armarioAberto") {
        view1_container.visible = false;
        view2_container.visible = false;
        view3_container.visible = false;
        view4_container.visible = false;
        view12_container.visible = false;
        view_storage_container.visible = false;
        view_storage2_container.visible = true;
        all.btnOpenStorage.visible = false;
        scenarystorage2 = true;
      } else if (direction === "skeleton") {
        view1_container.visible = false;
        view2_container.visible = false;
        view3_container.visible = false;
        view4_container.visible = false;
        view12_container.visible = false;
        view13_container.visible = true;
        view_storage_container.visible = false;
        view_storage2_container.visible = false;
        all.btnOpenStorage.visible = false;
      }
      if (countScene < 1) countScene = 4;
      efectTransition();
      switch (countScene) {
        case 1:
          view1_container.visible = true;
          view2_container.visible = false;
          view3_container.visible = false;
          view4_container.visible = false;
          scenary1 = true;
          all.btnOpenStorage.x = 1070;
          all.btnOpenStorage.y = 310;
          all.btnOpenStorage.visible = true;
          all.skeletonHead.visible = true;
          btnWalkFront.visible = true;
          all.camMiniMapa.angle = 180;
          all.camMiniMapa.x = -40;
          all.camMiniMapa.y = 0;
          break;
        case 2:
          view1_container.visible = false;
          view2_container.visible = true;
          view3_container.visible = false;
          view4_container.visible = false;
          scenary1 = false;
          all.btnOpenStorage.visible = false;
          all.skeletonHead.visible = false;
          btnWalkFront.visible = false;
          all.camMiniMapa.angle = 90;
          all.camMiniMapa.x = -20;
          all.camMiniMapa.y = -15;
          break;
        case 3:
          view1_container.visible = false;
          view2_container.visible = false;
          view3_container.visible = true;
          view4_container.visible = false;
          scenary1 = false;
          all.btnOpenStorage.visible = false;
          all.skeletonHead.visible = false;
          btnWalkFront.visible = false;
          all.camMiniMapa.angle = 360;
          all.camMiniMapa.x = -58;
          all.camMiniMapa.y = -30;
          break;
        case 4:
          view1_container.visible = false;
          view2_container.visible = false;
          view3_container.visible = false;
          view4_container.visible = true;
          scenary1 = true;
          all.btnOpenStorage.x = 330;
          all.btnOpenStorage.y = 250;
          all.btnOpenStorage.visible = true;
          all.skeletonHead.visible = false;
          btnWalkFront.visible = true;
          all.camMiniMapa.angle = 270;
          all.camMiniMapa.x = -70;
          all.camMiniMapa.y = -12;
          break;
        default:
          countScene = 1;
          view1_container.visible = true;
          view2_container.visible = false;
          view3_container.visible = false;
          view4_container.visible = false;
          view12_container.visible = false;
          view13_container.visible = false;
          all.btnOpenStorage.visible = true;
          all.btnOpenStorage.x = 1070;
          all.btnOpenStorage.y = 310;
          scenary1 = true;
          btnWalkFront.visible = true;
          all.camMiniMapa.angle = 180;
          all.camMiniMapa.x = -40;
          all.camMiniMapa.y = 0;
          break;
      }
    };
    allObjects.swapScene = swapScene;
    btnWalkFront.on("pointerdown", function () {
      if (scenary1 && up_used == false) {
        //sobe
        btnWalkFront.angle = -180;
        btnWalkFront.placeHolder = "    Voltar";
        swapScene("up");
        scenaryup = true;
        up_used = true;
        btnWalkLeft.visible = false;
        btnWalkRight.visible = false;
        all.btnOpenStorage.visible = false;
        all.skeletonHead.visible = false;
        all.camMiniMapa.angle = 180;
        all.camMiniMapa.x = -55;
        all.camMiniMapa.y = -25;
      } else if (up_used == true) {
        //desce
        if (scenarytable) {
          //sair da bancada
          btnWalkFront.angle = 0;
          btnWalkFront.placeHolder = "  Bancada";
          scenaryup = false;
          up_used = false;
          btnWalkLeft.visible = true;
          btnWalkRight.visible = true;
          scenarystorage = false;
          swapScene("back");
          all.box_slides_container.visible = false, all.microscope.interactive = true, ctnMiniMapa.interactive = true;
          scenarytable = false;
        } else if (scenarystorage2 == false && scenarytable == false) {
          //volta do armario1 pra tela inicial
          btnWalkFront.angle = 0;
          btnWalkFront.placeHolder = "  Bancada";
          scenaryup = false;
          up_used = false;
          btnWalkLeft.visible = true;
          btnWalkRight.visible = true;
          scenarystorage = false;
          swapScene("back");
          if (scenarySkeleton) {
            all.skeletonHead.x = 850;
            all.skeletonHead.y = 300;
            scenarySkeleton = false;
          }
        } else if (scenarystorage2 && microscope_ontable == false) {
          //volta pro armario1
          swapScene("armario");
          scenarystorage2 = false;
          all.btnOpenStorage.x = 500;
          all.btnOpenStorage.y = 280;
          all.camMiniMapa.angle = 260;
          all.camMiniMapa.x = 80;
          all.camMiniMapa.y = -40;
          all.skeletonHead.visible = false;
        } else if (microscope_ontable) {
          btnWalkFront.angle = -180;
          btnWalkFront.placeHolder = "    Voltar";
          scenarystorage2 = false;
          swapScene("up");
          scenaryup = true;
          up_used = true;
          btnWalkLeft.visible = false;
          btnWalkRight.visible = false;
          all.btnOpenStorage.visible = false;
          all.skeletonHead.visible = false;
          all.camMiniMapa.angle = 180;
          all.camMiniMapa.x = -55;
          all.camMiniMapa.y = -25;
        }
      }
    });
    btnWalkLeft.on("pointerdown", function () {
      if (scenaryup == false) {
        swapScene("left");
      }
    });
    btnWalkRight.on("pointerdown", function () {
      if (scenaryup == false) {
        //posso remover essa condicional ja que os botoes sao removidos quando clica pra cima
        swapScene("right");
      }
    });

    //armario btn
    all.btnOpenStorage.on("pointerdown", function () {
      if (scenarystorage == false) {
        swapScene("armario");
        btnWalkFront.angle = -180;
        btnWalkFront.placeHolder = "    Voltar";
        all.btnOpenStorage.x = 500;
        all.btnOpenStorage.y = 280;
        up_used = true;
        btnWalkLeft.visible = false;
        btnWalkRight.visible = false;
        scenarystorage = true;
        all.camMiniMapa.angle = 260;
        all.camMiniMapa.x = 80;
        all.camMiniMapa.y = -40;
      } else if (scenarystorage) {
        swapScene("armarioAberto");
        all.btnOpenStorage.visible = false;
        scenarystorage2 = true;
        all.camMiniMapa.angle = 270;
        all.camMiniMapa.x = 140;
        all.camMiniMapa.y = -45;
      }
      all.skeletonHead.visible = false;
    });

    //skeleton
    all.skeletonHead.on("pointerdown", function () {
      if (scenarySkeleton == false) {
        swapScene("skeleton");
        scenarySkeleton = true;
        btnWalkFront.angle = -180;
        btnWalkFront.placeHolder = "    Voltar";
        all.btnOpenStorage.visible = false;
        all.skeletonHead.x = 500;
        all.skeletonHead.y = 0;
        up_used = true;
        btnWalkLeft.visible = false;
        btnWalkRight.visible = false;
        all.camMiniMapa.angle = 220;
        all.camMiniMapa.x = 20;
        all.camMiniMapa.y = -70;
      } else if (scenarySkeleton) {
        //aqui faz aparecer o 3d
        document.getElementById("myModal").style.display = "block";
        // all.seta_direita.visible = true;
        // all.seta_esquerda.visible = true;
      }
    });

    //pegando itens no armario
    all.storageMicroscope.on("pointerdown", function () {
      gsap.to(all.storageMicroscope, {
        pixi: {
          visible: false,
          alpha: 0
        }
      });
      gsap.to(all.microscope, {
        pixi: {
          visible: true,
          alpha: 1
        }
      });
      microscope_ontable = true;
    });
    all.storageBoxOfSlides.on("pointerdown", function () {
      gsap.to(all.storageBoxOfSlides, {
        pixi: {
          visible: false,
          alpha: 0
        }
      });
      gsap.to(all.box_slides, {
        pixi: {
          visible: true,
          alpha: 1
        }
      });
      box_ontable = true;
    });

    //abrir minimapa
    function zomMiniMapa() {
      var time = 0.4;
      ctnMiniMapa.toggle ? gsap.to(ctnMiniMapa, {
        pixi: {
          scale: 2,
          x: 400,
          y: 250
        },
        duration: time
      }) : gsap.to(ctnMiniMapa, {
        pixi: {
          scale: 1,
          x: 930,
          y: 30
        },
        duration: time
      });
      ctnMiniMapa.toggle = !ctnMiniMapa.toggle;
    }
    ctnMiniMapa.on("pointerdown", zomMiniMapa);
    //animação fade in fade out da camera no minimapa
    setInterval(function () {
      var time = gsap.timeline();
      time.to(all.camMiniMapa, {
        alpha: 0.5
      });
      time.to(all.camMiniMapa, {
        alpha: 1,
        delay: 1
      });
    }, 1010);

    //entrar no microscopio
    all.microscope.on("pointerdown", function () {
      all.rooms_container.visible = false;
      navegation_container.visible = false;
      simulador_container.alpha = 1;
      simulador_container.visible = true;
      efectTransition();
    });

    //abre o popup de seleção de laminas
    all.box_slides.on("pointerdown", function () {
      all.box_slides_container.visible = true, all.microscope.interactive = false, ctnMiniMapa.interactive = false;
    });
    //fecha o popup de seleção de laminas
    all.btn_x.on("pointerdown", function () {
      all.box_slides_container.visible = false, all.microscope.interactive = true, ctnMiniMapa.interactive = true;
    });

    //parte de selecionar laminas
    var imagemAtual = null;
    function selecionarImagem(imagem, imagePath) {
      // Verifica se a imagem não foi carregada e carrega se necessário
      if (!imagem.texture) {
        var texture = PIXI.Texture.from(imagePath);
        imagem.texture = texture;
      }

      // Esconde a imagem atual, se houver
      if (imagemAtual) {
        imagemAtual.visible = false;
      }

      // Mostra a nova imagem e a define como imagem atual
      imagem.visible = true;
      imagemAtual = imagem;
    }
    var buttons = [{
      button: all.btn_posicionar,
      image: imagem_lamina_coracao
    }, {
      button: all.btn_posicionar2,
      image: imagem_lamina_pulmonar
    }, {
      button: all.btn_posicionar3,
      image: imagem_lamina_arterioscieros
    }];
    buttons.forEach(function (buttonImage) {
      buttonImage.button.on("pointerdown", function () {
        selecionarImagem(buttonImage.image, buttonImage.path);
      });
    });

    //scroll do popup de selecionar a lamina
    var isDraggingScroll = false;
    all.btn_scroll.on("mousedown", startDraggingScroll);
    all.btn_scroll.on("touchstart", startDraggingScroll);
    all.btn_scroll.on("mouseup", stopDraggingScroll);
    all.btn_scroll.on("mouseupoutside", stopDraggingScroll);
    all.btn_scroll.on("touchend", stopDraggingScroll);
    all.btn_scroll.on("touchendoutside", stopDraggingScroll);
    all.btn_scroll.on("mousemove", dragScroll);
    all.btn_scroll.on("touchmove", dragScroll);

    // funções pro scroll da caixa de laminas
    function startDraggingScroll(event) {
      this.data = event.data;
      isDraggingScroll = true;
    }
    function stopDraggingScroll() {
      isDraggingScroll = false;
      this.data = null;
    }
    function dragScroll(event) {
      if (isDraggingScroll) {
        // Função para atualizar a posição e visibilidade dos sprites
        var updateSpritePositions = function updateSpritePositions(offset) {
          all.box_slides_container.children.forEach(function (sprite) {
            if (!sprite.bg) {
              sprite.y += offset;
              sprite.visible = sprite.y > 180 && sprite.y < 460;
            }
          });
        };
        var newPosition = this.data.getLocalPosition(this.parent);

        // Quando arrasta para baixo
        if (this.y <= newPosition.y && this.y <= 410) {
          this.y += 10;
          updateSpritePositions(-35); // Atualiza a posição dos sprites para baixo
        }

        // Quando arrasta para cima
        if (this.y >= newPosition.y && this.y >= 190) {
          this.y -= 10;
          updateSpritePositions(35); // Atualiza a posição dos sprites para cima
        }
      }
    }

    // setInterval(() => {
    //   const time = gsap.timeline();
    //   time.to(all.indicador, { x: 1020, alpha: 0.5 });
    //   time.to(all.indicador, { x: 1000, alpha: 1, delay: 1 });
    // }, 1010);
    //////////////////////////////////////////////////////////////////////////////////////////////
    //MICROSCÓPIO

    //botao da sair do mic
    btn_retroceder.on("pointertap", function () {
      efectTransition();
      gsap.to([all.rooms_container, navegation_container], {
        visible: true
      });
      simulador_container.alpha = 0;
      simulador_container.visible = false;
      resetMicroscopio();
    });
    var imagens = [imagem_lamina_coracao, imagem_lamina_pulmonar, imagem_lamina_arterioscieros];

    //coloca filtro em cada imagem
    var blurFilter = new PIXI.filters.BlurFilter();
    imagens.forEach(function (imagem) {
      imagem.filters = [blurFilter];
      blurFilter.blur = 10;
    });

    //animacao das engrenagens
    // Variáveis para controlar as animaçoes das engrenagens
    var isDragging = false;
    var startRotation = 0;
    var startAngle = 0;
    roda_menor.on("mousedown", startDragging);
    roda_menor.on("touchstart", startDragging);
    roda_menor.on("mouseup", stopDragging);
    roda_menor.on("mouseupoutside", stopDragging);
    roda_menor.on("touchend", stopDragging);
    roda_menor.on("touchendoutside", stopDragging);
    roda_menor.on("mousemove", drag);
    roda_menor.on("touchmove", drag);
    var isDragging2 = false;
    var startRotation2 = 0;
    var startAngle2 = 0;
    roda_maior.on("mousedown", startDragging2);
    roda_maior.on("touchstart", startDragging2);
    roda_maior.on("mouseup", stopDragging2);
    roda_maior.on("mouseupoutside", stopDragging2);
    roda_maior.on("touchend", stopDragging2);
    roda_maior.on("touchendoutside", stopDragging2);
    roda_maior.on("mousemove", drag2);
    roda_maior.on("touchmove", drag2);

    // Funçoes de rodar a roda_menor menor
    function startDragging(event) {
      isDragging = true;
      startRotation = roda_menor.rotation;
      startAngle = getAngle(event.data.global);
    }
    function stopDragging() {
      isDragging = false;
    }

    //funçao ao zerar blur Danilo

    function pointZero(point) {
      if (point.blur >= -0.01 && point.blur <= 0.01) {
        var time = gsap.timeline();
        time.to(imagens, {
          pixi: {
            tint: 0x99f099
          },
          duration: 0.5
        }, 0);
        time.to(imagens, {
          pixi: {
            tint: 0xffffff
          },
          duration: 1
        }, 0.5);
        if (using4x) {
          foundfocus4x = true;
        } else if (using10x) {
          foundfocus10x = true;
        } else if (using40x) {
          foundfocus40x = true;
        }
      }
    }
    function drag(event) {
      if (isDragging) {
        var currentAngle = getAngle(event.data.global);
        var delta = currentAngle - startAngle;
        var previousangle = this.angle;

        // Define a nova rotação com base no arrasto
        roda_menor.rotation = startRotation - delta;

        //informa na tela ao encontrar o foco
        pointZero(blurFilter);

        //ajuste do micro
        if (this.angle <= previousangle) {
          blurFilter.blur -= 0.005;
        } else if (this.angle >= previousangle) {
          blurFilter.blur += 0.005;
        }
        console.log(foundfocus4x);
        console.log(foundfocus10x);
        console.log(foundfocus40x);

        //controlador de qual objetiva está em uso e armazenamento do blur de cada uma
        if (using4x) {
          moving4x = true;
          save_blur4x = blurFilter.blur;
          moving10x = false;
          moving40x = false;
          moving100x = false;
        } else if (using10x) {
          moving4x = false;
          moving10x = true;
          save_blur10x = blurFilter.blur;
          moving40x = false;
          moving100x = false;
        } else if (using40x) {
          moving4x = false;
          moving10x = false;
          moving40x = true;
          save_blur40x = blurFilter.blur;
          moving100x = false;
        } else if (using100x) {
          moving4x = false;
          moving10x = false;
          moving40x = false;
          moving100x = true;
          save_blur100x = blurFilter.blur;
        }
      }
    }

    // Funçoes da roda maior
    function startDragging2(event) {
      isDragging2 = true;
      startRotation2 = roda_maior.rotation;
      startAngle2 = getAngle(event.data.global);
    }
    function stopDragging2() {
      isDragging2 = false;
    }
    function drag2(event) {
      if (isDragging2) {
        var currentAngle = getAngle(event.data.global);
        var delta = currentAngle - startAngle2;
        var previousangle = this.angle;

        // Define a nova rotação com base no arrasto
        roda_maior.rotation = startRotation2 - delta;
        roda_menor.rotation = startRotation - delta * 7;

        //informa na tela ao encontrar o foco
        pointZero(blurFilter);
        console.log(foundfocus4x);
        console.log(foundfocus10x);
        console.log(foundfocus40x);
        console.log(blurFilter.blur);

        //ajuste do macro
        if (this.angle <= previousangle) {
          //reduz blur
          blurFilter.blur -= 0.04;
          if (blurFilter.blur <= -15) {
            blurFilter.blur = -10;
          } else if (blurFilter.blur <= 5) {
            blurFilter.blur -= 0.5;
          } else if (blurFilter.blur <= 40 && blurFilter.blur >= 30) {
            blurFilter.blur = 45;
          }
          console.log("para direita");
        } else if (this.angle >= previousangle) {
          //aumenta blur
          blurFilter.blur += 0.04;
          if (blurFilter.blur >= 15 && blurFilter.blur <= 30) {
            blurFilter.blur = 10;
          } else if (blurFilter.blur >= -5 && blurFilter.blur <= 0.1) {
            blurFilter.blur += 0.5;
          } else if (blurFilter.blur >= 60) {
            blurFilter.blur = 55;
            console.log("passou os 65");
          }
          console.log("para esquerda");
        }

        //controlador de qual objetiva está em uso e armazenamento do blur de cada uma
        if (using4x) {
          save_blur4x = blurFilter.blur;
          moving4x = true;
          moving10x = false;
          moving40x = false;
          moving100x = false;
        } else if (using10x) {
          moving4x = false;
          moving10x = true;
          save_blur10x = blurFilter.blur;
          moving40x = false;
          moving100x = false;
        } else if (using40x) {
          moving4x = false;
          moving10x = false;
          moving40x = true;
          save_blur40x = blurFilter.blur;
          moving100x = false;
        } else if (using100x) {
          moving4x = false;
          moving10x = false;
          moving40x = false;
          moving100x = true;
          save_blur100x = blurFilter.blur;
        }

        //se perder o foco desativa o foundfocus
        if (foundfocus4x == true && moving4x) {
          foundfocus4x = false;
        } else if (foundfocus10x == true && moving10x) {
          foundfocus10x = false;
        } else if (foundfocus40x == true && moving40x) {
          foundfocus40x = false;
        }
      }
    }

    // Função auxiliar para obter o ângulo entre o centro do palco e a posição atual do mouse
    function getAngle(position) {
      var dx = position.x - app.screen.width / 2;
      var dy = position.y - app.screen.height / 2;
      return Math.atan2(dx, dy);
    }

    //controles de uso, movimento e foco encontrado das objetivas
    var using4x = true;
    var using10x = false;
    var using40x = false;
    var using100x = false;
    var moving4x = false;
    var moving10x = false;
    var moving40x = false;
    var moving100x = false;
    var save_blur4x = 0;
    var save_blur10x = 0;
    var save_blur40x = 0;
    var save_blur100x = 0;
    var foundfocus4x = false;
    var foundfocus10x = false;
    var foundfocus40x = false;

    //ANIMACOES DA ESPOLETA GIRANDO AO SELECIONAR A COR DESEJADA
    btn04x.on("pointertap", function () {
      gsap.to(revolver, {
        angle: 0,
        duration: 0.2
      });
      imagens.forEach(function (imagem) {
        imagem.scale.x = 0.09;
        imagem.scale.y = 0.09;
      });
      blurFilter.blur = 10;
      if (moving4x == true) {
        blurFilter.blur = save_blur4x;
      }
      using4x = true;
      using10x = false;
      using40x = false;
      using100x = false;
    });
    btn10x.on("pointertap", function () {
      gsap.to(revolver, {
        angle: -90,
        duration: 0.2
      });
      imagens.forEach(function (imagem) {
        imagem.scale.x = 0.14;
        imagem.scale.x = 0.14;
      });
      if (foundfocus4x == true) {
        blurFilter.blur = 10;
      } else {
        blurFilter.blur = 40;
      }
      if (moving10x == true) {
        blurFilter.blur = save_blur10x;
      }
      using4x = false;
      using10x = true;
      using40x = false;
      using100x = false;
    });
    btn40x.on("pointertap", function () {
      gsap.to(revolver, {
        angle: 90,
        duration: 0.2
      });
      imagens.forEach(function (imagem) {
        imagem.scale.x = 0.6;
        imagem.scale.y = 0.6;
      });
      if (foundfocus10x == true) {
        blurFilter.blur = 10;
      } else {
        blurFilter.blur = 50;
      }
      if (moving40x == true) {
        blurFilter.blur = save_blur40x;
      }
      //define qual objetiva está em uso
      using4x = false;
      using10x = false;
      using40x = true;
      using100x = false;
    });
    btn100x.on("pointertap", function () {
      gsap.to(revolver, {
        angle: -180,
        duration: 0.2
      });
      imagens.forEach(function (imagem) {
        imagem.scale.x = 1.0;
        imagem.scale.y = 1.0;
      });
      if (foundfocus40x == true) {
        blurFilter.blur = 10;
      } else {
        blurFilter.blur = 60;
      }
      if (moving100x == true) {
        blurFilter.blur = save_blur100x;
      }
      //define qual objetiva está em uso
      using4x = false;
      using10x = false;
      using40x = false;
      using100x = true;
    });

    //ANIMACOES DAS SETINHAS PARA MOVER A LAMINA
    up_verde.on("pointerdown", onUPDown).on("pointerup", onUPUp).on("pointerupoutside", onUPUp);
    right_verde.on("pointerdown", onRightDown).on("pointerup", onRightUp).on("pointerupoutside", onRightUp);
    down_verde.on("pointerdown", onDownDown).on("pointerup", onDownUp).on("pointerupoutside", onDownUp);
    left_verde.on("pointerdown", onLeftDown).on("pointerup", onLeftUp).on("pointerupoutside", onLeftUp);

    //seta cima
    var isUpDown = false;
    function onUPDown() {
      isUpDown = true;
    }
    function onUPUp() {
      isUpDown = false;
    }
    // Função de atualização do frame
    function onHoldUp() {
      if (isUpDown) {
        imagens.forEach(function (imagem) {
          imagem.y -= 0.5;
        });
      }
    }
    //seta direita
    var isRightDown = false;
    function onRightDown() {
      isRightDown = true;
    }
    function onRightUp() {
      isRightDown = false;
    }
    // Função de atualização do frame
    function onHoldRight() {
      if (isRightDown) {
        imagens.forEach(function (imagem) {
          imagem.x += 0.5;
        });
      }
    }
    //seta baixo
    var isDownDown = false;
    function onDownDown() {
      isDownDown = true;
    }
    function onDownUp() {
      isDownDown = false;
    }
    // Função de atualização do frame
    function onHoldDown() {
      if (isDownDown) {
        imagens.forEach(function (imagem) {
          imagem.y += 0.5;
        });
      }
    }
    //seta esquerda
    var isLeftDown = false;
    function onLeftDown() {
      isLeftDown = true;
    }
    function onLeftUp() {
      isLeftDown = false;
    }
    // Função de atualização do frame
    function onHoldLeft() {
      if (isLeftDown) {
        imagens.forEach(function (imagem) {
          imagem.x -= 0.5;
        });
      }
    }
    app.ticker.add(onHoldUp);
    app.ticker.add(onHoldRight);
    app.ticker.add(onHoldDown);
    app.ticker.add(onHoldLeft);

    //ANIMACAO DA SETA DO CONTROLE DE LUMINOSIDADE
    seta_luz.on("pointerdown", onDragStart).on("pointermove", onDragMove).on("pointerupoutside", onDragEnd).on("pointerup", onDragEnd);

    //função de rolagem
    function onDragStart(event) {
      this.data = event.data;
      this.dragging = true;
    }
    function onDragEnd() {
      this.alpha = 1;
      this.dragging = false;
      this.data = null;
    }
    function onDragMove() {
      if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        if (this.x <= -190) return this.x = -189; //limite no 0
        if (this.x >= -41) return this.x = -42; //limite no 100
        // if(this.y + 1 <= newPosition.y) return

        if (this.x <= newPosition.x) {
          //x do mouse maior q a seta
          this.x += 10;
          if (tela_preta.alpha <= 0) {
            tela_preta.alpha = 0;
          } //volta o alpha pra 0
          var incrementAmount = 0.09;
          tela_preta.alpha -= incrementAmount;
        }
        if (this.x >= newPosition.x) {
          //x da seta maior q o mouse
          this.x -= 10;
          if (tela_preta.alpha >= 1) {
            tela_preta.alpha = 1;
          } //incrementa o alpha pra escurecer a lamina
          var _incrementAmount = 0.09;
          tela_preta.alpha += _incrementAmount;
        }
      }
    }
    function resetMicroscopio() {
      tela_preta.alpha = 1;
      seta_luz.x = -195;
      seta_luz.y = 532;

      // Resetar imagens

      imagens.forEach(function (imagem) {
        imagem.scale.x = 0.09; // Valor inicial para escala x
        imagem.scale.y = 0.09; // Valor inicial para escala y

        imagem.x = imagem.initialX;
        imagem.y = imagem.initialY;
      });
      gsap.to(revolver, {
        angle: 0,
        duration: 0.2
      });
      blurFilter.blur = 10;
      using4x = true;
      using10x = false;
      using40x = false;
      using100x = false;
      moving4x = false;
      moving10x = false;
      moving40x = false;
      moving100x = false;
      save_blur4x = 0;
      save_blur10x = 0;
      save_blur40x = 0;
      save_blur100x = 0;
      foundfocus4x = false;
      foundfocus10x = false;
      foundfocus40x = false;
    }

    // //TODOS OS EVENTOS DE HOVER HIGHLIGHT AO PASSAR O MOUSE
    // //ao passar o mouse ganha um destaque na cor
    simulador_container.children.forEach(function (sprite) {
      sprite.on("mouseover", function () {
        if (sprite.type !== "fundo") {
          sprite.tint = 0xc2c2c2;
        }
      });
      sprite.on("mouseout", function () {
        sprite.tint = 0xffffff;
      });
    });
    view_storage2_container.children.forEach(function (sprite) {
      sprite.on("mouseover", function () {
        gsap.to(sprite, {
          pixi: {
            tint: "0xcacaff"
          }
        });
      });
      sprite.on("mouseout", function () {
        gsap.to(sprite, {
          pixi: {
            tint: "0xffffff"
          }
        });
      });
    });
    all.box_slides_container.children.forEach(function (sprite) {
      sprite.on("mouseover", function () {
        gsap.to(sprite, {
          pixi: {
            tint: "0xcacaff",
            scale: 0.72
          }
        });
      });
      sprite.on("mouseout", function () {
        gsap.to(sprite, {
          pixi: {
            tint: "0xffffff",
            scale: 0.65
          }
        });
      });
    });
    gsap.timeline().add(footer(app, resources, _texts_json__WEBPACK_IMPORTED_MODULE_1__));
  });
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map