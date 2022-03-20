<?php
/**
 * Template Name: Home Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Hai
 * @since Hai 1.0
 */

get_header();
?>

<main id="site-content">



	<!-- Slider main container -->
	<div class="swiper" data-swiper>
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<!-- Slides -->
			<div class="swiper-slide">
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-1.jpg" alt=""> 
					</picture>
				</figure>
			</div>
			<div class="swiper-slide">
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-2.jpg" alt=""> 
					</picture>
				</figure>
			</div>
			<div class="swiper-slide">
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg" alt=""> 
					</picture>
				</figure>
			</div>
		</div>
		<!-- If we need pagination -->
		<div class="swiper-pagination"></div>

		<!-- If we need navigation buttons
		<div class="swiper-button-prev">Previous</div>
		<div class="swiper-button-next">Next</div> -->

		<!-- If we need scrollbar -->
		<div class="swiper-scrollbar"></div>
	</div>

	<!-- Background Image Parallax with <picture> tag -->
	<div data-jarallax>
		<picture class="jarallax-img">
			<source media="(min-width: 800px)" srcset="<?= get_template_directory_uri()?>/assets/images/swiper-slide-1.jpg">
			<source media="(min-width: 300px)" srcset="<?= get_template_directory_uri()?>/assets/images/swiper-slide-2.jpg">
			<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg" alt="">
		</picture>
		Your content here...
	</div>

	<!-- Alternate: Background Image Parallax -->
	<div data-jarallax style="background-image: url('<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg');">
		Your content here...
	</div>	

	<!-- Background Image Parallax (Jarallax) -->
	<div data-jarallax>
			<img class="jarallax-img" src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg" alt="">
			Your content here...
	</div>

</main><!-- #site-content -->

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php get_footer(); ?>
