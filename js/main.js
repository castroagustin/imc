const imcBtn = document.getElementById('imc-btn');
const darkMode = document.getElementById('dark-mode');
const switchCircle = document.getElementById('switch-circle');
const imcDetails = document.querySelector('.imc__details');

darkMode.onclick = () =>{
    document.body.classList.toggle('dark-theme');
    switchCircle.classList.toggle('ml-25');
}

imcBtn.onclick = () => {
    const peso = document.getElementById('imc-input1').value;
    const altura = document.getElementById('imc-input2').value;
    const imcDisplay = document.getElementById('imc-final');
    const imc = (peso / (altura * altura)).toFixed(1);

    const barArrow = document.getElementById('bar-arrow');
    const barItem1 = document.getElementById('bar-item-1');
    const barItem2 = document.getElementById('bar-item-2');
    const barItem3 = document.getElementById('bar-item-3');
    const barItem4 = document.getElementById('bar-item-4');

    /* <--- textoColor --> */

    if(imc<=18.5){
        imcDisplay.style.color = 'var(--yellow)';
    }
    else if(imc>18.5 && imc<=24.9){
        imcDisplay.style.color = 'var(--green)';
    }
    else if(imc>24.9 && imc<=29.9){
        imcDisplay.style.color = 'var(--orange)';
    }
    else if(imc>29.9){
        imcDisplay.style.color = 'var(--red)';
    }

    /* <--- textoAnimacion --> */
    
    const actualizarContador = () =>{
        const count = +imcDisplay.innerText;

        const inc = imc / 200;

        if(count < imc){
            imcDisplay.innerText = (count + inc).toFixed(1);
            setTimeout(actualizarContador, 1);
        }  else{
            imcDisplay.innerText = imc;
        }
    }
    actualizarContador();

    /* <--- flecha --> */
    let calculo = (imc - 13.5)*4.67;
    calculo = `${calculo}%`
    
    barArrow.style.marginLeft = `calc(${calculo} - 7px)`;
    if(imc<=13.6){
        barArrow.style.marginLeft = '0px';
    }
    else if(imc>=34.7){
        barArrow.style.marginLeft = 'calc(100% - 14px)';
    }

    /* <--- tamañoItems --> */
    if(imc<=18.5){
        imcDisplay.style.color = 'var(--yellow)';
        imcDetails.style.color = 'var(--yellow)';
        imcDetails.innerText = 'Bajo Peso'

        barItem1.style.height = '38px';
        
        barItem2.style.height = '30px';
        barItem3.style.height = '30px';
        barItem4.style.height = '30px';
    }
    else if(imc>18.5 && imc<=24.9){
        imcDisplay.style.color = 'var(--green)';
        imcDetails.style.color = 'var(--green)';
        imcDetails.innerText = 'Peso Normal'

        barItem2.style.height = '38px';

        barItem1.style.height = '30px';
        barItem3.style.height = '30px';
        barItem4.style.height = '30px';
    }
    else if(imc>24.9 && imc<=29.9){
        imcDisplay.style.color = 'var(--orange)';
        imcDetails.style.color = 'var(--orange)';
        imcDetails.innerText = 'Sobrepeso'

        barItem3.style.height = '38px';

        barItem2.style.height = '30px';
        barItem1.style.height = '30px';
        barItem4.style.height = '30px';
    }
    else if(imc>29.9){
        imcDisplay.style.color = 'var(--red)';
        imcDetails.style.color = 'var(--red)';
        imcDetails.innerText = 'Obesidad'

        barItem4.style.height = '38px';

        barItem2.style.height = '30px';
        barItem3.style.height = '30px';
        barItem1.style.height = '30px';
    }
}
