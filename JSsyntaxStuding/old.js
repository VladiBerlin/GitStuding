/*var a = 5;
console.log(a);

var ok = confirm('Вам уже есть 18 лет?');
alert(ok);

var str = 'abcde';
b = str[0];
c = str[1];
d = str[2];
e = str[3];

alert(b + c + d + e);

alert('Секунд в сутках ровно '+ 60*60*24);

var name = prompt('Your name?');
alert('Your name is ' + name);

var number = prompt('Give me a number');
alert(number*=number);

var num = '12345';
a = num[0];
b = num[1];
c = num[2];
d = num[3];
e = num[4];

alert(a*b*c*d*e);

var num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

var num = 10;
num++;
num++;
num--;
alert(num);

var arr = ['a', 'b', 'c', 'd'];
alert(arr[0]+'+'+arr[1]+', '+arr[2]+'+'+arr[3]);

var arr = [2, 5, 3, 9];

result = arr[0]*arr[1]+arr[2]*arr[3];

alert(result);

var obj = {a:1, b:2, c:5};

alert(obj['c']);
alert(obj.c);

var obj = {Kolja:'1000', Vasja:'500', Petja:'200'};

alert('Vasjas salary is ' + obj['Vasja']);
alert('Vasjas salary is ' + obj.Vasja);

var week = {1:'monday', 2:'tuesday', 3:'wednsday', 4:'thursday', 5:'friday', 6:'saturday', 7:'sunday'};
var day = prompt('Put the number of day ');
alert(week[day]);

var num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

alert(num[1][0]);

var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj.js[0]);

var days = {

'ru':['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
'eng':['monday', 'tuesday', 'wednsday', 'thursda', 'friday', 'suturday', 'sunday']

 }

alert(days['ru'][0] + ' ' + ' ' + days['eng'][2]);

var days = {

'ru':['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
'eng':['monday', 'tuesday', 'wednsday', 'thursda', 'friday', 'suturday', 'sunday']

 }

 lang = 'ru';
 day = 3;

alert(days[lang][day]);

var a = prompt("напиши test или другое слово...");
if(a === 'test') alert('Верно'); else alert('Неверно');

var test = false;

if(test == true) alert('exelent'); else alert('not exelent');



var b = 5;
var a = -1;

if(a < 11 && a > 2 || b < 14 && b >= 6)  { 

	
	alert(true);

} 

else{

	num = a - b; 
	alert(false);

}

var a = prompt('напиши цифру от 1 до 4');

switch (a) {
	
	case '1':
		alert('весна');
	break;

	case '2':
		alert('лето');
	break;

	case '3':
		alert('осень');
	break;

	case '4':
		alert('зима');
	break;

	default:
		alert('вы ввели неправильную цифру');
	break;

}

var day = prompt('напиши день месяца');

if(day >= 1 && day <=10) { 

	alert('это число первой дэкады месяца');

}

else if (day >= 11 && day <= 20){

	alert('это число второй дэкады месяца');
}

else if (day >= 21 && day <= 31){

	alert('это число третьей дэкады месяца');
}

else{
	alert('Такого дня месяца не существует!')
}

var month = prompt('wtite the number of month')

if (month >= 1 && month < 3 || month == 12) {

	alert('it is winter')
}

else if (month >= 3 && month <=5 ) {

	alert('it is spring')
}

else if (month >= 6 && month <=8 ) {

	alert('it is summer')
}

else if (month >= 9 && month <=11 ) {

	alert('it is autumn')
}

else {
	alert('You wrote a wrong number')
}

var str = 'abcde';

if (str[0] == 'a'){	
	
	alert('Yes');
}

else {
	alert('No');
}

var str = '1234';

if (str[0] == 1){	
	
	alert('Yes');
}

else {
	alert('No');
}

var str = '234';

sum = +(str[0]) + +(str[1]) + +(str[2]);

alert(sum);
var str = prompt('Put six numbers without any gap');

sum1 = +(str[0]) + +(str[1]) + +(str[2]);
sum2 = +(str[3]) + +(str[4]) + +(str[5]);

if (sum1 == sum2) {
	
	alert('Yes');

}

else {
	
	alert('No');
}
var i = -10;

while (i <= 100) {
	
	i++;
	alert(i);
	

}

for (var i = -10; i <= 100; i++){
	

		document.write(i + '<br>');


}

var i = prompt('write the number here');

while (i >= 11 && i < 33){

	i++;
	document.write(i + '<br>');

}

var a = prompt('write the number here');

a = +(a);

for (var i = a; i >= 11 && i <= 33; i++){

	document.write(i + '<br>');

}

var a = prompt('write the number here');

a = +(a);

for(var i = a; i < 100; i++) {
	
	if(i%2==0){ 
		
		document.write(i + '<br>');
	
	}
	
}

var a = prompt('write the number here');

var a = +(a);

for(var i = a; i < 100; i++) {
	
	if(i%2!=0)continue;
	
	document.write(i + '<br>');
	
	
}

var a = prompt('write the number here');

var i = +(a);

var b =  0;

while (i < 100) {
	
	b += i++;	
	
}

document.write(b);

var a = +(prompt('write the number here'));

var arr = [1, 2, 3, 4, 5];

arr.push(a);

for (var i = 0; i < arr.length; i++ ){

	document.write(arr[i] + ' ');

}

var arr = [1, 2, 3, 4, 5];

var result = 0;

for (var i = 0; i < arr.length; i++ ){

	result += arr[i];
}

document.write(result);

var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

for(property in obj){

	document.write(obj[property] +' : '+ property + '<br>');
}

var man = {Kolja:200, Petja:300, Vasja:400};

for(key in man){

	document.write(key + ' : ' + man[key]+'<br>');
}

var arr = [2, 5, 9, 15, 0, 4];

for (var i = 0; i < arr.length; i++) {
	
	
	if (arr[i] > 3 && arr[i] < 10 ){

		document.write( arr[i] + '<br>');

	}
		
}

var mas = [-2, 5, -9, 15, 0, -4, 1, -2, 3, -4, 5];

var b = 0;

for(var i = 0; i < mas.length; i++){

	if( mas[i] >= 0){

		b += mas[i];


	}
}

document.write(b);

var mas = [1, 2, 5, 9, 4, 13, 4, 10];

for (var i = 0; i < mas.length; i++) {
	
	if (mas[i] == 4) {

		document.write('yes! ');
	} 
}

var mas = [10, 20, 30, 50, 235, 3000];
var a = 0;
for(var i = 0; i < mas.length; i++){
	if(i%)
}

var mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(var i = 0; i < mas.length; i++){

	document.write('-' + mas[i]);
}

var week = ['monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'suturday', 'sunday'];
for(var i = 0; i < week.length; i++){

	if(i < 5){

		document.write(' ' + week[i] + ' ');

	} else{

		document.write(' <strong>' + week[i] + '</strong> ');

	}

}

var week = ['monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'suturday', 'sunday'];
for(var i = 0; i < week.length; i++){

	if(i < 5){

		document.write(' ' + week[i] + ' ');

	} else if(i = 6){

		document.write(' <i>' + week[i] + '</i> ');

	}

	else {

		document.write(' <strong>' + week[i] + '</strong> ');

	}

}

var x = 1000;

var num = 0;

for(var i = 1; i < 100; i++ ){
	
	if(x < 50) {

		break;
	}

	else!{

		x /= 2;

		num = i;
		
	}


}

document.write('Количество итераций: ' + num + ' ');

var a = 10;
var b = 3;

alert(a%b);

var a = 21;
var b = 13;
var c = a%b;

if ( c == 0 ){

	alert('It is alright!');

} else{

	alert('The remainder is ' + c);
}

var num = 2;

var a = Math.pow(num, 10);

document.write(a);

var num = 245;

var a = Math.sqrt(num);

document.write(a);

var arr = [4, 2, 5, 19, 13, 0, 10];

var b = 0;

for (i = 0; i < arr.length; i++){

	var c = arr[i];
	
	b += Math.pow(c, 3);

}

document.write(b);

var num = 379;

var sqrt = Math.sqrt(num);

document.write(sqrt + '<br>' );

document.write(Math.round(sqrt) + '<br>');



document.write(sqrt.toFixed(1) + '<br>');

document.write(sqrt.toFixed(2) + '<br>');

var num = 587;

var obj = {};

obj.ceil  = Math.ceil(Math.sqrt(num));

obj.floor = Math.floor(Math.sqrt(num));

document.write(Math.sqrt(num) + '<br>' );

for(key in obj){

	document.write(key + ' : ' + obj[key]+ '<br>');

}
 var arr = [4, -2, 5, 19, -130, 0, 10];

 document.write(Math.max.apply(null, arr) + '<br>');

 document.write(Math.max(4, -2, 5, 19, -130, 0, 10));

 document.write(Math.min.apply(null, arr) + '<br>');

 document.write(Math.min(4, -2, 5, 19, -130, 0, 10));




function getRandom(min, max){

	return Math.floor(Math.random() * (max - min+1))+min;
}

var a = +(prompt('write min number'));
var b = +(prompt('write max number'));

document.write(getRandom(a, b));

var arr = [ ];

function randomNumber(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1)) + min;// body...
}

var a = +(prompt('write min number'));
var b = +(prompt('write max number'));

for (var i = 0; i < 10; i++){

	arr[i] = randomNumber(a, b);
}

for(var i = 0; i < arr.length; i++){

	document.write(arr[i] + '<br>');
}

var a = +(prompt('write min number'));
var b = +(prompt('write max number'));
var c = a - b;

document.write( Math.abs(c) + '<br>');

var arr = [12, 15, 20, 25, 59, 79];

var a = 0;

for(var i = 0; i < arr.length; i++){

	a += arr[i];

}

document.write(i + '<br>');

document.write(a + '<br>');

var x = a / i;

document.write(x);

var num = +(prompt('write a number'));

var fuck = 1;//factorial

for(var i = 1; i <= num; i++){

	fuck *= i;

}

document.write(fuck + '<br>');

var str = 'js';

document.write(str.toUpperCase() + '<br>');

document.write(str.toLowerCase() + '<br>');

var str2 = 'я учу javascript!';

document.write(str2.length + '<br>');

var str3 = str2.substr(0, 6);

document.write(str3 + '<br>');

document.write(str2.slice(6, 17) + '<br>');

var str4 = 'я учу javascript!';

document.write( str4.substring(1, 6) + '<br>');

var str5 = 'Я учу учу Javascript';

document.write(str5.indexOf('учу'));

var str = 'Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие. В противном случае в переменную result запишем содержимое переменной str.';

var n = +(prompt('Write any number here!'));

if (str.length > n) {

	document.write(str.substr(0, n));
} else{

	var result = str;
	document.write(result + ' ... ');

}

var str = 'Я-учу-javascript!';

document.write(str.replace(/-/g, "!") + '<br>');

var str = 'я учу javascript!';

var arr = str.split(' ');

for(var i = 0; i < arr.length; i++){

	document.write(arr[i] + '<br>');
}

var str = 'я учу javascript!';

var arr = str.split('');

for(var i = 0; i < arr.length; i++){

	document.write(arr[i] + ' ');
}

var data = '2025-12-31';

var data1 = data.split('-');

document.write(data1[2] +'.'+ data1[1]+'.'+ data1[0]+ '<br>');

var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join('+');
document.write(str);

var str = prompt('введите текст'); 

var str2 = str.substr(0, 1);

str2 = str2.toUpperCase();

var arr = str.split('');

arr[0] = str2;

str = arr.join('');

document.write(str);
var str = prompt('введите текст'); 

var arr = str.split(' ');

for(var i = 0; i < arr.length; i++){
	var str2 = arr[i];
	var str3 = str2.substr(0, 1);
	var str4 = str3.toUpperCase();
	var arr2 = str2.split('');
	arr2[0] = str4;
	str2 = arr2.join('');
	document.write(str2 + ' ');
}

var str = 'var_test_text';

str = str.replace(/_/g, ' ');

var arr = str.split(' ');

document.write(arr[0]);

for(var i = 1; i < arr.length; i++){

		var str2 = arr[i];
		var str3 = str2.substr(0, 1);
		var str4 = str3.toUpperCase();
		var arr2 = str2.split('');
		arr2[0] = str4;
		str2 = arr2.join('');
		document.write(str2);
		
}
var str = 'var_test_text';

str = str.replace(/_/g, ' ');

var arr = str.split(' ');

var first = arr[0];

for(var i = 0; i < arr.length; i++){ 
	
	if(i == 0){

		document.write(first);
	}

	else{ var str2 = arr[i];
		var str3 = str2.substr(0, 1);
		var str4 = str3.toUpperCase();
		var arr2 = str2.split('');
		arr2[0] = str4;
		str2 = arr2.join('');
		document.write(str2); 
	}
}


//Задачи на функции работы с массивами в JavaScript

var arr1 = [1, 2, 3];

var arr2 = [4, 5, 6];

var arr = arr1.concat(arr2);

alert(arr);

arr.reverse();

alert(arr);

var arr = [1, 2, 3];

//arr.push(4, 5, 6);

arr.unshift(4, 5, 6);

alert(arr);

var arr = ['js', 'css', 'jq'];

//var arr1 = arr.shift();
var arr1 = arr.pop();

alert(arr1);

var arr = [1, 2, 3, 4, 5];
var arr1 = arr.splice(0, 1);
var arr2 = arr.splice(3, 6);
var arr = arr1.concat(arr2);

alert(arr);

var arr = [1, 2, 3, 4, 5];
var arr = arr.splice(1, 4);

alert(arr);

var arr = [1, 2, 3, 4, 5];
var arr1 = arr.splice(2, 0, 'a', 'b', 'c');
document.write(arr); 

var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
document.write(arr);

var arr = [3, 4, 1, 2, 7];
arr.sort();
document.write(arr);

var obj = {a: 1, b: 2, c: 3};
document.write(Object.keys(obj));

var lang = {js:'test', jq: 'hello', css: 'world'};
document.write(Object.keys(lang));

var str = 'дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения';
var cap = str.slice(0, 1);
cap = cap.toUpperCase();
var arr = str.split('');
arr[0] = cap;
str = arr.join('');
document.write(str);

var str = 'дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения';
var cap = str[0].toUpperCase() + str.substr(1);
document.write(cap);

var str = 'дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения';
var cap = str[0].toUpperCase() + str.substr(1);
document.write(cap);

var str = 'дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения';
var str = str.split('');
str[0] = str[0].toUpperCase();
str = str.join('');
document.write(str);

var str = '123456';
var str = str.split('');
str = str.reverse();
var str = str.join('');
document.write(str);

var str = 'http://fuck.html';

document.write(str.indexOf('http://') + '<br>');

document.write(str.indexOf('.html')  + '<br>');

var num = +(prompt('Insert any number here!'));

function square(num) {
	
	return num * num;
}

alert('The sqare of the inserted number is ' + square(num));

var num = +(prompt('Insert any number here!'));

function square(num) {
	
	num = num * num;

	alert('The sqare of the inserted number is ' + num);
}

square(num);

var a = +(prompt('Insert the a number'));
var b = +(prompt('Insert the b number'));

function subtract(a, b){

	return a + b;
}

alert('the summ of a and b is ' + subtract(a, b));
var a = +(prompt('Insert the a number'));
var b = +(prompt('Insert the b number'));
var c = +(prompt('Insert the b number'));

function subtract(a, b){

	return (a - b) / c;
}

alert('the summ of a and b is ' + subtract(a, b, c));


var a = +(prompt('Insert the day number of week'));

function  weekDay(a){
	
	switch (a){

		case 1: 

			alert('Monday');

		break;

		case 2: 

			alert('Tuesday');

		break; 

		case 3: 

			alert('Wednesday');

		break; 

		case 4: 

			alert('Thursday');

		break; 

		case 5: 

			alert('Friday');

		break; 

		case 6: 

			alert('Suturday');

		break; 

		case 7: 

			alert('Sunday');

		break;

		default:

			alert('It is not a day number of week');

		break;

	}
}

weekDay(a);

//пример флагов
function hasElem(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 'c') {
			return true;
		}
	}

	return false; //элемент 'c' не найден
}
var arr = ['a', 'b', 'c', 'd', 'с'];
alert(hasElem(arr));



function findNum(mass, a){
	
	for (var i = 0; i < mass.length; i++){

		if (mass[i] === a){

			return true;

				
		} 
			
	}

	return false;	
	
}

var mass = prompt('enter the elements into the array separated by commas');

mass = mass.split(',');

var a = prompt('enter the array element you are looking for');

alert(findNum(mass, a));

var div = prompt('Inter any dividend')
var num = prompt('inter any divider');

function divideNum(div, num){

		for(var i = 0; i <= div; i++ ){

				if(div%num === 0){

					return true;
				}

		}

		return false;

}

alert(divideNum(div, num));

var arr = prompt('enter the elements into the array separated by commas');

arr = arr.split(',');

function similarNum(arr){

		for(var i = 0; i < arr.length; i++){

			for(var j = 0; j < arr.length; j++){

				if (i != j && arr[i] === arr[j]){

					return true;

				}

			}
		}

	return false;
}

alert(similarNum(arr));

var ok = confirm('Вам уже есть 18 лет?');
alert(ok);

function numSim(a, b){

	if (a === b){

		return true;

	} else {

		return false;
	}
}

var a = prompt('enter any number here');
var b = prompt('enter any number here');

alert(numSim(a, b));

//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

function numSim(a, b){

	if ((a + b) >= 10 ){

		return true;

	} else {

		return false;
	}
}

var a = prompt('enter any number here');
var b = prompt('enter any number here');

alert(numSim(a, b));

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function checkNegative(a){
	
	if (a >= 0){

		return true;
	}

	return false;
}

var a = prompt('enter any number here');

alert(checkNegative(a));


function numSim(a, b){

	return (a + b) >= 10;

}

var a = +(prompt('enter any a number here'));
var b = +(prompt('enter any b number here'));

alert(numSim(a, b));

function numSim(a, b){

	return a === b;

}

var a = +(prompt('enter any a number here'));
var b = +(prompt('enter any b number here'));

alert(numSim(a, b));

function numSim(a){

	return a >= 0;

}

var a = +(prompt('enter any a number here'));
alert(numSim(a));

var a = '';

for (var i = 0; i < 10; i++){
	a = a + i;
}

document.write(a);

var a = '';

for (var i = 9; i > 0; i--){
	a = a + i;


}

document.write(a);

var a = '';

for (var i = -1; i > -10; i--){
	a = a + i;


}

document.write(a);

var a = '';

for (var i = 0; i < 20; i++){
	a = a + 'x';
	document.write(a + '<br>');

}

var a = '';

for (var i = 0; i < 5; i++){
	
	a = a + 'xx';
	
	document.write(a + '<br>');
}


for(var i = 1; i < 10; i++){

	for(var j = 0; j < i; j++){

		
		document.write(i);

	}

	document.write('<br>');
}

var str = 'x';
var str1 = '';
var arr = [];

for(var i = 0; i < 10; i++){

	var str1 = str1 + str; 
	arr.push(str1);

}

document.write(arr);

var arr = [];

for(var i = 1; i < 10; i++){

	var num = '';

	for(var j = 0; j < i; j++){
	
	num = num + i;
	
	}
	
	arr.push(num);

}

document.write(arr);

function arrayFill(x,y){

	for (var i = 0; i < y; i++){

		arr.push(x);
	}
}

var x = prompt(' Insert some data into array.');

var y = prompt('Insert how many sells it takes');

var arr = [];

arrayFill(x,y);

document.write(arr);

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

var arr = [1, 2, 3, 4, 5, 6];

var num = 0;

for (var i = 0; i < arr.length; i++){

		if(num <= 10){

			num = num + arr[i];

		} else{

			document.write(i);

			break;
		}
		
}

//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

var arr = [1, 2, 3, 4, 5, 6];

var rev = [];

for (var i = arr.length -1; i >= 0; i--){

	rev.push(arr[i]);
}

document.write(rev);

//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

var arr = [[1, 2, 3], [4, 5], [6]];

var num = 0;

for (var i = 0; i < arr.length; i++){

	

	for(var j = 0; j < arr[i].length; j++){

		num += arr[i][j];

	}
}

document.write(num);

//Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.


var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

var num = 0;

for (var i = 0; i < arr.length; i++){
	

	for(var j = 0; j < arr[i].length; j++){

		
		for(var z = 0; z < arr[i][j].length; z++){

			num += arr[i][j][z];

		}
	}
}

document.write(num);


function isNumberInRange(num){

	if (num > 0 && num < 10){
		return true;
	} else{
		return false;
	}
}

//var num = +(prompt('Enter any number here'));

//alert(isNumberInRange(num));

//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

var arr = [-2, 2, 5, -4, 3, 4,];

var newarr = [];

for(var i = 0; i < arr.length; i++){

	if(isNumberInRange(arr[i])){

		newarr.push(arr[i]);
	}
}

alert(newarr);

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

var num = +(prompt('Put the number here'));

function splitIt(num){
	
	return String(num).split('');

}
var sum = 0;

function  getDigitsSum(num){
	
	var arr = splitIt(num);
	
	for(var i = 0; i < arr.length; i++){

		sum += Number(arr[i]);
	}

}


//alert(splitIt(num));

getDigitsSum(num);

alert(sum);

var num = +(prompt('Enter any number here'));

var a = 0;

function getDivisors(num){

		for(var i = 0; i <= num; i++){

			if(num % i == 0){

				document.write(i + ', ')
			
			} else{

				continue;
			}
		}

}

getDivisors(num);


var x = +(prompt('Enter any number here'));

function isEven(x){

	if(x >= 0){

		return true;
	
	} else{

		return false;

	}
}

alert(isEven(x));

*/

//var num = prompt('Enter any array here, with space between numbers');

// Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.


/*var x = +(prompt('Enter any number here'));

var y = +(prompt('Enter any number here'));

var arr = [ ];

var sum = 0;

var result = [ ];

function createArr(x, y){

	for(var i = x; i <= y; i++){

		arr.push(i);

	}
 
}

alert(arr);

function accSum(sum){

	if(sum == 13){
		
		return true;
	
	} else{
		
		return false;
	
	}
}

function arrStrSpl(num){

   return String(num).split('');
	
}

function  getDigitsSum(num){
	
	var arr = arrStrSpl(num);
	
	for(var i = 0; i < arr.length; i++){

		sum += Number(arr[i]);
	}

}

function reckon(){

	createArr(x, y);

	for(var j = 0; j < arr.length; j++){

		if (accSum(getDigitsSum(arr[j]))){

		}

			

	}

}

reckon();*/

/*
var str = prompt('Введите строку');

var strArr = [];

function strSplit(str){

	strArr = str.split(' ');

	console.log(strArr);
}

function strArrUpper(strArr){

	

	for(var i = 0; i < strArr.length; i++){


		var word = strArr[i];

		var cap = word[0].toUpperCase() + word.substr(1);

		strArr[i] = cap;

		console.log(strArr[i]);


	 		
	 }

	 return str = strArr.join(' ');

}

function ucfirst(){

strSplit(str);

strArrUpper(strArr);

document.write(str);

}

ucfirst();

//Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

var str = 'var_text_hello';

var strArr = [];

strArr = str.split('_');

console.log(strArr);

for (var i = 0; i < strArr.length; i++){

	if(i !== 0){

		var word = strArr[i];

		var cap = word[0].toUpperCase() + word.substr(1);

		strArr[i] = cap;
	}

	console.log(strArr[i]);
}

str = strArr.join('');

document.write(str);
//Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

var mass = prompt('Insert any array using comma between elements').split(',');
var x = prompt('insert the element you are looking for')

console.log(mass);

function inArray(x, mass){

	for (var i = 0; i < mass.length; i++){

		if(mass[i] === x){

			return true;
		
		}

		
	}

	return false;

}

document.write(inArray(x, mass));

//Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

var mass = prompt('Insert any array using comma between elements').split(',');

function massWrite(mass){

	document.write(mass.pop() + '<br>');

	if(mass.length != 0){

		massWrite(mass);
	}
}

massWrite(mass);

//Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

var num = +(prompt('Insert any array using comma between elements'));

function sumOfNum(num){

		var arr = [];

		var arr = String(num).split('');

		var number = 0;

		for(var i = 0; i < arr.length; i++){

			number += Number(arr[i]); 

			num = number;
		}

		if (num <= 9){


			document.write(num);
		
		} else {

			sumOfNum(num);

		}

}

sumOfNum(num);

//Выведите с помощью цикла столбец чисел от 1 до 100.

for(var i = 1; i <= 100; i++){

	document.write(i + '<br>');
}

//Выведите с помощью цикла столбец чисел от 100 до 1

for(var i = 100; i > 0; i--){

	document.write(i + '<br>');
}

//Выведите с помощью цикла столбец четных чисел от 1 до 100.

for(var i = 1; i <= 100; i++){

	if( i%2 === 0){

		document.write( i + '<br>');
	}
}

//Заполните массив 10-ю иксами с помощью цикла.

var arr = [];

for(var i = 0; i < 11; i++){

	arr.unshift('x');

}

alert(arr);

for(var i = 0; i < 5; i++){

	arr.shift();

}

document.write(arr);

//Заполните массив числами от 1 до 10 с помощью цикла.

var i = 0;

var arr = [];

while(i < 10 ){

	i++;
	arr.push(i);

}

alert(arr);

//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

var arr = [];

for(var i = 0; i <= 10; i++){

	arr.push(Math.random().toFixed(2));
}

alert(arr);

//Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

var arr = [];

for(var i = 1; i <= 10; i++){

	arr.push(Math.round(Math.random()*(10 - 1 + 1)+1));
}

alert(arr);
//Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

//var arr = (prompt('Insert any array by comma')).split(',');

var arr = [];

for(var i = 1; i <= 100; i++){

	arr.push(Math.round(Math.random()*(10 - 1 + 1)+1));
}

alert(arr);


for(var i = 0; i < 10; i++){

	if(arr[i] > 0 && arr[i] < 10){

			document.write(arr[i] + '<br>');

	}
}

//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

var arr = [];

for(var i = 1; i <= 10; i++){

	arr.push(Math.round(Math.random()*(10 - 1 + 1)+1));
}

alert(arr);

var sum = 0;

for (var j = 0; j <= arr.length; j++){

	
	sum += arr[j];
	
}

document.write(sum);

//Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.

var arr = [];

for(var i = 0; i < 100; i++){

	arr.push(Math.round(Math.random()*100-1+1)+1);
}

alert(arr + ' ');

for(var i = 0; i <= arr.length; i++){

	if(arr[i] == 5){

		alert(true);

		break;
	}
}

//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

var arr = [];

for(var i = 0; i < 100; i++){

	arr.push(Math.round(Math.random()*10-1+1)+1);
}

alert(arr + ' ');

for(var i = 0; i <= arr.length; i++){

	document.write(Math.pow(arr[i], 2)  + '<br><br>');
}*/

//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

var arr = [];

for(var i = 1; i <= 10; i++){

	arr.push(Math.round(Math.random()*10-1+1)+1);
}

alert(arr);

var num = 0;

for(var i = 0; i < arr.length; i++){

		num += arr[i];

}

		num /= arr.length;

document.write(num);


