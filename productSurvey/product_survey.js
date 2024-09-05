function submitFeedback() {
    // Get values from form fields
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExperience = document.getElementById('userExperience').value;
    const warningText = 'Please enter '
    // Show alert
    if (username === '') {
        alert(warningText + 'name')
    } else {
        alert('Thank you for your valuable feedback')

        // Display submitted details
        document.getElementById('userName').innerHTML = username;
        document.getElementById('userAge').innerHTML = age;
        document.getElementById('userEmail').innerHTML = email;
        document.getElementById('userJob').innerHTML = job;
        document.getElementById('userDesignation').innerHTML = designation;
        document.getElementById('userProductChoice').innerHTML = productType;
        document.getElementById('userFeedback').innerHTML = feedback;
        document.getElementById('userUserExperience').innerHTML = userExperience;

        // Unhide the user detail display
        document.getElementById('userInfo').style.display = 'block';
    }
}

const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Add event listener
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});