$(document).ready(function() {

	//mask
	$(".input-phone").mask("+7 (999) 999-99-99");

	//share
	  $('.share-unit__btn').on('click', function () {
		const $btn = $(this);
		const text = $btn.siblings('.share-unit__value').text().trim();

		const tempInput = $('<input>');
		$('body').append(tempInput);
		tempInput.val(text).select();
		document.execCommand('copy');
		tempInput.remove();

		let $tooltip = $('<div class="copy-tooltip">Ссылка скопирована</div>');
		$btn.append($tooltip);
		setTimeout(() => $tooltip.addClass('active'), 10); 

		setTimeout(() => {
		$tooltip.removeClass('active');
		setTimeout(() => $tooltip.remove(), 300); 
		}, 1500);

  });

  
	//progressbar
	function updateProgressBar() {
  var $modals = $('.modal');
  var $activeModal = $modals.filter('.active');
  var index = $modals.index($activeModal);
  var total = $modals.length;

  if (index !== -1) {
    var percent = ((index + 1) / total) * 100;
    $activeModal.find('.progressbar__value').css('width', percent + '%');
  }
}

  	$(".modal__close").click(function (e) {
		e.preventDefault();
		 $(".modal").removeClass("flip-in").addClass("flip-out");
		
		 setTimeout(() => {
			$(".modal").removeClass("active")
		 }, 500);

		 setTimeout(() => {
			 $(".modal-overlay").removeClass("active");
		 }, 500);

		  updateProgressBar();
	});

//modals
$(".open-modal").click(function(e) {
	e.preventDefault();
		if ($(".modals-wrap .modal:first-child").hasClass("active")) {
			$(".modals-wrap .modal:first-child").removeClass("active").removeClass("flip-in").addClass("flip-out");
			$(".modal-overlay").removeClass("active");
		} else {
			$(".modals-wrap .modal:first-child").addClass("flip-in").removeClass("flip-out").addClass("active");
			$(".modal-overlay").addClass("active");
		}

		 updateProgressBar();
	});

	$(".prev-modal").click(function (e) {
		e.preventDefault();
	var $currentTab = $(this).parents(".modal");
		$currentTab.removeClass("active").removeClass("flip-in").addClass("flip-out");
		$currentTab.prev(".modal").addClass("active").addClass("flip-in").removeClass("flip-out");

   updateProgressBar();
	});

	$(".next-modal").click(function (e) {
		e.preventDefault();
	
		var $currentTab = $(this).parents(".modal");
	if ($currentTab.find('.input[type="radio"], input[type="checkbox"]').length > 0) {
if ($currentTab.find('input[type="radio"]:checked, input[type="checkbox"]:checked').length > 0) {
			$currentTab.removeClass("active").removeClass("flip-in").addClass("flip-out");
			$currentTab.next(".modal").addClass("active").addClass("flip-in").removeClass("flip-out");
		} else {
			alert("Пожалуйста, выберите хотя бы один вариант ответа.");
		}
  } else {
		$currentTab.removeClass("active").removeClass("flip-in").addClass("flip-out");
		$currentTab.next(".modal").addClass("active").addClass("flip-in").removeClass("flip-out");
  }

  if ($(".modal_success").hasClass("active")) {
			setTimeout(() => {
				$(".modal_success").removeClass("active").removeClass("flip-in").addClass("flip-out");
				$(".modal_success").next(".modal").addClass("active").addClass("flip-in").removeClass("flip-out");
			}, 2000);
		}

   updateProgressBar();
	});

	$('.modal').on('change', '.radio input[type="radio"]', function () {
		var $currentTab = $(this).parents('.modal');
		var $nextTab = $currentTab.next('.modal');
	
		if ($nextTab.length) {
		  $currentTab.removeClass("active").removeClass("flip-in").addClass("flip-out");
		  $nextTab.addClass("active").addClass("flip-in").removeClass("flip-out");
		}

		if ($(".modal_success").hasClass("active")) {
			setTimeout(() => {
				$(".modal_success").removeClass("active").removeClass("flip-in").addClass("flip-out");
				$(".modal_success").next(".modal").addClass("active").addClass("flip-in").removeClass("flip-out");
			}, 1400);
		}

		 updateProgressBar();
	});

	$('.radio_cooperation').click(function (e) {
		var $currentTab = $(this).parents('.modal');
	
		 $currentTab.removeClass("active").removeClass("flip-in").addClass("flip-out");
		  $("#modal-cooperation").addClass("active").addClass("flip-in").removeClass("flip-out");

		 updateProgressBar();
	});



	$('#modal-cooperation .btn-main').click(function (e) {

		const $form = $(this).closest('form');
		let isValid = true;

		$form.find('input[required]').each(function () {
		if ($(this).val().trim() === '') {
			isValid = false;
		} 
		});

		if (isValid) {
			e.preventDefault();
			var $currentTab = $(this).parents('.modal');
		
			$currentTab.removeClass("active").removeClass("flip-in").addClass("flip-out");
			$(".modal_success").addClass("active").addClass("flip-in").removeClass("flip-out");
		} 
		 updateProgressBar();
	});

	$('#modal-callback .btn-main').click(function (e) {

		const $form = $(this).closest('form');
    let isValid = true;

    $form.find('input[required]').each(function () {
      if ($(this).val().trim() === '') {
        isValid = false;
      } 
    });

    if (isValid) {
     	e.preventDefault();
		var $currentTab = $(this).parents('.modal');
	
		 $currentTab.removeClass("active").removeClass("flip-in").addClass("flip-out");
		  $(".modal_success").addClass("active").addClass("flip-in").removeClass("flip-out");

		 setTimeout(() => {
				$(".modal_success").removeClass("active").removeClass("flip-in").addClass("flip-out");
				$(".modal_success").next(".modal").addClass("active").addClass("flip-in").removeClass("flip-out");
			}, 1400);
    } 
		 updateProgressBar();
	});



});


