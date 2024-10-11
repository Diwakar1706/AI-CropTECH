function changeLanguage() {
    const language = document.getElementById('languageSelect').value;
    alert(`Language changed to: ${language}`);
    // Add logic to change language dynamically based on selection
}

// Accessing camera and capturing photo
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const capturedImages = document.getElementById('capturedImages');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing camera: ", err);
    });

function capturePhoto() {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/png');

    // Create a new image element and add it to the gallery
    const img = document.createElement('img');
    img.src = dataUrl;
    capturedImages.appendChild(img);

    // Optionally, call a function to analyze the captured image
    getCropDetails(dataUrl);
}

// Dummy function to fetch crop details
function getCropDetails(imageData) {
    document.getElementById('cropInfo').innerText = "Fetching crop details...";
    // Implement image processing or API call for crop details
    setTimeout(() => {
        document.getElementById('cropInfo').innerText = "This crop looks infacted and suffering from crop diseases";
    }, 2000);
}

// Function to fetch and display symptoms
function getSymptoms() {
    document.getElementById('cropInfo').innerText = "Fetching symptoms...";
    const symptomGallery = document.getElementById('symptomImages');
    symptomGallery.innerHTML = ''; // Clear previous images

    // Dummy data - Replace with actual logic or API call
    const symptoms = [
        { src: 'plantdis.jpg', description: 'Yellowing leaves due to nutrient deficiency.' },
        { src: 'plantdis2.jpg', description: 'Fungal infection spots on leaves.' }
    ];

    symptoms.forEach(symptom => {
        const img = document.createElement('img');
        img.src = symptom.src;
        img.alt = symptom.description;
        img.title = symptom.description;
        symptomGallery.appendChild(img);
    });

    setTimeout(() => {
        document.getElementById('cropInfo').innerText = "Symptoms displayed.";
    }, 2000);
}

// Function to fetch and display precautions
function getPrecautions() {
    document.getElementById('cropInfo').innerText = "Fetching precautions...";
    const precautionGallery = document.getElementById('precautionImages');
    precautionGallery.innerHTML = ''; // Clear previous images

    // Dummy data - Replace with actual logic or API call
    const precautions = [
        { src: 'plantpre3.jpg', description: 'Proper irrigation methods.' },
        { src: 'plantpre2.jpg', description: 'Use of protective gear when spraying pesticides.' }
    ];

    precautions.forEach(precaution => {
        const img = document.createElement('img');
        img.src = precaution.src;
        img.alt = precaution.description;
        img.title = precaution.description;
        precautionGallery.appendChild(img);
    });

    setTimeout(() => {
        document.getElementById('cropInfo').innerText = "Precautions displayed.";
    }, 2000);
}

// Display products in the online store
const storeItems = [
    { name: "Pesticide A", price: "Rs20", description: "Effective against common pests." },
    { name: "Fertilizer B", price: "Rs15", description: "Enhances crop growth." },
    { name: "Herbicide C", price: "Rs25", description: "Controls unwanted weeds." }
];

function displayStoreItems() {
    const storeList = document.getElementById('storeItems');
    storeItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${item.name}</strong><br>
            Price: ${item.price}<br>
            ${item.description}<br>
            <button onclick="purchaseItem('${item.name}')">Buy Now</button>
        `;
        storeList.appendChild(li);
    });
}

function purchaseItem(itemName) {
    alert(`Purchased ${itemName}`);
}

// Video conferencing setup
function startVideoCall() {
    const container = document.getElementById('videoCallContainer');
    container.style.display = 'block';
    // Placeholder: Implement a real video conferencing integration
    container.innerHTML = "<p>Video call started! (Demo mode)</p>";
}

// Initialize store items on page load
window.onload = () => {
    displayStoreItems();
};

