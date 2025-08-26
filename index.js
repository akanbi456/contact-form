
   function submitForm(event) {
            event.preventDefault(); 

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("address").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            if (name && email && address && subject && message) {
                alert("✅ Your form has been submitted successfully!");
                document.getElementById("contactForm").reset();
            } else {
                alert("⚠️ Please fill in all fields before submitting.");
            }
        }