
document.addEventListener('DOMContentLoaded', function () {

    const toggler = document.getElementById('navbar-toggler');
    const menu = document.getElementById('navbarCollapse');
    
    if (toggler && menu) {
      toggler.addEventListener('click', function () {
        menu.classList.toggle('show');
      });
    }


    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (cookieBanner && acceptBtn && declineBtn) {
      const cookiesAccepted = localStorage.getItem("cookiesAccepted");
      const cookiesDeclined = localStorage.getItem("cookiesDeclined");

      if (!cookiesAccepted && !cookiesDeclined) {
        cookieBanner.style.display = "flex";
      }

      acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
      });

      declineBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesDeclined", "true");
        cookieBanner.style.display = "none";
      });
    }
  });

