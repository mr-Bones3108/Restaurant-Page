const createContact = () => {
    const content = document.getElementById('content');

    const pageContent = document.createElement('div')
    pageContent.classList.add('pageContent')

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-c')

    // Create the contact heading
    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact Us';
    // contactHeading.classList.add('')
    contactContainer.appendChild(contactHeading);

    // Create a form for contact information
    const contactForm = document.createElement('form');

    const nameForm = document.createElement('div')
    nameForm.classList.add('nameForm')

    // Create input fields for name, email, and message
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;

    const emailForm = document.createElement('div')
    emailForm.classList.add('emailForm')

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    const messageForm = document.createElement('div')
    messageForm.classList.add('messageLabel')

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.name = 'message';
    messageTextarea.rows = 4;
    messageTextarea.required = true;

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('btn-div')

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    // Append input fields and button to the form
    nameForm.appendChild(nameLabel)
    nameForm.appendChild(nameInput)
    contactForm.appendChild(nameForm);
    emailForm.appendChild(emailLabel)
    emailForm.appendChild(emailInput)
    contactForm.appendChild(emailForm)
    messageForm.appendChild(messageLabel)
    messageForm.appendChild(messageTextarea)
    contactForm.appendChild(messageForm)
    buttonDiv.appendChild(submitButton)
    contactForm.appendChild(buttonDiv);

    // Append the form to the content div
    contactContainer.appendChild(contactForm);
    pageContent.appendChild(contactContainer)
    content.appendChild(pageContent)

}

export default createContact