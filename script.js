// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to get query parameter from URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Sample events data
    const sampleEvents = [
        {
            name: "College Fair",
            date: "2023-12-01",
            time: "10:00 AM",
            location: "Main Auditorium"
        },
        {
            name: "Sports Day",
            date: "2023-12-05",
            time: "2:00 PM",
            location: "Sports Complex"
        },
        {
            name: "Coding Workshop",
            date: "2023-12-10",
            time: "3:30 PM",
            location: "Computer Lab"
        }
    ];

    // Get the event index from the query parameter
    const eventIndex = getQueryParam("event");

    // Display specific event details
    if (eventIndex !== null && eventIndex < sampleEvents.length) {
        const specificEvent = sampleEvents[eventIndex];

        document.getElementById("eventName").textContent = specificEvent.name;
        document.getElementById("eventDate").textContent = `Date: ${specificEvent.date}`;
        document.getElementById("eventTime").textContent = `Time: ${specificEvent.time}`;
        document.getElementById("eventLocation").textContent = `Location: ${specificEvent.location}`;
    } else {
        // Handle the case where the event index is invalid
        console.error("Invalid event index");
    }

    // Ensure that the events list is still displayed on the home page
    const eventList = document.getElementById("eventList");

    // Add sample events to the list
    sampleEvents.forEach((event, index) => {
        const eventItem = document.createElement("li");
        eventItem.classList.add("event-item");
        eventItem.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Time: ${event.time}</p>
            <p>Location: ${event.location}</p>
        `;

        // Add a click event listener to each event item
        eventItem.addEventListener("click", () => {
            // Redirect to the event page with the specific event details
            window.location.href = `event.html?event=${index}`;
        });

        eventList.appendChild(eventItem);
    });
});
