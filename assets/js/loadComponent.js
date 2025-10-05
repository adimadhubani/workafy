function loadHTML(containerId, url) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(err => console.error("Error loading component:", err));
}
