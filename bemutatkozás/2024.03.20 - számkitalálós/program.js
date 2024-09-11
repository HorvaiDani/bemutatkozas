let btnSors=document.getElementById('sorsol');
let btnTipp=document.getElementById('tipp');
let textBox=document.getElementById('talal');
let valasz=document.getElementById('valasz');
let nehez=document.getElementById('nehez');
let magyarazat=document.getElementById('magyarazat');
let img=document.getElementById('img');
let tippSzam=document.getElementById('tippszam');
let szam=0;
let tippekSzama=0

btnSors.onclick= function(){
    szam=Math.floor(Math.random()*parseInt(nehez.value))+1
    img.src='question.gif'
    console.log(szam)
    tippekSzama=0
    tippSzam.innerHTML="Tippjeid:"
}
btnTipp.onclick=function(){
    let ertek=parseInt(textBox.value)
    if(ertek==szam){
        tippekSzama=tippekSzama+1
        valasz.innerHTML="Eltaláltad, a helyes szám a "+szam
        tippSzam.innerHTML="Tippjeid: "+tippekSzama
        img.src='clap.gif'

    }
    else if(ertek>szam){
        tippekSzama=tippekSzama+1
        valasz.innerHTML="A kitalálandó szám a te számodtól kisebb"
        tippSzam.innerHTML="Tippjeid: "+tippekSzama
        img.src='down.webp'
    }
    else if(ertek<szam){
        tippekSzama=tippekSzama+1
        valasz.innerHTML="A kitalálandó szám a te számodtól nagyobb"
        tippSzam.innerHTML="Tippjeid: "+tippekSzama
        img.src='up.webp'
    }
    else{
        valasz.innerHTML="Nem a "
    }
}
nehez.onchange= function(){
    if(parseInt(nehez.value)==10){
    magyarazat.innerHTML="A gép gondol egy számot 1 és 10 között, amit neked kell kitalálni, minél kevesebb tippből!"
    img.src='question.gif'
    }
    else if(parseInt(nehez.value)==100){
    magyarazat.innerHTML="A gép gondol egy számot 1 és 100 között, amit neked kell kitalálni, minél kevesebb tippből!"
    img.src='question.gif'
    }
    else if(parseInt(nehez.value)==1000){
    magyarazat.innerHTML="A gép gondol egy számot 1 és 1000 között, amit neked kell kitalálni, minél kevesebb tippből!"
    img.src='question.gif'
    }
}

let vissza=document.getElementById('vissza')

vissza.addEventListener("click", function() {
    window.location.href = "/index.html";
});