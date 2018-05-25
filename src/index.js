
function encode(){
    //validacion de que se intoduca un numero en desplazamiento
    //valida que el textarea no este vacio
    let numHash= document.getElementById("numHash").value;
    let texto= document.getElementById('termino').value; 
    let codificado='';
    let resultAscii;//guardar ascii de la letra
    let newAscii; //codigo ascii por cada letra
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
 console.log("event click", termino, numHash);
 for (var i = 0; i<texto.length; i++) {
    let texto= document.getElementById('termino').value; 
     resultAscii= texto(i).charCodeAt();//obtenemos ascii;
     newAscii= resultAscii+numHash;
     codificado= codificado.concat(string.fromCharcode(newAscii));
    }
  //return salida;
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


}