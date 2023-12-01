import { loadNormalNotice } from "./app.js";

const content = document.getElementById('content');

window.addEventListener('DOMContentLoaded', async (e) => {
    loadNormalNotice((querySnapshot) => {
        content.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();

            content.innerHTML += `
            <tr>
            <td>${task.title}</td>
            <td>${task.desc}</td>
            <td><a href="${task.link}">Saiba Mais...</a></td>
            </tr>
            `
        });
    });
});