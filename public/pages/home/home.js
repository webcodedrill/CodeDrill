function renderHome(user) {
  return `
  <div class="home-title">Welcome to CodeDrill 🚀</div>
  <div class="home-subtitle">HTML, CSS, aur JavaScript sikhne aur practice karne ki jagah</div>
  <div style="margin:6px 0 14px"><span class="user-id-badge" title="Your Unique ID">🆔 Your ID: ${user.userId || '------'}</span></div>
  <div class="home-hint">☰ <span>Upar 3-line (hamburger) menu pe click karke kaam shuru karein — MCQs, Coding Questions ya Paragraph section chunein</span></div>

  <div class="step-card">
    <div class="step-num">01</div>
    <div class="step-en">CodeDrill is a practice platform for HTML, CSS, and JavaScript.</div>
    <div class="step-ur">CodeDrill ایک پریکٹس پلیٹ فارم ہے HTML، CSS اور JavaScript کے لیے۔</div>
  </div>
  <div class="step-card">
    <div class="step-num">02</div>
    <div class="step-en">Built for developers — beginners and experienced coders alike.</div>
    <div class="step-ur">یہ ڈویلپرز کے لیے بنایا گیا ہے — نئے سیکھنے والے اور تجربہ کار کوڈرز دونوں کے لیے۔</div>
  </div>
  <div class="step-card">
    <div class="step-num">03</div>
    <div class="step-en">Step 1: Open hamburger menu (☰) → Choose a section: MCQs, Coding Questions, or Paragraph Mistakes.</div>
    <div class="step-ur">قدم 1: اوپر ☰ مینو کھولیں → ایک سیکشن منتخب کریں: MCQs، Coding Questions، یا Paragraph Mistakes۔</div>
  </div>
  <div class="step-card">
    <div class="step-num">04</div>
    <div class="step-en">Step 2: Pick a difficulty level — Easy, Medium, or Hard.</div>
    <div class="step-ur">قدم 2: ڈفیکالٹی لیول منتخب کریں — Easy، Medium، یا Hard۔</div>
  </div>
  <div class="step-card">
    <div class="step-num">05</div>
    <div class="step-en">Step 3: Choose your language — HTML, CSS, or JavaScript — and start practicing!</div>
    <div class="step-ur">قدم 3: اپنی زبان چنیں — HTML، CSS، یا JavaScript — اور پریکٹس شروع کریں!</div>
  </div>
  <div class="step-card">
    <div class="step-num">06</div>
    <div class="step-en">Fix mistakes, learn from solutions, and track your rank as you improve.</div>
    <div class="step-ur">غلطیاں ٹھیک کریں، حل سے سیکھیں، اور اپنی رینک ٹریک کریں جیسے جیسے آپ بہتر ہوتے جائیں۔</div>
  </div>`;
}

(function init() {
  const user = renderShell('home');
  if (!user) return; // renderShell already redirected to ../auth/index.html
  document.getElementById('page-content').innerHTML = renderHome(user);
})();
