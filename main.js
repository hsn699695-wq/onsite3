function form() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('Subject').value;
    let Message = document.getElementById('Message').value;
    if (name === "" || email === "" || subject === "" || Message === "") {
        alert("enter all information");
    }
    if (name.length < 3 || name.length > 15) {
        alert("Name must be between 3 and 15 ");
    }
    if (subject.length < 3) {
        alert("enter a valid subject"); 
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("enter a valid email"); 
    }
}
