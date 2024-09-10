// Önéletrajz generálása a megadott adatok alapján
function generateCV() {
    const name = document.getElementById('name-input').value;
    const profession = document.getElementById('profession-input').value;
    const about = document.getElementById('about-input').value;
    const fileInput = document.getElementById('profile-pic-input');
    const profilePic = document.getElementById('profile-pic');

    // Profilkép betöltése
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }

    // A megadott adatok betöltése az önéletrajzba
    document.getElementById('name').textContent = name;
    document.getElementById('profession').textContent = profession;
    document.getElementById('about-text').textContent = about;

    // Mutassuk a letöltés gombot
    document.getElementById('download-btn').style.display = 'inline';
}

// Önéletrajz letöltése PNG formátumban
function downloadPNG() {
    const cvContainer = document.getElementById('cv-container');
    
    html2canvas(cvContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'oneletrajz.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
