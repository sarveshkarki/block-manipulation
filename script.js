window.onload=function(){
  let block = document.getElementById('block');
  //Position-Y Manipulation
  let posY=document.getElementById('pos-y');
  posY.onchange = function(){
    block.style.top=posY.value+'px';
  }
  //Position-x Manipulation
  let posX=document.getElementById('pos-x');
  posX.onchange = function(){
    block.style.left=posX.value+'px';
  }
  //Size Manipulation
  let size=document.getElementById('size');
  size.onchange = function(){
    block.style.transform='scale('+size.value+')' ;
  }
  //Opacity Manipulation
  let opacity=document.getElementById('opacity');
  opacity.onchange = function(){
    block.style.opacity=opacity.value;
  }
  //Sape Manipulation
  let selector=document.getElementById('shape-select');
  let okButton=document.getElementById('ok-shape');
  okButton.onclick=function(){
    let option=selector.value;
    if(option ==='1'){
      block.style.borderRadius='0%';
      block.style.transform='rotate(0deg)';
    }else if (option==='2') {
      block.style.borderRadius='50%';
    }else if (option==='3') {
      block.style.borderRadius='0';
      block.style.transform='rotate(45deg)';
    }
  }
  //HEX Manipulation
  let hex = document.getElementById('hex');
  hex.onkeypress = function(e){
    if (e.which==13) {
      block.style.backgroundColor=`#`+ hex.value;
    }
  }
  //rgba Manipulation
  let rgbaR=document.getElementById('rgba-r');
  let rgbaG=document.getElementById('rgba-g');
  let rgbaB=document.getElementById('rgba-b');
  let rgbaA=document.getElementById('rgba-a');

  let rgbaCont=document.querySelector('.rgba-container');
  let rgbaInputs=rgbaCont.querySelector('input');

  for (let i = 0; i < rgbaInputs.length; i++) {
    rgbaInputs[i].onchange=function() {
      block.style.backgroundColor='rgba('+rgbaR.value+','+rgbaG.value+','+rgbaB.value+','
      +rgbaA.value+')';
    }
  }
}
