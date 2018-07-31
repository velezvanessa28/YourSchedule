$('.horas').click(function modifica(data, handler) {
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

  var horas = $('.horas input');
  var horasVal = { "h1": horas[0].value, "h2": horas[1].value, "h3": horas[2].value, "h4": horas[3].value, "h5": horas[4].value, "h6": horas[5].value};
  var lunes = $('.lunes input');
  var lunesVal = {"l1": lunes[0].value, "l2": lunes[1].value, "l3": lunes[2].value, "l4": lunes[3].value, "l5": lunes[4].value, "l6": lunes[5].value,};
  var martes = $('.martes input');
  var martesVal = {"m1": martes[0].value, "m2": martes[1].value, "m3": martes[2].value, "m4": martes[3].value, "m5": martes[4].value, "m6": martes[5].value,};
  var miercoles = $('.miercoles input');
  var miercolesVal = {"mier1": miercoles[0].value, "mier2": miercoles[1].value, "mier3": miercoles[2].value, "mier4": miercoles[3].value, "mier5": miercoles[4].value, "mier6": miercoles[5].value,};
  var jueves = $('.jueves input');
  var juevesVal = {"j1": jueves[0].value, "j2": jueves[1].value, "j3": jueves[2].value, "j4": jueves[3].value, "j5": jueves[4].value, "j6": jueves[5].value,};
  var viernes = $('.viernes input');
  var viernesVal = {"v1": viernes[0].value, "v2": viernes[1].value, "v3": viernes[2].value, "v4": viernes[3].value, "v5": viernes[4].value, "v6": viernes[5].value,};
  var sabado = $('.sabado input');
  var sabadoVal = {"s1": sabado[0].value, "s2": sabado[1].value, "s3": sabado[2].value, "s4": sabado[3].value, "s5": sabado[4].value, "s6": sabado[5].value,};

var datos={
  horas: horasVal,
  lunes: lunesVal,
  martes: martesVal,
  miercoles: miercolesVal,
  jueves: juevesVal,
  viernes: viernesVal,
  sabado: sabadoVal,

};
  firebase.database().ref("horas").push(datos);
averiguarDia = prompt('What day is today \n A-Monday \n B-Tuesday \n C-Wednesday \n D-Thursday \n E-Friday \n F-Saturday');
if (averiguarDia === 'A') {
  alert('Your classes of the day Monday are');
}if(averiguarDia === 'B'){
  alert('Your classes of the day Tuesday are');
}if(averiguarDia === 'C'){
  alert('Your classes of the day Wednesday are');
}if(averiguarDia === 'D'){
  alert('Your classes of the day Thursday are');
}if(averiguarDia === 'E'){
  alert('Your classes of the day Friday are');
}if(averiguarDia === 'F'){
  alert('Your classes of the day Saturday are');
}
});
