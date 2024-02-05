function encript(){
    let oracion=  document.getElementById('ingreso').value;
    let minusculas= oracion.toLowerCase();
    //alert(minusculas);
    let cifrado= minusculas
        .replace('e',"enter")
        .replace('i',"imes")
        .replace('a',"ai")
        .replace('o',"ober")
        .replace('u',"ufat");
     document.querySelector('#mostrar').value =cifrado;
    //alert(cifrado)
};

function dencript(){
    let oracion=  document.getElementById('ingreso').value;
    let minusculas= oracion.toLowerCase();
    //alert(minusculas);
    let cifrado= minusculas
        .replace("enter",'e')
        .replace("imes",'i')
        .replace("ai",'a')
        .replace("ober",'o')
        .replace("ufat",'u');
        document.querySelector('#mostrar').value =cifrado;
    //alert(cifrado)
};