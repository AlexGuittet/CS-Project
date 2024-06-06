const cursorRounded = document.querySelector(".rounded");
const cursorPointed = document.querySelector(".pointed");

const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRounded.computedStyleMap.transform = `translated3d(${mouseX}px, ${mouseY}px, 0)`;

    cursorPointed.computedStyleMap.transform = `translated3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor)