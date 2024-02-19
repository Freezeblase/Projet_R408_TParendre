    function openOverlay(title, imageUrl, description) {
        document.getElementById('overlay-text').innerHTML = `<strong>${title}</strong><br>${description}`;
        document.getElementById('overlay-image').src = imageUrl;
        document.querySelector('.overlay').style.display = 'flex';
    }
    
    function closeOverlay() {
        document.querySelector('.overlay').style.display = 'none';
    }