 jQuery(document).ready(function($) {
 	$('.login').on(
 		'submit',
 		function(e){
 			e.preventDefault();
 			var email = $('.login .email').val();

 			var password = $('.login .password').val();
 			if(!email) {
 				alert('Debe ingresar un correo');
 			}
 			else if(!password){
 				alert('Debe ingresar una contrasena');
 			}
 			else {
 				firebase
 				.auth()
 				.signInWithEmailAndPassword(email, password)
 				.then(function(){
 					location.href='plantilla.html';
 				})
 				.catch(function(error) {
 					alert('No eres bienvenido');
 				});
 			}
 		}
 		);
 	$('.registro').on(
 		'submit',
 		function(e){
 			e.preventDefault();
 			var email = $('.registro .email').val();
 			var password = $('.registro .password').val();
 			var confirm_email =$('.registro #confirm_email').val();
 			var confirm_password =$('.registro #confirm_password').val();
 			if(!email) {
 				alert('Debe ingresar un correo');
 			}
 			else if(!password){
 				alert('Debe ingresar una contrasena');
 			}else if(email != confirm_email){
 				alert('El correo no coincide');
 			}else if(password != confirm_password){
 				alert('Las contrasenas no coinciden');
 			}
 			else {

 				firebase
 				.auth()
 				.createUserWithEmailAndPassword(email, password)
 				.then(function(){
 					location.href='Sesion.html';
 					var info_usuario={
 						name:$('.registro #name').val(),
 						email:$('.registro #email').val(),
 						password:$('.registro #password').val(),
 					};
 					firebase.database().ref('info_usuario').push(info_usuario);
 				})
 				.catch(function() {
 					alert('Gracias por registrarte!!');
 				});
 			}
 		});
 });

 		




