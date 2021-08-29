

console.log(document.getElementsByTagName('li'))

console.log(document.getElementsByClassName('simple'))

console.log(document.querySelector('h1'))

console.log(document.querySelector('.simple'))

document.querySelectorAll('.simple')[1].textContent = 'Got it'

console.log('=========================')
console.log(document.querySelectorAll('li').forEach(el => console.log(el)))

let p = document.createElement('p');
p.textContent = 'hello world';
p.style.fontSize = '22px';

let li  = document.querySelector('li')
li.appendChild(p);


let a = document.querySelectorAll('a');
// a[1].parentElement.removeChild(a)

setTimeout(() => {
    a[2].remove()
}, 3000)

//* Events

window.onload = () => {
    console.log(`window loaded`)
};

const btn = document.querySelector('button');
btn.onclick = () => {
    console.log(`Clicked`)
};

const listener1 = (e) => {
    console.log(`listener-1`)
    console.log(e.target);
}
const listener2 = () => {
    console.log(`listener-2`)
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', listener1);
btn1.addEventListener('click', listener2);

setTimeout(() => {
    btn1.removeEventListener(`click`, listener2)
}, 3000)

const h1 = document.querySelector('h1');
h1.addEventListener('click', e => console.log(e.target));
