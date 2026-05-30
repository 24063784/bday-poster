// Get form elements
const posterForm = document.getElementById('posterForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const messageInput = document.getElementById('message');
const themeInput = document.getElementById('theme');
const birthdayPoster = document.getElementById('birthdayPoster');

// Get poster display elements
const posterName = document.getElementById('posterName');
const posterAge = document.getElementById('posterAge');
const posterMessage = document.getElementById('posterMessage');

// Initialize poster
function initializePoster() {
    updatePoster();
    applyTheme(themeInput.value);
}

// Update poster display
function updatePoster() {
    const name = nameInput.value || 'Happy Birthday!';
    const age = ageInput.value || '21';
    const message = messageInput.value || 'Make a wish and celebrate!';

    posterName.textContent = name;
    posterAge.textContent = age;
    posterMessage.textContent = message;
}

// Apply theme
function applyTheme(theme) {
    // Remove all theme classes
    birthdayPoster.classList.remove('purple-theme', 'pink-theme', 'blue-theme', 'gold-theme');
    
    // Add the selected theme class
    birthdayPoster.classList.add(theme + '-theme');
}

// Add event listeners
nameInput.addEventListener('input', updatePoster);
ageInput.addEventListener('input', updatePoster);
messageInput.addEventListener('input', updatePoster);
themeInput.addEventListener('change', (e) => applyTheme(e.target.value));

// Download poster as image
function downloadPoster() {
    const name = nameInput.value || 'BirthdayPoster';
    
    // Use html2canvas if available, otherwise print
    if (typeof html2canvas !== 'undefined') {
        html2canvas(birthdayPoster, {
            scale: 2,
            backgroundColor: null,
            useCORS: true
        }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `BirthdayPoster_${name.replace(/\s/g, '_')}.png`;
            link.click();
        });
    } else {
        // Fallback to print dialog
        window.print();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializePoster);
