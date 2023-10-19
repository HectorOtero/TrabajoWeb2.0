document.addEventListener("DOMContentLoaded", function () {
    const darkThemeButton = document.getElementById("cambio-de-tema");
    const body = document.body;
  
    if (localStorage.getItem("tema") === "dark") {
      body.classList.add("dark");
    }
  
    darkThemeButton.addEventListener("click", function () {
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        localStorage.setItem("tema", "light");
      } else {
        body.classList.add("dark");
        localStorage.setItem("tema", "dark");
      }
    });
  });

  async function Picture1() {
    let respuesta = await fetch("JS/imgs.json");
    let datos = await respuesta.json();
  
    let $info = document.querySelector("#info");
  
    $info.innerHTML = `
    
        <figure>
            <img src="${datos.EKKO.img}" alt="${datos.EKKO.name}" class ="fotosjson">
            <figcaption>${datos.EKKO.name}</figcaption>
        </figure>
    
    `;
    }

    async function Picture2() {
        let respuesta = await fetch("JS/imgs.json");
        let datos = await respuesta.json();
      
        let $info = document.querySelector("#info2");
      
        $info.innerHTML = `
        
            <figure>
                <img src="${datos.VIANDCAITLYN.img}" alt="${datos.VIANDCAITLYN.name}" class ="fotosjson">
                <figcaption>${datos.VIANDCAITLYN.name}</figcaption>
            </figure>
        
        `;
        }

        async function Picture3() {
            let respuesta = await fetch("JS/imgs.json");
            let datos = await respuesta.json();
          
            let $info = document.querySelector("#info3");
          
            $info.innerHTML = `
            
                <figure>
                    <img src="${datos.VIANDJINX.img}" alt="${datos.VIANDJINX.name}" class ="fotosjson">
                    <figcaption>${datos.VIANDJINX.name}</figcaption>
                </figure>
            
            `;
            }
  
Picture1();
Picture2();
Picture3();