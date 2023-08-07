<?php
/**
 * Template for rendering the Blockchain Stats block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @return string The HTML output of the block.
 */
// Include the api-functions.php file
require_once plugin_dir_path(__FILE__) . 'api-functions.php';

function render_blockchain_stats_block($attributes) {
    $apiUrl = isset($attributes['apiUrl']) ? $attributes['apiUrl'] : '';

    // Fetch data from the API using the fetch_data_from_api() function
    $data = fetch_data_from_api($apiUrl);

    // Check if 'transactions' key exists in the fetched data
    $transactions = isset($data['transactions']) ? $data['transactions'] : 'N/A';

    // Check if 'activeNodes' key exists in the fetched data
    $activeNodes = isset($data['activeNodes']) ? $data['activeNodes'] : 'N/A';

    // Output the block's HTML
    ob_start();
    ?>
    <div class="blockchain-stats-block">
        <h2><?php esc_html_e('Blockchain Statistics', 'blockchain-stats'); ?></h2>
        <p><?php esc_html_e('Number of Transactions:', 'blockchain-stats'); ?> <?php echo esc_html($transactions); ?></p>
        <p><?php esc_html_e('Active Nodes:', 'blockchain-stats'); ?> <?php echo esc_html($activeNodes); ?></p>
        <!-- Add more statistics as needed -->
    </div>
    <?php
    return ob_get_clean();
}

// Register the block's render callback function
register_block_type('custom/block', array(
    'render_callback' => 'render_blockchain_stats_block',
));


