let valtG=document.getElementById('ugroablak')
let valtG2=document.getElementById('rejtett')
let valtA=document.getElementById('valt-alap')

valtG.onclick= function(){
    alert("ez egy felugró ablak")
}

valtG2.onclick= function(){
    template=``
    template+=`<p id="rejt-szov">Ez egy rejtett kép amit eddig nem láttál:</p>
    <img src="rejtett_kep.webp" alt="" id="valt-kep">`
    valtA.innerHTML=template

}