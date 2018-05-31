
function encode(){
    //validacion de que se intoduca un numero en desplazamiento
    //valida que el textarea no este vacio
    let offset= Number(document.getElementById("number").value);
    let string= document.getElementById("textBox").value; 
    
        if(string===''){ 
            console.log('el termino no puede ser vacio') 
            return;
        }
    
        if(offset===''||isNaN(offset) ){
            console.log('debe ser un numero') 
            return;
        } 

        if(offset<=0 ){ //valida que el offset no sea negativo o cero
            console.log('no puede ser negativo o cero')
            return;
        }

        console.log('datos validos',document.getElementById("msgEncode"));
         let response =cipher.encode(string,offset);
         document.getElementById("textBox").value= response;
         document.getElementById("msgEncode").style.display = "block";
         document.getElementById("msgDecode").style.display = "none";
      
    
}

function decode(){
    let offset= Number(document.getElementById("number").value);
    let string= document.getElementById("textBox").value; 
        if(string===''){ 
            console.log('el termino no puede ser vacio') 
            return;
        }
        if(offset===''||isNaN(offset) ){
            console.log('debe ser un numero') 
            return;
        } 
        if(offset<=0 ){
            console.log('no puede ser negativo o cero') 
            return;
        } 

        console.log('datos validos');
         let response =cipher.decode(string,offset);
         document.getElementById("textBox").value= response;
         document.getElementById("msgEncode").style.display = "none";
         document.getElementById("msgDecode").style.display = "block";
      console.log("event click", string, offset);


}

function resetData(){
    console.log('clear')
    document.getElementById("textBox").value='';
    document.getElementById("number").value='';
    document.getElementById("msgEncode").style.display = "none";
    document.getElementById("msgDecode").style.display = "none";
}