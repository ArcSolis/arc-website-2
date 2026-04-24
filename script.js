document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  var yearSpan = document.getElementById("year");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll("[data-scroll-to]").forEach(function (button) {
    button.addEventListener("click", function () {
      var targetSelector = button.getAttribute("data-scroll-to");
      var target = document.querySelector(targetSelector);
      if (!target) {
        return;
      }
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: "smooth",
      });
    });
  });

  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");

    if (!question || !answer) {
      return;
    }

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      faqItems.forEach(function (other) {
        other.classList.remove("open");
        var btn = other.querySelector(".faq-question");
        if (btn) {
          btn.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        item.classList.add("open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
});
