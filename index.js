//Bolo de Chocolate:
var bolo = document.getElementById('bolo')
var format = document.querySelector('.format01')
var butcancel = document.querySelector('.butcancel01')

bolo.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format.style.opacity = 1;
    butcancel.style.opacity = 1;
})

var cancelarbolo = document.getElementById('cancelarbolo')

cancelarbolo.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format.style.opacity = 0;
    bolo.style.opacity = 1;
})

var cont = 1;

var value01 = 3;
var quant01 = 1;

var num01 =  document.getElementById('num01')
function ad01(){
    cont += 1 
    num01.textContent = cont
    
    quant01 += 1
    document.getElementById('quant01').textContent = `${quant01}x`
    value01 += 3
    document.getElementById('value01').textContent = `R$${value01},00`
}
function sub01(){
    if(cont > 1){
        cont -=1
        num01.textContent = cont 
    }
    if(value01 > 3){
        value01 -= 3
        document.getElementById('value01').textContent = `R$${value01},00`
    }
    if(quant01 > 1){
        quant01 -= 1 
        document.getElementById('quant01').textContent = `${quant01}x`
    }
}

function comprar01(){
    document.getElementById('food01').textContent = 'Bolo de Chocolate'
    document.getElementById('quant01').textContent = '1x'
    document.getElementById('value01').textContent = 'R$ 3,00'
}
function cancelar01(){
    document.getElementById('food01').textContent = ''
    document.getElementById('quant01').textContent = ''
    document.getElementById('value01').textContent = ''
}


//----------------//
//Batata Frita:
var batata = document.getElementById('batata')
var format02 = document.querySelector('.format02')
var butcancel02 = document.querySelector('.butcancel02')

batata.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format02.style.opacity = 1;
    butcancel02.style.opacity = 1;
})

var cancelarbatata = document.getElementById('cancelarbatata')

cancelarbatata.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format02.style.opacity = 0;
    batata.style.opacity = 1;
})

var cont02 = 1;
var value02 = 5;
var quant02 = 1;
var num02 = document.getElementById('num02');
function ad02(){
    cont02 += 1; 
    num02.textContent = cont02; 

    quant02 += 1
    document.getElementById('quant02').textContent = `${quant02}x`
    value02 += 5
    document.getElementById('value02').textContent = `R$${value02},00`
}
function sub02(){
    if(cont02 > 1){
        cont02 -=1;
        num02.textContent = cont02; 
    }
    if(value02 > 5){
        value02 -= 5
        document.getElementById('value02').textContent = `R$${value02},00`
    }
    if(quant02 > 1){
        quant02 -= 1 
        document.getElementById('quant02').textContent = `${quant02}x`
    }
}


function comprar02(){
    document.getElementById('food02').textContent = 'Batata Frita'
    document.getElementById('quant02').textContent = '1x'
    document.getElementById('value02').textContent = 'R$ 5,00'
}
function cancelar02(){
    document.getElementById('food02').textContent = ''
    document.getElementById('quant02').textContent = ''
    document.getElementById('value02').textContent = ''
}

//---------------//
//Churros:

var churros = document.getElementById('churros')
var format03 = document.querySelector('.format03')
var butcancel03 = document.querySelector('.butcancel03')

churros.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format03.style.opacity = 1;
    butcancel03.style.opacity = 1;
})

var cancelarchurros = document.getElementById('cancelarchurros')

cancelarchurros.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format03.style.opacity = 0;
    churros.style.opacity = 1;
})

var cont03 = 1;
var value03 = 10;
var quant03 = 1;
var num03 = document.getElementById('num03');
function ad03(){
    cont03 += 1; 
    num03.textContent = cont03; 

    quant03 += 1
    document.getElementById('quant03').textContent = `${quant03}x`
    value03 += 10
    document.getElementById('value03').textContent = `R$${value03},00`
}
function sub03(){
    if(cont03 > 1){
        cont03 -=1;
        num03.textContent = cont03; 
    }
    if(value03 > 10){
        value03 -= 10
        document.getElementById('value03').textContent = `R$${value03},00`
    }
    if(quant03 > 1){
        quant03 -= 1 
        document.getElementById('quant03').textContent = `${quant03}x`
    }
}

function comprar03(){
    document.getElementById('food03').textContent = 'Churros'
    document.getElementById('quant03').textContent = '1x'
    document.getElementById('value03').textContent = 'R$ 10,00'
}
function cancelar03(){
    document.getElementById('food03').textContent = ''
    document.getElementById('quant03').textContent = ''
    document.getElementById('value03').textContent = ''
}
//----------------------//
//Maracuja:
var maracuja = document.getElementById('maracuja')
var format04 = document.querySelector('.format04')
var butcancel04 = document.querySelector('.butcancel04')

maracuja.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format04.style.opacity = 1;
    butcancel04.style.opacity = 1;
})

var cancelarmaracuja = document.getElementById('cancelarmaracuja')

cancelarmaracuja.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format04.style.opacity = 0;
    maracuja.style.opacity = 1;
})

var cont04 = 1;
var value04 = 5;
var quant04 = 1;
var num04 = document.getElementById('num04');
function ad04(){
    cont04 += 1; 
    num04.textContent = cont04; 

    quant04 += 1
    document.getElementById('quant04').textContent = `${quant04}x`
    value04 += 5
    document.getElementById('value04').textContent = `R$${value04},00`
}
function sub04(){
    if(cont04 > 1){
        cont04 -=1;
        num04.textContent = cont04; 
    }
    if(value04 > 5){
        value04 -= 5
        document.getElementById('value04').textContent = `R$${value04},00`
    }
    if(quant04 > 1){
        quant04 -= 1 
        document.getElementById('quant04').textContent = `${quant04}x`
    }
}

function comprar04(){
    document.getElementById('food04').textContent = 'Maracuja'
    document.getElementById('quant04').textContent = '1x'
    document.getElementById('value04').textContent = 'R$ 5,00'
}
function cancelar04(){
    document.getElementById('food04').textContent = ''
    document.getElementById('quant04').textContent = ''
    document.getElementById('value04').textContent = ''
}

//------------------------//
//Morango:
var morango = document.getElementById('morango')
var format05 = document.querySelector('.format05')
var butcancel05 = document.querySelector('.butcancel05')

morango.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format05.style.opacity = 1;
    butcancel05.style.opacity = 1;
})

var cancelarmorango = document.getElementById('cancelarmorango')

cancelarmorango.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format05.style.opacity = 0;
    morango.style.opacity = 1;
})

var cont05 = 1;
var value05 = 50;
var quant05 = 1;
var num05 = document.getElementById('num05');
function ad05(){
    cont05 += 1; 
    num05.textContent = cont05; 

    quant05 += 1
    document.getElementById('quant05').textContent = `${quant05}x`
    value05 += 50
    document.getElementById('value05').textContent = `R$${value05},00`
}
function sub05(){
    if(cont05 > 1){
        cont05 -=1;
        num05.textContent = cont05; 
    }
    if(value05 > 50){
        value05 -= 50
        document.getElementById('value05').textContent = `R$${value05},00`
    }
    if(quant05 > 1){
        quant05 -= 1 
        document.getElementById('quant05').textContent = `${quant05}x`
    }
}

function comprar05(){
    document.getElementById('food05').textContent = 'Morango'
    document.getElementById('quant05').textContent = '1x'
    document.getElementById('value05').textContent = 'R$ 50,00'
}
function cancelar05(){
    document.getElementById('food05').textContent = ''
    document.getElementById('quant05').textContent = ''
    document.getElementById('value05').textContent = ''
}
//--------------------------//
//Sorvete:
var sorvete = document.getElementById('sorvete')
var format06 = document.querySelector('.format06')
var butcancel06 = document.querySelector('.butcancel06')

sorvete.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format06.style.opacity = 1;
    butcancel06.style.opacity = 1;
})

var cancelarsorvete = document.getElementById('cancelarsorvete')

cancelarsorvete.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format06.style.opacity = 0;
    sorvete.style.opacity = 1;
})

var cont06 = 1;
var value06 = 1;
var quant06 = 1;
var num06 = document.getElementById('num06');
function ad06(){
    cont06 += 1; 
    num06.textContent = cont06; 

    quant06 += 1
    document.getElementById('quant06').textContent = `${quant06}x`
    value06 += 1
    document.getElementById('value06').textContent = `R$${value06},00`
}
function sub06(){
    if(cont06 > 1){
        cont06 -=1;
        num06.textContent = cont06; 
    }
    if(value06 > 1){
        value06 -= 1
        document.getElementById('value06').textContent = `R$${value06},00`
    }
    if(quant06 > 1){
        quant06 -= 1 
        document.getElementById('quant06').textContent = `${quant06}x`
    }
}

function comprar06(){
    document.getElementById('food06').textContent = 'Sorvete Tropicais'
    document.getElementById('quant06').textContent = '1x'
    document.getElementById('value06').textContent = 'R$ 1,00'
}
function cancelar06(){
    document.getElementById('food06').textContent = ''
    document.getElementById('quant06').textContent = ''
    document.getElementById('value06').textContent = ''
}
//-------------------//
//Napolitano:
var napolitano = document.getElementById('napolitano')
var format07 = document.querySelector('.format07')
var butcancel07 = document.querySelector('.butcancel07')

napolitano.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format07.style.opacity = 1;
    butcancel07.style.opacity = 1;
})

var cancelarnapolitano = document.getElementById('cancelarnapolitano')

cancelarnapolitano.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format07.style.opacity = 0;
    napolitano.style.opacity = 1;
})

var cont07 = 1;
var value07 = 20;
var quant07 = 1;
var num07 = document.getElementById('num07');
function ad07(){
    cont07 += 1; 
    num07.textContent = cont07; 

    quant07 += 1
    document.getElementById('quant07').textContent = `${quant07}x`
    value07 += 20
    document.getElementById('value07').textContent = `R$${value07},00`
}
function sub07(){
    if(cont07 > 1){
        cont07 -=1;
        num07.textContent = cont07; 
    }
    if(value07 > 20){
        value07 -= 20
        document.getElementById('value07').textContent = `R$${value07},00`
    }
    if(quant07> 1){
        quant07 -= 1 
        document.getElementById('quant07').textContent = `${quant07}x`
    }
}

function comprar07(){
    document.getElementById('food07').textContent = 'Napolitano'
    document.getElementById('quant07').textContent = '1x'
    document.getElementById('value07').textContent = 'R$ 20,00'
}
function cancelar07(){
    document.getElementById('food07').textContent = ''
    document.getElementById('quant07').textContent = ''
    document.getElementById('value07').textContent = ''
}
//-----------------------------//
//Torta:
var torta = document.getElementById('torta')
var format08 = document.querySelector('.format08')
var butcancel08 = document.querySelector('.butcancel08')

torta.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format08.style.opacity = 1;
    butcancel08.style.opacity = 1;
})

var cancelartorta = document.getElementById('cancelartorta')

cancelartorta.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format08.style.opacity = 0;
    torta.style.opacity = 1;
})

var cont08 = 1;
var value08 = 15;
var quant08 = 1;
var num08 = document.getElementById('num08');
function ad08(){
    cont08 += 1; 
    num08.textContent = cont08; 

    quant08 += 1
    document.getElementById('quant08').textContent = `${quant08}x`
    value08 += 15
    document.getElementById('value08').textContent = `R$${value08},00`

}
function sub08(){
    if(cont08 > 1){
        cont08 -=1;
        num08.textContent = cont08; 
    }
    if(value08 > 15){
        value08 -= 15
        document.getElementById('value08').textContent = `R$${value08},00`
    }
    if(quant08 > 1){
        quant08 -= 1 
        document.getElementById('quant08').textContent = `${quant08}x`
    }
}

function comprar08(){
    document.getElementById('food08').textContent = 'Torta'
    document.getElementById('quant08').textContent = '1x'
    document.getElementById('value08').textContent = 'R$ 15,00'
}
function cancelar08(){
    document.getElementById('food08').textContent = ''
    document.getElementById('quant08').textContent = ''
    document.getElementById('value08').textContent = ''
}
//----------------------//
//Wuffle:
var wuffle = document.getElementById('wuffle')
var format09 = document.querySelector('.format09')
var butcancel09 = document.querySelector('.butcancel09')

wuffle.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format09.style.opacity = 1;
    butcancel09.style.opacity = 1;
})

cancelarwuffle = document.getElementById('cancelarwuffle')

cancelarwuffle.addEventListener('click', (event)=>{
    event.target.style.opacity = 0;
    format09.style.opacity = 0;
    wuffle.style.opacity = 1;
})

var cont09 = 1;
var value09 = 100;
var quant09 = 1;
var num09 = document.getElementById('num09');
function ad09(){
    cont09 += 1; 
    num09.textContent = cont09; 

    quant09 += 1
    document.getElementById('quant09').textContent = `${quant09}x`
    value09 += 100
    document.getElementById('value09').textContent = `R$${value09},00`
}
function sub09(){
    if(cont09 > 1){
        cont09 -=1;
        num09.textContent = cont09; 
    }
    if(value09 > 100){
        value09 -= 100
        document.getElementById('value09').textContent = `R$${value09},00`
    }
    if(quant09 > 1){
        quant09 -= 1 
        document.getElementById('quant09').textContent = `${quant09}x`
    }
}


function comprar09(){
    document.getElementById('food09').textContent = 'Wuffle'
    document.getElementById('quant09').textContent = '1x'
    document.getElementById('value09').textContent = 'R$ 100,00'
}
function cancelar09(){
    document.getElementById('food09').textContent = ''
    document.getElementById('quant09').textContent = ''
    document.getElementById('value09').textContent = ''
}