
function showAlert() {
    // Membuat elemen div untuk overlay
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    // Membuat elemen div untuk kotak alert
    var alertBox = document.createElement('div');
    alertBox.style.backgroundColor = '#fff';
    alertBox.style.padding = '20px';
    alertBox.style.borderRadius = '10px';
    alertBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    alertBox.style.maxWidth = '400px';

    // Membuat teks pesan alert
    var message = document.createElement('p');
    message.textContent = 'Hallo aku ada pantun dikit nih. Buah mangis, buah kedongdong, hai manis, senyum dikit dong :)';

    // Membuat tombol close
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.backgroundColor = '#red';
    closeButton.style.color = 'black';
    closeButton.style.border = 'none';
    closeButton.style.padding = '10px 20px';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.marginTop = '10px';
    closeButton.style.transition = 'background-color 0.3s ease';
    closeButton.onclick = function() {
        document.body.removeChild(overlay);
    };

    // Menambahkan elemen ke dalam alertBox
    alertBox.appendChild(message);
    alertBox.appendChild(closeButton);

    // Menambahkan alertBox ke dalam overlay
    overlay.appendChild(alertBox);

    // Menambahkan overlay ke dalam body
    document.body.appendChild(overlay);
}

function updateRealTime() {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("real-time").innerHTML = "Jam: " + time;
    setTimeout(updateRealTime, 1000); // Update every second
}

// Function to display greeting based on time of the day
function displayGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var greeting = "";
    if (hour < 12) {
        greeting = "Ngopi!";
    } else if (hour < 18) {
        greeting = "Makan!";
    } else {
        greeting = "Tidur!";
    }
    document.getElementById("greeting").innerHTML = greeting;
}

// Call the functions when the page loads
updateRealTime();
displayGreeting();

