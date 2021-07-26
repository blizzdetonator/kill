///////////////////
/////

const $ = x => document.getElementById(x);
////


var x = 0;
var y = 0;

var xjoy = 0;
var yjoy = 0;

var cvs = $('cvs')
var ctx = cvs.getContext('2d')


///// RENDERING THE SCENE /////
const draw = e => {

  ctx.clearRect(0,0,cvs.width,cvs.height)
  
  x += xjoy/50 * 10
  y += yjoy/50 * 10

  ctx.fillStyle = "red"
  ctx.fillRect(x,y,100,100)
  
  
  window.requestAnimationFrame(draw)
};window.requestAnimationFrame(draw)


const drawJoystick = () => {

  const size = 40/100*window.innerWidth;
  //////
  const foundation = document.createElement('div')
  foundation.style.height = size+'px'
  foundation.style.width = size+'px'
  foundation.style.left = 30/100*window.innerWidth+'px'
  foundation.style.top = '1000px'
  foundation.id = "joyparent"
  document.body.appendChild(foundation)
  //////
  const joystick = document.createElement('div')
  joystick.style.height = size-4+'px'
  joystick.style.width = size-4+ 'px'
  joystick.style.left = 0
  joystick.style.top = 0
  joystick.id = "joymain"
  foundation.appendChild(joystick)
  ///////
  const drawJoy = e => {
    joystick.style.left = xjoy/100*parseInt(joystick.style.width)+'px'
    joystick.style.top = yjoy/100*parseInt(joystick.style.width)+'px'
    $('cs').innerHTML = `x : ${xjoy} y : ${yjoy}`
    window.requestAnimationFrame(drawJoy)
  }
  window.requestAnimationFrame(drawJoy)
  
  
  joystick.ontouchstart = ev => {
    const touch = ev.targetTouches[0];
    
    const p = (touch.pageY - parseInt(foundation.style.top) - parseInt(joystick.style.height)/2)/388 * 100
    const p2 =(touch.pageX - parseInt(foundation.style.left)- parseInt(joystick.style.width)/2)/338 * 100
    
    ////////////////////////
    if(p <= 50 && p >= -50){
      yjoy = p
    }else{
      if(p >= 50){
      yjoy = 50}
      else{yjoy = -50}
    };
    ////////////////////////
    if(p2 <= 50 && p2 >= -50){
      xjoy = p2
    }else{
      if(p2 >= 50){
      xjoy = 50}
      else{xjoy= -50}
    }
    ////////////////////////
    ev.preventDefault()
  }
  
  joystick.ontouchmove = ev => {
    const touch = ev.targetTouches[0];
    
    const p = (touch.pageY - parseInt(foundation.style.top) - parseInt(joystick.style.height)/2)/388 * 100
    const p2 =(touch.pageX - parseInt(foundation.style.left)- parseInt(joystick.style.width)/2)/338 * 100
    
    ////////////////////////
    if(p <= 50 && p >= -50){
      yjoy = p
    }else{
      if(p >= 50){
      yjoy = 50}
      else{yjoy = -50}
    };
    ////////////////////////
    if(p2 <= 50 && p2 >= -50){
      xjoy = p2
    }else{
      if(p2 >= 50){
      xjoy = 50}
      else{xjoy= -50}
    }
    ////////////////////////
    ev.preventDefault()
  }
  
  joystick.ontouchend = ev => {
    xjoy = 0;yjoy = 0;
  }

}

drawJoystick()





