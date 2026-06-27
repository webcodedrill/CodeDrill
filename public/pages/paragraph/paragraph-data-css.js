/* ── Paragraph Mistakes — Easy CSS Data ──
   Easy: 5-8 mistakes per code
   Total: 100 paragraphs (C1 - C100)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, BLUE → blue)
     'spelling'= spelling galat (colr → color, marign → margin)
     'missing' = semicolon, colon, unit, ya closing brace ghayab hai
*/

const CSS_PARAGRAPH = {
  Easy: [

// ── C1 ──
{
correct: `.box {
  width: 200px;
  height: 100px;
  background-color: blue;
}`,
wrong: `.box {
  width: 200px
  height: 100px;
  background-colr: blue;
}`,
totalMistakes: 5,
hint: "Missing semicolon after width, and fix spelling of background-color."
},

// ── C2 ──
{
correct: `.title {
  color: red;
  font-size: 24px;
  text-align: center;
}`,
wrong: `.title {
  COLOR: red;
  font-size: 24px
  text-align: centr;
}`,
totalMistakes: 5,
hint: "Lowercase the color property, add missing semicolon, fix spelling of center."
},

// ── C3 ──
{
correct: `p {
  margin: 10px;
  padding: 5px;
  line-height: 1.5;
}`,
wrong: `p {
  margn: 10px;
  PADDING: 5px;
  line-height: 1.5
}`,
totalMistakes: 5,
hint: "Fix spelling of margin, lowercase padding, add missing semicolon."
},

// ── C4 ──
{
correct: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
wrong: `.container {
  DISPLAY: flex;
  justify-content: centr;
  align-items: center
}`,
totalMistakes: 5,
hint: "Lowercase display, fix spelling of center, add missing semicolon."
},

// ── C5 ──
{
correct: `a {
  text-decoration: none;
  color: green;
}`,
wrong: `a {
  text-decoration: none
  COLOR: green;
}`,
totalMistakes: 5,
hint: "Add missing semicolon, lowercase color property."
},

// ── C6 ──
{
correct: `.card {
  border: 1px solid black;
  border-radius: 8px;
}`,
wrong: `.card {
  bordr: 1px solid black;
  border-radius: 8px
}`,
totalMistakes: 5,
hint: "Fix spelling of border, add missing semicolon."
},

// ── C7 ──
{
correct: `h1 {
  font-weight: bold;
  font-family: Arial;
}`,
wrong: `h1 {
  FONT-WEIGHT: bold;
  font-family: Arial
}`,
totalMistakes: 5,
hint: "Lowercase font-weight, add missing semicolon."
},

// ── C8 ──
{
correct: `.btn {
  background-color: orange;
  cursor: pointer;
  border: none;
}`,
wrong: `.btn {
  background-colr: orange;
  CURSOR: pointer;
  border: none
}`,
totalMistakes: 5,
hint: "Fix spelling of background-color, lowercase cursor, add missing semicolon."
},

// ── C9 ──
{
correct: `ul {
  list-style: none;
  padding: 0;
  margin: 0;
}`,
wrong: `ul {
  list-style: none
  padding: 0;
  MARGIN: 0;
}`,
totalMistakes: 5,
hint: "Add missing semicolon, lowercase margin."
},

// ── C10 ──
{
correct: `.input-field {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
}`,
wrong: `.input-field {
  widht: 100%;
  padding: 8px
  border-radius: 4px;
}`,
totalMistakes: 5,
hint: "Fix spelling of width, add missing semicolon."
},

// ── C11 ──
{
correct: `.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}`,
wrong: `.navbar {
  POSITION: fixed;
  top: 0
  width: 100%;
}`,
totalMistakes: 5,
hint: "Lowercase position, add missing semicolon."
},

// ── C12 ──
{
correct: `.footer {
  background-color: gray;
  padding: 20px;
  text-align: center;
}`,
wrong: `.footer {
  background-colour: gray;
  padding: 20px;
  text-align: centr
}`,
totalMistakes: 5,
hint: "Fix spelling of background-color, fix spelling of center, add missing semicolon."
},

// ── C13 ──
{
correct: `.image {
  width: 150px;
  height: auto;
  border-radius: 50%;
}`,
wrong: `.image {
  WIDTH: 150px;
  height: auto
  border-radius: 50%;
}`,
totalMistakes: 5,
hint: "Lowercase width, add missing semicolon."
},

// ── C14 ──
{
correct: `.heading {
  font-size: 32px;
  color: black;
  margin-bottom: 10px;
}`,
wrong: `.heading {
  fontsize: 32px;
  color: black;
  margin-bottom: 10px
}`,
totalMistakes: 5,
hint: "Add missing hyphen in font-size, add missing semicolon."
},

// ── C15 ──
{
correct: `.flex-row {
  display: flex;
  flex-direction: row;
  gap: 10px;
}`,
wrong: `.flex-row {
  display: flex
  flex-direction: row;
  GAP: 10px;
}`,
totalMistakes: 5,
hint: "Add missing semicolon, lowercase gap."
},

// ── C16 ──
{
correct: `.box-shadow {
  box-shadow: 2px 2px 5px gray;
  opacity: 0.9;
}`,
wrong: `.box-shadow {
  box-shadow: 2px 2px 5px gray
  OPACITY: 0.9;
}`,
totalMistakes: 5,
hint: "Add missing semicolon, lowercase opacity."
},

// ── C17 ──
{
correct: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}`,
wrong: `.grid {
  diplay: grid;
  grid-template-columns: 1fr 1fr
}`,
totalMistakes: 5,
hint: "Fix spelling of display, add missing semicolon."
},

// ── C18 ──
{
correct: `.text {
  font-style: italic;
  letter-spacing: 1px;
}`,
wrong: `.text {
  FONT-STYLE: italic;
  letter-spacing: 1px
}`,
totalMistakes: 5,
hint: "Lowercase font-style, add missing semicolon."
},

// ── C19 ──
{
correct: `.icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}`,
wrong: `.icon {
  width: 24px;
  hieght: 24px;
  vertical-align: middle
}`,
totalMistakes: 5,
hint: "Fix spelling of height, add missing semicolon."
},

// ── C20 ──
{
correct: `.section {
  padding: 40px;
  background-color: white;
}`,
wrong: `.section {
  PADDING: 40px;
  background-colr: white
}`,
totalMistakes: 5,
hint: "Lowercase padding, fix spelling of background-color, add missing semicolon."
},

// ── C21 ──
{
correct: `.btn-primary {
  color: white;
  background-color: blue;
  border-radius: 5px;
}`,
wrong: `.btn-primary {
  COLOR: white;
  background-color: blue
  border-radius: 5px;
}`,
totalMistakes: 5,
hint: "Lowercase color, add missing semicolon."
},

// ── C22 ──
{
correct: `.overlay {
  position: absolute;
  top: 0;
  left: 0;
}`,
wrong: `.overlay {
  postion: absolute;
  top: 0
  left: 0;
}`,
totalMistakes: 5,
hint: "Fix spelling of position, add missing semicolon."
},

// ── C23 ──
{
correct: `.link {
  text-decoration: underline;
  color: blue;
}`,
wrong: `.link {
  text-decoration: underline
  COLOR: blue;
}`,
totalMistakes: 5,
hint: "Add missing semicolon, lowercase color."
},

// ── C24 ──
{
correct: `.list-item {
  padding: 5px 10px;
  border-bottom: 1px solid gray;
}`,
wrong: `.list-item {
  paddng: 5px 10px;
  border-bottom: 1px solid gray
}`,
totalMistakes: 5,
hint: "Fix spelling of padding, add missing semicolon."
},

// ── C25 ──
{
correct: `body {
  margin: 0;
  font-family: sans-serif;
  background-color: lightgray;
}`,
wrong: `body {
  MARGIN: 0;
  font-family: sans-serif
  background-colr: lightgray;
}`,
totalMistakes: 6,
hint: "Lowercase margin, add missing semicolon, fix spelling of background-color."
},

// ── C26 ──
{
correct: `.modal {
  width: 400px;
  height: 300px;
  background-color: white;
  box-shadow: 0 0 10px gray;
}`,
wrong: `.modal {
  widht: 400px;
  height: 300px
  background-colr: white;
  BOX-SHADOW: 0 0 10px gray;
}`,
totalMistakes: 7,
hint: "Fix spelling of width, add missing semicolon, fix background-color spelling, lowercase box-shadow."
},

// ── C27 ──
{
correct: `.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}`,
wrong: `.header {
  DISPLAY: flex;
  justify-content: space-betwen
  padding: 10px 20px;
}`,
totalMistakes: 6,
hint: "Lowercase display, fix spelling of space-between, add missing semicolon."
},

// ── C28 ──
{
correct: `.button {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}`,
wrong: `.button {
  paddng: 10px 15px;
  BORDER: none;
  cursor: pointr
  font-size: 16px;
}`,
totalMistakes: 7,
hint: "Fix spelling of padding, lowercase border, fix spelling of pointer, add missing semicolon."
},

// ── C29 ──
{
correct: `.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}`,
wrong: `.profile-pic {
  WIDTH: 80px;
  height: 80px
  border-raduis: 50%;
  object-fit: cover;
}`,
totalMistakes: 6,
hint: "Lowercase width, add missing semicolon, fix spelling of border-radius."
},

// ── C30 ──
{
correct: `.alert {
  background-color: yellow;
  color: black;
  padding: 12px;
  border-radius: 4px;
}`,
wrong: `.alert {
  background-colr: yellow;
  COLOR: black;
  padding: 12px
  border-radius: 4px;
}`,
totalMistakes: 6,
hint: "Fix spelling of background-color, lowercase color, add missing semicolon."
},

// ── C31 ──
{
correct: `.sidebar {
  width: 250px;
  height: 100vh;
  background-color: darkgray;
}`,
wrong: `.sidebar {
  width: 250px
  hieght: 100vh;
  BACKGROUND-COLOR: darkgray;
}`,
totalMistakes: 6,
hint: "Add missing semicolon, fix spelling of height, lowercase background-color."
},

// ── C32 ──
{
correct: `.tooltip {
  position: absolute;
  z-index: 10;
  font-size: 12px;
}`,
wrong: `.tooltip {
  postion: absolute;
  Z-INDEX: 10
  font-size: 12px;
}`,
totalMistakes: 6,
hint: "Fix spelling of position, lowercase z-index, add missing semicolon."
},

// ── C33 ──
{
correct: `.banner {
  width: 100%;
  height: 200px;
  background-size: cover;
}`,
wrong: `.banner {
  WIDTH: 100%;
  height: 200px
  background-sze: cover;
}`,
totalMistakes: 6,
hint: "Lowercase width, add missing semicolon, fix spelling of background-size."
},

// ── C34 ──
{
correct: `.tab {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid gray;
}`,
wrong: `.tab {
  diplay: inline-block;
  PADDING: 8px 16px
  border: 1px solid gray;
}`,
totalMistakes: 6,
hint: "Fix spelling of display, lowercase padding, add missing semicolon."
},

// ── C35 ──
{
correct: `.checkbox {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}`,
wrong: `.checkbox {
  width: 16px;
  height: 16px
  margn-right: 5px;
}`,
totalMistakes: 5,
hint: "Add missing semicolon, fix spelling of margin-right."
},

// ── C36 ──
{
correct: `.quote {
  font-style: italic;
  border-left: 3px solid blue;
  padding-left: 10px;
}`,
wrong: `.quote {
  FONT-STYLE: italic;
  border-left: 3px solid blue
  paddng-left: 10px;
}`,
totalMistakes: 6,
hint: "Lowercase font-style, add missing semicolon, fix spelling of padding-left."
},

// ── C37 ──
{
correct: `.badge {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px;
}`,
wrong: `.badge {
  background-colr: red;
  COLOR: white;
  border-radius: 50%
  padding: 4px;
}`,
totalMistakes: 6,
hint: "Fix spelling of background-color, lowercase color, add missing semicolon."
},

// ── C38 ──
{
correct: `.divider {
  height: 1px;
  background-color: lightgray;
  margin: 20px 0;
}`,
wrong: `.divider {
  hieght: 1px;
  background-color: lightgray
  MARGIN: 20px 0;
}`,
totalMistakes: 6,
hint: "Fix spelling of height, add missing semicolon, lowercase margin."
},

// ── C39 ──
{
correct: `.dropdown {
  position: relative;
  display: inline-block;
}`,
wrong: `.dropdown {
  POSITION: relative;
  diplay: inline-block
}`,
totalMistakes: 5,
hint: "Lowercase position, fix spelling of display, add missing semicolon."
},

// ── C40 ──
{
correct: `.label {
  font-weight: bold;
  font-size: 14px;
  color: gray;
}`,
wrong: `.label {
  font-weght: bold;
  FONT-SIZE: 14px;
  color: gray
}`,
totalMistakes: 6,
hint: "Fix spelling of font-weight, lowercase font-size, add missing semicolon."
},

// ── C41 ──
{
correct: `.progress-bar {
  width: 100%;
  height: 10px;
  background-color: lightblue;
}`,
wrong: `.progress-bar {
  WIDTH: 100%;
  height: 10px
  background-colr: lightblue;
}`,
totalMistakes: 6,
hint: "Lowercase width, add missing semicolon, fix spelling of background-color."
},

// ── C42 ──
{
correct: `.thumbnail {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}`,
wrong: `.thumbnail {
  widht: 120px;
  height: 80px
  object-fit: cover;
  border-raduis: 6px;
}`,
totalMistakes: 6,
hint: "Fix spelling of width, add missing semicolon, fix spelling of border-radius."
},

// ── C43 ──
{
correct: `.search-box {
  width: 250px;
  padding: 6px;
  border: 1px solid gray;
}`,
wrong: `.search-box {
  WIDTH: 250px;
  padding: 6px
  bordr: 1px solid gray;
}`,
totalMistakes: 6,
hint: "Lowercase width, add missing semicolon, fix spelling of border."
},

// ── C44 ──
{
correct: `.tag {
  display: inline-block;
  background-color: lightgreen;
  padding: 2px 8px;
}`,
wrong: `.tag {
  diplay: inline-block;
  BACKGROUND-COLOR: lightgreen;
  padding: 2px 8px
}`,
totalMistakes: 6,
hint: "Fix spelling of display, lowercase background-color, add missing semicolon."
},

// ── C45 ──
{
correct: `.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}`,
wrong: `.avatar {
  width: 50px;
  hieght: 50px
  border-radius: 50%;
}`,
totalMistakes: 5,
hint: "Fix spelling of height, add missing semicolon."
},

// ── C46 ──
{
correct: `.notification {
  position: fixed;
  top: 10px;
  right: 10px;
}`,
wrong: `.notification {
  postion: fixed;
  top: 10px
  RIGHT: 10px;
}`,
totalMistakes: 6,
hint: "Fix spelling of position, add missing semicolon, lowercase right."
},

// ── C47 ──
{
correct: `.scrollbar {
  overflow-y: scroll;
  height: 300px;
}`,
wrong: `.scrollbar {
  OVERFLOW-Y: scroll;
  hieght: 300px
}`,
totalMistakes: 6,
hint: "Lowercase overflow-y, fix spelling of height, add missing semicolon."
},

// ── C48 ──
{
correct: `.placeholder {
  color: gray;
  font-style: italic;
  opacity: 0.7;
}`,
wrong: `.placeholder {
  COLOR: gray;
  font-style: italic
  opcity: 0.7;
}`,
totalMistakes: 6,
hint: "Lowercase color, add missing semicolon, fix spelling of opacity."
},

// ── C49 ──
{
correct: `.spacer {
  height: 40px;
  width: 100%;
}`,
wrong: `.spacer {
  hieght: 40px;
  WIDTH: 100%
}`,
totalMistakes: 6,
hint: "Fix spelling of height, lowercase width, add missing semicolon."
},

// ── C50 ──
{
correct: `.error-text {
  color: red;
  font-size: 13px;
  margin-top: 4px;
}`,
wrong: `.error-text {
  COLOR: red;
  font-size: 13px
  margn-top: 4px;
}`,
totalMistakes: 6,
hint: "Lowercase color, add missing semicolon, fix spelling of margin-top."
},

// ── C51 ──
{
correct: `.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}`,
wrong: `.card-img {
  WIDTH: 100%;
  height: 180px
  object-fit: cover;
}`,
totalMistakes: 5,
hint: "Lowercase width, add missing semicolon."
},

// ── C52 ──
{
correct: `.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
wrong: `.flex-center {
  diplay: flex;
  align-items: center
  JUSTIFY-CONTENT: center;
}`,
totalMistakes: 6,
hint: "Fix spelling of display, add missing semicolon, lowercase justify-content."
},

// ── C53 ──
{
correct: `.price {
  font-size: 20px;
  font-weight: bold;
  color: green;
}`,
wrong: `.price {
  font-size: 20px;
  font-weght: bold;
  COLOR: green
}`,
totalMistakes: 6,
hint: "Fix spelling of font-weight, lowercase color, add missing semicolon."
},

// ── C54 ──
{
correct: `.rating {
  color: gold;
  font-size: 18px;
}`,
wrong: `.rating {
  COLOR: gold;
  font-sze: 18px
}`,
totalMistakes: 6,
hint: "Lowercase color, fix spelling of font-size, add missing semicolon."
},

// ── C55 ──
{
correct: `.menu-item {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid gray;
}`,
wrong: `.menu-item {
  paddng: 10px;
  CURSOR: pointer;
  border-bottom: 1px solid gray
}`,
totalMistakes: 6,
hint: "Fix spelling of padding, lowercase cursor, add missing semicolon."
},

// ── C56 ──
{
correct: `.logo {
  width: 120px;
  height: auto;
}`,
wrong: `.logo {
  widht: 120px;
  HEIGHT: auto
}`,
totalMistakes: 6,
hint: "Fix spelling of width, lowercase height, add missing semicolon."
},

// ── C57 ──
{
correct: `.hero-text {
  font-size: 36px;
  text-align: center;
  color: white;
}`,
wrong: `.hero-text {
  font-sze: 36px;
  text-align: centr;
  COLOR: white
}`,
totalMistakes: 7,
hint: "Fix spelling of font-size, fix spelling of center, lowercase color, add missing semicolon."
},

// ── C58 ──
{
correct: `.input-error {
  border: 1px solid red;
  background-color: pink;
}`,
wrong: `.input-error {
  bordr: 1px solid red;
  BACKGROUND-COLOR: pink
}`,
totalMistakes: 6,
hint: "Fix spelling of border, lowercase background-color, add missing semicolon."
},

// ── C59 ──
{
correct: `.checkbox-label {
  display: flex;
  align-items: center;
  gap: 5px;
}`,
wrong: `.checkbox-label {
  diplay: flex;
  align-items: center
  GAP: 5px;
}`,
totalMistakes: 6,
hint: "Fix spelling of display, add missing semicolon, lowercase gap."
},

// ── C60 ──
{
correct: `.star-icon {
  color: orange;
  font-size: 16px;
}`,
wrong: `.star-icon {
  COLOR: orange;
  font-sze: 16px
}`,
totalMistakes: 6,
hint: "Lowercase color, fix spelling of font-size, add missing semicolon."
},

// ── C61 ──
{
correct: `.box-outline {
  border: 2px dashed black;
  padding: 15px;
}`,
wrong: `.box-outline {
  bordr: 2px dashed black;
  paddng: 15px
}`,
totalMistakes: 6,
hint: "Fix spelling of border, fix spelling of padding, add missing semicolon."
},

// ── C62 ──
{
correct: `.text-muted {
  color: gray;
  font-size: 14px;
}`,
wrong: `.text-muted {
  COLOR: gray;
  font-sze: 14px
}`,
totalMistakes: 6,
hint: "Lowercase color, fix spelling of font-size, add missing semicolon."
},

// ── C63 ──
{
correct: `.full-width {
  width: 100%;
  display: block;
}`,
wrong: `.full-width {
  widht: 100%;
  DISPLAY: block
}`,
totalMistakes: 6,
hint: "Fix spelling of width, lowercase display, add missing semicolon."
},

// ── C64 ──
{
correct: `.image-frame {
  border: 5px solid white;
  box-shadow: 0 0 8px gray;
}`,
wrong: `.image-frame {
  bordr: 5px solid white;
  BOX-SHADOW: 0 0 8px gray
}`,
totalMistakes: 6,
hint: "Fix spelling of border, lowercase box-shadow, add missing semicolon."
},

// ── C65 ──
{
correct: `.center-text {
  text-align: center;
  margin: 0 auto;
}`,
wrong: `.center-text {
  text-align: centr;
  MARGIN: 0 auto
}`,
totalMistakes: 6,
hint: "Fix spelling of center, lowercase margin, add missing semicolon."
},

// ── C66 ──
{
correct: `.icon-button {
  width: 32px;
  height: 32px;
  cursor: pointer;
}`,
wrong: `.icon-button {
  WIDTH: 32px;
  height: 32px
  cursr: pointer;
}`,
totalMistakes: 6,
hint: "Lowercase width, add missing semicolon, fix spelling of cursor."
},

// ── C67 ──
{
correct: `.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`,
wrong: `.toast {
  postion: fixed;
  bottom: 20px
  RIGHT: 20px;
}`,
totalMistakes: 6,
hint: "Fix spelling of position, add missing semicolon, lowercase right."
},

// ── C68 ──
{
correct: `.quote-box {
  font-style: italic;
  color: gray;
  padding: 10px;
}`,
wrong: `.quote-box {
  FONT-STYLE: italic;
  color: gray
  paddng: 10px;
}`,
totalMistakes: 6,
hint: "Lowercase font-style, add missing semicolon, fix spelling of padding."
},

// ── C69 ──
{
correct: `.input-group {
  display: flex;
  gap: 8px;
}`,
wrong: `.input-group {
  diplay: flex;
  GAP: 8px
}`,
totalMistakes: 6,
hint: "Fix spelling of display, lowercase gap, add missing semicolon."
},

// ── C70 ──
{
correct: `.list-bullet {
  list-style: disc;
  margin-left: 20px;
}`,
wrong: `.list-bullet {
  list-stle: disc;
  MARGIN-LEFT: 20px
}`,
totalMistakes: 6,
hint: "Fix spelling of list-style, lowercase margin-left, add missing semicolon."
},

// ── C71 ──
{
correct: `.profile-card {
  width: 300px;
  padding: 16px;
  border-radius: 10px;
}`,
wrong: `.profile-card {
  widht: 300px;
  padding: 16px
  border-raduis: 10px;
}`,
totalMistakes: 6,
hint: "Fix spelling of width, add missing semicolon, fix spelling of border-radius."
},

// ── C72 ──
{
correct: `.nav-link {
  color: white;
  padding: 8px 12px;
  text-decoration: none;
}`,
wrong: `.nav-link {
  COLOR: white;
  padding: 8px 12px
  text-decoration: non;
}`,
totalMistakes: 6,
hint: "Lowercase color, add missing semicolon, fix spelling of none."
},

// ── C73 ──
{
correct: `.skeleton {
  background-color: lightgray;
  height: 20px;
  border-radius: 4px;
}`,
wrong: `.skeleton {
  background-colr: lightgray;
  hieght: 20px
  border-radius: 4px;
}`,
totalMistakes: 6,
hint: "Fix spelling of background-color, fix spelling of height, add missing semicolon."
},

// ── C74 ──
{
correct: `.review-card {
  padding: 14px;
  border: 1px solid lightgray;
}`,
wrong: `.review-card {
  paddng: 14px;
  bordr: 1px solid lightgray
}`,
totalMistakes: 6,
hint: "Fix spelling of padding, fix spelling of border, add missing semicolon."
},

// ── C75 ──
{
correct: `.cta-button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
}`,
wrong: `.cta-button {
  background-colr: green;
  COLOR: white;
  padding: 10px 20px
  border-raduis: 6px;
}`,
totalMistakes: 7,
hint: "Fix spelling of background-color, lowercase color, add missing semicolon, fix spelling of border-radius."
},

// ── C76 ──
{
correct: `.popup {
  width: 320px;
  background-color: white;
  border-radius: 8px;
}`,
wrong: `.popup {
  widht: 320px;
  background-colr: white
  border-radius: 8px;
}`,
totalMistakes: 6,
hint: "Fix spelling of width, fix spelling of background-color, add missing semicolon."
},

// ── C77 ──
{
correct: `.form-label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}`,
wrong: `.form-label {
  font-sze: 14px;
  FONT-WEIGHT: 600
  margin-bottom: 4px;
}`,
totalMistakes: 6,
hint: "Fix spelling of font-size, lowercase font-weight, add missing semicolon."
},

// ── C78 ──
{
correct: `.divider-line {
  border-top: 1px solid lightgray;
  margin: 16px 0;
}`,
wrong: `.divider-line {
  bordr-top: 1px solid lightgray;
  MARGIN: 16px 0
}`,
totalMistakes: 6,
hint: "Fix spelling of border-top, lowercase margin, add missing semicolon."
},

// ── C79 ──
{
correct: `.tag-pill {
  background-color: lightblue;
  border-radius: 20px;
  padding: 4px 12px;
}`,
wrong: `.tag-pill {
  background-colr: lightblue;
  border-raduis: 20px;
  paddng: 4px 12px;
}`,
totalMistakes: 5,
hint: "Fix spelling of background-color, fix spelling of border-radius, fix spelling of padding."
},

// ── C80 ──
{
correct: `.video-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}`,
wrong: `.video-wrapper {
  WIDTH: 100%;
  height: 0
  padding-bottm: 56.25%;
}`,
totalMistakes: 6,
hint: "Lowercase width, add missing semicolon, fix spelling of padding-bottom."
},

// ── C81 ──
{
correct: `.chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
}`,
wrong: `.chip {
  diplay: inline-flex;
  align-items: center
  paddng: 6px 10px;
}`,
totalMistakes: 6,
hint: "Fix spelling of display, add missing semicolon, fix spelling of padding."
},

// ── C82 ──
{
correct: `.error-box {
  border: 1px solid red;
  color: red;
  padding: 10px;
}`,
wrong: `.error-box {
  bordr: 1px solid red;
  COLOR: red
  padding: 10px;
}`,
totalMistakes: 6,
hint: "Fix spelling of border, lowercase color, add missing semicolon."
},

// ── C83 ──
{
correct: `.success-box {
  border: 1px solid green;
  background-color: lightgreen;
}`,
wrong: `.success-box {
  bordr: 1px solid green;
  BACKGROUND-COLOR: lightgreen
}`,
totalMistakes: 6,
hint: "Fix spelling of border, lowercase background-color, add missing semicolon."
},

// ── C84 ──
{
correct: `.faq-item {
  padding: 12px 0;
  border-bottom: 1px solid lightgray;
}`,
wrong: `.faq-item {
  paddng: 12px 0;
  border-bottm: 1px solid lightgray
}`,
totalMistakes: 6,
hint: "Fix spelling of padding, fix spelling of border-bottom, add missing semicolon."
},

// ── C85 ──
{
correct: `.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
wrong: `.center-box {
  diplay: flex;
  justify-content: centr;
  align-items: center
  HEIGHT: 100vh;
}`,
totalMistakes: 7,
hint: "Fix spelling of display, fix spelling of center, add missing semicolon, lowercase height."
},

// ── C86 ──
{
correct: `.pricing-card {
  width: 280px;
  padding: 20px;
  text-align: center;
}`,
wrong: `.pricing-card {
  widht: 280px;
  padding: 20px
  text-align: centr;
}`,
totalMistakes: 6,
hint: "Fix spelling of width, add missing semicolon, fix spelling of center."
},

// ── C87 ──
{
correct: `.testimonial {
  font-style: italic;
  color: gray;
  font-size: 15px;
}`,
wrong: `.testimonial {
  FONT-STYLE: italic;
  color: gray
  font-sze: 15px;
}`,
totalMistakes: 6,
hint: "Lowercase font-style, add missing semicolon, fix spelling of font-size."
},

// ── C88 ──
{
correct: `.social-icon {
  width: 28px;
  height: 28px;
  margin-right: 8px;
}`,
wrong: `.social-icon {
  WIDTH: 28px;
  height: 28px
  margn-right: 8px;
}`,
totalMistakes: 6,
hint: "Lowercase width, add missing semicolon, fix spelling of margin-right."
},

// ── C89 ──
{
correct: `.stepper {
  display: flex;
  gap: 12px;
  align-items: center;
}`,
wrong: `.stepper {
  diplay: flex;
  GAP: 12px
  align-items: center;
}`,
totalMistakes: 6,
hint: "Fix spelling of display, lowercase gap, add missing semicolon."
},

// ── C90 ──
{
correct: `.tooltip-box {
  background-color: black;
  color: white;
  padding: 6px;
}`,
wrong: `.tooltip-box {
  background-colr: black;
  COLOR: white
  padding: 6px;
}`,
totalMistakes: 6,
hint: "Fix spelling of background-color, lowercase color, add missing semicolon."
},

// ── C91 ──
{
correct: `.feature-box {
  width: 100%;
  padding: 24px;
  border-radius: 12px;
}`,
wrong: `.feature-box {
  widht: 100%;
  padding: 24px
  border-raduis: 12px;
}`,
totalMistakes: 6,
hint: "Fix spelling of width, add missing semicolon, fix spelling of border-radius."
},

// ── C92 ──
{
correct: `.cart-icon {
  position: relative;
  cursor: pointer;
}`,
wrong: `.cart-icon {
  postion: relative;
  CURSOR: pointer
}`,
totalMistakes: 6,
hint: "Fix spelling of position, lowercase cursor, add missing semicolon."
},

// ── C93 ──
{
correct: `.badge-count {
  background-color: red;
  color: white;
  font-size: 10px;
}`,
wrong: `.badge-count {
  background-colr: red;
  COLOR: white
  font-sze: 10px;
}`,
totalMistakes: 7,
hint: "Fix spelling of background-color, lowercase color, add missing semicolon, fix spelling of font-size."
},

// ── C94 ──
{
correct: `.accordion-header {
  padding: 14px;
  cursor: pointer;
  background-color: white;
}`,
wrong: `.accordion-header {
  paddng: 14px;
  CURSOR: pointer
  background-colr: white;
}`,
totalMistakes: 7,
hint: "Fix spelling of padding, lowercase cursor, add missing semicolon, fix spelling of background-color."
},

// ── C95 ──
{
correct: `.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 1px solid gray;
}`,
wrong: `.checkbox-custom {
  WIDTH: 18px;
  height: 18px
  bordr: 1px solid gray;
}`,
totalMistakes: 6,
hint: "Lowercase width, add missing semicolon, fix spelling of border."
},

// ── C96 ──
{
correct: `.hero-banner {
  height: 400px;
  background-color: navy;
  color: white;
}`,
wrong: `.hero-banner {
  hieght: 400px;
  BACKGROUND-COLOR: navy
  color: white;
}`,
totalMistakes: 6,
hint: "Fix spelling of height, lowercase background-color, add missing semicolon."
},

// ── C97 ──
{
correct: `.image-caption {
  font-size: 12px;
  color: gray;
  text-align: center;
}`,
wrong: `.image-caption {
  font-sze: 12px;
  COLOR: gray
  text-align: centr;
}`,
totalMistakes: 7,
hint: "Fix spelling of font-size, lowercase color, add missing semicolon, fix spelling of center."
},

// ── C98 ──
{
correct: `.cookie-banner {
  position: fixed;
  bottom: 0;
  width: 100%;
}`,
wrong: `.cookie-banner {
  postion: fixed;
  bottom: 0
  WIDTH: 100%;
}`,
totalMistakes: 6,
hint: "Fix spelling of position, add missing semicolon, lowercase width."
},

// ── C99 ──
{
correct: `.review-stars {
  color: gold;
  font-size: 20px;
  letter-spacing: 2px;
}`,
wrong: `.review-stars {
  COLOR: gold;
  font-sze: 20px
  letter-spacing: 2px;
}`,
totalMistakes: 6,
hint: "Lowercase color, fix spelling of font-size, add missing semicolon."
},

// ── C100 ──
{
correct: `.final-box {
  width: 100%;
  height: 50px;
  background-color: teal;
  border-radius: 6px;
  text-align: center;
}`,
wrong: `.final-box {
  WIDHT: 100%;
  HEIGHT: 50px
  background-colr: teal;
  border-raduis: 6px;
  text-align: centr;
}`,
totalMistakes: 8,
hint: "Fix spelling and case of width, lowercase height, add missing semicolon, fix background-color spelling, fix border-radius spelling, fix center spelling."
}

  ],


    MEDIUM: [
/* ── Paragraph Mistakes — Medium CSS Data ──
   Medium: 15-20 mistakes per code
   Total: 10 paragraphs (M1 - M10)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, BLUE → blue)
     'spelling'= spelling galat (colr → color, marign → margin)
     'missing' = semicolon, colon, unit, ya closing brace ghayab hai
*/


// ── M1 ──
{
correct: `.hero-section {
  width: 100%;
  height: 500px;
  background-color: darkblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 10px gray;
}`,
wrong: `.hero-section {
  WIDTH: 100%;
  height: 500px
  background-colr: darkblue;
  COLOR: white;
  diplay: flex;
  justify-content: centr;
  align-items: center
  font-size: 24px
  FONT-WEIGHT: bold;
  border-raduis: 8px;
  paddng: 20px;
  margn: 0 auto;
  text-align: centr;
  box-shadow: 0 4px 10px gray
}`,
totalMistakes: 15,
hint: "Lowercase WIDTH, add semicolons after height/align-items/font-size, fix background-color, lowercase COLOR, fix diplay→display, fix centr→center (x2), fix FONT-WEIGHT, fix border-raduis, fix paddng, fix margn, add semicolons after last property."
},

// ── M2 ──
{
correct: `.dashboard-card {
  width: 320px;
  height: 200px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 16px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: black;
  cursor: pointer;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
}`,
wrong: `.dashboard-card {
  widht: 320px;
  hieght: 200px
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray;
  border-radius: 12px
  paddng: 16px;
  margn: 10px;
  DISPLAY: flex;
  flex-direction: column
  justify-content: space-betwen;
  font-sze: 14px;
  COLOR: black;
  CURSOR: pointer;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1)
}`,
totalMistakes: 15,
hint: "Fix widht→width, fix hieght→height, add semicolon after height, lowercase BACKGROUND-COLOR, fix bordr→border, add semicolon after border-radius, fix paddng→padding, fix margn→margin, lowercase DISPLAY, add semicolon after flex-direction, fix space-betwen, fix font-sze, lowercase COLOR, lowercase CURSOR, add last semicolon."
},

// ── M3 ──
{
correct: `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: navy;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
  font-size: 16px;
  box-shadow: 0 2px 5px black;
}`,
wrong: `.navbar {
  postion: fixed;
  top: 0
  LEFT: 0;
  widht: 100%;
  height: 60px
  background-colr: navy;
  COLOR: white;
  diplay: flex;
  justify-content: space-betwen
  ALIGN-ITEMS: center;
  paddng: 0 20px;
  z-index: 100
  font-sze: 16px;
  BOX-SHADOW: 0 2px 5px black;
}`,
totalMistakes: 16,
hint: "Fix postion→position, add semicolon after top, lowercase LEFT, fix widht→width, add semicolon after height, fix background-colr, lowercase COLOR, fix diplay→display, add semicolon after space-betwen and fix spelling, lowercase ALIGN-ITEMS, fix paddng, add semicolon after z-index, fix font-sze, lowercase BOX-SHADOW."
},

// ── M4 ──
{
correct: `.profile-card {
  width: 280px;
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  font-family: Arial;
  font-size: 15px;
  color: gray;
  border: 1px solid lightgray;
  cursor: pointer;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 12px lightgray;
}`,
wrong: `.profile-card {
  widht: 280px;
  BACKGROUND-COLOR: white
  border-raduis: 16px;
  paddng: 24px;
  TEXT-ALIGN: center;
  font-family: Arial
  font-sze: 15px;
  COLOR: gray;
  bordr: 1px solid lightgray;
  CURSOR: pointer;
  margn: 10px auto;
  diplay: flex;
  flex-direction: column
  ALIGN-ITEMS: center;
  box-shadow: 0 0 12px lightgray
}`,
totalMistakes: 16,
hint: "Fix widht→width, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng, lowercase TEXT-ALIGN, add semicolon after font-family, fix font-sze, lowercase COLOR, fix bordr→border, lowercase CURSOR, fix margn, fix diplay→display, add semicolon after column, lowercase ALIGN-ITEMS, add last semicolon."
},

// ── M5 ──
{
correct: `.login-form {
  width: 400px;
  background-color: white;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 16px gray;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  color: black;
  border: 1px solid lightgray;
  margin: 40px auto;
  text-align: left;
  font-family: sans-serif;
  position: relative;
}`,
wrong: `.login-form {
  widht: 400px;
  background-colr: white;
  PADDING: 32px
  border-raduis: 10px;
  BOX-SHADOW: 0 4px 16px gray;
  diplay: flex;
  FLEX-DIRECTION: column;
  GAP: 16px
  font-sze: 14px;
  COLOR: black;
  bordr: 1px solid lightgray
  margn: 40px auto;
  text-align: left
  font-family: sans-serif;
  postion: relative
}`,
totalMistakes: 17,
hint: "Fix widht, fix background-colr, lowercase PADDING + add semicolon, fix border-raduis, lowercase BOX-SHADOW, fix diplay→display, lowercase FLEX-DIRECTION, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR, fix bordr + add semicolon, fix margn, add semicolon after text-align, fix postion + add semicolon."
},

// ── M6 ──
{
correct: `.footer {
  width: 100%;
  background-color: black;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 13px;
  flex-wrap: wrap;
  gap: 20px;
  border-top: 2px solid gray;
  margin-top: 0;
  text-align: left;
  letter-spacing: 0.5px;
  line-height: 1.8;
}`,
wrong: `.footer {
  WIDTH: 100%;
  background-colr: black;
  COLOR: white
  paddng: 40px 20px;
  diplay: flex;
  justify-content: space-betwen;
  ALIGN-ITEMS: flex-start
  font-sze: 13px;
  FLEX-WRAP: wrap;
  GAP: 20px
  bordr-top: 2px solid gray;
  margn-top: 0;
  text-align: left
  LETTER-SPACING: 0.5px;
  line-hieght: 1.8
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH, fix background-colr, lowercase COLOR + add semicolon, fix paddng, fix diplay, fix space-betwen, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase FLEX-WRAP, lowercase GAP + add semicolon, fix bordr-top, fix margn-top, add semicolon after text-align, lowercase LETTER-SPACING, fix line-hieght + add semicolon."
},

// ── M7 ──
{
correct: `.product-card {
  width: 260px;
  height: 360px;
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: black;
  border: 1px solid lightgray;
  cursor: pointer;
  margin: 8px;
  box-shadow: 0 2px 8px lightgray;
  text-align: center;
}`,
wrong: `.product-card {
  widht: 260px;
  hieght: 360px
  BACKGROUND-COLOR: white;
  border-raduis: 10px;
  paddng: 16px
  diplay: flex;
  flex-direction: column
  justify-content: space-betwen;
  font-sze: 14px;
  COLOR: black;
  bordr: 1px solid lightgray
  CURSOR: pointer;
  margn: 8px;
  BOX-SHADOW: 0 2px 8px lightgray;
  TEXT-ALIGN: center
}`,
totalMistakes: 17,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, fix diplay, add semicolon after column, fix space-betwen, fix font-sze, lowercase COLOR, fix bordr + add semicolon, lowercase CURSOR, fix margn, lowercase BOX-SHADOW, lowercase TEXT-ALIGN + add semicolon."
},

// ── M8 ──
{
correct: `.modal-box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 480px;
  background-color: white;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 15px;
  color: black;
  text-align: left;
}`,
wrong: `.modal-box {
  postion: fixed;
  TOP: 50%
  left: 50%;
  widht: 480px;
  BACKGROUND-COLOR: white
  border-raduis: 12px;
  paddng: 28px
  BOX-SHADOW: 0 8px 24px rgba(0,0,0,0.2);
  Z-INDEX: 999;
  diplay: flex;
  flex-direction: column
  GAP: 14px;
  font-sze: 15px
  COLOR: black;
  TEXT-ALIGN: left
}`,
totalMistakes: 18,
hint: "Fix postion, lowercase TOP + add semicolon, fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, lowercase BOX-SHADOW, lowercase Z-INDEX, fix diplay, add semicolon after column, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, lowercase TEXT-ALIGN + add semicolon."
},

// ── M9 ──
{
correct: `.sidebar {
  width: 250px;
  height: 100vh;
  background-color: darkgray;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  overflow-y: auto;
  z-index: 50;
}`,
wrong: `.sidebar {
  widht: 250px;
  HEIGHT: 100vh
  BACKGROUND-COLOR: darkgray;
  color: white
  postion: fixed;
  TOP: 0;
  left: 0
  diplay: flex;
  FLEX-DIRECTION: column;
  paddng: 20px
  GAP: 12px;
  font-sze: 14px;
  FONT-WEIGHT: 500;
  OVERFLOW-Y: auto
  Z-INDEX: 50
}`,
totalMistakes: 17,
hint: "Fix widht, lowercase HEIGHT + add semicolon, lowercase BACKGROUND-COLOR, add semicolon after white, fix postion, lowercase TOP, add semicolon after left, fix diplay, lowercase FLEX-DIRECTION, fix paddng + add semicolon, lowercase GAP, fix font-sze, lowercase FONT-WEIGHT, lowercase OVERFLOW-Y + add semicolon, lowercase Z-INDEX + add semicolon."
},

// ── M10 ──
{
correct: `.checkout-form {
  width: 560px;
  background-color: white;
  border-radius: 14px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 1px solid lightgray;
  box-shadow: 0 6px 20px lightgray;
  font-size: 15px;
  color: black;
  font-family: Arial;
  margin: 30px auto;
  cursor: default;
  text-align: left;
  position: relative;
}`,
wrong: `.checkout-form {
  widht: 560px
  BACKGROUND-COLOR: white;
  border-raduis: 14px;
  PADDING: 36px
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 18px;
  bordr: 1px solid lightgray;
  BOX-SHADOW: 0 6px 20px lightgray
  font-sze: 15px;
  COLOR: black
  font-family: Arial;
  margn: 30px auto;
  CURSOR: default;
  TEXT-ALIGN: left
  postion: relative
}`,
totalMistakes: 18,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase PADDING + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix bordr, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix margn, lowercase CURSOR, lowercase TEXT-ALIGN + add semicolon, fix postion + add semicolon."
},

/* ── Paragraph Mistakes — Medium CSS Data ──
   Medium: 15-20 mistakes per code
   Total: 15 paragraphs (M11 - M25)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, BLUE → blue)
     'spelling'= spelling galat (colr → color, marign → margin)
     'missing' = semicolon, colon, unit, ya closing brace ghayab hai
*/



// ── M11 ──
{
correct: `.banner {
  width: 100%;
  height: 300px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  margin: 20px 0;
  letter-spacing: 2px;
  box-shadow: 0 4px 12px gray;
}`,
wrong: `.banner {
  WIDTH: 100%;
  hieght: 300px;
  background-colr: teal
  COLOR: white;
  diplay: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  font-sze: 28px;
  FONT-WEIGHT: bold;
  TEXT-ALIGN: center
  border-raduis: 6px;
  paddng: 10px;
  margn: 20px 0
  LETTER-SPACING: 2px;
  BOX-SHADOW: 0 4px 12px gray
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH, fix hieght→height, fix background-colr + add semicolon, lowercase COLOR, fix diplay, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase FONT-WEIGHT, lowercase TEXT-ALIGN + add semicolon, fix border-raduis, fix paddng, fix margn + add semicolon, lowercase LETTER-SPACING, lowercase BOX-SHADOW + add semicolon."
},

// ── M12 ──
{
correct: `.sidebar-menu {
  width: 220px;
  height: 100vh;
  background-color: white;
  border-right: 1px solid lightgray;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 10px;
  font-size: 14px;
  color: black;
  overflow-y: auto;
}`,
wrong: `.sidebar-menu {
  widht: 220px;
  HEIGHT: 100vh
  BACKGROUND-COLOR: white;
  border-right: 1px solid lightgray
  postion: fixed;
  TOP: 0
  left: 0;
  diplay: flex;
  FLEX-DIRECTION: column
  paddng: 24px 16px;
  GAP: 10px
  font-sze: 14px;
  COLOR: black
  OVERFLOW-Y: auto
}`,
totalMistakes: 15,
hint: "Fix widht, lowercase HEIGHT + add semicolon, lowercase BACKGROUND-COLOR, add semicolon after border-right, fix postion, lowercase TOP + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, fix paddng, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR, lowercase OVERFLOW-Y + add semicolon."
},

// ── M13 ──
{
correct: `.notification-bar {
  width: 100%;
  background-color: orange;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  position: relative;
}`,
wrong: `.notification-bar {
  widht: 100%;
  BACKGROUND-COLOR: orange
  color: white
  paddng: 10px 20px;
  TEXT-ALIGN: center;
  font-sze: 14px
  FONT-WEIGHT: 600;
  diplay: flex;
  justify-content: space-betwen
  ALIGN-ITEMS: center;
  border-raduis: 4px;
  CURSOR: pointer
  LETTER-SPACING: 0.5px;
  margn-bottom: 12px;
  postion: relative
}`,
totalMistakes: 17,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, add semicolon after white, fix paddng, lowercase TEXT-ALIGN, fix font-sze + add semicolon, lowercase FONT-WEIGHT, fix diplay, fix space-betwen + add semicolon, lowercase ALIGN-ITEMS, fix border-raduis, lowercase CURSOR + add semicolon, lowercase LETTER-SPACING, fix margn-bottom, fix postion + add semicolon."
},

// ── M14 ──
{
correct: `.tab-bar {
  display: flex;
  width: 100%;
  background-color: white;
  border-bottom: 2px solid lightgray;
  padding: 0 16px;
  gap: 8px;
  font-size: 14px;
  color: gray;
  font-weight: 500;
  align-items: center;
  cursor: pointer;
  height: 48px;
  letter-spacing: 0.3px;
  position: sticky;
  top: 0;
}`,
wrong: `.tab-bar {
  DISPLAY: flex
  widht: 100%;
  BACKGROUND-COLOR: white;
  bordr-bottom: 2px solid lightgray;
  paddng: 0 16px
  GAP: 8px;
  font-sze: 14px;
  COLOR: gray
  FONT-WEIGHT: 500;
  ALIGN-ITEMS: center
  CURSOR: pointer;
  hieght: 48px
  LETTER-SPACING: 0.3px;
  postion: sticky;
  TOP: 0
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, fix widht, lowercase BACKGROUND-COLOR, fix bordr-bottom, fix paddng + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT, lowercase ALIGN-ITEMS + add semicolon, lowercase CURSOR, fix hieght + add semicolon, lowercase LETTER-SPACING, fix postion, lowercase TOP + add semicolon."
},

// ── M15 ──
{
correct: `.search-bar {
  width: 100%;
  max-width: 500px;
  height: 44px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 22px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: black;
  gap: 8px;
  cursor: text;
  box-shadow: 0 2px 6px lightgray;
  margin: 0 auto;
}`,
wrong: `.search-bar {
  WIDTH: 100%;
  max-width: 500px
  hieght: 44px;
  background-colr: white;
  bordr: 1px solid lightgray
  border-raduis: 22px;
  paddng: 0 16px;
  DISPLAY: flex
  ALIGN-ITEMS: center;
  font-sze: 14px
  COLOR: black;
  GAP: 8px
  CURSOR: text;
  BOX-SHADOW: 0 2px 6px lightgray
  margn: 0 auto
}`,
totalMistakes: 17,
hint: "Lowercase WIDTH, add semicolon after max-width, fix hieght, fix background-colr, fix bordr + add semicolon, fix border-raduis, fix paddng, lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS, fix font-sze + add semicolon, lowercase COLOR, lowercase GAP + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW, fix margn + add semicolon."
},

// ── M16 ──
{
correct: `.user-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: 2px solid white;
  overflow: hidden;
  box-shadow: 0 2px 6px gray;
  margin: 0 auto;
}`,
wrong: `.user-avatar {
  widht: 64px;
  hieght: 64px
  border-raduis: 50%;
  BACKGROUND-COLOR: lightblue;
  DISPLAY: flex
  justify-content: centr;
  ALIGN-ITEMS: center;
  font-sze: 24px
  FONT-WEIGHT: bold;
  COLOR: white
  CURSOR: pointer;
  bordr: 2px solid white
  OVERFLOW: hidden;
  BOX-SHADOW: 0 2px 6px gray
  margn: 0 auto
}`,
totalMistakes: 17,
hint: "Fix widht, fix hieght + add semicolon, fix border-raduis, lowercase BACKGROUND-COLOR, lowercase DISPLAY + add semicolon, fix centr→center, lowercase ALIGN-ITEMS, fix font-sze + add semicolon, lowercase FONT-WEIGHT, lowercase COLOR + add semicolon, lowercase CURSOR, fix bordr + add semicolon, lowercase OVERFLOW, lowercase BOX-SHADOW, fix margn + add semicolon."
},

// ── M17 ──
{
correct: `.dropdown-menu {
  position: absolute;
  top: 48px;
  right: 0;
  width: 200px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px gray;
  z-index: 200;
  font-size: 14px;
  color: black;
  overflow: hidden;
}`,
wrong: `.dropdown-menu {
  postion: absolute;
  TOP: 48px;
  RIGHT: 0
  widht: 200px;
  background-colr: white;
  bordr: 1px solid lightgray
  border-raduis: 8px;
  paddng: 8px 0;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  BOX-SHADOW: 0 4px 12px gray
  Z-INDEX: 200;
  font-sze: 14px
  COLOR: black;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase TOP, lowercase RIGHT + add semicolon, fix widht, fix background-colr, fix bordr + add semicolon, fix border-raduis, fix paddng, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, lowercase BOX-SHADOW + add semicolon, lowercase Z-INDEX, fix font-sze + add semicolon, lowercase COLOR, lowercase OVERFLOW + add semicolon."
},

// ── M18 ──
{
correct: `.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 24px;
  background-color: lightgray;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 1100px;
  box-shadow: 0 2px 8px gray;
  font-size: 14px;
  color: black;
  align-items: start;
  justify-content: center;
  overflow: hidden;
}`,
wrong: `.card-grid {
  DISPLAY: grid
  grid-template-columns: repeat(3, 1fr)
  GAP: 20px;
  widht: 100%;
  paddng: 24px;
  BACKGROUND-COLOR: lightgray
  border-raduis: 10px;
  margn: 0 auto;
  max-width: 1100px
  BOX-SHADOW: 0 2px 8px gray;
  font-sze: 14px;
  COLOR: black
  ALIGN-ITEMS: start;
  justify-content: centr
  OVERFLOW: hidden
}`,
totalMistakes: 17,
hint: "Lowercase DISPLAY + add semicolon, add semicolon after grid-template-columns, lowercase GAP, fix widht, fix paddng, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix margn, add semicolon after max-width, lowercase BOX-SHADOW, fix font-sze, lowercase COLOR + add semicolon, lowercase ALIGN-ITEMS, fix centr + add semicolon, lowercase OVERFLOW + add semicolon."
},

// ── M19 ──
{
correct: `.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  font-size: 14px;
  color: black;
  font-weight: 500;
  padding: 8px 0;
  border-bottom: 1px solid lightgray;
  margin-bottom: 16px;
  position: relative;
  cursor: text;
  background-color: transparent;
  letter-spacing: 0.3px;
  align-items: flex-start;
}`,
wrong: `.input-group {
  DISPLAY: flex
  flex-direction: column
  GAP: 6px;
  widht: 100%;
  font-sze: 14px;
  COLOR: black
  FONT-WEIGHT: 500;
  paddng: 8px 0
  bordr-bottom: 1px solid lightgray;
  margn-bottom: 16px;
  postion: relative
  CURSOR: text;
  BACKGROUND-COLOR: transparent
  LETTER-SPACING: 0.3px;
  ALIGN-ITEMS: flex-start
}`,
totalMistakes: 17,
hint: "Lowercase DISPLAY + add semicolon, add semicolon after column, lowercase GAP, fix widht, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT, fix paddng + add semicolon, fix bordr-bottom, fix margn-bottom, fix postion + add semicolon, lowercase CURSOR, lowercase BACKGROUND-COLOR + add semicolon, lowercase LETTER-SPACING, lowercase ALIGN-ITEMS + add semicolon."
},

// ── M20 ──
{
correct: `.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: gray;
  padding: 8px 0;
  width: 100%;
  letter-spacing: 0.3px;
  font-weight: 400;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  margin-bottom: 20px;
  background-color: white;
  text-align: left;
  flex-wrap: wrap;
}`,
wrong: `.breadcrumb {
  DISPLAY: flex
  ALIGN-ITEMS: center
  GAP: 8px;
  font-sze: 13px;
  COLOR: gray
  paddng: 8px 0;
  widht: 100%
  LETTER-SPACING: 0.3px;
  FONT-WEIGHT: 400
  bordr-bottom: 1px solid lightgray;
  CURSOR: pointer;
  margn-bottom: 20px
  background-colr: white;
  TEXT-ALIGN: left;
  FLEX-WRAP: wrap
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, fix paddng, fix widht + add semicolon, lowercase LETTER-SPACING, lowercase FONT-WEIGHT + add semicolon, fix bordr-bottom, lowercase CURSOR, fix margn-bottom + add semicolon, fix background-colr, lowercase TEXT-ALIGN, lowercase FLEX-WRAP + add semicolon."
},

// ── M21 ──
{
correct: `.toast-message {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: black;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px gray;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  z-index: 999;
}`,
wrong: `.toast-message {
  postion: fixed;
  BOTTOM: 24px
  RIGHT: 24px;
  background-colr: black;
  COLOR: white
  paddng: 12px 20px;
  border-raduis: 8px;
  font-sze: 14px
  FONT-WEIGHT: 500;
  BOX-SHADOW: 0 4px 12px gray
  DISPLAY: flex;
  ALIGN-ITEMS: center
  GAP: 10px;
  CURSOR: pointer
  Z-INDEX: 999
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase BOTTOM + add semicolon, lowercase RIGHT, fix background-colr, lowercase COLOR + add semicolon, fix paddng, fix border-raduis, fix font-sze + add semicolon, lowercase FONT-WEIGHT, lowercase BOX-SHADOW + add semicolon, lowercase DISPLAY, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, lowercase CURSOR + add semicolon, lowercase Z-INDEX + add semicolon."
},

// ── M22 ──
{
correct: `.pricing-table {
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 0 auto;
  padding: 32px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px lightgray;
  font-size: 15px;
  color: black;
  text-align: center;
  align-items: start;
  position: relative;
}`,
wrong: `.pricing-table {
  widht: 100%;
  max-width: 900px
  DISPLAY: grid;
  grid-template-columns: repeat(3, 1fr)
  GAP: 24px;
  margn: 0 auto;
  paddng: 32px
  BACKGROUND-COLOR: white;
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 16px lightgray
  font-sze: 15px;
  COLOR: black
  TEXT-ALIGN: center;
  ALIGN-ITEMS: start
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht, add semicolon after max-width, lowercase DISPLAY, add semicolon after grid-template-columns, lowercase GAP, fix margn, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase TEXT-ALIGN, lowercase ALIGN-ITEMS + add semicolon, fix postion + add semicolon."
},

// ── M23 ──
{
correct: `.media-player {
  width: 640px;
  height: 380px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px gray;
  cursor: pointer;
  margin: 0 auto;
  color: white;
  font-size: 13px;
}`,
wrong: `.media-player {
  widht: 640px;
  hieght: 380px
  BACKGROUND-COLOR: black;
  border-raduis: 10px;
  DISPLAY: flex
  flex-direction: column
  justify-content: flex-end
  paddng: 16px;
  postion: relative
  OVERFLOW: hidden;
  BOX-SHADOW: 0 8px 24px gray
  CURSOR: pointer;
  margn: 0 auto
  COLOR: white;
  font-sze: 13px
}`,
totalMistakes: 17,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase DISPLAY + add semicolon, add semicolon after column, add semicolon after flex-end, fix paddng, fix postion + add semicolon, lowercase OVERFLOW, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR, fix margn + add semicolon, lowercase COLOR, fix font-sze + add semicolon."
},

// ── M24 ──
{
correct: `.settings-panel {
  width: 380px;
  height: 100%;
  background-color: white;
  border-left: 1px solid lightgray;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  color: black;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  overflow-y: auto;
}`,
wrong: `.settings-panel {
  widht: 380px;
  HEIGHT: 100%
  BACKGROUND-COLOR: white;
  bordr-left: 1px solid lightgray;
  paddng: 24px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 16px;
  font-sze: 14px;
  COLOR: black
  postion: fixed;
  RIGHT: 0
  TOP: 0;
  Z-INDEX: 100
  OVERFLOW-Y: auto
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase HEIGHT + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-left, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, fix postion, lowercase RIGHT + add semicolon, lowercase TOP, lowercase Z-INDEX + add semicolon, lowercase OVERFLOW-Y + add semicolon."
},

// ── M25 ──
{
correct: `.full-page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: gray;
  cursor: default;
}`,
wrong: `.full-page-loader {
  postion: fixed;
  TOP: 0
  left: 0
  widht: 100%;
  hieght: 100vh;
  BACKGROUND-COLOR: white
  DISPLAY: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  Z-INDEX: 9999;
  FLEX-DIRECTION: column
  GAP: 16px;
  font-sze: 16px
  COLOR: gray;
  CURSOR: default
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase TOP + add semicolon, add semicolon after left, fix widht, fix hieght, lowercase BACKGROUND-COLOR + add semicolon, lowercase DISPLAY, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, lowercase Z-INDEX, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, lowercase CURSOR + add semicolon."
},


/* ── Paragraph Mistakes — Medium CSS Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (M26 - M50)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, BLUE → blue)
     'spelling'= spelling galat (colr → color, marign → margin)
     'missing' = semicolon, colon, unit, ya closing brace ghayab hai
*/


// ── M26 ──
{
correct: `.alert-box {
  width: 100%;
  background-color: lightyellow;
  border: 1px solid gold;
  border-radius: 6px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
  box-shadow: 0 2px 6px gold;
  position: relative;
}`,
wrong: `.alert-box {
  widht: 100%;
  BACKGROUND-COLOR: lightyellow
  bordr: 1px solid gold;
  border-raduis: 6px;
  paddng: 14px 18px
  DISPLAY: flex;
  ALIGN-ITEMS: center
  GAP: 12px;
  font-sze: 14px;
  COLOR: black
  FONT-WEIGHT: 500;
  CURSOR: pointer
  margn-bottom: 16px;
  BOX-SHADOW: 0 2px 6px gold
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix bordr, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT, lowercase CURSOR + add semicolon, fix margn-bottom, lowercase BOX-SHADOW, fix postion + add semicolon."
},

// ── M27 ──
{
correct: `.progress-bar {
  width: 100%;
  height: 10px;
  background-color: lightgray;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  margin: 8px 0;
  display: flex;
  align-items: center;
  cursor: default;
  box-shadow: inset 0 1px 3px gray;
  font-size: 12px;
  color: transparent;
  padding: 0;
  max-width: 600px;
}`,
wrong: `.progress-bar {
  widht: 100%;
  hieght: 10px
  BACKGROUND-COLOR: lightgray;
  border-raduis: 5px;
  OVERFLOW: hidden
  postion: relative;
  margn: 8px 0;
  DISPLAY: flex
  ALIGN-ITEMS: center
  CURSOR: default;
  BOX-SHADOW: inset 0 1px 3px gray
  font-sze: 12px;
  COLOR: transparent
  paddng: 0;
  max-width: 600px
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase OVERFLOW + add semicolon, fix postion, fix margn, lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix paddng, add semicolon after max-width."
},

// ── M28 ──
{
correct: `.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  font-weight: 400;
  background-color: transparent;
  text-align: left;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
  position: relative;
}`,
wrong: `.menu-item {
  DISPLAY: flex
  ALIGN-ITEMS: center
  GAP: 10px;
  paddng: 10px 16px;
  font-sze: 14px
  COLOR: black;
  CURSOR: pointer
  border-raduis: 6px;
  widht: 100%;
  FONT-WEIGHT: 400
  BACKGROUND-COLOR: transparent;
  TEXT-ALIGN: left
  LETTER-SPACING: 0.2px;
  margn-bottom: 4px
  postion: relative
}`,
totalMistakes: 17,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix paddng, fix font-sze + add semicolon, lowercase COLOR, lowercase CURSOR + add semicolon, fix border-raduis, fix widht, lowercase FONT-WEIGHT + add semicolon, lowercase BACKGROUND-COLOR, lowercase TEXT-ALIGN + add semicolon, lowercase LETTER-SPACING, fix margn-bottom + add semicolon, fix postion + add semicolon."
},

// ── M29 ──
{
correct: `.chat-bubble {
  max-width: 320px;
  background-color: lightblue;
  border-radius: 16px;
  padding: 10px 16px;
  font-size: 14px;
  color: black;
  display: inline-block;
  margin: 4px 0;
  word-break: break-word;
  box-shadow: 0 1px 4px gray;
  position: relative;
  cursor: default;
  letter-spacing: 0.2px;
  line-height: 1.5;
  font-weight: 400;
}`,
wrong: `.chat-bubble {
  max-width: 320px
  BACKGROUND-COLOR: lightblue;
  border-raduis: 16px;
  paddng: 10px 16px
  font-sze: 14px;
  COLOR: black;
  DISPLAY: inline-block
  margn: 4px 0;
  word-break: break-word
  BOX-SHADOW: 0 1px 4px gray;
  postion: relative
  CURSOR: default;
  LETTER-SPACING: 0.2px
  line-hieght: 1.5;
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Add semicolon after max-width, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, fix font-sze, lowercase COLOR, lowercase DISPLAY + add semicolon, fix margn, add semicolon after word-break, lowercase BOX-SHADOW, fix postion + add semicolon, lowercase CURSOR, lowercase LETTER-SPACING + add semicolon, fix line-hieght, lowercase FONT-WEIGHT + add semicolon."
},

// ── M30 ──
{
correct: `.file-upload-box {
  width: 100%;
  height: 180px;
  border: 2px dashed lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
  color: gray;
  gap: 10px;
  padding: 20px;
  text-align: center;
}`,
wrong: `.file-upload-box {
  widht: 100%;
  hieght: 180px
  bordr: 2px dashed lightgray;
  border-raduis: 10px;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  justify-content: centr;
  ALIGN-ITEMS: center
  BACKGROUND-COLOR: white;
  CURSOR: pointer
  font-sze: 14px;
  COLOR: gray
  GAP: 10px;
  paddng: 20px
  TEXT-ALIGN: center
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, fix bordr, fix border-raduis, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, lowercase BACKGROUND-COLOR, lowercase CURSOR + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase GAP, fix paddng + add semicolon, lowercase TEXT-ALIGN + add semicolon."
},

// ── M31 ──
{
correct: `.stat-card {
  width: 200px;
  height: 120px;
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 8px lightgray;
  font-size: 14px;
  color: black;
  border: 1px solid lightgray;
  cursor: default;
  text-align: left;
  position: relative;
}`,
wrong: `.stat-card {
  widht: 200px;
  hieght: 120px
  BACKGROUND-COLOR: white;
  border-raduis: 10px;
  paddng: 16px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: space-betwen;
  BOX-SHADOW: 0 2px 8px lightgray
  font-sze: 14px;
  COLOR: black
  bordr: 1px solid lightgray;
  CURSOR: default
  TEXT-ALIGN: left;
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, fix space-betwen, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix bordr, lowercase CURSOR + add semicolon, lowercase TEXT-ALIGN, fix postion + add semicolon."
},

// ── M32 ──
{
correct: `.kanban-card {
  width: 260px;
  background-color: white;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 2px 6px lightgray;
  font-size: 13px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: grab;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  position: relative;
  font-weight: 400;
}`,
wrong: `.kanban-card {
  widht: 260px
  BACKGROUND-COLOR: white;
  border-raduis: 8px;
  paddng: 12px 16px
  BOX-SHADOW: 0 2px 6px lightgray;
  font-sze: 13px;
  COLOR: black
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 8px;
  CURSOR: grab
  bordr: 1px solid lightgray;
  margn-bottom: 10px;
  postion: relative
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, lowercase BOX-SHADOW, fix font-sze, lowercase COLOR + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, lowercase CURSOR + add semicolon, fix bordr, fix margn-bottom, fix postion + add semicolon, lowercase FONT-WEIGHT + add semicolon."
},

// ── M33 ──
{
correct: `.timeline-item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid lightgray;
  width: 100%;
  font-size: 14px;
  color: black;
  position: relative;
  align-items: flex-start;
  cursor: default;
  background-color: white;
  margin-bottom: 8px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 1.6;
}`,
wrong: `.timeline-item {
  DISPLAY: flex
  GAP: 16px;
  paddng: 16px 0
  bordr-bottom: 1px solid lightgray;
  widht: 100%;
  font-sze: 14px
  COLOR: black;
  postion: relative
  ALIGN-ITEMS: flex-start;
  CURSOR: default
  BACKGROUND-COLOR: white;
  margn-bottom: 8px
  FONT-WEIGHT: 400;
  LETTER-SPACING: 0.2px
  line-hieght: 1.6
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase GAP, fix paddng + add semicolon, fix bordr-bottom, fix widht, fix font-sze + add semicolon, lowercase COLOR, fix postion + add semicolon, lowercase ALIGN-ITEMS, lowercase CURSOR + add semicolon, lowercase BACKGROUND-COLOR, fix margn-bottom + add semicolon, lowercase FONT-WEIGHT, lowercase LETTER-SPACING + add semicolon, fix line-hieght + add semicolon."
},

// ── M34 ──
{
correct: `.comment-box {
  width: 100%;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 14px;
  font-size: 14px;
  color: black;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  cursor: text;
  margin-bottom: 16px;
  box-shadow: 0 1px 4px lightgray;
  position: relative;
  font-weight: 400;
}`,
wrong: `.comment-box {
  widht: 100%;
  BACKGROUND-COLOR: white
  bordr: 1px solid lightgray;
  border-raduis: 8px;
  paddng: 14px
  font-sze: 14px;
  COLOR: black
  DISPLAY: flex;
  GAP: 12px
  ALIGN-ITEMS: flex-start;
  CURSOR: text
  margn-bottom: 16px;
  BOX-SHADOW: 0 1px 4px lightgray
  postion: relative;
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix bordr, fix border-raduis, fix paddng + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase DISPLAY, lowercase GAP + add semicolon, lowercase ALIGN-ITEMS, lowercase CURSOR + add semicolon, fix margn-bottom, lowercase BOX-SHADOW + add semicolon, fix postion, lowercase FONT-WEIGHT + add semicolon."
},

// ── M35 ──
{
correct: `.carousel-slide {
  width: 100%;
  height: 400px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 12px gray;
  text-align: center;
}`,
wrong: `.carousel-slide {
  widht: 100%;
  hieght: 400px
  BACKGROUND-COLOR: lightgray;
  DISPLAY: flex
  justify-content: centr;
  ALIGN-ITEMS: center
  border-raduis: 10px;
  OVERFLOW: hidden
  postion: relative;
  CURSOR: pointer
  font-sze: 20px;
  COLOR: white
  FONT-WEIGHT: bold;
  BOX-SHADOW: 0 4px 12px gray
  TEXT-ALIGN: center
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, lowercase DISPLAY + add semicolon, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, fix border-raduis, lowercase OVERFLOW + add semicolon, fix postion, lowercase CURSOR + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT, lowercase BOX-SHADOW + add semicolon, lowercase TEXT-ALIGN + add semicolon."
},

// ── M36 ──
{
correct: `.rating-stars {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  color: gold;
  cursor: pointer;
  padding: 4px 0;
  width: fit-content;
  letter-spacing: 2px;
  font-weight: bold;
  margin: 8px 0;
  background-color: transparent;
  border: none;
  position: relative;
  line-height: 1;
}`,
wrong: `.rating-stars {
  DISPLAY: flex
  ALIGN-ITEMS: center
  GAP: 4px;
  font-sze: 20px;
  COLOR: gold
  CURSOR: pointer;
  paddng: 4px 0
  widht: fit-content;
  LETTER-SPACING: 2px
  FONT-WEIGHT: bold;
  margn: 8px 0
  BACKGROUND-COLOR: transparent;
  BORDER: none
  postion: relative;
  LINE-HEIGHT: 1
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, fix paddng + add semicolon, fix widht, lowercase LETTER-SPACING + add semicolon, lowercase FONT-WEIGHT, fix margn + add semicolon, lowercase BACKGROUND-COLOR, lowercase BORDER + add semicolon, fix postion, lowercase LINE-HEIGHT + add semicolon."
},

// ── M37 ──
{
correct: `.dark-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  font-size: 14px;
  color: white;
  text-align: center;
}`,
wrong: `.dark-overlay {
  postion: fixed;
  TOP: 0
  left: 0
  widht: 100%;
  hieght: 100vh;
  background-colr: rgba(0,0,0,0.5);
  Z-INDEX: 500
  DISPLAY: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  CURSOR: pointer;
  OVERFLOW: hidden
  font-sze: 14px;
  COLOR: white
  TEXT-ALIGN: center
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase TOP + add semicolon, add semicolon after left, fix widht, fix hieght, fix background-colr, lowercase Z-INDEX + add semicolon, lowercase DISPLAY, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, lowercase CURSOR, lowercase OVERFLOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase TEXT-ALIGN + add semicolon."
},

// ── M38 ──
{
correct: `.step-indicator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
  font-size: 13px;
  color: gray;
  gap: 8px;
  font-weight: 500;
  border-bottom: 1px solid lightgray;
  cursor: default;
  background-color: white;
  position: relative;
  letter-spacing: 0.3px;
  margin-bottom: 24px;
}`,
wrong: `.step-indicator {
  DISPLAY: flex
  ALIGN-ITEMS: center
  justify-content: space-betwen;
  widht: 100%;
  paddng: 16px 0
  font-sze: 13px;
  COLOR: gray
  GAP: 8px;
  FONT-WEIGHT: 500
  bordr-bottom: 1px solid lightgray;
  CURSOR: default
  BACKGROUND-COLOR: white;
  postion: relative
  LETTER-SPACING: 0.3px;
  margn-bottom: 24px
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, fix space-betwen, fix widht, fix paddng + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase GAP, lowercase FONT-WEIGHT + add semicolon, fix bordr-bottom, lowercase CURSOR + add semicolon, lowercase BACKGROUND-COLOR, fix postion + add semicolon, lowercase LETTER-SPACING, fix margn-bottom + add semicolon."
},

// ── M39 ──
{
correct: `.map-container {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 1px solid lightgray;
  box-shadow: 0 4px 12px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  cursor: grab;
  margin: 16px 0;
  font-size: 14px;
  color: black;
}`,
wrong: `.map-container {
  widht: 100%;
  hieght: 400px
  border-raduis: 12px;
  OVERFLOW: hidden
  postion: relative;
  bordr: 1px solid lightgray;
  BOX-SHADOW: 0 4px 12px gray
  DISPLAY: flex;
  ALIGN-ITEMS: center
  justify-content: centr;
  BACKGROUND-COLOR: lightgray
  CURSOR: grab;
  margn: 16px 0
  font-sze: 14px;
  COLOR: black
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, fix border-raduis, lowercase OVERFLOW + add semicolon, fix postion, fix bordr, lowercase BOX-SHADOW + add semicolon, lowercase DISPLAY, lowercase ALIGN-ITEMS + add semicolon, fix centr→center, lowercase BACKGROUND-COLOR + add semicolon, lowercase CURSOR, fix margn + add semicolon, fix font-sze, lowercase COLOR + add semicolon."
},

// ── M40 ──
{
correct: `.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 0;
  width: 100%;
  font-size: 13px;
  color: black;
  align-items: center;
  cursor: default;
  background-color: white;
  border-bottom: 1px solid lightgray;
  margin-bottom: 12px;
  position: relative;
  letter-spacing: 0.2px;
  font-weight: 400;
}`,
wrong: `.tags-container {
  DISPLAY: flex
  FLEX-WRAP: wrap
  GAP: 8px;
  paddng: 12px 0;
  widht: 100%
  font-sze: 13px;
  COLOR: black
  ALIGN-ITEMS: center;
  CURSOR: default
  BACKGROUND-COLOR: white;
  bordr-bottom: 1px solid lightgray
  margn-bottom: 12px;
  postion: relative
  LETTER-SPACING: 0.2px;
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase FLEX-WRAP + add semicolon, lowercase GAP, fix paddng, fix widht + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase ALIGN-ITEMS, lowercase CURSOR + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-bottom + add semicolon, fix margn-bottom, fix postion + add semicolon, lowercase LETTER-SPACING, lowercase FONT-WEIGHT + add semicolon."
},

// ── M41 ──
{
correct: `.testimonial-card {
  width: 320px;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px lightgray;
  font-size: 14px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid lightgray;
  position: relative;
  cursor: default;
  text-align: left;
  font-weight: 400;
}`,
wrong: `.testimonial-card {
  widht: 320px
  BACKGROUND-COLOR: white;
  border-raduis: 12px;
  paddng: 24px
  BOX-SHADOW: 0 4px 16px lightgray;
  font-sze: 14px;
  COLOR: black
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 14px;
  bordr: 1px solid lightgray
  postion: relative;
  CURSOR: default
  TEXT-ALIGN: left;
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, lowercase BOX-SHADOW, fix font-sze, lowercase COLOR + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix bordr + add semicolon, fix postion, lowercase CURSOR + add semicolon, lowercase TEXT-ALIGN, lowercase FONT-WEIGHT + add semicolon."
},

// ── M42 ──
{
correct: `.notification-dot {
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  border: 2px solid white;
  display: inline-block;
  cursor: default;
  box-shadow: 0 0 4px red;
  z-index: 10;
  font-size: 0;
  color: transparent;
  overflow: hidden;
}`,
wrong: `.notification-dot {
  widht: 10px;
  hieght: 10px
  BACKGROUND-COLOR: red;
  border-raduis: 50%;
  postion: absolute;
  TOP: 0
  RIGHT: 0;
  bordr: 2px solid white;
  DISPLAY: inline-block
  CURSOR: default;
  BOX-SHADOW: 0 0 4px red
  Z-INDEX: 10;
  font-sze: 0
  COLOR: transparent;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix postion, lowercase TOP + add semicolon, lowercase RIGHT, fix bordr, lowercase DISPLAY + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW + add semicolon, lowercase Z-INDEX, fix font-sze + add semicolon, lowercase COLOR, lowercase OVERFLOW + add semicolon."
},

// ── M43 ──
{
correct: `.table-header {
  display: flex;
  align-items: center;
  background-color: lightgray;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
  color: black;
  border-bottom: 2px solid gray;
  width: 100%;
  cursor: default;
  letter-spacing: 0.5px;
  text-align: left;
  position: sticky;
  top: 0;
  z-index: 10;
}`,
wrong: `.table-header {
  DISPLAY: flex
  ALIGN-ITEMS: center
  BACKGROUND-COLOR: lightgray;
  paddng: 12px 16px;
  font-sze: 13px
  FONT-WEIGHT: 600;
  COLOR: black
  bordr-bottom: 2px solid gray;
  widht: 100%;
  CURSOR: default
  LETTER-SPACING: 0.5px;
  TEXT-ALIGN: left
  postion: sticky;
  TOP: 0
  Z-INDEX: 10
}`,
totalMistakes: 15,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase BACKGROUND-COLOR, fix paddng, fix font-sze + add semicolon, lowercase FONT-WEIGHT, lowercase COLOR + add semicolon, fix bordr-bottom, fix widht, lowercase CURSOR + add semicolon, lowercase LETTER-SPACING, lowercase TEXT-ALIGN + add semicolon, fix postion, lowercase TOP + add semicolon, lowercase Z-INDEX + add semicolon."
},

// ── M44 ──
{
correct: `.chip-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: lightblue;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 12px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid deepskyblue;
  letter-spacing: 0.3px;
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
}`,
wrong: `.chip-label {
  DISPLAY: inline-flex
  ALIGN-ITEMS: center
  GAP: 6px;
  BACKGROUND-COLOR: lightblue;
  border-raduis: 20px;
  paddng: 4px 12px
  font-sze: 12px;
  COLOR: black
  FONT-WEIGHT: 500;
  CURSOR: pointer
  bordr: 1px solid deepskyblue;
  LETTER-SPACING: 0.3px
  max-width: 200px
  OVERFLOW: hidden;
  WHITE-SPACE: nowrap
}`,
totalMistakes: 15,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT, lowercase CURSOR + add semicolon, fix bordr, lowercase LETTER-SPACING + add semicolon, add semicolon after max-width, lowercase OVERFLOW, lowercase WHITE-SPACE + add semicolon."
},

// ── M45 ──
{
correct: `.invoice-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: black;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px lightgray;
  margin: 20px 0;
  text-align: left;
  letter-spacing: 0.2px;
  font-weight: 400;
  cursor: default;
  position: relative;
}`,
wrong: `.invoice-table {
  widht: 100%;
  BORDER-COLLAPSE: collapse
  font-sze: 14px;
  COLOR: black
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray
  border-raduis: 8px;
  OVERFLOW: hidden
  BOX-SHADOW: 0 2px 8px lightgray;
  margn: 20px 0
  TEXT-ALIGN: left;
  LETTER-SPACING: 0.2px
  FONT-WEIGHT: 400;
  CURSOR: default
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BORDER-COLLAPSE + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase BACKGROUND-COLOR, fix bordr + add semicolon, fix border-raduis, lowercase OVERFLOW + add semicolon, lowercase BOX-SHADOW, fix margn + add semicolon, lowercase TEXT-ALIGN, lowercase LETTER-SPACING + add semicolon, lowercase FONT-WEIGHT, lowercase CURSOR + add semicolon, fix postion + add semicolon."
},

// ── M46 ──
{
correct: `.countdown-timer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 36px;
  font-weight: bold;
  color: black;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px lightgray;
  width: fit-content;
  margin: 0 auto;
  cursor: default;
  letter-spacing: 4px;
}`,
wrong: `.countdown-timer {
  DISPLAY: flex
  ALIGN-ITEMS: center
  justify-content: centr;
  GAP: 12px;
  font-sze: 36px
  FONT-WEIGHT: bold;
  COLOR: black
  BACKGROUND-COLOR: white;
  border-raduis: 10px;
  paddng: 20px
  BOX-SHADOW: 0 4px 12px lightgray;
  widht: fit-content
  margn: 0 auto;
  CURSOR: default
  LETTER-SPACING: 4px
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, fix centr→center, lowercase GAP, fix font-sze + add semicolon, lowercase FONT-WEIGHT, lowercase COLOR + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, lowercase BOX-SHADOW, fix widht + add semicolon, fix margn, lowercase CURSOR + add semicolon, lowercase LETTER-SPACING + add semicolon."
},

// ── M47 ──
{
correct: `.accordion-panel {
  width: 100%;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
  font-size: 14px;
  color: black;
  cursor: pointer;
  margin-bottom: 8px;
  box-shadow: 0 1px 4px lightgray;
  display: flex;
  flex-direction: column;
  position: relative;
  font-weight: 400;
}`,
wrong: `.accordion-panel {
  widht: 100%
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray;
  border-raduis: 8px;
  paddng: 0
  OVERFLOW: hidden;
  font-sze: 14px;
  COLOR: black
  CURSOR: pointer;
  margn-bottom: 8px
  BOX-SHADOW: 0 1px 4px lightgray;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  postion: relative
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis, fix paddng + add semicolon, lowercase OVERFLOW, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, fix margn-bottom + add semicolon, lowercase BOX-SHADOW, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, fix postion + add semicolon, lowercase FONT-WEIGHT + add semicolon."
},

// ── M48 ──
{
correct: `.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  gap: 16px;
  z-index: 9999;
  box-shadow: 0 -2px 8px gray;
  cursor: default;
}`,
wrong: `.cookie-consent {
  postion: fixed;
  BOTTOM: 0
  left: 0
  widht: 100%;
  BACKGROUND-COLOR: black;
  COLOR: white
  paddng: 16px 24px;
  DISPLAY: flex
  justify-content: space-betwen;
  ALIGN-ITEMS: center
  font-sze: 13px;
  GAP: 16px
  Z-INDEX: 9999;
  BOX-SHADOW: 0 -2px 8px gray
  CURSOR: default
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase BOTTOM + add semicolon, add semicolon after left, fix widht, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, fix paddng, lowercase DISPLAY + add semicolon, fix space-betwen, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase GAP + add semicolon, lowercase Z-INDEX, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR + add semicolon."
},

// ── M49 ──
{
correct: `.image-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px lightgray;
  margin: 0 auto;
  max-width: 1000px;
  cursor: pointer;
  font-size: 13px;
  color: black;
}`,
wrong: `.image-gallery {
  DISPLAY: grid
  grid-template-columns: repeat(4, 1fr)
  GAP: 12px;
  widht: 100%;
  paddng: 16px
  BACKGROUND-COLOR: white;
  border-raduis: 10px;
  OVERFLOW: hidden
  BOX-SHADOW: 0 2px 8px lightgray;
  margn: 0 auto
  max-width: 1000px
  CURSOR: pointer;
  font-sze: 13px
  COLOR: black
}`,
totalMistakes: 15,
hint: "Lowercase DISPLAY + add semicolon, add semicolon after grid-template-columns, lowercase GAP, fix widht, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase OVERFLOW + add semicolon, lowercase BOX-SHADOW, fix margn + add semicolon, add semicolon after max-width, lowercase CURSOR, fix font-sze + add semicolon, lowercase COLOR + add semicolon."
},

// ── M50 ──
{
correct: `.summary-panel {
  width: 360px;
  height: 100%;
  background-color: white;
  border-left: 1px solid lightgray;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
  color: black;
  font-weight: 400;
  position: sticky;
  top: 0;
  overflow-y: auto;
  box-shadow: -2px 0 8px lightgray;
}`,
wrong: `.summary-panel {
  widht: 360px;
  HEIGHT: 100%
  BACKGROUND-COLOR: white;
  bordr-left: 1px solid lightgray;
  paddng: 28px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 20px;
  font-sze: 14px
  COLOR: black;
  FONT-WEIGHT: 400
  postion: sticky;
  TOP: 0
  OVERFLOW-Y: auto;
  BOX-SHADOW: -2px 0 8px lightgray
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase HEIGHT + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-left, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, lowercase FONT-WEIGHT + add semicolon, fix postion, lowercase TOP + add semicolon, lowercase OVERFLOW-Y, lowercase BOX-SHADOW + add semicolon."
},

/* ── Paragraph Mistakes — Medium CSS Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (M51 - M75)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, BLUE → blue)
     'spelling'= spelling galat (colr → color, marign → margin)
     'missing' = semicolon, colon, unit, ya closing brace ghayab hai
*/


// ── M51 ──
{
correct: `.news-card {
  width: 300px;
  height: 220px;
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 8px lightgray;
  font-size: 14px;
  color: black;
  border: 1px solid lightgray;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}`,
wrong: `.news-card {
  widht: 300px;
  hieght: 220px
  BACKGROUND-COLOR: white;
  border-raduis: 10px;
  paddng: 16px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: space-betwen;
  BOX-SHADOW: 0 2px 8px lightgray
  font-sze: 14px;
  COLOR: black
  bordr: 1px solid lightgray;
  CURSOR: pointer
  OVERFLOW: hidden;
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, fix space-betwen, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix bordr, lowercase CURSOR + add semicolon, lowercase OVERFLOW, fix postion + add semicolon."
},

// ── M52 ──
{
correct: `.video-card {
  width: 340px;
  background-color: black;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0 4px 12px gray;
  font-size: 13px;
  color: white;
  position: relative;
  margin: 8px;
  border: none;
  gap: 0;
  padding: 0;
}`,
wrong: `.video-card {
  widht: 340px
  BACKGROUND-COLOR: black;
  border-raduis: 8px;
  OVERFLOW: hidden
  DISPLAY: flex;
  FLEX-DIRECTION: column
  CURSOR: pointer;
  BOX-SHADOW: 0 4px 12px gray
  font-sze: 13px;
  COLOR: white
  postion: relative;
  margn: 8px
  BORDER: none;
  GAP: 0
  PADDING: 0
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase OVERFLOW + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix postion, fix margn + add semicolon, lowercase BORDER, lowercase GAP + add semicolon, lowercase PADDING + add semicolon."
},

// ── M53 ──
{
correct: `.weather-widget {
  width: 280px;
  background-color: lightblue;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: white;
  box-shadow: 0 4px 16px deepskyblue;
  cursor: default;
  text-align: center;
  font-weight: 500;
  position: relative;
}`,
wrong: `.weather-widget {
  widht: 280px;
  BACKGROUND-COLOR: lightblue
  border-raduis: 16px;
  paddng: 24px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: center;
  GAP: 12px
  font-sze: 15px;
  COLOR: white
  BOX-SHADOW: 0 4px 16px deepskyblue;
  CURSOR: default
  TEXT-ALIGN: center;
  FONT-WEIGHT: 500
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase ALIGN-ITEMS, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR + add semicolon, lowercase TEXT-ALIGN, lowercase FONT-WEIGHT + add semicolon, fix postion + add semicolon."
},

// ── M54 ──
{
correct: `.event-card {
  width: 300px;
  background-color: white;
  border-left: 4px solid blue;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: black;
  box-shadow: 0 2px 8px lightgray;
  cursor: pointer;
  margin-bottom: 12px;
  font-weight: 400;
  position: relative;
}`,
wrong: `.event-card {
  widht: 300px
  BACKGROUND-COLOR: white;
  bordr-left: 4px solid blue;
  border-raduis: 8px;
  paddng: 16px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 8px;
  font-sze: 14px
  COLOR: black;
  BOX-SHADOW: 0 2px 8px lightgray
  CURSOR: pointer;
  margn-bottom: 12px
  FONT-WEIGHT: 400;
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-left, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR, fix margn-bottom + add semicolon, lowercase FONT-WEIGHT, fix postion + add semicolon."
},

// ── M55 ──
{
correct: `.music-player {
  width: 320px;
  background-color: black;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: white;
  font-size: 14px;
  box-shadow: 0 8px 24px gray;
  cursor: default;
  position: relative;
  overflow: hidden;
  text-align: center;
}`,
wrong: `.music-player {
  widht: 320px;
  BACKGROUND-COLOR: black
  border-raduis: 16px;
  paddng: 24px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: center
  GAP: 16px;
  COLOR: white
  font-sze: 14px;
  BOX-SHADOW: 0 8px 24px gray
  CURSOR: default;
  postion: relative
  OVERFLOW: hidden;
  TEXT-ALIGN: center
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, lowercase COLOR + add semicolon, fix font-sze, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR, fix postion + add semicolon, lowercase OVERFLOW, lowercase TEXT-ALIGN + add semicolon."
},

// ── M56 ──
{
correct: `.qr-code-box {
  width: 200px;
  height: 200px;
  background-color: white;
  border: 2px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-shadow: 0 2px 8px gray;
  cursor: default;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  font-size: 0;
}`,
wrong: `.qr-code-box {
  widht: 200px;
  hieght: 200px
  BACKGROUND-COLOR: white;
  bordr: 2px solid black;
  border-raduis: 8px;
  DISPLAY: flex
  justify-content: centr;
  ALIGN-ITEMS: center
  paddng: 12px;
  BOX-SHADOW: 0 2px 8px gray
  CURSOR: default;
  margn: 0 auto
  postion: relative;
  OVERFLOW: hidden
  font-sze: 0
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis, lowercase DISPLAY + add semicolon, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, fix paddng, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR, fix margn + add semicolon, fix postion, lowercase OVERFLOW + add semicolon, fix font-sze + add semicolon."
},

// ── M57 ──
{
correct: `.leaderboard-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  font-size: 14px;
  color: black;
  cursor: default;
  font-weight: 500;
  gap: 12px;
  width: 100%;
  letter-spacing: 0.2px;
  position: relative;
  overflow: hidden;
}`,
wrong: `.leaderboard-row {
  DISPLAY: flex
  ALIGN-ITEMS: center
  justify-content: space-betwen;
  paddng: 12px 16px;
  BACKGROUND-COLOR: white
  bordr-bottom: 1px solid lightgray;
  font-sze: 14px
  COLOR: black;
  CURSOR: default
  FONT-WEIGHT: 500;
  GAP: 12px
  widht: 100%;
  LETTER-SPACING: 0.2px
  postion: relative;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, fix space-betwen, fix paddng, lowercase BACKGROUND-COLOR + add semicolon, fix bordr-bottom, fix font-sze + add semicolon, lowercase COLOR, lowercase CURSOR + add semicolon, lowercase FONT-WEIGHT, lowercase GAP + add semicolon, fix widht, lowercase LETTER-SPACING + add semicolon, fix postion, lowercase OVERFLOW + add semicolon."
},

// ── M58 ──
{
correct: `.receipt-box {
  width: 340px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 13px;
  color: black;
  box-shadow: 0 2px 10px lightgray;
  cursor: default;
  font-weight: 400;
  text-align: left;
  position: relative;
}`,
wrong: `.receipt-box {
  widht: 340px
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray;
  border-raduis: 10px;
  paddng: 24px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 12px;
  font-sze: 13px
  COLOR: black;
  BOX-SHADOW: 0 2px 10px lightgray
  CURSOR: default;
  FONT-WEIGHT: 400
  TEXT-ALIGN: left;
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR, lowercase FONT-WEIGHT + add semicolon, lowercase TEXT-ALIGN, fix postion + add semicolon."
},

// ── M59 ──
{
correct: `.emoji-picker {
  width: 300px;
  height: 260px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  overflow-y: auto;
  box-shadow: 0 4px 12px gray;
  position: absolute;
  z-index: 300;
  cursor: pointer;
  font-size: 20px;
}`,
wrong: `.emoji-picker {
  widht: 300px;
  hieght: 260px
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray;
  border-raduis: 12px;
  paddng: 12px
  DISPLAY: grid;
  grid-template-columns: repeat(7, 1fr)
  GAP: 6px;
  OVERFLOW-Y: auto
  BOX-SHADOW: 0 4px 12px gray;
  postion: absolute
  Z-INDEX: 300;
  CURSOR: pointer
  font-sze: 20px
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, add semicolon after grid-template-columns, lowercase GAP, lowercase OVERFLOW-Y + add semicolon, lowercase BOX-SHADOW, fix postion + add semicolon, lowercase Z-INDEX, lowercase CURSOR + add semicolon, fix font-sze + add semicolon."
},

// ── M60 ──
{
correct: `.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: 100%;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px lightgray;
  font-size: 13px;
  color: black;
  cursor: pointer;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid lightgray;
}`,
wrong: `.calendar-grid {
  DISPLAY: grid
  grid-template-columns: repeat(7, 1fr)
  GAP: 4px;
  widht: 100%;
  paddng: 16px
  BACKGROUND-COLOR: white;
  border-raduis: 10px;
  BOX-SHADOW: 0 2px 8px lightgray
  font-sze: 13px;
  COLOR: black
  CURSOR: pointer;
  TEXT-ALIGN: center
  max-width: 400px
  margn: 0 auto;
  bordr: 1px solid lightgray
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, add semicolon after grid-template-columns, lowercase GAP, fix widht, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase TEXT-ALIGN + add semicolon, add semicolon after max-width, fix margn, fix bordr + add semicolon."
},

// ── M61 ──
{
correct: `.side-drawer {
  width: 300px;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  box-shadow: -4px 0 12px gray;
  z-index: 800;
  overflow-y: auto;
  font-size: 14px;
  color: black;
}`,
wrong: `.side-drawer {
  widht: 300px;
  hieght: 100vh
  BACKGROUND-COLOR: white;
  postion: fixed;
  TOP: 0
  RIGHT: 0;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  paddng: 24px
  GAP: 16px;
  BOX-SHADOW: -4px 0 12px gray
  Z-INDEX: 800;
  OVERFLOW-Y: auto
  font-sze: 14px;
  COLOR: black
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix postion, lowercase TOP + add semicolon, lowercase RIGHT, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, fix paddng + add semicolon, lowercase GAP, lowercase BOX-SHADOW + add semicolon, lowercase Z-INDEX, lowercase OVERFLOW-Y + add semicolon, fix font-sze, lowercase COLOR + add semicolon."
},

// ── M62 ──
{
correct: `.floating-button {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background-color: blue;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px gray;
  cursor: pointer;
  z-index: 500;
  font-size: 24px;
}`,
wrong: `.floating-button {
  postion: fixed;
  BOTTOM: 24px
  RIGHT: 24px;
  widht: 56px;
  hieght: 56px
  BACKGROUND-COLOR: blue;
  COLOR: white
  border-raduis: 50%;
  DISPLAY: flex
  justify-content: centr;
  ALIGN-ITEMS: center
  BOX-SHADOW: 0 4px 12px gray;
  CURSOR: pointer
  Z-INDEX: 500;
  font-sze: 24px
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase BOTTOM + add semicolon, lowercase RIGHT, fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, fix border-raduis, lowercase DISPLAY + add semicolon, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, lowercase BOX-SHADOW, lowercase CURSOR + add semicolon, lowercase Z-INDEX, fix font-sze + add semicolon."
},

// ── M63 ──
{
correct: `.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  color: black;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  width: fit-content;
  letter-spacing: 0.3px;
  box-shadow: 0 1px 4px lightgray;
}`,
wrong: `.language-selector {
  DISPLAY: flex
  ALIGN-ITEMS: center
  GAP: 8px;
  BACKGROUND-COLOR: white
  bordr: 1px solid lightgray;
  border-raduis: 6px;
  paddng: 6px 12px
  font-sze: 13px;
  COLOR: black
  CURSOR: pointer;
  FONT-WEIGHT: 500
  postion: relative;
  widht: fit-content
  LETTER-SPACING: 0.3px;
  BOX-SHADOW: 0 1px 4px lightgray
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, lowercase BACKGROUND-COLOR + add semicolon, fix bordr, fix border-raduis, fix paddng + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase FONT-WEIGHT + add semicolon, fix postion, fix widht + add semicolon, lowercase LETTER-SPACING, lowercase BOX-SHADOW + add semicolon."
},

// ── M64 ──
{
correct: `.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: lightgreen;
  border-radius: 20px;
  padding: 4px 14px;
  font-size: 12px;
  color: black;
  font-weight: 600;
  cursor: default;
  border: 1px solid green;
  letter-spacing: 0.4px;
  max-width: 160px;
  overflow: hidden;
  white-space: nowrap;
}`,
wrong: `.skill-badge {
  DISPLAY: inline-flex
  ALIGN-ITEMS: center
  GAP: 6px;
  BACKGROUND-COLOR: lightgreen;
  border-raduis: 20px;
  paddng: 4px 14px
  font-sze: 12px;
  COLOR: black
  FONT-WEIGHT: 600;
  CURSOR: default
  bordr: 1px solid green;
  LETTER-SPACING: 0.4px
  max-width: 160px
  OVERFLOW: hidden;
  WHITE-SPACE: nowrap
}`,
totalMistakes: 15,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT, lowercase CURSOR + add semicolon, fix bordr, lowercase LETTER-SPACING + add semicolon, add semicolon after max-width, lowercase OVERFLOW, lowercase WHITE-SPACE + add semicolon."
},

// ── M65 ──
{
correct: `.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  gap: 20px;
  font-size: 18px;
  color: black;
  cursor: default;
}`,
wrong: `.splash-screen {
  postion: fixed;
  TOP: 0
  left: 0
  widht: 100%;
  hieght: 100vh;
  BACKGROUND-COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: centr;
  ALIGN-ITEMS: center
  Z-INDEX: 9999;
  GAP: 20px
  font-sze: 18px;
  COLOR: black
  CURSOR: default
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase TOP + add semicolon, add semicolon after left, fix widht, fix hieght, lowercase BACKGROUND-COLOR + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, lowercase Z-INDEX, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR + add semicolon."
},

// ── M66 ──
{
correct: `.filter-panel {
  width: 240px;
  background-color: white;
  border-right: 1px solid lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  color: black;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  cursor: default;
  font-weight: 400;
}`,
wrong: `.filter-panel {
  widht: 240px
  BACKGROUND-COLOR: white;
  bordr-right: 1px solid lightgray;
  paddng: 20px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 14px;
  font-sze: 14px
  COLOR: black;
  postion: sticky
  TOP: 0;
  hieght: 100vh
  OVERFLOW-Y: auto;
  CURSOR: default
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-right, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, fix postion + add semicolon, lowercase TOP, fix hieght + add semicolon, lowercase OVERFLOW-Y, lowercase CURSOR + add semicolon, lowercase FONT-WEIGHT + add semicolon."
},

// ── M67 ──
{
correct: `.ad-banner {
  width: 728px;
  height: 90px;
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 1px 4px gray;
}`,
wrong: `.ad-banner {
  widht: 728px;
  hieght: 90px
  BACKGROUND-COLOR: lightgray;
  bordr: 1px solid gray;
  border-raduis: 4px;
  DISPLAY: flex
  ALIGN-ITEMS: center
  justify-content: centr;
  font-sze: 14px;
  COLOR: black
  CURSOR: pointer;
  OVERFLOW: hidden
  postion: relative;
  margn: 0 auto
  BOX-SHADOW: 0 1px 4px gray
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis, lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, fix centr→center, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase OVERFLOW + add semicolon, fix postion, fix margn + add semicolon, lowercase BOX-SHADOW + add semicolon."
},

// ── M68 ──
{
correct: `.poll-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  margin-bottom: 8px;
  font-weight: 400;
  position: relative;
  overflow: hidden;
}`,
wrong: `.poll-option {
  DISPLAY: flex
  ALIGN-ITEMS: center
  GAP: 10px;
  widht: 100%;
  paddng: 12px 16px
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray
  border-raduis: 8px;
  font-sze: 14px
  COLOR: black;
  CURSOR: pointer
  margn-bottom: 8px;
  FONT-WEIGHT: 400
  postion: relative;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix widht, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix bordr + add semicolon, fix border-raduis, fix font-sze + add semicolon, lowercase COLOR, lowercase CURSOR + add semicolon, fix margn-bottom, lowercase FONT-WEIGHT + add semicolon, fix postion, lowercase OVERFLOW + add semicolon."
},

// ── M69 ──
{
correct: `.wishlist-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  font-size: 14px;
  color: black;
  cursor: pointer;
  width: 100%;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.2px;
  box-shadow: none;
}`,
wrong: `.wishlist-item {
  DISPLAY: flex
  ALIGN-ITEMS: center
  GAP: 16px;
  paddng: 12px
  BACKGROUND-COLOR: white;
  bordr-bottom: 1px solid lightgray
  font-sze: 14px;
  COLOR: black
  CURSOR: pointer;
  widht: 100%
  FONT-WEIGHT: 400;
  postion: relative
  OVERFLOW: hidden;
  LETTER-SPACING: 0.2px
  BOX-SHADOW: none
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-bottom + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, fix widht + add semicolon, lowercase FONT-WEIGHT, fix postion + add semicolon, lowercase OVERFLOW, lowercase LETTER-SPACING + add semicolon, lowercase BOX-SHADOW + add semicolon."
},

// ── M70 ──
{
correct: `.split-view {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  gap: 0;
  position: relative;
  font-size: 14px;
  color: black;
  cursor: default;
  border: 1px solid lightgray;
  padding: 0;
  margin: 0;
  box-shadow: none;
  font-weight: 400;
}`,
wrong: `.split-view {
  DISPLAY: flex
  widht: 100%;
  hieght: 100vh
  OVERFLOW: hidden;
  BACKGROUND-COLOR: white
  GAP: 0;
  postion: relative
  font-sze: 14px;
  COLOR: black
  CURSOR: default;
  bordr: 1px solid lightgray
  PADDING: 0;
  MARGIN: 0
  BOX-SHADOW: none;
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, fix widht, fix hieght + add semicolon, lowercase OVERFLOW, lowercase BACKGROUND-COLOR + add semicolon, lowercase GAP, fix postion + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, fix bordr + add semicolon, lowercase PADDING, lowercase MARGIN + add semicolon, lowercase BOX-SHADOW, lowercase FONT-WEIGHT + add semicolon."
},

// ── M71 ──
{
correct: `.order-summary {
  width: 340px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  color: black;
  box-shadow: 0 2px 8px lightgray;
  cursor: default;
  position: sticky;
  top: 20px;
  font-weight: 400;
}`,
wrong: `.order-summary {
  widht: 340px
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray;
  border-raduis: 10px;
  paddng: 20px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 14px;
  font-sze: 14px
  COLOR: black;
  BOX-SHADOW: 0 2px 8px lightgray
  CURSOR: default;
  postion: sticky
  TOP: 20px;
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR, fix postion + add semicolon, lowercase TOP, lowercase FONT-WEIGHT + add semicolon."
},

// ── M72 ──
{
correct: `.story-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: lightgray;
  border: 3px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  margin: 0 8px;
  box-shadow: 0 2px 6px gray;
  font-size: 0;
  position: relative;
  flex-shrink: 0;
}`,
wrong: `.story-circle {
  widht: 70px;
  hieght: 70px
  border-raduis: 50%;
  BACKGROUND-COLOR: lightgray;
  bordr: 3px solid blue
  DISPLAY: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  CURSOR: pointer;
  OVERFLOW: hidden
  margn: 0 8px;
  BOX-SHADOW: 0 2px 6px gray
  font-sze: 0;
  postion: relative
  FLEX-SHRINK: 0
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, fix border-raduis, lowercase BACKGROUND-COLOR, fix bordr + add semicolon, lowercase DISPLAY, fix centr→center, lowercase ALIGN-ITEMS + add semicolon, lowercase CURSOR, lowercase OVERFLOW + add semicolon, fix margn, lowercase BOX-SHADOW + add semicolon, fix font-sze, fix postion + add semicolon, lowercase FLEX-SHRINK + add semicolon."
},

// ── M73 ──
{
correct: `.quick-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid lightgray;
  font-size: 13px;
  color: black;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
  font-weight: 500;
  letter-spacing: 0.2px;
}`,
wrong: `.quick-actions {
  DISPLAY: flex
  GAP: 12px;
  ALIGN-ITEMS: center
  paddng: 12px 0;
  widht: 100%
  BACKGROUND-COLOR: white;
  bordr-top: 1px solid lightgray
  font-sze: 13px;
  COLOR: black
  CURSOR: pointer;
  FLEX-WRAP: wrap
  justify-content: flex-start
  postion: relative;
  FONT-WEIGHT: 500
  LETTER-SPACING: 0.2px
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase GAP, lowercase ALIGN-ITEMS + add semicolon, fix paddng, fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-top + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase FLEX-WRAP + add semicolon, add semicolon after flex-start, fix postion, lowercase FONT-WEIGHT + add semicolon, lowercase LETTER-SPACING + add semicolon."
},

// ── M74 ──
{
correct: `.onboarding-step {
  width: 100%;
  max-width: 480px;
  background-color: white;
  border-radius: 14px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 16px lightgray;
  font-size: 15px;
  color: black;
  text-align: center;
  margin: 0 auto;
  cursor: default;
  position: relative;
}`,
wrong: `.onboarding-step {
  widht: 100%;
  max-width: 480px
  BACKGROUND-COLOR: white;
  border-raduis: 14px;
  paddng: 32px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 20px;
  BOX-SHADOW: 0 4px 16px lightgray
  font-sze: 15px;
  COLOR: black
  TEXT-ALIGN: center;
  margn: 0 auto
  CURSOR: default;
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht, add semicolon after max-width, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase TEXT-ALIGN, fix margn + add semicolon, lowercase CURSOR, fix postion + add semicolon."
},

// ── M75 ──
{
correct: `.empty-state {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background-color: white;
  border-radius: 10px;
  font-size: 16px;
  color: gray;
  gap: 16px;
  text-align: center;
  cursor: default;
  font-weight: 400;
  border: 1px dashed lightgray;
}`,
wrong: `.empty-state {
  widht: 100%
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: center;
  justify-content: centr;
  paddng: 60px 20px;
  BACKGROUND-COLOR: white
  border-raduis: 10px;
  font-sze: 16px
  COLOR: gray;
  GAP: 16px
  TEXT-ALIGN: center;
  CURSOR: default
  FONT-WEIGHT: 400;
  bordr: 1px dashed lightgray
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase ALIGN-ITEMS, fix centr→center + add semicolon, fix paddng, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix font-sze + add semicolon, lowercase COLOR, lowercase GAP + add semicolon, lowercase TEXT-ALIGN, lowercase CURSOR + add semicolon, lowercase FONT-WEIGHT, fix bordr + add semicolon."
},

/* ── Paragraph Mistakes — Medium CSS Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (M76 - M100)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, BLUE → blue)
     'spelling'= spelling galat (colr → color, marign → margin)
     'missing' = semicolon, colon, unit, ya closing brace ghayab hai
*/


// ── M76 ──
{
correct: `.profile-header {
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  border-bottom: 1px solid lightgray;
  font-size: 15px;
  color: black;
  position: relative;
  cursor: default;
  font-weight: 500;
  box-shadow: 0 2px 8px lightgray;
  overflow: hidden;
}`,
wrong: `.profile-header {
  widht: 100%;
  BACKGROUND-COLOR: white
  DISPLAY: flex;
  ALIGN-ITEMS: center
  GAP: 16px;
  paddng: 20px
  border-raduis: 12px;
  bordr-bottom: 1px solid lightgray
  font-sze: 15px;
  COLOR: black
  postion: relative;
  CURSOR: default
  FONT-WEIGHT: 500;
  BOX-SHADOW: 0 2px 8px lightgray
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, lowercase DISPLAY, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix paddng + add semicolon, fix border-raduis, fix bordr-bottom + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix postion, lowercase CURSOR + add semicolon, lowercase FONT-WEIGHT, lowercase BOX-SHADOW + add semicolon, lowercase OVERFLOW + add semicolon."
},

// ── M77 ──
{
correct: `.hero-banner {
  width: 100%;
  height: 400px;
  background-color: darkblue;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  padding: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 0;
}`,
wrong: `.hero-banner {
  widht: 100%;
  hieght: 400px
  BACKGROUND-COLOR: darkblue;
  COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: centr;
  ALIGN-ITEMS: center
  TEXT-ALIGN: center;
  font-sze: 28px
  FONT-WEIGHT: bold;
  paddng: 40px
  postion: relative;
  OVERFLOW: hidden
  BORDER-RADIUS: 0
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, fix centr->center, lowercase ALIGN-ITEMS + add semicolon, lowercase TEXT-ALIGN, fix font-sze + add semicolon, lowercase FONT-WEIGHT, fix paddng + add semicolon, fix postion, lowercase OVERFLOW + add semicolon, lowercase BORDER-RADIUS + add semicolon."
},

// ── M78 ──
{
correct: `.nav-sidebar {
  width: 260px;
  height: 100vh;
  background-color: navy;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 10px;
  font-size: 14px;
  overflow-y: auto;
  z-index: 200;
}`,
wrong: `.nav-sidebar {
  widht: 260px;
  hieght: 100vh
  BACKGROUND-COLOR: navy;
  COLOR: white
  postion: fixed;
  TOP: 0;
  LEFT: 0
  DISPLAY: flex;
  FLEX-DIRECTION: column
  paddng: 24px 16px;
  GAP: 10px
  font-sze: 14px;
  OVERFLOW-Y: auto
  Z-INDEX: 200
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, fix postion, lowercase TOP, lowercase LEFT + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, fix paddng, lowercase GAP + add semicolon, fix font-sze, lowercase OVERFLOW-Y + add semicolon, lowercase Z-INDEX + add semicolon."
},

// ── M79 ──
{
correct: `.page-footer {
  width: 100%;
  background-color: black;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 13px;
  border-top: 2px solid gray;
  margin-top: 0;
  letter-spacing: 0.4px;
  line-height: 1.8;
  position: relative;
}`,
wrong: `.page-footer {
  WIDTH: 100%;
  BACKGROUND-COLOR: black
  COLOR: white;
  paddng: 40px 20px
  DISPLAY: flex;
  justify-content: space-betwen;
  ALIGN-ITEMS: flex-start
  FLEX-WRAP: wrap;
  GAP: 24px
  font-sze: 13px;
  bordr-top: 2px solid gray
  margn-top: 0;
  LETTER-SPACING: 0.4px
  LINE-HEIGHT: 1.8;
  postion: relative
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH, lowercase BACKGROUND-COLOR + add semicolon, lowercase COLOR, fix paddng + add semicolon, lowercase DISPLAY, fix space-betwen, lowercase ALIGN-ITEMS + add semicolon, lowercase FLEX-WRAP, lowercase GAP + add semicolon, fix font-sze, fix bordr-top + add semicolon, fix margn-top, lowercase LETTER-SPACING + add semicolon, lowercase LINE-HEIGHT, fix postion + add semicolon."
},

// ── M80 ──
{
correct: `.image-card {
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px lightgray;
  cursor: pointer;
  border: 1px solid lightgray;
  margin: 8px;
  font-size: 14px;
  color: black;
  position: relative;
  transition: box-shadow 0.2s;
}`,
wrong: `.image-card {
  widht: 300px;
  border-raduis: 12px
  OVERFLOW: hidden;
  BACKGROUND-COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: column
  BOX-SHADOW: 0 4px 12px lightgray;
  CURSOR: pointer
  bordr: 1px solid lightgray;
  margn: 8px
  font-sze: 14px;
  COLOR: black
  postion: relative;
  TRANSITION: box-shadow 0.2s
}`,
totalMistakes: 16,
hint: "Fix widht, fix border-raduis + add semicolon, lowercase OVERFLOW, lowercase BACKGROUND-COLOR + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase BOX-SHADOW, lowercase CURSOR + add semicolon, fix bordr, fix margn + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix postion, lowercase TRANSITION + add semicolon."
},

// ── M81 ──
{
correct: `.badge-counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 11px;
  font-weight: bold;
  position: absolute;
  top: -6px;
  right: -6px;
  border: 2px solid white;
  z-index: 10;
}`,
wrong: `.badge-counter {
  DISPLAY: inline-flex
  ALIGN-ITEMS: center
  justify-content: centr;
  BACKGROUND-COLOR: red
  COLOR: white;
  border-raduis: 50%;
  widht: 22px
  hieght: 22px;
  font-sze: 11px
  FONT-WEIGHT: bold;
  postion: absolute
  TOP: -6px;
  RIGHT: -6px
  bordr: 2px solid white;
  Z-INDEX: 10
}`,
totalMistakes: 17,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, fix centr->center, lowercase BACKGROUND-COLOR + add semicolon, lowercase COLOR, fix border-raduis, fix widht + add semicolon, fix hieght, fix font-sze + add semicolon, lowercase FONT-WEIGHT, fix postion + add semicolon, lowercase TOP, lowercase RIGHT + add semicolon, fix bordr, lowercase Z-INDEX + add semicolon."
},

// ── M82 ──
{
correct: `.data-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  font-size: 14px;
  color: black;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px lightgray;
  margin: 20px 0;
  table-layout: fixed;
  cursor: default;
  position: relative;
  font-weight: 400;
  letter-spacing: 0.2px;
}`,
wrong: `.data-table {
  widht: 100%;
  border-collpase: collapse
  BACKGROUND-COLOR: white;
  font-sze: 14px
  COLOR: black;
  border-raduis: 8px
  OVERFLOW: hidden;
  BOX-SHADOW: 0 2px 6px lightgray
  margn: 20px 0;
  TABLE-LAYOUT: fixed
  CURSOR: default;
  postion: relative
  FONT-WEIGHT: 400;
  LETTER-SPACING: 0.2px
}`,
totalMistakes: 15,
hint: "Fix widht, fix border-collpase + add semicolon, lowercase BACKGROUND-COLOR, fix font-sze + add semicolon, lowercase COLOR, fix border-raduis + add semicolon, lowercase OVERFLOW, lowercase BOX-SHADOW + add semicolon, fix margn, lowercase TABLE-LAYOUT + add semicolon, lowercase CURSOR, fix postion + add semicolon, lowercase FONT-WEIGHT, lowercase LETTER-SPACING + add semicolon."
},

// ── M83 ──
{
correct: `.tooltip-box {
  position: absolute;
  background-color: black;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 999;
  top: -36px;
  left: 50%;
  pointer-events: none;
  box-shadow: 0 2px 6px gray;
  font-weight: 400;
  letter-spacing: 0.2px;
  cursor: default;
}`,
wrong: `.tooltip-box {
  positon: absolute;
  BACKGROUND-COLOR: black
  COLOR: white;
  paddng: 6px 12px
  border-raduis: 6px;
  font-sze: 12px
  WHITE-SPACE: nowrap;
  Z-INDEX: 999
  TOP: -36px;
  LEFT: 50%
  POINTER-EVENTS: none;
  BOX-SHADOW: 0 2px 6px gray
  FONT-WEIGHT: 400;
  LETTER-SPACING: 0.2px
  CURSOR: default
}`,
totalMistakes: 16,
hint: "Fix positon, lowercase BACKGROUND-COLOR + add semicolon, lowercase COLOR, fix paddng + add semicolon, fix border-raduis, fix font-sze + add semicolon, lowercase WHITE-SPACE, lowercase Z-INDEX + add semicolon, lowercase TOP, lowercase LEFT + add semicolon, lowercase POINTER-EVENTS, lowercase BOX-SHADOW + add semicolon, lowercase FONT-WEIGHT, lowercase LETTER-SPACING + add semicolon, lowercase CURSOR + add semicolon."
},

// ── M84 ──
{
correct: `.mobile-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  border-top: 1px solid lightgray;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 500;
  box-shadow: 0 -2px 8px lightgray;
  font-size: 13px;
}`,
wrong: `.mobile-menu {
  LIST-STYLE: none
  MARGIN: 0;
  PADDING: 0
  DISPLAY: flex;
  FLEX-DIRECTION: colum;
  BACKGROUND-COLOR: white
  widht: 100%;
  bordr-top: 1px solid lightgray
  postion: fixed;
  BOTTOM: 0
  LEFT: 0;
  Z-INDEX: 500
  BOX-SHADOW: 0 -2px 8px lightgray;
  font-sze: 13px
}`,
totalMistakes: 16,
hint: "Lowercase LIST-STYLE + add semicolon, lowercase MARGIN, lowercase PADDING + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + fix colum->column, lowercase BACKGROUND-COLOR + add semicolon, fix widht, fix bordr-top + add semicolon, fix postion, lowercase BOTTOM + add semicolon, lowercase LEFT, lowercase Z-INDEX + add semicolon, lowercase BOX-SHADOW, fix font-sze + add semicolon."
},

// ── M85 ──
{
correct: `.search-results {
  width: 100%;
  max-width: 700px;
  margin: 20px auto;
  padding: 16px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 2px 8px lightgray;
  position: relative;
  cursor: default;
}`,
wrong: `.search-results {
  widht: 100%;
  max-widht: 700px
  margn: 20px auto;
  paddng: 16px
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray
  border-raduis: 10px;
  font-sze: 15px
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 14px
  BOX-SHADOW: 0 2px 8px lightgray;
  postion: relative
  CURSOR: default
}`,
totalMistakes: 17,
hint: "Fix widht, fix max-widht + add semicolon, fix margn, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix bordr + add semicolon, fix border-raduis, fix font-sze + add semicolon, lowercase COLOR, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, lowercase GAP + add semicolon, lowercase BOX-SHADOW, fix postion + add semicolon, lowercase CURSOR + add semicolon."
},

// ── M86 ──
{
correct: `.stat-widget {
  background-color: white;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 4px 12px lightgray;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid lightgray;
  width: 220px;
  font-size: 14px;
  color: black;
  cursor: default;
  position: relative;
  font-weight: 500;
}`,
wrong: `.stat-widget {
  BACKGROUND-COLOR: white
  border-raduis: 14px;
  paddng: 24px
  BOX-SHADOW: 0 4px 12px lightgray;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 12px
  bordr: 1px solid lightgray;
  widht: 220px
  font-sze: 14px;
  COLOR: black
  CURSOR: default;
  postion: relative
  FONT-WEIGHT: 500
}`,
totalMistakes: 16,
hint: "Lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, lowercase BOX-SHADOW, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, lowercase GAP + add semicolon, fix bordr, fix widht + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, fix postion + add semicolon, lowercase FONT-WEIGHT + add semicolon."
},

// ── M87 ──
{
correct: `.cart-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid lightgray;
  background-color: white;
  width: 100%;
  font-size: 14px;
  color: black;
  cursor: default;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.2px;
  box-shadow: none;
}`,
wrong: `.cart-row {
  DISPLAY: flex
  ALIGN-ITEMS: center
  GAP: 14px;
  paddng: 12px 0
  bordr-bottom: 1px solid lightgray;
  BACKGROUND-COLOR: white
  widht: 100%;
  font-sze: 14px
  COLOR: black;
  CURSOR: default
  FONT-WEIGHT: 400;
  postion: relative
  OVERFLOW: hidden;
  LETTER-SPACING: 0.2px
  BOX-SHADOW: none
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix paddng + add semicolon, fix bordr-bottom, lowercase BACKGROUND-COLOR + add semicolon, fix widht, fix font-sze + add semicolon, lowercase COLOR, lowercase CURSOR + add semicolon, lowercase FONT-WEIGHT, fix postion + add semicolon, lowercase OVERFLOW, lowercase LETTER-SPACING + add semicolon, lowercase BOX-SHADOW + add semicolon."
},

// ── M88 ──
{
correct: `.login-box {
  width: 400px;
  background-color: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 16px lightgray;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 15px;
  color: black;
  border: 1px solid lightgray;
  margin: 40px auto;
  font-family: Arial;
  cursor: default;
  position: relative;
}`,
wrong: `.login-box {
  widht: 400px
  BACKGROUND-COLOR: white;
  PADDING: 32px
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 16px lightgray
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 18px;
  font-sze: 15px
  COLOR: black;
  bordr: 1px solid lightgray
  margn: 40px auto;
  FONT-FAMILY: Arial
  CURSOR: default;
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, lowercase PADDING + add semicolon, fix border-raduis, lowercase BOX-SHADOW + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, fix bordr + add semicolon, fix margn, lowercase FONT-FAMILY + add semicolon, lowercase CURSOR, fix postion + add semicolon."
},

// ── M89 ──
{
correct: `.alert-banner {
  width: 100%;
  padding: 14px 20px;
  background-color: lightyellow;
  border: 1px solid gold;
  border-radius: 8px;
  color: black;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  font-weight: 500;
  cursor: default;
  position: relative;
  box-shadow: none;
}`,
wrong: `.alert-banner {
  WIDTH: 100%;
  paddng: 14px 20px
  BACKGROUND-COLOR: lightyellow;
  bordr: 1px solid gold
  border-raduis: 8px;
  COLOR: black
  font-sze: 14px;
  DISPLAY: flex
  ALIGN-ITEMS: center;
  GAP: 10px
  margn-bottom: 16px;
  FONT-WEIGHT: 500
  CURSOR: default;
  postion: relative
  BOX-SHADOW: none
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix bordr + add semicolon, fix border-raduis, lowercase COLOR + add semicolon, fix font-sze, lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS, lowercase GAP + add semicolon, fix margn-bottom, lowercase FONT-WEIGHT + add semicolon, lowercase CURSOR, fix postion + add semicolon, lowercase BOX-SHADOW + add semicolon."
},

// ── M90 ──
{
correct: `.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: whitesmoke;
  box-sizing: border-box;
  align-items: start;
  justify-content: center;
  position: relative;
  font-size: 14px;
  color: black;
}`,
wrong: `.product-grid {
  DISPLAY: grid
  grid-template-columns: repeat(3, 1fr);
  GAP: 20px
  paddng: 20px;
  widht: 100%
  max-widht: 1200px;
  margn: 0 auto
  BACKGROUND-COLOR: whitesmoke;
  BOX-SIZING: border-box
  ALIGN-ITEMS: start;
  justify-content: centr
  postion: relative;
  font-sze: 14px
  COLOR: black
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase GAP + add semicolon, fix paddng, fix widht + add semicolon, fix max-widht, fix margn + add semicolon, lowercase BACKGROUND-COLOR, lowercase BOX-SIZING + add semicolon, lowercase ALIGN-ITEMS, fix centr->center + add semicolon, fix postion, fix font-sze + add semicolon, lowercase COLOR + add semicolon."
},

// ── M91 ──
{
correct: `.review-card {
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  color: black;
  box-shadow: 0 2px 6px lightgray;
  cursor: default;
  position: relative;
  font-weight: 400;
}`,
wrong: `.review-card {
  BACKGROUND-COLOR: white
  bordr: 1px solid lightgray;
  border-raduis: 10px
  paddng: 20px;
  widht: 100%
  MAX-WIDTH: 480px;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 12px
  font-sze: 14px;
  COLOR: black
  BOX-SHADOW: 0 2px 6px lightgray;
  CURSOR: default
  postion: relative;
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Lowercase BACKGROUND-COLOR + add semicolon, fix bordr, fix border-raduis + add semicolon, fix paddng, fix widht + add semicolon, lowercase MAX-WIDTH, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR + add semicolon, fix postion, lowercase FONT-WEIGHT + add semicolon."
},

// ── M92 ──
{
correct: `.subscribe-box {
  background-color: royalblue;
  border-radius: 16px;
  padding: 40px;
  color: white;
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 6px 20px blue;
  font-size: 16px;
  position: relative;
}`,
wrong: `.subscribe-box {
  BACKGROUND-COLOR: royalblue
  border-raduis: 16px;
  paddng: 40px
  COLOR: white;
  TEXT-ALIGN: centr;
  widht: 100%
  MAX-WIDTH: 500px;
  margn: 0 auto
  DISPLAY: flex;
  FLEX-DIRECTION: column
  GAP: 20px;
  BOX-SHADOW: 0 6px 20px blue
  font-sze: 16px;
  postion: relative
}`,
totalMistakes: 16,
hint: "Lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, lowercase COLOR, lowercase TEXT-ALIGN + fix centr->center, fix widht + add semicolon, lowercase MAX-WIDTH, fix margn + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, lowercase BOX-SHADOW + add semicolon, fix font-sze, fix postion + add semicolon."
},

// ── M93 ──
{
correct: `.code-block {
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre-wrap;
  line-height: 1.6;
  border: 1px solid gray;
  margin: 16px 0;
  tab-size: 4;
  cursor: default;
  position: relative;
  width: 100%;
}`,
wrong: `.code-block {
  BACKGROUND-COLOR: #1e1e1e
  COLOR: #d4d4d4;
  paddng: 20px
  border-raduis: 8px;
  font-family: monospacee
  font-sze: 14px;
  OVERFLOW-X: auto
  WHITE-SPACE: pre-wrap;
  LINE-HEIGHT: 1.6
  bordr: 1px solid gray;
  margn: 16px 0
  TAB-SIZE: 4;
  CURSOR: default
  postion: relative;
  widht: 100%
}`,
totalMistakes: 16,
hint: "Lowercase BACKGROUND-COLOR + add semicolon, lowercase COLOR, fix paddng + add semicolon, fix border-raduis, fix monospacee + add semicolon, fix font-sze, lowercase OVERFLOW-X + add semicolon, lowercase WHITE-SPACE, lowercase LINE-HEIGHT + add semicolon, fix bordr, fix margn + add semicolon, lowercase TAB-SIZE, lowercase CURSOR + add semicolon, fix postion, fix widht + add semicolon."
},

// ── M94 ──
{
correct: `.upload-area {
  border: 2px dashed gray;
  border-radius: 10px;
  padding: 40px 20px;
  text-align: center;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  font-size: 14px;
  color: gray;
  position: relative;
  overflow: hidden;
}`,
wrong: `.upload-area {
  bordr: 2px dashed gray;
  border-raduis: 10px
  paddng: 40px 20px;
  TEXT-ALIGN: centr;
  BACKGROUND-COLOR: whitesmoke
  CURSOR: pointer;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  GAP: 12px;
  widht: 100%
  font-sze: 14px;
  COLOR: gray
  postion: relative;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix bordr, fix border-raduis + add semicolon, fix paddng, lowercase TEXT-ALIGN + fix centr->center, lowercase BACKGROUND-COLOR + add semicolon, lowercase CURSOR, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix widht + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix postion, lowercase OVERFLOW + add semicolon."
},

// ── M95 ──
{
correct: `.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 500px;
  font-size: 15px;
  color: black;
  line-height: 1.6;
  cursor: default;
  position: relative;
  font-weight: 400;
}`,
wrong: `.feature-list {
  LIST-STYLE: none
  PADDING: 0;
  MARGIN: 0
  DISPLAY: flex;
  FLEX-DIRECTION: colum;
  GAP: 16px
  widht: 100%;
  MAX-WIDTH: 500px
  font-sze: 15px;
  COLOR: black
  LINE-HEIGHT: 1.6;
  CURSOR: default
  postion: relative;
  FONT-WEIGHT: 400
}`,
totalMistakes: 16,
hint: "Lowercase LIST-STYLE + add semicolon, lowercase PADDING, lowercase MARGIN + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + fix colum->column, lowercase GAP + add semicolon, fix widht, lowercase MAX-WIDTH + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase LINE-HEIGHT, lowercase CURSOR + add semicolon, fix postion, lowercase FONT-WEIGHT + add semicolon."
},

// ── M96 ──
{
correct: `.chat-input {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background-color: whitesmoke;
  border-radius: 30px;
  width: 100%;
  border: 1px solid lightgray;
  position: sticky;
  bottom: 0;
  margin-top: auto;
  font-size: 14px;
  color: black;
  box-shadow: 0 -1px 4px lightgray;
}`,
wrong: `.chat-input {
  DISPLAY: flex
  ALIGN-ITEMS: center
  GAP: 10px;
  paddng: 10px 16px
  BACKGROUND-COLOR: whitesmoke;
  border-raduis: 30px;
  widht: 100%
  bordr: 1px solid lightgray;
  postion: sticky
  BOTTOM: 0;
  MARGIN-TOP: auto
  font-sze: 14px;
  COLOR: black
  BOX-SHADOW: 0 -1px 4px lightgray
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix widht + add semicolon, fix bordr, fix postion + add semicolon, lowercase BOTTOM, lowercase MARGIN-TOP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase BOX-SHADOW + add semicolon."
},

// ── M97 ──
{
correct: `.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  max-width: 600px;
  font-size: 13px;
  color: black;
  position: relative;
  cursor: default;
}`,
wrong: `.tag-cloud {
  DISPLAY: flex
  FLEX-WRAP: warp;
  GAP: 10px
  paddng: 16px;
  BACKGROUND-COLOR: white
  border-raduis: 10px;
  bordr: 1px solid lightgray
  widht: 100%;
  ALIGN-ITEMS: center
  justify-content: flex-start
  MAX-WIDTH: 600px;
  font-sze: 13px
  COLOR: black;
  postion: relative
  CURSOR: default
}`,
totalMistakes: 16,
hint: "Lowercase DISPLAY + add semicolon, lowercase FLEX-WRAP + fix warp->wrap, lowercase GAP + add semicolon, fix paddng, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix bordr + add semicolon, fix widht, lowercase ALIGN-ITEMS + add semicolon, add semicolon after flex-start, lowercase MAX-WIDTH, fix font-sze + add semicolon, lowercase COLOR, fix postion + add semicolon, lowercase CURSOR + add semicolon."
},

// ── M98 ──
{
correct: `.progress-track {
  width: 100%;
  height: 8px;
  background-color: lightgray;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin: 8px 0;
  display: block;
  flex-shrink: 0;
  cursor: default;
  border: none;
  padding: 0;
  box-shadow: none;
  font-size: 0;
  color: transparent;
}`,
wrong: `.progress-track {
  widht: 100%;
  hieght: 8px
  BACKGROUND-COLOR: lightgray;
  border-raduis: 4px
  OVERFLOW: hidden;
  postion: relative
  margn: 8px 0;
  DISPLAY: block
  FLEX-SHRINK: 0;
  CURSOR: default
  BORDER: none;
  PADDING: 0
  BOX-SHADOW: none;
  font-sze: 0
  COLOR: transparent
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis + add semicolon, lowercase OVERFLOW, fix postion + add semicolon, fix margn, lowercase DISPLAY + add semicolon, lowercase FLEX-SHRINK, lowercase CURSOR + add semicolon, lowercase BORDER, lowercase PADDING + add semicolon, lowercase BOX-SHADOW, fix font-sze + add semicolon, lowercase COLOR + add semicolon."
},

// ── M99 ──
{
correct: `.checkout-summary {
  background-color: whitesmoke;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 24px;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 15px;
  color: black;
  box-shadow: 0 2px 8px lightgray;
  cursor: default;
  position: sticky;
  top: 20px;
}`,
wrong: `.checkout-summary {
  BACKGROUND-COLOR: whitesmoke
  bordr: 1px solid lightgray;
  border-raduis: 10px
  paddng: 24px;
  widht: 100%
  MAX-WIDTH: 380px;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 14px
  font-sze: 15px;
  COLOR: black
  BOX-SHADOW: 0 2px 8px lightgray;
  CURSOR: default
  postion: sticky
  TOP: 20px
}`,
totalMistakes: 16,
hint: "Lowercase BACKGROUND-COLOR + add semicolon, fix bordr, fix border-raduis + add semicolon, fix paddng, fix widht + add semicolon, lowercase MAX-WIDTH, lowercase DISPLAY + add semicolon, lowercase FLEX-DIRECTION, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR + add semicolon, fix postion, lowercase TOP + add semicolon."
},

// ── M100 ──
{
correct: `.app-wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  font-family: Arial, sans-serif;
  color: black;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  cursor: default;
}`,
wrong: `.app-wrapper {
  widht: 100%;
  MIN-HEIGHT: 100vh
  DISPLAY: flex;
  FLEX-DIRECTION: column
  BACKGROUND-COLOR: whitesmoke;
  FONT-FAMILY: Arial, sans-serif
  COLOR: black;
  OVERFLOW-X: hidden
  BOX-SIZING: border-box;
  PADDING: 0
  MARGIN: 0;
  postion: relative
  font-sze: 14px;
  LINE-HEIGHT: 1.6
  CURSOR: default
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase MIN-HEIGHT + add semicolon, lowercase DISPLAY, lowercase FLEX-DIRECTION + add semicolon, lowercase BACKGROUND-COLOR, lowercase FONT-FAMILY + add semicolon, lowercase COLOR, lowercase OVERFLOW-X + add semicolon, lowercase BOX-SIZING, lowercase PADDING + add semicolon, lowercase MARGIN, fix postion + add semicolon, fix font-sze, lowercase LINE-HEIGHT + add semicolon, lowercase CURSOR + add semicolon."
},

/* ── Paragraph Mistakes — Medium CSS Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (M101 - M125)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, BLUE → blue)
     'spelling'= spelling galat (colr → color, marign → margin)
     'missing' = semicolon, colon, unit, ya closing brace ghayab hai
*/


// ── M101 ──
{
correct: `.hero-banner {
  width: 100%;
  height: 420px;
  background-color: steelblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  border-radius: 12px;
  padding: 24px;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 1px;
  box-shadow: 0 6px 18px gray;
}`,
wrong: `.hero-banner {
  WIDTH: 100%;
  hieght: 420px
  background-colr: steelblue;
  COLOR: white;
  diplay: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  font-sze: 28px;
  FONT-WEIGHT: bold;
  border-raduis: 12px;
  paddng: 24px;
  margn: 0 auto;
  text-align: centr;
  LETTER-SPACING: 1px
  box-shadow: 0 6px 18px gray
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH, fix hieght + add semicolon, fix background-colr, lowercase COLOR, fix diplay, fix centr (x2), lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase FONT-WEIGHT, fix border-raduis, fix paddng, fix margn, lowercase LETTER-SPACING + add semicolon, add last semicolon."
},

// ── M102 ──
{
correct: `.info-card {
  width: 300px;
  height: 180px;
  background-color: lightyellow;
  border: 1px solid gold;
  border-radius: 10px;
  padding: 18px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: darkbrown;
  cursor: default;
  box-shadow: 1px 1px 6px gold;
  text-align: left;
  overflow: hidden;
}`,
wrong: `.info-card {
  widht: 300px;
  hieght: 180px
  BACKGROUND-COLOR: lightyellow;
  bordr: 1px solid gold;
  border-raduis: 10px
  paddng: 18px;
  margn: 12px;
  DISPLAY: flex;
  flex-direction: column
  font-sze: 13px;
  COLOR: darkbrown
  CURSOR: default;
  BOX-SHADOW: 1px 1px 6px gold;
  text-align: left
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis + add semicolon, fix paddng, fix margn, lowercase DISPLAY, add semicolon after column, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW, add semicolon after text-align, lowercase OVERFLOW + add semicolon."
},

// ── M103 ──
{
correct: `.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: crimson;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 200;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 2px 6px black;
}`,
wrong: `.top-bar {
  postion: fixed;
  TOP: 0
  left: 0;
  WIDTH: 100%;
  hieght: 50px
  background-colr: crimson;
  COLOR: white;
  diplay: flex;
  justify-content: space-betwen
  ALIGN-ITEMS: center;
  paddng: 0 16px;
  Z-INDEX: 200
  font-sze: 15px;
  FONT-WEIGHT: 600
  BOX-SHADOW: 0 2px 6px black;
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase TOP + add semicolon, lowercase WIDTH, fix hieght + add semicolon, fix background-colr, lowercase COLOR, fix diplay, fix space-betwen + add semicolon, lowercase ALIGN-ITEMS, fix paddng, lowercase Z-INDEX + add semicolon, fix font-sze, lowercase FONT-WEIGHT + add semicolon, lowercase BOX-SHADOW."
},

// ── M104 ──
{
correct: `.user-card {
  width: 260px;
  background-color: white;
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  font-family: Georgia;
  font-size: 14px;
  color: dimgray;
  border: 1px solid silver;
  cursor: pointer;
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px silver;
}`,
wrong: `.user-card {
  widht: 260px;
  BACKGROUND-COLOR: white
  border-raduis: 14px;
  paddng: 20px;
  TEXT-ALIGN: center;
  font-family: Georgia
  font-sze: 14px;
  COLOR: dimgray;
  bordr: 1px solid silver;
  CURSOR: pointer
  margn: 8px auto;
  diplay: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: center;
  BOX-SHADOW: 0 0 10px silver
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng, lowercase TEXT-ALIGN, add semicolon after font-family, fix font-sze, lowercase COLOR, fix bordr, lowercase CURSOR + add semicolon, fix margn, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase ALIGN-ITEMS, lowercase BOX-SHADOW + add semicolon."
},

// ── M105 ──
{
correct: `.contact-form {
  width: 440px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 14px lightgray;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  color: black;
  border: 1px solid lightgray;
  margin: 30px auto;
  text-align: left;
  font-family: Verdana;
  position: relative;
}`,
wrong: `.contact-form {
  widht: 440px;
  background-colr: white;
  PADDING: 30px
  border-raduis: 10px;
  BOX-SHADOW: 0 4px 14px lightgray
  diplay: flex;
  FLEX-DIRECTION: column;
  GAP: 14px
  font-sze: 14px;
  COLOR: black;
  bordr: 1px solid lightgray
  margn: 30px auto;
  text-align: left
  FONT-FAMILY: Verdana;
  postion: relative
}`,
totalMistakes: 17,
hint: "Fix widht, fix background-colr, lowercase PADDING + add semicolon, fix border-raduis, lowercase BOX-SHADOW + add semicolon, fix diplay, lowercase FLEX-DIRECTION, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR, fix bordr + add semicolon, fix margn, add semicolon after text-align, lowercase FONT-FAMILY, fix postion + add semicolon."
},

// ── M106 ──
{
correct: `.page-footer {
  width: 100%;
  background-color: darkslategray;
  color: white;
  padding: 36px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 12px;
  flex-wrap: wrap;
  gap: 18px;
  border-top: 2px solid teal;
  margin-top: 0;
  text-align: left;
  letter-spacing: 0.4px;
  line-height: 1.7;
}`,
wrong: `.page-footer {
  WIDTH: 100%;
  background-colr: darkslategray;
  COLOR: white
  paddng: 36px 24px;
  diplay: flex;
  justify-content: space-betwen;
  ALIGN-ITEMS: flex-start
  font-sze: 12px;
  FLEX-WRAP: wrap
  GAP: 18px;
  bordr-top: 2px solid teal;
  MARGIN-TOP: 0;
  text-align: left
  LETTER-SPACING: 0.4px;
  line-hieght: 1.7
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH, fix background-colr, lowercase COLOR + add semicolon, fix paddng, fix diplay, fix space-betwen, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase FLEX-WRAP + add semicolon, lowercase GAP, fix bordr-top, lowercase MARGIN-TOP, add semicolon after text-align, lowercase LETTER-SPACING, fix line-hieght + add semicolon."
},

// ── M107 ──
{
correct: `.item-card {
  width: 240px;
  height: 340px;
  background-color: white;
  border-radius: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  color: black;
  border: 1px solid gainsboro;
  cursor: pointer;
  margin: 8px;
  box-shadow: 0 2px 8px gainsboro;
  text-align: center;
}`,
wrong: `.item-card {
  widht: 240px;
  hieght: 340px
  BACKGROUND-COLOR: white;
  border-raduis: 10px;
  paddng: 14px
  diplay: flex;
  FLEX-DIRECTION: column
  justify-content: space-betwen;
  font-sze: 13px;
  COLOR: black;
  bordr: 1px solid gainsboro
  CURSOR: pointer;
  margn: 8px;
  BOX-SHADOW: 0 2px 8px gainsboro
  TEXT-ALIGN: center
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix paddng + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, fix space-betwen, fix font-sze, lowercase COLOR, fix bordr + add semicolon, lowercase CURSOR, fix margn, lowercase BOX-SHADOW + add semicolon, lowercase TEXT-ALIGN + add semicolon."
},

// ── M108 ──
{
correct: `.popup-box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 460px;
  background-color: white;
  border-radius: 14px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  color: black;
  text-align: left;
}`,
wrong: `.popup-box {
  postion: fixed;
  TOP: 50%
  left: 50%;
  widht: 460px;
  BACKGROUND-COLOR: white
  border-raduis: 14px;
  paddng: 30px
  BOX-SHADOW: 0 8px 20px rgba(0,0,0,0.15);
  Z-INDEX: 1000
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 16px;
  font-sze: 14px
  COLOR: black;
  TEXT-ALIGN: left
}`,
totalMistakes: 17,
hint: "Fix postion, lowercase TOP + add semicolon, fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, lowercase BOX-SHADOW, lowercase Z-INDEX + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, lowercase TEXT-ALIGN + add semicolon."
},

// ── M109 ──
{
correct: `.left-panel {
  width: 220px;
  height: 100vh;
  background-color: midnightblue;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  font-size: 13px;
  font-weight: 500;
  overflow-y: auto;
  z-index: 100;
}`,
wrong: `.left-panel {
  widht: 220px;
  HEIGHT: 100vh
  BACKGROUND-COLOR: midnightblue;
  COLOR: white
  postion: fixed;
  TOP: 0;
  left: 0
  diplay: flex;
  FLEX-DIRECTION: column;
  paddng: 16px
  GAP: 10px;
  font-sze: 13px;
  FONT-WEIGHT: 500
  OVERFLOW-Y: auto;
  Z-INDEX: 100
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase HEIGHT + add semicolon, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, fix postion, lowercase TOP, add semicolon after left, fix diplay, lowercase FLEX-DIRECTION, fix paddng + add semicolon, lowercase GAP, fix font-sze, lowercase FONT-WEIGHT + add semicolon, lowercase OVERFLOW-Y, lowercase Z-INDEX + add semicolon."
},

// ── M110 ──
{
correct: `.order-form {
  width: 520px;
  background-color: white;
  border-radius: 12px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid lightgray;
  box-shadow: 0 4px 16px lightgray;
  font-size: 14px;
  color: black;
  font-family: Tahoma;
  margin: 24px auto;
  cursor: default;
  text-align: left;
  position: relative;
}`,
wrong: `.order-form {
  widht: 520px
  BACKGROUND-COLOR: white;
  border-raduis: 12px;
  PADDING: 34px
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 16px;
  bordr: 1px solid lightgray;
  BOX-SHADOW: 0 4px 16px lightgray
  font-sze: 14px;
  COLOR: black
  FONT-FAMILY: Tahoma;
  margn: 24px auto;
  CURSOR: default
  text-align: left
  postion: relative
}`,
totalMistakes: 18,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase PADDING + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix bordr, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-FAMILY, fix margn, lowercase CURSOR + add semicolon, add semicolon after text-align, fix postion + add semicolon."
},

// ── M111 ──
{
correct: `.promo-banner {
  width: 100%;
  height: 80px;
  background-color: tomato;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 6px;
  padding: 0 20px;
  cursor: pointer;
  box-shadow: 0 3px 8px coral;
}`,
wrong: `.promo-banner {
  WIDTH: 100%;
  hieght: 80px
  background-colr: tomato;
  COLOR: white;
  diplay: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  font-sze: 18px;
  FONT-WEIGHT: bold
  LETTER-SPACING: 1px;
  TEXT-ALIGN: center;
  border-raduis: 6px
  paddng: 0 20px;
  CURSOR: pointer;
  BOX-SHADOW: 0 3px 8px coral
}`,
totalMistakes: 15,
hint: "Lowercase WIDTH, fix hieght + add semicolon, fix background-colr, lowercase COLOR, fix diplay, fix centr, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase FONT-WEIGHT + add semicolon, lowercase LETTER-SPACING, lowercase TEXT-ALIGN, fix border-raduis + add semicolon, fix paddng, lowercase CURSOR, lowercase BOX-SHADOW + add semicolon."
},

// ── M112 ──
{
correct: `.side-menu {
  width: 200px;
  height: 100vh;
  background-color: slategray;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 14px;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  border-right: 1px solid dimgray;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
}`,
wrong: `.side-menu {
  widht: 200px;
  HEIGHT: 100vh
  BACKGROUND-COLOR: slategray;
  COLOR: white
  diplay: flex;
  FLEX-DIRECTION: column;
  paddng: 14px
  GAP: 8px;
  font-sze: 14px;
  FONT-WEIGHT: 400
  bordr-right: 1px solid dimgray;
  OVERFLOW-Y: auto
  postion: fixed;
  TOP: 0;
  LEFT: 0
}`,
totalMistakes: 15,
hint: "Fix widht, lowercase HEIGHT + add semicolon, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, fix diplay, lowercase FLEX-DIRECTION, fix paddng + add semicolon, lowercase GAP, fix font-sze, lowercase FONT-WEIGHT + add semicolon, fix bordr-right, lowercase OVERFLOW-Y + add semicolon, fix postion, lowercase TOP, lowercase LEFT + add semicolon."
},

// ── M113 ──
{
correct: `.notification-bar {
  width: 100%;
  height: 44px;
  background-color: orange;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 13px;
  font-weight: 500;
  border-bottom: 1px solid darkorange;
  z-index: 300;
  position: sticky;
  top: 0;
  cursor: pointer;
}`,
wrong: `.notification-bar {
  WIDTH: 100%;
  hieght: 44px
  background-colr: orange;
  COLOR: black;
  diplay: flex;
  justify-content: space-betwen
  ALIGN-ITEMS: center;
  paddng: 0 16px;
  font-sze: 13px
  FONT-WEIGHT: 500;
  bordr-bottom: 1px solid darkorange
  Z-INDEX: 300;
  postion: sticky;
  TOP: 0
  CURSOR: pointer
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH, fix hieght + add semicolon, fix background-colr, lowercase COLOR, fix diplay, fix space-betwen + add semicolon, lowercase ALIGN-ITEMS, fix paddng, fix font-sze + add semicolon, lowercase FONT-WEIGHT, fix bordr-bottom + add semicolon, lowercase Z-INDEX, fix postion, lowercase TOP + add semicolon, lowercase CURSOR + add semicolon."
},

// ── M114 ──
{
correct: `.tab-panel {
  width: 100%;
  height: 48px;
  background-color: whitesmoke;
  border-bottom: 2px solid lightgray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  font-size: 14px;
  color: gray;
  cursor: pointer;
  font-weight: 500;
  overflow-x: auto;
  position: sticky;
}`,
wrong: `.tab-panel {
  WIDTH: 100%
  hieght: 48px;
  BACKGROUND-COLOR: whitesmoke;
  bordr-bottom: 2px solid lightgray
  diplay: flex;
  justify-content: flex-strt;
  ALIGN-ITEMS: center
  paddng: 0 12px;
  GAP: 8px
  font-sze: 14px;
  COLOR: gray;
  CURSOR: pointer
  FONT-WEIGHT: 500;
  OVERFLOW-X: auto
  postion: sticky
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix hieght, lowercase BACKGROUND-COLOR, fix bordr-bottom + add semicolon, fix diplay, fix flex-strt, lowercase ALIGN-ITEMS + add semicolon, fix paddng, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR, lowercase CURSOR + add semicolon, lowercase FONT-WEIGHT, lowercase OVERFLOW-X + add semicolon, fix postion + add semicolon."
},

// ── M115 ──
{
correct: `.search-wrapper {
  width: 360px;
  height: 44px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 22px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 8px;
  font-size: 14px;
  color: gray;
  cursor: text;
  box-shadow: 0 1px 4px lightgray;
  position: relative;
  overflow: hidden;
}`,
wrong: `.search-wrapper {
  widht: 360px;
  hieght: 44px
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray;
  border-raduis: 22px
  diplay: flex;
  ALIGN-ITEMS: center
  paddng: 0 14px;
  GAP: 8px
  font-sze: 14px;
  COLOR: gray
  CURSOR: text;
  BOX-SHADOW: 0 1px 4px lightgray
  postion: relative;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis + add semicolon, fix diplay, lowercase ALIGN-ITEMS + add semicolon, fix paddng, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW + add semicolon, fix postion, lowercase OVERFLOW + add semicolon."
},

// ── M116 ──
{
correct: `.avatar-box {
  width: 80px;
  height: 80px;
  background-color: lavender;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: purple;
  border: 2px solid plum;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px plum;
  margin: 0 auto;
}`,
wrong: `.avatar-box {
  widht: 80px;
  hieght: 80px
  BACKGROUND-COLOR: lavender;
  border-raduis: 50%;
  diplay: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  font-sze: 28px;
  COLOR: purple
  bordr: 2px solid plum;
  CURSOR: pointer
  OVERFLOW: hidden;
  postion: relative;
  BOX-SHADOW: 0 2px 6px plum
  MARGIN: 0 auto
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, fix diplay, fix centr, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix bordr, lowercase CURSOR + add semicolon, lowercase OVERFLOW, fix postion, lowercase BOX-SHADOW + add semicolon, lowercase MARGIN + add semicolon."
},

// ── M117 ──
{
correct: `.dropdown-menu {
  width: 180px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px lightgray;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 500;
  font-size: 14px;
  color: black;
  overflow: hidden;
}`,
wrong: `.dropdown-menu {
  widht: 180px;
  BACKGROUND-COLOR: white
  bordr: 1px solid lightgray;
  border-raduis: 8px
  paddng: 8px 0;
  diplay: flex;
  FLEX-DIRECTION: column
  BOX-SHADOW: 0 4px 12px lightgray;
  postion: absolute;
  TOP: 100%
  LEFT: 0;
  Z-INDEX: 500
  font-sze: 14px;
  COLOR: black
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix bordr, fix border-raduis + add semicolon, fix paddng, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase BOX-SHADOW, fix postion, lowercase TOP + add semicolon, lowercase LEFT, lowercase Z-INDEX + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase OVERFLOW + add semicolon."
},

// ── M118 ──
{
correct: `.grid-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 10px;
  margin: 16px auto;
  font-size: 14px;
  color: black;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px lightgray;
  min-height: 200px;
  align-items: start;
}`,
wrong: `.grid-wrapper {
  WIDTH: 100%
  DISPLAY: grid;
  grid-template-columns: repat(3, 1fr);
  GAP: 16px
  paddng: 20px;
  BACKGROUND-COLOR: whitesmoke;
  border-raduis: 10px
  MARGIN: 16px auto;
  font-sze: 14px;
  COLOR: black
  OVERFLOW: hidden;
  postion: relative
  BOX-SHADOW: 0 2px 8px lightgray;
  MIN-HEIGHT: 200px
  ALIGN-ITEMS: start
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, lowercase DISPLAY, fix repat→repeat, lowercase GAP + add semicolon, fix paddng, lowercase BACKGROUND-COLOR, fix border-raduis + add semicolon, lowercase MARGIN, fix font-sze, lowercase COLOR + add semicolon, lowercase OVERFLOW, fix postion + add semicolon, lowercase BOX-SHADOW, lowercase MIN-HEIGHT + add semicolon, lowercase ALIGN-ITEMS + add semicolon."
},

// ── M119 ──
{
correct: `.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: black;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
  background-color: transparent;
  position: relative;
  cursor: text;
  font-family: sans-serif;
  letter-spacing: 0.3px;
  margin-bottom: 12px;
  overflow: visible;
}`,
wrong: `.input-group {
  WIDTH: 100%
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 6px;
  font-sze: 13px;
  COLOR: black
  paddng: 10px 0;
  bordr-bottom: 1px solid lightgray
  BACKGROUND-COLOR: transparent;
  postion: relative
  CURSOR: text;
  FONT-FAMILY: sans-serif
  LETTER-SPACING: 0.3px;
  margn-bottom: 12px
  OVERFLOW: visible
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, fix paddng, fix bordr-bottom + add semicolon, lowercase BACKGROUND-COLOR, fix postion + add semicolon, lowercase CURSOR, lowercase FONT-FAMILY + add semicolon, lowercase LETTER-SPACING, fix margn-bottom + add semicolon, lowercase OVERFLOW + add semicolon."
},

// ── M120 ──
{
correct: `.breadcrumb {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: gray;
  padding: 8px 0;
  background-color: transparent;
  cursor: default;
  font-family: Arial;
  letter-spacing: 0.2px;
  border-bottom: 1px solid lightgray;
  overflow: hidden;
  text-align: left;
}`,
wrong: `.breadcrumb {
  WIDTH: 100%
  diplay: flex;
  flex-direction: row
  ALIGN-ITEMS: center;
  GAP: 6px
  font-sze: 12px;
  COLOR: gray;
  paddng: 8px 0
  BACKGROUND-COLOR: transparent;
  CURSOR: default
  font-family: Arial;
  LETTER-SPACING: 0.2px
  bordr-bottom: 1px solid lightgray;
  OVERFLOW: hidden
  TEXT-ALIGN: left
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix diplay, add semicolon after row, lowercase ALIGN-ITEMS, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, lowercase CURSOR + add semicolon, lowercase FONT-FAMILY, lowercase LETTER-SPACING + add semicolon, fix bordr-bottom, lowercase OVERFLOW + add semicolon, lowercase TEXT-ALIGN + add semicolon."
},

// ── M121 ──
{
correct: `.toast-alert {
  width: 320px;
  height: 60px;
  background-color: darkgreen;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  position: fixed;
  bottom: 20px;
  right: 20px;
}`,
wrong: `.toast-alert {
  widht: 320px;
  hieght: 60px
  BACKGROUND-COLOR: darkgreen;
  COLOR: white
  diplay: flex;
  ALIGN-ITEMS: center
  paddng: 0 16px;
  GAP: 10px
  border-raduis: 8px;
  font-sze: 14px
  FONT-WEIGHT: 500;
  BOX-SHADOW: 0 4px 12px rgba(0,0,0,0.2);
  postion: fixed;
  BOTTOM: 20px
  RGHT: 20px
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, fix diplay, lowercase ALIGN-ITEMS + add semicolon, fix paddng, lowercase GAP + add semicolon, fix border-raduis, fix font-sze + add semicolon, lowercase FONT-WEIGHT, lowercase BOX-SHADOW, fix postion, lowercase BOTTOM + add semicolon, fix RGHT→right + lowercase + add semicolon."
},

// ── M122 ──
{
correct: `.price-card {
  width: 280px;
  background-color: white;
  border-radius: 16px;
  padding: 28px;
  text-align: center;
  font-family: Arial;
  font-size: 15px;
  color: black;
  border: 2px solid royalblue;
  cursor: pointer;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 16px royalblue;
}`,
wrong: `.price-card {
  widht: 280px;
  BACKGROUND-COLOR: white
  border-raduis: 16px;
  paddng: 28px;
  TEXT-ALIGN: center;
  FONT-FAMILY: Arial
  font-sze: 15px;
  COLOR: black;
  bordr: 2px solid royalblue
  CURSOR: pointer;
  margn: 12px auto;
  diplay: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: center;
  BOX-SHADOW: 0 0 16px royalblue
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng, lowercase TEXT-ALIGN, lowercase FONT-FAMILY + add semicolon, fix font-sze, lowercase COLOR, fix bordr + add semicolon, lowercase CURSOR, fix margn, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase ALIGN-ITEMS, lowercase BOX-SHADOW + add semicolon."
},

// ── M123 ──
{
correct: `.player-box {
  width: 360px;
  height: 100px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 4px 10px black;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}`,
wrong: `.player-box {
  widht: 360px;
  hieght: 100px
  BACKGROUND-COLOR: black;
  COLOR: white
  diplay: flex;
  ALIGN-ITEMS: center
  paddng: 0 20px;
  GAP: 14px
  border-raduis: 10px;
  font-sze: 13px
  FONT-WEIGHT: 500;
  BOX-SHADOW: 0 4px 10px black
  CURSOR: pointer;
  postion: relative
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, fix diplay, lowercase ALIGN-ITEMS + add semicolon, fix paddng, lowercase GAP + add semicolon, fix border-raduis, fix font-sze + add semicolon, lowercase FONT-WEIGHT, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR, fix postion + add semicolon, lowercase OVERFLOW + add semicolon."
},

// ── M124 ──
{
correct: `.settings-panel {
  width: 320px;
  height: 100vh;
  background-color: white;
  border-left: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  font-size: 14px;
  color: black;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 800;
  overflow-y: auto;
}`,
wrong: `.settings-panel {
  widht: 320px;
  HEIGHT: 100vh
  BACKGROUND-COLOR: white;
  bordr-left: 1px solid lightgray
  diplay: flex;
  FLEX-DIRECTION: column;
  paddng: 20px
  GAP: 12px;
  font-sze: 14px;
  COLOR: black
  postion: fixed;
  TOP: 0
  RIGHT: 0;
  Z-INDEX: 800
  OVERFLOW-Y: auto
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase HEIGHT + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-left + add semicolon, fix diplay, lowercase FLEX-DIRECTION, fix paddng + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, fix postion, lowercase TOP + add semicolon, lowercase RIGHT, lowercase Z-INDEX + add semicolon, lowercase OVERFLOW-Y + add semicolon."
},

// ── M125 ──
{
correct: `.loader-screen {
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-size: 16px;
  color: gray;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  cursor: wait;
}`,
wrong: `.loader-screen {
  WIDTH: 100%;
  hieght: 100vh
  BACKGROUND-COLOR: white;
  diplay: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  FLEX-DIRECTION: column
  GAP: 20px;
  font-sze: 16px
  COLOR: gray;
  postion: fixed;
  TOP: 0
  LEFT: 0;
  Z-INDEX: 9999
  CURSOR: wait
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix diplay, fix centr, lowercase ALIGN-ITEMS + add semicolon, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze + add semicolon, lowercase COLOR, fix postion, lowercase TOP + add semicolon, lowercase LEFT, lowercase Z-INDEX + add semicolon, lowercase CURSOR + add semicolon."
},

/* ── Paragraph Mistakes — Medium CSS Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (M126 - M150)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, BLUE → blue)
     'spelling'= spelling galat (colr → color, marign → margin)
     'missing' = semicolon, colon, unit, ya closing brace ghayab hai
*/

// ── M126 ──
{
correct: `.alert-panel {
  width: 100%;
  background-color: lightyellow;
  border: 1px solid gold;
  border-radius: 8px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: darkorange;
  font-weight: 500;
  cursor: default;
  margin: 12px 0;
  position: relative;
  overflow: hidden;
}`,
wrong: `.alert-panel {
  WIDTH: 100%
  background-colr: lightyellow;
  bordr: 1px solid gold;
  border-raduis: 8px
  paddng: 14px 18px;
  diplay: flex;
  ALIGN-ITEMS: center
  GAP: 10px
  font-sze: 14px;
  COLOR: darkorange
  FONT-WEIGHT: 500;
  CURSOR: default
  margn: 12px 0;
  postion: relative
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix background-colr, fix bordr, fix border-raduis + add semicolon, fix paddng, fix diplay, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT, lowercase CURSOR + add semicolon, fix margn, fix postion + add semicolon, lowercase OVERFLOW + add semicolon."
},

// ── M127 ──
{
correct: `.progress-bar {
  width: 100%;
  height: 12px;
  background-color: lightgray;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 8px 0;
  display: flex;
  align-items: center;
  cursor: default;
  box-shadow: inset 0 1px 3px gray;
  font-size: 0;
  border: 1px solid silver;
  padding: 0;
  min-width: 80px;
}`,
wrong: `.progress-bar {
  WIDTH: 100%
  hieght: 12px;
  BACKGROUND-COLOR: lightgray;
  border-raduis: 6px
  OVERFLOW: hidden;
  postion: relative
  margn: 8px 0;
  diplay: flex;
  ALIGN-ITEMS: center
  CURSOR: default;
  BOX-SHADOW: inset 0 1px 3px gray
  font-sze: 0;
  bordr: 1px solid silver
  PADDING: 0;
  MIN-WIDTH: 80px
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix hieght, lowercase BACKGROUND-COLOR, fix border-raduis + add semicolon, lowercase OVERFLOW, fix postion + add semicolon, fix margn, fix diplay, lowercase ALIGN-ITEMS + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW + add semicolon, fix font-sze, fix bordr + add semicolon, lowercase PADDING, lowercase MIN-WIDTH + add semicolon."
},

// ── M128 ──
{
correct: `.menu-item {
  width: 100%;
  height: 44px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 10px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0.2px;
  position: relative;
  overflow: hidden;
}`,
wrong: `.menu-item {
  WIDTH: 100%
  hieght: 44px;
  BACKGROUND-COLOR: white;
  bordr-bottom: 1px solid lightgray
  diplay: flex;
  ALIGN-ITEMS: center
  paddng: 0 16px;
  GAP: 10px
  font-sze: 14px;
  COLOR: black
  CURSOR: pointer;
  FONT-WEIGHT: 400
  LETTER-SPACING: 0.2px;
  postion: relative
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix hieght, lowercase BACKGROUND-COLOR, fix bordr-bottom + add semicolon, fix diplay, lowercase ALIGN-ITEMS + add semicolon, fix paddng, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase FONT-WEIGHT + add semicolon, lowercase LETTER-SPACING, fix postion + add semicolon, lowercase OVERFLOW + add semicolon."
},

// ── M129 ──
{
correct: `.chat-bubble {
  max-width: 300px;
  background-color: deepskyblue;
  color: white;
  border-radius: 16px;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  cursor: default;
  position: relative;
  margin: 6px 0;
  box-shadow: 0 2px 6px skyblue;
  word-break: break-word;
}`,
wrong: `.chat-bubble {
  MAX-WIDTH: 300px
  BACKGROUND-COLOR: deepskyblue;
  COLOR: white
  border-raduis: 16px;
  paddng: 10px 14px
  font-sze: 14px;
  FONT-WEIGHT: 400
  diplay: flex;
  ALIGN-ITEMS: flex-start
  GAP: 6px;
  CURSOR: default
  postion: relative;
  margn: 6px 0
  BOX-SHADOW: 0 2px 6px skyblue;
  WORD-BREAK: break-word
}`,
totalMistakes: 15,
hint: "Lowercase MAX-WIDTH + add semicolon, lowercase BACKGROUND-COLOR, lowercase COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, fix font-sze, lowercase FONT-WEIGHT + add semicolon, fix diplay, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP, lowercase CURSOR + add semicolon, fix postion, fix margn + add semicolon, lowercase BOX-SHADOW, lowercase WORD-BREAK + add semicolon."
},

// ── M130 ──
{
correct: `.upload-box {
  width: 340px;
  height: 180px;
  background-color: whitesmoke;
  border: 2px dashed lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: gray;
  cursor: pointer;
  gap: 10px;
  position: relative;
  overflow: hidden;
}`,
wrong: `.upload-box {
  widht: 340px;
  hieght: 180px
  BACKGROUND-COLOR: whitesmoke;
  bordr: 2px dashed lightgray
  border-raduis: 10px;
  diplay: flex;
  FLEX-DIRECTION: column
  justify-content: centr;
  ALIGN-ITEMS: center
  font-sze: 14px;
  COLOR: gray
  CURSOR: pointer;
  GAP: 10px
  postion: relative;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix bordr + add semicolon, fix border-raduis, fix diplay, lowercase FLEX-DIRECTION + add semicolon, fix centr, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase GAP + add semicolon, fix postion, lowercase OVERFLOW + add semicolon."
},

// ── M131 ──
{
correct: `.stat-box {
  width: 200px;
  height: 120px;
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  color: black;
  border: 1px solid lightgray;
  cursor: default;
  margin: 8px;
  box-shadow: 0 2px 6px lightgray;
  text-align: left;
}`,
wrong: `.stat-box {
  widht: 200px;
  hieght: 120px
  BACKGROUND-COLOR: white;
  border-raduis: 10px
  paddng: 16px;
  diplay: flex;
  FLEX-DIRECTION: column
  justify-content: space-betwen;
  font-sze: 13px;
  COLOR: black
  bordr: 1px solid lightgray;
  CURSOR: default
  margn: 8px;
  BOX-SHADOW: 0 2px 6px lightgray
  TEXT-ALIGN: left
}`,
totalMistakes: 15,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis + add semicolon, fix paddng, fix diplay, lowercase FLEX-DIRECTION + add semicolon, fix space-betwen, fix font-sze, lowercase COLOR + add semicolon, fix bordr, lowercase CURSOR + add semicolon, fix margn, lowercase BOX-SHADOW + add semicolon, lowercase TEXT-ALIGN + add semicolon."
},

// ── M132 ──
{
correct: `.kanban-card {
  width: 240px;
  background-color: white;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  color: black;
  border: 1px solid lightgray;
  cursor: grab;
  margin: 6px 0;
  box-shadow: 0 1px 4px lightgray;
  position: relative;
  overflow: hidden;
}`,
wrong: `.kanban-card {
  widht: 240px;
  BACKGROUND-COLOR: white
  border-raduis: 8px;
  paddng: 14px
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 8px;
  font-sze: 13px;
  COLOR: black
  bordr: 1px solid lightgray;
  CURSOR: grab
  margn: 6px 0;
  BOX-SHADOW: 0 1px 4px lightgray
  postion: relative;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, fix bordr, lowercase CURSOR + add semicolon, fix margn, lowercase BOX-SHADOW + add semicolon, fix postion, lowercase OVERFLOW + add semicolon."
},

// ── M133 ──
{
correct: `.timeline-dot {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid lightgray;
  font-size: 13px;
  color: black;
  position: relative;
  cursor: default;
  background-color: transparent;
  font-weight: 400;
  letter-spacing: 0.2px;
  overflow: visible;
  min-height: 60px;
}`,
wrong: `.timeline-dot {
  WIDTH: 100%
  diplay: flex;
  ALIGN-ITEMS: flex-start
  GAP: 14px
  paddng: 12px 0;
  bordr-bottom: 1px solid lightgray
  font-sze: 13px;
  COLOR: black
  postion: relative;
  CURSOR: default
  BACKGROUND-COLOR: transparent;
  FONT-WEIGHT: 400
  LETTER-SPACING: 0.2px;
  OVERFLOW: visible
  MIN-HEIGHT: 60px
}`,
totalMistakes: 15,
hint: "Lowercase WIDTH + add semicolon, fix diplay, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP + add semicolon, fix paddng, fix bordr-bottom + add semicolon, fix font-sze, lowercase COLOR + add semicolon, fix postion, lowercase CURSOR + add semicolon, lowercase BACKGROUND-COLOR, lowercase FONT-WEIGHT + add semicolon, lowercase LETTER-SPACING, lowercase OVERFLOW + add semicolon, lowercase MIN-HEIGHT + add semicolon."
},

// ── M134 ──
{
correct: `.comment-box {
  width: 100%;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  color: black;
  cursor: default;
  margin: 8px 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 4px lightgray;
}`,
wrong: `.comment-box {
  WIDTH: 100%
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray;
  border-raduis: 8px
  paddng: 14px;
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 8px
  font-sze: 13px;
  COLOR: black
  CURSOR: default;
  margn: 8px 0
  postion: relative;
  OVERFLOW: hidden
  BOX-SHADOW: 0 1px 4px lightgray
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, lowercase BACKGROUND-COLOR, fix bordr, fix border-raduis + add semicolon, fix paddng, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, fix margn + add semicolon, fix postion, lowercase OVERFLOW + add semicolon, lowercase BOX-SHADOW + add semicolon."
},

// ── M135 ──
{
correct: `.slide-item {
  width: 100%;
  height: 300px;
  background-color: lightblue;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  cursor: grab;
  box-shadow: 0 4px 12px lightblue;
  text-align: center;
}`,
wrong: `.slide-item {
  WIDTH: 100%
  hieght: 300px;
  background-colr: lightblue;
  border-raduis: 12px
  diplay: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  font-sze: 20px;
  COLOR: white
  FONT-WEIGHT: bold;
  postion: relative
  OVERFLOW: hidden;
  CURSOR: grab
  BOX-SHADOW: 0 4px 12px lightblue;
  TEXT-ALIGN: center
}`,
totalMistakes: 15,
hint: "Lowercase WIDTH + add semicolon, fix hieght, fix background-colr, fix border-raduis + add semicolon, fix diplay, fix centr, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT, fix postion + add semicolon, lowercase OVERFLOW, lowercase CURSOR + add semicolon, lowercase BOX-SHADOW, lowercase TEXT-ALIGN + add semicolon."
},

// ── M136 ──
{
correct: `.rating-box {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  color: gold;
  cursor: pointer;
  background-color: transparent;
  padding: 4px 0;
  position: relative;
  font-weight: 400;
  border: none;
  margin: 4px 0;
  letter-spacing: 2px;
  overflow: visible;
  min-width: 100px;
}`,
wrong: `.rating-box {
  DISPLAY: flex
  ALIGN-ITEMS: center;
  GAP: 4px
  font-sze: 18px;
  COLOR: gold
  CURSOR: pointer;
  BACKGROUND-COLOR: transparent
  paddng: 4px 0;
  postion: relative
  FONT-WEIGHT: 400;
  BORDER: none
  margn: 4px 0;
  LETTER-SPACING: 2px
  OVERFLOW: visible;
  MIN-WIDTH: 100px
}`,
totalMistakes: 15,
hint: "Lowercase DISPLAY + add semicolon, lowercase ALIGN-ITEMS, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase BACKGROUND-COLOR + add semicolon, fix paddng, fix postion + add semicolon, lowercase FONT-WEIGHT, lowercase BORDER + add semicolon, fix margn, lowercase LETTER-SPACING + add semicolon, lowercase OVERFLOW, lowercase MIN-WIDTH + add semicolon."
},

// ── M137 ──
{
correct: `.overlay-dark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(2px);
  font-size: 0;
  border: none;
}`,
wrong: `.overlay-dark {
  postion: fixed;
  TOP: 0
  LEFT: 0;
  WIDTH: 100%;
  hieght: 100vh
  background-colr: rgba(0,0,0,0.5);
  Z-INDEX: 900
  diplay: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  CURSOR: pointer
  OVERFLOW: hidden;
  BACKDROP-FILTER: blur(2px)
  font-sze: 0;
  BORDER: none
}`,
totalMistakes: 16,
hint: "Fix postion, lowercase TOP + add semicolon, lowercase LEFT, lowercase WIDTH, fix hieght + add semicolon, fix background-colr, lowercase Z-INDEX + add semicolon, fix diplay, fix centr, lowercase ALIGN-ITEMS + add semicolon, lowercase CURSOR + add semicolon, lowercase OVERFLOW, lowercase BACKDROP-FILTER + add semicolon, fix font-sze, lowercase BORDER + add semicolon."
},

// ── M138 ──
{
correct: `.step-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  font-size: 13px;
  color: gray;
  gap: 8px;
  cursor: default;
  position: relative;
  overflow: hidden;
  font-weight: 500;
  letter-spacing: 0.3px;
}`,
wrong: `.step-bar {
  WIDTH: 100%
  diplay: flex;
  justify-content: space-betwen
  ALIGN-ITEMS: center;
  paddng: 12px 20px
  BACKGROUND-COLOR: white;
  bordr-bottom: 1px solid lightgray
  font-sze: 13px;
  COLOR: gray
  GAP: 8px;
  CURSOR: default
  postion: relative;
  OVERFLOW: hidden
  FONT-WEIGHT: 500;
  LETTER-SPACING: 0.3px
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix diplay, fix space-betwen + add semicolon, lowercase ALIGN-ITEMS, fix paddng + add semicolon, lowercase BACKGROUND-COLOR, fix bordr-bottom + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase GAP, lowercase CURSOR + add semicolon, fix postion, lowercase OVERFLOW + add semicolon, lowercase FONT-WEIGHT, lowercase LETTER-SPACING + add semicolon."
},

// ── M139 ──
{
correct: `.map-frame {
  width: 100%;
  height: 400px;
  background-color: lightgray;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 1px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: gray;
  cursor: default;
  box-shadow: 0 4px 10px silver;
  margin: 16px 0;
}`,
wrong: `.map-frame {
  WIDTH: 100%
  hieght: 400px;
  BACKGROUND-COLOR: lightgray;
  border-raduis: 12px
  OVERFLOW: hidden;
  postion: relative
  bordr: 1px solid silver;
  diplay: flex;
  justify-content: centr;
  ALIGN-ITEMS: center
  font-sze: 14px;
  COLOR: gray
  CURSOR: default;
  BOX-SHADOW: 0 4px 10px silver
  margn: 16px 0
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix hieght, lowercase BACKGROUND-COLOR, fix border-raduis + add semicolon, lowercase OVERFLOW, fix postion + add semicolon, fix bordr, fix diplay, fix centr, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW + add semicolon, fix margn + add semicolon."
},

// ── M140 ──
{
correct: `.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 0;
  align-items: center;
  font-size: 12px;
  color: black;
  background-color: transparent;
  cursor: default;
  position: relative;
  overflow: visible;
  margin: 8px 0;
  width: 100%;
  border: none;
  letter-spacing: 0.2px;
}`,
wrong: `.tag-list {
  DISPLAY: flex
  FLEX-WRAP: wrap;
  GAP: 8px
  paddng: 10px 0;
  ALIGN-ITEMS: center
  font-sze: 12px;
  COLOR: black
  BACKGROUND-COLOR: transparent;
  CURSOR: default
  postion: relative;
  OVERFLOW: visible
  margn: 8px 0;
  WIDTH: 100%
  BORDER: none;
  LETTER-SPACING: 0.2px
}`,
totalMistakes: 15,
hint: "Lowercase DISPLAY + add semicolon, lowercase FLEX-WRAP, lowercase GAP + add semicolon, fix paddng, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase BACKGROUND-COLOR, lowercase CURSOR + add semicolon, fix postion, lowercase OVERFLOW + add semicolon, fix margn, lowercase WIDTH + add semicolon, lowercase BORDER, lowercase LETTER-SPACING + add semicolon."
},

// ── M141 ──
{
correct: `.review-card {
  width: 320px;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: black;
  border: 1px solid lightgray;
  cursor: default;
  margin: 10px;
  box-shadow: 0 2px 8px lightgray;
  text-align: left;
  position: relative;
}`,
wrong: `.review-card {
  widht: 320px;
  BACKGROUND-COLOR: white
  border-raduis: 12px;
  paddng: 20px
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 10px;
  font-sze: 14px;
  COLOR: black
  bordr: 1px solid lightgray;
  CURSOR: default
  margn: 10px;
  BOX-SHADOW: 0 2px 8px lightgray
  TEXT-ALIGN: left;
  postion: relative
}`,
totalMistakes: 16,
hint: "Fix widht, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix font-sze, lowercase COLOR + add semicolon, fix bordr, lowercase CURSOR + add semicolon, fix margn, lowercase BOX-SHADOW + add semicolon, lowercase TEXT-ALIGN, fix postion + add semicolon."
},

// ── M142 ──
{
correct: `.subscribe-box {
  width: 380px;
  background-color: white;
  border-radius: 12px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 2px solid royalblue;
  box-shadow: 0 4px 14px lightblue;
  font-size: 14px;
  color: black;
  font-family: Arial;
  margin: 20px auto;
  cursor: default;
  text-align: center;
  position: relative;
}`,
wrong: `.subscribe-box {
  widht: 380px
  BACKGROUND-COLOR: white;
  border-raduis: 12px;
  PADDING: 28px
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 14px;
  bordr: 2px solid royalblue;
  BOX-SHADOW: 0 4px 14px lightblue
  font-sze: 14px;
  COLOR: black
  FONT-FAMILY: Arial;
  margn: 20px auto;
  CURSOR: default
  TEXT-ALIGN: center
  postion: relative
}`,
totalMistakes: 17,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase PADDING + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix bordr, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-FAMILY, fix margn, lowercase CURSOR + add semicolon, lowercase TEXT-ALIGN + add semicolon, fix postion + add semicolon."
},

// ── M143 ──
{
correct: `.code-viewer {
  width: 100%;
  background-color: black;
  color: limegreen;
  border-radius: 8px;
  padding: 20px;
  font-family: monospace;
  font-size: 13px;
  overflow-x: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid darkgreen;
  cursor: text;
  min-height: 120px;
}`,
wrong: `.code-viewer {
  WIDTH: 100%
  background-colr: black;
  COLOR: limegreen
  border-raduis: 8px;
  paddng: 20px
  FONT-FAMILY: monospace;
  font-sze: 13px;
  OVERFLOW-X: auto
  postion: relative;
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 4px;
  bordr: 1px solid darkgreen
  CURSOR: text;
  MIN-HEIGHT: 120px
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix background-colr, lowercase COLOR + add semicolon, fix border-raduis, fix paddng + add semicolon, lowercase FONT-FAMILY, fix font-sze, lowercase OVERFLOW-X + add semicolon, fix postion, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix bordr + add semicolon, lowercase CURSOR, lowercase MIN-HEIGHT + add semicolon."
},

// ── M144 ──
{
correct: `.drop-zone {
  width: 380px;
  height: 200px;
  background-color: aliceblue;
  border: 2px dashed cornflowerblue;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: steelblue;
  cursor: pointer;
  gap: 12px;
  position: relative;
  overflow: hidden;
}`,
wrong: `.drop-zone {
  widht: 380px;
  hieght: 200px
  BACKGROUND-COLOR: aliceblue;
  bordr: 2px dashed cornflowerblue
  border-raduis: 12px;
  diplay: flex;
  FLEX-DIRECTION: column
  justify-content: centr;
  ALIGN-ITEMS: center
  font-sze: 14px;
  COLOR: steelblue
  CURSOR: pointer;
  GAP: 12px
  postion: relative;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Fix widht, fix hieght + add semicolon, lowercase BACKGROUND-COLOR, fix bordr + add semicolon, fix border-raduis, fix diplay, lowercase FLEX-DIRECTION + add semicolon, fix centr, lowercase ALIGN-ITEMS + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase GAP + add semicolon, fix postion, lowercase OVERFLOW + add semicolon."
},

// ── M145 ──
{
correct: `.feature-row {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid lightgray;
  font-size: 14px;
  color: black;
  background-color: transparent;
  cursor: default;
  position: relative;
  font-weight: 400;
  letter-spacing: 0.2px;
  overflow: visible;
  min-height: 50px;
}`,
wrong: `.feature-row {
  WIDTH: 100%
  diplay: flex;
  ALIGN-ITEMS: flex-start
  GAP: 16px
  paddng: 14px 0;
  bordr-bottom: 1px solid lightgray
  font-sze: 14px;
  COLOR: black
  BACKGROUND-COLOR: transparent;
  CURSOR: default
  postion: relative;
  FONT-WEIGHT: 400
  LETTER-SPACING: 0.2px;
  OVERFLOW: visible
  MIN-HEIGHT: 50px
}`,
totalMistakes: 15,
hint: "Lowercase WIDTH + add semicolon, fix diplay, lowercase ALIGN-ITEMS + add semicolon, lowercase GAP + add semicolon, fix paddng, fix bordr-bottom + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase BACKGROUND-COLOR, lowercase CURSOR + add semicolon, fix postion, lowercase FONT-WEIGHT + add semicolon, lowercase LETTER-SPACING, lowercase OVERFLOW + add semicolon, lowercase MIN-HEIGHT + add semicolon."
},

// ── M146 ──
{
correct: `.chat-input {
  width: 100%;
  height: 48px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 10px;
  font-size: 14px;
  color: black;
  cursor: text;
  box-shadow: 0 1px 4px lightgray;
  position: relative;
  overflow: hidden;
}`,
wrong: `.chat-input {
  WIDTH: 100%
  hieght: 48px;
  BACKGROUND-COLOR: white;
  bordr: 1px solid lightgray
  border-raduis: 24px;
  diplay: flex;
  ALIGN-ITEMS: center
  paddng: 0 16px;
  GAP: 10px
  font-sze: 14px;
  COLOR: black
  CURSOR: text;
  BOX-SHADOW: 0 1px 4px lightgray
  postion: relative;
  OVERFLOW: hidden
}`,
totalMistakes: 16,
hint: "Lowercase WIDTH + add semicolon, fix hieght, lowercase BACKGROUND-COLOR, fix bordr + add semicolon, fix border-raduis, fix diplay, lowercase ALIGN-ITEMS + add semicolon, fix paddng, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, lowercase BOX-SHADOW + add semicolon, fix postion, lowercase OVERFLOW + add semicolon."
},

// ── M147 ──
{
correct: `.word-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  font-size: 14px;
  color: black;
  cursor: default;
  position: relative;
  overflow: hidden;
  margin: 12px 0;
  width: 100%;
  box-shadow: 0 2px 6px lightgray;
}`,
wrong: `.word-cloud {
  DISPLAY: flex
  FLEX-WRAP: wrap;
  GAP: 10px
  paddng: 16px;
  BACKGROUND-COLOR: white
  border-raduis: 10px;
  bordr: 1px solid lightgray
  font-sze: 14px;
  COLOR: black
  CURSOR: default;
  postion: relative
  OVERFLOW: hidden;
  margn: 12px 0
  WIDTH: 100%;
  BOX-SHADOW: 0 2px 6px lightgray
}`,
totalMistakes: 15,
hint: "Lowercase DISPLAY + add semicolon, lowercase FLEX-WRAP, lowercase GAP + add semicolon, fix paddng, lowercase BACKGROUND-COLOR + add semicolon, fix border-raduis, fix bordr + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase CURSOR, fix postion + add semicolon, lowercase OVERFLOW, fix margn + add semicolon, lowercase WIDTH, lowercase BOX-SHADOW + add semicolon."
},

// ── M148 ──
{
correct: `.status-row {
  width: 100%;
  height: 36px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 8px;
  font-size: 12px;
  color: black;
  font-weight: 400;
  border-top: 1px solid silver;
  cursor: default;
  position: sticky;
  bottom: 0;
  overflow: hidden;
}`,
wrong: `.status-row {
  WIDTH: 100%
  hieght: 36px;
  BACKGROUND-COLOR: lightgray;
  diplay: flex;
  ALIGN-ITEMS: center
  paddng: 0 14px;
  GAP: 8px
  font-sze: 12px;
  COLOR: black
  FONT-WEIGHT: 400
  bordr-top: 1px solid silver;
  CURSOR: default
  postion: sticky;
  BOTTOM: 0
  OVERFLOW: hidden
}`,
totalMistakes: 15,
hint: "Lowercase WIDTH + add semicolon, fix hieght, lowercase BACKGROUND-COLOR, fix diplay, lowercase ALIGN-ITEMS + add semicolon, fix paddng, lowercase GAP + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-WEIGHT + add semicolon, fix bordr-top, lowercase CURSOR + add semicolon, fix postion, lowercase BOTTOM + add semicolon, lowercase OVERFLOW + add semicolon."
},

// ── M149 ──
{
correct: `.summary-card {
  width: 480px;
  background-color: white;
  border-radius: 12px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid lightgray;
  box-shadow: 0 4px 14px lightgray;
  font-size: 14px;
  color: black;
  font-family: Tahoma;
  margin: 20px auto;
  cursor: default;
  text-align: left;
  position: relative;
}`,
wrong: `.summary-card {
  widht: 480px
  BACKGROUND-COLOR: white;
  border-raduis: 12px;
  PADDING: 28px
  diplay: flex;
  FLEX-DIRECTION: column
  GAP: 14px;
  bordr: 1px solid lightgray;
  BOX-SHADOW: 0 4px 14px lightgray
  font-sze: 14px;
  COLOR: black
  FONT-FAMILY: Tahoma;
  margn: 20px auto;
  CURSOR: default
  text-align: left
  postion: relative
}`,
totalMistakes: 17,
hint: "Fix widht + add semicolon, lowercase BACKGROUND-COLOR, fix border-raduis, lowercase PADDING + add semicolon, fix diplay, lowercase FLEX-DIRECTION + add semicolon, lowercase GAP, fix bordr, lowercase BOX-SHADOW + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-FAMILY, fix margn, lowercase CURSOR + add semicolon, add semicolon after text-align, fix postion + add semicolon."
},

// ── M150 ──
{
correct: `.app-shell {
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: black;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  box-shadow: none;
  cursor: default;
  border: none;
}`,
wrong: `.app-shell {
  WIDTH: 100%
  hieght: 100vh;
  BACKGROUND-COLOR: white;
  diplay: flex;
  FLEX-DIRECTION: column
  font-sze: 14px;
  COLOR: black
  FONT-FAMILY: sans-serif;
  MARGIN: 0
  PADDING: 0;
  OVERFLOW: hidden
  postion: relative;
  BOX-SHADOW: none
  CURSOR: default;
  BORDER: none
}`,
totalMistakes: 15,
hint: "Lowercase WIDTH + add semicolon, fix hieght, lowercase BACKGROUND-COLOR, fix diplay, lowercase FLEX-DIRECTION + add semicolon, fix font-sze, lowercase COLOR + add semicolon, lowercase FONT-FAMILY, lowercase MARGIN + add semicolon, lowercase PADDING, lowercase OVERFLOW + add semicolon, fix postion, lowercase BOX-SHADOW + add semicolon, lowercase CURSOR, lowercase BORDER + add semicolon."
},

    ],


  HARD: [
/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 43-48 mistakes per code
   Total: 10 paragraphs (H1 - H10)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H1 ──
{
correct: `.main-layout {
  width: 100%;
  height: 100vh;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.3px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;
  position: relative;
  z-index: 1;
  cursor: default;
  text-align: left;
  gap: 0;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
  background-image: none;
  min-width: 320px;
  max-width: 1440px;
  min-height: 100vh;
  max-height: none;
  flex-wrap: nowrap;
  align-content: flex-start;
  grid-template-columns: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  vertical-align: top;
  white-space: normal;
  word-break: normal;
  overflow-x: hidden;
  overflow-y: auto;
}`,
wrong: `.main-layout {
  WIDTH: 100%;
  hieght: 100vh
  background-colr: white;
  COLOR: black
  DISPLAY: flex;
  flex-direction: column
  justify-content: flex-strt;
  ALIGN-ITEMS: stretch
  font-sze: 16px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.3px;
  PADDING: 0
  MARGIN: 0;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OVERFLOW: hidden
  postion: relative;
  Z-INDEX: 1
  CURSOR: default;
  TEXT-ALIGN: left
  GAP: 0;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: all 0.3s ease
  background-imge: none;
  MIN-WIDTH: 320px
  MAX-WIDTH: 1440px;
  min-hieght: 100vh
  MAX-HEIGHT: none;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  grid-template-colums: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  VERTICAL-ALIGN: top;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  OVERFLOW-X: hidden
  overflow-y: auto
}`,
totalMistakes: 44,
hint: "Lowercase WIDTH; fix hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; add semicolon after column; fix flex-strt; lowercase ALIGN-ITEMS+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase PADDING+semicolon; lowercase MARGIN; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OVERFLOW; fix postion; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase TEXT-ALIGN+semicolon; lowercase GAP; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase MAX-HEIGHT; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix grid-template-colums+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase VERTICAL-ALIGN; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase OVERFLOW-X+semicolon; add last semicolon after overflow-y."
},


// ── H2 ──
{
correct: `.dashboard-wrapper {
  width: 1200px;
  height: auto;
  background-color: whitesmoke;
  color: black;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  padding: 24px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 1.5;
  border-radius: 12px;
  border: 1px solid lightgray;
  box-shadow: 0 4px 16px lightgray;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  align-items: start;
  justify-items: stretch;
  z-index: 0;
  cursor: default;
  text-align: left;
  letter-spacing: 0.2px;
  opacity: 1;
  transition: all 0.2s ease;
  flex-wrap: wrap;
  align-content: start;
  max-width: 100%;
  min-width: 768px;
  outline: none;
  pointer-events: all;
  user-select: none;
  white-space: normal;
  word-break: normal;
  overflow-x: hidden;
  overflow-y: auto;
  vertical-align: top;
  text-decoration: none;
  visibility: visible;
}`,
wrong: `.dashboard-wrapper {
  widht: 1200px;
  HEIGHT: auto
  BACKGROUND-COLOR: whitesmoke;
  COLOR: black
  DISPLAY: grid;
  grid-template-colums: 250px 1fr
  grid-template-rows: auto 1fr auto
  GAP: 16px;
  PADDING: 24px
  MARGIN: 0 auto;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: sans-serif
  LINE-HEIGHT: 1.5;
  border-raduis: 12px
  bordr: 1px solid lightgray;
  BOX-SHADOW: 0 4px 16px lightgray
  postion: relative;
  OVERFLOW: hidden
  min-hieght: 100vh;
  ALIGN-ITEMS: start
  JUSTIFY-ITEMS: stretch;
  Z-INDEX: 0
  CURSOR: default;
  TEXT-ALIGN: left
  LETTER-SPACING: 0.2px;
  OPACITY: 1
  TRANSITION: all 0.2s ease;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: start;
  MAX-WIDTH: 100%
  MIN-WIDTH: 768px;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  OVERFLOW-X: hidden;
  OVERFLOW-Y: auto
  VERTICAL-ALIGN: top;
  TEXT-DECORATION: none
  VISIBILITY: visible
}`,
totalMistakes: 45,
hint: "Fix widht; lowercase HEIGHT+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix grid-template-colums+semicolon; add semicolon after grid-template-rows; lowercase GAP; lowercase PADDING+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; fix border-raduis+semicolon; fix bordr; lowercase BOX-SHADOW+semicolon; fix postion; lowercase OVERFLOW+semicolon; fix min-hieght; lowercase ALIGN-ITEMS+semicolon; lowercase JUSTIFY-ITEMS; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase TEXT-ALIGN+semicolon; lowercase LETTER-SPACING; lowercase OPACITY+semicolon; lowercase TRANSITION; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase MAX-WIDTH+semicolon; lowercase MIN-WIDTH; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; lowercase VERTICAL-ALIGN; lowercase TEXT-DECORATION+semicolon; lowercase VISIBILITY+semicolon."
},


// ── H3 ──
{
correct: `.mega-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: navy;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  z-index: 1000;
  font-size: 15px;
  font-weight: 600;
  font-family: Georgia;
  letter-spacing: 0.4px;
  line-height: 1;
  box-shadow: 0 2px 8px black;
  border-bottom: 2px solid royalblue;
  gap: 24px;
  overflow: hidden;
  cursor: default;
  text-align: left;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.3s ease;
  min-width: 320px;
  max-width: 100%;
  align-content: center;
  flex-wrap: nowrap;
  user-select: none;
  pointer-events: all;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: visible;
  background-image: none;
}`,
wrong: `.mega-navbar {
  postion: fixed;
  TOP: 0
  LEFT: 0;
  WIDTH: 100%
  hieght: 64px;
  background-colr: navy;
  COLOR: white
  DISPLAY: flex;
  justify-content: space-betwen
  ALIGN-ITEMS: center;
  paddng: 0 32px
  Z-INDEX: 1000;
  font-sze: 15px
  FONT-WEIGHT: 600;
  FONT-FAMILY: Georgia
  LETTER-SPACING: 0.4px;
  LINE-HEIGHT: 1
  BOX-SHADOW: 0 2px 8px black;
  bordr-bottom: 2px solid royalblue
  GAP: 24px;
  OVERFLOW: hidden
  CURSOR: default;
  TEXT-ALIGN: left
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.3s ease;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  ALIGN-CONTENT: center
  FLEX-WRAP: nowrap;
  USER-SELECT: none
  POINTER-EVENTS: all;
  OUTLINE: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: visible
  background-imge: none
}`,
totalMistakes: 45,
hint: "Fix postion; lowercase TOP+semicolon; lowercase LEFT; lowercase WIDTH+semicolon; fix hieght; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix space-betwen+semicolon; lowercase ALIGN-ITEMS; fix paddng+semicolon; lowercase Z-INDEX; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LETTER-SPACING; lowercase LINE-HEIGHT+semicolon; lowercase BOX-SHADOW; fix bordr-bottom+semicolon; lowercase GAP; lowercase OVERFLOW+semicolon; lowercase CURSOR; lowercase TEXT-ALIGN+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase ALIGN-CONTENT+semicolon; lowercase FLEX-WRAP; lowercase USER-SELECT+semicolon; lowercase POINTER-EVENTS; lowercase OUTLINE+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge+semicolon."
},


// ── H4 ──
{
correct: `.full-page-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
  overflow: hidden;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-family: Arial;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
  pointer-events: all;
  user-select: none;
  outline: none;
  flex-direction: column;
  gap: 16px;
  align-content: center;
  flex-wrap: nowrap;
  min-width: 320px;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  border: none;
  border-radius: 0;
  box-shadow: none;
  vertical-align: middle;
  white-space: normal;
  word-break: normal;
  text-decoration: none;
  overflow-x: hidden;
  overflow-y: hidden;
}`,
wrong: `.full-page-modal {
  postion: fixed;
  TOP: 0
  LEFT: 0;
  WIDTH: 100%
  hieght: 100vh;
  background-colr: rgba(0,0,0,0.6)
  DISPLAY: flex;
  justify-content: centr
  ALIGN-ITEMS: center;
  Z-INDEX: 9999
  paddng: 20px;
  OVERFLOW: hidden
  CURSOR: pointer;
  font-sze: 16px
  COLOR: white;
  FONT-FAMILY: Arial
  FONT-WEIGHT: 500;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.3s ease;
  BACKDROP-FILTER: blur(4px)
  POINTER-EVENTS: all;
  USER-SELECT: none
  OUTLINE: none;
  FLEX-DIRECTION: column
  GAP: 16px;
  ALIGN-CONTENT: center
  FLEX-WRAP: nowrap;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  min-hieght: 100vh
  MAX-HEIGHT: 100vh;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  VERTICAL-ALIGN: middle;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  TEXT-DECORATION: none
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
}`,
totalMistakes: 45,
hint: "Fix postion; lowercase TOP+semicolon; lowercase LEFT; lowercase WIDTH+semicolon; fix hieght; fix background-colr+semicolon; lowercase DISPLAY; fix centr+semicolon; lowercase ALIGN-ITEMS; lowercase Z-INDEX+semicolon; fix paddng; lowercase OVERFLOW+semicolon; lowercase CURSOR; fix font-sze+semicolon; lowercase COLOR; lowercase FONT-FAMILY+semicolon; lowercase FONT-WEIGHT; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BACKDROP-FILTER+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase OUTLINE; lowercase FLEX-DIRECTION+semicolon; lowercase GAP; lowercase ALIGN-CONTENT+semicolon; lowercase FLEX-WRAP; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase MAX-HEIGHT; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase VERTICAL-ALIGN; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase TEXT-DECORATION+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon."
},


// ── H5 ──
{
correct: `.e-commerce-card {
  width: 280px;
  height: 420px;
  background-color: white;
  color: black;
  border: 1px solid lightgray;
  border-radius: 14px;
  padding: 20px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  font-family: Verdana;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 14px lightgray;
  overflow: hidden;
  position: relative;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border-top: 3px solid royalblue;
  border-bottom: 1px solid lightgray;
  outline: none;
  user-select: none;
  pointer-events: all;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 200px;
  max-width: 320px;
  min-height: 360px;
  max-height: 480px;
  align-content: center;
  flex-wrap: nowrap;
  background-image: none;
}`,
wrong: `.e-commerce-card {
  widht: 280px;
  hieght: 420px
  BACKGROUND-COLOR: white;
  COLOR: black
  bordr: 1px solid lightgray;
  border-raduis: 14px
  paddng: 20px;
  margn: 12px
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: space-betwen;
  ALIGN-ITEMS: center
  GAP: 12px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Verdana
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.2px
  TEXT-ALIGN: center;
  CURSOR: pointer
  BOX-SHADOW: 0 4px 14px lightgray;
  OVERFLOW: hidden
  postion: relative;
  Z-INDEX: 1
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.2s ease;
  bordr-top: 3px solid royalblue
  bordr-bottom: 1px solid lightgray;
  OUTLINE: none
  USER-SELECT: none;
  POINTER-EVENTS: all
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: break-word;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  MIN-WIDTH: 200px;
  MAX-WIDTH: 320px
  min-hieght: 360px;
  MAX-HEIGHT: 480px
  ALIGN-CONTENT: center;
  FLEX-WRAP: nowrap
  background-imge: none
}`,
totalMistakes: 46,
hint: "Fix widht; fix hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; fix bordr; fix border-raduis+semicolon; fix paddng; fix margn+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix space-betwen; lowercase ALIGN-ITEMS+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; lowercase CURSOR+semicolon; lowercase BOX-SHADOW; lowercase OVERFLOW+semicolon; fix postion; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-top+semicolon; fix bordr-bottom; lowercase OUTLINE+semicolon; lowercase USER-SELECT; lowercase POINTER-EVENTS+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; fix min-hieght; lowercase MAX-HEIGHT+semicolon; lowercase ALIGN-CONTENT; lowercase FLEX-WRAP+semicolon; fix background-imge+semicolon."
},


// ── H6 ──
{
correct: `.mega-footer {
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  padding: 60px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.8;
  letter-spacing: 0.3px;
  text-align: left;
  border-top: 3px solid royalblue;
  position: relative;
  overflow: hidden;
  align-items: flex-start;
  justify-items: start;
  cursor: default;
  opacity: 1;
  visibility: visible;
  z-index: 10;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  transition: none;
  pointer-events: all;
  user-select: text;
  outline: none;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: visible;
  background-image: none;
  border-bottom: none;
  box-shadow: 0 -2px 10px black;
}`,
wrong: `.mega-footer {
  WIDTH: 100%
  background-colr: #1a1a1a;
  COLOR: white
  paddng: 60px 40px;
  DISPLAY: grid;
  grid-template-colums: repeat(4, 1fr)
  GAP: 32px;
  font-sze: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.8;
  LETTER-SPACING: 0.3px
  TEXT-ALIGN: left;
  bordr-top: 3px solid royalblue
  postion: relative;
  OVERFLOW: hidden
  ALIGN-ITEMS: flex-start;
  JUSTIFY-ITEMS: start
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  Z-INDEX: 10
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: wrap;
  ALIGN-CONTENT: flex-start
  TRANSITION: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  OUTLINE: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: break-word;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: visible
  background-imge: none;
  bordr-bottom: none
  BOX-SHADOW: 0 -2px 10px black
}`,
totalMistakes: 44,
hint: "Lowercase WIDTH+semicolon; fix background-colr; lowercase COLOR+semicolon; fix paddng; lowercase DISPLAY; fix grid-template-colums+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix bordr-top+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-ITEMS+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase Z-INDEX+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TRANSITION; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase OUTLINE+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; fix bordr-bottom+semicolon; lowercase BOX-SHADOW+semicolon."
},


// ── H7 ──
{
correct: `.admin-sidebar {
  width: 260px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  line-height: 1.6;
  letter-spacing: 0.2px;
  border-right: 2px solid #1a252f;
  overflow-y: auto;
  z-index: 500;
  cursor: default;
  text-align: left;
  opacity: 1;
  visibility: visible;
  transition: width 0.3s ease;
  min-width: 60px;
  max-width: 300px;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  background-image: none;
  box-shadow: 2px 0 8px black;
  border-radius: 0;
  margin: 0;
}`,
wrong: `.admin-sidebar {
  widht: 260px;
  HEIGHT: 100vh
  background-colr: #2c3e50;
  COLOR: white
  postion: fixed;
  TOP: 0
  LEFT: 0;
  DISPLAY: flex;
  FLEX-DIRECTION: column
  paddng: 24px 16px;
  GAP: 8px
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: sans-serif;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.2px;
  bordr-right: 2px solid #1a252f
  OVERFLOW-Y: auto;
  Z-INDEX: 500
  CURSOR: default;
  TEXT-ALIGN: left
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: width 0.3s ease;
  MIN-WIDTH: 60px
  MAX-WIDTH: 300px;
  ALIGN-ITEMS: flex-start
  ALIGN-CONTENT: flex-start;
  FLEX-WRAP: nowrap
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  background-imge: none;
  BOX-SHADOW: 2px 0 8px black
  border-raduis: 0;
  MARGIN: 0
}`,
totalMistakes: 45,
hint: "Fix widht; lowercase HEIGHT+semicolon; fix background-colr; lowercase COLOR+semicolon; fix postion; lowercase TOP+semicolon; lowercase LEFT; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION+semicolon; fix paddng; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; fix bordr-right+semicolon; lowercase OVERFLOW-Y; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase TEXT-ALIGN+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase ALIGN-ITEMS+semicolon; lowercase ALIGN-CONTENT; lowercase FLEX-WRAP+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; fix background-imge; lowercase BOX-SHADOW+semicolon; fix border-raduis; lowercase MARGIN+semicolon."
},


// ── H8 ──
{
correct: `.profile-page {
  width: 100%;
  max-width: 900px;
  min-height: 100vh;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.7;
  letter-spacing: 0.3px;
  text-align: center;
  gap: 24px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  box-shadow: 0 0 20px lightgray;
  border-radius: 0;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  min-width: 320px;
}`,
wrong: `.profile-page {
  WIDTH: 100%
  MAX-WIDTH: 900px;
  min-hieght: 100vh
  BACKGROUND-COLOR: white;
  COLOR: black
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: center;
  paddng: 40px 24px
  MARGIN: 0 auto;
  font-sze: 15px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Georgia
  LINE-HEIGHT: 1.7;
  LETTER-SPACING: 0.3px
  TEXT-ALIGN: center;
  GAP: 24px
  bordr-left: 1px solid lightgray;
  bordr-right: 1px solid lightgray
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 0;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BOX-SHADOW: 0 0 20px lightgray
  border-raduis: 0;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: break-word;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: auto
  background-imge: none;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  justify-content: flex-strt
  MIN-WIDTH: 320px
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix paddng+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; lowercase GAP+semicolon; fix bordr-left; fix bordr-right+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BOX-SHADOW+semicolon; fix border-raduis; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix flex-strt+semicolon; lowercase MIN-WIDTH+semicolon."
},


// ── H9 ──
{
correct: `.checkout-page {
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  background-color: whitesmoke;
  color: black;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 24px;
  padding: 40px 32px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.2px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  align-items: start;
  justify-items: stretch;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: start;
}`,
wrong: `.checkout-page {
  WIDTH: 100%
  MAX-WIDTH: 1100px;
  min-hieght: 100vh
  background-colr: whitesmoke;
  COLOR: black
  DISPLAY: grid;
  grid-template-colums: 1fr 380px
  GAP: 24px;
  paddng: 40px 32px
  MARGIN: 0 auto;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.6;
  LETTER-SPACING: 0.2px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 0
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  ALIGN-ITEMS: start;
  JUSTIFY-ITEMS: stretch
  BORDER: none;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: break-word;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: auto
  background-imge: none;
  MIN-WIDTH: 320px
  FLEX-WRAP: wrap;
  ALIGN-CONTENT: start
}`,
totalMistakes: 43,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix grid-template-colums+semicolon; lowercase GAP; fix paddng+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-ITEMS+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon."
},


// ── H10 ──
{
correct: `.landing-section {
  width: 100%;
  height: 100vh;
  background-color: #0f172a;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 24px;
  gap: 20px;
  font-size: 18px;
  font-weight: 700;
  font-family: Georgia;
  line-height: 1.4;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: background-color 0.5s ease;
  background-image: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  align-content: center;
  flex-wrap: nowrap;
  margin: 0;
}`,
wrong: `.landing-section {
  WIDTH: 100%
  hieght: 100vh;
  background-colr: #0f172a;
  COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: centr;
  ALIGN-ITEMS: center
  TEXT-ALIGN: center;
  paddng: 40px 24px
  GAP: 20px;
  font-sze: 18px
  FONT-WEIGHT: 700;
  FONT-FAMILY: Georgia
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.5px
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 0;
  OPACITY: 1
  VISIBILITY: visible;
  CURSOR: default
  TRANSITION: background-color 0.5s ease;
  background-imge: none
  BORDER: none;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  min-hieght: 100vh;
  MAX-HEIGHT: 100vh
  ALIGN-CONTENT: center;
  FLEX-WRAP: nowrap
  MARGIN: 0
}`,
totalMistakes: 44,
hint: "Lowercase WIDTH+semicolon; fix hieght; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase TEXT-ALIGN; fix paddng+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase CURSOR+semicolon; lowercase TRANSITION; fix background-imge+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; fix min-hieght; lowercase MAX-HEIGHT+semicolon; lowercase ALIGN-CONTENT; lowercase FLEX-WRAP+semicolon; lowercase MARGIN+semicolon."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 40-50 mistakes per code
   Total: 10 paragraphs (H11 - H20)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H11 ──
{
correct: `.hero-section {
  width: 100%;
  height: 100vh;
  background-color: #1a1a2e;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 64px;
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  font-family: Georgia;
  line-height: 1.3;
  letter-spacing: 0.6px;
  text-align: left;
  gap: 32px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: all 0.4s ease;
  background-image: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  max-width: 100%;
  min-height: 100vh;
  flex-wrap: nowrap;
  align-content: center;
  grid-template-columns: none;
}`,
wrong: `.hero-section {
  WIDTH: 100%
  hieght: 100vh;
  background-colr: #1a1a2e;
  COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: row
  justify-content: centr;
  ALIGN-ITEMS: center
  PADDING: 0 64px;
  MARGIN: 0
  font-sze: 20px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.3
  LETTER-SPACING: 0.6px;
  TEXT-ALIGN: left
  GAP: 32px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: all 0.4s ease
  background-imge: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  min-hieght: 100vh
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  grid-template-colums: none
}`,
totalMistakes: 44,
hint: "Lowercase WIDTH+semicolon; fix hieght; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix grid-template-colums+semicolon."
},


// ── H12 ──
{
correct: `.sidebar-panel {
  width: 280px;
  height: 100vh;
  background-color: #2d3748;
  color: #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 24px 16px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  line-height: 1.6;
  letter-spacing: 0.2px;
  text-align: left;
  gap: 12px;
  position: fixed;
  overflow: hidden;
  z-index: 100;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  transition: width 0.3s ease;
  background-image: none;
  border-right: 1px solid #4a5568;
  border-radius: 0;
  box-shadow: 2px 0 8px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 60px;
  max-width: 320px;
  min-height: 100vh;
  flex-wrap: nowrap;
  align-content: flex-start;
  top: 0;
  left: 0;
}`,
wrong: `.sidebar-panel {
  widht: 280px;
  hieght: 100vh
  BACKGROUND-COLOR: #2d3748;
  COLOR: #e2e8f0
  DISPLAY: flex;
  flex-directon: column
  JUSTIFY-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  PADDING: 24px 16px;
  MARGIN: 0
  FONT-SIZE: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: sans-serif;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  GAP: 12px;
  POSITION: fixed
  OVERFLOW: hidden;
  Z-INDEX: 100
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: pointer;
  TRANSITION: width 0.3s ease
  background-imge: none;
  border-rght: 1px solid #4a5568
  BORDER-RADIUS: 0;
  BOX-SHADOW: 2px 0 8px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  MIN-WIDTH: 60px
  MAX-WIDTH: 320px;
  min-hieght: 100vh
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  TOP: 0;
  LEFT: 0
}`,
totalMistakes: 46,
hint: "Fix widht; fix hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase FONT-SIZE; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; lowercase POSITION+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; fix border-rght+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TOP; lowercase LEFT+semicolon."
},


// ── H13 ──
{
correct: `.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
  cursor: default;
  overflow: hidden;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0;
  text-align: center;
  gap: 0;
  flex-wrap: nowrap;
  align-content: center;
  flex-direction: row;
  box-shadow: none;
  border-radius: 0;
  background-image: none;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 100%;
  min-height: 100%;
}`,
wrong: `.modal-overlay {
  postion: fixed;
  TOP: 0
  LEFT: 0;
  WIDTH: 100%
  hieght: 100%;
  background-colr: rgba(0,0,0,0.6);
  COLOR: white
  DISPLAY: flex;
  JUSTIFY-CONTENT: center
  ALIGN-ITEMS: center;
  Z-INDEX: 9999
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.3s ease;
  CURSOR: default
  OVERFLOW: hidden;
  PADDING: 0
  MARGIN: 0;
  BORDER: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  font-sze: 16px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  GAP: 0;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  FLEX-DIRECTION: row
  BOX-SHADOW: none;
  border-raduis: 0
  background-imge: none;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  MIN-WIDTH: 100%;
  min-hieght: 100%
}`,
totalMistakes: 45,
hint: "Fix postion; lowercase TOP+semicolon; lowercase LEFT; lowercase WIDTH+semicolon; fix hieght; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase JUSTIFY-CONTENT+semicolon; lowercase ALIGN-ITEMS; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase CURSOR+semicolon; lowercase OVERFLOW; lowercase PADDING+semicolon; lowercase MARGIN; lowercase BORDER+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase FLEX-DIRECTION+semicolon; lowercase BOX-SHADOW; fix border-raduis+semicolon; fix background-imge; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; lowercase MIN-WIDTH; fix min-hieght+semicolon."
},


// ── H14 ──
{
correct: `.card-grid {
  width: 100%;
  max-width: 1280px;
  min-height: 400px;
  background-color: #f8fafc;
  color: #1e293b;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 24px;
  padding: 32px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: start;
  align-items: start;
  justify-items: stretch;
}`,
wrong: `.card-grid {
  WIDTH: 100%
  MAX-WIDTH: 1280px;
  min-hieght: 400px
  BACKGROUND-COLOR: #f8fafc;
  COLOR: #1e293b
  DISPLAY: grid;
  grid-template-colums: repeat(3, 1fr)
  grid-template-rows: auto
  GAP: 24px;
  PADDING: 32px
  MARGIN: 0 auto;
  FONT-SIZE: 14px
  FONT-WEIGHT: 400;
  font-famly: sans-serif
  LINE-HEIGHT: 1.6;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  MIN-WIDTH: 320px
  FLEX-WRAP: wrap;
  ALIGN-CONTENT: start
  ALIGN-ITEMS: start;
  JUSTIFY-ITEMS: stretch
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix grid-template-colums+semicolon; add semicolon after grid-template-rows; lowercase GAP; lowercase PADDING+semicolon; lowercase MARGIN; lowercase FONT-SIZE+semicolon; lowercase FONT-WEIGHT; fix font-famly+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-ITEMS+semicolon."
},


// ── H15 ──
{
correct: `.footer-bar {
  width: 100%;
  height: 80px;
  background-color: #111827;
  color: #9ca3af;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.3px;
  text-align: center;
  gap: 16px;
  position: relative;
  overflow: hidden;
  z-index: 10;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border-top: 1px solid #374151;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  bottom: 0;
  left: 0;
}`,
wrong: `.footer-bar {
  widht: 100%;
  HEIGHT: 80px
  BACKGROUND-COLOR: #111827;
  COLOR: #9ca3af
  DISPLAY: flex;
  FLEX-DIRECTION: row
  JUSTIFY-CONTENT: space-between;
  ALIGN-ITEMS: center
  paddng: 0 48px;
  MARGIN: 0
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.3px;
  TEXT-ALIGN: center
  GAP: 16px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 10
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  border-tp: 1px solid #374151
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  BOTTOM: 0
  LEFT: 0
}`,
totalMistakes: 44,
hint: "Fix widht; lowercase HEIGHT+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; fix border-tp+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase BOTTOM+semicolon; lowercase LEFT+semicolon."
},


// ── H16 ──
{
correct: `.product-card {
  width: 320px;
  height: auto;
  background-color: white;
  color: #1f2937;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 20px;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  gap: 12px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  background-image: none;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 200px;
  max-width: 400px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 200px;
  max-height: none;
}`,
wrong: `.product-card {
  WIDTH: 320px
  HEIGHT: auto;
  background-colr: white;
  COLOR: #1f2937
  DISPLAY: flex;
  flex-directon: column
  JUSTIFY-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  PADDING: 20px;
  MARGIN: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  font-famly: sans-serif;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  GAP: 12px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: pointer;
  TRANSITION: box-shadow 0.2s ease
  background-imge: none;
  BORDER: 1px solid #e5e7eb
  border-raduis: 12px;
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 200px
  MAX-WIDTH: 400px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 200px
  MAX-HEIGHT: none
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; lowercase HEIGHT; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; fix font-famly; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; lowercase MAX-HEIGHT+semicolon."
},


// ── H17 ──
{
correct: `.search-bar {
  width: 100%;
  max-width: 600px;
  height: 48px;
  background-color: white;
  color: #374151;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  text-align: left;
  gap: 8px;
  position: relative;
  overflow: hidden;
  z-index: 10;
  opacity: 1;
  visibility: visible;
  cursor: text;
  transition: border-color 0.2s ease;
  background-image: none;
  border: 2px solid #d1d5db;
  border-radius: 24px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 200px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 48px;
  max-height: 48px;
}`,
wrong: `.search-bar {
  WIDTH: 100%
  MAX-WIDTH: 600px;
  hieght: 48px
  BACKGROUND-COLOR: white;
  COLOR: #374151
  DISPLAY: flex;
  FLEX-DIRECTION: row
  JUSTIFY-CONTENT: flex-start;
  ALIGN-ITEMS: center
  PADDING: 0 16px;
  MARGIN: 0 auto
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  GAP: 8px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 10
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: text;
  transiton: border-color 0.2s ease
  background-imge: none;
  BORDER: 2px solid #d1d5db
  border-raduis: 24px;
  BOX-SHADOW: 0 1px 4px rgba(0,0,0,0.08)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 200px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  min-hieght: 48px;
  MAX-HEIGHT: 48px
}`,
totalMistakes: 43,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; fix transiton+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght; lowercase MAX-HEIGHT+semicolon."
},


// ── H18 ──
{
correct: `.notification-banner {
  width: 100%;
  height: 56px;
  background-color: #fef3c7;
  color: #92400e;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  font-family: sans-serif;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: center;
  gap: 12px;
  position: sticky;
  overflow: hidden;
  z-index: 50;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: opacity 0.3s ease;
  background-image: none;
  border-bottom: 2px solid #fbbf24;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  top: 0;
  left: 0;
}`,
wrong: `.notification-banner {
  widht: 100%;
  hieght: 56px
  background-colr: #fef3c7;
  COLOR: #92400e
  DISPLAY: flex;
  FLEX-DIRECTION: row
  justify-content: centr;
  ALIGN-ITEMS: center
  PADDING: 0 24px;
  MARGIN: 0
  font-sze: 14px;
  FONT-WEIGHT: 600
  FONT-FAMILY: sans-serif;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  GAP: 12px;
  POSITION: sticky
  OVERFLOW: hidden;
  Z-INDEX: 50
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: opacity 0.3s ease
  background-imge: none;
  border-botom: 2px solid #fbbf24
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  TOP: 0
  LEFT: 0
}`,
totalMistakes: 46,
hint: "Fix widht; fix hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; lowercase POSITION+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; fix border-botom+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase TOP+semicolon; lowercase LEFT+semicolon."
},


// ── H19 ──
{
correct: `.settings-form {
  width: 100%;
  max-width: 720px;
  min-height: 400px;
  background-color: white;
  color: #111827;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 40px 32px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.7;
  letter-spacing: 0.2px;
  text-align: left;
  gap: 20px;
  position: relative;
  overflow: visible;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  max-height: none;
  max-width: 720px;
}`,
wrong: `.settings-form {
  WIDTH: 100%
  MAX-WIDTH: 720px;
  min-hieght: 400px
  BACKGROUND-COLOR: white;
  COLOR: #111827
  DISPLAY: flex;
  flex-directon: column
  JUSTIFY-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  PADDING: 40px 32px;
  MARGIN: 0 auto
  FONT-SIZE: 15px;
  FONT-WEIGHT: 400
  font-famly: Georgia;
  LINE-HEIGHT: 1.7
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  GAP: 20px;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: 1px solid #e5e7eb
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 12px rgba(0,0,0,0.05)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  MAX-HEIGHT: none;
  max-wdth: 720px
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase FONT-SIZE; lowercase FONT-WEIGHT+semicolon; fix font-famly; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase MAX-HEIGHT; fix max-wdth+semicolon."
},


// ── H20 ──
{
correct: `.blog-post-body {
  width: 100%;
  max-width: 780px;
  min-height: 100vh;
  background-color: white;
  color: #1e293b;
  display: block;
  padding: 48px 40px;
  margin: 0 auto;
  font-size: 17px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.8;
  letter-spacing: 0.3px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: text;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  gap: 0;
  max-height: none;
  border-left: 4px solid #3b82f6;
}`,
wrong: `.blog-post-body {
  WIDTH: 100%
  MAX-WIDTH: 780px;
  min-hieght: 100vh
  BACKGROUND-COLOR: white;
  COLOR: #1e293b
  DISPLAY: block;
  paddng: 48px 40px
  MARGIN: 0 auto;
  font-sze: 17px
  FONT-WEIGHT: 400;
  font-famly: Georgia
  LINE-HEIGHT: 1.8;
  LETTER-SPACING: 0.3px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: text;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  GAP: 0;
  MAX-HEIGHT: none
  border-lft: 4px solid #3b82f6
}`,
totalMistakes: 44,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix paddng+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; fix font-famly+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase GAP; lowercase MAX-HEIGHT+semicolon; fix border-lft+semicolon."
},


/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 40-50 mistakes per code
   Total: 10 paragraphs (H21 - H30)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H21 ──
{
correct: `.nav-menu {
  width: 100%;
  height: auto;
  background-color: #0f172a;
  color: #f1f5f9;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.3px;
  text-align: right;
  gap: 20px;
  position: relative;
  overflow: hidden;
  z-index: 200;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: background-color 0.3s ease;
  background-image: none;
  border-bottom: 1px solid #1e293b;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  top: 0;
  left: 0;
}`,
wrong: `.nav-menu {
  WIDTH: 100%
  HEIGHT: auto;
  background-colr: #0f172a;
  COLOR: #f1f5f9
  DISPLAY: flex;
  FLEX-DIRECTION: row
  justify-content: flex-nd;
  ALIGN-ITEMS: center
  PADDING: 0 40px;
  MARGIN: 0
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.3px;
  TEXT-ALIGN: right
  GAP: 20px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 200
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: background-color 0.3s ease
  background-imge: none;
  border-botom: 1px solid #1e293b
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  TOP: 0
  LEFT: 0
}`,
totalMistakes: 44,
hint: "Lowercase WIDTH+semicolon; lowercase HEIGHT; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix flex-nd; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; fix border-botom+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase TOP+semicolon; lowercase LEFT+semicolon."
},


// ── H22 ──
{
correct: `.image-gallery {
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  background-color: #18181b;
  color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 8px;
  padding: 16px;
  margin: 0 auto;
  font-size: 13px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 1.4;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: start;
  align-items: start;
  justify-items: center;
}`,
wrong: `.image-gallery {
  widht: 100%;
  MAX-WIDTH: 1200px
  min-hieght: 500px;
  BACKGROUND-COLOR: #18181b
  COLOR: white;
  DISPLAY: grid
  grid-template-colums: repeat(4, 1fr);
  grid-template-rows: auto
  GAP: 8px;
  PADDING: 16px
  MARGIN: 0 auto;
  FONT-SIZE: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: sans-serif
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0
  TEXT-ALIGN: center;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 8px 32px rgba(0,0,0,0.4)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  MIN-WIDTH: 320px
  FLEX-WRAP: wrap;
  ALIGN-CONTENT: start
  ALIGN-ITEMS: start;
  JUSTIFY-ITEMS: center
}`,
totalMistakes: 45,
hint: "Fix widht; lowercase MAX-WIDTH+semicolon; fix min-hieght; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix grid-template-colums; add semicolon after grid-template-rows; lowercase GAP; lowercase PADDING+semicolon; lowercase MARGIN; lowercase FONT-SIZE+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-ITEMS+semicolon."
},


// ── H23 ──
{
correct: `.login-card {
  width: 420px;
  height: auto;
  background-color: white;
  color: #1f2937;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 48px 40px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.2px;
  text-align: left;
  gap: 20px;
  position: relative;
  overflow: hidden;
  z-index: 10;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: box-shadow 0.3s ease;
  background-image: none;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 300px;
  max-width: 480px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 400px;
  max-height: none;
}`,
wrong: `.login-card {
  WIDTH: 420px
  HEIGHT: auto;
  background-colr: white;
  COLOR: #1f2937
  DISPLAY: flex;
  flex-directon: column
  JUSTIFY-CONTENT: center;
  ALIGN-ITEMS: stretch
  paddng: 48px 40px;
  MARGIN: 0 auto
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  GAP: 20px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 10
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  transiton: box-shadow 0.3s ease
  background-imge: none;
  BORDER: 1px solid #e5e7eb
  border-raduis: 16px;
  BOX-SHADOW: 0 8px 24px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  MIN-WIDTH: 300px
  MAX-WIDTH: 480px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  min-hieght: 400px
  MAX-HEIGHT: none
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; lowercase HEIGHT; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; fix transiton+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; lowercase MAX-HEIGHT+semicolon."
},


// ── H24 ──
{
correct: `.tab-bar {
  width: 100%;
  height: 52px;
  background-color: #ffffff;
  color: #6b7280;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: center;
  gap: 0;
  position: relative;
  overflow: hidden;
  z-index: 20;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  transition: none;
  background-image: none;
  border-bottom: 2px solid #e5e7eb;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: auto;
  overflow-y: hidden;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  top: 0;
  left: 0;
}`,
wrong: `.tab-bar {
  widht: 100%;
  hieght: 52px
  BACKGROUND-COLOR: #ffffff;
  COLOR: #6b7280
  DISPLAY: flex;
  FLEX-DIRECTION: row
  JUSTIFY-CONTENT: flex-start;
  ALIGN-ITEMS: center
  PADDING: 0;
  MARGIN: 0
  FONT-SIZE: 14px;
  FONT-WEIGHT: 500
  font-famly: sans-serif;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  GAP: 0;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 20
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: pointer;
  TRANSITION: none
  background-imge: none;
  border-botom: 2px solid #e5e7eb
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: auto
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  TOP: 0
  LEFT: 0
}`,
totalMistakes: 44,
hint: "Fix widht; fix hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase FONT-SIZE; lowercase FONT-WEIGHT+semicolon; fix font-famly; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; fix border-botom+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase TOP+semicolon; lowercase LEFT+semicolon."
},


// ── H25 ──
{
correct: `.pricing-table {
  width: 100%;
  max-width: 1100px;
  min-height: 300px;
  background-color: #f9fafb;
  color: #111827;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  padding: 40px 24px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: start;
  align-items: stretch;
  justify-items: center;
}`,
wrong: `.pricing-table {
  WIDTH: 100%
  MAX-WIDTH: 1100px;
  min-hieght: 300px
  BACKGROUND-COLOR: #f9fafb;
  COLOR: #111827
  DISPLAY: grid;
  grid-template-colums: repeat(3, 1fr)
  grid-template-rows: auto
  GAP: 20px;
  paddng: 40px 24px
  MARGIN: 0 auto;
  font-sze: 15px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Georgia
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: center;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 20px rgba(0,0,0,0.06)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  MIN-WIDTH: 320px
  FLEX-WRAP: wrap;
  ALIGN-CONTENT: start
  ALIGN-ITEMS: stretch;
  JUSTIFY-ITEMS: center
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix grid-template-colums+semicolon; add semicolon after grid-template-rows; lowercase GAP; fix paddng+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-ITEMS+semicolon."
},


// ── H26 ──
{
correct: `.video-player {
  width: 100%;
  max-width: 960px;
  height: auto;
  background-color: black;
  color: white;
  display: block;
  position: relative;
  overflow: hidden;
  z-index: 5;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  min-height: 180px;
  max-height: none;
  padding: 0;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.video-player {
  WIDTH: 100%
  MAX-WIDTH: 960px;
  hieght: auto
  BACKGROUND-COLOR: black;
  COLOR: white
  DISPLAY: block;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 5
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: pointer;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  border-raduis: 12px;
  BOX-SHADOW: 0 8px 32px rgba(0,0,0,0.5)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 320px
  min-hieght: 180px;
  MAX-HEIGHT: none
  PADDING: 0;
  MARGIN: 0 auto
  font-sze: 14px;
  FONT-WEIGHT: 400
  font-famly: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
}`,
totalMistakes: 43,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; fix min-hieght; lowercase MAX-HEIGHT+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; fix font-famly; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon."
},


// ── H27 ──
{
correct: `.comment-section {
  width: 100%;
  max-width: 800px;
  min-height: 200px;
  background-color: #f9fafb;
  color: #374151;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 32px 24px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 1.7;
  letter-spacing: 0.1px;
  text-align: left;
  gap: 16px;
  position: relative;
  overflow: visible;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: text;
  transition: none;
  background-image: none;
  border-top: 1px solid #e5e7eb;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  max-height: none;
  max-width: 800px;
}`,
wrong: `.comment-section {
  widht: 100%;
  MAX-WIDTH: 800px
  min-hieght: 200px;
  BACKGROUND-COLOR: #f9fafb
  COLOR: #374151;
  DISPLAY: flex
  flex-directon: column;
  JUSTIFY-CONTENT: flex-start
  ALIGN-ITEMS: stretch;
  paddng: 32px 24px
  MARGIN: 0 auto;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: sans-serif
  LINE-HEIGHT: 1.7;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  GAP: 16px
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 0;
  OPACITY: 1
  VISIBILITY: visible;
  CURSOR: text
  TRANSITION: none;
  background-imge: none
  border-tp: 1px solid #e5e7eb;
  BORDER-RADIUS: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: break-word;
  VERTICAL-ALIGN: top
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  MAX-HEIGHT: none
  max-wdth: 800px
}`,
totalMistakes: 46,
hint: "Fix widht; lowercase MAX-WIDTH+semicolon; fix min-hieght; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-directon; lowercase JUSTIFY-CONTENT+semicolon; lowercase ALIGN-ITEMS; fix paddng+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; lowercase GAP+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase CURSOR+semicolon; lowercase TRANSITION; fix background-imge+semicolon; fix border-tp; lowercase BORDER-RADIUS+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase MAX-HEIGHT+semicolon; fix max-wdth+semicolon."
},


// ── H28 ──
{
correct: `.breadcrumb-nav {
  width: 100%;
  height: 40px;
  background-color: transparent;
  color: #6b7280;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  text-align: left;
  gap: 8px;
  position: relative;
  overflow: hidden;
  z-index: 5;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border-bottom: 1px solid #f3f4f6;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 40px;
  max-height: 40px;
}`,
wrong: `.breadcrumb-nav {
  WIDTH: 100%
  hieght: 40px;
  BACKGROUND-COLOR: transparent
  COLOR: #6b7280;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  justify-content: flex-strt
  ALIGN-ITEMS: center;
  PADDING: 0 24px
  MARGIN: 0;
  font-sze: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  GAP: 8px
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 5;
  OPACITY: 1
  VISIBILITY: visible;
  CURSOR: default
  TRANSITION: none;
  background-imge: none
  border-botom: 1px solid #f3f4f6;
  BORDER-RADIUS: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  min-hieght: 40px;
  MAX-HEIGHT: 40px
}`,
totalMistakes: 44,
hint: "Lowercase WIDTH+semicolon; fix hieght; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix flex-strt+semicolon; lowercase ALIGN-ITEMS; lowercase PADDING+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; lowercase GAP+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase CURSOR+semicolon; lowercase TRANSITION; fix background-imge+semicolon; fix border-botom; lowercase BORDER-RADIUS+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght; lowercase MAX-HEIGHT+semicolon."
},


// ── H29 ──
{
correct: `.contact-form {
  width: 100%;
  max-width: 640px;
  min-height: 500px;
  background-color: white;
  color: #111827;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 48px 40px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 1.6;
  letter-spacing: 0.2px;
  text-align: left;
  gap: 24px;
  position: relative;
  overflow: visible;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  max-height: none;
  max-width: 640px;
}`,
wrong: `.contact-form {
  WIDTH: 100%
  MAX-WIDTH: 640px;
  min-hieght: 500px
  BACKGROUND-COLOR: white;
  COLOR: #111827
  DISPLAY: flex;
  FLEX-DIRECTION: column
  JUSTIFY-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  paddng: 48px 40px;
  MARGIN: 0 auto
  font-sze: 15px;
  FONT-WEIGHT: 400
  font-famly: sans-serif;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  GAP: 24px;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: 1px solid #d1d5db
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.08)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  MAX-HEIGHT: none;
  max-wdth: 640px
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; fix font-famly; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase MAX-HEIGHT; fix max-wdth+semicolon."
},


// ── H30 ──
{
correct: `.admin-panel {
  width: 100%;
  height: 100vh;
  background-color: #1e1e2e;
  color: #cdd6f4;
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 60px 1fr 48px;
  gap: 0;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 768px;
  max-width: 100%;
  min-height: 100vh;
  align-items: stretch;
  justify-items: stretch;
  align-content: stretch;
}`,
wrong: `.admin-panel {
  widht: 100%;
  hieght: 100vh
  BACKGROUND-COLOR: #1e1e2e;
  COLOR: #cdd6f4
  DISPLAY: grid;
  grid-template-colums: 260px 1fr
  grid-template-rows: 60px 1fr 48px
  GAP: 0;
  PADDING: 0
  MARGIN: 0;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: sans-serif
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 768px
  MAX-WIDTH: 100%;
  min-hieght: 100vh
  ALIGN-ITEMS: stretch;
  JUSTIFY-ITEMS: stretch
  ALIGN-CONTENT: stretch
}`,
totalMistakes: 44,
hint: "Fix widht; fix hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix grid-template-colums+semicolon; add semicolon after grid-template-rows; lowercase GAP; lowercase PADDING+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-ITEMS+semicolon; lowercase ALIGN-CONTENT+semicolon."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 40-50 mistakes per code
   Total: 10 paragraphs (H31 - H40)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H31 ──
{
correct: `.error-page {
  width: 100%;
  height: 100vh;
  background-color: #fef2f2;
  color: #991b1b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  gap: 24px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 320px;
  max-width: 100%;
  min-height: 100vh;
  flex-wrap: nowrap;
  align-content: center;
  max-height: none;
}`,
wrong: `.error-page {
  WIDTH: 100%
  hieght: 100vh;
  background-colr: #fef2f2;
  COLOR: #991b1b
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: centr;
  ALIGN-ITEMS: center
  PADDING: 40px 24px;
  MARGIN: 0
  font-sze: 16px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  GAP: 24px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  min-hieght: 100vh
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  MAX-HEIGHT: none
}`,
totalMistakes: 44,
hint: "Lowercase WIDTH+semicolon; fix hieght; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase MAX-HEIGHT+semicolon."
},


// ── H32 ──
{
correct: `.user-avatar {
  width: 80px;
  height: 80px;
  background-color: #e0e7ff;
  color: #3730a3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  font-size: 28px;
  font-weight: 700;
  font-family: Georgia;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  gap: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  transition: transform 0.2s ease;
  background-image: none;
  border: 3px solid #6366f1;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(99,102,241,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 80px;
  max-width: 80px;
  min-height: 80px;
  max-height: 80px;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.user-avatar {
  widht: 80px;
  hieght: 80px
  BACKGROUND-COLOR: #e0e7ff;
  COLOR: #3730a3
  DISPLAY: flex;
  FLEX-DIRECTION: row
  JUSTIFY-CONTENT: center;
  ALIGN-ITEMS: center
  PADDING: 0;
  MARGIN: 0 auto
  font-sze: 28px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  GAP: 0;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: pointer;
  transiton: transform 0.2s ease
  background-imge: none;
  BORDER: 3px solid #6366f1
  border-raduis: 50%;
  BOX-SHADOW: 0 2px 8px rgba(99,102,241,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 80px
  MAX-WIDTH: 80px;
  min-hieght: 80px
  MAX-HEIGHT: 80px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center
}`,
totalMistakes: 45,
hint: "Fix widht; fix hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; fix transiton+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase MAX-HEIGHT; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT+semicolon."
},


// ── H33 ──
{
correct: `.dropdown-menu {
  width: 240px;
  height: auto;
  background-color: white;
  color: #1f2937;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 8px 0;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  gap: 0;
  position: absolute;
  overflow: hidden;
  z-index: 500;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  transition: opacity 0.15s ease;
  background-image: none;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 180px;
  max-width: 320px;
  min-height: 40px;
  max-height: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
}`,
wrong: `.dropdown-menu {
  WIDTH: 240px
  HEIGHT: auto;
  background-colr: white;
  COLOR: #1f2937
  DISPLAY: flex;
  flex-directon: column
  JUSTIFY-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  paddng: 8px 0;
  MARGIN: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  font-famly: sans-serif;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  GAP: 0;
  POSITION: absolute
  OVERFLOW: hidden;
  Z-INDEX: 500
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: pointer;
  transiton: opacity 0.15s ease
  background-imge: none;
  BORDER: 1px solid #e5e7eb
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.12)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  MIN-WIDTH: 180px
  MAX-WIDTH: 320px;
  min-hieght: 40px
  MAX-HEIGHT: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; lowercase HEIGHT; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; fix font-famly; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; lowercase POSITION+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; fix transiton+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase MAX-HEIGHT; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT+semicolon."
},


// ── H34 ──
{
correct: `.stats-widget {
  width: 100%;
  max-width: 320px;
  min-height: 160px;
  background-color: #1d4ed8;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: left;
  gap: 12px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: transform 0.2s ease;
  background-image: none;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(29,78,216,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: flex-start;
  max-height: none;
  max-width: 320px;
}`,
wrong: `.stats-widget {
  WIDTH: 100%
  MAX-WIDTH: 320px;
  min-hieght: 160px
  BACKGROUND-COLOR: #1d4ed8;
  COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: space-beteen;
  ALIGN-ITEMS: flex-start
  PADDING: 24px;
  MARGIN: 0
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  GAP: 12px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  transiton: transform 0.2s ease
  background-imge: none;
  BORDER: none
  border-raduis: 16px;
  BOX-SHADOW: 0 4px 20px rgba(29,78,216,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 240px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  MAX-HEIGHT: none;
  max-wdth: 320px
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix space-beteen; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; fix transiton+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase MAX-HEIGHT; fix max-wdth+semicolon."
},


// ── H35 ──
{
correct: `.toast-message {
  width: 360px;
  height: auto;
  background-color: #064e3b;
  color: #d1fae5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  gap: 12px;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: opacity 0.3s ease;
  background-image: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 280px;
  max-width: 400px;
  flex-wrap: nowrap;
  align-content: center;
  bottom: 24px;
  right: 24px;
}`,
wrong: `.toast-message {
  widht: 360px;
  HEIGHT: auto
  BACKGROUND-COLOR: #064e3b;
  COLOR: #d1fae5
  DISPLAY: flex;
  FLEX-DIRECTION: row
  justify-content: space-beteen;
  ALIGN-ITEMS: center
  paddng: 16px 20px;
  MARGIN: 0
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: sans-serif;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  GAP: 12px;
  POSITION: fixed
  OVERFLOW: hidden;
  Z-INDEX: 9999
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: opacity 0.3s ease
  background-imge: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 12px rgba(0,0,0,0.2)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 280px
  MAX-WIDTH: 400px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  BOTTOM: 24px
  RIGHT: 24px
}`,
totalMistakes: 44,
hint: "Fix widht; lowercase HEIGHT+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix space-beteen; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; lowercase POSITION+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase BOTTOM+semicolon; lowercase RIGHT+semicolon."
},


// ── H36 ──
{
correct: `.timeline-section {
  width: 100%;
  max-width: 900px;
  min-height: 400px;
  background-color: white;
  color: #1e293b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 48px 32px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.7;
  letter-spacing: 0.2px;
  text-align: left;
  gap: 32px;
  position: relative;
  overflow: visible;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border-left: 3px solid #3b82f6;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  max-height: none;
  max-width: 900px;
}`,
wrong: `.timeline-section {
  WIDTH: 100%
  MAX-WIDTH: 900px;
  min-hieght: 400px
  BACKGROUND-COLOR: white;
  COLOR: #1e293b
  DISPLAY: flex;
  FLEX-DIRECTION: column
  JUSTIFY-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  PADDING: 48px 32px;
  MARGIN: 0 auto
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.7
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  GAP: 32px;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  border-lft: 3px solid #3b82f6
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  MAX-HEIGHT: none;
  max-wdth: 900px
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; fix border-lft+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase MAX-HEIGHT; fix max-wdth+semicolon."
},


// ── H37 ──
{
correct: `.chip-tag {
  width: auto;
  height: 32px;
  background-color: #ede9fe;
  color: #5b21b6;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  margin: 4px;
  font-size: 12px;
  font-weight: 500;
  font-family: sans-serif;
  line-height: 1;
  letter-spacing: 0.3px;
  text-align: center;
  gap: 6px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-image: none;
  border: 1px solid #c4b5fd;
  border-radius: 16px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 48px;
  max-width: 240px;
  min-height: 32px;
  max-height: 32px;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.chip-tag {
  WIDTH: auto
  hieght: 32px;
  background-colr: #ede9fe;
  COLOR: #5b21b6
  DISPLAY: inline-flex;
  FLEX-DIRECTION: row
  JUSTIFY-CONTENT: center;
  ALIGN-ITEMS: center
  PADDING: 0 12px;
  MARGIN: 4px
  font-sze: 12px;
  FONT-WEIGHT: 500
  font-famly: sans-serif;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.3px;
  TEXT-ALIGN: center
  GAP: 6px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: pointer;
  transiton: background-color 0.2s ease
  background-imge: none;
  BORDER: 1px solid #c4b5fd
  border-raduis: 16px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 48px
  MAX-WIDTH: 240px;
  min-hieght: 32px
  MAX-HEIGHT: 32px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; fix hieght; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase JUSTIFY-CONTENT; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; fix font-famly; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; fix transiton+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase MAX-HEIGHT; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT+semicolon."
},


// ── H38 ──
{
correct: `.map-container {
  width: 100%;
  height: 480px;
  background-color: #e2e8f0;
  color: #1e293b;
  display: block;
  position: relative;
  overflow: hidden;
  z-index: 0;
  opacity: 1;
  visibility: visible;
  cursor: grab;
  transition: none;
  background-image: none;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  max-width: 100%;
  min-height: 240px;
  max-height: none;
  padding: 0;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  flex-wrap: nowrap;
  align-content: stretch;
}`,
wrong: `.map-container {
  widht: 100%;
  hieght: 480px
  BACKGROUND-COLOR: #e2e8f0;
  COLOR: #1e293b
  DISPLAY: block;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 0
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: grab;
  TRANSITION: none
  background-imge: none;
  BORDER: 1px solid #cbd5e1
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  min-hieght: 240px
  MAX-HEIGHT: none;
  PADDING: 0
  MARGIN: 0 auto;
  font-sze: 14px
  FONT-WEIGHT: 400;
  font-famly: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0
  TEXT-ALIGN: left;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: stretch
}`,
totalMistakes: 43,
hint: "Fix widht; fix hieght+semicolon; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase MAX-HEIGHT; lowercase PADDING+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; fix font-famly+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT+semicolon."
},


// ── H39 ──
{
correct: `.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  color: transparent;
  display: block;
  position: relative;
  overflow: hidden;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: none;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 100px;
  max-width: 100%;
  min-height: 8px;
  max-height: 8px;
  padding: 0;
  margin: 0;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.progress-bar {
  WIDTH: 100%
  hieght: 8px;
  BACKGROUND-COLOR: #e5e7eb;
  COLOR: transparent
  DISPLAY: block;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: none
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 100px
  MAX-WIDTH: 100%;
  min-hieght: 8px
  MAX-HEIGHT: 8px;
  PADDING: 0
  MARGIN: 0;
  FONT-SIZE: 0
  FONT-WEIGHT: 400;
  font-famly: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0
  TEXT-ALIGN: left;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center
}`,
totalMistakes: 40,
hint: "Lowercase WIDTH+semicolon; fix hieght; lowercase BACKGROUND-COLOR; lowercase COLOR+semicolon; lowercase DISPLAY; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase MAX-HEIGHT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase FONT-SIZE+semicolon; lowercase FONT-WEIGHT; fix font-famly+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT+semicolon."
},


// ── H40 ──
{
correct: `.feature-banner {
  width: 100%;
  max-width: 1400px;
  height: 320px;
  background-color: #0c4a6e;
  color: #e0f2fe;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  font-family: Georgia;
  line-height: 1.4;
  letter-spacing: 0.4px;
  text-align: left;
  gap: 40px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  opacity: 1;
  visibility: visible;
  cursor: default;
  transition: none;
  background-image: none;
  border: none;
  border-radius: 0;
  box-shadow: 0 8px 40px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 240px;
  max-height: none;
}`,
wrong: `.feature-banner {
  widht: 100%;
  MAX-WIDTH: 1400px
  hieght: 320px;
  background-colr: #0c4a6e;
  COLOR: #e0f2fe
  DISPLAY: flex;
  FLEX-DIRECTION: row
  justify-content: space-beteen;
  ALIGN-ITEMS: center
  paddng: 0 80px;
  MARGIN: 0 auto
  font-sze: 16px;
  FONT-WEIGHT: 600
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.4px;
  TEXT-ALIGN: left
  GAP: 40px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 2
  OPACITY: 1;
  VISIBILITY: visible
  CURSOR: default;
  TRANSITION: none
  background-imge: none;
  BORDER: none
  BORDER-RADIUS: 0;
  BOX-SHADOW: 0 8px 40px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  min-hieght: 240px;
  MAX-HEIGHT: none
}`,
totalMistakes: 46,
hint: "Fix widht; lowercase MAX-WIDTH+semicolon; fix hieght; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix space-beteen; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase CURSOR; lowercase TRANSITION+semicolon; fix background-imge; lowercase BORDER+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght; lowercase MAX-HEIGHT+semicolon."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 40-50 mistakes per code
   Total: 10 paragraphs (H41 - H50)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H41 ──
{
correct: `.testimonial-slider {
  width: 100%;
  max-width: 960px;
  min-height: 320px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px 24px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.2px;
  text-align: center;
  gap: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.3s ease;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 0 2px 10px lightgray;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  grid-template-columns: none;
}`,
wrong: `.testimonial-slider {
  WIDTH: 100%
  MAX-WIDTH: 960px;
  min-hieght: 320px
  background-colr: white;
  COLOR: black
  DISPLAY: flex;
  FLEX-DIRECTION: row
  justify-content: centr;
  ALIGN-ITEMS: center
  paddng: 32px 24px;
  MARGIN: 0 auto
  font-sze: 16px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  GAP: 20px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: transform 0.3s ease
  bordr: 1px solid lightgray;
  border-raduis: 8px
  BOX-SHADOW: 0 2px 10px lightgray;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  grid-template-colums: none
}`,
totalMistakes: 42,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix centr; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase GAP; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix grid-template-colums (no final semicolon)."
},


// ── H42 ──
{
correct: `.pricing-card-grid {
  width: 100%;
  max-width: 1100px;
  min-height: 480px;
  background-color: whitesmoke;
  color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 40px 24px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Helvetica;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: all 0.25s ease;
  border: none;
  border-radius: 10px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 768px;
  flex-wrap: wrap;
  align-content: start;
  align-items: stretch;
  justify-items: stretch;
}`,
wrong: `.pricing-card-grid {
  widht: 100%;
  MAX-WIDTH: 1100px
  min-hieght: 480px;
  BACKGROUND-COLOR: whitesmoke
  COLOR: black;
  DISPLAY: grid
  grid-template-colums: repeat(3, 1fr);
  GAP: 24px
  paddng: 40px 24px;
  MARGIN: 0 auto
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Helvetica;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 0;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: all 0.25s ease;
  BORDER: none
  border-raduis: 10px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 768px;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: start;
  ALIGN-ITEMS: stretch
  justify-items: stretc
}`,
totalMistakes: 41,
hint: "Fix widht; lowercase MAX-WIDTH+semicolon; fix min-hieght; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix grid-template-colums; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix justify-items value 'stretc' (no final semicolon)."
},


// ── H43 ──
{
correct: `.faq-accordion {
  width: 100%;
  max-width: 800px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: max-height 0.3s ease;
  border: 1px solid lightgray;
  border-radius: 6px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 200px;
}`,
wrong: `.faq-accordion {
  WIDTH: 100%
  MAX-WIDTH: 800px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 12px
  paddng: 24px;
  MARGIN: 0 auto
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: max-height 0.3s ease;
  bordr: 1px solid lightgray
  border-raduis: 6px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 200px
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase GAP; fix paddng+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; fix min-hieght (no final semicolon)."
},


// ── H44 ──
{
correct: `.team-members-section {
  width: 100%;
  max-width: 1200px;
  background-color: white;
  color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  padding: 48px 32px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Verdana;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 768px;
  flex-wrap: wrap;
  align-content: start;
  align-items: start;
  justify-items: center;
  min-height: 400px;
}`,
wrong: `.team-members-section {
  WIDTH: 100%
  MAX-WIDTH: 1200px
  background-colr: white;
  COLOR: black
  DISPLAY: grid;
  grid-template-colums: repeat(4, 1fr)
  GAP: 28px;
  paddng: 48px 32px
  MARGIN: 0 auto;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Verdana
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.2px
  TEXT-ALIGN: center;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 0
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: opacity 0.3s ease
  BORDER: none;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: auto
  background-imge: none;
  MIN-WIDTH: 768px
  FLEX-WRAP: wrap;
  ALIGN-CONTENT: start
  ALIGN-ITEMS: start;
  JUSTIFY-ITEMS: center
  min-hieght: 400px;
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH (no semicolon); fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix grid-template-colums (no semicolon); lowercase GAP; fix paddng (no semicolon); lowercase MARGIN; fix font-sze (no semicolon); lowercase FONT-WEIGHT; lowercase FONT-FAMILY (no semicolon); lowercase LINE-HEIGHT; lowercase LETTER-SPACING (no semicolon); lowercase TEXT-ALIGN; fix postion (no semicolon); lowercase OVERFLOW; lowercase Z-INDEX (no semicolon); lowercase CURSOR; lowercase OPACITY (no semicolon); lowercase VISIBILITY; lowercase TRANSITION (no semicolon); lowercase BORDER; fix border-raduis (no semicolon); lowercase BOX-SHADOW; lowercase OUTLINE (no semicolon); lowercase POINTER-EVENTS; lowercase USER-SELECT (no semicolon); lowercase TEXT-DECORATION; lowercase WHITE-SPACE (no semicolon); lowercase WORD-BREAK; lowercase VERTICAL-ALIGN (no semicolon); lowercase OVERFLOW-X; lowercase OVERFLOW-Y (no semicolon); fix background-imge; lowercase MIN-WIDTH (no semicolon); lowercase FLEX-WRAP; lowercase ALIGN-CONTENT (no semicolon); lowercase ALIGN-ITEMS; lowercase JUSTIFY-ITEMS (no semicolon); fix min-hieght."
},


// ── H45 ──
{
correct: `.signup-form-box {
  width: 100%;
  max-width: 420px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 2;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: box-shadow 0.2s ease;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 4px 12px lightgray;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 360px;
}`,
wrong: `.signup-form-box {
  widht: 100%
  MAX-WIDTH: 420px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 16px
  paddng: 32px;
  MARGIN: 0 auto
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 2;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: box-shadow 0.2s ease;
  bordr: 1px solid lightgray
  border-raduis: 10px;
  BOX-SHADOW: 0 4px 12px lightgray
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 360px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix min-hieght (no final semicolon)."
},


// ── H46 ──
{
correct: `.gallery-lightbox {
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 24px;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: center;
  overflow: hidden;
  cursor: zoom-out;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  min-height: 100vh;
  flex-wrap: nowrap;
  align-content: center;
  gap: 0;
}`,
wrong: `.gallery-lightbox {
  WIDTH: 100%
  hieght: 100vh;
  background-colr: black
  COLOR: white;
  DISPLAY: flex
  justify-content: centr;
  ALIGN-ITEMS: center
  postion: fixed;
  TOP: 0
  LEFT: 0;
  Z-INDEX: 9999
  paddng: 24px;
  MARGIN: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  OVERFLOW: hidden;
  CURSOR: zoom-out
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.3s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  min-hieght: 100vh;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  GAP: 0
}`,
totalMistakes: 43,
hint: "Lowercase WIDTH+semicolon; fix hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix centr; lowercase ALIGN-ITEMS+semicolon; fix postion; lowercase TOP+semicolon; lowercase LEFT; lowercase Z-INDEX+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase OVERFLOW; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; fix min-hieght; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase GAP (no final semicolon)."
},


// ── H47 ──
{
correct: `.skills-progress-list {
  width: 100%;
  max-width: 700px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Tahoma;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: width 0.4s ease;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 240px;
}`,
wrong: `.skills-progress-list {
  WIDTH: 100%
  MAX-WIDTH: 700px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 18px
  paddng: 28px;
  MARGIN: 0 auto
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Tahoma;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: width 0.4s ease;
  BORDER: none
  border-raduis: 4px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 240px
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix min-hieght (no final semicolon)."
},


// ── H48 ──
{
correct: `.order-summary-box {
  width: 100%;
  max-width: 380px;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: sticky;
  top: 24px;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 0 2px 8px lightgray;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 300px;
}`,
wrong: `.order-summary-box {
  widht: 100%
  MAX-WIDTH: 380px;
  background-colr: whitesmoke
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 14px
  paddng: 24px;
  MARGIN: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: sticky;
  TOP: 24px
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr: 1px solid lightgray;
  border-raduis: 8px
  BOX-SHADOW: 0 2px 8px lightgray;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: break-word;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: auto
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  ALIGN-ITEMS: stretch;
  justify-content: flex-strt
  min-hieght: 300px;
}`,
totalMistakes: 42,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase TOP+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase ALIGN-ITEMS; fix flex-strt (no final semicolon on it)."
},


// ── H49 ──
{
correct: `.notification-dropdown {
  width: 360px;
  max-height: 480px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: absolute;
  top: 56px;
  right: 16px;
  overflow: hidden;
  z-index: 500;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease;
  border: 1px solid lightgray;
  border-radius: 6px;
  box-shadow: 0 4px 14px lightgray;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 120px;
}`,
wrong: `.notification-dropdown {
  WIDTH: 360px
  max-hieght: 480px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 8px
  paddng: 16px;
  MARGIN: 0
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: absolute;
  TOP: 56px
  RIGHT: 16px;
  OVERFLOW: hidden
  Z-INDEX: 500;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.2s ease;
  bordr: 1px solid lightgray
  border-raduis: 6px;
  BOX-SHADOW: 0 4px 14px lightgray
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 120px
}`,
totalMistakes: 43,
hint: "Lowercase WIDTH+semicolon; fix max-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase TOP+semicolon; lowercase RIGHT; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix min-hieght (no final semicolon)."
},


// ── H50 ──
{
correct: `.empty-state-panel {
  width: 100%;
  max-width: 600px;
  background-color: white;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 32px;
  margin: 0 auto;
  gap: 16px;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  min-height: 320px;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.empty-state-panel {
  WIDTH: 100%
  MAX-WIDTH: 600px;
  background-colr: white
  COLOR: gray;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  justify-content: centr
  ALIGN-ITEMS: center;
  TEXT-ALIGN: center
  paddng: 60px 32px;
  MARGIN: 0 auto
  GAP: 16px;
  font-sze: 16px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 0;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.3s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  min-hieght: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase TEXT-ALIGN; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; fix min-hieght+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 40-50 mistakes per code
   Total: 10 paragraphs (H51 - H60)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H51 ──
{
correct: `.invoice-table-wrapper {
  width: 100%;
  max-width: 1000px;
  background-color: white;
  color: black;
  display: block;
  padding: 32px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 0 2px 6px lightgray;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 200px;
  gap: 0;
}`,
wrong: `.invoice-table-wrapper {
  WIDTH: 100%
  MAX-WIDTH: 1000px;
  background-colr: white
  COLOR: black;
  DISPLAY: block
  paddng: 32px;
  MARGIN: 0 auto
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr: 1px solid lightgray
  border-raduis: 8px;
  BOX-SHADOW: 0 2px 6px lightgray
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: auto
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 200px
  GAP: 0;
}`,
totalMistakes: 40,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; fix min-hieght; lowercase GAP (no final semicolon)."
},


// ── H52 ──
{
correct: `.kanban-board-column {
  width: 320px;
  max-height: 90vh;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  margin: 0 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.2s ease;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 400px;
}`,
wrong: `.kanban-board-column {
  widht: 320px
  max-hieght: 90vh;
  background-colr: whitesmoke
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 12px
  paddng: 16px;
  MARGIN: 0 8px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.2s ease;
  bordr: 1px solid lightgray
  border-raduis: 10px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 400px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; fix max-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix min-hieght (no final semicolon)."
},


// ── H53 ──
{
correct: `.article-hero-banner {
  width: 100%;
  height: 480px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 48px;
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  font-family: Georgia;
  line-height: 1.4;
  letter-spacing: 0.3px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.4s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: bottom;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: linear-gradient(black, gray);
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: flex-end;
  gap: 16px;
}`,
wrong: `.article-hero-banner {
  WIDTH: 100%
  hieght: 480px;
  background-colr: black
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  justify-content: flex-emd
  ALIGN-ITEMS: flex-start;
  paddng: 48px
  MARGIN: 0;
  font-sze: 18px
  FONT-WEIGHT: 700;
  FONT-FAMILY: Georgia
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.3px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 0
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: opacity 0.4s ease
  BORDER: none;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: bottom
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: linear-gradient(black, gray);
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-end;
  GAP: 16px
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; fix hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix flex-emd (no semicolon); lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase GAP (no final semicolon)."
},


// ── H54 ──
{
correct: `.event-calendar-grid {
  width: 100%;
  max-width: 1024px;
  background-color: white;
  color: black;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 16px;
  margin: 0 auto;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 768px;
  flex-wrap: wrap;
  align-content: start;
  align-items: stretch;
  justify-items: stretch;
  min-height: 600px;
}`,
wrong: `.event-calendar-grid {
  WIDTH: 100%
  MAX-WIDTH: 1024px;
  background-colr: white
  COLOR: black;
  DISPLAY: grid
  grid-template-colums: repeat(7, 1fr);
  GAP: 4px
  paddng: 16px;
  MARGIN: 0 auto
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 0;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr: 1px solid lightgray
  border-raduis: 4px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 768px;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: start;
  ALIGN-ITEMS: stretch
  justify-items: stretc;
  min-hieght: 600px
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix grid-template-colums; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix justify-items value 'stretc'; fix min-hieght (no final semicolon)."
},


// ── H55 ──
{
correct: `.chat-message-bubble {
  max-width: 480px;
  background-color: dodgerblue;
  color: white;
  display: inline-block;
  padding: 12px 16px;
  margin: 8px 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.2s ease;
  border: none;
  border-radius: 16px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: pre-wrap;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 60px;
  width: auto;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-items: stretch;
  align-self: flex-start;
  text-transform: none;
  gap: 0;
}`,
wrong: `.chat-message-bubble {
  MAX-WIDTH: 480px
  background-colr: dodgerblue;
  COLOR: white
  DISPLAY: inline-block;
  paddng: 12px 16px
  MARGIN: 8px 0;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: background-color 0.2s ease
  BORDER: none;
  border-raduis: 16px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: pre-wrap
  WORD-BREAK: break-word;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 60px
  WIDTH: auto;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  justify-items: stretc
  ALIGN-SELF: flex-start;
  TEXT-TRANSFORM: none
  GAP: 0
}`,
totalMistakes: 40,
hint: "Lowercase MAX-WIDTH (no semicolon); fix background-colr; lowercase COLOR (no semicolon); lowercase DISPLAY; fix paddng (no semicolon); lowercase MARGIN; fix font-sze (no semicolon); lowercase FONT-WEIGHT; lowercase FONT-FAMILY (no semicolon); lowercase LINE-HEIGHT; lowercase LETTER-SPACING (no semicolon); lowercase TEXT-ALIGN; fix postion (no semicolon); lowercase OVERFLOW; lowercase Z-INDEX (no semicolon); lowercase CURSOR; lowercase OPACITY (no semicolon); lowercase VISIBILITY; lowercase TRANSITION (no semicolon); lowercase BORDER; fix border-raduis (no semicolon); lowercase BOX-SHADOW; lowercase OUTLINE (no semicolon); lowercase POINTER-EVENTS; lowercase USER-SELECT (no semicolon); lowercase TEXT-DECORATION; lowercase WHITE-SPACE (no semicolon); lowercase WORD-BREAK; lowercase VERTICAL-ALIGN (no semicolon); lowercase OVERFLOW-X; lowercase OVERFLOW-Y (no semicolon); fix background-imge; lowercase MIN-WIDTH (no semicolon); lowercase WIDTH; lowercase FLEX-WRAP (no semicolon); lowercase ALIGN-CONTENT; fix justify-items value 'stretc'; lowercase ALIGN-SELF; lowercase TEXT-TRANSFORM (no semicolon); lowercase GAP (no final semicolon)."
},


// ── H56 ──
{
correct: `.rating-stars-widget {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: auto;
  padding: 8px 0;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  color: gold;
  background-color: transparent;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: color 0.15s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 80px;
  flex-wrap: nowrap;
  align-content: center;
  text-align: left;
  align-self: center;
  max-width: 200px;
}`,
wrong: `.rating-stars-widget {
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: flex-strt;
  GAP: 4px
  WIDTH: auto;
  paddng: 8px 0
  MARGIN: 0;
  font-sze: 20px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0
  COLOR: gold;
  background-colr: transparent
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: color 0.15s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 80px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  TEXT-ALIGN: left
  ALIGN-SELF: center;
  MAX-WIDTH: 200px
}`,
totalMistakes: 41,
hint: "Lowercase DISPLAY (no semicolon); lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS (no semicolon); fix flex-strt; lowercase GAP (no semicolon); lowercase WIDTH; fix paddng (no semicolon); lowercase MARGIN; fix font-sze (no semicolon); lowercase FONT-WEIGHT; lowercase FONT-FAMILY (no semicolon); lowercase LETTER-SPACING; lowercase COLOR; fix background-colr (no semicolon); fix postion; lowercase OVERFLOW (no semicolon); lowercase Z-INDEX; lowercase CURSOR (no semicolon); lowercase OPACITY; lowercase VISIBILITY (no semicolon); lowercase TRANSITION; lowercase BORDER (no semicolon); fix border-raduis; lowercase BOX-SHADOW (no semicolon); lowercase OUTLINE; lowercase POINTER-EVENTS (no semicolon); lowercase USER-SELECT; lowercase TEXT-DECORATION (no semicolon); lowercase WHITE-SPACE; lowercase WORD-BREAK (no semicolon); lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X (no semicolon); lowercase OVERFLOW-Y; fix background-imge (no semicolon); lowercase MIN-WIDTH; lowercase FLEX-WRAP (no semicolon); lowercase ALIGN-CONTENT; lowercase TEXT-ALIGN; lowercase ALIGN-SELF (no semicolon); lowercase MAX-WIDTH (no final semicolon)."
},


// ── H57 ──
{
correct: `.pagination-controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 24px 0;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  color: black;
  background-color: white;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.2s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  max-width: 100%;
  align-self: center;
  justify-items: center;
}`,
wrong: `.pagination-controls {
  DISPLAY: flex
  FLEX-DIRECTION: row;
  justify-content: centr
  ALIGN-ITEMS: center;
  GAP: 8px
  WIDTH: 100%;
  paddng: 24px 0
  MARGIN: 0 auto;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0.1px
  COLOR: black;
  background-colr: white
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.2s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: center;
  TEXT-ALIGN: center
  MAX-WIDTH: 100%;
  ALIGN-SELF: center
  justify-items: centr
}`,
totalMistakes: 42,
hint: "Lowercase DISPLAY (no semicolon); lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS (no semicolon); lowercase GAP; lowercase WIDTH (no semicolon); fix paddng; lowercase MARGIN (no semicolon); fix font-sze; lowercase FONT-WEIGHT (no semicolon); lowercase FONT-FAMILY; lowercase LETTER-SPACING (no semicolon); lowercase COLOR; fix background-colr (no semicolon); fix postion; lowercase OVERFLOW (no semicolon); lowercase Z-INDEX; lowercase CURSOR (no semicolon); lowercase OPACITY; lowercase VISIBILITY (no semicolon); lowercase TRANSITION; lowercase BORDER (no semicolon); fix border-raduis; lowercase BOX-SHADOW (no semicolon); lowercase OUTLINE; lowercase POINTER-EVENTS (no semicolon); lowercase USER-SELECT; lowercase TEXT-DECORATION (no semicolon); lowercase WHITE-SPACE; lowercase WORD-BREAK (no semicolon); lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X (no semicolon); lowercase OVERFLOW-Y; fix background-imge (no semicolon); lowercase MIN-WIDTH; lowercase FLEX-WRAP (no semicolon); lowercase ALIGN-CONTENT; lowercase TEXT-ALIGN; lowercase MAX-WIDTH; lowercase ALIGN-SELF (no semicolon); fix centr (no final semicolon)."
},


// ── H58 ──
{
correct: `.testimonial-card-single {
  width: 100%;
  max-width: 500px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  margin: 0 auto;
  gap: 16px;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.6;
  letter-spacing: 0.1px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: 1px solid lightgray;
  border-radius: 12px;
  box-shadow: 0 3px 10px lightgray;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  min-height: 280px;
}`,
wrong: `.testimonial-card-single {
  widht: 100%
  MAX-WIDTH: 500px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  TEXT-ALIGN: center;
  paddng: 32px 24px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: transform 0.2s ease
  bordr: 1px solid lightgray;
  border-raduis: 12px
  BOX-SHADOW: 0 3px 10px lightgray;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  justify-content: centr;
  min-hieght: 280px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase TEXT-ALIGN; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix centr+semicolon; fix min-hieght (no final semicolon)."
},


// ── H59 ──
{
correct: `.cookie-consent-banner {
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  overflow: hidden;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.3s ease;
  border: none;
  border-top: 1px solid gray;
  box-shadow: 0 -2px 8px black;
  border-radius: 0;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: wrap;
  align-content: center;
  gap: 16px;
}`,
wrong: `.cookie-consent-banner {
  WIDTH: 100%
  background-colr: #1a1a1a;
  COLOR: white
  DISPLAY: flex;
  justify-content: space-betwen
  ALIGN-ITEMS: center;
  paddng: 20px 32px
  MARGIN: 0;
  postion: fixed
  BOTTOM: 0;
  LEFT: 0
  Z-INDEX: 2000;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  OVERFLOW: hidden
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: transform 0.3s ease
  BORDER: none;
  bordr-top: 1px solid gray
  BOX-SHADOW: 0 -2px 8px black;
  border-raduis: 0
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: wrap;
  ALIGN-CONTENT: center
  GAP: 16px;
}`,
totalMistakes: 42,
hint: "Lowercase WIDTH (no semicolon); fix background-colr; lowercase COLOR (no semicolon); lowercase DISPLAY; fix space-betwen (no semicolon); lowercase ALIGN-ITEMS; fix paddng (no semicolon); lowercase MARGIN; fix postion (no semicolon); lowercase BOTTOM; lowercase LEFT (no semicolon); lowercase Z-INDEX; fix font-sze (no semicolon); lowercase FONT-WEIGHT; lowercase FONT-FAMILY (no semicolon); lowercase LINE-HEIGHT; lowercase LETTER-SPACING (no semicolon); lowercase TEXT-ALIGN; lowercase OVERFLOW (no semicolon); lowercase CURSOR; lowercase OPACITY (no semicolon); lowercase VISIBILITY; lowercase TRANSITION (no semicolon); lowercase BORDER; fix bordr-top (no semicolon); fix border-raduis (no semicolon); lowercase OUTLINE; lowercase POINTER-EVENTS (no semicolon); lowercase USER-SELECT; lowercase TEXT-DECORATION (no semicolon); lowercase WHITE-SPACE; lowercase WORD-BREAK (no semicolon); lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X (no semicolon); lowercase OVERFLOW-Y; fix background-imge (no semicolon); lowercase MIN-WIDTH; lowercase MAX-WIDTH (no semicolon); lowercase FLEX-WRAP; lowercase ALIGN-CONTENT (no semicolon)."
},


// ── H60 ──
{
correct: `.weather-widget-card {
  width: 280px;
  background-color: skyblue;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  margin: 0;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 12px lightblue;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: linear-gradient(skyblue, white);
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  min-height: 220px;
  align-self: center;
  max-width: 320px;
}`,
wrong: `.weather-widget-card {
  WIDTH: 280px
  background-colr: skyblue;
  COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: center;
  TEXT-ALIGN: center
  paddng: 24px;
  MARGIN: 0
  GAP: 12px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.3s ease;
  BORDER: none
  border-raduis: 16px;
  BOX-SHADOW: 0 4px 12px lightblue
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: linear-gradient(skyblue, white)
  MIN-WIDTH: 240px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  justify-content: centr
  min-hieght: 220px;
  ALIGN-SELF: center
  MAX-WIDTH: 320px;
}`,
totalMistakes: 42,
hint: "Lowercase WIDTH (no semicolon); fix background-colr; lowercase COLOR (no semicolon); lowercase DISPLAY; lowercase FLEX-DIRECTION (no semicolon); lowercase ALIGN-ITEMS; lowercase TEXT-ALIGN (no semicolon); fix paddng; lowercase MARGIN; lowercase GAP; fix font-sze (no semicolon); lowercase FONT-WEIGHT; lowercase FONT-FAMILY (no semicolon); lowercase LINE-HEIGHT; lowercase LETTER-SPACING (no semicolon); fix postion; lowercase OVERFLOW (no semicolon); lowercase Z-INDEX; lowercase CURSOR (no semicolon); lowercase OPACITY; lowercase VISIBILITY (no semicolon); lowercase TRANSITION; lowercase BORDER (no semicolon); fix border-raduis; lowercase BOX-SHADOW (no semicolon); lowercase OUTLINE; lowercase POINTER-EVENTS (no semicolon); lowercase USER-SELECT; lowercase TEXT-DECORATION (no semicolon); lowercase WHITE-SPACE; lowercase WORD-BREAK (no semicolon); lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X (no semicolon); lowercase OVERFLOW-Y; fix background-imge (no semicolon); lowercase MIN-WIDTH; lowercase FLEX-WRAP (no semicolon); lowercase ALIGN-CONTENT; fix centr; lowercase ALIGN-SELF; lowercase MAX-WIDTH (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 40-50 mistakes per code
   Total: 10 paragraphs (H61 - H70)
*/


// ── H61 ──
{
correct: `.subscribe-newsletter-box {
  width: 100%;
  max-width: 560px;
  background-color: #f5f5f5;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 28px;
  margin: 0 auto;
  gap: 18px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: box-shadow 0.2s ease;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  min-height: 240px;
}`,
wrong: `.subscribe-newsletter-box {
  widht: 100%
  MAX-WIDTH: 560px;
  background-colr: #f5f5f5
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  TEXT-ALIGN: center;
  paddng: 40px 28px
  MARGIN: 0 auto;
  GAP: 18px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: box-shadow 0.2s ease
  bordr: 1px solid lightgray;
  border-raduis: 10px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  justify-content: centr;
  min-hieght: 240px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase TEXT-ALIGN; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix centr; fix min-hieght (no final semicolon)."
},


// ── H62 ──
{
correct: `.social-share-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px 0;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  color: black;
  background-color: white;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  box-shadow: none;
  border-radius: 0;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  max-width: 100%;
}`,
wrong: `.social-share-bar {
  DISPLAY: flex
  FLEX-DIRECTION: row;
  justify-content: centr
  ALIGN-ITEMS: center;
  GAP: 12px
  WIDTH: 100%;
  paddng: 16px 0
  MARGIN: 0;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0.1px
  COLOR: black;
  background-colr: white
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.2s ease;
  bordr-top: 1px solid lightgray
  bordr-bottom: 1px solid lightgray;
  BOX-SHADOW: none
  border-raduis: 0;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 320px
  FLEX-WRAP: wrap;
  ALIGN-CONTENT: center
  TEXT-ALIGN: center;
  MAX-WIDTH: 100%
}`,
totalMistakes: 41,
hint: "Lowercase DISPLAY (no semicolon); lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS (no semicolon); lowercase GAP; lowercase WIDTH (no semicolon); fix paddng; lowercase MARGIN; fix font-sze (no semicolon); lowercase FONT-WEIGHT; lowercase FONT-FAMILY (no semicolon); lowercase LETTER-SPACING; lowercase COLOR; fix background-colr (no semicolon); fix postion; lowercase OVERFLOW (no semicolon); lowercase Z-INDEX; lowercase CURSOR (no semicolon); lowercase OPACITY; lowercase VISIBILITY (no semicolon); lowercase TRANSITION; fix bordr-top; fix bordr-bottom (no semicolon); lowercase BOX-SHADOW; fix border-raduis (no semicolon); lowercase OUTLINE; lowercase POINTER-EVENTS (no semicolon); lowercase USER-SELECT; lowercase TEXT-DECORATION (no semicolon); lowercase WHITE-SPACE; lowercase WORD-BREAK (no semicolon); lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X; lowercase OVERFLOW-Y (no semicolon); fix background-imge; lowercase MIN-WIDTH; lowercase FLEX-WRAP (no semicolon); lowercase ALIGN-CONTENT; lowercase TEXT-ALIGN (no semicolon); lowercase MAX-WIDTH."
},


// ── H63 ──
{
correct: `.testimonial-quote-block {
  width: 100%;
  max-width: 720px;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  margin: 0 auto;
  gap: 16px;
  font-size: 17px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.7;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-left: 4px solid royalblue;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  min-height: 160px;
}`,
wrong: `.testimonial-quote-block {
  WIDTH: 100%
  MAX-WIDTH: 720px;
  background-colr: white
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: flex-start
  paddng: 32px;
  MARGIN: 0 auto
  GAP: 16px;
  font-sze: 17px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Georgia
  LINE-HEIGHT: 1.7;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr-left: 4px solid royalblue;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  justify-content: flex-strt;
  min-hieght: 160px
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION; fix bordr-left; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix flex-strt+semicolon; fix min-hieght (no final semicolon)."
},


// ── H64 ──
{
correct: `.image-upload-dropzone {
  width: 100%;
  max-width: 480px;
  min-height: 220px;
  background-color: #fafafa;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
  margin: 0 auto;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: border-color 0.2s ease;
  border: 2px dashed lightgray;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.image-upload-dropzone {
  widht: 100%
  MAX-WIDTH: 480px;
  min-hieght: 220px
  background-colr: #fafafa;
  COLOR: gray
  DISPLAY: flex;
  FLEX-DIRECTION: column
  justify-content: centr;
  ALIGN-ITEMS: center
  TEXT-ALIGN: center;
  paddng: 32px
  MARGIN: 0 auto;
  GAP: 12px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: border-color 0.2s ease
  BORDER: 2px dashed lightgray;
  border-raduis: 8px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase TEXT-ALIGN; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT (no final semicolon)."
},


// ── H65 ──
{
correct: `.error-toast-alert {
  width: auto;
  max-width: 400px;
  background-color: crimson;
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  margin: 0;
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 3000;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  overflow: hidden;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.3s ease;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
}`,
wrong: `.error-toast-alert {
  WIDTH: auto
  MAX-WIDTH: 400px;
  background-colr: crimson
  COLOR: white;
  DISPLAY: flex
  ALIGN-ITEMS: center;
  GAP: 12px
  paddng: 14px 20px;
  MARGIN: 0
  postion: fixed;
  TOP: 24px
  RIGHT: 24px;
  Z-INDEX: 3000
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  OVERFLOW: hidden;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.3s ease;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 12px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 240px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  justify-content: flex-strt
  FLEX-DIRECTION: row;
}`,
totalMistakes: 42,
hint: "Lowercase WIDTH (no semicolon); lowercase MAX-WIDTH; fix background-colr (no semicolon); lowercase COLOR; lowercase DISPLAY (no semicolon); lowercase ALIGN-ITEMS; lowercase GAP (no semicolon); fix paddng; lowercase MARGIN; fix postion; lowercase TOP (no semicolon); lowercase RIGHT; lowercase Z-INDEX (no semicolon); fix font-sze; lowercase FONT-WEIGHT (no semicolon); lowercase FONT-FAMILY; lowercase LINE-HEIGHT (no semicolon); lowercase LETTER-SPACING; lowercase TEXT-ALIGN (no semicolon); lowercase OVERFLOW; lowercase CURSOR (no semicolon); lowercase OPACITY; lowercase VISIBILITY (no semicolon); lowercase TRANSITION; lowercase BORDER (no semicolon); fix border-raduis; lowercase BOX-SHADOW (no final semicolon on it); lowercase OUTLINE; lowercase POINTER-EVENTS (no semicolon); lowercase USER-SELECT; lowercase TEXT-DECORATION (no semicolon); lowercase WHITE-SPACE; lowercase WORD-BREAK (no semicolon); lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X (no semicolon); lowercase OVERFLOW-Y; fix background-imge (no semicolon); lowercase MIN-WIDTH; lowercase FLEX-WRAP (no semicolon); lowercase ALIGN-CONTENT; fix flex-strt; lowercase FLEX-DIRECTION."
},


// ── H66 ──
{
correct: `.recipe-ingredients-list {
  width: 100%;
  max-width: 600px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  font-family: Verdana;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 6px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 300px;
}`,
wrong: `.recipe-ingredients-list {
  WIDTH: 100%
  MAX-WIDTH: 600px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 10px
  paddng: 24px;
  MARGIN: 0 auto
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Verdana;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr: 1px solid lightgray
  border-raduis: 6px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 300px
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; fix min-hieght (no final semicolon)."
},


// ── H67 ──
{
correct: `.user-profile-header {
  width: 100%;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 32px;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-bottom: 1px solid lightgray;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
}`,
wrong: `.user-profile-header {
  widht: 100%
  background-colr: white;
  COLOR: black
  DISPLAY: flex;
  ALIGN-ITEMS: center
  GAP: 20px;
  paddng: 24px 32px
  MARGIN: 0;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr-bottom: 1px solid lightgray;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  justify-content: flex-strt
  FLEX-DIRECTION: row;
}`,
totalMistakes: 40,
hint: "Fix widht (no semicolon); fix background-colr; lowercase COLOR (no semicolon); lowercase DISPLAY; lowercase ALIGN-ITEMS (no semicolon); lowercase GAP; fix paddng (no semicolon); lowercase MARGIN; fix font-sze (no semicolon); lowercase FONT-WEIGHT; lowercase FONT-FAMILY (no semicolon); lowercase LINE-HEIGHT; lowercase LETTER-SPACING (no semicolon); lowercase TEXT-ALIGN; fix postion; lowercase OVERFLOW (no semicolon); lowercase Z-INDEX; lowercase CURSOR (no semicolon); lowercase OPACITY; lowercase VISIBILITY (no semicolon); lowercase TRANSITION; fix bordr-bottom; fix border-raduis (no semicolon); lowercase BOX-SHADOW; lowercase OUTLINE (no semicolon); lowercase POINTER-EVENTS; lowercase USER-SELECT (no semicolon); lowercase TEXT-DECORATION; lowercase WHITE-SPACE (no semicolon); lowercase WORD-BREAK; lowercase VERTICAL-ALIGN (no semicolon); lowercase OVERFLOW-X; lowercase OVERFLOW-Y (no semicolon); fix background-imge; lowercase MIN-WIDTH; lowercase MAX-WIDTH (no semicolon); lowercase FLEX-WRAP; lowercase ALIGN-CONTENT (no semicolon); fix flex-strt; lowercase FLEX-DIRECTION."
},


// ── H68 ──
{
correct: `.testimonials-carousel-dots {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: auto;
  padding: 16px 0;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  color: lightgray;
  background-color: transparent;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.15s ease;
  border: none;
  border-radius: 50%;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 60px;
  flex-wrap: nowrap;
  align-content: center;
  text-align: center;
  align-self: center;
}`,
wrong: `.testimonials-carousel-dots {
  DISPLAY: flex
  FLEX-DIRECTION: row;
  justify-content: centr
  ALIGN-ITEMS: center;
  GAP: 8px
  WIDTH: auto;
  paddng: 16px 0
  MARGIN: 0 auto;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0
  COLOR: lightgray;
  background-colr: transparent
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.15s ease;
  BORDER: none
  border-raduis: 50%;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 60px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  TEXT-ALIGN: center
  ALIGN-SELF: center;
}`,
totalMistakes: 40,
hint: "Lowercase DISPLAY (no semicolon); lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS (no semicolon); lowercase GAP; lowercase WIDTH (no semicolon); fix paddng; lowercase MARGIN (no semicolon); fix font-sze; lowercase FONT-WEIGHT (no semicolon); lowercase FONT-FAMILY; lowercase LETTER-SPACING (no semicolon); lowercase COLOR; fix background-colr (no semicolon); fix postion; lowercase OVERFLOW (no semicolon); lowercase Z-INDEX; lowercase CURSOR (no semicolon); lowercase OPACITY; lowercase VISIBILITY (no semicolon); lowercase TRANSITION; lowercase BORDER (no semicolon); fix border-raduis; lowercase BOX-SHADOW (no semicolon); lowercase OUTLINE; lowercase POINTER-EVENTS (no semicolon); lowercase USER-SELECT; lowercase TEXT-DECORATION (no semicolon); lowercase WHITE-SPACE; lowercase WORD-BREAK (no semicolon); lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X (no semicolon); lowercase OVERFLOW-Y; fix background-imge (no semicolon); lowercase MIN-WIDTH; lowercase FLEX-WRAP (no semicolon); lowercase ALIGN-CONTENT; lowercase TEXT-ALIGN; lowercase ALIGN-SELF (no final semicolon)."
},


// ── H69 ──
{
correct: `.search-results-list {
  width: 100%;
  max-width: 800px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 400px;
}`,
wrong: `.search-results-list {
  WIDTH: 100%
  MAX-WIDTH: 800px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  GAP: 16px
  paddng: 24px;
  MARGIN: 0 auto
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 400px
}`,
totalMistakes: 41,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase GAP+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix min-hieght (no final semicolon)."
},


// ── H70 ──
{
correct: `.video-thumbnail-card {
  width: 320px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 180px;
}`,
wrong: `.video-thumbnail-card {
  widht: 320px
  background-colr: black;
  COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: column
  paddng: 0;
  MARGIN: 0
  GAP: 8px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: transform 0.2s ease
  BORDER: none;
  border-raduis: 10px
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.2);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 240px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  min-hieght: 180px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix paddng; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; fix min-hieght (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 40-50 mistakes per code
   Total: 10 paragraphs (H71 - H80)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H71 ──
{
correct: `.product-filter-sidebar {
  width: 260px;
  min-height: 100vh;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 24px 16px;
  margin: 0;
  gap: 20px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-right: 1px solid lightgray;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 200px;
  max-width: 300px;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
}`,
wrong: `.product-filter-sidebar {
  widht: 260px
  min-hieght: 100vh;
  background-colr: whitesmoke
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  paddng: 24px 16px;
  MARGIN: 0
  GAP: 20px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr-right: 1px solid lightgray;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: auto
  background-imge: none;
  MIN-WIDTH: 200px
  MAX-WIDTH: 300px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  justify-content: flex-strt
}`,
totalMistakes: 40,
hint: "Fix widht+semicolon; fix min-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-right; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix flex-strt (no final semicolon)."
},


// ── H72 ──
{
correct: `.countdown-timer-box {
  width: auto;
  min-width: 280px;
  background-color: #1a1a2e;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px 32px;
  margin: 0 auto;
  font-size: 36px;
  font-weight: 700;
  font-family: Georgia;
  line-height: 1;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  max-width: 640px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 120px;
}`,
wrong: `.countdown-timer-box {
  WIDTH: auto
  MIN-WIDTH: 280px;
  background-colr: #1a1a2e
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  justify-content: centr
  ALIGN-ITEMS: center;
  GAP: 16px
  paddng: 24px 32px;
  MARGIN: 0 auto
  font-sze: 36px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1
  LETTER-SPACING: 2px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 20px rgba(0,0,0,0.4)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MAX-WIDTH: 640px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  min-hieght: 120px
}`,
totalMistakes: 40,
hint: "Lowercase WIDTH+semicolon; lowercase MIN-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase GAP; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght (no final semicolon)."
},


// ── H73 ──
{
correct: `.news-ticker-strip {
  width: 100%;
  height: 44px;
  background-color: #cc0000;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  margin: 0;
  gap: 12px;
  font-size: 13px;
  font-weight: 600;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.3px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 10;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.news-ticker-strip {
  widht: 100%
  hieght: 44px;
  background-colr: #cc0000
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: flex-strt;
  paddng: 0 16px
  MARGIN: 0;
  GAP: 12px
  font-sze: 13px;
  FONT-WEIGHT: 600
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.3px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 10;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
}`,
totalMistakes: 40,
hint: "Fix widht+semicolon; fix hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT (no final semicolon)."
},


// ── H74 ──
{
correct: `.data-table-container {
  width: 100%;
  max-width: 1100px;
  background-color: white;
  color: black;
  display: block;
  padding: 0;
  margin: 0 auto;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: auto;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: auto;
  overflow-y: auto;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 200px;
  max-height: 600px;
  flex-wrap: nowrap;
  justify-content: flex-start;
}`,
wrong: `.data-table-container {
  widht: 100%
  MAX-WIDTH: 1100px;
  background-colr: white
  COLOR: black;
  DISPLAY: block
  paddng: 0;
  MARGIN: 0 auto
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: auto
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr: 1px solid lightgray
  border-raduis: 6px;
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.05)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: auto
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 200px
  MAX-HEIGHT: 600px;
  FLEX-WRAP: nowrap
  JUSTIFY-CONTENT: flex-strt;
}`,
totalMistakes: 40,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght; lowercase MAX-HEIGHT+semicolon; lowercase FLEX-WRAP; fix flex-strt."
},


// ── H75 ──
{
correct: `.floating-action-button {
  width: 56px;
  height: 56px;
  background-color: royalblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 9999;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 56px;
  max-width: 56px;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.floating-action-button {
  widht: 56px
  hieght: 56px;
  background-colr: royalblue
  COLOR: white;
  DISPLAY: flex
  justify-content: centr;
  ALIGN-ITEMS: center
  PADDING: 0;
  MARGIN: 0
  font-sze: 24px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: fixed;
  BOTTOM: 32px
  RIGHT: 32px;
  Z-INDEX: 9999
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: transform 0.2s ease
  BORDER: none;
  border-raduis: 50%
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.3);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW: hidden;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 56px;
  MAX-WIDTH: 56px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
}`,
totalMistakes: 40,
hint: "Fix widht+semicolon; fix hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase BOTTOM+semicolon; lowercase RIGHT; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT (no final semicolon)."
},


// ── H76 ──
{
correct: `.language-switcher-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
  padding: 8px 24px;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  color: black;
  background-color: whitesmoke;
  position: relative;
  overflow: visible;
  z-index: 2;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.15s ease;
  border-bottom: 1px solid lightgray;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  text-align: right;
  overflow: visible;
}`,
wrong: `.language-switcher-bar {
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: flex-end;
  GAP: 8px
  widht: 100%;
  paddng: 8px 24px
  MARGIN: 0;
  font-sze: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0.1px
  COLOR: black;
  background-colr: whitesmoke
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 2;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.15s ease;
  bordr-bottom: 1px solid lightgray
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  TEXT-ALIGN: right;
  OVERFLOW: visible
}`,
totalMistakes: 40,
hint: "Lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase GAP; fix widht+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LETTER-SPACING+semicolon; lowercase COLOR; fix background-colr+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-bottom+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TEXT-ALIGN; lowercase OVERFLOW."
},


// ── H77 ──
{
correct: `.wishlist-drawer-panel {
  width: 380px;
  min-height: 100vh;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 32px 24px;
  margin: 0;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.3s ease;
  border-left: 1px solid lightgray;
  border-radius: 0;
  box-shadow: -4px 0 16px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
}`,
wrong: `.wishlist-drawer-panel {
  widht: 380px
  min-hieght: 100vh;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  paddng: 32px 24px;
  MARGIN: 0
  GAP: 16px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: fixed
  TOP: 0;
  RIGHT: 0
  Z-INDEX: 2000;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.3s ease;
  bordr-left: 1px solid lightgray
  border-raduis: 0;
  BOX-SHADOW: -4px 0 16px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW: hidden
  OVERFLOW-X: hidden;
  OVERFLOW-Y: auto
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  justify-content: flex-strt;
}`,
totalMistakes: 40,
hint: "Fix widht+semicolon; fix min-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase TOP; lowercase RIGHT+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-left+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix flex-strt."
},


// ── H78 ──
{
correct: `.multi-step-form-wrapper {
  width: 100%;
  max-width: 640px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 32px;
  margin: 0 auto;
  gap: 24px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  min-height: 400px;
}`,
wrong: `.multi-step-form-wrapper {
  widht: 100%
  MAX-WIDTH: 640px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  paddng: 40px 32px;
  MARGIN: 0 auto
  GAP: 24px;
  font-sze: 15px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.6;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr: 1px solid lightgray;
  border-raduis: 12px
  BOX-SHADOW: 0 4px 24px rgba(0,0,0,0.08);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  justify-content: flex-strt;
  min-hieght: 400px
}`,
totalMistakes: 40,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix flex-strt; fix min-hieght (no final semicolon)."
},


// ── H79 ──
{
correct: `.dark-mode-toggle-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 16px 24px;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  color: black;
  background-color: white;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid lightgray;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  text-align: left;
  overflow: visible;
}`,
wrong: `.dark-mode-toggle-row {
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: space-between;
  GAP: 12px
  widht: 100%;
  paddng: 16px 24px
  MARGIN: 0;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  COLOR: black;
  background-colr: white
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.2s ease;
  bordr-bottom: 1px solid lightgray
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 280px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  TEXT-ALIGN: left;
  OVERFLOW: visible
}`,
totalMistakes: 40,
hint: "Lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase GAP; fix widht+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LETTER-SPACING+semicolon; lowercase COLOR; fix background-colr+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-bottom+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TEXT-ALIGN; lowercase OVERFLOW."
},


// ── H80 ──
{
correct: `.onboarding-steps-tracker {
  width: 100%;
  max-width: 720px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  margin: 0 auto;
  gap: 0;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 80px;
}`,
wrong: `.onboarding-steps-tracker {
  widht: 100%
  MAX-WIDTH: 720px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  justify-content: space-between
  ALIGN-ITEMS: center;
  paddng: 24px 32px
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: centr
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  min-hieght: 80px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase justify-content+semicolon; lowercase ALIGN-ITEMS; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; fix centr; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 40-50 mistakes per code
   Total: 10 paragraphs (H81 - H90)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H81 ──
{
correct: `.file-upload-progress-bar {
  width: 100%;
  max-width: 520px;
  background-color: #f0f0f0;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px 24px;
  margin: 0 auto;
  gap: 10px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  min-height: 80px;
}`,
wrong: `.file-upload-progress-bar {
  widht: 100%
  MAX-WIDTH: 520px;
  background-colr: #f0f0f0
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  paddng: 20px 24px;
  MARGIN: 0 auto
  GAP: 10px;
  font-sze: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr: 1px solid lightgray;
  border-raduis: 8px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  justify-content: flex-strt;
  min-hieght: 80px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix flex-strt; fix min-hieght (no final semicolon)."
},


// ── H82 ──
{
correct: `.avatar-group-stack {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  width: auto;
  padding: 8px 0;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  color: black;
  background-color: transparent;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 80px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 40px;
}`,
wrong: `.avatar-group-stack {
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  JUSTIFY-CONTENT: flex-strt;
  GAP: 0
  WIDTH: auto;
  paddng: 8px 0
  MARGIN: 0;
  font-sze: 12px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0
  COLOR: black;
  background-colr: transparent
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 80px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  min-hieght: 40px;
}`,
totalMistakes: 41,
hint: "Lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; lowercase GAP+semicolon; lowercase WIDTH; fix paddng+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase COLOR; fix background-colr+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght."
},


// ── H83 ──
{
correct: `.split-screen-layout {
  width: 100%;
  height: 100vh;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: stretch;
  min-height: 100vh;
}`,
wrong: `.split-screen-layout {
  widht: 100%
  hieght: 100vh;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 16px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 0;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: stretch
  min-hieght: 100vh;
}`,
totalMistakes: 42,
hint: "Fix widht+semicolon; fix hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght."
},


// ── H84 ──
{
correct: `.review-stars-summary {
  width: 100%;
  max-width: 480px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin: 0 auto;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 160px;
}`,
wrong: `.review-stars-summary {
  widht: 100%
  MAX-WIDTH: 480px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  justify-content: centr;
  paddng: 24px
  MARGIN: 0 auto;
  GAP: 8px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr: 1px solid lightgray
  border-raduis: 8px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 240px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  min-hieght: 160px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix centr; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght (no final semicolon)."
},


// ── H85 ──
{
correct: `.sticky-header-bar {
  width: 100%;
  height: 60px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin: 0;
  gap: 16px;
  font-size: 15px;
  font-weight: 600;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: left;
  position: sticky;
  top: 0;
  overflow: visible;
  z-index: 100;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: box-shadow 0.2s ease;
  border-bottom: 1px solid lightgray;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.sticky-header-bar {
  widht: 100%
  hieght: 60px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: space-between;
  paddng: 0 24px
  MARGIN: 0;
  GAP: 16px
  font-sze: 15px;
  FONT-WEIGHT: 600
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: sticky;
  TOP: 0
  OVERFLOW: visible;
  Z-INDEX: 100
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: box-shadow 0.2s ease
  bordr-bottom: 1px solid lightgray;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; fix hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase TOP+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-bottom; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT."
},


// ── H86 ──
{
correct: `.tag-cloud-wrapper {
  width: 100%;
  max-width: 600px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 24px;
  margin: 0 auto;
  gap: 10px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  align-content: flex-start;
  min-height: 80px;
}`,
wrong: `.tag-cloud-wrapper {
  widht: 100%
  MAX-WIDTH: 600px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  FLEX-WRAP: wrap
  ALIGN-ITEMS: center;
  justify-content: flex-strt
  paddng: 20px 24px;
  MARGIN: 0 auto
  GAP: 10px;
  font-sze: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr: 1px solid lightgray;
  border-raduis: 8px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 240px
  ALIGN-CONTENT: flex-start;
  min-hieght: 80px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase ALIGN-CONTENT; fix min-hieght (no final semicolon)."
},


// ── H87 ──
{
correct: `.mobile-bottom-nav {
  width: 100%;
  height: 56px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 11px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-top: 1px solid lightgray;
  border-radius: 0;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.06);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
}`,
wrong: `.mobile-bottom-nav {
  widht: 100%
  hieght: 56px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: space-around;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 11px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: fixed;
  BOTTOM: 0
  LEFT: 0;
  Z-INDEX: 1000
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr-top: 1px solid lightgray;
  border-raduis: 0
  BOX-SHADOW: 0 -2px 8px rgba(0,0,0,0.06);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW: hidden;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; fix hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase BOTTOM+semicolon; lowercase LEFT; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-top; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT."
},


// ── H88 ──
{
correct: `.step-progress-indicator {
  width: 100%;
  max-width: 560px;
  background-color: transparent;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  margin: 0 auto;
  gap: 0;
  font-size: 12px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 60px;
}`,
wrong: `.step-progress-indicator {
  widht: 100%
  MAX-WIDTH: 560px;
  background-colr: transparent
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: space-between;
  paddng: 16px 0
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 12px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: centr
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  min-hieght: 60px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; fix centr; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght (no final semicolon)."
},


// ── H89 ──
{
correct: `.accordion-item-panel {
  width: 100%;
  max-width: 720px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: max-height 0.3s ease;
  border-bottom: 1px solid lightgray;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
}`,
wrong: `.accordion-item-panel {
  widht: 100%
  MAX-WIDTH: 720px;
  background-colr: white
  COLOR: black;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  PADDING: 0;
  MARGIN: 0 auto
  GAP: 0;
  font-sze: 15px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.6;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: max-height 0.3s ease
  bordr-bottom: 1px solid lightgray;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  JUSTIFY-CONTENT: flex-strt;
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-bottom; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase JUSTIFY-CONTENT; fix flex-strt (no final semicolon)."
},


// ── H90 ──
{
correct: `.media-caption-box {
  width: 100%;
  max-width: 640px;
  background-color: #f8f8f8;
  color: #444444;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  margin: 0 auto;
  gap: 4px;
  font-size: 13px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-left: 3px solid lightgray;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  min-height: 48px;
}`,
wrong: `.media-caption-box {
  widht: 100%
  MAX-WIDTH: 640px;
  background-colr: #f8f8f8
  COLOR: #444444;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: flex-start
  paddng: 12px 16px;
  MARGIN: 0 auto
  GAP: 4px;
  font-sze: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Georgia
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr-left: 3px solid lightgray;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 240px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  justify-content: flex-strt;
  min-hieght: 48px
}`,
totalMistakes: 41,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-left; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix flex-strt; fix min-hieght (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H91 - H100)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/

// ── H91 ──
{
correct: `.dashboard-summary-card {
  width: 100%;
  max-width: 360px;
  min-height: 180px;
  background-color: #ffffff;
  color: #222222;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px;
  margin: 0;
  gap: 12px;
  font-size: 15px;
  font-weight: 500;
  font-family: Helvetica;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: box-shadow 0.2s ease;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 260px;
  flex-wrap: nowrap;
  align-content: flex-start;
  text-transform: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}`,
wrong: `.dashboard-summary-card {
  widht: 100%
  MAX-WIDTH: 360px;
  min-hieght: 180px
  background-colr: #ffffff;
  COLOR: #222222
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: flex-start;
  justify-content: space-betwen
  paddng: 20px 24px;
  MARGIN: 0
  GAP: 12px;
  font-sze: 15px
  FONT-WEIGHT: 500;
  FONT-FAMILY: Helvetica
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.2px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 2
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: box-shadow 0.2s ease
  BORDER: 1px solid #e0e0e0;
  border-raduis: 10px
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.08);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 260px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  text-transfrm: none;
  background-postion: center
  BACKGROUND-REPEAT: no-repeat;
  background-sze: cover
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix space-betwen+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix text-transfrm; fix background-postion+semicolon; lowercase BACKGROUND-REPEAT; fix background-sze (no final semicolon)."
},


// ── H92 ──
{
correct: `.notification-toast-popup {
  width: 360px;
  max-width: 90%;
  min-height: 64px;
  background-color: #323232;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  margin: 0 auto;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.3;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow: visible;
  z-index: 999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease, transform 0.3s ease;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  bottom: 24px;
  right: 24px;
}`,
wrong: `.notification-toast-popup {
  widht: 360px
  MAX-WIDTH: 90%;
  min-hieght: 64px
  background-colr: #323232;
  COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: row
  ALIGN-ITEMS: center;
  justify-content: space-betwen
  paddng: 14px 18px;
  MARGIN: 0 auto
  GAP: 10px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.3;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  POSITION: fixed
  OVERFLOW: visible;
  Z-INDEX: 999
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  transtion: opacity 0.3s ease, transform 0.3s ease
  BORDER: none;
  border-raduis: 8px
  BOX-SHADOW: 0 4px 12px rgba(0,0,0,0.3);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  BOTTOM: 24px;
  rght: 24px
}`,
totalMistakes: 48,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix space-betwen+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; lowercase POSITION+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix transtion+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase BOTTOM; fix rght (no final semicolon)."
},


// ── H93 ──
{
correct: `.pricing-table-column {
  width: 320px;
  max-width: 100%;
  min-height: 480px;
  background-color: white;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 24px;
  margin: 0 12px;
  gap: 16px;
  font-size: 15px;
  font-weight: 400;
  font-family: Roboto;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: 1px solid #ddd;
  border-radius: 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 260px;
  flex-wrap: nowrap;
  align-content: center;
  text-transform: uppercase;
  font-style: normal;
}`,
wrong: `.pricing-table-column {
  WIDTH: 320px
  max-widht: 100%;
  MIN-HEIGHT: 480px
  background-colr: white;
  COLOR: #1a1a1a
  DISPLAY: flex;
  FLEX-DIRECTION: column
  align-items: centr;
  JUSTIFY-CONTENT: flex-start
  paddng: 32px 24px;
  MARGIN: 0 12px
  GAP: 16px;
  font-sze: 15px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Roboto
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.2px
  text-aling: center;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: transform 0.2s ease
  BORDER: 1px solid #ddd;
  border-raduis: 16px
  BOX-SHADOW: 0 1px 4px rgba(0,0,0,0.1);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 260px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  text-transfrm: uppercase;
  FONT-STYLE: normal
}`,
totalMistakes: 47,
hint: "Lowercase WIDTH+semicolon; fix max-widht; lowercase MIN-HEIGHT+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix centr+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; fix text-aling; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix text-transfrm; lowercase FONT-STYLE (no final semicolon)."
},


// ── H94 ──
{
correct: `.search-suggestion-dropdown {
  width: 100%;
  max-width: 480px;
  min-height: 0;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 8px 0;
  margin: 4px 0 0 0;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: absolute;
  overflow-y: auto;
  z-index: 50;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #cccccc;
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  max-height: 280px;
  background-image: none;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: flex-start;
  top: 100%;
  left: 0;
}`,
wrong: `.search-suggestion-dropdown {
  widht: 100%
  MAX-WIDTH: 480px;
  min-hieght: 0
  background-colr: white;
  COLOR: #333333
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: stretch;
  justify-content: flex-strt
  paddng: 8px 0;
  MARGIN: 4px 0 0 0
  GAP: 0;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: absolute
  overflow-y: ato;
  Z-INDEX: 50
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  BORDER: 1px solid #cccccc;
  border-raduis: 6px
  BOX-SHADOW: 0 6px 16px rgba(0,0,0,0.15);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  max-hieght: 280px
  background-imge: none;
  MIN-WIDTH: 240px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  TOP: 100%;
  LEFT: 0
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; fix ato; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; fix max-hieght+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TOP; lowercase LEFT (no final semicolon)."
},


// ── H95 ──
{
correct: `.testimonial-quote-card {
  width: 100%;
  max-width: 600px;
  min-height: 220px;
  background-color: #fafafa;
  color: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 28px 32px;
  margin: 0 auto;
  gap: 16px;
  font-size: 16px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-left: 4px solid #999999;
  border-radius: 4px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  font-style: italic;
  quotes: none;
}`,
wrong: `.testimonial-quote-card {
  widht: 100%
  MAX-WIDTH: 600px;
  min-hieght: 220px
  BACKGROUND-COLOR: #fafafa;
  colr: #2b2b2b
  DISPLAY: flex;
  flex-directon: column
  ALIGN-ITEMS: flex-start;
  JUSTIFY-CONTENT: center
  paddng: 28px 32px;
  MARGIN: 0 auto
  GAP: 16px;
  font-sze: 16px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Georgia
  LINE-HEIGHT: 1.6;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr-left: 4px solid #999999;
  border-raduis: 4px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  font-stle: italic;
  QUOTES: none
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; lowercase BACKGROUND-COLOR; fix colr+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-CONTENT+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-left; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix font-stle; lowercase QUOTES (no final semicolon)."
},


// ── H96 ──
{
correct: `.video-player-controls-bar {
  width: 100%;
  height: 48px;
  background-color: rgba(0,0,0,0.7);
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin: 0;
  gap: 14px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: left;
  position: absolute;
  overflow: hidden;
  z-index: 20;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.25s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  bottom: 0;
  left: 0;
}`,
wrong: `.video-player-controls-bar {
  WIDTH: 100%
  HEIGHT: 48px;
  background-colr: rgba(0,0,0,0.7)
  COLOR: white;
  display: flx
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: space-betwen;
  paddng: 0 16px
  MARGIN: 0;
  GAP: 14px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: absolute;
  OVERFLOW: hidden
  Z-INDEX: 20;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  transtion: opacity 0.25s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  BOTTOM: 0
  LEFT: 0
}`,
totalMistakes: 49,
hint: "Lowercase WIDTH+semicolon; lowercase HEIGHT; fix background-colr+semicolon; lowercase COLOR; fix flx; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix space-betwen+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix transtion+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase BOTTOM (missing semicolon); lowercase LEFT (no final semicolon)."
},


// ── H97 ──
{
correct: `.sidebar-navigation-menu {
  width: 240px;
  height: 100vh;
  background-color: #1e1e2f;
  color: #d0d0d0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 24px 0;
  margin: 0;
  gap: 4px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow-y: auto;
  z-index: 5;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-right: 1px solid #333344;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  background-image: none;
  min-width: 200px;
  max-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  top: 0;
  left: 0;
}`,
wrong: `.sidebar-navigation-menu {
  widht: 240px
  HEIGHT: 100vh;
  background-colr: #1e1e2f
  COLOR: #d0d0d0;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  align-items: strech
  JUSTIFY-CONTENT: flex-start;
  paddng: 24px 0
  MARGIN: 0;
  GAP: 4px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  POSITION: fixed;
  overflow-y: ato
  Z-INDEX: 5;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-right: 1px solid #333344
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  background-imge: none;
  MIN-WIDTH: 200px
  MAX-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  TOP: 0
  LEFT: 0
}`,
totalMistakes: 49,
hint: "Fix widht+semicolon; lowercase HEIGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix strech+semicolon; lowercase JUSTIFY-CONTENT; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; lowercase POSITION; fix ato+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-right+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; fix background-imge; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TOP (missing semicolon); lowercase LEFT (no final semicolon)."
},


// ── H98 ──
{
correct: `.modal-confirmation-dialog {
  width: 420px;
  max-width: 90%;
  min-height: 200px;
  background-color: white;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 28px;
  margin: 0 auto;
  gap: 20px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 1000;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: none;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.25);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 300px;
  flex-wrap: nowrap;
  align-content: stretch;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
wrong: `.modal-confirmation-dialog {
  widht: 420px
  MAX-WIDTH: 90%;
  min-hieght: 200px
  background-colr: white;
  COLOR: #1a1a1a
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: stretch;
  justify-content: space-betwen
  PADDING: 28px;
  MARGIN: 0 auto
  GAP: 20px;
  font-sze: 15px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: fixed
  OVERFLOW: hidden;
  Z-INDEX: 1000
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: transform 0.2s ease
  BORDER: none;
  border-raduis: 12px
  BOX-SHADOW: 0 12px 32px rgba(0,0,0,0.25);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: hidden;
  OVERFLOW-Y: auto
  background-imge: none;
  MIN-WIDTH: 300px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: stretch
  TOP: 50%;
  LEFT: 50%
  TRANSFORM: translate(-50%, -50%);
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix space-betwen+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TOP; lowercase LEFT+semicolon; lowercase TRANSFORM (no final semicolon)."
},


// ── H99 ──
{
correct: `.profile-stats-grid {
  width: 100%;
  max-width: 720px;
  min-height: 0;
  background-color: white;
  color: #222222;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin: 0 auto;
  gap: 24px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-top: 1px solid #e5e5e5;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  grid-row-gap: 12px;
  grid-column-gap: 24px;
}`,
wrong: `.profile-stats-grid {
  widht: 100%
  MAX-WIDTH: 720px;
  min-hieght: 0
  background-colr: white;
  COLOR: #222222
  display: grd;
  GRID-TEMPLATE-COLUMNS: repeat(3, 1fr);
  ALIGN-ITEMS: center
  justify-content: centr;
  paddng: 20px 0
  MARGIN: 0 auto;
  GAP: 24px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-top: 1px solid #e5e5e5
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  grid-row-gp: 12px
  GRID-COLUMN-GAP: 24px
}`,
totalMistakes: 49,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; fix grd; lowercase GRID-TEMPLATE-COLUMNS+semicolon; lowercase ALIGN-ITEMS; fix centr+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-top; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix grid-row-gp+semicolon; lowercase GRID-COLUMN-GAP (no final semicolon)."
},


// ── H100 ──
{
correct: `.footer-newsletter-signup {
  width: 100%;
  max-width: 480px;
  min-height: 56px;
  background-color: #f0f0f0;
  color: #333333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 16px;
  margin: 0 auto;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: border-color 0.2s ease;
  border: 1px solid #cccccc;
  border-radius: 6px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  resize: none;
  appearance: none;
}`,
wrong: `.footer-newsletter-signup {
  widht: 100%
  MAX-WIDTH: 480px;
  min-hieght: 56px
  background-colr: #f0f0f0;
  COLOR: #333333
  DISPLAY: flex;
  flex-directon: row
  ALIGN-ITEMS: center;
  JUSTIFY-CONTENT: space-between
  paddng: 8px 8px 8px 16px;
  MARGIN: 0 auto
  GAP: 8px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: border-color 0.2s ease
  BORDER: 1px solid #cccccc;
  border-raduis: 6px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  rsize: none;
  APPEARANCE: none
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-CONTENT+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix rsize; lowercase APPEARANCE (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H101 - H110)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/

// ── H101 ──
{
correct: `.checkout-summary-panel {
  width: 100%;
  max-width: 400px;
  min-height: 240px;
  background-color: #fcfcfc;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 24px;
  margin: 0;
  gap: 14px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: sticky;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 300px;
  flex-wrap: nowrap;
  align-content: stretch;
  top: 80px;
  list-style: none;
}`,
wrong: `.checkout-summary-panel {
  widht: 100%
  MAX-WIDTH: 400px;
  min-hieght: 240px
  background-colr: #fcfcfc;
  COLOR: #1a1a1a
  DISPLAY: flex;
  flex-directon: column
  ALIGN-ITEMS: stretch;
  justify-content: flex-strt
  paddng: 24px;
  MARGIN: 0
  GAP: 14px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: sticky
  OVERFLOW: visible;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  BORDER: 1px solid #e8e8e8;
  border-raduis: 8px
  BOX-SHADOW: 0 1px 6px rgba(0,0,0,0.08);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 300px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: stretch
  TOP: 80px;
  list-stle: none
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TOP; fix list-stle (no final semicolon)."
},


// ── H102 ──
{
correct: `.image-gallery-thumbnail-grid {
  width: 100%;
  max-width: 960px;
  min-height: 0;
  background-color: white;
  color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 0 auto;
  gap: 10px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.3;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  grid-auto-rows: 120px;
  object-fit: cover;
}`,
wrong: `.image-gallery-thumbnail-grid {
  WIDTH: 100%
  max-widht: 960px;
  MIN-HEIGHT: 0
  background-colr: white;
  COLOR: black
  DISPLAY: grid;
  grid-template-colums: repeat(4, 1fr)
  ALIGN-ITEMS: center;
  justify-content: centr
  PADDING: 16px;
  MARGIN: 0 auto
  GAP: 10px;
  font-sze: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.3;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: center;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: opacity 0.2s ease
  BORDER: none;
  border-raduis: 4px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  grid-ato-rows: 120px;
  OBJECT-FIT: cover
}`,
totalMistakes: 48,
hint: "Lowercase WIDTH+semicolon; fix max-widht; lowercase MIN-HEIGHT+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix grid-template-colums+semicolon; lowercase ALIGN-ITEMS; fix centr+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix grid-ato-rows; lowercase OBJECT-FIT (no final semicolon)."
},


// ── H103 ──
{
correct: `.tag-chip-cloud-container {
  width: 100%;
  max-width: 640px;
  min-height: 0;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 0;
  margin: 0;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  flex-wrap: wrap;
  align-content: flex-start;
  row-gap: 8px;
  column-gap: 8px;
}`,
wrong: `.tag-chip-cloud-container {
  widht: 100%
  MAX-WIDTH: 640px;
  min-hieght: 0
  background-colr: white;
  COLOR: #333333
  DISPLAY: flex;
  FLEX-DIRECTION: row
  align-items: centr;
  JUSTIFY-CONTENT: flex-start
  paddng: 12px 0;
  MARGIN: 0
  GAP: 8px;
  font-sze: 13px
  FONT-WEIGHT: 500;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  BORDER: none;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 280px
  flex-wrp: wrap;
  ALIGN-CONTENT: flex-start
  ROW-GAP: 8px;
  collumn-gap: 8px
}`,
totalMistakes: 48,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; fix centr+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; fix flex-wrp; lowercase ALIGN-CONTENT+semicolon; lowercase ROW-GAP; fix collumn-gap (no final semicolon)."
},


// ── H104 ──
{
correct: `.rating-stars-widget {
  width: auto;
  max-width: 200px;
  min-height: 24px;
  background-color: transparent;
  color: #f5a623;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  gap: 2px;
  font-size: 18px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: color 0.15s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 80px;
  flex-wrap: nowrap;
  align-content: center;
  filter: none;
}`,
wrong: `.rating-stars-widget {
  WIDTH: auto
  MAX-WIDTH: 200px;
  min-hieght: 24px
  background-colr: transparent;
  COLOR: #f5a623
  DISPLAY: flex;
  FLEX-DIRECTION: row
  ALIGN-ITEMS: center;
  justify-content: flex-strt
  PADDING: 0;
  MARGIN: 0
  GAP: 2px;
  font-sze: 18px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 1
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  transtion: color 0.15s ease
  BORDER: none;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 80px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  FILTER: none
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix transtion; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase FILTER (no final semicolon)."
},


// ── H105 ──
{
correct: `.breadcrumb-navigation-trail {
  width: 100%;
  max-width: 800px;
  min-height: 0;
  background-color: transparent;
  color: #666666;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
  margin: 0;
  gap: 6px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-bottom: 1px solid #eeeeee;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  list-style-type: none;
  text-indent: 0;
}`,
wrong: `.breadcrumb-navigation-trail {
  widht: 100%
  MAX-WIDTH: 800px;
  min-hieght: 0
  background-colr: transparent;
  COLOR: #666666
  DISPLAY: flex;
  FLEX-DIRECTION: row
  ALIGN-ITEMS: center;
  justify-content: flex-strt
  paddng: 10px 0;
  MARGIN: 0
  GAP: 6px;
  font-sze: 13px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  bordr-bottom: 1px solid #eeeeee;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  overflow-x: ato;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  list-stle-type: none;
  TEXT-INDENT: 0
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix flex-strt+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-bottom; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; fix ato; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix list-stle-type; lowercase TEXT-INDENT (no final semicolon)."
},


// ── H106 ──
{
correct: `.chat-message-bubble {
  width: auto;
  max-width: 70%;
  min-height: 40px;
  background-color: #e1f5fe;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 16px;
  margin: 6px 0;
  gap: 4px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 16px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: pre-wrap;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 60px;
  flex-wrap: nowrap;
  align-content: flex-start;
  word-wrap: break-word;
}`,
wrong: `.chat-message-bubble {
  widht: auto
  MAX-WIDTH: 70%;
  min-hieght: 40px
  background-colr: #e1f5fe;
  COLOR: #1a1a1a
  DISPLAY: flex;
  FLEX-DIRECTION: column
  ALIGN-ITEMS: flex-start;
  JUSTIFY-CONTENT: center
  paddng: 10px 16px;
  MARGIN: 6px 0
  GAP: 4px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  BORDER: none;
  border-raduis: 16px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  white-spce: pre-wrap
  WORD-BREAK: break-word;
  VERTICAL-ALIGN: top
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 60px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  word-wrp: break-word;
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; lowercase JUSTIFY-CONTENT+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; fix white-spce+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix word-wrp (no final semicolon)."
},


// ── H107 ──
{
correct: `.product-comparison-row {
  width: 100%;
  max-width: 960px;
  min-height: 56px;
  background-color: white;
  color: #2a2a2a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  margin: 0;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.3;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.15s ease;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  table-layout: auto;
  border-collapse: collapse;
}`,
wrong: `.product-comparison-row {
  WIDTH: 100%
  max-widht: 960px;
  MIN-HEIGHT: 56px
  background-colr: white;
  COLOR: #2a2a2a
  display: flx;
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: space-betwen;
  paddng: 14px 20px
  MARGIN: 0;
  GAP: 12px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.3
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  transtion: background-color 0.15s ease;
  bordr-bottom: 1px solid #f0f0f0
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  table-layot: auto
  BORDER-COLLAPSE: collapse
}`,
totalMistakes: 49,
hint: "Lowercase WIDTH+semicolon; fix max-widht; lowercase MIN-HEIGHT+semicolon; fix background-colr; lowercase COLOR+semicolon; fix flx; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix space-betwen+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix transtion+semicolon; fix bordr-bottom; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix table-layot; lowercase BORDER-COLLAPSE (no final semicolon)."
},


// ── H108 ──
{
correct: `.faq-accordion-header {
  width: 100%;
  max-width: 720px;
  min-height: 52px;
  background-color: #f7f7f7;
  color: #1a1a1a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  margin: 0;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.2s ease;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  caret-color: transparent;
  resize: none;
}`,
wrong: `.faq-accordion-header {
  widht: 100%
  MAX-WIDTH: 720px;
  min-hieght: 52px
  background-colr: #f7f7f7;
  COLOR: #1a1a1a
  DISPLAY: flex;
  flex-directon: row
  ALIGN-ITEMS: center;
  justify-content: space-betwen
  paddng: 16px 20px;
  MARGIN: 0
  GAP: 10px;
  font-sze: 15px
  FONT-WEIGHT: 600;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: pointer;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: background-color 0.2s ease
  BORDER: 1px solid #e0e0e0;
  border-raduis: 6px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  caret-colr: transparent;
  RESIZE: none
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; fix flex-directon+semicolon; lowercase ALIGN-ITEMS; fix space-betwen+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix caret-colr; lowercase RESIZE (no final semicolon)."
},


// ── H109 ──
{
correct: `.avatar-profile-badge {
  width: 56px;
  height: 56px;
  min-height: 56px;
  background-color: #cccccc;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 18px;
  font-weight: 600;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #dddddd;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 56px;
  flex-wrap: nowrap;
  align-content: center;
  object-position: center;
  image-rendering: auto;
}`,
wrong: `.avatar-profile-badge {
  WIDTH: 56px
  HEIGHT: 56px;
  min-hieght: 56px
  background-colr: #cccccc;
  COLOR: white
  DISPLAY: flex;
  FLEX-DIRECTION: row
  ALIGN-ITEMS: center;
  justify-content: centr
  PADDING: 0;
  MARGIN: 0
  GAP: 0;
  font-sze: 18px
  FONT-WEIGHT: 600;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1;
  LETTER-SPACING: 0
  TEXT-ALIGN: center;
  postion: relative
  OVERFLOW: hidden;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  BORDER: 2px solid white;
  border-raduis: 50%
  BOX-SHADOW: 0 0 0 1px #dddddd;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 56px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  object-postion: center;
  IMAGE-RENDERING: auto
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; lowercase HEIGHT; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix centr+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix object-postion; lowercase IMAGE-RENDERING (no final semicolon)."
},


// ── H110 ──
{
correct: `.cookie-consent-banner {
  width: 100%;
  max-width: 100%;
  min-height: 72px;
  background-color: #222222;
  color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  margin: 0;
  gap: 20px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.3s ease;
  border-top: 1px solid #444444;
  border-radius: 0;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: center;
  bottom: 0;
  left: 0;
}`,
wrong: `.cookie-consent-banner {
  widht: 100%
  max-widht: 100%;
  min-hieght: 72px
  background-colr: #222222;
  COLOR: #f5f5f5
  DISPLAY: flex;
  FLEX-DIRECTION: row
  ALIGN-ITEMS: center;
  justify-content: space-betwen
  paddng: 16px 32px;
  MARGIN: 0
  GAP: 20px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.4;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  POSITION: fixed
  OVERFLOW: hidden;
  Z-INDEX: 9999
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  transtion: transform 0.3s ease
  bordr-top: 1px solid #444444;
  border-raduis: 0
  BOX-SHADOW: 0 -2px 10px rgba(0,0,0,0.3);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 320px
  flex-wrp: wrap;
  ALIGN-CONTENT: center
  BOTTOM: 0;
  LEFT: 0
}`,
totalMistakes: 49,
hint: "Fix widht+semicolon; fix max-widht; fix min-hieght+semicolon; fix background-colr; lowercase COLOR+semicolon; lowercase DISPLAY; lowercase FLEX-DIRECTION+semicolon; lowercase ALIGN-ITEMS; fix space-betwen+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; lowercase POSITION+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix transtion+semicolon; fix bordr-top; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; fix flex-wrp; lowercase ALIGN-CONTENT+semicolon; lowercase BOTTOM (missing semicolon); lowercase LEFT (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H111 - H120)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H111 ──
{
correct: `.dashboard-header-bar {
  width: 100%;
  max-width: 1280px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  margin: 0 auto;
  gap: 16px;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: left;
  position: sticky;
  overflow: hidden;
  z-index: 100;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-bottom: 2px solid #1a252f;
  border-radius: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 56px;
  top: 0;
}`,
wrong: `.dashboard-header-bar {
  widht: 100%
  MAX-WIDTH: 1280px;
  background-colr: #2c3e50
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: space-betwn;
  paddng: 12px 24px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 16px;
  FONT-WEIGHT: 600
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: sticky;
  OVERFLOW: hidden
  Z-INDEX: 100;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-bottom: 2px solid #1a252f
  border-raduis: 0;
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  min-hieght: 56px
  TOP: 0
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix space-betwn; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-bottom+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; lowercase TOP (no final semicolon)."
},


// ── H112 ──
{
correct: `.user-profile-card {
  width: 320px;
  max-width: 100%;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 24px;
  margin: 0 auto;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: box-shadow 0.2s ease;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-items: center;
  min-height: 200px;
}`,
wrong: `.user-profile-card {
  WIDTH: 320px
  MAX-WIDTH: 100%;
  background-colr: white
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: flex-start;
  paddng: 32px 24px
  MARGIN: 0 auto;
  GAP: 12px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: box-shadow 0.2s ease;
  BORDER: 1px solid #e0e0e0
  border-raduis: 16px;
  BOX-SHADOW: 0 4px 12px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 240px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  justify-itms: center
  min-hieght: 200px
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix justify-itms+semicolon; fix min-hieght (no final semicolon)."
},


// ── H113 ──
{
correct: `.sidebar-navigation-menu {
  width: 240px;
  min-height: 100vh;
  background-color: #1e1e2f;
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 20px 0;
  margin: 0;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 200;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: width 0.3s ease;
  border-right: 1px solid #2e2e4f;
  border-radius: 0;
  box-shadow: 4px 0 12px rgba(0,0,0,0.4);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 60px;
  max-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  left: 0;
  top: 0;
}`,
wrong: `.sidebar-navigation-menu {
  widht: 240px
  min-hieght: 100vh;
  background-colr: #1e1e2f
  COLOR: #eeeeee;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  PADDING: 20px 0
  MARGIN: 0;
  GAP: 4px
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 200;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: width 0.3s ease;
  bordr-right: 1px solid #2e2e4f
  border-raduis: 0;
  BOX-SHADOW: 4px 0 12px rgba(0,0,0,0.4)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 60px;
  MAX-WIDTH: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  LEFT: 0;
  TOP: 0
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix min-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-right+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase LEFT; lowercase TOP (no final semicolon)."
},


// ── H114 ──
{
correct: `.notification-toast-popup {
  width: auto;
  max-width: 360px;
  background-color: #323232;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  margin: 16px;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
  border: none;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.4);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 200px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 48px;
  bottom: 24px;
  right: 24px;
}`,
wrong: `.notification-toast-popup {
  WIDTH: auto
  MAX-WIDTH: 360px;
  background-colr: #323232
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: space-betwn;
  paddng: 14px 20px
  MARGIN: 16px;
  GAP: 12px
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 9999;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.3s ease;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 6px 16px rgba(0,0,0,0.4)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 200px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  min-hieght: 48px
  BOTOM: 24px;
  RIGHT: 24px
}`,
totalMistakes: 47,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix space-betwn; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr; fix min-hieght+semicolon; fix BOTOM; lowercase RIGHT (no final semicolon)."
},


// ── H115 ──
{
correct: `.image-gallery-grid {
  width: 100%;
  max-width: 1200px;
  background-color: #f0f0f0;
  color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  justify-content: center;
  padding: 24px;
  margin: 0 auto;
  gap: 16px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 320px;
  min-height: 400px;
  flex-wrap: nowrap;
  align-content: start;
}`,
wrong: `.image-gallery-grid {
  widht: 100%
  MAX-WIDTH: 1200px;
  background-colr: #f0f0f0
  COLOR: black;
  DISPLAY: grid
  grid-template-colums: repeat(3, 1fr);
  ALIGN-ITEMS: start
  justify-content: centr;
  paddng: 24px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 320px;
  min-hieght: 400px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: start
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix grid-template-colums; lowercase ALIGN-ITEMS+semicolon; fix centr; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; fix min-hieght+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT (no final semicolon)."
},


// ── H116 ──
{
correct: `.chat-message-bubble {
  width: auto;
  max-width: 480px;
  background-color: #e8f0fe;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 16px;
  margin: 4px 0;
  gap: 4px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: text;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 18px 18px 18px 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: pre-wrap;
  word-break: break-word;
  vertical-align: bottom;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 60px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 40px;
  max-height: 320px;
}`,
wrong: `.chat-message-bubble {
  WIDTH: auto
  MAX-WIDTH: 480px;
  background-colr: #e8f0fe
  COLOR: #1a1a1a;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: flex-start
  justify-content: flex-strt;
  paddng: 12px 16px
  MARGIN: 4px 0;
  GAP: 4px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: text
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 18px 18px 18px 4px;
  BOX-SHADOW: 0 1px 4px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: pre-wrap;
  WORD-BREAK: brek-word
  VERTICAL-ALIGN: bottom;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 60px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 40px
  MAX-HEIGHT: 320px
}`,
totalMistakes: 47,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; fix brek-word; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght+semicolon; lowercase MAX-HEIGHT (no final semicolon)."
},


// ── H117 ──
{
correct: `.pricing-plan-card {
  width: 300px;
  max-width: 100%;
  background-color: white;
  color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 28px;
  margin: 0;
  gap: 20px;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 480px;
  box-sizing: border-box;
}`,
wrong: `.pricing-plan-card {
  widht: 300px
  MAX-WIDTH: 100%;
  background-colr: white
  COLOR: #222222;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: space-between;
  paddng: 40px 28px
  MARGIN: 0;
  GAP: 20px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.2s ease;
  BORDER: 2px solid #e0e0e0
  border-raduis: 20px;
  BOX-SHADOW: 0 8px 24px rgba(0,0,0,0.08)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 240px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  min-hieght: 480px
  BOX-SIZNG: border-box
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; fix BOX-SIZNG (no final semicolon)."
},


// ── H118 ──
{
correct: `.breadcrumb-navigation {
  width: 100%;
  max-width: 960px;
  background-color: transparent;
  color: #666666;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 0;
  margin: 0 auto;
  gap: 8px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: none;
  min-width: 200px;
  flex-wrap: wrap;
  align-content: center;
  min-height: 32px;
  list-style: none;
}`,
wrong: `.breadcrumb-navigation {
  widht: 100%
  MAX-WIDTH: 960px;
  background-colr: transparent
  COLOR: #666666;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: flex-strt;
  PADDING: 8px 0
  MARGIN: 0 auto;
  GAP: 8px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: auto
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 200px;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: center;
  min-hieght: 32px
  LIST-STYL: none
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; fix LIST-STYL (no final semicolon)."
},


// ── H119 ──
{
correct: `.video-player-container {
  width: 100%;
  max-width: 854px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  min-height: 160px;
  flex-wrap: nowrap;
  align-content: center;
  aspect-ratio: 16 / 9;
}`,
wrong: `.video-player-container {
  widht: 100%
  MAX-WIDTH: 854px;
  BACKGROUND-COLOR: black
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: center;
  PADDING: 0
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 20px rgba(0,0,0,0.5)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 280px;
  min-hieght: 160px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  ASPECT-RATIO: 16 / 9
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; fix min-hieght+semicolon; lowercase FLEX-WRAP; fix centr+semicolon; lowercase ASPECT-RATIO (no final semicolon)."
},


// ── H120 ──
{
correct: `.footer-links-section {
  width: 100%;
  max-width: 1200px;
  background-color: #111111;
  color: #aaaaaa;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 48px 32px;
  margin: 0 auto;
  gap: 32px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.8;
  letter-spacing: 0.2px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-top: 1px solid #333333;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: flex-start;
  min-height: 200px;
  border-collapse: separate;
}`,
wrong: `.footer-links-section {
  widht: 100%
  MAX-WIDTH: 1200px;
  background-colr: #111111
  COLOR: #aaaaaa;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: flex-start
  justify-content: space-betwn;
  paddng: 48px 32px
  MARGIN: 0 auto;
  GAP: 32px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.8
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-top: 1px solid #333333
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 200px
  BORDER-COLAPSE: separate
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix space-betwn; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-top+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; fix BORDER-COLAPSE (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H121 - H130)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H121 ──
{
correct: `.search-results-wrapper {
  width: 100%;
  max-width: 800px;
  background-color: white;
  color: #222222;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 16px 0;
  margin: 0 auto;
  gap: 12px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 200px;
  scroll-behavior: smooth;
}`,
wrong: `.search-results-wrapper {
  widht: 100%
  MAX-WIDTH: 800px;
  background-colr: white
  COLOR: #222222;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  paddng: 16px 0
  MARGIN: 0 auto;
  GAP: 12px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 200px
  SCROLL-BEHAVOR: smooth
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; fix SCROLL-BEHAVOR (no final semicolon)."
},


// ── H122 ──
{
correct: `.modal-overlay-backdrop {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: fixed;
  overflow: hidden;
  z-index: 9000;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.25s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 100vw;
  flex-wrap: nowrap;
  align-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}`,
wrong: `.modal-overlay-backdrop {
  WIDHT: 100vw
  HIEGHT: 100vh;
  background-colr: rgba(0,0,0,0.6)
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: center;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 9000;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.25s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 100vw;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: center;
  TOP: 0
  LEFT: 0;
  RGHT: 0
  BOTOM: 0
}`,
totalMistakes: 48,
hint: "Fix WIDHT+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; lowercase TOP+semicolon; lowercase LEFT; fix RGHT+semicolon; fix BOTOM (no final semicolon)."
},


// ── H123 ──
{
correct: `.data-table-container {
  width: 100%;
  max-width: 1100px;
  background-color: white;
  color: #333333;
  display: block;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: auto;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 120px;
  border-spacing: 0;
  border-collapse: collapse;
}`,
wrong: `.data-table-container {
  widht: 100%
  MAX-WIDTH: 1100px;
  background-colr: white
  COLOR: #333333;
  DISPLAY: block
  OVERFLOW-X: auto;
  OVERFLOW-Y: hidden
  PADDING: 0;
  MARGIN: 0 auto
  GAP: 0;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: auto;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  BORDER: 1px solid #dddddd;
  border-raduis: 8px
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.06);
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: text
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  background-imge: none;
  MIN-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  min-hieght: 120px;
  BORDER-SPACNG: 0
  border-colapse: collapse
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; lowercase PADDING; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght; fix BORDER-SPACNG+semicolon; fix border-colapse (no final semicolon)."
},


// ── H124 ──
{
correct: `.hero-banner-section {
  width: 100%;
  min-height: 520px;
  background-color: #0d0d0d;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 32px;
  margin: 0;
  gap: 24px;
  font-size: 18px;
  font-weight: 700;
  font-family: Georgia;
  line-height: 1.3;
  letter-spacing: 0.5px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  text-transform: uppercase;
}`,
wrong: `.hero-banner-section {
  widht: 100%
  min-hieght: 520px;
  background-colr: #0d0d0d
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: center;
  paddng: 80px 32px
  MARGIN: 0;
  GAP: 24px
  font-sze: 18px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.3
  LETTER-SPACING: 0.5px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  TEXT-TRANSFOM: uppercase
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; fix min-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr+semicolon; fix TEXT-TRANSFOM (no final semicolon)."
},


// ── H125 ──
{
correct: `.file-upload-dropzone {
  width: 100%;
  max-width: 560px;
  background-color: #f9f9f9;
  color: #555555;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  margin: 0 auto;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: border-color 0.2s ease;
  border: 2px dashed #cccccc;
  border-radius: 12px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 200px;
  box-sizing: border-box;
}`,
wrong: `.file-upload-dropzone {
  widht: 100%
  MAX-WIDTH: 560px;
  background-colr: #f9f9f9
  COLOR: #555555;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  justify-content: centr;
  paddng: 48px 32px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: border-color 0.2s ease;
  BORDER: 2px dashed #cccccc
  border-raduis: 12px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: brek-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 240px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  min-hieght: 200px
  BOX-SIZNG: border-box
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix centr; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; fix brek-word; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr+semicolon; fix min-hieght+semicolon; fix BOX-SIZNG (no final semicolon)."
},


// ── H126 ──
{
correct: `.comment-section-block {
  width: 100%;
  max-width: 720px;
  background-color: #fafafa;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 24px;
  margin: 0 auto;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-top: 2px solid #e0e0e0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 120px;
  resize: none;
}`,
wrong: `.comment-section-block {
  widht: 100%
  MAX-WIDTH: 720px;
  background-colr: #fafafa
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  paddng: 24px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-top: 2px solid #e0e0e0
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: brek-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 120px
  REZISE: none
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-top+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; fix brek-word; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght+semicolon; fix REZISE (no final semicolon)."
},


// ── H127 ──
{
correct: `.tag-chip-label {
  width: auto;
  max-width: 200px;
  background-color: #e3f2fd;
  color: #1565c0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  margin: 4px;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.3px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.2s ease;
  border: 1px solid #90caf9;
  border-radius: 999px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 48px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 28px;
  text-transform: lowercase;
}`,
wrong: `.tag-chip-label {
  WIDTH: auto
  MAX-WIDTH: 200px;
  background-colr: #e3f2fd
  COLOR: #1565c0;
  DISPLAY: inline-flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  justify-content: center;
  paddng: 4px 12px
  MARGIN: 4px;
  GAP: 6px
  font-sze: 12px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.3px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.2s ease;
  BORDER: 1px solid #90caf9
  border-raduis: 999px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 48px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  min-hieght: 28px
  TEXT-TRANSFOM: lowercase
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr; fix min-hieght+semicolon; fix TEXT-TRANSFOM (no final semicolon)."
},


// ── H128 ──
{
correct: `.kanban-board-column {
  width: 280px;
  min-height: 400px;
  background-color: #f4f5f7;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 12px;
  margin: 0 8px;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 240px;
  max-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  flex-shrink: 0;
}`,
wrong: `.kanban-board-column {
  widht: 280px
  min-hieght: 400px;
  background-colr: #f4f5f7
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  paddng: 12px
  MARGIN: 0 8px;
  GAP: 8px
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 240px;
  MAX-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-start
  FLEX-SHRNK: 0
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; fix min-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix FLEX-SHRNK (no final semicolon)."
},


// ── H129 ──
{
correct: `.tooltip-popup-box {
  width: auto;
  max-width: 240px;
  background-color: #333333;
  color: white;
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 12px;
  margin: 0;
  gap: 0;
  font-size: 12px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: left;
  position: absolute;
  overflow: hidden;
  z-index: 9999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.15s ease;
  border: none;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: none;
  user-select: none;
  text-decoration: none;
  white-space: wrap;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 80px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 28px;
  word-wrap: break-word;
}`,
wrong: `.tooltip-popup-box {
  WIDTH: auto
  MAX-WIDTH: 240px;
  background-colr: #333333
  COLOR: white;
  DISPLAY: inline-block
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: flex-start
  justify-content: flex-strt;
  paddng: 8px 12px
  MARGIN: 0;
  GAP: 0
  font-sze: 12px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: absolute;
  OVERFLOW: hidden
  Z-INDEX: 9999;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.15s ease;
  BORDER: none
  border-raduis: 6px;
  BOX-SHADOW: 0 4px 12px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: none
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: wrap;
  WORD-BREAK: brek-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 80px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 28px
  WORD-WARP: break-word
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; fix brek-word; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix min-hieght+semicolon; fix WORD-WARP (no final semicolon)."
},


// ── H130 ──
{
correct: `.progress-bar-track {
  width: 100%;
  max-width: 480px;
  background-color: #e0e0e0;
  color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 8px auto;
  gap: 0;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 999px;
  box-shadow: inset 0 1px 4px rgba(0,0,0,0.15);
  outline: none;
  pointer-events: none;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 120px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 8px;
  max-height: 20px;
}`,
wrong: `.progress-bar-track {
  widht: 100%
  MAX-WIDTH: 480px;
  background-colr: #e0e0e0
  COLOR: transparent;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: flex-strt;
  PADDING: 0
  MARGIN: 8px auto;
  GAP: 0
  font-sze: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 999px;
  BOX-SHADOW: inset 0 1px 4px rgba(0,0,0,0.15)
  OUTLINE: none;
  POINTER-EVENTS: none
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 120px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  min-hieght: 8px
  MAX-HIEGHT: 20px
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr; fix min-hieght+semicolon; fix MAX-HIEGHT (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H131 - H140)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H131 ──
{
correct: `.tab-navigation-bar {
  width: 100%;
  max-width: 960px;
  background-color: white;
  color: #444444;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 16px;
  margin: 0 auto;
  gap: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 10;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-bottom: 2px solid #e0e0e0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: bottom;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-end;
  min-height: 44px;
  scroll-behavior: smooth;
}`,
wrong: `.tab-navigation-bar {
  widht: 100%
  MAX-WIDTH: 960px;
  background-colr: white
  COLOR: #444444;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: flex-end
  justify-content: flex-strt;
  paddng: 0 16px
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 10;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-bottom: 2px solid #e0e0e0
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: botom;
  OVERFLOW-X: auto
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-end;
  min-hieght: 44px
  SCROLL-BEHAVOR: smooth
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-bottom+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; fix botom; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; fix SCROLL-BEHAVOR (no final semicolon)."
},


// ── H132 ──
{
correct: `.rating-stars-widget {
  width: auto;
  max-width: 200px;
  background-color: transparent;
  color: #f5a623;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 0;
  margin: 0;
  gap: 4px;
  font-size: 20px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 2px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: color 0.2s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 80px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 28px;
  direction: ltr;
}`,
wrong: `.rating-stars-widget {
  WIDTH: auto
  MAX-WIDTH: 200px;
  background-colr: transparent
  COLOR: #f5a623;
  DISPLAY: inline-flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  justify-content: flex-start;
  PADDING: 4px 0
  MARGIN: 0;
  GAP: 4px
  font-sze: 20px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 2px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: color 0.2s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 80px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  min-hieght: 28px
  DIRECSHON: ltr
}`,
totalMistakes: 45,
hint: "Lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr; fix min-hieght+semicolon; fix DIRECSHON (no final semicolon)."
},


// ── H133 ──
{
correct: `.sticky-note-card {
  width: 220px;
  height: 220px;
  background-color: #fff9c4;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  margin: 12px;
  gap: 8px;
  font-size: 13px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: grab;
  opacity: 1;
  visibility: visible;
  transition: box-shadow 0.2s ease;
  border: none;
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.15);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: pre-wrap;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 160px;
  flex-wrap: nowrap;
  align-content: flex-start;
  rotate: 1deg;
  transform-origin: top left;
}`,
wrong: `.sticky-note-card {
  widht: 220px
  HIEGHT: 220px;
  background-colr: #fff9c4
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: flex-start
  justify-content: flex-strt;
  paddng: 16px
  MARGIN: 12px;
  GAP: 8px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: grab
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: box-shadow 0.2s ease;
  BORDER: none
  border-raduis: 4px;
  BOX-SHADOW: 4px 4px 10px rgba(0,0,0,0.15)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: pre-wrap;
  WORD-BREAK: brek-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 160px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  ROTAT: 1deg
  TRANSFORM-ORGIN: top left
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; fix brek-word; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix ROTAT+semicolon; fix TRANSFORM-ORGIN (no final semicolon)."
},


// ── H134 ──
{
correct: `.cookie-consent-banner {
  width: 100%;
  max-width: 100%;
  background-color: #1a1a1a;
  color: #dddddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  margin: 0;
  gap: 20px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-top: 1px solid #444444;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: center;
  min-height: 64px;
  bottom: 0;
  left: 0;
  right: 0;
}`,
wrong: `.cookie-consent-banner {
  widht: 100%
  MAX-WIDTH: 100%;
  background-colr: #1a1a1a
  COLOR: #dddddd;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  justify-content: space-betwn;
  paddng: 16px 32px
  MARGIN: 0;
  GAP: 20px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 9999;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-top: 1px solid #444444
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: centr;
  min-hieght: 64px
  BOTOM: 0;
  LEFT: 0
  RGHT: 0
}`,
totalMistakes: 48,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; fix space-betwn; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-top+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr; fix min-hieght+semicolon; fix BOTOM; lowercase LEFT+semicolon; fix RGHT (no final semicolon)."
},


// ── H135 ──
{
correct: `.avatar-image-circle {
  width: 56px;
  height: 56px;
  background-color: #cccccc;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 22px;
  font-weight: 700;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 56px;
  max-width: 56px;
  flex-wrap: nowrap;
  align-content: center;
  object-fit: cover;
  flex-shrink: 0;
}`,
wrong: `.avatar-image-circle {
  widht: 56px
  HIEGHT: 56px;
  background-colr: #cccccc
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: center;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 22px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.2s ease;
  BORDER: 2px solid white
  border-raduis: 50%;
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.2)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 56px;
  MAX-WIDTH: 56px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  OBJECT-FIT: cover;
  FLEX-SHRNK: 0
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr+semicolon; lowercase OBJECT-FIT; fix FLEX-SHRNK (no final semicolon)."
},


// ── H136 ──
{
correct: `.map-embed-container {
  width: 100%;
  max-width: 900px;
  background-color: #e5e3df;
  color: transparent;
  display: block;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #cccccc;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 300px;
  aspect-ratio: 16 / 9;
}`,
wrong: `.map-embed-container {
  widht: 100%
  MAX-WIDTH: 900px;
  background-colr: #e5e3df
  COLOR: transparent;
  DISPLAY: block
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  PADDING: 0
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 1px solid #cccccc
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.12)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 300px
  ASPECT-RATIE: 16 / 9
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; fix ASPECT-RATIE (no final semicolon)."
},


// ── H137 ──
{
correct: `.hamburger-menu-button {
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0;
  gap: 5px;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 100;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 40px;
  max-width: 40px;
  flex-wrap: nowrap;
  align-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
}`,
wrong: `.hamburger-menu-button {
  widht: 40px
  HIEGHT: 40px;
  background-colr: transparent
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: center;
  paddng: 8px
  MARGIN: 0;
  GAP: 5px
  font-sze: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 100;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.2s ease;
  BORDER: none
  border-raduis: 4px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 40px;
  MAX-WIDTH: 40px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  FLEX-SHRNK: 0;
  BOX-SIZNG: border-box
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr; lowercase ALIGN-ITEMS+semicolon; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr+semicolon; fix FLEX-SHRNK; fix BOX-SIZNG (no final semicolon)."
},


// ── H138 ──
{
correct: `.order-summary-panel {
  width: 360px;
  max-width: 100%;
  background-color: #f7f7f7;
  color: #222222;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 24px;
  margin: 0;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: sticky;
  overflow: hidden;
  z-index: 10;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 400px;
  top: 20px;
}`,
wrong: `.order-summary-panel {
  widht: 360px
  MAX-WIDTH: 100%;
  background-colr: #f7f7f7
  COLOR: #222222;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  paddng: 24px
  MARGIN: 0;
  GAP: 16px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: sticky;
  OVERFLOW: hidden
  Z-INDEX: 10;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 1px solid #e0e0e0
  border-raduis: 12px;
  BOX-SHADOW: 0 2px 12px rgba(0,0,0,0.06)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  min-hieght: 400px
  TOP: 20px
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix flex-strt; fix min-hieght+semicolon; lowercase TOP (no final semicolon)."
},


// ── H139 ──
{
correct: `.skeleton-loader-block {
  width: 100%;
  max-width: 480px;
  background-color: #e0e0e0;
  color: transparent;
  display: block;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0;
  margin: 8px 0;
  gap: 0;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 6px;
  box-shadow: none;
  outline: none;
  pointer-events: none;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  min-width: 80px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 16px;
  animation: shimmer 1.5s infinite;
}`,
wrong: `.skeleton-loader-block {
  widht: 100%
  MAX-WIDTH: 480px;
  BACKGROUND-COLOR: #e0e0e0
  COLOR: transparent;
  DISPLAY: block
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  PADDING: 0
  MARGIN: 8px 0;
  GAP: 0
  font-sze: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 6px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: none
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)
  MIN-WIDTH: 80px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 16px
  ANIMASHON: shimmer 1.5s infinite
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; fix ANIMASHON (no final semicolon)."
},


// ── H140 ──
{
correct: `.testimonial-quote-card {
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 36px 32px;
  margin: 0 auto;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.7;
  letter-spacing: 0.2px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-left: 4px solid #4a90e2;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 160px;
  font-style: italic;
}`,
wrong: `.testimonial-quote-card {
  widht: 100%
  MAX-WIDTH: 600px;
  background-colr: #ffffff
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: flex-start
  justify-content: space-betwn;
  paddng: 36px 32px
  MARGIN: 0 auto;
  GAP: 20px
  font-sze: 16px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.7
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-left: 4px solid #4a90e2
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 20px rgba(0,0,0,0.07)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-start;
  min-hieght: 160px
  FONT-STYL: italic
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix space-betwn; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; fix bordr-left+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; lowercase ALIGN-CONTENT; fix min-hieght+semicolon; fix FONT-STYL (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H141 - H150)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H141 ──
{
correct: `.hero-banner-section {
  width: 100%;
  min-height: 500px;
  background-color: #0d1117;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  margin: 0;
  gap: 24px;
  font-size: 18px;
  font-weight: 700;
  font-family: Georgia;
  line-height: 1.4;
  letter-spacing: 0.5px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  min-width: 320px;
}`,
wrong: `.hero-banner-section {
  widht: 100%
  MIN-HEIGHT: 500px;
  background-colr: #0d1117
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: center;
  paddng: 60px 40px
  MARGIN: 0;
  GAP: 24px
  font-sze: 18px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.5px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  min-widht: 320px
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MIN-HEIGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; fix min-widht (no final semicolon)."
},


// ── H142 ──
{
correct: `.sidebar-navigation-menu {
  width: 280px;
  height: 100vh;
  background-color: #1e2a38;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 20px;
  margin: 0;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.2px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 100;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.3s ease;
  border-right: 2px solid #2c3e50;
  border-radius: 0;
  box-shadow: 4px 0 12px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 240px;
  max-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
}`,
wrong: `.sidebar-navigation-menu {
  WIDTH: 280px
  HIEGHT: 100vh;
  background-colr: #1e2a38
  COLOR: #ecf0f1;
  DISPLAY: flex
  flex-directon: column;
  ALIGN-ITEMS: flex-strt
  justify-content: flex-strt;
  paddng: 32px 20px
  MARGIN: 0;
  GAP: 8px
  font-sze: 15px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 100;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.3s ease;
  bordr-right: 2px solid #2c3e50
  BORDER-RADIUS: 0;
  BOX-SHADOW: 4px 0 12px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  overflow-y: auto;
  background-imge: none
  MIN-WIDTH: 240px;
  MAX-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-strt
}`,
totalMistakes: 46,
hint: "Lowercase WIDTH+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-directon; fix flex-strt in ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix bordr-right+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT (no final semicolon)."
},


// ── H143 ──
{
correct: `.modal-overlay-backdrop {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0px;
  text-align: center;
  position: fixed;
  overflow: hidden;
  z-index: 999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 100%;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  top: 0;
  left: 0;
}`,
wrong: `.modal-overlay-backdrop {
  widht: 100vw
  HIEGHT: 100vh;
  background-colr: rgba(0,0,0,0.6)
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  justify-content: centr;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0px;
  TEXT-ALIGN: center
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 999;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.2s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 100%;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: center
  TOP: 0;
  LEFT: 0
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase PADDING+semicolon; fix centr in justify-content; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; lowercase TOP; lowercase LEFT (no final semicolon)."
},


// ── H144 ──
{
correct: `.profile-card-container {
  width: 320px;
  min-height: 400px;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 24px;
  margin: 0 auto;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: box-shadow 0.3s ease;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  max-width: 360px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-width: 280px;
}`,
wrong: `.profile-card-container {
  WIDHT: 320px
  MIN-HIEGHT: 400px;
  background-colr: white
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  justify-content: flex-strt;
  paddng: 32px 24px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: box-shadow 0.3s ease;
  BORDER: 1px solid #e0e0e0
  border-raduis: 16px;
  BOX-SHADOW: 0 2px 12px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  word-brek: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MAX-WIDTH: 360px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  MIN-WIDTH: 280px
}`,
totalMistakes: 47,
hint: "Fix WIDHT+semicolon (case+spelling); fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; fix word-brek+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; fix flex-strt in ALIGN-CONTENT; lowercase MIN-WIDTH (no final semicolon)."
},


// ── H145 ──
{
correct: `.dashboard-stats-grid {
  width: 100%;
  max-width: 1200px;
  background-color: #f4f6f8;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  justify-content: center;
  padding: 24px;
  margin: 0 auto;
  gap: 20px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 12px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: flex-start;
  min-height: 200px;
}`,
wrong: `.dashboard-stats-grid {
  widht: 100%
  MAX-WIDTH: 1200px;
  background-colr: #f4f6f8
  COLOR: #2c3e50;
  DISPLAY: grid
  grid-templet-columns: repeat(4, 1fr);
  ALIGN-ITEMS: stretch
  justify-content: centr;
  PADDING: 24px
  MARGIN: 0 auto;
  GAP: 20px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 12px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: flex-strt;
  MIN-HIEGHT: 200px
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix grid-templet-columns; lowercase ALIGN-ITEMS+semicolon; fix centr in justify-content; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix flex-strt in ALIGN-CONTENT; fix MIN-HIEGHT (no final semicolon)."
},


// ── H146 ──
{
correct: `.notification-toast-bar {
  width: auto;
  min-width: 300px;
  background-color: #323232;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  margin: 0;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.3s ease, opacity 0.3s ease;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  max-width: 480px;
  flex-wrap: nowrap;
  align-content: center;
  bottom: 24px;
  right: 24px;
}`,
wrong: `.notification-toast-bar {
  WIDTH: auto
  min-widht: 300px;
  background-colr: #323232
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  justify-content: space-betwn;
  paddng: 14px 20px
  MARGIN: 0;
  GAP: 12px
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 9999;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.3s ease, opacity 0.3s ease;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MAX-WIDTH: 480px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  BOTTOM: 24px
  RIGHT: 24px
}`,
totalMistakes: 48,
hint: "Lowercase WIDTH+semicolon; fix min-widht; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix space-betwn in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase BOTTOM+semicolon; lowercase RIGHT (no final semicolon)."
},


// ── H147 ──
{
correct: `.pricing-table-card {
  width: 300px;
  min-height: 480px;
  background-color: white;
  color: #1a1a2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 28px;
  margin: 0;
  gap: 20px;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  max-width: 340px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-width: 260px;
}`,
wrong: `.pricing-table-card {
  WIDHT: 300px
  MIN-HIEGHT: 480px;
  background-colr: white
  COLOR: #1a1a2e;
  DISPLAY: flex
  flex-directon: column;
  ALIGN-ITEMS: center
  justify-content: flex-strt;
  paddng: 40px 28px
  MARGIN: 0;
  GAP: 20px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.2s ease;
  BORDER: 2px solid #e0e0e0
  border-raduis: 20px;
  BOX-SHADOW: 0 6px 24px rgba(0,0,0,0.08)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  text-decoraton: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MAX-WIDTH: 340px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  min-widht: 260px
}`,
totalMistakes: 48,
hint: "Fix WIDHT+semicolon (case+spelling); fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-directon; lowercase ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; fix text-decoraton+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT+semicolon; fix min-widht (no final semicolon)."
},


// ── H148 ──
{
correct: `.breadcrumb-navigation-bar {
  width: 100%;
  height: 48px;
  background-color: transparent;
  color: #555555;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 24px;
  margin: 0;
  gap: 8px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-bottom: 1px solid #eeeeee;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 200px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  list-style: none;
}`,
wrong: `.breadcrumb-navigation-bar {
  widht: 100%
  HIEGHT: 48px;
  background-colr: transparent
  COLOR: #555555;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  justify-content: flex-strt;
  paddng: 0 24px
  MARGIN: 0;
  GAP: 8px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-bottom: 1px solid #eeeeee
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 200px;
  MAX-WIDTH: 100%
  flex-warp: nowrap;
  ALIGN-CONTENT: center
  LIST-STYLE: none
}`,
totalMistakes: 49,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix bordr-bottom+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; fix flex-warp; lowercase ALIGN-CONTENT+semicolon; lowercase LIST-STYLE (no final semicolon)."
},


// ── H149 ──
{
correct: `.search-results-wrapper {
  width: 100%;
  max-width: 800px;
  background-color: white;
  color: #202124;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 16px 0;
  margin: 0 auto;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.58;
  letter-spacing: 0px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 100px;
  list-style: none;
}`,
wrong: `.search-results-wrapper {
  widht: 100%
  MAX-WIDTH: 800px;
  background-colr: white
  COLOR: #202124;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  paddng: 16px 0
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.58
  LETTER-SPACING: 0px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  word-brek: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  min-widht: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  MIN-HIEGHT: 100px
  LIST-STYLE: none
}`,
totalMistakes: 49,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; fix word-brek+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; lowercase FLEX-WRAP+semicolon; fix flex-strt in ALIGN-CONTENT; fix MIN-HIEGHT+semicolon; lowercase LIST-STYLE (no final semicolon)."
},


// ── H150 ──
{
correct: `.footer-copyright-strip {
  width: 100%;
  height: 60px;
  background-color: #111111;
  color: #aaaaaa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 0;
  gap: 16px;
  font-size: 12px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.3px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-top: 1px solid #222222;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  list-style: none;
  text-transform: none;
}`,
wrong: `.footer-copyright-strip {
  widht: 100%
  HIEGHT: 60px;
  background-colr: #111111
  COLOR: #aaaaaa;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  justify-content: space-betwn;
  paddng: 0 40px
  MARGIN: 0;
  GAP: 16px
  font-sze: 12px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.3px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-top: 1px solid #222222
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  flex-warp: nowrap;
  ALIGN-CONTENT: centr
  LIST-STYLE: none;
  TEXT-TRANSFROM: none
}`,
totalMistakes: 50,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix space-betwn in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix bordr-top+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; fix flex-warp; fix centr in ALIGN-CONTENT+semicolon; lowercase LIST-STYLE; fix TEXT-TRANSFROM (no final semicolon)."
},


/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H151 - H160)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H151 ──
{
correct: `.tab-switcher-panel {
  width: 100%;
  min-height: 48px;
  background-color: #ffffff;
  color: #333333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  margin: 0;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-bottom: 2px solid #e0e0e0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  list-style: none;
}`,
wrong: `.tab-switcher-panel {
  widht: 100%
  MIN-HIEGHT: 48px;
  background-colr: #ffffff
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  justify-content: flex-strt;
  paddng: 0 16px
  MARGIN: 0;
  GAP: 4px
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 2;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-bottom: 2px solid #e0e0e0
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: auto
  OVERFLOW-Y: hidden;
  background-imge: none
  min-widht: 240px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  LIST-STYLE: none
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix bordr-bottom+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase LIST-STYLE (no final semicolon)."
},


// ── H152 ──
{
correct: `.image-gallery-grid {
  width: 100%;
  max-width: 1100px;
  background-color: #f0f0f0;
  color: #222222;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  justify-content: center;
  padding: 32px;
  margin: 0 auto;
  gap: 16px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  flex-wrap: wrap;
  align-content: start;
  min-height: 300px;
}`,
wrong: `.image-gallery-grid {
  widht: 100%
  MAX-WIDTH: 1100px;
  background-colr: #f0f0f0
  COLOR: #222222;
  DISPLAY: grid
  grid-templet-columns: repeat(3, 1fr);
  ALIGN-ITEMS: strt
  justify-content: centr;
  PADDING: 32px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  overflow-y: visible;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: wrap
  ALIGN-CONTENT: strt;
  MIN-HIEGHT: 300px
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix grid-templet-columns; fix strt in ALIGN-ITEMS+semicolon; fix centr in justify-content; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix strt in ALIGN-CONTENT; fix MIN-HIEGHT (no final semicolon)."
},


// ── H153 ──
{
correct: `.video-player-wrapper {
  width: 100%;
  max-width: 960px;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  max-height: 540px;
  flex-wrap: nowrap;
  align-content: center;
  aspect-ratio: 16 / 9;
}`,
wrong: `.video-player-wrapper {
  widht: 100%
  MAX-WIDTH: 960px;
  background-colr: #000000
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: center;
  PADDING: 0
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 8px 32px rgba(0,0,0,0.5)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  min-widht: 280px;
  MAX-HIEGHT: 540px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  aspect-raitio: 16 / 9
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; fix MAX-HIEGHT+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; fix aspect-raitio (no final semicolon)."
},


// ── H154 ──
{
correct: `.cookie-consent-banner {
  width: 100%;
  min-height: 80px;
  background-color: #1c1c1c;
  color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  margin: 0;
  gap: 24px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 9998;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.4s ease;
  border-top: 1px solid #333333;
  border-radius: 0;
  box-shadow: 0 -4px 16px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  bottom: 0;
  left: 0;
}`,
wrong: `.cookie-consent-banner {
  widht: 100%
  MIN-HIEGHT: 80px;
  background-colr: #1c1c1c
  COLOR: #f5f5f5;
  DISPLAY: flex
  flex-directon: row;
  ALIGN-ITEMS: center
  justify-content: space-betwn;
  paddng: 20px 40px
  MARGIN: 0;
  GAP: 24px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 9998;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.4s ease;
  bordr-top: 1px solid #333333
  BORDER-RADIUS: 0;
  BOX-SHADOW: 0 -4px 16px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  BOTTOM: 0;
  LEFT: 0
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-directon; lowercase ALIGN-ITEMS+semicolon; fix space-betwn in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix bordr-top+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase BOTTOM; lowercase LEFT (no final semicolon)."
},


// ── H155 ──
{
correct: `.product-image-zoom {
  width: 480px;
  height: 480px;
  background-color: #fafafa;
  color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 0;
  gap: 0;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: zoom-in;
  opacity: 1;
  visibility: visible;
  transition: transform 0.3s ease;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 520px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 320px;
}`,
wrong: `.product-image-zoom {
  WIDHT: 480px
  HIEGHT: 480px;
  background-colr: #fafafa
  COLOR: transparent;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  JUSTIFY-CONTENT: center;
  paddng: 16px
  MARGIN: 0;
  GAP: 0
  FONT-SIZE: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  cursor: zoom-n
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.3s ease;
  BORDER: 1px solid #e0e0e0
  border-raduis: 12px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  min-widht: 320px;
  MAX-WIDTH: 520px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  MIN-HIEGHT: 320px
}`,
totalMistakes: 47,
hint: "Fix WIDHT+semicolon (case+spelling); fix HIEGHT (case+spelling); fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; lowercase FONT-SIZE; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; fix zoom-n in cursor+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; fix MIN-HIEGHT (no final semicolon)."
},


// ── H156 ──
{
correct: `.user-avatar-circle {
  width: 64px;
  height: 64px;
  background-color: #3498db;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 24px;
  font-weight: 700;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 64px;
  max-width: 64px;
  flex-wrap: nowrap;
  align-content: center;
  flex-shrink: 0;
  object-fit: cover;
}`,
wrong: `.user-avatar-circle {
  WIDTH: 64px
  HIEGHT: 64px;
  background-colr: #3498db
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: centr;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 24px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.2s ease;
  BORDER: none
  border-raduis: 50%;
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.2)
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 64px;
  MAX-WIDTH: 64px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  flex-srhink: 0;
  OBJECT-FIT: cover
}`,
totalMistakes: 48,
hint: "Lowercase WIDTH+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix centr in JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; fix flex-srhink; lowercase OBJECT-FIT (no final semicolon)."
},


// ── H157 ──
{
correct: `.settings-form-section {
  width: 100%;
  max-width: 680px;
  background-color: white;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 32px;
  margin: 0 auto;
  gap: 24px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #dddddd;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 300px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 400px;
  box-sizing: border-box;
}`,
wrong: `.settings-form-section {
  widht: 100%
  MAX-WIDTH: 680px;
  background-colr: white
  COLOR: #1a1a1a;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  paddng: 32px
  MARGIN: 0 auto;
  GAP: 24px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 1px solid #dddddd
  border-raduis: 10px;
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.06)
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 300px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  MIN-HIEGHT: 400px
  BOX-SIZING: border-box
}`,
totalMistakes: 48,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix flex-strt in ALIGN-CONTENT; fix MIN-HIEGHT+semicolon; lowercase BOX-SIZING (no final semicolon)."
},


// ── H158 ──
{
correct: `.comment-thread-item {
  width: 100%;
  min-height: 80px;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  margin: 0;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: flex-start;
  box-sizing: border-box;
}`,
wrong: `.comment-thread-item {
  widht: 100%
  MIN-HIEGHT: 80px;
  background-colr: white
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: flex-strt
  justify-content: flex-strt;
  paddng: 16px
  MARGIN: 0;
  GAP: 12px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-bottom: 1px solid #f0f0f0
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  word-brek: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  min-widht: 280px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-strt
  BOX-SIZING: border-box
}`,
totalMistakes: 49,
hint: "Fix widht+semicolon; fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix flex-strt in ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix bordr-bottom+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; fix word-brek+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT+semicolon; lowercase BOX-SIZING (no final semicolon)."
},


// ── H159 ──
{
correct: `.map-embed-container {
  width: 100%;
  height: 400px;
  background-color: #e8e8e8;
  color: transparent;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: grab;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  max-width: 1200px;
  flex-wrap: nowrap;
  align-content: stretch;
  min-height: 300px;
  max-height: 600px;
}`,
wrong: `.map-embed-container {
  widht: 100%
  HIEGHT: 400px;
  background-colr: #e8e8e8
  COLOR: transparent;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  JUSTIFY-CONTENT: stretch;
  PADDING: 0
  MARGIN: 0 auto;
  GAP: 0
  FONT-SIZE: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  cursor: grb
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 20px rgba(0,0,0,0.15)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  min-widht: 280px;
  MAX-WIDTH: 1200px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: stretch
  MIN-HIEGHT: 300px;
  MAX-HIEGHT: 600px
}`,
totalMistakes: 49,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; lowercase FONT-SIZE; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; fix grb in cursor+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; lowercase ALIGN-CONTENT+semicolon; fix MIN-HIEGHT; fix MAX-HIEGHT (no final semicolon)."
},


// ── H160 ──
{
correct: `.upload-dropzone-area {
  width: 100%;
  min-height: 200px;
  background-color: #f8faff;
  color: #5a7af0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
  margin: 0 auto;
  gap: 16px;
  font-size: 15px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  border: 2px dashed #5a7af0;
  border-radius: 16px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  max-width: 640px;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  box-sizing: border-box;
  min-height: 200px;
}`,
wrong: `.upload-dropzone-area {
  widht: 100%
  MIN-HIEGHT: 200px;
  background-colr: #f8faff
  COLOR: #5a7af0;
  DISPLAY: flex
  flex-directon: column;
  ALIGN-ITEMS: centr
  justify-content: centr;
  paddng: 40px 32px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 15px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-color 0.2s ease, border-color 0.2s ease;
  BORDER: 2px dashed #5a7af0
  border-raduis: 16px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MAX-WIDTH: 640px;
  min-widht: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  BOX-SIZING: border-box;
  MIN-HIEGHT: 200px
}`,
totalMistakes: 50,
hint: "Fix widht+semicolon; fix MIN-HIEGHT (first); fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-directon; fix centr in ALIGN-ITEMS+semicolon; fix centr in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; fix min-widht+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase BOX-SIZING; fix MIN-HIEGHT (last) (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H161 - H170)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H161 ──
{
correct: `.login-form-card {
  width: 400px;
  min-height: 480px;
  background-color: white;
  color: #2d2d2d;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 48px 40px;
  margin: 0 auto;
  gap: 20px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  max-width: 440px;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  box-sizing: border-box;
}`,
wrong: `.login-form-card {
  WIDHT: 400px
  MIN-HIEGHT: 480px;
  background-colr: white
  COLOR: #2d2d2d;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: centr;
  paddng: 48px 40px
  MARGIN: 0 auto;
  GAP: 20px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 1px solid #e8e8e8
  border-raduis: 16px;
  BOX-SHADOW: 0 8px 32px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MAX-WIDTH: 440px;
  min-widht: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  BOX-SIZING: border-box
}`,
totalMistakes: 45,
hint: "Fix WIDHT+semicolon (case+spelling); fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix centr in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; fix min-widht+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase BOX-SIZING (no final semicolon)."
},


// ── H162 ──
{
correct: `.carousel-slide-track {
  width: 100%;
  height: 360px;
  background-color: #111111;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: grab;
  opacity: 1;
  visibility: visible;
  transition: transform 0.5s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 100%;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  flex-shrink: 0;
  will-change: transform;
}`,
wrong: `.carousel-slide-track {
  widht: 100%
  HIEGHT: 360px;
  background-colr: #111111
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  justify-content: flex-strt;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  cursor: grb
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.5s ease;
  BORDER: none
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 100%;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  flex-srhink: 0;
  WILL-CHANGE: transform
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; fix grb in cursor+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; fix flex-srhink; lowercase WILL-CHANGE (no final semicolon)."
},


// ── H163 ──
{
correct: `.admin-data-table {
  width: 100%;
  min-height: 400px;
  background-color: white;
  color: #1a1a1a;
  display: table;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: auto;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: auto;
  overflow-y: auto;
  background-image: none;
  min-width: 600px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: flex-start;
  border-collapse: collapse;
  box-sizing: border-box;
}`,
wrong: `.admin-data-table {
  widht: 100%
  MIN-HIEGHT: 400px;
  background-colr: white
  COLOR: #1a1a1a;
  DISPLAY: table
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  PADDING: 0
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: auto
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 1px solid #e0e0e0
  border-raduis: 8px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: auto
  OVERFLOW-Y: auto;
  background-imge: none
  MIN-WIDTH: 600px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-strt
  border-collaps: collapse;
  BOX-SIZING: border-box
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT+semicolon; fix border-collaps; lowercase BOX-SIZING (no final semicolon)."
},


// ── H164 ──
{
correct: `.checkout-summary-box {
  width: 360px;
  min-height: 300px;
  background-color: #f9f9f9;
  color: #222222;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 28px 24px;
  margin: 0;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: sticky;
  overflow: hidden;
  z-index: 10;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  max-width: 400px;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  top: 24px;
  box-sizing: border-box;
}`,
wrong: `.checkout-summary-box {
  WIDTH: 360px
  MIN-HIEGHT: 300px;
  background-colr: #f9f9f9
  COLOR: #222222;
  DISPLAY: flex
  flex-directon: column;
  ALIGN-ITEMS: stretch
  justify-content: flex-strt;
  paddng: 28px 24px
  MARGIN: 0;
  GAP: 16px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: sticky;
  OVERFLOW: hidden
  Z-INDEX: 10;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 1px solid #e0e0e0
  border-raduis: 12px;
  BOX-SHADOW: 0 2px 12px rgba(0,0,0,0.07)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: auto;
  background-imge: none
  MAX-WIDTH: 400px;
  min-widht: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-strt
  TOP: 24px;
  BOX-SIZING: border-box
}`,
totalMistakes: 47,
hint: "Lowercase WIDTH+semicolon; fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-directon; lowercase ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; fix min-widht+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT+semicolon; lowercase TOP; lowercase BOX-SIZING (no final semicolon)."
},


// ── H165 ──
{
correct: `.blog-post-card {
  width: 340px;
  min-height: 420px;
  background-color: white;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.7;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  max-width: 380px;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  box-sizing: border-box;
}`,
wrong: `.blog-post-card {
  WIDHT: 340px
  MIN-HIEGHT: 420px;
  background-colr: white
  COLOR: #1a1a1a;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: flex-strt
  justify-content: flex-strt;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.7
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.2s ease, box-shadow 0.2s ease;
  BORDER: none
  border-raduis: 12px;
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.08)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MAX-WIDTH: 380px;
  min-widht: 280px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-strt
  BOX-SIZING: border-box
}`,
totalMistakes: 47,
hint: "Fix WIDHT+semicolon (case+spelling); fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix flex-strt in ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MAX-WIDTH; fix min-widht+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT+semicolon; lowercase BOX-SIZING (no final semicolon)."
},


// ── H166 ──
{
correct: `.weather-widget-card {
  width: 280px;
  height: 320px;
  background-color: #1a73e8;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 28px 20px;
  margin: 0;
  gap: 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(26,115,232,0.4);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  max-width: 320px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 280px;
  box-sizing: border-box;
}`,
wrong: `.weather-widget-card {
  WIDTH: 280px
  HIEGHT: 320px;
  background-colr: #1a73e8
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: space-betwn;
  paddng: 28px 20px
  MARGIN: 0;
  GAP: 12px
  font-sze: 16px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 20px;
  BOX-SHADOW: 0 8px 24px rgba(26,115,232,0.4)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  min-widht: 240px;
  MAX-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  MIN-HIEGHT: 280px;
  BOX-SIZING: border-box
}`,
totalMistakes: 48,
hint: "Lowercase WIDTH+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix space-betwn in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; fix MIN-HIEGHT; lowercase BOX-SIZING (no final semicolon)."
},


// ── H167 ──
{
correct: `.newsletter-signup-box {
  width: 100%;
  max-width: 560px;
  background-color: #fff8f0;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  margin: 0 auto;
  gap: 20px;
  font-size: 15px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 2px solid #ffcc99;
  border-radius: 16px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 240px;
  box-sizing: border-box;
}`,
wrong: `.newsletter-signup-box {
  widht: 100%
  MAX-WIDTH: 560px;
  background-colr: #fff8f0
  COLOR: #333333;
  DISPLAY: flex
  flex-directon: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: centr;
  paddng: 48px 40px
  MARGIN: 0 auto;
  GAP: 20px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 2px solid #ffcc99
  border-raduis: 16px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  min-widht: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  MIN-HIEGHT: 240px
  BOX-SIZING: border-box
}`,
totalMistakes: 48,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-directon; fix centr in ALIGN-ITEMS+semicolon; fix centr in JUSTIFY-CONTENT; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; lowercase FLEX-WRAP+semicolon; fix centr in ALIGN-CONTENT; fix MIN-HIEGHT+semicolon; lowercase BOX-SIZING (no final semicolon)."
},


// ── H168 ──
{
correct: `.floating-action-button {
  width: 56px;
  height: 56px;
  background-color: #6200ea;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 24px;
  font-weight: 700;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0px;
  text-align: center;
  position: fixed;
  overflow: hidden;
  z-index: 1000;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(98,0,234,0.4);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 56px;
  max-width: 56px;
  flex-wrap: nowrap;
  align-content: center;
  bottom: 32px;
  right: 32px;
  flex-shrink: 0;
}`,
wrong: `.floating-action-button {
  WIDHT: 56px
  HIEGHT: 56px;
  background-colr: #6200ea
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: centr;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 24px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0px;
  TEXT-ALIGN: center
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 1000;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transform 0.2s ease, box-shadow 0.2s ease;
  BORDER: none
  border-raduis: 50%;
  BOX-SHADOW: 0 6px 20px rgba(98,0,234,0.4)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  text-decoraton: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 56px;
  MAX-WIDTH: 56px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  BOTTOM: 32px;
  RIGHT: 32px
  flex-srhink: 0
}`,
totalMistakes: 49,
hint: "Fix WIDHT+semicolon (case+spelling); fix HIEGHT (case+spelling); fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix centr in JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; fix text-decoraton+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase BOTTOM; lowercase RIGHT+semicolon; fix flex-srhink (no final semicolon)."
},


// ── H169 ──
{
correct: `.timeline-event-block {
  width: 100%;
  min-height: 100px;
  background-color: white;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 24px;
  margin: 0;
  gap: 20px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-left: 3px solid #3498db;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: flex-start;
  box-sizing: border-box;
  list-style: none;
}`,
wrong: `.timeline-event-block {
  widht: 100%
  MIN-HIEGHT: 100px;
  background-colr: white
  COLOR: #2c3e50;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: flex-strt
  justify-content: flex-strt;
  paddng: 20px 24px
  MARGIN: 0;
  GAP: 20px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-left: 3px solid #3498db
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  word-brek: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  background-imge: none
  min-widht: 280px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-strt
  BOX-SIZING: border-box;
  LIST-STYLE: none
}`,
totalMistakes: 49,
hint: "Fix widht+semicolon; fix MIN-HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix flex-strt in ALIGN-ITEMS+semicolon; fix flex-strt in justify-content; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix bordr-left+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; fix word-brek+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; fix min-widht; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT+semicolon; lowercase BOX-SIZING; lowercase LIST-STYLE (no final semicolon)."
},


// ── H170 ──
{
correct: `.fullscreen-splash-screen {
  width: 100vw;
  height: 100vh;
  background-color: #0a0a0a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 32px;
  font-size: 20px;
  font-weight: 300;
  font-family: Georgia;
  line-height: 1.4;
  letter-spacing: 1px;
  text-align: center;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.6s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 100%;
  min-height: 100%;
  flex-wrap: nowrap;
  align-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}`,
wrong: `.fullscreen-splash-screen {
  widht: 100vw
  HIEGHT: 100vh;
  background-colr: #0a0a0a
  COLOR: white;
  DISPLAY: flex
  flex-directon: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: centr;
  PADDING: 0
  MARGIN: 0;
  GAP: 32px
  font-sze: 20px;
  FONT-WEIGHT: 300
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 1px;
  TEXT-ALIGN: center
  postion: fixed;
  OVERFLOW: hidden
  Z-INDEX: 9999;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.6s ease;
  BORDER: none
  BORDER-RADIUS: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 100%;
  MIN-HIEGHT: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  TOP: 0;
  LEFT: 0
  RIGHT: 0;
  BOTTOM: 0
}`,
totalMistakes: 50,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-directon; fix centr in ALIGN-ITEMS+semicolon; fix centr in JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase BORDER+semicolon; lowercase BORDER-RADIUS; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; fix MIN-HIEGHT+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase TOP; lowercase LEFT+semicolon; lowercase RIGHT; lowercase BOTTOM (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 15 paragraphs (H171 - H185)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H171 ──
{
correct: `.hero-banner-section {
  width: 100%;
  min-height: 500px;
  background-color: #0a0a23;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  margin: 0;
  gap: 24px;
  font-size: 18px;
  font-weight: 700;
  font-family: Georgia;
  line-height: 1.4;
  letter-spacing: 0.5px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  justify-items: center;
}`,
wrong: `.hero-banner-section {
  widht: 100%
  MIN-HEIGHT: 500px;
  background-colr: #0a0a23
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: center;
  paddng: 60px 40px
  MARGIN: 0;
  GAP: 24px
  font-sze: 18px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.5px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: 0 4px 24px rgba(0,0,0,0.5)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  overflow-x: hidden
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  justify-items: centr
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MIN-HEIGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS centr+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; fix overflow-x+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix ALIGN-CONTENT centr+semicolon; fix justify-items centr (no final semicolon)."
},


// ── H172 ──
{
correct: `.sidebar-navigation-menu {
  width: 240px;
  height: 100vh;
  background-color: #1e1e2f;
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 16px;
  margin: 0;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.2px;
  text-align: left;
  position: fixed;
  overflow: auto;
  z-index: 100;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: width 0.3s ease;
  border-right: 1px solid #333355;
  border-radius: 0;
  box-shadow: 2px 0 8px rgba(0,0,0,0.3);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 60px;
  max-width: 300px;
  flex-wrap: nowrap;
  align-content: flex-start;
}`,
wrong: `.sidebar-navigation-menu {
  widht: 240px
  HIEGHT: 100vh;
  background-colr: #1e1e2f
  COLOR: #eeeeee;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  align-items: flex-strt
  JUSTIFY-CONTENT: flex-start;
  paddng: 32px 16px
  MARGIN: 0;
  GAP: 8px
  font-sze: 15px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  POSITION: fixd;
  OVERFLOW: auto
  Z-INDEX: 100;
  CURSOR: pointer
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: width 0.3s ease;
  bordr-right: 1px solid #333355
  border-raduis: 0;
  BOX-SHADOW: 2px 0 8px rgba(0,0,0,0.3)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  overflow-y: ato;
  background-imge: none
  MIN-WIDTH: 60px;
  MAX-WIDTH: 300px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-strt
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix flex-strt in align-items+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix POSITION fixd+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-right; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X+semicolon; fix ato in overflow-y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT (no final semicolon)."
},


// ── H173 ──
{
correct: `.product-card-grid {
  width: 100%;
  max-width: 1200px;
  background-color: #f4f4f4;
  color: #222222;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  justify-content: center;
  padding: 32px 24px;
  margin: 0 auto;
  gap: 20px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  flex-wrap: wrap;
  align-content: start;
  justify-items: center;
}`,
wrong: `.product-card-grid {
  widht: 100%
  MAX-WIDTH: 1200px;
  background-colr: #f4f4f4
  COLOR: #222222;
  DISPLAY: grd;
  grid-tempalte-columns: repeat(4, 1fr)
  ALIGN-ITEMS: start;
  JUSTIFY-CONTENT: centr
  paddng: 32px 24px;
  MARGIN: 0 auto
  GAP: 20px;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  OVERFLOW: visible;
  Z-INDEX: 1
  CURSOR: default;
  OPACITY: 1
  VISIBILITY: visible;
  TRANSITION: none
  BORDER: none;
  border-raduis: 8px
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: top
  OVERFLOW-X: visible;
  overflow-y: visibl
  background-imge: none;
  MIN-WIDTH: 280px
  FLEX-WRAP: warp;
  ALIGN-CONTENT: strt
  JUSTIFY-ITEMS: center
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; fix DISPLAY grd; fix grid-tempalte-columns+semicolon; lowercase ALIGN-ITEMS; fix JUSTIFY-CONTENT centr+semicolon; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; fix visibl+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; fix FLEX-WRAP warp; fix ALIGN-CONTENT strt+semicolon; lowercase JUSTIFY-ITEMS (no final semicolon)."
},


// ── H174 ──
{
correct: `.modal-overlay-backdrop {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: fixed;
  overflow: hidden;
  z-index: 999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 100vw;
  max-width: 100vw;
  flex-wrap: nowrap;
  align-content: center;
  top: 0;
  left: 0;
}`,
wrong: `.modal-overlay-backdrop {
  WIDHT: 100vw
  HEIGHT: 100vh;
  background-colr: rgba(0,0,0,0.6)
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: center
  JUSTIFY-CONTENT: centr;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 16px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: fixd;
  OVERFLOW: hidden
  Z-INDX: 999;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.2s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 100vw;
  MAX-WIDTH: 100vw
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  TOP: 0;
  LEFT: 0
}`,
totalMistakes: 46,
hint: "Fix WIDHT; lowercase WIDTH+semicolon; lowercase HEIGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; fix centr in JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion fixd; lowercase OVERFLOW+semicolon; fix Z-INDX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase TOP; lowercase LEFT (no final semicolon)."
},


// ── H175 ──
{
correct: `.tab-navigation-bar {
  width: 100%;
  height: 48px;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  margin: 0;
  gap: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 10;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-bottom: 2px solid #dddddd;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  scroll-behavior: smooth;
}`,
wrong: `.tab-navigation-bar {
  widht: 100%
  HIEGHT: 48px;
  BACKGROUND-COLOR: white
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  justify-content: flex-strt;
  paddng: 0 16px
  MARGIN: 0;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 10;
  CURSOR: poiner
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-bottom: 2px solid #dddddd
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  overflow-x: ato
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 280px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  scroll-behavir: smooth
}`,
totalMistakes: 48,
hint: "Fix widht+semicolon; fix HIEGHT; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS centr+semicolon; fix flex-strt; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; fix CURSOR poiner; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-bottom; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; fix ato in overflow-x; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr in ALIGN-CONTENT; fix scroll-behavir (no final semicolon)."
},


// ── H176 ──
{
correct: `.user-profile-avatar {
  width: 80px;
  height: 80px;
  background-color: #cccccc;
  color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 32px;
  font-weight: 700;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 80px;
  max-width: 80px;
  flex-wrap: nowrap;
  align-content: center;
  object-fit: cover;
}`,
wrong: `.user-profile-avatar {
  WIDHT: 80px
  HIEGHT: 80px;
  background-colr: #cccccc
  COLOR: transparent;
  DISPLAY: flex
  flex-dirction: column;
  ALIGN-ITEMS: center
  JUSTIFY-CONTENT: center;
  PADDING: 0
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 32px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: poiner
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transfrom 0.2s ease;
  BORDER: 2px solid white
  border-raduis: 50%;
  BOX-SHADOW: 0 2px 8px rgba(0,0,0,0.2)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 80px;
  MAX-WIDTH: 80px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  object-fit: covr
}`,
totalMistakes: 47,
hint: "Fix WIDHT; lowercase WIDTH+semicolon; fix HIEGHT lowercase+semicolon; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-dirction; lowercase ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; fix CURSOR poiner+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix transfrom in TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; fix covr in object-fit (no final semicolon)."
},


// ── H177 ──
{
correct: `.toast-notification-popup {
  width: auto;
  min-width: 280px;
  background-color: #323232;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  margin: 0;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease, transform 0.3s ease;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  max-width: 480px;
  flex-wrap: nowrap;
  align-content: center;
  bottom: 24px;
  right: 24px;
}`,
wrong: `.toast-notification-popup {
  WIDHT: auto
  MIN-WIDTH: 280px;
  background-colr: #323232
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  align-items: centr
  JUSTIFY-CONTENT: space-between;
  paddng: 12px 20px
  MARGIN: 0;
  GAP: 12px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: fixd;
  OVERFLOW: hidden
  Z-INDEX: 9999;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: opacity 0.3s ease, transfrom 0.3s ease;
  BORDER: none
  border-raduis: 4px;
  BOX-SHADOW: 0 4px 12px rgba(0,0,0,0.4)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MAX-WIDTH: 480px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  BOTTOM: 24px
  RIGHT: 24px
}`,
totalMistakes: 48,
hint: "Fix WIDHT; lowercase WIDTH+semicolon; lowercase MIN-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in align-items+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion fixd+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix transfrom in TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT; lowercase BOTTOM+semicolon; lowercase RIGHT (no final semicolon)."
},


// ── H178 ──
{
correct: `.data-table-container {
  width: 100%;
  max-width: 1100px;
  background-color: white;
  color: #111111;
  display: block;
  overflow: auto;
  padding: 0;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #dddddd;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: auto;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  flex-wrap: nowrap;
  align-content: start;
  gap: 0;
  min-height: 80px;
}`,
wrong: `.data-table-container {
  widht: 100%
  MAX-WIDTH: 1100px;
  BACKGROUND-COLOR: white
  COLOR: #111111;
  DISPLAY: blok
  OVERFLOW: auto;
  PADDING: 0
  MARGIN: 0 auto;
  font-sze: 14px
  FONT-WEIGHT: 400;
  FONT-FAMILY: Arial
  LINE-HEIGHT: 1.5;
  LETTER-SPACING: 0.1px
  TEXT-ALIGN: left;
  postion: relative
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 1px solid #dddddd
  border-raduis: 6px;
  BOX-SHADOW: 0 2px 6px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  overflow-x: ato
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: strt;
  GAP: 0
  min-hieght: 80px
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; fix DISPLAY blok+semicolon; lowercase OVERFLOW; lowercase PADDING+semicolon; lowercase MARGIN; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; fix ato in overflow-x+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix strt in ALIGN-CONTENT; lowercase GAP+semicolon; fix min-hieght (no final semicolon)."
},


// ── H179 ──
{
correct: `.breadcrumb-nav-trail {
  width: 100%;
  max-width: 960px;
  background-color: transparent;
  color: #555555;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;
  margin: 0 auto;
  gap: 6px;
  font-size: 13px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 200px;
  flex-wrap: nowrap;
  align-content: center;
  list-style: none;
}`,
wrong: `.breadcrumb-nav-trail {
  widht: 100%
  MAX-WIDTH: 960px;
  background-color: trnasparent
  COLOR: #555555;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: flex-strt;
  paddng: 8px 16px
  MARGIN: 0 auto;
  GAP: 6px
  font-sze: 13px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  backgrund-image: none
  MIN-WIDTH: 200px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  LIST-STYLE: none
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix trnasparent+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS centr+semicolon; fix flex-strt; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix backgrund-image; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT; lowercase LIST-STYLE (no final semicolon)."
},


// ── H180 ──
{
correct: `.chat-message-bubble {
  width: auto;
  max-width: 70%;
  background-color: #0084ff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 16px;
  margin: 4px 0;
  gap: 4px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 18px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: pre-wrap;
  word-break: break-word;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 60px;
  flex-wrap: nowrap;
  align-content: flex-start;
  word-wrap: break-word;
}`,
wrong: `.chat-message-bubble {
  WIDTH: auto
  max-widht: 70%;
  background-colr: #0084ff
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  align-items: flex-strt
  JUSTIFY-CONTENT: flex-start;
  paddng: 10px 16px
  MARGIN: 4px 0;
  GAP: 4px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 18px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: txt;
  TEXT-DECORATION: none
  WHITE-SPACE: pre-warp;
  WORD-BREAK: break-word
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 60px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  WORD-WRAP: break-word
}`,
totalMistakes: 47,
hint: "Lowercase WIDTH+semicolon; fix max-widht; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix flex-strt in align-items+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; fix txt in USER-SELECT+semicolon; lowercase TEXT-DECORATION; fix pre-warp in WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT; lowercase WORD-WRAP (no final semicolon)."
},


// ── H181 ──
{
correct: `.pricing-plan-card {
  width: 300px;
  min-height: 400px;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 24px;
  margin: 0 auto;
  gap: 16px;
  font-size: 16px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: visible;
  background-image: none;
  max-width: 340px;
  flex-wrap: nowrap;
  align-content: flex-start;
}`,
wrong: `.pricing-plan-card {
  WIDHT: 300px
  min-hieght: 400px;
  background-colr: white
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  justify-content: flex-strt;
  paddng: 32px 24px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 16px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.6
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: poiner
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transfrom 0.2s ease, box-shadow 0.2s ease;
  BORDER: 1px solid #eeeeee
  border-raduis: 12px;
  BOX-SHADOW: 0 2px 12px rgba(0,0,0,0.08)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: visible;
  background-imge: none
  MAX-WIDTH: 340px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt
}`,
totalMistakes: 46,
hint: "Fix WIDHT; lowercase WIDTH+semicolon; fix min-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS centr+semicolon; fix flex-strt in justify-content; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; fix CURSOR poiner; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix transfrom in TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT (no final semicolon)."
},


// ── H182 ──
{
correct: `.search-input-field {
  width: 100%;
  max-width: 480px;
  background-color: white;
  color: #111111;
  display: block;
  padding: 10px 16px 10px 40px;
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: text;
  opacity: 1;
  visibility: visible;
  transition: border-color 0.2s ease;
  border: 1px solid #cccccc;
  border-radius: 24px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 200px;
  flex-wrap: nowrap;
  align-content: center;
  caret-color: #0066cc;
  min-height: 40px;
}`,
wrong: `.search-input-field {
  widht: 100%
  MAX-WIDTH: 480px;
  BACKGROUND-COLOR: white
  COLOR: #111111;
  DISPLAY: blok
  paddng: 10px 16px 10px 40px;
  MARGIN: 0
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: text
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: bordr-color 0.2s ease;
  BORDER: 1px solid #cccccc
  border-raduis: 24px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: text;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 200px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  caret-colr: #0066cc
  min-hieght: 40px
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; fix DISPLAY blok+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; fix CURSOR text+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix bordr-color in TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr in ALIGN-CONTENT; fix caret-colr+semicolon; fix min-hieght (no final semicolon)."
},


// ── H183 ──
{
correct: `.image-gallery-grid {
  width: 100%;
  max-width: 1200px;
  background-color: #f0f0f0;
  color: transparent;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  justify-content: center;
  padding: 24px;
  margin: 0 auto;
  gap: 16px;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 0;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  flex-wrap: wrap;
  align-content: start;
  grid-auto-rows: 200px;
}`,
wrong: `.image-gallery-grid {
  widht: 100%
  MAX-WIDTH: 1200px;
  background-colr: #f0f0f0
  COLOR: transparent;
  DISPLAY: grd
  grid-tempalte-columns: repeat(3, 1fr);
  ALIGN-ITEMS: strech
  JUSTIFY-CONTENT: centr;
  paddng: 24px
  MARGIN: 0 auto;
  GAP: 16px
  FONT-SIZE: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 0
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: warp
  ALIGN-CONTENT: strt;
  GRID-AUTO-ROWS: 200px
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; fix DISPLAY grd+semicolon; fix grid-tempalte-columns; fix ALIGN-ITEMS strech+semicolon; fix JUSTIFY-CONTENT centr; fix paddng+semicolon; lowercase MARGIN; lowercase GAP+semicolon; lowercase FONT-SIZE; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; fix FLEX-WRAP warp+semicolon; fix strt in ALIGN-CONTENT; lowercase GRID-AUTO-ROWS (no final semicolon)."
},


// ── H184 ──
{
correct: `.dropdown-menu-list {
  width: 200px;
  min-width: 160px;
  background-color: white;
  color: #222222;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 8px 0;
  margin: 0;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: absolute;
  overflow: hidden;
  z-index: 500;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.15s ease;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  max-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  list-style: none;
  max-height: 320px;
}`,
wrong: `.dropdown-menu-list {
  WIDHT: 200px
  MIN-WIDTH: 160px;
  BACKGROUND-COLOR: white
  COLOR: #222222;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: strech
  JUSTIFY-CONTENT: flex-strt;
  paddng: 8px 0
  MARGIN: 0;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: abslute;
  OVERFLOW: hidden
  Z-INDEX: 500;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: OPACITY 0.15s ease;
  BORDER: 1px solid #e0e0e0
  border-raduis: 6px;
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.12)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  overflow-y: ato;
  backgrund-image: none
  MAX-WIDTH: 320px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  LIST-STYLE: none
  max-hieght: 320px
}`,
totalMistakes: 48,
hint: "Fix WIDHT; lowercase WIDTH+semicolon; lowercase MIN-WIDTH; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS strech+semicolon; fix flex-strt in JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion abslute+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix OPACITY in TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; fix ato in overflow-y+semicolon; fix backgrund-image; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT; lowercase LIST-STYLE+semicolon; fix max-hieght (no final semicolon)."
},


// ── H185 ──
{
correct: `.footer-site-section {
  width: 100%;
  min-height: 200px;
  background-color: #1a1a1a;
  color: #aaaaaa;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 48px 64px;
  margin: 0;
  gap: 32px;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.8;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border-top: 1px solid #333333;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: visible;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
}`,
wrong: `.footer-site-section {
  widht: 100%
  min-hieght: 200px;
  background-colr: #1a1a1a
  COLOR: #aaaaaa;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  align-items: flex-strt
  JUSTIFY-CONTENT: space-between;
  paddng: 48px 64px
  MARGIN: 0;
  GAP: 32px
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.8
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  bordr-top: 1px solid #333333
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: text;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 320px;
  MAX-WIDTH: 100%
  FLEX-WRAP: warp;
  ALIGN-CONTENT: flex-strt
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; fix min-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix flex-strt in align-items+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; fix bordr-top; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; fix user-selct+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; fix FLEX-WRAP warp; fix flex-strt in ALIGN-CONTENT (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H186 - H195)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H186 ──
{
correct: `.login-form-wrapper {
  width: 100%;
  max-width: 420px;
  background-color: white;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 40px 32px;
  margin: 0 auto;
  gap: 20px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: flex-start;
  min-height: 320px;
}`,
wrong: `.login-form-wrapper {
  widht: 100%
  MAX-WIDTH: 420px;
  background-colr: white
  COLOR: #333333;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: strech
  JUSTIFY-CONTENT: centr;
  paddng: 40px 32px
  MARGIN: 0 auto;
  GAP: 20px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: 1px solid #e0e0e0
  border-raduis: 10px;
  BOX-SHADOW: 0 4px 20px rgba(0,0,0,0.1)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  overflow-y: ato;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  min-hieght: 320px
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS strech+semicolon; fix centr in JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; fix ato in overflow-y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT; fix min-hieght (no final semicolon)."
},


// ── H187 ──
{
correct: `.video-player-container {
  width: 100%;
  max-width: 960px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.6);
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 280px;
  max-height: 540px;
  flex-wrap: nowrap;
  align-content: center;
  aspect-ratio: 16 / 9;
}`,
wrong: `.video-player-container {
  WIDHT: 100%
  MAX-WIDTH: 960px;
  BACKGROUND-COLOR: blak
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: center;
  PADDING: 0
  MARGIN: 0 auto;
  GAP: 0
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: poiner
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 24px rgba(0,0,0,0.6)
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 280px;
  max-hieght: 540px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  aspect-rato: 16 / 9
}`,
totalMistakes: 46,
hint: "Fix WIDHT; lowercase WIDTH+semicolon; lowercase MAX-WIDTH; fix blak in BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; fix CURSOR poiner+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; fix max-hieght+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; fix aspect-rato (no final semicolon)."
},


// ── H188 ──
{
correct: `.kanban-board-column {
  width: 280px;
  min-height: 400px;
  background-color: #f5f6f7;
  color: #172b4d;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 12px;
  margin: 0;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1.4;
  letter-spacing: 0.1px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 6px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: none;
  min-width: 240px;
  max-width: 320px;
  flex-wrap: nowrap;
  align-content: flex-start;
  flex-shrink: 0;
}`,
wrong: `.kanban-board-column {
  widht: 280px
  min-hieght: 400px;
  background-colr: #f5f6f7
  COLOR: #172b4d;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: strech
  JUSTIFY-CONTENT: flex-strt;
  PADDNG: 12px
  MARGIN: 0;
  GAP: 8px
  font-sze: 14px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.4
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 6px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  overflow-y: ato;
  backgrund-image: none
  MIN-WIDTH: 240px;
  MAX-WIDTH: 320px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: flex-strt
  flex-shrnk: 0
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; fix min-hieght; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS strech+semicolon; fix flex-strt in JUSTIFY-CONTENT; fix PADDNG; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; fix ato in overflow-y+semicolon; fix backgrund-image; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; fix flex-strt in ALIGN-CONTENT; fix flex-shrnk (no final semicolon)."
},


// ── H189 ──
{
correct: `.notification-badge-dot {
  width: 20px;
  height: 20px;
  background-color: #ff3b30;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 11px;
  font-weight: 700;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: absolute;
  overflow: hidden;
  z-index: 10;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: transform 0.2s ease;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: none;
  outline: none;
  pointer-events: none;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 20px;
  max-width: 32px;
  flex-wrap: nowrap;
  align-content: center;
  top: -6px;
  right: -6px;
}`,
wrong: `.notification-badge-dot {
  WIDHT: 20px
  HIEGHT: 20px;
  background-colr: #ff3b30
  COLOR: white;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: center;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 11px;
  FONT-WEIGHT: 700
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: abslute;
  OVERFLOW: hidden
  Z-INDEX: 10;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transfrom 0.2s ease;
  BORDER: 2px solid white
  border-raduis: 50%;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: none
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 20px;
  MAX-WIDTH: 32px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  TOP: -6px;
  RGHT: -6px
}`,
totalMistakes: 47,
hint: "Fix WIDHT; lowercase WIDTH+semicolon; fix HIEGHT; lowercase HEIGHT+semicolon; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion abslute; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix transfrom in TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT+semicolon; lowercase TOP; fix RGHT (no final semicolon)."
},


// ── H190 ──
{
correct: `.sticky-header-bar {
  width: 100%;
  height: 64px;
  background-color: white;
  color: #222222;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  margin: 0;
  gap: 16px;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: left;
  position: sticky;
  overflow: hidden;
  z-index: 100;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: box-shadow 0.2s ease;
  border: none;
  border-bottom: 1px solid #eeeeee;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 320px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  top: 0;
}`,
wrong: `.sticky-header-bar {
  widht: 100%
  HIEGHT: 64px;
  BACKGROUND-COLOR: white
  COLOR: #222222;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: center
  JUSTIFY-CONTENT: space-between;
  paddng: 0 32px
  MARGIN: 0;
  GAP: 16px
  font-sze: 16px;
  FONT-WEIGHT: 600
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: left
  postion: stiky;
  OVERFLOW: hidden
  Z-INDEX: 100;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: BOX-SHADOW 0.2s ease;
  BORDER: none
  bordr-bottom: 1px solid #eeeeee;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: all;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: nowrap
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: hidden;
  OVERFLOW-Y: hidden
  background-imge: none;
  MIN-WIDTH: 320px
  MAX-WIDTH: 100%;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  TOP: 0
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix HIEGHT; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; lowercase ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion stiky+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix BOX-SHADOW in TRANSITION+semicolon; lowercase BORDER; fix bordr-bottom+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT; lowercase TOP (no final semicolon)."
},


// ── H191 ──
{
correct: `.rating-stars-widget {
  width: auto;
  min-width: 120px;
  background-color: transparent;
  color: #ffc107;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 0;
  margin: 0;
  gap: 4px;
  font-size: 20px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 2px;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  max-width: 200px;
  flex-wrap: nowrap;
  align-content: center;
  height: 28px;
  max-height: 40px;
}`,
wrong: `.rating-stars-widget {
  WIDTH: ato
  MIN-WIDTH: 120px;
  background-colr: transparent
  COLOR: #ffc107;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: flex-strt;
  paddng: 4px 0
  MARGIN: 0;
  GAP: 4px
  font-sze: 20px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 2px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: poiner
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MAX-WIDTH: 200px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  HIEGHT: 28px
  max-hieght: 40px
}`,
totalMistakes: 46,
hint: "Fix ato in WIDTH; lowercase+semicolon; lowercase MIN-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; fix flex-strt in JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; fix CURSOR poiner; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT; fix HIEGHT+semicolon; fix max-hieght (no final semicolon)."
},


// ── H192 ──
{
correct: `.progress-bar-track {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  color: transparent;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  outline: none;
  pointer-events: none;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 100px;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: stretch;
  min-height: 4px;
  max-height: 16px;
}`,
wrong: `.progress-bar-track {
  widht: 100%
  HIEGHT: 8px;
  background-colr: #e0e0e0
  COLOR: transparent;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: strech
  JUSTIFY-CONTENT: flex-strt;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  FONT-SIZE: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 4px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: none
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 100px;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: strech
  min-hieght: 4px;
  max-hieght: 16px
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS strech+semicolon; fix flex-strt in JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; lowercase FONT-SIZE; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; lowercase CURSOR+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix strech in ALIGN-CONTENT+semicolon; fix min-hieght; fix max-hieght (no final semicolon)."
},


// ── H193 ──
{
correct: `.code-snippet-block {
  width: 100%;
  max-width: 800px;
  background-color: #1e1e1e;
  color: #d4d4d4;
  display: block;
  padding: 24px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  font-family: monospace;
  line-height: 1.8;
  letter-spacing: 0.3px;
  text-align: left;
  position: relative;
  overflow: auto;
  z-index: 1;
  cursor: text;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  outline: none;
  pointer-events: all;
  user-select: text;
  text-decoration: none;
  white-space: pre;
  word-break: normal;
  vertical-align: top;
  overflow-x: auto;
  overflow-y: visible;
  background-image: none;
  min-width: 280px;
  flex-wrap: nowrap;
  align-content: start;
  tab-size: 2;
  min-height: 60px;
}`,
wrong: `.code-snippet-block {
  widht: 100%
  MAX-WIDTH: 800px;
  background-colr: #1e1e1e
  COLOR: #d4d4d4;
  DISPLAY: blok
  paddng: 24px;
  MARGIN: 0 auto
  font-sze: 14px;
  FONT-WEIGHT: 400
  FONT-FAMILY: monospce;
  LINE-HEIGHT: 1.8
  LETTER-SPACING: 0.3px;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: ato
  Z-INDEX: 1;
  CURSOR: text
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: 0 4px 16px rgba(0,0,0,0.4)
  OUTLINE: none;
  POINTER-EVENTS: all
  user-selct: text;
  TEXT-DECORATION: none
  WHITE-SPACE: pre;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  overflow-x: ato
  OVERFLOW-Y: visible;
  background-imge: none
  MIN-WIDTH: 280px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: strt;
  TAB-SIZE: 2
  min-hieght: 60px
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; fix DISPLAY blok+semicolon; fix paddng; lowercase MARGIN+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; fix FONT-FAMILY monospce; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; fix OVERFLOW ato+semicolon; lowercase Z-INDEX; fix CURSOR text+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; fix user-selct; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; fix ato in overflow-x+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix strt in ALIGN-CONTENT; lowercase TAB-SIZE+semicolon; fix min-hieght (no final semicolon)."
},


// ── H194 ──
{
correct: `.carousel-slide-item {
  width: 100%;
  height: 480px;
  background-color: #f0f0f0;
  color: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  margin: 0;
  gap: 16px;
  font-size: 18px;
  font-weight: 400;
  font-family: Georgia;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: grab;
  opacity: 1;
  visibility: visible;
  transition: transform 0.4s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 100%;
  max-width: 100%;
  flex-wrap: nowrap;
  align-content: center;
  flex-shrink: 0;
}`,
wrong: `.carousel-slide-item {
  widht: 100%
  HIEGHT: 480px;
  background-colr: #f0f0f0
  COLOR: #111111;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: center;
  paddng: 32px
  MARGIN: 0;
  GAP: 16px
  font-sze: 18px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Georgia;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: grb
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: transfrom 0.4s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 100%;
  MAX-WIDTH: 100%
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  flex-shrnk: 0
}`,
totalMistakes: 46,
hint: "Fix widht+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; fix CURSOR grb; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix transfrom in TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr in ALIGN-CONTENT; fix flex-shrnk (no final semicolon)."
},


// ── H195 ──
{
correct: `.chip-tag-label {
  width: auto;
  height: 28px;
  background-color: #e8f0fe;
  color: #1a73e8;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin: 0 4px;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.2s ease;
  border: 1px solid #1a73e8;
  border-radius: 16px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 40px;
  max-width: 200px;
  flex-wrap: nowrap;
  align-content: center;
  max-height: 36px;
}`,
wrong: `.chip-tag-label {
  WIDTH: ato
  HIEGHT: 28px;
  background-colr: #e8f0fe
  COLOR: #1a73e8;
  DISPLAY: inlin-flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: center;
  paddng: 0 12px
  MARGIN: 0 4px;
  GAP: 6px
  font-sze: 13px;
  FONT-WEIGHT: 500
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0.2px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: poiner
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-colr 0.2s ease;
  BORDER: 1px solid #1a73e8
  border-raduis: 16px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 40px;
  MAX-WIDTH: 200px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  max-hieght: 36px
}`,
totalMistakes: 47,
hint: "Fix ato in WIDTH+semicolon; fix HIEGHT; fix background-colr+semicolon; lowercase COLOR; fix DISPLAY inlin-flex+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; fix CURSOR poiner; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix background-colr in TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr in ALIGN-CONTENT; fix max-hieght (no final semicolon)."
},

/* ── Paragraph Mistakes — Hard CSS Data ──
   Hard: 45-50 mistakes per code
   Total: 5 paragraphs (H196 - H200)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (COLOR → color, DISPLAY → display)
     'spelling'= spelling galat (colr → color, widht → width, hieght → height)
     'missing' = semicolon ya closing brace ghayab hai
*/


// ── H196 ──
{
correct: `.file-upload-dropzone {
  width: 100%;
  max-width: 560px;
  background-color: #fafafa;
  color: #555555;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  margin: 0 auto;
  gap: 16px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  border: 2px dashed #cccccc;
  border-radius: 12px;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 240px;
  flex-wrap: nowrap;
  align-content: center;
  min-height: 180px;
}`,
wrong: `.file-upload-dropzone {
  widht: 100%
  MAX-WIDTH: 560px;
  background-colr: #fafafa
  COLOR: #555555;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: center;
  paddng: 48px 32px
  MARGIN: 0 auto;
  GAP: 16px
  font-sze: 15px;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1.5
  LETTER-SPACING: 0.1px;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: poiner
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: bordr-color 0.2s ease, background-colr 0.2s ease;
  BORDER: 2px dashd #cccccc
  border-raduis: 12px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 240px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  min-hieght: 180px
}`,
totalMistakes: 48,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; fix font-sze+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; fix CURSOR poiner; lowercase OPACITY+semicolon; lowercase VISIBILITY; fix bordr-color in TRANSITION; fix background-colr in TRANSITION+semicolon; fix BORDER dashd; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT; fix min-hieght (no final semicolon)."
},


// ── H197 ──
{
correct: `.skeleton-loading-card {
  width: 100%;
  max-width: 360px;
  background-color: #e0e0e0;
  color: transparent;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 16px;
  margin: 0 auto;
  gap: 12px;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: left;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: wait;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  outline: none;
  pointer-events: none;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 200px;
  flex-wrap: nowrap;
  align-content: flex-start;
  animation: shimmer 1.5s infinite;
  min-height: 120px;
}`,
wrong: `.skeleton-loading-card {
  widht: 100%
  MAX-WIDTH: 360px;
  BACKGROUND-COLOR: #e0e0e0
  COLOR: transparent;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: strech
  JUSTIFY-CONTENT: flex-strt;
  paddng: 16px
  MARGIN: 0 auto;
  GAP: 12px
  FONT-SIZE: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: left
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 1;
  CURSOR: wiat
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 8px;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: none
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 200px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: flex-strt;
  ANIMATION: shimmer 1.5s infinte
  min-hieght: 120px
}`,
totalMistakes: 47,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix ALIGN-ITEMS strech+semicolon; fix flex-strt in JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; lowercase FONT-SIZE+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; fix CURSOR wiat; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix border-raduis+semicolon; lowercase BOX-SHADOW; lowercase OUTLINE+semicolon; lowercase POINTER-EVENTS; lowercase USER-SELECT+semicolon; lowercase TEXT-DECORATION; lowercase WHITE-SPACE+semicolon; lowercase WORD-BREAK; lowercase VERTICAL-ALIGN+semicolon; lowercase OVERFLOW-X; lowercase OVERFLOW-Y+semicolon; fix background-imge; lowercase MIN-WIDTH+semicolon; lowercase FLEX-WRAP; fix flex-strt in ALIGN-CONTENT; fix ANIMATION infinte+semicolon; fix min-hieght (no final semicolon)."
},


// ── H198 ──
{
correct: `.split-pane-divider {
  width: 6px;
  height: 100%;
  background-color: #dddddd;
  color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 10;
  cursor: col-resize;
  opacity: 1;
  visibility: visible;
  transition: background-color 0.15s ease;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: none;
  min-width: 4px;
  max-width: 12px;
  flex-wrap: nowrap;
  align-content: center;
  flex-shrink: 0;
}`,
wrong: `.split-pane-divider {
  WIDHT: 6px
  HEIGHT: 100%;
  background-colr: #dddddd
  COLOR: transparent;
  DISPLAY: flex
  FLEX-DIRECTION: column;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: center;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  FONT-SIZE: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: hidden
  Z-INDEX: 10;
  CURSOR: col-resiz
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: background-colr 0.15s ease;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: normal;
  WORD-BREAK: normal
  VERTICAL-ALIGN: top;
  OVERFLOW-X: hidden
  OVERFLOW-Y: hidden;
  background-imge: none
  MIN-WIDTH: 4px;
  MAX-WIDTH: 12px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  flex-shrnk: 0
}`,
totalMistakes: 46,
hint: "Fix WIDHT; lowercase WIDTH+semicolon; lowercase HEIGHT; fix background-colr+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; lowercase FONT-SIZE; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; fix CURSOR col-resiz+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; fix background-colr in TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase MAX-WIDTH+semicolon; lowercase FLEX-WRAP; fix centr in ALIGN-CONTENT; fix flex-shrnk (no final semicolon)."
},


// ── H199 ──
{
correct: `.avatar-group-stack {
  width: auto;
  min-width: 80px;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  gap: 0;
  font-size: 13px;
  font-weight: 600;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: all;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  max-width: 300px;
  flex-wrap: nowrap;
  align-content: center;
  height: 36px;
  direction: ltr;
}`,
wrong: `.avatar-group-stack {
  WIDTH: ato
  MIN-WIDTH: 80px;
  BACKGROUND-COLOR: transparent
  COLOR: white;
  DISPLAY: flex
  flex-dirction: row;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: flex-strt;
  PADDING: 0
  MARGIN: 0;
  GAP: 0
  font-sze: 13px;
  FONT-WEIGHT: 600
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: poiner
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  border-raduis: 0;
  BOX-SHADOW: none
  OUTLINE: none;
  POINTER-EVENTS: all
  USER-SELECT: none;
  TEXT-DECORATION: none
  WHITE-SPACE: nowrap;
  WORD-BREAK: normal
  VERTICAL-ALIGN: middle;
  OVERFLOW-X: visible
  OVERFLOW-Y: visible;
  backgrund-image: none
  MAX-WIDTH: 300px;
  FLEX-WRAP: nowrap
  ALIGN-CONTENT: centr;
  HIEGHT: 36px
  DIRECTION: ltr
}`,
totalMistakes: 46,
hint: "Fix ato in WIDTH+semicolon; lowercase MIN-WIDTH; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; fix flex-dirction; fix centr in ALIGN-ITEMS+semicolon; fix flex-strt in JUSTIFY-CONTENT; lowercase PADDING+semicolon; lowercase MARGIN; lowercase GAP+semicolon; fix font-sze; lowercase FONT-WEIGHT+semicolon; lowercase FONT-FAMILY; lowercase LINE-HEIGHT+semicolon; lowercase LETTER-SPACING; lowercase TEXT-ALIGN+semicolon; fix postion; lowercase OVERFLOW+semicolon; lowercase Z-INDEX; fix CURSOR poiner+semicolon; lowercase OPACITY; lowercase VISIBILITY+semicolon; lowercase TRANSITION; lowercase BORDER+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix backgrund-image+semicolon; lowercase MAX-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr in ALIGN-CONTENT; fix HIEGHT+semicolon; lowercase DIRECTION (no final semicolon)."
},


// ── H200 ──
{
correct: `.page-section-divider {
  width: 100%;
  max-width: 800px;
  background-color: transparent;
  color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  margin: 0 auto;
  gap: 16px;
  font-size: 0;
  font-weight: 400;
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 1;
  cursor: default;
  opacity: 1;
  visibility: visible;
  transition: none;
  border: none;
  border-top: 1px solid #e0e0e0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  pointer-events: none;
  user-select: none;
  text-decoration: none;
  white-space: normal;
  word-break: normal;
  vertical-align: middle;
  overflow-x: visible;
  overflow-y: visible;
  background-image: none;
  min-width: 200px;
  flex-wrap: nowrap;
  align-content: center;
  height: 1px;
}`,
wrong: `.page-section-divider {
  widht: 100%
  MAX-WIDTH: 800px;
  BACKGROUND-COLOR: transparent
  COLOR: transparent;
  DISPLAY: flex
  FLEX-DIRECTION: row;
  ALIGN-ITEMS: centr
  JUSTIFY-CONTENT: center;
  paddng: 24px 0
  MARGIN: 0 auto;
  GAP: 16px
  FONT-SIZE: 0;
  FONT-WEIGHT: 400
  FONT-FAMILY: Arial;
  LINE-HEIGHT: 1
  LETTER-SPACING: 0;
  TEXT-ALIGN: center
  postion: relative;
  OVERFLOW: visible
  Z-INDEX: 1;
  CURSOR: default
  OPACITY: 1;
  VISIBILITY: visible
  TRANSITION: none;
  BORDER: none
  bordr-top: 1px solid #e0e0e0;
  border-raduis: 0
  BOX-SHADOW: none;
  OUTLINE: none
  POINTER-EVENTS: none;
  USER-SELECT: none
  TEXT-DECORATION: none;
  WHITE-SPACE: normal
  WORD-BREAK: normal;
  VERTICAL-ALIGN: middle
  OVERFLOW-X: visible;
  OVERFLOW-Y: visible
  background-imge: none;
  MIN-WIDTH: 200px
  FLEX-WRAP: nowrap;
  ALIGN-CONTENT: centr
  HIEGHT: 1px
}`,
totalMistakes: 45,
hint: "Fix widht+semicolon; lowercase MAX-WIDTH; lowercase BACKGROUND-COLOR+semicolon; lowercase COLOR; lowercase DISPLAY+semicolon; lowercase FLEX-DIRECTION; fix centr in ALIGN-ITEMS+semicolon; lowercase JUSTIFY-CONTENT; fix paddng; lowercase MARGIN+semicolon; lowercase GAP; lowercase FONT-SIZE+semicolon; lowercase FONT-WEIGHT; lowercase FONT-FAMILY+semicolon; lowercase LINE-HEIGHT; lowercase LETTER-SPACING+semicolon; lowercase TEXT-ALIGN; fix postion+semicolon; lowercase OVERFLOW; lowercase Z-INDEX+semicolon; lowercase CURSOR; lowercase OPACITY+semicolon; lowercase VISIBILITY; lowercase TRANSITION+semicolon; lowercase BORDER; fix bordr-top+semicolon; fix border-raduis; lowercase BOX-SHADOW+semicolon; lowercase OUTLINE; lowercase POINTER-EVENTS+semicolon; lowercase USER-SELECT; lowercase TEXT-DECORATION+semicolon; lowercase WHITE-SPACE; lowercase WORD-BREAK+semicolon; lowercase VERTICAL-ALIGN; lowercase OVERFLOW-X+semicolon; lowercase OVERFLOW-Y; fix background-imge+semicolon; lowercase MIN-WIDTH; lowercase FLEX-WRAP+semicolon; fix centr in ALIGN-CONTENT; fix HIEGHT (no final semicolon)."
},

  ],
};