// scroll animation
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
});

// toggle gallery (fixed)
function toggleGallery(id){
    document.querySelectorAll('.room-gallery').forEach(g => {
        if(g.id !== id) g.classList.remove('show');
    });

    document.getElementById(id).classList.toggle('show');
}