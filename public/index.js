const pictures = [
    'img/made1.jpg',
    'img/made2.jpg',
    'img/made3.jpg',
    'img/made1.jpg',
    'img/made2.jpg',
    'img/made3.jpg'
];

let active = 1;
const bigRussianBoss = 'carousel-big';
const invisible = 'invisible';

const carousel = document.getElementById('carousel-list');

for (let i = 0; i < pictures.length; i++) {
    const liElement = document.createElement('li');
    liElement.classList.add('carousel-element');
    liElement.id = i;
    if (i === active) {
        liElement.classList.add(bigRussianBoss);
    }

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', pictures[i]);
    liElement.appendChild(imgElement);

    carousel.append(liElement);
}

disabledArrowsButtons();

console.log(carousel);

function moveSlide(direction) {
    const currentActiveElement = document.getElementById(active);
    const leftElement = document.getElementById(active - 1);
    const rightElement = document.getElementById(active + 1);

    currentActiveElement.classList.remove(bigRussianBoss);

    if (direction === 'right') {
        rightElement.classList.add(bigRussianBoss);
        leftElement.classList.add(invisible);
        document.getElementById(active + 2).classList.remove(invisible);

        active++;
    } else {
        leftElement.classList.add(bigRussianBoss);
        rightElement.classList.add(invisible);
        document.getElementById(active - 2).classList.remove(invisible);

        active--;
    }

    disabledArrowsButtons();
}

function disabledArrowsButtons() {
    const rightButton = document.querySelector(".arrow.right");
    const leftButton = document.querySelector(".arrow.left");

    if (rightButton) {
        if (!hasNextElement()) {
            rightButton.setAttribute('disabled', 'true');
        } else {
            rightButton.removeAttribute('disabled');
        }
    }

    if (leftButton) {
        if (!hasPreviousElement()) {
            leftButton.setAttribute('disabled', 'true');
        } else {
            leftButton.removeAttribute('disabled');
        }
    }

}

function hasNextElement() {
    return pictures[active + 2] ? true : false;
}

function hasPreviousElement() {
    return pictures[active - 2] ? true : false;
}