let Input = document.getElementById('input');

function print(button){

Input.innerText += button;

}

function Cal(){

    let s = Input.innerText;

    s = s.replaceAll("x", "*");

    console.log(s);

    const ans = eval(s).toFixed(4);
    Input.innerText = ans;

}

function reset(){

    Input.innerText = " ";

}


