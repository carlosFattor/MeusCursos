angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];
	$scope.contato = {};
	
	var carregaContatos = function(){
		contatosAPI.getContatos().success(function(data, status){
				$scope.contatos = data;

			}).error(function(data, status){
				$scope.message = "Não foi possivel carregar os dados dos contatos!";
			});
	}

	var carregaOperadoras = function(){
		operadorasAPI.getOperadoras().success(function(data, status){
				$scope.operadoras = data;

			}).error(function(data, status){
				$scope.message = "Não foi possivel carregar os dados das operadoras";
			});
	}

	$scope.adicionaContato = function(contato){
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContatos(contato).success(function(data, status){
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
				carregaContatos()						
			}).error(function(data, status){
				$scope.message = "Não foi possivel adicionar o contato -> "+data+" | "+status;
			});

	};
	$scope.removeContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			return !contato.selecionado;
		});
	};
	$scope.isSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});
		console.log(isSelecionado);
	};
	$scope.ordenarPorCampo = function(campo){
		$scope.criterioBusca = campo;
		$scope.ordenarPor = !$scope.ordenarPor;
	}
	
	

	carregaContatos();
	carregaOperadoras();
});