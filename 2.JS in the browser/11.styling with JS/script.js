/*
element.className
element.classList.add()
element.classList.remove()
element.classList.toggle()
element.style.propName = value
element.style.cssText = ""
window.getComputedStyle(element)
*/
let main = document.querySelector('#main');
let ul = main.querySelector('ul');
let h1 = document.querySelector('header h1');
let foot = document.querySelector('#foot p');

main.className = 'some abc';
main.id = 'main';
main.title = 'mouseover text';

foot.style.backgroundColor = 'salmon';
foot.style.cssText = 'font-family: serif; letter-spacing: 6px;';

foot.classList.add("some");
foot.classList.remove('other');
foot.classList.toggle('other');

let style = window.getComputedStyle(ul);
console.log(style);
console.log(style.getPropertyValue('color'));
