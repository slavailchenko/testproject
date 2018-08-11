
// Vars

console.log ('Hello World');

var class_cars = [{title: 'Класс Mini*', background: './images/citroen/clean.jpg', multi: 1}, 
{title: 'Средний класс*', background: './images/mazda/clean.jpg', multi: 1.5},
{title: 'Премиум класс*', background: './images/mercedes/clean.jpg ', multi: 2}];

var block_class_cars =[],
	btn_class_cars= [],
	triangle_down = [];



for (let i=0; i<class_cars.length; i++) {

	block_class_cars[i] = document.createElement('div');
	block_class_cars[i].className='class_car_'+[i];
	block_class_cars[i].style.width=(100/class_cars.length)+'%';
	block_class_cars[i].style.background ='url('+class_cars[i].background+') no-repeat center 3rem';
	block_class_cars[i].style.backgroundSize = '70%';
	block_class_cars[i].innerHTML = '<p class="title-classes-cars">'+class_cars[i].title+'</p>'+
	'<div class="btn_class_cars" id=btn_class_cars_'+i+'><a href="#">Рассчитать стоимость</a></div>'+
	'<div class="triangle-down"></div>';
	car_classes.appendChild(block_class_cars[i]);




}
	


