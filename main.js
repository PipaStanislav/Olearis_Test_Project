var Main = function (){

	var plusIcon = document.getElementById('plusIcon');
	plusIcon.addEventListener('click', PlusIcon, false);

	var minusIcon = document.getElementById('minusIcon');
	minusIcon.addEventListener('click', MinusIcon, false);

	var listsForm =  document.getElementsByClassName('listsForm');

	function PlusIcon (){
		for(var i = 0; i < listsForm.length; i++){
			listsForm[i].classList.toggle('animatListForm');
		}
		plusIcon.style.display = 'none';
		minusIcon.style.display = '';
	}
	function MinusIcon (){
		for(var i = 0; i < listsForm.length; i++){
			listsForm[i].classList.toggle('animatListForm');
		}
		plusIcon.style.display = '';
		minusIcon.style.display = 'none';
	}
}
Main ();