const btn = document.getElementById("theme-toggle");
 
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    btn.addEventListener("click", function () {
      if (prefersDarkScheme.matches) {
        
        document.body.classList.toggle("force-light");
        document.body.classList.remove("force-dark");
      } else {
        document.body.classList.toggle("force-dark");
        document.body.classList.remove("force-light");
      }
    });