function modifica() {
  tab=document.getElementById('tabla');
  for (i=0; ele=tab.getElementsByTagName('td')[i]; i++) {
    if (ele) edita(ele);
  }
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
  inp.value="";
  inp.onblur = function() { this.parentNode.innerHTML = this.value  }
    
      
  }
}