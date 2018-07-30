//var nome1 = prompt ("Primeiro Nome");

//var nome2 = prompt ("Segundo Nome");

//alert(nome1+''+nome2)

//var idade = prompt ("Sua idade");

//var n1 = +prompt ("Digite 1 numero");
//var n2 = +prompt ("Digite 1 numero");
//var soma = n1+n2;
//var divisao = n1/n2;
//var subtracao = n1*n2;
//var multiplicacao = n1-n2;
//alert(+soma);
//alert(+subtracao)
//alert(+divisao)
//alert(+multiplicacao)
//lert(" So maiores de 18 anos ");



//var texto = document.getElementById('no');

//document.getElementById('yes').innerHTML="<p> R I P </p>";
//document.getElementById("demo").innerHTML;

//----------------------------------------------------------------------------------------//

function mudaCor(){
	var cor1 =document.getElementById("div1");
	cor1.innerHTML=
	"<div style='width: 150px; height: 150px; background-color: #25F10B; border-radius: 50%;'></div>";
}

function mudaCor3(){
	var cor2 =document.getElementById("div2");
	cor2.innerHTML=
	"<div style='width: 150px; height: 150px; background-color: #0D3C6F; border-radius: 50%;'></div>";
}
function mudaCor2(){
	var cor3 =document.getElementById("div3");
	cor3.innerHTML=
	"<div style='width: 150px; height: 150px; background-color: #282495; border-radius: 50%;'></div>";
}

function mudaCor1(){
	var cor4 =document.getElementById("div4");
	cor4.innerHTML=
	"<div style='width: 150px; height: 150px; background-color: #BF1036; border-radius: 50%;'></div>";
}
function o(){
var cor1 =document.getElementById("div1");
cor1.innerHTML=
"<div style='width: 150px; height: 150px; background-color: black; border-radius: 50%;'></div>";
}

function p(){
var cor2 =document.getElementById("div2");
cor2.innerHTML=
"<div style='width: 150px; height: 150px; background-color: black; border-radius: 50%;'></div>";
}

function q(){
var cor3 =document.getElementById("div3");
cor3.innerHTML=
"<div style='width: 150px; height: 150px; background-color: #216305; border-radius: 50%;'></div>";
}

function w(){
var cor4 =document.getElementById("div4");
cor4.innerHTML=
"<div style='width: 150px; height: 150px; background-color: #216305; border-radius: 50%;'></div>";
}

//-------------------------------------------------------------------------------------//

var valor=0

function decrementar(){
	var res = document.getElementById('campo');
	valor--;
	res.innerHTML=valor;
}

function incrementar(){
	var resultado = document.getElementById('campo');
	valor++;
	resultadoc.innerHTML=valor;
}
//------------------------------------------------------------------------------------------//
function mc1(){
	var z = document.getElementById('div4')
	z.style.background="#BF1036";
}

function vc1 (){
     var z = document.getElementById('div4')
     z.style.background="#216305"
}





function mc2(){
	var x = document.getElementById('div3')
	x.style.background="#282495";
}

function vc2 (){
     var x = document.getElementById('div3')
     x.style.background="#216305"
}




function mc3(){
	var c = document.getElementById('div2')
	c.style.background="#0D3C6F";
}

function vc3 (){
     var c = document.getElementById('div2')
     c.style.background="black"
}






function mc4(){
	var v = document.getElementById('div1')
	v.style.background="#25F10B";
}

function vc4 (){
     var v = document.getElementById('div1')
     v.style.background="black"
}
//------------------------------------------------------------------------------------------//

function ff (){
	var ano = 2018;
	var nome = document.getElementById('nn').value;
	var idade = +document.getElementById('ii').value;
	var dc = document.getElementById('dc');
	var subtracao = ano - idade;
	dc.innerHTML='<p>Ola ' +nome+' voce tem '+subtracao+'</p>';


   
}

//-------------------------------------------------------------------------------------------------//
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

//----------------------------------------------------------------------------------------------------------//
$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );

    $( function() {
    $( "input" ).checkboxradio();
  } );


    $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );