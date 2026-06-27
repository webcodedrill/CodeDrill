/* ── Auth Page JS ── */
const authRoot = document.getElementById('auth-root');
let authState = {
  tab: 'login',
  showPass: false,
  showConfPass: false,
  pwStrength: 0,
  error: '',
  captchaStatus: 'idle',
  forgotStep: 'email',
  forgotEmail: '',
  fpCaptchaStatus: 'idle',
  /* Phone / country */
  countrySearch: '',
  selectedCountry: null,
  showCountryDropdown: false,
  phoneDigits: '',
  /* Referral */
  inviteCode: '',
  inviteCodeLocked: false
};

/* URL se ?ref= param check karo — agar mila to auto-fill karo */
(function initReferral() {
  const ref = getRefParamFromUrl();
  if (ref) {
    authState.inviteCode = ref;
    authState.inviteCodeLocked = true;
    authState.tab = 'register'; /* seedha register tab kholna */
  }
})();

/* ── Country Data (all countries with dial codes) ── */
const COUNTRIES = [
  {name:'Pakistan',code:'PK',dial:'+92',maxLen:10,prefix:'3',placeholder:'3xx xxxxxxx'},
  {name:'Afghanistan',code:'AF',dial:'+93',maxLen:9,prefix:'7',placeholder:'7x xxxxxxx'},
  {name:'Albania',code:'AL',dial:'+355',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Algeria',code:'DZ',dial:'+213',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Andorra',code:'AD',dial:'+376',maxLen:6,prefix:'',placeholder:'xxxxxx'},
  {name:'Angola',code:'AO',dial:'+244',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Argentina',code:'AR',dial:'+54',maxLen:10,prefix:'',placeholder:'xxxxxxxxxx'},
  {name:'Armenia',code:'AM',dial:'+374',maxLen:8,prefix:'',placeholder:'xxxxxxxx'},
  {name:'Australia',code:'AU',dial:'+61',maxLen:9,prefix:'4',placeholder:'4xx xxx xxx'},
  {name:'Austria',code:'AT',dial:'+43',maxLen:10,prefix:'',placeholder:'xxxxxxxxxx'},
  {name:'Azerbaijan',code:'AZ',dial:'+994',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Bahrain',code:'BH',dial:'+973',maxLen:8,prefix:'',placeholder:'xxxxxxxx'},
  {name:'Bangladesh',code:'BD',dial:'+880',maxLen:10,prefix:'1',placeholder:'1xxxxxxxxx'},
  {name:'Belarus',code:'BY',dial:'+375',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Belgium',code:'BE',dial:'+32',maxLen:9,prefix:'4',placeholder:'4xxxxxxxx'},
  {name:'Bolivia',code:'BO',dial:'+591',maxLen:8,prefix:'',placeholder:'xxxxxxxx'},
  {name:'Bosnia',code:'BA',dial:'+387',maxLen:8,prefix:'6',placeholder:'6xxxxxxx'},
  {name:'Brazil',code:'BR',dial:'+55',maxLen:11,prefix:'',placeholder:'xxxxxxxxxxx'},
  {name:'Bulgaria',code:'BG',dial:'+359',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Cambodia',code:'KH',dial:'+855',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Cameroon',code:'CM',dial:'+237',maxLen:9,prefix:'6',placeholder:'6xxxxxxxx'},
  {name:'Canada',code:'CA',dial:'+1',maxLen:10,prefix:'',placeholder:'xxx xxx xxxx'},
  {name:'Chile',code:'CL',dial:'+56',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'China',code:'CN',dial:'+86',maxLen:11,prefix:'1',placeholder:'1xx xxxx xxxx'},
  {name:'Colombia',code:'CO',dial:'+57',maxLen:10,prefix:'3',placeholder:'3xxxxxxxxx'},
  {name:'Croatia',code:'HR',dial:'+385',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Cuba',code:'CU',dial:'+53',maxLen:8,prefix:'5',placeholder:'5xxxxxxx'},
  {name:'Cyprus',code:'CY',dial:'+357',maxLen:8,prefix:'9',placeholder:'9xxxxxxx'},
  {name:'Czech Republic',code:'CZ',dial:'+420',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Denmark',code:'DK',dial:'+45',maxLen:8,prefix:'',placeholder:'xxxxxxxx'},
  {name:'Ecuador',code:'EC',dial:'+593',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Egypt',code:'EG',dial:'+20',maxLen:10,prefix:'1',placeholder:'1xxxxxxxxx'},
  {name:'Estonia',code:'EE',dial:'+372',maxLen:8,prefix:'5',placeholder:'5xxxxxxx'},
  {name:'Ethiopia',code:'ET',dial:'+251',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Finland',code:'FI',dial:'+358',maxLen:10,prefix:'4',placeholder:'4xxxxxxxxx'},
  {name:'France',code:'FR',dial:'+33',maxLen:9,prefix:'6',placeholder:'6xx xxx xxx'},
  {name:'Georgia',code:'GE',dial:'+995',maxLen:9,prefix:'5',placeholder:'5xxxxxxxx'},
  {name:'Germany',code:'DE',dial:'+49',maxLen:11,prefix:'1',placeholder:'1xx xxxxxxxx'},
  {name:'Ghana',code:'GH',dial:'+233',maxLen:9,prefix:'2',placeholder:'2xxxxxxxx'},
  {name:'Greece',code:'GR',dial:'+30',maxLen:10,prefix:'6',placeholder:'6xxxxxxxxx'},
  {name:'Guatemala',code:'GT',dial:'+502',maxLen:8,prefix:'',placeholder:'xxxxxxxx'},
  {name:'Hungary',code:'HU',dial:'+36',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'India',code:'IN',dial:'+91',maxLen:10,prefix:'',placeholder:'xxxxx xxxxx'},
  {name:'Indonesia',code:'ID',dial:'+62',maxLen:12,prefix:'8',placeholder:'8xx xxxx xxxx'},
  {name:'Iran',code:'IR',dial:'+98',maxLen:10,prefix:'9',placeholder:'9xxxxxxxxx'},
  {name:'Iraq',code:'IQ',dial:'+964',maxLen:10,prefix:'7',placeholder:'7xxxxxxxxx'},
  {name:'Ireland',code:'IE',dial:'+353',maxLen:9,prefix:'8',placeholder:'8xxxxxxxx'},
  {name:'Israel',code:'IL',dial:'+972',maxLen:9,prefix:'5',placeholder:'5xxxxxxxx'},
  {name:'Italy',code:'IT',dial:'+39',maxLen:10,prefix:'3',placeholder:'3xxxxxxxxx'},
  {name:'Jamaica',code:'JM',dial:'+1-876',maxLen:10,prefix:'',placeholder:'xxx xxx xxxx'},
  {name:'Japan',code:'JP',dial:'+81',maxLen:10,prefix:'9',placeholder:'9x xxxx xxxx'},
  {name:'Jordan',code:'JO',dial:'+962',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'Kazakhstan',code:'KZ',dial:'+7',maxLen:10,prefix:'7',placeholder:'7xxxxxxxxx'},
  {name:'Kenya',code:'KE',dial:'+254',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'Kuwait',code:'KW',dial:'+965',maxLen:8,prefix:'',placeholder:'xxxxxxxx'},
  {name:'Kyrgyzstan',code:'KG',dial:'+996',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'Latvia',code:'LV',dial:'+371',maxLen:8,prefix:'2',placeholder:'2xxxxxxx'},
  {name:'Lebanon',code:'LB',dial:'+961',maxLen:8,prefix:'7',placeholder:'7xxxxxxx'},
  {name:'Libya',code:'LY',dial:'+218',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Lithuania',code:'LT',dial:'+370',maxLen:8,prefix:'6',placeholder:'6xxxxxxx'},
  {name:'Luxembourg',code:'LU',dial:'+352',maxLen:9,prefix:'6',placeholder:'6xxxxxxxx'},
  {name:'Malaysia',code:'MY',dial:'+60',maxLen:10,prefix:'1',placeholder:'1x xxxx xxxx'},
  {name:'Maldives',code:'MV',dial:'+960',maxLen:7,prefix:'',placeholder:'xxxxxxx'},
  {name:'Mexico',code:'MX',dial:'+52',maxLen:10,prefix:'1',placeholder:'1 xxx xxx xxxx'},
  {name:'Moldova',code:'MD',dial:'+373',maxLen:8,prefix:'6',placeholder:'6xxxxxxx'},
  {name:'Mongolia',code:'MN',dial:'+976',maxLen:8,prefix:'8',placeholder:'8xxxxxxx'},
  {name:'Morocco',code:'MA',dial:'+212',maxLen:9,prefix:'6',placeholder:'6xxxxxxxx'},
  {name:'Myanmar',code:'MM',dial:'+95',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Nepal',code:'NP',dial:'+977',maxLen:10,prefix:'9',placeholder:'98xxxxxxxx'},
  {name:'Netherlands',code:'NL',dial:'+31',maxLen:9,prefix:'6',placeholder:'6xxxxxxxx'},
  {name:'New Zealand',code:'NZ',dial:'+64',maxLen:9,prefix:'2',placeholder:'2xxxxxxxx'},
  {name:'Nigeria',code:'NG',dial:'+234',maxLen:10,prefix:'8',placeholder:'8xxxxxxxxx'},
  {name:'Norway',code:'NO',dial:'+47',maxLen:8,prefix:'4',placeholder:'4xxxxxxx'},
  {name:'Oman',code:'OM',dial:'+968',maxLen:8,prefix:'9',placeholder:'9xxxxxxx'},
  {name:'Palestine',code:'PS',dial:'+970',maxLen:9,prefix:'5',placeholder:'5xxxxxxxx'},
  {name:'Panama',code:'PA',dial:'+507',maxLen:8,prefix:'6',placeholder:'6xxxxxxx'},
  {name:'Peru',code:'PE',dial:'+51',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Philippines',code:'PH',dial:'+63',maxLen:10,prefix:'9',placeholder:'9xxxxxxxxx'},
  {name:'Poland',code:'PL',dial:'+48',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'Portugal',code:'PT',dial:'+351',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Qatar',code:'QA',dial:'+974',maxLen:8,prefix:'3',placeholder:'3xxxxxxx'},
  {name:'Romania',code:'RO',dial:'+40',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'Russia',code:'RU',dial:'+7',maxLen:10,prefix:'9',placeholder:'9xxxxxxxxx'},
  {name:'Saudi Arabia',code:'SA',dial:'+966',maxLen:9,prefix:'5',placeholder:'5xxxxxxxx'},
  {name:'Serbia',code:'RS',dial:'+381',maxLen:9,prefix:'6',placeholder:'6xxxxxxxx'},
  {name:'Singapore',code:'SG',dial:'+65',maxLen:8,prefix:'8',placeholder:'8xxxxxxx'},
  {name:'Slovakia',code:'SK',dial:'+421',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Slovenia',code:'SI',dial:'+386',maxLen:8,prefix:'4',placeholder:'4xxxxxxx'},
  {name:'Somalia',code:'SO',dial:'+252',maxLen:8,prefix:'6',placeholder:'6xxxxxxx'},
  {name:'South Africa',code:'ZA',dial:'+27',maxLen:9,prefix:'6',placeholder:'6x xxx xxxx'},
  {name:'South Korea',code:'KR',dial:'+82',maxLen:10,prefix:'1',placeholder:'10 xxxx xxxx'},
  {name:'Spain',code:'ES',dial:'+34',maxLen:9,prefix:'6',placeholder:'6xxxxxxxx'},
  {name:'Sri Lanka',code:'LK',dial:'+94',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'Sudan',code:'SD',dial:'+249',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Sweden',code:'SE',dial:'+46',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'Switzerland',code:'CH',dial:'+41',maxLen:9,prefix:'7',placeholder:'7x xxx xxxx'},
  {name:'Syria',code:'SY',dial:'+963',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Taiwan',code:'TW',dial:'+886',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Tajikistan',code:'TJ',dial:'+992',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Tanzania',code:'TZ',dial:'+255',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'Thailand',code:'TH',dial:'+66',maxLen:9,prefix:'8',placeholder:'8xxxxxxxx'},
  {name:'Tunisia',code:'TN',dial:'+216',maxLen:8,prefix:'2',placeholder:'2xxxxxxx'},
  {name:'Turkey',code:'TR',dial:'+90',maxLen:10,prefix:'5',placeholder:'5xxxxxxxxx'},
  {name:'Turkmenistan',code:'TM',dial:'+993',maxLen:8,prefix:'6',placeholder:'6xxxxxxx'},
  {name:'UAE',code:'AE',dial:'+971',maxLen:9,prefix:'5',placeholder:'5xxxxxxxx'},
  {name:'Uganda',code:'UG',dial:'+256',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'UK',code:'GB',dial:'+44',maxLen:10,prefix:'7',placeholder:'7xxx xxxxxx'},
  {name:'Ukraine',code:'UA',dial:'+380',maxLen:9,prefix:'',placeholder:'xxxxxxxxx'},
  {name:'USA',code:'US',dial:'+1',maxLen:10,prefix:'',placeholder:'xxx xxx xxxx'},
  {name:'Uzbekistan',code:'UZ',dial:'+998',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Venezuela',code:'VE',dial:'+58',maxLen:10,prefix:'4',placeholder:'4xxxxxxxxx'},
  {name:'Vietnam',code:'VN',dial:'+84',maxLen:9,prefix:'9',placeholder:'9xxxxxxxx'},
  {name:'Yemen',code:'YE',dial:'+967',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'},
  {name:'Zimbabwe',code:'ZW',dial:'+263',maxLen:9,prefix:'7',placeholder:'7xxxxxxxx'}
];

/* Redirect if already logged in */
(function checkExisting() {
  if (getUser()) window.location.replace('../home/index.html');
})();

function setAuthState(patch) {
  Object.assign(authState, patch);
  renderAuth();
}

/* ── Title Case Helper ── */
function toTitleCase(str) {
  return str.replace(/\b\w/g, ch => ch.toUpperCase());
}

/* ── Full Name auto-format ── */
function handleNameInput(el) {
  const raw = el.value;
  const pos = el.selectionStart;
  /* Apply title case */
  const formatted = toTitleCase(raw);
  if (formatted !== raw) {
    el.value = formatted;
    el.setSelectionRange(pos, pos);
  }
}

/* ── Username auto-format: always lowercase ── */
function handleUsernameInput(el) {
  const raw = el.value;
  const lower = raw.toLowerCase();
  if (lower !== raw) {
    const pos = el.selectionStart;
    el.value = lower;
    el.setSelectionRange(pos, pos);
  }
}

/* ── Email auto-format ── */
function handleEmailInput(el) {
  /* Keep lowercase */
  const raw = el.value;
  const lower = raw.toLowerCase();
  if (lower !== raw) {
    const pos = el.selectionStart;
    el.value = lower;
    el.setSelectionRange(pos, pos);
  }
}

/* ── Phone digit input ── */
function handlePhoneInput(el) {
  let digits = el.value.replace(/\D/g, '');
  /* Remove leading zero */
  if (digits.startsWith('0')) digits = digits.slice(1);
  /* Enforce country maxLen */
  const maxLen = authState.selectedCountry ? authState.selectedCountry.maxLen : 15;
  if (digits.length > maxLen) digits = digits.slice(0, maxLen);
  authState.phoneDigits = digits;
  el.value = digits;
  /* Live counter update */
  updatePhoneCounter(digits.length, maxLen);
}

function updatePhoneCounter(cur, max) {
  const el = document.getElementById('phone-counter');
  if (!el) return;
  el.textContent = cur + ' / ' + max;
  el.style.color = cur === max ? 'var(--green)' : cur > max ? '#F27B72' : 'var(--muted,#8b92a5)';
}

/* ── Country dropdown ── */
function openCountryDropdown() {
  authState.showCountryDropdown = true;
  authState.countrySearch = '';
  /* Direct DOM inject — re-render poora page nahi karta */
  injectCountryDropdown();
}

function injectCountryDropdown() {
  /* Remove any existing dropdown first */
  const old = document.getElementById('country-dropdown-portal');
  if (old) old.remove();

  const wrap = document.getElementById('country-dropdown-wrap');
  if (!wrap) return;

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(authState.countrySearch.toLowerCase()) ||
    c.dial.includes(authState.countrySearch)
  );

  const dd = document.createElement('div');
  dd.id = 'country-dropdown-portal';
  dd.className = 'country-dropdown';
  dd.innerHTML = `
    <input class="country-search-input" id="country-search-input"
      placeholder="🔍 Country search karo..."
      value="${authState.countrySearch}"
      autocomplete="off">
    <div class="country-list" id="country-list">
      ${filtered.map(c => `
        <div class="country-item" data-code="${c.code}">
          <span class="country-flag">${getFlagEmoji(c.code)}</span>
          <span class="country-name">${c.name}</span>
          <span class="country-dial">${c.dial}</span>
        </div>`).join('')}
    </div>`;

  wrap.appendChild(dd);

  /* Search input listener */
  const searchEl = document.getElementById('country-search-input');
  if (searchEl) {
    searchEl.focus();
    searchEl.addEventListener('input', function() {
      authState.countrySearch = this.value;
      const list = document.getElementById('country-list');
      if (!list) return;
      const f = COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(this.value.toLowerCase()) ||
        c.dial.includes(this.value)
      );
      list.innerHTML = f.length
        ? f.map(c => `
            <div class="country-item" data-code="${c.code}">
              <span class="country-flag">${getFlagEmoji(c.code)}</span>
              <span class="country-name">${c.name}</span>
              <span class="country-dial">${c.dial}</span>
            </div>`).join('')
        : '<div class="country-no-result">Koi country nahi mili</div>';
      /* Re-attach click listeners */
      attachCountryItemListeners();
    });
  }

  attachCountryItemListeners();
}

function attachCountryItemListeners() {
  document.querySelectorAll('#country-dropdown-portal .country-item').forEach(el => {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      selectCountry(this.dataset.code);
    });
  });
}

function closeCountryDropdown() {
  authState.showCountryDropdown = false;
  const dd = document.getElementById('country-dropdown-portal');
  if (dd) dd.remove();
}

function selectCountry(code) {
  const c = COUNTRIES.find(x => x.code === code);
  if (!c) return;
  authState.selectedCountry = c;
  authState.showCountryDropdown = false;
  authState.countrySearch = '';

  /* Close dropdown without full re-render */
  const dd = document.getElementById('country-dropdown-portal');
  if (dd) dd.remove();

  /* Update button in-place */
  const btn = document.getElementById('country-select-btn');
  if (btn) {
    btn.innerHTML =
      '<span>' + getFlagEmoji(c.code) + '</span>' +
      '<span class="country-dial-selected">' + c.dial + '</span>' +
      '<span class="country-caret">▾</span>';
  }

  /* Update placeholder, maxlength, counter */
  const phoneEl = document.getElementById('r-phone-digits');
  if (phoneEl) {
    phoneEl.placeholder = c.placeholder || 'Number';
    phoneEl.maxLength = c.maxLen;
    /* Trim existing digits if too long */
    if (authState.phoneDigits.length > c.maxLen) {
      authState.phoneDigits = authState.phoneDigits.slice(0, c.maxLen);
      phoneEl.value = authState.phoneDigits;
    }
    phoneEl.focus();
  }
  /* Show counter */
  updatePhoneCounter(authState.phoneDigits.length, c.maxLen);
}

function getFlagEmoji(code) {
  return code.toUpperCase().replace(/./g, ch =>
    String.fromCodePoint(127397 + ch.charCodeAt(0))
  );
}

function renderAuth() {
  const { tab, showPass, showConfPass, pwStrength, error } = authState;
  const isForgot = tab === 'forgot';

  authRoot.innerHTML = `
  <div class="auth-page" onclick="handlePageClick(event)">
    <div class="auth-float auth-float-1">&lt;div&gt;</div>
    <div class="auth-float auth-float-2">{ }</div>
    <div class="auth-float auth-float-3">const</div>
    <div class="auth-float auth-float-4">=&gt;</div>
    <div class="auth-float auth-float-5">.css</div>
    <div class="auth-float auth-float-6">&lt;/&gt;</div>

    <div class="auth-card">
      <div class="auth-logo">
        <div class="auth-logo-icon">&lt;/&gt;</div>
        <div class="auth-logo-text">Code<span>Drill</span></div>
      </div>

      ${isForgot ? renderForgot() : `
        <div class="auth-tabs">
          <button class="auth-tab ${tab === 'login' ? 'active' : ''}" onclick="setAuthState({tab:'login',error:'',captchaStatus:'idle',forgotStep:'email',forgotEmail:'',fpCaptchaStatus:'idle'})">🔑 Login</button>
          <button class="auth-tab ${tab === 'register' ? 'active' : ''}" onclick="setAuthState({tab:'register',error:'',captchaStatus:'idle',forgotStep:'email',forgotEmail:'',fpCaptchaStatus:'idle'})">✨ Register</button>
        </div>

        ${error ? `<div class="auth-error">⚠️ ${error}</div>` : ''}

        ${tab === 'login' ? renderLogin() : renderRegister()}
      `}
    </div>
  </div>`;
}

function handlePageClick(e) {
  /* Close country dropdown if clicked outside */
  if (authState.showCountryDropdown) {
    const dd = document.getElementById('country-dropdown-portal');
    const btn = document.getElementById('country-select-btn');
    if (dd && !dd.contains(e.target) && btn && !btn.contains(e.target)) {
      closeCountryDropdown();
    }
  }
}

function renderLogin() {
  return `
  <div class="auth-heading">Welcome Back! 👋</div>
  <div class="auth-subheading">Login to your account</div>

  <div class="form-group">
    <label class="form-label"><span class="form-label-icon">📧</span> Email</label>
    <input class="form-input" type="email" id="l-email" placeholder="Your_Email" autocomplete="email">
  </div>

  <div class="form-group">
    <label class="form-label"><span class="form-label-icon">🔒</span> Password</label>
    <div class="pw-wrap">
      <input class="form-input" type="${authState.showPass ? 'text' : 'password'}" id="l-pass" placeholder="••••••••" autocomplete="current-password">
      <button class="pw-toggle" onclick="setAuthState({showPass:${!authState.showPass}})" type="button">${authState.showPass ? '🙈' : '👁️'}</button>
    </div>
    <div class="forgot-link-row">
      <span class="forgot-link" onclick="setAuthState({tab:'forgot',forgotStep:'email',error:'',captchaStatus:'idle'})">Forgot Password?</span>
    </div>
  </div>

  ${renderCaptcha()}

  <button class="btn-primary" onclick="doLogin()">Login →</button>

  <div class="auth-switch">
    Don't have an account? <span onclick="setAuthState({tab:'register',error:'',captchaStatus:'idle',forgotStep:'email',forgotEmail:'',fpCaptchaStatus:'idle'})">Register</span>
  </div>

  <div class="auth-trust-strip">
    <span class="auth-trust-item">🔒 Secure Login</span>
    <span class="auth-trust-dot">•</span>
    <span class="auth-trust-item">⚡ Free Forever</span>
  </div>`;
}

function renderRegister() {
  const strength = authState.pwStrength;
  const bars = [0,1,2].map(i => {
    let cls = 'pw-bar';
    if (strength >= 1 && i === 0) cls += ' weak';
    if (strength >= 2 && i <= 1) cls += ' medium';
    if (strength >= 3) cls += ' strong';
    return `<div class="${cls}"></div>`;
  }).join('');
  const hintText = strength === 0 ? '' : strength === 1 ? 'Weak' : strength === 2 ? 'Medium' : 'Strong ✓';

  const sc = authState.selectedCountry;
  return `
  <div class="auth-heading">Create Account 🚀</div>
  <div class="auth-subheading">Register for free — everything is available</div>

  <div class="form-row">
    <div class="form-group">
      <label class="form-label"><span class="form-label-icon">👤</span> Full Name</label>
      <input class="form-input" id="r-name" placeholder="Your_Name" autocomplete="Name"
        oninput="handleNameInput(this)"
        onkeydown="handleNameKeydown(event, this)">
      <div class="field-hint">Auto Title Case — pehla harf bada</div>
    </div>
    <div class="form-group">
      <label class="form-label"><span class="form-label-icon">🏷️</span> Username</label>
      <input class="form-input" id="r-user" placeholder="Your_Username" autocomplete="username"
        oninput="handleUsernameInput(this)">
      <div class="field-hint">Sab small • min 4 letters + 4 numbers</div>
    </div>
  </div>

  <div class="form-group">
    <label class="form-label"><span class="form-label-icon">📧</span> Email</label>
    <div class="email-input-wrap">
      <input class="form-input email-local-input" id="r-email-local" placeholder="Your_Email"
        oninput="handleEmailInput(this)" autocomplete="off">
      <span class="email-suffix">@gmail.com</span>
    </div>
    <div class="field-hint">Sab small — @gmail.com auto lagega</div>
  </div>

  <div class="form-group">
    <label class="form-label"><span class="form-label-icon">📱</span> Phone (Optional)</label>
    <div class="phone-wrap" id="country-dropdown-wrap">
      <button class="country-select-btn" id="country-select-btn" type="button" onclick="openCountryDropdown()">
        ${sc
          ? `<span>${getFlagEmoji(sc.code)}</span><span class="country-dial-selected">${sc.dial}</span>`
          : `<span>🌍</span><span class="country-dial-selected">Code</span>`
        }
        <span class="country-caret">▾</span>
      </button>
      <input class="form-input phone-digits-input" id="r-phone-digits"
        type="tel"
        placeholder="${sc ? (sc.placeholder || 'Number') : 'Number (no leading 0)'}"
        maxlength="${sc ? sc.maxLen : 15}"
        oninput="handlePhoneInput(this)"
        value="${authState.phoneDigits}">
    </div>
    <div class="phone-meta-row">
      <span class="field-hint">Country select karo → code auto • leading 0 mat likho</span>
      ${sc ? `<span class="phone-counter" id="phone-counter">${authState.phoneDigits.length} / ${sc.maxLen}</span>` : ''}
    </div>
  </div>

  <div class="form-group">
    <label class="form-label"><span class="form-label-icon">🔒</span> Password</label>
    <div class="pw-wrap">
      <input class="form-input" type="${authState.showPass ? 'text' : 'password'}" id="r-pass"
        placeholder="Min 8 chars — Capital, small, number, special"
        oninput="checkPwStrength(this.value)"
        autocomplete="new-password">
      <button class="pw-toggle" onclick="setAuthState({showPass:${!authState.showPass}})" type="button">${authState.showPass ? '🙈' : '👁️'}</button>
    </div>
    ${strength > 0 ? `
    <div class="pw-strength">${bars}</div>
    <div class="pw-hint" style="color:${strength===1?'#F27B72':strength===2?'var(--amber)':'var(--green)'}">
      ${hintText}
    </div>` : ''}
    <div class="pw-rules">
      <span class="pw-rule" id="rule-len">✗ Min 8 characters</span>
      <span class="pw-rule" id="rule-upper">✗ 1 Capital (A-Z)</span>
      <span class="pw-rule" id="rule-lower">✗ 1 Small (a-z)</span>
      <span class="pw-rule" id="rule-num">✗ 1 Number (0-9)</span>
      <span class="pw-rule" id="rule-special">✗ 1 Special (!@#$%...)</span>
    </div>
  </div>

  <div class="form-group invite-code-group">
    <label class="form-label"><span class="form-label-icon">🔗</span> Invite Code <span class="invite-optional">(Optional)</span></label>
    <div class="invite-input-wrap">
      <input class="form-input invite-code-input ${authState.inviteCodeLocked ? 'invite-locked' : ''}"
        id="r-invite"
        value="${authState.inviteCode}"
        ${authState.inviteCodeLocked ? 'readonly' : ''}
        placeholder="Friend ka username (agar kisi ne invite kiya ho)"
        oninput="authState.inviteCode=this.value.toLowerCase().trim()">
      ${authState.inviteCodeLocked ? '<span class="invite-lock-badge">🔒 Auto</span>' : ''}
    </div>
    ${authState.inviteCodeLocked
      ? `<div class="invite-auto-hint">✅ Referral link se automatically set hua — <b>${authState.inviteCode}</b> ki team mein shamil ho jaoge</div>`
      : '<div class="field-hint">Kisi ne aapko referral link bheja ho to uska username likhein</div>'
    }
  </div>

  ${renderCaptcha()}

  <button class="btn-primary" onclick="doRegister()">Create Account ✓</button>

  <div class="auth-switch">
    Already have an account? <span onclick="setAuthState({tab:'login',error:'',captchaStatus:'idle',forgotStep:'email',forgotEmail:'',fpCaptchaStatus:'idle'})">Login</span>
  </div>

  <div class="auth-trust-strip">
    <span class="auth-trust-item">🔒 Data Secure</span>
    <span class="auth-trust-dot">•</span>
    <span class="auth-trust-item">⚡ Free Forever</span>
  </div>`;
}

/* ── Name keydown: space ke baad agla word bhi auto-capitalize ── */
function handleNameKeydown(e, el) {
  /* Nothing special needed — oninput handles it */
}

/* ── Captcha ── */
function renderCaptcha() {
  return renderCaptchaWidget(authState.captchaStatus, 'doCaptchaVerify()', 'doCaptchaRetry()');
}
function renderForgotCaptcha() {
  return renderCaptchaWidget(authState.fpCaptchaStatus, 'doForgotCaptchaVerify()', 'doForgotCaptchaRetry()');
}
function renderCaptchaWidget(status, verifyFn, retryFn) {
  if (status === 'verifying') {
    return `
    <div class="cf-box">
      <div class="cf-left">
        <span class="cf-spinner-dots"></span>
        <span class="cf-status-text">Verifying...</span>
      </div>
      ${cfLogoBlock()}
    </div>`;
  }
  if (status === 'failed') {
    return `
    <div class="cf-box cf-failed" onclick="${retryFn}">
      <div class="cf-left">
        <span class="cf-fail-icon">!</span>
        <div class="cf-fail-text-wrap">
          <span class="cf-fail-title">Verification failed</span>
          <span class="cf-troubleshoot">Troubleshoot</span>
        </div>
      </div>
      ${cfLogoBlock()}
    </div>`;
  }
  const verified = status === 'verified';
  return `
  <div class="captcha-box ${verified ? 'verified' : ''}" onclick="${verifyFn}">
    <div class="captcha-checkmark"><span class="tick">✓</span></div>
    <div>
      <div class="captcha-label">${verified ? 'Verified — You Are Human ✓' : 'I am not a robot'}</div>
      <div class="captcha-sub">${verified ? '' : 'Click to confirm'}</div>
    </div>
    <div class="captcha-badge">🛡️<br>CAPTCHA</div>
  </div>`;
}
function cfLogoBlock() {
  return `
  <div class="cf-right">
    <div class="cf-logo"><span class="cf-logo-icon">☁️</span>CLOUDFLARE</div>
    <div class="cf-links"><span class="cf-link">Privacy</span>&nbsp;•&nbsp;<span class="cf-link">Help</span></div>
  </div>`;
}
function doCaptchaVerify() {
  if (authState.captchaStatus !== 'idle') return;
  setAuthState({ captchaStatus: 'verifying', error: '' });
  setTimeout(() => {
    const ok = Math.random() > 0.15;
    setAuthState({ captchaStatus: ok ? 'verified' : 'failed' });
  }, 1100);
}
function doCaptchaRetry() { setAuthState({ captchaStatus: 'idle' }); }
function doForgotCaptchaVerify() {
  if (authState.fpCaptchaStatus !== 'idle') return;
  setAuthState({ fpCaptchaStatus: 'verifying', error: '' });
  setTimeout(() => {
    const ok = Math.random() > 0.15;
    setAuthState({ fpCaptchaStatus: ok ? 'verified' : 'failed' });
  }, 1100);
}
function doForgotCaptchaRetry() { setAuthState({ fpCaptchaStatus: 'idle' }); }
function doForgotCaptchaContinue() {
  if (authState.fpCaptchaStatus !== 'verified')
    return setAuthState({ error: 'Please complete the captcha first!' });
  setAuthState({ forgotStep: 'reset', error: '' });
}

/* ── Password strength ── */
function checkPwStrength(val) {
  const hasLen     = val.length >= 8;
  const hasUpper   = /[A-Z]/.test(val);
  const hasLower   = /[a-z]/.test(val);
  const hasNum     = /[0-9]/.test(val);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(val);

  const met = [hasLen, hasUpper, hasLower, hasNum, hasSpecial].filter(Boolean).length;
  let s = 0;
  if (met >= 2) s = 1;
  if (met >= 4) s = 2;
  if (met === 5) s = 3;
  authState.pwStrength = s;

  /* Update rule indicators */
  const update = (id, ok) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = (ok ? '✓ ' : '✗ ') + el.textContent.slice(2);
    el.style.color = ok ? 'var(--green)' : '';
  };
  update('rule-len',     hasLen);
  update('rule-upper',   hasUpper);
  update('rule-lower',   hasLower);
  update('rule-num',     hasNum);
  update('rule-special', hasSpecial);

  /* Update strength bars */
  const barsEl = document.querySelector('.pw-strength');
  const hintEl = document.querySelector('.pw-hint');
  if (barsEl) {
    const barEls = barsEl.querySelectorAll('.pw-bar');
    barEls.forEach((b, i) => {
      b.className = 'pw-bar';
      if (s >= 1 && i === 0) b.classList.add('weak');
      if (s >= 2 && i <= 1) { b.classList.remove('weak'); b.classList.add('medium'); }
      if (s >= 3) b.classList.add('strong');
    });
  }
  if (hintEl) {
    const colors = ['','#F27B72','var(--amber)','var(--green)'];
    const texts  = ['','Weak','Medium','Strong ✓'];
    hintEl.textContent = texts[s];
    hintEl.style.color = colors[s];
  }
}

/* ── Validate username: all lowercase, min 4 letters + 4 digits ── */
function validateUsername(u) {
  if (u !== u.toLowerCase()) return 'Username sab small (lowercase) hona chahiye!';
  const letters = (u.match(/[a-z]/g) || []).length;
  const digits  = (u.match(/[0-9]/g) || []).length;
  if (letters < 4) return 'Username mein kam se kam 4 letters (a-z) hone chahiye!';
  if (digits  < 4) return 'Username mein kam se kam 4 numbers (0-9) hone chahiye!';
  return null;
}

/* ── Validate password ── */
function validatePassword(p) {
  if (p.length < 8)            return 'Password kam se kam 8 characters ka hona chahiye!';
  if (!/[A-Z]/.test(p))       return 'Password mein ek Capital letter (A-Z) zaroor ho!';
  if (!/[a-z]/.test(p))       return 'Password mein ek small letter (a-z) zaroor ho!';
  if (!/[0-9]/.test(p))       return 'Password mein ek number (0-9) zaroor ho!';
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(p))
    return 'Password mein ek special character (!@#$% etc.) zaroor ho!';
  return null;
}

/* ── Actions ── */
async function doLogin() {
  const email = document.getElementById('l-email')?.value?.trim().toLowerCase();
  const pass  = document.getElementById('l-pass')?.value;
  if (!email) return setAuthState({ error: 'Email is required!' });
  if (!pass)  return setAuthState({ error: 'Password is required!' });
  if (!email.includes('@')) return setAuthState({ error: 'Please enter a valid email!' });
  if (authState.captchaStatus !== 'verified')
    return setAuthState({ error: 'Please verify the captcha first — click "I am not a robot"!' });

  setAuthState({ error: 'Logging in...' });
  try {
    const d = await apiLogin(email, pass);
    if (d.error) return setAuthState({ error: d.error });
    window.location.href = '../home/index.html';
  } catch(e) {
    return setAuthState({ error: 'Server se connect nahi ho saka. Internet check karein ya baad mein try karein.' });
  }
}

async function doRegister() {
  /* ── 1. Full Name ── */
  const nameEl = document.getElementById('r-name');
  const name = nameEl?.value?.trim();
  if (!name) return setAuthState({ error: 'Name is required!' });

  /* ── 2. Username ── */
  const username = document.getElementById('r-user')?.value?.trim();
  if (!username) return setAuthState({ error: 'Username is required!' });
  const uErr = validateUsername(username);
  if (uErr) return setAuthState({ error: uErr });

  /* ── 3. Email: local part + @gmail.com ── */
  const localPart = document.getElementById('r-email-local')?.value?.trim().toLowerCase();
  if (!localPart) return setAuthState({ error: 'Email is required!' });
  if (/\s/.test(localPart) || localPart.includes('@'))
    return setAuthState({ error: 'Email mein sirf apna naam likhein, @gmail.com auto lagega!' });
  const email = localPart + '@gmail.com';

  /* ── 4. Phone (optional) ── */
  let phone = '';
  if (authState.phoneDigits) {
    if (!authState.selectedCountry)
      return setAuthState({ error: 'Phone number ke liye pehle country select karein!' });
    let digits = authState.phoneDigits.replace(/\D/g, '');
    if (digits.startsWith('0')) digits = digits.slice(1);
    const maxLen = authState.selectedCountry.maxLen;
    if (digits.length !== maxLen)
      return setAuthState({ error: `${authState.selectedCountry.name} ka phone number bilkul ${maxLen} digits ka hona chahiye! (Aapne ${digits.length} likhe)` });
    phone = authState.selectedCountry.dial + digits;
  }

  /* ── 5. Password ── */
  const pass = document.getElementById('r-pass')?.value;
  if (!pass) return setAuthState({ error: 'Password is required!' });
  const pErr = validatePassword(pass);
  if (pErr) return setAuthState({ error: pErr });

  /* ── Captcha ── */
  if (authState.captchaStatus !== 'verified')
    return setAuthState({ error: 'Please verify the captcha first — click "I am not a robot"!' });

  const inviteCode = (document.getElementById('r-invite')?.value || authState.inviteCode || '').trim().toLowerCase();

  setAuthState({ error: 'Creating account...' });
  try {
    const d = await apiRegister({ name, username, email, phone, password: pass, inviteCode });
    if (d.error) return setAuthState({ error: d.error });
    const u = d.user || {};
    setUser({ name: u.name || name, username: u.username || username, email: u.email || email, userId: u.userId || u._id || '' });
    window.location.href = '../home/index.html';
  } catch(e) {
    return setAuthState({ error: 'Server se connect nahi ho saka. Internet check karein ya baad mein try karein.' });
  }
}

/* ── Forgot Password ── */
function renderForgot() {
  const step = authState.forgotStep;
  if (step === 'done') {
    return `
    <div class="auth-success-box">
      <span class="auth-success-icon">✅</span>
      <div class="auth-success-title">Password Changed!</div>
      <div class="auth-success-sub">Your password has been updated successfully.<br>You can now login with your new password.</div>
      <button class="btn-primary" onclick="setAuthState({tab:'login',error:'',captchaStatus:'idle',forgotStep:'email',forgotEmail:'',fpCaptchaStatus:'idle'})">← Back to Login</button>
    </div>`;
  }
  if (step === 'reset') {
    return `
    <div class="forgot-header">
      <div class="forgot-icon-wrap">🔑</div>
      <div class="auth-heading">Set New Password</div>
      <div class="auth-subheading">Choose a new password for your account</div>
    </div>
    ${authState.error ? `<div class="auth-error">⚠️ ${authState.error}</div>` : ''}
    <div class="form-group">
      <label class="form-label"><span class="form-label-icon">🔒</span> New Password</label>
      <div class="pw-wrap">
        <input class="form-input" type="${authState.showPass ? 'text' : 'password'}" id="fp-new-pass" placeholder="Min 8 chars — Capital, small, number, special" autocomplete="new-password">
        <button class="pw-toggle" onclick="setAuthState({showPass:${!authState.showPass}})" type="button">${authState.showPass ? '🙈' : '👁️'}</button>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label"><span class="form-label-icon">🔒</span> Confirm Password</label>
      <div class="pw-wrap">
        <input class="form-input" type="${authState.showConfPass ? 'text' : 'password'}" id="fp-conf-pass" placeholder="Re-enter new password" autocomplete="new-password">
        <button class="pw-toggle" onclick="setAuthState({showConfPass:${!authState.showConfPass}})" type="button">${authState.showConfPass ? '🙈' : '👁️'}</button>
      </div>
    </div>
    <button class="btn-primary" onclick="doResetPassword()">Update Password ✓</button>
    <div class="auth-switch">
      <span onclick="setAuthState({tab:'login',error:'',captchaStatus:'idle',forgotStep:'email',forgotEmail:'',fpCaptchaStatus:'idle'})">← Back to Login</span>
    </div>`;
  }
  if (step === 'captcha') {
    return `
    <div class="forgot-header">
      <div class="forgot-icon-wrap">🛡️</div>
      <div class="auth-heading">Verify You're Human</div>
      <div class="auth-subheading">Complete the captcha to continue</div>
    </div>
    ${authState.error ? `<div class="auth-error">⚠️ ${authState.error}</div>` : ''}
    ${renderForgotCaptcha()}
    <button class="btn-primary" onclick="doForgotCaptchaContinue()">Continue →</button>
    <div class="auth-switch">
      <span onclick="setAuthState({tab:'login',error:'',captchaStatus:'idle',forgotStep:'email',forgotEmail:'',fpCaptchaStatus:'idle'})">← Back to Login</span>
    </div>`;
  }
  return `
  <div class="forgot-header">
    <div class="forgot-icon-wrap">🔑</div>
    <div class="auth-heading">Forgot Password</div>
    <div class="auth-subheading">Enter your email — we'll help you reset it</div>
  </div>
  ${authState.error ? `<div class="auth-error">⚠️ ${authState.error}</div>` : ''}
  <div class="form-group">
    <label class="form-label"><span class="form-label-icon">📧</span> Email</label>
    <input class="form-input" type="email" id="f-email" placeholder="Your_Email" value="${authState.forgotEmail || ''}">
  </div>
  <button class="btn-primary" onclick="doForgot()">Submit →</button>
  <div class="auth-switch">
    <span onclick="setAuthState({tab:'login',error:'',captchaStatus:'idle',forgotStep:'email',forgotEmail:'',fpCaptchaStatus:'idle'})">← Back to Login</span>
  </div>`;
}

function doForgot() {
  const email = document.getElementById('f-email')?.value?.trim().toLowerCase();
  if (!email || !email.includes('@')) return setAuthState({ error: 'Please enter a valid email!' });
  setAuthState({ forgotEmail: email, forgotStep: 'captcha', error: '', fpCaptchaStatus: 'idle' });
}

async function doResetPassword() {
  const newPass  = document.getElementById('fp-new-pass')?.value;
  const confPass = document.getElementById('fp-conf-pass')?.value;
  if (!newPass) return setAuthState({ error: 'Please enter a new password!' });
  const pErr = validatePassword(newPass);
  if (pErr) return setAuthState({ error: pErr });
  if (newPass !== confPass) return setAuthState({ error: 'Passwords do not match!' });
  try {
    const d = await apiForgotPassword(authState.forgotEmail, newPass);
    if (d && d.error) return setAuthState({ error: d.error });
    setAuthState({ forgotStep: 'done', error: '' });
  } catch(e) {
    return setAuthState({ error: 'Server se connect nahi ho saka. Internet check karein ya baad mein try karein.' });
  }
}

renderAuth();
