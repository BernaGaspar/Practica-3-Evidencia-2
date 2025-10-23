const cmbContinentes = document.getElementById("cmbContinentes");
const cmbPaises = document.getElementById("cmbPaises");
const Boton = document.getElementById("Boton");
const Nombres = document.getElementById("Nombres");
const Capital = document.getElementById("Capital");
const Region = document.getElementById("Region");
const Subregion = document.getElementById("Subregion");
const Frontera = document.getElementById("Frontera");
const Idioma = document.getElementById("Idioma");
const AreaPoblacion = document.getElementById("AreaPoblacion");
const Bandera = document.getElementById("Bandera");
const Escudo = document.getElementById("Escudo");

async function Pais() {
    const Seleccion = cmbPaises.value;
    const Info_Pais = await fetch ("https://restcountries.com/v3.1/name/" + Seleccion);
    const Resp_Pais = await Info_Pais.json();
    
    Nombres.innerText = "";
    const Titulo_Nombres = document.createElement("h1");
    Titulo_Nombres.innerText = "Nombres del pais:";
    Nombres.appendChild(Titulo_Nombres);
    const Titulo_Nombre_Comun = document.createElement("h3");
    Titulo_Nombre_Comun.innerText = "Nombre comun";
    Nombres.appendChild(Titulo_Nombre_Comun);
    const Nombre_Comun = document.createElement("p");
    Nombre_Comun.innerText = Resp_Pais[0].translations.spa.common;
    Nombres.appendChild(Nombre_Comun);
    const Titulo_Nombre_Oficial = document.createElement("h3");
    Titulo_Nombre_Oficial.innerText = "Nombre oficial";
    Nombres.appendChild(Titulo_Nombre_Oficial);
    const Nombre_Oficial = document.createElement("p");
    Nombre_Oficial.innerText = Resp_Pais[0].translations.spa.official;
    Nombres.appendChild(Nombre_Oficial);

    Capital.innerText = "";
    const Titulo_Capital = document.createElement("h1");
    Titulo_Capital.innerText = "Capital del pais:";
    Capital.appendChild(Titulo_Capital);
    const Capital_Pais = document.createElement("p");
    Capital_Pais.innerText = Resp_Pais[0].capital[0];
    Capital.appendChild(Capital_Pais);
    
    Region.innerText = "";
    const Titulo_Continente = document.createElement("h1");
    Titulo_Continente.innerText = "Continente(s) del pais:";
    Region.appendChild(Titulo_Continente);
    Resp_Pais[0].continents.forEach(c => {
        const continent = document.createElement("p");
        continent.innerText = c;
        Region.appendChild(continent);
    });

    Subregion.innerText = "";
    const Titulo_Subregion = document.createElement("h1");
    Titulo_Subregion.innerText = "Subregion del pais:";
    Subregion.appendChild(Titulo_Subregion);
    const Subregion_Pais = document.createElement("p");
    Subregion_Pais.innerText = Resp_Pais[0].subregion;
    Subregion.appendChild(Subregion_Pais);
    
    Frontera.innerText = "";
    const Titulo_Frontera = document.createElement("h1");
    Titulo_Frontera.innerText = "Frontera(s) del pais:";
    Frontera.appendChild(Titulo_Frontera);
    Resp_Pais[0].borders.forEach(b => {
        const border = document.createElement("p");
        border.innerText = b;
        Frontera.appendChild(border);
    });

    AreaPoblacion.innerText = "";
    const Titulo_Area = document.createElement("h1");
    Titulo_Area.innerText = "Area del pais:";
    AreaPoblacion.appendChild(Titulo_Area);
    const Area_Pais = document.createElement("p");
    Area_Pais.innerText = Resp_Pais[0].area + " kilometros cuadrados";
    AreaPoblacion.appendChild(Area_Pais);
    const Titulo_Poblacion = document.createElement("h1");
    Titulo_Poblacion.innerText = "Poblacion del pais:";
    AreaPoblacion.appendChild(Titulo_Poblacion);
    const Poblacion_Pais = document.createElement("p");
    Poblacion_Pais.innerText = Resp_Pais[0].population + " habitantes";
    AreaPoblacion.appendChild(Poblacion_Pais);

    Bandera.innerText = "";
    const Titulo_Bandera = document.createElement("h1");
    Titulo_Bandera.innerText = "Bandera: ";
    const Bandera_Pais = document.createElement("img");
    Bandera_Pais.setAttribute("src", Resp_Pais[0].flags.png);
    Bandera.appendChild(Titulo_Bandera);
    Bandera.appendChild(Bandera_Pais);
    
    Escudo.innerText = "";
    const Titulo_Escudo = document.createElement("h1");
    Titulo_Escudo.innerText = "Escudo del pais: ";
    const Escudo_Pais = document.createElement("img");
    Escudo_Pais.setAttribute("src", Resp_Pais[0].coatOfArms.png);
    Escudo.appendChild(Titulo_Escudo);
    Escudo.appendChild(Escudo_Pais);
}

Boton.addEventListener("click", e => {
    e.preventDefault();
    Pais();
});

cmbContinentes.addEventListener("change", async() => {
    const Seleccion = cmbContinentes.value;

    if (Seleccion != "") {
        cmbPaises.innerHTML = "<option>-- Selecciona --</option>";
        
        const Info_Continentes = await fetch ("https://restcountries.com/v3.1/region/" + Seleccion);
        const Resp_Continentes = await Info_Continentes.json();

        Resp_Continentes.forEach(Pais => {
            const Elemento = document.createElement("option");
            Elemento.innerText = Pais.name.common;
            cmbPaises.appendChild(Elemento);
        });

        return;
    }
    else {
        cmbPaises.innerHTML = "<option>-- Selecciona un continente --</option>";

    }
});