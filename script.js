function showCard() {
    const hiddenSection = document.getElementById('hiddenSection');
    hiddenSection.style.display = 'block';
    hiddenSection.scrollIntoView({ behavior: 'smooth' });
}