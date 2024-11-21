import setup from "./setup-v3";

import texts from "./texts.json";
import { options, createObjects } from "./objects";
import {
  configureObject,
  configureObject2,
  configureContainer,
  removeContainer,
  efectTransition,
  noBugClicking,
} from "./functions";
// import { createObjectsScene } from "./scene";

//MAIN
(function main() {
  setup(options, (app, resources) => {
    gsap.from("#animation", { opacity: 0, scale: 0.5 });

    // const {ctnMainScene, ctnHud} = createObjectsScene(app, resources);

    /* CREATE ITEMS SCOPE */
    const allObjects = createObjects(app, resources);

    const {
      //cenario
      navegation_container,
      textWalk,
      bgWalkMap,
      btnWalkFront,
      btnWalkRight,
      btnWalkLeft,
      //containers das salas
      view1_container,
      view2_container,
      view3_container,
      view4_container,
      view12_container,
      view13_container,
      view_storage_container,
      view_storage2_container,

      ctnMiniMapa,
      //microscopio
      simulador_container,
      
      //imagens para animações
      
      imagem_lamina_coracao,
      imagem_lamina_pulmonar,
      imagem_lamina_arterioscieros,

     
  
  
  
  
      tela_preta,
      revolver,
      roda_menor,
      roda_maior,

      btn_retroceder,

      //painel de controle
      btn04x,
      btn10x,
      btn40x,
      btn100x,
      seta_luz,
      up_verde,
      right_verde,
      down_verde,
      left_verde,

      ...all
    } = allObjects;

    //NAVEGAÇÃO
    //efeito de hover nos botoes e exibir placeholder
    function addEfectButton(obj) {
      const time = 0.3;
      obj
        .on("pointerover", () => {
          gsap.to(obj, {
            pixi: { scale: 1.1 }, //tint: "0xffffff"
            duration: time,
          });
          textWalk.text = obj.placeHolder;
        })
        .on("pointerout", () => {
          gsap.to(obj, {
            pixi: { scale: 0.8 }, //tint: "0xc1c1c1"
            duration: time,
          });
          textWalk.text = textWalk.placeHolder;
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
    allObjects.addEfectButton = addEfectButton;

    function efectTransition() {
      gsap.from("#animation", { opacity: 0 });
      gsap.to("#animation", { opacity: 1, delay: 1 });
      return;
    }

    let up_used = false;
    let scenary1 = true;
    let scenaryup = false;
    let scenarystorage = false;
    let scenarystorage2 = false;
    let scenarytable = false;
    let scenarySkeleton = false;
    let microscope_ontable = false;
    let box_ontable = false;

    navegation_container.children.forEach((btn) => {
      //adiciona efeito hover
      addEfectButton(btn);
    });
    addEfectButton(all.skeletonHead);
    addEfectButton(all.btnOpenStorage);

    let countScene = 1;
    const swapScene = (direction = "") => {
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

    btnWalkFront.on("pointerdown", () => {
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
          (all.box_slides_container.visible = false),
            (all.microscope.interactive = true),
            (ctnMiniMapa.interactive = true);

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
    btnWalkLeft.on("pointerdown", () => {
      if (scenaryup == false) {
        swapScene("left");
      }
    });
    btnWalkRight.on("pointerdown", () => {
      if (scenaryup == false) {
        //posso remover essa condicional ja que os botoes sao removidos quando clica pra cima
        swapScene("right");
      }
    });

    //armario btn
    all.btnOpenStorage.on("pointerdown", () => {
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
    all.skeletonHead.on("pointerdown", () => {
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
    all.storageMicroscope.on("pointerdown", () => {
      gsap.to(all.storageMicroscope, { pixi: { visible: false, alpha: 0 } });
      gsap.to(all.microscope, { pixi: { visible: true, alpha: 1 } });

      microscope_ontable = true;
    });
    all.storageBoxOfSlides.on("pointerdown", () => {
      gsap.to(all.storageBoxOfSlides, { pixi: { visible: false, alpha: 0 } });
      gsap.to(all.box_slides, { pixi: { visible: true, alpha: 1 } });

      box_ontable = true;
    });

    //abrir minimapa
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
    ctnMiniMapa.on("pointerdown", zomMiniMapa);
    //animação fade in fade out da camera no minimapa
    setInterval(() => {
      const time = gsap.timeline();
      time.to(all.camMiniMapa, { alpha: 0.5 });
      time.to(all.camMiniMapa, { alpha: 1, delay: 1 });
    }, 1010);

    //entrar no microscopio
    all.microscope.on("pointerdown", () => {
      all.rooms_container.visible = false;
      navegation_container.visible = false;
      simulador_container.alpha = 1;
      simulador_container.visible = true;
      efectTransition();
    });

    //abre o popup de seleção de laminas
    all.box_slides.on("pointerdown", () => {
      (all.box_slides_container.visible = true),
        (all.microscope.interactive = false),
        (ctnMiniMapa.interactive = false);
    });
    //fecha o popup de seleção de laminas
    all.btn_x.on("pointerdown", () => {
      (all.box_slides_container.visible = false),
        (all.microscope.interactive = true),
        (ctnMiniMapa.interactive = true);
    });


    
    //parte de selecionar laminas
    let imagemAtual = null;

    function selecionarImagem(imagem, imagePath) {
      // Verifica se a imagem não foi carregada e carrega se necessário
      if (!imagem.texture) {
        const texture = PIXI.Texture.from(imagePath);
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
    
    
   
    const buttons = [
      { button: all.btn_posicionar, image: imagem_lamina_coracao },
      { button: all.btn_posicionar2, image: imagem_lamina_pulmonar },
      { button: all.btn_posicionar3, image: imagem_lamina_arterioscieros },
     
     
    ];
    
    buttons.forEach((buttonImage) => {
      buttonImage.button.on("pointerdown", () => {
        selecionarImagem(buttonImage.image, buttonImage.path);
      });
    });

    //scroll do popup de selecionar a lamina
    let isDraggingScroll = false;
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
        const newPosition = this.data.getLocalPosition(this.parent);
    
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
    
        // Função para atualizar a posição e visibilidade dos sprites
        function updateSpritePositions(offset) {
          all.box_slides_container.children.forEach((sprite) => {
            if (!sprite.bg) {
              sprite.y += offset;
              sprite.visible = sprite.y > 180 && sprite.y < 460;
            }
          });
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
      gsap.to([all.rooms_container, navegation_container], { visible: true });
      simulador_container.alpha = 0;
      simulador_container.visible = false;
      resetMicroscopio();
    });

    const imagens = [
      imagem_lamina_coracao,
      imagem_lamina_pulmonar,
      imagem_lamina_arterioscieros,
   
    
    ];
    
    //coloca filtro em cada imagem
    const blurFilter = new PIXI.filters.BlurFilter();
    
    imagens.forEach((imagem) => {
      imagem.filters = [blurFilter];

      blurFilter.blur = 10;

    });


    //animacao das engrenagens
    // Variáveis para controlar as animaçoes das engrenagens
    let isDragging = false;
    let startRotation = 0;
    let startAngle = 0;
    roda_menor.on("mousedown", startDragging);
    roda_menor.on("touchstart", startDragging);
    roda_menor.on("mouseup", stopDragging);
    roda_menor.on("mouseupoutside", stopDragging);
    roda_menor.on("touchend", stopDragging);
    roda_menor.on("touchendoutside", stopDragging);
    roda_menor.on("mousemove", drag);
    roda_menor.on("touchmove", drag);

    let isDragging2 = false;
    let startRotation2 = 0;
    let startAngle2 = 0;
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
        const time = gsap.timeline();
        time.to(imagens, { pixi: { tint: 0x99f099 }, duration: 0.5 }, 0);
        time.to(imagens, { pixi: { tint: 0xffffff }, duration: 1 }, 0.5);

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
        const currentAngle = getAngle(event.data.global);
        const delta = currentAngle - startAngle;
        const previousangle = this.angle;

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
        const currentAngle = getAngle(event.data.global);
        const delta = currentAngle - startAngle2;
        const previousangle = this.angle;

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
      const dx = position.x - app.screen.width / 2;
      const dy = position.y - app.screen.height / 2;
      return Math.atan2(dx, dy);
    }

    //controles de uso, movimento e foco encontrado das objetivas
    let using4x = true;
    let using10x = false;
    let using40x = false;
    let using100x = false;
    let moving4x = false;
    let moving10x = false;
    let moving40x = false;
    let moving100x = false;
    let save_blur4x = 0;
    let save_blur10x = 0;
    let save_blur40x = 0;
    let save_blur100x = 0;
    let foundfocus4x = false;
    let foundfocus10x = false;
    let foundfocus40x = false;

    //ANIMACOES DA ESPOLETA GIRANDO AO SELECIONAR A COR DESEJADA
    btn04x.on("pointertap", () => {
      gsap.to(revolver, { angle: 0, duration: 0.2 });
      imagens.forEach((imagem) => {
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


    btn10x.on("pointertap", () => {
      gsap.to(revolver, { angle: -90, duration: 0.2 });
      imagens.forEach((imagem) => {
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
    
    btn40x.on("pointertap", () => {
      gsap.to(revolver, { angle: 90, duration: 0.2 });
      imagens.forEach((imagem) => {
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
    btn100x.on("pointertap", () => {
      gsap.to(revolver, { angle: -180, duration: 0.2 });

      imagens.forEach((imagem) => {
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
    up_verde
      .on("pointerdown", onUPDown)
      .on("pointerup", onUPUp)
      .on("pointerupoutside", onUPUp);
    right_verde
      .on("pointerdown", onRightDown)
      .on("pointerup", onRightUp)
      .on("pointerupoutside", onRightUp);
    down_verde
      .on("pointerdown", onDownDown)
      .on("pointerup", onDownUp)
      .on("pointerupoutside", onDownUp);
    left_verde
      .on("pointerdown", onLeftDown)
      .on("pointerup", onLeftUp)
      .on("pointerupoutside", onLeftUp);

    //seta cima
    let isUpDown = false;
    function onUPDown() {
      isUpDown = true;
    }
    function onUPUp() {
      isUpDown = false;
    }
    // Função de atualização do frame
    function onHoldUp() {
      if (isUpDown) {
        imagens.forEach((imagem) => {
         imagem.y -= 0.5;
        });
      }
    }
    //seta direita
    let isRightDown = false;
    function onRightDown() {
      isRightDown = true;
    }
    function onRightUp() {
      isRightDown = false;
    }
    // Função de atualização do frame
    function onHoldRight() {
      if (isRightDown) {
        imagens.forEach((imagem) => {
         imagem.x += 0.5;
        });
      }
    }
    //seta baixo
    let isDownDown = false;
    function onDownDown() {
      isDownDown = true;
    }
    function onDownUp() {
      isDownDown = false;
    }
    // Função de atualização do frame
    function onHoldDown() {
      if (isDownDown) {
         imagens.forEach((imagem) => {
         imagem.y += 0.5;
         });
      }
    }
    //seta esquerda
    let isLeftDown = false;
    function onLeftDown() {
      isLeftDown = true;
    }
    function onLeftUp() {
      isLeftDown = false;
    }
    // Função de atualização do frame
    function onHoldLeft() {
      if (isLeftDown) {
        imagens.forEach((imagem) => {
        imagem.x -= 0.5;
        });
      }
    }
    app.ticker.add(onHoldUp);
    app.ticker.add(onHoldRight);
    app.ticker.add(onHoldDown);
    app.ticker.add(onHoldLeft);

    //ANIMACAO DA SETA DO CONTROLE DE LUMINOSIDADE
    seta_luz
      .on("pointerdown", onDragStart)
      .on("pointermove", onDragMove)
      .on("pointerupoutside", onDragEnd)
      .on("pointerup", onDragEnd);

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
        const newPosition = this.data.getLocalPosition(this.parent);
        if (this.x <= -190) return (this.x = -189); //limite no 0
        if (this.x >= -41) return (this.x = -42); //limite no 100
        // if(this.y + 1 <= newPosition.y) return

        if (this.x <= newPosition.x) {
          //x do mouse maior q a seta
          this.x += 10;
          if (tela_preta.alpha <= 0) {
            tela_preta.alpha = 0;
          } //volta o alpha pra 0
          const incrementAmount = 0.09;
          tela_preta.alpha -= incrementAmount;
        }
        if (this.x >= newPosition.x) {
          //x da seta maior q o mouse
          this.x -= 10;
          if (tela_preta.alpha >= 1) {
            tela_preta.alpha = 1;
          } //incrementa o alpha pra escurecer a lamina
          const incrementAmount = 0.09;
          tela_preta.alpha += incrementAmount;
        }
      }
    }

    function resetMicroscopio() {
      tela_preta.alpha = 1;
      seta_luz.x = -195;
      seta_luz.y = 532;
    
      // Resetar imagens
      
      imagens.forEach((imagem) => {
        imagem.scale.x = 0.09; // Valor inicial para escala x
        imagem.scale.y = 0.09; // Valor inicial para escala y

        imagem.x = imagem.initialX;
        imagem.y= imagem.initialY;
      }); 


      gsap.to(revolver, { angle: 0, duration: 0.2 });
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
    simulador_container.children.forEach((sprite) => {
      sprite.on("mouseover", () => {
        if (sprite.type !== "fundo") {
          sprite.tint = 0xc2c2c2;
        }
      });
      sprite.on("mouseout", () => {
        sprite.tint = 0xffffff;
      });
    });

    view_storage2_container.children.forEach((sprite) => {
      sprite.on("mouseover", () => {
        gsap.to(sprite, { pixi: { tint: "0xcacaff" } });
      });
      sprite.on("mouseout", () => {
        gsap.to(sprite, { pixi: { tint: "0xffffff" } });
      });
    });

    all.box_slides_container.children.forEach((sprite) => {
      sprite.on("mouseover", () => {
        gsap.to(sprite, { pixi: { tint: "0xcacaff", scale: 0.72 } });
      });
      sprite.on("mouseout", () => {
        gsap.to(sprite, { pixi: { tint: "0xffffff", scale: 0.65 } });
      });
    });

    gsap.timeline().add(footer(app, resources, texts));
  });
})();
