<?php
/**
 * A template part for displaying a gallery entry within an archive.
 *
 * @package     Woodd
 * @subpackage  HybridCore
 * @copyright   Copyright (c) 2014, Flagship, LLC
 * @license     GPL-2.0+
 * @link        https://flagshipwp.com/
 * @since       1.0.0
 */
?>

<?php tha_entry_before(); ?>

<article <?php hybrid_attr( 'post' ); ?>>

	<?php tha_entry_top(); ?>

	<?php
	// Display a featured image if one has been set.
	get_the_image(
		array(
			'size'   => 'woodd-full',
			'before' => '<div class="featured-media image">',
			'after'  => '</div>',
		)
	);
	?>

	<header class="entry-header">

		<?php the_title( '<h2 ' . hybrid_get_attr( 'entry-title' ) . '><a href="' . get_permalink() . '" rel="bookmark" itemprop="url">', '</a></h2>' ); ?>

		<p class="entry-meta">
			<?php hybrid_post_format_link(); ?>
			<?php flagship_entry_author(); ?>
			<?php flagship_entry_published(); ?>
			<?php flagship_entry_comments_link(); ?>
			<?php edit_post_link(); ?>
		</p><!-- .entry-meta -->

	</header><!-- .entry-header -->

	<div <?php hybrid_attr( 'entry-summary' ); ?>>
		<?php the_excerpt(); ?>
		<?php $count = hybrid_get_gallery_item_count(); ?>
		<p class="gallery-count"><?php printf( _n( 'This gallery contains %s item.', 'This gallery contains %s items.', $count, 'woodd' ), $count ); ?></p>
	</div><!-- .entry-summary -->

	<?php tha_entry_bottom(); ?>

</article><!-- .entry -->

<?php
tha_entry_after();
