$('.horas').click(function modifica(data, handler) {
  if (data.target == this) {
    tab=document.getElementById('tabla2');
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
  var miercolesVal = {"w1": miercoles[0].value, "w2": miercoles[1].value, "w3": miercoles[2].value, "w4": miercoles[3].value, "w5": miercoles[4].value, "w6": miercoles[5].value,};
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
  firebase.database().ref("plantilla1").set(datos);
  averiguarDia = prompt('What day is today \n A-Monday \n B-Tuesday \n C-Wednesday \n D-Thursday \n E-Friday \n F-Saturday');
  averiguarDia = averiguarDia.toUpperCase();
  if (averiguarDia === 'A') {
    alert('Your classes of the day Monday are  \n' + horas[0].value + '\n' + lunes[0].value + '\n' + horas[1].value + '\n' + lunes[1].value + '\n' + horas[2].value + '\n' + lunes[2].value + '\n' + horas[3].value + '\n' + lunes[3].value + '\n' + horas[4].value + '\n' + lunes[4].value + '\n'  + horas[5].value + '\n' + lunes[5].value)
    averiguaTarea = prompt ('Do you have homework?');
    averiguaTarea =  averiguaTarea.toLowerCase();
    if(averiguaTarea === 'yes') {
      EspecificaTarea = prompt('What?');
      alert(EspecificaTarea);
    }else if(averiguaTarea === 'No'){
      alert('Enjoy your day :)');
    }
  }
  if(averiguarDia === 'B'){
    alert('Your classes of the day Tuesday are \n' + horas[0].value + '\n' + martes[0].value + '\n' + horas[1].value + '\n' + martes[1].value + '\n' + horas[2].value + '\n' + martes[2].value + '\n' + horas[3].value + '\n' + martes[3].value + '\n' + horas[4].value + '\n' + martes[4].value + '\n' + horas[5].value + '\n' + martes[5].value)
    averiguaTarea = prompt ('Do you have homework?');
    averiguaTarea =  averiguaTarea.toLowerCase();
    if(averiguaTarea === 'yes') {
      EspecificaTarea = prompt('What?');  
      alert(EspecificaTarea);
    }else if(averiguaTarea === 'No'){
      alert('Enjoy your day :)');
    }
  }
  if(averiguarDia === 'C'){ 
    alert('Your classes of the day Wednesday are \n' + horas[0].value + '\n' + miercoles[0].value + '\n' + horas[1].value + '\n' + miercoles[1].value + horas[2].value + '\n' + miercoles[2].value + '\n' + horas[3].value + '\n' + miercoles[3].value + '\n' + horas[4].value + '\n' + miercoles[4].value + '\n' + horas[5].value + '\n' + miercoles[5].value)
    averiguaTarea = prompt ('Do you have homework?');
    averiguaTarea =  averiguaTarea.toLowerCase();
    if(averiguaTarea === 'yes') {
      EspecificaTarea = prompt('What?');
      alert(EspecificaTarea);
    }else if(averiguaTarea === 'No'){
      alert('Enjoy your day :)');
    }
  }
  if(averiguarDia === 'D'){
    alert('Your classes of the day Thursday are \n' + horas[0].value + '\n' + jueves[0].value + '\n' + horas[1].value + '\n' + jueves[1].value + '\n' + horas[2].value + '\n' + jueves[2].value + '\n' +  horas[3].value + '\n' + jueves[3].value + '\n' + horas[4].value + '\n' + jueves[4].value + '\n' + horas[5].value + '\n' + jueves[5].value)
    averiguaTarea = prompt ('Do you have homework?');
    averiguaTarea =  averiguaTarea.toLowerCase();
    if(averiguaTarea === 'yes') {
      EspecificaTarea = prompt('What?');
      alert(EspecificaTarea);
    }else if(averiguaTarea === 'No'){
      alert('Enjoy your day :)');
    }
  }
  if(averiguarDia === 'E'){
    alert('Your classes of the day Friday are \n' + horas[0].value + '\n' + viernes[0].value + '\n' + horas[1].value + '\n' + viernes[1].value + '\n' + horas[2].value + '\n' + viernes[2].value + '\n' + horas[3].value + '\n' + viernes[3].value + '\n' + horas[4].value + '\n' + viernes[4].value + '\n' + horas[5].value + '\n' + viernes[5].value)
    averiguaTarea = prompt ('Do you have homework?');
    averiguaTarea =  averiguaTarea.toLowerCase();
    if(averiguaTarea === 'yes') {
      var EspecificaTarea = prompt('What?');
      alert(EspecificaTarea);
      console.log(EspecificaTarea);
    }
    else if(averiguaTarea === 'No'){
      alert('Enjoy your day :)');
    }
  }
  if(averiguarDia === 'F'){
    alert('Your classes of the day Saturday are \n' + horas[0].value + '\n' + sabado[0].value + '\n' + horas[1].value + '\n' + sabado[1].value
     + '\n' + horas[2].value + '\n' + sabado[2].value + '\n' + horas[3].value + '\n' + sabado[3].value
     + '\n' + horas[4].value + '\n' + sabado[4].value + '\n' + horas[5].value + '\n' + sabado[5].value)
    averiguaTarea = prompt ('Do you have homework?');
    averiguaTarea =  averiguaTarea.toLowerCase();
    if(averiguaTarea === 'yes') {
      EspecificaTarea = prompt('What?');
      alert(EspecificaTarea);
    }else if(averiguaTarea === 'No'){
      alert('Enjoy your day :)');
    }
  }
});


function ponerMensaje(data) {
  $('tbody.cuerpo').append('<tr><td class="horas">' + data.h + '</td><td class="lunes">' + data.l + '</td><td class="martes">' + data.m + '</td><td class="miercoles">' + data.w + '</td><td class="jueves">' + data.j + '</td><td class="viernes">' + data.v + '</td><td class="sabado">' + data.s + '</td></tr>');
}

function iterar(data) {
  if ( !!data.horas ) {
    document.querySelector('tbody.cuerpo').innerHTML = '';
    var l1 = { "h": data.horas.h1, "l": data.lunes.l1, "m": data.martes.m1, "w": data.miercoles.w1, "j": data.jueves.j1, "v": data.viernes.v1, "s": data.sabado.s1};
    var l2 = { "h": data.horas.h2, "l": data.lunes.l2, "m": data.martes.m2, "w": data.miercoles.w2, "j": data.jueves.j2, "v": data.viernes.v2, "s": data.sabado.s2};
    var l3 = { "h": data.horas.h3, "l": data.lunes.l3, "m": data.martes.m3, "w": data.miercoles.w3, "j": data.jueves.j3, "v": data.viernes.v3, "s": data.sabado.s3};
    var l4 = { "h": data.horas.h4, "l": data.lunes.l4, "m": data.martes.m4, "w": data.miercoles.w4, "j": data.jueves.j4, "v": data.viernes.v4, "s": data.sabado.s4};
    var l5 = { "h": data.horas.h5, "l": data.lunes.l5, "m": data.martes.m5, "w": data.miercoles.w5, "j": data.jueves.j5, "v": data.viernes.v5, "s": data.sabado.s5};
    var l6 = { "h": data.horas.h6, "l": data.lunes.l6, "m": data.martes.m6, "w": data.miercoles.w6, "j": data.jueves.j6, "v": data.viernes.v6, "s": data.sabado.s6};
    ponerMensaje(l1);
    ponerMensaje(l2);
    ponerMensaje(l3);
    ponerMensaje(l4);
    ponerMensaje(l5);
    ponerMensaje(l6);

    $('.horas').click(function modifica(data, handler) {
      if (data.target == this) {
        tab=document.getElementById('tabla2');
        for (i=0; ele=tab.getElementsByTagName('td')[i]; i++) {
          if (ele){
           edita(ele);
         }
       }
     }
    });
  }
}


var traerMensajes = new Promise(function(res, rej) {
  var mensajes = database.ref('/plantilla1/').once('value').then(function(snapshot){
    return res(snapshot.val());
  });
  if(!mensajes) {return rej();}
});

traerMensajes.then(function(data){
  iterar(data);
});