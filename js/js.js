document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    const button = document.getElementById('clicker');
    const display = document.getElementById('counter');
    const message = document.getElementById('finish');

    button.addEventListener('click', function () {
      count++;
      display.textContent = count;

      if (count >= 15) {
        button.style.backgroundColor = "#ffffff";
        button.disabled = true;
        message.textContent = "NO MORE CLICK";
      }
    });
  });