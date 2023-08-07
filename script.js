const burder_btn = document.querySelector('.header__burder-btn');
const mobile_menu = document.querySelector('.mobile-menu');
const black_bcg = document.querySelector('.black-bcg');
const menu__close_btn = document.querySelector('.mobile-menu__close-btn');

burder_btn.addEventListener('click', showMenu);

menu__close_btn.addEventListener('click', closeMenu);

function showMenu() {
    mobile_menu.style.display = 'flex';
    black_bcg.style.display = 'block';
}

function closeMenu() {
    mobile_menu.style.display = 'none';
    black_bcg.style.display = 'none';
}
// end mobile menu============

// start add and delete cards ============
let data = [
    { id: 0, cardName: '1Cyberpunk Cocomo', src: './image/test-img.png', price: 190 },
    { id: 1, cardName: '2Cyberpunk Cocomo', src: './image/test-img.png', price: 490 },
    { id: 2, cardName: '3Cyberpunk Cocomo', src: './image/test-img.png', price: 190 },
    { id: 3, cardName: '4Cyberpunk Cocomo', src: 'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*', price: 190 },
    { id: 4, cardName: '5Cyberpunk Cocomo', src: './image/test-img.png', price: 190 },
]

let card_wrap = document.querySelector('.art__cards-wrap');

card_wrap.addEventListener('click', function (event) {
    if (event.target.classList.contains('card__delete')) {
        if (confirm('Ви точно хочете видалити картку ?')) {
            deleteCard(event.target.dataset.id);
        }
    }
})

function renderCards(data) {
    card_wrap.innerHTML = '';
    data.forEach((item) => {
        card_wrap.insertAdjacentHTML('beforeend', `
        <div class="card">
            <img class="card__delete" src="./image/ic_delete-item.svg" alt="img" data-id="${item.id}">
            <img class="card__img" src="${item.src}" alt="img">
            <div class="card__name-wrap">
                <h4 class="card__name" title="${item.cardName}">${item.cardName}</h4>
                <h5 class="card__price">${item.price}ETH</h5>
            </div>
            <div class="card__time-wrap">
                <div class="card__time">
                    <span>Ending In</span>
                    <span>
                        <img src="./image/clock.svg" alt="clock">
                        03:24:56
                    </span>
                </div>
                <button class="second-btn">${item.price}</button>
            </div>
        </div>
    `)

    })
}

renderCards(data);

function deleteCard(id) {
    data = data.filter((item) => item.id != id);
    renderCards(data);
}

let saveBtn = document.querySelector('.save-btn');
let closeBtn = document.querySelector('.close-modal');
let formInputs = document.querySelector('.modal-body form');

saveBtn.addEventListener('click', function () {
    let formData = new FormData(formInputs);

    let isNameValid = formData.get('name').length < 3;
    let isPriceValid = formData.get('price').length < 1;
    let isSrcValid = formData.get('src').length < 10;

    if (isNameValid) {
        document.querySelector('input[name="name"]').classList.add('error');
    }

    if (isPriceValid) {
        document.querySelector('input[name="price"]').classList.add('error');
    }

    if (isSrcValid) {
        document.querySelector('input[name="src"]').classList.add('error');
    }

    if (!isNameValid && !isPriceValid && !isSrcValid) {
        addItemTodata(formData);
    }
})

function addItemTodata(formData) {
    let unicId = data[data.length - 1].id + 1;

    let newObject = {
        id: unicId,
        cardName: formData.get('name'),
        src: formData.get('src'),
        price: formData.get('price')
    };

    data.push(newObject);
    renderCards(data);
    closeBtn.click();

    alert('Картка додана');
}

document.querySelectorAll('input').forEach(item => {
    item.addEventListener('focus', function () {
        this.classList.remove('error');
    })
})
// end add and delete cards ============

// search card 

let searchInput = document.querySelector('.art__search input');

// searchInput.addEventListener('input', function () {
//     if (this.value.length === 0) {
//         renderCards(data);
//     } else {
//         search(this.value)
//     }
// })

searchInput.addEventListener('keydown', function (event) {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
        search(this.value);
    }
})

function search(value) {
    console.log('serch function');
    if (value.length === 0) {
        renderCards(data);
    } else {
        let serchData = data.filter((item) => item.cardName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        renderCards(serchData);
    }
}





