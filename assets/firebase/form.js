import { saveData, loadData } from "./app.js";

const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let name = form['name'].value;
    let phone = form['phone'].value;
    let email = form['email'].value;
    let address = form['address'].value;

    try {
        await saveData(name, email, phone, address);
        form.reset();
        alert('SUCESSO! Formulário Enviado.');
    } catch(error) {
        console.log(error);
    }
})