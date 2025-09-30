function show_hide_password(id){
	let input = document.getElementById(id);
	if (input.type == 'password') {
		input.type = 'text'
	} else {
		input.type = 'password'
	}
}

IMask(
  document.getElementById('phone'),
  {
    mask: '+{7}(000)000-00-00'
  }
)

