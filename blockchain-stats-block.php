<?php
/**
 * Plugin Name: Blockchain Stats Block
 * Description: A custom WordPress block to display real-time blockchain statistics.
 * Version: 1.0.0
 * Author: omomoh Agiogu
 */

class Blockchain_Stats_Block {
    public function __construct() {
        // Enqueue block assets
        add_action('enqueue_block_assets', array($this, 'enqueue_block_assets'));

        // Register the block
        add_action('init', array($this, 'register_block'));
    }

    public function enqueue_block_assets() {
        // Enqueue block stylesheet
        wp_enqueue_style('block-css', plugin_dir_url(__FILE__) . 'css/style.css', array(), '1.0.0');

        // Enqueue block editor JavaScript
        //wp_enqueue_script('block-editor', plugin_dir_url(__FILE__) . 'js/editor.js', array('wp-blocks', 'wp-components', 'wp-i18n', 'wp-element'), '1.0.0');

        // Enqueue block JavaScript
        wp_enqueue_script('frontend-js', plugin_dir_url(__FILE__) . 'frontend.js', array('wp-blocks', 'wp-editor', 'wp-i18n', 'wp-element'), '1.0.0');

        // Enqueue block editor and frontend JavaScript
        wp_enqueue_script('block-js', plugin_dir_url(__FILE__) . 'build/block.js', array('wp-blocks', 'wp-editor', 'wp-i18n', 'wp-element'), '1.0.0');
        // Enqueue block editor and frontend JavaScript
        wp_enqueue_script('index-js', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-editor', 'wp-i18n', 'wp-element'), '1.0.0');

    }

    public function register_block() {
        // Register block using the block-template.php file
        require_once plugin_dir_path(__FILE__) . './ block-template.php';
    }
}

$blockchain_stats_block = new Blockchain_Stats_Block();
