
var
  letterPlace=document.getElementById("letterPlace");
var button=document.getElementById("send");
var colorWord=document.getElementById("colorWord");
var pickColor=document.getElementById("pickColor");
var finalAns=document.getElementById("finalAns");
function getPromiseFromEvent(item, event) {
  return new Promise((resolve) => {
    const listener = () => {
      item.removeEventListener(event, listener);
      resolve();
    }
    item.addEventListener(event, listener);
  })
}

var arr=[...Array(27)].map(x => 0);
var values=[...Array(27)].map(x => [0,0]);
//console.log(values);
var distances=0;
//console.log(arr);
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if(result){
      var r= parseInt(result[1], 16);
      var g= parseInt(result[2], 16);
      var b= parseInt(result[3], 16);
      return [r,g,b];
  } 
  return null;
}


async function startChoosing(){
   for(var i=0;i<54;){
      var num=Math.floor(Math.random() * 27);
     if(arr[num]==2){
       continue;}
     else
     {
       i++;
     
letterPlace.innerHTML=String.fromCharCode(num+1488);
     
           //arr[letter].charCodeAt(0);
         await getPromiseFromEvent(button, "click");}
        //console.log(pickColor.value);
        //console.log(arr[num]);
        values[num][arr[num]]=hexToRgb(pickColor.value);
      console.log(num+" : "+values[num]);
        arr[num]=arr[num]+1;
      }
    for(var i=0;i<27;i++){
    console.log(i+": "+values[i]);
     }
  
  //it is not supposed to be the same color the two times you chose them they were different color
  var countDifR=0;
  var countDifG=0;
  var countDifB=0;
  for(var i=0;i<27;i++){
    countDifR+=Math.abs(values[i][0][0]-values[i][1][0]);
    countDifG+=Math.abs(values[i][0][1]-values[i][1][1]);
    countDifB+=Math.abs(values[i][0][2]-values[i][1][2]);
     }
  //console.log(countDifR+" "+countDifG+" "+countDifB);
  // pickColor.remove();
  // button.remove();
  // colorWord.remove();
  if(countDifR+countDifG+countDifB<1620){
    finalAns.innerHTML=" יש לכן כישרון מיוחד, יש לכם סינסתזיה, או שעשיתם את כל האותיות אותו צבע=)"
  }
  else{
    var countRGB=countDifR+countDifG+countDifB;
    if(countRGB<2000){
    var percentage=((countRGB-1620)/380)*100;
      
      finalAns.innerHTML=" הסיכוי שיש לכם סינסתזיה הוא "+(100-percentage);
      }
    else{
      finalAns.innerHTML= "לא נראה שיש לכם סינסתזיה";
    }
  }
  //console.log(arr);
  //console.log(arr.reduce((a, b) => a + b, 0))
  
}