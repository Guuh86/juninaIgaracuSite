import { loadNormalNotice } from "./app.js";

const content = document.getElementById('content');

window.addEventListener('DOMContentLoaded', async (e) => {
    loadNormalNotice((querySnapshot) => {
        content.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();

            content.innerHTML += `
            <div class="swiper-slide">
                <div class="card">
                    <img class="image-card" src="${task.image}" style="width:100%">
                        <div class="cont">
                            <h4 class="title-card">
                                ${task.title}
                            </h4>
                            <p class="desc-card">
                                ${task.desc}
                            </p>
                        </div>
                </div>
            </div>
            `
        });
    });
});