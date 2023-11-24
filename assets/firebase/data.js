import { loadData } from "./app.js";

const container = document.getElementById('container');

window.addEventListener('DOMContentLoaded', async (e) => {
    loadData((querySnapshot) => {
        container.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();
            console.log(task);

            container.innerHTML += `
            <div class="card card-body mt-2 border-primary">
            <h3 class="h5">${task.name}</h3>
            <h3 class="h5">${task.phone}</h3>
            <h3 class="h5">${task.email}</h3>
            <h3 class="h5">${task.address}</h3>
            </div>
            `
        });
    });
});