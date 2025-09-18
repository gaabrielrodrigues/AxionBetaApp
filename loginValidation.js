const form = document.getElementById("form")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if (email === "gabriel@gmail.com" && password === "1234") {
        window.location.href = "../Dashboard/dashboard.html"
    } else {
        const toast = document.getElementById("toastNotification");
        toast.classList.add("show");
        setTimeout(function() {
          toast.classList.remove("show");
        }, 3000);
    }
})
