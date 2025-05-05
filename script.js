// 🌓 สร้างปุ่มสลับธีมแบบ Dynamic พร้อมไอคอน
function createThemeToggleButton() {
  if (document.querySelector('.theme-toggle')) return;

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.setAttribute('aria-label', 'สลับโหมดกลางวัน/กลางคืน');
  toggleBtn.innerHTML = '<span class="icon">🌞</span>'; // ค่าเริ่มต้นเป็นแสง
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => toggleTheme(toggleBtn));
  return toggleBtn;
}

// 🎯 อัปเดตไอคอนและ label ตามสถานะธีม
function updateIconAndLabel(button) {
  const isDark = document.body.classList.contains('dark');
  const icon = button.querySelector('.icon');
  icon.textContent = isDark ? '🌙' : '🌞';
  button.setAttribute('aria-label', isDark ? 'สลับเป็นโหมดกลางวัน' : 'สลับเป็นโหมดกลางคืน');
}

// 🔁 สลับธีม + บันทึก + เอฟเฟกต์
function toggleTheme(button) {
  const isDarkNow = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');

  updateIconAndLabel(button);

  // 💫 เพิ่มแอนิเมชันหมุน
  button.classList.add('rotating');
  setTimeout(() => button.classList.remove('rotating'), 500);
}

// 🚀 เริ่มต้น: โหลดธีมจาก localStorage + สร้างปุ่ม
(function initThemeToggle() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  const btn = createThemeToggleButton();
  if (btn) updateIconAndLabel(btn); // ตั้งค่า icon/label ตามธีม
})();
