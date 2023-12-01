import { loadData, saveFocusNotice, saveNormalNotice, loadNormalNotice } from "./app.js";

const container = document.getElementById('container');

const form = document.getElementById('form');
const formCard = document.getElementById('form-card');
const content = document.getElementById('content');

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
    } catch (error) {
        console.log(error);
    }
});

formCard.addEventListener('submit', async (e) => {
    e.preventDefault();

    let title = formCard['title'].value;
    let desc = formCard['desc'].value;
    let image = formCard['image'].value;
    let link = formCard['link'].value;

    try {
        await saveNormalNotice(title, desc, image, link);
        form.reset();
        alert('SUCESSO! Notícia enviada com sucesso.');
    } catch (error) {
        console.log(error);
    }
});

window.addEventListener('DOMContentLoaded', async (e) => {
    loadData((querySnapshot) => {
        container.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();

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

window.addEventListener('DOMContentLoaded', async (e) => {
    loadNormalNotice((querySnapshot) => {
        content.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();

            content.innerHTML += `
            <div class="row">
            <div class="cell" data-title="Name">
                ${task.title}
            </div>
            <div class="cell" data-title="Age">
                ${task.desc}
            </div>
            <div class="cell" data-title="Occupation">
                <a href="${task.link}"></a>
            </div>
        </div>
            `
        });
    });
});
