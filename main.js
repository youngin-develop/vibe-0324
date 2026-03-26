document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('partnership-form');
  const submitBtn = form.querySelector('.submit-btn');

  form.addEventListener('submit', () => {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>처리 중...</span> <span class="loading-spinner">⌛</span>`;
  });
});
