const imageData = [
    {
        src: 'img1.png',
        title: 'Bluish Dragon DualShock 4 Wireless Controller',
        price: '$59.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?',
        activeColor: 0
    },
    {
        src: 'img2.png',
        title: 'Rosa Dragon DualShock 4 Wireless Controller',
        price: '$59.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?',
        activeColor: 1
    },
    {
        src: 'img3.png',
        title: 'Turmeric Dragon DualShock 4 Wireless Controller',
        price: '$59.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?',
        activeColor: 2
    },
    {
        src: 'img4.png',
        title: 'Reddish Dragon DualShock 4 Wireless Controller',
        price: '$59.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?',
        activeColor: 3
    },
    {
        src: 'img5.png',
        title: 'Mirage Dragon DualShock 4 Wireless Controller',
        price: '$59.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?',
        activeColor: 4
    },
    {
        src: 'img6.png',
        title: 'Algae Dragon DualShock 4 Wireless Controller',
        price: '$59.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?',
        activeColor: 5
    }
];

const colors = ['#3674be', '#d26181', '#ceb13d', '#c6414c', '#171f2b', '#50aa61'];
const imgSlider = document.querySelector('.img-slider');
const infoBox = document.querySelector('.info-box');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let indexSlider = 0;
let index = 0;

const createItems = () => {
    imageData.forEach((itemData, idx) => {
        const imgItem = document.createElement('div');
        imgItem.className = `img-item${idx === 0 ? ' active' : ''}`;
        imgItem.style.setProperty('--i', idx + 1);

        imgItem.innerHTML = `
            <div class="item">
                <img src="${itemData.src}" alt="${itemData.title}">
            </div>
        `;

        imgSlider.appendChild(imgItem);

        const infoItem = document.createElement('div');
        infoItem.className = `info-item${idx === 0 ? ' active' : ''}`;
        infoItem.innerHTML = `
            <h2>${itemData.title}</h2>
            <h2>${itemData.price}</h2>
            <div class="colors">
                ${Array.from({ length: 6 }, (_, colorIdx) => `
                    <span${colorIdx === itemData.activeColor ? ' class="active"' : ''}></span>
                `).join('')}
            </div>
            <p>${itemData.description}</p>
            <a href="#" class="btn">Buy Now</a>
        `;

        infoBox.appendChild(infoItem);
    });
};

const slider = () => {
    const items = document.querySelectorAll('.item');
    const imgItems = document.querySelectorAll('.img-item');
    const infoItems = document.querySelectorAll('.info-item');

    imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`;

    items.forEach(item => {
        item.style.transform = `rotate(${indexSlider * -60}deg)`;
    });

    document.querySelector('.img-item.active').classList.remove('active');
    imgItems[index].classList.add('active');

    document.querySelector('.info-item.active').classList.remove('active');
    infoItems[index].classList.add('active');

    document.body.style.background = colors[index];
};

nextBtn.addEventListener('click', () => {
    indexSlider++;
    index++;
    if (index > imageData.length - 1) {
        index = 0;
    }
    slider();
});

prevBtn.addEventListener('click', () => {
    indexSlider--;
    index--;
    if (index < 0) {
        index = imageData.length - 1;
    }
    slider();
});

createItems();
