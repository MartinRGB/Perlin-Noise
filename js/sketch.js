<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Perlin Noise</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">


<link rel="icon" href="image/1.ico" type="image/x-icon">
<link rel="shortcut icon" href="image/1.ico" type="image/x-icon">

<script type="text/javascript" src="js/dat.gui.min.js"></script>
<script type="text/javascript" src="js/p5.min.js"></script>
<script type="text/javascript" src="js/gif.js"></script>
<script type="text/javascript" src="js/p5.dom.min.js"></script>


<input id="img-path" type="file" />

<style type="text/css">
  *{
    margin:0;
    padding:0;
  }

#credits {
  font-size: 12px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  opacity: 0.8;
  color: #939393;
  max-width: 70%;
  text-align: right;
}

#img-path {
    display: none;
}
.progress-box{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.progress-bar{
  height: 3px;
  width: 0%;
  background-color: #e61d5f;
}
.save-gif-tip{
  display: none;
  margin-bottom: 5px;
  text-align: center;
  font-size: 16px;
  color: white;
}
</style>
</head>
<body>

<div id="credits"> Created by  <a href = "https://weibo.com/psaiaevegas/profile?rightmod=1&wvr=6&mod=personnumber" target="_blank" style="color: #939393;">@亚赛大人</a>  |  <a href = "http://yasaisai.tumblr.com" target="_blank" style="color: #939393;"> Tumblr Arhive </a> </div>
<script type="text/javascript">

var type;
var options ={  
  Background : '#0a0a0a',
  Color1 : '#ffffff',
  Color2 : '#0799f2',
  Color3 : '#45217c',
  Length : 10,
  Nums : 400,
  MaxRadius : 2,
  MinRadius : 2,
  noiseScale: 800,
  ColorMode : 'Normal',
  Random: function () { 
          background(options.Background);
          options.Color1 = [random(0,255),random(0,255),random(0,255)];
          options.Color2 = [random(0,255),random(0,255),random(0,255)];
          options.Color3 = [random(0,255),random(0,255),random(0,255)];
          options.Length = random(1,50); 
          options.Nums = random(200,1000); 
          options.noiseScale = random(200,4000); 
          options.MaxRadius = random(1,10); 
          options.MinRadius = random(1,10); 
          options.ColorMode = random(['Normal','Linera Gradient','Splice']);
        },
}


var text, gui, config;
window.onload = function() {
  document.getElementById('defaultCanvas0').onmousedown = function(e) {
        // 阻止默认行为并取消冒泡
        if(typeof e.preventDefault === 'function') {
            e.preventDefault();
            e.stopPropagation();
        }else {
            e.returnValue = false;
            e.cancelBubble = true;
        }
    }
  gui = new dat.GUI();

  //folder1
  var folder1 = gui.addFolder('Controls');

  var bgcolorControl = folder1.addColor(options, 'Background');
  bgcolorControl.onChange(draw);

  var shapeControl = folder1.add(options, 'ColorMode', ['Normal','Linera Gradient','Radial Gradient','Splice'] );

  var color1Control = folder1.addColor(options, 'Color1');
  color1Control.onChange(draw);

  var color2Control = folder1.addColor(options, 'Color2');
  color2Control.onChange(draw);

  var color2Control = folder1.addColor(options, 'Color3');
  color2Control.onChange(draw);

  var noiseControl = folder1.add(options, 'noiseScale',10,5000);
  noiseControl.onChange(draw);

  var LengthControl = folder1.add(options, 'Length',0.1,50);
  LengthControl.onChange(draw);

  var NumsControl = folder1.add(options, 'Nums',100,2500);
  NumsControl.onChange(draw);

  var RadiusControl = folder1.add(options, 'MaxRadius',1,5);
  RadiusControl.onChange(draw);

  var RadiusControl = folder1.add(options, 'MinRadius',1,5);
  RadiusControl.onChange(draw);

  var RandomControl = folder1.add(options, 'Random');

  folder1.open();
};



</script>

<script type="text/javascript" src="js/sketch.js"></script>
</body>

</html>

