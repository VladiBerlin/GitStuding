/*function kuku(){
	
	var kuku = document.getElementById('19_5');
	alert(kuku.value);
}

function chVl(){
	
	var vCh = document.getElementById('19_6');
	
	vCh.value = "Ой, я поменял свой текст!";
}

function chImg(){
	
	var vCh = document.getElementById('19_7');
	
	vCh.src = "img/2.jpg";
}

function pushAl(ale){

	alert(ale.value);
}

function pushMe(push){

	push.value = 'Hello world!';
}

function chaTex(newText){

	newText.value = 'I have change the text!';
}

function chaTex2(newText2){

	newText2.value = 'Oi, I have changed it again!';
}

function chaBut(logo){

	logo.value = 'Hello';
}

function disable(abl){

	abl.value = 'dont need to click';

	abl.disabled = true;
}

function imgChange(imgCh){

	imgCh.src = "img/2.jpg";

}

function textRed(){

var teRe = document.getElementById('19_16');

	teRe.style.color = 'red';
}

function redText(){

var teRe = document.getElementById('19_17')

	teRe.style.color = 'red';
	teRe.style.border = '2px solid blue';
	teRe.style.borderRadius = '25px';
	teRe.style.padding = '10px';
}

function dis(ablt){

	ablt.value = 'dont need to click';

	ablt.disabled = true;
}

function display(){

	var able = document.getElementById('19_181');
	
	able.style.display = 'block';
}


function enable(){

	var abl = document.getElementById('19_18');

	abl.value = 'click';

	abl.disabled = false;
}

function diplayNone(sub){

	sub.style.display = 'none';

}

var num = 0;

function subtract(plus){

	num += 1; 
	plus.value = num; 

}

function cssFloat(){

	var cFloat = document.getElementById('19_19');

	cFloat.value = 'I am at the right';
	cFloat.style.cssFloat = 'right';
}

function writeNew(){

	var textNew = document.getElementById('19_20');

	textNew.value = 'Мои css классы: eee www ddd'
}

function newWrite(){

	var textNew = document.getElementById('19_21');
	var newText = document.getElementById('19_21_1');

	textNew.value = 'Terve';
	newText.value = 'Hello';
}

function powIt(){

	var num = document.getElementById('19_22');
	var sum = document.getElementById('19_22_1');

	//var x = num.value
	sum.value = Math.pow(num.value, 2);
	//alert(x);
}

function powIt(){

	var num = document.getElementById('19_23');
	var sum = document.getElementById('19_23_1');
	var x = num.value;
	
	if(!isNaN(x)){

		sum.value = Math.pow(num.value, 2);
	
	} else{

		alert('The data you enter in is not a number');
	}

}

function hover(){

	var hover = document.getElementById('19_24');

	hover.style.cursor = 'not-allowed';

	hover.disabled = true;
}

function addSelector(sel){

	var text = document.getElementById('19_25');
	
	text.value = text.value.concat(sel.value[5]);
}

function addNum(num){

	var text = document.getElementById('19_25');
	
	text.value = text.value.concat(num.value);
}

function buttonClick(){

	var tex = document.getElementById('text');

	tex.innerHTML = 'Ку-ку! А я <b>жирный!</b>';
}

function clickButton(){

var text = document.getElementById('tex');

text.innerHTML = 'Абзац превратился в h3!';

text.outerHTML = '<b>' + text.innerHTML  + '</b>';

}

function clBut(){

var text = document.getElementById('tet');

text.outerHTML = '<h3>' + text.innerHTML  + '</h3>';

}

function subtract(){

	var num1 = document.getElementById('num1');

	var num2 = document.getElementById('num2');

	var sum = document.getElementById('sum');

	num1 = Number(num1.value);
	num2 = Number(num2.value);
	sum.innerHTML = num1 + num2;
}

function chP(){

	var elems = document.getElementsByTagName('p');

	for(var elem of elems){

		elem.innerHTML = 'Ку-ку!';
	}

}

function chClass(){

let elems = document.getElementsByClassName('www');

	for(let i = 0; i < elems.length; i++){

		elems[i].innerHTML = i + 1;

	}
}

function chBySelector(){

let elems = document.querySelectorAll('.www');

	for(let i = 0; i < elems.length; i++){

		elems[i].innerHTML = i + 1;

	}
}

function getAttr(){

	let elem = document.querySelector('.my-class');
	
	//let cname = elem.className;
	
	alert(elem.getAttribute('class'));

	alert(cname);
	
//9

function getAttr(){

	let elem = document.getElementById('hello');
	
	//let cname = elem.className;
	
	alert(elem.getAttribute('class'));

	alert(cname);
	
}

function rmAttr(){

	let elem = document.getElementById('hello');

	elem.removeAttribute('class');

	alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!');

	elem.style.color = 'black';
}
}

//10

function getAttr(){

	let elem = document.getElementById('hello');
	
	//let cname = elem.className;
	
	alert(elem.getAttribute('class'));

	alert(cname);
	
}

function rmAttr(){

	let elem = document.getElementById('hello');

	elem.style.color = 'black';

	elem.setAttribute('class', 'new-class');

	alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!');
}

//11

function textAdd(){

	let txt = document.getElementById('inp');

	let txt2 = document.getElementById('txt');

	txt2.innerHTML = txt.value;
}

//12

function chRef(){

	let ref1 = document.getElementById('rf1');
	let ref2 = document.getElementById('rf2');
	let ref3 = document.getElementById('rf3');

	ref1.innerHTML = ref1.innerHTML + ' <a>www.google.com</a>';
	ref2.innerHTML = ref2.innerHTML + ' <a>yandex.ru</a>';
	ref3.innerHTML = ref3.innerHTML + ' <a>old.code.mu</a>';
}

//13

function chColor(){

		var txtP = document.getElementById('txtRed');

		txtP.innerHTML = 'Hello, hello';

		txtP.style.color = 'red';

		var chButt = document.getElementById('ch');

		chButt.value = 'changed';	
}

//14

function addNum(){

	var numTxt = document.getElementsByTagName('p');

	for(var i = 0; i < numTxt.length; i++){

		numTxt[i].innerHTML = 1 + i;
	}
}

//15

function addNum2(){

	var numTxt = document.getElementsByTagName('p');

	for(var i = 0; i < numTxt.length; i++){

		numTxt[i].innerHTML = 1 + i + '. ' + numTxt[i].innerHTML;
	}
}

//20.1

var date = new Date();

alert(date.getDate());

//20.2

var date = new Date();

alert(date.getMonth());

//20.3

var date = new Date();

alert(date.getFullYear())

//20.4

var date = new Date();

//alert(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());
//alert(date);

function addZero(num){

	if(num <= 9){

		return '0'+ num;
	
	} else{

		return num;
	}
}

alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()+ ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()));


//20.5

var date = new Date();

alert(date.getDay());

//20.6

var date = new Date();
var day = date.getDay();


function showDay(day){

	var days = ['sun', 'mon', 'tue', 'wen', 'thur', 'fri', 'sut'];

	alert(days[day]);
}

showDay(day);

//20.7

var date = new Date(2015, 0, 7);
var day = date.getDay();
//alert(date);

function showDay(day){

	var days = ['sun', 'mon', 'tue', 'wen', 'thur', 'fri', 'sut'];

	alert(days[day]);
}

showDay(day);

//20.8

var now = new Date();

alert(Math.floor(now.getTime()/(1000*60))+ ' min');

//20.8

var now = new Date();

document.write(Math.floor((now.getTime() - Date.parse('1988-02-01'))/(1000*60*60)) + ' hours');

//20.11

var today = new Date();

document.write((Date.parse('2021-09-30T00:00:00') - today.getTime()) +'<br>');

//20.10

var today = new Date();

document.write((today.getTime() - Date.parse('2021-09-29T00:00:00')) /(1000*60*60) + ' hours');

//20.12(AS)

function toCount(){

	var today = new Date();

	var year = document.getElementById('year');
	var month = document.getElementById('month');
	var day = document.getElementById('day');
	var now =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	var bday = today.getFullYear() + '-' + month.value + '-' + day.value;

	bday = (bday.split(' ').join(''));

	//alert(Date.parse(bday) + ' bday');
	//alert(today.getTime() + ' today');
	//alert('This month is' + (today.getMonth());

	if(Date.parse(bday) <= Date.parse(now)){

		bday = (today.getFullYear() + 1) + '-' + month.value + '-' + day.value;
	} 
	
	//alert(Date.parse(bday) + 'bday');
	//alert(today.getTime() + 'today');

	var days = ((Date.parse(bday) - today.getTime()) /((1000*60*60))) / 24;

	alert('It is ' + Math.floor(days) + ' days to your next birthday'); 
}

//20.12(B)

function toCount(){

	var today = new Date();

	var day = document.getElementById('day');
	var bday =  day.value;
	bday = bday.split('-');
	var nextBDay = today.getFullYear() + '-' + (bday[1]) + '-' + bday[2];
	var now =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


	//alert(nextBDay);

	if(Date.parse(nextBDay) <= Date.parse(now)){

		nextBDay = (today.getFullYear() + 1) + '-' + (bday[1]) + '-' + bday[2];
	}

	alert(nextBDay); 

	var days = ((Date.parse(nextBDay) - today.getTime()) /((1000*60*60))) / 24;

	alert('It is ' + Math.floor(days) + ' days to your next birthday');
}

//task_21_1

function timerStart(){

	window.setInterval(timer, 1000);

}

function timer(){

	var second = document.getElementById('second');

	second.innerHTML = Number(second.innerHTML) + 1;

}

//task_21_2

function timerStart(){

	 window.inter = window.setInterval(timer, 1000);
	
}

function timerStop(){

	window.clearInterval(window.inter);
}

function timer(){

	let second = document.getElementById('second');

	second.innerHTML = Number(second.innerHTML) + 1;
}

//task_21_3_1

window.onload = function (){

window.setInterval( function clock(){

	let date = new Date();

	let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();

	let min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();

	let second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

	console.log(hour + ':' + min + ':' + second);

	document.getElementById('time').innerHTML = hour + ':' + min + ':' + second;

	document.getElementById('time').style.color = 'red';
}, 1000);

}

//task_21_4

function timeBack(){

window.inter = window.setInterval(function count(){

let recount = document.getElementById('timerBack');

(parseInt(recount.innerHTML) > 0) ? recount.innerHTML = parseInt(recount.innerHTML) - 1 : recount.innerHTML = 0; 

}, 1000);

}

//task_21_5

window.onload = function (){
	
window.setInterval(function imgCh(){

let picture = document.getElementById('picture');

let src = (picture.src == "file:///C:/js/img/1.jpg");

//console.log(src);
//console.log(picture.src);

(src == true) ? picture.src = "img/2.jpg" : picture.src = "img/1.jpg"; 

}, 2000);

}

//task_21_6

window.onload = function (){
	window.setInterval(function imgChange(){
		let picture1 = document.getElementById('picture1');
		let picture2 = document.getElementById('picture2');
		let picture3 = document.getElementById('picture3');
		console.log(picture1.src);
		let src1 = "file:///C:/js/img/1.jpg";
		let src2 = "file:///C:/js/img/2.jpg";
		let src3 = "file:///C:/js/img/3.jpg";

		(picture1.src == src1) ? picture1.src = src2 : (picture1.src == src2) ? picture1.src = src3 : picture1.src = src1;
		(picture2.src == src2) ? picture2.src = src3 : (picture2.src == src3) ? picture2.src = src1 : picture2.src = src2;
		(picture3.src == src3) ? picture3.src = src1 : (picture3.src == src1) ? picture3.src = src2 : picture3.src = src3;

	}, 2000);
}

//task_21_7

function startGallery(){

	window.intervalId =	window.setInterval(imgChange, 2000);

}

function stopGallery(){

	window.clearInterval(window.intervalId);

}

function imgChange(){
		let picture1 = document.getElementById('picture1');
		let picture2 = document.getElementById('picture2');
		let picture3 = document.getElementById('picture3');
		let picture4 = document.getElementById('picture4');
		let picture5 = document.getElementById('picture5');
		
		console.log('picture1 - ' + picture1.src);
		console.log('picture2 - ' + picture2.src );
		console.log('picture3 - ' + picture3.src);
		console.log('picture4 - ' + picture4.src);
		console.log('picture5 - ' + picture5.src);
		
		let src1 = "file:///C:/js/img/1.jpg";
		let src2 = "file:///C:/js/img/2.jpg";
		let src3 = "file:///C:/js/img/3.jpg";
		let src4 = "file:///C:/js/img/4.jpg";
		let src5 = "file:///C:/js/img/5.jpg";

		(picture1.src == src1) ? picture1.src = src2 : (picture1.src == src2) ? picture1.src = src3 : (picture1.src == src3) ? picture1.src = src4 : (picture1.src == src4) ? picture1.src = src5 : picture1.src = src1;
		(picture2.src == src2) ? picture2.src = src3 : (picture2.src == src3) ? picture2.src = src4 : (picture2.src == src4) ? picture2.src = src5 : (picture2.src == src5) ? picture2.src = src1 : picture2.src = src2;
		(picture3.src == src3) ? picture3.src = src4 : (picture3.src == src4) ? picture3.src = src5 : (picture3.src == src5) ? picture3.src = src1 : (picture3.src == src1) ? picture3.src = src2 : picture3.src = src3;
		(picture4.src == src4) ? picture4.src = src5 : (picture4.src == src5) ? picture4.src = src1 : (picture4.src == src1) ? picture4.src = src2 : (picture4.src == src2) ? picture4.src = src3 : picture4.src = src4;
		(picture5.src == src5) ? picture5.src = src1 : (picture5.src == src1) ? picture5.src = src2 : (picture5.src == src2) ? picture5.src = src3 : (picture5.src == src3) ? picture5.src = src4 : picture5.src = src5;
}

//task_21_8

function findReminder(){

let date = new Date();

let hourRemainder = 24 - (Number(date.getHours()));
let minRemainder = 60 - (Number(date.getMinutes()));
let secRemainder = 60 - (Number(date.getSeconds()));

let hour = (hourRemainder < 10) ? '0' + hourRemainder : hourRemainder;
let min = (minRemainder < 10) ? '0' + minRemainder : minRemainder;
let sec = (secRemainder < 10) ? '0' + secRemainder : secRemainder;

console.log(hour + ' : ' + min + ' : ' + sec);

document.getElementById('hour').innerHTML = hour;
document.getElementById('min').innerHTML = min;
document.getElementById('sec').innerHTML = sec;

}



window.onload = function(){

	window.setInterval(findReminder, 1000);

}

//23.1


window.onload = function (){

	let elems = document.getElementsByTagName('img');

	for(let i = 0; i < elems.length; i++){

		elems[i].onclick = fun;
	}
}

function fun(){

	alert(this.src);
}

//23.2


window.onload = function (){

	let elems = document.getElementsByTagName('a');

	for(let i = 0; i < elems.length; i++){

		elems[i].addEventListener('mouseover', fun);
	}
}

function fun(){

	this.title = this.innerHTML;
	//alert(this.value);

}

//23.3

window.onload = function (){

	let elems = document.getElementsByTagName('a');

	for(let i = 0; i < elems.length; i++){

		elems[i].addEventListener('mouseover', func);
	}
}

function func(){

	this.innerHTML = this.innerHTML + '(' + this.href + ')';
}

//23.4

window.onload = function (){

	let elems = document.getElementsByTagName('a');

	for(let i = 0; i < elems.length; i++){

		elems[i].addEventListener('mouseover', func);
		elems[i].removeEventListener('mouseover', func);
	}
}

function func(){

	this.innerHTML = this.innerHTML + '(' + this.href + ')';

}

//23.5

window.onload = function(){

	let elems = document.getElementsByTagName('input');

	for(let i = 0; i < elems.length; i++){

		elems[i].addEventListener('blur', funVal);
	}
}

function funVal(){

	let test = document.getElementById('test');
	test.innerHTML = test.innerHTML + ', ' + this.value ;
}

//23.6

window.onload = function(){

	let elems = document.getElementsByTagName('input');

	for(let i = 0; i < elems.length; i++){

		elems[i].addEventListener('click', funVal);
	}
}

function funVal(){

	alert(this.value);
	this.removeEventListener('click', funVal);

}

//23.7

window.onload = function(){

	let elems = document.getElementsByTagName('p');

	//(let i = 0; i < elems.length; i++)
	
	for(let elem of elems){
		elem.addEventListener('click', sqrFunc);
	}
}

function sqrFunc(){
	this.innerHTML = Math.pow(parseInt(this.innerHTML), 2); 
}

//23.8

window.onload = function (){

	let elements = document.getElementsByTagName('input');
	
	for (let element of elements){

		element.addEventListener('blur', borderFunc);
	}
}

function borderFunc(){

	console.log('imput has ' + this.value.length + ' symbol(s)');
	
	if(this.value.length > 5){
		this.style.borderColor = 'red';
	}else{
		this.style.borderColor = 'green';
	}
}

//23.9

window.onload = function (){

	let elements = document.getElementsByTagName('div');
	
	for (let element of elements){

		element.addEventListener('click', colorFunc);
	}
}

function colorFunc(){
	
	(this.style.background != 'red') ? this.style.background = 'red': this.style.background = 'green';
}

//24.0

window.onload = function (){
	let elem = document.getElementById('elem1');
	elem.classList.add('www');
	//alert(elem.classList);
}

window.onload = function (){
	let elem2 = document.getElementById('elem2');
	elem2.classList.remove('www');
	//alert(elem.classList);
}

window.onload = function (){
	let elem3 = document.getElementById('elem3');
	let contains = elem3.classList.contains('www');
	alert(contains);
}

window.onload = function (){
	let elem4 = document.getElementById('elem4');
	elem4.classList.toggle('www');
	elem4.classList.toggle('zzz');
	elem4.classList.toggle('rrr');
}

window.onload = function (){
	let elem5 = document.getElementById('elem5');
	elem5.classList.toggle('www');
	elem5.classList.toggle('zzz');
	elem5.classList.toggle('rrr');
	let leng = elem5.classList.length;
	alert(leng);
}

window.onload = function (){
	let elem6 = document.getElementById('elem6');
	elem6.classList.toggle('www');
	elem6.classList.toggle('zzz');
	elem6.classList.toggle('rrr');
	let leng = elem6.classList;
	
for(let elem of leng){
	alert(elem);
}
}

window.onload = function (){
	let elem7 = document.getElementById('elem7');
	elem7.classList.toggle('www');
	elem7.classList.toggle('zzz');
	elem7.classList.toggle('rrr');
	
	elem7.style.cssText += 'margin: 10px; float: right;';
}

window.onload = function (){
	let elem8 = document.getElementById('elem8');
	
	elem8.addEventListener('click', tagFunc);
}

function tagFunc(){

		alert(this.tagName);

}

window.onload = function (){
	let elem9 = document.getElementById('elem9');
	
	elem9.addEventListener('click', tagFunc);
}

function tagFunc(){

		alert(this.tagName.toLowerCase());

}

window.onload = function (){
	let elem10 = document.getElementById('elem10');
	
	elem10.addEventListener('click', tagFunc);
}

function tagFunc(){

		alert(this.tagName.toLowerCase());

}

window.onload = function (){
	
	let elem10 = document.querySelectorAll('#elem10');
	
	for(let elem of elem10){

		alert(elem.tagName.toLowerCase());;
	
	}
	
}

window.onload = function (){
	
	let elem11 = document.querySelector('#elem11');
	
	let list = document.createElement('li');

	list.innerHTML = 'пункт';

	elem11.appendChild(list);
	
}



window.onload = function (){
	
	let elem12 = document.querySelector('#elem12');

	let  arr = ['a', 'b', 'c', 'd'];
	
	for(let elem of arr){
		let list = document.createElement('li');
		list.innerHTML = elem;
		elem12.appendChild(list);
	}
}

window.onload = function (){
	
	let elem13 = document.querySelector('#elem13');
	let elem = document.getElementById('elem');
	let  newElem = document.createElement('li');
	elem13.insertBefore(newElem, elem);

	newElem.addEventListener('click', funcText);

}

function  funcText(){

	this.innerHTML = 'Hello world!';

}

window.onload = function(){
	let parent = document.getElementById('parent14');
	let liElem = document.getElementById('elem14');
	let newElem = document.createElement('li');
	newElem.innerHTML = '!!!';
	parent.insertBefore(newElem, liElem);
}*/

/*24.15 Вставка элементов через insertAdjacentHTML
Для решения задач данного блока вам понадобятся следующие методы: insertAdjacentHTML.
 Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.

 window.onload = function(){
	let parent = document.getElementById('parent15');
	//let liElem = document.getElementById('elem14');
	// let newElem = document.createElement('span');
	// newElem.innerHTML = '!!!';
	parent.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');
}*/

/* Дан элемент #elem. Вставьте после него span с текстом '!!!'

window.onload = function(){
	let elem = document.getElementById('elem');
	elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>');
}*/

/*Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.

window.onload = function (){

	let elem = document.getElementById('elem');
	elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>');
}*/

/*24.18 Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.

window.onload = function (){

	let elem = document.getElementById('elem');
	elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');
}

// Для решения задач данного блока вам понадобятся следующие свойства: firstElementChild, lastElementChild, children.
//24.19  Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.

window.onload = function (){

	let elem = document.getElementById('elem');
	elem.firstElementChild.style.color ='red';
}*/

//24.20 Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
/*window.onload = function (){

	let elem = document.getElementById('elem');
	elem.lastElementChil.style.color ='red';
}
//24.21  Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

window.onload = function (){

	let elem = document.getElementById('elem');
	let elements = elem.children;
	
	for(let element of elements){
		element.innerHTML += '!'
	}
}*/

// Dля решения задач данного блока вам понадобятся следующие свойства: previousElementSibling, nextElementSibling.
// 24.22 Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

/*window.onload = function (){

	let elem = document.getElementById('elem');

	elem.previousElementSibling.innerHTML += '!';
	
}*/

// 24.23 Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.



/*window.onload = function (){

	let elem = document.getElementById('elem');

	elem.nextElementSibling.innerHTML += '!';
	
}*/

//24.24  Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

/*window.onload = function (){

	let elem = document.getElementById('elem');

	let next = elem.nextElementSibling;

	next.nextElementSibling.innerHTML += '!';
	
}*/

// Для решения задач данного блока вам понадобятся следующие свойства: parentElement, parentNode.
// 24.25 Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.

/*window.onload = function (){

	let elem = document.getElementById('elem');

	elem.parentElement.style.color = 'red';
	
}*/

//24.26 Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.

/*window.onload = function (){

	let elem = document.getElementById('elem');

	elem.parentElement.parentNode.style.color = 'red';
	
}*/

// Для решения задач данного блока вам понадобятся следующие свойства: removeChild.

//24.27 Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.

/*window.onload = function (){

	let elem = document.getElementById('elem');
	let child = document.getElementById('child');
	elem.removeChild(child);
	
}*/

//24.28 Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.

/*function deletFun(){
	
	let elem = document.getElementById('elem');
	let lastChild = elem.lastChild;
	elem.removeChild(lastChild);
}*/

//24.29 Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.

/*function removeElem(){
	let elem = document.getElementById('elem');
	elem.remove();
}*/

//24.30 

/*window.onload = function (){

	let elem = document.querySelector('#elem');
	console.log(elem);

	let elems = elem.children;
	console.log(elems);
	console.log(typeof(elems));

	for(let element of elems){

		element.addEventListener('click', funDel);
	}
}

function funDel(){
	this.remove();
}*/

//24.31 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

/*function eventFun(){

	let inPut = document.getElementById('input');
	let inClone = inPut.cloneNode('true');
	console.log(typeof(inClone));
	inPut.insertAdjacentElement('afterEnd',inClone);
}*/

//24.32 Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.

/*window.onload = function (){

let body = document.getElementById('body');

console.log(body);

let ul = document.createElement('ul');

body.insertBefore(ul, body.lastChild);

let str = '24.32 Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.';

let arr = str.split(' ');

console.log(arr);

for(let i = 0; i < arr.length; i++){

	let li = document.createElement('li');
	li.innerHTML = arr[i];
	ul.appendChild(li);
	console.log(arr[i]);

	}
}*/

//24.33 Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.



// function addInput(){
// 	let forma = document.getElementById('forma');
// 	let text = document.getElementById('text');
// 	let space = document.getElementById('space');
// 	let but = document.getElementById('but');
// 	let addText = text.cloneNode(true);
// 	let addSpace = space.cloneNode(true);
// 	forma.insertBefore(addText, but);
// 	forma.insertBefore(addSpace, but);
// }

//24.34 Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.

// function addDivide(){

// 	let form = document.getElementById('form');
// 	let text = document.getElementById('text');
// 	let space = document.getElementById('space');
// 	let num = text.value.split('');
// 	console.log(num);
	
// 	for(let i = 0; i < num.length; i++){
		
// 		let newText = text.cloneNode(true);
// 		newText.value = num[i];
// 		form.appendChild(newText);
// 		let newSpace = space.cloneNode(true);
// 		form.appendChild(newSpace);
	
// 	}
// }

//24.35 Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.

// function removeForm(){
// 	let form = document.getElementById('form');
// 	let button = document.getElementById('but');
// 	form.remove();
// }

// На величину границы

//25.1 Для решения задач данного блока вам понадобятся следующие методы: clientTop, clientLeft.
// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.

// function itsTop(){
// 	let block = document.getElementById('block');
// 	alert(block.clientTop);
// }

// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы.

// window.onload = function(){
	
// 	let block = document.getElementById('block');
// 	let button = document.getElementById('button');
// 	button.addEventListener('click', itsLeft);
// }


// function itsLeft(){
// 	alert(block.clientLeft);
// }

//25.3 Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding.

// window.onload = function(){
	
// 	let block = document.getElementById('block');
// 	let button = document.getElementById('button');
// 	button.addEventListener('click', itsLeft);
// }


// function itsLeft(){
// 	alert(block.offsetWidth);
// }

//25.5Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding.

// window.onload = function(){
	
// 	let block = document.getElementById('block');
// 	let button = document.getElementById('button');
// 	button.addEventListener('click', itsLeft);
// }


// function itsLeft(){
// 	alert(block.offsetHeight);
// }

//25.6 Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding.

// window.onload = function(){
	
// 	let block = document.getElementById('block');
// 	let button = document.getElementById('button');
// 	button.addEventListener('click', itsLeft);
// }


// function itsLeft(){
// 	alert(block.offsetWidth);
// }

//25.7 Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding.

// function ComputedStyle(){

// 	let block = document.getElementById('block');
// 	console.log(block.tagName);
// 	let style = getComputedStyle(block);
// 	alert('width: ' + style.width + ';');
//  alert('height: ' + style.height + ';');
// }

//25.8-9 Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху.

// function scrolled(){

// 	let block = document.getElementById('block');
// 	console.log(block.tagName);
// 	alert('scrollheight is ' + block.scrollHeight + 'px;');
//  alert('scrollWidth is ' + block.scrollWidth + 'px;');
// }

//25.10-11 and 12-13 Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху.

// function scrolledUp(){

// 	let block = document.getElementById('block');
// 	console.log(block.tagName);
// 	alert(block.scrollTop);
// 	block.scrollTop = 0;	
	
// }

// function scrolledLeft(){

// 	let block = document.getElementById('block');
// 	console.log(block.tagName);
// 	alert(block.scrollLeft);
// 	block.scrollLeft = 1000;
// }

//25.14 Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента

// function scrollUp(){

// 	let block = document.getElementById('block');
// 	console.log(block.scrollHeight);
// 	var total_height = block.scrollHeight;
// 	var needed_height = total_height - 100;
// 	block.scrollTop = needed_height;
// 	console.log(block.scrollTop);
// }

// //25.15-16 Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали. Показать решение.

//  Дана страница с горизонтальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали. Показать решение.
	
// function getOffset(){

// 	alert('pageXOffset = ' + pageXOffset + '; ' + 'pageYOffset = ' + pageXOffset + ';');

// }

// 25.17-18 Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху.
// 	Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите на 300px вниз от текущего положения.

// function moveCor(){

// 	window.scrollTo(300, 500);

// }

// function movePix(){

// 	window.scrollBy(0, 300);

// }

// 25.19-22 По нажатию на кнопку прокрутите страницу до самого низа. Показать решение.

//  По нажатию на кнопку прокрутите страницу на 400px от текущего положения. Показать решение.

//  По нажатию на кнопку проверьте, прокручена ли страница до самого низа. Если это так - прокрутите ее в положение 100px от верхнего края. Показать решение.

//  Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза. Показать решение.

// function moveDown(){
	
// 	let body = document.documentElement;
// 	let height = body.scrollHeight;
// 	console.log('offset height: ' + height);
// 	window.scrollTo(0, height);

// }

// function movePix400(){

// 	window.scrollBy(400, 0);

// }

// function moveTop100px(){

// 	let body = document.documentElement;
// 	console.log('body.scrollHeight: ' + body.scrollHeight + ';  body.pageYOffset: ' + window.pageYOffset + '; body.clientHeight: ' + body.clientHeight + '; body.scrollTop: ' + body.scrollTop + '; body.offsetHeight: ' + body.offsetHeight);
// 	let scrHeight = body.scrollHeight;
// 	let scrTop = body.scrollTop;
// 	let clHeight =  body.scrollHeight - body.scrollTop;
// 	console.log('body.scrollHeight - body.scrollTop = ' + clHeight);
	
// 	if(scrHeight - scrTop == clHeight){

// 		window.scrollTo(0, 100);

// 	}
	
// }

// function changeSize(){

// 	let elem = document.getElementById('elem');
// 	let elemHeight = elem.offsetHeight;
// 	let elemWidth = elem.offsetWidth;

// 	console.log('elem.offsetHeight: ' + elem.offsetHeight + '  elem.offsetWidth: ' + elem.offsetWidth);
	
// 	elem.style.width = elemWidth*2 + 'px';
// 	elem.style.height = elemHeight*2 + 'px';

// 	console.log('new elem.offsetHeight: ' + elem.offsetHeight + '  new elem.offsetWidth: ' + elem.offsetWidth);

// }

// 26.1-3 Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера. Показать решение.

//  Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа. Показать решение.

//  Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка. Показать решение.


// function getHeight(){

// 	let body = document.documentElement;

// 	alert(body.clientHeight + 'px');

// }

// window.onload = function(){

// 	let button2 = document.getElementById('button2');
// 	button2.addEventListener('click', scrollDown);
// 	let button3 = document.getElementById('button3');
// 	button3.addEventListener('click', getTop);
// }

// function scrollDown(){

// 	let body = document.documentElement;
// 	body.scrollTo(0, body.scrollHeight); 
// }

// function getTop(){

// 	let body = document.documentElement;
// 	(body.scrollTop == 0)? alert('This brouser has no any scroll now!') : alert('The scroll is ' + body.scrollTop + 'px');
// }

// 26.1 Повторите поведение страницы по данному образцу:

// let body = document.documentElement;
// body.style.backgroundColor = 'white';
// let div = document.createElement('div');
// body.insertAdjacentElement('afterBegin', div);
// div.style.backgroundColor = 'white';
// div.style.width = body.offsetWidth;
// div.style.height = body.offsetHeight;
// let p = document.createElement('p');
// div.insertAdjacentElement('afterBegin', p);
// body.onmousemove = mouseMove;

// function mouseMove(event){
	
// 	p.innerHTML = 'X: ' + event.clientX + '  Y: ' + event.clientY;

// }

//26.2 Повторите поведение страницы по данному образцу:

// let body = document.documentElement;
// body.style.backgroundColor = 'white';
// let div = document.createElement('div');
// body.insertAdjacentElement('afterBegin', div);
// div.style.backgroundColor = 'white';
// div.style.width = '50px';
// div.style.height = '50px';
// div.style.border = '5px solid red';
// let p = document.createElement('p');
// div.insertAdjacentElement('afterBegin', p);
// body.onclick = divMove;

// function divMove(event){

// 	div.style.marginLeft = event.clientX + 'px';
// 	div.style.marginTop = event.clientY + 'px';
// }

// /26.3 Повторите поведение страницы по данному образцу:

// let body = document.documentElement;
// body.style.backgroundColor = 'white';
// let div = document.createElement('div');
// body.insertAdjacentElement('afterBegin', div);
// div.style.backgroundColor = 'white';
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.border = '2px solid red';
// let p = document.createElement('p');
// div.insertAdjacentElement('afterBegin', p);
// body.onclick = divMove;

// function divMove(event){
// 	let width = parseInt(div.style.width)/2;
// 	let height = parseInt(div.style.height)/2;
// 	div.style.marginLeft = event.clientX - width + 'px';
// 	div.style.marginTop = event.clientY - height + 'px';
// }

//26.4

// window.onload = function (){

// 	let txt = document.getElementById('text');
// 	let code = document.getElementById('code');
	
// 	txt.onkeypress = funKey;
	

// }


// function funKey(event){

// 	let elem = event.keyCode;
// 	code.innerHTML = elem;

// }

//26.5

// window.onload = function (){

// 	let text = document.getElementById('text');
// 	let code = document.getElementById('code');
// 	text.onkeypress = simbol;
// }

// function simbol(event){

// 		let symbol = String.fromCharCode(event.keyCode);
// 		code.innerHTML += symbol;
// }

// window.onload = function (){

// 	let txt = document.getElementById('txt')

// 	txt.onclick = ctrlFun;

// }

// function ctrlFun(event){

// 	if (event.ctrlKey){

// 		txt.style.color = 'red';

// 	} else {

// 		txt.style.color = 'white';
// 	}

// }

// window.onload = function (){
// 	 let txt = document.getElementById('txt');
// 	 txt.onclick = newTxt;
// }

// function newTxt(event){

// 	if (event.ctrlKey){
		
// 		txt.innerHTML = 'ctrlKey';
	
// 	}  
	
// 	else if(event.shiftKey){
		
// 		txt.innerHTML = 'shiftKey';
	
// 	} 
	
// 	else if(event.altKey){
		
// 		txt.innerHTML = 'altKey';
	
// 	}

// 	else{

// 		txt.innerHTML = 'По нажатию на кнопки Ctr, Alt или Shift кликните!';
	
// 	}

// }

// 26.8 Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13). Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

// window.onload = function (){

// 	let insert = document.getElementById('insert');
// 	insert.onkeypress = writeOut;
	
// }

// function writeOut(event){

// 	let txt = document.getElementById('text');	

// 		if(event.keyCode == 13){

// 			txt.innerHTML = insert.value;
// 			event.preventDefault();
// 		}

// 		console.log('event.keyCode: ' + event.keyCode);
		
// }

//29 Работа с формами
 
// 29.1 Дана форма с id="form". В ней даны инпуты, в них числа. Дана кнопка. По нажатию на эту кнопку получите форму по ее id, затем циклом переберите все инпуты в ней и найдите сумму чисел из этих инпутов.

//let formElems = document.getElementById('form');

// window.onload = function (){
// 	let  button = document.querySelector('button');
// 	button.addEventListener('click', function(){
// 		// for(let i = 0; i < document.forms.length; i++){
// 		// 	console.log(document.forms[i].id);
// 		// }

// 		let sum = 0;

// 		for(form of  document.forms){
// 			console.log(form.id);

// 			for(input of  form.elements){
// 				sum += parseInt(input.value);
				
// 			}

// 			alert('Sum is : ' + sum);
// 		}

		

		
// 	})
// }

//29.2 На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка. По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом переберите все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов.

// window.onload = function (){
// 	let  button = document.querySelector('button');
// 	button.addEventListener('click', function(){
// 		// for(let i = 0; i < document.forms.length; i++){
// 		// 	console.log(document.forms[i].id);
// 		// }

// 		let sum = 0;

// 		for(form of  document.forms){
// 			console.log(form.id);

// 			for(input of  form.elements){
// 				sum += parseInt(input.value);
				
// 			}

// 			console.log('Sum is : ' + sum);
// 		}

// 		alert('Sum is : ' + sum);s

		
// 	})
// }

// 29.3 Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут.

// window.onload = function (){
// 	let select = document.querySelector('select');
// 	let input = document.querySelector('input');
// 	select.addEventListener('change', function (){
// 		input.value = select[select.selectedIndex].text;
// 		//input.value = select.value;
// 		//input.value = select.selectedIndex;
// 	});
	
// }

//29.4 Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку и в селекте становился выбранным пункт с этим номером.

// window.onload = function (){
// 	let select = document.querySelector('select');
// 	let input = document.querySelector('input');
// 	input.addEventListener('change', function (){
		
// 		let val = parseInt(input.value);
		
// if (val > 0 || val <= select.elements.length){

// 	select.value = input.value;

// }  
		
// 	});
	
// }

//29.5 Дан селект со списком стран. Сделайте так, чтобы при выборе страны рядом появлялся еще и селект со списком городов из этой страны.
//Задача у многих не получается, см. ее разбор https://youtu.be/hgT0mjZvV9s

// let USA = ['', 'New York City', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia'];
// let UK = ['', 'London', 'Birmingham', 'Glasgow', 'Liverpool', 'Manchester'];
// let Canada = ['', 'Toronto', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton'];
// let Ierland = ['', 'Dublin', 'Cork', 'Derry', 'Limerick', 'Galway'];
// let Australia = ['', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'];

// window.onload = function (){
// 	let select1 = document.getElementById('select1');
// 	select1.addEventListener('change', fun)
// };

// function fun(){
// 	let select2 = document.getElementById('select2');
// 	let label = document.getElementById('label');
// 	select2.style.cssText = "visibility: visible;";
// 	label.style.cssText = "visibility: visible;";
	
// 	if(select1.value == 1){
// 		select2.length = 0;
// 		console.log(USA);
		
// 		for(let i = 0; i < USA.length; i++){
// 			select2.add(new Option(USA[i], 1 + i))
		
// 		}

// 		select2.addEventListener('change', function(){

// 			alert('country: ' + select1[select1.selectedIndex].innerHTML + ' city: ' + select2[select2.selectedIndex].innerHTML);
// 			location.reload();
// 		});
		
// 	}

// 	else if(select1.value == 2){
// 		select2.length = 0;
// 		console.log(UK);

// 		for(let i = 0; i < UK.length; i++){
// 			select2.add(new Option(UK[i], 1 + i))
			
// 		}

// 		select2.addEventListener('change', function(){

// 			alert('country: ' + select1[select1.selectedIndex].innerHTML + ' city: ' + select2[select2.selectedIndex].innerHTML);
// 			location.reload();
// 		});
// 	}

// 	else if( select1.value == 3){
// 		select2.length = 0;
// 		console.log(Canada);

// 		for(let i = 0; i < Canada.length; i++){
// 			select2.add(new Option(Canada[i], 1 + i))
		
// 		}

// 		select2.addEventListener('change', function(){

// 			alert('country: ' + select1[select1.selectedIndex].innerHTML + ' city: ' + select2[select2.selectedIndex].innerHTML);
// 			location.reload();
// 		});
// 	}

// 	else if(select1.value == 4){
// 		select2.length = 0;
// 		console.log(Ierland);

// 		for(let i = 0; i < Ierland.length; i++){
// 			select2.add(new Option(Ierland[i], 1 + i))
			
// 		}
// 		select2.addEventListener('change', function(){

// 			alert('country: ' + select1[select1.selectedIndex].innerHTML + ' city: ' + select2[select2.selectedIndex].innerHTML);
// 			location.reload();
// 		});
// 	}

// 	else if(select1.value == 5){
// 		select2.length = 0;
// 		console.log(Australia);

// 		for(let i = 0; i < Australia.length; i++){
// 			select2.add(new Option(Australia[i], 1 + i))
			
// 		}

// 		select2.addEventListener('change', function(){

// 			alert('country: ' + select1[select1.selectedIndex].text + ' city: ' + select2[select2.selectedIndex].text);
// 			location.reload();
// 		});
// 	}

// 	else{
// 		location.reload();
// 	}
// }

//29.6 Даны 3 селекта: с днем, с месяцем и годом. Сделайте так, чтобы некорректную дату нельзя было выбрать.



//28.1 Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. 
//Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. 
//Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).

// window.onload = function (){
	
// 	let ul = document.getElementById('ul');
// 	let button = document.getElementById('button');
	
// 	button.addEventListener('click', function(event){
		
// 		let li = document.createElement('li');
// 		li.innerHTML = 'пункт';
// 		ul.appendChild(li);
// 	});

// 	ul.onclick = (event) => {
// 		let i = document.createElement('i');
// 		i.innerHTML = ' real';
//         event.target.closest('li').appendChild(i);
// 		event.target.closest('li').innerHTML += '!';
// 	}
	
// }

// 28.2 Дана таблица с юзерами с двумя колонками: имя и фамилия. 
// Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. 
// Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. 
// Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).

// window.onload = function (){

// 	let button = document.querySelector('#button');
// 	let table = document.querySelector('#table');
// 	button.addEventListener('click', insertNewUser);
// 	table.onclick = (event) => {

// 		if(event.target.id != 'head'){

// 			let change = prompt('Insert new data!');
// 			event.target.closest('td').innerHTML = change;
// 		}
		
// 	};
	
// }

// function insertNewUser(event){

// 	let name = document.querySelector('#name');
// 	let surname = document.querySelector('#surname');
// 	let table = document.querySelector('#table');

// 	let tr = document.createElement('tr');
// 	table.appendChild(tr);
// 	let tdName = document.createElement('td');
// 	tdName.innerHTML = name.value;
// 	let tdSurname = document.createElement('td');
// 	tdSurname.innerHTML = surname.value;
// 	tr.appendChild(tdName);
// 	tr.appendChild(tdSurname);
// 	event.preventDefault();
// }

