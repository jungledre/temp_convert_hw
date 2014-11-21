document.addEventListener('DOMContentLoaded',function(){
    console.log("hello")
    var buttons = document.querySelectorAll('.btn');
    var userInput = document.querySelector('#user-input');
    var output = document.querySelector('#output');
    var f = document.querySelector('#inlineRadio1')
    var c = document.querySelector('#inlineRadio2')

    buttons[0].addEventListener('click',function(){

    console.log(userInput.value)

        if (f.checked = true){
            output.innerText = ((5/9)*(parseInt(userInput.value)-32)).toFixed(2)
        };
        // else if (c.checked = true){
        //     output.innerText = (((9/5)*(parseInt(userInput.value))+32).toFixed(2)
        // };
        // else {
        //     console.log("hi")
        // }
    });
});
// f = 100

// c = ((5/9)*(f-32)).toFixed(2);
// f = (((9/5)*c)+32).toFixed(2);

console.log("Hello! end");
