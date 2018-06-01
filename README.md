# Cifrado César
El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## Funcionamiento

Esta pagina te permite cifrar y descifrar mensajes de una forma practica y facil, 
ademas de poder limpiar tu pantalla si es necesario.

Para ello debes ingresar un mensaje, y el numero de desplazamientos que quieres que 
haga el texto. Luego de ingresado los datos poder ejecutar la opcion de cifrar o descifrar

El desplazamiento no puede ser un numero negativo, o el texto no puede ser vacio al igual 
que el area donde se debe ingresar el mensaje. te permita hacer el cifrado tanto de 
mayusculas y minusculas.

## Instalacion 

* El usuario debe tener previamente instalado [Node.js](https://nodejs.org)
* Instalar `npm` ejecutar el comando `npm install`
* Instalar`mocha` ejecutar el comando `npm install --global mocha`
* Se puede comprobar que se ejecuten los de manera correcta atraves del `src/index/test`
* Puedes acceder [aqui.](https://adpc1609.github.io/scl-2018-05-bc-core-pm/)