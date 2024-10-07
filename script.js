function loadPage(page) {
    // Fetch the content of the specified page
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            // Replace the entire document body with the new content
            document.open();
            document.write(data);
            document.close();
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}