import texts from "./texts.json";
import {
  configureObject,
  configureObject2,
  configureContainer,
  removeContainer,
  animaOpacity,
  efectTransition,
  focusHover,
} from "./functions";

const options = {
  width: window.screen.width,
  height: window.screen.height,
  backgroundColor: 0x7193bc,
  targetSelector: "#animation",
  fontFamilies: ["Roboto", "DS-DIGI"],
  resources: {
    buttonFullScrenn:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/_general/tela%2Bcheia.png",

    //mini mapa
    bgMiniMapa:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/mini-mapa.png",
    camMiniMapa:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_oficiais/mini_mapa/cam.png",

    // Navegaçao
    bgWalkMap:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_oficiais/walk_map/walk-map.png",
    btnWalk:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_oficiais/walk_map/walk-button.png",

    //cenario
    view1:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-bancada-principal.JPG",
    view2:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-lateral.JPG",
    view3:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-bancada-atras.JPG",
    view4:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-entrada.JPG",
    view1_2:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/vista-bancada.png",

    //Cena armazém
    storage1:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/armario-fechadp.JPG",
    storage2:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/armario-aberto.JPG",

    //Cena esqueleto em foco
    sceneSkeleton:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/cena-esquele-foco.JPG",

    //icone
    doorOpen:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_oficiais/icone/opendoor.png",
    clickHand:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/clickhand.png",

    // itens da bancada
    tableMicroscope:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/Microscopio.png",
    tableBoxOfSlides:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/Caixa.png",

    // itens do armario
    gabinetMicroscope:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/Microscopio+2.png",
    gabinetBoxOfSlides:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/img-oficiais/Caixa+2.png",

    hitArea:
      "https://lia-labv.s3.sa-east-1.amazonaws.com/praticas/p04-dimensao-tijolo/hitbox-requa.png",

    seta_esquerda:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_temp/seta_esquerda.png",
    seta_direita:
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_temp/seta_direita.png",

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
    imagem_lamina_arterioscieros: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/LaminasFinal/Labio+HB/Untitled1-gigapixel-low_res-scale-4_00x.png",
   
  
  },
};

// load openning resources
if (introOptions) {
  Object.keys(introOptions.resources).forEach((id) => {
    options.resources[id] = introOptions.resources[id];
  });
}

// load footer resources
if (footerOptions) {
  Object.keys(footerOptions.resources).forEach((id) => {
    options.resources[id] = footerOptions.resources[id];
  });
}

const createObjects = (app, resources) => {
  let allObjects = {};

  //CENARIOS DE FUNDO
  //utencilios bancada vazia -- tela inicial
  const view1 = new PIXI.Sprite(resources.view1.texture);
  configureObject2(app, view1, 0.9, 400, 250);
  allObjects.view1 = view1;
  //tv e prateleira cheia -- tela nav pra cima
  const view1_2 = new PIXI.Sprite(resources.view1_2.texture);
  configureObject2(app, view1_2, 0.9, 400, 250);
  allObjects.view1_2 = view1_2;
  //zoom esqueleto
  const view1_3 = new PIXI.Sprite(resources.sceneSkeleton.texture);
  configureObject2(app, view1_3, 0.9, 400, 250);
  allObjects.view1_3 = view1_3;
  //bancada lateral -- tela nav direita
  const view2 = new PIXI.Sprite(resources.view2.texture);
  configureObject2(app, view2, 0.9, 400, 250);
  allObjects.view2 = view2;
  //sala lateral -- tela nav esquerda
  const view3 = new PIXI.Sprite(resources.view3.texture);
  configureObject2(app, view3, 0.9, 400, 250);
  allObjects.view3 = view3;
  //bancada com items -- tela nav duas pra esquerda ou duas pra direita
  const view4 = new PIXI.Sprite(resources.view4.texture);
  configureObject2(app, view4, 0.9, 400, 250);
  allObjects.view4 = view4;

  //armario com porta fechada
  const view_storage = new PIXI.Sprite(resources.storage1.texture);
  configureObject2(app, view_storage, 0.9, 400, 250);
  allObjects.view_storage = view_storage;
  
  //armario com porta aberta
  const view_storage2 = new PIXI.Sprite(resources.storage2.texture);
  configureObject2(app, view_storage2, 0.9, 400, 250, false);
  allObjects.view_storage2 = view_storage2;

  //containers de cada sala ---- cada um eh composto pelo fundo e seus objetos
  const view1_container = new PIXI.Container();
  configureContainer(app, view1_container, 0, 0, false, true);
  view1_container.addChild(view1);
  allObjects.view1_container = view1_container;

  const view2_container = new PIXI.Container();
  configureContainer(app, view2_container, 0, 0, false, true);
  view2_container.addChild(view2);
  allObjects.view2_container = view2_container;
  view2_container.visible = false;

  const view3_container = new PIXI.Container();
  configureContainer(app, view3_container, 0, 0, false, true);
  view3_container.addChild(view3);
  allObjects.view3_container = view3_container;
  view3_container.visible = false;

  const view4_container = new PIXI.Container();
  configureContainer(app, view4_container, 0, 0, false, true);
  view4_container.addChild(view4);
  allObjects.view4_container = view4_container;
  view4_container.visible = false;

  const view12_container = new PIXI.Container();
  configureContainer(app, view12_container, 0, 0, false, true);
  view12_container.addChild(view1_2);
  allObjects.view12_container = view12_container;
  view12_container.visible = false;

  const view13_container = new PIXI.Container();
  configureContainer(app, view13_container, 0, 0, false, true);
  view13_container.addChild(view1_3);
  allObjects.view13_container = view13_container;
  view13_container.visible = false;

  const view_storage_container = new PIXI.Container();
  configureContainer(app, view_storage_container, 0, 0, false, true);
  view_storage_container.addChild(view_storage);
  allObjects.view_storage_container = view_storage_container;
  view_storage_container.visible = false;
  // view_storage_container.zIndex = 10;

  const view_storage2_container = new PIXI.Container();
  configureContainer(app, view_storage2_container, 0, 0, false, true);
  view_storage2_container.addChild(view_storage2);
  allObjects.view_storage2_container = view_storage2_container;
  view_storage2_container.visible = false;
  // view_storage2_container.zIndex = 10;

  const btnOpenStorage = new PIXI.Sprite(resources.doorOpen.texture);
  configureObject2(app, btnOpenStorage, 0.8, 1070, 310, true, true);
  btnOpenStorage.alpha = 0.5;
  allObjects.btnOpenStorage = btnOpenStorage;
  btnOpenStorage.zIndex = 100;

  const skeletonHead = new PIXI.Sprite(resources.clickHand.texture);
  configureObject2(app, skeletonHead, 0.8, 850, 300, true, true);
  allObjects.skeletonHead = skeletonHead;
  skeletonHead.zIndex = 100;


  //container com todas as salas para controlar navegacao
  const rooms_container = new PIXI.Container();
  configureContainer(app, rooms_container, 0, 0, false, true);
  rooms_container.addChild(
    view1_container,
    view2_container,
    view3_container,
    view4_container,
    view12_container,
    view13_container,
    view_storage_container,
    view_storage2_container,
  );
  allObjects.rooms_container = rooms_container;


  //minimapa
  const bgMiniMapa = new PIXI.Sprite(resources.bgMiniMapa.texture);
  configureObject2(app, bgMiniMapa, 0.8, 0, 0, false, true);
  allObjects.bgMiniMapa = bgMiniMapa;

  const camMiniMapa = new PIXI.Sprite(resources.camMiniMapa.texture);
  configureObject2(app, camMiniMapa, 0.8, -40, 0, false, true);
  allObjects.camMiniMapa = camMiniMapa;
  camMiniMapa.angle = 180;

  const ctnMiniMapa = new PIXI.Container();
  configureContainer(app, ctnMiniMapa, 930, 30, true, true);
  ctnMiniMapa.addChild(
    bgMiniMapa,
    camMiniMapa,
  );
  allObjects.ctnMiniMapa = ctnMiniMapa;
  // rooms_container.addChild(ctnMiniMapa);


  //NAVEGAÇÃO
  //--------------------------------------------------------------------------------
  const bgWalkMap = new PIXI.Sprite(resources.bgWalkMap.texture);
  configureObject2(app, bgWalkMap, 0.8, 0, 0, false, true);
  bgWalkMap.tint = "0x6E6E6E";
  allObjects.bgWalkMap = bgWalkMap;

  const tintButton = "0xc1c1c1";

  const btnWalkFront = new PIXI.Sprite(resources.btnWalk.texture);
  configureObject2(app, btnWalkFront, 0.8, 0, -92, true, true);
  btnWalkFront.placeHolder = "  Bancada";
  btnWalkFront.center = true;
  btnWalkFront.type = "button";
  btnWalkFront.tint = tintButton;
  allObjects.btnWalkFront = btnWalkFront;

  const btnWalkLeft = new PIXI.Sprite(resources.btnWalk.texture);
  configureObject2(app, btnWalkLeft, 0.8, -100, -30, true, true);
  btnWalkLeft.placeHolder = " Esquerda";
  btnWalkLeft.type = "button";
  btnWalkLeft.tint = tintButton;
  btnWalkLeft.angle = -90;
  allObjects.btnWalkLeft = btnWalkLeft;

  const btnWalkRight = new PIXI.Sprite(resources.btnWalk.texture);
  configureObject2(app, btnWalkRight, 0.8, 95, -30, true, true);
  btnWalkRight.placeHolder = "   Direita";
  btnWalkRight.type = "button";
  btnWalkRight.tint = tintButton;
  btnWalkRight.angle = 90;
  allObjects.btnWalkRight = btnWalkRight;

  const styleWalk = new PIXI.TextStyle({
    fill: "#ffffff",
    fontSize: 21,
  });
  const textWalk = new PIXI.Text("navegação", styleWalk);
  configureObject2(app, textWalk, 1, 0, -23);
  textWalk.placeHolder = "navegação";
  allObjects.textWalk = textWalk;

  const navegation_container = new PIXI.Container();
  configureContainer(app, navegation_container, 400, 600, false, true);
  navegation_container.addChild(
    bgWalkMap,
    btnWalkFront,
    btnWalkLeft,
    btnWalkRight,
    textWalk
  );
  allObjects.navegation_container = navegation_container;
  navegation_container.zIndex = 1000;



  //hitarea do view12 para ao ocorrer pointerover sumir o alerta
  const hitarea = PIXI.Sprite.from(resources.hitArea.texture);
  configureObject(app, hitarea, 1200, 600, 400, 250);
  allObjects.hitarea = hitarea;
  hitarea.alpha = 0;
  hitarea.interactive = true;

  //objetos da mesa
  const microscope = new PIXI.Sprite(resources.tableMicroscope.texture);
  configureObject2(app, microscope, 0.8, 400, 300, true, false);
  allObjects.microscope = microscope;
  microscope.hitArea = new PIXI.Rectangle(140, 50, 280, 600);

  const box_slides = new PIXI.Sprite(resources.tableBoxOfSlides.texture);
  configureObject2(app, box_slides, 0.8, 800, 350, true, false);
  allObjects.box_slides = box_slides;
  view12_container.addChild(hitarea, microscope, box_slides);

  //itens armario
  const storageMicroscope = new PIXI.Sprite(resources.gabinetMicroscope.texture);
  configureObject2(app, storageMicroscope, 0.9, 395, 125, true, true);
  allObjects.storageMicroscope = storageMicroscope;

  const storageBoxOfSlides = new PIXI.Sprite(resources.gabinetBoxOfSlides.texture);
  configureObject2(app, storageBoxOfSlides, 0.9, 530, 170, true, true);
  allObjects.storageBoxOfSlides = storageBoxOfSlides;
  view_storage2_container.addChild(
    storageMicroscope,
    storageBoxOfSlides,
  );


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
  const bg_select_sample = new PIXI.Sprite(resources.bg_select_sample.texture);
  configureObject2(app, bg_select_sample, 0.25, 0, 270, false, true);
  bg_select_sample.zIndex = 1000;
  bg_select_sample.alpha = 0.95;
  bg_select_sample.bg = true;

  //fonte dos textinhos
  const box_slades_style = {
    fontFamily: "Arial",
    fontSize: 22,
    fill: 0x000000,
  };

  //botao de close "x" SARA
  const btn_x = new PIXI.Text("X", box_slades_style);
  configureObject2(app, btn_x, 1, 160, 100, true, true);
  allObjects.btn_x = btn_x;
  btn_x.bg = true;
  btn_x.style.fontSize = 30;
  





  
  
  
 




  //aqui é a segunda coluna
  // nomes

  //1
  const nome1 = new PIXI.Text("Labio1", box_slades_style);
  configureObject2(app, nome1, 1, 0, 220, false, true);
  allObjects.nome1 = nome1;
  nome1.bg = false;

  //2
  const nome2 = new PIXI.Text("Labio2", box_slades_style);
  configureObject2(app, nome2, 1, 0, 270, false, true);
  allObjects.nome2 = nome2;
  nome2.bg = false;

  //3
  const nome3 = new PIXI.Text("Labio3", box_slades_style); //escrito errado
  configureObject2(app, nome3, 1, 0, 320, false, true);//ai no caso tu vai acrescentdo de 50 em 50 pra ir alinhando os nomes na tabelinha
  allObjects.nome3 = nome3;
  nome3.bg = false;











  //verificar btn_posicionar para ver se estao setados os novos botoes

  //botoes para selecionar a lamina sara, acefala, essa é o botao posicionar
  //botao de posicionar 1
  const btn_posicionar = new PIXI.Sprite(resources.btn_posicionar.texture);
  configureObject2(app, btn_posicionar, 0.65, 0, 220, true, true);
  allObjects.btn_posicionar = btn_posicionar;
  btn_posicionar.bg = false;


  //botao de posicionar 2
  const btn_posicionar2 = new PIXI.Sprite(resources.btn_posicionar.texture);
  configureObject2(app, btn_posicionar2, 0.65, 0, 270, true, true);
  allObjects.btn_posicionar2 = btn_posicionar2;;
  btn_posicionar2.bg = false;

  const btn_posicionar3 = new PIXI.Sprite(resources.btn_posicionar.texture);
  configureObject2(app, btn_posicionar3, 0.65, 0, 320, true, true);
  allObjects.btn_posicionar3 = btn_posicionar3;
  btn_posicionar3.bg = false;





  const btn_scroll = new PIXI.Sprite(resources.btn_scroll.texture);
  configureObject2(app, btn_scroll, 0.8, 175, 220, true, true);
  allObjects.btn_scroll = btn_scroll;
  btn_scroll.bg = true;
  
  

  // AQUI É O CONTAINER COM TODOS OS OBJETOS DA TELINHA DA CAIXA DE LAMINAS SARA
  // Adicionar aqui todos os btns de poscionar, nomes, tipos, etc
  const box_slides_container = new PIXI.Container();
  configureContainer(app, box_slides_container, 0, -30, false); //qnd completar td adicianar um false após o false para ele apenas aparecer qnd clica na caixinha
  box_slides_container.addChild(
    bg_select_sample,
    btn_scroll,
    btn_x,

    btn_posicionar,
    btn_posicionar2,
    btn_posicionar3,
    

    
    
    nome1,
    nome2,
    nome3,
    

      
  );
  allObjects.box_slides_container = box_slides_container;
  box_slides_container.zIndex = 1000000;


  window.addEventListener("wheel", function (event) {
    box_slides_container.emit("scroll", event);
  });

  box_slides_container.interactive = true;
  box_slides_container.on("scroll", event => {
    let scroll_dir = event.deltaY;


    if (scroll_dir > 0) {
      console.log('descendo')
    }

    if (scroll_dir < 0) {
      console.log('subindo')
    }

  });





  //Microscópio
  //--------------------------------------------------------------------------------

 

  //1
  const imagem_lamina_coracao = new PIXI.Sprite(resources.imagem_lamina_coracao.texture);
  configureObject2(app, imagem_lamina_coracao, 0.09, 410, 250, false, false);
  imagem_lamina_coracao.zIndex = 1;
  allObjects.imagem_lamina_coracao = imagem_lamina_coracao;
  imagem_lamina_coracao.interactive = true;
  imagem_lamina_coracao.type = "fundo";
  imagem_lamina_coracao.initialX = 410;
  imagem_lamina_coracao.initialY = 250;

  //2
  const imagem_lamina_pulmonar = new PIXI.Sprite(resources.imagem_lamina_pulmonar.texture);
  configureObject2(app, imagem_lamina_pulmonar, 0.09, 410, 300, false, false);
  imagem_lamina_pulmonar.zIndex = 1;
  allObjects.imagem_lamina_pulmonar = imagem_lamina_pulmonar;
  imagem_lamina_pulmonar.interactive = true;
  imagem_lamina_pulmonar.type = "fundo";
  imagem_lamina_pulmonar.initialX = 410;
  imagem_lamina_pulmonar.initialY = 300;

  //3
  const imagem_lamina_arterioscieros = new PIXI.Sprite(resources.imagem_lamina_arterioscieros.texture);
  configureObject2(app, imagem_lamina_arterioscieros, 0.09, 410, 300, false, false);
  imagem_lamina_arterioscieros.zIndex = 1;
  allObjects.imagem_lamina_arterioscieros = imagem_lamina_arterioscieros;
  imagem_lamina_arterioscieros.interactive = true;
  imagem_lamina_arterioscieros.type = "fundo";
  imagem_lamina_arterioscieros.initialX = 410;
  imagem_lamina_arterioscieros.initialY = 300;













  // NAO MUDAR NADA ABAIXO SARA
  //BACKGROUNDS
  //img preta sobrepondo a lamina para criar o efeito de luz
  const tela_preta = new PIXI.Sprite(resources.tela_preta.texture);
  configureObject2(app, tela_preta, 1, 410, 250, false);
  tela_preta.zIndex = 1;
  tela_preta.alpha = 1;
  allObjects.tela_preta = tela_preta;
  tela_preta.type = "fundo"

  //objeto espoleta
  const revolver = new PIXI.Sprite(resources.revolver.texture);
  configureObject2(app, revolver, 1, 410, -30, false);
  revolver.zIndex = 1;
  allObjects.revolver = revolver;
  revolver.interactive = true;
  revolver.type = "fundo"

  //painel background
  const painel = new PIXI.Sprite(resources.painel_bg.texture);
  configureObject2(app, painel, 1, 400, 240, );
  painel.zIndex = 1;
  allObjects.painel = painel;
  painel.type = "fundo"



  //OBJETOS
  //roda menor
  const roda_menor = new PIXI.Sprite(resources.roda_menor.texture);
  configureObject2(app, roda_menor, 1, 405, 250, true);
  roda_menor.zIndex = 1;
  allObjects.roda_menor = roda_menor;
  roda_menor.hitArea = new PIXI.Circle(240, 240, roda_menor.width / 2);
  //roda maior
  const roda_maior = new PIXI.Sprite(resources.roda_maior.texture);
  configureObject2(app, roda_maior, 1, 405, 250, true);
  roda_maior.zIndex = 1;
  allObjects.roda_maior = roda_maior;
  roda_maior.hitArea = new PIXI.Circle(305, 305, roda_maior.width / 2);


  //botoes
  const btn_retroceder = new PIXI.Sprite(resources.btn_retroceder.texture);
  configureObject2(app, btn_retroceder, 1, 1000, -35, true);
  btn_retroceder.zIndex = 1;
  allObjects.btn_retroceder = btn_retroceder;



  //ELEMENTOS DO PAINEL DE CONTROLE
  //botoes vermelho, amarelo, azul e cinza
  const btn04x = new PIXI.Sprite(resources.btn04x.texture);
  configureObject2(app, btn04x, 1, -150, 60, true);
  btn04x.zIndex = 1;
  allObjects.btn04x = btn04x;
  btn04x.hitArea = new PIXI.Circle(35, 40, btn04x.width / 2);
  const btn10x = new PIXI.Sprite(resources.btn10x.texture);
  configureObject2(app, btn10x, 1, -70, 60, true);
  btn10x.zIndex = 1;
  allObjects.btn10x = btn10x;
  btn10x.hitArea = new PIXI.Circle(35, 40, btn10x.width / 2)
  const btn40x = new PIXI.Sprite(resources.btn40x.texture);
  configureObject2(app, btn40x, 1, -150, 140, true);
  btn40x.zIndex = 1;
  allObjects.btn40x = btn40x;
  btn40x.hitArea = new PIXI.Circle(35, 40, btn40x.width / 2);
  const btn100x = new PIXI.Sprite(resources.btn100x.texture);
  configureObject2(app, btn100x, 1, -70, 140, true);
  btn100x.zIndex = 1;
  allObjects.btn100x = btn100x;
  btn100x.hitArea = new PIXI.Circle(35, 40, btn100x.width / 2);

  //setinha vermelha do controle de luz
  const seta_luz = new PIXI.Sprite(resources.seta_luz.texture);
  configureObject2(app, seta_luz, 0.3, -195, 532, true);
  seta_luz.zIndex = 1;
  allObjects.seta_luz = seta_luz;

  //setas verdes
  const up_verde = new PIXI.Sprite(resources.up_verde.texture);
  configureObject2(app, up_verde, 1, -115, 290, true);
  up_verde.zIndex = 1;
  allObjects.up_verde = up_verde;
  // Defina os pontos do quadrilátero
  const hitAreaPoints = [
    -10, 10,   // Ponto superior esquerdo
    120, 10,  // Ponto superior direito
    50, 80, // Ponto inferior direito
    50, 80   // Ponto inferior esquerdo
  ];
  const hitArea = new PIXI.Polygon(hitAreaPoints);
  // Atribua a área de colisão personalizada ao sprite
  up_verde.hitArea = hitArea;

  const right_verde = new PIXI.Sprite(resources.right_verde.texture);
  configureObject2(app, right_verde, 1, -64, 341, true);
  right_verde.zIndex = 1;
  allObjects.right_verde = right_verde;
  const rightPoints = [
    0, 40,   // Ponto superior esquerdo
    60, 0,  // Ponto superior direito
    60, 120, // Ponto inferior direito
    0, 70   // Ponto inferior esquerdo
  ];
  const right_hitarea = new PIXI.Polygon(rightPoints);
  right_verde.hitArea = right_hitarea;

  const down_verde = new PIXI.Sprite(resources.down_verde.texture);
  configureObject2(app, down_verde, 1, -114, 392, true);
  down_verde.zIndex = 1;
  allObjects.down_verde = down_verde;
  const downPoints = [
    20, 10,   // Ponto superior esquerdo
    80, 10,  // Ponto superior direito
    120, 70, // Ponto inferior direito
    0, 70   // Ponto inferior esquerdo
  ];
  const down_hitarea = new PIXI.Polygon(downPoints);
  down_verde.hitArea = down_hitarea;

  const left_verde = new PIXI.Sprite(resources.left_verde.texture);
  configureObject2(app, left_verde, 1, -165, 342, true);
  left_verde.zIndex = 1;
  allObjects.left_verde = left_verde;
  const leftPoints = [
    0, 0,   // Ponto superior esquerdo
    60, 40,  // Ponto superior direito
    60, 80, // Ponto inferior direito
    20, 120   // Ponto inferior esquerdo
  ];
  const left_hitarea = new PIXI.Polygon(leftPoints);
  left_verde.hitArea = left_hitarea;


  //barra a interacao com o centro da lente 
  const zonaInativaCirculo = new PIXI.Graphics();
  configureObject2(app, zonaInativaCirculo, 1, 0, 0, false, true);
  zonaInativaCirculo.beginFill(0xffffff, 0.01); // Cor vermelha transparente
  zonaInativaCirculo.drawCircle(405, 250, 180); // Círculo com raio de 50 pixels
  zonaInativaCirculo.endFill();
  zonaInativaCirculo.zIndex = 10;
  zonaInativaCirculo.interactive = true;
  allObjects.zonaInativaCirculo = zonaInativaCirculo;

  const simulador_container = new PIXI.Container();
  configureObject(app, simulador_container, 800, 600, 0, 0);
  simulador_container.addChild(
    //ADICIONAR OS NOMES DAS LAMINAS AQUI SARA
  
    imagem_lamina_coracao,
    imagem_lamina_pulmonar,
    imagem_lamina_arterioscieros,
   




    tela_preta,
    revolver,
    painel,
    btn_retroceder,
    roda_maior,
    roda_menor,
    btn04x,
    btn10x,
    btn40x,
    btn100x,
    seta_luz,
    up_verde,
    right_verde,
    down_verde,
    left_verde,
    zonaInativaCirculo,
  )
  allObjects.simulador_container = simulador_container;
  simulador_container.alpha = 0;
  simulador_container.visible = false;


  return allObjects;
};

export { options, createObjects };
