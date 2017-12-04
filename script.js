$( document ).ready(function() {
	$("#collapse").click(function() {
		$(".menu ul").toggleClass( "show" );
		$(".menu span").toggleClass( "expanded" );
	});

	var emailRegex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

	$(function() {
		$("#mc-embedded-subscribe").click(function(e) {
			var value = $("#mce-EMAIL").val();
			var res = emailRegex.test(value);
			if (!value.includes(".")) {
				e.preventDefault();
				$('#mc_embed_signup').addClass('error');
				$('.validation').html("Your email address is missing a <strong>full stop</strong>");
			} else if (!res) {
				e.preventDefault();
				$('#mc_embed_signup').addClass('error');
				$('.validation').html(value + " is an <strong>invalid</strong> email address");
			}
		});
	})

	var url = $(this).prop('action');

	$(function() {
		$('#mc-embedded-subscribe-form').ajaxChimp({
			url: url,
			callback: function(response) {
				$('#mc_embed_signup').removeClass("error");
				if (response.result === 'error') {
					$('#mc_embed_signup').addClass('error');
				}
					$('.validation').html(response.msg);
			}
		});
	})
});