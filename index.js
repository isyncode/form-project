let form_element = document.getElementById('login-form')
let main_container = document.querySelector('.main-container')
let modal_object = document.getElementById('modal')
let modal_button_object = document.getElementById('modal-button')

form_element.addEventListener('submit', submit_login_data)
modal_button_object.addEventListener('click', modal_button)

async function submit_login_data(event) {
    event.preventDefault()

    const formData = new FormData(this)

    try {
        const options = {
            method: "POST",
            body: formData
        };

        const response = await fetch('/login', options);

        if (!response.ok) {
            throw new Error('Server Error')
        }

        const responseData = await response.json();

        if (responseData.Login) {
            modal_object.classList.remove('hidden')
            document.getElementById('modal-screen').classList.add('opacity-50')
        }
    } catch (error) {
        console.error('Error:', error.message)
    }
}

function modal_button() {
    modal_object.classList.add('hidden')
    document.getElementById('modal-screen').classList.remove('opacity-50')
}