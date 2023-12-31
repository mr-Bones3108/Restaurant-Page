const createMenu = ()=>{
    const content = document.getElementById('content');

    const pageContent = document.createElement('div')
    pageContent.classList.add('pageContent')

    const menuBox = document.createElement('div')
    menuBox.classList.add('menuBox')

    // Create the menu heading
const menuHeading = document.createElement('h1');
menuHeading.textContent = 'Food Menu';
menuHeading.classList.add('menu-h')
menuBox.appendChild(menuHeading);

// Create a container for menu items
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

// Sample menu items (you can add more as needed)
const menuItems = [
    { name: 'Pizza', price: '$10.99' },
    { name: 'Burger', price: '$8.99' },
    { name: 'Pasta', price: '$12.99' },
    { name: 'Lasagna', price: '$22.99'},
    { name: 'Risotto', price: '$16.99' },
    { name: 'Tiramisu', price: '$17.99' },
    // Add more items here
];

// Loop through menu items and create elements for each
menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h2');
    itemName.textContent = item.name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: ${item.price}`;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    menuContainer.appendChild(menuItem);
});

// Append the menu container to the content div
menuBox.appendChild(menuContainer);
pageContent.appendChild(menuBox)
content.appendChild(pageContent)

}

export default createMenu




