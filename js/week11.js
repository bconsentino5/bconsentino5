// console.log(document.querySelector('button'));
// console.log(document.querySelectorAll('button'));
// console.log(document.querySelectorAll('button')[1]);
// console.log(document.getElementsByClassName('my_button'));
// console.log(document.getElementsByClassName('my_button')[2]);
// console.log(document.querySelectorAll('#my_id .my_button'));

hello('bella');

function hello(name) {
    alert('hello ' + name);
}

function even(n) {
    if(n%2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(even(20));
console.log(even(1));


let text = ['one', 'two', 'three'];
let paragraph = '';

function buildText(arr) {
    for( let i=0; i<arr.length; i++) {
        console.log(arr[i]);
        paragraph += arr[i] + ' ';
    }
    document.getElementById('my_para').innerHTML = paragraph;
    console.log(paragraph);
}

buildText(text);