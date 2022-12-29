
      function revealRight() {
        var reveals = document.querySelectorAll(".revealright");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("on");
          } else {
            reveals[i].classList.remove("on");
          }
        }
      }

      function revealLeft() {
        var reveals = document.querySelectorAll(".revealleft");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("on");
          } else {
            reveals[i].classList.remove("on");
          }
        }
      }

      function revealDown() {
        var reveals = document.querySelectorAll(".revealdown");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("on");
          } else {
            reveals[i].classList.remove("on");
          }
        }
      }

      function revealUp() {
        var reveals = document.querySelectorAll(".revealup");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("on");
          } else {
            reveals[i].classList.remove("on");
          }
        }
      }

      

      window.addEventListener("scroll", revealRight);
      window.addEventListener("scroll", revealLeft);
      window.addEventListener("scroll", revealDown);
      window.addEventListener("scroll", revealUp);