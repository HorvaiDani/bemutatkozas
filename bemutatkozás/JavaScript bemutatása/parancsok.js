let innerG=document.getElementById('gomb1')
let innerA=document.getElementById('alap1')
let csM=document.getElementById('cs-m')
let csSZ=document.getElementById('cs-sz')
let kep=document.getElementById('kep2')
let objektG=document.getElementById('gomb2')
let objektA=document.getElementById('alap2')

template=[]

innerG.onclick= function(){
    template=``
    template+=`<center><img src="https://lordicon.com/icons/wired/flat/1103-confetti.gif" alt="" id="kep1"></center>`
    innerA.innerHTML=template
}
csM.oninput= function(){
    let mag=csM.value
    kep.style.height=mag+"px"
}
csSZ.oninput= function(){
    let szel=csSZ.value
    kep.style.width=szel+"px"
}

let objektum1={
    nev:"Zöldlma",
    iz:"Savanykás",
    holterem:"Fán",
    kep:"https://piachazhoz.hu/wp-content/uploads/2020/05/Z%C3%B6ldalma-min.jpeg"
}
let objektum2={
    nev:"Sárkánygyümölcs",
    iz:"Finoman savanykás",
    holterem:"Kaktuszon",
    kep:"https://file.culinaris.hu/product_images/800x600/resize/006309_mydtqfom.jpg?v=2"
}
let objektum3={
    nev:"Szamóca",
    iz:"Általában édes, de lehet savanyú is",
    holterem:"Bokron",
    kep:"https://www.egzotikusdisznovenyek.hu/wp-content/uploads/2023/05/eper-dekoracio.jpg"
}

let objektumok=[objektum1,objektum2,objektum3]

objektG.onclick= function(){
    template=``
    template+=`<br><table>
    <tr>
        <th>A gyümölcs neve</th>
        <th>A gyümöcs íze</th>
        <th>Hol terem</th>
        <th>Kép a gyümölcsrőll</th>
    </tr>`
    for (objekt of objektumok) {
        template += `
        <tr>
            <td>${objekt.nev}</td>
            <td>${objekt.iz}</td>
            <td>${objekt.holterem}</td>
            <td><center><img src="${objekt.kep}" alt="" id="objekt-kep"></center></td>
        </tr>`
    }
    template+=`</table>`
    objektA.innerHTML=template
}