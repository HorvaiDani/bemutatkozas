let szelG=document.getElementById('szel-gomb')
let szelB=document.getElementById('szel-beker')
let szelA=document.getElementById('szel-alap')
let szelSz=document.getElementById('szel-szam')
let szelG2=document.getElementById('szel-gomb2')
let szelA2=document.getElementById('szel-alap2')

szelG.onclick= function(){
    ertek=szelSz.value
    if(ertek == 1){
        szelA.innerHTML=`<p>Ez az egyik döntése a gépnek</p>`
    }
    else if(ertek == 2){
        szelA.innerHTML=`<p>Ez a másik döntése a gépnek</p>`
    }
    else{
        szelA.innerHTML=`<p>Rossz számot adtál meg</p>`
    }
}
szelG2.onclick= function(){
    let ertek = parseInt(szelB.value);
    ertek= Math.min(ertek, 200)
    let uzenet = ""
    
    for (let i = 0; i < ertek; i++) {
        uzenet += "Szia! "
    }
    szelA2.innerHTML = uzenet
}