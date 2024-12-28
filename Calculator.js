let Input = document.getElementById('input');

function print(button){

Input.innerText += button;

}

function Cal(){

    let s = Input.innerText;

    s = s.replace("x", "*");

    console.log(s);

    const ans = eval(s);
    Input.innerText = ans;

}

function reset(){

    Input.innerText = " ";

}


