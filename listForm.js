var listsForm =  document.getElementsByClassName('listsForm');

listsForm[0].addEventListener('click', addQuastionFormText, false)
function addQuastionFormText (){
	var divQuestionFormText = document.createElement('div');
	divQuestionFormText.style.width = '100%';
	divQuestionFormText.style.border = '0.5px solid rgb(103, 58, 183)';

	var divInputQuestionFormText = document.createElement('div');
	divInputQuestionFormText.style.margin = '20px 50px';

	var textareaInputQuestionFormText = document.createElement('textarea');
	textareaInputQuestionFormText.classList.add("QuestionFormText");
	textareaInputQuestionFormText.style.width = '100%';
	textareaInputQuestionFormText.style.resize = 'none';
	textareaInputQuestionFormText.style.height = '36px';
	textareaInputQuestionFormText.style.border = 'none';
	textareaInputQuestionFormText.style.borderBottom = '1px solid gray';
	textareaInputQuestionFormText.style.fontSize = '24px';
	textareaInputQuestionFormText.style.lineHeight = '135%';
	textareaInputQuestionFormText.style.overflowY = 'hidden';
	textareaInputQuestionFormText.style.outline = 'none';
	textareaInputQuestionFormText.placeholder = 'Вопрос';
	textareaInputQuestionFormText.onfocus = function(){
		textareaInputQuestionFormText.style.borderBottom = '1px solid rgb(103, 58, 183)';
	};
	textareaInputQuestionFormText.onblur = function(){
		textareaInputQuestionFormText.style.borderBottom = '1px solid gray';
	};

	var divInputAnswerFormText = document.createElement('div');
	divInputAnswerFormText.style.margin = '20px 46px 20px 50px';
	divInputAnswerFormText.style.borderBottom = '1px solid gray';
	divInputAnswerFormText.style.cursor = 'default';
	divInputAnswerFormText.style.color = '#757575';

	var iconsFormText = document.createElement('div');
	iconsFormText.style.margin = '20px 100px 20px 50px';
	iconsFormText.style.paddingLeft = '550px';

	var iconTrashFormText = document.createElement('div');
	iconTrashFormText.style.margin = '0 15px';
	iconTrashFormText.style.cursor = 'pointer';
	iconTrashFormText.title = 'Удалить';
	iconTrashFormText.style.display = 'inline-block';
	iconTrashFormText.addEventListener('click', deleteFormQuestionFormText, false);

	var iconCloneFormText = document.createElement('div');
	iconCloneFormText.style.margin = '0 15px';
	iconCloneFormText.style.cursor = 'pointer';
	iconCloneFormText.title = 'Копировать';
	iconCloneFormText.style.display = 'inline-block';
	iconCloneFormText.addEventListener('click', cloneFormQuestionFormText, false);
	
	body.appendChild(divQuestionFormText);
	divQuestionFormText.appendChild(divInputQuestionFormText);
	divInputQuestionFormText.appendChild(textareaInputQuestionFormText);

	divQuestionFormText.appendChild(divInputAnswerFormText);
	divInputAnswerFormText.innerHTML =  'Краткий ответ';

	divQuestionFormText.appendChild(iconsFormText);
	iconsFormText.appendChild(iconCloneFormText); 
	iconsFormText.appendChild(iconTrashFormText);
	iconTrashFormText.innerHTML = '<i class="fas fa-trash fa-lg"></i>';
	iconCloneFormText.innerHTML = '<i class="fas fa-copy fa-lg"></i>';

	function deleteFormQuestionFormText (){
		body.removeChild(divQuestionFormText);
	}

	function cloneFormQuestionFormText (){
		var thisParent = this.parentNode;
		var mainDivQuestionFormText = thisParent.parentNode; 
		var childsDivQuestionFormText = mainDivQuestionFormText.childNodes;
		var firstChildDivQuestionFormText = childsDivQuestionFormText[0].childNodes; 
		var secondChildDivQuestionFormText = childsDivQuestionFormText[1].childNodes;
		var thirdChildDivQuestionFormText = childsDivQuestionFormText[2].childNodes;

		var cloneDivQuestionFormText = mainDivQuestionFormText.cloneNode(false);

		var cloneDivInputQuestionFormText = childsDivQuestionFormText[0].cloneNode(false);
		var cloneTextareaInputQuestionFormText = firstChildDivQuestionFormText[0].cloneNode(false);
		cloneTextareaInputQuestionFormText.onfocus = function(){
			cloneTextareaInputQuestionFormText.style.borderBottom = '1px solid rgb(103, 58, 183)';
		};
		cloneTextareaInputQuestionFormText.onblur = function(){
			cloneTextareaInputQuestionFormText.style.borderBottom = '1px solid gray';
		};

		var cloneDivInputAnswerFormText = childsDivQuestionFormText[1].cloneNode(true);

		var cloneIconsFormText = childsDivQuestionFormText[2].cloneNode(false);
		var cloneIconTrashFormText = thirdChildDivQuestionFormText[1].cloneNode(true);
		cloneIconTrashFormText.addEventListener('click', deleteCloneFormQuestionFormText, false);
		var cloneIconCloneFormText = iconCloneFormText.cloneNode(true);
		cloneIconCloneFormText.addEventListener('click', cloneFormQuestionFormText, false);

		body.appendChild(cloneDivQuestionFormText);

		cloneDivQuestionFormText.appendChild(cloneDivInputQuestionFormText);
		cloneDivInputQuestionFormText.appendChild(cloneTextareaInputQuestionFormText);

		cloneDivQuestionFormText.appendChild(cloneDivInputAnswerFormText);

		cloneDivQuestionFormText.appendChild(cloneIconsFormText);
		cloneIconsFormText.appendChild(cloneIconCloneFormText);
		cloneIconsFormText.appendChild(cloneIconTrashFormText); 

		function deleteCloneFormQuestionFormText (){
			body.removeChild(cloneDivQuestionFormText);
		}

		InputAddQuastionFormText();
		InputEnterFormText();
	}
	
	InputAddQuastionFormText();
	InputEnterFormText();
}


listsForm[1].addEventListener('click', addQuastionFormOneOfList, false)
function addQuastionFormOneOfList (){
	var divQuestionFormOneOfList = document.createElement('div');
	divQuestionFormOneOfList.classList.add("divQuestionFormOneOfList");

	var divInputQuestionFormOneOfList = document.createElement('div');
	divInputQuestionFormOneOfList.classList.add("divInputQuestionFormOneOfList");

	var textareaInputQuestionFormOneOfList = document.createElement('textarea');
	textareaInputQuestionFormOneOfList.classList.add("QuestionFormOneOfList");
	textareaInputQuestionFormOneOfList.classList.add("textareaInputQuestionFormOneOfList");
	textareaInputQuestionFormOneOfList.placeholder = 'Вопрос';

	var divInputAnswerFormOneOfList = document.createElement('div');
	divInputAnswerFormOneOfList.classList.add("divInputAnswerFormOneOfList");

	var divAnswerFormOneOfList = document.createElement('div');
	divAnswerFormOneOfList.classList.add("divAnswerFormOneOfList");

	var inputIconCircleFormOneOfList = document.createElement('div');
	inputIconCircleFormOneOfList.classList.add("inputIconCircleFormOneOfList");

	var inputAnswerFormOneOfList = document.createElement('input');
	inputAnswerFormOneOfList.classList.add("inputAnswerFormOneOfList");
	inputAnswerFormOneOfList.placeholder = 'Вариант ответа';
	inputAnswerFormOneOfList.maxLength = '70';

	var inputIconDeleteFormOneOfList = document.createElement('div');
	inputIconDeleteFormOneOfList.classList.add("inputIconDeleteFormOneOfList");
	inputIconDeleteFormOneOfList.addEventListener('click', deleteAnswerFormOneOfList, false);

	var iconsFormOneOfList = document.createElement('div');
	iconsFormOneOfList.classList.add("iconsFormOneOfList");

	var iconPlusFormOneOfList = document.createElement('div');
	iconPlusFormOneOfList.classList.add("iconPlusFormOneOfList");
	iconPlusFormOneOfList.title = 'Добавить вариант ответа';
	iconPlusFormOneOfList.addEventListener('click', plusAnswerFormOneOfList, false);

	var iconTrashFormOneOfList = document.createElement('div');
	iconTrashFormOneOfList.classList.add("iconTrashFormOneOfList");
	iconTrashFormOneOfList.title = 'Удалить';
	iconTrashFormOneOfList.addEventListener('click', deleteFormQuestionFormOneOfList, false);

	var iconCloneFormOneOfList = document.createElement('div');
	iconCloneFormOneOfList.classList.add("iconCloneFormOneOfList");
	iconCloneFormOneOfList.title = 'Копировать';
	iconCloneFormOneOfList.addEventListener('click', cloneFormQuestionFormOneOfList, false);
	
	body.appendChild(divQuestionFormOneOfList);

	divQuestionFormOneOfList.appendChild(divInputQuestionFormOneOfList);
	divInputQuestionFormOneOfList.appendChild(textareaInputQuestionFormOneOfList);

	divQuestionFormOneOfList.appendChild(divInputAnswerFormOneOfList);
	divInputAnswerFormOneOfList.appendChild(divAnswerFormOneOfList);
	divAnswerFormOneOfList.appendChild(inputIconCircleFormOneOfList);
	inputIconCircleFormOneOfList.innerHTML = '<i class="far fa-circle fa-lg"></i>';
	divAnswerFormOneOfList.appendChild(inputAnswerFormOneOfList);
	divAnswerFormOneOfList.appendChild(inputIconDeleteFormOneOfList);
	inputIconDeleteFormOneOfList.innerHTML = '<i class="fas fa-times fa-lg"></i>';

	divQuestionFormOneOfList.appendChild(iconsFormOneOfList);
	iconsFormOneOfList.appendChild(iconPlusFormOneOfList); 
	iconsFormOneOfList.appendChild(iconCloneFormOneOfList); 
	iconsFormOneOfList.appendChild(iconTrashFormOneOfList);
	iconPlusFormOneOfList.innerHTML = '<i class="fas fa-plus fa-lg"></i>';
	iconTrashFormOneOfList.innerHTML = '<i class="fas fa-trash fa-lg"></i>';
	iconCloneFormOneOfList.innerHTML = '<i class="fas fa-copy fa-lg"></i>';

	function deleteAnswerFormOneOfList () {
		divInputAnswerFormOneOfList.removeChild(divAnswerFormOneOfList);
	}

	function plusAnswerFormOneOfList (){
		var cloneDivAnswerFormOneOfList = document.createElement('div');
		cloneDivAnswerFormOneOfList.classList.add("divAnswerFormOneOfList");
		var cloneInputIconCircleFormOneOfList = document.createElement('div');
		cloneInputIconCircleFormOneOfList.classList.add("inputIconCircleFormOneOfList");
		cloneInputIconCircleFormOneOfList.innerHTML = '<i class="far fa-circle fa-lg"></i>';
		var cloneInputAnswerFormOneOfList = document.createElement('input');
		cloneInputAnswerFormOneOfList.classList.add("inputAnswerFormOneOfList");
		cloneInputAnswerFormOneOfList.placeholder = 'Вариант ответа';
		cloneInputAnswerFormOneOfList.maxLength = '72';

		var cloneInputIconDeleteFormOneOfList = document.createElement('div');
		cloneInputIconDeleteFormOneOfList.classList.add("inputIconDeleteFormOneOfList");
		cloneInputIconDeleteFormOneOfList.innerHTML = '<i class="fas fa-times fa-lg"></i>';
		cloneInputIconDeleteFormOneOfList.addEventListener('click', deleteCloneAnswerFormOneOfList, false);

		divInputAnswerFormOneOfList.appendChild(cloneDivAnswerFormOneOfList);
		cloneDivAnswerFormOneOfList.appendChild(cloneInputIconCircleFormOneOfList);
		cloneDivAnswerFormOneOfList.appendChild(cloneInputAnswerFormOneOfList);
		cloneDivAnswerFormOneOfList.appendChild(cloneInputIconDeleteFormOneOfList);
		
		
		function deleteCloneAnswerFormOneOfList (){
			divInputAnswerFormOneOfList.removeChild(cloneDivAnswerFormOneOfList);
		}
	}

	function deleteFormQuestionFormOneOfList (){
		body.removeChild(divQuestionFormOneOfList);
	}

	function cloneFormQuestionFormOneOfList (){
		var thisParent = this.parentNode;
		var mainDivQuestionFormOneOfList = thisParent.parentNode; 
		var childsDivQuestionFormOneOfList = mainDivQuestionFormOneOfList.childNodes;
		var firstChildDivQuestionFormOneOfList = childsDivQuestionFormOneOfList[0].childNodes; 
		var secondChildDivQuestionFormOneOfList = childsDivQuestionFormOneOfList[1].childNodes;
		var thirdChildDivQuestionFormOneOfList = childsDivQuestionFormOneOfList[2].childNodes;
		var divAnswerIconsFormOneOfList = secondChildDivQuestionFormOneOfList[0].childNodes;


		var cloneDivQuestionFormOneOfList = mainDivQuestionFormOneOfList.cloneNode(false);

		var cloneDivInputQuestionFormOneOfList = childsDivQuestionFormOneOfList[0].cloneNode(false);
		var cloneTextareaInputQuestionFormOneOfList = firstChildDivQuestionFormOneOfList[0].cloneNode(false);

		var cloneDivInputAnswerFormOneOfList = childsDivQuestionFormOneOfList[1].cloneNode(false);

		for (var i = 0; i < secondChildDivQuestionFormOneOfList.length; i++){
			var cloneClonedDivAnswerFormOneOfList = secondChildDivQuestionFormOneOfList[i].cloneNode(false);
			divAnswerIconsFormOneOfList = secondChildDivQuestionFormOneOfList[i].childNodes;
			
			var cloneDivAnswerIconsCircleFormOneOfList = divAnswerIconsFormOneOfList[0].cloneNode(true);
			var cloneDivAnswerIconsInputFormOneOfList = divAnswerIconsFormOneOfList[1].cloneNode(true);
			var cloneDivAnswerIconsDelFormOneOfList = divAnswerIconsFormOneOfList[2].cloneNode(true);
			cloneDivAnswerIconsDelFormOneOfList.addEventListener('click', deleteAnswerQuestionFormOneOfList, false);

			var cloneIconsFormOneOfList = childsDivQuestionFormOneOfList[2].cloneNode(false);
			var cloneIconPlusFormOneOfList = thirdChildDivQuestionFormOneOfList[0].cloneNode(true);
			cloneIconPlusFormOneOfList.addEventListener('click', plusCloneAnswerFormOneOfList, false);
			var cloneIconCloneFormOneOfList = thirdChildDivQuestionFormOneOfList[1].cloneNode(true);
			cloneIconCloneFormOneOfList.addEventListener('click', cloneFormQuestionFormOneOfList, false);
			var cloneIconTrashFormOneOfList = thirdChildDivQuestionFormOneOfList[2].cloneNode(true);
			cloneIconTrashFormOneOfList.addEventListener('click', deleteCloneFormQuestionFormOneOfList, false);

			body.appendChild(cloneDivQuestionFormOneOfList);
			cloneDivQuestionFormOneOfList.appendChild(cloneDivInputQuestionFormOneOfList);
			cloneDivInputQuestionFormOneOfList.appendChild(cloneTextareaInputQuestionFormOneOfList);
			cloneDivQuestionFormOneOfList.appendChild(cloneDivInputAnswerFormOneOfList);
			cloneDivInputAnswerFormOneOfList.appendChild(cloneClonedDivAnswerFormOneOfList);
			cloneClonedDivAnswerFormOneOfList.appendChild(cloneDivAnswerIconsCircleFormOneOfList);
			cloneClonedDivAnswerFormOneOfList.appendChild(cloneDivAnswerIconsInputFormOneOfList);
			cloneClonedDivAnswerFormOneOfList.appendChild(cloneDivAnswerIconsDelFormOneOfList);
		}
		cloneDivQuestionFormOneOfList.appendChild(cloneIconsFormOneOfList);
		cloneIconsFormOneOfList.appendChild(cloneIconPlusFormOneOfList);
		cloneIconsFormOneOfList.appendChild(cloneIconCloneFormOneOfList);
		cloneIconsFormOneOfList.appendChild(cloneIconTrashFormOneOfList);

		function deleteAnswerQuestionFormOneOfList (){
			var thisParent = this.parentNode;
			cloneDivInputAnswerFormOneOfList.removeChild(thisParent);
		}

		function plusCloneAnswerFormOneOfList (){
			var cloneInputAnswerFormOneOfList = document.createElement('div');
			cloneInputAnswerFormOneOfList.classList.add("divAnswerFormOneOfList");
			var cloneInputIconCircleFormOneOfList = document.createElement('div');
			cloneInputIconCircleFormOneOfList.classList.add("inputIconCircleFormOneOfList");
			cloneInputIconCircleFormOneOfList.innerHTML = '<i class="far fa-circle fa-lg"></i>';
			var cloneInpAnswerFormOneOfList = document.createElement('input');
			cloneInpAnswerFormOneOfList.classList.add("inputAnswerFormOneOfList");
			cloneInpAnswerFormOneOfList.placeholder = 'Вариант ответа';
			cloneInpAnswerFormOneOfList.maxLength = '72';
			var cloneInputIconDeleteFormOneOfList = document.createElement('div');
			cloneInputIconDeleteFormOneOfList.classList.add("inputIconDeleteFormOneOfList");
			cloneInputIconDeleteFormOneOfList.innerHTML = '<i class="fas fa-times fa-lg"></i>';
			cloneInputIconDeleteFormOneOfList.addEventListener('click', deleteCloneAnswerFormOneOfList, false);

			cloneDivInputAnswerFormOneOfList.appendChild(cloneInputAnswerFormOneOfList);
			cloneInputAnswerFormOneOfList.appendChild(cloneInputIconCircleFormOneOfList);
			cloneInputAnswerFormOneOfList.appendChild(cloneInpAnswerFormOneOfList);
			cloneInputAnswerFormOneOfList.appendChild(cloneInputIconDeleteFormOneOfList);

			function deleteCloneAnswerFormOneOfList (){
				cloneDivInputAnswerFormOneOfList.removeChild(cloneInputAnswerFormOneOfList);
			}
		}

		function deleteCloneFormQuestionFormOneOfList (){
			body.removeChild(cloneDivQuestionFormOneOfList);
		}

		InputAddQuastionFormOneOfList();
		InputEnterFormOneOfList();
	}
	
	InputAddQuastionFormOneOfList();
	InputEnterFormOneOfList();
}


listsForm[2].addEventListener('click', addQuastionFormDropDownList, false)
function addQuastionFormDropDownList (){
	var divQuestionFormDropDownList = document.createElement('div');
	divQuestionFormDropDownList.classList.add("divQuestionFormDropDownList");

	var divInputQuestionFormDropDownList = document.createElement('div');
	divInputQuestionFormDropDownList.classList.add("divInputQuestionFormDropDownList");

	var textareaInputQuestionFormDropDownList = document.createElement('textarea');
	textareaInputQuestionFormDropDownList.classList.add("QuestionFormDropDownList");
	textareaInputQuestionFormDropDownList.classList.add("textareaInputQuestionFormDropDownList");
	textareaInputQuestionFormDropDownList.placeholder = 'Вопрос';

	var divInputAnswerFormDropDownList = document.createElement('div');
	divInputAnswerFormDropDownList.classList.add("divInputAnswerFormDropDownList");

	var divAnswerFormDropDownList = document.createElement('div');
	divAnswerFormDropDownList.classList.add("divAnswerFormDropDownList");

	var inputNumberFormDropDownList = document.createElement('div');
	inputNumberFormDropDownList.classList.add("inputNumberFormDropDownList");

	var inputAnswerFormDropDownList = document.createElement('input');
	inputAnswerFormDropDownList.classList.add("inputAnswerFormDropDownList");
	inputAnswerFormDropDownList.placeholder = 'Вариант ответа';
	inputAnswerFormDropDownList.maxLength = '70';

	var inputIconDeleteFormDropDownList = document.createElement('div');
	inputIconDeleteFormDropDownList.classList.add("inputIconDeleteFormDropDownList");
	inputIconDeleteFormDropDownList.addEventListener('click', deleteAnswerFormDropDownList, false);

	var iconsFormDropDownList = document.createElement('div');
	iconsFormDropDownList.classList.add("iconsFormDropDownList");

	var iconPlusFormDropDownList = document.createElement('div');
	iconPlusFormDropDownList.classList.add("iconPlusFormDropDownList");
	iconPlusFormDropDownList.title = 'Добавить вариант ответа';
	iconPlusFormDropDownList.addEventListener('click', plusAnswerFormDropDownList, false);

	var iconTrashFormDropDownList = document.createElement('div');
	iconTrashFormDropDownList.classList.add("iconTrashFormDropDownList");
	iconTrashFormDropDownList.title = 'Удалить';
	iconTrashFormDropDownList.addEventListener('click', deleteFormQuestionFormDropDownList, false);

	var iconCloneFormDropDownList = document.createElement('div');
	iconCloneFormDropDownList.classList.add("iconCloneFormDropDownList");
	iconCloneFormDropDownList.title = 'Копировать';
	iconCloneFormDropDownList.addEventListener('click', cloneFormQuestionFormDropDownList, false);

	var count = 1;

	body.appendChild(divQuestionFormDropDownList);

	divQuestionFormDropDownList.appendChild(divInputQuestionFormDropDownList);
	divInputQuestionFormDropDownList.appendChild(textareaInputQuestionFormDropDownList);

	divQuestionFormDropDownList.appendChild(divInputAnswerFormDropDownList);
	divInputAnswerFormDropDownList.appendChild(divAnswerFormDropDownList);
	divAnswerFormDropDownList.appendChild(inputNumberFormDropDownList);
	inputNumberFormDropDownList.innerHTML = count + '.';
	divAnswerFormDropDownList.appendChild(inputAnswerFormDropDownList);
	divAnswerFormDropDownList.appendChild(inputIconDeleteFormDropDownList);
	inputIconDeleteFormDropDownList.innerHTML = '<i class="fas fa-times fa-lg"></i>';

	divQuestionFormDropDownList.appendChild(iconsFormDropDownList);
	iconsFormDropDownList.appendChild(iconPlusFormDropDownList); 
	iconsFormDropDownList.appendChild(iconCloneFormDropDownList); 
	iconsFormDropDownList.appendChild(iconTrashFormDropDownList);
	iconPlusFormDropDownList.innerHTML = '<i class="fas fa-plus fa-lg"></i>';
	iconTrashFormDropDownList.innerHTML = '<i class="fas fa-trash fa-lg"></i>';
	iconCloneFormDropDownList.innerHTML = '<i class="fas fa-copy fa-lg"></i>';

	function deleteAnswerFormDropDownList () {
		divInputAnswerFormDropDownList.removeChild(divAnswerFormDropDownList);
	}

	function plusAnswerFormDropDownList (){
		var thisParent = this.parentNode;
		var mainDivQuestionFormDropDownList = thisParent.parentNode;
		var childsDivQuestionFormDropDownList = mainDivQuestionFormDropDownList.childNodes;
		var secondChildDivQuestionFormDropDownList = childsDivQuestionFormDropDownList[1].childNodes;
		if (secondChildDivQuestionFormDropDownList.length == 0){
			count = 0;
		}

		var cloneDivAnswerFormDropDownList = document.createElement('div');
		cloneDivAnswerFormDropDownList.classList.add("divAnswerFormDropDownList");
		var cloneInputNumberFormDropDownList = document.createElement('div');
		cloneInputNumberFormDropDownList.classList.add("inputNumberFormDropDownList");
		cloneInputNumberFormDropDownList.innerHTML = ++count + '.';
		var cloneInputAnswerFormDropDownList = document.createElement('input');
		cloneInputAnswerFormDropDownList.classList.add("inputAnswerFormDropDownList");
		cloneInputAnswerFormDropDownList.placeholder = 'Вариант ответа';
		cloneInputAnswerFormDropDownList.maxLength = '72';

		var cloneInputIconDeleteFormDropDownList = document.createElement('div');
		cloneInputIconDeleteFormDropDownList.classList.add("inputIconDeleteFormDropDownList");
		cloneInputIconDeleteFormDropDownList.innerHTML = '<i class="fas fa-times fa-lg"></i>';
		cloneInputIconDeleteFormDropDownList.addEventListener('click', deleteCloneAnswerFormDropDownList, false);

		divInputAnswerFormDropDownList.appendChild(cloneDivAnswerFormDropDownList);
		cloneDivAnswerFormDropDownList.appendChild(cloneInputNumberFormDropDownList);
		cloneDivAnswerFormDropDownList.appendChild(cloneInputAnswerFormDropDownList);
		cloneDivAnswerFormDropDownList.appendChild(cloneInputIconDeleteFormDropDownList);
		
		
		function deleteCloneAnswerFormDropDownList (){
			divInputAnswerFormDropDownList.removeChild(cloneDivAnswerFormDropDownList);
			--count
		}
	}

	function deleteFormQuestionFormDropDownList (){
		body.removeChild(divQuestionFormDropDownList);
	}

	function cloneFormQuestionFormDropDownList (){
		var thisParent = this.parentNode;
		var mainDivQuestionFormDropDownList = thisParent.parentNode; 
		var childsDivQuestionFormDropDownList = mainDivQuestionFormDropDownList.childNodes;
		var firstChildDivQuestionFormDropDownList = childsDivQuestionFormDropDownList[0].childNodes; 
		var secondChildDivQuestionFormDropDownList = childsDivQuestionFormDropDownList[1].childNodes;
		var thirdChildDivQuestionFormDropDownList = childsDivQuestionFormDropDownList[2].childNodes;
		var divAnswerIconsFormDropDownList = secondChildDivQuestionFormDropDownList[0].childNodes;

		var cloneDivQuestionFormDropDownList = mainDivQuestionFormDropDownList.cloneNode(false);

		var cloneDivInputQuestionFormDropDownList = childsDivQuestionFormDropDownList[0].cloneNode(false);
		var cloneTextareaInputQuestionFormDropDownList = firstChildDivQuestionFormDropDownList[0].cloneNode(false);

		var cloneDivInputAnswerFormDropDownList = childsDivQuestionFormDropDownList[1].cloneNode(false);

		for (var i = 0; i < secondChildDivQuestionFormDropDownList.length; i++){
			var cloneClonedDivAnswerFormDropDownList = secondChildDivQuestionFormDropDownList[i].cloneNode(false);
			divAnswerIconsFormDropDownList = secondChildDivQuestionFormDropDownList[i].childNodes;
			
			var cloneDivAnswerNumberFormDropDownList = divAnswerIconsFormDropDownList[0].cloneNode(true);
			var cloneDivAnswerIconsInputFormDropDownList = divAnswerIconsFormDropDownList[1].cloneNode(true);
			var cloneDivAnswerIconsDelFormDropDownList = divAnswerIconsFormDropDownList[2].cloneNode(true);
			cloneDivAnswerIconsDelFormDropDownList.addEventListener('click', deleteAnswerQuestionFormDropDownList, false);

			var cloneIconsFormDropDownList = childsDivQuestionFormDropDownList[2].cloneNode(false);
			var cloneIconPlusFormDropDownList = thirdChildDivQuestionFormDropDownList[0].cloneNode(true);
			cloneIconPlusFormDropDownList.addEventListener('click', plusCloneAnswerFormDropDownList, false);
			var cloneIconCloneFormDropDownList = thirdChildDivQuestionFormDropDownList[1].cloneNode(true);
			cloneIconCloneFormDropDownList.addEventListener('click', cloneFormQuestionFormDropDownList, false);
			var cloneIconTrashFormDropDownList = thirdChildDivQuestionFormDropDownList[2].cloneNode(true);
			cloneIconTrashFormDropDownList.addEventListener('click', deleteCloneFormQuestionFormDropDownList, false);

			body.appendChild(cloneDivQuestionFormDropDownList);
			cloneDivQuestionFormDropDownList.appendChild(cloneDivInputQuestionFormDropDownList);
			cloneDivInputQuestionFormDropDownList.appendChild(cloneTextareaInputQuestionFormDropDownList);
			cloneDivQuestionFormDropDownList.appendChild(cloneDivInputAnswerFormDropDownList);
			cloneDivInputAnswerFormDropDownList.appendChild(cloneClonedDivAnswerFormDropDownList);
			cloneClonedDivAnswerFormDropDownList.appendChild(cloneDivAnswerNumberFormDropDownList);
			cloneClonedDivAnswerFormDropDownList.appendChild(cloneDivAnswerIconsInputFormDropDownList);
			cloneClonedDivAnswerFormDropDownList.appendChild(cloneDivAnswerIconsDelFormDropDownList);
		}
		cloneDivQuestionFormDropDownList.appendChild(cloneIconsFormDropDownList);
		cloneIconsFormDropDownList.appendChild(cloneIconPlusFormDropDownList);
		cloneIconsFormDropDownList.appendChild(cloneIconCloneFormDropDownList);
		cloneIconsFormDropDownList.appendChild(cloneIconTrashFormDropDownList);

		function deleteAnswerQuestionFormDropDownList (){
			var thisParent = this.parentNode;
			cloneDivInputAnswerFormDropDownList.removeChild(thisParent);
			--count;
		}

		function plusCloneAnswerFormDropDownList (){
			var thisParent = this.parentNode;
			var mainDivQuestionFormDropDownList = thisParent.parentNode; 
			var childsDivQuestionFormDropDownList = mainDivQuestionFormDropDownList.childNodes;
			var firstChildDivQuestionFormDropDownList = childsDivQuestionFormDropDownList[0].childNodes; 
			var secondChildDivQuestionFormDropDownList = childsDivQuestionFormDropDownList[1].childNodes;
			var thirdChildDivQuestionFormDropDownList = childsDivQuestionFormDropDownList[2].childNodes;
			var divAnswerIconsFormDropDownList = secondChildDivQuestionFormDropDownList[0].childNodes;


			var cloneCount = secondChildDivQuestionFormDropDownList.length;
			console.log(cloneCount)

			var cloneInputAnswerFormDropDownList = document.createElement('div');
			cloneInputAnswerFormDropDownList.classList.add("divAnswerFormDropDownList");
			var cloneInputNumberFormDropDownList = document.createElement('div');
			cloneInputNumberFormDropDownList.classList.add("inputNumberFormDropDownList");
			cloneInputNumberFormDropDownList.innerHTML = ++cloneCount + '.';
			var cloneInpAnswerFormDropDownList = document.createElement('input');
			cloneInpAnswerFormDropDownList.classList.add("inputAnswerFormDropDownList");
			cloneInpAnswerFormDropDownList.placeholder = 'Вариант ответа';
			cloneInpAnswerFormDropDownList.maxLength = '72';
			var cloneInputIconDeleteFormDropDownList = document.createElement('div');
			cloneInputIconDeleteFormDropDownList.classList.add("inputIconDeleteFormDropDownList");
			cloneInputIconDeleteFormDropDownList.innerHTML = '<i class="fas fa-times fa-lg"></i>';
			cloneInputIconDeleteFormDropDownList.addEventListener('click', deleteCloneAnswerFormDropDownList, false);

			cloneDivInputAnswerFormDropDownList.appendChild(cloneInputAnswerFormDropDownList);
			cloneInputAnswerFormDropDownList.appendChild(cloneInputNumberFormDropDownList);
			cloneInputAnswerFormDropDownList.appendChild(cloneInpAnswerFormDropDownList);
			cloneInputAnswerFormDropDownList.appendChild(cloneInputIconDeleteFormDropDownList);

			function deleteCloneAnswerFormDropDownList (){
				cloneDivInputAnswerFormDropDownList.removeChild(cloneInputAnswerFormDropDownList);
			}
		}

		function deleteCloneFormQuestionFormDropDownList (){
			body.removeChild(cloneDivQuestionFormDropDownList);
		}

		InputAddQuastionFormDropDownList();
		InputEnterFormDropDownList();
	}
	
	InputAddQuastionFormDropDownList();
	InputEnterFormDropDownList();
}

