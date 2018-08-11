
// Vars

console.log ('Hello World');

var class_cars = [{title: 'Класс Mini*', background: './images/citroen/clean.jpg', multi: 1}, 
{title: 'Средний класс*', background: './images/mazda/clean.jpg', multi: 1.5},
{title: 'Премиум класс*', background: './images/mercedes/clean.jpg ', multi: 2}];


var obj_complete = [
{description: 'Минимальный', price: 10, background: 
['./images/citroen/mini.jpg', './images/mazda/mini.jpg', './images/mercedes/mini.jpg']},
{description: 'Стандарт', price: 15, background: 
['./images/citroen/standart.jpg', './images/mazda/standart.jpg', './images/mercedes/standart.jpg']},
{description: 'Стандарт+', price: 18, background: 
['./images/citroen/standartplus.jpg', './images/mazda/standartplus.jpg', './images/mercedes/standartplus.jpg']},
{description: 'Стандарт++', price: 22, background: 
['./images/citroen/standart2plus.jpg', './images/mazda/standart2plus.jpg', './images/mercedes/standart2plus.jpg']},
{description: 'Стандарт+++', price: 28, background: 
['./images/citroen/standart3plus.jpg', './images/mazda/standart3plus.jpg', './images/mercedes/standart3plus.jpg']},
{description: 'Целиком', price: 50, background: 
['./images/citroen/all.jpg', './images/mazda/all.jpg', './images/mercedes/all.jpg']}
]

var block_class_cars =[],
	btn_class_cars= [],
	triangle_down = [],
	widget_blocks = [];


// render classes of cars

for (let i=0; i<class_cars.length; i++) {

	block_class_cars[i] = document.createElement('div');
	block_class_cars[i].className='class_car_'+[i];
	block_class_cars[i].style.width=(100/class_cars.length)+'%';
	block_class_cars[i].style.background ='url('+class_cars[i].background+') no-repeat center 3rem';
	block_class_cars[i].style.backgroundSize = '70%';
	block_class_cars[i].innerHTML = '<p class="title-classes-cars">'+class_cars[i].title+'</p>'+
	'<div class="btn_class_cars" id=btn_class_cars_'+i+'><a href="#">Рассчитать стоимость</a></div>'+
	'<div class="triangle-down" id=triangle-down_'+i+'></div>';
	car_classes.appendChild(block_class_cars[i]);

}

//

for (let i=0; i<obj_complete.length; i++) {

	widget_blocks[i] = document.createElement('li');
	widget_blocks[i].className='widget_block_'+[i];
	widget_blocks[i].innerHTML = '<a href="">'+obj_complete[i].description+'</a>';
	widget_list.appendChild(widget_blocks[i]);

}

// Click price

var navLink = [].slice.call(document.querySelectorAll('.btn_class_cars'));
var downLink = [].slice.call(document.querySelectorAll('.triangle-down'));

navLink.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
       
        navLink.forEach((nl) => {
            if (nl !== this) {
                nl.classList.remove('active');
                }
        });

		downLink.forEach((nl) => {
            if (nl !== this) {
                nl.setAttribute("style", "visibility: hidden;");
                }
        });

       this.classList.add('active');
       let index = navLink.indexOf(this);
       console.log (navLink.indexOf(this));
       document.getElementById('triangle-down_'+index).style.visibility='visible';

    }, false);
    
});

// Show image car





	


