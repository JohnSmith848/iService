const whatIsBreakField = document.querySelector('.os-tf-what-is-break');
const whatIsBreakList = document.querySelector('.os-ddl-what-is-break');
const whatIsBreakTriangle = document.querySelector('.dft-what-is-break');

const vendorField = document.querySelector('.os-tf-vendor');
const vendorList = document.querySelector('.os-ddl-vendor');
const vendorTriangle = document.querySelector('.dft-vendor');

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


vendorField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		vendorList.classList.add('dropdown-list_show');
		vendorTriangle.classList.add('dropdown-field-triangle-up');
	}
)

vendorList.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		vendorList.classList.remove('dropdown-list_show');
		vendorTriangle.classList.remove('dropdown-field-triangle-up');
		if(vendorList.selectedIndex>=0){
			vendorField.value=vendorList.options[vendorList.selectedIndex].text;
			alert(vendorList.selectedIndex);
		}
	}
)

$('.header__menu-burger').click(function(event){
	$('.header__menu-burger, .header__menu').toggleClass('burger_active');
})

