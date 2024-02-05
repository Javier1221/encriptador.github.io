function encript(){
    if(document.getElementById('ingreso').value==""){
        alert("Por favor ingresa el texto a encriptar");
        const copiado = document.getElementById('copy');
        copiado.disabled = true; 
    }else{
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
         const copiado = document.getElementById('copy');
         copiado.disabled = false; 
        //alert(cifrado)

    }

};

function dencript(){
    if(document.getElementById('ingreso').value==""){
        alert("Por favor ingresa el texto a desencriptar");
    }else{
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
            const copiado = document.getElementById('copy');
            copiado.disabled = false; 
        //alert(cifrado)

    }
};

function copiar(){
    let copiaTexto = document.getElementById('mostrar').value;
    copiaTexto.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

}
