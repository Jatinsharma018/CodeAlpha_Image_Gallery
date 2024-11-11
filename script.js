
const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

gallery.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        modalImage.src = e.target.src;
        modal.style.display = 'flex';
    }
});

modal.addEventListener('click', function() {
    modal.style.display = 'none';
});
