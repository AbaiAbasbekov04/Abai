const wilberis = new XMLHttpRequest()
wilberis.open("GET", "json/folder.json")
wilberis.setRequestHeader("Content-Type", "application/json")
wilberis.send()

wilberis.addEventListener('load', () => {
    const wilber = JSON.parse(wilberis.response)

    const block = document.querySelector('.block');

    for (const key in wilber) {
        const item = wilber[key];
        const blocke = document.createElement('div');
        blocke.classList.add('block-content');

        const image = document.createElement('img');
        image.src = item.url;
        image.classList.add('imgs');
        blocke.appendChild(image);
        image.style.width = '200px';

        const name = document.createElement('h2');
        name.textContent = item.name;
        name.classList.add('name');
        blocke.appendChild(name);

        const price = document.createElement('p');
        price.textContent = `цена: ${item.price} руб.`;
        blocke.appendChild(price);

        block.appendChild(blocke);
    }
});