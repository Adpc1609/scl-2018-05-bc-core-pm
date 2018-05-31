 window.cipher = {
  encode: (offset,termino) => {
    /* los elementos que queremos desplazar a la derecha */

    console.log('encode');
    newTermino='';
    for (var i = 0; i<termino.length; i++) {
       // texto a descifrar-convertir a Mayusculas/ obtener ascii en esa posicion
       resultAscii= termino[i].toUpperCase().charCodeAt();//obtenemos ascii;

       if(resultAscii===32){
        newTermino+=' ';
      }else{
        newAscii = (resultAscii - 65 + Number(offset)) % 26 + 65;//formula cifrado cesar
        resultnew = String.fromCharCode(newAscii); //convierte el ascii sustituto en la nueva letra s
        newTermino+=resultnew;
      }
       
      }
      console.log(newTermino);
    return newTermino;
   

  },

  decode: (offset,termino) => {
    //console.log('decode');
    newTermino='';
    for (var i =0; i<termino.length; i++){
      resultAscii=termino[i].toUpperCase().charCodeAt();
      if(resultAscii===32){
        newTermino+=' ';
      }else{
        newAscii= (resultAscii + 65 - Number(offset)) % 26 + 65;
        resultnew = String.fromCharCode(newAscii);
        newTermino+=resultnew;
       
      }
      
    }
    console.log(newTermino);
    return newTermino;
    

    /* los elementos que queremos desplazar a la izquierda */
  }
} 