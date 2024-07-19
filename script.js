console.log("hell ");

const url = "https://estate-db.vercel.app/property";

fetch(url)
	.then((res) => res.json())
	.then((propertys) => propertys.map((property) => renderProperty(property)));

// creating a single property div
const renderProperty = (property) => {
	const rent = document.querySelector(".rental");

	const divCard = document.createElement("div");
	divCard.className = "divCard";

	const details = `
    <div class="property-container">
        <h1> <i class="fa-solid fa-location-dot"></i> :  ${property.title} </h1>
        <h3> <i class="fa-solid fa-money-bill"></i> : ${property.deal} </h3>
        <h3> <i class="fa-solid fa-house-user"></i> : ${property.type} </h3>
        <h3>  <i class="fa-solid fa-bed"></i> : ${property.rooms} </h3>
        <h3> <i class="fa-solid fa-sack-dollar"></i> :  ${property.price} </h3>        
        <div class="imageDiv">
            <img src=${property.photo} alt="${property.title}">
        </div>
    </div>
    `;
	divCard.innerHTML = details;

	rent.appendChild(divCard);
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	// prevent Form from loading
	event.preventDefault();
	console.log(event);

	//Getting form inputs
	const name = document.querySelector("#rentalName").value;
	const deal = document.querySelector("#rentalDeal").value;
	const type = document.querySelector("#rentalType").value;
	const rooms = document.querySelector("#rentalRooms").value;
	const district = document.querySelector("#rentalDistrict").value;
	const price = document.querySelector("#rentalPrice").value;
	const photoUrl = document.querySelector("#rentalPhoto").value;

	const formData = {
		title: name,
		deal: deal,
		type: type,
		rooms: rooms,
		district: district,
		price: price,
		photo: photoUrl,
	};
	console.log(formData);

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(formData),
	})
		.then((res) => res.json())
		.then((property) => renderProperty(property));
	form.reset();
	// Reload the page after a short delay to allow rendering the new property
	// setTimeout(() => {
	// 	location.reload();
	// }, 1000);
});
// Show the form when the landlord button is clicked
document.addEventListener("DOMContentLoaded", () => {
	const landlordButton = document.getElementById("landlordButton");
	const landLordForm = document.getElementById("landLordForm");

	landlordButton.addEventListener("click", () => {
		landLordForm.style.display = "block"; // Show the form
	});
});

// Navbar For mobile
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
	const hamIcon = document.querySelector(".hamburger-icon");
	const crossIcon = document.querySelector(".cross-icon");
	if (hamIcon.style.display === "none") {
		hamIcon.style.display = "inline-block";
		crossIcon.style.display = "none";
		menu.style.display = "none";
	} else {
		hamIcon.style.display = "none";
		crossIcon.style.display = "inline-block";
		menu.style.display = "block";
	}
});

document.add;
