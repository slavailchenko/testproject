
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
	block_class_cars[i].className=`class_car_'${[i]}`;
	block_class_cars[i].style.width=(100/class_cars.length)+'%';
	block_class_cars[i].style.background =`url(${class_cars[i].background}) no-repeat center 3rem`;
	block_class_cars[i].style.backgroundSize = '70%';
	block_class_cars[i].innerHTML = `<p class="title-classes-cars">${class_cars[i].title}</p>` +
	`<div class="btn_class_cars" id=btn_class_cars_${i}><a href="#">Рассчитать стоимость</a></div>`+
	`<div class="triangle-down" id=triangle-down_${i}></div>`;
	car_classes.appendChild(block_class_cars[i]);

}

//

for (let i=0; i<obj_complete.length; i++) {

	widget_blocks[i] = document.createElement('li');
	widget_blocks[i].className=`widget_block_${[i]}`;
	widget_blocks[i].innerHTML = `<a href="">${obj_complete[i].description}</a>`;
	widget_list.appendChild(widget_blocks[i]);

}

// Click price

var navLink = [].slice.call(document.querySelectorAll('.btn_class_cars'));
var downLink = [].slice.call(document.querySelectorAll('.triangle-down'));


navLink.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
       	document.getElementById('message').innerHTML = '';
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

// Show image car and price
	
	var list_packet = [].slice.call(document.querySelectorAll('.widget-list li'));

		console.log (list_packet);

		list_packet.forEach(function(el) {
   		 	el.addEventListener('click', function(e) {
        	e.preventDefault();
        	
        	for (let i=0; i<class_cars.length; i++) {
			if (document.getElementById('triangle-down_'+i).style.visibility=='visible') {
				var index = i; 
				console.log (index);
				}
			}
       			
       			if (index || (index == 0)) {

       				       				
       			  list_packet.forEach((nl, i) => {
        		    if (nl !== this) {
                	nl.classList.remove('active');
                	nl.setAttribute("style", "background: transparent; color: black;");
                	console.log (nl);
                	let styleElem = nl.appendChild(document.createElement("style"));
                	styleElem.innerHTML = `ul#widget_list li:nth-child(${i+1})::after {border-right: 15px solid transparent;}`;
                	                	
                	}
        		});
					

		       		this.classList.add('active');
		       		let index_menu = list_packet.indexOf(this);
		       		this.setAttribute("style", "background: red; color: white;");
		       		styleElem = this.appendChild(document.createElement("style"));
                	styleElem.innerHTML = `ul#widget_list li:nth-child(${index_menu+1})::after {border-right: 15px solid red;}`;					
    	       		
		       		document.getElementById('image_car').innerHTML=`<img src=${obj_complete[index_menu].background[index]}>`;
		       		var price_total = obj_complete[index_menu].price * class_cars[index].multi;
		       		console.log (price_total);

       				} else { 
       					document.getElementById('message').innerHTML='<p>Введите класс машины </p>';
       						}

	    	}, false);

    	});

 // Submenu

var id_menu = sub_menu;

startList = function allclose() {
	document.getElementById(id_menu).style.display = "none";
}

function openMenu(id){

	if (document.getElementById(id).style.display == "block"){
		document.getElementById(id).style.display = "none";
	} else {
		document.getElementById(id).style.display = "block";
	}
}

window.onload=startList;

	




	


