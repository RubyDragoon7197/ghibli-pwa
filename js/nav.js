function setActiveButton(id) {
  const buttons = document.querySelectorAll('.c-nav-item');
  buttons.forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(id);
  if (activeBtn) activeBtn.classList.add('active');
}
