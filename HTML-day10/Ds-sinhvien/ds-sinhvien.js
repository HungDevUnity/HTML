const map = {
  'Họ tên': 'ho-ten',
  'Ngày sinh': 'ngay-sinh',
  'Nghề nghiệp': 'nghe-nghiep',
  'Mục tiêu nghề nghiệp trong tương lai': 'muc-tieu'
};

document.querySelectorAll('p, div, span, li').forEach(el => {
  const text = el.textContent.trim();
  for (const label in map) {
    if (text.startsWith(label)) {
      el.classList.add(map[label]);
      break;
    }
  }
});
