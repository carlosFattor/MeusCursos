angular.module("tableManager").directive("uiTable", function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			placeholder: '@',
			label: '@',
			errorHeader: '@',
			addContact: '&'
		}
		
	}
});