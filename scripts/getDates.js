document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = new Date().getFullYear();

    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
});

// toLocaleDateString 
const options = {weekday: 'long',day: 'numeric', month: 'long', year: 'numeric', time: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);