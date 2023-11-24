const createHome = () => {
    const content = document.getElementById('content')

    const pageContent = document.createElement('div')
    pageContent.classList.add('pageContent')


    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home-div')

    const imgSection = document.createElement('div')
    imgSection.classList.add('img-section')

    const imgDisplay = document.createElement('img')
    imgDisplay.src = '../dist/img/pizza.jpg';
    imgDisplay.alt = "pizza image"
    imgDisplay.height = 400
    imgDisplay.width = 300

    imgSection.appendChild(imgDisplay)
    homeDiv.appendChild(imgSection)

    const infoSection = document.createElement('div')
    infoSection.classList.add('info-section')

    const infoH1 = document.createElement('h1')
    infoH1.innerText = "The best Restaurant is Town!"

    const desP = document.createElement('p')
    desP.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"

    infoSection.appendChild(infoH1)
    infoSection.appendChild(desP)
    homeDiv.appendChild(infoSection)

    pageContent.appendChild(homeDiv)
    content.append(pageContent)
}

export default createHome;