
function refreshPage(){
  window.location.reload();
}
function rollDice(){
  var myRandomNumber1= Math.floor(Math.random()*6)+1;
  var myRandomNumber2= Math.floor(Math.random()*6)+1;
  document.getElementsByClassName('img1')[0].setAttribute("src","images/dice"+myRandomNumber1+".png");
  document.getElementsByClassName('img2')[0].setAttribute("src","images/dice"+myRandomNumber2+".png");
}
