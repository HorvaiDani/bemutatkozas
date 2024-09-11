let Vnevek = ["Kovács", "Szabó", "Tóth", "Nagy", "Horváth", "Varga", "Kiss", "Molnár", "Németh", "Farkas", "Balogh", "Takács", "Juhász", "Mészáros", "Simon", "Rácz", "Szalai", "Fekete", "Oláh", "Lakatos"];
let Knevek = ["András", "Balázs", "Csaba", "Dániel", "Endre", "Ferenc", "Gábor", "Henrik", "István", "József", "Károly", "László", "Máté", "Nándor", "Olivér", "Péter", "Róbert", "Sándor", "Tamás", "Viktor"];
let kepek = [
    "https://thumbs.dreamstime.com/z/attractive-young-man-looking-sideways-close-up-portrait-manlooking-isolated-white-69311157.jpg",
    "https://images.pexels.com/photos/3857807/pexels-photo-3857807.jpeg?cs=srgb&dl=pexels-milad-heran-3857807.jpg&fm=jpg",
    "https://i.pinimg.com/originals/3e/a5/85/3ea585e00b834901e22334df3b4d2be1.jpg",
    "https://i.pinimg.com/originals/7a/b8/9b/7ab89b30fb92d47be19a41a779412de6.jpg",
    "https://th.bing.com/th/id/OIP.jbaH05L7cM45RLleMB8tPgAAAA?pid=ImgDetMain",
    "https://pluspng.com/img-png/businessman-png-image-1762.png",
    "https://www.pngarts.com/files/3/Smiling-Man-PPNG-Download-Image.png",
    "https://th.bing.com/th/id/OIP.fHH6YFm_qjQqM7BiOpKsVAHaNI?pid=ImgDetMain",
    "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://th.bing.com/th/id/OIP.d9JTIt8znX2FXaFc7IllpAHaLn?pid=ImgDetMain",
    "https://th.bing.com/th/id/R.71de790d06df75f8a4ad34d193c5f45c?rik=KfF7lPfxS%2fT%2blA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.Z6y6PdjHSJkN2-4BS8M7LQAAAA?pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.H4BzR8yBbVKuD6LR6QZZ5gAAAA?pid=ImgDetMain",
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/453-felix-84_1.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=003bfca82e3b16a44789d7beaddbcd2a",
    "https://th.bing.com/th/id/OIP.VSW-YaMpxvdgmCMD9UcSMgHaJ4?pid=ImgDetMain",
    "https://th.bing.com/th/id/R.7de948f764943e4fddc7181167f84371?rik=NQh5Yxx0mlWx0Q&pid=ImgRaw&r=0",
    "https://i.pinimg.com/736x/6a/65/39/6a6539d5af302ef0750a080fb92052b4--red-flannel-plaid-flannel-shirts.jpg"
];

let general = document.getElementById('general');
let alap = document.getElementById('alap');
let legordulo = document.getElementById('legordulo')

class MindenKarakter {
    constructor() {
        this.kep = "unknown";
        this.matJegy = 0;
        this.magyJegy = 0;
        this.webJegy = 0;
        this.vneve = "fix";
        this.kneve = "ipszilon";
    }
}

let karakterek = [];

function karakterGeneralas() {
    let ujKari = new MindenKarakter();
    ujKari.matJegy = Math.floor(Math.random() * 5) + 1;
    let randomKep = Math.floor(Math.random() * kepek.length);
    ujKari.kep = kepek[randomKep];
    ujKari.magyJegy = Math.floor(Math.random() * 5) + 1;
    ujKari.webJegy = Math.floor(Math.random() * 5) + 1;
    let randomVnev = Math.floor(Math.random() * Vnevek.length);
    let randomKnev = Math.floor(Math.random() * Knevek.length);
    ujKari.vneve = Vnevek[randomVnev];
    ujKari.kneve = Knevek[randomKnev];

    console.log('Az új kari vezetékneve: ' + ujKari.vneve);
    console.log('Az új kari keresztneve: ' + ujKari.kneve);
    console.log('Az új kari matek jegye: ' + ujKari.matJegy);
    console.log('Az új kari magyar jegye: ' + ujKari.magyJegy);
    console.log('Az új kari web jegye: ' + ujKari.webJegy);
    console.log('Az új kari képe: ' + ujKari.kep);

    karakterek.push(ujKari);
    console.log(karakterek);

    displayCharacter(ujKari);

    let legordTemp = `<select name="" id="karakter-lista">
        <option value="">Generált karakterek</option>`;
    karakterek.forEach((karakter, index) => {
        legordTemp += `<option value="${index}">${karakter.vneve} ${karakter.kneve}</option>`;
    });
    legordTemp += `</select>`;
    legordulo.innerHTML = legordTemp;

    let karakterLista = document.getElementById('karakter-lista');
    karakterLista.onchange = function() {
        let selectedIndex = karakterLista.value;
        if (selectedIndex !== "") {
            displayCharacter(karakterek[selectedIndex]);
        }
    }

    let csSzel = document.getElementById('cs-szel');
    let csMag = document.getElementById('cs-mag');

    csSzel.oninput = function() {
        let szeles = csSzel.value;
        document.getElementById('img').style.width = szeles + "px";
    }

    csMag.oninput = function() {
        let magas = csMag.value;
        document.getElementById('img').style.height = magas + "px";
    }
}

function displayCharacter(karakter) {
    let template = `
        <div id="adat">
            <div id="nevek">
                <h2>Vezetéknév: ${karakter.vneve}</h2>
                <h2>Keresztnév: ${karakter.kneve}</h2>
            </div>
            <table>
                <tr>
                    <th>Tantárgy</th>
                    <th>Jegyek</th>
                </tr>
                <tr>
                    <td>Matek</td>
                    <td>${karakter.matJegy}</td>
                </tr>
                <tr>
                    <td>Magyar</td>
                    <td>${karakter.magyJegy}</td>
                </tr>
                <tr>
                    <td>Webprogramozás</td>
                    <td>${karakter.webJegy}</td>
                </tr>
                <tr>
                    <td>Átlag</td>
                    <td>${((karakter.matJegy + karakter.magyJegy + karakter.webJegy) / 3).toFixed(2)}</td>
                </tr>
            </table>
            <img src="${karakter.kep}" alt="" id="img"><br>
            <div id="input">
                Kép magassága:<input type="range" min="200" max="400" id="cs-mag"><br>
                Kép szélessége:<input type="range" min="200" max="400" id="cs-szel">
            </div>
        </div>`;

    alap.innerHTML = template;

    let csSzel = document.getElementById('cs-szel');
    let csMag = document.getElementById('cs-mag');

    csSzel.oninput = function() {
        let szeles = csSzel.value;
        document.getElementById('img').style.width = szeles + "px";
    }

    csMag.oninput = function() {
        let magas = csMag.value;
        document.getElementById('img').style.height = magas + "px";
    }
}

general.onclick = function() {
    karakterGeneralas();
}

let vissza=document.getElementById('vissza')

vissza.addEventListener("click", function() {
    window.location.href = "/index.html";
});