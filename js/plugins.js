$(".team-members")
	.owlCarousel({
		center: true,
		loop: true,
		autoWidth: false,
		margin: 100,
		nav: true,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1024: {
				items: 2,
				center: false,
				margin: 10
			},
			1200: {
				items: 3
			}
		}
	});

$(".blog-posts")
	.owlCarousel({
		center: true,
		loop: true,
		autoWidth: false,
		margin: 20,
		nav: true,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			900: {
				items: 2
			},
			1024: {
				items: 2,
				center: false
			},
			1200: {
				items: 3
			}
		}
	});


$(".team-members .owl-prev")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-angle-double-left owlsizeicon"></i></div></div>');
$(".team-members .owl-next")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-angle-double-right owlsizeicon"></i></div></div>');
$(".blog-posts .owl-prev")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-angle-left fa-3x owlsizeicon"></i></div></div>');
$(".blog-posts .owl-next")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-angle-right fa-3x owlsizeicon"></i></div></div>');


$(".months-con button")
	.on("click", function () {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});

$(".cookies-accept-btn").on("click", function () {
	$(".cookies-alert").fadeOut(200);
});