/* ── CSS Typing Questions Data ── */

const CSS_QUESTIONS = {
  Easy: [
{ q: "CSS ka full form kya hai?", ans: "Cascading Style Sheets", hint: "Web page styling language" },
{ q: "CSS file ka extension kya hota hai?", ans: ".css", hint: "Stylesheet file" },
{ q: "Text ka color change karne ke liye CSS property kya hai?", ans: "color", hint: "Text styling" },
{ q: "Background color set karne ke liye property kya hai?", ans: "background-color", hint: "Element background" },
{ q: "Font size set karne ke liye property kya hai?", ans: "font-size", hint: "Text size" },

{ q: "Font family set karne ke liye property kya hai?", ans: "font-family", hint: "Text font" },
{ q: "Bold text ke liye font-weight ki value kya hai?", ans: "bold", hint: "Strong text" },
{ q: "Italic text ke liye font-style ki value kya hai?", ans: "italic", hint: "Tilted text" },
{ q: "Underline text ke liye text-decoration ki value kya hai?", ans: "underline", hint: "Line under text" },
{ q: "Text ko center align karne ke liye value kya hai?", ans: "center", hint: "text-align value" },

{ q: "Text ko left align karne ke liye value kya hai?", ans: "left", hint: "Default alignment" },
{ q: "Text ko right align karne ke liye value kya hai?", ans: "right", hint: "Right side alignment" },
{ q: "Element ki width set karne ke liye property kya hai?", ans: "width", hint: "Horizontal size" },
{ q: "Element ki height set karne ke liye property kya hai?", ans: "height", hint: "Vertical size" },
{ q: "Element ke andar spacing ke liye property kya hai?", ans: "padding", hint: "Inside space" },

{ q: "Element ke bahar spacing ke liye property kya hai?", ans: "margin", hint: "Outside space" },
{ q: "Border add karne ke liye property kya hai?", ans: "border", hint: "Element outline" },
{ q: "Rounded corners ke liye property kya hai?", ans: "border-radius", hint: "Round edges" },
{ q: "Element ki transparency set karne ke liye property kya hai?", ans: "opacity", hint: "0 se 1 tak" },
{ q: "Background image lagane ke liye property kya hai?", ans: "background-image", hint: "Image background" },

{ q: "Text shadow ke liye property kya hai?", ans: "text-shadow", hint: "Shadow effect" },
{ q: "Box shadow ke liye property kya hai?", ans: "box-shadow", hint: "Element shadow" },
{ q: "Mouse pointer style change karne ke liye property kya hai?", ans: "cursor", hint: "Mouse style" },
{ q: "Text ke letters ke darmiyan space ke liye property kya hai?", ans: "letter-spacing", hint: "Character spacing" },
{ q: "Words ke darmiyan space ke liye property kya hai?", ans: "word-spacing", hint: "Word spacing" },

{ q: "Lines ke darmiyan space ke liye property kya hai?", ans: "line-height", hint: "Line spacing" },
{ q: "Element ko hide karne ke liye display ki value kya hai?", ans: "none", hint: "Invisible element" },
{ q: "Block level display ke liye value kya hai?", ans: "block", hint: "New line leta hai" },
{ q: "Inline display ke liye value kya hai?", ans: "inline", hint: "Same line mein rehta hai" },
{ q: "Hover effect ke liye pseudo-class kya hai?", ans: ":hover", hint: "Mouse over" },

{ q: "Visited link ke liye pseudo-class kya hai?", ans: ":visited", hint: "Opened link" },
{ q: "Active link ke liye pseudo-class kya hai?", ans: ":active", hint: "Clicked link" },
{ q: "Input focus hone par pseudo-class kya hai?", ans: ":focus", hint: "Selected input" },
{ q: "ID selector kis symbol se start hota hai?", ans: "#", hint: "Unique selector" },
{ q: "Class selector kis symbol se start hota hai?", ans: ".", hint: "Reusable selector" },

{ q: "Sab elements select karne ke liye selector kya hai?", ans: "*", hint: "Universal selector" },
{ q: "CSS comment start karne ka syntax kya hai?", ans: "/*", hint: "Comment begin" },
{ q: "CSS comment end karne ka syntax kya hai?", ans: "*/", hint: "Comment close" },
{ q: "CSS property aur value ke darmiyan kya lagta hai?", ans: ":", hint: "Separator" },
{ q: "CSS statement ke end mein kya lagta hai?", ans: ";", hint: "End symbol" },

{ q: "CSS rule kis brackets mein likha jata hai?", ans: "{}", hint: "Curly braces" },
{ q: "Text ko uppercase karne ke liye value kya hai?", ans: "uppercase", hint: "Capital letters" },
{ q: "Text ko lowercase karne ke liye value kya hai?", ans: "lowercase", hint: "Small letters" },
{ q: "Image ko circle banane ke liye border-radius ki common value kya hai?", ans: "50%", hint: "Perfect circle" },
{ q: "Element ko left side float karne ke liye value kya hai?", ans: "left", hint: "float property" },

{ q: "Element ko right side float karne ke liye value kya hai?", ans: "right", hint: "float property" },
{ q: "Float remove karne ke liye property kya hai?", ans: "clear", hint: "Float reset" },
{ q: "External stylesheet connect karne ke liye rel ki value kya hoti hai?", ans: "stylesheet", hint: "Link tag value" },
{ q: "Text ko justify karne ke liye text-align ki value kya hai?", ans: "justify", hint: "Equal alignment" },
{ q: "Background repeat rokne ke liye value kya hai?", ans: "no-repeat", hint: "Image repeat nahi hogi" },

{ q: "Background image ko cover karne ke liye property value kya hai?", ans: "cover", hint: "Poora area fill" },
{ q: "Background image ki position set karne ke liye property kya hai?", ans: "background-position", hint: "Image location" },
{ q: "Background image ka size set karne ke liye property kya hai?", ans: "background-size", hint: "Image dimensions" },
{ q: "CSS mein default position value kya hai?", ans: "static", hint: "Normal flow" },
{ q: "Element ko screen par fixed rakhne ke liye position value kya hai?", ans: "fixed", hint: "Scroll par move nahi hota" },

{ q: "Element ko relative position dene ke liye position ki value kya hai?", ans: "relative", hint: "Original position ke mutabiq move hota hai" },
{ q: "Element ko absolute position dene ke liye position ki value kya hai?", ans: "absolute", hint: "Nearest positioned parent ke mutabiq" },
{ q: "Element ko sticky banane ke liye position ki value kya hai?", ans: "sticky", hint: "Scroll par stick hota hai" },
{ q: "Element ko upar move karne ke liye property kya hai?", ans: "top", hint: "Position property ke sath" },
{ q: "Element ko neeche move karne ke liye property kya hai?", ans: "bottom", hint: "Position property ke sath" },

{ q: "Element ko left move karne ke liye property kya hai?", ans: "left", hint: "Horizontal position" },
{ q: "Element ko right move karne ke liye property kya hai?", ans: "right", hint: "Horizontal position" },
{ q: "Elements ki stacking order set karne ke liye property kya hai?", ans: "z-index", hint: "Layer order" },
{ q: "Flexbox enable karne ke liye display ki value kya hai?", ans: "flex", hint: "Flexible layout" },
{ q: "Grid layout enable karne ke liye display ki value kya hai?", ans: "grid", hint: "Rows aur columns" },

{ q: "Flex items ko horizontal center karne ke liye property kya hai?", ans: "justify-content", hint: "Main axis alignment" },
{ q: "Flex items ko vertical center karne ke liye property kya hai?", ans: "align-items", hint: "Cross axis alignment" },
{ q: "Flex direction row set karne ke liye value kya hai?", ans: "row", hint: "Default direction" },
{ q: "Flex direction column set karne ke liye value kya hai?", ans: "column", hint: "Vertical layout" },
{ q: "Flex items ko wrap karne ke liye property kya hai?", ans: "flex-wrap", hint: "Next line mein jate hain" },

{ q: "Grid columns define karne ke liye property kya hai?", ans: "grid-template-columns", hint: "Column structure" },
{ q: "Grid rows define karne ke liye property kya hai?", ans: "grid-template-rows", hint: "Row structure" },
{ q: "CSS mein text ka overflow hide karne ke liye property kya hai?", ans: "overflow", hint: "Extra content control" },
{ q: "Overflow hide karne ki value kya hai?", ans: "hidden", hint: "Extra content hide" },
{ q: "Overflow scroll karne ki value kya hai?", ans: "scroll", hint: "Scrollbar show karta hai" },

{ q: "Text ka color inherit karne ke liye value kya hai?", ans: "inherit", hint: "Parent se value leta hai" },
{ q: "CSS mein transparent color ki value kya hai?", ans: "transparent", hint: "Invisible color" },
{ q: "Element ko resize karne ke liye property kya hai?", ans: "resize", hint: "Textarea mein common" },
{ q: "List bullets remove karne ke liye property kya hai?", ans: "list-style", hint: "List styling" },
{ q: "List bullets remove karne ki value kya hai?", ans: "none", hint: "No bullets" },

{ q: "Table borders merge karne ke liye property kya hai?", ans: "border-collapse", hint: "Table styling" },
{ q: "Borders merge karne ki value kya hai?", ans: "collapse", hint: "Single border" },
{ q: "Mouse pointer hand banane ke liye cursor ki value kya hai?", ans: "pointer", hint: "Clickable element" },
{ q: "Text ko capitalize karne ke liye value kya hai?", ans: "capitalize", hint: "Har word ka first letter capital" },
{ q: "Element ka background aur text ek property mein set karne ki shorthand kya hai?", ans: "background", hint: "Background shortcut" },

{ q: "Font ki shorthand property kya hai?", ans: "font", hint: "Font shortcut" },
{ q: "Border ki shorthand property kya hai?", ans: "border", hint: "Border shortcut" },
{ q: "Margin ki shorthand property kya hai?", ans: "margin", hint: "Spacing shortcut" },
{ q: "Padding ki shorthand property kya hai?", ans: "padding", hint: "Inside spacing shortcut" },
{ q: "Element ki minimum width set karne ke liye property kya hai?", ans: "min-width", hint: "Smallest width" },

{ q: "Element ki maximum width set karne ke liye property kya hai?", ans: "max-width", hint: "Largest width" },
{ q: "Element ki minimum height set karne ke liye property kya hai?", ans: "min-height", hint: "Smallest height" },
{ q: "Element ki maximum height set karne ke liye property kya hai?", ans: "max-height", hint: "Largest height" },
{ q: "CSS unit percentage ka symbol kya hai?", ans: "%", hint: "Relative unit" },
{ q: "Pixels ke liye CSS unit kya hai?", ans: "px", hint: "Fixed unit" },

{ q: "Root font size ke mutabiq unit kya hai?", ans: "rem", hint: "Root em" },
{ q: "Parent font size ke mutabiq unit kya hai?", ans: "em", hint: "Relative font unit" },
{ q: "Viewport width unit kya hai?", ans: "vw", hint: "Screen width based" },
{ q: "Viewport height unit kya hai?", ans: "vh", hint: "Screen height based" },
{ q: "Element ko center block banane ke liye commonly margin ki value kya hoti hai?", ans: "auto", hint: "Auto margins" },

{ q: "CSS mein animation define karne ke liye property kya hai?", ans: "animation", hint: "Motion effects" },
{ q: "Transition effect ke liye property kya hai?", ans: "transition", hint: "Smooth change" },
{ q: "Element ko rotate karne ke liye property kya hai?", ans: "transform", hint: "Transform effects" },
{ q: "Element ko zoom karne ke liye transform function kya hai?", ans: "scale()", hint: "Size increase/decrease" },
{ q: "Element ko ghumane ke liye transform function kya hai?", ans: "rotate()", hint: "Rotation effect" },

{ q: "Element ko left ya right move karne ke liye transform function kya hai?", ans: "translate()", hint: "Position change" },
{ q: "Animation ke keyframes define karne ke liye rule kya hai?", ans: "@keyframes", hint: "Animation steps" },
{ q: "Animation repeat karne ke liye property kya hai?", ans: "animation-iteration-count", hint: "Repeat control" },
{ q: "Animation ko continuously chalane ke liye value kya hai?", ans: "infinite", hint: "Kabhi stop nahi hoti" },
{ q: "Animation speed set karne ke liye property kya hai?", ans: "animation-duration", hint: "Time define karti hai" },

{ q: "Transition ki speed set karne ke liye property kya hai?", ans: "transition-duration", hint: "Smooth effect time" },
{ q: "Transition kis property par apply hogi, iske liye property kya hai?", ans: "transition-property", hint: "Target property" },
{ q: "Transition ke timing style ke liye property kya hai?", ans: "transition-timing-function", hint: "Ease effect" },
{ q: "CSS mein default transition timing value kya hai?", ans: "ease", hint: "Smooth start aur end" },
{ q: "Linear transition ke liye value kya hai?", ans: "linear", hint: "Same speed" },

{ q: "Element ko transparent banane ke liye opacity ki minimum value kya hai?", ans: "0", hint: "Completely invisible" },
{ q: "Element ko fully visible banane ke liye opacity ki maximum value kya hai?", ans: "1", hint: "Completely visible" },
{ q: "Text ko nowrap rakhne ke liye property kya hai?", ans: "white-space", hint: "Text wrapping control" },
{ q: "Text wrapping rokne ki value kya hai?", ans: "nowrap", hint: "Single line" },
{ q: "Extra text ko dots (...) mein dikhane ke liye property kya hai?", ans: "text-overflow", hint: "Overflow text style" },

{ q: "Text overflow dots ke liye value kya hai?", ans: "ellipsis", hint: "Three dots" },
{ q: "Element ke content aur border ko width mein include karne ke liye property kya hai?", ans: "box-sizing", hint: "Box model control" },
{ q: "Box sizing ki common value kya hai?", ans: "border-box", hint: "Padding aur border include" },
{ q: "CSS mein element ko flex item grow karne ke liye property kya hai?", ans: "flex-grow", hint: "Available space leta hai" },
{ q: "Flex item shrink control karne ke liye property kya hai?", ans: "flex-shrink", hint: "Size reduce control" },

{ q: "Flex item ka base size set karne ke liye property kya hai?", ans: "flex-basis", hint: "Initial size" },
{ q: "Grid items ke darmiyan gap dene ke liye property kya hai?", ans: "gap", hint: "Spacing between items" },
{ q: "Columns ke darmiyan gap ke liye property kya hai?", ans: "column-gap", hint: "Column spacing" },
{ q: "Rows ke darmiyan gap ke liye property kya hai?", ans: "row-gap", hint: "Row spacing" },
{ q: "CSS variable define karne ke liye kis symbol se naam start hota hai?", ans: "--", hint: "Custom property" },

{ q: "CSS variable use karne ke liye function kya hai?", ans: "var()", hint: "Variable call" },
{ q: "Root level variable define karne ke liye selector kya hai?", ans: ":root", hint: "Global variables" },
{ q: "Element ko blur effect dene ke liye property kya hai?", ans: "filter", hint: "Visual effects" },
{ q: "Blur effect ke liye function kya hai?", ans: "blur()", hint: "Blur image/text" },
{ q: "Image ko grayscale karne ke liye filter function kya hai?", ans: "grayscale()", hint: "Black and white effect" },

{ q: "Element ki visibility control karne ke liye property kya hai?", ans: "visibility", hint: "Show ya hide" },
{ q: "Element ko hide rakhne ki visibility value kya hai?", ans: "hidden", hint: "Invisible but space rakhta hai" },
{ q: "Element ko visible rakhne ki visibility value kya hai?", ans: "visible", hint: "Default value" },
{ q: "CSS mein content insert karne ke liye property kya hai?", ans: "content", hint: "Pseudo-elements mein use hoti hai" },
{ q: "Element se pehle content add karne ke liye pseudo-element kya hai?", ans: "::before", hint: "Before content" },

{ q: "Element ke baad content add karne ke liye pseudo-element kya hai?", ans: "::after", hint: "After content" },
{ q: "First line select karne ke liye pseudo-element kya hai?", ans: "::first-line", hint: "Line styling" },
{ q: "First letter select karne ke liye pseudo-element kya hai?", ans: "::first-letter", hint: "Initial letter" },
{ q: "Text select hone par style lagane ke liye pseudo-element kya hai?", ans: "::selection", hint: "Highlighted text" },
{ q: "Responsive design ke liye CSS rule kya hai?", ans: "@media", hint: "Media queries" },

{ q: "Screen devices target karne ke liye media type kya hai?", ans: "screen", hint: "Computer/mobile screens" },
{ q: "Print styling ke liye media type kya hai?", ans: "print", hint: "Printed pages" },
{ q: "CSS mein import karne ke liye rule kya hai?", ans: "@import", hint: "External stylesheet" },
{ q: "CSS gradient banane ke liye function kya hai?", ans: "linear-gradient()", hint: "Color transition" },
{ q: "Circular gradient banane ke liye function kya hai?", ans: "radial-gradient()", hint: "Round gradient" },

{ q: "Element ko order dene ke liye flex property kya hai?", ans: "order", hint: "Display order" },
{ q: "Flex container mein items ki direction reverse karne ke liye value kya hai?", ans: "row-reverse", hint: "Reverse row" },
{ q: "Column direction reverse karne ke liye value kya hai?", ans: "column-reverse", hint: "Reverse column" },
{ q: "CSS mein user text selection rokne ke liye property kya hai?", ans: "user-select", hint: "Selection control" },
{ q: "Text selection disable karne ki value kya hai?", ans: "none", hint: "Select nahi hoga" },
  ],
  Medium: [
{ q: "Flex container mein items ko center align karne ke liye justify-content ki value kya hoti hai?", ans: "center", hint: "Main axis center" },
{ q: "Flex container mein items ko space evenly dene ke liye justify-content ki value kya hai?", ans: "space-evenly", hint: "Equal spacing" },
{ q: "Flex container mein items ke darmiyan equal space dene ke liye value kya hai?", ans: "space-between", hint: "Start aur end touch karte hain" },
{ q: "Flex container mein items ke around space dene ke liye value kya hai?", ans: "space-around", hint: "Har item ke around space" },
{ q: "Flex item ki alignment override karne ke liye property kya hai?", ans: "align-self", hint: "Single item alignment" },

{ q: "CSS Grid mein repeat() function kis liye use hota hai?", ans: "Repeated tracks create karne ke liye", hint: "Columns ya rows repeat" },
{ q: "Grid mein available space divide karne wali unit kya hai?", ans: "fr", hint: "Fraction unit" },
{ q: "Grid item ki starting column define karne ke liye property kya hai?", ans: "grid-column-start", hint: "Column start line" },
{ q: "Grid item ki ending column define karne ke liye property kya hai?", ans: "grid-column-end", hint: "Column end line" },
{ q: "Grid item ki starting row define karne ke liye property kya hai?", ans: "grid-row-start", hint: "Row start line" },

{ q: "Grid item ki ending row define karne ke liye property kya hai?", ans: "grid-row-end", hint: "Row end line" },
{ q: "Multiple grid areas define karne ke liye property kya hai?", ans: "grid-template-areas", hint: "Named layout" },
{ q: "CSS variable define karne ke liye common global selector kya hai?", ans: ":root", hint: "Global scope" },
{ q: "CSS variable ko call karne ke liye function kya hai?", ans: "var()", hint: "Variable use" },
{ q: "Fallback value CSS variable mein kis function ke andar di ja sakti hai?", ans: "var()", hint: "Variable fallback" },

{ q: "Media query mein screen width check karne ke liye property kya hai?", ans: "max-width", hint: "Maximum width condition" },
{ q: "Media query mein minimum width check karne ke liye property kya hai?", ans: "min-width", hint: "Minimum width condition" },
{ q: "Hover effect ko smooth banane ke liye property kya hai?", ans: "transition", hint: "Smooth animation" },
{ q: "Transition sab properties par lagane ke liye value kya hai?", ans: "all", hint: "Every property" },
{ q: "Animation start hone se pehle delay dene ke liye property kya hai?", ans: "animation-delay", hint: "Wait time" },

{ q: "Animation ko reverse chalane ke liye property value kya hai?", ans: "reverse", hint: "Ulti direction" },
{ q: "Animation ko alternate direction mein chalane ke liye value kya hai?", ans: "alternate", hint: "Aage aur peeche" },
{ q: "Transform mein element ko X axis par move karne ke liye function kya hai?", ans: "translateX()", hint: "Horizontal move" },
{ q: "Transform mein element ko Y axis par move karne ke liye function kya hai?", ans: "translateY()", hint: "Vertical move" },
{ q: "Transform mein X axis par scale karne ke liye function kya hai?", ans: "scaleX()", hint: "Width scale" },

{ q: "Transform mein Y axis par scale karne ke liye function kya hai?", ans: "scaleY()", hint: "Height scale" },
{ q: "Transform mein X axis par rotate karne ke liye function kya hai?", ans: "rotateX()", hint: "3D rotation" },
{ q: "Transform mein Y axis par rotate karne ke liye function kya hai?", ans: "rotateY()", hint: "3D rotation" },
{ q: "Transform mein Z axis par rotate karne ke liye function kya hai?", ans: "rotateZ()", hint: "2D jaisa rotation" },
{ q: "Element ki shadow ko andar ki taraf karne ke liye box-shadow ka keyword kya hai?", ans: "inset", hint: "Inner shadow" },

{ q: "CSS mein text ko truncate karne ke liye text-overflow ki common value kya hai?", ans: "ellipsis", hint: "Three dots" },
{ q: "Long words ko break karne ke liye property kya hai?", ans: "word-break", hint: "Word wrapping" },
{ q: "Overflow text wrap karne ke liye property kya hai?", ans: "overflow-wrap", hint: "Break long text" },
{ q: "CSS mein image ko grayscale karne ke liye filter function kya hai?", ans: "grayscale()", hint: "Black and white" },
{ q: "Image brightness adjust karne ke liye filter function kya hai?", ans: "brightness()", hint: "Lightness control" },

{ q: "Image contrast adjust karne ke liye filter function kya hai?", ans: "contrast()", hint: "Contrast effect" },
{ q: "Blur effect ke liye filter function kya hai?", ans: "blur()", hint: "Blur image" },
{ q: "Element ko completely round banane ke liye border-radius ki common value kya hai?", ans: "50%", hint: "Circle shape" },
{ q: "CSS mein stacking context control karne ke liye property kya hai?", ans: "z-index", hint: "Layer order" },
{ q: "Positioned elements par hi kaunsi property kaam karti hai?", ans: "z-index", hint: "Layering" },

{ q: "Pseudo-element jo element ke pehle content insert karta hai uska naam kya hai?", ans: "::before", hint: "Before content" },
{ q: "Pseudo-element jo element ke baad content insert karta hai uska naam kya hai?", ans: "::after", hint: "After content" },
{ q: "Pseudo-class jo pehle child ko select karti hai uska naam kya hai?", ans: ":first-child", hint: "First element" },
{ q: "Pseudo-class jo aakhri child ko select karti hai uska naam kya hai?", ans: ":last-child", hint: "Last element" },
{ q: "Pseudo-class jo nth child select karti hai uska naam kya hai?", ans: ":nth-child()", hint: "Specific position" },

{ q: "Pseudo-class jo checked input select karti hai uska naam kya hai?", ans: ":checked", hint: "Checkbox/radio" },
{ q: "Pseudo-class jo disabled elements select karti hai uska naam kya hai?", ans: ":disabled", hint: "Disabled field" },
{ q: "Pseudo-class jo enabled elements select karti hai uska naam kya hai?", ans: ":enabled", hint: "Active field" },
{ q: "CSS specificity mein ID selector ki priority class se kaisi hoti hai?", ans: "Higher", hint: "More specific" },
{ q: "Inline CSS ki priority external CSS se kaisi hoti hai?", ans: "Higher", hint: "Direct style" },

{ q: "CSS mein highest priority dene ke liye keyword kya hai?", ans: "!important", hint: "Override styles" },
{ q: "Flex item ko available space fill karne ke liye property kya hai?", ans: "flex-grow", hint: "Expand item" },
{ q: "Flex item ka initial size define karne ke liye property kya hai?", ans: "flex-basis", hint: "Base size" },
{ q: "CSS Grid aur Flexbox mein 2D layout ke liye zyada suitable konsa hai?", ans: "Grid", hint: "Rows aur columns" },

{ q: "Flexbox mein 1D layout ke liye sabse zyada suitable system konsa hai?", ans: "Flexbox", hint: "Single direction layout" },
{ q: "Grid item ko multiple columns span karne ke liye property kya hai?", ans: "grid-column", hint: "Column span" },
{ q: "Grid item ko multiple rows span karne ke liye property kya hai?", ans: "grid-row", hint: "Row span" },
{ q: "Grid container ke andar items ki alignment ke liye property kya hai?", ans: "place-items", hint: "Align + justify" },
{ q: "Grid content alignment ke liye shorthand property kya hai?", ans: "place-content", hint: "Content positioning" },

{ q: "CSS mein aspect ratio maintain karne ke liye property kya hai?", ans: "aspect-ratio", hint: "Width-height relation" },
{ q: "Object fit control karne ke liye property kya hai?", ans: "object-fit", hint: "Image/video fitting" },
{ q: "Object ko container fill karne ke liye object-fit ki value kya hai?", ans: "cover", hint: "Crop ho sakta hai" },
{ q: "Object ko poora dikhane ke liye object-fit ki value kya hai?", ans: "contain", hint: "Poora visible" },
{ q: "Image ki position control karne ke liye property kya hai?", ans: "object-position", hint: "Object alignment" },

{ q: "CSS custom properties ka doosra naam kya hai?", ans: "Variables", hint: "Reusable values" },
{ q: "Current text color ko use karne ke liye CSS keyword kya hai?", ans: "currentColor", hint: "Current color value" },
{ q: "Parent ki value inherit karne ke liye keyword kya hai?", ans: "inherit", hint: "Parent se leta hai" },
{ q: "Property ko browser default par reset karne ke liye keyword kya hai?", ans: "initial", hint: "Default value" },
{ q: "Inherited ya initial value choose karne ke liye keyword kya hai?", ans: "unset", hint: "Smart reset" },

{ q: "Media query mein orientation check karne ke liye property kya hai?", ans: "orientation", hint: "Portrait ya landscape" },
{ q: "Mobile vertical mode ke liye orientation value kya hai?", ans: "portrait", hint: "Seedha screen" },
{ q: "Mobile horizontal mode ke liye orientation value kya hai?", ans: "landscape", hint: "Leta hua screen" },
{ q: "Animation ki current state control karne ke liye property kya hai?", ans: "animation-play-state", hint: "Play ya pause" },
{ q: "Animation rokne ke liye value kya hai?", ans: "paused", hint: "Stop animation" },

{ q: "Animation chalane ke liye value kya hai?", ans: "running", hint: "Default state" },
{ q: "Element ko skew karne ke liye transform function kya hai?", ans: "skew()", hint: "Tilt effect" },
{ q: "X axis par skew karne ke liye function kya hai?", ans: "skewX()", hint: "Horizontal skew" },
{ q: "Y axis par skew karne ke liye function kya hai?", ans: "skewY()", hint: "Vertical skew" },
{ q: "3D depth define karne ke liye property kya hai?", ans: "perspective", hint: "3D effect" },

{ q: "Child elements ko 3D preserve karne ke liye property kya hai?", ans: "transform-style", hint: "3D children" },
{ q: "3D children preserve karne ki value kya hai?", ans: "preserve-3d", hint: "3D maintained" },
{ q: "Element ki back side hide karne ke liye property kya hai?", ans: "backface-visibility", hint: "Back view control" },
{ q: "Back side hide karne ki value kya hai?", ans: "hidden", hint: "Invisible back" },
{ q: "CSS filter mein sepia effect ke liye function kya hai?", ans: "sepia()", hint: "Brown vintage effect" },

{ q: "CSS filter mein invert colors ke liye function kya hai?", ans: "invert()", hint: "Opposite colors" },
{ q: "Hue rotation ke liye filter function kya hai?", ans: "hue-rotate()", hint: "Color shift" },
{ q: "Drop shadow effect ke liye filter function kya hai?", ans: "drop-shadow()", hint: "Shadow filter" },
{ q: "Text ko columns mein divide karne ke liye property kya hai?", ans: "column-count", hint: "Multi-column layout" },

{ q: "Columns ke darmiyan line ke liye property kya hai?", ans: "column-rule", hint: "Column border" },
{ q: "Element ko user selection se bachane ke liye property kya hai?", ans: "user-select", hint: "Text selection control" },
{ q: "Text selection allow karne ki value kya hai?", ans: "text", hint: "Selectable text" },
{ q: "Pointer events disable karne ke liye property kya hai?", ans: "pointer-events", hint: "Mouse interaction" },
{ q: "Pointer events disable karne ki value kya hai?", ans: "none", hint: "No clicks" },

{ q: "CSS counter start karne ke liye property kya hai?", ans: "counter-reset", hint: "Counter initialize" },
{ q: "CSS counter increase karne ke liye property kya hai?", ans: "counter-increment", hint: "Counter add" },
{ q: "Counter value show karne ke liye function kya hai?", ans: "counter()", hint: "Display counter" },
{ q: "Pseudo-class jo empty elements select karti hai uska naam kya hai?", ans: ":empty", hint: "No content" },
{ q: "Pseudo-class jo only child select karti hai uska naam kya hai?", ans: ":only-child", hint: "Single child" },

{ q: "Pseudo-class jo first-of-type select karti hai uska naam kya hai?", ans: ":first-of-type", hint: "First same type" },
{ q: "Pseudo-class jo last-of-type select karti hai uska naam kya hai?", ans: ":last-of-type", hint: "Last same type" },
{ q: "Pseudo-class jo nth-of-type select karti hai uska naam kya hai?", ans: ":nth-of-type()", hint: "Specific type position" },
{ q: "Specificity mein class selector ki priority element selector se kaisi hoti hai?", ans: "Higher", hint: "More specific" },
{ q: "CSS cascade ka main purpose kya hai?", ans: "Conflicting styles resolve karna", hint: "Style priority system" },

{ q: "CSS Grid mein items ko horizontally align karne ke liye property kya hai?", ans: "justify-items", hint: "Horizontal alignment" },
{ q: "CSS Grid mein items ko vertically align karne ke liye property kya hai?", ans: "align-items", hint: "Vertical alignment" },
{ q: "Grid container ke content ko horizontally align karne ke liye property kya hai?", ans: "justify-content", hint: "Container alignment" },
{ q: "Grid container ke content ko vertically align karne ke liye property kya hai?", ans: "align-content", hint: "Content alignment" },
{ q: "Grid area assign karne ke liye property kya hai?", ans: "grid-area", hint: "Named area" },

{ q: "CSS mein calc() function kis liye use hota hai?", ans: "Calculations karne ke liye", hint: "Math operations" },
{ q: "CSS mein min() function kya karta hai?", ans: "Smallest value choose karta hai", hint: "Minimum value" },
{ q: "CSS mein max() function kya karta hai?", ans: "Largest value choose karta hai", hint: "Maximum value" },
{ q: "CSS mein clamp() function kya karta hai?", ans: "Min aur max ke darmiyan value rakhta hai", hint: "Responsive sizing" },
{ q: "Responsive typography ke liye kaunsa function zyada use hota hai?", ans: "clamp()", hint: "Flexible font size" },

{ q: "Animation ke keyframes mein starting point ke liye keyword kya hai?", ans: "from", hint: "0%" },
{ q: "Animation ke keyframes mein ending point ke liye keyword kya hai?", ans: "to", hint: "100%" },
{ q: "Animation fill mode control karne ke liye property kya hai?", ans: "animation-fill-mode", hint: "Before/after state" },
{ q: "Animation ko end state par rokne ke liye value kya hai?", ans: "forwards", hint: "Final style maintain" },
{ q: "Animation ko start state apply karne ke liye value kya hai?", ans: "backwards", hint: "Initial style" },

{ q: "CSS transform origin set karne ke liye property kya hai?", ans: "transform-origin", hint: "Rotation point" },
{ q: "Transform origin ki default value kya hai?", ans: "center", hint: "Middle point" },
{ q: "CSS mein smooth scrolling enable karne ke liye property kya hai?", ans: "scroll-behavior", hint: "Scroll effect" },
{ q: "Smooth scrolling ki value kya hai?", ans: "smooth", hint: "Animated scroll" },
{ q: "Scroll snapping enable karne ke liye property kya hai?", ans: "scroll-snap-type", hint: "Snap scrolling" },

{ q: "Scroll snap alignment ke liye property kya hai?", ans: "scroll-snap-align", hint: "Snap position" },
{ q: "CSS logical property jo margin-left ko replace karti hai?", ans: "margin-inline-start", hint: "Logical direction" },
{ q: "CSS logical property jo margin-right ko replace karti hai?", ans: "margin-inline-end", hint: "Logical direction" },
{ q: "CSS logical property jo padding-top ko replace karti hai?", ans: "padding-block-start", hint: "Logical spacing" },
{ q: "Logical properties ka main faida kya hai?", ans: "Different writing modes support karna", hint: "LTR/RTL friendly" },

{ q: "Image ka aspect ratio maintain karte hue crop karne ke liye object-fit ki value kya hai?", ans: "cover", hint: "Container fill" },
{ q: "Image ko squeeze kiye bina poora dikhane ke liye object-fit ki value kya hai?", ans: "contain", hint: "Full image visible" },
{ q: "Image ko original size par rakhne ke liye object-fit ki value kya hai?", ans: "none", hint: "No scaling" },
{ q: "Image ko distort kar ke fit karne ke liye object-fit ki value kya hai?", ans: "fill", hint: "Stretch image" },
{ q: "Object-fit ki default value kya hai?", ans: "fill", hint: "Default behavior" },

{ q: "CSS filter mein saturation control karne ke liye function kya hai?", ans: "saturate()", hint: "Color intensity" },
{ q: "Opacity filter ke liye function kya hai?", ans: "opacity()", hint: "Transparency effect" },
{ q: "Brightness ko 100% se kam karne ka result kya hota hai?", ans: "Darker image", hint: "Less brightness" },
{ q: "Contrast ko increase karne ka result kya hota hai?", ans: "More difference between colors", hint: "Stronger contrast" },
{ q: "Blur value zyada hone par image kaisi hoti hai?", ans: "More blurry", hint: "Less clear" },

{ q: "Pseudo-class jo valid form fields select karti hai?", ans: ":valid", hint: "Validation success" },
{ q: "Pseudo-class jo invalid form fields select karti hai?", ans: ":invalid", hint: "Validation fail" },
{ q: "Pseudo-class jo required fields select karti hai?", ans: ":required", hint: "Mandatory fields" },
{ q: "Pseudo-class jo optional fields select karti hai?", ans: ":optional", hint: "Not required" },
{ q: "Pseudo-class jo read-only fields select karti hai?", ans: ":read-only", hint: "Readonly inputs" },

{ q: "Pseudo-class jo read-write fields select karti hai?", ans: ":read-write", hint: "Editable inputs" },
{ q: "CSS nesting ka purpose kya hai?", ans: "Related styles ko group karna", hint: "Cleaner code" },
{ q: "Media query mein resolution check karne ke liye unit kya hoti hai?", ans: "dpi", hint: "Dots per inch" },
{ q: "High resolution displays ke liye commonly kis feature ko check kiya jata hai?", ans: "resolution", hint: "Screen density" },
{ q: "CSS mein current viewport ki chhoti side ke liye unit kya hai?", ans: "vmin", hint: "Minimum viewport dimension" },

{ q: "CSS mein current viewport ki bari side ke liye unit kya hai?", ans: "vmax", hint: "Maximum viewport dimension" },
{ q: "rem unit kis cheez par based hoti hai?", ans: "Root font size", hint: "html font-size" },
{ q: "em unit kis cheez par based hoti hai?", ans: "Parent font size", hint: "Relative unit" },
{ q: "CSS cascade mein later rule ka effect pehle rule se kaisa hota hai?", ans: "Higher priority", hint: "Same specificity par" },
{ q: "CSS specificity mein inline style ki priority ID selector se kaisi hoti hai?", ans: "Higher", hint: "Most specific style" },

{ q: "CSS Grid mein auto-sized columns banane ke liye keyword kya hai?", ans: "auto", hint: "Automatic sizing" },
{ q: "Grid tracks ke minimum aur maximum size define karne ke liye function kya hai?", ans: "minmax()", hint: "Flexible sizing" },
{ q: "Grid mein automatically columns create karne ke liye property kya hai?", ans: "grid-auto-columns", hint: "Implicit columns" },
{ q: "Grid mein automatically rows create karne ke liye property kya hai?", ans: "grid-auto-rows", hint: "Implicit rows" },
{ q: "Auto placement direction control karne ke liye property kya hai?", ans: "grid-auto-flow", hint: "Placement order" },

{ q: "Grid auto flow ki dense value kya karti hai?", ans: "Khali spaces fill karti hai", hint: "Dense packing" },
{ q: "Flexbox mein items ki multiple lines align karne ke liye property kya hai?", ans: "align-content", hint: "Wrapped lines" },
{ q: "Flex shorthand property mein pehla value kis property ko represent karta hai?", ans: "flex-grow", hint: "Growth factor" },
{ q: "Flex shorthand property mein doosra value kis property ko represent karta hai?", ans: "flex-shrink", hint: "Shrink factor" },
{ q: "Flex shorthand property mein teesra value kis property ko represent karta hai?", ans: "flex-basis", hint: "Base size" },

{ q: "CSS mein element ke rendering performance improve karne ke liye property kya hai?", ans: "will-change", hint: "Optimization hint" },
{ q: "Transform aur opacity animations zyada smooth kyun hoti hain?", ans: "GPU acceleration ki wajah se", hint: "Performance" },
{ q: "Element ke visible area ko define karne ke liye property kya hai?", ans: "clip-path", hint: "Custom shapes" },
{ q: "Circle clipping ke liye clip-path function kya hai?", ans: "circle()", hint: "Round shape" },
{ q: "Polygon shape banane ke liye clip-path function kya hai?", ans: "polygon()", hint: "Custom points" },

{ q: "CSS mask apply karne ke liye property kya hai?", ans: "mask-image", hint: "Mask effect" },
{ q: "Gradient ko background ki tarah use karne ke liye property kya hai?", ans: "background-image", hint: "Gradient image" },
{ q: "Linear gradient ki direction set karne ke liye commonly keyword kya use hota hai?", ans: "to right", hint: "Horizontal gradient" },
{ q: "Radial gradient ka center control karne ke liye keyword kya use hota hai?", ans: "at", hint: "Center position" },
{ q: "Conic gradient banane ke liye function kya hai?", ans: "conic-gradient()", hint: "Circular gradient" },

{ q: "Backdrop blur effect ke liye property kya hai?", ans: "backdrop-filter", hint: "Background blur" },
{ q: "Element ke andar scrolling control karne ke liye property kya hai?", ans: "overflow", hint: "Content overflow" },
{ q: "Horizontal scrolling control karne ke liye property kya hai?", ans: "overflow-x", hint: "X-axis scroll" },
{ q: "Vertical scrolling control karne ke liye property kya hai?", ans: "overflow-y", hint: "Y-axis scroll" },
{ q: "Scrollbars hamesha show karne ke liye overflow value kya hai?", ans: "scroll", hint: "Always visible" },

{ q: "Scrollbars sirf zaroorat par show karne ke liye value kya hai?", ans: "auto", hint: "Automatic scrollbar" },
{ q: "CSS mein table layout algorithm control karne ke liye property kya hai?", ans: "table-layout", hint: "Table sizing" },
{ q: "Fast table rendering ke liye table-layout ki value kya hai?", ans: "fixed", hint: "Fixed widths" },
{ q: "Normal table rendering ke liye table-layout ki value kya hai?", ans: "auto", hint: "Content based" },
{ q: "Caption ki position control karne ke liye property kya hai?", ans: "caption-side", hint: "Table caption" },

{ q: "List marker customize karne ke liye pseudo-element kya hai?", ans: "::marker", hint: "Bullet styling" },
{ q: "Placeholder text style karne ke liye pseudo-element kya hai?", ans: "::placeholder", hint: "Input placeholder" },
{ q: "File selector button style karne ke liye pseudo-element kya hai?", ans: "::file-selector-button", hint: "File input button" },
{ q: "Details element open hone par select karne ke liye pseudo-class kya hai?", ans: ":open", hint: "Opened details" },
{ q: "Targeted URL fragment select karne ke liye pseudo-class kya hai?", ans: ":target", hint: "Anchor target" },

{ q: "CSS mein quotes customize karne ke liye property kya hai?", ans: "quotes", hint: "Quotation marks" },
{ q: "Text direction ko logically support karne ke liye property kya hai?", ans: "writing-mode", hint: "Text flow" },
{ q: "Vertical text likhne ke liye writing-mode ki common value kya hai?", ans: "vertical-rl", hint: "Vertical layout" },
{ q: "CSS mein hyphenation enable karne ke liye property kya hai?", ans: "hyphens", hint: "Word breaking" },
{ q: "Automatic hyphenation ke liye value kya hai?", ans: "auto", hint: "Browser handles it" },

{ q: "Text indentation ke liye property kya hai?", ans: "text-indent", hint: "Paragraph start space" },
{ q: "Text ke decoration color control karne ke liye property kya hai?", ans: "text-decoration-color", hint: "Underline color" },
{ q: "Text decoration thickness control karne ke liye property kya hai?", ans: "text-decoration-thickness", hint: "Line width" },
{ q: "Underline position control karne ke liye property kya hai?", ans: "text-underline-offset", hint: "Distance from text" },
{ q: "Caret color change karne ke liye property kya hai?", ans: "caret-color", hint: "Typing cursor color" },

{ q: "CSS mein element ki visibility without layout shift control karne ke liye property kya hai?", ans: "visibility", hint: "Space maintain rehta hai" },
{ q: "Element ko invisible lekin layout mein rakhne ki value kya hai?", ans: "hidden", hint: "Space occupied" },
{ q: "CSS mein selection highlight style karne ke liye pseudo-element kya hai?", ans: "::selection", hint: "Selected text" },
{ q: "First line style karne ke liye pseudo-element kya hai?", ans: "::first-line", hint: "Paragraph first line" },
{ q: "First letter style karne ke liye pseudo-element kya hai?", ans: "::first-letter", hint: "Initial character" },

{ q: "CSS Grid mein named lines define karne ke liye kis syntax ka use hota hai?", ans: "[]", hint: "Line names" },
{ q: "Grid item ko named area mein place karne ke liye property kya hai?", ans: "grid-area", hint: "Area assignment" },
{ q: "CSS containment enable karne ke liye property kya hai?", ans: "contain", hint: "Performance optimization" },
{ q: "Layout containment ke liye contain ki value kya hai?", ans: "layout", hint: "Layout isolation" },
{ q: "Paint containment ke liye contain ki value kya hai?", ans: "paint", hint: "Paint isolation" },

{ q: "Size containment ke liye contain ki value kya hai?", ans: "size", hint: "Size isolation" },
{ q: "CSS mein automatic dark/light theme support ke liye media feature kya hai?", ans: "prefers-color-scheme", hint: "Theme detection" },
{ q: "Dark mode detect karne ke liye value kya hai?", ans: "dark", hint: "Dark theme" },
{ q: "Light mode detect karne ke liye value kya hai?", ans: "light", hint: "Light theme" },
{ q: "Reduced animations detect karne ke liye media feature kya hai?", ans: "prefers-reduced-motion", hint: "Accessibility" },

{ q: "Motion reduce preference ki value kya hoti hai?", ans: "reduce", hint: "Less animation" },
{ q: "CSS mein color transparency ke liye commonly function kya hai?", ans: "rgba()", hint: "RGB + alpha" },
{ q: "HSL colors define karne ke liye function kya hai?", ans: "hsl()", hint: "Hue, Saturation, Lightness" },
{ q: "Alpha support ke sath HSL function kya hai?", ans: "hsla()", hint: "HSL + transparency" },
{ q: "Current element ka color inherit karne ke liye keyword kya hai?", ans: "currentColor", hint: "Current text color" },

{ q: "Element ke content box ki width measure karne ke model ka naam kya hai?", ans: "Content Box", hint: "Default box model" },
{ q: "Padding aur border ko width mein include karne wali value kya hai?", ans: "border-box", hint: "Box sizing" },
{ q: "CSS mein feature support check karne ke liye rule kya hai?", ans: "@supports", hint: "Feature query" },
{ q: "Container queries ke liye container define karne ki property kya hai?", ans: "container-type", hint: "Container setup" },
{ q: "Inline-size container query ke liye value kya hai?", ans: "inline-size", hint: "Width based container" },

{ q: "Container query likhne ke liye rule kya hai?", ans: "@container", hint: "Container conditions" },
{ q: "CSS mein scrollbar styling ke liye common pseudo-element kya hai?", ans: "::webkit-scrollbar", hint: "Scrollbar customization" },
{ q: "Scrollbar thumb style karne ke liye pseudo-element kya hai?", ans: "::webkit-scrollbar-thumb", hint: "Draggable part" },
{ q: "Scrollbar track style karne ke liye pseudo-element kya hai?", ans: "::webkit-scrollbar-track", hint: "Background track" },
{ q: "Element ki resize direction control karne ke liye property kya hai?", ans: "resize", hint: "User resize" },

{ q: "Sirf horizontal resize allow karne ki value kya hai?", ans: "horizontal", hint: "Width resize" },
{ q: "Sirf vertical resize allow karne ki value kya hai?", ans: "vertical", hint: "Height resize" },
{ q: "CSS mein blending mode control karne ke liye property kya hai?", ans: "mix-blend-mode", hint: "Layer blending" },
{ q: "Background blending ke liye property kya hai?", ans: "background-blend-mode", hint: "Background layers" },
{ q: "Normal blending ki default value kya hai?", ans: "normal", hint: "No special blend" },

{ q: "Multiply blending mode ka effect kya hota hai?", ans: "Colors darker ho jate hain", hint: "Dark blend" },
{ q: "Screen blending mode ka effect kya hota hai?", ans: "Colors lighter ho jate hain", hint: "Light blend" },
{ q: "CSS shape define karne ke liye float ke sath property kya hai?", ans: "shape-outside", hint: "Custom text flow" },
{ q: "Circle text wrapping ke liye shape function kya hai?", ans: "circle()", hint: "Round flow" },
{ q: "Inset shape banane ke liye function kya hai?", ans: "inset()", hint: "Rectangle inset" },

{ q: "CSS counters ko display karne ke liye doosra function kya hai?", ans: "counters()", hint: "Nested counters" },
{ q: "Element ka generated content set karne ke liye property kya hai?", ans: "content", hint: "Pseudo-elements" },
{ q: "Open quote insert karne ke liye content keyword kya hai?", ans: "open-quote", hint: "Opening quotation" },
{ q: "Close quote insert karne ke liye content keyword kya hai?", ans: "close-quote", hint: "Closing quotation" },
{ q: "No quote insert karne ke liye content keyword kya hai?", ans: "no-open-quote", hint: "Skip quote" },

{ q: "CSS mein sticky positioning kis property ki value hai?", ans: "position", hint: "Sticky layout" },
{ q: "Sticky element active hone ke liye commonly kaunsi property set karni hoti hai?", ans: "top", hint: "Offset required" },
{ q: "CSS scroll snapping mein mandatory snapping ke liye value kya hai?", ans: "mandatory", hint: "Force snap" },
{ q: "Snap points optional rakhne ke liye value kya hai?", ans: "proximity", hint: "Near snap" },
{ q: "Image rendering quality control karne ke liye property kya hai?", ans: "image-rendering", hint: "Image scaling" },

{ q: "Pixelated scaling ke liye image-rendering ki value kya hai?", ans: "pixelated", hint: "Pixel art" },
{ q: "CSS mein text stroke ke liye common WebKit property kya hai?", ans: "-webkit-text-stroke", hint: "Text outline" },
{ q: "Text fill color control karne ke liye WebKit property kya hai?", ans: "-webkit-text-fill-color", hint: "Fill color" },
{ q: "CSS nesting mein current selector refer karne ke liye symbol kya hai?", ans: "&", hint: "Parent selector" },
{ q: "CSS ka main purpose kya hai?", ans: "Presentation aur styling control karna", hint: "Web page design" },

{ q: "CSS Grid mein explicit grid define karne ke liye sabse common property kya hai?", ans: "grid-template-columns", hint: "Columns define karti hai" },
{ q: "Grid item ko named line par place karne ke liye property kya hai?", ans: "grid-column", hint: "Column placement" },
{ q: "CSS mein parent selector reference ke liye nesting symbol kya hai?", ans: "&", hint: "Current selector" },
{ q: "Container query mein height-based container banane ke liye property kya hai?", ans: "container-type", hint: "Container setup" },
{ q: "Container query ke liye size-based value kya hai?", ans: "size", hint: "Width aur height dono" },

{ q: "CSS mein font loading control karne ke liye @font-face ki property kya hai?", ans: "font-display", hint: "Font rendering" },
{ q: "Text dikhakar font load karne wali font-display value kya hai?", ans: "swap", hint: "Fallback first" },
{ q: "Custom font define karne ke liye rule kya hai?", ans: "@font-face", hint: "External fonts" },
{ q: "Font file location dene ke liye property kya hai?", ans: "src", hint: "Font source" },
{ q: "Custom font ka naam define karne ke liye property kya hai?", ans: "font-family", hint: "Font identifier" },

{ q: "CSS mein feature query start karne ke liye rule kya hai?", ans: "@supports", hint: "Browser support check" },
{ q: "Grid support check karne ke liye commonly kis property ko test kiya jata hai?", ans: "display", hint: "Grid support" },
{ q: "CSS logical width property kya hai?", ans: "inline-size", hint: "Logical width" },
{ q: "CSS logical height property kya hai?", ans: "block-size", hint: "Logical height" },
{ q: "Minimum logical width ke liye property kya hai?", ans: "min-inline-size", hint: "Logical min width" },

{ q: "Maximum logical width ke liye property kya hai?", ans: "max-inline-size", hint: "Logical max width" },
{ q: "Minimum logical height ke liye property kya hai?", ans: "min-block-size", hint: "Logical min height" },
{ q: "Maximum logical height ke liye property kya hai?", ans: "max-block-size", hint: "Logical max height" },
{ q: "CSS anchor positioning se related experimental property ka naam kya hai?", ans: "anchor-name", hint: "Anchor reference" },
{ q: "Anchor reference use karne ke liye function kya hai?", ans: "anchor()", hint: "Anchor position" },

{ q: "CSS color-mix karne ke liye function kya hai?", ans: "color-mix()", hint: "Color blending" },
{ q: "Modern CSS color space define karne ke liye function kya hai?", ans: "color()", hint: "Advanced colors" },
{ q: "Relative color syntax kis feature se related hai?", ans: "color()", hint: "Color manipulation" },
{ q: "Backdrop ke contrast ko control karne ke liye filter function kya hai?", ans: "contrast()", hint: "Backdrop filter" },
{ q: "Backdrop ko grayscale karne ke liye function kya hai?", ans: "grayscale()", hint: "Background effect" },

{ q: "CSS mein scroll timeline define karne ke liye property kya hai?", ans: "scroll-timeline", hint: "Scroll animation" },
{ q: "View timeline define karne ke liye property kya hai?", ans: "view-timeline", hint: "View-based animation" },
{ q: "Animation ko scroll se connect karne ke liye property kya hai?", ans: "animation-timeline", hint: "Timeline link" },
{ q: "CSS mein layered styles define karne ke liye rule kya hai?", ans: "@layer", hint: "Cascade layers" },
{ q: "Cascade layers ka main purpose kya hai?", ans: "Style priority organize karna", hint: "Better cascade control" },

{ q: "Layer import karne ke liye @import ke sath konsa keyword use hota hai?", ans: "layer", hint: "Cascade layer import" },
{ q: "CSS scope define karne ke liye experimental rule kya hai?", ans: "@scope", hint: "Scoped styles" },
{ q: "Scoped styles ka purpose kya hai?", ans: "Specific area tak styles limit karna", hint: "Local styling" },
{ q: "CSS mein forced colors detect karne ke liye media feature kya hai?", ans: "forced-colors", hint: "Accessibility mode" },
{ q: "Forced colors active hone ki value kya hai?", ans: "active", hint: "High contrast mode" },

{ q: "Hover support detect karne ke liye media feature kya hai?", ans: "hover", hint: "Pointer hover check" },
{ q: "Hover available hone ki value kya hai?", ans: "hover", hint: "Mouse-like device" },
{ q: "Pointer accuracy detect karne ke liye media feature kya hai?", ans: "pointer", hint: "Input precision" },
{ q: "High precision pointer ki value kya hai?", ans: "fine", hint: "Mouse pointer" },
{ q: "Touch devices ke liye pointer value kya hoti hai?", ans: "coarse", hint: "Finger input" },

{ q: "CSS environment variables access karne ke liye function kya hai?", ans: "env()", hint: "Device values" },
{ q: "iPhone notch safe area ke liye common env variable kya hai?", ans: "safe-area-inset-top", hint: "Top inset" },
{ q: "Safe area bottom ke liye env variable kya hai?", ans: "safe-area-inset-bottom", hint: "Bottom inset" },
{ q: "CSS mein motion path define karne ke liye property kya hai?", ans: "offset-path", hint: "Custom path" },
{ q: "Motion path par object ki distance control karne ke liye property kya hai?", ans: "offset-distance", hint: "Path progress" },

{ q: "Motion path rotation control karne ke liye property kya hai?", ans: "offset-rotate", hint: "Object rotation" },
{ q: "CSS mein text ko balance karne ke liye property kya hai?", ans: "text-wrap", hint: "Text wrapping" },
{ q: "Balanced headings ke liye text-wrap value kya hai?", ans: "balance", hint: "Balanced lines" },
{ q: "Pretty text wrapping ke liye value kya hai?", ans: "pretty", hint: "Improved wrapping" },
{ q: "CSS mein responsive aur maintainable layouts ke liye sabse zyada use hone wale systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Modern layouts" },

{ q: "CSS Grid mein remaining space automatically fill karne ke liye commonly kis unit ka use hota hai?", ans: "fr", hint: "Fractional unit" },
{ q: "Grid columns ko repeat karne ke liye function kya hai?", ans: "repeat()", hint: "Repeated tracks" },
{ q: "Grid track sizing ke liye minimum aur maximum values combine karne wala function kya hai?", ans: "minmax()", hint: "Flexible sizing" },
{ q: "Flex items ki order change karne ke liye property kya hai?", ans: "order", hint: "Display sequence" },
{ q: "Flexbox mein default order value kya hoti hai?", ans: "0", hint: "Normal order" },

{ q: "CSS transition mein delay set karne ke liye property kya hai?", ans: "transition-delay", hint: "Start delay" },
{ q: "Transition ke timing curve ko define karne ke liye property kya hai?", ans: "transition-timing-function", hint: "Animation speed pattern" },
{ q: "Custom timing curve banane ke liye function kya hai?", ans: "cubic-bezier()", hint: "Custom easing" },
{ q: "Step based animation ke liye function kya hai?", ans: "steps()", hint: "Frame-by-frame effect" },
{ q: "Animation kitni baar chalegi ye define karne ke liye property kya hai?", ans: "animation-iteration-count", hint: "Repeat count" },

{ q: "Animation direction control karne ke liye property kya hai?", ans: "animation-direction", hint: "Forward ya reverse" },
{ q: "Animation shorthand property ka naam kya hai?", ans: "animation", hint: "All animation settings" },
{ q: "Transform aur opacity animations generally kis wajah se fast hoti hain?", ans: "GPU acceleration", hint: "Performance boost" },
{ q: "CSS mein rendering optimization ke liye hint dene wali property kya hai?", ans: "will-change", hint: "Performance optimization" },
{ q: "Element ki isolation create karne ke liye property kya hai?", ans: "isolation", hint: "Stacking context" },

{ q: "New stacking context banane ke liye isolation ki value kya hai?", ans: "isolate", hint: "Independent layer" },
{ q: "Blend mode ke effect ko isolate karne ke liye property kya hai?", ans: "isolation", hint: "Blend control" },
{ q: "Background image ki attachment scroll ke sath fix rakhne ke liye value kya hai?", ans: "fixed", hint: "Parallax style" },
{ q: "Background image ko element ke content ke sath scroll karne ki default value kya hai?", ans: "scroll", hint: "Normal behavior" },
{ q: "Background clipping control karne ke liye property kya hai?", ans: "background-clip", hint: "Background area" },

{ q: "Text ke andar background dikhane ke liye background-clip ki common value kya hai?", ans: "text", hint: "Gradient text" },
{ q: "Background origin control karne ke liye property kya hai?", ans: "background-origin", hint: "Background start area" },
{ q: "Border image apply karne ke liye property kya hai?", ans: "border-image", hint: "Image border" },
{ q: "Border image source define karne ke liye property kya hai?", ans: "border-image-source", hint: "Border image path" },
{ q: "Border image slice control karne ke liye property kya hai?", ans: "border-image-slice", hint: "Image slicing" },

{ q: "CSS mein quotes ke opening aur closing symbols customize karne ke liye property kya hai?", ans: "quotes", hint: "Custom quotation marks" },
{ q: "Text overflow ke sath ellipsis dikhane ke liye kaunsi property commonly white-space ke sath use hoti hai?", ans: "text-overflow", hint: "Three dots" },
{ q: "Single line ellipsis ke liye white-space ki value kya hoti hai?", ans: "nowrap", hint: "No wrapping" },
{ q: "Long words ko break karne ke liye modern property kya hai?", ans: "overflow-wrap", hint: "Word wrapping" },
{ q: "Anywhere word breaking ke liye overflow-wrap ki value kya hai?", ans: "anywhere", hint: "Break at any point" },

{ q: "CSS logical margin shorthand property kya hai?", ans: "margin-inline", hint: "Inline margins" },
{ q: "CSS logical padding shorthand property kya hai?", ans: "padding-inline", hint: "Inline padding" },
{ q: "Block direction margins ke liye shorthand property kya hai?", ans: "margin-block", hint: "Top-bottom logical margins" },
{ q: "Block direction padding ke liye shorthand property kya hai?", ans: "padding-block", hint: "Top-bottom logical padding" },
{ q: "CSS writing mode horizontal text ke liye common value kya hai?", ans: "horizontal-tb", hint: "Default writing mode" },

{ q: "Vertical text right-to-left ke liye writing-mode value kya hai?", ans: "vertical-rl", hint: "Vertical layout" },
{ q: "Vertical text left-to-right ke liye writing-mode value kya hai?", ans: "vertical-lr", hint: "Vertical flow" },
{ q: "CSS mein text orientation control karne ke liye property kya hai?", ans: "text-orientation", hint: "Vertical text orientation" },
{ q: "Container query mein container ka naam define karne ke liye property kya hai?", ans: "container-name", hint: "Named container" },
{ q: "Named container query likhne ke liye rule kya hai?", ans: "@container", hint: "Container condition" },

{ q: "CSS mein anchor position ka reference define karne ke liye property kya hai?", ans: "anchor-name", hint: "Anchor target" },
{ q: "Anchor based positioning ke liye function kya hai?", ans: "anchor()", hint: "Anchor value" },
{ q: "Scroll driven animations mein view progress track karne ke liye property kya hai?", ans: "view-timeline", hint: "View animation" },
{ q: "Scroll progress timeline define karne ke liye property kya hai?", ans: "scroll-timeline", hint: "Scroll animation" },
{ q: "Animation ko timeline ke sath connect karne ke liye property kya hai?", ans: "animation-timeline", hint: "Timeline binding" },

{ q: "Cascade layers define karne ke liye at-rule kya hai?", ans: "@layer", hint: "Layered cascade" },
{ q: "Scoped styles create karne ke liye experimental rule kya hai?", ans: "@scope", hint: "Scoped CSS" },
{ q: "Browser feature support detect karne ke liye rule kya hai?", ans: "@supports", hint: "Feature query" },
{ q: "Responsive design ka sabse important CSS feature kya mana jata hai?", ans: "@media", hint: "Media queries" },
{ q: "Modern CSS layouts ke liye do sabse important systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout tools" },


  ],
  Hard: [
{ q: "Flexbox mein items ki direction set karne ke liye property kya hai?", ans: "flex-direction", hint: "Row ya column" },
{ q: "Element ko red color dene ke liye property kya hai?", ans: "color", hint: "Text color" },
{ q: "Grid container banane ke liye display ki value kya hai?", ans: "grid", hint: "CSS Grid" },

{ q: "CSS mein !important ka purpose kya hai?", ans: "Priority barhana", hint: "Highest priority" },
{ q: "Paragraph selector likhne ke liye kaunsa selector use hota hai?", ans: "p", hint: "Element selector" },
{ q: "Grid columns repeat karne ke liye function kya hai?", ans: "repeat()", hint: "Track repeat" },
{ q: "Background image set karne ke liye property kya hai?", ans: "background-image", hint: "Image background" },

{ q: "Text ko center align karne ke liye property kya hai?", ans: "text-align", hint: "Alignment" },
{ q: "Pseudo-class hover ka syntax kya hai?", ans: ":hover", hint: "Mouse effect" },
{ q: "CSS cascade layers define karne ke liye rule kya hai?", ans: "@layer", hint: "Layered styles" },
{ q: "Margin aur padding width mein include karne ke liye box-sizing ki value kya hai?", ans: "border-box", hint: "Modern layout" },

{ q: "CSS scroll driven animation ke liye property kya hai?", ans: "animation-timeline", hint: "Timeline based animation" },
{ q: "Width set karne ke liye property kya hai?", ans: "width", hint: "Element width" },
{ q: "Sticky positioning ke liye property kya hai?", ans: "position", hint: "Sticky value use hoti hai" },

{ q: "Transform rotate karne ke liye function kya hai?", ans: "rotate()", hint: "Rotation effect" },
{ q: "Dark mode detect karne ke liye media feature kya hai?", ans: "prefers-color-scheme", hint: "Theme detection" },
{ q: "Text bold karne ke liye font property kya hai?", ans: "font-weight", hint: "Font thickness" },
{ q: "Grid item ko named area assign karne ke liye property kya hai?", ans: "grid-area", hint: "Area placement" },

{ q: "CSS file link karne ke liye HTML tag kya hai?", ans: "<link>", hint: "Head section" },
{ q: "Opacity set karne ke liye property kya hai?", ans: "opacity", hint: "Transparency" },
{ q: "CSS nesting mein parent selector ke liye symbol kya hai?", ans: "&", hint: "Current selector" },
{ q: "Border round karne ke liye property kya hai?", ans: "border-radius", hint: "Rounded corners" },
{ q: "Flexbox ka default direction kya hota hai?", ans: "row", hint: "Horizontal layout" },

{ q: "CSS feature support check karne ke liye rule kya hai?", ans: "@supports", hint: "Feature query" },
{ q: "Element hide karne ke liye display ki value kya hai?", ans: "none", hint: "Completely hidden" },
{ q: "Flex items wrap karne ke liye property kya hai?", ans: "flex-wrap", hint: "Next line" },

{ q: "CSS ka newest layout system konsa hai?", ans: "Grid", hint: "2D layout" },
{ q: "Container ka naam define karne ke liye property kya hai?", ans: "container-name", hint: "Named container" },
{ q: "Text underline remove karne ke liye property kya hai?", ans: "text-decoration", hint: "Decoration control" },
{ q: "Animation define karne ke liye rule kya hai?", ans: "@keyframes", hint: "Animation frames" },

{ q: "CSS mein percentage kis cheez ke relative hoti hai?", ans: "Parent element", hint: "Relative sizing" },
{ q: "Transform scale karne ke liye function kya hai?", ans: "scale()", hint: "Resize effect" },
{ q: "View based animations ke liye property kya hai?", ans: "view-timeline", hint: "Viewport tracking" },
{ q: "Cursor pointer dikhane ke liye value kya hai?", ans: "pointer", hint: "Hand cursor" },
{ q: "Grid tracks ka flexible unit kya hai?", ans: "fr", hint: "Fractional unit" },

{ q: "CSS comments kis syntax mein likhe jate hain?", ans: "/* */", hint: "Comment block" },
{ q: "Backdrop blur ke liye property kya hai?", ans: "backdrop-filter", hint: "Glass effect" },
{ q: "Responsive design ke liye sabse important rule kya hai?", ans: "@media", hint: "Media query" },

{ q: "Element ka background color set karne ke liye property kya hai?", ans: "background-color", hint: "Background styling" },
{ q: "CSS Grid mein rows define karne ke liye property kya hai?", ans: "grid-template-rows", hint: "Grid rows" },
{ q: "Cascade layers import karne ke liye @import ke sath konsa keyword use hota hai?", ans: "layer", hint: "Layer import" },
{ q: "Text ka size set karne ke liye property kya hai?", ans: "font-size", hint: "Text sizing" },
{ q: "Flexbox mein items ko center karne ke liye commonly justify-content ki value kya hoti hai?", ans: "center", hint: "Horizontal center" },

{ q: "CSS mein current text color ko use karne ke liye keyword kya hai?", ans: "currentColor", hint: "Current color value" },
{ q: "Element ke bahar spacing dene ke liye property kya hai?", ans: "margin", hint: "Outer spacing" },
{ q: "Scroll progress track karne ke liye property kya hai?", ans: "scroll-timeline", hint: "Scroll animation" },
{ q: "Element ke andar spacing dene ke liye property kya hai?", ans: "padding", hint: "Inner spacing" },
{ q: "CSS Grid mein auto placement control karne ke liye property kya hai?", ans: "grid-auto-flow", hint: "Auto placement" },

{ q: "Text italic karne ke liye property kya hai?", ans: "font-style", hint: "Italic text" },
{ q: "Custom timing curve ke liye function kya hai?", ans: "cubic-bezier()", hint: "Animation easing" },
{ q: "Flex items ki shrink behavior control karne ke liye property kya hai?", ans: "flex-shrink", hint: "Shrink factor" },

{ q: "CSS mein image source repeat control karne ke liye property kya hai?", ans: "background-repeat", hint: "Repeat behavior" },
{ q: "Container queries ke liye container-type ki width-based value kya hai?", ans: "inline-size", hint: "Width container" },
{ q: "Element ko absolute position dene ke liye value kya hai?", ans: "absolute", hint: "Absolute layout" },
{ q: "CSS filter mein blur effect ke liye function kya hai?", ans: "blur()", hint: "Blur image" },
{ q: "Grid item ko row span karne ke liye property kya hai?", ans: "grid-row", hint: "Row placement" },

{ q: "CSS mein environment variables access karne ke liye function kya hai?", ans: "env()", hint: "Device variables" },
{ q: "Display flex activate karne ke liye value kya hai?", ans: "flex", hint: "Flex layout" },
{ q: "Animation ko pause karne ke liye animation-play-state ki value kya hai?", ans: "paused", hint: "Stop animation" },
{ q: "Grid item ko column span karne ke liye property kya hai?", ans: "grid-column", hint: "Column placement" },

{ q: "Text ko uppercase karne ke liye property kya hai?", ans: "text-transform", hint: "Case conversion" },
{ q: "Border ki width set karne ke liye property kya hai?", ans: "border-width", hint: "Border size" },
{ q: "CSS animation repeat count ke liye property kya hai?", ans: "animation-iteration-count", hint: "Repeat times" },
{ q: "Flexbox mein items grow karne ke liye property kya hai?", ans: "flex-grow", hint: "Growth factor" },

{ q: "Default display value block element ke liye kya hoti hai?", ans: "block", hint: "Block layout" },
{ q: "CSS motion path define karne ke liye property kya hai?", ans: "offset-path", hint: "Motion path" },
{ q: "Text shadow dene ke liye property kya hai?", ans: "text-shadow", hint: "Shadow effect" },

{ q: "CSS variable define karne ke liye kis rule ki zarurat nahi hoti?", ans: ":root", hint: "Common location" },
{ q: "Forced colors detect karne ke liye media feature kya hai?", ans: "forced-colors", hint: "Accessibility" },
{ q: "Overflow control karne ke liye property kya hai?", ans: "overflow", hint: "Content overflow" },
{ q: "Sticky element activate karne ke liye commonly kaunsi property set hoti hai?", ans: "top", hint: "Sticky offset" },
{ q: "CSS Grid ka flexible sizing function kya hai?", ans: "minmax()", hint: "Min and max size" },

{ q: "Text alignment control karne ke liye property kya hai?", ans: "text-align", hint: "Text position" },
{ q: "CSS color mix karne ke liye function kya hai?", ans: "color-mix()", hint: "Color blending" },
{ q: "Flexbox aur Grid kis cheez ke liye use hote hain?", ans: "Layout", hint: "Page structure" },

{ q: "CSS mein responsive typography ke liye commonly konsa function use hota hai?", ans: "clamp()", hint: "Flexible font sizing" },
{ q: "Background image ki position control karne ke liye property kya hai?", ans: "background-position", hint: "Image placement" },
{ q: "Pseudo-element jo placeholder style karta hai uska naam kya hai?", ans: "::placeholder", hint: "Input placeholder" },
{ q: "Modern responsive layouts ke liye sabse important do tools kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout systems" },

{ q: "CSS ka use kis liye hota hai?", ans: "Styling", hint: "Web page design" },
{ q: "Grid container mein gap dene ke liye property kya hai?", ans: "gap", hint: "Space between items" },
{ q: "CSS nesting mein current selector ko refer karne ke liye symbol kya hai?", ans: "&", hint: "Parent selector" },
{ q: "Element ko fixed position dene ke liye position ki value kya hai?", ans: "fixed", hint: "Viewport based" },
{ q: "Animation speed pattern define karne ke liye property kya hai?", ans: "animation-timing-function", hint: "Easing control" },

{ q: "Text color set karne ke liye property kya hai?", ans: "color", hint: "Font color" },
{ q: "Container query likhne ke liye kis at-rule ka use hota hai?", ans: "@container", hint: "Responsive containers" },
{ q: "Element ki transparency control karne ke liye property kya hai?", ans: "opacity", hint: "0 se 1 tak" },
{ q: "Scroll driven animation ke liye scroll progress define karne wali property kya hai?", ans: "scroll-timeline", hint: "Timeline source" },

{ q: "CSS logical margin start property kya hai?", ans: "margin-inline-start", hint: "Logical left/right" },
{ q: "Border color set karne ke liye property kya hai?", ans: "border-color", hint: "Border styling" },
{ q: "GPU accelerated animations ke liye commonly kaunsi property use hoti hai?", ans: "transform", hint: "Smooth animations" },

{ q: "CSS mein safe area values access karne ke liye function kya hai?", ans: "env()", hint: "Device insets" },
{ q: "Element ko hidden rakhne lekin layout mein space preserve karne ke liye property kya hai?", ans: "visibility", hint: "Hidden but reserved" },
{ q: "CSS motion path par distance control karne ke liye property kya hai?", ans: "offset-distance", hint: "Path progress" },


{ q: "CSS scope create karne ke liye experimental rule kya hai?", ans: "@scope", hint: "Scoped styles" },
{ q: "CSS filter mein brightness effect ke liye function kya hai?", ans: "brightness()", hint: "Lightness control" },
{ q: "Grid ka fractional unit kya hai?", ans: "fr", hint: "Flexible space" },

{ q: "Element ko completely hide karne ke liye display ki value kya hai?", ans: "none", hint: "Not rendered" },
{ q: "Cascade layers define karne ke liye rule kya hai?", ans: "@layer", hint: "Layered cascade" },
{ q: "Text shadow add karne ke liye property kya hai?", ans: "text-shadow", hint: "Shadow text" },
{ q: "Flex items ko next line mein bhejne ke liye property kya hai?", ans: "flex-wrap", hint: "Wrapping" },

{ q: "Pseudo-class hover ka naam kya hai?", ans: ":hover", hint: "Mouse interaction" },
{ q: "Feature support check karne ke liye rule kya hai?", ans: "@supports", hint: "Feature query" },
{ q: "CSS color blend karne ke liye function kya hai?", ans: "color-mix()", hint: "Color mixing" },
{ q: "Grid auto placement direction control karne ke liye property kya hai?", ans: "grid-auto-flow", hint: "Automatic placement" },

{ q: "Overflowed text ke liye three dots dikhane wali property kya hai?", ans: "text-overflow", hint: "Ellipsis" },
{ q: "Motion path define karne ke liye property kya hai?", ans: "offset-path", hint: "Custom path" },
{ q: "Responsive design ka sabse important rule kya mana jata hai?", ans: "@media", hint: "Media queries" },

{ q: "CSS variable access karne ke liye function kya hai?", ans: "var()", hint: "Custom property use" },
{ q: "Underline remove karne ke liye property kya hai?", ans: "text-decoration", hint: "Decoration control" },
{ q: "View based animation tracking ke liye property kya hai?", ans: "view-timeline", hint: "Viewport progress" },
{ q: "Modern CSS layouts ke do sabse powerful systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout tools" },

{ q: "Flex container banane ke liye display ki value kya hai?", ans: "flex", hint: "Flexbox layout" },
{ q: "CSS mein feature support detect karne ke liye rule kya hai?", ans: "@supports", hint: "Feature query" },
{ q: "Text ka color change karne ke liye property kya hai?", ans: "color", hint: "Font color" },

{ q: "Element ke around outer spacing dene ke liye property kya hai?", ans: "margin", hint: "Outside space" },
{ q: "Container query define karne ke liye rule kya hai?", ans: "@container", hint: "Container-based responsive design" },
{ q: "Scroll-driven animations ke liye property kya hai?", ans: "animation-timeline", hint: "Timeline binding" },
{ q: "Flex item ki growth control karne ke liye property kya hai?", ans: "flex-grow", hint: "Growth factor" },

{ q: "Grid item ko columns span karne ke liye property kya hai?", ans: "grid-column", hint: "Column placement" },

{ q: "Dark mode preference detect karne ke liye media feature kya hai?", ans: "prefers-color-scheme", hint: "Theme detection" },
{ q: "Rounded corners create karne ke liye property kya hai?", ans: "border-radius", hint: "Curved corners" },
{ q: "CSS nesting mein parent selector refer karne ke liye symbol kya hai?", ans: "&", hint: "Current selector" },
{ q: "Grid ka flexible unit kya hai?", ans: "fr", hint: "Fractional unit" },

{ q: "Text align center karne ke liye property kya hai?", ans: "text-align", hint: "Alignment" },
{ q: "Element ko transparent banane ke liye property kya hai?", ans: "opacity", hint: "Transparency level" },
{ q: "Flexbox ka default flex-direction kya hai?", ans: "row", hint: "Horizontal direction" },

{ q: "View-based animation tracking ke liye property kya hai?", ans: "view-timeline", hint: "Viewport timeline" },
{ q: "Grid auto placement control karne ke liye property kya hai?", ans: "grid-auto-flow", hint: "Auto positioning" },

{ q: "Display none kya karta hai?", ans: "Element ko hide karta hai", hint: "No rendering" },
{ q: "CSS safe-area values access karne ke liye function kya hai?", ans: "env()", hint: "Device environment" },
{ q: "Backdrop blur create karne ke liye property kya hai?", ans: "backdrop-filter", hint: "Glass effect" },

{ q: "Forced high-contrast mode detect karne ke liye media feature kya hai?", ans: "forced-colors", hint: "Accessibility" },
{ q: "Text shadow create karne ke liye property kya hai?", ans: "text-shadow", hint: "Shadow effect" },
{ q: "Animation ke custom easing ke liye function kya hai?", ans: "cubic-bezier()", hint: "Custom curve" },

{ q: "Scoped CSS likhne ke liye experimental rule kya hai?", ans: "@scope", hint: "Scoped styles" },
{ q: "Sticky element activate karne ke liye commonly kis property ka use hota hai?", ans: "top", hint: "Sticky offset" },
{ q: "CSS Grid sizing ke liye min aur max combine karne wala function kya hai?", ans: "minmax()", hint: "Flexible sizing" },

{ q: "Text decoration remove karne ke liye property kya hai?", ans: "text-decoration", hint: "Underline control" },
{ q: "Modern responsive layouts ke liye sabse zyada use hone wale systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout systems" },

{ q: "CSS mein text ko bold karne ke liye property kya hai?", ans: "font-weight", hint: "Text thickness" },
{ q: "Grid container ke items ke darmiyan space dene ke liye property kya hai?", ans: "gap", hint: "Row aur column spacing" },
{ q: "CSS scroll progress define karne ke liye property kya hai?", ans: "scroll-timeline", hint: "Scroll animations" },
{ q: "Element ka width set karne ke liye property kya hai?", ans: "width", hint: "Horizontal size" },
{ q: "Flex item ka base size define karne ke liye property kya hai?", ans: "flex-basis", hint: "Initial size" },

{ q: "Background repeat control karne ke liye property kya hai?", ans: "background-repeat", hint: "Image repetition" },
{ q: "Container queries ke liye width-based container type kya hai?", ans: "inline-size", hint: "Width container" },
{ q: "CSS motion path par object ki distance control karne ke liye property kya hai?", ans: "offset-distance", hint: "Path progress" },

{ q: "CSS animation repeat count define karne ke liye property kya hai?", ans: "animation-iteration-count", hint: "Repeat times" },

{ q: "CSS color transparency ke liye commonly konsa function use hota hai?", ans: "rgba()", hint: "RGB + alpha" },
{ q: "Grid tracks ka flexible sizing unit kya hai?", ans: "fr", hint: "Fractional unit" },

{ q: "Pseudo-class focus ka syntax kya hai?", ans: ":focus", hint: "Focused element" },
{ q: "Cascade layers create karne ke liye rule kya hai?", ans: "@layer", hint: "Layered styles" },
{ q: "Text shadow lagane ke liye property kya hai?", ans: "text-shadow", hint: "Shadow effect" },
{ q: "Backdrop ke contrast ko control karne ke liye function kya hai?", ans: "contrast()", hint: "Filter effect" },
{ q: "Flexbox mein items ki order change karne ke liye property kya hai?", ans: "order", hint: "Display order" },

{ q: "CSS environment values access karne ke liye function kya hai?", ans: "env()", hint: "Device variables" },
{ q: "Animation ke timing curve define karne ke liye property kya hai?", ans: "animation-timing-function", hint: "Speed pattern" },

{ q: "Scoped styles likhne ke liye experimental rule kya hai?", ans: "@scope", hint: "Scoped CSS" },
{ q: "List markers control karne ke liye property kya hai?", ans: "list-style", hint: "Bullet styling" },
{ q: "Grid sizing ke liye min aur max values combine karne wala function kya hai?", ans: "minmax()", hint: "Flexible tracks" },

{ q: "Flexbox mein items ko next line par bhejne ke liye property kya hai?", ans: "flex-wrap", hint: "Wrapping" },

{ q: "Element ko fixed position dene ke liye value kya hai?", ans: "fixed", hint: "Viewport based" },
{ q: "Border radius create karne ke liye property kya hai?", ans: "border-radius", hint: "Rounded corners" },
{ q: "Responsive design ke liye sabse important CSS rule kya hai?", ans: "@media", hint: "Media queries" },

{ q: "Text underline control karne ke liye property kya hai?", ans: "text-decoration", hint: "Decoration style" },
{ q: "Scroll snapping activate karne ke liye property kya hai?", ans: "scroll-snap-type", hint: "Snap scrolling" },
{ q: "Modern CSS layouts ke do sabse important systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout tools" },

{ q: "CSS mein text ko underline karne ke liye property kya hai?", ans: "text-decoration", hint: "Text decoration" },
{ q: "Grid container ko define karne ke liye display ki value kya hai?", ans: "grid", hint: "Grid layout" },
{ q: "CSS Nesting mein parent selector ko refer karne ke liye symbol kya hai?", ans: "&", hint: "Current selector" },
{ q: "Animation ko reverse chalane ke liye animation-direction ki value kya hai?", ans: "reverse", hint: "Ulti direction" },

{ q: "Font ka typeface set karne ke liye property kya hai?", ans: "font-family", hint: "Font selection" },
{ q: "Grid item ko specific column line par rakhne ke liye property kya hai?", ans: "grid-column-start", hint: "Column start line" },
{ q: "Container query ke liye container type define karne wali property kya hai?", ans: "container-type", hint: "Query container" },
{ q: "Element ko viewport ke mutabiq size dene ke liye unit kya hai?", ans: "vw", hint: "Viewport width" },
{ q: "CSS animation ka start delay define karne ke liye property kya hai?", ans: "animation-delay", hint: "Delay before start" },

{ q: "Grid item ko specific row line par rakhne ke liye property kya hai?", ans: "grid-row-start", hint: "Row start line" },
{ q: "CSS color mixing ke liye function kya hai?", ans: "color-mix()", hint: "Colors combine karta hai" },
{ q: "Flex item ko shrink hone se rokne ke liye flex-shrink ki common value kya hai?", ans: "0", hint: "No shrinking" },

{ q: "CSS logical padding start property kya hai?", ans: "padding-inline-start", hint: "Logical padding" },
{ q: "Background image ki size control karne ke liye property kya hai?", ans: "background-size", hint: "Image scaling" },
{ q: "Animation ko infinite chalane ke liye value kya hai?", ans: "infinite", hint: "Never stops" },

{ q: "Scroll-based animation ke liye timeline define karne wali property kya hai?", ans: "scroll-timeline", hint: "Scroll progress" },
{ q: "Border style set karne ke liye property kya hai?", ans: "border-style", hint: "Solid, dashed etc." },

{ q: "Forced color mode detect karne ke liye media feature kya hai?", ans: "forced-colors", hint: "Accessibility mode" },
{ q: "Flexbox mein items ki alignment cross-axis par karne ke liye property kya hai?", ans: "align-items", hint: "Cross-axis alignment" },

{ q: "Overflow text ke liye ellipsis dikhane wali property kya hai?", ans: "text-overflow", hint: "Three dots" },
{ q: "Grid sizing ke liye min aur max combine karne wala function kya hai?", ans: "minmax()", hint: "Flexible sizing" },

{ q: "CSS filter mein hue rotation ke liye function kya hai?", ans: "hue-rotate()", hint: "Color shift" },
{ q: "Flex item ki display order set karne ke liye property kya hai?", ans: "order", hint: "Item sequence" },

{ q: "Container queries likhne ke liye rule kya hai?", ans: "@container", hint: "Container responsive design" },
{ q: "Custom animation easing ke liye function kya hai?", ans: "cubic-bezier()", hint: "Custom curve" },

{ q: "List markers remove karne ke liye property kya hai?", ans: "list-style", hint: "Bullet control" },
{ q: "Modern layouts ke liye sabse powerful CSS systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout tools" },

{ q: "CSS mein background color set karne ke liye property kya hai?", ans: "background-color", hint: "Element ka background" },
{ q: "Grid items ko horizontal axis par align karne ke liye property kya hai?", ans: "justify-items", hint: "Grid alignment" },
{ q: "CSS scope define karne ke liye experimental at-rule kya hai?", ans: "@scope", hint: "Scoped styles" },

{ q: "Margin aur border ke darmiyan space ko kya kehte hain?", ans: "padding", hint: "Inner spacing" },
{ q: "Grid item ki alignment control karne ke liye property kya hai?", ans: "place-self", hint: "Self alignment" },
{ q: "Dark mode detect karne ke liye media query feature kya hai?", ans: "prefers-color-scheme", hint: "Theme preference" },
{ q: "Scroll-driven animations ke liye view tracking property kya hai?", ans: "view-timeline", hint: "Viewport timeline" },

{ q: "Class selector kis symbol se likha jata hai?", ans: ".", hint: "Dot selector" },
{ q: "Grid container ke andar items ko center karne ke liye shorthand property kya hai?", ans: "place-items", hint: "Align + justify" },
{ q: "CSS color interpolation ke liye modern function kya hai?", ans: "color-mix()", hint: "Color blending" },
{ q: "Border ko round karne ke liye property kya hai?", ans: "border-radius", hint: "Rounded corners" },

{ q: "CSS logical margin end property kya hai?", ans: "margin-inline-end", hint: "Logical spacing" },
{ q: "Feature support detect karne ke liye rule kya hai?", ans: "@supports", hint: "Feature query" },

{ q: "Display flex kis layout system ko activate karta hai?", ans: "Flexbox", hint: "1D layout" },
{ q: "Backdrop blur effect create karne ke liye property kya hai?", ans: "backdrop-filter", hint: "Glassmorphism" },
{ q: "Grid tracks repeat karne ke liye function kya hai?", ans: "repeat()", hint: "Repeated tracks" },

{ q: "Environment variables access karne ke liye function kya hai?", ans: "env()", hint: "Device values" },
{ q: "Overflow content control karne ke liye property kya hai?", ans: "overflow", hint: "Extra content" },
{ q: "Flexbox mein cross-axis alignment ke liye property kya hai?", ans: "align-items", hint: "Cross alignment" },

{ q: "Text overflow par three dots dikhane wali property kya hai?", ans: "text-overflow", hint: "Ellipsis" },
{ q: "Scroll progress define karne wali property kya hai?", ans: "scroll-timeline", hint: "Scroll animations" },


{ q: "Rounded shape banane ke liye border-radius ki common value kya hoti hai?", ans: "50%", hint: "Circle shape" },
{ q: "Custom easing curve banane ke liye function kya hai?", ans: "cubic-bezier()", hint: "Animation curve" },


{ q: "CSS mein text ka color change karne ke liye property kya hai?", ans: "color", hint: "Text styling" },
{ q: "Grid container ke andar columns define karne ke liye property kya hai?", ans: "grid-template-columns", hint: "Column tracks" },
{ q: "CSS Anchor Positioning mein anchor define karne ke liye property kya hai?", ans: "anchor-name", hint: "Anchor reference" },
{ q: "Animation ke end state ko preserve karne ke liye animation-fill-mode ki common value kya hai?", ans: "forwards", hint: "Last state" },

{ q: "Grid areas define karne ke liye property kya hai?", ans: "grid-template-areas", hint: "Named layout" },
{ q: "CSS color spaces mein perceptual interpolation ke liye commonly kis color space ka use hota hai?", ans: "oklch", hint: "Modern color model" },
{ q: "Element ko transparent karne ke liye property kya hai?", ans: "opacity", hint: "Transparency" },
{ q: "Scroll animations ke liye timeline source define karne ke liye property kya hai?", ans: "scroll-timeline-name", hint: "Timeline identifier" },

{ q: "Grid item ko align aur justify ek sath karne ke liye shorthand kya hai?", ans: "place-self", hint: "Self placement" },
{ q: "CSS feature support detect karne ke liye rule kya hai?", ans: "@supports", hint: "Feature query" },
{ q: "Flex item ko grow karne ke liye property kya hai?", ans: "flex-grow", hint: "Growth factor" },

{ q: "CSS logical property jo width ko represent karti hai uska naam kya hai?", ans: "inline-size", hint: "Logical width" },
{ q: "Animation ko ulta chalane ke liye animation-direction ki value kya hai?", ans: "reverse", hint: "Backward animation" },


{ q: "Environment values access karne ke liye function kya hai?", ans: "env()", hint: "Device values" },
{ q: "Motion path movement define karne ke liye property kya hai?", ans: "offset-path", hint: "Path animation" },

{ q: "Overflow text par ellipsis dikhane ke liye property kya hai?", ans: "text-overflow", hint: "Three dots" },
{ q: "View-based animations ke liye property kya hai?", ans: "view-timeline", hint: "Viewport tracking" },
{ q: "Flexible grid sizing ke liye function kya hai?", ans: "minmax()", hint: "Min and max size" },

{ q: "Flex item shrink behavior control karne ke liye property kya hai?", ans: "flex-shrink", hint: "Shrink factor" },

{ q: "Forced colors mode detect karne ke liye media feature kya hai?", ans: "forced-colors", hint: "Accessibility" },
{ q: "Perfect circle banane ke liye border-radius ki common value kya hoti hai?", ans: "50%", hint: "Round shape" },
{ q: "Custom animation easing define karne ke liye function kya hai?", ans: "cubic-bezier()", hint: "Bezier curve" },

{ q: "Modern CSS layouts ke sabse powerful systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout systems" },

{ q: "CSS mein font ka size set karne ke liye property kya hai?", ans: "font-size", hint: "Text size" },
{ q: "Grid container mein rows aur columns ke darmiyan spacing dene ke liye property kya hai?", ans: "gap", hint: "Grid spacing" },
{ q: "CSS Scroll-Driven Animations mein view progress timeline define karne ke liye property kya hai?", ans: "view-timeline-name", hint: "Timeline identifier" },
{ q: "Element ko center align karne ke liye text property kya hai?", ans: "text-align", hint: "Text alignment" },
{ q: "Animation ko continuously chalane ke liye animation-iteration-count ki value kya hoti hai?", ans: "infinite", hint: "Never stops" },

{ q: "Grid item ko ek hi shorthand mein place karne ke liye property kya hai?", ans: "grid-area", hint: "Placement shorthand" },
{ q: "Modern CSS color model jo hue, chroma aur lightness use karta hai uska naam kya hai?", ans: "oklch", hint: "Advanced color space" },
{ q: "Animation ko custom timeline ke sath connect karne ke liye property kya hai?", ans: "animation-timeline", hint: "Timeline binding" },

{ q: "Grid items ko block axis par align karne ke liye property kya hai?", ans: "align-items", hint: "Alignment control" },
{ q: "CSS feature support test karne ke liye rule kya hai?", ans: "@supports", hint: "Feature query" },
{ q: "Rounded corners banane ke liye property kya hai?", ans: "border-radius", hint: "Corner styling" },

{ q: "Logical height ko represent karne wali property kya hai?", ans: "block-size", hint: "Logical sizing" },
{ q: "Background image add karne ke liye property kya hai?", ans: "background-image", hint: "Background graphic" },

{ q: "Display flex kis CSS layout ko activate karta hai?", ans: "Flexbox", hint: "One-dimensional layout" },
{ q: "Backdrop par blur effect lagane ke liye property kya hai?", ans: "backdrop-filter", hint: "Glass effect" },
{ q: "Grid values repeat karne ke liye function kya hai?", ans: "repeat()", hint: "Repeated tracks" },

{ q: "Custom property access karne ke liye function kya hai?", ans: "var()", hint: "CSS variables" },
{ q: "Device environment values access karne ke liye function kya hai?", ans: "env()", hint: "Safe-area values" },
{ q: "Overflow content manage karne ke liye property kya hai?", ans: "overflow", hint: "Extra content" },
{ q: "Motion path animation define karne ke liye property kya hai?", ans: "offset-path", hint: "Movement path" },

{ q: "Named container define karne ke liye property kya hai?", ans: "container-name", hint: "Container naming" },
{ q: "Text overflow par ellipsis dikhane ke liye property kya hai?", ans: "text-overflow", hint: "Three dots" },
{ q: "Viewport progress track karne ke liye property kya hai?", ans: "view-timeline", hint: "View timeline" },
{ q: "Flexible sizing ke liye min aur max combine karne wala function kya hai?", ans: "minmax()", hint: "Grid sizing" },

{ q: "Text ko lowercase ya uppercase karne ke liye property kya hai?", ans: "text-transform", hint: "Case conversion" },
{ q: "Background image ki placement control karne ke liye property kya hai?", ans: "background-position", hint: "Image location" },
{ q: "CSS filter mein grayscale effect ke liye function kya hai?", ans: "grayscale()", hint: "Black and white" },
{ q: "Flex item ki display order control karne ke liye property kya hai?", ans: "order", hint: "Item sequence" },

{ q: "Perfect circle banane ke liye border-radius ki common value kya hai?", ans: "50%", hint: "Circular shape" },
{ q: "Custom easing curve define karne ke liye function kya hai?", ans: "cubic-bezier()", hint: "Bezier animation" },


{ q: "CSS mein text ko italic karne ke liye property kya hai?", ans: "font-style", hint: "Italic text" },
{ q: "Grid layout mein rows define karne ke liye property kya hai?", ans: "grid-template-rows", hint: "Row tracks" },
{ q: "CSS Anchor Positioning mein anchor value access karne ke liye function kya hai?", ans: "anchor()", hint: "Anchor reference" },
{ q: "Animation ko start hone se pehle delay dene ke liye property kya hai?", ans: "animation-delay", hint: "Start delay" },

{ q: "Grid columns aur rows ko shorthand mein define karne ke liye property kya hai?", ans: "grid-template", hint: "Grid shorthand" },
{ q: "Modern CSS color space jo perceptual uniformity provide karta hai uska naam kya hai?", ans: "OKLCH", hint: "Advanced color model" },
{ q: "Scroll-driven animation ko kisi specific timeline se connect karne ke liye property kya hai?", ans: "animation-timeline", hint: "Timeline binding" },

{ q: "Grid items ko inline axis par align karne ke liye property kya hai?", ans: "justify-items", hint: "Inline alignment" },

{ q: "Logical width ko represent karne wali property kya hai?", ans: "inline-size", hint: "Logical sizing" },
{ q: "Animation ko reverse aur forward dono directions mein chalane ke liye value kya hai?", ans: "alternate", hint: "Alternating direction" },

{ q: "CSS nesting mein parent selector ko represent karne ke liye symbol kya hai?", ans: "&", hint: "Current selector" },

{ q: "Custom properties access karne ke liye function kya hai?", ans: "var()", hint: "CSS variables" },
{ q: "Safe-area aur environment values access karne ke liye function kya hai?", ans: "env()", hint: "Device values" },
{ q: "Flexbox mein cross-axis alignment control karne ke liye property kya hai?", ans: "align-items", hint: "Cross alignment" },

{ q: "Overflowed text par ellipsis show karne ke liye property kya hai?", ans: "text-overflow", hint: "Three dots" },
{ q: "Viewport progress tracking ke liye property kya hai?", ans: "view-timeline", hint: "View timeline" },

{ q: "Text case change karne ke liye property kya hai?", ans: "text-transform", hint: "Upper/lower case" },
{ q: "Background image placement control karne ke liye property kya hai?", ans: "background-position", hint: "Image location" },
{ q: "CSS filter mein brightness control karne ke liye function kya hai?", ans: "brightness()", hint: "Light intensity" },
{ q: "Flex items ki sequence control karne ke liye property kya hai?", ans: "order", hint: "Display order" },

{ q: "Element ko fixed viewport position dene ke liye value kya hai?", ans: "fixed", hint: "Viewport attachment" },
{ q: "Perfect circle create karne ke liye border-radius ki common value kya hai?", ans: "50%", hint: "Circular shape" },


{ q: "CSS mein text ko center align karne ke liye property kya hai?", ans: "text-align", hint: "Text alignment" },
{ q: "Grid item ko end position par align karne ke liye value kya hai?", ans: "end", hint: "Alignment value" },
{ q: "CSS mein scroll snapping ke liye item alignment property kya hai?", ans: "scroll-snap-align", hint: "Snap position" },
{ q: "Element ka minimum width set karne ke liye property kya hai?", ans: "min-width", hint: "Smallest width" },
{ q: "Animation ki total duration set karne ke liye property kya hai?", ans: "animation-duration", hint: "Animation time" },

{ q: "Background image ko repeat hone se rokne ke liye value kya hai?", ans: "no-repeat", hint: "No repetition" },
{ q: "Grid items ko distribute karne ke liye property kya hai?", ans: "justify-content", hint: "Grid spacing" },
{ q: "CSS container queries ke liye container define karne wali property kya hai?", ans: "container-type", hint: "Container setup" },
{ q: "Animation ka naam define karne ke liye property kya hai?", ans: "animation-name", hint: "Keyframes name" },

{ q: "CSS variable kis symbol se start hoti hai?", ans: "--", hint: "Custom property" },
{ q: "Grid columns ke beech gap dene ke liye property kya hai?", ans: "column-gap", hint: "Column spacing" },
{ q: "CSS color ko mix karne ke liye function kya hai?", ans: "color-mix()", hint: "Color blending" },
{ q: "Element ko rotate karne ke liye transform function kya hai?", ans: "rotate()", hint: "Rotation" },
{ q: "Flex item ko shrink control karne ke liye property kya hai?", ans: "flex-shrink", hint: "Shrink factor" },

{ q: "Grid rows ke beech gap dene ke liye property kya hai?", ans: "row-gap", hint: "Row spacing" },
{ q: "CSS feature query ke liye rule kya hai?", ans: "@supports", hint: "Support check" },
{ q: "Element ka shadow create karne ke liye property kya hai?", ans: "box-shadow", hint: "Box shadow" },
{ q: "Animation ko alternate reverse chalane ke liye value kya hai?", ans: "alternate-reverse", hint: "Direction mode" },

{ q: "Display block kya karta hai?", ans: "Element ko block banata hai", hint: "Block layout" },
{ q: "Grid item ki position shorthand property kya hai?", ans: "grid-area", hint: "Grid placement" },
{ q: "CSS nesting mein parent selector symbol kya hai?", ans: "&", hint: "Parent reference" },
{ q: "Element ko scale karne ke liye function kya hai?", ans: "scale()", hint: "Resize transform" },
{ q: "Flexbox mein main axis alignment ke liye property kya hai?", ans: "justify-content", hint: "Main axis" },

{ q: "Text overflow control karne ke liye property kya hai?", ans: "text-overflow", hint: "Ellipsis" },
{ q: "Scroll animation timeline define karne ke liye property kya hai?", ans: "scroll-timeline", hint: "Timeline" },

{ q: "Cascade layers ke liye rule kya hai?", ans: "@layer", hint: "Layered CSS" },

{ q: "Element ko sticky position dene ke liye value kya hai?", ans: "sticky", hint: "Sticky layout" },
{ q: "Perfect circle banane ke liye border-radius ki value kya hoti hai?", ans: "50%", hint: "Circle shape" },
{ q: "Responsive design ke liye rule kya hai?", ans: "@media", hint: "Media queries" },

{ q: "Modern CSS layouts ke do powerful systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout systems" },

{ q: "CSS Anchor Positioning mein anchor element define karne ke liye property kya hai?", ans: "anchor-name", hint: "Anchor reference" },
{ q: "Animation ki timing curve define karne ke liye property kya hai?", ans: "animation-timing-function", hint: "Speed curve" },

{ q: "Text ko bold karne ke liye property kya hai?", ans: "font-weight", hint: "Font thickness" },
{ q: "Grid item ko specific column mein place karne ke liye property kya hai?", ans: "grid-column", hint: "Column placement" },
{ q: "Container queries activate karne ke liye property kya hai?", ans: "container-type", hint: "Container setup" },

{ q: "CSS color blending ke liye function kya hai?", ans: "color-mix()", hint: "Mix colors" },
{ q: "Flex item ki shrink value control karne ke liye property kya hai?", ans: "flex-shrink", hint: "Shrink factor" },

{ q: "Element par outer shadow lagane ke liye property kya hai?", ans: "box-shadow", hint: "Shadow effect" },
{ q: "Animation ko infinitely repeat karne ke liye value kya hai?", ans: "infinite", hint: "Never ends" },

{ q: "Display flex kis layout ko activate karta hai?", ans: "Flexbox", hint: "1D layout" },
{ q: "Grid item ko row mein place karne ke liye property kya hai?", ans: "grid-row", hint: "Row placement" },
{ q: "Element ko move karne ke liye transform function kya hai?", ans: "translate()", hint: "Position shift" },
{ q: "Flexbox mein items ko center align karne ke liye property kya hai?", ans: "justify-content", hint: "Main axis alignment" },

{ q: "Overflow text ko ellipsis dikhane ke liye property kya hai?", ans: "text-overflow", hint: "Three dots" },

{ q: "Background image ko stretch control karne ke liye property kya hai?", ans: "background-size", hint: "Image sizing" },


{ q: "Modern CSS layouts ke sabse important systems kaun se hain?", ans: "Flexbox aur Grid", hint: "Layout tools" },

{ q: "CSS mein text ko justify karne ke liye property kya hai?", ans: "text-align", hint: "Text alignment" },
{ q: "Grid container ke columns aur rows ko ek shorthand mein define karne ke liye property kya hai?", ans: "grid", hint: "Grid shorthand" },
{ q: "CSS Scroll-Driven Animations mein view timeline axis define karne ke liye property kya hai?", ans: "view-timeline-axis", hint: "Timeline direction" },
{ q: "Animation ka fill behavior define karne ke liye property kya hai?", ans: "animation-fill-mode", hint: "Animation state" },

{ q: "Text ko underline karne ke liye property kya hai?", ans: "text-decoration", hint: "Text decoration" },
{ q: "Grid item ko specific area mein place karne ke liye property kya hai?", ans: "grid-area", hint: "Named area" },
{ q: "CSS Anchor Positioning mein anchor position access karne ke liye function kya hai?", ans: "anchor()", hint: "Anchor reference" },
{ q: "Element ko horizontally move karne ke liye transform function kya hai?", ans: "translateX()", hint: "X-axis move" },
{ q: "Animation ko reverse chalane ke liye direction value kya hai?", ans: "reverse", hint: "Backward animation" },

{ q: "Grid columns ka size define karne ke liye property kya hai?", ans: "grid-template-columns", hint: "Column tracks" },

{ q: "Pseudo-class active ka syntax kya hai?", ans: ":active", hint: "Active element" },
{ q: "Grid rows ka size define karne ke liye property kya hai?", ans: "grid-template-rows", hint: "Row tracks" },
{ q: "Element par inner ya outer shadow lagane ke liye property kya hai?", ans: "box-shadow", hint: "Shadow styling" },

{ q: "Display grid kis layout system ko activate karta hai?", ans: "Grid", hint: "2D layout" },
{ q: "Element ko vertically move karne ke liye transform function kya hai?", ans: "translateY()", hint: "Y-axis move" },

{ q: "Overflow text ko dots mein convert karne ke liye property kya hai?", ans: "text-overflow", hint: "Ellipsis" },
{ q: "Scroll timeline define karne ke liye property kya hai?", ans: "scroll-timeline", hint: "Animation timeline" },
{ q: "Flexible track sizing ke liye function kya hai?", ans: "minmax()", hint: "Grid sizing" },

{ q: "Background image ki repeat setting control karne ke liye property kya hai?", ans: "background-repeat", hint: "Image repetition" },

{ q: "Element ko relative position dene ke liye value kya hai?", ans: "relative", hint: "Relative positioning" },

],
};
