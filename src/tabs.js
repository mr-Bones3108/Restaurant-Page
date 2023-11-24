import createMenu from "./menu"
import createHome from "./home"
import createContact from "./contact"

const createTabs = ()=>{
    const content = document.getElementById('content')
    
    const navBar = document.createElement('div')
    navBar.classList.add('navbar')

    //for logo
    const logoDiv = document.createElement('div')
    logoDiv.classList.add('logo');

    const logoH1 = document.createElement('h1')
    logoH1.innerText = 'Fatti `a Mano'

    logoDiv.appendChild(logoH1)
    navBar.appendChild(logoDiv)

    //for menu items
    const navMenu = document.createElement('div');
    navMenu.classList.add('nav-item');

    const ulElement = document.createElement('ul');
    const homeLi = document.createElement('li');
    homeLi.textContent = 'Home';
    const menuLi = document.createElement('li');
    menuLi.textContent = 'Menu';
    const contactLi = document.createElement('li');
    contactLi.textContent = 'Contact';

    homeLi.addEventListener('click', ()=>{
        clearContent()
        createHome()
    })

    menuLi.addEventListener('click', ()=>{
        clearContent()
        createMenu()
    })

    contactLi.addEventListener('click',()=>{
        clearContent()
        createContact()
    })


    ulElement.appendChild(homeLi);
    ulElement.appendChild(menuLi);
    ulElement.appendChild(contactLi);     

    navMenu.appendChild(ulElement);
    navBar.appendChild(navMenu)

    content.appendChild(navBar)
}

const clearContent = ()=>{
    const content = document.querySelector("#content")
    const pageContent = document.querySelector('.pageContent')
    if(pageContent){
        content.removeChild(pageContent);
    }
}

export default createTabs;

