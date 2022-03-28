const reply = (res)=>{
     var res = document.getElementById(res);
     console.log(res);
     if(res.className == "replies"){
         res.className == "show";
     }
     else if (res.className=="show"){
         res.className=='replies';
     }
}
const like = document.getElementById("leftlike");
const singleclick  = ()=>{
    like.style.fontWeight = 'bold';
    like.style.background='#bbe1fa';
    like.style.color='#1b262c';
    like.innerHTML= 'liked';
}
const doubleclick  = ()=>{
    like.style.fontWeight ='nomal';
    like.style.background='#3282b8';
    like.style.color='#fff';
    like.innerHTML= 'like';
}
var clickcount = 0 ;
like.addEventListener('click', function(){
   clickcount++;
   if(clickcount===1){
     singleClickTimer=setTimeout(function(){
         clickcount=0;
         singlrclick();
     },400);
   } else if (clickcount===2){
       clearTimeout(singleClickTimer);
       clickcount=0;
       doubleclick();
}
},false);
