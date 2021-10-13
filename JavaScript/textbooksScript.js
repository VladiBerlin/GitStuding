//task_21_7

function startGallery(){

	window.intervalId =	window.setInterval(() => { imgChange() }, 2000);

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
		
		let src1 = "file:///C:/js/JavaScript/img/1.jpg";
		let src2 = "file:///C:/js/JavaScript/img/2.jpg";
		let src3 = "file:///C:/js/JavaScript/img/3.jpg";
		let src4 = "file:///C:/js/JavaScript/img/4.jpg";
		let src5 = "file:///C:/js/JavaScript/img/5.jpg";

		(picture1.src == src1) ? picture1.src = src2 : (picture1.src == src2) ? picture1.src = src3 : (picture1.src == src3) ? picture1.src = src4 : (picture1.src == src4) ? picture1.src = src5 : picture1.src = src1;
		(picture2.src == src2) ? picture2.src = src3 : (picture2.src == src3) ? picture2.src = src4 : (picture2.src == src4) ? picture2.src = src5 : (picture2.src == src5) ? picture2.src = src1 : picture2.src = src2;
		(picture3.src == src3) ? picture3.src = src4 : (picture3.src == src4) ? picture3.src = src5 : (picture3.src == src5) ? picture3.src = src1 : (picture3.src == src1) ? picture3.src = src2 : picture3.src = src3;
		(picture4.src == src4) ? picture4.src = src5 : (picture4.src == src5) ? picture4.src = src1 : (picture4.src == src1) ? picture4.src = src2 : (picture4.src == src2) ? picture4.src = src3 : picture4.src = src4;
		(picture5.src == src5) ? picture5.src = src1 : (picture5.src == src1) ? picture5.src = src2 : (picture5.src == src2) ? picture5.src = src3 : (picture5.src == src3) ? picture5.src = src4 : picture5.src = src5;
}





