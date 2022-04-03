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

	<section class="swiper intro-slider" data-swiper>
		<div class="swiper-wrapper">
			<!-- Slides -->
			<div class="swiper-slide">
				<div class="overlay">	
					<div class="content">
						<h2>
							Intro heading
						</h2>
						<p>Ipsum lorem..</p>
					</div>
				</div>
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-1.jpg" alt=""> 
					</picture>
				</figure>
			</div>
			<div class="swiper-slide">
				<div class="overlay">	
					<div class="content">
						<h2>
							Intro heading
						</h2>
						<p>Ipsum lorem..</p>
					</div>
				</div>
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-2.jpg" alt=""> 
					</picture>
				</figure>
			</div>
			<div class="swiper-slide">
				<div class="overlay">	
					<div class="content">
						<h2>
							Intro heading
						</h2>
						<p>Ipsum lorem..</p>
					</div>
				</div>
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg" alt=""> 
					</picture>
				</figure>
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-scrollbar"></div>

		<!-- If we need navigation buttons
		<div class="swiper-button-prev">Previous</div>
		<div class="swiper-button-next">Next</div> -->
	</section>

	

	<section class="swiper intro-slider" data-swiper>
		<div class="swiper-wrapper">
			<!-- Slides -->
			<div class="swiper-slide">
				<div class="overlay">	
					<div class="content">
						<h2>
							Intro heading
						</h2>
						<p>Ipsum lorem..</p>
					</div>
				</div>
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-1.jpg" alt=""> 
					</picture>
				</figure>
			</div>
			<div class="swiper-slide">
				<div class="overlay">	
					<div class="content">
						<h2>
							Intro heading
						</h2>
						<p>Ipsum lorem..</p>
					</div>
				</div>
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-2.jpg" alt=""> 
					</picture>
				</figure>
			</div>
			<div class="swiper-slide">
				<div class="overlay">	
					<div class="content">
						<h2>
							Intro heading
						</h2>
						<p>Ipsum lorem..</p>
					</div>
				</div>
				<figure class="img img--cover img--2x3">
					<picture>
						<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg" alt=""> 
					</picture>
				</figure>
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-scrollbar"></div>

		<!-- If we need navigation buttons
		<div class="swiper-button-prev">Previous</div>
		<div class="swiper-button-next">Next</div> -->
	</section>

	<!-- Background Image Parallax with <picture> tag -->
	<section data-jarallax>
		<h1>Your content here...</h1>
		<picture class="jarallax-img">
			<source media="(min-width: 800px)" srcset="<?= get_template_directory_uri()?>/assets/images/swiper-slide-1.jpg">
			<source media="(min-width: 300px)" srcset="<?= get_template_directory_uri()?>/assets/images/swiper-slide-2.jpg">
			<img src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg" alt="">
		</picture>
	</section>

	<!-- Alternate: Background Image Parallax -->
	<section data-jarallax style="background-image: url('<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg');">
		
		<h1>Your content here...</h1>
	</section>	

	<!-- Background Image Parallax (Jarallax) -->
	<section data-jarallax>
			<img class="jarallax-img" src="<?= get_template_directory_uri()?>/assets/images/swiper-slide-3.jpg" alt="">
			
			<h1>Feta halloumi ricotta. Cream cheese hard cheese cheeseburger edam fromage parmesan cheese slices pecorino..</h1>
	</section>

</main><!-- #site-content -->

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php get_footer(); ?>
