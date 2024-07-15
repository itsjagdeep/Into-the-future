document.getElementById('exploreButton').addEventListener('click', function() {
    window.location.href = 'https://saas-landing-page-fawn.vercel.app/';
    createAnimation();
});

function createAnimation() {
    const animationDiv = document.createElement('div');
    animationDiv.classList.add('animation');
    document.body.appendChild(animationDiv);
    
    setTimeout(() => {
        animationDiv.remove();
    }, 500);
}
