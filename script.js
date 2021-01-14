function changeFontSize(){
    const fontSize = document.querySelector('.font-size').value;
    document.execCommand('fontSize', false, fontSize);
}
function changeFontColor(){
    const fontColor = document.querySelector('.font-color').value;
    document.execCommand('foreColor', false, fontColor);
}
function changeFont(){
    const fontName = document.querySelector(".typeface").value;
    document.execCommand('fontName', false, fontName);
}

var container = document.querySelector('.container');

// fontawesome_key=a7e60fcb21.js


//  checking for overflow

// this is not functioning well as we reach to the end the new div block created 
function isOverflown(element) {
    return element.scrollHeight > element.clientHeight
}
$(window).scroll(function() { if($(window).scrollTop() + $(window).height() > $(document).height() -100) { 
console.log('overflow happened..')
const div = document.createElement('div')
div.classList.add('container');
document.querySelector('body').appendChild(div)
}});

// container.addEventListener('input',()=>{
//     console.log('i am running..')
//     if(isOverflown(container)){
//         console.log('overflow happened..')
//         const div = document.createElement('div')
//         div.classList.add('container');
//         document.querySelector('body').appendChild(div)
//   }
// })