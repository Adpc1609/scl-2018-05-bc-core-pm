window.cipher = {
  encode: (offset,termino) => {
    /* los elementos que queremos desplazar a la derecha */

    console.log('encode');
    newTermino='';
    for (var i = 0; i<termino.length; i++) {
       // texto a descifrar-convertir a Mayusculas/ obtener ascii en esa posicion
       resultAscii= termino[i].toUpperCase().charCodeAt();//obtenemos ascii;
       newAscii = (resultAscii - 65 + Number(offset)) % 26 + 65;
       resultnew = String.fromCharCode(newAscii);
       newTermino+=resultnew;
       
      }
      console.log(newTermino);
    return newTermino;
  },
  decode: (offset,termino) => {
    //console.log('decode');
    newTermino='';
    for (var i =0; i<termino.length; i++){
      resultAscii=termino[i].toUpperCase().charCodeAt();
      console.log(resultAscii);
      newAscii= (resultAscii + 65 - Number(offset)) % 26 + 65;
      resultnew = String.fromCharCode(newAscii);
      newTermino+=resultnew;
     
    }
    console.log(newTermino);
    return newTermino;
    /* los elementos que queremos desplazar a la izquierda */
  }
} 