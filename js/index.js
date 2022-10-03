'use strict'

const listRestaurats = async () => {
    const response = await fetch('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json');
    const restaurants = await response.json();

    let tableBody = ``;
    restaurants.forEach((restaurant, index)=> {
        tableBody += `<tr>
        <td>${restaurant.name}</td>
        <td>${restaurant.rating}</td>
        <td>${restaurant.contact}</td>
        <td>${restaurant.address}</td>
        </tr>`
    });
    tableBody_Restaurant.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listRestaurats();
});