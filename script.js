// 🌓 สร้างปุ่มสลับธีมแบบ Dynamic พร้อมไอคอน
function createThemeToggleButton() {
  if (document.querySelector('.theme-toggle')) return; // ป้องกันสร้างซ้ำ

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.setAttribute('aria-label', 'สลับโหมดกลางวัน/กลางคืน');
  toggleBtn.innerHTML = '<span class="icon">🌞</span>';
  document.body.appendChild(toggleBtn);

  // 🖱️ ผูก event
  toggleBtn.addEventListener('click', () => toggleTheme(toggleBtn));

  return toggleBtn;
}

// 🎯 อัปเดตไอคอนและ label ตามธีม
function updateIconAndLabel(button) {
  const isDark = document.body.classList.contains('dark');
  const icon = button.querySelector('.icon');
  icon.textContent = isDark ? '🌙' : '🌞';
  button.setAttribute('aria-label', isDark ? 'สลับเป็นโหมดกลางวัน' : 'สลับเป็นโหมดกลางคืน');
}

// 🔁 สลับธีม + บันทึก + เอฟเฟกต์
function toggleTheme(button) {
  document.body.classList.toggle('dark');
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  updateIconAndLabel(button);

  // 💫 เอฟเฟกต์
  button.classList.add('rotating');
  setTimeout(() => button.classList.remove('rotating'), 500);
}

// 🚀 เริ่มต้นโหลดหน้า
(function initThemeToggle() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  const btn = createThemeToggleButton();
  if (btn) updateIconAndLabel(btn); // ตั้งค่าเริ่มต้น
})();
