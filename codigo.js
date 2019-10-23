function ListaCompleta() {
	var usuariosInativos = ["Joh Snow", "Thiago Matos", "Paulo Pereira", "Julia Pires"];
	var usuariosAtivos = ["Maxwel", "Natalia ", "Rafaela"];
	var listaCompleta = [...usuariosInativos, ...usuariosAtivos];

	var conteudo = '';
	listaCompleta.map(function (lista) {
	  conteudo += `<br /><div class="usersLista__item">${lista}</div>`;
	});
	$('.usersLista').html(conteudo);
  }

  function ListaAtivos() {
		function Usuario(name) {
			this.name = name;

			this.getName = function() {
				return this.name;
			};
		}
		let usuario = new Usuario('Maxwel');
		let usuario2 = new Usuario('Natalia');
		let usuario3 = new Usuario('Rafaela');

		let usuariosAtivos = [usuario.getName(), usuario2.getName(), usuario3.getName()];
		var conteudo = '';
		usuariosAtivos.map(function (lista) {
		  conteudo += `<br /><div class="usersLista__item">${lista}</div>`;
		});
		$('.usersLista').html(conteudo);
  }

  function ListaQuantidade() {
	let usuariosInativos = ["Joh Snow", "Thiago Matos", "Paulo Pereira", "Julia Pires"];
	let usuariosAtivos = ["Maxwel", "Natalia ", "Rafaela"];
	let listaCompleta = [...usuariosInativos, ...usuariosAtivos];
	let conteudo = `<br /><div class="usersLista__item usersLista__item--quantidade">${listaCompleta.length}</div>`;
	$('.usersLista').html(conteudo);
  }
