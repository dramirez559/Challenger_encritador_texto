function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase(); 
    // i afecta muyus y minus
    // g para toda la linea u oracion
    // m afecta a multiples lineas o parrafos
 
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto-write").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase(); 
    // i afecta muyus y minus
    // g para toda la linea u oracion
    // m afecta a multiples lineas o parrafos
 
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto-write").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido  = document.querySelector("#texto-write");
    contenido.select();
    document.execCommand("copy")
    alert("!Copiado¡");
}