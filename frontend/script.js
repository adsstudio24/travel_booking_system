async function bookTrip() {
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    const response = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination, date })
    });

    const data = await response.json();
    alert(data.message);
    getBookings();
}

async function getBookings() {
    const response = await fetch("http://localhost:5000/bookings");
    const bookings = await response.json();
    const list = document.getElementById("bookings");
    list.innerHTML = "";
    bookings.forEach(b => {
        const li = document.createElement("li");
        li.innerText = `${b.destination} - ${b.date}`;
        list.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", getBookings);
