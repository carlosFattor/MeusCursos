angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl: "views/alert.html",
		replace: true,
		restrict: "E",
		scope: {
			title: "@",
			error: "="
		},
		transclude: true
	};
});

/*
*	Tipos de restrição
*
*	A -> Diretiva restrita ao atributo do elemento
*	E -> Diretiva restrita ao elemento
*	C -> Diretiva restrita a classe doelemento
*	M -> Diretiva restrita ao comentário do elemento
*/