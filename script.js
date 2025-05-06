// scripts.js
// เทพนักพัฒนาเว็บไซต์: ควบคุม Modal, Dark Mode, และความลื่นไหลทั้งหมด

// =============== Hamburger Menu (มือถือ) ===============
const menuToggle = document.getElementById("menuToggle"); // ปุ่ม hamburger
const mainNav = document.getElementById("mainNav");       // เมนูหลักที่ซ่อนได้

// เมื่อผู้ใช้คลิกปุ่ม hamburger
menuToggle?.addEventListener("click", () => {
  // สลับ class "open" ให้กับเมนู เพื่อแสดง/ซ่อน (ใช้ใน CSS ควบคุมการแสดงผล)
  mainNav.classList.toggle("open");

  // สลับ icon ระหว่าง fa-bars กับ fa-times เพื่อให้ดูเปลี่ยนจาก "≡" เป็น "×"
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// =============== เปิด/ปิด Modal ===============
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

// ปุ่มทั้งหมดที่มี class="open-modal"
const openModalButtons = document.querySelectorAll('.open-modal');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imageSrc = button.getAttribute('data-image');
    const description = button.getAttribute('data-description');

    // ใส่เนื้อหา modal ใหม่ทุกครั้ง
    modalContent.innerHTML = `
      <span class="modal-close">&times;</span>
      <img src="${imageSrc}" alt="ภาพบ้าน" style="border-radius:12px; max-height:300px; margin-bottom: 20px;">
      <p style="font-size: 16px; color: #2c3e50;">${description}</p>
    `;

    // กำหนดให้ปุ่มปิดทำงานใหม่
    document.querySelector('.modal-close').onclick = () => modal.style.display = 'none';

    modal.style.display = 'block';
  });
});

// ถ้าคลิกนอก modal ให้ปิดได้
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// =============== Dark Mode Toggle ===============
const toggle = document.querySelector('#dark-toggle');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // เก็บสถานะไว้ใน localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// โหลดสถานะ dark mode จาก localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// =============== Smooth Scroll (Optional) ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
