// Simple modal functionality
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tui-modal-target]').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.getAttribute('data-tui-modal-target');
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'flex';
    });
  });

  document.querySelectorAll('.tui-modal-close').forEach(btn => {
    btn.addEventListener('click', e => {
      btn.closest('.tui-modal-overlay').style.display = 'none';
    });
  });
});
