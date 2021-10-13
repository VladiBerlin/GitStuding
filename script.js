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

//22.1


window.onload = function (){

	let elems = document.getElementsByTagName('img');

	for(let i = 0; i < elems.length; i++){

		elems[i].onclick = fun;
	}
}

function fun(){

	alert(this.src);
}

//22.2


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

//22.3

window.onload = function (){

	let elems = document.getElementsByTagName('a');

	for(let i = 0; i < elems.length; i++){

		elems[i].addEventListener('mouseover', func);
	}
}

function func(){

	this.innerHTML = this.innerHTML + '(' + this.href + ')';
}

//22.4

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

//22.5

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

//22.6

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

//22.7

window.onload = function(){

	let elems = document.getElementsByTagName('p');

	//(let i = 0; i < elems.length; i++)
	
	for(let elem of elems){
		elem.addEventListener('click', sqrFunc);
	}
}

function sqrFunc(){
	this.innerHTML = Math.pow(parseInt(this.innerHTML), 2); 
}*/

//22.8

window.onload = function (){

	let elements = document.getElementsByTagName('input');
	
	for (let element of elements){

		element.addEventListener('', borderFunc);
	}
}

function borderFunc(){

	
}
