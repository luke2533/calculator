function equivalentCheck () {
    if (parseInt(document.getElementById("equivalent").value)) {
        document.getElementById("equivalent").value = 0;
        document.getElementById("result").value = 0;
    }
}

function input(x) {
    equivalentCheck();

    let y = parseInt(document.getElementById("result").value);

    if (document.getElementById("decimalVar").value == 0) {
        x += y * 10;
        document.getElementById("result").value = x;
    } else {
        let decimalCount = parseInt(document.getElementById("decimalVar").value);
        if(decimalCount == 1){
            x *= 1/10;
            y += x;
            document.getElementById("result").value = y;
        } else {
            document.getElementById("result").value += x;
        }
        decimalCount++;
        document.getElementById("decimal").value = decimalCount;
    }
}

function decimalPoint() {
    if (document.getElementById("decimalVar").value == 0) {
        document.getElementById("decimalVar").value = 1;
    }

    if(parseInt(document.getElementById("operation").value)) {
        document.getElementById("result").value = 0;
    }
}

function operandCheck() {
    if(document.getElementById("operand").value == ""){
        document.getElementById("operand").value = document.getElementById("result").value;
        document.getElementById("equivalent").value = 1;
    } else {
        operatorCheck();
    }
}

function operatorCheck() {
    let a = parseFloat(document.getElementById("operand").value);
    let b = parseFloat(document.getElementById("result").value);

    switch(parseInt(document.getElementById("operand").value)) {
        case 1: // Addition
            a += b;
            break;
        case 2: // Subtract
            a -= b;
            break;
        case 3: // Multiply
            a *= b;
            break;
        case 4: // Divide
            a /= b;
            break;
    }
    document.getElementById("operand").value = a;
    document.getElementById("result").value = a;
    document.getElementById("equivalent").value = 1;
}

function operators(x) {
    switch(x){
        case 1:
            document.getElementById("operation").value = 1; // Addition
            break;
        case 2:
            document.getElementById("operation").value = 2; // Subtract
            break;
        case 3:
            document.getElementById("operation").value = 3; // Multiply
            break;
        case 4:
            document.getElementById("operation").value = 4; // Divide
            break;
        default:
    }
    operandCheck();
}

function equals() {
    operators(parseInt(document.getElementById("operation").value));
    document.getElementById("result").value = document.getElementById("operand").value;
    document.getElementById("operand").value = "";
    document.getElementById("equivalent").value = 1;
}

function allClear() {
    document.getElementById("result").value = 0;
    document.getElementById("operation").value = 0;
    document.getElementById("operand").value = "";
    document.getElementById("equivalent").value = 0;
}

function plusminus() {
    let x = parseFloat(document.getElementById("result").value);

    x *= -1;
    document.getElementById("result").value = x;
}

function percent() {
    let x = parseFloat(document.getElementById("result").value);

    x *= 0.01;
    document.getElementById("result").value = x;
}

function square() {
    let x = parseFloat(document.getElementById("result").value);

    x *= x;
    document.getElementById("result").value = x;
}

