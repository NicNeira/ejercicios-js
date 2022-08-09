// Funcion para sumar 2 numeros
function suma(){
    // Number = convertir el dato ingresado por el usuario desde String a numero
    // propmt = funcion para solicitar datos al usuario
    let num1 = Number(prompt("Ingresa primero numero"))
    let num2 =  Number(prompt("Ingresa segundo numero"))
    resultado = num1+num2;
     alert(resultado);
}

// Funcion para mostrar la edad ingresada por el usuario
function edad() {
    let edad = prompt('Ingresa tu edad')
    alert('La edad ingresada es: ' + edad);
}

// Funcion para validar si es par o impar el numero ingresado por el usuario
function par(){
    let par = Number(prompt('Ingrese un numero'))

    if(par == 0){
        alert('El numero ingresado es 0')
    }else if (par % 2 == 0) {
        alert('El numero ingresado es Par')
        }else if (par % 2 !==0){
            alert('El numero ingresado es Impar')
        }
}

// Funcion que muestra el nombre y la edad ingresada por el usuario
function usuario(){
    let nombre = prompt('Ingrese nombre usuario');
    let edad = prompt('Ingrese su edad');
    alert('¡Hola '+ nombre + '! tu edad es: '+ edad);
}

// Funcion que transforma los segundos a minutos
function segundos(){
    let segundos = Number.prompt('Ingrese la cantidad de segundos');
    // Math para acceder a metodos matematicos y floor redondea al entero menor
    let minutos = Math.floor(segundos/60);
    let restoSegundos = segundos % 60;
    alert(segundos +' segundos son: ' + minutos + " minutos y " + restoSegundos+ " segundos");
}

// Funcion que compara 2 numeros e indica cual es mayo o menor al otro
function mayorMenor(){
    let num1 = Number(prompt('Ingrese primer numero'));
    let num2 = Number(prompt('Ingrese segundo numero'));

    if (num1==num2) {
        alert('Los numeros son iguales');
    }else if (num1>num2){
        alert ('El numero ' + num1 + ' es mayor que ' + num2);
    }else {
        alert('El numero ' + num2 + ' es mayor que ' + num1);
    }
}

// Con ciclo for imprimir en console los numeros del 0 al 9.
// Con ciclo for imprimir en console los numeros del 3 al 15.
function forConsecutivo(){
    let arr = []
    let inicio = Number(prompt('Ingrese el numero de inicio'));
    let final = Number(prompt('Ingrese el numero final'));
    for (let index = inicio; index <= final; index++) {
        // metodo push añade un elemento al final del array
        arr.push(index)
    }
    alert('Los numeros son: ' + arr);
}

// Con ciclo for imprimir en console los numeros del 9 al 0.
function forRevert(){
    let arr=[]
    let inicio = Number(prompt('Ingrese el numero de inicio'));
    let final = Number(prompt('Ingrese el numero final'));
    for (let index = inicio; index <= final; index++) {
        arr.push(index)
    }
    // metodo reverse reviert el orden de los elementos dentro del array
    arr.reverse();
    alert('Los numeros a la inversa son ' + arr)
}

// Con ciclo for imprimir numeros pares de los numeros del 1 al 99
function forPar(){
    let arr=[]
    let inicio = Number(prompt('Ingresa el numero de inicio'))
    let final = Number(prompt('Ingrese el numero final'));
    for (let index = inicio; index <= final; index++) {
        if (index % 2 == 0) {
            arr.push(index)
        }
    }

    alert('Los numero pares son: ' + arr)
}

// Con ciclo for imprimir la suma del siguiente array [2, 4, 1, 7]
function arrSuma(){
    let arr = [2,4,1,7];
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
         sum += arr[index];
     }
    alert('La suma de los elementos del array es: ' + sum);
}

// Con ciclo for copiar var arr = [2, 3, 5] a var arr2 = []
function arrCopy(){
    let arr = [2,3,5];
    let arr2=[]
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i]);
    }
    // o arr2=[...arr]
    alert('La copia del array es: ' + arr2)
}

// Escribe una función que devuelve una matriz con todos los números del 1 al 255
function arrMatriz(){
    let array = []
    for (let i = 1; i <= 255; i++) {
        array.push(i); 
    }
    alert('La matriz seria: ' + array)
}

// Buscar el numero más pequeño de un array
function arrSmall(){
    let array = [4,5,3];
    let temp= array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i]<temp) {
            temp = array[i];
        }
    }
    alert('El array es: ' + array + ' y el numero mas pequeño es: ' + temp)
}

// Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.
function sumaPares(){
    let i = 1;
    let sum = 0;
    while (i<=1000) {
        if (i % 2 == 0) {
            sum += i;
        }
    i++;
    }
    alert('La suma total es: ' + sum);
}

// Escribe una función que devuelva la suma de todos los números impares entre 1 y 4000
function sumaImpares(){
    let i = 1;
    let sum = 0;
    while (i<=4000) {
        if (i % 2 !== 0) {
            sum += i;
        }
    i++;
    }
    alert('La suma total es: ' + sum);
}

// Escribe una funcion que realice lo mismo que push sin ocupar push. Es decir que pida como parametro un array y un nuevo elemento. Debe retorar un nuevo array con el elemento incluido.
function arrayNoPush(){
    let num1 = Number(prompt("Ingresa cuantos elementos tendra el array"));
    let c = 1;
    let array=[];

    while (c<=num1) {
        let num2 = Number(prompt("Ingresa numero: " + c))
        c++;
        array.push(num2);
    }

    let elemento = [Number(prompt('Numero a agregar'))];
    let newArray = [...array,elemento];
    alert('El nuevo array con el elemento es: ' + newArray);
}

// Funcion que pida un array y el numero de indice. Debe devolver un nuevo array sin el elemento en la posición del indice indicado.
function noElement (){
    let num1 = Number(prompt("Ingresa cuantos elementos tendra el array"));
    let c = 1;
    let array=[];

    while (c<=num1) {
        let num2 = Number(prompt("Ingresa numero: " + c))
        c++;
        array.push(num2);
    }
    let indice = Number(prompt('Indice a eliminar'));
    let newArray = [...array]
    newArray.splice(indice,1);
    alert('El nuevo array con el elemento es: ' + newArray);
}

// Una funcion que pida como parametro un array y un elemento que contenga el array. Debe devolver cuantas veces se repite el elemento en el array. Sin ocupar .filter.
function elementoRepetido(){
    let num1 = Number(prompt("Ingresa cuantos elementos tendra el array"));
    let c = 1;
    let array=[];
    let c2 = 0;

    while (c<=num1) {
        let num2 = Number(prompt("Ingresa numero: " + c))
        c++;
        array.push(num2);
    }

    let elemento = Number(prompt('Elemento a buscar en el array'));
    for (let i = 0; i <= array.length; i++) {
        if (elemento == array[i]) {
            c2++;            
        }
    }
    alert('El array es: '+ array +' y el elemento se repite: ' + c2 + ' veces')
}

// Funcion que pida como parametro un array numerico y un numero. Debe devolver un nuevo array igual al ingresado pero con cada elemento multiplicado por el numero indicado. No ocupar .map.
function elementoPorDos(){
    let num1 = Number(prompt("Ingresa cuantos elementos tendra el array"));
    let c = 1;
    let array=[];

    while (c<=num1) {
        let num2 = Number(prompt("Ingresa numero: " + c))
        c++;
        array.push(num2);
    }
    let elemento = Number(prompt('Numero por el cual multiplicar'));
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]*elemento);
    }
    alert('El array multiplicado con el elmento seria: ' + newArray)
}
