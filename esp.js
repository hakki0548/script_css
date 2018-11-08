function showVal(newVal){
  document.getElementById("valBox").innerHTML=newVal;
}
function showVal2(newVal){
  document.getElementById("valBox").innerHTML=newVal;
   
  if (newVal>=0 && newVal<10) window.location = "/?dim=00" + newVal;
  if (newVal>=10 && newVal<100) window.location = "/?dim=0" + newVal;
  if (newVal==100) window.location = "/?dim=" + newVal;
 
}// JavaScript Document