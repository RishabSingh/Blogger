function toggleVisibility() {
    var div = document.getElementById("myModal");
    div.classList.remove("hidden"); // Display the modal

    // Hide the modal after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        div.classList.add("hidden");
    }, 1000);
}

// Call the toggleVisibility function to show the modal
toggleVisibility();




