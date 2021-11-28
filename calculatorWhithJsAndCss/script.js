window.onload =() => {
    let btn = document.querySelectorAll('.btn');
    let par = document.querySelector('p');
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
        
    const nums = ['.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const signs = ['+', '-', 'X', '/'];
  
    for(var i = 0; i < btn.length; i++){
        btn[i].onclick = funCl;
    }
    console.log();

    function funCl(event){
        let key = event.target.innerHTML;

        if(!event.target.classList.contains('btn')){
            return;
        }

        else if(event.target.innerHTML == 'ac'){
            console.log('ac');
            par.textContent = '0';
            a = '';
            b = '';
            finish = false;
        }

        else if(nums.includes(key) && finish == true){
            
            par.innerHTML = key;
            a = par.innerHTML;
            b = '';
            finish = false;
        }

        else if(event.target.innerHTML == '.' && a == '' || event.target.innerHTML == '.' && a == '0'){
            a = '0.';
            par.innerHTML = a;
        }

        else if(event.target.innerHTML == '.' && sign != '' && b == '' || event.target.innerHTML == '.' && sign != '' && b == '0'){
            b = '0.';
            par.innerHTML = b;
        }

        else if(event.target.innerHTML == '√' && sign == '' && b == ''){
            a = Math.sqrt(a);
            par.innerHTML = a;
        }

        else if(event.target.innerHTML == '√' && b != ''){
            b = Math.sqrt(b);
            par.innerHTML = b;
        }

        else if(signs.includes(key) && finish == true){
            finish = false;
            sign = key;
            par.innerHTML = key; 
        }

        else if(par.innerHTML == '0' && event.target.innerHTML != 'ac' && event.target.innerHTML != '+/-'){
            a = key;
            par.innerHTML = a;
        }
       
        else if(nums.includes(key) && sign == ''){
            a += key;
            par.innerHTML = a;
            console.log('a = ' + a);
        }

        else if(signs.includes(key) && b == ''){
            sign = key;
            par.innerHTML = sign;
            console.log('sign = ' + key);
        }

        else if(nums.includes(key) && sign != ''){
            b += key;
            par.innerHTML = b;
            console.log('b = ' + b);
        }

        else if(signs.includes(key) &&  b!=''){
            finish = false;
            switch(sign){
               case '+': a = Number(a) + Number(b); b = ''; sign = key; par.innerHTML = sign;
               break;
               case '-': a = Number(a) - Number(b); b = ''; sign = key; par.innerHTML = sign;
               break;
               case 'X': a = Number(a) * Number(b); b = ''; sign = key; par.innerHTML = sign;
               break;
               case '/': a = Number(a) / Number(b); b = ''; sign = key; par.innerHTML = sign;
               break;
           }
                     console.log('b = ' + b + 'a = ' + a);
        }

        else if(event.target.innerHTML === '='){
            switch(sign){
                case '+': a = Number(a) + Number(b); b = ''; par.textContent = a; sign = ''; 
                b = ''; finish = true;
                break;
                case '-': a = Number(a) - Number(b); b = ''; par.textContent = a; sign = '';
                b = ''; finish = true;
                break;
                case 'X': a = Number(a) * Number(b); b = ''; par.textContent = a; sign = '';
                b = ''; finish = true;
                break;
                case '/': a = Number(a) / Number(b); b = ''; par.textContent = a; sign = '';
                b = ''; finish = true;
                break;
            }

            console.log(finish);
        }

        else if(event.target.innerHTML === '+/-' && par.innerHTML == '0'){
            par.innerHTML = '0';
        }

        else if(event.target.innerHTML === '+/-' && Number(par.innerHTML) > 0 && b != ''){
            par.innerHTML = '-' + par.innerHTML;
            b = par.innerHTML;
        }

        else if(event.target.innerHTML === '+/-' && Number(par.innerHTML) < 0 && b != ''){
            par.innerHTML = Number(par.innerHTML) * (-1);
            b = par.innerHTML;
        }

        else if(event.target.innerHTML === '+/-' && Number(par.innerHTML) > 0 && b == ''){
            par.innerHTML = '-' + par.innerHTML;
            a = par.innerHTML;
        }

        else if(event.target.innerHTML === '+/-' && Number(par.innerHTML) < 0 && b == ''){
            par.innerHTML = Number(par.innerHTML) * (-1);
            a = par.innerHTML;
        }        
    }
}


