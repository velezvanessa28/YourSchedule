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
$('.horas3').click(function modifica(data, handler) {
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
for(i=celdaTmp; i<fin;){
  if(i++){
  return inp;
  }
}
$('#guardar').click(function(){
  var datos={
  horas1:$('.horas input').val(),
  lunes:$('.lunes input').val(),
  martes:$('.martes input').val(),
  miercoles:$('.miercoles input').val(),
  jueves:$('.jueves input').val(),
  viernes:$('.viernes input').val(),
  sabado:$('.sabado input').val(),

};
  firebase.database().ref("horas").push(datos);
})