var rn=0
var score=0
function bubble(){
    var bubbles=""
    for(var i=0;i<=135;i++){
    var bulbule= Math.floor(Math.random()*10)
    bubbles +=`<div class="bubble">${bulbule}</div>`;
     }

    document.querySelector("#pbtm").innerHTML=bubbles;
}
function runtimer(){
    var timer=60
        var timeint=setInterval(function(){
            if(timer>0){
            timer--;
            document.querySelector("#time-interval").textContent=timer
            }
            else{
                clearInterval(timeint);
                document.querySelector("#pbtm").innerHTML=`<div>Game Over!</div>`;
            }
        },1000)
}
function scoreboost(){
    score+=10
    document.querySelector("#scorebatao").textContent=score
    

}
function trials(){
    rn=Math.floor(Math.random() * 10);
    document.querySelector("#hits").textContent=rn;
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var num= Number(details.target.textContent)
    if (num===rn){
        scoreboost()
        bubble()
        trials()
    }
})
runtimer()
bubble()

trials()