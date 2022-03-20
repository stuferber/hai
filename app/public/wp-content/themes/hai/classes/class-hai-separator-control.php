<?php
/**
 * Customizer Separator Control settings for this theme.
 *
 * @package WordPress
 * @subpackage Hai
 * @since Hai 1.0
 */

if ( class_exists( 'WP_Customize_Control' ) ) {

	if ( ! class_exists( 'hai_Separator_Control' ) ) {
		/**
		 * Separator Control.
		 *
		 * @since Hai 1.0
		 */
		class hai_Separator_Control extends WP_Customize_Control {
			/**
			 * Render the hr.
			 *
			 * @since Hai 1.0
			 */
			public function render_content() {
				echo '<hr/>';
			}

		}
	}
}
