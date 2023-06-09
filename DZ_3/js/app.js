const tabsContent = document.querySelectorAll(".tabcontent")
const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

const switchTabAutomatically = (interval) => {
    let currentIndex = 0;

    const switchToNextTab = () => {
        hideTabContent()
        showTabContent(currentIndex)

        currentIndex++;

        if (currentIndex >= tabs.length) {
            currentIndex = 0;
        }
    }
    switchToNextTab();

    setInterval(switchToNextTab, interval)
}
switchTabAutomatically(1000)


// tabsParent.addEventListener("click", (e) => {
//     const target = e.target

//     if(target.classList.contains("tabheader__item")){
//         tabs.forEach((item, i) => {
//             if(item === target){
//                 hideTabContent()
//                 showTabContent(i)
//             }
//         })
//     }
// })

const modal = document.querySelector(".modal")
const modalOpenBtn = document.querySelector(".btn_white")
const modalCloseBtn = document.querySelector(".modal__close")

const handleOpenModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

const handleCloseModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalOpenBtn.addEventListener("click", handleOpenModal)
modalCloseBtn.addEventListener("click", handleCloseModal)

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        handleCloseModal()
    }
})
