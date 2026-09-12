const ACTIVE_SLIDE_CLASSNAME = 'gallery__slide_active';

const slidesNodes = Array.from(document.querySelectorAll('.gallery__slide'));
const prevButtons = document.querySelectorAll('.gallery__prev');
const nextButtons = document.querySelectorAll('.gallery__next');

let activeId;

init();

function init() {
    activeId = 0;

    prevButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveSlideById(getPrevId());
        });
    });

    nextButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveSlideById(getNextId());
        });
    });
}

function setActiveSlideById(id) {
    const currentId = activeId;
    activeId = id;

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME);
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME);
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === (slidesNodes.length - 1) ? 0 : activeId + 1;
}