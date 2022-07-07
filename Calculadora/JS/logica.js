
const suma = () => {

    var x,y,sumador,text
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    if(isNaN (x) || isNaN (y)){
        alert("Ingresa numeros para hacer operaciones.");
    }
    sumador = x + y;
    text = sumador;
    document.getElementById("Resultado").innerHTML = text;

   
    
}

const resta = () => {

    var x,y,restador,text
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    if(isNaN (x) || isNaN (y)){
        alert("Ingresa numeros para hacer operaciones.");
    }
    restador = x - y;
    text = restador;
    document.getElementById("Resultado").innerHTML = text;

}

const mult = () => {
    var x,y,multiplicador,text
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    if(isNaN (x) || isNaN (y)){
        alert("Ingresa numeros para hacer operaciones.");
    }
    multiplicador = x * y;
    text = multiplicador;
    document.getElementById("Resultado").innerHTML = text;
}

const div = () => {
    var x,y,divisor,text
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    if(isNaN (x) || isNaN (y)){
        alert("Ingresa numeros para hacer operaciones.");
    }
    divisor = x / y;
    text = divisor;
    document.getElementById("Resultado").innerHTML = text;
}
