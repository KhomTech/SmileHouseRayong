// รอให้หน้าเว็บโหลดเสร็จก่อนจึงค่อยทำงาน
document.addEventListener('DOMContentLoaded', function () {
  
  // เลือกปุ่ม toggle ธีมจากคลาส .theme-toggle
  const toggleButton = document.querySelector('.theme-toggle');

  // ตรวจสอบว่าผู้ใช้เคยเลือกธีมไว้ใน Local Storage หรือไม่
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // เมื่อคลิกปุ่ม toggle
  toggleButton.addEventListener('click', function () {
    // อ่านธีมปัจจุบันจาก <html data-theme="...">
    const currentTheme = document.documentElement.getAttribute('data-theme');

    // ถ้าเป็น dark อยู่ ให้เปลี่ยนเป็น light
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); // บันทึกธีมไว้
    } else {
      // ถ้าเป็น light หรือไม่มีธีมเลย ให้เปลี่ยนเป็น dark
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); // บันทึกธีมไว้
    }
  });
