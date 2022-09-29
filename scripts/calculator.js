function input(x) {

    // let y = parseFloat(document.getElementById("result").value);

    if (document.getElementById("result").value == 0){
        document.getElementById("result").value = x;
    } else {
        document.getElementById("result").value += x;
    }
}