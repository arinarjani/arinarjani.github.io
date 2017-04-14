// credit: http://stackoverflow.com/questions/26959219/javascript-onclick-addclass

// function add_selected_class(elem) {
//     console.log('this: ', this);
//     var a = document.getElementsByTagName('a');
//     console.log('a: ', a);
//     for ( let i = 0; i < a.length; i++ ) {
//         a[i].classList.remove('selected');
//     }
//     elem.classList.add('selected');
// }

// let add_selected_class = function add_selected_class() {
//     console.log('this: ', this);
//     var a = document.getElementsByTagName('a');
//     console.log('a: ', a);
//     for ( let i = 0; i < a.length; i++ ) {
//         a[i].classList.remove('selected');
//     }
//     this.classList.add('selected');
// }

// first nav link
let nav_a_1 = document.querySelector('.nav_a_1');
nav_a_1.addEventListener( 'click', function(){
	add_selected_class(nav_a_1);
});
// second nav link
let nav_a_2 = document.querySelector('.nav_a_2');
nav_a_2.addEventListener( 'click', function(){
	add_selected_class(nav_a_2);
});
// third nav link
let nav_a_3 = document.querySelector('.nav_a_3');
nav_a_3.addEventListener( 'click', function(){
	add_selected_class(nav_a_3);
});

function add_selected_class(elem) {
    console.log("elem: ", elem.classList)
    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
    	a[i].classList.remove('selected');
    }
    elem.classList.add('selected');
}
