const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');


const convert = (elem, target, target2) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'json/data.json')
        request.setRequestHeader('Content-Type', 'application/json')
        request.send()

        request.addEventListener('load', () => {
            const data = JSON.parse(request.response)
            if(elem === som) {
                target.value = (elem.value / data.usd).toFixed(2)
                target2.value = (elem.value / data.eur).toFixed(2)
            }else if(elem === usd) {
                target.value = (elem.value * data.usd).toFixed(2)
                target2.value = (elem.value * data.usd / data.eur).toFixed(2)
            }else if(elem === eur) {
                target.value = (elem.value * data.eur).toFixed(2)
                target2.value = (elem.value * data.eur / data.usd).toFixed(2)
            }
            elem.value === "" && (target.value = "")
            elem.value === "" ? target2.value = "": null
        })
    })
}
convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)