const createContact = () => {
    const content = document.getElementById('content');

    const pageContent = document.createElement('div')
    pageContent.classList.add('pageContent')

    // Create the contact heading
    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact Us';
    pageContent.appendChild(contactHeading);

    // Create a form for contact information
    const contactForm = document.createElement('form');

    // Create input fields for name, email, and message
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.name = 'message';
    messageTextarea.rows = 4;
    messageTextarea.required = true;

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    // Append input fields and button to the form
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageTextarea);
    contactForm.appendChild(submitButton);

    // Append the form to the content div
    pageContent.appendChild(contactForm);
    content.appendChild(pageContent)

}

export default createContact