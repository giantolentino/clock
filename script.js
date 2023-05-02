function updateTime() {
  const hour = document.querySelector('.hour');
  const mins = document.querySelector('.mins');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  hour.textContent = hours;
  mins.textContent = minutes;
}

updateTime();
setInterval(updateTime, 1000);
