var datepickerSettings = {
		"format": "d mmmm yyyy",
		"formatSubmit": "yyyy-mm-dd",
		"monthsFull": ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
		"hiddenName": true,
		"selectYears": true,
		"selectMonths": true,
		"min": [1930,3,20],
		"selectYears": 80,
		"editable": false
	};

var timepickerSettings = {
		"format": "H:i",
		"formatSubmit": "HH:i",
		"hiddenPrefix": "",
		"hiddenSuffix": "",
		"hiddenName": true,
		"interval": 15
	};


$(document).ready(function() {
	$('.datepicker').pickadate({
		"days": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	    "weekdaysShort": ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	    "daysMin": ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    "months": ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
	    "monthsShort": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	    "today": 'Today',
	    "clear": 'Clear',
	    "close": 'Close',
		"format": "d mmmm yyyy",
		"formatSubmit": "yyyy-mm-dd",
		"monthsFull": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		"hiddenName": true,
		"selectYears": true,
		"selectMonths": true,
		"min": [1930,3,20],
		"selectYears": 80,
		"editable": false
	});
});	