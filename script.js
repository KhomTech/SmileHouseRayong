// ตรวจสอบว่า DOM โหลดครบก่อน 
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  // ถ้ามีการบันทึกธีมไว้ใน localStorage
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // เมื่อคลิกปุ่มเปลี่ยนธีม
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // บันทึกสถานะธีมไว้
  });

  // -------------------------------
  // ระบบคลิกขยายภาพบ้าน (Zoom Modal)
  // -------------------------------
// script.js

function openModal(title, imgSrc) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');

  modal.style.display = 'flex';
  modalImg.src = imgSrc;
  modalTitle.textContent = title;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

