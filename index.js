const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    

    
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }

    
    alert('Thank you for your submission!');
    form.reset(); // reset form
});

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'red';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = ''; 
});
