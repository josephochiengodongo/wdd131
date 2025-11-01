const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById('lastmod').textContent = `Last Modified: ${lastModified.toLocaleDateString('en-US', options)}`;