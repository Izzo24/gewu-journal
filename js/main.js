(function () {
  "use strict";
  // mobile nav toggle
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }
  // demo subscribe form
  var form = document.getElementById("subForm");
  if (form) {
    var note = document.getElementById("formNote");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email");
      if (!email.value || email.value.indexOf("@") === -1) {
        note.textContent = "請輸入有效的電子郵件地址。";
        note.style.color = "#E4351F";
        email.focus();
        return;
      }
      form.reset();
      note.textContent = "感謝訂閱!這是示範表單,實際上不會寄送任何郵件。";
      note.style.color = "#16140F";
    });
  }
})();
