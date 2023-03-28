/**Crear un algoritmo que genere los números impares comprendidos entre 2
valores ingresados por el usuario. Al final se deberán imprimir los números
impares generados y el resultado de la suma de todos ellos. (Este algoritmo
se desarrolla con el ciclo for)*/

var num1 = parseFloat(prompt("ingresar el valor numero uno "))
var num2 = parseFloat(prompt("ingrsa el valor el numero dos "))
var suma = 0;


/* for ( i=num1; i<=num2;i++ ){
    console.log (i)
    i=i+2 
}
 */
if (num1>num2){
    let temp = num1;
    num1=num2;
    num2= temp;
}

console.log ("los numros comprendisos entre"+num1+" y "+num2+" es:")
for ( i=num1; i<=num2;i++ ){
    if (i%2!== 0){

        console.log(i);
        suma+=i;
    }
     
}

console.log ("el valor de suma es:"+suma )
