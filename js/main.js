var userNames = [];
for ( var i = 0; i < 5; i++ ) {
	var user = prompt( 'Введите имя','' );
	userNames[i] = user;
}
var userLogin = prompt( 'Введите логин', '' );
for ( var n = 0; n < userNames.length; n++ ) {

	if ( userLogin == userNames[n] && userLogin != null && userLogin != undefined && userLogin != "" ) {
		alert(( userLogin +', ' +'вы успешно вошли'));
		break;
	}

}
 if ( userLogin != userNames[n] || userLogin == null || userLogin == undefined || userLogin == ""  ) {
	alert(('Ошибка входа'));
 }






