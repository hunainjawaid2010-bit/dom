function domath(operation) {
    let num1 = number(document.getElementById("n1").value);
    let num2 = number(document.getElementById("n2").value);
    let result;

    if(operator === '+'){
        result = num1 + num2;
        console.log("result:" + num1 + "+" + num2 + "=" + result);
    }
    else if(operation ==='-'){
        result = num1 - num2;
        console.log("result:" + num1 + "-" + num2 + "=" + result);
    }
     else if(operation ==='-'){
        result = num1 - num2;
        console.log("result:" + num1 + "*" + num2 + "=" + result);
    }
         else if(operation ==='-'){
        result = num1 - num2;
        console.log("result:" + num1 + "/" + num2 + "=" + result);
    }
    let x=5;
    console.log( x +=5)
}
