document.addEventListener('mousemove', function(e) {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const {left, top, width, height} = eye.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(eye.clientWidth / 4, Math.hypot(deltaX, deltaY));
        const pupilX = distance * Math.cos(angle);
        const pupilY = distance * Math.sin(angle);
        const pupil = eye.querySelector('.pupil');
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
