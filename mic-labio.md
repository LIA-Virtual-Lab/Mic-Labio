# Microscópio do labio
## Objects.js:
### imagens:
No "resources" é a parte que acrescenta as imagens, tanto as laminas quanto o cenário, para acrescentar novas laminas puxe o link da AWS e acrescente como no código abaixo:
``` bash 
    imagem_lamina_coracao: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/LaminasFinal/Labio+HB/Untitled3-gigapixel-low_res-scale-4_00x.png",
    imagem_lamina_pulmonar: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/LaminasFinal/Labio+HB/Untitled2-gigapixel-art-scale-2_00x.png",
    imagem_lamina_arterioscieros: "https://liaser.s3.sa-east-1.amazonaws.com/praticas/p11-microsc-pio/LaminasFinal/Labio+HB/Untitled1-gigapixel-low_res-scale-4_00x.png",
```
### Interação:
bg_select_sample é o backgroud que fica a seleção de laminas:
``` bash 
const bg_select_sample = new PIXI.Sprite(resources.bg_select_sample.texture);
  configureObject2(app, bg_select_sample, 0.25, 0, 270, false, true);
  bg_select_sample.zIndex = 1000;
  bg_select_sample.alpha = 0.95;
  bg_select_sample.bg = true;

```
btn_x é  botão que fecha essa seleção:
``` bash 
  const btn_x = new PIXI.Text("X", box_slades_style);
  configureObject2(app, btn_x, 1, 160, 100, true, true);
  allObjects.btn_x = btn_x;
  btn_x.bg = true;
  btn_x.style.fontSize = 30;
  
```

### Para acrescentar novas laminas:
Como vimos no primeiro passo colocamos o nome e a imagem vinda da AWS, precisamos seguir alguns passos para fazer funcionar:

#### Primeiro passo:
Colocar o nome da lamina na parte de "const nome" e aumentando a sua posição de 50 em 50, como na imagem abaixo:
``` bash 
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

```
#### Segunda parte 
Acrescente o botão posicionar que equivale ao botão selecionar lamina, aumente o número de 50 em 50 como na imagem abaixo:
``` bash 
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

```

#### terceira parte
No container " box_slides_container.addChild" acrescente os nomes do que você criou:

``` bash 
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
```

