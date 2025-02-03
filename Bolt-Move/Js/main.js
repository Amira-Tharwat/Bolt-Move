function togglePassword() {
    var passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
document.getElementById('merchantForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actual submission

    // Here you would typically collect the form data and send it to a server
    // For this example, let's just log the data to the console
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    console.log(data);

    // You can add validation, AJAX requests, or other logic here
});


// Toggle normal shipping select based on radio button selection
const normalShippingRadio = document.getElementById('normalShipping');
const normalShippingSelect = document.getElementById('normalShippingSelect');

normalShippingRadio.addEventListener('change', function() {
    normalShippingSelect.disabled = !this.checked;
});

// Disable normal shipping select by default if "special" is not selected
normalShippingSelect.disabled = !normalShippingRadio.checked;


var habiby =document.getElementById("habiby")
var normalShipping=document.getElementById("normalShipping")
var specialShipping=document.getElementById("specialShipping")

normalShipping.addEventListener("click" , ()=>{
    habiby.classList.remove("able")
    habiby.classList.add("disable")
})

specialShipping.addEventListener("click" , ()=>{
    habiby.classList.add("able")
    habiby.classList.remove("disable")
})


