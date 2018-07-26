$('.horas').click(function modifica(data, handler) {
  if (data.target == this) {
    //Do Stuff (only element clicked, not children)
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
    //Do Stuff (only element clicked, not children)
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
    //Do Stuff (only element clicked, not children)
    tab=document.getElementById('tabla');
    for (i=0; ele=tab.getElementsByTagName('td')[i]; i++) {
      if (ele){
       edita(ele);
     }
    }
  }
});

function guardar(){
  var guarda = document.getElementById('tabla').value;
}
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
  //inp.onblur = function() { this.parentNode.innerHTML = this.value  }
    
      
  }
}
$('#guardar').click(function(){
  firebase.database().ref("guardalo")
  .set({
    horario:"input"
  })
});
