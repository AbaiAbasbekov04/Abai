class Menu {
    constructor(url, name, price) {
        this.url = url;
        this.name = name;
        this.price = price;
    };
    render() {
        const block = document.querySelector('.block');
        const blocks = document.createElement('div');
        blocks.classList.add('block-content');

        blocks.innerHTML = `
            <img src="${this.url}" alt="${this.url}">
            <h2 class="name">${this.name}</h2>
            <p>Цена: ${this.price}сом</p>
        `;
        block.append(blocks);
    }
}
const getBlock = async (url) => {
    const req = await fetch(url);
    return await req.json();
};
getBlock('json/folder.json')
.then((data) => {
    data.product.forEach(({url, name, price}) => {
        new Menu(url, name, price).render();
    });
});