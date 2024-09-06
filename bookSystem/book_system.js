// Create empty books array
let books = [];

// Function to add form data to books array
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    // Check that all fields contain data
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // Create object from form data
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        // Add object to books array
        books.push(book);
        showbooks();
        clearInputs();
    // If field is missing entry, show alert
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Updates the booksDiv element with the books array data
function showbooks() {
    const booksDiv = books.map((book, index) => `<h3>Book Number: ${index + 1}</h3>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="deleteBook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Clear form input
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// Delete the selected entry
function deleteBook(index) {
    books.splice(index, 1);
    showbooks();
}