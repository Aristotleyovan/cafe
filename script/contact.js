  (function () {
    emailjs.init("XDc0t3xs6NlFZ53A6");
  })();

   function sendMail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_pgbwuz3",
        "template_zups5x8",
        event.target
      )
      .then(
        function () {
          alert("Message sent successfully!");
          event.target.reset();
        },
        function (error) {
          alert("Failed to send message");
          console.error(error);
        }
      );
    }

      function button(){
    window.location.href="./pages/contact.html";
  }