const whatIsBreakField = document.querySelector('.os-tf-what-is-break');
const whatIsBreakList = document.querySelector('.os-ddl-what-is-break');
const whatIsBreakTriangle = document.querySelector('.dft-what-is-break');


whatIsBreakField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		whatIsBreakList.classList.add('dropdown-list_show');
		whatIsBreakTriangle.classList.add('dropdown-field-triangle-up');
	}
)

whatIsBreakList.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		whatIsBreakList.classList.remove('dropdown-list_show');
		whatIsBreakTriangle.classList.remove('dropdown-field-triangle-up');
		if(whatIsBreakList.selectedIndex>=0){
			whatIsBreakField.value=whatIsBreakList.options[whatIsBreakList.selectedIndex].text;
			alert(whatIsBreakList.selectedIndex);
		}
	}
)
