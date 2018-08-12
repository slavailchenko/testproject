
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
];

var obj_details = [
{description: 'Оптика', price: 10, background: 
['./images/citroen/optic.jpg', './images/mazda/optic.jpg', './images/mercedes/optic.jpg']},
{description: 'Пороги внутренние', price: 12, background: 
['./images/citroen/thresholdsinternal.jpg', './images/mazda/thresholdsinternal.jpg', './images/mercedes/thresholdsinternal.jpg']},
{description: 'Пороги наружные', price: 12, background: 
['./images/citroen/thresholdsexternal.jpg', './images/mazda/thresholdsexternal.jpg', './images/mercedes/thresholdsexternal.jpg']},
{description: 'Двери (4шт)', price: 22, background:
['./images/citroen/door.jpg', './images/mazda/door.jpg', './images/mercedes/door.jpg']},
{description: 'Задние крылья', price: 19, background: 
['./images/citroen/backwing.jpg', './images/mazda/backwing.jpg', './images/mercedes/backwing.jpg']},
{description: 'Капот', price: 15, background: 
['./images/citroen/hood.jpg', './images/mazda/hood.jpg', './images/mercedes/hood.jpg']},
{description: 'Передний бампер', price: 12, background: 
['./images/citroen/frontbumper.jpg', './images/mazda/frontbumper.jpg', './images/mercedes/frontbumper.jpg']},
{description: 'Задний бампер', price: 12, background: 
['./images/citroen/rearbumper.jpg', './images/mazda/rearbumper.jpg', './images/mercedes/rearbumper.jpg']}
]

var block_class_cars =[],
	btn_class_cars= [],
	triangle_down = [],
	widget_blocks = [],
	widget_sub_blocks = []
	;


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

function render_menu (data, blocks, list) {

	for (let i=0; i<data.length; i++) {

		blocks[i] = document.createElement('li');
		blocks[i].className=`block_${[i]}`;
		blocks[i].innerHTML = `<a href="">${data[i].description}</a>`;
		list.appendChild(blocks[i]);

		}
}

render_menu (obj_details, widget_sub_blocks, sub_menu);

render_menu (obj_complete, widget_blocks, widget_list);


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
                	nl.setAttribute("style", "background: transparent;");
                	console.log (nl);
                	let styleElem = nl.appendChild(document.createElement("style"));
                	styleElem.innerHTML = `ul#widget_list li:nth-child(${i+1})::after {border-right: 15px solid transparent;}`;
                	                	
                	}
        		});
					

				list_packet_details.forEach((nl, i) => {
        		    if (nl !== this) {
                	nl.classList.remove('active');
                	nl.setAttribute("style", "background: transparent;");
                	let styleEl = nl.appendChild(document.createElement("style"));
                	styleEl.innerHTML = `ul#widget_list_details li:nth-child(${i+1})::after {border-right: 15px solid transparent;}`;
                	                	
                	}
        		});

		       		this.classList.add('active');
		       		let index_menu = list_packet.indexOf(this);
		       		this.setAttribute("style", "background: red;");
		       		styleElem = this.appendChild(document.createElement("style"));
                	styleElem.innerHTML = `ul#widget_list li:nth-child(${index_menu+1})::after {border-right: 15px solid red;}`;					
    	       		
		       		document.getElementById('image_car').innerHTML=`<img src=${obj_complete[index_menu].background[index]}>`;
		       		var price_total = obj_complete[index_menu].price * class_cars[index].multi;
		       		document.getElementById ('price').innerHTML='$'+price_total;
		       		console.log (price_total);

       				} else { 
       					document.getElementById('message').innerHTML='<p>Введите класс машины </p>';
       						}

	    	}, false);

    	});

 // ------

	var list_packet_details = [].slice.call(document.querySelectorAll('.sub-widget-list-details li'));

		console.log (list_packet_details);

		list_packet_details.forEach(function(el) {
   		 	el.addEventListener('click', function(e) {
        	e.preventDefault();
        	
        	for (let i=0; i<class_cars.length; i++) {
			if (document.getElementById('triangle-down_'+i).style.visibility=='visible') {
				var index = i; 
				console.log (index);
				}
			}
       			
       			if (index || (index == 0)) {

       				       				
       			  list_packet_details.forEach((nl, i) => {
        		    if (nl !== this) {
                	nl.classList.remove('active');
                	nl.setAttribute("style", "background: transparent;");
                	console.log (nl);
                	let styleElem = nl.appendChild(document.createElement("style"));
                	styleElem.innerHTML = `ul#widget_list_details li:nth-child(${i+1})::after {border-right: 15px solid transparent;}`;
                	                	
                	}
        		});
					
				list_packet.forEach((nl, i) => {
        		    if (nl !== this) {
                	nl.classList.remove('active');
                	nl.setAttribute("style", "background: transparent;");
                	console.log (nl);
                	let styleEl = nl.appendChild(document.createElement("style"));
                	styleEl.innerHTML = `ul#widget_list li:nth-child(${i+1})::after {border-right: 15px solid transparent;}`;
                	                	
                	}
        		});

		       		this.classList.add('active');
		       		let index_sub_menu = list_packet_details.indexOf(this);
		       		this.setAttribute("style", "background: red;");
		       		styleElem = this.appendChild(document.createElement("style"));
                	styleElem.innerHTML = `ul#widget_list_details li:nth-child(${index_sub_menu+1})::after {border-right: 15px solid red;}`;					
    	       		
		       		document.getElementById('image_car').innerHTML=`<img src=${obj_details[index_sub_menu].background[index]}>`;
		       		var price_total = obj_details[index_sub_menu].price * class_cars[index].multi;
		       		console.log (price_total);
		       		document.getElementById('price').innerHTML='$'+price_total;

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

	if (document.getElementById(id).style.display == "none"){
		document.getElementById(id).style.display = "block";
		document.getElementById('dropdown').style.borderWidth = "0 6px 8px 6px";
	} else {
		document.getElementById(id).style.display = "none";
		document.getElementById('dropdown').style.borderWidth = "8px 6px 0px 6px";
	}
}

window.onload=startList;

	




	


