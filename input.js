var InputTXT = function (){
	var txtForm = document.getElementById('newFormInput');
	var txtDescription = document.getElementById('newDescriptionInput');
	txtForm.addEventListener("input", OnInputForm, false);
	txtDescription.addEventListener("input", OnInputDescription, false);
	function OnInputForm() {
		this.style.height = '40px';
		this.style.height = (this.scrollHeight) + 'px';	
	}
	function OnInputDescription() {
		this.style.height = '27px';
		this.style.height = (this.scrollHeight) + 'px';	
	}
}
InputTXT();

var InputEnter = function (){
	var enter = document.getElementById('newFormInput');
	enter.addEventListener("keydown", OnKeyDown, false);
	function OnKeyDown (){
		if (event.keyCode == 13){
			event.preventDefault()
		}
	}
}
InputEnter();

var InputAddQuastionFormText = function (){
	var addQuastionFormText = document.getElementsByClassName('QuestionFormText');
	for (var i = 0; i < addQuastionFormText.length; i++){
		addQuastionFormText[i].addEventListener("input", OnInputForm, false);
		function OnInputForm() {
			this.style.height = '20px';
			this.style.height = (this.scrollHeight) + 'px';	
		}
	}
}
var InputEnterFormText = function (){
	var enterFormText = document.getElementsByClassName('QuestionFormText');
	for (var i = 0; i < enterFormText.length; i++){
		enterFormText[i].addEventListener("keydown", OnKeyDown, false);
		function OnKeyDown (){
			if (event.keyCode == 13){
				event.preventDefault()
			}
		}
	}
}


var InputAddQuastionFormOneOfList = function (){
	var addQuestionFormOneOfList = document.getElementsByClassName('QuestionFormOneOfList');
	for (var i = 0; i < addQuestionFormOneOfList.length; i++){
		addQuestionFormOneOfList[i].addEventListener("input", OnInputForm, false);
		function OnInputForm() {
			this.style.height = '20px';
			this.style.height = (this.scrollHeight) + 'px';	
		}
	}
}
var InputEnterFormOneOfList = function (){
	var enterFormOneOfList = document.getElementsByClassName('QuestionFormOneOfList');
	for (var i = 0; i < enterFormOneOfList.length; i++){
		enterFormOneOfList[i].addEventListener("keydown", OnKeyDown, false);
		function OnKeyDown (){
			if (event.keyCode == 13){
				event.preventDefault()
			}
		}
	}
}


var InputAddQuastionFormDropDownList = function (){
	var addQuestionFormDropDownList = document.getElementsByClassName('QuestionFormDropDownList');
	for (var i = 0; i < addQuestionFormDropDownList.length; i++){
		addQuestionFormDropDownList[i].addEventListener("input", OnInputForm, false);
		function OnInputForm() {
			this.style.height = '20px';
			this.style.height = (this.scrollHeight) + 'px';	
		}
	}
}
var InputEnterFormDropDownList = function (){
	var enterFormDropDownList = document.getElementsByClassName('QuestionFormDropDownList');
	for (var i = 0; i < enterFormDropDownList.length; i++){
		enterFormDropDownList[i].addEventListener("keydown", OnKeyDown, false);
		function OnKeyDown (){
			if (event.keyCode == 13){
				event.preventDefault()
			}
		}
	}
}










