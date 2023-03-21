function verInnerHTML(){
    let tituloPrincipal1  = document.getElementById("tituloPrincipal1");
    let tituloPrincipal2  = document.getElementById("tituloPrincipal2");
    let tituloPrincipal3  = document.getElementById("tituloPrincipal3");

    let contenidoHTML    = tituloPrincipal1.innerHTML;
    let contenidoTEXT    = tituloPrincipal2.innerText;
    let contenidoContent = tituloPrincipal3.textContent;

    alert("innerHTML: "   + contenidoHTML);
    alert("innerText: "   + contenidoTEXT);
    alert("textContent: " + contenidoContent);

    let sectionInnerHTML   = document.getElementById("vacioInnerHTML");
    let sectionInnerText   = document.getElementById("vacioInnerText");
    let sectiontextContent = document.getElementById("vacioTextContent");

    sectionInnerHTML.innerHTML     = contenidoHTML;
    sectionInnerText.innerText     = contenidoTEXT;
    sectiontextContent.textContent = contenidoContent;
}
let botonInnerHtml = document.getElementById("botonInnerHtml");
    botonInnerHtml.addEventListener("click", verInnerHTML, true);
/*
let botonInnerText = document.getElementById("botonInnerText");
    botonInnerText.addEventListener("click", verTextHTML, true);

let botonTextContent = document.getElementById("botonTextContent");
    botonTextContent.addEventListener("click", verTextContent, true);
*/
