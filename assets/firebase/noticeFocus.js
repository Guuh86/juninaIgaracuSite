import { loadFocusNotice } from "./app.js";

const focusNotice = document.getElementById('focus-notice');

window.addEventListener('DOMContentLoaded', async (e) => {
    loadFocusNotice((querySnapshot) => {
        focusNotice.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();

            focusNotice.innerHTML += `
            <li>
                <img class="image-notice-focus" src="${task.image}" alt="">
                    <div class="text">
                        <h4>${task.title}</h4>
                            <p>
                                ${task.desc}
                                    - <a href="${task.link}">Sabia mais...</a>
                            </p>
                    </div>
            </li>
            `
        });
    });
});