
var Calculadora = {
    // Calcula a soma de dois números
    somar: function (num1, num2) {

        let x = num1
        let y = num2
        let soma = x + y

        return soma
    },
    subtrair: function(x, y) {
        return x - y
    },
    multiplicar: function(x,y) {
        return x * y
    },
    dividir: function (x,y) {
        if (y == 0) { return Infinity }
        return x / y
    }
}