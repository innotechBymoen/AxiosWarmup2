function api_one_success(response) {
    let advice_container = document.querySelector(`#advice_container`);
    advice_container.insertAdjacentHTML(`beforeend`, `<p>${response[`data`][`slip`][`advice`]}</p>`);
}

function api_one_failure(error) {
    let advice_container = document.querySelector(`#advice_container`);
    advice_container[`innerHTML`] = `<p>Sorry, something has gone wrong. Please try agan</p>`;
}

function api_two_success(response) {
    let svg_container = document.querySelector(`#svg_container`);
    svg_container.insertAdjacentHTML(`beforeend`, `<div>${response[`data`][`svg`]}</div>`);
}

function api_two_failure(error) {
    let svg_container = document.querySelector(`#svg_container`);
    svg_container[`innerHTML`] = `<p>Sorry, something has gone wrong. Please try agan</p>`;
}

function call_api_one(details) {
    axios.request({
        url: `https://api.adviceslip.com/advice`
    }).then(api_one_success).catch(api_one_failure);
}

function call_api_two(details) {
    axios.request({
        url: `https://api.dicebear.com/6.x/pixel-art/json`
    }).then(api_two_success).catch(api_two_failure);
}

let button_one = document.querySelector(`#button_one`);
let button_two = document.querySelector(`#button_two`);

button_one.addEventListener(`click`, call_api_one);
button_two.addEventListener(`click`, call_api_two);