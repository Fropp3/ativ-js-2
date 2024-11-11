const modal = document.getElementById("div")

function oi(){
    
    div.style.display="block";
}
function close()
{
div.style.display="none"
}

function mascara_tel()
{
    var tel_formatado =
    document.getElementById("tel").value
if (tel_formatado[0] != "(") {
    if (tel_formatado[0] != undefined) {
        document.getElementById("tel").value = "(" + tel_formatado[0];
    }
}
if (tel_formatado[3] != ")") {
    if (tel_formatado[3] != undefined) {
        document.getElementById("tel").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
    }
}
if (tel_formatado[9] != "-") {
    if (tel_formatado[9] != undefined) {
        document.getElementById("tel").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
    }
}
if (tel_formatado[4] != " ") {
    if (tel_formatado[4] != undefined) {
        document.getElementById("tel").value = tel_formatado.slice(0, 4) + " " + tel_formatado[4];
    }
}
if (tel_formatado[6] != " ") {
    if (tel_formatado[6] != undefined) {
        document.getElementById("tel").value = tel_formatado.slice(0, 6) + " " + tel_formatado[6];
    }
}
}