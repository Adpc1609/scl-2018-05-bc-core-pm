
function encode(){
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

        console.log('datos validos');
         let response =window.cipher.encode(numHash, texto);
 // console.log("event click", termino, numHash);

    // document.getElementById("termino").value = "me vas a pagar con......";
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

        console.log('datos validos');
         let response =window.cipher.decode(numHash, texto);
 // console.log("event click", termino, numHash);

    // document.getElementById("termino").value = "me vas a pagar con......";
}