document.getElementById('signInBtn').addEventListener('click', function () {
    document.getElementById('signInForm').classList.remove('hidden');
    document.getElementById('signUpForm').classList.add('hidden');
    document.getElementById('welcomeMessage').classList.add('hidden');
});

document.getElementById('signUpBtn').addEventListener('click', function () {
    document.getElementById('signUpForm').classList.remove('hidden');
    document.getElementById('signInForm').classList.add('hidden');
    document.getElementById('welcomeMessage').classList.add('hidden');
});

document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Form Validation
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username) {
        alert("Please enter a username!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // If validation passes, show welcome message
    document.getElementById('welcomeMessage').innerText = `Welcome to AI-CropTECH, ${username}! You have successfully signed up.`;
    document.getElementById('welcomeMessage').classList.remove('hidden');
    document.getElementById('signUpForm').classList.add('hidden');
});

// Background movement effect
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const moveX = (clientX / window.innerWidth) * 50 - 25; // Adjust movement range
    const moveY = (clientY / window.innerHeight) * 50 - 25; // Adjust movement range
    document.body.style.setProperty('--move-x', `${moveX}px`);
    document.body.style.setProperty('--move-y', `${moveY}px`);

    // Update the background position with mouse movement
    document.querySelector('body::before').style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Learn More button functionality
document.getElementById('learnMoreBtn').addEventListener('click', function () {
    alert("Learn more about AI-CropTECH's advanced AI solutions for farming!");
});




