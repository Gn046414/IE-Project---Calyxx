<?php
/**
 * Design 1 Shortcodes HTML
 *
 * @package WP Testimonials with rotator widget
 * @since 1.0.0
 */

if ( !defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>

<div class="<?php echo $css_class; ?>">
	<div class="wptww-testimonial-left">
		<?php if ( isset( $author_image ) && ($display_avatar)) { ?>
			<div class="wptww-avtar-image"><?php echo $author_image;?></div>
		<?php }?>
	</div>
	<div class="wptww-testimonial-content">
		<i class="fa fa-quote-left"></i>
		<h4><?php echo esc_html($testimonial_title); ?></h4>
		<div class="wptww-testimonials-text">
			<p>
				<?php if($display_quotes) { ?> <em> <?php } ?>
					<?php  echo get_the_content(); ?> 
				<?php if($display_quotes) { ?> </em> <?php } ?>
			</p>
		</div>
	</div>
	<?php if($display_client && !empty($author)){ ?>
		<div class="wptww-testimonial-client">
			<?php echo esc_html($author); ?>
		</div>
	<?php } ?>
	<?php if($display_job && !empty($job_title) || $display_company && !empty($company)) { ?>
		<div class="wptww-testimonial-job">
			<?php if($display_job && !empty($job_title)) {
				echo esc_html($job_title);
			}
			if($display_job && !empty($job_title) && $display_company && !empty($company)) { 
				echo " / ";
			}
			if($display_company && !empty($company)) {
				echo '<a href="'.esc_url($url).'" > '.esc_html($company).' </a>';
			} ?>
		</div>
	<?php } ?>
</div>