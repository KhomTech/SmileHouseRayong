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
  const zoomableImages = document.querySelectorAll('.zoomable-img'); // รูปที่คลิกได้
  const zoomModal = document.getElementById('zoomModal'); // กล่อง modal
  const zoomImage = document.getElementById('zoomImage'); // รูปที่แสดงตอนขยาย

  // เมื่อคลิกภาพใดๆ
  zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
      zoomImage.src = img.src; // โหลด src ของภาพนั้นลง modal
      zoomModal.style.display = 'flex'; // แสดง modal แบบ flex
    });
  });

  // เมื่อคลิกที่ modal ให้ปิดภาพ
  zoomModal.addEventListener('click', () => {
    zoomModal.style.display = 'none'; // ซ่อน modal
    zoomImage.src = ''; // ล้าง src
  });
});
