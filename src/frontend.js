// frontend.js

(function() {
  // Function to fetch blockchain statistics from API
  function fetchBlockchainStats() {
    // API endpoint URL
    const apiUrl = 'https://api.blockchain.info/stats';
    
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Update the block content with fetched data
        const blockchainStatsBlock = document.querySelector('.blockchain-stats-block');
        blockchainStatsBlock.innerHTML = `
          <div class="blockchain-stat">
            <h3>Number of Transactions</h3>
            <p>${data.n_tx}</p>
          </div>
          <div class="blockchain-stat">
            <h3>Active Nodes</h3>
            <p>${data.n_nodes}</p>
          </div>
        `;
      })
      .catch(error => {
        console.error('Error fetching blockchain statistics:', error);
      });
  }

  // Execute when the document is ready
  document.addEventListener('DOMContentLoaded', function() {
    fetchBlockchainStats();
  });

})();
