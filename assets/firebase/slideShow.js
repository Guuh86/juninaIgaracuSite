import { loadNormalNotice } from "./app.js";

const slide = document.getElementById('sld');

window.addEventListener('DOMContentLoaded', async (e) => {
    loadNormalNotice((querySnapshot) => {
        slide.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();

            slide.innerHTML += `
                    <div class="blog-slider__img">    
                        <img src="${task.image}" alt="">
                    </div>
                    <div class="blog-slider__content">
                        <span class="blog-slider__code">01 Janeiro 2024</span>
                        <div class="blog-slider__title">${task.title}</div>
                        <div class="blog-slider__text">${task.desc} </div>
                        <a href="${task.link}" class="blog-slider__button">READ MORE</a>
                    </div>    
            `
        });
    });
});