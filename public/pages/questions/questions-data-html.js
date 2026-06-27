/* ── HTML Typing Questions Data ── */

const HTML_QUESTIONS = {
  Easy: [
  { q: "Sabse bada heading tag konsa hai? (sirf tag likhein, jaise: <h1>)", ans: "<h1>", hint: "Yeh h se start hota hai aur number 1 hota hai" },
  { q: "HTML document ka start tag konsa hota hai?", ans: "<html>", hint: "Poora page isi tag ke andar hota hai" },
  { q: "Paragraph likhne ke liye konsa tag use hota hai?", ans: "<p>", hint: "Is tag ka naam paragraph ka short form hai" },
  { q: "Line break ke liye konsa tag use hota hai?", ans: "<br>", hint: "Yeh line ko next line par le jata hai" },
  { q: "Image add karne ke liye konsa tag use hota hai?", ans: "<img>", hint: "Image ka short form" },
  
  { q: "Link banane ke liye konsa tag use hota hai?", ans: "<a>", hint: "Anchor tag" },
  { q: "HTML ka title kis tag mein likha jata hai?", ans: "<title>", hint: "Browser tab mein show hota hai" },
  { q: "Body content kis tag ke andar hota hai?", ans: "<body>", hint: "Page ka visible part" },
  { q: "Head section ke liye konsa tag use hota hai?", ans: "<head>", hint: "Body se pehle aata hai" },
  { q: "Sabse chhota heading tag konsa hai?", ans: "<h6>", hint: "Heading tags mein sabse bada number" },
  
  { q: "Unordered list ke liye konsa tag use hota hai?", ans: "<ul>", hint: "Bullet list" },
  { q: "Ordered list ke liye konsa tag use hota hai?", ans: "<ol>", hint: "Number list" },
  { q: "List item ke liye konsa tag use hota hai?", ans: "<li>", hint: "List ka item" },
  { q: "Table banane ke liye konsa tag use hota hai?", ans: "<table>", hint: "Rows aur columns ke liye" },
  { q: "Table row ke liye konsa tag use hota hai?", ans: "<tr>", hint: "Table row" },
  
  { q: "Table data cell ke liye konsa tag use hota hai?", ans: "<td>", hint: "Table data" },
  { q: "Table heading cell ke liye konsa tag use hota hai?", ans: "<th>", hint: "Table heading" },
  { q: "Form banane ke liye konsa tag use hota hai?", ans: "<form>", hint: "User input ke liye" },
  { q: "Text input field ke liye konsa tag use hota hai?", ans: "<input>", hint: "User data enter karta hai" },
  { q: "Button banane ke liye konsa tag use hota hai?", ans: "<button>", hint: "Click karne wala element" },
  
  { q: "Dropdown list ke liye konsa tag use hota hai?", ans: "<select>", hint: "Options choose karne ke liye" },
  { q: "Dropdown option ke liye konsa tag use hota hai?", ans: "<option>", hint: "Select ke andar hota hai" },
  { q: "Textarea ke liye konsa tag use hota hai?", ans: "<textarea>", hint: "Multi-line text" },
  { q: "Horizontal line ke liye konsa tag use hota hai?", ans: "<hr>", hint: "Line draw karta hai" },
  { q: "Bold text ke liye basic tag konsa hai?", ans: "<b>", hint: "Bold ka first letter" },
  
  { q: "Italic text ke liye basic tag konsa hai?", ans: "<i>", hint: "Italic ka first letter" },
  { q: "Underline text ke liye konsa tag use hota hai?", ans: "<u>", hint: "Underline ka short form" },
  { q: "HTML comment start karne ka syntax kya hai?", ans: "<!--", hint: "Exclamation mark use hota hai" },
  { q: "HTML comment end karne ka syntax kya hai?", ans: "-->", hint: "Comment close karta hai" },
  { q: "Page ka main heading aksar kis tag mein likha jata hai?", ans: "<h1>", hint: "Sabse bada heading tag" },
  
  { q: "Division banane ke liye konsa tag use hota hai?", ans: "<div>", hint: "Layout ke liye famous tag" },
  { q: "Inline container ke liye konsa tag use hota hai?", ans: "<span>", hint: "Inline element" },
  { q: "Audio add karne ke liye konsa tag use hota hai?", ans: "<audio>", hint: "Sound play karne ke liye" },
  { q: "Video add karne ke liye konsa tag use hota hai?", ans: "<video>", hint: "Movie ya clip play karne ke liye" },
  { q: "HTML file ka extension kya hota hai?", ans: ".html", hint: "Dot se start hota hai" },
  
  { q: "Image source define karne wali attribute ka naam kya hai?", ans: "src", hint: "Source ka short form" },
  { q: "Link destination define karne wali attribute ka naam kya hai?", ans: "href", hint: "Hyper reference" },
  { q: "Alternative image text ke liye attribute ka naam kya hai?", ans: "alt", hint: "Alternative text" },
  { q: "Page background ya styling ke liye CSS kis tag se link hoti hai?", ans: "<link>", hint: "External file connect karta hai" },
  { q: "CSS file ka relation batane wali attribute kya hai?", ans: "rel", hint: "Relationship define karti hai" },
  
  { q: "HTML mein checkbox input type kya hota hai?", ans: "checkbox", hint: "Tick karne wala box" },
  { q: "Email field ke liye input type kya hota hai?", ans: "email", hint: "Email address ke liye" },
  { q: "Password field ke liye input type kya hota hai?", ans: "password", hint: "Characters hide karta hai" },
  { q: "Number field ke liye input type kya hota hai?", ans: "number", hint: "Sirf numbers" },
  { q: "Date select karne ke liye input type kya hai?", ans: "date", hint: "Calendar show karta hai" },
  
  { q: "File upload ke liye input type kya hai?", ans: "file", hint: "Computer se file select karta hai" },
  { q: "Submit button ke liye input type kya hai?", ans: "submit", hint: "Form send karta hai" },
  { q: "Reset button ke liye input type kya hai?", ans: "reset", hint: "Form clear karta hai" },
  { q: "Radio button ke liye input type kya hai?", ans: "radio", hint: "Ek option select hota hai" },
  { q: "HTML ka full form kya hai?", ans: "HyperText Markup Language", hint: "Web pages banane ki language" },
  
  { q: "Web page ka visible hissa kis tag mein hota hai?", ans: "<body>", hint: "User ko dikhai deta hai" },
  { q: "Heading level 2 ke liye tag kya hai?", ans: "<h2>", hint: "h aur number 2" },
  { q: "Heading level 3 ke liye tag kya hai?", ans: "<h3>", hint: "h aur number 3" },
  { q: "Heading level 4 ke liye tag kya hai?", ans: "<h4>", hint: "h aur number 4" },
  { q: "Heading level 5 ke liye tag kya hai?", ans: "<h5>", hint: "h aur number 5" },
  
  { q: "Strong importance text ke liye tag kya hai?", ans: "<strong>", hint: "Bold se zyada semantic" },
  { q: "Emphasized text ke liye tag kya hai?", ans: "<em>", hint: "Italic meaning wala tag" },
  { q: "Navigation section ke liye tag kya hai?", ans: "<nav>", hint: "Menu links ke liye" },
  { q: "Footer ke liye tag kya hai?", ans: "<footer>", hint: "Page ke neeche hota hai" },
  { q: "Header ke liye tag kya hai?", ans: "<header>", hint: "Page ke upar hota hai" },
  
  { q: "Main content ke liye tag kya hai?", ans: "<main>", hint: "Important content" },
  { q: "Section banane ke liye tag kya hai?", ans: "<section>", hint: "Content group karta hai" },
  { q: "Article ke liye tag kya hai?", ans: "<article>", hint: "Independent content" },
  { q: "Sidebar ke liye tag kya hai?", ans: "<aside>", hint: "Side content" },
  { q: "Caption ke liye table mein konsa tag use hota hai?", ans: "<caption>", hint: "Table title" },
  
  { q: "Image map area define karne ke liye tag kya hai?", ans: "<area>", hint: "Clickable image part" },
  { q: "Progress bar ke liye tag kya hai?", ans: "<progress>", hint: "Loading progress" },
  { q: "Meter value show karne ke liye tag kya hai?", ans: "<meter>", hint: "Measurement display" },
  { q: "Embedded content ke liye tag kya hai?", ans: "<embed>", hint: "External content insert karta hai" },
  { q: "Iframe ke liye tag kya hai?", ans: "<iframe>", hint: "Ek page ke andar doosra page" },
  
  { q: "HTML document type declaration kya hai?", ans: "<!DOCTYPE html>", hint: "File ke start mein hota hai" },
  { q: "Character encoding set karne ke liye common value kya hai?", ans: "UTF-8", hint: "Most common encoding" },
  { q: "Label banane ke liye tag kya hai?", ans: "<label>", hint: "Form field ka naam" },
  { q: "Group of options ke liye tag kya hai?", ans: "<optgroup>", hint: "Dropdown grouping" },
  { q: "Field grouping ke liye tag kya hai?", ans: "<fieldset>", hint: "Form fields group karta hai" },
  
  { q: "Fieldset title ke liye tag kya hai?", ans: "<legend>", hint: "Group ka title" },
  { q: "Data list ke liye tag kya hai?", ans: "<datalist>", hint: "Suggested options" },
  { q: "Definition list ke liye tag kya hai?", ans: "<dl>", hint: "Definition list" },
  { q: "Definition term ke liye tag kya hai?", ans: "<dt>", hint: "Term define karta hai" },
  { q: "Definition description ke liye tag kya hai?", ans: "<dd>", hint: "Definition detail" },
  
  { q: "Preformatted text ke liye tag kya hai?", ans: "<pre>", hint: "Spaces preserve karta hai" },
  { q: "Code display karne ke liye tag kya hai?", ans: "<code>", hint: "Programming code" },
  { q: "Keyboard input ke liye tag kya hai?", ans: "<kbd>", hint: "Keyboard keys" },
  { q: "Sample output ke liye tag kya hai?", ans: "<samp>", hint: "Program output" },
  { q: "Quoted text ke liye inline tag kya hai?", ans: "<q>", hint: "Short quotation" },
  
  { q: "Long quotation ke liye tag kya hai?", ans: "<blockquote>", hint: "Large quote block" },
  { q: "Abbreviation ke liye tag kya hai?", ans: "<abbr>", hint: "Short form explain karta hai" },
  { q: "Address information ke liye tag kya hai?", ans: "<address>", hint: "Contact details" },
  { q: "Deleted text ke liye tag kya hai?", ans: "<del>", hint: "Removed text" },
  { q: "Inserted text ke liye tag kya hai?", ans: "<ins>", hint: "Added text" },
  
  { q: "Highlighted text ke liye tag kya hai?", ans: "<mark>", hint: "Yellow highlight jaisa" },
  { q: "Small text ke liye tag kya hai?", ans: "<small>", hint: "Chhota text" },
  { q: "Subscript text ke liye tag kya hai?", ans: "<sub>", hint: "Neeche likha jata hai" },
  { q: "Superscript text ke liye tag kya hai?", ans: "<sup>", hint: "Upar likha jata hai" },
  { q: "Time value show karne ke liye tag kya hai?", ans: "<time>", hint: "Date ya time" },
  
  { q: "Figure container ke liye tag kya hai?", ans: "<figure>", hint: "Image aur diagram group" },
  { q: "Figure caption ke liye tag kya hai?", ans: "<figcaption>", hint: "Figure ka title" },
  { q: "Script add karne ke liye tag kya hai?", ans: "<script>", hint: "JavaScript ke liye" },
  { q: "External CSS connect karne ke liye tag kya hai?", ans: "<link>", hint: "CSS file attach karta hai" },
  { q: "Metadata ke liye common tag kya hai?", ans: "<meta>", hint: "Head section mein hota hai" }
  ],


  Medium: [
  { q: "HTML mein page ka title browser tab mein dikhane ke liye konsa tag use hota hai?", ans: "<title>", hint: "Ye tag head section ke andar hota hai" },
  { q: "External CSS file ko connect karne ke liye konsa tag use hota hai?", ans: "<link>", hint: "Head section mein lagta hai" },
  { q: "External CSS file ka path dene ke liye kaunsi attribute use hoti hai?", ans: "href", hint: "Link destination batati hai" },
  { q: "HTML mein unique identifier dene ke liye kaunsi attribute use hoti hai?", ans: "id", hint: "Ek page mein unique honi chahiye" },
  { q: "Multiple elements ko same group mein rakhne ke liye kaunsi attribute use hoti hai?", ans: "class", hint: "CSS aur JS mein bahut use hoti hai" },

  { q: "Image ki width set karne ke liye kaunsi attribute use hoti hai?", ans: "width", hint: "Pixels mein value di ja sakti hai" },
  { q: "Image ki height set karne ke liye kaunsi attribute use hoti hai?", ans: "height", hint: "Width ke saath use hoti hai" },
  { q: "Link ko naye tab mein open karne ke liye target ki kya value use hoti hai?", ans: "_blank", hint: "New tab open hota hai" },
  { q: "HTML mein email link banane ke liye href kis se start hota hai?", ans: "mailto:", hint: "Email open karta hai" },
  { q: "Phone call link banane ke liye href kis se start hota hai?", ans: "tel:", hint: "Mobile dialer open karta hai" },

  { q: "Table mein row span karne ke liye kaunsi attribute use hoti hai?", ans: "rowspan", hint: "Rows merge karti hai" },
  { q: "Table mein column span karne ke liye kaunsi attribute use hoti hai?", ans: "colspan", hint: "Columns merge karti hai" },
  { q: "Form submit hone par URL define karne ke liye kaunsi attribute use hoti hai?", ans: "action", hint: "Form data kahan bhejna hai" },
  { q: "Form submit method define karne ke liye kaunsi attribute use hoti hai?", ans: "method", hint: "GET ya POST" },
  { q: "Password field banane ke liye input type kya hota hai?", ans: "password", hint: "Characters hide ho jate hain" },

  { q: "User se number input lene ke liye input type kya hota hai?", ans: "number", hint: "Sirf numeric values" },
  { q: "Color picker dikhane ke liye input type kya hai?", ans: "color", hint: "Color choose kar sakte hain" },
  { q: "File upload karne ke liye input type kya hai?", ans: "file", hint: "Computer se file select hoti hai" },
  { q: "Email validation ke liye input type kya hai?", ans: "email", hint: "Email format check karta hai" },

  { q: "Required field banane ke liye kaunsi attribute use hoti hai?", ans: "required", hint: "Khali nahi chhor sakte" },
  { q: "Input field mein placeholder text dikhane ke liye kaunsi attribute use hoti hai?", ans: "placeholder", hint: "Hint text show karti hai" },
  { q: "Input field ko read-only banane ke liye kaunsi attribute use hoti hai?", ans: "readonly", hint: "Edit nahi kar sakte" },
  { q: "Input field ko disable karne ke liye kaunsi attribute use hoti hai?", ans: "disabled", hint: "Use nahi kar sakte" },
  { q: "Checkbox ko default checked rakhne ke liye kaunsi attribute use hoti hai?", ans: "checked", hint: "Automatically selected hota hai" },
 
  { q: "Dropdown mein default selected option ke liye kaunsi attribute use hoti hai?", ans: "selected", hint: "Option pe lagti hai" },
  { q: "HTML5 mein audio play karne ke liye konsa tag use hota hai?", ans: "<audio>", hint: "Music ya sound ke liye" },
  { q: "HTML5 mein video play karne ke liye konsa tag use hota hai?", ans: "<video>", hint: "Video content ke liye" },
  { q: "Audio ya video file ka source define karne ke liye konsa tag use hota hai?", ans: "<source>", hint: "Media tags ke andar hota hai" },
  { q: "Web page ke main content ke liye HTML5 tag konsa hai?", ans: "<main>", hint: "Main content area" },

  { q: "Navigation links ke liye HTML5 tag konsa hai?", ans: "<nav>", hint: "Menu section" },
  { q: "Independent content article ke liye HTML5 tag konsa hai?", ans: "<article>", hint: "Blog post jaisa content" },
  { q: "Page ke footer ke liye HTML5 tag konsa hai?", ans: "<footer>", hint: "Neeche wala section" },
  { q: "Page ke top section ke liye HTML5 tag konsa hai?", ans: "<header>", hint: "Upar wala section" },
  { q: "Side content ke liye HTML5 tag konsa hai?", ans: "<aside>", hint: "Sidebar jaisa content" },

  { q: "HTML mein comment close karne ka syntax kya hai?", ans: "-->", hint: "Comment end karta hai" },
  { q: "Ordered list mein numbering hoti hai. Iska tag kya hai?", ans: "<ol>", hint: "Ordered List" },
  { q: "Bullet list ke liye konsa tag use hota hai?", ans: "<ul>", hint: "Unordered List" },
  { q: "List item ke liye tag kya hai?", ans: "<li>", hint: "List ke andar hota hai" },

  { q: "HTML mein sabse bada heading tag konsa hai?", ans: "<h1>", hint: "Heading level 1" },
  { q: "HTML mein sabse chhota heading tag konsa hai?", ans: "<h6>", hint: "Heading level 6" },
  { q: "Block-level container ke liye konsa tag use hota hai?", ans: "<div>", hint: "Layout mein use hota hai" },
  { q: "HTML page ka visible content kis tag ke andar hota hai?", ans: "<body>", hint: "User ko dikhai deta hai" },

  { q: "Metadata kis tag ke andar likhi jati hai?", ans: "<head>", hint: "Body se pehle aata hai" },
  { q: "Character encoding set karne ke liye commonly kaunsi value use hoti hai?", ans: "UTF-8", hint: "Most common encoding" },
  { q: "Image alternative text dene ke liye kaunsi attribute use hoti hai?", ans: "alt", hint: "Image load na ho to show hota hai" },
  { q: "JavaScript ko HTML mein add karne ke liye konsa tag use hota hai?", ans: "<script>", hint: "JS code ke liye" },

{ q: "HTML mein page ko refresh karne ke liye meta tag ki kaunsi attribute use hoti hai?", ans: "http-equiv", hint: "Meta tag mein use hoti hai" },
{ q: "Image ko clickable link banane ke liye image kis tag ke andar rakhi jati hai?", ans: "<a>", hint: "Anchor tag" },
{ q: "Form data URL mein send karne wali method kya hai?", ans: "GET", hint: "Data URL mein show hota hai" },
{ q: "Form data hidden rakhne wali method kya hai?", ans: "POST", hint: "URL mein show nahi hota" },
{ q: "Hidden field banane ke liye input type kya hai?", ans: "hidden", hint: "User ko nazar nahi aata" },

{ q: "Search field banane ke liye input type kya hai?", ans: "search", hint: "Search box ke liye" },
{ q: "Website URL input ke liye input type kya hai?", ans: "url", hint: "Web address validate karta hai" },
{ q: "Time select karne ke liye input type kya hai?", ans: "time", hint: "Hours aur minutes" },
{ q: "Month select karne ke liye input type kya hai?", ans: "month", hint: "Month aur year" },
{ q: "Week select karne ke liye input type kya hai?", ans: "week", hint: "Calendar week" },

{ q: "Range slider ke liye input type kya hai?", ans: "range", hint: "Slider control" },
{ q: "Form field ko minimum value dene ke liye attribute kya hai?", ans: "min", hint: "Number inputs mein use hoti hai" },
{ q: "Form field ko maximum value dene ke liye attribute kya hai?", ans: "max", hint: "Upper limit set karti hai" },
{ q: "Input field ki maximum length set karne ke liye attribute kya hai?", ans: "maxlength", hint: "Characters limit karti hai" },
{ q: "Input field ki minimum length set karne ke liye attribute kya hai?", ans: "minlength", hint: "Required character count" },

{ q: "Input field ko automatically focus dene ke liye attribute kya hai?", ans: "autofocus", hint: "Page load par focus hota hai" },
{ q: "Form autocomplete enable karne ke liye attribute kya hai?", ans: "autocomplete", hint: "Browser suggestions" },
{ q: "HTML5 canvas banane ke liye konsa tag use hota hai?", ans: "<canvas>", hint: "Graphics draw karne ke liye" },
{ q: "SVG graphics ke liye konsa tag use hota hai?", ans: "<svg>", hint: "Vector graphics" },
{ q: "Progress indicator ke liye konsa tag use hota hai?", ans: "<progress>", hint: "Loading percentage" },

{ q: "Measurement value show karne ke liye konsa tag use hota hai?", ans: "<meter>", hint: "Gauge jaisa element" },
{ q: "Figure caption ke liye konsa tag use hota hai?", ans: "<figcaption>", hint: "Figure ka title" },
{ q: "Image aur caption ko group karne ke liye tag kya hai?", ans: "<figure>", hint: "Media grouping" },
{ q: "Text ko mark/highlight karne ke liye tag kya hai?", ans: "<mark>", hint: "Yellow highlight jaisa" },
{ q: "Deleted text show karne ke liye tag kya hai?", ans: "<del>", hint: "Strike-through text" },

{ q: "Inserted text show karne ke liye tag kya hai?", ans: "<ins>", hint: "Added text" },
{ q: "Keyboard input dikhane ke liye tag kya hai?", ans: "<kbd>", hint: "Keyboard keys" },

{ q: "Computer code ke liye tag kya hai?", ans: "<code>", hint: "Programming code" },
{ q: "Short quotation ke liye tag kya hai?", ans: "<q>", hint: "Inline quote" },

{ q: "Contact information ke liye tag kya hai?", ans: "<address>", hint: "Address aur contact details" },
{ q: "HTML mein table title ke liye tag kya hai?", ans: "<caption>", hint: "Table heading" },
{ q: "Table body ke liye tag kya hai?", ans: "<tbody>", hint: "Main rows section" },
{ q: "Table header section ke liye tag kya hai?", ans: "<thead>", hint: "Heading rows" },
{ q: "Table footer section ke liye tag kya hai?", ans: "<tfoot>", hint: "Bottom section" },

{ q: "Dropdown options ko group karne ke liye tag kya hai?", ans: "<optgroup>", hint: "Options grouping" },
{ q: "Form fields ko group karne ke liye tag kya hai?", ans: "<fieldset>", hint: "Field group" },
{ q: "Suggested options ke liye tag kya hai?", ans: "<datalist>", hint: "Autocomplete options" },

{ q: "Embedded webpage ke liye tag kya hai?", ans: "<iframe>", hint: "Page ke andar page" },
{ q: "External content embed karne ke liye tag kya hai?", ans: "<embed>", hint: "External resource" },
{ q: "HTML metadata define karne ke liye tag kya hai?", ans: "<meta>", hint: "Head section mein hota hai" },

{ q: "HTML mein favicon add karne ke liye konsa tag use hota hai?", ans: "<link>", hint: "Head section mein hota hai" },
{ q: "Favicon file ka path dene ke liye kaunsi attribute use hoti hai?", ans: "href", hint: "File location batati hai" },
{ q: "HTML5 mein semantic content block ke liye konsa tag use hota hai?", ans: "<section>", hint: "Content ko sections mein divide karta hai" },
{ q: "Independent blog post ke liye semantic tag kya hai?", ans: "<article>", hint: "Standalone content" },
{ q: "Navigation menu ke liye semantic tag kya hai?", ans: "<nav>", hint: "Links ka group" },

{ q: "Sidebar content ke liye semantic tag kya hai?", ans: "<aside>", hint: "Side information" },
{ q: "Page ke main visible content ke liye semantic tag kya hai?", ans: "<main>", hint: "Primary content" },
{ q: "Input field ko required banane wali attribute kya hai?", ans: "required", hint: "Khali submit nahi hoga" },
{ q: "Input field mein default value set karne ke liye attribute kya hai?", ans: "value", hint: "Starting value" },
{ q: "Input field ka naam define karne ke liye attribute kya hai?", ans: "name", hint: "Form submit mein use hoti hai" },

{ q: "Textarea ki rows set karne ke liye attribute kya hai?", ans: "rows", hint: "Height define karti hai" },
{ q: "Textarea ki columns set karne ke liye attribute kya hai?", ans: "cols", hint: "Width define karti hai" },
{ q: "Image ko tooltip dene ke liye attribute kya hai?", ans: "title", hint: "Mouse hover par show hota hai" },
{ q: "Link ko tooltip dene ke liye attribute kya hai?", ans: "title", hint: "Hover text" },
{ q: "HTML mein page language set karne ke liye attribute kya hai?", ans: "lang", hint: "html tag mein use hoti hai" },

{ q: "English language code kya hai?", ans: "en", hint: "2 letters ka code" },
{ q: "HTML entity '&lt;' kis symbol ko represent karti hai?", ans: "<", hint: "Less than sign" },
{ q: "HTML entity '&gt;' kis symbol ko represent karti hai?", ans: ">", hint: "Greater than sign" },
{ q: "HTML entity '&amp;' kis symbol ko represent karti hai?", ans: "&", hint: "And symbol" },
{ q: "HTML entity '&quot;' kis symbol ko represent karti hai?", ans: "\"", hint: "Double quotation mark" },

{ q: "HTML entity '&nbsp;' kya create karti hai?", ans: "space", hint: "Non-breaking space" },
{ q: "Audio controls show karne ke liye attribute kya hai?", ans: "controls", hint: "Play/Pause buttons" },
{ q: "Video controls show karne ke liye attribute kya hai?", ans: "controls", hint: "Media buttons" },
{ q: "Video automatically play karne ke liye attribute kya hai?", ans: "autoplay", hint: "Page load par start" },
{ q: "Video mute karne ke liye attribute kya hai?", ans: "muted", hint: "Sound band" },

{ q: "Video repeat karne ke liye attribute kya hai?", ans: "loop", hint: "Bar bar chalega" },
{ q: "Audio repeat karne ke liye attribute kya hai?", ans: "loop", hint: "Repeat playback" },
{ q: "Image map banane ke liye tag kya hai?", ans: "<map>", hint: "Clickable image areas" },
{ q: "Image map ke clickable area ke liye tag kya hai?", ans: "<area>", hint: "Map ke andar hota hai" },
{ q: "Ordered list ko A, B, C format mein dikhane ke liye type value kya hai?", ans: "A", hint: "Capital letters" },

{ q: "Ordered list ko I, II, III format mein dikhane ke liye type value kya hai?", ans: "I", hint: "Roman numerals" },
{ q: "Form submit button banane ke liye button type kya hai?", ans: "submit", hint: "Form bhejta hai" },
{ q: "Form reset button banane ke liye button type kya hai?", ans: "reset", hint: "Form clear karta hai" },

{ q: "Normal clickable button ke liye button type kya hai?", ans: "button", hint: "Default action nahi karta" },
{ q: "HTML mein drag and drop support ke liye attribute kya hai?", ans: "draggable", hint: "True ya false value" },
{ q: "Editable content banane ke liye attribute kya hai?", ans: "contenteditable", hint: "Text edit ho sakta hai" },
{ q: "Element ko hide karne ke liye attribute kya hai?", ans: "hidden", hint: "Display nahi hota" },
{ q: "Spell checking enable karne ke liye attribute kya hai?", ans: "spellcheck", hint: "Typing mistakes check karta hai" },

{ q: "HTML mein image loading slow hone par alternative text kis attribute se show hota hai?", ans: "alt", hint: "Accessibility ke liye bhi use hota hai" },
{ q: "HTML page ka root element konsa hai?", ans: "<html>", hint: "Sab tags ka parent" },
{ q: "Browser ko responsive design batane ke liye common meta name kya hai?", ans: "viewport", hint: "Mobile devices ke liye" },
{ q: "Viewport meta mein width ki common value kya hai?", ans: "device-width", hint: "Screen width ke equal" },
{ q: "Input field mein pattern validation ke liye attribute kya hai?", ans: "pattern", hint: "Regular expression use karti hai" },

{ q: "File input mein multiple files select karne ke liye attribute kya hai?", ans: "multiple", hint: "Ek se zyada files" },
{ q: "Dropdown mein ek se zyada options select karne ke liye attribute kya hai?", ans: "multiple", hint: "Multi-select list" },
{ q: "HTML5 mein date aur time dono select karne ke liye input type kya hai?", ans: "datetime-local", hint: "Date + time together" },
{ q: "Telephone input ke liye input type kya hai?", ans: "tel", hint: "Phone number field" },
{ q: "HTML mein script file connect karne ke liye konsa tag use hota hai?", ans: "<script>", hint: "JavaScript ke liye" },

{ q: "External JavaScript file connect karne ke liye script tag ki kaunsi attribute use hoti hai?", ans: "src", hint: "File path deti hai" },
{ q: "HTML mein image ka source define karne wali attribute kya hai?", ans: "src", hint: "Image location" },
{ q: "Anchor tag mein destination URL dene ke liye attribute kya hai?", ans: "href", hint: "Link address" },
{ q: "HTML element par unique naam dene ke liye attribute kya hai?", ans: "id", hint: "Unique identifier" },
{ q: "Multiple elements ko group karne ke liye attribute kya hai?", ans: "class", hint: "CSS mein use hoti hai" },

{ q: "Image ko lazy load karne ke liye loading attribute ki value kya hoti hai?", ans: "lazy", hint: "Page speed improve karti hai" },
{ q: "Image ko immediately load karne ke liye loading attribute ki value kya hoti hai?", ans: "eager", hint: "Default behavior" },
{ q: "Form field ke label ko input se connect karne ke liye label ki attribute kya hai?", ans: "for", hint: "Input id se match karti hai" },
{ q: "Input field ko identify karne ke liye commonly kaunsi attribute use hoti hai?", ans: "id", hint: "Label ke saath use hoti hai" },
{ q: "HTML mein keyboard shortcut assign karne ke liye attribute kya hai?", ans: "accesskey", hint: "Shortcut key" },

{ q: "Element ke text direction set karne ke liye attribute kya hai?", ans: "dir", hint: "ltr ya rtl" },
{ q: "Left-to-right text direction ki value kya hai?", ans: "ltr", hint: "English jaisi languages" },
{ q: "Right-to-left text direction ki value kya hai?", ans: "rtl", hint: "Arabic jaisi languages" },
{ q: "Element ko drag karne ke liye draggable ki common value kya hai?", ans: "true", hint: "Drag enable karta hai" },
{ q: "HTML mein description metadata dene ke liye meta name kya hota hai?", ans: "description", hint: "SEO ke liye use hota hai" },

{ q: "Keywords metadata ke liye meta name kya hota hai?", ans: "keywords", hint: "Search engines ke liye" },
{ q: "Author metadata ke liye meta name kya hota hai?", ans: "author", hint: "Page creator" },
{ q: "HTML mein base URL define karne ke liye konsa tag use hota hai?", ans: "<base>", hint: "Relative URLs ke liye" },
{ q: "HTML mein text ko bold importance dene ke liye semantic tag kya hai?", ans: "<strong>", hint: "Important text" },
{ q: "HTML mein emphasized text ke liye semantic tag kya hai?", ans: "<em>", hint: "Stress emphasis" },

{ q: "HTML mein line break ke liye self-closing tag kya hai?", ans: "<br>", hint: "Next line" },
{ q: "Horizontal separator line ke liye tag kya hai?", ans: "<hr>", hint: "Line draw karta hai" },
{ q: "HTML document ki encoding define karne ke liye meta attribute kya hai?", ans: "charset", hint: "UTF-8 ke saath use hoti hai" },
{ q: "Common UTF encoding value kya hai?", ans: "UTF-8", hint: "Most websites use karti hain" },
{ q: "HTML5 mein output result show karne ke liye tag kya hai?", ans: "<output>", hint: "Calculation result" },

{ q: "User ke task progress ko show karne ke liye tag kya hai?", ans: "<progress>", hint: "Loading bar" },
{ q: "Known range measurement dikhane ke liye tag kya hai?", ans: "<meter>", hint: "Gauge jaisa" },
{ q: "Details hide/show karne ke liye tag kya hai?", ans: "<details>", hint: "Expandable section" },
{ q: "Details tag ka heading/title dikhane ke liye tag kya hai?", ans: "<summary>", hint: "Clickable heading" },
{ q: "HTML mein highlighted search result dikhane ke liye tag kya hai?", ans: "<mark>", hint: "Highlight effect" },

{ q: "Text ka deleted version dikhane ke liye tag kya hai?", ans: "<del>", hint: "Removed text" },
{ q: "Text ka inserted version dikhane ke liye tag kya hai?", ans: "<ins>", hint: "Added text" },
{ q: "Abbreviation explain karne ke liye commonly kaunsi attribute use hoti hai?", ans: "title", hint: "Hover par meaning" },
{ q: "Input field ko browser suggestions se bharne ke liye attribute kya hai?", ans: "autocomplete", hint: "On ya off" },
{ q: "HTML mein email address link kis protocol se start hota hai?", ans: "mailto:", hint: "Email client kholta hai" },

{ q: "Phone number link kis protocol se start hota hai?", ans: "tel:", hint: "Dialer open karta hai" },
{ q: "HTML table mein heading row ke liye cell tag kya hai?", ans: "<th>", hint: "Table heading" },
{ q: "HTML table mein normal data cell ke liye tag kya hai?", ans: "<td>", hint: "Table data" },
{ q: "HTML table mein row create karne ke liye tag kya hai?", ans: "<tr>", hint: "Table row" },
{ q: "HTML table ke main container ka tag kya hai?", ans: "<table>", hint: "Rows aur columns" },

{ q: "Dropdown menu create karne ke liye tag kya hai?", ans: "<select>", hint: "Options list" },
{ q: "Dropdown ke ek item ke liye tag kya hai?", ans: "<option>", hint: "Choice item" },
{ q: "Multi-line text input ke liye tag kya hai?", ans: "<textarea>", hint: "Paragraph input" },
{ q: "Clickable button create karne ke liye tag kya hai?", ans: "<button>", hint: "User click karta hai" },
{ q: "Form container ke liye tag kya hai?", ans: "<form>", hint: "User input collect karta hai" },

{ q: "Image display karne ke liye tag kya hai?", ans: "<img>", hint: "Picture show karta hai" },
{ q: "Hyperlink create karne ke liye tag kya hai?", ans: "<a>", hint: "Anchor tag" },
{ q: "Paragraph create karne ke liye tag kya hai?", ans: "<p>", hint: "Text paragraph" },
{ q: "Block container ke liye tag kya hai?", ans: "<div>", hint: "Layout structure" },
{ q: "Inline container ke liye tag kya hai?", ans: "<span>", hint: "Inline styling" },

{ q: "HTML mein image ke alternative text ke liye kaunsi attribute use hoti hai?", ans: "alt", hint: "Image load na ho to show hota hai" },
{ q: "Metadata kis tag ke andar likha jata hai?", ans: "<head>", hint: "Body se pehle hota hai" },
{ q: "HTML document ka root tag konsa hai?", ans: "<html>", hint: "Sab tags ka parent" },
{ q: "Sabse bada heading tag konsa hai?", ans: "<h1>", hint: "Heading level 1" },

{ q: "Paragraph ke liye konsa tag use hota hai?", ans: "<p>", hint: "Text paragraph" },
{ q: "HTML mein line break ke liye konsa tag use hota hai?", ans: "<br>", hint: "Next line par le jata hai" },
{ q: "Horizontal line draw karne ke liye konsa tag use hota hai?", ans: "<hr>", hint: "Separator line" },
{ q: "Bold text ke liye semantic tag konsa hai?", ans: "<strong>", hint: "Important text" },

{ q: "Italic emphasis ke liye semantic tag konsa hai?", ans: "<em>", hint: "Emphasized text" },
{ q: "Unordered list ke liye tag kya hai?", ans: "<ul>", hint: "Bullet list" },
{ q: "Ordered list ke liye tag kya hai?", ans: "<ol>", hint: "Numbered list" },

{ q: "Table heading ke liye tag kya hai?", ans: "<th>", hint: "Heading cell" },
{ q: "Table row ke liye tag kya hai?", ans: "<tr>", hint: "Row create karta hai" },
{ q: "Table data cell ke liye tag kya hai?", ans: "<td>", hint: "Data cell" },
{ q: "Table title ke liye tag kya hai?", ans: "<caption>", hint: "Table heading text" },

{ q: "Form submit hone par destination URL define karne wali attribute kya hai?", ans: "action", hint: "Data kahan jayega" },
{ q: "Form method define karne wali attribute kya hai?", ans: "method", hint: "GET ya POST" },
{ q: "Checkbox ke liye input type kya hai?", ans: "checkbox", hint: "Tick box" },
{ q: "Password field ke liye input type kya hai?", ans: "password", hint: "Characters hide karta hai" },

{ q: "Email field ke liye input type kya hai?", ans: "email", hint: "Email validate karta hai" },
{ q: "Number field ke liye input type kya hai?", ans: "number", hint: "Numeric values" },
{ q: "Date picker ke liye input type kya hai?", ans: "date", hint: "Calendar open hota hai" },
{ q: "Color picker ke liye input type kya hai?", ans: "color", hint: "Color choose karta hai" },

{ q: "HTML5 mein graphics draw karne ke liye tag kya hai?", ans: "<canvas>", hint: "Drawing area" },
{ q: "Vector graphics ke liye tag kya hai?", ans: "<svg>", hint: "Scalable graphics" },
{ q: "Audio play karne ke liye tag kya hai?", ans: "<audio>", hint: "Sound files" },
{ q: "Video play karne ke liye tag kya hai?", ans: "<video>", hint: "Video files" },
{ q: "Audio/Video source define karne ke liye tag kya hai?", ans: "<source>", hint: "Media file path" },

{ q: "Page ke footer ke liye semantic tag kya hai?", ans: "<footer>", hint: "Bottom section" },
{ q: "Page ke header ke liye semantic tag kya hai?", ans: "<header>", hint: "Top section" },
{ q: "Navigation links ke liye semantic tag kya hai?", ans: "<nav>", hint: "Menu links" },
{ q: "Independent content ke liye semantic tag kya hai?", ans: "<article>", hint: "Standalone content" },
{ q: "Content section ke liye semantic tag kya hai?", ans: "<section>", hint: "Content grouping" },

{ q: "Main content area ke liye semantic tag kya hai?", ans: "<main>", hint: "Primary content" },
{ q: "HTML file ka standard extension kya hai?", ans: ".html", hint: "Web page file" },

{ q: "JavaScript code add karne ke liye tag kya hai?", ans: "<script>", hint: "JS code" },
{ q: "Character encoding define karne ke liye meta attribute kya hai?", ans: "charset", hint: "UTF-8 ke saath use hoti hai" },
{ q: "Responsive design ke liye common meta name kya hai?", ans: "viewport", hint: "Mobile friendly pages" },
{ q: "Dropdown list create karne ke liye tag kya hai?", ans: "<select>", hint: "Options menu" },
{ q: "Dropdown option ke liye tag kya hai?", ans: "<option>", hint: "Select ke andar hota hai" },
],

  Hard: [
{ q: "HTML5 mein graphics draw karne ke liye konsa tag use hota hai?", ans: "<canvas>", hint: "JavaScript ke sath use hota hai" },
{ q: "Responsive web design ke liye common meta name kya hai?", ans: "viewport", hint: "Mobile devices ke liye" },
{ q: "Image ka source define karne wali attribute kya hai?", ans: "src", hint: "Image location" },

{ q: "Custom data store karne ke liye HTML5 attribute kis prefix se start hoti hai?", ans: "data-", hint: "Custom attributes" },
{ q: "Paragraph tag konsa hai?", ans: "<p>", hint: "Text paragraph" },
{ q: "Form submit hone par data kahan bhejna hai, iske liye attribute kya hai?", ans: "action", hint: "URL define karti hai" },
{ q: "HTML document ka root element konsa hai?", ans: "<html>", hint: "Sab tags ka parent" },
{ q: "SVG ka full form kya hai?", ans: "Scalable Vector Graphics", hint: "Vector graphics format" },

{ q: "Dropdown menu ke liye tag kya hai?", ans: "<select>", hint: "Options list" },
{ q: "Form field ko required banane wali attribute kya hai?", ans: "required", hint: "Khali submit nahi hoga" },
{ q: "Semantic navigation section ke liye tag kya hai?", ans: "<nav>", hint: "Menu links" },

{ q: "Canvas graphics ko kis language se control kiya jata hai?", ans: "JavaScript", hint: "Browser scripting language" },
{ q: "Line break ke liye tag kya hai?", ans: "<br>", hint: "Next line" },
{ q: "Input type email kis cheez ko validate karta hai?", ans: "Email address", hint: "user@example.com" },
{ q: "Image alternative text ke liye attribute kya hai?", ans: "alt", hint: "Accessibility" },
{ q: "HTML5 local storage mein data permanently store karne ke object ka naam kya hai?", ans: "localStorage", hint: "Browser storage" },

{ q: "Table heading cell ke liye tag kya hai?", ans: "<th>", hint: "Heading cell" },
{ q: "Character encoding define karne ke liye attribute kya hai?", ans: "charset", hint: "UTF-8 ke sath use hoti hai" },
{ q: "Web page title kis tag mein likha jata hai?", ans: "<title>", hint: "Browser tab title" },

{ q: "HTML mein drag and drop enable karne wali attribute kya hai?", ans: "draggable", hint: "true/false value" },
{ q: "Video automatically chalane ke liye attribute kya hai?", ans: "autoplay", hint: "Page load par start" },
{ q: "HTML5 mein semantic main content tag kya hai?", ans: "<main>", hint: "Primary content" },
{ q: "Ordered list tag kya hai?", ans: "<ol>", hint: "Number list" },

{ q: "HTML form data hidden rakhne wali method kya hai?", ans: "POST", hint: "URL mein show nahi hota" },
{ q: "Iframe kis kaam ke liye use hota hai?", ans: "Webpage embed karne ke liye", hint: "Page ke andar page" },
{ q: "Metadata ke liye tag kya hai?", ans: "<meta>", hint: "Head section" },
{ q: "HTML5 geolocation kis browser API se related hai?", ans: "Geolocation API", hint: "Location access" },

{ q: "Button create karne ke liye tag kya hai?", ans: "<button>", hint: "Clickable element" },
{ q: "Input field ka naam define karne wali attribute kya hai?", ans: "name", hint: "Form submission" },
{ q: "External CSS file connect karne ke liye tag kya hai?", ans: "<link>", hint: "Stylesheet attach karta hai" },
{ q: "Session storage browser band hone par kya hota hai?", ans: "Data remove ho jata hai", hint: "Temporary storage" },
{ q: "HTML5 mein video file ka source define karne ke liye tag kya hai?", ans: "<source>", hint: "Media source" },

{ q: "Unordered list tag kya hai?", ans: "<ul>", hint: "Bullet list" },
{ q: "Form reset button ka type kya hai?", ans: "reset", hint: "Form clear karta hai" },
{ q: "Web accessibility mein alt attribute kis liye important hai?", ans: "Screen readers ke liye", hint: "Accessibility feature" },
{ q: "HTML5 semantic article tag kis liye use hota hai?", ans: "Independent content", hint: "Blog post jaisa content" },
{ q: "Favicon add karne ke liye tag kya hai?", ans: "<link>", hint: "Head section" },

{ q: "HTML page ka visible content kis tag mein hota hai?", ans: "<body>", hint: "User dekhta hai" },
{ q: "Pattern validation ke liye attribute kya hai?", ans: "pattern", hint: "Regular expressions" },
{ q: "HTML5 mein offline web applications ke concept ko kya kaha jata hai?", ans: "Offline Storage", hint: "Browser data storage" },
{ q: "Textarea tag kis liye use hota hai?", ans: "Multi-line text input", hint: "Paragraph input" },
{ q: "HTML5 mein vector graphics ke liye tag kya hai?", ans: "<svg>", hint: "Scalable graphics" },

{ q: "HTML mein heading level 3 ke liye konsa tag use hota hai?", ans: "<h3>", hint: "h aur number 3" },
{ q: "HTML5 mein user ki current location lene ke liye API ka naam kya hai?", ans: "Geolocation API", hint: "Location access" },
{ q: "Image ko lazy load karne ke liye loading attribute ki value kya hai?", ans: "lazy", hint: "Page speed improve karti hai" },
{ q: "HTML document ka title kis tag mein hota hai?", ans: "<title>", hint: "Browser tab" },
{ q: "Form data URL mein show karne wali method kya hai?", ans: "GET", hint: "Address bar mein dikhta hai" },

{ q: "Custom attributes kis prefix se start hote hain?", ans: "data-", hint: "HTML5 feature" },
{ q: "HTML mein image display karne ke liye tag kya hai?", ans: "<img>", hint: "Picture show karta hai" },
{ q: "Browser mein data permanently store karne ke object ka naam kya hai?", ans: "localStorage", hint: "Storage API" },
{ q: "Input field ko automatic focus dene ke liye attribute kya hai?", ans: "autofocus", hint: "Page load par focus" },

{ q: "Table ke main container ka tag kya hai?", ans: "<table>", hint: "Rows aur columns" },
{ q: "HTML5 mein audio play karne ke liye tag kya hai?", ans: "<audio>", hint: "Sound files" },
{ q: "Form field ki maximum length set karne ke liye attribute kya hai?", ans: "maxlength", hint: "Character limit" },
{ q: "Semantic sidebar content ke liye tag kya hai?", ans: "<aside>", hint: "Side information" },

{ q: "Input type password kis liye use hota hai?", ans: "Password field", hint: "Characters hide hote hain" },
{ q: "HTML5 canvas ko control karne ke liye kaunsi language use hoti hai?", ans: "JavaScript", hint: "Scripting language" },
{ q: "Anchor tag mein URL define karne ke liye attribute kya hai?", ans: "href", hint: "Link address" },
{ q: "Ordered list mein items ke liye tag kya hai?", ans: "<li>", hint: "List item" },
{ q: "Responsive design ke liye viewport meta ki common width value kya hai?", ans: "device-width", hint: "Screen width" },

{ q: "HTML page ka visible section kis tag mein hota hai?", ans: "<body>", hint: "User dekhta hai" },
{ q: "Video ko mute karne ke liye attribute kya hai?", ans: "muted", hint: "Sound off" },
{ q: "Textarea ki width define karne ke liye attribute kya hai?", ans: "cols", hint: "Columns count" },

{ q: "Form submit button ka type kya hai?", ans: "submit", hint: "Form bhejta hai" },
{ q: "Semantic standalone content ke liye tag kya hai?", ans: "<article>", hint: "Blog post jaisa" },
{ q: "HTML mein horizontal line ke liye tag kya hai?", ans: "<hr>", hint: "Separator line" },
{ q: "Browser band hone par remove hone wali storage kya hai?", ans: "sessionStorage", hint: "Temporary storage" },
{ q: "HTML5 mein drawing area create karne ke liye tag kya hai?", ans: "<canvas>", hint: "Graphics drawing" },

{ q: "Element ko unique identify karne ke liye attribute kya hai?", ans: "id", hint: "Unique identifier" },
{ q: "HTML mein abbreviation ke liye tag kya hai?", ans: "<abbr>", hint: "Short form" },
{ q: "Page language define karne ke liye attribute kya hai?", ans: "lang", hint: "en, ur etc." },
{ q: "HTML5 drag and drop ke liye attribute kya hai?", ans: "draggable", hint: "True ya false" },

{ q: "Input type file kis liye use hota hai?", ans: "File upload", hint: "Files select karne ke liye" },
{ q: "HTML mein email link kis protocol se start hota hai?", ans: "mailto:", hint: "Email client open karta hai" },
{ q: "Form field ko compulsory banane ke liye attribute kya hai?", ans: "required", hint: "Empty submit nahi hoga" },
{ q: "HTML page ke metadata kis tag ke andar likhe jate hain?", ans: "<head>", hint: "Body se pehle" },

{ q: "HTML5 mein measurement gauge dikhane ke liye tag kya hai?", ans: "<meter>", hint: "Range value" },
{ q: "Input field mein regular expression validation ke liye attribute kya hai?", ans: "pattern", hint: "Regex support" },
{ q: "Semantic navigation links ke liye tag kya hai?", ans: "<nav>", hint: "Menu links" },

{ q: "HTML5 mein expandable content ke liye tag kya hai?", ans: "<details>", hint: "Show/Hide section" },
{ q: "Details tag ka clickable heading tag kya hai?", ans: "<summary>", hint: "Title text" },
{ q: "HTML page ka root element kya hai?", ans: "<html>", hint: "Sab tags ka parent" },
{ q: "External JavaScript file connect karne ke liye attribute kya hai?", ans: "src", hint: "File path" },

{ q: "HTML mein heading level 4 ke liye konsa tag use hota hai?", ans: "<h4>", hint: "h aur number 4" },
{ q: "HTML5 mein web page ke footer ke liye semantic tag kya hai?", ans: "<footer>", hint: "Page ka bottom section" },
{ q: "Image ke width set karne ke liye attribute kya hai?", ans: "width", hint: "Image size" },
{ q: "HTML form mein data encrypt karke bhejne ke liye kis protocol ka use hota hai?", ans: "HTTPS", hint: "Secure version of HTTP" },

{ q: "Table heading row ke liye cell tag kya hai?", ans: "<th>", hint: "Table heading" },
{ q: "HTML5 mein progress bar ke liye tag kya hai?", ans: "<progress>", hint: "Loading percentage" },
{ q: "Input type color kis liye use hota hai?", ans: "Color picker", hint: "Color select karne ke liye" },
{ q: "HTML page ki language set karne ke liye attribute kya hai?", ans: "lang", hint: "en ya ur" },
{ q: "HTML5 Web Storage API ke do main objects kaun se hain?", ans: "localStorage aur sessionStorage", hint: "Browser storage" },

{ q: "Paragraph tag kya hai?", ans: "<p>", hint: "Text paragraph" },
{ q: "HTML mein tooltip show karne ke liye attribute kya hai?", ans: "title", hint: "Hover text" },
{ q: "Semantic article tag kis type ke content ke liye use hota hai?", ans: "Independent content", hint: "Blog post jaisa" },
{ q: "HTML5 mein offline data store karne ki technology kya hai?", ans: "Web Storage", hint: "localStorage se related" },

{ q: "Input field ko disable karne ke liye attribute kya hai?", ans: "disabled", hint: "User edit nahi kar sakta" },
{ q: "Canvas aur SVG mein se kaunsa resolution independent hota hai?", ans: "SVG", hint: "Vector graphics" },

{ q: "Input type date kis liye use hota hai?", ans: "Date picker", hint: "Calendar open hota hai" },
{ q: "HTML5 mein geolocation user se kya access karti hai?", ans: "Location", hint: "Latitude aur longitude" },
{ q: "HTML page ke performance improve karne ke liye images par kaunsi loading value use ki jati hai?", ans: "lazy", hint: "Lazy loading" },

{ q: "Accessibility ke liye image par sabse important attribute kya hai?", ans: "alt", hint: "Alternative text" },

{ q: "HTML mein file upload ke liye input type kya hai?", ans: "file", hint: "File select karta hai" },
{ q: "Browser tab mein dikhne wala title kis tag mein likha jata hai?", ans: "<title>", hint: "Head section" },

{ q: "Image source define karne wali attribute kya hai?", ans: "src", hint: "Image location" },
{ q: "Canvas graphics ko control karne ke liye kaunsi language use hoti hai?", ans: "JavaScript", hint: "Scripting language" },

{ q: "HTML5 mein main content area ke liye semantic tag kya hai?", ans: "<main>", hint: "Primary content" },

{ q: "Custom HTML attributes kis prefix se start hote hain?", ans: "data-", hint: "HTML5 custom data" },
{ q: "HTML document ka root element kya hai?", ans: "<html>", hint: "Sab tags ka parent" },

{ q: "HTML mein heading level 5 ke liye konsa tag use hota hai?", ans: "<h5>", hint: "h aur number 5" },
{ q: "HTML5 mein semantic sidebar ke liye tag kya hai?", ans: "<aside>", hint: "Side content" },
{ q: "Web page ko search engines se hide karne ke liye robots meta ki value kya ho sakti hai?", ans: "noindex", hint: "Indexing stop karti hai" },

{ q: "Form reset karne ke liye button type kya hai?", ans: "reset", hint: "Form clear karta hai" },
{ q: "HTML5 mein figure caption ke liye tag kya hai?", ans: "<figcaption>", hint: "Figure title" },
{ q: "Browser ke session tak data store karne wala object kya hai?", ans: "sessionStorage", hint: "Temporary storage" },

{ q: "HTML5 mein semantic independent content ke liye tag kya hai?", ans: "<article>", hint: "Standalone content" },

{ q: "HTML page ke metadata kis tag ke andar hote hain?", ans: "<head>", hint: "Body se pehle" },
{ q: "HTML5 mein progress indicator ke liye tag kya hai?", ans: "<progress>", hint: "Loading percentage" },
{ q: "Browser mein permanently data save karne ke liye kaunsa storage object use hota hai?", ans: "localStorage", hint: "Persistent storage" },

{ q: "HTML5 mein measurement gauge ke liye tag kya hai?", ans: "<meter>", hint: "Range value" },
{ q: "Canvas graphics raster hoti hain ya vector?", ans: "Raster", hint: "Pixels par based" },

{ q: "Ordered list ke item ke liye tag kya hai?", ans: "<li>", hint: "List item" },
{ q: "Hyperlink ka URL define karne wali attribute kya hai?", ans: "href", hint: "Link address" },
{ q: "HTML page ki language define karne wali attribute kya hai?", ans: "lang", hint: "en, ur etc." },
{ q: "HTML5 mein video play karne ke liye tag kya hai?", ans: "<video>", hint: "Video files" },
{ q: "Responsive design ke liye meta name kya hai?", ans: "viewport", hint: "Mobile devices" },

{ q: "Input field ko readonly banane ke liye attribute kya hai?", ans: "readonly", hint: "Edit nahi ho sakta" },
{ q: "HTML5 Geolocation API kya provide karti hai?", ans: "User location", hint: "Latitude longitude" },

{ q: "HTML5 mein details expand/collapse karne ke liye tag kya hai?", ans: "<details>", hint: "Show/Hide section" },
{ q: "Details tag ka heading tag kya hai?", ans: "<summary>", hint: "Clickable title" },

{ q: "Input type number kis liye use hota hai?", ans: "Numeric input", hint: "Numbers only" },
{ q: "Semantic main content ke liye tag kya hai?", ans: "<main>", hint: "Primary content" },

{ q: "Input field ki maximum length define karne ke liye attribute kya hai?", ans: "maxlength", hint: "Character limit" },

{ q: "HTML5 mein audio file ke source ke liye tag kya hai?", ans: "<source>", hint: "Media file path" },
{ q: "Semantic header section ke liye tag kya hai?", ans: "<header>", hint: "Page top section" },
{ q: "HTML DOM ka full form kya hai?", ans: "Document Object Model", hint: "Page structure model" },

{ q: "Textarea ki height define karne ke liye attribute kya hai?", ans: "rows", hint: "Line count" },
{ q: "HTML5 mein figure aur caption ko group karne ke liye tag kya hai?", ans: "<figure>", hint: "Media grouping" },
{ q: "Web page ke character encoding ke liye common value kya hai?", ans: "UTF-8", hint: "Most websites use karti hain" },

{ q: "Input type tel kis liye use hota hai?", ans: "Phone number", hint: "Telephone input" },
{ q: "HTML5 mein SVG kis type ki graphics ke liye use hota hai?", ans: "Vector graphics", hint: "Scalable graphics" },
{ q: "HTML entity '&copy;' kya represent karti hai?", ans: "©", hint: "Copyright symbol" },

{ q: "Paragraph ke liye tag kya hai?", ans: "<p>", hint: "Text paragraph" },
{ q: "HTML5 mein embedded webpage ke liye tag kya hai?", ans: "<iframe>", hint: "Page ke andar page" },
{ q: "localStorage ka data kab remove hota hai?", ans: "Manually remove karne par", hint: "Permanent storage" },

{ q: "Input type search kis liye use hota hai?", ans: "Search field", hint: "Search box" },
{ q: "HTML5 mein editable content ke liye attribute kya hai?", ans: "contenteditable", hint: "Text edit ho sakta hai" },
{ q: "HTML entity '&euro;' kya represent karti hai?", ans: "€", hint: "Euro currency" },

{ q: "Table row create karne ke liye tag kya hai?", ans: "<tr>", hint: "Table row" },
{ q: "Input field ki minimum value set karne ke liye attribute kya hai?", ans: "min", hint: "Lower limit" },
{ q: "Browser cache ka purpose kya hai?", ans: "Page ko faster load karna", hint: "Performance" },

{ q: "Input type url kis liye use hota hai?", ans: "Website URL", hint: "Web address validation" },
{ q: "HTML5 mein drag and drop support ke liye attribute kya hai?", ans: "draggable", hint: "true ya false" },
{ q: "HTML entity '&reg;' kya represent karti hai?", ans: "®", hint: "Registered trademark" },

{ q: "Button ka default type kya hota hai?", ans: "submit", hint: "Form ke andar" },
{ q: "HTML5 mein semantic footer ke liye tag kya hai?", ans: "<footer>", hint: "Bottom section" },
{ q: "Viewport meta ka purpose kya hai?", ans: "Responsive design", hint: "Mobile screens" },

{ q: "Input field ki maximum value set karne ke liye attribute kya hai?", ans: "max", hint: "Upper limit" },
{ q: "HTML5 mein measurement indicator ke liye tag kya hai?", ans: "<meter>", hint: "Gauge element" },
{ q: "HTML entity '&trade;' kya represent karti hai?", ans: "™", hint: "Trademark symbol" },

{ q: "HTML5 mein semantic navigation ke liye tag kya hai?", ans: "<nav>", hint: "Menu links" },
{ q: "SessionStorage ka data kab remove hota hai?", ans: "Tab ya browser close hone par", hint: "Temporary storage" },

{ q: "HTML mein bold text ke liye semantic tag konsa hai?", ans: "<strong>", hint: "Important text" },
{ q: "HTML5 mein video source define karne ke liye tag kya hai?", ans: "<source>", hint: "Media file path" },
{ q: "Input type month kis liye use hota hai?", ans: "Month selector", hint: "Month aur year" },
{ q: "HTML5 mein abbreviation ke liye tag kya hai?", ans: "<abbr>", hint: "Short form" },
{ q: "HTML parser kis order mein tags ko process karta hai?", ans: "Top to bottom", hint: "Document flow" },

{ q: "HTML5 mein definition list ke liye tag kya hai?", ans: "<dl>", hint: "Definition list" },
{ q: "DOM tree mein sabse upar wala node kya hota hai?", ans: "Document", hint: "Root object" },

{ q: "Input type week kis liye use hota hai?", ans: "Week selector", hint: "Calendar week" },
{ q: "HTML5 mein keyboard input ke liye tag kya hai?", ans: "<kbd>", hint: "Keyboard keys" },
{ q: "Semantic HTML ka main purpose kya hai?", ans: "Meaningful structure", hint: "Accessibility aur SEO" },

{ q: "Input type time kis liye use hota hai?", ans: "Time selector", hint: "Hours aur minutes" },
{ q: "HTML5 mein code snippet ke liye tag kya hai?", ans: "<code>", hint: "Programming code" },
{ q: "SEO ka full form kya hai?", ans: "Search Engine Optimization", hint: "Search ranking" },

{ q: "Dropdown ke item ke liye tag kya hai?", ans: "<option>", hint: "Select ke andar" },
{ q: "HTML5 mein preformatted text ke liye tag kya hai?", ans: "<pre>", hint: "Spaces preserve karta hai" },
{ q: "Meta description ka primary purpose kya hai?", ans: "Page summary", hint: "SEO" },

{ q: "Hyperlink URL define karne wali attribute kya hai?", ans: "href", hint: "Link address" },
{ q: "Input type hidden kis liye use hota hai?", ans: "Hidden data", hint: "User ko nazar nahi aata" },
{ q: "HTML5 mein quotation ke liye tag kya hai?", ans: "<blockquote>", hint: "Long quote" },
{ q: "Accessibility mein ARIA ka full form kya hai?", ans: "Accessible Rich Internet Applications", hint: "Accessibility standard" },

{ q: "Input type range kis liye use hota hai?", ans: "Slider control", hint: "Range selection" },
{ q: "HTML5 mein contact information ke liye tag kya hai?", ans: "<address>", hint: "Contact details" },
{ q: "DOCTYPE declaration ka purpose kya hai?", ans: "Browser rendering mode define karna", hint: "Standards mode" },

{ q: "Input field ki minimum length define karne ke liye attribute kya hai?", ans: "minlength", hint: "Character limit" },
{ q: "HTML5 mein inserted text ke liye tag kya hai?", ans: "<ins>", hint: "Added text" },
{ q: "Favicon kis section mein define kiya jata hai?", ans: "<head>", hint: "Metadata section" },

{ q: "Input type datetime-local kis liye use hota hai?", ans: "Date and time selection", hint: "Combined picker" },
{ q: "HTML5 mein deleted text ke liye tag kya hai?", ans: "<del>", hint: "Removed text" },
{ q: "Meta charset='UTF-8' kis liye use hota hai?", ans: "Character encoding", hint: "Text display" },

{ q: "Form submit karne ke liye button type kya hai?", ans: "submit", hint: "Form bhejta hai" },
{ q: "HTML5 mein semantic main content ke liye tag kya hai?", ans: "<main>", hint: "Primary content" },
{ q: "Browser developer tools ka shortcut Chrome mein kya hai?", ans: "F12", hint: "Inspect tools" },

{ q: "HTML mein italic emphasis ke liye semantic tag konsa hai?", ans: "<em>", hint: "Emphasized text" },
{ q: "HTML5 mein image aur caption ko group karne ke liye tag kya hai?", ans: "<figure>", hint: "Media grouping" },
{ q: "HTML5 mein highlighted text ke liye tag kya hai?", ans: "<mark>", hint: "Highlight effect" },
{ q: "HTML parser ko page render karne se pehle kis structure mein document milta hai?", ans: "DOM Tree", hint: "Document structure" },

{ q: "Input field ki maximum value define karne ke liye attribute kya hai?", ans: "max", hint: "Upper limit" },
{ q: "HTML5 mein short quotation ke liye tag kya hai?", ans: "<q>", hint: "Inline quote" },
{ q: "ARIA role='navigation' kis semantic tag ke equivalent mana jata hai?", ans: "<nav>", hint: "Navigation area" },

{ q: "HTML page ka title kis tag mein hota hai?", ans: "<title>", hint: "Browser tab" },
{ q: "Input field ko compulsory banane wali attribute kya hai?", ans: "required", hint: "Khali submit nahi hoga" },
{ q: "Browser kisi HTML page ko parse karte waqt tags ko kis sequence mein read karta hai?", ans: "Top to bottom", hint: "Document flow" },

{ q: "Input type email kis liye use hota hai?", ans: "Email address", hint: "Email validation" },
{ q: "HTML5 mein semantic section ke liye tag kya hai?", ans: "<section>", hint: "Content grouping" },
{ q: "SEO ke liye sabse important metadata tags mein se ek konsa hai?", ans: "description", hint: "Meta description" },

{ q: "Screen readers ke liye HTML semantic tags ka sabse bada faida kya hai?", ans: "Accessibility", hint: "Assistive technology support" },

{ q: "HTML5 mein summary heading ke liye tag kya hai?", ans: "<summary>", hint: "Details title" },
{ q: "DOM mein kisi element ko unique identify karne ke liye sabse common attribute kya hai?", ans: "id", hint: "Unique identifier" },

{ q: "Form action define karne wali attribute kya hai?", ans: "action", hint: "Data destination" },
{ q: "HTML5 mein semantic header ke liye tag kya hai?", ans: "<header>", hint: "Top section" },
{ q: "Meta viewport ka primary purpose kya hai?", ans: "Responsive layout", hint: "Mobile screens" },

{ q: "Input field ki minimum value define karne ke liye attribute kya hai?", ans: "min", hint: "Lower limit" },
{ q: "HTML5 mein SVG kis type ki graphics use karta hai?", ans: "Vector graphics", hint: "Scalable graphics" },

{ q: "HTML5 mein semantic article ke liye tag kya hai?", ans: "<article>", hint: "Standalone content" },
{ q: "Lazy loading images ka main faida kya hai?", ans: "Faster page load", hint: "Performance optimization" },

{ q: "HTML5 mein canvas graphics ke liye tag kya hai?", ans: "<canvas>", hint: "Drawing area" },

{ q: "HTML mein heading level 2 ke liye konsa tag use hota hai?", ans: "<h2>", hint: "h aur number 2" },
{ q: "HTML5 mein form fields ko group karne ke liye tag kya hai?", ans: "<fieldset>", hint: "Form grouping" },
{ q: "Input type checkbox kis liye use hota hai?", ans: "Multiple selection", hint: "Tick boxes" },
{ q: "Fieldset ka title dene ke liye tag kya hai?", ans: "<legend>", hint: "Group heading" },
{ q: "DOM mein parent element ke andar maujood elements ko kya kaha jata hai?", ans: "Child elements", hint: "Parent-child relation" },

{ q: "Input type radio kis liye use hota hai?", ans: "Single selection", hint: "One choice" },
{ q: "HTML5 mein suggested options ke liye tag kya hai?", ans: "<datalist>", hint: "Autocomplete options" },
{ q: "SEO mein title tag ka purpose kya hai?", ans: "Page title define karna", hint: "Search results title" },

{ q: "Anchor tag mein URL define karne wali attribute kya hai?", ans: "href", hint: "Link address" },
{ q: "HTML5 mein definition term ke liye tag kya hai?", ans: "<dt>", hint: "Definition title" },
{ q: "Semantic HTML ka SEO par kya effect hota hai?", ans: "Better search understanding", hint: "Search engines" },

{ q: "HTML5 mein definition description ke liye tag kya hai?", ans: "<dd>", hint: "Definition detail" },
{ q: "HTML parser ko start karne ke liye browser sabse pehle kis declaration ko dekhta hai?", ans: "<!DOCTYPE html>", hint: "Document type" },

{ q: "HTML5 mein embedded content ke liye tag kya hai?", ans: "<embed>", hint: "External content" },
{ q: "Accessibility improve karne ke liye labels kis attribute ke through inputs se connect hote hain?", ans: "for", hint: "Label-input relation" },

{ q: "HTML5 mein object embed karne ke liye tag kya hai?", ans: "<object>", hint: "External resource" },
{ q: "Meta charset attribute ka purpose kya hai?", ans: "Character encoding define karna", hint: "UTF-8" },

{ q: "HTML5 mein semantic navigation tag kya hai?", ans: "<nav>", hint: "Navigation links" },
{ q: "Web Storage API browser mein kis type ka data save karti hai?", ans: "Key-value data", hint: "Storage objects" },


{ q: "HTML5 mein semantic aside tag kis liye use hota hai?", ans: "Sidebar content", hint: "Related information" },
{ q: "Lazy loading ka HTML attribute kya hai?", ans: "loading", hint: "Image optimization" },

{ q: "Textarea ki rows define karne ke liye attribute kya hai?", ans: "rows", hint: "Height setting" },
{ q: "HTML5 mein canvas graphics kis type ki hoti hain?", ans: "Raster graphics", hint: "Pixel based" },

{ q: "HTML mein heading level 1 ke liye konsa tag use hota hai?", ans: "<h1>", hint: "Sabse bari heading" },
{ q: "HTML5 mein image map ke liye tag kya hai?", ans: "<map>", hint: "Clickable image areas" },
{ q: "HTML5 mein image map ke clickable area ke liye tag kya hai?", ans: "<area>", hint: "Map ke andar hota hai" },
{ q: "DOM mein getElementById() kis attribute ki value use karta hai?", ans: "id", hint: "Unique identifier" },

{ q: "Meta viewport mein width ki common value kya hai?", ans: "device-width", hint: "Screen width" },

{ q: "ARIA labels ka main purpose kya hai?", ans: "Accessibility improve karna", hint: "Screen readers" },

{ q: "localStorage aur sessionStorage mein main difference kya hai?", ans: "Data persistence", hint: "Permanent vs temporary" },

{ q: "HTML5 mein semantic article tag kis liye use hota hai?", ans: "Independent content", hint: "Blog post jaisa" },
{ q: "HTML parser invalid tags ko handle karne ke liye kya use karta hai?", ans: "Error recovery", hint: "Browser correction" },

{ q: "SEO ke liye meta description kis tag mein define ki jati hai?", ans: "<meta>", hint: "Metadata tag" },

{ q: "Canvas aur SVG mein se kaunsa DOM ka part hota hai?", ans: "SVG", hint: "Element based graphics" },



{ q: "DOCTYPE declaration ka modern HTML version kya hai?", ans: "<!DOCTYPE html>", hint: "HTML5 declaration" },

{ q: "HTML5 mein form result show karne ke liye tag kya hai?", ans: "<output>", hint: "Calculation result" },
{ q: "DOM ka full form kya hai?", ans: "Document Object Model", hint: "HTML structure model" },


{ q: "ARIA ka full form kya hai?", ans: "Accessible Rich Internet Applications", hint: "Accessibility standard" },

{ q: "Meta viewport ka purpose kya hai?", ans: "Responsive design", hint: "Mobile devices" },

{ q: "localStorage ka data kab tak rehta hai?", ans: "Jab tak manually remove na ho", hint: "Persistent storage" },


{ q: "Canvas graphics kis type ki hoti hain?", ans: "Raster graphics", hint: "Pixel based" },

{ q: "HTML5 mein semantic figure caption ke liye tag kya hai?", ans: "<figcaption>", hint: "Figure title" },
{ q: "SVG kis type ki graphics use karta hai?", ans: "Vector graphics", hint: "Scalable graphics" },


{ q: "HTML5 mein details expand/collapse ke liye tag kya hai?", ans: "<details>", hint: "Show/Hide section" },

],
};
