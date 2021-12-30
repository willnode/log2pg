document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    fetch('https://localhost:443', {
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
    });
    return false;
};