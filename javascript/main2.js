$('.horas2').click(function modifica(data, handler) {
  if (data.target == this) {
    tab=document.getElementById('tabla');
    for (i=0; ele=tab.getElementsByTagName('td')[i]; i++) {
      if (ele){
       edita(ele);
     }
    }
  }
});
function edita(obj) {
  empz = obj.parentNode.parentNode;
  celda = empz.getElementsByTagName('td');
  inicio = 0;//celda para comenzar
  fin = 42;//celda para terminar
  
  for(i=inicio;i<fin;i++){  
  var celdaTmp = celda[i];
    
  txt = celdaTmp.innerHTML;
  celdaTmp.innerHTML = '';
  inp = celdaTmp.appendChild(document.createElement('input'));
  celdaTmp.style = "padding:0;";
  inp.value="";    
  }
}
$('#guardar').on("click", function(){

  var hora2 = $('.horas2 input');
  var hora2Val = { "h1": hora2[0].value, "h2": hora2[1].value, "h3": hora2[2].value, "h4": hora2[3].value, "h5": hora2[4].value, "h6": hora2[5].value};
  var lunes2 = $('.lunes2 input');
  var lunes2Val = {"l1": lunes2[0].value, "l2": lunes2[1].value, "l3": lunes2[2].value, "l4": lunes2[3].value, "l5": lunes2[4].value, "l6": lunes2[5].value,};
  var martes2 = $('.martes2 input');
  var martes2Val = {"m1": martes2[0].value, "m2": martes2[1].value, "m3": martes2[2].value, "m4": martes2[3].value, "m5": martes2[4].value, "m6": martes2[5].value,};
  var miercoles2 = $('.miercoles2 input');
  var miercoles2Val = {"mier1": miercoles2[0].value, "mier2": miercoles2[1].value, "mier3": miercoles2[2].value, "mier4": miercoles2[3].value, "mier5": miercoles2[4].value, "mier6": miercoles2[5].value,};
  var jueves2 = $('.jueves2 input');
  var jueves2Val = {"j1": jueves2[0].value, "j2": jueves2[1].value, "j3": jueves2[2].value, "j4": jueves2[3].value, "j5": jueves2[4].value, "j6": jueves2[5].value,};
  var viernes2 = $('.viernes2 input');
  var viernes2Val = {"v1": viernes2[0].value, "v2": viernes2[1].value, "v3": viernes2[2].value, "v4": viernes2[3].value, "v5": viernes2[4].value, "v6": viernes2[5].value,};
  var sabado2 = $('.sabado2 input');
  var sabado2Val = {"s1": sabado2[0].value, "s2": sabado2[1].value, "s3": sabado2[2].value, "s4": sabado2[3].value, "s5": sabado2[4].value, "s6": sabado2[5].value,};

var datos={
  hora2: hora2Val,
  lunes2: lunes2Val,
  martes2: martes2Val,
  miercoles2: miercoles2Val,
  jueves2: jueves2Val,
  viernes2: viernes2Val,
  sabado2: sabado2Val,

};
  firebase.database().ref("plantilla2").push(datos);
averiguarDia = prompt('What day is today \n A-Monday \n B-Tuesday \n C-Wednesday \n D-Thursday \n E-Friday \n F-Saturday');
if (averiguarDia === 'A') {
  alert('Your classes of the day Monday are  \n' + horas2[0].value + '\n' + lunes2[0].value + '\n' + horas2[1].value + '\n' + lunes2[1].value + '\n' + horas2[2].value + '\n' + lunes2[2].value + '\n' + horas2[3].value + '\n' + lunes2[3].value + '\n' + horas2[4].value + '\n' + lunes2[4].value + '\n'  + horas2[5].value + '\n' + lunes2[5].value)
averiguaTarea = prompt ('Do you have homework?');
if(averiguaTarea === 'yes') {
  EspecificaTarea = prompt('What?');
}else if(averiguaTarea === 'No'){
  alert('Enjoy your day :)');
}
}
if(averiguarDia === 'B'){
  alert('Your classes of the day Tuesday are \n' + horas2[0].value + '\n' + martes2[0].value + '\n' + horas2[1].value + '\n' + martes2[1].value + '\n' + horas2[2].value + '\n' + martes2[2].value + '\n' + horas2[3].value + '\n' + martes2[3].value + '\n' + horas2[4].value + '\n' + martes2[4].value + '\n' + horas2[5].value + '\n' + martes2[5].value)
}
if(averiguarDia === 'C'){ 
  alert('Your classes of the day Wednesday are \n' + horas2[0].value + '\n' + miercoles2[0].value + '\n' + horas2[1].value + '\n' + miercoles2[1].value + horas2[2].value + '\n' + miercoles2[2].value + '\n' + horas2[3].value + '\n' + miercoles2[3].value + '\n' + horas2[4].value + '\n' + miercoles2[4].value + '\n' + horas2[5].value + '\n' + miercoles2[5].value)
}
if(averiguarDia === 'D'){
  alert('Your classes of the day Thursday are \n' + horas2[0].value + '\n' + jueves2[0].value + '\n' + horas2[1].value + '\n' + jueves2[1].value + '\n' + horas2[2].value + '\n' + jueves2[2].value + '\n' +  horas2[3].value + '\n' + jueves2[3].value + '\n' + horas2[4].value + '\n' + jueves2[4].value + '\n' + horas2[5].value + '\n' + jueves2[5].value)
}
if(averiguarDia === 'E'){
  alert('Your classes of the day Friday are \n' + horas2[0].value + '\n' + viernes2[0].value + '\n' + horas2[1].value + '\n' + viernes2[1].value + '\n' + horas2[2].value + '\n' + viernes2[2].value + '\n' + horas2[3].value + '\n' + viernes2[3].value + '\n' + horas2[4].value + '\n' + viernes2[4].value + '\n' + horas2[5].value + '\n' + viernes2[5].value)
}
if(averiguarDia === 'F'){
  alert('Your classes of the day Saturday are \n' + horas2[0].value + '\n' + sabado2[0].value + '\n' + horas2[1].value + '\n' + sabado2[1].value
   + '\n' + horas2[2].value + '\n' + sabado2[2].value + '\n' + horas2[3].value + '\n' + sabado2[3].value
    + '\n' + horas2[4].value + '\n' + sabado2[4].value + '\n' + horas2[5].value + '\n' + sabado2[5].value)
}
});