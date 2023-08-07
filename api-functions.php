<?php
// api-functions.php

function fetch_data_from_api($apiUrl) {
    // Make a request to the API using cURL or any other method
    $response = wp_remote_get($apiUrl);

    // Check if the request was successful
    if (is_wp_error($response)) {
        return array(); // Return an empty array if there's an error
    }

    // Get the response body as JSON
    $data = wp_remote_retrieve_body($response);

    // Convert the JSON string to an associative array
    $decoded_data = json_decode($data, true);

    return $decoded_data; // Return the fetched data
}
