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
});
