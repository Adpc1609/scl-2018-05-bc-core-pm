
function encode(){
    //validacion de que se intoduca un numero en desplazamiento
    //valida que el textarea no este vacio
    let numHash= document.getElementById("numHash").value;
    let texto= document.getElementById('termino').value; 
    
        if(texto===''){ 
            console.log('el termino no puede ser vacio') 
            return;
        }
    
        if(numHash===''||isNaN(numHash) ){
            console.log('debe ser un numero') 
            return;
        } 

        if(numHash<=0 ){ //valida que el offset no sea negativo o cero
            console.log('no puede ser negativo o cero') 
            return;
        }

        console.log('datos validos',document.getElementById("msgEncode"));
         let response =window.cipher.encode(numHash, texto);
         document.getElementById("termino").value= response;
         document.getElementById("msgEncode").style.display = "block";
         document.getElementById("msgDecode").style.display = "none";
      
    
}

function decode(){
    let numHash= document.getElementById("numHash").value;
    let texto= document.getElementById('termino').value; 
        if(texto===''){ 
            console.log('el termino no puede ser vacio') 
            return;
        }
        if(numHash===''||isNaN(numHash) ){
            console.log('debe ser un numero') 
            return;
        } 
        if(numHash<=0 ){
            console.log('no puede ser negativo o cero') 
            return;
        } 

        console.log('datos validos');
         let response =window.cipher.decode(numHash, texto);
         document.getElementById("termino").value= response;
         document.getElementById("msgEncode").style.display = "none";
         document.getElementById("msgDecode").style.display = "block";
      console.log("event click", termino, numHash);


}

function resetData(){
    console.log('clear')
    document.getElementById("termino").value='';
    document.getElementById("numHash").value='';
    document.getElementById("msgEncode").style.display = "none";
    document.getElementById("msgDecode").style.display = "none";
}