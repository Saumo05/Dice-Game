var randomnumber1 = Math.floor(Math.random()*6)+1;
var img1="dice"+randomnumber1+".png";
document.querySelector(".dice .img1").setAttribute("src","images/"+img1);
var randomnumber2 = Math.floor(Math.random()*6)+1;
var img2="dice"+randomnumber2+".png";
document.querySelector(".dice .img2").setAttribute("src","images/"+img2);
if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
