console.log("hell ");
const url = "http://localhost:3000/property";

fetch(url)
	.then((res) => res.json())
	.then((propertys) => propertys.map((property) => renderProperty(property)));

// creating a single property div
const renderProperty = (property) => {
	const rent = document.querySelector(".rental");

	const divCard = document.createElement("div");
	divCard.className = "divCard";

	const details = `
    <div>
	  <h1>${property.title}</h1>
    <h3>${property.deal}</h3>
    <h3>${property.type}</h3>
    <h3>${property.rooms}</h3>
    <h3>KSH$${property.price}</h3>
    

        
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
});
// Show the form when the landlord button is clicked
document.addEventListener("DOMContentLoaded", () => {
	const landlordButton = document.getElementById("landlordButton");
	const landlordForm = document.getElementById("landlordForm");

	landlordButton.addEventListener("click", () => {
		landlordForm.style.display = "block"; // Show the form
	});
});
