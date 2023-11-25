import { loadData, saveFocusNotice } from "./app.js";

const container = document.getElementById('container');

const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let title = form['title'].value;
    let desc = form['desc'].value;
    let image = form['image'].value;
    let link = form['link'].value;

    try {
        await saveFocusNotice(title, desc, image, link);
        form.reset();
        alert('SUCESSO! Notícia enviada com sucesso.');
    } catch(error) {
        console.log(error);
    }
})

window.addEventListener('DOMContentLoaded', async (e) => {
    loadData((querySnapshot) => {
        container.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();
            console.log(task);

            container.innerHTML += `
    <tr>
      <td>${task.name}</td>
      <td>${task.phone}</td>
      <td>${task.email}</td>
      <td>${task.address}</td>
    </tr>
            `
        });
    });
});