const elForm = document.querySelector(".js-form");
const elList = document.querySelector(".div-list");
const elName = document.querySelector(".js-input");
const elRelation = document.querySelector(".js-input-two");
const elNumber = document.querySelector(".js-input-contact");

const array = []

function renderArray(todo) {
    elList.innerHTML = `
                <h2 class="form-title">Contacts</h2>
                <div class="card p-3">
                    <h3 class="card-title">Lorem, ipsum dolor.</h3>
                    <p class="card-text">Qarindosh</p>
                    <a class="card-tel" href="tel:+998902483105">+998 90 248 31 05</a>
                </div>`;
    for (let i = 0; i < todo.length; i++) {
        const elDiv = document.createElement("div")
        elDiv.className += "card p-3 my-3";
        elDiv.innerHTML += `<h3 class="card-title">${todo[i].split(" ")[0]}</h3>
        <p class="card-text">${todo[i].split(" ")[1]}</p>
        <a class="card-tel" href="tel:${todo[i].split(" ")[2]}">${todo[i].split(" ")[2]}</a>
        `
        elList.appendChild(elDiv);
    }
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    array.push(`${elName.value} ${elRelation.value} ${elNumber.value}`);
    renderArray(array);
    elForm.reset();
}); 
