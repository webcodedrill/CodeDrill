let sidebarOpen = false;

function toggleSidebar(val) {
  sidebarOpen = val !== undefined ? val : !sidebarOpen;
  const sb = document.querySelector('.sidebar');
  const ov = document.querySelector('.sidebar-overlay');
  if (sb) sb.classList.toggle('open', sidebarOpen);
  if (ov) ov.classList.toggle('open', sidebarOpen);
}
