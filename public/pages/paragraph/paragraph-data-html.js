/* ── Paragraph Mistakes — Easy HTML Data ──
   Easy: 5-8 mistakes per code
   
   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)
   
   type:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title)
     'missing' = tag ya attribute ghayab hai
*/

const HTML_PARAGRAPH = {
  Easy: [

// ── 1 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 1</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>Welcome to my site</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 1</titel>
</head>
<body>
  <H1>Hello World</H1>
  <P>Welcome to my site</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase tags, correct 'title', and correct 'charset' attribute."
},

// ── 2 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 2</title>
</head>
<body>
  <a href="https://example.com">Click Here</a>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 2</Title>
</head>
<body>
  <A HREF="https://example.com">Click Here</A>
</body>
</html>`,
totalMistakes: 5,
hint: "Anchor tag and attributes should be lowercase."
},

// ── 3 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 3</title>
</head>
<body>
  <img src="photo.jpg" alt="A photo">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 3</Title>
</head>
<body>
  <IMG SRC="photo.jpg" ALT="A photo">
</body>
</html>`,
totalMistakes: 5,
hint: "IMG tag and all attributes must be lowercase."
},

// ── 4 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 4</title>
</head>
<body>
  <h1>Main Heading</h1>
  <p>Some text here</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 4</titel>
</head>
<body>
  <H1>Main Heading</H1>
  <P>Some text here</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix spelling of title and use lowercase tags."
},

// ── 5 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 5</title>
</head>
<body>
  <p>This is a paragraph</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 5</TITLE>
</head>
<body>
  <P>This is a paragraph</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Use lowercase tags consistently."
},

// ── 6 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 6</title>
</head>
<body>
  <ul>
    <li>Item One</li>
    <li>Item Two</li>
  </ul>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 6</titel>
</head>
<BODY>
  <UL>
    <LI>Item One</LI>
    <LI>Item Two</LI>
  </UL>
</BODY>
</HTML>`,
totalMistakes: 7,
hint: "Lowercase html, body, ul, li tags and fix title spelling."
},

// ── 7 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 7</title>
</head>
<body>
  <table>
    <tr>
      <td>Cell</td>
    </tr>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 7</Title>
</head>
<body>
  <TABLE>
    <TR>
      <TD>Cell</TD>
    </TR>
  </TABLE>
</body>
</html>`,
totalMistakes: 5,
hint: "Table, tr, td tags and title should be lowercase."
},

// ── 8 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 8</title>
</head>
<body>
  <form action="/submit" method="post">
    <input type="text" name="name">
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <title>Page 8</title>
</head>
<body>
  <FORM ACTION="/submit" METHOD="post">
    <INPUT TYPE="text" NAME="name">
  </FORM>
</body>
</html>`,
totalMistakes: 6,
hint: "Form, input tags and their attributes should be lowercase."
},

// ── 9 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 9</title>
</head>
<body>
  <div class="box">
    <p>Inside div</p>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 9</titel>
</head>
<body>
  <DIV CLASS="box">
    <P>Inside div</P>
  </DIV>
</body>
</html>`,
totalMistakes: 6,
hint: "div, p tags, CLASS attribute, and title spelling."
},

// ── 10 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 10</title>
</head>
<body>
  <h2>Sub Heading</h2>
  <p>Text below heading</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 10</TITLE>
</head>
<body>
  <H2>Sub Heading</H2>
  <P>Text below heading</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase heading and paragraph tags."
},

// ── 11 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 11</title>
</head>
<body>
  <button type="button">Click Me</button>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 11</titel>
</head>
<body>
  <BUTTON TYPE="button">Click Me</BUTTON>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html tag casing, title spelling, and button tag."
},

// ── 12 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 12</title>
</head>
<body>
  <span class="highlight">Important</span>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 12</Title>
</head>
<body>
  <SPAN CLASS="highlight">Important</SPAN>
</body>
</html>`,
totalMistakes: 5,
hint: "span tag, CLASS attribute and title should be lowercase."
},

// ── 13 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 13</title>
</head>
<body>
  <ol>
    <li>First</li>
    <li>Second</li>
  </ol>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 13</titel>
</head>
<BODY>
  <OL>
    <LI>First</LI>
    <LI>Second</LI>
  </OL>
</BODY>`,
totalMistakes: 7,
hint: "Fix title spelling, body/ol/li casing, and missing closing html tag."
},

// ── 14 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 14</title>
</head>
<body>
  <p style="color:red">Red text</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 14</TITLE>
</head>
<body>
  <P STYLE="color:red">Red text</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, p tag, and STYLE attribute."
},

// ── 15 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 15</title>
</head>
<body>
  <header>
    <h1>Site Title</h1>
  </header>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 15</titel>
</head>
<body>
  <HEADER>
    <H1>Site Title</H1>
  </HEADER>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html casing, title spelling, header and h1 tags."
},

// ── 16 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 16</title>
</head>
<body>
  <footer>
    <p>Copyright 2024</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 16</Title>
</head>
<body>
  <FOOTER>
    <P>Copyright 2024</P>
  </FOOTER>
</body>
</html>`,
totalMistakes: 5,
hint: "footer, p tag and title should be lowercase."
},

// ── 17 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 17</title>
</head>
<body>
  <nav>
    <a href="#">Home</a>
  </nav>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 17</titel>
</head>
<body>
  <NAV>
    <A HREF="#">Home</A>
  </NAV>
</body>
</html>`,
totalMistakes: 7,
hint: "Fix charset, title spelling, nav, a tag and HREF attribute."
},

// ── 18 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 18</title>
</head>
<body>
  <section>
    <h2>Section Title</h2>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 18</TITLE>
</head>
<body>
  <SECTION>
    <H2>Section Title</H2>
  </SECTION>
</body>
</html>`,
totalMistakes: 5,
hint: "Use lowercase for title, section, h2 tags."
},

// ── 19 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 19</title>
</head>
<body>
  <article>
    <p>Article content here</p>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 19</titel>
</head>
<BODY>
  <ARTICLE>
    <P>Article content here</P>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 7,
hint: "Fix html/body casing, title spelling, article and p tags."
},

// ── 20 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 20</title>
</head>
<body>
  <main>
    <p>Main content</p>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 20</Title>
</head>
<body>
  <MAIN>
    <P>Main content</P>
  </MAIN>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, main, and p tags."
},

// ── 21 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 21</title>
</head>
<body>
  <h3>Small Heading</h3>
  <p>Description text</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 21</titel>
</head>
<body>
  <H3>Small Heading</H3>
  <P>Description text</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling and lowercase h3, p tags."
},

// ── 22 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 22</title>
</head>
<body>
  <input type="email" placeholder="Enter email">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 22</TITLE>
</head>
<body>
  <INPUT TYPE="email" PLACEHOLDER="Enter email">
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, input tag, TYPE and PLACEHOLDER attributes."
},

// ── 23 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 23</title>
</head>
<body>
  <textarea rows="4" cols="30"></textarea>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 23</titel>
</head>
<body>
  <TEXTAREA ROWS="4" COLS="30"></TEXTAREA>
</body>
</HTML>`,
totalMistakes: 7,
hint: "Fix html casing, title spelling, textarea tag and its attributes."
},

// ── 24 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 24</title>
</head>
<body>
  <label for="name">Name:</label>
  <input type="text" id="name">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 24</Title>
</head>
<body>
  <LABEL FOR="name">Name:</LABEL>
  <INPUT TYPE="text" ID="name">
</body>
</html>`,
totalMistakes: 6,
hint: "Lowercase title, label, input tags and their attributes."
},

// ── 25 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 25</title>
</head>
<body>
  <select name="color">
    <option value="red">Red</option>
  </select>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 25</titel>
</head>
<body>
  <SELECT NAME="color">
    <OPTION VALUE="red">Red</OPTION>
  </SELECT>
</body>
</html>`,
totalMistakes: 6,
hint: "Fix title spelling, lowercase select, option tags and attributes."
},

// ── 26 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 26</title>
</head>
<body>
  <video src="video.mp4" controls></video>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <TITLE>Page 26</TITLE>
</head>
<body>
  <VIDEO SRC="video.mp4" CONTROLS></VIDEO>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title/video tag casing and attribute casing."
},

// ── 27 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 27</title>
</head>
<body>
  <audio src="song.mp3" controls></audio>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 27</titel>
</head>
<body>
  <AUDIO SRC="song.mp3" CONTROLS></AUDIO>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase audio tag and its attributes."
},

// ── 28 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 28</title>
</head>
<body>
  <iframe src="https://example.com" width="400"></iframe>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 28</Title>
</head>
<body>
  <IFRAME SRC="https://example.com" WIDTH="400"></IFRAME>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, iframe tag, SRC and WIDTH attributes."
},

// ── 29 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 29</title>
</head>
<body>
  <blockquote>Famous quote here</blockquote>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 29</titel>
</head>
<BODY>
  <BLOCKQUOTE>Famous quote here</BLOCKQUOTE>
</BODY>
</HTML>`,
totalMistakes: 7,
hint: "Fix html/body casing, title spelling, and blockquote tag."
},

// ── 30 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 30</title>
</head>
<body>
  <code>print("Hello")</code>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 30</TITLE>
</head>
<body>
  <CODE>print("Hello")</CODE>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title and code tags."
},

// ── 31 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 31</title>
</head>
<body>
  <strong>Bold Text</strong>
  <em>Italic Text</em>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 31</titel>
</head>
<body>
  <STRONG>Bold Text</STRONG>
  <EM>Italic Text</EM>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, strong and em tags to lowercase."
},

// ── 32 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 32</title>
</head>
<body>
  <hr>
  <p>Below the line</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 32</Title>
</head>
<body>
  <HR>
  <P>Below the line</P>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html casing, title, hr and p tags."
},

// ── 33 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 33</title>
</head>
<body>
  <br>
  <p>After break</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 33</titel>
</head>
<body>
  <BR>
  <P>After break</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, br and p tags to lowercase."
},

// ── 34 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 34</title>
</head>
<body>
  <abbr title="World Health Organization">WHO</abbr>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 34</TITLE>
</head>
<body>
  <ABBR TITLE="World Health Organization">WHO</ABBR>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title tag, abbr tag, and TITLE attribute."
},

// ── 35 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 35</title>
</head>
<body>
  <details>
    <summary>Click to expand</summary>
    <p>Hidden content</p>
  </details>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 35</titel>
</head>
<body>
  <DETAILS>
    <SUMMARY>Click to expand</SUMMARY>
    <P>Hidden content</P>
  </DETAILS>
</body>
</HTML>`,
totalMistakes: 7,
hint: "Fix html casing, title spelling, details, summary and p tags."
},

// ── 36 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 36</title>
</head>
<body>
  <figure>
    <img src="pic.jpg" alt="pic">
    <figcaption>Caption</figcaption>
  </figure>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 36</Title>
</head>
<body>
  <FIGURE>
    <IMG SRC="pic.jpg" ALT="pic">
    <FIGCAPTION>Caption</FIGCAPTION>
  </FIGURE>
</body>
</html>`,
totalMistakes: 6,
hint: "Lowercase title, figure, img, figcaption tags and attributes."
},

// ── 37 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 37</title>
</head>
<body>
  <mark>Highlighted text</mark>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 37</titel>
</head>
<BODY>
  <MARK>Highlighted text</MARK>
</BODY>`,
totalMistakes: 6,
hint: "Fix title spelling, body/mark casing, and missing closing html tag."
},

// ── 38 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 38</title>
</head>
<body>
  <progress value="70" max="100"></progress>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <TITLE>Page 38</TITLE>
</head>
<body>
  <PROGRESS VALUE="70" MAX="100"></PROGRESS>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title/progress casing and VALUE, MAX attributes."
},

// ── 39 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 39</title>
</head>
<body>
  <meter min="0" max="100" value="50">50%</meter>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 39</titel>
</head>
<body>
  <METER MIN="0" MAX="100" VALUE="50">50%</METER>
</body>
</html>`,
totalMistakes: 6,
hint: "Fix title spelling, meter tag and MIN, MAX, VALUE attributes."
},

// ── 40 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 40</title>
</head>
<body>
  <canvas width="200" height="100"></canvas>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 40</Title>
</head>
<body>
  <CANVAS WIDTH="200" HEIGHT="100"></CANVAS>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, canvas tag, WIDTH and HEIGHT attributes."
},

// ── 41 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 41</title>
</head>
<body>
  <h4>Heading Four</h4>
  <p>Paragraph text</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 41</titel>
</head>
<body>
  <H4>Heading Four</H4>
  <P>Paragraph text</P>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html casing, title spelling, h4 and p tags."
},

// ── 42 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 42</title>
</head>
<body>
  <h5>Heading Five</h5>
  <p>More text</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 42</TITLE>
</head>
<body>
  <H5>Heading Five</H5>
  <P>More text</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, h5, and p tags."
},

// ── 43 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 43</title>
</head>
<body>
  <h6>Smallest Heading</h6>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 43</titel>
</head>
<BODY>
  <H6>Smallest Heading</H6>
</BODY>`,
totalMistakes: 6,
hint: "Fix title spelling, body/h6 casing, missing closing html tag."
},

// ── 44 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 44</title>
</head>
<body>
  <pre>  Preformatted text  </pre>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 44</Title>
</head>
<body>
  <PRE>  Preformatted text  </PRE>
</body>
</HTML>`,
totalMistakes: 5,
hint: "Lowercase html, title, and pre tags."
},

// ── 45 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 45</title>
</head>
<body>
  <cite>Book Title</cite>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 45</titel>
</head>
<body>
  <CITE>Book Title</CITE>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling and lowercase cite tag."
},

// ── 46 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 46</title>
</head>
<body>
  <del>Old Price</del>
  <ins>New Price</ins>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <TITLE>Page 46</TITLE>
</head>
<body>
  <DEL>Old Price</DEL>
  <INS>New Price</INS>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title/del/ins tag casing."
},

// ── 47 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 47</title>
</head>
<body>
  <sup>2</sup>
  <sub>H2O</sub>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 47</titel>
</head>
<body>
  <SUP>2</SUP>
  <SUB>H2O</SUB>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase sup and sub tags."
},

// ── 48 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 48</title>
</head>
<body>
  <small>Fine print text</small>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 48</Title>
</head>
<BODY>
  <SMALL>Fine print text</SMALL>
</BODY>`,
totalMistakes: 6,
hint: "Fix title, body, small casing and missing closing html tag."
},

// ── 49 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 49</title>
</head>
<body>
  <kbd>Ctrl + C</kbd>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 49</titel>
</head>
<body>
  <KBD>Ctrl + C</KBD>
</body>
</HTML>`,
totalMistakes: 5,
hint: "Fix html casing, title spelling, and kbd tag."
},

// ── 50 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 50</title>
</head>
<body>
  <address>123 Main Street</address>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 50</TITLE>
</head>
<body>
  <ADDRESS>123 Main Street</ADDRESS>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title and address tags."
},

// ── 51 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 51</title>
</head>
<body>
  <q>Short quote</q>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 51</titel>
</head>
<body>
  <Q>Short quote</Q>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling and lowercase q tag."
},

// ── 52 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 52</title>
</head>
<body>
  <map name="world">
    <area shape="rect" coords="0,0,100,100">
  </map>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 52</Title>
</head>
<body>
  <MAP NAME="world">
    <AREA SHAPE="rect" COORDS="0,0,100,100">
  </MAP>
</body>
</HTML>`,
totalMistakes: 7,
hint: "Fix html/title casing and lowercase map, area tags and their attributes."
},

// ── 53 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 53</title>
</head>
<body>
  <time datetime="2024-01-01">New Year</time>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 53</TITLE>
</head>
<body>
  <TIME DATETIME="2024-01-01">New Year</TIME>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, time tag and DATETIME attribute."
},

// ── 54 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 54</title>
</head>
<body>
  <bdo dir="rtl">Right to left</bdo>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 54</titel>
</head>
<body>
  <BDO DIR="rtl">Right to left</BDO>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase bdo tag and DIR attribute."
},

// ── 55 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 55</title>
</head>
<body>
  <dfn>A defined term</dfn>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 55</Title>
</head>
<body>
  <DFN>A defined term</DFN>
</body>
</HTML>`,
totalMistakes: 5,
hint: "Fix html/title casing and lowercase dfn tag."
},

// ── 56 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 56</title>
</head>
<body>
  <samp>Sample output</samp>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 56</titel>
</head>
<BODY>
  <SAMP>Sample output</SAMP>
</BODY>`,
totalMistakes: 6,
hint: "Fix title spelling, body/samp casing, missing html closing tag."
},

// ── 57 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 57</title>
</head>
<body>
  <var>x = 5</var>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <TITLE>Page 57</TITLE>
</head>
<body>
  <VAR>x = 5</VAR>
</body>
</HTML>`,
totalMistakes: 5,
hint: "Fix html/title/var tag casing."
},

// ── 58 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 58</title>
</head>
<body>
  <data value="42">Answer</data>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 58</titel>
</head>
<body>
  <DATA VALUE="42">Answer</DATA>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase data tag and VALUE attribute."
},

// ── 59 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 59</title>
</head>
<body>
  <output name="result">100</output>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 59</Title>
</head>
<body>
  <OUTPUT NAME="result">100</OUTPUT>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, output tag and NAME attribute."
},

// ── 60 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 60</title>
</head>
<body>
  <fieldset>
    <legend>Group</legend>
  </fieldset>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 60</titel>
</head>
<body>
  <FIELDSET>
    <LEGEND>Group</LEGEND>
  </FIELDSET>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html casing, title spelling, fieldset and legend tags."
},

// ── 61 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 61</title>
</head>
<body>
  <datalist id="colors">
    <option value="red">
  </datalist>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 61</TITLE>
</head>
<body>
  <DATALIST ID="colors">
    <OPTION VALUE="red">
  </DATALIST>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, datalist, option tags and their attributes."
},

// ── 62 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 62</title>
</head>
<body>
  <dialog open>
    <p>Dialog box</p>
  </dialog>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 62</titel>
</head>
<body>
  <DIALOG OPEN>
    <P>Dialog box</P>
  </DIALOG>
</body>
</html>`,
totalMistakes: 6,
hint: "Fix title spelling, lowercase dialog, p tags and OPEN attribute."
},

// ── 63 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 63</title>
</head>
<body>
  <template>
    <p>Template content</p>
  </template>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 63</Title>
</head>
<body>
  <TEMPLATE>
    <P>Template content</P>
  </TEMPLATE>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title casing, lowercase template and p tags."
},

// ── 64 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 64</title>
</head>
<body>
  <slot name="header">Default</slot>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 64</titel>
</head>
<BODY>
  <SLOT NAME="header">Default</SLOT>
</BODY>`,
totalMistakes: 6,
hint: "Fix title spelling, body/slot casing, NAME attribute, and missing html tag."
},

// ── 65 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 65</title>
</head>
<body>
  <ruby>
    <rb>Word</rb>
    <rt>Pronunciation</rt>
  </ruby>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <TITLE>Page 65</TITLE>
</head>
<body>
  <RUBY>
    <RB>Word</RB>
    <RT>Pronunciation</RT>
  </RUBY>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title/ruby/rb/rt tag casing."
},

// ── 66 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 66</title>
</head>
<body>
  <p id="intro">Introduction</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 66</titel>
</head>
<body>
  <P ID="intro">Introduction</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase p tag and ID attribute."
},

// ── 67 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 67</title>
</head>
<body>
  <div id="main" class="container">
    <p>Content</p>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 67</Title>
</head>
<body>
  <DIV ID="main" CLASS="container">
    <P>Content</P>
  </DIV>
</body>
</HTML>`,
totalMistakes: 7,
hint: "Fix html/title casing, div/p tags and ID, CLASS attributes."
},

// ── 68 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 68</title>
</head>
<body>
  <a href="contact.html" target="_blank">Contact</a>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 68</TITLE>
</head>
<body>
  <A HREF="contact.html" TARGET="_blank">Contact</A>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, a tag, HREF and TARGET attributes."
},

// ── 69 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 69</title>
</head>
<body>
  <img src="logo.png" alt="Logo" width="100">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 69</titel>
</head>
<body>
  <IMG SRC="logo.png" ALT="Logo" WIDTH="100">
</body>
</html>`,
totalMistakes: 6,
hint: "Fix title spelling, lowercase img tag and SRC, ALT, WIDTH attributes."
},

// ── 70 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 70</title>
</head>
<body>
  <table border="1">
    <tr>
      <th>Header</th>
      <td>Data</td>
    </tr>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 70</Title>
</head>
<body>
  <TABLE BORDER="1">
    <TR>
      <TH>Header</TH>
      <TD>Data</TD>
    </TR>
  </TABLE>
</body>
</HTML>`,
totalMistakes: 8,
hint: "Fix html/title casing and table/tr/th/td tags and BORDER attribute."
},

// ── 71 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 71</title>
</head>
<body>
  <form method="get" action="search.php">
    <button type="submit">Search</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 71</titel>
</head>
<body>
  <FORM METHOD="get" ACTION="search.php">
    <BUTTON TYPE="submit">Search</BUTTON>
  </FORM>
</body>
</html>`,
totalMistakes: 6,
hint: "Fix title spelling, lowercase form, button tags and their attributes."
},

// ── 72 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 72</title>
</head>
<body>
  <input type="checkbox" id="agree">
  <label for="agree">I Agree</label>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <TITLE>Page 72</TITLE>
</head>
<body>
  <INPUT TYPE="checkbox" ID="agree">
  <LABEL FOR="agree">I Agree</LABEL>
</body>
</HTML>`,
totalMistakes: 7,
hint: "Fix html/title casing, input/label tags and TYPE, ID, FOR attributes."
},

// ── 73 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 73</title>
</head>
<body>
  <input type="radio" name="gender" value="male">
  <label>Male</label>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 73</titel>
</head>
<body>
  <INPUT TYPE="radio" NAME="gender" VALUE="male">
  <LABEL>Male</LABEL>
</body>
</html>`,
totalMistakes: 6,
hint: "Fix title spelling, lowercase input/label tags and attributes."
},

// ── 74 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 74</title>
</head>
<body>
  <input type="range" min="0" max="10">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <Title>Page 74</Title>
</head>
<body>
  <INPUT TYPE="range" MIN="0" MAX="10">
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, input tag and TYPE, MIN, MAX attributes."
},

// ── 75 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 75</title>
</head>
<body>
  <input type="color" value="#ff0000">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <titel>Page 75</titel>
</head>
<body>
  <INPUT TYPE="color" VALUE="#ff0000">
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html casing, title spelling, lowercase input and attributes."
},

// ── 76 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 76</title>
</head>
<body>
  <input type="date" name="dob">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 76</TITLE>
</head>
<body>
  <INPUT TYPE="date" NAME="dob">
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, input tag and TYPE, NAME attributes."
},

// ── 77 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 77</title>
</head>
<body>
  <input type="number" min="1" max="100">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 77</titel>
</head>
<BODY>
  <INPUT TYPE="number" MIN="1" MAX="100">
</BODY>`,
totalMistakes: 6,
hint: "Fix title spelling, body/input casing, attributes, and missing html tag."
},

// ── 78 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 78</title>
</head>
<body>
  <input type="password" placeholder="Enter password">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 78</Title>
</head>
<body>
  <INPUT TYPE="password" PLACEHOLDER="Enter password">
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title casing, input tag and TYPE, PLACEHOLDER attributes."
},

// ── 79 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 79</title>
</head>
<body>
  <input type="search" name="q">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 79</TITLE>
</head>
<body>
  <INPUT TYPE="search" NAME="q">
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, input tag and TYPE, NAME attributes."
},

// ── 80 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 80</title>
</head>
<body>
  <input type="url" placeholder="https://">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 80</titel>
</head>
<body>
  <INPUT TYPE="url" PLACEHOLDER="https://">
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase input tag and attributes."
},

// ── 81 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 81</title>
</head>
<body>
  <input type="tel" pattern="[0-9]{10}">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 81</Title>
</head>
<body>
  <INPUT TYPE="tel" PATTERN="[0-9]{10}">
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title casing, input tag and TYPE, PATTERN attributes."
},

// ── 82 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 82</title>
</head>
<body>
  <input type="file" accept=".jpg">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 82</TITLE>
</head>
<body>
  <INPUT TYPE="file" ACCEPT=".jpg">
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, input tag and TYPE, ACCEPT attributes."
},

// ── 83 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 83</title>
</head>
<body>
  <input type="hidden" name="token" value="abc">
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 83</titel>
</head>
<body>
  <INPUT TYPE="hidden" NAME="token" VALUE="abc">
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase input tag and all attributes."
},

// ── 84 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 84</title>
</head>
<body>
  <button type="reset">Reset</button>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 84</Title>
</head>
<body>
  <BUTTON TYPE="reset">Reset</BUTTON>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title casing, button tag and TYPE attribute."
},

// ── 85 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 85</title>
</head>
<body>
  <ul type="disc">
    <li>Apple</li>
    <li>Mango</li>
  </ul>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 85</TITLE>
</head>
<body>
  <UL TYPE="disc">
    <LI>Apple</LI>
    <LI>Mango</LI>
  </UL>
</body>
</html>`,
totalMistakes: 6,
hint: "Lowercase title, ul, li tags and TYPE attribute."
},

// ── 86 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 86</title>
</head>
<body>
  <ol type="A">
    <li>First</li>
    <li>Second</li>
  </ol>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 86</titel>
</head>
<BODY>
  <OL TYPE="A">
    <LI>First</LI>
    <LI>Second</LI>
  </OL>
</BODY>`,
totalMistakes: 7,
hint: "Fix title spelling, body/ol/li casing, TYPE attribute, and missing html tag."
},

// ── 87 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 87</title>
</head>
<body>
  <table>
    <thead>
      <tr><th>Name</th><th>Age</th></tr>
    </thead>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 87</Title>
</head>
<body>
  <TABLE>
    <THEAD>
      <TR><TH>Name</TH><TH>Age</TH></TR>
    </THEAD>
  </TABLE>
</body>
</HTML>`,
totalMistakes: 8,
hint: "Fix html/title casing and table/thead/tr/th tags."
},

// ── 88 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 88</title>
</head>
<body>
  <table>
    <tbody>
      <tr><td>Ali</td><td>20</td></tr>
    </tbody>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 88</TITLE>
</head>
<body>
  <TABLE>
    <TBODY>
      <TR><TD>Ali</TD><TD>20</TD></TR>
    </TBODY>
  </TABLE>
</body>
</html>`,
totalMistakes: 7,
hint: "Lowercase title, table/tbody/tr/td tags."
},

// ── 89 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 89</title>
</head>
<body>
  <table>
    <tfoot>
      <tr><td>Total</td></tr>
    </tfoot>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 89</titel>
</head>
<body>
  <TABLE>
    <TFOOT>
      <TR><TD>Total</TD></TR>
    </TFOOT>
  </TABLE>
</body>
</html>`,
totalMistakes: 6,
hint: "Fix title spelling, lowercase table/tfoot/tr/td tags."
},

// ── 90 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 90</title>
</head>
<body>
  <table>
    <caption>My Table</caption>
    <tr><td>Data</td></tr>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 90</Title>
</head>
<body>
  <TABLE>
    <CAPTION>My Table</CAPTION>
    <TR><TD>Data</TD></TR>
  </TABLE>
</body>
</HTML>`,
totalMistakes: 7,
hint: "Fix html/title casing, table/caption/tr/td tags."
},

// ── 91 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 91</title>
</head>
<body>
  <p tabindex="1">Focusable paragraph</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 91</TITLE>
</head>
<body>
  <P TABINDEX="1">Focusable paragraph</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, p tag and TABINDEX attribute."
},

// ── 92 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 92</title>
</head>
<body>
  <p hidden>This is hidden</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 92</titel>
</head>
<body>
  <P HIDDEN>This is hidden</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase p tag and HIDDEN attribute."
},

// ── 93 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 93</title>
</head>
<body>
  <p contenteditable="true">Edit me</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 93</Title>
</head>
<body>
  <P CONTENTEDITABLE="true">Edit me</P>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title casing, p tag and CONTENTEDITABLE attribute."
},

// ── 94 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 94</title>
</head>
<body>
  <p draggable="true">Drag me</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 94</TITLE>
</head>
<body>
  <P DRAGGABLE="true">Drag me</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, p tag and DRAGGABLE attribute."
},

// ── 95 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 95</title>
</head>
<body>
  <p spellcheck="true">Check spelling</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 95</titel>
</head>
<BODY>
  <P SPELLCHECK="true">Check spelling</P>
</BODY>`,
totalMistakes: 6,
hint: "Fix title spelling, body/p casing, SPELLCHECK attribute, and missing html tag."
},

// ── 96 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 96</title>
</head>
<body>
  <div lang="ur">Urdu text</div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 96</Title>
</head>
<body>
  <DIV LANG="ur">Urdu text</DIV>
</body>
</HTML>`,
totalMistakes: 5,
hint: "Fix html/title casing, div tag and LANG attribute."
},

// ── 97 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 97</title>
</head>
<body>
  <div dir="ltr">Left to right text</div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <TITLE>Page 97</TITLE>
</head>
<body>
  <DIV DIR="ltr">Left to right text</DIV>
</body>
</html>`,
totalMistakes: 5,
hint: "Lowercase title, div tag and DIR attribute."
},

// ── 98 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 98</title>
</head>
<body>
  <p title="Tooltip text">Hover me</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 98</titel>
</head>
<body>
  <P TITLE="Tooltip text">Hover me</P>
</body>
</html>`,
totalMistakes: 5,
hint: "Fix title spelling, lowercase p tag and TITLE attribute."
},

// ── 99 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 99</title>
</head>
<body>
  <div accesskey="h">Press Alt+H</div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 99</Title>
</head>
<body>
  <DIV ACCESSKEY="h">Press Alt+H</DIV>
</body>
</HTML>`,
totalMistakes: 6,
hint: "Fix html/title casing, div tag and ACCESSKEY attribute."
},

// ── 100 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 100</title>
</head>
<body>
  <h1>Final Page</h1>
  <p>You made it to the end!</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Page 100</titel>
</head>
<BODY>
  <H1>Final Page</H1>
  <P>You made it to the end!</P>
</BODY>
</HTML>`,
totalMistakes: 8,
hint: "Fix html/body casing, LANG attribute casing, charset, title spelling, h1 and p tags."
}

  ],



  MEDIUM: [
/* ── Paragraph Mistakes — Medium HTML Data (M1-M25, Updated) ──
   Medium: 15-20 mistakes per code

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title)
     'missing' = tag ya attribute ghayab hai
*/

// ── M1 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 1</title>
</head>
<body>
  <header>
    <h1>Welcome Home</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>
  <p>This is the main content.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Page 1</titel>
</head>
<BODY>
  <HEADER>
    <H1>Welcome Home</H1>
    <NAV>
      <A HREF="#home">Home</A>
      <A HREF="#about">About</A>
    </NAV>
  </HEADER>
  <P>This is the main content.</P>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, LANG/charset attributes, title spelling, and header/h1/nav/a/p tags."
},

// ── M2 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 2</title>
</head>
<body>
  <form action="/login" method="post">
    <label for="user">Username</label>
    <input type="text" id="user" name="username" required>
    <button type="submit">Login</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 2</Title>
</head>
<BODY>
  <FORM ACTION="/login" METHOD="post">
    <LABEL FOR="user">Username</LABEL>
    <INPUT TYPE="text" ID="user" NAME="username" REQUIRED>
    <BUTTON TYPE="submit">Login</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, and form/label/input/button tags with attributes."
},

// ── M3 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 3</title>
</head>
<body>
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Ali</td>
      <td>22</td>
    </tr>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 3</titel>
</head>
<BODY>
  <TABLE BORDER="1">
    <TR>
      <TH>Name</TH>
      <TH>Age</TH>
    </TR>
    <TR>
      <TD>Ali</TD>
      <TD>22</TD>
    </TR>
  </TABLE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html tag, and table/tr/th/td tags."
},

// ── M4 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 4</title>
</head>
<body>
  <div class="container">
    <ul class="list">
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 4</titel>
</head>
<body>
  <DIV CLASS="container">
    <UL CLASS="list">
      <LI>Apple</LI>
      <LI>Banana</LI>
    </UL>
  </DIV>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset attribute, title spelling, and div/ul/li tags with CLASS attributes."
},

// ── M5 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 5</title>
</head>
<body>
  <article>
    <h2>Article Heading</h2>
    <p>Some article text.</p>
    <img src="pic.jpg" alt="A picture">
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 5</Title>
</head>
<BODY>
  <ARTICLE>
    <H2>Article Heading</H2>
    <P>Some article text.</P>
    <IMG SRC="pic.jpg" ALT="A picture">
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 16,
hint: "Fix html/body casing, title casing, article/h2/p tags, and IMG tag with SRC/ALT attributes."
},

// ── M6 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 6</title>
</head>
<body>
  <select name="city" id="city">
    <option value="lhr">Lahore</option>
    <option value="khi">Karachi</option>
  </select>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 6</titel>
</head>
<BODY>
  <SELECT NAME="city" ID="city">
    <OPTION VALUE="lhr">Lahore</OPTION>
    <OPTION VALUE="khi">Karachi</OPTION>
  </SELECT>
</BODY>`,
totalMistakes: 15,
hint: "Fix title spelling, body casing, missing closing html tag, and select/option tags with attributes."
},

// ── M7 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 7</title>
</head>
<body>
  <video controls width="320" height="240">
    <source src="movie.mp4" type="video/mp4">
  </video>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 7</Title>
</head>
<body>
  <VIDEO CONTROLS WIDTH="320" HEIGHT="240">
    <SOURCE SRC="movie.mp4" TYPE="video/mp4">
  </VIDEO>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, video/source tags and all their attributes."
},

// ── M8 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 8</title>
</head>
<body>
  <fieldset>
    <legend>Personal Info</legend>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
  </fieldset>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 8</titel>
</head>
<BODY>
  <FIELDSET>
    <LEGEND>Personal Info</LEGEND>
    <INPUT TYPE="radio" NAME="gender" VALUE="male"> Male
    <INPUT TYPE="radio" NAME="gender" VALUE="female"> Female
  </FIELDSET>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, fieldset/legend/input tags and attributes."
},

// ── M9 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 9</title>
</head>
<body>
  <div class="card">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card description.</p>
    <a href="#" class="card-link">Read More</a>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 9</Title>
</head>
<body>
  <DIV CLASS="card">
    <H3 CLASS="card-title">Card Title</H3>
    <P CLASS="card-text">Card description.</P>
    <A HREF="#" CLASS="card-link">Read More</A>
  </DIV>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, div/h3/p/a tags and all CLASS/HREF attributes."
},

// ── M10 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 10</title>
</head>
<body>
  <textarea name="message" rows="5" cols="30" placeholder="Type here"></textarea>
  <button type="submit">Send</button>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 10</titel>
</head>
<BODY>
  <TEXTAREA NAME="message" ROWS="5" COLS="30" PLACEHOLDER="Type here"></TEXTAREA>
  <BUTTON TYPE="submit">Send</BUTTON>
</BODY>`,
totalMistakes: 17,
hint: "Fix charset, title spelling, body casing, missing closing html, textarea/button tags and attributes."
},

// ── M11 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 11</title>
</head>
<body>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item"><a href="#home">Home</a></li>
      <li class="nav-item"><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 11</Title>
</head>
<BODY>
  <NAV CLASS="navbar">
    <UL CLASS="nav-list">
      <LI CLASS="nav-item"><A HREF="#home">Home</A></LI>
      <LI CLASS="nav-item"><A HREF="#contact">Contact</A></LI>
    </UL>
  </NAV>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, title casing, and nav/ul/li/a tags with CLASS/HREF attributes."
},

// ── M12 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 12</title>
</head>
<body>
  <div class="modal">
    <span class="close">&times;</span>
    <h2>Modal Title</h2>
    <p>Modal content text.</p>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 12</titel>
</head>
<BODY>
  <DIV CLASS="modal">
    <SPAN CLASS="close">&times;</SPAN>
    <H2>Modal Title</H2>
    <P>Modal content text.</P>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, div/span/h2/p tags and CLASS attribute."
},

// ── M13 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 13</title>
</head>
<body>
  <picture>
    <source srcset="big.jpg" media="(min-width: 800px)">
    <img src="small.jpg" alt="Responsive image">
  </picture>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 13</Title>
</head>
<body>
  <PICTURE>
    <SOURCE SRCSET="big.jpg" MEDIA="(min-width: 800px)">
    <IMG SRC="small.jpg" ALT="Responsive image">
  </PICTURE>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset/title attributes, picture/source/img tags and all attributes."
},

// ── M14 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 14</title>
</head>
<body>
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 14</titel>
</head>
<BODY>
  <DIV CLASS="row">
    <DIV CLASS="col">Column 1</DIV>
    <DIV CLASS="col">Column 2</DIV>
    <DIV CLASS="col">Column 3</DIV>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, and all div tags with CLASS attributes."
},

// ── M15 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 15</title>
</head>
<body>
  <details>
    <summary>Click to expand</summary>
    <p>Hidden content here.</p>
  </details>
  <progress value="50" max="100"></progress>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 15</Title>
</head>
<BODY>
  <DETAILS>
    <SUMMARY>Click to expand</SUMMARY>
    <P>Hidden content here.</P>
  </DETAILS>
  <PROGRESS VALUE="50" MAX="100"></PROGRESS>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, details/summary/p tags, and progress tag with VALUE/MAX attributes."
},

// ── M16 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 16</title>
</head>
<body>
  <aside class="sidebar">
    <h3>Related Links</h3>
    <ul>
      <li><a href="#one">Link One</a></li>
      <li><a href="#two">Link Two</a></li>
    </ul>
  </aside>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 16</titel>
</head>
<BODY>
  <ASIDE CLASS="sidebar">
    <H3>Related Links</H3>
    <UL>
      <LI><A HREF="#one">Link One</A></LI>
      <LI><A HREF="#two">Link Two</A></LI>
    </UL>
  </ASIDE>
</BODY>`,
totalMistakes: 18,
hint: "Fix charset, title spelling, body casing, missing closing html, and aside/h3/ul/li/a tags."
},

// ── M17 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 17</title>
</head>
<body>
  <form action="/search" method="get">
    <input type="search" name="q" placeholder="Search...">
    <input type="submit" value="Go">
  </form>
  <hr>
  <p>Results below.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 17</Title>
</head>
<body>
  <FORM ACTION="/search" METHOD="get">
    <INPUT TYPE="search" NAME="q" PLACEHOLDER="Search...">
    <INPUT TYPE="submit" VALUE="Go">
  </FORM>
  <HR>
  <P>Results below.</P>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, form/input tags with attributes, and hr/p tags."
},

// ── M18 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 18</title>
</head>
<body>
  <main>
    <h1>Dashboard</h1>
    <div class="stats">
      <span class="stat-number">100</span>
      <span class="stat-label">Users</span>
    </div>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 18</titel>
</head>
<BODY>
  <MAIN>
    <H1>Dashboard</H1>
    <DIV CLASS="stats">
      <SPAN CLASS="stat-number">100</SPAN>
      <SPAN CLASS="stat-label">Users</SPAN>
    </DIV>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 19,
hint: "Fix html casing, charset/title attributes, body casing, and main/h1/div/span tags with CLASS."
},

// ── M19 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 19</title>
</head>
<body>
  <blockquote cite="https://example.com">
    <p>This is a famous quote.</p>
  </blockquote>
  <cite>Author Name</cite>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 19</titel>
</head>
<BODY>
  <BLOCKQUOTE CITE="https://example.com">
    <P>This is a famous quote.</P>
  </BLOCKQUOTE>
  <CITE>Author Name</CITE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, blockquote/p/cite tags and CITE attribute."
},

// ── M20 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 20</title>
</head>
<body>
  <form action="/register" method="post">
    <input type="email" name="email" placeholder="Email" required>
    <input type="checkbox" name="terms" id="terms">
    <label for="terms">I agree</label>
    <button type="submit">Register</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 20</Title>
</head>
<BODY>
  <FORM ACTION="/register" METHOD="post">
    <INPUT TYPE="email" NAME="email" PLACEHOLDER="Email" REQUIRED>
    <INPUT TYPE="checkbox" NAME="terms" ID="terms">
    <LABEL FOR="terms">I agree</LABEL>
    <BUTTON TYPE="submit">Register</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/body casing, charset/title attributes, and form/input/label/button tags with attributes."
},

// ── M21 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 21</title>
</head>
<body>
  <div class="gallery">
    <figure>
      <img src="art1.jpg" alt="Artwork 1">
      <figcaption>Artwork One</figcaption>
    </figure>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 21</titel>
</head>
<BODY>
  <DIV CLASS="gallery">
    <FIGURE>
      <IMG SRC="art1.jpg" ALT="Artwork 1">
      <FIGCAPTION>Artwork One</FIGCAPTION>
    </FIGURE>
  </DIV>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, div/figure/img/figcaption tags."
},

// ── M22 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 22</title>
</head>
<body>
  <ul class="menu">
    <li class="menu-item active">Home</li>
    <li class="menu-item">Services</li>
    <li class="menu-item">Pricing</li>
  </ul>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 22</Title>
</head>
<body>
  <UL CLASS="menu">
    <LI CLASS="menu-item active">Home</LI>
    <LI CLASS="menu-item">Services</LI>
    <LI CLASS="menu-item">Pricing</LI>
  </UL>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, and all ul/li tags with CLASS attributes."
},

// ── M23 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 23</title>
</head>
<body>
  <form action="/feedback" method="post">
    <label for="rating">Rating</label>
    <select name="rating" id="rating">
      <option value="5">Excellent</option>
      <option value="1">Poor</option>
    </select>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 23</Title>
</head>
<BODY>
  <FORM ACTION="/feedback" METHOD="post">
    <LABEL FOR="rating">Rating</LABEL>
    <SELECT NAME="rating" ID="rating">
      <OPTION VALUE="5">Excellent</OPTION>
      <OPTION VALUE="1">Poor</OPTION>
    </SELECT>
    <BUTTON TYPE="submit">Submit</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body/title casing, and form/label/select/option/button tags with attributes."
},

// ── M24 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 24</title>
</head>
<body>
  <header class="site-header">
    <h1 class="logo">My Site</h1>
    <nav class="main-nav">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">Blog</a>
    </nav>
  </header>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 24</titel>
</head>
<BODY>
  <HEADER CLASS="site-header">
    <H1 CLASS="logo">My Site</H1>
    <NAV CLASS="main-nav">
      <A HREF="#" CLASS="nav-link">Home</A>
      <A HREF="#" CLASS="nav-link">Blog</A>
    </NAV>
  </HEADER>
</BODY>`,
totalMistakes: 19,
hint: "Fix charset, title spelling, body casing, missing closing html, header/h1/nav/a tags with CLASS/HREF."
},

// ── M25 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 25</title>
</head>
<body>
  <section class="hero">
    <h1>Big Heading</h1>
    <p>Subtitle text here.</p>
    <button class="btn-primary">Get Started</button>
  </section>
  <footer>
    <p>&copy; 2024 My Company</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <Title>Page 25</Title>
</head>
<BODY>
  <SECTION CLASS="hero">
    <H1>Big Heading</H1>
    <P>Subtitle text here.</P>
    <BUTTON CLASS="btn-primary">Get Started</BUTTON>
  </SECTION>
  <FOOTER>
    <P>&copy; 2024 My Company</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/LANG casing, charset/title attributes, body casing, and section/h1/p/button/footer tags."
},

/* ── Paragraph Mistakes — Medium HTML Data (M26-M50, Updated) ──
   Medium: 15-20 mistakes per code

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title)
     'missing' = tag ya attribute ghayab hai
*/

// ── M26 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 26</title>
</head>
<body>
  <header>
    <h1>Company Name</h1>
    <nav>
      <a href="#products">Products</a>
      <a href="#support">Support</a>
    </nav>
  </header>
  <p>Explore our services below.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Page 26</titel>
</head>
<BODY>
  <HEADER>
    <H1>Company Name</H1>
    <NAV>
      <A HREF="#products">Products</A>
      <A HREF="#support">Support</A>
    </NAV>
  </HEADER>
  <P>Explore our services below.</P>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, LANG/charset attributes, title spelling, and header/h1/nav/a/p tags."
},

// ── M27 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 27</title>
</head>
<body>
  <form action="/checkout" method="post">
    <label for="card">Card Number</label>
    <input type="text" id="card" name="card" required>
    <button type="submit">Pay Now</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 27</Title>
</head>
<BODY>
  <FORM ACTION="/checkout" METHOD="post">
    <LABEL FOR="card">Card Number</LABEL>
    <INPUT TYPE="text" ID="card" NAME="card" REQUIRED>
    <BUTTON TYPE="submit">Pay Now</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, and form/label/input/button tags with attributes."
},

// ── M28 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 28</title>
</head>
<body>
  <table border="1">
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
    <tr>
      <td>Pen</td>
      <td>10</td>
    </tr>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 28</titel>
</head>
<BODY>
  <TABLE BORDER="1">
    <TR>
      <TH>Product</TH>
      <TH>Price</TH>
    </TR>
    <TR>
      <TD>Pen</TD>
      <TD>10</TD>
    </TR>
  </TABLE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html tag, and table/tr/th/td tags."
},

// ── M29 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 29</title>
</head>
<body>
  <div class="container">
    <ul class="list">
      <li>Tea</li>
      <li>Coffee</li>
    </ul>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 29</titel>
</head>
<body>
  <DIV CLASS="container">
    <UL CLASS="list">
      <LI>Tea</LI>
      <LI>Coffee</LI>
    </UL>
  </DIV>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset attribute, title spelling, and div/ul/li tags with CLASS attributes."
},

// ── M30 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 30</title>
</head>
<body>
  <article>
    <h2>News Heading</h2>
    <p>Breaking news text.</p>
    <img src="news.jpg" alt="News image">
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 30</Title>
</head>
<BODY>
  <ARTICLE>
    <H2>News Heading</H2>
    <P>Breaking news text.</P>
    <IMG SRC="news.jpg" ALT="News image">
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 16,
hint: "Fix html/body casing, title casing, article/h2/p tags, and IMG tag with SRC/ALT attributes."
},

// ── M31 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 31</title>
</head>
<body>
  <select name="country" id="country">
    <option value="pk">Pakistan</option>
    <option value="us">USA</option>
  </select>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 31</titel>
</head>
<BODY>
  <SELECT NAME="country" ID="country">
    <OPTION VALUE="pk">Pakistan</OPTION>
    <OPTION VALUE="us">USA</OPTION>
  </SELECT>
</BODY>`,
totalMistakes: 15,
hint: "Fix title spelling, body casing, missing closing html tag, and select/option tags with attributes."
},

// ── M32 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 32</title>
</head>
<body>
  <video controls width="400" height="300">
    <source src="clip.mp4" type="video/mp4">
  </video>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 32</Title>
</head>
<body>
  <VIDEO CONTROLS WIDTH="400" HEIGHT="300">
    <SOURCE SRC="clip.mp4" TYPE="video/mp4">
  </VIDEO>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, video/source tags and all their attributes."
},

// ── M33 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 33</title>
</head>
<body>
  <fieldset>
    <legend>Account Type</legend>
    <input type="radio" name="acc" value="personal"> Personal
    <input type="radio" name="acc" value="business"> Business
  </fieldset>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 33</titel>
</head>
<BODY>
  <FIELDSET>
    <LEGEND>Account Type</LEGEND>
    <INPUT TYPE="radio" NAME="acc" VALUE="personal"> Personal
    <INPUT TYPE="radio" NAME="acc" VALUE="business"> Business
  </FIELDSET>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, fieldset/legend/input tags and attributes."
},

// ── M34 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 34</title>
</head>
<body>
  <div class="card">
    <h3 class="card-title">Plan Name</h3>
    <p class="card-text">Plan details here.</p>
    <a href="#" class="card-link">Choose Plan</a>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 34</Title>
</head>
<body>
  <DIV CLASS="card">
    <H3 CLASS="card-title">Plan Name</H3>
    <P CLASS="card-text">Plan details here.</P>
    <A HREF="#" CLASS="card-link">Choose Plan</A>
  </DIV>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, div/h3/p/a tags and all CLASS/HREF attributes."
},

// ── M35 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 35</title>
</head>
<body>
  <textarea name="review" rows="6" cols="40" placeholder="Write a review"></textarea>
  <button type="submit">Post</button>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 35</titel>
</head>
<BODY>
  <TEXTAREA NAME="review" ROWS="6" COLS="40" PLACEHOLDER="Write a review"></TEXTAREA>
  <BUTTON TYPE="submit">Post</BUTTON>
</BODY>`,
totalMistakes: 17,
hint: "Fix charset, title spelling, body casing, missing closing html, textarea/button tags and attributes."
},

// ── M36 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 36</title>
</head>
<body>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item"><a href="#blog">Blog</a></li>
      <li class="nav-item"><a href="#faq">FAQ</a></li>
    </ul>
  </nav>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 36</Title>
</head>
<BODY>
  <NAV CLASS="navbar">
    <UL CLASS="nav-list">
      <LI CLASS="nav-item"><A HREF="#blog">Blog</A></LI>
      <LI CLASS="nav-item"><A HREF="#faq">FAQ</A></LI>
    </UL>
  </NAV>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, title casing, and nav/ul/li/a tags with CLASS/HREF attributes."
},

// ── M37 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 37</title>
</head>
<body>
  <div class="modal">
    <span class="close">&times;</span>
    <h2>Confirm Action</h2>
    <p>Are you sure you want to continue?</p>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 37</titel>
</head>
<BODY>
  <DIV CLASS="modal">
    <SPAN CLASS="close">&times;</SPAN>
    <H2>Confirm Action</H2>
    <P>Are you sure you want to continue?</P>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, div/span/h2/p tags and CLASS attribute."
},

// ── M38 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 38</title>
</head>
<body>
  <picture>
    <source srcset="banner-big.jpg" media="(min-width: 900px)">
    <img src="banner-small.jpg" alt="Banner image">
  </picture>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 38</Title>
</head>
<body>
  <PICTURE>
    <SOURCE SRCSET="banner-big.jpg" MEDIA="(min-width: 900px)">
    <IMG SRC="banner-small.jpg" ALT="Banner image">
  </PICTURE>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset/title attributes, picture/source/img tags and all attributes."
},

// ── M39 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 39</title>
</head>
<body>
  <div class="row">
    <div class="col">Feature 1</div>
    <div class="col">Feature 2</div>
    <div class="col">Feature 3</div>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 39</titel>
</head>
<BODY>
  <DIV CLASS="row">
    <DIV CLASS="col">Feature 1</DIV>
    <DIV CLASS="col">Feature 2</DIV>
    <DIV CLASS="col">Feature 3</DIV>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, and all div tags with CLASS attributes."
},

// ── M40 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 40</title>
</head>
<body>
  <details>
    <summary>View Details</summary>
    <p>Extra information shown here.</p>
  </details>
  <progress value="75" max="100"></progress>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 40</Title>
</head>
<BODY>
  <DETAILS>
    <SUMMARY>View Details</SUMMARY>
    <P>Extra information shown here.</P>
  </DETAILS>
  <PROGRESS VALUE="75" MAX="100"></PROGRESS>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, details/summary/p tags, and progress tag with VALUE/MAX attributes."
},

// ── M41 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 41</title>
</head>
<body>
  <aside class="sidebar">
    <h3>Popular Posts</h3>
    <ul>
      <li><a href="#post1">Post One</a></li>
      <li><a href="#post2">Post Two</a></li>
    </ul>
  </aside>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 41</titel>
</head>
<BODY>
  <ASIDE CLASS="sidebar">
    <H3>Popular Posts</H3>
    <UL>
      <LI><A HREF="#post1">Post One</A></LI>
      <LI><A HREF="#post2">Post Two</A></LI>
    </UL>
  </ASIDE>
</BODY>`,
totalMistakes: 18,
hint: "Fix charset, title spelling, body casing, missing closing html, and aside/h3/ul/li/a tags."
},

// ── M42 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 42</title>
</head>
<body>
  <form action="/filter" method="get">
    <input type="search" name="q" placeholder="Filter items...">
    <input type="submit" value="Apply">
  </form>
  <hr>
  <p>Filtered list below.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 42</Title>
</head>
<body>
  <FORM ACTION="/filter" METHOD="get">
    <INPUT TYPE="search" NAME="q" PLACEHOLDER="Filter items...">
    <INPUT TYPE="submit" VALUE="Apply">
  </FORM>
  <HR>
  <P>Filtered list below.</P>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, form/input tags with attributes, and hr/p tags."
},

// ── M43 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 43</title>
</head>
<body>
  <main>
    <h1>Analytics</h1>
    <div class="stats">
      <span class="stat-number">5000</span>
      <span class="stat-label">Visitors</span>
    </div>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 43</titel>
</head>
<BODY>
  <MAIN>
    <H1>Analytics</H1>
    <DIV CLASS="stats">
      <SPAN CLASS="stat-number">5000</SPAN>
      <SPAN CLASS="stat-label">Visitors</SPAN>
    </DIV>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 19,
hint: "Fix html casing, charset/title attributes, body casing, and main/h1/div/span tags with CLASS."
},

// ── M44 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 44</title>
</head>
<body>
  <blockquote cite="https://example.com">
    <p>Success is not final, failure is not fatal.</p>
  </blockquote>
  <cite>Winston Churchill</cite>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 44</titel>
</head>
<BODY>
  <BLOCKQUOTE CITE="https://example.com">
    <P>Success is not final, failure is not fatal.</P>
  </BLOCKQUOTE>
  <CITE>Winston Churchill</CITE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, blockquote/p/cite tags and CITE attribute."
},

// ── M45 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 45</title>
</head>
<body>
  <form action="/signup" method="post">
    <input type="email" name="email" placeholder="Email" required>
    <input type="checkbox" name="newsletter" id="newsletter">
    <label for="newsletter">Subscribe to newsletter</label>
    <button type="submit">Sign Up</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 45</Title>
</head>
<BODY>
  <FORM ACTION="/signup" METHOD="post">
    <INPUT TYPE="email" NAME="email" PLACEHOLDER="Email" REQUIRED>
    <INPUT TYPE="checkbox" NAME="newsletter" ID="newsletter">
    <LABEL FOR="newsletter">Subscribe to newsletter</LABEL>
    <BUTTON TYPE="submit">Sign Up</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/body casing, charset/title attributes, and form/input/label/button tags with attributes."
},

// ── M46 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 46</title>
</head>
<body>
  <div class="gallery">
    <figure>
      <img src="photo2.jpg" alt="Photo 2">
      <figcaption>Sunset View</figcaption>
    </figure>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 46</titel>
</head>
<BODY>
  <DIV CLASS="gallery">
    <FIGURE>
      <IMG SRC="photo2.jpg" ALT="Photo 2">
      <FIGCAPTION>Sunset View</FIGCAPTION>
    </FIGURE>
  </DIV>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, div/figure/img/figcaption tags."
},

// ── M47 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 47</title>
</head>
<body>
  <ul class="menu">
    <li class="menu-item active">Dashboard</li>
    <li class="menu-item">Reports</li>
    <li class="menu-item">Settings</li>
  </ul>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 47</Title>
</head>
<body>
  <UL CLASS="menu">
    <LI CLASS="menu-item active">Dashboard</LI>
    <LI CLASS="menu-item">Reports</LI>
    <LI CLASS="menu-item">Settings</LI>
  </UL>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, and all ul/li tags with CLASS attributes."
},

// ── M48 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 48</title>
</head>
<body>
  <form action="/survey" method="post">
    <label for="age">Age Group</label>
    <select name="age" id="age">
      <option value="18-25">18-25</option>
      <option value="26-35">26-35</option>
    </select>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 48</Title>
</head>
<BODY>
  <FORM ACTION="/survey" METHOD="post">
    <LABEL FOR="age">Age Group</LABEL>
    <SELECT NAME="age" ID="age">
      <OPTION VALUE="18-25">18-25</OPTION>
      <OPTION VALUE="26-35">26-35</OPTION>
    </SELECT>
    <BUTTON TYPE="submit">Submit</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body/title casing, and form/label/select/option/button tags with attributes."
},

// ── M49 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 49</title>
</head>
<body>
  <header class="site-header">
    <h1 class="logo">Tech Blog</h1>
    <nav class="main-nav">
      <a href="#" class="nav-link">Articles</a>
      <a href="#" class="nav-link">Tutorials</a>
    </nav>
  </header>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 49</titel>
</head>
<BODY>
  <HEADER CLASS="site-header">
    <H1 CLASS="logo">Tech Blog</H1>
    <NAV CLASS="main-nav">
      <A HREF="#" CLASS="nav-link">Articles</A>
      <A HREF="#" CLASS="nav-link">Tutorials</A>
    </NAV>
  </HEADER>
</BODY>`,
totalMistakes: 19,
hint: "Fix charset, title spelling, body casing, missing closing html, header/h1/nav/a tags with CLASS/HREF."
},

// ── M50 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 50</title>
</head>
<body>
  <section class="hero">
    <h1>Final Section</h1>
    <p>You reached the last paragraph.</p>
    <button class="btn-primary">Finish</button>
  </section>
  <footer>
    <p>&copy; 2024 My Company</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <Title>Page 50</Title>
</head>
<BODY>
  <SECTION CLASS="hero">
    <H1>Final Section</H1>
    <P>You reached the last paragraph.</P>
    <BUTTON CLASS="btn-primary">Finish</BUTTON>
  </SECTION>
  <FOOTER>
    <P>&copy; 2024 My Company</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/LANG casing, charset/title attributes, body casing, and section/h1/p/button/footer tags."
},

/* ── Paragraph Mistakes — Medium HTML Data (Part 2) ──
   Medium: 15-20 mistakes per code
   Range: M51 to M75 (25 new paragraphs)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title)
     'missing' = tag ya attribute ghayab hai
*/

// ── M51 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 51</title>
</head>
<body>
  <header>
    <h1>Welcome</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>
  <section>
    <p>This is the main content area.</p>
  </section>
  <footer>
    <p>Copyright 2024</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Page 51</titel>
</head>
<BODY>
  <HEADER>
    <H1>Welcome</H1>
    <NAV>
      <A HREF="#home">Home</A>
      <A HREF="#about">About</A>
    </NAV>
  </HEADER>
  <SECTION>
    <P>This is the main content area.</P>
  </SECTION>
  <FOOTER>
    <P>Copyright 2024</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, LANG/charset attributes, title spelling, and all section tags (header, nav, a, section, p, footer)."
},

// ── M52 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 52</title>
</head>
<body>
  <form action="/login" method="post">
    <label for="user">Username</label>
    <input type="text" id="user" name="username" required>
    <label for="pass">Password</label>
    <input type="password" id="pass" name="password" required>
    <button type="submit">Login</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 52</Title>
</head>
<BODY>
  <FORM ACTION="/login" METHOD="post">
    <LABEL FOR="user">Username</LABEL>
    <INPUT TYPE="text" ID="user" NAME="username" REQUIRED>
    <LABEL FOR="pass">Password</LABEL>
    <INPUT TYPE="password" ID="pass" NAME="password" REQUIRED>
    <BUTTON TYPE="submit">Login</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 19,
hint: "Fix html/body casing, title casing, and all form/label/input/button tags plus their attributes."
},

// ── M53 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 53</title>
</head>
<body>
  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ali</td>
        <td>22</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 53</titel>
</head>
<BODY>
  <TABLE BORDER="1">
    <THEAD>
      <TR>
        <TH>Name</TH>
        <TH>Age</TH>
      </TR>
    </THEAD>
    <TBODY>
      <TR>
        <TD>Ali</TD>
        <TD>22</TD>
      </TR>
    </TBODY>
  </TABLE>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html tag, and all table-related tags/attributes."
},

// ── M54 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 54</title>
</head>
<body>
  <div class="container">
    <ul class="list">
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
    </ul>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 54</titel>
</head>
<body>
  <DIV CLASS="container">
    <UL CLASS="list">
      <LI>Apple</LI>
      <LI>Banana</LI>
      <LI>Mango</LI>
    </UL>
  </DIV>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset attribute, title spelling, and div/ul/li tags with CLASS attributes."
},

// ── M55 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 55</title>
</head>
<body>
  <article>
    <h2>Article Heading</h2>
    <p>Some article text goes here.</p>
    <img src="pic.jpg" alt="A picture">
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 55</Title>
</head>
<BODY>
  <ARTICLE>
    <H2>Article Heading</H2>
    <P>Some article text goes here.</P>
    <IMG SRC="pic.jpg" ALT="A picture">
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 16,
hint: "Fix html/body casing, title casing, article/h2/p tags, and IMG tag with SRC/ALT attributes."
},

// ── M56 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 56</title>
</head>
<body>
  <select name="city" id="city">
    <option value="lhr">Lahore</option>
    <option value="khi">Karachi</option>
    <option value="isb">Islamabad</option>
  </select>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 56</titel>
</head>
<BODY>
  <SELECT NAME="city" ID="city">
    <OPTION VALUE="lhr">Lahore</OPTION>
    <OPTION VALUE="khi">Karachi</OPTION>
    <OPTION VALUE="isb">Islamabad</OPTION>
  </SELECT>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html tag, and select/option tags with attributes."
},

// ── M57 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 57</title>
</head>
<body>
  <video controls width="320" height="240">
    <source src="movie.mp4" type="video/mp4">
  </video>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 57</Title>
</head>
<body>
  <VIDEO CONTROLS WIDTH="320" HEIGHT="240">
    <SOURCE SRC="movie.mp4" TYPE="video/mp4">
  </VIDEO>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, video/source tags and all their attributes."
},

// ── M58 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 58</title>
</head>
<body>
  <fieldset>
    <legend>Personal Info</legend>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
  </fieldset>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 58</titel>
</head>
<BODY>
  <FIELDSET>
    <LEGEND>Personal Info</LEGEND>
    <INPUT TYPE="radio" NAME="gender" VALUE="male"> Male
    <INPUT TYPE="radio" NAME="gender" VALUE="female"> Female
  </FIELDSET>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, fieldset/legend/input tags and attributes."
},

// ── M59 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 59</title>
</head>
<body>
  <div class="card">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card description text.</p>
    <a href="#" class="card-link">Read More</a>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 59</Title>
</head>
<body>
  <DIV CLASS="card">
    <H3 CLASS="card-title">Card Title</H3>
    <P CLASS="card-text">Card description text.</P>
    <A HREF="#" CLASS="card-link">Read More</A>
  </DIV>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, div/h3/p/a tags and all CLASS/HREF attributes."
},

// ── M60 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 60</title>
</head>
<body>
  <textarea name="message" rows="5" cols="30" placeholder="Type here"></textarea>
  <button type="submit">Send</button>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 60</titel>
</head>
<BODY>
  <TEXTAREA NAME="message" ROWS="5" COLS="30" PLACEHOLDER="Type here"></TEXTAREA>
  <BUTTON TYPE="submit">Send</BUTTON>
</BODY>`,
totalMistakes: 17,
hint: "Fix charset, title spelling, body casing, missing closing html, textarea/button tags and attributes."
},

// ── M61 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 61</title>
</head>
<body>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item"><a href="#home">Home</a></li>
      <li class="nav-item"><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 61</Title>
</head>
<BODY>
  <NAV CLASS="navbar">
    <UL CLASS="nav-list">
      <LI CLASS="nav-item"><A HREF="#home">Home</A></LI>
      <LI CLASS="nav-item"><A HREF="#contact">Contact</A></LI>
    </UL>
  </NAV>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, title casing, and nav/ul/li/a tags with CLASS/HREF attributes."
},

// ── M62 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 62</title>
</head>
<body>
  <div class="modal">
    <span class="close">&times;</span>
    <h2>Modal Title</h2>
    <p>Modal content text here.</p>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 62</titel>
</head>
<BODY>
  <DIV CLASS="modal">
    <SPAN CLASS="close">&times;</SPAN>
    <H2>Modal Title</H2>
    <P>Modal content text here.</P>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, div/span/h2/p tags and CLASS attribute."
},

// ── M63 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 63</title>
</head>
<body>
  <picture>
    <source srcset="big.jpg" media="(min-width: 800px)">
    <img src="small.jpg" alt="Responsive image">
  </picture>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 63</Title>
</head>
<body>
  <PICTURE>
    <SOURCE SRCSET="big.jpg" MEDIA="(min-width: 800px)">
    <IMG SRC="small.jpg" ALT="Responsive image">
  </PICTURE>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset/title attributes, picture/source/img tags and all attributes."
},

// ── M64 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 64</title>
</head>
<body>
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 64</titel>
</head>
<BODY>
  <DIV CLASS="row">
    <DIV CLASS="col">Column 1</DIV>
    <DIV CLASS="col">Column 2</DIV>
    <DIV CLASS="col">Column 3</DIV>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, and all div tags with CLASS attributes."
},

// ── M65 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 65</title>
</head>
<body>
  <details>
    <summary>Click to expand</summary>
    <p>Hidden content revealed here.</p>
  </details>
  <progress value="50" max="100"></progress>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 65</Title>
</head>
<BODY>
  <DETAILS>
    <SUMMARY>Click to expand</SUMMARY>
    <P>Hidden content revealed here.</P>
  </DETAILS>
  <PROGRESS VALUE="50" MAX="100"></PROGRESS>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, details/summary/p tags, and progress tag with VALUE/MAX attributes."
},

// ── M66 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 66</title>
</head>
<body>
  <aside class="sidebar">
    <h3>Related Links</h3>
    <ul>
      <li><a href="#one">Link One</a></li>
      <li><a href="#two">Link Two</a></li>
    </ul>
  </aside>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 66</titel>
</head>
<BODY>
  <ASIDE CLASS="sidebar">
    <H3>Related Links</H3>
    <UL>
      <LI><A HREF="#one">Link One</A></LI>
      <LI><A HREF="#two">Link Two</A></LI>
    </UL>
  </ASIDE>
</BODY>`,
totalMistakes: 18,
hint: "Fix charset, title spelling, body casing, missing closing html, and aside/h3/ul/li/a tags."
},

// ── M67 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 67</title>
</head>
<body>
  <form action="/search" method="get">
    <input type="search" name="q" placeholder="Search...">
    <input type="submit" value="Go">
  </form>
  <hr>
  <p>Results will appear below.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 67</Title>
</head>
<body>
  <FORM ACTION="/search" METHOD="get">
    <INPUT TYPE="search" NAME="q" PLACEHOLDER="Search...">
    <INPUT TYPE="submit" VALUE="Go">
  </FORM>
  <HR>
  <P>Results will appear below.</P>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, form/input tags with attributes, and hr/p tags."
},

// ── M68 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 68</title>
</head>
<body>
  <main>
    <h1>Dashboard</h1>
    <div class="stats">
      <span class="stat-number">100</span>
      <span class="stat-label">Users</span>
    </div>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 68</titel>
</head>
<BODY>
  <MAIN>
    <H1>Dashboard</H1>
    <DIV CLASS="stats">
      <SPAN CLASS="stat-number">100</SPAN>
      <SPAN CLASS="stat-label">Users</SPAN>
    </DIV>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 19,
hint: "Fix html casing, charset/title attributes, body casing, and main/h1/div/span tags with CLASS."
},

// ── M69 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 69</title>
</head>
<body>
  <blockquote cite="https://example.com">
    <p>This is a famous quote.</p>
  </blockquote>
  <cite>Author Name</cite>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 69</titel>
</head>
<BODY>
  <BLOCKQUOTE CITE="https://example.com">
    <P>This is a famous quote.</P>
  </BLOCKQUOTE>
  <CITE>Author Name</CITE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, blockquote/p/cite tags and CITE attribute."
},

// ── M70 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 70</title>
</head>
<body>
  <form action="/register" method="post">
    <input type="email" name="email" placeholder="Email" required>
    <input type="checkbox" name="terms" id="terms">
    <label for="terms">I agree to terms</label>
    <button type="submit">Register</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 70</Title>
</head>
<BODY>
  <FORM ACTION="/register" METHOD="post">
    <INPUT TYPE="email" NAME="email" PLACEHOLDER="Email" REQUIRED>
    <INPUT TYPE="checkbox" NAME="terms" ID="terms">
    <LABEL FOR="terms">I agree to terms</LABEL>
    <BUTTON TYPE="submit">Register</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/body casing, charset/title attributes, and form/input/label/button tags with attributes."
},

// ── M71 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 71</title>
</head>
<body>
  <div class="gallery">
    <figure>
      <img src="art1.jpg" alt="Artwork 1">
      <figcaption>Artwork One</figcaption>
    </figure>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 71</titel>
</head>
<BODY>
  <DIV CLASS="gallery">
    <FIGURE>
      <IMG SRC="art1.jpg" ALT="Artwork 1">
      <FIGCAPTION>Artwork One</FIGCAPTION>
    </FIGURE>
  </DIV>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, div/figure/img/figcaption tags."
},

// ── M72 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 72</title>
</head>
<body>
  <ul class="menu">
    <li class="menu-item active">Home</li>
    <li class="menu-item">Services</li>
    <li class="menu-item">Pricing</li>
    <li class="menu-item">Contact</li>
  </ul>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 72</Title>
</head>
<body>
  <UL CLASS="menu">
    <LI CLASS="menu-item active">Home</LI>
    <LI CLASS="menu-item">Services</LI>
    <LI CLASS="menu-item">Pricing</LI>
    <LI CLASS="menu-item">Contact</LI>
  </UL>
</body>
</HTML>`,
totalMistakes: 18,
hint: "Fix html casing, charset/title attributes, and all ul/li tags with CLASS attributes."
},

// ── M73 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 73</title>
</head>
<body>
  <form action="/feedback" method="post">
    <label for="rating">Rating</label>
    <select name="rating" id="rating">
      <option value="5">Excellent</option>
      <option value="1">Poor</option>
    </select>
    <textarea name="comments" rows="4"></textarea>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 73</Title>
</head>
<BODY>
  <FORM ACTION="/feedback" METHOD="post">
    <LABEL FOR="rating">Rating</LABEL>
    <SELECT NAME="rating" ID="rating">
      <OPTION VALUE="5">Excellent</OPTION>
      <OPTION VALUE="1">Poor</OPTION>
    </SELECT>
    <TEXTAREA NAME="comments" ROWS="4"></TEXTAREA>
    <BUTTON TYPE="submit">Submit</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/body/title casing, and form/label/select/option/textarea/button tags with attributes."
},

// ── M74 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 74</title>
</head>
<body>
  <header class="site-header">
    <h1 class="logo">My Site</h1>
    <nav class="main-nav">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">Blog</a>
    </nav>
  </header>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 74</titel>
</head>
<BODY>
  <HEADER CLASS="site-header">
    <H1 CLASS="logo">My Site</H1>
    <NAV CLASS="main-nav">
      <A HREF="#" CLASS="nav-link">Home</A>
      <A HREF="#" CLASS="nav-link">Blog</A>
    </NAV>
  </HEADER>
</BODY>`,
totalMistakes: 19,
hint: "Fix charset, title spelling, body casing, missing closing html, header/h1/nav/a tags with CLASS/HREF."
},

// ── M75 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 75</title>
</head>
<body>
  <section class="hero">
    <h1>Big Heading</h1>
    <p>Subtitle text goes here.</p>
    <button class="btn-primary">Get Started</button>
  </section>
  <footer>
    <p>&copy; 2024 My Company</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <Title>Page 75</Title>
</head>
<BODY>
  <SECTION CLASS="hero">
    <H1>Big Heading</H1>
    <P>Subtitle text goes here.</P>
    <BUTTON CLASS="btn-primary">Get Started</BUTTON>
  </SECTION>
  <FOOTER>
    <P>&copy; 2024 My Company</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/LANG casing, charset/title attributes, body casing, and section/h1/p/button/footer tags."
},

/* ── Paragraph Mistakes — Medium HTML Data (M76-M100) ──
   Medium: 15-20 mistakes per code

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title)
     'missing' = tag ya attribute ghayab hai
*/

// ── M76 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 76</title>
</head>
<body>
  <header>
    <h1>Online Store</h1>
    <nav>
      <a href="#new">New Arrivals</a>
      <a href="#sale">Sale</a>
    </nav>
  </header>
  <p>Browse our latest collection.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Page 76</titel>
</head>
<BODY>
  <HEADER>
    <H1>Online Store</H1>
    <NAV>
      <A HREF="#new">New Arrivals</A>
      <A HREF="#sale">Sale</A>
    </NAV>
  </HEADER>
  <P>Browse our latest collection.</P>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, LANG/charset attributes, title spelling, and header/h1/nav/a/p tags."
},

// ── M77 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 77</title>
</head>
<body>
  <form action="/booking" method="post">
    <label for="date">Travel Date</label>
    <input type="date" id="date" name="date" required>
    <button type="submit">Book Now</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 77</Title>
</head>
<BODY>
  <FORM ACTION="/booking" METHOD="post">
    <LABEL FOR="date">Travel Date</LABEL>
    <INPUT TYPE="date" ID="date" NAME="date" REQUIRED>
    <BUTTON TYPE="submit">Book Now</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, and form/label/input/button tags with attributes."
},

// ── M78 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 78</title>
</head>
<body>
  <table border="1">
    <tr>
      <th>Item</th>
      <th>Qty</th>
    </tr>
    <tr>
      <td>Book</td>
      <td>3</td>
    </tr>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 78</titel>
</head>
<BODY>
  <TABLE BORDER="1">
    <TR>
      <TH>Item</TH>
      <TH>Qty</TH>
    </TR>
    <TR>
      <TD>Book</TD>
      <TD>3</TD>
    </TR>
  </TABLE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html tag, and table/tr/th/td tags."
},

// ── M79 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 79</title>
</head>
<body>
  <div class="container">
    <ul class="list">
      <li>Laptop</li>
      <li>Mouse</li>
    </ul>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 79</titel>
</head>
<body>
  <DIV CLASS="container">
    <UL CLASS="list">
      <LI>Laptop</LI>
      <LI>Mouse</LI>
    </UL>
  </DIV>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset attribute, title spelling, and div/ul/li tags with CLASS attributes."
},

// ── M80 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 80</title>
</head>
<body>
  <article>
    <h2>Review Heading</h2>
    <p>Customer review text.</p>
    <img src="review.jpg" alt="Review image">
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 80</Title>
</head>
<BODY>
  <ARTICLE>
    <H2>Review Heading</H2>
    <P>Customer review text.</P>
    <IMG SRC="review.jpg" ALT="Review image">
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 16,
hint: "Fix html/body casing, title casing, article/h2/p tags, and IMG tag with SRC/ALT attributes."
},

// ── M81 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 81</title>
</head>
<body>
  <select name="payment" id="payment">
    <option value="card">Credit Card</option>
    <option value="cash">Cash on Delivery</option>
  </select>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 81</titel>
</head>
<BODY>
  <SELECT NAME="payment" ID="payment">
    <OPTION VALUE="card">Credit Card</OPTION>
    <OPTION VALUE="cash">Cash on Delivery</OPTION>
  </SELECT>
</BODY>`,
totalMistakes: 15,
hint: "Fix title spelling, body casing, missing closing html tag, and select/option tags with attributes."
},

// ── M82 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 82</title>
</head>
<body>
  <video controls width="500" height="280">
    <source src="trailer.mp4" type="video/mp4">
  </video>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 82</Title>
</head>
<body>
  <VIDEO CONTROLS WIDTH="500" HEIGHT="280">
    <SOURCE SRC="trailer.mp4" TYPE="video/mp4">
  </VIDEO>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, video/source tags and all their attributes."
},

// ── M83 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 83</title>
</head>
<body>
  <fieldset>
    <legend>Delivery Method</legend>
    <input type="radio" name="ship" value="standard"> Standard
    <input type="radio" name="ship" value="express"> Express
  </fieldset>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 83</titel>
</head>
<BODY>
  <FIELDSET>
    <LEGEND>Delivery Method</LEGEND>
    <INPUT TYPE="radio" NAME="ship" VALUE="standard"> Standard
    <INPUT TYPE="radio" NAME="ship" VALUE="express"> Express
  </FIELDSET>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, fieldset/legend/input tags and attributes."
},

// ── M84 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 84</title>
</head>
<body>
  <div class="card">
    <h3 class="card-title">Product Name</h3>
    <p class="card-text">Product description.</p>
    <a href="#" class="card-link">Buy Now</a>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 84</Title>
</head>
<body>
  <DIV CLASS="card">
    <H3 CLASS="card-title">Product Name</H3>
    <P CLASS="card-text">Product description.</P>
    <A HREF="#" CLASS="card-link">Buy Now</A>
  </DIV>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, div/h3/p/a tags and all CLASS/HREF attributes."
},

// ── M85 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 85</title>
</head>
<body>
  <textarea name="complaint" rows="5" cols="35" placeholder="Describe your issue"></textarea>
  <button type="submit">Submit</button>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 85</titel>
</head>
<BODY>
  <TEXTAREA NAME="complaint" ROWS="5" COLS="35" PLACEHOLDER="Describe your issue"></TEXTAREA>
  <BUTTON TYPE="submit">Submit</BUTTON>
</BODY>`,
totalMistakes: 17,
hint: "Fix charset, title spelling, body casing, missing closing html, textarea/button tags and attributes."
},

// ── M86 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 86</title>
</head>
<body>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item"><a href="#careers">Careers</a></li>
      <li class="nav-item"><a href="#team">Team</a></li>
    </ul>
  </nav>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 86</Title>
</head>
<BODY>
  <NAV CLASS="navbar">
    <UL CLASS="nav-list">
      <LI CLASS="nav-item"><A HREF="#careers">Careers</A></LI>
      <LI CLASS="nav-item"><A HREF="#team">Team</A></LI>
    </UL>
  </NAV>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, title casing, and nav/ul/li/a tags with CLASS/HREF attributes."
},

// ── M87 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 87</title>
</head>
<body>
  <div class="modal">
    <span class="close">&times;</span>
    <h2>Subscription Expired</h2>
    <p>Please renew your plan to continue.</p>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 87</titel>
</head>
<BODY>
  <DIV CLASS="modal">
    <SPAN CLASS="close">&times;</SPAN>
    <H2>Subscription Expired</H2>
    <P>Please renew your plan to continue.</P>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, div/span/h2/p tags and CLASS attribute."
},

// ── M88 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 88</title>
</head>
<body>
  <picture>
    <source srcset="hero-big.jpg" media="(min-width: 1000px)">
    <img src="hero-small.jpg" alt="Hero image">
  </picture>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 88</Title>
</head>
<body>
  <PICTURE>
    <SOURCE SRCSET="hero-big.jpg" MEDIA="(min-width: 1000px)">
    <IMG SRC="hero-small.jpg" ALT="Hero image">
  </PICTURE>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset/title attributes, picture/source/img tags and all attributes."
},

// ── M89 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 89</title>
</head>
<body>
  <div class="row">
    <div class="col">Plan A</div>
    <div class="col">Plan B</div>
    <div class="col">Plan C</div>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 89</titel>
</head>
<BODY>
  <DIV CLASS="row">
    <DIV CLASS="col">Plan A</DIV>
    <DIV CLASS="col">Plan B</DIV>
    <DIV CLASS="col">Plan C</DIV>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, and all div tags with CLASS attributes."
},

// ── M90 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 90</title>
</head>
<body>
  <details>
    <summary>Order Summary</summary>
    <p>Your order includes 3 items.</p>
  </details>
  <progress value="90" max="100"></progress>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 90</Title>
</head>
<BODY>
  <DETAILS>
    <SUMMARY>Order Summary</SUMMARY>
    <P>Your order includes 3 items.</P>
  </DETAILS>
  <PROGRESS VALUE="90" MAX="100"></PROGRESS>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, details/summary/p tags, and progress tag with VALUE/MAX attributes."
},

// ── M91 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 91</title>
</head>
<body>
  <aside class="sidebar">
    <h3>Trending Topics</h3>
    <ul>
      <li><a href="#topic1">Topic One</a></li>
      <li><a href="#topic2">Topic Two</a></li>
    </ul>
  </aside>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 91</titel>
</head>
<BODY>
  <ASIDE CLASS="sidebar">
    <H3>Trending Topics</H3>
    <UL>
      <LI><A HREF="#topic1">Topic One</A></LI>
      <LI><A HREF="#topic2">Topic Two</A></LI>
    </UL>
  </ASIDE>
</BODY>`,
totalMistakes: 18,
hint: "Fix charset, title spelling, body casing, missing closing html, and aside/h3/ul/li/a tags."
},

// ── M92 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 92</title>
</head>
<body>
  <form action="/track" method="get">
    <input type="text" name="order_id" placeholder="Order ID">
    <input type="submit" value="Track">
  </form>
  <hr>
  <p>Tracking status below.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 92</Title>
</head>
<body>
  <FORM ACTION="/track" METHOD="get">
    <INPUT TYPE="text" NAME="order_id" PLACEHOLDER="Order ID">
    <INPUT TYPE="submit" VALUE="Track">
  </FORM>
  <HR>
  <P>Tracking status below.</P>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, form/input tags with attributes, and hr/p tags."
},

// ── M93 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 93</title>
</head>
<body>
  <main>
    <h1>Sales Report</h1>
    <div class="stats">
      <span class="stat-number">25000</span>
      <span class="stat-label">Revenue</span>
    </div>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 93</titel>
</head>
<BODY>
  <MAIN>
    <H1>Sales Report</H1>
    <DIV CLASS="stats">
      <SPAN CLASS="stat-number">25000</SPAN>
      <SPAN CLASS="stat-label">Revenue</SPAN>
    </DIV>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 19,
hint: "Fix html casing, charset/title attributes, body casing, and main/h1/div/span tags with CLASS."
},

// ── M94 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 94</title>
</head>
<body>
  <blockquote cite="https://example.com">
    <p>The only way to do great work is to love what you do.</p>
  </blockquote>
  <cite>Steve Jobs</cite>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 94</titel>
</head>
<BODY>
  <BLOCKQUOTE CITE="https://example.com">
    <P>The only way to do great work is to love what you do.</P>
  </BLOCKQUOTE>
  <CITE>Steve Jobs</CITE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, blockquote/p/cite tags and CITE attribute."
},

// ── M95 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 95</title>
</head>
<body>
  <form action="/contact" method="post">
    <input type="email" name="email" placeholder="Your email" required>
    <input type="checkbox" name="updates" id="updates">
    <label for="updates">Send me updates</label>
    <button type="submit">Send</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 95</Title>
</head>
<BODY>
  <FORM ACTION="/contact" METHOD="post">
    <INPUT TYPE="email" NAME="email" PLACEHOLDER="Your email" REQUIRED>
    <INPUT TYPE="checkbox" NAME="updates" ID="updates">
    <LABEL FOR="updates">Send me updates</LABEL>
    <BUTTON TYPE="submit">Send</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/body casing, charset/title attributes, and form/input/label/button tags with attributes."
},

// ── M96 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 96</title>
</head>
<body>
  <div class="gallery">
    <figure>
      <img src="event1.jpg" alt="Event photo">
      <figcaption>Annual Conference</figcaption>
    </figure>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 96</titel>
</head>
<BODY>
  <DIV CLASS="gallery">
    <FIGURE>
      <IMG SRC="event1.jpg" ALT="Event photo">
      <FIGCAPTION>Annual Conference</FIGCAPTION>
    </FIGURE>
  </DIV>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, div/figure/img/figcaption tags."
},

// ── M97 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 97</title>
</head>
<body>
  <ul class="menu">
    <li class="menu-item active">Profile</li>
    <li class="menu-item">Billing</li>
    <li class="menu-item">Logout</li>
  </ul>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 97</Title>
</head>
<body>
  <UL CLASS="menu">
    <LI CLASS="menu-item active">Profile</LI>
    <LI CLASS="menu-item">Billing</LI>
    <LI CLASS="menu-item">Logout</LI>
  </UL>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, and all ul/li tags with CLASS attributes."
},

// ── M98 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 98</title>
</head>
<body>
  <form action="/poll" method="post">
    <label for="vote">Your Vote</label>
    <select name="vote" id="vote">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    <button type="submit">Vote</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 98</Title>
</head>
<BODY>
  <FORM ACTION="/poll" METHOD="post">
    <LABEL FOR="vote">Your Vote</LABEL>
    <SELECT NAME="vote" ID="vote">
      <OPTION VALUE="yes">Yes</OPTION>
      <OPTION VALUE="no">No</OPTION>
    </SELECT>
    <BUTTON TYPE="submit">Vote</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body/title casing, and form/label/select/option/button tags with attributes."
},

// ── M99 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 99</title>
</head>
<body>
  <header class="site-header">
    <h1 class="logo">News Portal</h1>
    <nav class="main-nav">
      <a href="#" class="nav-link">World</a>
      <a href="#" class="nav-link">Sports</a>
    </nav>
  </header>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 99</titel>
</head>
<BODY>
  <HEADER CLASS="site-header">
    <H1 CLASS="logo">News Portal</H1>
    <NAV CLASS="main-nav">
      <A HREF="#" CLASS="nav-link">World</A>
      <A HREF="#" CLASS="nav-link">Sports</A>
    </NAV>
  </HEADER>
</BODY>`,
totalMistakes: 19,
hint: "Fix charset, title spelling, body casing, missing closing html, header/h1/nav/a tags with CLASS/HREF."
},

// ── M100 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 100</title>
</head>
<body>
  <section class="hero">
    <h1>Final Medium Page</h1>
    <p>You completed all medium paragraphs.</p>
    <button class="btn-primary">Continue</button>
  </section>
  <footer>
    <p>&copy; 2024 My Company</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <Title>Page 100</Title>
</head>
<BODY>
  <SECTION CLASS="hero">
    <H1>Final Medium Page</H1>
    <P>You completed all medium paragraphs.</P>
    <BUTTON CLASS="btn-primary">Continue</BUTTON>
  </SECTION>
  <FOOTER>
    <P>&copy; 2024 My Company</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/LANG casing, charset/title attributes, body casing, and section/h1/p/button/footer tags."
},

/* ── Paragraph Mistakes — Medium HTML Data (M101-M125) ──
   Medium: 15-20 mistakes per code

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title)
     'missing' = tag ya attribute ghayab hai
*/

// ── M101 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 101</title>
</head>
<body>
  <header>
    <h1>Travel Agency</h1>
    <nav>
      <a href="#tours">Tours</a>
      <a href="#hotels">Hotels</a>
    </nav>
  </header>
  <p>Plan your next vacation.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Page 101</titel>
</head>
<BODY>
  <HEADER>
    <H1>Travel Agency</H1>
    <NAV>
      <A HREF="#tours">Tours</A>
      <A HREF="#hotels">Hotels</A>
    </NAV>
  </HEADER>
  <P>Plan your next vacation.</P>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, LANG/charset attributes, title spelling, and header/h1/nav/a/p tags."
},

// ── M102 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 102</title>
</head>
<body>
  <form action="/apply" method="post">
    <label for="resume">Resume</label>
    <input type="file" id="resume" name="resume" required>
    <button type="submit">Apply</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 102</Title>
</head>
<BODY>
  <FORM ACTION="/apply" METHOD="post">
    <LABEL FOR="resume">Resume</LABEL>
    <INPUT TYPE="file" ID="resume" NAME="resume" REQUIRED>
    <BUTTON TYPE="submit">Apply</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, and form/label/input/button tags with attributes."
},

// ── M103 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 103</title>
</head>
<body>
  <table border="1">
    <tr>
      <th>Course</th>
      <th>Duration</th>
    </tr>
    <tr>
      <td>HTML</td>
      <td>4 weeks</td>
    </tr>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 103</titel>
</head>
<BODY>
  <TABLE BORDER="1">
    <TR>
      <TH>Course</TH>
      <TH>Duration</TH>
    </TR>
    <TR>
      <TD>HTML</TD>
      <TD>4 weeks</TD>
    </TR>
  </TABLE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html tag, and table/tr/th/td tags."
},

// ── M104 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 104</title>
</head>
<body>
  <div class="container">
    <ul class="list">
      <li>Keyboard</li>
      <li>Monitor</li>
    </ul>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 104</titel>
</head>
<body>
  <DIV CLASS="container">
    <UL CLASS="list">
      <LI>Keyboard</LI>
      <LI>Monitor</LI>
    </UL>
  </DIV>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset attribute, title spelling, and div/ul/li tags with CLASS attributes."
},

// ── M105 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 105</title>
</head>
<body>
  <article>
    <h2>Recipe Heading</h2>
    <p>Step by step cooking guide.</p>
    <img src="recipe.jpg" alt="Recipe image">
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 105</Title>
</head>
<BODY>
  <ARTICLE>
    <H2>Recipe Heading</H2>
    <P>Step by step cooking guide.</P>
    <IMG SRC="recipe.jpg" ALT="Recipe image">
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 16,
hint: "Fix html/body casing, title casing, article/h2/p tags, and IMG tag with SRC/ALT attributes."
},

// ── M106 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 106</title>
</head>
<body>
  <select name="language" id="language">
    <option value="en">English</option>
    <option value="ur">Urdu</option>
  </select>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 106</titel>
</head>
<BODY>
  <SELECT NAME="language" ID="language">
    <OPTION VALUE="en">English</OPTION>
    <OPTION VALUE="ur">Urdu</OPTION>
  </SELECT>
</BODY>`,
totalMistakes: 15,
hint: "Fix title spelling, body casing, missing closing html tag, and select/option tags with attributes."
},

// ── M107 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 107</title>
</head>
<body>
  <video controls width="450" height="260">
    <source src="lesson.mp4" type="video/mp4">
  </video>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 107</Title>
</head>
<body>
  <VIDEO CONTROLS WIDTH="450" HEIGHT="260">
    <SOURCE SRC="lesson.mp4" TYPE="video/mp4">
  </VIDEO>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, video/source tags and all their attributes."
},

// ── M108 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 108</title>
</head>
<body>
  <fieldset>
    <legend>Subscription Plan</legend>
    <input type="radio" name="plan" value="monthly"> Monthly
    <input type="radio" name="plan" value="yearly"> Yearly
  </fieldset>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 108</titel>
</head>
<BODY>
  <FIELDSET>
    <LEGEND>Subscription Plan</LEGEND>
    <INPUT TYPE="radio" NAME="plan" VALUE="monthly"> Monthly
    <INPUT TYPE="radio" NAME="plan" VALUE="yearly"> Yearly
  </FIELDSET>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, fieldset/legend/input tags and attributes."
},

// ── M109 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 109</title>
</head>
<body>
  <div class="card">
    <h3 class="card-title">Course Name</h3>
    <p class="card-text">Course details here.</p>
    <a href="#" class="card-link">Enroll Now</a>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 109</Title>
</head>
<body>
  <DIV CLASS="card">
    <H3 CLASS="card-title">Course Name</H3>
    <P CLASS="card-text">Course details here.</P>
    <A HREF="#" CLASS="card-link">Enroll Now</A>
  </DIV>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, div/h3/p/a tags and all CLASS/HREF attributes."
},

// ── M110 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 110</title>
</head>
<body>
  <textarea name="bio" rows="6" cols="40" placeholder="Tell us about yourself"></textarea>
  <button type="submit">Save</button>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 110</titel>
</head>
<BODY>
  <TEXTAREA NAME="bio" ROWS="6" COLS="40" PLACEHOLDER="Tell us about yourself"></TEXTAREA>
  <BUTTON TYPE="submit">Save</BUTTON>
</BODY>`,
totalMistakes: 17,
hint: "Fix charset, title spelling, body casing, missing closing html, textarea/button tags and attributes."
},

// ── M111 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 111</title>
</head>
<body>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item"><a href="#gallery">Gallery</a></li>
      <li class="nav-item"><a href="#events">Events</a></li>
    </ul>
  </nav>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 111</Title>
</head>
<BODY>
  <NAV CLASS="navbar">
    <UL CLASS="nav-list">
      <LI CLASS="nav-item"><A HREF="#gallery">Gallery</A></LI>
      <LI CLASS="nav-item"><A HREF="#events">Events</A></LI>
    </UL>
  </NAV>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, title casing, and nav/ul/li/a tags with CLASS/HREF attributes."
},

// ── M112 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 112</title>
</head>
<body>
  <div class="modal">
    <span class="close">&times;</span>
    <h2>Session Expired</h2>
    <p>Please login again to continue.</p>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 112</titel>
</head>
<BODY>
  <DIV CLASS="modal">
    <SPAN CLASS="close">&times;</SPAN>
    <H2>Session Expired</H2>
    <P>Please login again to continue.</P>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, div/span/h2/p tags and CLASS attribute."
},

// ── M113 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 113</title>
</head>
<body>
  <picture>
    <source srcset="cover-big.jpg" media="(min-width: 950px)">
    <img src="cover-small.jpg" alt="Cover image">
  </picture>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 113</Title>
</head>
<body>
  <PICTURE>
    <SOURCE SRCSET="cover-big.jpg" MEDIA="(min-width: 950px)">
    <IMG SRC="cover-small.jpg" ALT="Cover image">
  </PICTURE>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset/title attributes, picture/source/img tags and all attributes."
},

// ── M114 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 114</title>
</head>
<body>
  <div class="row">
    <div class="col">Team A</div>
    <div class="col">Team B</div>
    <div class="col">Team C</div>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 114</titel>
</head>
<BODY>
  <DIV CLASS="row">
    <DIV CLASS="col">Team A</DIV>
    <DIV CLASS="col">Team B</DIV>
    <DIV CLASS="col">Team C</DIV>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, and all div tags with CLASS attributes."
},

// ── M115 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 115</title>
</head>
<body>
  <details>
    <summary>Shipping Info</summary>
    <p>Delivery takes 3-5 business days.</p>
  </details>
  <progress value="60" max="100"></progress>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 115</Title>
</head>
<BODY>
  <DETAILS>
    <SUMMARY>Shipping Info</SUMMARY>
    <P>Delivery takes 3-5 business days.</P>
  </DETAILS>
  <PROGRESS VALUE="60" MAX="100"></PROGRESS>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, details/summary/p tags, and progress tag with VALUE/MAX attributes."
},

// ── M116 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 116</title>
</head>
<body>
  <aside class="sidebar">
    <h3>Recent Comments</h3>
    <ul>
      <li><a href="#c1">Comment One</a></li>
      <li><a href="#c2">Comment Two</a></li>
    </ul>
  </aside>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 116</titel>
</head>
<BODY>
  <ASIDE CLASS="sidebar">
    <H3>Recent Comments</H3>
    <UL>
      <LI><A HREF="#c1">Comment One</A></LI>
      <LI><A HREF="#c2">Comment Two</A></LI>
    </UL>
  </ASIDE>
</BODY>`,
totalMistakes: 18,
hint: "Fix charset, title spelling, body casing, missing closing html, and aside/h3/ul/li/a tags."
},

// ── M117 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 117</title>
</head>
<body>
  <form action="/search-jobs" method="get">
    <input type="text" name="keyword" placeholder="Job title">
    <input type="submit" value="Search">
  </form>
  <hr>
  <p>Job listings below.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 117</Title>
</head>
<body>
  <FORM ACTION="/search-jobs" METHOD="get">
    <INPUT TYPE="text" NAME="keyword" PLACEHOLDER="Job title">
    <INPUT TYPE="submit" VALUE="Search">
  </FORM>
  <HR>
  <P>Job listings below.</P>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, form/input tags with attributes, and hr/p tags."
},

// ── M118 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 118</title>
</head>
<body>
  <main>
    <h1>Inventory</h1>
    <div class="stats">
      <span class="stat-number">320</span>
      <span class="stat-label">Items in stock</span>
    </div>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 118</titel>
</head>
<BODY>
  <MAIN>
    <H1>Inventory</H1>
    <DIV CLASS="stats">
      <SPAN CLASS="stat-number">320</SPAN>
      <SPAN CLASS="stat-label">Items in stock</SPAN>
    </DIV>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 19,
hint: "Fix html casing, charset/title attributes, body casing, and main/h1/div/span tags with CLASS."
},

// ── M119 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 119</title>
</head>
<body>
  <blockquote cite="https://example.com">
    <p>Stay hungry, stay foolish.</p>
  </blockquote>
  <cite>Steve Jobs</cite>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 119</titel>
</head>
<BODY>
  <BLOCKQUOTE CITE="https://example.com">
    <P>Stay hungry, stay foolish.</P>
  </BLOCKQUOTE>
  <CITE>Steve Jobs</CITE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, blockquote/p/cite tags and CITE attribute."
},

// ── M120 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 120</title>
</head>
<body>
  <form action="/newsletter" method="post">
    <input type="email" name="email" placeholder="Email address" required>
    <input type="checkbox" name="weekly" id="weekly">
    <label for="weekly">Weekly digest</label>
    <button type="submit">Subscribe</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 120</Title>
</head>
<BODY>
  <FORM ACTION="/newsletter" METHOD="post">
    <INPUT TYPE="email" NAME="email" PLACEHOLDER="Email address" REQUIRED>
    <INPUT TYPE="checkbox" NAME="weekly" ID="weekly">
    <LABEL FOR="weekly">Weekly digest</LABEL>
    <BUTTON TYPE="submit">Subscribe</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/body casing, charset/title attributes, and form/input/label/button tags with attributes."
},

// ── M121 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 121</title>
</head>
<body>
  <div class="gallery">
    <figure>
      <img src="wedding1.jpg" alt="Wedding photo">
      <figcaption>Wedding Day</figcaption>
    </figure>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 121</titel>
</head>
<BODY>
  <DIV CLASS="gallery">
    <FIGURE>
      <IMG SRC="wedding1.jpg" ALT="Wedding photo">
      <FIGCAPTION>Wedding Day</FIGCAPTION>
    </FIGURE>
  </DIV>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, div/figure/img/figcaption tags."
},

// ── M122 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 122</title>
</head>
<body>
  <ul class="menu">
    <li class="menu-item active">Inbox</li>
    <li class="menu-item">Sent</li>
    <li class="menu-item">Drafts</li>
  </ul>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 122</Title>
</head>
<body>
  <UL CLASS="menu">
    <LI CLASS="menu-item active">Inbox</LI>
    <LI CLASS="menu-item">Sent</LI>
    <LI CLASS="menu-item">Drafts</LI>
  </UL>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, and all ul/li tags with CLASS attributes."
},

// ── M123 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 123</title>
</head>
<body>
  <form action="/quiz" method="post">
    <label for="answer">Your Answer</label>
    <select name="answer" id="answer">
      <option value="a">Option A</option>
      <option value="b">Option B</option>
    </select>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 123</Title>
</head>
<BODY>
  <FORM ACTION="/quiz" METHOD="post">
    <LABEL FOR="answer">Your Answer</LABEL>
    <SELECT NAME="answer" ID="answer">
      <OPTION VALUE="a">Option A</OPTION>
      <OPTION VALUE="b">Option B</OPTION>
    </SELECT>
    <BUTTON TYPE="submit">Submit</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body/title casing, and form/label/select/option/button tags with attributes."
},

// ── M124 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 124</title>
</head>
<body>
  <header class="site-header">
    <h1 class="logo">Fitness Hub</h1>
    <nav class="main-nav">
      <a href="#" class="nav-link">Workouts</a>
      <a href="#" class="nav-link">Diet Plans</a>
    </nav>
  </header>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 124</titel>
</head>
<BODY>
  <HEADER CLASS="site-header">
    <H1 CLASS="logo">Fitness Hub</H1>
    <NAV CLASS="main-nav">
      <A HREF="#" CLASS="nav-link">Workouts</A>
      <A HREF="#" CLASS="nav-link">Diet Plans</A>
    </NAV>
  </HEADER>
</BODY>`,
totalMistakes: 19,
hint: "Fix charset, title spelling, body casing, missing closing html, header/h1/nav/a tags with CLASS/HREF."
},

// ── M125 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 125</title>
</head>
<body>
  <section class="hero">
    <h1>Last Stretch</h1>
    <p>Almost done with all paragraphs.</p>
    <button class="btn-primary">Keep Going</button>
  </section>
  <footer>
    <p>&copy; 2024 My Company</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <Title>Page 125</Title>
</head>
<BODY>
  <SECTION CLASS="hero">
    <H1>Last Stretch</H1>
    <P>Almost done with all paragraphs.</P>
    <BUTTON CLASS="btn-primary">Keep Going</BUTTON>
  </SECTION>
  <FOOTER>
    <P>&copy; 2024 My Company</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/LANG casing, charset/title attributes, body casing, and section/h1/p/button/footer tags."
},

/* ── Paragraph Mistakes — Medium HTML Data (M126-M150) ──
   Medium: 15-20 mistakes per code

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title)
     'missing' = tag ya attribute ghayab hai
*/

// ── M126 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 126</title>
</head>
<body>
  <header>
    <h1>Music Store</h1>
    <nav>
      <a href="#albums">Albums</a>
      <a href="#artists">Artists</a>
    </nav>
  </header>
  <p>Discover new music daily.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Page 126</titel>
</head>
<BODY>
  <HEADER>
    <H1>Music Store</H1>
    <NAV>
      <A HREF="#albums">Albums</A>
      <A HREF="#artists">Artists</A>
    </NAV>
  </HEADER>
  <P>Discover new music daily.</P>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, LANG/charset attributes, title spelling, and header/h1/nav/a/p tags."
},

// ── M127 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 127</title>
</head>
<body>
  <form action="/donate" method="post">
    <label for="amount">Amount</label>
    <input type="number" id="amount" name="amount" required>
    <button type="submit">Donate</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 127</Title>
</head>
<BODY>
  <FORM ACTION="/donate" METHOD="post">
    <LABEL FOR="amount">Amount</LABEL>
    <INPUT TYPE="number" ID="amount" NAME="amount" REQUIRED>
    <BUTTON TYPE="submit">Donate</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, and form/label/input/button tags with attributes."
},

// ── M128 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 128</title>
</head>
<body>
  <table border="1">
    <tr>
      <th>Player</th>
      <th>Score</th>
    </tr>
    <tr>
      <td>Sara</td>
      <td>95</td>
    </tr>
  </table>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 128</titel>
</head>
<BODY>
  <TABLE BORDER="1">
    <TR>
      <TH>Player</TH>
      <TH>Score</TH>
    </TR>
    <TR>
      <TD>Sara</TD>
      <TD>95</TD>
    </TR>
  </TABLE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html tag, and table/tr/th/td tags."
},

// ── M129 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 129</title>
</head>
<body>
  <div class="container">
    <ul class="list">
      <li>Guitar</li>
      <li>Piano</li>
    </ul>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 129</titel>
</head>
<body>
  <DIV CLASS="container">
    <UL CLASS="list">
      <LI>Guitar</LI>
      <LI>Piano</LI>
    </UL>
  </DIV>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset attribute, title spelling, and div/ul/li tags with CLASS attributes."
},

// ── M130 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 130</title>
</head>
<body>
  <article>
    <h2>Tutorial Heading</h2>
    <p>Learn step by step.</p>
    <img src="tutorial.jpg" alt="Tutorial image">
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 130</Title>
</head>
<BODY>
  <ARTICLE>
    <H2>Tutorial Heading</H2>
    <P>Learn step by step.</P>
    <IMG SRC="tutorial.jpg" ALT="Tutorial image">
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 16,
hint: "Fix html/body casing, title casing, article/h2/p tags, and IMG tag with SRC/ALT attributes."
},

// ── M131 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 131</title>
</head>
<body>
  <select name="theme" id="theme">
    <option value="light">Light Mode</option>
    <option value="dark">Dark Mode</option>
  </select>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 131</titel>
</head>
<BODY>
  <SELECT NAME="theme" ID="theme">
    <OPTION VALUE="light">Light Mode</OPTION>
    <OPTION VALUE="dark">Dark Mode</OPTION>
  </SELECT>
</BODY>`,
totalMistakes: 15,
hint: "Fix title spelling, body casing, missing closing html tag, and select/option tags with attributes."
},

// ── M132 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 132</title>
</head>
<body>
  <video controls width="480" height="270">
    <source src="podcast.mp4" type="video/mp4">
  </video>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 132</Title>
</head>
<body>
  <VIDEO CONTROLS WIDTH="480" HEIGHT="270">
    <SOURCE SRC="podcast.mp4" TYPE="video/mp4">
  </VIDEO>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, video/source tags and all their attributes."
},

// ── M133 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 133</title>
</head>
<body>
  <fieldset>
    <legend>Notification Preference</legend>
    <input type="radio" name="notif" value="email"> Email
    <input type="radio" name="notif" value="sms"> SMS
  </fieldset>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 133</titel>
</head>
<BODY>
  <FIELDSET>
    <LEGEND>Notification Preference</LEGEND>
    <INPUT TYPE="radio" NAME="notif" VALUE="email"> Email
    <INPUT TYPE="radio" NAME="notif" VALUE="sms"> SMS
  </FIELDSET>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, fieldset/legend/input tags and attributes."
},

// ── M134 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 134</title>
</head>
<body>
  <div class="card">
    <h3 class="card-title">Album Name</h3>
    <p class="card-text">Release date info.</p>
    <a href="#" class="card-link">Listen Now</a>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 134</Title>
</head>
<body>
  <DIV CLASS="card">
    <H3 CLASS="card-title">Album Name</H3>
    <P CLASS="card-text">Release date info.</P>
    <A HREF="#" CLASS="card-link">Listen Now</A>
  </DIV>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, div/h3/p/a tags and all CLASS/HREF attributes."
},

// ── M135 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 135</title>
</head>
<body>
  <textarea name="lyrics" rows="6" cols="40" placeholder="Write your lyrics"></textarea>
  <button type="submit">Save</button>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 135</titel>
</head>
<BODY>
  <TEXTAREA NAME="lyrics" ROWS="6" COLS="40" PLACEHOLDER="Write your lyrics"></TEXTAREA>
  <BUTTON TYPE="submit">Save</BUTTON>
</BODY>`,
totalMistakes: 17,
hint: "Fix charset, title spelling, body casing, missing closing html, textarea/button tags and attributes."
},

// ── M136 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 136</title>
</head>
<body>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item"><a href="#playlists">Playlists</a></li>
      <li class="nav-item"><a href="#radio">Radio</a></li>
    </ul>
  </nav>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 136</Title>
</head>
<BODY>
  <NAV CLASS="navbar">
    <UL CLASS="nav-list">
      <LI CLASS="nav-item"><A HREF="#playlists">Playlists</A></LI>
      <LI CLASS="nav-item"><A HREF="#radio">Radio</A></LI>
    </UL>
  </NAV>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body casing, title casing, and nav/ul/li/a tags with CLASS/HREF attributes."
},

// ── M137 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 137</title>
</head>
<body>
  <div class="modal">
    <span class="close">&times;</span>
    <h2>Download Complete</h2>
    <p>Your file is ready to open.</p>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 137</titel>
</head>
<BODY>
  <DIV CLASS="modal">
    <SPAN CLASS="close">&times;</SPAN>
    <H2>Download Complete</H2>
    <P>Your file is ready to open.</P>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, div/span/h2/p tags and CLASS attribute."
},

// ── M138 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 138</title>
</head>
<body>
  <picture>
    <source srcset="album-big.jpg" media="(min-width: 850px)">
    <img src="album-small.jpg" alt="Album cover">
  </picture>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 138</Title>
</head>
<body>
  <PICTURE>
    <SOURCE SRCSET="album-big.jpg" MEDIA="(min-width: 850px)">
    <IMG SRC="album-small.jpg" ALT="Album cover">
  </PICTURE>
</body>
</HTML>`,
totalMistakes: 16,
hint: "Fix html casing, charset/title attributes, picture/source/img tags and all attributes."
},

// ── M139 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 139</title>
</head>
<body>
  <div class="row">
    <div class="col">Genre Rock</div>
    <div class="col">Genre Pop</div>
    <div class="col">Genre Jazz</div>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 139</titel>
</head>
<BODY>
  <DIV CLASS="row">
    <DIV CLASS="col">Genre Rock</DIV>
    <DIV CLASS="col">Genre Pop</DIV>
    <DIV CLASS="col">Genre Jazz</DIV>
  </DIV>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, and all div tags with CLASS attributes."
},

// ── M140 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 140</title>
</head>
<body>
  <details>
    <summary>Track List</summary>
    <p>This album has 12 tracks.</p>
  </details>
  <progress value="40" max="100"></progress>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 140</Title>
</head>
<BODY>
  <DETAILS>
    <SUMMARY>Track List</SUMMARY>
    <P>This album has 12 tracks.</P>
  </DETAILS>
  <PROGRESS VALUE="40" MAX="100"></PROGRESS>
</BODY>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/body casing, title casing, details/summary/p tags, and progress tag with VALUE/MAX attributes."
},

// ── M141 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 141</title>
</head>
<body>
  <aside class="sidebar">
    <h3>Top Charts</h3>
    <ul>
      <li><a href="#song1">Song One</a></li>
      <li><a href="#song2">Song Two</a></li>
    </ul>
  </aside>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <meta Charset="UTF-8">
  <titel>Page 141</titel>
</head>
<BODY>
  <ASIDE CLASS="sidebar">
    <H3>Top Charts</H3>
    <UL>
      <LI><A HREF="#song1">Song One</A></LI>
      <LI><A HREF="#song2">Song Two</A></LI>
    </UL>
  </ASIDE>
</BODY>`,
totalMistakes: 18,
hint: "Fix charset, title spelling, body casing, missing closing html, and aside/h3/ul/li/a tags."
},

// ── M142 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 142</title>
</head>
<body>
  <form action="/search-songs" method="get">
    <input type="text" name="query" placeholder="Song or artist">
    <input type="submit" value="Search">
  </form>
  <hr>
  <p>Search results below.</p>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 142</Title>
</head>
<body>
  <FORM ACTION="/search-songs" METHOD="get">
    <INPUT TYPE="text" NAME="query" PLACEHOLDER="Song or artist">
    <INPUT TYPE="submit" VALUE="Search">
  </FORM>
  <HR>
  <P>Search results below.</P>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html/title casing, form/input tags with attributes, and hr/p tags."
},

// ── M143 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 143</title>
</head>
<body>
  <main>
    <h1>Streaming Stats</h1>
    <div class="stats">
      <span class="stat-number">1.2M</span>
      <span class="stat-label">Plays</span>
    </div>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 143</titel>
</head>
<BODY>
  <MAIN>
    <H1>Streaming Stats</H1>
    <DIV CLASS="stats">
      <SPAN CLASS="stat-number">1.2M</SPAN>
      <SPAN CLASS="stat-label">Plays</SPAN>
    </DIV>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 19,
hint: "Fix html casing, charset/title attributes, body casing, and main/h1/div/span tags with CLASS."
},

// ── M144 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 144</title>
</head>
<body>
  <blockquote cite="https://example.com">
    <p>Music is the language of the soul.</p>
  </blockquote>
  <cite>Unknown</cite>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 144</titel>
</head>
<BODY>
  <BLOCKQUOTE CITE="https://example.com">
    <P>Music is the language of the soul.</P>
  </BLOCKQUOTE>
  <CITE>Unknown</CITE>
</BODY>`,
totalMistakes: 16,
hint: "Fix title spelling, body casing, missing closing html, blockquote/p/cite tags and CITE attribute."
},

// ── M145 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 145</title>
</head>
<body>
  <form action="/playlist" method="post">
    <input type="text" name="playlist_name" placeholder="Playlist name" required>
    <input type="checkbox" name="public" id="public">
    <label for="public">Make public</label>
    <button type="submit">Create</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 145</Title>
</head>
<BODY>
  <FORM ACTION="/playlist" METHOD="post">
    <INPUT TYPE="text" NAME="playlist_name" PLACEHOLDER="Playlist name" REQUIRED>
    <INPUT TYPE="checkbox" NAME="public" ID="public">
    <LABEL FOR="public">Make public</LABEL>
    <BUTTON TYPE="submit">Create</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/body casing, charset/title attributes, and form/input/label/button tags with attributes."
},

// ── M146 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 146</title>
</head>
<body>
  <div class="gallery">
    <figure>
      <img src="concert1.jpg" alt="Concert photo">
      <figcaption>Live Concert</figcaption>
    </figure>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<html>
<head>
  <titel>Page 146</titel>
</head>
<BODY>
  <DIV CLASS="gallery">
    <FIGURE>
      <IMG SRC="concert1.jpg" ALT="Concert photo">
      <FIGCAPTION>Live Concert</FIGCAPTION>
    </FIGURE>
  </DIV>
</BODY>`,
totalMistakes: 17,
hint: "Fix title spelling, body casing, missing closing html, div/figure/img/figcaption tags."
},

// ── M147 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 147</title>
</head>
<body>
  <ul class="menu">
    <li class="menu-item active">Library</li>
    <li class="menu-item">Favorites</li>
    <li class="menu-item">History</li>
  </ul>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <Title>Page 147</Title>
</head>
<body>
  <UL CLASS="menu">
    <LI CLASS="menu-item active">Library</LI>
    <LI CLASS="menu-item">Favorites</LI>
    <LI CLASS="menu-item">History</LI>
  </UL>
</body>
</HTML>`,
totalMistakes: 17,
hint: "Fix html casing, charset/title attributes, and all ul/li tags with CLASS attributes."
},

// ── M148 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <title>Page 148</title>
</head>
<body>
  <form action="/rate" method="post">
    <label for="stars">Rate this song</label>
    <select name="stars" id="stars">
      <option value="5">5 Stars</option>
      <option value="4">4 Stars</option>
    </select>
    <button type="submit">Rate</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <Title>Page 148</Title>
</head>
<BODY>
  <FORM ACTION="/rate" METHOD="post">
    <LABEL FOR="stars">Rate this song</LABEL>
    <SELECT NAME="stars" ID="stars">
      <OPTION VALUE="5">5 Stars</OPTION>
      <OPTION VALUE="4">4 Stars</OPTION>
    </SELECT>
    <BUTTON TYPE="submit">Rate</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 18,
hint: "Fix html/body/title casing, and form/label/select/option/button tags with attributes."
},

// ── M149 ──
{
correct: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page 149</title>
</head>
<body>
  <header class="site-header">
    <h1 class="logo">Podcast Hub</h1>
    <nav class="main-nav">
      <a href="#" class="nav-link">Episodes</a>
      <a href="#" class="nav-link">Hosts</a>
    </nav>
  </header>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML>
<head>
  <meta Charset="UTF-8">
  <titel>Page 149</titel>
</head>
<BODY>
  <HEADER CLASS="site-header">
    <H1 CLASS="logo">Podcast Hub</H1>
    <NAV CLASS="main-nav">
      <A HREF="#" CLASS="nav-link">Episodes</A>
      <A HREF="#" CLASS="nav-link">Hosts</A>
    </NAV>
  </HEADER>
</BODY>`,
totalMistakes: 19,
hint: "Fix charset, title spelling, body casing, missing closing html, header/h1/nav/a tags with CLASS/HREF."
},

// ── M150 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page 150</title>
</head>
<body>
  <section class="hero">
    <h1>150 Paragraphs Done</h1>
    <p>You have completed a major milestone.</p>
    <button class="btn-primary">Celebrate</button>
  </section>
  <footer>
    <p>&copy; 2024 My Company</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <Title>Page 150</Title>
</head>
<BODY>
  <SECTION CLASS="hero">
    <H1>150 Paragraphs Done</H1>
    <P>You have completed a major milestone.</P>
    <BUTTON CLASS="btn-primary">Celebrate</BUTTON>
  </SECTION>
  <FOOTER>
    <P>&copy; 2024 My Company</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 20,
hint: "Fix html/LANG casing, charset/title attributes, body casing, and section/h1/p/button/footer tags."
},

  ],


    Hard: [
/* ── Paragraph Mistakes — Hard HTML Data ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, scirpt → script)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H1 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 1</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="hero">
      <h1>Welcome to My Website</h1>
      <p>This is the hero section of the page.</p>
      <button type="button" class="btn-primary">Get Started</button>
    </section>
    <section id="features">
      <h2>Our Features</h2>
      <div class="card">
        <img src="feature1.jpg" alt="Feature One">
        <h3>Feature One</h3>
        <p>Description of feature one goes here.</p>
      </div>
      <div class="card">
        <img src="feature2.jpg" alt="Feature Two">
        <h3>Feature Two</h3>
        <p>Description of feature two goes here.</p>
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 1</titel>
  <LINK REL="stylesheet" HREF="style.css">
</head>
<BODY>
  <HEADER>
    <NAV>
      <UL>
        <LI><A HREF="index.html">Home</A></LI>
        <LI><A HREF="about.html">About</A></LI>
        <LI><A HREF="contact.html">Contact</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION ID="hero">
      <H1>Welcome to My Website</H1>
      <P>This is the hero section of the page.</P>
      <BUTTON TYPE="button" CLASS="btn-primary">Get Started</BUTTON>
    </SECTION>
    <SECTION ID="features">
      <H2>Our Features</H2>
      <DIV CLASS="card">
        <IMG SRC="feature1.jpg" ALT="Feature One">
        <H3>Feature One</H3>
        <P>Description of feature one goes here.</P>
      </DIV>
      <DIV CLASS="card">
        <IMG SRC="feature2.jpg" ALT="Feature Two">
        <H3>Feature Two</H3>
        <P>Description of feature two goes here.</P>
      </DIV>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 My Website. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "Har tag aur attribute uppercase hai — sab ko lowercase karo. 'titel' ki spelling bhi fix karo aur 'Charset' ko 'charset' karo."
},

// ── H2 ──
{
correct: `<!DOCTYPE html>
<html lang="ur">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Online store">
  <title>Hard Page 2</title>
</head>
<body>
  <header>
    <h1>Online Store</h1>
  </header>
  <main>
    <section>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laptop</td>
            <td>80000</td>
            <td>In Stock</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>40000</td>
            <td>Out of Stock</td>
          </tr>
          <tr>
            <td>Tablet</td>
            <td>30000</td>
            <td>In Stock</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Prices in PKR</td>
          </tr>
        </tfoot>
      </table>
    </section>
  </main>
  <footer>
    <p>Contact us at info@store.com</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="ur">
<head>
  <meta Charset="UTF-8">
  <META NAME="description" CONTENT="Online store">
  <titel>Hard Page 2</titel>
</head>
<BODY>
  <HEADER>
    <H1>Online Store</H1>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Products</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH>Product</TH>
            <TH>Price</TH>
            <TH>Stock</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Laptop</TD>
            <TD>80000</TD>
            <TD>In Stock</TD>
          </TR>
          <TR>
            <TD>Phone</TD>
            <TD>40000</TD>
            <TD>Out of Stock</TD>
          </TR>
          <TR>
            <TD>Tablet</TD>
            <TD>30000</TD>
            <TD>In Stock</TD>
          </TR>
        </TBODY>
        <TFOOT>
          <TR>
            <TD COLSPAN="3">Prices in PKR</TD>
          </TR>
        </TFOOT>
      </TABLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>Contact us at info@store.com</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "Sab tags aur attributes uppercase hain. 'Charset' aur 'titel' bhi galat hain. Sab lowercase karo."
},

// ── H3 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 3</title>
  <style>
    body { font-family: Arial, sans-serif; }
    h1 { color: navy; }
  </style>
</head>
<body>
  <h1>Registration Form</h1>
  <form action="/register" method="post" enctype="multipart/form-data">
    <fieldset>
      <legend>Personal Information</legend>
      <label for="fname">First Name:</label>
      <input type="text" id="fname" name="fname" required placeholder="Enter first name">
      <label for="lname">Last Name:</label>
      <input type="text" id="lname" name="lname" required placeholder="Enter last name">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob">
      <label for="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label for="photo">Upload Photo:</label>
      <input type="file" id="photo" name="photo" accept="image/*">
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </fieldset>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 3</titel>
  <STYLE>
    body { font-family: Arial, sans-serif; }
    h1 { color: navy; }
  </STYLE>
</head>
<BODY>
  <H1>Registration Form</H1>
  <FORM ACTION="/register" METHOD="post" ENCTYPE="multipart/form-data">
    <FIELDSET>
      <LEGEND>Personal Information</LEGEND>
      <LABEL FOR="fname">First Name:</LABEL>
      <INPUT TYPE="text" ID="fname" NAME="fname" REQUIRED PLACEHOLDER="Enter first name">
      <LABEL FOR="lname">Last Name:</LABEL>
      <INPUT TYPE="text" ID="lname" NAME="lname" REQUIRED PLACEHOLDER="Enter last name">
      <LABEL FOR="email">Email:</LABEL>
      <INPUT TYPE="email" ID="email" NAME="email" REQUIRED>
      <LABEL FOR="dob">Date of Birth:</LABEL>
      <INPUT TYPE="date" ID="dob" NAME="dob">
      <LABEL FOR="gender">Gender:</LABEL>
      <SELECT ID="gender" NAME="gender">
        <OPTION VALUE="male">Male</OPTION>
        <OPTION VALUE="female">Female</OPTION>
        <OPTION VALUE="other">Other</OPTION>
      </SELECT>
      <LABEL FOR="photo">Upload Photo:</LABEL>
      <INPUT TYPE="file" ID="photo" NAME="photo" ACCEPT="image/*">
      <BUTTON TYPE="submit">Register</BUTTON>
      <BUTTON TYPE="reset">Clear</BUTTON>
    </FIELDSET>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Form ke andar sab tags aur attributes uppercase hain. STYLE tag bhi uppercase hai. 'Charset' aur 'titel' bhi fix karo."
},

// ── H4 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="blog, html, css">
  <title>Hard Page 4</title>
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
  <nav>
    <a href="home.html">Home</a>
    <a href="blog.html">Blog</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="contact.html">Contact</a>
  </nav>
  <article>
    <h1>My Blog Post</h1>
    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
    <img src="blog-image.jpg" alt="Blog Image" width="600" height="400">
    <p>This is the first paragraph of the blog post. It contains important information.</p>
    <p>This is the second paragraph with more details about the topic.</p>
    <blockquote cite="https://example.com">
      <p>This is a famous quote from someone important.</p>
    </blockquote>
    <ul>
      <li>Key point one</li>
      <li>Key point two</li>
      <li>Key point three</li>
    </ul>
    <p>Read more at <a href="https://example.com" target="_blank" rel="noopener">Example Site</a></p>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <META Charset="UTF-8">
  <META NAME="keywords" CONTENT="blog, html, css">
  <titel>Hard Page 4</titel>
  <LINK REL="icon" HREF="favicon.ico" TYPE="image/x-icon">
</head>
<BODY>
  <NAV>
    <A HREF="home.html">Home</A>
    <A HREF="blog.html">Blog</A>
    <A HREF="portfolio.html">Portfolio</A>
    <A HREF="contact.html">Contact</A>
  </NAV>
  <ARTICLE>
    <H1>My Blog Post</H1>
    <P>Published on <TIME DATETIME="2024-01-15">January 15, 2024</TIME></P>
    <IMG SRC="blog-image.jpg" ALT="Blog Image" WIDTH="600" HEIGHT="400">
    <P>This is the first paragraph of the blog post. It contains important information.</P>
    <P>This is the second paragraph with more details about the topic.</P>
    <BLOCKQUOTE CITE="https://example.com">
      <P>This is a famous quote from someone important.</P>
    </BLOCKQUOTE>
    <UL>
      <LI>Key point one</LI>
      <LI>Key point two</LI>
      <LI>Key point three</LI>
    </UL>
    <P>Read more at <A HREF="https://example.com" TARGET="_blank" REL="noopener">Example Site</A></P>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "Article, nav, blockquote, ul, li sab uppercase hain. META, LINK attributes bhi. 'titel' aur 'Charset' fix karo."
},

// ── H5 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 5</title>
</head>
<body>
  <div id="wrapper">
    <aside>
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
      </ul>
    </aside>
    <main>
      <section id="section1">
        <h2>Section 1</h2>
        <p>Content of section one.</p>
        <figure>
          <img src="img1.jpg" alt="Image 1">
          <figcaption>Figure 1: Description</figcaption>
        </figure>
      </section>
      <section id="section2">
        <h2>Section 2</h2>
        <p>Content of section two.</p>
        <details>
          <summary>More Info</summary>
          <p>Hidden details shown on click.</p>
        </details>
      </section>
      <section id="section3">
        <h2>Section 3</h2>
        <p>Content of section three.</p>
        <progress value="70" max="100"></progress>
      </section>
    </main>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 5</titel>
</head>
<BODY>
  <DIV ID="wrapper">
    <ASIDE>
      <H2>Sidebar</H2>
      <UL>
        <LI><A HREF="#section1">Section 1</A></LI>
        <LI><A HREF="#section2">Section 2</A></LI>
        <LI><A HREF="#section3">Section 3</A></LI>
      </UL>
    </ASIDE>
    <MAIN>
      <SECTION ID="section1">
        <H2>Section 1</H2>
        <P>Content of section one.</P>
        <FIGURE>
          <IMG SRC="img1.jpg" ALT="Image 1">
          <FIGCAPTION>Figure 1: Description</FIGCAPTION>
        </FIGURE>
      </SECTION>
      <SECTION ID="section2">
        <H2>Section 2</H2>
        <P>Content of section two.</P>
        <DETAILS>
          <SUMMARY>More Info</SUMMARY>
          <P>Hidden details shown on click.</P>
        </DETAILS>
      </SECTION>
      <SECTION ID="section3">
        <H2>Section 3</H2>
        <P>Content of section three.</P>
        <PROGRESS VALUE="70" MAX="100"></PROGRESS>
      </SECTION>
    </MAIN>
  </DIV>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "Aside, figure, figcaption, details, summary, progress sab uppercase hain. 'Charset' aur 'titel' bhi galat hain."
},

// ── H6 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 6</title>
  <script src="app.js" defer></script>
</head>
<body>
  <h1>Media Gallery</h1>
  <section>
    <h2>Videos</h2>
    <video width="640" height="360" controls autoplay muted loop>
      <source src="video.mp4" type="video/mp4">
      <source src="video.ogg" type="video/ogg">
      Your browser does not support the video tag.
    </video>
  </section>
  <section>
    <h2>Audio</h2>
    <audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      <source src="audio.ogg" type="audio/ogg">
      Your browser does not support the audio tag.
    </audio>
  </section>
  <section>
    <h2>Embedded Content</h2>
    <iframe src="https://www.youtube.com/embed/abc123" width="560" height="315" allowfullscreen title="YouTube Video"></iframe>
  </section>
  <section>
    <h2>Images</h2>
    <picture>
      <source media="(min-width:768px)" srcset="large.jpg">
      <img src="small.jpg" alt="Responsive Image">
    </picture>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 6</titel>
  <SCRIPT SRC="app.js" DEFER></SCRIPT>
</head>
<BODY>
  <H1>Media Gallery</H1>
  <SECTION>
    <H2>Videos</H2>
    <VIDEO WIDTH="640" HEIGHT="360" CONTROLS AUTOPLAY MUTED LOOP>
      <SOURCE SRC="video.mp4" TYPE="video/mp4">
      <SOURCE SRC="video.ogg" TYPE="video/ogg">
      Your browser does not support the video tag.
    </VIDEO>
  </SECTION>
  <SECTION>
    <H2>Audio</H2>
    <AUDIO CONTROLS>
      <SOURCE SRC="audio.mp3" TYPE="audio/mpeg">
      <SOURCE SRC="audio.ogg" TYPE="audio/ogg">
      Your browser does not support the audio tag.
    </AUDIO>
  </SECTION>
  <SECTION>
    <H2>Embedded Content</H2>
    <IFRAME SRC="https://www.youtube.com/embed/abc123" WIDTH="560" HEIGHT="315" ALLOWFULLSCREEN TITLE="YouTube Video"></IFRAME>
  </SECTION>
  <SECTION>
    <H2>Images</H2>
    <PICTURE>
      <SOURCE MEDIA="(min-width:768px)" SRCSET="large.jpg">
      <IMG SRC="small.jpg" ALT="Responsive Image">
    </PICTURE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Video, audio, iframe, picture, source sab uppercase hain. SCRIPT tag bhi. 'Charset' aur 'titel' galat hain."
},

// ── H7 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 7</title>
</head>
<body>
  <h1>Data and Definitions</h1>
  <section>
    <h2>Definition List</h2>
    <dl>
      <dt>HTML</dt>
      <dd>HyperText Markup Language</dd>
      <dt>CSS</dt>
      <dd>Cascading Style Sheets</dd>
      <dt>JavaScript</dt>
      <dd>A programming language for the web</dd>
    </dl>
  </section>
  <section>
    <h2>Data Table</h2>
    <table border="1" cellpadding="5" cellspacing="0">
      <caption>Student Results</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Subject</th>
          <th scope="col">Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ali</td>
          <td>Math</td>
          <td>95</td>
        </tr>
        <tr>
          <td>Sara</td>
          <td>Science</td>
          <td>88</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <META Charset="UTF-8">
  <titel>Hard Page 7</titel>
</head>
<BODY>
  <H1>Data and Definitions</H1>
  <SECTION>
    <H2>Definition List</H2>
    <DL>
      <DT>HTML</DT>
      <DD>HyperText Markup Language</DD>
      <DT>CSS</DT>
      <DD>Cascading Style Sheets</DD>
      <DT>JavaScript</DT>
      <DD>A programming language for the web</DD>
    </DL>
  </SECTION>
  <SECTION>
    <H2>Data Table</H2>
    <TABLE BORDER="1" CELLPADDING="5" CELLSPACING="0">
      <CAPTION>Student Results</CAPTION>
      <THEAD>
        <TR>
          <TH SCOPE="col">Name</TH>
          <TH SCOPE="col">Subject</TH>
          <TH SCOPE="col">Marks</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Ali</TD>
          <TD>Math</TD>
          <TD>95</TD>
        </TR>
        <TR>
          <TD>Sara</TD>
          <TD>Science</TD>
          <TD>88</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "DL, DT, DD, TABLE, CAPTION, THEAD, TBODY, TR, TH, TD sab uppercase. 'Charset', 'titel', aur META tag bhi fix karo."
},

// ── H8 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 8</title>
</head>
<body>
  <h1>Text Formatting Page</h1>
  <p>This text is <strong>bold</strong> and this is <em>italic</em>.</p>
  <p>This is <mark>highlighted</mark> and this is <del>deleted</del> text.</p>
  <p>This is <ins>inserted</ins> and this is <sub>subscript</sub> text.</p>
  <p>This is <sup>superscript</sup> and this is <small>small</small> text.</p>
  <p>This is <code>inline code</code> and this is <kbd>keyboard input</kbd>.</p>
  <p>This is <abbr title="HyperText Markup Language">HTML</abbr>.</p>
  <p>This is <cite>a citation</cite> and this is <var>a variable</var>.</p>
  <p>This is <samp>sample output</samp> and this is <q>a short quote</q>.</p>
  <p>Use <bdo dir="rtl">this text</bdo> to reverse direction.</p>
  <p><b>Bold</b> without importance and <i>italic</i> without emphasis.</p>
  <p>This is <u>underlined</u> text for annotation.</p>
  <pre>
    This is preformatted
    text that preserves
    spacing and newlines.
  </pre>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 8</titel>
</head>
<BODY>
  <H1>Text Formatting Page</H1>
  <P>This text is <STRONG>bold</STRONG> and this is <EM>italic</EM>.</P>
  <P>This is <MARK>highlighted</MARK> and this is <DEL>deleted</DEL> text.</P>
  <P>This is <INS>inserted</INS> and this is <SUB>subscript</SUB> text.</P>
  <P>This is <SUP>superscript</SUP> and this is <SMALL>small</SMALL> text.</P>
  <P>This is <CODE>inline code</CODE> and this is <KBD>keyboard input</KBD>.</P>
  <P>This is <ABBR TITLE="HyperText Markup Language">HTML</ABBR>.</P>
  <P>This is <CITE>a citation</CITE> and this is <VAR>a variable</VAR>.</P>
  <P>This is <SAMP>sample output</SAMP> and this is <Q>a short quote</Q>.</P>
  <P>Use <BDO DIR="rtl">this text</BDO> to reverse direction.</P>
  <P><B>Bold</B> without importance and <I>italic</I> without emphasis.</P>
  <P>This is <U>underlined</U> text for annotation.</P>
  <PRE>
    This is preformatted
    text that preserves
    spacing and newlines.
  </PRE>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "Strong, em, mark, del, ins, sub, sup, small, code, kbd, abbr, cite, var, samp, q, bdo, b, i, u, pre sab uppercase. 'Charset', 'titel' bhi fix karo."
},

// ── H9 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 9</title>
</head>
<body>
  <h1>Advanced Form Elements</h1>
  <form action="/process" method="get">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" minlength="3" maxlength="20" autocomplete="username">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" minlength="8" autocomplete="new-password">
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="18" max="100" step="1">
    </div>
    <div>
      <label for="website">Website:</label>
      <input type="url" id="website" name="website" placeholder="https://example.com">
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" pattern="[0-9]{11}">
    </div>
    <div>
      <label for="color">Favorite Color:</label>
      <input type="color" id="color" name="color" value="#ff0000">
    </div>
    <div>
      <label for="range">Volume:</label>
      <input type="range" id="range" name="range" min="0" max="100" value="50">
    </div>
    <div>
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
    </div>
    <div>
      <label for="bio">Bio:</label>
      <textarea id="bio" name="bio" rows="4" cols="50"></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 9</titel>
</head>
<BODY>
  <H1>Advanced Form Elements</H1>
  <FORM ACTION="/process" METHOD="get">
    <DIV>
      <LABEL FOR="username">Username:</LABEL>
      <INPUT TYPE="text" ID="username" NAME="username" MINLENGTH="3" MAXLENGTH="20" AUTOCOMPLETE="username">
    </DIV>
    <DIV>
      <LABEL FOR="password">Password:</LABEL>
      <INPUT TYPE="password" ID="password" NAME="password" MINLENGTH="8" AUTOCOMPLETE="new-password">
    </DIV>
    <DIV>
      <LABEL FOR="age">Age:</LABEL>
      <INPUT TYPE="number" ID="age" NAME="age" MIN="18" MAX="100" STEP="1">
    </DIV>
    <DIV>
      <LABEL FOR="website">Website:</LABEL>
      <INPUT TYPE="url" ID="website" NAME="website" PLACEHOLDER="https://example.com">
    </DIV>
    <DIV>
      <LABEL FOR="phone">Phone:</LABEL>
      <INPUT TYPE="tel" ID="phone" NAME="phone" PATTERN="[0-9]{11}">
    </DIV>
    <DIV>
      <LABEL FOR="color">Favorite Color:</LABEL>
      <INPUT TYPE="color" ID="color" NAME="color" VALUE="#ff0000">
    </DIV>
    <DIV>
      <LABEL FOR="range">Volume:</LABEL>
      <INPUT TYPE="range" ID="range" NAME="range" MIN="0" MAX="100" VALUE="50">
    </DIV>
    <DIV>
      <LABEL FOR="search">Search:</LABEL>
      <INPUT TYPE="search" ID="search" NAME="search">
    </DIV>
    <DIV>
      <LABEL FOR="bio">Bio:</LABEL>
      <TEXTAREA ID="bio" NAME="bio" ROWS="4" COLS="50"></TEXTAREA>
    </DIV>
    <BUTTON TYPE="submit">Submit</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Form ke andar LABEL, INPUT, DIV, TEXTAREA, BUTTON sab uppercase hain, sath unke sare attributes bhi. 'Charset' aur 'titel' bhi fix karo."
},

// ── H10 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 10</title>
</head>
<body>
  <h1>Semantic Layout Page</h1>
  <header role="banner">
    <h1>Company Name</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <article>
      <h2>Latest News</h2>
      <p>Here is the latest news from our company.</p>
    </article>
    <aside role="complementary">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/support">Support</a></li>
      </ul>
    </aside>
  </main>
  <footer role="contentinfo">
    <address>
      123 Main Street, Lahore, Pakistan<br>
      Email: <a href="mailto:info@company.com">info@company.com</a>
    </address>
    <small>&copy; 2024 Company Name</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 10</titel>
</head>
<BODY>
  <H1>Semantic Layout Page</H1>
  <HEADER ROLE="banner">
    <H1>Company Name</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/">Home</A></LI>
        <LI><A HREF="/services">Services</A></LI>
        <LI><A HREF="/team">Team</A></LI>
        <LI><A HREF="/blog">Blog</A></LI>
        <LI><A HREF="/contact">Contact</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <ARTICLE>
      <H2>Latest News</H2>
      <P>Here is the latest news from our company.</P>
    </ARTICLE>
    <ASIDE ROLE="complementary">
      <H2>Quick Links</H2>
      <UL>
        <LI><A HREF="/faq">FAQ</A></LI>
        <LI><A HREF="/support">Support</A></LI>
      </UL>
    </ASIDE>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <ADDRESS>
      123 Main Street, Lahore, Pakistan<BR>
      Email: <A HREF="mailto:info@company.com">info@company.com</A>
    </ADDRESS>
    <SMALL>&copy; 2024 Company Name</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "Header, nav, article, aside, footer, address, small sab uppercase. Role attributes bhi uppercase hain. 'Charset', 'titel' fix karo."
},

// ── H11 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 11</title>
</head>
<body>
  <h1>Interactive Elements</h1>
  <section>
    <h2>Accordion</h2>
    <details open>
      <summary>Section A</summary>
      <p>Content for section A.</p>
    </details>
    <details>
      <summary>Section B</summary>
      <p>Content for section B.</p>
    </details>
    <details>
      <summary>Section C</summary>
      <p>Content for section C.</p>
    </details>
  </section>
  <section>
    <h2>Progress and Meter</h2>
    <label for="prog">Progress:</label>
    <progress id="prog" value="60" max="100"></progress>
    <label for="disk">Disk Usage:</label>
    <meter id="disk" value="0.7" min="0" max="1" low="0.3" high="0.8" optimum="0.5"></meter>
  </section>
  <section>
    <h2>Dialog Box</h2>
    <dialog id="myDialog" open>
      <p>This is a dialog box.</p>
      <button type="button">Close</button>
    </dialog>
  </section>
  <section>
    <h2>Datalist Input</h2>
    <label for="browser">Choose browser:</label>
    <input type="text" id="browser" list="browsers">
    <datalist id="browsers">
      <option value="Chrome">
      <option value="Firefox">
      <option value="Safari">
      <option value="Edge">
    </datalist>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 11</titel>
</head>
<BODY>
  <H1>Interactive Elements</H1>
  <SECTION>
    <H2>Accordion</H2>
    <DETAILS OPEN>
      <SUMMARY>Section A</SUMMARY>
      <P>Content for section A.</P>
    </DETAILS>
    <DETAILS>
      <SUMMARY>Section B</SUMMARY>
      <P>Content for section B.</P>
    </DETAILS>
    <DETAILS>
      <SUMMARY>Section C</SUMMARY>
      <P>Content for section C.</P>
    </DETAILS>
  </SECTION>
  <SECTION>
    <H2>Progress and Meter</H2>
    <LABEL FOR="prog">Progress:</LABEL>
    <PROGRESS ID="prog" VALUE="60" MAX="100"></PROGRESS>
    <LABEL FOR="disk">Disk Usage:</LABEL>
    <METER ID="disk" VALUE="0.7" MIN="0" MAX="1" LOW="0.3" HIGH="0.8" OPTIMUM="0.5"></METER>
  </SECTION>
  <SECTION>
    <H2>Dialog Box</H2>
    <DIALOG ID="myDialog" OPEN>
      <P>This is a dialog box.</P>
      <BUTTON TYPE="button">Close</BUTTON>
    </DIALOG>
  </SECTION>
  <SECTION>
    <H2>Datalist Input</H2>
    <LABEL FOR="browser">Choose browser:</LABEL>
    <INPUT TYPE="text" ID="browser" LIST="browsers">
    <DATALIST ID="browsers">
      <OPTION VALUE="Chrome">
      <OPTION VALUE="Firefox">
      <OPTION VALUE="Safari">
      <OPTION VALUE="Edge">
    </DATALIST>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "Details, summary, progress, meter, dialog, datalist, option sab uppercase. Attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H12 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="author" content="Ahmed Ali">
  <meta name="robots" content="index, follow">
  <title>Hard Page 12</title>
  <base href="https://mysite.com/">
  <link rel="stylesheet" href="main.css">
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
  <script src="analytics.js" async></script>
  <noscript>JavaScript is disabled in your browser.</noscript>
</head>
<body>
  <h1>Head Elements Demo</h1>
  <p>This page demonstrates various head elements.</p>
  <p>Base URL is set to mysite.com</p>
  <ul>
    <li>Meta author: Ahmed Ali</li>
    <li>Meta robots: index, follow</li>
    <li>Preloaded font file</li>
    <li>Async analytics script</li>
  </ul>
  <p>All links on this page are relative to the base URL.</p>
  <a href="about">About Page</a>
  <a href="contact">Contact Page</a>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="author" CONTENT="Ahmed Ali">
  <META NAME="robots" CONTENT="index, follow">
  <titel>Hard Page 12</titel>
  <BASE HREF="https://mysite.com/">
  <LINK REL="stylesheet" HREF="main.css">
  <LINK REL="preload" HREF="font.woff2" AS="font" TYPE="font/woff2" CROSSORIGIN>
  <SCRIPT SRC="analytics.js" ASYNC></SCRIPT>
  <NOSCRIPT>JavaScript is disabled in your browser.</NOSCRIPT>
</head>
<BODY>
  <H1>Head Elements Demo</H1>
  <P>This page demonstrates various head elements.</P>
  <P>Base URL is set to mysite.com</P>
  <UL>
    <LI>Meta author: Ahmed Ali</LI>
    <LI>Meta robots: index, follow</LI>
    <LI>Preloaded font file</LI>
    <LI>Async analytics script</LI>
  </UL>
  <P>All links on this page are relative to the base URL.</P>
  <A HREF="about">About Page</A>
  <A HREF="contact">Contact Page</A>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "BASE, LINK, SCRIPT, NOSCRIPT, META sab uppercase head mein hain. Body mein bhi sab uppercase. 'Charset', 'titel' fix karo."
},

// ── H13 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 13</title>
</head>
<body>
  <h1>Canvas and SVG</h1>
  <section>
    <h2>Canvas Element</h2>
    <canvas id="myCanvas" width="400" height="200" style="border:1px solid black">
      Your browser does not support canvas.
    </canvas>
  </section>
  <section>
    <h2>Inline SVG</h2>
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="blue" stroke="navy" stroke-width="3"/>
      <rect x="50" y="50" width="100" height="100" fill="red" opacity="0.5"/>
      <line x1="0" y1="0" x2="200" y2="200" stroke="green" stroke-width="2"/>
      <text x="50" y="150" font-size="20" fill="white">Hello SVG</text>
    </svg>
  </section>
  <section>
    <h2>Map and Area</h2>
    <img src="map.jpg" alt="Clickable Map" usemap="#imagemap" width="400" height="300">
    <map name="imagemap">
      <area shape="rect" coords="0,0,100,100" href="area1.html" alt="Area 1">
      <area shape="circle" coords="200,150,50" href="area2.html" alt="Area 2">
    </map>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 13</titel>
</head>
<BODY>
  <H1>Canvas and SVG</H1>
  <SECTION>
    <H2>Canvas Element</H2>
    <CANVAS ID="myCanvas" WIDTH="400" HEIGHT="200" STYLE="border:1px solid black">
      Your browser does not support canvas.
    </CANVAS>
  </SECTION>
  <SECTION>
    <H2>Inline SVG</H2>
    <SVG WIDTH="200" HEIGHT="200" VIEWBOX="0 0 200 200" XMLNS="http://www.w3.org/2000/svg">
      <CIRCLE CX="100" CY="100" R="80" FILL="blue" STROKE="navy" STROKE-WIDTH="3"/>
      <RECT X="50" Y="50" WIDTH="100" HEIGHT="100" FILL="red" OPACITY="0.5"/>
      <LINE X1="0" Y1="0" X2="200" Y2="200" STROKE="green" STROKE-WIDTH="2"/>
      <TEXT X="50" Y="150" FONT-SIZE="20" FILL="white">Hello SVG</TEXT>
    </SVG>
  </SECTION>
  <SECTION>
    <H2>Map and Area</H2>
    <IMG SRC="map.jpg" ALT="Clickable Map" USEMAP="#imagemap" WIDTH="400" HEIGHT="300">
    <MAP NAME="imagemap">
      <AREA SHAPE="rect" COORDS="0,0,100,100" HREF="area1.html" ALT="Area 1">
      <AREA SHAPE="circle" COORDS="200,150,50" HREF="area2.html" ALT="Area 2">
    </MAP>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "Canvas, SVG, circle, rect, line, text, map, area sab uppercase. Attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H14 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 14</title>
</head>
<body>
  <h1>Accessibility Features</h1>
  <section aria-labelledby="nav-heading">
    <h2 id="nav-heading">Navigation</h2>
    <nav aria-label="Primary">
      <ul role="list">
        <li role="listitem"><a href="/" aria-current="page">Home</a></li>
        <li role="listitem"><a href="/about">About</a></li>
        <li role="listitem"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </section>
  <section>
    <h2>Form with Accessibility</h2>
    <form>
      <div role="group" aria-labelledby="grp1">
        <h3 id="grp1">Personal Info</h3>
        <label for="name">Full Name <span aria-hidden="true">*</span></label>
        <input type="text" id="name" name="name" aria-required="true" aria-describedby="name-hint">
        <p id="name-hint">Enter your full legal name.</p>
      </div>
      <div>
        <button type="submit" aria-label="Submit the registration form">Submit</button>
      </div>
    </form>
  </section>
  <section>
    <h2>Skip Link</h2>
    <a href="#maincontent" class="skip-link">Skip to main content</a>
    <div id="maincontent" tabindex="-1">
      <p>Main content starts here.</p>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 14</titel>
</head>
<BODY>
  <H1>Accessibility Features</H1>
  <SECTION ARIA-LABELLEDBY="nav-heading">
    <H2 ID="nav-heading">Navigation</H2>
    <NAV ARIA-LABEL="Primary">
      <UL ROLE="list">
        <LI ROLE="listitem"><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI ROLE="listitem"><A HREF="/about">About</A></LI>
        <LI ROLE="listitem"><A HREF="/contact">Contact</A></LI>
      </UL>
    </NAV>
  </SECTION>
  <SECTION>
    <H2>Form with Accessibility</H2>
    <FORM>
      <DIV ROLE="group" ARIA-LABELLEDBY="grp1">
        <H3 ID="grp1">Personal Info</H3>
        <LABEL FOR="name">Full Name <SPAN ARIA-HIDDEN="true">*</SPAN></LABEL>
        <INPUT TYPE="text" ID="name" NAME="name" ARIA-REQUIRED="true" ARIA-DESCRIBEDBY="name-hint">
        <P ID="name-hint">Enter your full legal name.</P>
      </DIV>
      <DIV>
        <BUTTON TYPE="submit" ARIA-LABEL="Submit the registration form">Submit</BUTTON>
      </DIV>
    </FORM>
  </SECTION>
  <SECTION>
    <H2>Skip Link</H2>
    <A HREF="#maincontent" CLASS="skip-link">Skip to main content</A>
    <DIV ID="maincontent" TABINDEX="-1">
      <P>Main content starts here.</P>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "Accessibility aria attributes bhi uppercase hain (ARIA-LABEL, ARIA-REQUIRED, etc). Sab tags bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H15 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete HTML page example">
  <meta name="author" content="Web Developer">
  <title>Hard Page 15</title>
  <link rel="stylesheet" href="style.css">
  <link rel="canonical" href="https://mysite.com/page15">
  <script src="main.js" defer></script>
</head>
<body>
  <header>
    <h1>Complete Website</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="banner">
      <h2>Welcome Banner</h2>
      <p>This is the main banner section.</p>
      <a href="/shop" class="cta-button">Shop Now</a>
    </section>
    <section id="products">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <article class="product-card">
          <img src="prod1.jpg" alt="Product 1" loading="lazy">
          <h3>Product One</h3>
          <p>Rs. 1500</p>
          <button type="button">Add to Cart</button>
        </article>
        <article class="product-card">
          <img src="prod2.jpg" alt="Product 2" loading="lazy">
          <h3>Product Two</h3>
          <p>Rs. 2500</p>
          <button type="button">Add to Cart</button>
        </article>
        <article class="product-card">
          <img src="prod3.jpg" alt="Product 3" loading="lazy">
          <h3>Product Three</h3>
          <p>Rs. 3500</p>
          <button type="button">Add to Cart</button>
        </article>
      </div>
    </section>
    <section id="newsletter">
      <h2>Subscribe Newsletter</h2>
      <form action="/subscribe" method="post">
        <label for="sub-email">Email:</label>
        <input type="email" id="sub-email" name="email" required placeholder="your@email.com">
        <button type="submit">Subscribe</button>
      </form>
    </section>
  </main>
  <footer>
    <div class="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/sitemap">Sitemap</a></li>
      </ul>
    </div>
    <p>&copy; 2024 Complete Website. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete HTML page example">
  <META NAME="author" CONTENT="Web Developer">
  <titel>Hard Page 15</titel>
  <LINK REL="stylesheet" HREF="style.css">
  <LINK REL="canonical" HREF="https://mysite.com/page15">
  <SCRIPT SRC="main.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER>
    <H1>Complete Website</H1>
    <NAV>
      <UL>
        <LI><A HREF="/">Home</A></LI>
        <LI><A HREF="/shop">Shop</A></LI>
        <LI><A HREF="/gallery">Gallery</A></LI>
        <LI><A HREF="/contact">Contact</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION ID="banner">
      <H2>Welcome Banner</H2>
      <P>This is the main banner section.</P>
      <A HREF="/shop" CLASS="cta-button">Shop Now</A>
    </SECTION>
    <SECTION ID="products">
      <H2>Featured Products</H2>
      <DIV CLASS="product-grid">
        <ARTICLE CLASS="product-card">
          <IMG SRC="prod1.jpg" ALT="Product 1" LOADING="lazy">
          <H3>Product One</H3>
          <P>Rs. 1500</P>
          <BUTTON TYPE="button">Add to Cart</BUTTON>
        </ARTICLE>
        <ARTICLE CLASS="product-card">
          <IMG SRC="prod2.jpg" ALT="Product 2" LOADING="lazy">
          <H3>Product Two</H3>
          <P>Rs. 2500</P>
          <BUTTON TYPE="button">Add to Cart</BUTTON>
        </ARTICLE>
        <ARTICLE CLASS="product-card">
          <IMG SRC="prod3.jpg" ALT="Product 3" LOADING="lazy">
          <H3>Product Three</H3>
          <P>Rs. 3500</P>
          <BUTTON TYPE="button">Add to Cart</BUTTON>
        </ARTICLE>
      </DIV>
    </SECTION>
    <SECTION ID="newsletter">
      <H2>Subscribe Newsletter</H2>
      <FORM ACTION="/subscribe" METHOD="post">
        <LABEL FOR="sub-email">Email:</LABEL>
        <INPUT TYPE="email" ID="sub-email" NAME="email" REQUIRED PLACEHOLDER="your@email.com">
        <BUTTON TYPE="submit">Subscribe</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER>
    <DIV CLASS="footer-links">
      <H3>Quick Links</H3>
      <UL>
        <LI><A HREF="/privacy">Privacy Policy</A></LI>
        <LI><A HREF="/terms">Terms of Service</A></LI>
        <LI><A HREF="/sitemap">Sitemap</A></LI>
      </UL>
    </DIV>
    <P>&copy; 2024 Complete Website. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye sabse bara page hai. Sare tags aur sare attributes uppercase hain. Header se footer tak sab lowercase karo. 'Charset', 'titel', META, LINK, SCRIPT bhi fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H16–H30) ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code
   'wrong'   field = galat version

   Mistakes:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, scirpt → script)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H16 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 16</title>
</head>
<body>
  <h1>Responsive Image Gallery</h1>
  <section>
    <h2>Photo Album</h2>
    <div class="gallery">
      <figure>
        <img src="photo1.jpg" alt="Mountain View" width="300" height="200" loading="lazy">
        <figcaption>Mountain View</figcaption>
      </figure>
      <figure>
        <img src="photo2.jpg" alt="Ocean Sunset" width="300" height="200" loading="lazy">
        <figcaption>Ocean Sunset</figcaption>
      </figure>
      <figure>
        <img src="photo3.jpg" alt="City Lights" width="300" height="200" loading="lazy">
        <figcaption>City Lights</figcaption>
      </figure>
      <figure>
        <img src="photo4.jpg" alt="Forest Trail" width="300" height="200" loading="lazy">
        <figcaption>Forest Trail</figcaption>
      </figure>
      <figure>
        <img src="photo5.jpg" alt="Desert Dunes" width="300" height="200" loading="lazy">
        <figcaption>Desert Dunes</figcaption>
      </figure>
      <figure>
        <img src="photo6.jpg" alt="Snow Peak" width="300" height="200" loading="lazy">
        <figcaption>Snow Peak</figcaption>
      </figure>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 16</titel>
</head>
<BODY>
  <H1>Responsive Image Gallery</H1>
  <SECTION>
    <H2>Photo Album</H2>
    <DIV CLASS="gallery">
      <FIGURE>
        <IMG SRC="photo1.jpg" ALT="Mountain View" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Mountain View</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="photo2.jpg" ALT="Ocean Sunset" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Ocean Sunset</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="photo3.jpg" ALT="City Lights" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>City Lights</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="photo4.jpg" ALT="Forest Trail" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Forest Trail</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="photo5.jpg" ALT="Desert Dunes" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Desert Dunes</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="photo6.jpg" ALT="Snow Peak" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Snow Peak</FIGCAPTION>
      </FIGURE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "Figure, figcaption, div, section, img aur unke sare attributes uppercase hain. 'Charset', 'titel', HTML, BODY bhi fix karo."
},

// ── H17 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 17</title>
</head>
<body>
  <h1>Nested Lists Page</h1>
  <section>
    <h2>Course Outline</h2>
    <ol type="1">
      <li>Introduction to HTML
        <ul>
          <li>What is HTML?</li>
          <li>History of HTML</li>
          <li>HTML vs XHTML</li>
        </ul>
      </li>
      <li>HTML Elements
        <ul>
          <li>Block Elements
            <ol type="a">
              <li>div</li>
              <li>p</li>
              <li>h1 to h6</li>
            </ol>
          </li>
          <li>Inline Elements
            <ol type="a">
              <li>span</li>
              <li>a</li>
              <li>strong</li>
            </ol>
          </li>
        </ul>
      </li>
      <li>HTML Attributes
        <ul>
          <li>Global Attributes</li>
          <li>Event Attributes</li>
          <li>Custom Data Attributes</li>
        </ul>
      </li>
    </ol>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 17</titel>
</head>
<BODY>
  <H1>Nested Lists Page</H1>
  <SECTION>
    <H2>Course Outline</H2>
    <OL TYPE="1">
      <LI>Introduction to HTML
        <UL>
          <LI>What is HTML?</LI>
          <LI>History of HTML</LI>
          <LI>HTML vs XHTML</LI>
        </UL>
      </LI>
      <LI>HTML Elements
        <UL>
          <LI>Block Elements
            <OL TYPE="a">
              <LI>div</LI>
              <LI>p</LI>
              <LI>h1 to h6</LI>
            </OL>
          </LI>
          <LI>Inline Elements
            <OL TYPE="a">
              <LI>span</LI>
              <LI>a</LI>
              <LI>strong</LI>
            </OL>
          </LI>
        </UL>
      </LI>
      <LI>HTML Attributes
        <UL>
          <LI>Global Attributes</LI>
          <LI>Event Attributes</LI>
          <LI>Custom Data Attributes</LI>
        </UL>
      </LI>
    </OL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "OL, UL, LI sab uppercase hain — nested lists mein bhi. TYPE attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H18 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 18</title>
</head>
<body>
  <h1>Contact Page</h1>
  <section>
    <h2>Get In Touch</h2>
    <address>
      <p><strong>Company Name:</strong> Tech Solutions Pvt Ltd</p>
      <p><strong>Address:</strong> 45 Garden Town, Lahore</p>
      <p><strong>Phone:</strong> <a href="tel:+923001234567">+92-300-1234567</a></p>
      <p><strong>Email:</strong> <a href="mailto:info@techsolutions.com">info@techsolutions.com</a></p>
      <p><strong>Website:</strong> <a href="https://techsolutions.com" target="_blank">techsolutions.com</a></p>
    </address>
  </section>
  <section>
    <h2>Send a Message</h2>
    <form action="/send" method="post">
      <label for="cname">Your Name:</label>
      <input type="text" id="cname" name="cname" required>
      <label for="cemail">Your Email:</label>
      <input type="email" id="cemail" name="cemail" required>
      <label for="csubject">Subject:</label>
      <input type="text" id="csubject" name="csubject">
      <label for="cmessage">Message:</label>
      <textarea id="cmessage" name="cmessage" rows="5" cols="40" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 18</titel>
</head>
<BODY>
  <H1>Contact Page</H1>
  <SECTION>
    <H2>Get In Touch</H2>
    <ADDRESS>
      <P><STRONG>Company Name:</STRONG> Tech Solutions Pvt Ltd</P>
      <P><STRONG>Address:</STRONG> 45 Garden Town, Lahore</P>
      <P><STRONG>Phone:</STRONG> <A HREF="tel:+923001234567">+92-300-1234567</A></P>
      <P><STRONG>Email:</STRONG> <A HREF="mailto:info@techsolutions.com">info@techsolutions.com</A></P>
      <P><STRONG>Website:</STRONG> <A HREF="https://techsolutions.com" TARGET="_blank">techsolutions.com</A></P>
    </ADDRESS>
  </SECTION>
  <SECTION>
    <H2>Send a Message</H2>
    <FORM ACTION="/send" METHOD="post">
      <LABEL FOR="cname">Your Name:</LABEL>
      <INPUT TYPE="text" ID="cname" NAME="cname" REQUIRED>
      <LABEL FOR="cemail">Your Email:</LABEL>
      <INPUT TYPE="email" ID="cemail" NAME="cemail" REQUIRED>
      <LABEL FOR="csubject">Subject:</LABEL>
      <INPUT TYPE="text" ID="csubject" NAME="csubject">
      <LABEL FOR="cmessage">Message:</LABEL>
      <TEXTAREA ID="cmessage" NAME="cmessage" ROWS="5" COLS="40" REQUIRED></TEXTAREA>
      <BUTTON TYPE="submit">Send Message</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "Address, strong, form, label, input, textarea sab uppercase. 'Charset', 'titel' bhi fix karo. TARGET bhi lowercase hona chahiye."
},

// ── H19 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 19</title>
</head>
<body>
  <h1>Pricing Table</h1>
  <section>
    <h2>Choose Your Plan</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Basic</th>
          <th>Pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Users</td>
          <td>1</td>
          <td>5</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>5 GB</td>
          <td>50 GB</td>
          <td>500 GB</td>
        </tr>
        <tr>
          <td>Support</td>
          <td>Email</td>
          <td>Chat</td>
          <td>24/7 Phone</td>
        </tr>
        <tr>
          <td>API Access</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Custom Domain</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Price/Month</td>
          <td>Free</td>
          <td>Rs. 999</td>
          <td>Rs. 4999</td>
        </tr>
      </tfoot>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <META Charset="UTF-8">
  <titel>Hard Page 19</titel>
</head>
<BODY>
  <H1>Pricing Table</H1>
  <SECTION>
    <H2>Choose Your Plan</H2>
    <TABLE>
      <THEAD>
        <TR>
          <TH>Feature</TH>
          <TH>Basic</TH>
          <TH>Pro</TH>
          <TH>Enterprise</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Users</TD>
          <TD>1</TD>
          <TD>5</TD>
          <TD>Unlimited</TD>
        </TR>
        <TR>
          <TD>Storage</TD>
          <TD>5 GB</TD>
          <TD>50 GB</TD>
          <TD>500 GB</TD>
        </TR>
        <TR>
          <TD>Support</TD>
          <TD>Email</TD>
          <TD>Chat</TD>
          <TD>24/7 Phone</TD>
        </TR>
        <TR>
          <TD>API Access</TD>
          <TD>No</TD>
          <TD>Yes</TD>
          <TD>Yes</TD>
        </TR>
        <TR>
          <TD>Custom Domain</TD>
          <TD>No</TD>
          <TD>Yes</TD>
          <TD>Yes</TD>
        </TR>
      </TBODY>
      <TFOOT>
        <TR>
          <TD>Price/Month</TD>
          <TD>Free</TD>
          <TD>Rs. 999</TD>
          <TD>Rs. 4999</TD>
        </TR>
      </TFOOT>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "TABLE, THEAD, TBODY, TFOOT, TR, TH, TD sab uppercase. 'Charset', 'titel', HTML, BODY, SECTION bhi fix karo."
},

// ── H20 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 20</title>
</head>
<body>
  <h1>Quiz Application</h1>
  <form id="quiz-form" action="/submit-quiz" method="post">
    <fieldset>
      <legend>Question 1</legend>
      <p>What does HTML stand for?</p>
      <label><input type="radio" name="q1" value="a"> HyperText Markup Language</label>
      <label><input type="radio" name="q1" value="b"> HighText Machine Language</label>
      <label><input type="radio" name="q1" value="c"> HyperText Machine Language</label>
    </fieldset>
    <fieldset>
      <legend>Question 2</legend>
      <p>Which tag is used for the largest heading?</p>
      <label><input type="radio" name="q2" value="a"> h6</label>
      <label><input type="radio" name="q2" value="b"> h1</label>
      <label><input type="radio" name="q2" value="c"> head</label>
    </fieldset>
    <fieldset>
      <legend>Question 3</legend>
      <p>Select all correct HTML tags:</p>
      <label><input type="checkbox" name="q3" value="p"> &lt;p&gt;</label>
      <label><input type="checkbox" name="q3" value="div"> &lt;div&gt;</label>
      <label><input type="checkbox" name="q3" value="xyz"> &lt;xyz&gt;</label>
      <label><input type="checkbox" name="q3" value="span"> &lt;span&gt;</label>
    </fieldset>
    <button type="submit">Submit Quiz</button>
    <button type="reset">Reset</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 20</titel>
</head>
<BODY>
  <H1>Quiz Application</H1>
  <FORM ID="quiz-form" ACTION="/submit-quiz" METHOD="post">
    <FIELDSET>
      <LEGEND>Question 1</LEGEND>
      <P>What does HTML stand for?</P>
      <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="a"> HyperText Markup Language</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="b"> HighText Machine Language</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="c"> HyperText Machine Language</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Question 2</LEGEND>
      <P>Which tag is used for the largest heading?</P>
      <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="a"> h6</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="b"> h1</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="c"> head</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Question 3</LEGEND>
      <P>Select all correct HTML tags:</P>
      <LABEL><INPUT TYPE="checkbox" NAME="q3" VALUE="p"> &lt;p&gt;</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="q3" VALUE="div"> &lt;div&gt;</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="q3" VALUE="xyz"> &lt;xyz&gt;</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="q3" VALUE="span"> &lt;span&gt;</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Submit Quiz</BUTTON>
    <BUTTON TYPE="reset">Reset</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. Radio aur checkbox inputs ke saath NAME, VALUE, TYPE bhi. 'Charset', 'titel' fix karo."
},

// ── H21 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 21</title>
</head>
<body>
  <h1>Portfolio Page</h1>
  <header>
    <img src="avatar.jpg" alt="Profile Picture" class="avatar" width="100" height="100">
    <h2>Muhammad Ahmed</h2>
    <p>Full Stack Web Developer</p>
  </header>
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>HTML5 &amp; CSS3</li>
      <li>JavaScript &amp; TypeScript</li>
      <li>React &amp; Vue</li>
      <li>Node.js &amp; Express</li>
      <li>MySQL &amp; MongoDB</li>
    </ul>
  </section>
  <section id="projects">
    <h2>Projects</h2>
    <article>
      <h3>Project One</h3>
      <p>An e-commerce website built with React and Node.js.</p>
      <a href="https://project1.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </article>
    <article>
      <h3>Project Two</h3>
      <p>A blog platform using Vue and MongoDB.</p>
      <a href="https://project2.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </article>
  </section>
  <section id="education">
    <h2>Education</h2>
    <dl>
      <dt>BS Computer Science</dt>
      <dd>University of Punjab, 2020–2024</dd>
      <dt>FSc Pre-Engineering</dt>
      <dd>Govt College Lahore, 2018–2020</dd>
    </dl>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 21</titel>
</head>
<BODY>
  <H1>Portfolio Page</H1>
  <HEADER>
    <IMG SRC="avatar.jpg" ALT="Profile Picture" CLASS="avatar" WIDTH="100" HEIGHT="100">
    <H2>Muhammad Ahmed</H2>
    <P>Full Stack Web Developer</P>
  </HEADER>
  <SECTION ID="skills">
    <H2>Skills</H2>
    <UL>
      <LI>HTML5 &amp; CSS3</LI>
      <LI>JavaScript &amp; TypeScript</LI>
      <LI>React &amp; Vue</LI>
      <LI>Node.js &amp; Express</LI>
      <LI>MySQL &amp; MongoDB</LI>
    </UL>
  </SECTION>
  <SECTION ID="projects">
    <H2>Projects</H2>
    <ARTICLE>
      <H3>Project One</H3>
      <P>An e-commerce website built with React and Node.js.</P>
      <A HREF="https://project1.com" TARGET="_blank" REL="noopener noreferrer">Live Demo</A>
    </ARTICLE>
    <ARTICLE>
      <H3>Project Two</H3>
      <P>A blog platform using Vue and MongoDB.</P>
      <A HREF="https://project2.com" TARGET="_blank" REL="noopener noreferrer">Live Demo</A>
    </ARTICLE>
  </SECTION>
  <SECTION ID="education">
    <H2>Education</H2>
    <DL>
      <DT>BS Computer Science</DT>
      <DD>University of Punjab, 2020–2024</DD>
      <DT>FSc Pre-Engineering</DT>
      <DD>Govt College Lahore, 2018–2020</DD>
    </DL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "Header, img, section, article, dl, dt, dd, ul, li sab uppercase. Attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H22 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 22</title>
</head>
<body>
  <h1>Login and Signup Page</h1>
  <section id="login">
    <h2>Login</h2>
    <form action="/login" method="post" autocomplete="on">
      <label for="login-email">Email:</label>
      <input type="email" id="login-email" name="email" autocomplete="email" required>
      <label for="login-pass">Password:</label>
      <input type="password" id="login-pass" name="password" autocomplete="current-password" required>
      <label>
        <input type="checkbox" name="remember"> Remember Me
      </label>
      <a href="/forgot-password">Forgot Password?</a>
      <button type="submit">Login</button>
    </form>
  </section>
  <hr>
  <section id="signup">
    <h2>Create Account</h2>
    <form action="/signup" method="post" autocomplete="off">
      <label for="su-name">Full Name:</label>
      <input type="text" id="su-name" name="fullname" required>
      <label for="su-email">Email:</label>
      <input type="email" id="su-email" name="email" required>
      <label for="su-pass">Password:</label>
      <input type="password" id="su-pass" name="password" minlength="8" required>
      <label for="su-confirm">Confirm Password:</label>
      <input type="password" id="su-confirm" name="confirm" minlength="8" required>
      <button type="submit">Create Account</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 22</titel>
</head>
<BODY>
  <H1>Login and Signup Page</H1>
  <SECTION ID="login">
    <H2>Login</H2>
    <FORM ACTION="/login" METHOD="post" AUTOCOMPLETE="on">
      <LABEL FOR="login-email">Email:</LABEL>
      <INPUT TYPE="email" ID="login-email" NAME="email" AUTOCOMPLETE="email" REQUIRED>
      <LABEL FOR="login-pass">Password:</LABEL>
      <INPUT TYPE="password" ID="login-pass" NAME="password" AUTOCOMPLETE="current-password" REQUIRED>
      <LABEL>
        <INPUT TYPE="checkbox" NAME="remember"> Remember Me
      </LABEL>
      <A HREF="/forgot-password">Forgot Password?</A>
      <BUTTON TYPE="submit">Login</BUTTON>
    </FORM>
  </SECTION>
  <HR>
  <SECTION ID="signup">
    <H2>Create Account</H2>
    <FORM ACTION="/signup" METHOD="post" AUTOCOMPLETE="off">
      <LABEL FOR="su-name">Full Name:</LABEL>
      <INPUT TYPE="text" ID="su-name" NAME="fullname" REQUIRED>
      <LABEL FOR="su-email">Email:</LABEL>
      <INPUT TYPE="email" ID="su-email" NAME="email" REQUIRED>
      <LABEL FOR="su-pass">Password:</LABEL>
      <INPUT TYPE="password" ID="su-pass" NAME="password" MINLENGTH="8" REQUIRED>
      <LABEL FOR="su-confirm">Confirm Password:</LABEL>
      <INPUT TYPE="password" ID="su-confirm" NAME="confirm" MINLENGTH="8" REQUIRED>
      <BUTTON TYPE="submit">Create Account</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Do alag forms hain — dono mein sare tags aur attributes uppercase. HR, AUTOCOMPLETE, MINLENGTH bhi. 'Charset', 'titel' fix karo."
},

// ── H23 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 23</title>
</head>
<body>
  <h1>News Website</h1>
  <header>
    <h1>Daily Times</h1>
    <p>Your trusted source for news</p>
  </header>
  <main>
    <section class="breaking-news">
      <h2>Breaking News</h2>
      <marquee>Breaking: Major earthquake hits coastal region — 5.8 magnitude recorded</marquee>
    </section>
    <section class="top-stories">
      <h2>Top Stories</h2>
      <article>
        <h3>Economy Grows by 4%</h3>
        <p>The national economy showed strong growth this quarter.</p>
        <time datetime="2024-03-10">March 10, 2024</time>
        <a href="/economy">Read More</a>
      </article>
      <article>
        <h3>New Technology Bill Passed</h3>
        <p>Parliament approved a new digital infrastructure bill.</p>
        <time datetime="2024-03-09">March 9, 2024</time>
        <a href="/tech">Read More</a>
      </article>
      <article>
        <h3>Sports: Pakistan Wins Series</h3>
        <p>Pakistan cricket team won the test series 2-1.</p>
        <time datetime="2024-03-08">March 8, 2024</time>
        <a href="/sports">Read More</a>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Daily Times. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 23</titel>
</head>
<BODY>
  <H1>News Website</H1>
  <HEADER>
    <H1>Daily Times</H1>
    <P>Your trusted source for news</P>
  </HEADER>
  <MAIN>
    <SECTION CLASS="breaking-news">
      <H2>Breaking News</H2>
      <MARQUEE>Breaking: Major earthquake hits coastal region — 5.8 magnitude recorded</MARQUEE>
    </SECTION>
    <SECTION CLASS="top-stories">
      <H2>Top Stories</H2>
      <ARTICLE>
        <H3>Economy Grows by 4%</H3>
        <P>The national economy showed strong growth this quarter.</P>
        <TIME DATETIME="2024-03-10">March 10, 2024</TIME>
        <A HREF="/economy">Read More</A>
      </ARTICLE>
      <ARTICLE>
        <H3>New Technology Bill Passed</H3>
        <P>Parliament approved a new digital infrastructure bill.</P>
        <TIME DATETIME="2024-03-09">March 9, 2024</TIME>
        <A HREF="/tech">Read More</A>
      </ARTICLE>
      <ARTICLE>
        <H3>Sports: Pakistan Wins Series</H3>
        <P>Pakistan cricket team won the test series 2-1.</P>
        <TIME DATETIME="2024-03-08">March 8, 2024</TIME>
        <A HREF="/sports">Read More</A>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Daily Times. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "MARQUEE, TIME, ARTICLE sab uppercase. Header, main, footer, section, h1-h3 bhi. 'Charset', 'titel', DATETIME attribute fix karo."
},

// ── H24 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 24</title>
</head>
<body>
  <h1>Recipe Website</h1>
  <article>
    <h2>Chicken Biryani Recipe</h2>
    <img src="biryani.jpg" alt="Chicken Biryani" width="500" height="350">
    <section>
      <h3>Ingredients</h3>
      <ul>
        <li>1 kg Chicken</li>
        <li>3 cups Basmati Rice</li>
        <li>2 Onions, sliced</li>
        <li>4 tbsp Oil</li>
        <li>1 tsp Salt</li>
        <li>Whole Spices (cloves, cardamom, cinnamon)</li>
      </ul>
    </section>
    <section>
      <h3>Instructions</h3>
      <ol>
        <li>Wash and soak rice for 30 minutes.</li>
        <li>Fry onions until golden brown.</li>
        <li>Add chicken and spices, cook for 15 minutes.</li>
        <li>Boil rice until 70% done.</li>
        <li>Layer rice over chicken mixture.</li>
        <li>Cover and cook on low heat for 20 minutes.</li>
        <li>Serve hot with raita.</li>
      </ol>
    </section>
    <section>
      <h3>Nutrition Info</h3>
      <table>
        <tr><th>Nutrient</th><th>Per Serving</th></tr>
        <tr><td>Calories</td><td>450 kcal</td></tr>
        <tr><td>Protein</td><td>28g</td></tr>
        <tr><td>Carbs</td><td>55g</td></tr>
        <tr><td>Fat</td><td>12g</td></tr>
      </table>
    </section>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 24</titel>
</head>
<BODY>
  <H1>Recipe Website</H1>
  <ARTICLE>
    <H2>Chicken Biryani Recipe</H2>
    <IMG SRC="biryani.jpg" ALT="Chicken Biryani" WIDTH="500" HEIGHT="350">
    <SECTION>
      <H3>Ingredients</H3>
      <UL>
        <LI>1 kg Chicken</LI>
        <LI>3 cups Basmati Rice</LI>
        <LI>2 Onions, sliced</LI>
        <LI>4 tbsp Oil</LI>
        <LI>1 tsp Salt</LI>
        <LI>Whole Spices (cloves, cardamom, cinnamon)</LI>
      </UL>
    </SECTION>
    <SECTION>
      <H3>Instructions</H3>
      <OL>
        <LI>Wash and soak rice for 30 minutes.</LI>
        <LI>Fry onions until golden brown.</LI>
        <LI>Add chicken and spices, cook for 15 minutes.</LI>
        <LI>Boil rice until 70% done.</LI>
        <LI>Layer rice over chicken mixture.</LI>
        <LI>Cover and cook on low heat for 20 minutes.</LI>
        <LI>Serve hot with raita.</LI>
      </OL>
    </SECTION>
    <SECTION>
      <H3>Nutrition Info</H3>
      <TABLE>
        <TR><TH>Nutrient</TH><TH>Per Serving</TH></TR>
        <TR><TD>Calories</TD><TD>450 kcal</TD></TR>
        <TR><TD>Protein</TD><TD>28g</TD></TR>
        <TR><TD>Carbs</TD><TD>55g</TD></TR>
        <TR><TD>Fat</TD><TD>12g</TD></TR>
      </TABLE>
    </SECTION>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "Article, section, ul, ol, li, table, tr, th, td sab uppercase. IMG attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H25 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 25</title>
</head>
<body>
  <h1>School Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/admissions">Admissions</a>
    <a href="/faculty">Faculty</a>
    <a href="/results">Results</a>
    <a href="/events">Events</a>
  </nav>
  <main>
    <section id="welcome">
      <h2>Welcome to City Grammar School</h2>
      <p>Established in 1990, providing quality education.</p>
      <blockquote cite="https://citygrammar.edu">
        <p>Education is the most powerful weapon you can use to change the world.</p>
        <footer>— Nelson Mandela</footer>
      </blockquote>
    </section>
    <section id="announcements">
      <h2>Announcements</h2>
      <ul>
        <li><strong>Admissions Open</strong> for Session 2024-25</li>
        <li><strong>Annual Sports Day</strong> on March 20, 2024</li>
        <li><strong>Fee Submission</strong> deadline: March 15, 2024</li>
      </ul>
    </section>
    <section id="stats">
      <h2>School Statistics</h2>
      <dl>
        <dt>Students Enrolled</dt>
        <dd>2500+</dd>
        <dt>Qualified Teachers</dt>
        <dd>120</dd>
        <dt>Pass Rate</dt>
        <dd>98%</dd>
      </dl>
    </section>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 25</titel>
</head>
<BODY>
  <H1>School Website</H1>
  <NAV>
    <A HREF="/">Home</A>
    <A HREF="/admissions">Admissions</A>
    <A HREF="/faculty">Faculty</A>
    <A HREF="/results">Results</A>
    <A HREF="/events">Events</A>
  </NAV>
  <MAIN>
    <SECTION ID="welcome">
      <H2>Welcome to City Grammar School</H2>
      <P>Established in 1990, providing quality education.</P>
      <BLOCKQUOTE CITE="https://citygrammar.edu">
        <P>Education is the most powerful weapon you can use to change the world.</P>
        <FOOTER>— Nelson Mandela</FOOTER>
      </BLOCKQUOTE>
    </SECTION>
    <SECTION ID="announcements">
      <H2>Announcements</H2>
      <UL>
        <LI><STRONG>Admissions Open</STRONG> for Session 2024-25</LI>
        <LI><STRONG>Annual Sports Day</STRONG> on March 20, 2024</LI>
        <LI><STRONG>Fee Submission</STRONG> deadline: March 15, 2024</LI>
      </UL>
    </SECTION>
    <SECTION ID="stats">
      <H2>School Statistics</H2>
      <DL>
        <DT>Students Enrolled</DT>
        <DD>2500+</DD>
        <DT>Qualified Teachers</DT>
        <DD>120</DD>
        <DT>Pass Rate</DT>
        <DD>98%</DD>
      </DL>
    </SECTION>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "Nav, main, section, blockquote, footer (inside blockquote), ul, li, strong, dl, dt, dd sab uppercase. 'Charset', 'titel' fix karo."
},

// ── H26 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 26</title>
</head>
<body>
  <h1>Job Application Form</h1>
  <form action="/apply" method="post" enctype="multipart/form-data">
    <fieldset>
      <legend>Personal Details</legend>
      <label for="jname">Full Name:</label>
      <input type="text" id="jname" name="fullname" required>
      <label for="jcnic">CNIC:</label>
      <input type="text" id="jcnic" name="cnic" pattern="[0-9]{5}-[0-9]{7}-[0-9]" placeholder="00000-0000000-0">
      <label for="jphone">Phone:</label>
      <input type="tel" id="jphone" name="phone" required>
      <label for="jaddress">Address:</label>
      <textarea id="jaddress" name="address" rows="3"></textarea>
    </fieldset>
    <fieldset>
      <legend>Job Preferences</legend>
      <label for="jposition">Applying For:</label>
      <select id="jposition" name="position">
        <optgroup label="Technical">
          <option value="dev">Web Developer</option>
          <option value="ds">Data Scientist</option>
        </optgroup>
        <optgroup label="Management">
          <option value="pm">Project Manager</option>
          <option value="hr">HR Manager</option>
        </optgroup>
      </select>
      <label for="jcv">Upload CV:</label>
      <input type="file" id="jcv" name="cv" accept=".pdf,.doc,.docx">
    </fieldset>
    <button type="submit">Apply Now</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 26</titel>
</head>
<BODY>
  <H1>Job Application Form</H1>
  <FORM ACTION="/apply" METHOD="post" ENCTYPE="multipart/form-data">
    <FIELDSET>
      <LEGEND>Personal Details</LEGEND>
      <LABEL FOR="jname">Full Name:</LABEL>
      <INPUT TYPE="text" ID="jname" NAME="fullname" REQUIRED>
      <LABEL FOR="jcnic">CNIC:</LABEL>
      <INPUT TYPE="text" ID="jcnic" NAME="cnic" PATTERN="[0-9]{5}-[0-9]{7}-[0-9]" PLACEHOLDER="00000-0000000-0">
      <LABEL FOR="jphone">Phone:</LABEL>
      <INPUT TYPE="tel" ID="jphone" NAME="phone" REQUIRED>
      <LABEL FOR="jaddress">Address:</LABEL>
      <TEXTAREA ID="jaddress" NAME="address" ROWS="3"></TEXTAREA>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Job Preferences</LEGEND>
      <LABEL FOR="jposition">Applying For:</LABEL>
      <SELECT ID="jposition" NAME="position">
        <OPTGROUP LABEL="Technical">
          <OPTION VALUE="dev">Web Developer</OPTION>
          <OPTION VALUE="ds">Data Scientist</OPTION>
        </OPTGROUP>
        <OPTGROUP LABEL="Management">
          <OPTION VALUE="pm">Project Manager</OPTION>
          <OPTION VALUE="hr">HR Manager</OPTION>
        </OPTGROUP>
      </SELECT>
      <LABEL FOR="jcv">Upload CV:</LABEL>
      <INPUT TYPE="file" ID="jcv" NAME="cv" ACCEPT=".pdf,.doc,.docx">
    </FIELDSET>
    <BUTTON TYPE="submit">Apply Now</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "OPTGROUP, SELECT, TEXTAREA, FIELDSET, LEGEND sab uppercase. Sare attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H27 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 27</title>
</head>
<body>
  <h1>Hospital Website</h1>
  <header>
    <h1>City Medical Center</h1>
    <p>Emergency: <a href="tel:1122">1122</a></p>
  </header>
  <main>
    <section>
      <h2>Departments</h2>
      <ul>
        <li>Cardiology</li>
        <li>Neurology</li>
        <li>Orthopedics</li>
        <li>Pediatrics</li>
        <li>Dermatology</li>
      </ul>
    </section>
    <section>
      <h2>Appointment Form</h2>
      <form action="/appointment" method="post">
        <label for="pname">Patient Name:</label>
        <input type="text" id="pname" name="pname" required>
        <label for="pdept">Department:</label>
        <select id="pdept" name="dept">
          <option value="">Select Department</option>
          <option value="cardio">Cardiology</option>
          <option value="neuro">Neurology</option>
          <option value="ortho">Orthopedics</option>
        </select>
        <label for="pdate">Preferred Date:</label>
        <input type="date" id="pdate" name="apptdate">
        <label for="ptime">Preferred Time:</label>
        <input type="time" id="ptime" name="appttime">
        <button type="submit">Book Appointment</button>
      </form>
    </section>
  </main>
  <footer>
    <address>123 Hospital Road, Lahore. Tel: <a href="tel:0421234567">042-1234567</a></address>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 27</titel>
</head>
<BODY>
  <H1>Hospital Website</H1>
  <HEADER>
    <H1>City Medical Center</H1>
    <P>Emergency: <A HREF="tel:1122">1122</A></P>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Departments</H2>
      <UL>
        <LI>Cardiology</LI>
        <LI>Neurology</LI>
        <LI>Orthopedics</LI>
        <LI>Pediatrics</LI>
        <LI>Dermatology</LI>
      </UL>
    </SECTION>
    <SECTION>
      <H2>Appointment Form</H2>
      <FORM ACTION="/appointment" METHOD="post">
        <LABEL FOR="pname">Patient Name:</LABEL>
        <INPUT TYPE="text" ID="pname" NAME="pname" REQUIRED>
        <LABEL FOR="pdept">Department:</LABEL>
        <SELECT ID="pdept" NAME="dept">
          <OPTION VALUE="">Select Department</OPTION>
          <OPTION VALUE="cardio">Cardiology</OPTION>
          <OPTION VALUE="neuro">Neurology</OPTION>
          <OPTION VALUE="ortho">Orthopedics</OPTION>
        </SELECT>
        <LABEL FOR="pdate">Preferred Date:</LABEL>
        <INPUT TYPE="date" ID="pdate" NAME="apptdate">
        <LABEL FOR="ptime">Preferred Time:</LABEL>
        <INPUT TYPE="time" ID="ptime" NAME="appttime">
        <BUTTON TYPE="submit">Book Appointment</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER>
    <ADDRESS>123 Hospital Road, Lahore. Tel: <A HREF="tel:0421234567">042-1234567</A></ADDRESS>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "Header, main, footer, address, section, form, select, option, ul, li sab uppercase. 'Charset', 'titel' fix karo."
},

// ── H28 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 28</title>
</head>
<body>
  <h1>Student Dashboard</h1>
  <nav>
    <a href="/dashboard">Dashboard</a>
    <a href="/courses">My Courses</a>
    <a href="/grades">Grades</a>
    <a href="/profile">Profile</a>
    <a href="/logout">Logout</a>
  </nav>
  <main>
    <section>
      <h2>Your Progress</h2>
      <div class="subject">
        <span>HTML:</span>
        <progress value="90" max="100"></progress>
        <span>90%</span>
      </div>
      <div class="subject">
        <span>CSS:</span>
        <progress value="75" max="100"></progress>
        <span>75%</span>
      </div>
      <div class="subject">
        <span>JavaScript:</span>
        <progress value="50" max="100"></progress>
        <span>50%</span>
      </div>
    </section>
    <section>
      <h2>Recent Grades</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>HTML</td><td>92/100</td><td>A+</td></tr>
          <tr><td>CSS</td><td>78/100</td><td>B+</td></tr>
          <tr><td>JavaScript</td><td>65/100</td><td>B</td></tr>
        </tbody>
      </table>
    </section>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 28</titel>
</head>
<BODY>
  <H1>Student Dashboard</H1>
  <NAV>
    <A HREF="/dashboard">Dashboard</A>
    <A HREF="/courses">My Courses</A>
    <A HREF="/grades">Grades</A>
    <A HREF="/profile">Profile</A>
    <A HREF="/logout">Logout</A>
  </NAV>
  <MAIN>
    <SECTION>
      <H2>Your Progress</H2>
      <DIV CLASS="subject">
        <SPAN>HTML:</SPAN>
        <PROGRESS VALUE="90" MAX="100"></PROGRESS>
        <SPAN>90%</SPAN>
      </DIV>
      <DIV CLASS="subject">
        <SPAN>CSS:</SPAN>
        <PROGRESS VALUE="75" MAX="100"></PROGRESS>
        <SPAN>75%</SPAN>
      </DIV>
      <DIV CLASS="subject">
        <SPAN>JavaScript:</SPAN>
        <PROGRESS VALUE="50" MAX="100"></PROGRESS>
        <SPAN>50%</SPAN>
      </DIV>
    </SECTION>
    <SECTION>
      <H2>Recent Grades</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH>Subject</TH>
            <TH>Marks</TH>
            <TH>Grade</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR><TD>HTML</TD><TD>92/100</TD><TD>A+</TD></TR>
          <TR><TD>CSS</TD><TD>78/100</TD><TD>B+</TD></TR>
          <TR><TD>JavaScript</TD><TD>65/100</TD><TD>B</TD></TR>
        </TBODY>
      </TABLE>
    </SECTION>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "Nav, main, div, span, progress, table, thead, tbody, tr, th, td sab uppercase. 'Charset', 'titel' fix karo."
},

// ── H29 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 29</title>
</head>
<body>
  <h1>Travel Booking Page</h1>
  <section>
    <h2>Search Flights</h2>
    <form action="/search-flights" method="get">
      <label for="from">From:</label>
      <input type="text" id="from" name="from" placeholder="City or Airport" list="cities">
      <label for="to">To:</label>
      <input type="text" id="to" name="to" placeholder="City or Airport" list="cities">
      <datalist id="cities">
        <option value="Lahore">
        <option value="Karachi">
        <option value="Islamabad">
        <option value="Dubai">
        <option value="London">
      </datalist>
      <label for="dep">Departure Date:</label>
      <input type="date" id="dep" name="departure">
      <label for="ret">Return Date:</label>
      <input type="date" id="ret" name="return">
      <label for="pass">Passengers:</label>
      <input type="number" id="pass" name="passengers" min="1" max="9" value="1">
      <label for="cls">Class:</label>
      <select id="cls" name="class">
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first">First Class</option>
      </select>
      <button type="submit">Search Flights</button>
    </form>
  </section>
  <section>
    <h2>Popular Destinations</h2>
    <ul>
      <li><a href="/dubai">Dubai — From Rs. 35,000</a></li>
      <li><a href="/london">London — From Rs. 95,000</a></li>
      <li><a href="/toronto">Toronto — From Rs. 120,000</a></li>
    </ul>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 29</titel>
</head>
<BODY>
  <H1>Travel Booking Page</H1>
  <SECTION>
    <H2>Search Flights</H2>
    <FORM ACTION="/search-flights" METHOD="get">
      <LABEL FOR="from">From:</LABEL>
      <INPUT TYPE="text" ID="from" NAME="from" PLACEHOLDER="City or Airport" LIST="cities">
      <LABEL FOR="to">To:</LABEL>
      <INPUT TYPE="text" ID="to" NAME="to" PLACEHOLDER="City or Airport" LIST="cities">
      <DATALIST ID="cities">
        <OPTION VALUE="Lahore">
        <OPTION VALUE="Karachi">
        <OPTION VALUE="Islamabad">
        <OPTION VALUE="Dubai">
        <OPTION VALUE="London">
      </DATALIST>
      <LABEL FOR="dep">Departure Date:</LABEL>
      <INPUT TYPE="date" ID="dep" NAME="departure">
      <LABEL FOR="ret">Return Date:</LABEL>
      <INPUT TYPE="date" ID="ret" NAME="return">
      <LABEL FOR="pass">Passengers:</LABEL>
      <INPUT TYPE="number" ID="pass" NAME="passengers" MIN="1" MAX="9" VALUE="1">
      <LABEL FOR="cls">Class:</LABEL>
      <SELECT ID="cls" NAME="class">
        <OPTION VALUE="economy">Economy</OPTION>
        <OPTION VALUE="business">Business</OPTION>
        <OPTION VALUE="first">First Class</OPTION>
      </SELECT>
      <BUTTON TYPE="submit">Search Flights</BUTTON>
    </FORM>
  </SECTION>
  <SECTION>
    <H2>Popular Destinations</H2>
    <UL>
      <LI><A HREF="/dubai">Dubai — From Rs. 35,000</A></LI>
      <LI><A HREF="/london">London — From Rs. 95,000</A></LI>
      <LI><A HREF="/toronto">Toronto — From Rs. 120,000</A></LI>
    </UL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "DATALIST, SELECT, OPTION, FORM, INPUT, LABEL sab uppercase. MIN, MAX, VALUE, PLACEHOLDER attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H30 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Ultimate HTML hard practice page">
  <title>Hard Page 30</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="manifest" href="manifest.json">
  <script src="bundle.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>Ultimate HTML Page</h1>
    <nav role="navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="hero-title">
      <h2 id="hero-title">Our Services</h2>
      <div class="services-grid">
        <article>
          <h3>Web Design</h3>
          <p>Beautiful responsive websites.</p>
          <meter value="0.9" min="0" max="1">90%</meter>
        </article>
        <article>
          <h3>App Development</h3>
          <p>Cross-platform mobile applications.</p>
          <meter value="0.8" min="0" max="1">80%</meter>
        </article>
        <article>
          <h3>SEO Optimization</h3>
          <p>Improve your search rankings.</p>
          <meter value="0.75" min="0" max="1">75%</meter>
        </article>
      </div>
    </section>
    <section>
      <h2>Testimonials</h2>
      <blockquote cite="https://client1.com">
        <p>Excellent service and professional team!</p>
        <cite>— Ali Raza, CEO</cite>
      </blockquote>
      <blockquote cite="https://client2.com">
        <p>Delivered the project on time and within budget.</p>
        <cite>— Sara Khan, Director</cite>
      </blockquote>
    </section>
  </main>
  <aside>
    <h2>Newsletter</h2>
    <form action="/newsletter" method="post">
      <label for="nl-email">Email:</label>
      <input type="email" id="nl-email" name="email" required placeholder="your@email.com">
      <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
    </form>
  </aside>
  <footer role="contentinfo">
    <nav aria-label="Footer Navigation">
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
      <a href="/cookies">Cookies</a>
    </nav>
    <small>&copy; 2024 Ultimate HTML. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Ultimate HTML hard practice page">
  <titel>Hard Page 30</titel>
  <LINK REL="stylesheet" HREF="styles.css">
  <LINK REL="manifest" HREF="manifest.json">
  <SCRIPT SRC="bundle.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Ultimate HTML Page</H1>
    <NAV ROLE="navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/about">About</A></LI>
        <LI><A HREF="/services">Services</A></LI>
        <LI><A HREF="/contact">Contact</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="hero-title">
      <H2 ID="hero-title">Our Services</H2>
      <DIV CLASS="services-grid">
        <ARTICLE>
          <H3>Web Design</H3>
          <P>Beautiful responsive websites.</P>
          <METER VALUE="0.9" MIN="0" MAX="1">90%</METER>
        </ARTICLE>
        <ARTICLE>
          <H3>App Development</H3>
          <P>Cross-platform mobile applications.</P>
          <METER VALUE="0.8" MIN="0" MAX="1">80%</METER>
        </ARTICLE>
        <ARTICLE>
          <H3>SEO Optimization</H3>
          <P>Improve your search rankings.</P>
          <METER VALUE="0.75" MIN="0" MAX="1">75%</METER>
        </ARTICLE>
      </DIV>
    </SECTION>
    <SECTION>
      <H2>Testimonials</H2>
      <BLOCKQUOTE CITE="https://client1.com">
        <P>Excellent service and professional team!</P>
        <CITE>— Ali Raza, CEO</CITE>
      </BLOCKQUOTE>
      <BLOCKQUOTE CITE="https://client2.com">
        <P>Delivered the project on time and within budget.</P>
        <CITE>— Sara Khan, Director</CITE>
      </BLOCKQUOTE>
    </SECTION>
  </MAIN>
  <ASIDE>
    <H2>Newsletter</H2>
    <FORM ACTION="/newsletter" METHOD="post">
      <LABEL FOR="nl-email">Email:</LABEL>
      <INPUT TYPE="email" ID="nl-email" NAME="email" REQUIRED PLACEHOLDER="your@email.com">
      <BUTTON TYPE="submit" ARIA-LABEL="Subscribe to newsletter">Subscribe</BUTTON>
    </FORM>
  </ASIDE>
  <FOOTER ROLE="contentinfo">
    <NAV ARIA-LABEL="Footer Navigation">
      <A HREF="/privacy">Privacy</A>
      <A HREF="/terms">Terms</A>
      <A HREF="/cookies">Cookies</A>
    </NAV>
    <SMALL>&copy; 2024 Ultimate HTML. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye final mega page hai. Head se footer tak — META, LINK, SCRIPT, HEADER, NAV, MAIN, ASIDE, FOOTER, METER, BLOCKQUOTE, CITE sab uppercase. Aria attributes bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H31–H40) ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code
   'wrong'   field = galat version

   Mistakes:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, scirpt → script)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H31 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 31</title>
</head>
<body>
  <h1>Online Quiz Page</h1>
  <section>
    <h2>General Knowledge Quiz</h2>
    <form action="/submit-quiz" method="post">
      <fieldset>
        <legend>Question 1</legend>
        <p>What is the capital of Pakistan?</p>
        <label><input type="radio" name="q1" value="lahore"> Lahore</label>
        <label><input type="radio" name="q1" value="karachi"> Karachi</label>
        <label><input type="radio" name="q1" value="islamabad"> Islamabad</label>
        <label><input type="radio" name="q1" value="peshawar"> Peshawar</label>
      </fieldset>
      <fieldset>
        <legend>Question 2</legend>
        <p>Which language is used for web structure?</p>
        <label><input type="radio" name="q2" value="css"> CSS</label>
        <label><input type="radio" name="q2" value="html"> HTML</label>
        <label><input type="radio" name="q2" value="js"> JavaScript</label>
        <label><input type="radio" name="q2" value="python"> Python</label>
      </fieldset>
      <button type="submit">Submit Quiz</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 31</titel>
</head>
<BODY>
  <H1>Online Quiz Page</H1>
  <SECTION>
    <H2>General Knowledge Quiz</H2>
    <FORM ACTION="/submit-quiz" METHOD="post">
      <FIELDSET>
        <LEGEND>Question 1</LEGEND>
        <P>What is the capital of Pakistan?</P>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="lahore"> Lahore</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="karachi"> Karachi</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="islamabad"> Islamabad</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="peshawar"> Peshawar</LABEL>
      </FIELDSET>
      <FIELDSET>
        <LEGEND>Question 2</LEGEND>
        <P>Which language is used for web structure?</P>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="css"> CSS</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="html"> HTML</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="js"> JavaScript</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="python"> Python</LABEL>
      </FIELDSET>
      <BUTTON TYPE="submit">Submit Quiz</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FIELDSET, LEGEND, FORM, INPUT, LABEL, BUTTON sab uppercase hain. TYPE, NAME, VALUE, ACTION, METHOD bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H32 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 32</title>
</head>
<body>
  <h1>Recipe Page</h1>
  <article>
    <h2>Chicken Karahi Recipe</h2>
    <section>
      <h3>Ingredients</h3>
      <ul>
        <li>1 kg Chicken</li>
        <li>3 tbsp Oil</li>
        <li>2 Tomatoes (chopped)</li>
        <li>1 tsp Salt</li>
        <li>1 tsp Red Chilli</li>
        <li>1 tsp Garam Masala</li>
      </ul>
    </section>
    <section>
      <h3>Instructions</h3>
      <ol>
        <li>Heat oil in a karahi.</li>
        <li>Add chicken and fry until golden.</li>
        <li>Add tomatoes and spices.</li>
        <li>Cook on medium heat for 20 minutes.</li>
        <li>Garnish with green chillies and ginger.</li>
        <li>Serve hot with naan.</li>
      </ol>
    </section>
    <footer>
      <p><small>Prep time: 15 min | Cook time: 30 min | Serves: 4</small></p>
    </footer>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 32</titel>
</head>
<BODY>
  <H1>Recipe Page</H1>
  <ARTICLE>
    <H2>Chicken Karahi Recipe</H2>
    <SECTION>
      <H3>Ingredients</H3>
      <UL>
        <LI>1 kg Chicken</LI>
        <LI>3 tbsp Oil</LI>
        <LI>2 Tomatoes (chopped)</LI>
        <LI>1 tsp Salt</LI>
        <LI>1 tsp Red Chilli</LI>
        <LI>1 tsp Garam Masala</LI>
      </UL>
    </SECTION>
    <SECTION>
      <H3>Instructions</H3>
      <OL>
        <LI>Heat oil in a karahi.</LI>
        <LI>Add chicken and fry until golden.</LI>
        <LI>Add tomatoes and spices.</LI>
        <LI>Cook on medium heat for 20 minutes.</LI>
        <LI>Garnish with green chillies and ginger.</LI>
        <LI>Serve hot with naan.</LI>
      </OL>
    </SECTION>
    <FOOTER>
      <P><SMALL>Prep time: 15 min | Cook time: 30 min | Serves: 4</SMALL></P>
    </FOOTER>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "ARTICLE, SECTION, UL, OL, LI, FOOTER, SMALL sab uppercase hain. H2, H3 bhi. 'Charset', 'titel' fix karo."
},

// ── H33 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 33</title>
</head>
<body>
  <h1>Student Report Card</h1>
  <section>
    <h2>Academic Results — 2024</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Marks Obtained</th>
          <th>Total Marks</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mathematics</td>
          <td>88</td>
          <td>100</td>
          <td>A</td>
        </tr>
        <tr>
          <td>English</td>
          <td>76</td>
          <td>100</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>92</td>
          <td>100</td>
          <td>A+</td>
        </tr>
        <tr>
          <td>Urdu</td>
          <td>81</td>
          <td>100</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Islamiat</td>
          <td>95</td>
          <td>100</td>
          <td>A+</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total</td>
          <td>432 / 500</td>
        </tr>
      </tfoot>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 33</titel>
</head>
<BODY>
  <H1>Student Report Card</H1>
  <SECTION>
    <H2>Academic Results — 2024</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH>Subject</TH>
          <TH>Marks Obtained</TH>
          <TH>Total Marks</TH>
          <TH>Grade</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Mathematics</TD>
          <TD>88</TD>
          <TD>100</TD>
          <TD>A</TD>
        </TR>
        <TR>
          <TD>English</TD>
          <TD>76</TD>
          <TD>100</TD>
          <TD>B</TD>
        </TR>
        <TR>
          <TD>Science</TD>
          <TD>92</TD>
          <TD>100</TD>
          <TD>A+</TD>
        </TR>
        <TR>
          <TD>Urdu</TD>
          <TD>81</TD>
          <TD>100</TD>
          <TD>A</TD>
        </TR>
        <TR>
          <TD>Islamiat</TD>
          <TD>95</TD>
          <TD>100</TD>
          <TD>A+</TD>
        </TR>
      </TBODY>
      <TFOOT>
        <TR>
          <TD COLSPAN="3">Total</TD>
          <TD>432 / 500</TD>
        </TR>
      </TFOOT>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "TABLE, THEAD, TBODY, TFOOT, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, COLSPAN attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H34 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 34</title>
</head>
<body>
  <h1>Job Application Form</h1>
  <section>
    <h2>Apply Now</h2>
    <form action="/apply" method="post" enctype="multipart/form-data">
      <label for="fname">Full Name:</label>
      <input type="text" id="fname" name="fullname" placeholder="Enter full name" required>

      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required>

      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" placeholder="+92-300-0000000">

      <label for="position">Position Applied For:</label>
      <select id="position" name="position">
        <option value="">-- Select --</option>
        <option value="developer">Web Developer</option>
        <option value="designer">UI/UX Designer</option>
        <option value="manager">Project Manager</option>
      </select>

      <label for="cv">Upload CV (PDF):</label>
      <input type="file" id="cv" name="cv" accept=".pdf">

      <label for="cover">Cover Letter:</label>
      <textarea id="cover" name="cover" rows="6" cols="50" placeholder="Write your cover letter here..."></textarea>

      <button type="submit">Submit Application</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 34</titel>
</head>
<BODY>
  <H1>Job Application Form</H1>
  <SECTION>
    <H2>Apply Now</H2>
    <FORM ACTION="/apply" METHOD="post" ENCTYPE="multipart/form-data">
      <LABEL FOR="fname">Full Name:</LABEL>
      <INPUT TYPE="text" ID="fname" NAME="fullname" PLACEHOLDER="Enter full name" REQUIRED>

      <LABEL FOR="email">Email Address:</LABEL>
      <INPUT TYPE="email" ID="email" NAME="email" PLACEHOLDER="you@example.com" REQUIRED>

      <LABEL FOR="phone">Phone Number:</LABEL>
      <INPUT TYPE="tel" ID="phone" NAME="phone" PLACEHOLDER="+92-300-0000000">

      <LABEL FOR="position">Position Applied For:</LABEL>
      <SELECT ID="position" NAME="position">
        <OPTION VALUE="">-- Select --</OPTION>
        <OPTION VALUE="developer">Web Developer</OPTION>
        <OPTION VALUE="designer">UI/UX Designer</OPTION>
        <OPTION VALUE="manager">Project Manager</OPTION>
      </SELECT>

      <LABEL FOR="cv">Upload CV (PDF):</LABEL>
      <INPUT TYPE="file" ID="cv" NAME="cv" ACCEPT=".pdf">

      <LABEL FOR="cover">Cover Letter:</LABEL>
      <TEXTAREA ID="cover" NAME="cover" ROWS="6" COLS="50" PLACEHOLDER="Write your cover letter here..."></TEXTAREA>

      <BUTTON TYPE="submit">Submit Application</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "FORM, INPUT, SELECT, OPTION, TEXTAREA, BUTTON, LABEL sab uppercase. ENCTYPE, PLACEHOLDER, ACCEPT, ROWS, COLS bhi. 'Charset', 'titel' fix karo."
},

// ── H35 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 35</title>
</head>
<body>
  <h1>News Portal</h1>
  <header>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/world">World</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/tech">Technology</a></li>
        <li><a href="/entertainment">Entertainment</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>Breaking News: Tech Summit 2024</h2>
      <p><time datetime="2024-11-15">November 15, 2024</time></p>
      <p>World leaders in technology gathered today for the annual Tech Summit in Karachi.</p>
      <figure>
        <img src="summit.jpg" alt="Tech Summit 2024" width="600" height="400">
        <figcaption>Tech Summit 2024 — Karachi Expo Centre</figcaption>
      </figure>
      <p>The summit focused on artificial intelligence, cybersecurity, and digital transformation.</p>
    </article>
  </main>
  <footer>
    <p>&copy; 2024 News Portal. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 35</titel>
</head>
<BODY>
  <H1>News Portal</H1>
  <HEADER>
    <NAV>
      <UL>
        <LI><A HREF="/home">Home</A></LI>
        <LI><A HREF="/world">World</A></LI>
        <LI><A HREF="/sports">Sports</A></LI>
        <LI><A HREF="/tech">Technology</A></LI>
        <LI><A HREF="/entertainment">Entertainment</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <ARTICLE>
      <H2>Breaking News: Tech Summit 2024</H2>
      <P><TIME DATETIME="2024-11-15">November 15, 2024</TIME></P>
      <P>World leaders in technology gathered today for the annual Tech Summit in Karachi.</P>
      <FIGURE>
        <IMG SRC="summit.jpg" ALT="Tech Summit 2024" WIDTH="600" HEIGHT="400">
        <FIGCAPTION>Tech Summit 2024 — Karachi Expo Centre</FIGCAPTION>
      </FIGURE>
      <P>The summit focused on artificial intelligence, cybersecurity, and digital transformation.</P>
    </ARTICLE>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 News Portal. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, ARTICLE, FOOTER, FIGURE, FIGCAPTION, TIME sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, HREF bhi. 'Charset', 'titel' fix karo."
},

// ── H36 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 36</title>
</head>
<body>
  <h1>E-Commerce Product Page</h1>
  <section>
    <h2>Smartphone XPro 5G</h2>
    <div class="product-layout">
      <div class="product-image">
        <img src="phone.jpg" alt="XPro 5G Smartphone" width="400" height="400" loading="lazy">
      </div>
      <div class="product-details">
        <p><strong>Price:</strong> <del>Rs. 85,000</del> <ins>Rs. 72,000</ins></p>
        <p><strong>Brand:</strong> XPro</p>
        <p><strong>Availability:</strong> <span class="in-stock">In Stock</span></p>
        <ul>
          <li>6.7 inch AMOLED Display</li>
          <li>128GB Storage / 8GB RAM</li>
          <li>5000 mAh Battery</li>
          <li>Triple Camera: 108MP + 12MP + 5MP</li>
        </ul>
        <form action="/cart" method="post">
          <label for="qty">Quantity:</label>
          <input type="number" id="qty" name="quantity" min="1" max="10" value="1">
          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 36</titel>
</head>
<BODY>
  <H1>E-Commerce Product Page</H1>
  <SECTION>
    <H2>Smartphone XPro 5G</H2>
    <DIV CLASS="product-layout">
      <DIV CLASS="product-image">
        <IMG SRC="phone.jpg" ALT="XPro 5G Smartphone" WIDTH="400" HEIGHT="400" LOADING="lazy">
      </DIV>
      <DIV CLASS="product-details">
        <P><STRONG>Price:</STRONG> <DEL>Rs. 85,000</DEL> <INS>Rs. 72,000</INS></P>
        <P><STRONG>Brand:</STRONG> XPro</P>
        <P><STRONG>Availability:</STRONG> <SPAN CLASS="in-stock">In Stock</SPAN></P>
        <UL>
          <LI>6.7 inch AMOLED Display</LI>
          <LI>128GB Storage / 8GB RAM</LI>
          <LI>5000 mAh Battery</LI>
          <LI>Triple Camera: 108MP + 12MP + 5MP</LI>
        </UL>
        <FORM ACTION="/cart" METHOD="post">
          <LABEL FOR="qty">Quantity:</LABEL>
          <INPUT TYPE="number" ID="qty" NAME="quantity" MIN="1" MAX="10" VALUE="1">
          <BUTTON TYPE="submit">Add to Cart</BUTTON>
        </FORM>
      </DIV>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "DIV, SPAN, DEL, INS, STRONG, UL, LI, FORM, INPUT, BUTTON sab uppercase. CLASS, MIN, MAX, VALUE, LOADING attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H37 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 37</title>
</head>
<body>
  <h1>School Website</h1>
  <header>
    <h2>Bright Future Academy</h2>
    <nav>
      <a href="/home">Home</a>
      <a href="/about">About Us</a>
      <a href="/admissions">Admissions</a>
      <a href="/results">Results</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Welcome Message</h2>
      <p>Welcome to Bright Future Academy — shaping tomorrow's leaders today.</p>
    </section>
    <section>
      <h2>Upcoming Events</h2>
      <details>
        <summary>Annual Sports Day — Dec 10, 2024</summary>
        <p>All students must report by 8:00 AM in sports uniform.</p>
      </details>
      <details>
        <summary>Parent-Teacher Meeting — Dec 20, 2024</summary>
        <p>Parents are requested to collect result cards.</p>
      </details>
      <details>
        <summary>Winter Break — Dec 25 to Jan 5</summary>
        <p>School will remain closed during winter holidays.</p>
      </details>
    </section>
  </main>
  <footer>
    <address>123 Education Road, Lahore | Tel: 042-111-000</address>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 37</titel>
</head>
<BODY>
  <H1>School Website</H1>
  <HEADER>
    <H2>Bright Future Academy</H2>
    <NAV>
      <A HREF="/home">Home</A>
      <A HREF="/about">About Us</A>
      <A HREF="/admissions">Admissions</A>
      <A HREF="/results">Results</A>
      <A HREF="/contact">Contact</A>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Welcome Message</H2>
      <P>Welcome to Bright Future Academy — shaping tomorrow's leaders today.</P>
    </SECTION>
    <SECTION>
      <H2>Upcoming Events</H2>
      <DETAILS>
        <SUMMARY>Annual Sports Day — Dec 10, 2024</SUMMARY>
        <P>All students must report by 8:00 AM in sports uniform.</P>
      </DETAILS>
      <DETAILS>
        <SUMMARY>Parent-Teacher Meeting — Dec 20, 2024</SUMMARY>
        <P>Parents are requested to collect result cards.</P>
      </DETAILS>
      <DETAILS>
        <SUMMARY>Winter Break — Dec 25 to Jan 5</SUMMARY>
        <P>School will remain closed during winter holidays.</P>
      </DETAILS>
    </SECTION>
  </MAIN>
  <FOOTER>
    <ADDRESS>123 Education Road, Lahore | Tel: 042-111-000</ADDRESS>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "HEADER, NAV, MAIN, SECTION, FOOTER, ADDRESS, DETAILS, SUMMARY sab uppercase. A, H2, P tags bhi. 'Charset', 'titel' fix karo."
},

// ── H38 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 38</title>
</head>
<body>
  <h1>Hospital Information System</h1>
  <section>
    <h2>Book an Appointment</h2>
    <form action="/book" method="post">
      <label for="pname">Patient Name:</label>
      <input type="text" id="pname" name="patient_name" required>

      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob">

      <label for="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label for="dept">Department:</label>
      <select id="dept" name="department">
        <option value="cardiology">Cardiology</option>
        <option value="orthopedics">Orthopedics</option>
        <option value="neurology">Neurology</option>
        <option value="pediatrics">Pediatrics</option>
      </select>

      <label for="apptdate">Appointment Date:</label>
      <input type="date" id="apptdate" name="appointment_date" required>

      <label for="notes">Additional Notes:</label>
      <textarea id="notes" name="notes" rows="4" cols="45"></textarea>

      <button type="submit">Book Appointment</button>
      <button type="reset">Clear Form</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 38</titel>
</head>
<BODY>
  <H1>Hospital Information System</H1>
  <SECTION>
    <H2>Book an Appointment</H2>
    <FORM ACTION="/book" METHOD="post">
      <LABEL FOR="pname">Patient Name:</LABEL>
      <INPUT TYPE="text" ID="pname" NAME="patient_name" REQUIRED>

      <LABEL FOR="dob">Date of Birth:</LABEL>
      <INPUT TYPE="date" ID="dob" NAME="dob">

      <LABEL FOR="gender">Gender:</LABEL>
      <SELECT ID="gender" NAME="gender">
        <OPTION VALUE="male">Male</OPTION>
        <OPTION VALUE="female">Female</OPTION>
        <OPTION VALUE="other">Other</OPTION>
      </SELECT>

      <LABEL FOR="dept">Department:</LABEL>
      <SELECT ID="dept" NAME="department">
        <OPTION VALUE="cardiology">Cardiology</OPTION>
        <OPTION VALUE="orthopedics">Orthopedics</OPTION>
        <OPTION VALUE="neurology">Neurology</OPTION>
        <OPTION VALUE="pediatrics">Pediatrics</OPTION>
      </SELECT>

      <LABEL FOR="apptdate">Appointment Date:</LABEL>
      <INPUT TYPE="date" ID="apptdate" NAME="appointment_date" REQUIRED>

      <LABEL FOR="notes">Additional Notes:</LABEL>
      <TEXTAREA ID="notes" NAME="notes" ROWS="4" COLS="45"></TEXTAREA>

      <BUTTON TYPE="submit">Book Appointment</BUTTON>
      <BUTTON TYPE="reset">Clear Form</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "FORM, SELECT, OPTION, TEXTAREA, BUTTON, INPUT, LABEL sab uppercase. FOR, ID, NAME, TYPE, ROWS, COLS, REQUIRED bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H39 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 39</title>
</head>
<body>
  <h1>Portfolio Website</h1>
  <header>
    <img src="avatar.jpg" alt="Profile Photo" width="120" height="120">
    <h2>Ahmed Raza — Full Stack Developer</h2>
    <p>Passionate about building clean, responsive web applications.</p>
  </header>
  <main>
    <section id="skills">
      <h2>Technical Skills</h2>
      <ul>
        <li>HTML5 &amp; CSS3</li>
        <li>JavaScript &amp; TypeScript</li>
        <li>React.js &amp; Next.js</li>
        <li>Node.js &amp; Express</li>
        <li>MySQL &amp; MongoDB</li>
      </ul>
    </section>
    <section id="projects">
      <h2>Featured Projects</h2>
      <article>
        <h3>E-Commerce Store</h3>
        <p>A full-stack online store built with React and Node.js.</p>
        <a href="https://github.com/ahmed/estore" target="_blank">View on GitHub</a>
      </article>
      <article>
        <h3>Blog Platform</h3>
        <p>A CMS-based blog with admin panel and SEO features.</p>
        <a href="https://github.com/ahmed/blog" target="_blank">View on GitHub</a>
      </article>
    </section>
  </main>
  <footer>
    <p>Contact: <a href="mailto:ahmed@devmail.com">ahmed@devmail.com</a></p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 39</titel>
</head>
<BODY>
  <H1>Portfolio Website</H1>
  <HEADER>
    <IMG SRC="avatar.jpg" ALT="Profile Photo" WIDTH="120" HEIGHT="120">
    <H2>Ahmed Raza — Full Stack Developer</H2>
    <P>Passionate about building clean, responsive web applications.</P>
  </HEADER>
  <MAIN>
    <SECTION ID="skills">
      <H2>Technical Skills</H2>
      <UL>
        <LI>HTML5 &amp; CSS3</LI>
        <LI>JavaScript &amp; TypeScript</LI>
        <LI>React.js &amp; Next.js</LI>
        <LI>Node.js &amp; Express</LI>
        <LI>MySQL &amp; MongoDB</LI>
      </UL>
    </SECTION>
    <SECTION ID="projects">
      <H2>Featured Projects</H2>
      <ARTICLE>
        <H3>E-Commerce Store</H3>
        <P>A full-stack online store built with React and Node.js.</P>
        <A HREF="https://github.com/ahmed/estore" TARGET="_blank">View on GitHub</A>
      </ARTICLE>
      <ARTICLE>
        <H3>Blog Platform</H3>
        <P>A CMS-based blog with admin panel and SEO features.</P>
        <A HREF="https://github.com/ahmed/blog" TARGET="_blank">View on GitHub</A>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>Contact: <A HREF="mailto:ahmed@devmail.com">ahmed@devmail.com</A></P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, MAIN, FOOTER, SECTION, ARTICLE, IMG, UL, LI, A sab uppercase. ID, SRC, ALT, HREF, TARGET attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H40 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Online learning platform for Pakistani students">
  <title>Hard Page 40</title>
  <link rel="stylesheet" href="learn.css">
  <script src="learn.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>LearnPK — Online Education Platform</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/courses" aria-current="page">Courses</a></li>
        <li><a href="/instructors">Instructors</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="featured-title">
      <h2 id="featured-title">Featured Courses</h2>
      <div class="course-grid">
        <article>
          <img src="html-course.jpg" alt="HTML Course" width="300" height="200" loading="lazy">
          <h3>Complete HTML &amp; CSS</h3>
          <p>Learn from scratch in Urdu &amp; English.</p>
          <meter value="0.95" min="0" max="1" title="95% positive reviews">4.9 ★</meter>
          <p><strong>Rs. 1,500</strong></p>
          <a href="/courses/html">Enroll Now</a>
        </article>
        <article>
          <img src="js-course.jpg" alt="JavaScript Course" width="300" height="200" loading="lazy">
          <h3>JavaScript — Beginner to Pro</h3>
          <p>Hands-on projects and quizzes.</p>
          <meter value="0.88" min="0" max="1" title="88% positive reviews">4.5 ★</meter>
          <p><strong>Rs. 2,000</strong></p>
          <a href="/courses/js">Enroll Now</a>
        </article>
      </div>
    </section>
    <section>
      <h2>Subscribe for Free Updates</h2>
      <form action="/subscribe" method="post">
        <label for="sub-email">Email:</label>
        <input type="email" id="sub-email" name="email" placeholder="your@email.com" required>
        <button type="submit" aria-label="Subscribe">Subscribe</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <nav aria-label="Footer Links">
      <a href="/about">About</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
    </nav>
    <small>&copy; 2024 LearnPK. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Online learning platform for Pakistani students">
  <titel>Hard Page 40</titel>
  <LINK REL="stylesheet" HREF="learn.css">
  <SCRIPT SRC="learn.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>LearnPK — Online Education Platform</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/courses" ARIA-CURRENT="page">Courses</A></LI>
        <LI><A HREF="/instructors">Instructors</A></LI>
        <LI><A HREF="/pricing">Pricing</A></LI>
        <LI><A HREF="/login">Login</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="featured-title">
      <H2 ID="featured-title">Featured Courses</H2>
      <DIV CLASS="course-grid">
        <ARTICLE>
          <IMG SRC="html-course.jpg" ALT="HTML Course" WIDTH="300" HEIGHT="200" LOADING="lazy">
          <H3>Complete HTML &amp; CSS</H3>
          <P>Learn from scratch in Urdu &amp; English.</P>
          <METER VALUE="0.95" MIN="0" MAX="1" TITLE="95% positive reviews">4.9 ★</METER>
          <P><STRONG>Rs. 1,500</STRONG></P>
          <A HREF="/courses/html">Enroll Now</A>
        </ARTICLE>
        <ARTICLE>
          <IMG SRC="js-course.jpg" ALT="JavaScript Course" WIDTH="300" HEIGHT="200" LOADING="lazy">
          <H3>JavaScript — Beginner to Pro</H3>
          <P>Hands-on projects and quizzes.</P>
          <METER VALUE="0.88" MIN="0" MAX="1" TITLE="88% positive reviews">4.5 ★</METER>
          <P><STRONG>Rs. 2,000</STRONG></P>
          <A HREF="/courses/js">Enroll Now</A>
        </ARTICLE>
      </DIV>
    </SECTION>
    <SECTION>
      <H2>Subscribe for Free Updates</H2>
      <FORM ACTION="/subscribe" METHOD="post">
        <LABEL FOR="sub-email">Email:</LABEL>
        <INPUT TYPE="email" ID="sub-email" NAME="email" PLACEHOLDER="your@email.com" REQUIRED>
        <BUTTON TYPE="submit" ARIA-LABEL="Subscribe">Subscribe</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <NAV ARIA-LABEL="Footer Links">
      <A HREF="/about">About</A>
      <A HREF="/privacy">Privacy</A>
      <A HREF="/terms">Terms</A>
    </NAV>
    <SMALL>&copy; 2024 LearnPK. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, METER, IMG, FORM sab uppercase. ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, ROLE bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H41–H50) ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code
   'wrong'   field = galat version

   Mistakes:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, scirpt → script)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H41 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 41</title>
</head>
<body>
  <h1>Restaurant Menu</h1>
  <section>
    <h2>Starters</h2>
    <ul>
      <li><span class="item-name">Chicken Soup</span> <span class="price">Rs. 350</span></li>
      <li><span class="item-name">Spring Rolls</span> <span class="price">Rs. 450</span></li>
      <li><span class="item-name">Garlic Bread</span> <span class="price">Rs. 300</span></li>
    </ul>
  </section>
  <section>
    <h2>Main Course</h2>
    <table>
      <thead>
        <tr>
          <th>Dish</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chicken Karahi</td>
          <td>Spicy chicken curry</td>
          <td>Rs. 950</td>
        </tr>
        <tr>
          <td>Beef Biryani</td>
          <td>Fragrant rice with beef</td>
          <td>Rs. 850</td>
        </tr>
        <tr>
          <td>Vegetable Pulao</td>
          <td>Rice with mixed vegetables</td>
          <td>Rs. 550</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h2>Order Online</h2>
    <form action="/order" method="post">
      <label for="dish">Choose Dish:</label>
      <select id="dish" name="dish">
        <option value="karahi">Chicken Karahi</option>
        <option value="biryani">Beef Biryani</option>
        <option value="pulao">Vegetable Pulao</option>
      </select>
      <label for="qty">Quantity:</label>
      <input type="number" id="qty" name="qty" min="1" max="10" value="1">
      <button type="submit">Place Order</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 41</titel>
</head>
<BODY>
  <H1>Restaurant Menu</H1>
  <SECTION>
    <H2>Starters</H2>
    <UL>
      <LI><SPAN CLASS="item-name">Chicken Soup</SPAN> <SPAN CLASS="price">Rs. 350</SPAN></LI>
      <LI><SPAN CLASS="item-name">Spring Rolls</SPAN> <SPAN CLASS="price">Rs. 450</SPAN></LI>
      <LI><SPAN CLASS="item-name">Garlic Bread</SPAN> <SPAN CLASS="price">Rs. 300</SPAN></LI>
    </UL>
  </SECTION>
  <SECTION>
    <H2>Main Course</H2>
    <TABLE>
      <THEAD>
        <TR>
          <TH>Dish</TH>
          <TH>Description</TH>
          <TH>Price</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Chicken Karahi</TD>
          <TD>Spicy chicken curry</TD>
          <TD>Rs. 950</TD>
        </TR>
        <TR>
          <TD>Beef Biryani</TD>
          <TD>Fragrant rice with beef</TD>
          <TD>Rs. 850</TD>
        </TR>
        <TR>
          <TD>Vegetable Pulao</TD>
          <TD>Rice with mixed vegetables</TD>
          <TD>Rs. 550</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
  <SECTION>
    <H2>Order Online</H2>
    <FORM ACTION="/order" METHOD="post">
      <LABEL FOR="dish">Choose Dish:</LABEL>
      <SELECT ID="dish" NAME="dish">
        <OPTION VALUE="karahi">Chicken Karahi</OPTION>
        <OPTION VALUE="biryani">Beef Biryani</OPTION>
        <OPTION VALUE="pulao">Vegetable Pulao</OPTION>
      </SELECT>
      <LABEL FOR="qty">Quantity:</LABEL>
      <INPUT TYPE="number" ID="qty" NAME="qty" MIN="1" MAX="10" VALUE="1">
      <BUTTON TYPE="submit">Place Order</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. SELECT, OPTION, INPUT bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H42 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 42</title>
</head>
<body>
  <h1>Job Application Form</h1>
  <form action="/apply" method="post" enctype="multipart/form-data">
    <fieldset>
      <legend>Applicant Details</legend>
      <label for="aname">Full Name:</label>
      <input type="text" id="aname" name="aname" required placeholder="Enter your full name">
      <label for="aemail">Email Address:</label>
      <input type="email" id="aemail" name="aemail" required>
      <label for="aphone">Phone Number:</label>
      <input type="tel" id="aphone" name="aphone" pattern="[0-9]{11}" required>
      <label for="aposition">Position Applying For:</label>
      <select id="aposition" name="aposition">
        <option value="developer">Web Developer</option>
        <option value="designer">UI/UX Designer</option>
        <option value="manager">Project Manager</option>
      </select>
      <label for="aexp">Years of Experience:</label>
      <input type="number" id="aexp" name="aexp" min="0" max="40">
      <label for="aresume">Upload Resume:</label>
      <input type="file" id="aresume" name="aresume" accept=".pdf,.doc,.docx" required>
      <label for="acover">Cover Letter:</label>
      <textarea id="acover" name="acover" rows="6" cols="50" placeholder="Tell us about yourself"></textarea>
      <label><input type="checkbox" name="terms" required> I agree to the terms</label>
      <button type="submit">Submit Application</button>
    </fieldset>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 42</titel>
</head>
<BODY>
  <H1>Job Application Form</H1>
  <FORM ACTION="/apply" METHOD="post" ENCTYPE="multipart/form-data">
    <FIELDSET>
      <LEGEND>Applicant Details</LEGEND>
      <LABEL FOR="aname">Full Name:</LABEL>
      <INPUT TYPE="text" ID="aname" NAME="aname" REQUIRED PLACEHOLDER="Enter your full name">
      <LABEL FOR="aemail">Email Address:</LABEL>
      <INPUT TYPE="email" ID="aemail" NAME="aemail" REQUIRED>
      <LABEL FOR="aphone">Phone Number:</LABEL>
      <INPUT TYPE="tel" ID="aphone" NAME="aphone" PATTERN="[0-9]{11}" REQUIRED>
      <LABEL FOR="aposition">Position Applying For:</LABEL>
      <SELECT ID="aposition" NAME="aposition">
        <OPTION VALUE="developer">Web Developer</OPTION>
        <OPTION VALUE="designer">UI/UX Designer</OPTION>
        <OPTION VALUE="manager">Project Manager</OPTION>
      </SELECT>
      <LABEL FOR="aexp">Years of Experience:</LABEL>
      <INPUT TYPE="number" ID="aexp" NAME="aexp" MIN="0" MAX="40">
      <LABEL FOR="aresume">Upload Resume:</LABEL>
      <INPUT TYPE="file" ID="aresume" NAME="aresume" ACCEPT=".pdf,.doc,.docx" REQUIRED>
      <LABEL FOR="acover">Cover Letter:</LABEL>
      <TEXTAREA ID="acover" NAME="acover" ROWS="6" COLS="50" PLACEHOLDER="Tell us about yourself"></TEXTAREA>
      <LABEL><INPUT TYPE="checkbox" NAME="terms" REQUIRED> I agree to the terms</LABEL>
      <BUTTON TYPE="submit">Submit Application</BUTTON>
    </FIELDSET>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye bara form hai — har input field aur attribute uppercase hai. TEXTAREA, FIELDSET, LEGEND, SELECT bhi. 'Charset', 'titel' fix karo."
},

// ── H43 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 43</title>
</head>
<body>
  <h1>Video Tutorial Page</h1>
  <section>
    <h2>Lesson 1: Introduction</h2>
    <video width="640" height="360" controls poster="thumb1.jpg">
      <source src="lesson1.mp4" type="video/mp4">
      <source src="lesson1.webm" type="video/webm">
      <track kind="subtitles" src="lesson1-en.vtt" srclang="en" label="English">
      Your browser does not support video.
    </video>
    <p>Duration: 10 minutes</p>
  </section>
  <section>
    <h2>Lesson 2: Advanced Topics</h2>
    <audio controls>
      <source src="lesson2.mp3" type="audio/mpeg">
      <source src="lesson2.ogg" type="audio/ogg">
      Your browser does not support audio.
    </audio>
    <p>Duration: 15 minutes</p>
  </section>
  <section>
    <h2>Course Progress</h2>
    <progress value="40" max="100">40%</progress>
    <p>You have completed 2 out of 5 lessons.</p>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 43</titel>
</head>
<BODY>
  <H1>Video Tutorial Page</H1>
  <SECTION>
    <H2>Lesson 1: Introduction</H2>
    <VIDEO WIDTH="640" HEIGHT="360" CONTROLS POSTER="thumb1.jpg">
      <SOURCE SRC="lesson1.mp4" TYPE="video/mp4">
      <SOURCE SRC="lesson1.webm" TYPE="video/webm">
      <TRACK KIND="subtitles" SRC="lesson1-en.vtt" SRCLANG="en" LABEL="English">
      Your browser does not support video.
    </VIDEO>
    <P>Duration: 10 minutes</P>
  </SECTION>
  <SECTION>
    <H2>Lesson 2: Advanced Topics</H2>
    <AUDIO CONTROLS>
      <SOURCE SRC="lesson2.mp3" TYPE="audio/mpeg">
      <SOURCE SRC="lesson2.ogg" TYPE="audio/ogg">
      Your browser does not support audio.
    </AUDIO>
    <P>Duration: 15 minutes</P>
  </SECTION>
  <SECTION>
    <H2>Course Progress</H2>
    <PROGRESS VALUE="40" MAX="100">40%</PROGRESS>
    <P>You have completed 2 out of 5 lessons.</P>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "VIDEO, AUDIO, SOURCE, TRACK, PROGRESS sab uppercase hain. WIDTH, HEIGHT, CONTROLS, SRC attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H44 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 44</title>
</head>
<body>
  <h1>Event Booking Page</h1>
  <section>
    <h2>Upcoming Events</h2>
    <div class="event-list">
      <article class="event-card">
        <h3>Tech Conference 2024</h3>
        <p><time datetime="2024-11-15">15 November 2024</time></p>
        <p>Venue: Expo Center, Lahore</p>
        <a href="/events/tech-conf" class="details-link">View Details</a>
      </article>
      <article class="event-card">
        <h3>Music Festival</h3>
        <p><time datetime="2024-12-20">20 December 2024</time></p>
        <p>Venue: Open Grounds, Karachi</p>
        <a href="/events/music-fest" class="details-link">View Details</a>
      </article>
    </div>
  </section>
  <section>
    <h2>Book Your Seat</h2>
    <form action="/book-event" method="post">
      <label for="ename">Name:</label>
      <input type="text" id="ename" name="ename" required>
      <label for="eevent">Select Event:</label>
      <select id="eevent" name="eevent" multiple size="2">
        <option value="tech-conf">Tech Conference 2024</option>
        <option value="music-fest">Music Festival</option>
      </select>
      <label for="eseats">Number of Seats:</label>
      <input type="range" id="eseats" name="eseats" min="1" max="6" value="1">
      <output for="eseats">1</output>
      <button type="submit">Book Now</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 44</titel>
</head>
<BODY>
  <H1>Event Booking Page</H1>
  <SECTION>
    <H2>Upcoming Events</H2>
    <DIV CLASS="event-list">
      <ARTICLE CLASS="event-card">
        <H3>Tech Conference 2024</H3>
        <P><TIME DATETIME="2024-11-15">15 November 2024</TIME></P>
        <P>Venue: Expo Center, Lahore</P>
        <A HREF="/events/tech-conf" CLASS="details-link">View Details</A>
      </ARTICLE>
      <ARTICLE CLASS="event-card">
        <H3>Music Festival</H3>
        <P><TIME DATETIME="2024-12-20">20 December 2024</TIME></P>
        <P>Venue: Open Grounds, Karachi</P>
        <A HREF="/events/music-fest" CLASS="details-link">View Details</A>
      </ARTICLE>
    </DIV>
  </SECTION>
  <SECTION>
    <H2>Book Your Seat</H2>
    <FORM ACTION="/book-event" METHOD="post">
      <LABEL FOR="ename">Name:</LABEL>
      <INPUT TYPE="text" ID="ename" NAME="ename" REQUIRED>
      <LABEL FOR="eevent">Select Event:</LABEL>
      <SELECT ID="eevent" NAME="eevent" MULTIPLE SIZE="2">
        <OPTION VALUE="tech-conf">Tech Conference 2024</OPTION>
        <OPTION VALUE="music-fest">Music Festival</OPTION>
      </SELECT>
      <LABEL FOR="eseats">Number of Seats:</LABEL>
      <INPUT TYPE="range" ID="eseats" NAME="eseats" MIN="1" MAX="6" VALUE="1">
      <OUTPUT FOR="eseats">1</OUTPUT>
      <BUTTON TYPE="submit">Book Now</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "TIME, ARTICLE, OUTPUT tags bhi uppercase hain. DATETIME, MULTIPLE, SIZE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H45 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 45</title>
</head>
<body>
  <h1>Dashboard Layout</h1>
  <div class="dashboard">
    <aside class="sidebar">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><a href="/dashboard">Overview</a></li>
          <li><a href="/dashboard/reports">Reports</a></li>
          <li><a href="/dashboard/settings">Settings</a></li>
        </ul>
      </nav>
    </aside>
    <main class="content">
      <h2>Sales Overview</h2>
      <details open>
        <summary>Monthly Summary</summary>
        <p>Total sales: Rs. 1,250,000</p>
        <p>Total orders: 340</p>
      </details>
      <details>
        <summary>Yearly Summary</summary>
        <p>Total sales: Rs. 14,500,000</p>
        <p>Total orders: 4,120</p>
      </details>
      <dialog id="welcome-dialog" open>
        <p>Welcome back to your dashboard!</p>
        <button type="button">Close</button>
      </dialog>
    </main>
  </div>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 45</titel>
</head>
<BODY>
  <H1>Dashboard Layout</H1>
  <DIV CLASS="dashboard">
    <ASIDE CLASS="sidebar">
      <H2>Menu</H2>
      <NAV>
        <UL>
          <LI><A HREF="/dashboard">Overview</A></LI>
          <LI><A HREF="/dashboard/reports">Reports</A></LI>
          <LI><A HREF="/dashboard/settings">Settings</A></LI>
        </UL>
      </NAV>
    </ASIDE>
    <MAIN CLASS="content">
      <H2>Sales Overview</H2>
      <DETAILS OPEN>
        <SUMMARY>Monthly Summary</SUMMARY>
        <P>Total sales: Rs. 1,250,000</P>
        <P>Total orders: 340</P>
      </DETAILS>
      <DETAILS>
        <SUMMARY>Yearly Summary</SUMMARY>
        <P>Total sales: Rs. 14,500,000</P>
        <P>Total orders: 4,120</P>
      </DETAILS>
      <DIALOG ID="welcome-dialog" OPEN>
        <P>Welcome back to your dashboard!</P>
        <BUTTON TYPE="button">Close</BUTTON>
      </DIALOG>
    </MAIN>
  </DIV>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DETAILS, SUMMARY, DIALOG tags bhi uppercase. ASIDE, MAIN, OPEN attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H46 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 46</title>
</head>
<body>
  <h1>Pricing Plans</h1>
  <section>
    <h2>Choose Your Plan</h2>
    <div class="pricing-grid">
      <article class="plan-card">
        <h3>Basic Plan</h3>
        <p class="price">Rs. 999<span>/month</span></p>
        <ul>
          <li>5 Projects</li>
          <li>10 GB Storage</li>
          <li>Email Support</li>
        </ul>
        <button type="button" data-plan="basic">Choose Plan</button>
      </article>
      <article class="plan-card featured">
        <h3>Pro Plan</h3>
        <p class="price">Rs. 2499<span>/month</span></p>
        <ul>
          <li>Unlimited Projects</li>
          <li>100 GB Storage</li>
          <li>Priority Support</li>
        </ul>
        <button type="button" data-plan="pro">Choose Plan</button>
      </article>
      <article class="plan-card">
        <h3>Enterprise Plan</h3>
        <p class="price">Rs. 5999<span>/month</span></p>
        <ul>
          <li>Unlimited Everything</li>
          <li>1 TB Storage</li>
          <li>24/7 Phone Support</li>
        </ul>
        <button type="button" data-plan="enterprise">Choose Plan</button>
      </article>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 46</titel>
</head>
<BODY>
  <H1>Pricing Plans</H1>
  <SECTION>
    <H2>Choose Your Plan</H2>
    <DIV CLASS="pricing-grid">
      <ARTICLE CLASS="plan-card">
        <H3>Basic Plan</H3>
        <P CLASS="price">Rs. 999<SPAN>/month</SPAN></P>
        <UL>
          <LI>5 Projects</LI>
          <LI>10 GB Storage</LI>
          <LI>Email Support</LI>
        </UL>
        <BUTTON TYPE="button" DATA-PLAN="basic">Choose Plan</BUTTON>
      </ARTICLE>
      <ARTICLE CLASS="plan-card featured">
        <H3>Pro Plan</H3>
        <P CLASS="price">Rs. 2499<SPAN>/month</SPAN></P>
        <UL>
          <LI>Unlimited Projects</LI>
          <LI>100 GB Storage</LI>
          <LI>Priority Support</LI>
        </UL>
        <BUTTON TYPE="button" DATA-PLAN="pro">Choose Plan</BUTTON>
      </ARTICLE>
      <ARTICLE CLASS="plan-card">
        <H3>Enterprise Plan</H3>
        <P CLASS="price">Rs. 5999<SPAN>/month</SPAN></P>
        <UL>
          <LI>Unlimited Everything</LI>
          <LI>1 TB Storage</LI>
          <LI>24/7 Phone Support</LI>
        </UL>
        <BUTTON TYPE="button" DATA-PLAN="enterprise">Choose Plan</BUTTON>
      </ARTICLE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Teen pricing cards hain — har ek mein ARTICLE, SPAN, UL, LI, BUTTON sab uppercase. DATA-PLAN attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H47 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 47</title>
</head>
<body>
  <h1>Blog Post Page</h1>
  <article>
    <header>
      <h2>The Future of Web Development</h2>
      <p>By <a href="/author/ali">Ali Hassan</a> on <time datetime="2024-09-10">10 September 2024</time></p>
    </header>
    <figure>
      <img src="blog-cover.jpg" alt="Web Development" width="800" height="400">
      <figcaption>Modern web development trends</figcaption>
    </figure>
    <p>Web development continues to evolve rapidly with new frameworks.</p>
    <blockquote cite="https://source.com">
      <p>The web is the most powerful platform ever created.</p>
    </blockquote>
    <h3>Key Trends</h3>
    <ol>
      <li>Server-side rendering</li>
      <li>Progressive web apps</li>
      <li>AI-powered tools</li>
    </ol>
    <footer>
      <p>Tags: <a href="/tag/webdev">webdev</a>, <a href="/tag/trends">trends</a></p>
    </footer>
  </article>
  <section aria-label="Comments">
    <h3>Comments (2)</h3>
    <div class="comment">
      <p><strong>Sara:</strong> Great article, very informative!</p>
    </div>
    <div class="comment">
      <p><strong>Usman:</strong> Thanks for sharing this.</p>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 47</titel>
</head>
<BODY>
  <H1>Blog Post Page</H1>
  <ARTICLE>
    <HEADER>
      <H2>The Future of Web Development</H2>
      <P>By <A HREF="/author/ali">Ali Hassan</A> on <TIME DATETIME="2024-09-10">10 September 2024</TIME></P>
    </HEADER>
    <FIGURE>
      <IMG SRC="blog-cover.jpg" ALT="Web Development" WIDTH="800" HEIGHT="400">
      <FIGCAPTION>Modern web development trends</FIGCAPTION>
    </FIGURE>
    <P>Web development continues to evolve rapidly with new frameworks.</P>
    <BLOCKQUOTE CITE="https://source.com">
      <P>The web is the most powerful platform ever created.</P>
    </BLOCKQUOTE>
    <H3>Key Trends</H3>
    <OL>
      <LI>Server-side rendering</LI>
      <LI>Progressive web apps</LI>
      <LI>AI-powered tools</LI>
    </OL>
    <FOOTER>
      <P>Tags: <A HREF="/tag/webdev">webdev</A>, <A HREF="/tag/trends">trends</A></P>
    </FOOTER>
  </ARTICLE>
  <SECTION ARIA-LABEL="Comments">
    <H3>Comments (2)</H3>
    <DIV CLASS="comment">
      <P><STRONG>Sara:</STRONG> Great article, very informative!</P>
    </DIV>
    <DIV CLASS="comment">
      <P><STRONG>Usman:</STRONG> Thanks for sharing this.</P>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "ARTICLE, HEADER, FIGURE, FIGCAPTION, BLOCKQUOTE, FOOTER sab uppercase hain. Comments section ke DIV, STRONG bhi. 'Charset', 'titel' fix karo."
},

// ── H48 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 48</title>
</head>
<body>
  <h1>Weather Dashboard</h1>
  <section>
    <h2>Today's Forecast</h2>
    <div class="weather-card">
      <img src="sunny.png" alt="Sunny weather icon" width="64" height="64">
      <p class="temp">32°C</p>
      <p>Lahore, Punjab</p>
    </div>
  </section>
  <section>
    <h2>Weekly Forecast</h2>
    <table>
      <caption>7-Day Weather Outlook</caption>
      <colgroup>
        <col span="1" style="background-color: lightblue">
        <col span="6">
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">High</th>
          <th scope="col">Low</th>
          <th scope="col">Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Monday</th>
          <td>34°C</td>
          <td>22°C</td>
          <td>Sunny</td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>33°C</td>
          <td>21°C</td>
          <td>Partly Cloudy</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 48</titel>
</head>
<BODY>
  <H1>Weather Dashboard</H1>
  <SECTION>
    <H2>Today's Forecast</H2>
    <DIV CLASS="weather-card">
      <IMG SRC="sunny.png" ALT="Sunny weather icon" WIDTH="64" HEIGHT="64">
      <P CLASS="temp">32°C</P>
      <P>Lahore, Punjab</P>
    </DIV>
  </SECTION>
  <SECTION>
    <H2>Weekly Forecast</H2>
    <TABLE>
      <CAPTION>7-Day Weather Outlook</CAPTION>
      <COLGROUP>
        <COL SPAN="1" STYLE="background-color: lightblue">
        <COL SPAN="6">
      </COLGROUP>
      <THEAD>
        <TR>
          <TH SCOPE="col">Day</TH>
          <TH SCOPE="col">High</TH>
          <TH SCOPE="col">Low</TH>
          <TH SCOPE="col">Condition</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TH SCOPE="row">Monday</TH>
          <TD>34°C</TD>
          <TD>22°C</TD>
          <TD>Sunny</TD>
        </TR>
        <TR>
          <TH SCOPE="row">Tuesday</TH>
          <TD>33°C</TD>
          <TD>21°C</TD>
          <TD>Partly Cloudy</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "CAPTION, COLGROUP, COL tags bhi uppercase hain — kam istemal hone wale tags. SCOPE attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H49 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 49</title>
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <style>
    body { margin: 0; font-family: sans-serif; }
  </style>
</head>
<body>
  <header>
    <h1>Online Library Catalog</h1>
    <nav>
      <ul>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/my-books">My Books</a></li>
        <li><a href="/account">Account</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Search Books</h2>
      <form action="/search" method="get" role="search">
        <label for="bsearch">Search:</label>
        <input type="search" id="bsearch" name="q" placeholder="Title, author, or ISBN">
        <button type="submit">Search</button>
      </form>
    </section>
    <section>
      <h2>Available Books</h2>
      <div class="book-grid">
        <article class="book-card">
          <img src="book1.jpg" alt="Book Cover 1" loading="lazy">
          <h3>Learn JavaScript</h3>
          <p>by John Smith</p>
          <a href="/book/1">Borrow</a>
        </article>
        <article class="book-card">
          <img src="book2.jpg" alt="Book Cover 2" loading="lazy">
          <h3>CSS Mastery</h3>
          <p>by Jane Doe</p>
          <a href="/book/2">Borrow</a>
        </article>
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Online Library. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 49</titel>
  <LINK REL="icon" HREF="favicon.ico" TYPE="image/x-icon">
  <LINK REL="preconnect" HREF="https://fonts.googleapis.com">
  <STYLE>
    body { margin: 0; font-family: sans-serif; }
  </STYLE>
</head>
<BODY>
  <HEADER>
    <H1>Online Library Catalog</H1>
    <NAV>
      <UL>
        <LI><A HREF="/catalog">Catalog</A></LI>
        <LI><A HREF="/my-books">My Books</A></LI>
        <LI><A HREF="/account">Account</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Search Books</H2>
      <FORM ACTION="/search" METHOD="get" ROLE="search">
        <LABEL FOR="bsearch">Search:</LABEL>
        <INPUT TYPE="search" ID="bsearch" NAME="q" PLACEHOLDER="Title, author, or ISBN">
        <BUTTON TYPE="submit">Search</BUTTON>
      </FORM>
    </SECTION>
    <SECTION>
      <H2>Available Books</H2>
      <DIV CLASS="book-grid">
        <ARTICLE CLASS="book-card">
          <IMG SRC="book1.jpg" ALT="Book Cover 1" LOADING="lazy">
          <H3>Learn JavaScript</H3>
          <P>by John Smith</P>
          <A HREF="/book/1">Borrow</A>
        </ARTICLE>
        <ARTICLE CLASS="book-card">
          <IMG SRC="book2.jpg" ALT="Book Cover 2" LOADING="lazy">
          <H3>CSS Mastery</H3>
          <P>by Jane Doe</P>
          <A HREF="/book/2">Borrow</A>
        </ARTICLE>
      </DIV>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Online Library. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "LINK, STYLE, HEADER, NAV, MAIN, FOOTER sab uppercase. ROLE attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H50 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Final hard practice page with everything">
  <meta name="author" content="Practice App">
  <title>Hard Page 50</title>
  <link rel="stylesheet" href="final.css">
  <link rel="canonical" href="https://mysite.com/page50">
  <script src="final.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>Final Mega Practice Page</h1>
    <nav role="navigation" aria-label="Primary">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="profile-heading">
      <h2 id="profile-heading">Student Profile</h2>
      <figure>
        <img src="avatar.jpg" alt="Student Avatar" width="120" height="120" loading="lazy">
        <figcaption>Hamza Ali</figcaption>
      </figure>
      <details open>
        <summary>Course Progress</summary>
        <progress value="65" max="100">65%</progress>
        <meter value="0.65" min="0" max="1">65%</meter>
      </details>
    </section>
    <section>
      <h2>Quick Quiz</h2>
      <form action="/quiz-submit" method="post">
        <fieldset>
          <legend>Question</legend>
          <p>Which tag is used for tables?</p>
          <label><input type="radio" name="ans" value="table"> table</label>
          <label><input type="radio" name="ans" value="div"> div</label>
        </fieldset>
        <button type="submit" aria-label="Submit your answer">Submit</button>
      </form>
    </section>
  </main>
  <aside>
    <h2>Related Links</h2>
    <ul>
      <li><a href="/help">Help Center</a></li>
      <li><a href="/faq">FAQ</a></li>
    </ul>
  </aside>
  <footer role="contentinfo">
    <small>&copy; 2024 Practice App. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Final hard practice page with everything">
  <META NAME="author" CONTENT="Practice App">
  <titel>Hard Page 50</titel>
  <LINK REL="stylesheet" HREF="final.css">
  <LINK REL="canonical" HREF="https://mysite.com/page50">
  <SCRIPT SRC="final.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Final Mega Practice Page</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Primary">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/courses">Courses</A></LI>
        <LI><A HREF="/profile">Profile</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="profile-heading">
      <H2 ID="profile-heading">Student Profile</H2>
      <FIGURE>
        <IMG SRC="avatar.jpg" ALT="Student Avatar" WIDTH="120" HEIGHT="120" LOADING="lazy">
        <FIGCAPTION>Hamza Ali</FIGCAPTION>
      </FIGURE>
      <DETAILS OPEN>
        <SUMMARY>Course Progress</SUMMARY>
        <PROGRESS VALUE="65" MAX="100">65%</PROGRESS>
        <METER VALUE="0.65" MIN="0" MAX="1">65%</METER>
      </DETAILS>
    </SECTION>
    <SECTION>
      <H2>Quick Quiz</H2>
      <FORM ACTION="/quiz-submit" METHOD="post">
        <FIELDSET>
          <LEGEND>Question</LEGEND>
          <P>Which tag is used for tables?</P>
          <LABEL><INPUT TYPE="radio" NAME="ans" VALUE="table"> table</LABEL>
          <LABEL><INPUT TYPE="radio" NAME="ans" VALUE="div"> div</LABEL>
        </FIELDSET>
        <BUTTON TYPE="submit" ARIA-LABEL="Submit your answer">Submit</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <ASIDE>
    <H2>Related Links</H2>
    <UL>
      <LI><A HREF="/help">Help Center</A></LI>
      <LI><A HREF="/faq">FAQ</A></LI>
    </UL>
  </ASIDE>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 Practice App. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye final mega page hai — saare tags head se footer tak uppercase. FIGURE, DETAILS, PROGRESS, METER, FIELDSET sab. Aria attributes bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H51–H60) ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code
   'wrong'   field = galat version

   Mistakes:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, scirpt → script)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H51 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 51</title>
</head>
<body>
  <h1>Hotel Booking Page</h1>
  <section>
    <h2>Available Rooms</h2>
    <div class="room-grid">
      <article class="room-card">
        <img src="room1.jpg" alt="Deluxe Room" width="300" height="200" loading="lazy">
        <h3>Deluxe Room</h3>
        <p>Rs. 8,500 / night</p>
        <button type="button" data-room="deluxe">Book Now</button>
      </article>
      <article class="room-card">
        <img src="room2.jpg" alt="Suite Room" width="300" height="200" loading="lazy">
        <h3>Executive Suite</h3>
        <p>Rs. 15,000 / night</p>
        <button type="button" data-room="suite">Book Now</button>
      </article>
    </div>
  </section>
  <section>
    <h2>Reservation Form</h2>
    <form action="/reserve" method="post">
      <label for="checkin">Check-in Date:</label>
      <input type="date" id="checkin" name="checkin" required>
      <label for="checkout">Check-out Date:</label>
      <input type="date" id="checkout" name="checkout" required>
      <label for="guests">Number of Guests:</label>
      <input type="number" id="guests" name="guests" min="1" max="8" value="2">
      <label for="roomtype">Room Type:</label>
      <select id="roomtype" name="roomtype">
        <option value="deluxe">Deluxe Room</option>
        <option value="suite">Executive Suite</option>
      </select>
      <button type="submit">Confirm Reservation</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 51</titel>
</head>
<BODY>
  <H1>Hotel Booking Page</H1>
  <SECTION>
    <H2>Available Rooms</H2>
    <DIV CLASS="room-grid">
      <ARTICLE CLASS="room-card">
        <IMG SRC="room1.jpg" ALT="Deluxe Room" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <H3>Deluxe Room</H3>
        <P>Rs. 8,500 / night</P>
        <BUTTON TYPE="button" DATA-ROOM="deluxe">Book Now</BUTTON>
      </ARTICLE>
      <ARTICLE CLASS="room-card">
        <IMG SRC="room2.jpg" ALT="Suite Room" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <H3>Executive Suite</H3>
        <P>Rs. 15,000 / night</P>
        <BUTTON TYPE="button" DATA-ROOM="suite">Book Now</BUTTON>
      </ARTICLE>
    </DIV>
  </SECTION>
  <SECTION>
    <H2>Reservation Form</H2>
    <FORM ACTION="/reserve" METHOD="post">
      <LABEL FOR="checkin">Check-in Date:</LABEL>
      <INPUT TYPE="date" ID="checkin" NAME="checkin" REQUIRED>
      <LABEL FOR="checkout">Check-out Date:</LABEL>
      <INPUT TYPE="date" ID="checkout" NAME="checkout" REQUIRED>
      <LABEL FOR="guests">Number of Guests:</LABEL>
      <INPUT TYPE="number" ID="guests" NAME="guests" MIN="1" MAX="8" VALUE="2">
      <LABEL FOR="roomtype">Room Type:</LABEL>
      <SELECT ID="roomtype" NAME="roomtype">
        <OPTION VALUE="deluxe">Deluxe Room</OPTION>
        <OPTION VALUE="suite">Executive Suite</OPTION>
      </SELECT>
      <BUTTON TYPE="submit">Confirm Reservation</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "ARTICLE, IMG, BUTTON, FORM, INPUT, SELECT sab uppercase hain. DATA-ROOM attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H52 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 52</title>
</head>
<body>
  <h1>Music Player Page</h1>
  <section>
    <h2>Now Playing</h2>
    <div class="player">
      <img src="album-art.jpg" alt="Album Cover" width="200" height="200">
      <h3>Song Title</h3>
      <p>Artist Name</p>
      <audio controls autoplay loop>
        <source src="song.mp3" type="audio/mpeg">
        <source src="song.ogg" type="audio/ogg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </section>
  <section>
    <h2>Playlist</h2>
    <ol>
      <li>
        <span>Track One</span>
        <button type="button" aria-label="Play Track One">Play</button>
      </li>
      <li>
        <span>Track Two</span>
        <button type="button" aria-label="Play Track Two">Play</button>
      </li>
      <li>
        <span>Track Three</span>
        <button type="button" aria-label="Play Track Three">Play</button>
      </li>
    </ol>
  </section>
  <section>
    <h2>Volume Control</h2>
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume" min="0" max="100" value="70">
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 52</titel>
</head>
<BODY>
  <H1>Music Player Page</H1>
  <SECTION>
    <H2>Now Playing</H2>
    <DIV CLASS="player">
      <IMG SRC="album-art.jpg" ALT="Album Cover" WIDTH="200" HEIGHT="200">
      <H3>Song Title</H3>
      <P>Artist Name</P>
      <AUDIO CONTROLS AUTOPLAY LOOP>
        <SOURCE SRC="song.mp3" TYPE="audio/mpeg">
        <SOURCE SRC="song.ogg" TYPE="audio/ogg">
        Your browser does not support the audio element.
      </AUDIO>
    </DIV>
  </SECTION>
  <SECTION>
    <H2>Playlist</H2>
    <OL>
      <LI>
        <SPAN>Track One</SPAN>
        <BUTTON TYPE="button" ARIA-LABEL="Play Track One">Play</BUTTON>
      </LI>
      <LI>
        <SPAN>Track Two</SPAN>
        <BUTTON TYPE="button" ARIA-LABEL="Play Track Two">Play</BUTTON>
      </LI>
      <LI>
        <SPAN>Track Three</SPAN>
        <BUTTON TYPE="button" ARIA-LABEL="Play Track Three">Play</BUTTON>
      </LI>
    </OL>
  </SECTION>
  <SECTION>
    <H2>Volume Control</H2>
    <LABEL FOR="volume">Volume:</LABEL>
    <INPUT TYPE="range" ID="volume" NAME="volume" MIN="0" MAX="100" VALUE="70">
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "AUDIO, SOURCE, OL, LI, SPAN, BUTTON sab uppercase hain. AUTOPLAY, LOOP attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H53 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 53</title>
</head>
<body>
  <h1>School Result Portal</h1>
  <section>
    <h2>Check Your Result</h2>
    <form action="/check-result" method="get">
      <label for="rollno">Roll Number:</label>
      <input type="text" id="rollno" name="rollno" required pattern="[0-9]{6}" placeholder="e.g. 123456">
      <label for="rclass">Class:</label>
      <select id="rclass" name="rclass">
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
        <option value="11">Class 11</option>
        <option value="12">Class 12</option>
      </select>
      <button type="submit">Check Result</button>
    </form>
  </section>
  <section>
    <h2>Sample Result Card</h2>
    <table>
      <caption>Result for Roll No. 123456</caption>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Marks Obtained</th>
          <th>Total Marks</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mathematics</td>
          <td>92</td>
          <td>100</td>
          <td>A+</td>
        </tr>
        <tr>
          <td>Physics</td>
          <td>85</td>
          <td>100</td>
          <td>A</td>
        </tr>
        <tr>
          <td>English</td>
          <td>78</td>
          <td>100</td>
          <td>B+</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 53</titel>
</head>
<BODY>
  <H1>School Result Portal</H1>
  <SECTION>
    <H2>Check Your Result</H2>
    <FORM ACTION="/check-result" METHOD="get">
      <LABEL FOR="rollno">Roll Number:</LABEL>
      <INPUT TYPE="text" ID="rollno" NAME="rollno" REQUIRED PATTERN="[0-9]{6}" PLACEHOLDER="e.g. 123456">
      <LABEL FOR="rclass">Class:</LABEL>
      <SELECT ID="rclass" NAME="rclass">
        <OPTION VALUE="9">Class 9</OPTION>
        <OPTION VALUE="10">Class 10</OPTION>
        <OPTION VALUE="11">Class 11</OPTION>
        <OPTION VALUE="12">Class 12</OPTION>
      </SELECT>
      <BUTTON TYPE="submit">Check Result</BUTTON>
    </FORM>
  </SECTION>
  <SECTION>
    <H2>Sample Result Card</H2>
    <TABLE>
      <CAPTION>Result for Roll No. 123456</CAPTION>
      <THEAD>
        <TR>
          <TH>Subject</TH>
          <TH>Marks Obtained</TH>
          <TH>Total Marks</TH>
          <TH>Grade</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Mathematics</TD>
          <TD>92</TD>
          <TD>100</TD>
          <TD>A+</TD>
        </TR>
        <TR>
          <TD>Physics</TD>
          <TD>85</TD>
          <TD>100</TD>
          <TD>A</TD>
        </TR>
        <TR>
          <TD>English</TD>
          <TD>78</TD>
          <TD>100</TD>
          <TD>B+</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "TABLE, CAPTION, THEAD, TBODY, TR, TH, TD sab uppercase. PATTERN, REQUIRED attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H54 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 54</title>
</head>
<body>
  <h1>Social Media Profile</h1>
  <section>
    <div class="profile-header">
      <img src="profile-pic.jpg" alt="Profile Picture" width="150" height="150">
      <h2>Ahmed Khan</h2>
      <p>Web Developer | Lahore</p>
      <button type="button">Follow</button>
      <button type="button">Message</button>
    </div>
  </section>
  <section>
    <h2>Posts</h2>
    <article class="post">
      <header>
        <h3>Ahmed Khan</h3>
        <time datetime="2024-08-01">1 August 2024</time>
      </header>
      <p>Just finished a new project using React and Node.js!</p>
      <img src="post1.jpg" alt="Project Screenshot" loading="lazy">
      <footer>
        <button type="button" aria-label="Like this post">Like</button>
        <button type="button" aria-label="Comment on this post">Comment</button>
        <button type="button" aria-label="Share this post">Share</button>
      </footer>
    </article>
  </section>
  <aside>
    <h2>Suggested Friends</h2>
    <ul>
      <li><a href="/profile/sara">Sara Ahmed</a></li>
      <li><a href="/profile/usman">Usman Tariq</a></li>
    </ul>
  </aside>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 54</titel>
</head>
<BODY>
  <H1>Social Media Profile</H1>
  <SECTION>
    <DIV CLASS="profile-header">
      <IMG SRC="profile-pic.jpg" ALT="Profile Picture" WIDTH="150" HEIGHT="150">
      <H2>Ahmed Khan</H2>
      <P>Web Developer | Lahore</P>
      <BUTTON TYPE="button">Follow</BUTTON>
      <BUTTON TYPE="button">Message</BUTTON>
    </DIV>
  </SECTION>
  <SECTION>
    <H2>Posts</H2>
    <ARTICLE CLASS="post">
      <HEADER>
        <H3>Ahmed Khan</H3>
        <TIME DATETIME="2024-08-01">1 August 2024</TIME>
      </HEADER>
      <P>Just finished a new project using React and Node.js!</P>
      <IMG SRC="post1.jpg" ALT="Project Screenshot" LOADING="lazy">
      <FOOTER>
        <BUTTON TYPE="button" ARIA-LABEL="Like this post">Like</BUTTON>
        <BUTTON TYPE="button" ARIA-LABEL="Comment on this post">Comment</BUTTON>
        <BUTTON TYPE="button" ARIA-LABEL="Share this post">Share</BUTTON>
      </FOOTER>
    </ARTICLE>
  </SECTION>
  <ASIDE>
    <H2>Suggested Friends</H2>
    <UL>
      <LI><A HREF="/profile/sara">Sara Ahmed</A></LI>
      <LI><A HREF="/profile/usman">Usman Tariq</A></LI>
    </UL>
  </ASIDE>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "ARTICLE, HEADER, TIME, FOOTER, ASIDE sab uppercase hain. ARIA-LABEL attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H55 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 55</title>
</head>
<body>
  <h1>E-commerce Product Page</h1>
  <section>
    <div class="product-detail">
      <figure>
        <img src="product-main.jpg" alt="Wireless Headphones" width="400" height="400">
        <figcaption>Wireless Headphones - Black</figcaption>
      </figure>
      <div class="product-info">
        <h2>Wireless Headphones</h2>
        <p class="price">Rs. 4,999</p>
        <p>Premium sound quality with noise cancellation.</p>
        <label for="color">Color:</label>
        <select id="color" name="color">
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
        </select>
        <label for="qty">Quantity:</label>
        <input type="number" id="qty" name="qty" min="1" max="5" value="1">
        <button type="button">Add to Cart</button>
        <button type="button">Buy Now</button>
      </div>
    </div>
  </section>
  <section>
    <h2>Customer Reviews</h2>
    <div class="review">
      <p><strong>Bilal:</strong> Excellent sound quality, worth the price!</p>
      <p>Rating: ★★★★★</p>
    </div>
    <div class="review">
      <p><strong>Fatima:</strong> Good but battery life could be better.</p>
      <p>Rating: ★★★★☆</p>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 55</titel>
</head>
<BODY>
  <H1>E-commerce Product Page</H1>
  <SECTION>
    <DIV CLASS="product-detail">
      <FIGURE>
        <IMG SRC="product-main.jpg" ALT="Wireless Headphones" WIDTH="400" HEIGHT="400">
        <FIGCAPTION>Wireless Headphones - Black</FIGCAPTION>
      </FIGURE>
      <DIV CLASS="product-info">
        <H2>Wireless Headphones</H2>
        <P CLASS="price">Rs. 4,999</P>
        <P>Premium sound quality with noise cancellation.</P>
        <LABEL FOR="color">Color:</LABEL>
        <SELECT ID="color" NAME="color">
          <OPTION VALUE="black">Black</OPTION>
          <OPTION VALUE="white">White</OPTION>
          <OPTION VALUE="blue">Blue</OPTION>
        </SELECT>
        <LABEL FOR="qty">Quantity:</LABEL>
        <INPUT TYPE="number" ID="qty" NAME="qty" MIN="1" MAX="5" VALUE="1">
        <BUTTON TYPE="button">Add to Cart</BUTTON>
        <BUTTON TYPE="button">Buy Now</BUTTON>
      </DIV>
    </DIV>
  </SECTION>
  <SECTION>
    <H2>Customer Reviews</H2>
    <DIV CLASS="review">
      <P><STRONG>Bilal:</STRONG> Excellent sound quality, worth the price!</P>
      <P>Rating: ★★★★★</P>
    </DIV>
    <DIV CLASS="review">
      <P><STRONG>Fatima:</STRONG> Good but battery life could be better.</P>
      <P>Rating: ★★★★☆</P>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "FIGURE, FIGCAPTION, SELECT, OPTION, STRONG sab uppercase. Product info aur reviews dono sections check karo. 'Charset', 'titel' fix karo."
},

// ── H56 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 56</title>
</head>
<body>
  <h1>Bug Tracker Page</h1>
  <section>
    <h2>Report a Bug</h2>
    <form action="/report-bug" method="post">
      <label for="btitle">Bug Title:</label>
      <input type="text" id="btitle" name="btitle" required>
      <label for="bpriority">Priority:</label>
      <select id="bpriority" name="bpriority">
        <option value="low">Low</option>
        <option value="medium" selected>Medium</option>
        <option value="high">High</option>
        <option value="critical">Critical</option>
      </select>
      <label for="bdesc">Description:</label>
      <textarea id="bdesc" name="bdesc" rows="6" cols="50" required></textarea>
      <label for="battach">Attach Screenshot:</label>
      <input type="file" id="battach" name="battach" accept="image/*">
      <button type="submit">Submit Bug</button>
    </form>
  </section>
  <section>
    <h2>Open Bugs</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#101</td>
          <td>Login button not working</td>
          <td>High</td>
          <td>Open</td>
        </tr>
        <tr>
          <td>#102</td>
          <td>Footer alignment issue</td>
          <td>Low</td>
          <td>In Progress</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 56</titel>
</head>
<BODY>
  <H1>Bug Tracker Page</H1>
  <SECTION>
    <H2>Report a Bug</H2>
    <FORM ACTION="/report-bug" METHOD="post">
      <LABEL FOR="btitle">Bug Title:</LABEL>
      <INPUT TYPE="text" ID="btitle" NAME="btitle" REQUIRED>
      <LABEL FOR="bpriority">Priority:</LABEL>
      <SELECT ID="bpriority" NAME="bpriority">
        <OPTION VALUE="low">Low</OPTION>
        <OPTION VALUE="medium" SELECTED>Medium</OPTION>
        <OPTION VALUE="high">High</OPTION>
        <OPTION VALUE="critical">Critical</OPTION>
      </SELECT>
      <LABEL FOR="bdesc">Description:</LABEL>
      <TEXTAREA ID="bdesc" NAME="bdesc" ROWS="6" COLS="50" REQUIRED></TEXTAREA>
      <LABEL FOR="battach">Attach Screenshot:</LABEL>
      <INPUT TYPE="file" ID="battach" NAME="battach" ACCEPT="image/*">
      <BUTTON TYPE="submit">Submit Bug</BUTTON>
    </FORM>
  </SECTION>
  <SECTION>
    <H2>Open Bugs</H2>
    <TABLE>
      <THEAD>
        <TR>
          <TH>ID</TH>
          <TH>Title</TH>
          <TH>Priority</TH>
          <TH>Status</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>#101</TD>
          <TD>Login button not working</TD>
          <TD>High</TD>
          <TD>Open</TD>
        </TR>
        <TR>
          <TD>#102</TD>
          <TD>Footer alignment issue</TD>
          <TD>Low</TD>
          <TD>In Progress</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "TEXTAREA, SELECT, OPTION, SELECTED sab uppercase hain. TABLE, THEAD, TBODY bhi. 'Charset', 'titel' fix karo."
},

// ── H57 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 57</title>
</head>
<body>
  <h1>Real Estate Listing</h1>
  <section>
    <h2>Featured Properties</h2>
    <div class="property-grid">
      <article class="property-card">
        <img src="house1.jpg" alt="3 Bedroom House" width="350" height="220" loading="lazy">
        <h3>3 Bedroom House</h3>
        <p>DHA Phase 5, Lahore</p>
        <p class="price">Rs. 25,000,000</p>
        <a href="/property/1" class="view-link">View Details</a>
      </article>
      <article class="property-card">
        <img src="house2.jpg" alt="Modern Apartment" width="350" height="220" loading="lazy">
        <h3>Modern Apartment</h3>
        <p>Clifton, Karachi</p>
        <p class="price">Rs. 18,500,000</p>
        <a href="/property/2" class="view-link">View Details</a>
      </article>
    </div>
  </section>
  <section>
    <h2>Filter Properties</h2>
    <form action="/filter" method="get">
      <label for="ptype">Property Type:</label>
      <select id="ptype" name="ptype">
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="plot">Plot</option>
      </select>
      <label for="pbudget">Max Budget:</label>
      <input type="range" id="pbudget" name="pbudget" min="1000000" max="50000000" step="500000">
      <button type="submit">Apply Filter</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 57</titel>
</head>
<BODY>
  <H1>Real Estate Listing</H1>
  <SECTION>
    <H2>Featured Properties</H2>
    <DIV CLASS="property-grid">
      <ARTICLE CLASS="property-card">
        <IMG SRC="house1.jpg" ALT="3 Bedroom House" WIDTH="350" HEIGHT="220" LOADING="lazy">
        <H3>3 Bedroom House</H3>
        <P>DHA Phase 5, Lahore</P>
        <P CLASS="price">Rs. 25,000,000</P>
        <A HREF="/property/1" CLASS="view-link">View Details</A>
      </ARTICLE>
      <ARTICLE CLASS="property-card">
        <IMG SRC="house2.jpg" ALT="Modern Apartment" WIDTH="350" HEIGHT="220" LOADING="lazy">
        <H3>Modern Apartment</H3>
        <P>Clifton, Karachi</P>
        <P CLASS="price">Rs. 18,500,000</P>
        <A HREF="/property/2" CLASS="view-link">View Details</A>
      </ARTICLE>
    </DIV>
  </SECTION>
  <SECTION>
    <H2>Filter Properties</H2>
    <FORM ACTION="/filter" METHOD="get">
      <LABEL FOR="ptype">Property Type:</LABEL>
      <SELECT ID="ptype" NAME="ptype">
        <OPTION VALUE="house">House</OPTION>
        <OPTION VALUE="apartment">Apartment</OPTION>
        <OPTION VALUE="plot">Plot</OPTION>
      </SELECT>
      <LABEL FOR="pbudget">Max Budget:</LABEL>
      <INPUT TYPE="range" ID="pbudget" NAME="pbudget" MIN="1000000" MAX="50000000" STEP="500000">
      <BUTTON TYPE="submit">Apply Filter</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "ARTICLE, IMG, SELECT, OPTION sab uppercase hain. STEP attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H58 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 58</title>
</head>
<body>
  <h1>Fitness Tracker Dashboard</h1>
  <section>
    <h2>Today's Activity</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Steps</h3>
        <p>8,542</p>
        <progress value="8542" max="10000">85%</progress>
      </div>
      <div class="stat-card">
        <h3>Calories Burned</h3>
        <p>420 kcal</p>
        <progress value="420" max="600">70%</progress>
      </div>
      <div class="stat-card">
        <h3>Water Intake</h3>
        <p>1.8 L</p>
        <meter value="1.8" min="0" max="3">60%</meter>
      </div>
    </div>
  </section>
  <section>
    <h2>Log Workout</h2>
    <form action="/log-workout" method="post">
      <label for="wtype">Workout Type:</label>
      <select id="wtype" name="wtype">
        <option value="running">Running</option>
        <option value="cycling">Cycling</option>
        <option value="yoga">Yoga</option>
      </select>
      <label for="wduration">Duration (minutes):</label>
      <input type="number" id="wduration" name="wduration" min="1" max="300">
      <button type="submit">Log Workout</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 58</titel>
</head>
<BODY>
  <H1>Fitness Tracker Dashboard</H1>
  <SECTION>
    <H2>Today's Activity</H2>
    <DIV CLASS="stats-grid">
      <DIV CLASS="stat-card">
        <H3>Steps</H3>
        <P>8,542</P>
        <PROGRESS VALUE="8542" MAX="10000">85%</PROGRESS>
      </DIV>
      <DIV CLASS="stat-card">
        <H3>Calories Burned</H3>
        <P>420 kcal</P>
        <PROGRESS VALUE="420" MAX="600">70%</PROGRESS>
      </DIV>
      <DIV CLASS="stat-card">
        <H3>Water Intake</H3>
        <P>1.8 L</P>
        <METER VALUE="1.8" MIN="0" MAX="3">60%</METER>
      </DIV>
    </DIV>
  </SECTION>
  <SECTION>
    <H2>Log Workout</H2>
    <FORM ACTION="/log-workout" METHOD="post">
      <LABEL FOR="wtype">Workout Type:</LABEL>
      <SELECT ID="wtype" NAME="wtype">
        <OPTION VALUE="running">Running</OPTION>
        <OPTION VALUE="cycling">Cycling</OPTION>
        <OPTION VALUE="yoga">Yoga</OPTION>
      </SELECT>
      <LABEL FOR="wduration">Duration (minutes):</LABEL>
      <INPUT TYPE="number" ID="wduration" NAME="wduration" MIN="1" MAX="300">
      <BUTTON TYPE="submit">Log Workout</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "PROGRESS, METER sab uppercase hain — stats cards mein. FORM ke andar SELECT, INPUT bhi. 'Charset', 'titel' fix karo."
},

// ── H59 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 59</title>
</head>
<body>
  <h1>Online Course Page</h1>
  <section>
    <h2>Course Curriculum</h2>
    <details open>
      <summary>Module 1: HTML Basics</summary>
      <ul>
        <li>Introduction to Tags</li>
        <li>Document Structure</li>
        <li>Forms and Inputs</li>
      </ul>
    </details>
    <details>
      <summary>Module 2: CSS Fundamentals</summary>
      <ul>
        <li>Selectors and Properties</li>
        <li>Flexbox and Grid</li>
        <li>Responsive Design</li>
      </ul>
    </details>
    <details>
      <summary>Module 3: JavaScript Basics</summary>
      <ul>
        <li>Variables and Functions</li>
        <li>DOM Manipulation</li>
        <li>Event Handling</li>
      </ul>
    </details>
  </section>
  <section>
    <h2>Enroll Now</h2>
    <form action="/enroll" method="post">
      <label for="ename">Full Name:</label>
      <input type="text" id="ename" name="ename" required>
      <label for="eemail">Email:</label>
      <input type="email" id="eemail" name="eemail" required>
      <button type="submit">Enroll Now</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 59</titel>
</head>
<BODY>
  <H1>Online Course Page</H1>
  <SECTION>
    <H2>Course Curriculum</H2>
    <DETAILS OPEN>
      <SUMMARY>Module 1: HTML Basics</SUMMARY>
      <UL>
        <LI>Introduction to Tags</LI>
        <LI>Document Structure</LI>
        <LI>Forms and Inputs</LI>
      </UL>
    </DETAILS>
    <DETAILS>
      <SUMMARY>Module 2: CSS Fundamentals</SUMMARY>
      <UL>
        <LI>Selectors and Properties</LI>
        <LI>Flexbox and Grid</LI>
        <LI>Responsive Design</LI>
      </UL>
    </DETAILS>
    <DETAILS>
      <SUMMARY>Module 3: JavaScript Basics</SUMMARY>
      <UL>
        <LI>Variables and Functions</LI>
        <LI>DOM Manipulation</LI>
        <LI>Event Handling</LI>
      </UL>
    </DETAILS>
  </SECTION>
  <SECTION>
    <H2>Enroll Now</H2>
    <FORM ACTION="/enroll" METHOD="post">
      <LABEL FOR="ename">Full Name:</LABEL>
      <INPUT TYPE="text" ID="ename" NAME="ename" REQUIRED>
      <LABEL FOR="eemail">Email:</LABEL>
      <INPUT TYPE="email" ID="eemail" NAME="eemail" REQUIRED>
      <BUTTON TYPE="submit">Enroll Now</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "Teen DETAILS/SUMMARY blocks hain — sab uppercase. UL, LI bhi. 'Charset', 'titel' fix karo."
},

// ── H60 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Final page for batch sixty">
  <title>Hard Page 60</title>
  <link rel="stylesheet" href="batch60.css">
  <script src="batch60.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>Travel Blog Homepage</h1>
    <nav role="navigation" aria-label="Main navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/destinations">Destinations</a></li>
        <li><a href="/about">About Me</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="featured-heading">
      <h2 id="featured-heading">Featured Destination</h2>
      <figure>
        <img src="hunza.jpg" alt="Hunza Valley" width="800" height="450" loading="lazy">
        <figcaption>Hunza Valley, Pakistan</figcaption>
      </figure>
      <blockquote cite="https://blog.com/hunza">
        <p>One of the most breathtaking valleys I have ever visited.</p>
      </blockquote>
    </section>
    <section>
      <h2>Recent Posts</h2>
      <article>
        <h3><a href="/post/skardu">A Week in Skardu</a></h3>
        <p><time datetime="2024-07-15">15 July 2024</time></p>
      </article>
      <article>
        <h3><a href="/post/swat">Exploring Swat Valley</a></h3>
        <p><time datetime="2024-06-10">10 June 2024</time></p>
      </article>
    </section>
  </main>
  <aside>
    <h2>Subscribe</h2>
    <form action="/subscribe" method="post">
      <input type="email" name="email" placeholder="your@email.com" required>
      <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
    </form>
  </aside>
  <footer role="contentinfo">
    <small>&copy; 2024 Travel Blog. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Final page for batch sixty">
  <titel>Hard Page 60</titel>
  <LINK REL="stylesheet" HREF="batch60.css">
  <SCRIPT SRC="batch60.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Travel Blog Homepage</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/destinations">Destinations</A></LI>
        <LI><A HREF="/about">About Me</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="featured-heading">
      <H2 ID="featured-heading">Featured Destination</H2>
      <FIGURE>
        <IMG SRC="hunza.jpg" ALT="Hunza Valley" WIDTH="800" HEIGHT="450" LOADING="lazy">
        <FIGCAPTION>Hunza Valley, Pakistan</FIGCAPTION>
      </FIGURE>
      <BLOCKQUOTE CITE="https://blog.com/hunza">
        <P>One of the most breathtaking valleys I have ever visited.</P>
      </BLOCKQUOTE>
    </SECTION>
    <SECTION>
      <H2>Recent Posts</H2>
      <ARTICLE>
        <H3><A HREF="/post/skardu">A Week in Skardu</A></H3>
        <P><TIME DATETIME="2024-07-15">15 July 2024</TIME></P>
      </ARTICLE>
      <ARTICLE>
        <H3><A HREF="/post/swat">Exploring Swat Valley</A></H3>
        <P><TIME DATETIME="2024-06-10">10 June 2024</TIME></P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <ASIDE>
    <H2>Subscribe</H2>
    <FORM ACTION="/subscribe" METHOD="post">
      <INPUT TYPE="email" NAME="email" PLACEHOLDER="your@email.com" REQUIRED>
      <BUTTON TYPE="submit" ARIA-LABEL="Subscribe to newsletter">Subscribe</BUTTON>
    </FORM>
  </ASIDE>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 Travel Blog. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye final page hai batch ka — HEADER, NAV, MAIN, FIGURE, BLOCKQUOTE, ARTICLE, ASIDE, FOOTER sab uppercase. Aria attributes bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H61–H70) ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code
   'wrong'   field = galat version

   Mistakes:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, Charset → charset)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H61 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 61</title>
</head>
<body>
  <h1>Online Quiz Platform</h1>
  <main>
    <section>
      <h2>General Knowledge Quiz</h2>
      <form action="/submit-quiz" method="post">
        <fieldset>
          <legend>Question 1</legend>
          <p>What is the capital of France?</p>
          <label><input type="radio" name="q1" value="a"> Berlin</label>
          <label><input type="radio" name="q1" value="b"> Paris</label>
          <label><input type="radio" name="q1" value="c"> Rome</label>
        </fieldset>
        <fieldset>
          <legend>Question 2</legend>
          <p>Which planet is closest to the Sun?</p>
          <label><input type="radio" name="q2" value="a"> Venus</label>
          <label><input type="radio" name="q2" value="b"> Earth</label>
          <label><input type="radio" name="q2" value="c"> Mercury</label>
        </fieldset>
        <fieldset>
          <legend>Question 3</legend>
          <p>Who wrote Romeo and Juliet?</p>
          <label><input type="radio" name="q3" value="a"> Shakespeare</label>
          <label><input type="radio" name="q3" value="b"> Dickens</label>
          <label><input type="radio" name="q3" value="c"> Hemingway</label>
        </fieldset>
        <button type="submit">Submit Quiz</button>
      </form>
    </section>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 61</titel>
</head>
<BODY>
  <H1>Online Quiz Platform</H1>
  <MAIN>
    <SECTION>
      <H2>General Knowledge Quiz</H2>
      <FORM ACTION="/submit-quiz" METHOD="post">
        <FIELDSET>
          <LEGEND>Question 1</LEGEND>
          <P>What is the capital of France?</P>
          <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="a"> Berlin</LABEL>
          <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="b"> Paris</LABEL>
          <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="c"> Rome</LABEL>
        </FIELDSET>
        <FIELDSET>
          <LEGEND>Question 2</LEGEND>
          <P>Which planet is closest to the Sun?</P>
          <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="a"> Venus</LABEL>
          <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="b"> Earth</LABEL>
          <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="c"> Mercury</LABEL>
        </FIELDSET>
        <FIELDSET>
          <LEGEND>Question 3</LEGEND>
          <P>Who wrote Romeo and Juliet?</P>
          <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="a"> Shakespeare</LABEL>
          <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="b"> Dickens</LABEL>
          <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="c"> Hemingway</LABEL>
        </FIELDSET>
        <BUTTON TYPE="submit">Submit Quiz</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON, MAIN, SECTION sab uppercase hain. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H62 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 62</title>
</head>
<body>
  <h1>Recipe Website</h1>
  <main>
    <article>
      <h2>Biryani Recipe</h2>
      <section>
        <h3>Ingredients</h3>
        <ul>
          <li>2 cups basmati rice</li>
          <li>500g chicken</li>
          <li>2 onions, sliced</li>
          <li>1 cup yogurt</li>
          <li>Spices: cumin, coriander, turmeric</li>
        </ul>
      </section>
      <section>
        <h3>Instructions</h3>
        <ol>
          <li>Wash and soak rice for 30 minutes.</li>
          <li>Fry onions until golden brown.</li>
          <li>Marinate chicken in yogurt and spices.</li>
          <li>Cook chicken until tender.</li>
          <li>Layer rice and chicken in pot.</li>
          <li>Steam on low heat for 20 minutes.</li>
        </ol>
      </section>
      <footer>
        <p>Prep Time: <time datetime="PT45M">45 minutes</time></p>
        <p>Cook Time: <time datetime="PT60M">1 hour</time></p>
      </footer>
    </article>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 62</titel>
</head>
<BODY>
  <H1>Recipe Website</H1>
  <MAIN>
    <ARTICLE>
      <H2>Biryani Recipe</H2>
      <SECTION>
        <H3>Ingredients</H3>
        <UL>
          <LI>2 cups basmati rice</LI>
          <LI>500g chicken</LI>
          <LI>2 onions, sliced</LI>
          <LI>1 cup yogurt</LI>
          <LI>Spices: cumin, coriander, turmeric</LI>
        </UL>
      </SECTION>
      <SECTION>
        <H3>Instructions</H3>
        <OL>
          <LI>Wash and soak rice for 30 minutes.</LI>
          <LI>Fry onions until golden brown.</LI>
          <LI>Marinate chicken in yogurt and spices.</LI>
          <LI>Cook chicken until tender.</LI>
          <LI>Layer rice and chicken in pot.</LI>
          <LI>Steam on low heat for 20 minutes.</LI>
        </OL>
      </SECTION>
      <FOOTER>
        <P>Prep Time: <TIME DATETIME="PT45M">45 minutes</TIME></P>
        <P>Cook Time: <TIME DATETIME="PT60M">1 hour</TIME></P>
      </FOOTER>
    </ARTICLE>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "ARTICLE, SECTION, MAIN, FOOTER, UL, OL, LI, TIME sab uppercase hain. DATETIME attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H63 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 63</title>
  <link rel="stylesheet" href="portfolio.css">
</head>
<body>
  <header>
    <h1>Ahmed Ali — Portfolio</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <section id="about">
    <h2>About Me</h2>
    <img src="profile.jpg" alt="Ahmed Ali" width="150" height="150">
    <p>I am a front-end developer with 3 years of experience.</p>
  </section>
  <section id="projects">
    <h2>My Projects</h2>
    <div class="project-grid">
      <article>
        <h3>E-commerce Site</h3>
        <p>Built with HTML, CSS, JavaScript.</p>
        <a href="https://project1.com" target="_blank">View Project</a>
      </article>
      <article>
        <h3>Blog Platform</h3>
        <p>Responsive blog with dark mode.</p>
        <a href="https://project2.com" target="_blank">View Project</a>
      </article>
    </div>
  </section>
  <footer>
    <p>Contact: <a href="mailto:ahmed@email.com">ahmed@email.com</a></p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 63</titel>
  <LINK REL="stylesheet" HREF="portfolio.css">
</head>
<BODY>
  <HEADER>
    <H1>Ahmed Ali — Portfolio</H1>
    <NAV>
      <A HREF="#about">About</A>
      <A HREF="#projects">Projects</A>
      <A HREF="#skills">Skills</A>
      <A HREF="#contact">Contact</A>
    </NAV>
  </HEADER>
  <SECTION ID="about">
    <H2>About Me</H2>
    <IMG SRC="profile.jpg" ALT="Ahmed Ali" WIDTH="150" HEIGHT="150">
    <P>I am a front-end developer with 3 years of experience.</P>
  </SECTION>
  <SECTION ID="projects">
    <H2>My Projects</H2>
    <DIV CLASS="project-grid">
      <ARTICLE>
        <H3>E-commerce Site</H3>
        <P>Built with HTML, CSS, JavaScript.</P>
        <A HREF="https://project1.com" TARGET="_blank">View Project</A>
      </ARTICLE>
      <ARTICLE>
        <H3>Blog Platform</H3>
        <P>Responsive blog with dark mode.</P>
        <A HREF="https://project2.com" TARGET="_blank">View Project</A>
      </ARTICLE>
    </DIV>
  </SECTION>
  <FOOTER>
    <P>Contact: <A HREF="mailto:ahmed@email.com">ahmed@email.com</A></P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "HEADER, NAV, SECTION, ARTICLE, FOOTER, DIV, IMG, A sab uppercase. HREF, SRC, ALT, WIDTH, HEIGHT, TARGET, ID, CLASS, REL, LINK attributes bhi. 'Charset', 'titel', META fix karo."
},

// ── H64 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 64</title>
</head>
<body>
  <h1>Hospital Management System</h1>
  <main>
    <section>
      <h2>Patient Registration</h2>
      <form action="/register-patient" method="post" enctype="multipart/form-data">
        <label for="pname">Patient Name:</label>
        <input type="text" id="pname" name="patient_name" required maxlength="100">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="120" required>
        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label for="blood">Blood Group:</label>
        <select id="blood" name="blood_group">
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
          <option value="AB+">AB+</option>
        </select>
        <label for="photo">Upload Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/*">
        <button type="submit">Register Patient</button>
      </form>
    </section>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 64</titel>
</head>
<BODY>
  <H1>Hospital Management System</H1>
  <MAIN>
    <SECTION>
      <H2>Patient Registration</H2>
      <FORM ACTION="/register-patient" METHOD="post" ENCTYPE="multipart/form-data">
        <LABEL FOR="pname">Patient Name:</LABEL>
        <INPUT TYPE="text" ID="pname" NAME="patient_name" REQUIRED MAXLENGTH="100">
        <LABEL FOR="age">Age:</LABEL>
        <INPUT TYPE="number" ID="age" NAME="age" MIN="0" MAX="120" REQUIRED>
        <LABEL FOR="gender">Gender:</LABEL>
        <SELECT ID="gender" NAME="gender">
          <OPTION VALUE="male">Male</OPTION>
          <OPTION VALUE="female">Female</OPTION>
          <OPTION VALUE="other">Other</OPTION>
        </SELECT>
        <LABEL FOR="blood">Blood Group:</LABEL>
        <SELECT ID="blood" NAME="blood_group">
          <OPTION VALUE="A+">A+</OPTION>
          <OPTION VALUE="B+">B+</OPTION>
          <OPTION VALUE="O+">O+</OPTION>
          <OPTION VALUE="AB+">AB+</OPTION>
        </SELECT>
        <LABEL FOR="photo">Upload Photo:</LABEL>
        <INPUT TYPE="file" ID="photo" NAME="photo" ACCEPT="image/*">
        <BUTTON TYPE="submit">Register Patient</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, MAIN, SECTION sab uppercase. ENCTYPE, MAXLENGTH, MIN, MAX, REQUIRED, ACCEPT, ACTION, METHOD bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H65 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 65</title>
</head>
<body>
  <h1>School Timetable</h1>
  <main>
    <section>
      <h2>Class 10 — Weekly Schedule</h2>
      <table border="1" cellpadding="8" cellspacing="0">
        <caption>Timetable — Spring 2024</caption>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Period 1</th>
            <th scope="col">Period 2</th>
            <th scope="col">Period 3</th>
            <th scope="col">Period 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Math</td>
            <td>English</td>
            <td>Science</td>
            <td>History</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Urdu</td>
            <td>Physics</td>
            <td>Computer</td>
            <td>Math</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Chemistry</td>
            <td>English</td>
            <td>Islamiat</td>
            <td>Biology</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>Math</td>
            <td>Urdu</td>
            <td>Physics</td>
            <td>Computer</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>English</td>
            <td>Math</td>
            <td>Science</td>
            <td>Sports</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 65</titel>
</head>
<BODY>
  <H1>School Timetable</H1>
  <MAIN>
    <SECTION>
      <H2>Class 10 — Weekly Schedule</H2>
      <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
        <CAPTION>Timetable — Spring 2024</CAPTION>
        <THEAD>
          <TR>
            <TH SCOPE="col">Day</TH>
            <TH SCOPE="col">Period 1</TH>
            <TH SCOPE="col">Period 2</TH>
            <TH SCOPE="col">Period 3</TH>
            <TH SCOPE="col">Period 4</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Monday</TD>
            <TD>Math</TD>
            <TD>English</TD>
            <TD>Science</TD>
            <TD>History</TD>
          </TR>
          <TR>
            <TD>Tuesday</TD>
            <TD>Urdu</TD>
            <TD>Physics</TD>
            <TD>Computer</TD>
            <TD>Math</TD>
          </TR>
          <TR>
            <TD>Wednesday</TD>
            <TD>Chemistry</TD>
            <TD>English</TD>
            <TD>Islamiat</TD>
            <TD>Biology</TD>
          </TR>
          <TR>
            <TD>Thursday</TD>
            <TD>Math</TD>
            <TD>Urdu</TD>
            <TD>Physics</TD>
            <TD>Computer</TD>
          </TR>
          <TR>
            <TD>Friday</TD>
            <TD>English</TD>
            <TD>Math</TD>
            <TD>Science</TD>
            <TD>Sports</TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "TABLE, CAPTION, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE bhi. 'Charset', 'titel' fix karo."
},

// ── H66 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 66</title>
</head>
<body>
  <h1>Music Streaming App</h1>
  <main>
    <section>
      <h2>Now Playing</h2>
      <figure>
        <img src="album-cover.jpg" alt="Album Cover" width="250" height="250">
        <figcaption>Dil Diya Gallan — Atif Aslam</figcaption>
      </figure>
      <div class="player-controls">
        <button type="button" aria-label="Previous">&#9664;&#9664;</button>
        <button type="button" aria-label="Play/Pause">&#9654;</button>
        <button type="button" aria-label="Next">&#9654;&#9654;</button>
      </div>
      <div class="progress">
        <span>1:23</span>
        <progress value="40" max="100"></progress>
        <span>3:45</span>
      </div>
    </section>
    <section>
      <h2>Playlist</h2>
      <ol>
        <li>Dil Diya Gallan <span class="duration">3:45</span></li>
        <li>Tera Hone Laga Hoon <span class="duration">4:12</span></li>
        <li>Jeena Jeena <span class="duration">3:58</span></li>
        <li>Tere Sang Yaara <span class="duration">4:30</span></li>
      </ol>
    </section>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 66</titel>
</head>
<BODY>
  <H1>Music Streaming App</H1>
  <MAIN>
    <SECTION>
      <H2>Now Playing</H2>
      <FIGURE>
        <IMG SRC="album-cover.jpg" ALT="Album Cover" WIDTH="250" HEIGHT="250">
        <FIGCAPTION>Dil Diya Gallan — Atif Aslam</FIGCAPTION>
      </FIGURE>
      <DIV CLASS="player-controls">
        <BUTTON TYPE="button" ARIA-LABEL="Previous">&#9664;&#9664;</BUTTON>
        <BUTTON TYPE="button" ARIA-LABEL="Play/Pause">&#9654;</BUTTON>
        <BUTTON TYPE="button" ARIA-LABEL="Next">&#9654;&#9654;</BUTTON>
      </DIV>
      <DIV CLASS="progress">
        <SPAN>1:23</SPAN>
        <PROGRESS VALUE="40" MAX="100"></PROGRESS>
        <SPAN>3:45</SPAN>
      </DIV>
    </SECTION>
    <SECTION>
      <H2>Playlist</H2>
      <OL>
        <LI>Dil Diya Gallan <SPAN CLASS="duration">3:45</SPAN></LI>
        <LI>Tera Hone Laga Hoon <SPAN CLASS="duration">4:12</SPAN></LI>
        <LI>Jeena Jeena <SPAN CLASS="duration">3:58</SPAN></LI>
        <LI>Tere Sang Yaara <SPAN CLASS="duration">4:30</SPAN></LI>
      </OL>
    </SECTION>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FIGURE, FIGCAPTION, IMG, DIV, BUTTON, SPAN, PROGRESS, OL, LI, SECTION sab uppercase. ARIA-LABEL, VALUE, MAX, CLASS, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H67 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 67</title>
  <link rel="stylesheet" href="news.css">
</head>
<body>
  <header>
    <h1>Daily News Portal</h1>
    <nav aria-label="Main Navigation">
      <ul>
        <li><a href="/world">World</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/tech">Technology</a></li>
        <li><a href="/health">Health</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <header>
        <h2>Pakistan Wins Series Against India</h2>
        <p>By <strong>Imran Khan</strong> | <time datetime="2024-06-10">June 10, 2024</time></p>
      </header>
      <p>Pakistan cricket team won the series 3-1 in a thrilling final match.</p>
      <blockquote>
        <p>It was a team effort and we are proud of every player.</p>
        <cite>— Babar Azam, Captain</cite>
      </blockquote>
    </article>
    <aside>
      <h2>Trending Topics</h2>
      <ul>
        <li><a href="/cricket">#CricketFever</a></li>
        <li><a href="/tech">#AI2024</a></li>
        <li><a href="/economy">#PakEconomy</a></li>
      </ul>
    </aside>
  </main>
  <footer>
    <small>&copy; 2024 Daily News Portal</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 67</titel>
  <LINK REL="stylesheet" HREF="news.css">
</head>
<BODY>
  <HEADER>
    <H1>Daily News Portal</H1>
    <NAV ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/world">World</A></LI>
        <LI><A HREF="/sports">Sports</A></LI>
        <LI><A HREF="/tech">Technology</A></LI>
        <LI><A HREF="/health">Health</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <ARTICLE>
      <HEADER>
        <H2>Pakistan Wins Series Against India</H2>
        <P>By <STRONG>Imran Khan</STRONG> | <TIME DATETIME="2024-06-10">June 10, 2024</TIME></P>
      </HEADER>
      <P>Pakistan cricket team won the series 3-1 in a thrilling final match.</P>
      <BLOCKQUOTE>
        <P>It was a team effort and we are proud of every player.</P>
        <CITE>— Babar Azam, Captain</CITE>
      </BLOCKQUOTE>
    </ARTICLE>
    <ASIDE>
      <H2>Trending Topics</H2>
      <UL>
        <LI><A HREF="/cricket">#CricketFever</A></LI>
        <LI><A HREF="/tech">#AI2024</A></LI>
        <LI><A HREF="/economy">#PakEconomy</A></LI>
      </UL>
    </ASIDE>
  </MAIN>
  <FOOTER>
    <SMALL>&copy; 2024 Daily News Portal</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "HEADER, NAV, MAIN, ARTICLE, ASIDE, FOOTER, BLOCKQUOTE, CITE, STRONG, TIME, UL, LI sab uppercase. ARIA-LABEL, DATETIME, HREF, REL attributes bhi. META, LINK, 'Charset', 'titel' fix karo."
},

// ── H68 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 68</title>
</head>
<body>
  <h1>Job Application Portal</h1>
  <main>
    <section>
      <h2>Apply for Software Engineer</h2>
      <form action="/apply" method="post" enctype="multipart/form-data">
        <label for="fname">Full Name:</label>
        <input type="text" id="fname" name="full_name" placeholder="Your full name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="+92 300 0000000">
        <label for="exp">Years of Experience:</label>
        <input type="range" id="exp" name="experience" min="0" max="20" step="1" value="1">
        <label for="cv">Upload CV (PDF):</label>
        <input type="file" id="cv" name="cv" accept=".pdf">
        <label for="cover">Cover Letter:</label>
        <textarea id="cover" name="cover_letter" rows="6" cols="50" placeholder="Write your cover letter here..."></textarea>
        <button type="submit">Submit Application</button>
        <button type="reset">Clear Form</button>
      </form>
    </section>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 68</titel>
</head>
<BODY>
  <H1>Job Application Portal</H1>
  <MAIN>
    <SECTION>
      <H2>Apply for Software Engineer</H2>
      <FORM ACTION="/apply" METHOD="post" ENCTYPE="multipart/form-data">
        <LABEL FOR="fname">Full Name:</LABEL>
        <INPUT TYPE="text" ID="fname" NAME="full_name" PLACEHOLDER="Your full name" REQUIRED>
        <LABEL FOR="email">Email:</LABEL>
        <INPUT TYPE="email" ID="email" NAME="email" PLACEHOLDER="you@example.com" REQUIRED>
        <LABEL FOR="phone">Phone:</LABEL>
        <INPUT TYPE="tel" ID="phone" NAME="phone" PLACEHOLDER="+92 300 0000000">
        <LABEL FOR="exp">Years of Experience:</LABEL>
        <INPUT TYPE="range" ID="exp" NAME="experience" MIN="0" MAX="20" STEP="1" VALUE="1">
        <LABEL FOR="cv">Upload CV (PDF):</LABEL>
        <INPUT TYPE="file" ID="cv" NAME="cv" ACCEPT=".pdf">
        <LABEL FOR="cover">Cover Letter:</LABEL>
        <TEXTAREA ID="cover" NAME="cover_letter" ROWS="6" COLS="50" PLACEHOLDER="Write your cover letter here..."></TEXTAREA>
        <BUTTON TYPE="submit">Submit Application</BUTTON>
        <BUTTON TYPE="reset">Clear Form</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "FORM, LABEL, INPUT, TEXTAREA, BUTTON, SECTION, MAIN sab uppercase. ENCTYPE, PLACEHOLDER, MIN, MAX, STEP, VALUE, ROWS, COLS, ACCEPT, REQUIRED attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H69 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 69</title>
</head>
<body>
  <h1>E-Learning Dashboard</h1>
  <main>
    <section>
      <h2>My Courses</h2>
      <div class="course-list">
        <details open>
          <summary>HTML &amp; CSS Fundamentals</summary>
          <ul>
            <li>Module 1: HTML Basics <progress value="100" max="100"></progress></li>
            <li>Module 2: CSS Styling <progress value="75" max="100"></progress></li>
            <li>Module 3: Flexbox &amp; Grid <progress value="40" max="100"></progress></li>
          </ul>
        </details>
        <details>
          <summary>JavaScript Essentials</summary>
          <ul>
            <li>Module 1: Variables &amp; Data Types <progress value="60" max="100"></progress></li>
            <li>Module 2: Functions <progress value="30" max="100"></progress></li>
            <li>Module 3: DOM Manipulation <progress value="0" max="100"></progress></li>
          </ul>
        </details>
        <details>
          <summary>React Framework</summary>
          <ul>
            <li>Module 1: Components <progress value="20" max="100"></progress></li>
            <li>Module 2: State &amp; Props <progress value="0" max="100"></progress></li>
          </ul>
        </details>
      </div>
    </section>
  </main>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 69</titel>
</head>
<BODY>
  <H1>E-Learning Dashboard</H1>
  <MAIN>
    <SECTION>
      <H2>My Courses</H2>
      <DIV CLASS="course-list">
        <DETAILS OPEN>
          <SUMMARY>HTML &amp; CSS Fundamentals</SUMMARY>
          <UL>
            <LI>Module 1: HTML Basics <PROGRESS VALUE="100" MAX="100"></PROGRESS></LI>
            <LI>Module 2: CSS Styling <PROGRESS VALUE="75" MAX="100"></PROGRESS></LI>
            <LI>Module 3: Flexbox &amp; Grid <PROGRESS VALUE="40" MAX="100"></PROGRESS></LI>
          </UL>
        </DETAILS>
        <DETAILS>
          <SUMMARY>JavaScript Essentials</SUMMARY>
          <UL>
            <LI>Module 1: Variables &amp; Data Types <PROGRESS VALUE="60" MAX="100"></PROGRESS></LI>
            <LI>Module 2: Functions <PROGRESS VALUE="30" MAX="100"></PROGRESS></LI>
            <LI>Module 3: DOM Manipulation <PROGRESS VALUE="0" MAX="100"></PROGRESS></LI>
          </UL>
        </DETAILS>
        <DETAILS>
          <SUMMARY>React Framework</SUMMARY>
          <UL>
            <LI>Module 1: Components <PROGRESS VALUE="20" MAX="100"></PROGRESS></LI>
            <LI>Module 2: State &amp; Props <PROGRESS VALUE="0" MAX="100"></PROGRESS></LI>
          </UL>
        </DETAILS>
      </DIV>
    </SECTION>
  </MAIN>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DETAILS, SUMMARY, PROGRESS, DIV, UL, LI, SECTION, MAIN sab uppercase hain. VALUE, MAX, CLASS, OPEN attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H70 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Smart Home Control Panel">
  <title>Hard Page 70</title>
  <link rel="stylesheet" href="smarthome.css">
  <script src="smarthome.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>Smart Home Dashboard</h1>
    <nav role="navigation" aria-label="Main Menu">
      <ul>
        <li><a href="/lights" aria-current="page">Lights</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/climate">Climate</a></li>
        <li><a href="/energy">Energy</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="lights-title">
      <h2 id="lights-title">Light Controls</h2>
      <div class="control-grid">
        <article>
          <h3>Living Room</h3>
          <label for="lr-bright">Brightness:</label>
          <input type="range" id="lr-bright" name="lr_brightness" min="0" max="100" value="70">
          <meter value="70" min="0" max="100">70%</meter>
        </article>
        <article>
          <h3>Bedroom</h3>
          <label for="br-bright">Brightness:</label>
          <input type="range" id="br-bright" name="br_brightness" min="0" max="100" value="40">
          <meter value="40" min="0" max="100">40%</meter>
        </article>
        <article>
          <h3>Kitchen</h3>
          <label for="kt-bright">Brightness:</label>
          <input type="range" id="kt-bright" name="kt_brightness" min="0" max="100" value="90">
          <meter value="90" min="0" max="100">90%</meter>
        </article>
      </div>
    </section>
    <section>
      <h2>Energy Usage Today</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Device</th>
            <th scope="col">Status</th>
            <th scope="col">Usage (kWh)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>AC Unit</td><td>ON</td><td>3.2</td></tr>
          <tr><td>Refrigerator</td><td>ON</td><td>1.1</td></tr>
          <tr><td>Washing Machine</td><td>OFF</td><td>0.0</td></tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 SmartHome Inc. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Smart Home Control Panel">
  <titel>Hard Page 70</titel>
  <LINK REL="stylesheet" HREF="smarthome.css">
  <SCRIPT SRC="smarthome.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Smart Home Dashboard</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Menu">
      <UL>
        <LI><A HREF="/lights" ARIA-CURRENT="page">Lights</A></LI>
        <LI><A HREF="/security">Security</A></LI>
        <LI><A HREF="/climate">Climate</A></LI>
        <LI><A HREF="/energy">Energy</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="lights-title">
      <H2 ID="lights-title">Light Controls</H2>
      <DIV CLASS="control-grid">
        <ARTICLE>
          <H3>Living Room</H3>
          <LABEL FOR="lr-bright">Brightness:</LABEL>
          <INPUT TYPE="range" ID="lr-bright" NAME="lr_brightness" MIN="0" MAX="100" VALUE="70">
          <METER VALUE="70" MIN="0" MAX="100">70%</METER>
        </ARTICLE>
        <ARTICLE>
          <H3>Bedroom</H3>
          <LABEL FOR="br-bright">Brightness:</LABEL>
          <INPUT TYPE="range" ID="br-bright" NAME="br_brightness" MIN="0" MAX="100" VALUE="40">
          <METER VALUE="40" MIN="0" MAX="100">40%</METER>
        </ARTICLE>
        <ARTICLE>
          <H3>Kitchen</H3>
          <LABEL FOR="kt-bright">Brightness:</LABEL>
          <INPUT TYPE="range" ID="kt-bright" NAME="kt_brightness" MIN="0" MAX="100" VALUE="90">
          <METER VALUE="90" MIN="0" MAX="100">90%</METER>
        </ARTICLE>
      </DIV>
    </SECTION>
    <SECTION>
      <H2>Energy Usage Today</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Device</TH>
            <TH SCOPE="col">Status</TH>
            <TH SCOPE="col">Usage (kWh)</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR><TD>AC Unit</TD><TD>ON</TD><TD>3.2</TD></TR>
          <TR><TD>Refrigerator</TD><TD>ON</TD><TD>1.1</TD></TR>
          <TR><TD>Washing Machine</TD><TD>OFF</TD><TD>0.0</TD></TR>
        </TBODY>
      </TABLE>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 SmartHome Inc. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, ARTICLE, DIV, LABEL, INPUT, METER, TABLE, THEAD, TBODY, TR, TH, TD, FOOTER sab uppercase. ARIA-LABELLEDBY, ARIA-LABEL, ARIA-CURRENT, ROLE, MIN, MAX, VALUE, SCOPE sab fix karo. 'Charset', 'titel' bhi."
},

/* ── Paragraph Mistakes — Hard HTML Data (H71–H80) ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code
   'wrong'   field = galat version

   Mistakes:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, scirpt → script)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H71 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 71</title>
</head>
<body>
  <h1>Online Quiz App</h1>
  <section>
    <h2>General Knowledge Quiz</h2>
    <form action="/submit-quiz" method="post">
      <fieldset>
        <legend>Question 1</legend>
        <p>What is the capital of France?</p>
        <label><input type="radio" name="q1" value="berlin"> Berlin</label>
        <label><input type="radio" name="q1" value="paris"> Paris</label>
        <label><input type="radio" name="q1" value="rome"> Rome</label>
        <label><input type="radio" name="q1" value="madrid"> Madrid</label>
      </fieldset>
      <fieldset>
        <legend>Question 2</legend>
        <p>Which planet is closest to the Sun?</p>
        <label><input type="radio" name="q2" value="venus"> Venus</label>
        <label><input type="radio" name="q2" value="mercury"> Mercury</label>
        <label><input type="radio" name="q2" value="mars"> Mars</label>
        <label><input type="radio" name="q2" value="earth"> Earth</label>
      </fieldset>
      <fieldset>
        <legend>Question 3</legend>
        <p>What is 12 x 12?</p>
        <label><input type="radio" name="q3" value="132"> 132</label>
        <label><input type="radio" name="q3" value="144"> 144</label>
        <label><input type="radio" name="q3" value="124"> 124</label>
        <label><input type="radio" name="q3" value="148"> 148</label>
      </fieldset>
      <button type="submit">Submit Quiz</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 71</titel>
</head>
<BODY>
  <H1>Online Quiz App</H1>
  <SECTION>
    <H2>General Knowledge Quiz</H2>
    <FORM ACTION="/submit-quiz" METHOD="post">
      <FIELDSET>
        <LEGEND>Question 1</LEGEND>
        <P>What is the capital of France?</P>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="berlin"> Berlin</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="paris"> Paris</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="rome"> Rome</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="madrid"> Madrid</LABEL>
      </FIELDSET>
      <FIELDSET>
        <LEGEND>Question 2</LEGEND>
        <P>Which planet is closest to the Sun?</P>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="venus"> Venus</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="mercury"> Mercury</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="mars"> Mars</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="earth"> Earth</LABEL>
      </FIELDSET>
      <FIELDSET>
        <LEGEND>Question 3</LEGEND>
        <P>What is 12 x 12?</P>
        <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="132"> 132</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="144"> 144</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="124"> 124</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="148"> 148</LABEL>
      </FIELDSET>
      <BUTTON TYPE="submit">Submit Quiz</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H72 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 72</title>
</head>
<body>
  <h1>Recipe Book</h1>
  <article>
    <h2>Chocolate Cake Recipe</h2>
    <section>
      <h3>Ingredients</h3>
      <ul>
        <li>2 cups all-purpose flour</li>
        <li>1 cup cocoa powder</li>
        <li>2 cups sugar</li>
        <li>1 tsp baking soda</li>
        <li>1 tsp baking powder</li>
        <li>2 eggs</li>
        <li>1 cup milk</li>
        <li>1/2 cup vegetable oil</li>
      </ul>
    </section>
    <section>
      <h3>Instructions</h3>
      <ol>
        <li>Preheat oven to 350°F (175°C).</li>
        <li>Mix dry ingredients in a large bowl.</li>
        <li>Add wet ingredients and stir until smooth.</li>
        <li>Pour batter into greased pan.</li>
        <li>Bake for 30-35 minutes.</li>
        <li>Cool before frosting.</li>
      </ol>
    </section>
    <footer>
      <p>Prep time: <time datetime="PT20M">20 minutes</time></p>
      <p>Cook time: <time datetime="PT35M">35 minutes</time></p>
    </footer>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 72</titel>
</head>
<BODY>
  <H1>Recipe Book</H1>
  <ARTICLE>
    <H2>Chocolate Cake Recipe</H2>
    <SECTION>
      <H3>Ingredients</H3>
      <UL>
        <LI>2 cups all-purpose flour</LI>
        <LI>1 cup cocoa powder</LI>
        <LI>2 cups sugar</LI>
        <LI>1 tsp baking soda</LI>
        <LI>1 tsp baking powder</LI>
        <LI>2 eggs</LI>
        <LI>1 cup milk</LI>
        <LI>1/2 cup vegetable oil</LI>
      </UL>
    </SECTION>
    <SECTION>
      <H3>Instructions</H3>
      <OL>
        <LI>Preheat oven to 350°F (175°C).</LI>
        <LI>Mix dry ingredients in a large bowl.</LI>
        <LI>Add wet ingredients and stir until smooth.</LI>
        <LI>Pour batter into greased pan.</LI>
        <LI>Bake for 30-35 minutes.</LI>
        <LI>Cool before frosting.</LI>
      </OL>
    </SECTION>
    <FOOTER>
      <P>Prep time: <TIME DATETIME="PT20M">20 minutes</TIME></P>
      <P>Cook time: <TIME DATETIME="PT35M">35 minutes</TIME></P>
    </FOOTER>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "ARTICLE, SECTION, FOOTER, UL, OL, LI, TIME, P sab uppercase. DATETIME attribute bhi. 'Charset', 'titel' fix karo."
},

// ── H73 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 73</title>
  <link rel="stylesheet" href="portfolio.css">
</head>
<body>
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <section id="about">
    <h2>About Me</h2>
    <img src="profile.jpg" alt="My Photo" width="150" height="150">
    <p>I am a passionate web developer with 3 years of experience.</p>
  </section>
  <section id="projects">
    <h2>Projects</h2>
    <div class="project-card">
      <h3>E-Commerce Site</h3>
      <p>A full-stack shopping platform.</p>
      <a href="https://project1.com" target="_blank">View Project</a>
    </div>
    <div class="project-card">
      <h3>Weather App</h3>
      <p>Real-time weather using API.</p>
      <a href="https://project2.com" target="_blank">View Project</a>
    </div>
  </section>
  <footer>
    <p>&copy; 2024 My Portfolio</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 73</titel>
  <LINK REL="stylesheet" HREF="portfolio.css">
</head>
<BODY>
  <HEADER>
    <H1>My Portfolio</H1>
    <NAV>
      <A HREF="#about">About</A>
      <A HREF="#projects">Projects</A>
      <A HREF="#skills">Skills</A>
      <A HREF="#contact">Contact</A>
    </NAV>
  </HEADER>
  <SECTION ID="about">
    <H2>About Me</H2>
    <IMG SRC="profile.jpg" ALT="My Photo" WIDTH="150" HEIGHT="150">
    <P>I am a passionate web developer with 3 years of experience.</P>
  </SECTION>
  <SECTION ID="projects">
    <H2>Projects</H2>
    <DIV CLASS="project-card">
      <H3>E-Commerce Site</H3>
      <P>A full-stack shopping platform.</P>
      <A HREF="https://project1.com" TARGET="_blank">View Project</A>
    </DIV>
    <DIV CLASS="project-card">
      <H3>Weather App</H3>
      <P>Real-time weather using API.</P>
      <A HREF="https://project2.com" TARGET="_blank">View Project</A>
    </DIV>
  </SECTION>
  <FOOTER>
    <P>&copy; 2024 My Portfolio</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "HEADER, NAV, SECTION, FOOTER, IMG, DIV, A sab uppercase. SRC, ALT, WIDTH, HEIGHT, HREF, TARGET, ID, CLASS, REL, META, LINK attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H74 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 74</title>
</head>
<body>
  <h1>Student Result Portal</h1>
  <section>
    <h2>Semester Results</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Roll No</th>
          <th scope="col">Name</th>
          <th scope="col">Math</th>
          <th scope="col">English</th>
          <th scope="col">Science</th>
          <th scope="col">Total</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Ali Hassan</td>
          <td>88</td>
          <td>91</td>
          <td>85</td>
          <td>264</td>
          <td>A</td>
        </tr>
        <tr>
          <td>002</td>
          <td>Sara Malik</td>
          <td>76</td>
          <td>82</td>
          <td>79</td>
          <td>237</td>
          <td>B</td>
        </tr>
        <tr>
          <td>003</td>
          <td>Usman Tariq</td>
          <td>65</td>
          <td>70</td>
          <td>68</td>
          <td>203</td>
          <td>C</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 74</titel>
</head>
<BODY>
  <H1>Student Result Portal</H1>
  <SECTION>
    <H2>Semester Results</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Roll No</TH>
          <TH SCOPE="col">Name</TH>
          <TH SCOPE="col">Math</TH>
          <TH SCOPE="col">English</TH>
          <TH SCOPE="col">Science</TH>
          <TH SCOPE="col">Total</TH>
          <TH SCOPE="col">Grade</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>001</TD>
          <TD>Ali Hassan</TD>
          <TD>88</TD>
          <TD>91</TD>
          <TD>85</TD>
          <TD>264</TD>
          <TD>A</TD>
        </TR>
        <TR>
          <TD>002</TD>
          <TD>Sara Malik</TD>
          <TD>76</TD>
          <TD>82</TD>
          <TD>79</TD>
          <TD>237</TD>
          <TD>B</TD>
        </TR>
        <TR>
          <TD>003</TD>
          <TD>Usman Tariq</TD>
          <TD>65</TD>
          <TD>70</TD>
          <TD>68</TD>
          <TD>203</TD>
          <TD>C</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H75 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 75</title>
</head>
<body>
  <h1>Video Learning Platform</h1>
  <section>
    <h2>Featured Lessons</h2>
    <div class="video-container">
      <h3>Lesson 1: HTML Basics</h3>
      <video width="560" height="315" controls poster="thumb1.jpg">
        <source src="lesson1.mp4" type="video/mp4">
        <source src="lesson1.ogg" type="video/ogg">
        <track kind="subtitles" src="lesson1-en.vtt" srclang="en" label="English">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="video-container">
      <h3>Lesson 2: CSS Styling</h3>
      <video width="560" height="315" controls poster="thumb2.jpg">
        <source src="lesson2.mp4" type="video/mp4">
        <source src="lesson2.ogg" type="video/ogg">
        <track kind="subtitles" src="lesson2-en.vtt" srclang="en" label="English">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="video-container">
      <h3>Lesson 3: JavaScript Intro</h3>
      <audio controls>
        <source src="audio-lesson3.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
      </audio>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 75</titel>
</head>
<BODY>
  <H1>Video Learning Platform</H1>
  <SECTION>
    <H2>Featured Lessons</H2>
    <DIV CLASS="video-container">
      <H3>Lesson 1: HTML Basics</H3>
      <VIDEO WIDTH="560" HEIGHT="315" CONTROLS POSTER="thumb1.jpg">
        <SOURCE SRC="lesson1.mp4" TYPE="video/mp4">
        <SOURCE SRC="lesson1.ogg" TYPE="video/ogg">
        <TRACK KIND="subtitles" SRC="lesson1-en.vtt" SRCLANG="en" LABEL="English">
        Your browser does not support the video tag.
      </VIDEO>
    </DIV>
    <DIV CLASS="video-container">
      <H3>Lesson 2: CSS Styling</H3>
      <VIDEO WIDTH="560" HEIGHT="315" CONTROLS POSTER="thumb2.jpg">
        <SOURCE SRC="lesson2.mp4" TYPE="video/mp4">
        <SOURCE SRC="lesson2.ogg" TYPE="video/ogg">
        <TRACK KIND="subtitles" SRC="lesson2-en.vtt" SRCLANG="en" LABEL="English">
        Your browser does not support the video tag.
      </VIDEO>
    </DIV>
    <DIV CLASS="video-container">
      <H3>Lesson 3: JavaScript Intro</H3>
      <AUDIO CONTROLS>
        <SOURCE SRC="audio-lesson3.mp3" TYPE="audio/mpeg">
        Your browser does not support the audio tag.
      </AUDIO>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "VIDEO, AUDIO, SOURCE, TRACK, DIV sab uppercase. WIDTH, HEIGHT, CONTROLS, POSTER, SRC, TYPE, KIND, SRCLANG, LABEL, CLASS attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H76 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 76</title>
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
  <header>
    <h1>News Website</h1>
    <nav aria-label="Main Navigation">
      <ul>
        <li><a href="/world">World</a></li>
        <li><a href="/tech">Technology</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/health">Health</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>Breaking: Major Tech Conference 2024</h2>
      <p><time datetime="2024-11-15">November 15, 2024</time> — Thousands gathered for the annual tech event.</p>
      <figure>
        <img src="conf.jpg" alt="Tech Conference Hall" width="800" height="450">
        <figcaption>The main stage at Tech Summit 2024</figcaption>
      </figure>
      <p>Experts discussed AI, cloud computing, and cybersecurity trends.</p>
    </article>
    <aside>
      <h2>Trending Topics</h2>
      <ul>
        <li><a href="/ai">Artificial Intelligence</a></li>
        <li><a href="/ev">Electric Vehicles</a></li>
        <li><a href="/space">Space Exploration</a></li>
      </ul>
    </aside>
  </main>
  <footer>
    <p>&copy; 2024 News Website. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 76</titel>
  <LINK REL="icon" HREF="favicon.ico" TYPE="image/x-icon">
</head>
<BODY>
  <HEADER>
    <H1>News Website</H1>
    <NAV ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/world">World</A></LI>
        <LI><A HREF="/tech">Technology</A></LI>
        <LI><A HREF="/sports">Sports</A></LI>
        <LI><A HREF="/health">Health</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <ARTICLE>
      <H2>Breaking: Major Tech Conference 2024</H2>
      <P><TIME DATETIME="2024-11-15">November 15, 2024</TIME> — Thousands gathered for the annual tech event.</P>
      <FIGURE>
        <IMG SRC="conf.jpg" ALT="Tech Conference Hall" WIDTH="800" HEIGHT="450">
        <FIGCAPTION>The main stage at Tech Summit 2024</FIGCAPTION>
      </FIGURE>
      <P>Experts discussed AI, cloud computing, and cybersecurity trends.</P>
    </ARTICLE>
    <ASIDE>
      <H2>Trending Topics</H2>
      <UL>
        <LI><A HREF="/ai">Artificial Intelligence</A></LI>
        <LI><A HREF="/ev">Electric Vehicles</A></LI>
        <LI><A HREF="/space">Space Exploration</A></LI>
      </UL>
    </ASIDE>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 News Website. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "HEADER, NAV, MAIN, ARTICLE, ASIDE, FOOTER, FIGURE, FIGCAPTION, TIME, IMG, UL, LI, A sab uppercase. ARIA-LABEL, DATETIME, SRC, ALT, WIDTH, HEIGHT, HREF, META, LINK, REL, TYPE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H77 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 77</title>
</head>
<body>
  <h1>Job Application Form</h1>
  <section>
    <h2>Apply for a Position</h2>
    <form action="/apply" method="post" enctype="multipart/form-data">
      <label for="fullname">Full Name:</label>
      <input type="text" id="fullname" name="fullname" required placeholder="Enter your full name">

      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" required placeholder="you@example.com">

      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" placeholder="+92-300-0000000">

      <label for="position">Applying For:</label>
      <select id="position" name="position" required>
        <option value="">-- Select Position --</option>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="designer">UI/UX Designer</option>
        <option value="manager">Project Manager</option>
      </select>

      <label for="resume">Upload Resume (PDF):</label>
      <input type="file" id="resume" name="resume" accept=".pdf">

      <label for="cover">Cover Letter:</label>
      <textarea id="cover" name="cover" rows="6" cols="50" placeholder="Write your cover letter here..."></textarea>

      <button type="submit">Submit Application</button>
      <button type="reset">Clear Form</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 77</titel>
</head>
<BODY>
  <H1>Job Application Form</H1>
  <SECTION>
    <H2>Apply for a Position</H2>
    <FORM ACTION="/apply" METHOD="post" ENCTYPE="multipart/form-data">
      <LABEL FOR="fullname">Full Name:</LABEL>
      <INPUT TYPE="text" ID="fullname" NAME="fullname" REQUIRED PLACEHOLDER="Enter your full name">

      <LABEL FOR="email">Email Address:</LABEL>
      <INPUT TYPE="email" ID="email" NAME="email" REQUIRED PLACEHOLDER="you@example.com">

      <LABEL FOR="phone">Phone Number:</LABEL>
      <INPUT TYPE="tel" ID="phone" NAME="phone" PLACEHOLDER="+92-300-0000000">

      <LABEL FOR="position">Applying For:</LABEL>
      <SELECT ID="position" NAME="position" REQUIRED>
        <OPTION VALUE="">-- Select Position --</OPTION>
        <OPTION VALUE="frontend">Frontend Developer</OPTION>
        <OPTION VALUE="backend">Backend Developer</OPTION>
        <OPTION VALUE="designer">UI/UX Designer</OPTION>
        <OPTION VALUE="manager">Project Manager</OPTION>
      </SELECT>

      <LABEL FOR="resume">Upload Resume (PDF):</LABEL>
      <INPUT TYPE="file" ID="resume" NAME="resume" ACCEPT=".pdf">

      <LABEL FOR="cover">Cover Letter:</LABEL>
      <TEXTAREA ID="cover" NAME="cover" ROWS="6" COLS="50" PLACEHOLDER="Write your cover letter here..."></TEXTAREA>

      <BUTTON TYPE="submit">Submit Application</BUTTON>
      <BUTTON TYPE="reset">Clear Form</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON sab uppercase. ACTION, METHOD, ENCTYPE, FOR, TYPE, ID, NAME, REQUIRED, PLACEHOLDER, ACCEPT, ROWS, COLS attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H78 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 78</title>
</head>
<body>
  <h1>Hospital Patient Dashboard</h1>
  <section>
    <h2>Patient Information</h2>
    <table border="1" cellpadding="10" cellspacing="0">
      <caption>Current Ward Patients</caption>
      <thead>
        <tr>
          <th scope="col">Patient ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Ward</th>
          <th scope="col">Doctor</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>P-101</td>
          <td>Hamid Iqbal</td>
          <td>45</td>
          <td>General</td>
          <td>Dr. Farrukh</td>
          <td><span class="stable">Stable</span></td>
        </tr>
        <tr>
          <td>P-102</td>
          <td>Ayesha Noor</td>
          <td>32</td>
          <td>Maternity</td>
          <td>Dr. Sadia</td>
          <td><span class="critical">Critical</span></td>
        </tr>
        <tr>
          <td>P-103</td>
          <td>Tariq Jameel</td>
          <td>60</td>
          <td>Cardiac</td>
          <td>Dr. Waseem</td>
          <td><span class="stable">Stable</span></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">Total Patients: 3</td>
        </tr>
      </tfoot>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 78</titel>
</head>
<BODY>
  <H1>Hospital Patient Dashboard</H1>
  <SECTION>
    <H2>Patient Information</H2>
    <TABLE BORDER="1" CELLPADDING="10" CELLSPACING="0">
      <CAPTION>Current Ward Patients</CAPTION>
      <THEAD>
        <TR>
          <TH SCOPE="col">Patient ID</TH>
          <TH SCOPE="col">Name</TH>
          <TH SCOPE="col">Age</TH>
          <TH SCOPE="col">Ward</TH>
          <TH SCOPE="col">Doctor</TH>
          <TH SCOPE="col">Status</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>P-101</TD>
          <TD>Hamid Iqbal</TD>
          <TD>45</TD>
          <TD>General</TD>
          <TD>Dr. Farrukh</TD>
          <TD><SPAN CLASS="stable">Stable</SPAN></TD>
        </TR>
        <TR>
          <TD>P-102</TD>
          <TD>Ayesha Noor</TD>
          <TD>32</TD>
          <TD>Maternity</TD>
          <TD>Dr. Sadia</TD>
          <TD><SPAN CLASS="critical">Critical</SPAN></TD>
        </TR>
        <TR>
          <TD>P-103</TD>
          <TD>Tariq Jameel</TD>
          <TD>60</TD>
          <TD>Cardiac</TD>
          <TD>Dr. Waseem</TD>
          <TD><SPAN CLASS="stable">Stable</SPAN></TD>
        </TR>
      </TBODY>
      <TFOOT>
        <TR>
          <TD COLSPAN="6">Total Patients: 3</TD>
        </TR>
      </TFOOT>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "TABLE, CAPTION, THEAD, TBODY, TFOOT, TR, TH, TD, SPAN sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE, CLASS, COLSPAN attributes bhi uppercase. 'Charset', 'titel' fix karo."
},

// ── H79 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 79</title>
  <link rel="stylesheet" href="shop.css">
  <script src="cart.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>Online Shopping Store</h1>
    <nav role="navigation" aria-label="Shop Navigation">
      <a href="/men">Men</a>
      <a href="/women">Women</a>
      <a href="/kids">Kids</a>
      <a href="/sale">Sale</a>
    </nav>
  </header>
  <main>
    <section aria-labelledby="featured-title">
      <h2 id="featured-title">Featured Products</h2>
      <div class="product-grid">
        <div class="product">
          <img src="shoe1.jpg" alt="Running Shoes" width="250" height="250">
          <h3>Running Shoes</h3>
          <p>Price: <strong>Rs. 4,500</strong></p>
          <button type="button" aria-label="Add Running Shoes to cart">Add to Cart</button>
        </div>
        <div class="product">
          <img src="tshirt1.jpg" alt="Cotton T-Shirt" width="250" height="250">
          <h3>Cotton T-Shirt</h3>
          <p>Price: <strong>Rs. 1,200</strong></p>
          <button type="button" aria-label="Add Cotton T-Shirt to cart">Add to Cart</button>
        </div>
        <div class="product">
          <img src="watch1.jpg" alt="Smart Watch" width="250" height="250">
          <h3>Smart Watch</h3>
          <p>Price: <strong>Rs. 12,000</strong></p>
          <button type="button" aria-label="Add Smart Watch to cart">Add to Cart</button>
        </div>
      </div>
    </section>
  </main>
  <footer role="contentinfo">
    <p>&copy; 2024 Shopping Store. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 79</titel>
  <LINK REL="stylesheet" HREF="shop.css">
  <SCRIPT SRC="cart.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Online Shopping Store</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Shop Navigation">
      <A HREF="/men">Men</A>
      <A HREF="/women">Women</A>
      <A HREF="/kids">Kids</A>
      <A HREF="/sale">Sale</A>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION ARIA-LABELLEDBY="featured-title">
      <H2 ID="featured-title">Featured Products</H2>
      <DIV CLASS="product-grid">
        <DIV CLASS="product">
          <IMG SRC="shoe1.jpg" ALT="Running Shoes" WIDTH="250" HEIGHT="250">
          <H3>Running Shoes</H3>
          <P>Price: <STRONG>Rs. 4,500</STRONG></P>
          <BUTTON TYPE="button" ARIA-LABEL="Add Running Shoes to cart">Add to Cart</BUTTON>
        </DIV>
        <DIV CLASS="product">
          <IMG SRC="tshirt1.jpg" ALT="Cotton T-Shirt" WIDTH="250" HEIGHT="250">
          <H3>Cotton T-Shirt</H3>
          <P>Price: <STRONG>Rs. 1,200</STRONG></P>
          <BUTTON TYPE="button" ARIA-LABEL="Add Cotton T-Shirt to cart">Add to Cart</BUTTON>
        </DIV>
        <DIV CLASS="product">
          <IMG SRC="watch1.jpg" ALT="Smart Watch" WIDTH="250" HEIGHT="250">
          <H3>Smart Watch</H3>
          <P>Price: <STRONG>Rs. 12,000</STRONG></P>
          <BUTTON TYPE="button" ARIA-LABEL="Add Smart Watch to cart">Add to Cart</BUTTON>
        </DIV>
      </DIV>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <P>&copy; 2024 Shopping Store. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "HEADER, NAV, MAIN, SECTION, FOOTER, DIV, IMG, BUTTON, STRONG sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ID, CLASS, SRC, ALT, WIDTH, HEIGHT, TYPE, META, LINK, SCRIPT, REL, HREF attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H80 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Smart City Dashboard for urban monitoring">
  <title>Hard Page 80</title>
  <link rel="stylesheet" href="dashboard.css">
  <link rel="manifest" href="manifest.json">
  <script src="dashboard.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>Smart City Dashboard</h1>
    <nav role="navigation" aria-label="Dashboard Navigation">
      <ul>
        <li><a href="/overview" aria-current="page">Overview</a></li>
        <li><a href="/traffic">Traffic</a></li>
        <li><a href="/energy">Energy</a></li>
        <li><a href="/alerts">Alerts</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="stats-title">
      <h2 id="stats-title">City Statistics</h2>
      <div class="stats-grid">
        <article>
          <h3>Population</h3>
          <p><strong>12,500,000</strong></p>
          <meter value="0.75" min="0" max="1" aria-label="Population capacity">75%</meter>
        </article>
        <article>
          <h3>Traffic Flow</h3>
          <p><strong>Normal</strong></p>
          <meter value="0.4" min="0" max="1" aria-label="Traffic level">40%</meter>
        </article>
        <article>
          <h3>Air Quality Index</h3>
          <p><strong>82 (Good)</strong></p>
          <meter value="0.82" min="0" max="1" aria-label="Air quality">82%</meter>
        </article>
        <article>
          <h3>Energy Usage</h3>
          <p><strong>68% of Capacity</strong></p>
          <meter value="0.68" min="0" max="1" aria-label="Energy usage">68%</meter>
        </article>
      </div>
    </section>
    <section>
      <h2>Live Alerts</h2>
      <table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th scope="col">Zone</th>
            <th scope="col">Alert Type</th>
            <th scope="col">Severity</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zone A</td>
            <td>Traffic Jam</td>
            <td>High</td>
            <td><time datetime="2024-11-15T08:30">08:30 AM</time></td>
          </tr>
          <tr>
            <td>Zone C</td>
            <td>Power Outage</td>
            <td>Critical</td>
            <td><time datetime="2024-11-15T09:15">09:15 AM</time></td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer role="contentinfo">
    <nav aria-label="Footer Links">
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
      <a href="/support">Support</a>
    </nav>
    <small>&copy; 2024 Smart City Initiative. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Smart City Dashboard for urban monitoring">
  <titel>Hard Page 80</titel>
  <LINK REL="stylesheet" HREF="dashboard.css">
  <LINK REL="manifest" HREF="manifest.json">
  <SCRIPT SRC="dashboard.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Smart City Dashboard</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Dashboard Navigation">
      <UL>
        <LI><A HREF="/overview" ARIA-CURRENT="page">Overview</A></LI>
        <LI><A HREF="/traffic">Traffic</A></LI>
        <LI><A HREF="/energy">Energy</A></LI>
        <LI><A HREF="/alerts">Alerts</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="stats-title">
      <H2 ID="stats-title">City Statistics</H2>
      <DIV CLASS="stats-grid">
        <ARTICLE>
          <H3>Population</H3>
          <P><STRONG>12,500,000</STRONG></P>
          <METER VALUE="0.75" MIN="0" MAX="1" ARIA-LABEL="Population capacity">75%</METER>
        </ARTICLE>
        <ARTICLE>
          <H3>Traffic Flow</H3>
          <P><STRONG>Normal</STRONG></P>
          <METER VALUE="0.4" MIN="0" MAX="1" ARIA-LABEL="Traffic level">40%</METER>
        </ARTICLE>
        <ARTICLE>
          <H3>Air Quality Index</H3>
          <P><STRONG>82 (Good)</STRONG></P>
          <METER VALUE="0.82" MIN="0" MAX="1" ARIA-LABEL="Air quality">82%</METER>
        </ARTICLE>
        <ARTICLE>
          <H3>Energy Usage</H3>
          <P><STRONG>68% of Capacity</STRONG></P>
          <METER VALUE="0.68" MIN="0" MAX="1" ARIA-LABEL="Energy usage">68%</METER>
        </ARTICLE>
      </DIV>
    </SECTION>
    <SECTION>
      <H2>Live Alerts</H2>
      <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
        <THEAD>
          <TR>
            <TH SCOPE="col">Zone</TH>
            <TH SCOPE="col">Alert Type</TH>
            <TH SCOPE="col">Severity</TH>
            <TH SCOPE="col">Time</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Zone A</TD>
            <TD>Traffic Jam</TD>
            <TD>High</TD>
            <TD><TIME DATETIME="2024-11-15T08:30">08:30 AM</TIME></TD>
          </TR>
          <TR>
            <TD>Zone C</TD>
            <TD>Power Outage</TD>
            <TD>Critical</TD>
            <TD><TIME DATETIME="2024-11-15T09:15">09:15 AM</TIME></TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <NAV ARIA-LABEL="Footer Links">
      <A HREF="/privacy">Privacy</A>
      <A HREF="/terms">Terms</A>
      <A HREF="/support">Support</A>
    </NAV>
    <SMALL>&copy; 2024 Smart City Initiative. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. HEADER, NAV, MAIN, SECTION, FOOTER, DIV, ARTICLE, METER, TABLE, THEAD, TBODY, TR, TH, TD, TIME, STRONG sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, ID, CLASS, VALUE, MIN, MAX, SCOPE, DATETIME, META, LINK, SCRIPT attributes bhi. 'Charset', 'titel' fix karo."
},


/* ── Paragraph Mistakes — Hard HTML Data (H81–H90) ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code
   'wrong'   field = galat version

   Mistakes:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, scirpt → script)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H81 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 81</title>
</head>
<body>
  <h1>Online Food Order</h1>
  <section>
    <h2>Menu</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Qty</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Biryani</td>
          <td>Rs. 350</td>
          <td><input type="number" min="1" max="10" value="1"></td>
        </tr>
        <tr>
          <td>Karahi</td>
          <td>Rs. 500</td>
          <td><input type="number" min="1" max="10" value="1"></td>
        </tr>
        <tr>
          <td>Naan</td>
          <td>Rs. 30</td>
          <td><input type="number" min="1" max="10" value="1"></td>
        </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h2>Delivery Info</h2>
    <form action="/order" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="addr">Address:</label>
      <textarea id="addr" name="address" rows="3" cols="30"></textarea>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required>
      <button type="submit">Place Order</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 81</titel>
</head>
<BODY>
  <H1>Online Food Order</H1>
  <SECTION>
    <H2>Menu</H2>
    <TABLE>
      <THEAD>
        <TR>
          <TH SCOPE="col">Item</TH>
          <TH SCOPE="col">Price</TH>
          <TH SCOPE="col">Qty</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Biryani</TD>
          <TD>Rs. 350</TD>
          <TD><INPUT TYPE="number" MIN="1" MAX="10" VALUE="1"></TD>
        </TR>
        <TR>
          <TD>Karahi</TD>
          <TD>Rs. 500</TD>
          <TD><INPUT TYPE="number" MIN="1" MAX="10" VALUE="1"></TD>
        </TR>
        <TR>
          <TD>Naan</TD>
          <TD>Rs. 30</TD>
          <TD><INPUT TYPE="number" MIN="1" MAX="10" VALUE="1"></TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
  <SECTION>
    <H2>Delivery Info</H2>
    <FORM ACTION="/order" METHOD="post">
      <LABEL FOR="name">Name:</LABEL>
      <INPUT TYPE="text" ID="name" NAME="name" REQUIRED>
      <LABEL FOR="addr">Address:</LABEL>
      <TEXTAREA ID="addr" NAME="address" ROWS="3" COLS="30"></TEXTAREA>
      <LABEL FOR="phone">Phone:</LABEL>
      <INPUT TYPE="tel" ID="phone" NAME="phone" REQUIRED>
      <BUTTON TYPE="submit">Place Order</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. INPUT ke MIN, MAX, VALUE, TYPE bhi. FORM, LABEL, TEXTAREA, BUTTON bhi fix karo. 'Charset', 'titel' aur HTML, BODY bhi."
},

// ── H82 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 82</title>
  <link rel="stylesheet" href="shop.css">
</head>
<body>
  <header>
    <h1>Online Shopping Store</h1>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/account">Account</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section aria-label="Product Listing">
      <h2>Featured Products</h2>
      <article class="product-card">
        <img src="prod1.jpg" alt="Wireless Headphones" width="200" height="200">
        <h3>Wireless Headphones</h3>
        <p>Price: <strong>Rs. 4,500</strong></p>
        <button type="button">Add to Cart</button>
      </article>
      <article class="product-card">
        <img src="prod2.jpg" alt="Smart Watch" width="200" height="200">
        <h3>Smart Watch</h3>
        <p>Price: <strong>Rs. 8,999</strong></p>
        <button type="button">Add to Cart</button>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 ShopEase. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 82</titel>
  <LINK REL="stylesheet" HREF="shop.css">
</head>
<BODY>
  <HEADER>
    <H1>Online Shopping Store</H1>
    <NAV>
      <UL>
        <LI><A HREF="/home">Home</A></LI>
        <LI><A HREF="/products">Products</A></LI>
        <LI><A HREF="/cart">Cart</A></LI>
        <LI><A HREF="/account">Account</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION ARIA-LABEL="Product Listing">
      <H2>Featured Products</H2>
      <ARTICLE CLASS="product-card">
        <IMG SRC="prod1.jpg" ALT="Wireless Headphones" WIDTH="200" HEIGHT="200">
        <H3>Wireless Headphones</H3>
        <P>Price: <STRONG>Rs. 4,500</STRONG></P>
        <BUTTON TYPE="button">Add to Cart</BUTTON>
      </ARTICLE>
      <ARTICLE CLASS="product-card">
        <IMG SRC="prod2.jpg" ALT="Smart Watch" WIDTH="200" HEIGHT="200">
        <H3>Smart Watch</H3>
        <P>Price: <STRONG>Rs. 8,999</STRONG></P>
        <BUTTON TYPE="button">Add to Cart</BUTTON>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 ShopEase. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "HEADER, NAV, MAIN, FOOTER, SECTION, ARTICLE, IMG, STRONG, BUTTON sab uppercase. META, LINK, UL, LI, A bhi. ARIA-LABEL, WIDTH, HEIGHT, ALT, SRC fix karo. 'Charset', 'titel' bhi."
},

// ── H83 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 83</title>
</head>
<body>
  <h1>Student Registration Form</h1>
  <section>
    <h2>Personal Details</h2>
    <form action="/register" method="post">
      <label for="fname">First Name:</label>
      <input type="text" id="fname" name="firstname" required>
      <label for="lname">Last Name:</label>
      <input type="text" id="lname" name="lastname" required>
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" required>
      <label for="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label for="course">Course:</label>
      <select id="course" name="course">
        <option value="cs">Computer Science</option>
        <option value="se">Software Engineering</option>
        <option value="it">Information Technology</option>
      </select>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="pass">Password:</label>
      <input type="password" id="pass" name="password" minlength="8" required>
      <button type="submit">Register</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 83</titel>
</head>
<BODY>
  <H1>Student Registration Form</H1>
  <SECTION>
    <H2>Personal Details</H2>
    <FORM ACTION="/register" METHOD="post">
      <LABEL FOR="fname">First Name:</LABEL>
      <INPUT TYPE="text" ID="fname" NAME="firstname" REQUIRED>
      <LABEL FOR="lname">Last Name:</LABEL>
      <INPUT TYPE="text" ID="lname" NAME="lastname" REQUIRED>
      <LABEL FOR="dob">Date of Birth:</LABEL>
      <INPUT TYPE="date" ID="dob" NAME="dob" REQUIRED>
      <LABEL FOR="gender">Gender:</LABEL>
      <SELECT ID="gender" NAME="gender">
        <OPTION VALUE="male">Male</OPTION>
        <OPTION VALUE="female">Female</OPTION>
        <OPTION VALUE="other">Other</OPTION>
      </SELECT>
      <LABEL FOR="course">Course:</LABEL>
      <SELECT ID="course" NAME="course">
        <OPTION VALUE="cs">Computer Science</OPTION>
        <OPTION VALUE="se">Software Engineering</OPTION>
        <OPTION VALUE="it">Information Technology</OPTION>
      </SELECT>
      <LABEL FOR="email">Email:</LABEL>
      <INPUT TYPE="email" ID="email" NAME="email" REQUIRED>
      <LABEL FOR="pass">Password:</LABEL>
      <INPUT TYPE="password" ID="pass" NAME="password" MINLENGTH="8" REQUIRED>
      <BUTTON TYPE="submit">Register</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, MINLENGTH attributes bhi fix karo. 'Charset', 'titel', HTML, BODY bhi."
},

// ── H84 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 84</title>
  <link rel="stylesheet" href="blog.css">
</head>
<body>
  <header>
    <h1>Tech Blog</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/tutorials">Tutorials</a>
      <a href="/news">News</a>
    </nav>
  </header>
  <main>
    <article>
      <h2>Top 5 Programming Languages in 2024</h2>
      <p>Written by <strong>Ali Hassan</strong> on <time datetime="2024-06-01">June 1, 2024</time></p>
      <p>Programming languages continue to evolve. Here are the top picks:</p>
      <ol>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Rust</li>
        <li>TypeScript</li>
        <li>Go</li>
      </ol>
      <p>Each language has its own strengths and use cases.</p>
    </article>
    <aside>
      <h3>Related Articles</h3>
      <ul>
        <li><a href="/post/1">Intro to Python</a></li>
        <li><a href="/post/2">JavaScript Basics</a></li>
        <li><a href="/post/3">Why Learn Rust?</a></li>
      </ul>
    </aside>
  </main>
  <footer>
    <p>&copy; 2024 Tech Blog. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 84</titel>
  <LINK REL="stylesheet" HREF="blog.css">
</head>
<BODY>
  <HEADER>
    <H1>Tech Blog</H1>
    <NAV>
      <A HREF="/">Home</A>
      <A HREF="/tutorials">Tutorials</A>
      <A HREF="/news">News</A>
    </NAV>
  </HEADER>
  <MAIN>
    <ARTICLE>
      <H2>Top 5 Programming Languages in 2024</H2>
      <P>Written by <STRONG>Ali Hassan</STRONG> on <TIME DATETIME="2024-06-01">June 1, 2024</TIME></P>
      <P>Programming languages continue to evolve. Here are the top picks:</P>
      <OL>
        <LI>Python</LI>
        <LI>JavaScript</LI>
        <LI>Rust</LI>
        <LI>TypeScript</LI>
        <LI>Go</LI>
      </OL>
      <P>Each language has its own strengths and use cases.</P>
    </ARTICLE>
    <ASIDE>
      <H3>Related Articles</H3>
      <UL>
        <LI><A HREF="/post/1">Intro to Python</A></LI>
        <LI><A HREF="/post/2">JavaScript Basics</A></LI>
        <LI><A HREF="/post/3">Why Learn Rust?</A></LI>
      </UL>
    </ASIDE>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Tech Blog. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "HEADER, NAV, MAIN, ARTICLE, ASIDE, FOOTER, STRONG, TIME, OL, UL, LI, A sab uppercase hain. LINK, DATETIME, REL, HREF bhi. 'Charset', 'titel' fix karo."
},

// ── H85 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Hospital appointment booking system">
  <title>Hard Page 85</title>
</head>
<body>
  <h1>Hospital Appointment System</h1>
  <section>
    <h2>Book Appointment</h2>
    <form action="/book" method="post">
      <label for="patient">Patient Name:</label>
      <input type="text" id="patient" name="patient" required>
      <label for="dept">Department:</label>
      <select id="dept" name="department">
        <option value="cardio">Cardiology</option>
        <option value="ortho">Orthopedics</option>
        <option value="neuro">Neurology</option>
        <option value="general">General</option>
      </select>
      <label for="doctor">Doctor:</label>
      <input type="text" id="doctor" name="doctor" list="doctors">
      <datalist id="doctors">
        <option value="Dr. Ahsan">
        <option value="Dr. Rabia">
        <option value="Dr. Usman">
      </datalist>
      <label for="appt">Appointment Date:</label>
      <input type="date" id="appt" name="appointment" required>
      <label for="time">Preferred Time:</label>
      <input type="time" id="time" name="time" required>
      <button type="submit">Book Now</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="description" CONTENT="Hospital appointment booking system">
  <titel>Hard Page 85</titel>
</head>
<BODY>
  <H1>Hospital Appointment System</H1>
  <SECTION>
    <H2>Book Appointment</H2>
    <FORM ACTION="/book" METHOD="post">
      <LABEL FOR="patient">Patient Name:</LABEL>
      <INPUT TYPE="text" ID="patient" NAME="patient" REQUIRED>
      <LABEL FOR="dept">Department:</LABEL>
      <SELECT ID="dept" NAME="department">
        <OPTION VALUE="cardio">Cardiology</OPTION>
        <OPTION VALUE="ortho">Orthopedics</OPTION>
        <OPTION VALUE="neuro">Neurology</OPTION>
        <OPTION VALUE="general">General</OPTION>
      </SELECT>
      <LABEL FOR="doctor">Doctor:</LABEL>
      <INPUT TYPE="text" ID="doctor" NAME="doctor" LIST="doctors">
      <DATALIST ID="doctors">
        <OPTION VALUE="Dr. Ahsan">
        <OPTION VALUE="Dr. Rabia">
        <OPTION VALUE="Dr. Usman">
      </DATALIST>
      <LABEL FOR="appt">Appointment Date:</LABEL>
      <INPUT TYPE="date" ID="appt" NAME="appointment" REQUIRED>
      <LABEL FOR="time">Preferred Time:</LABEL>
      <INPUT TYPE="time" ID="time" NAME="time" REQUIRED>
      <BUTTON TYPE="submit">Book Now</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, DATALIST, BUTTON sab uppercase. META ke NAME, CONTENT, TYPE, ID, LIST, REQUIRED bhi fix karo. 'Charset', 'titel', HTML, BODY bhi."
},

// ── H86 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 86</title>
  <link rel="stylesheet" href="quiz.css">
  <script src="quiz.js" defer></script>
</head>
<body>
  <h1>Online Quiz Portal</h1>
  <section>
    <h2>HTML Basics Quiz</h2>
    <form action="/submit-quiz" method="post">
      <fieldset>
        <legend>Question 1: What does HTML stand for?</legend>
        <label><input type="radio" name="q1" value="a"> HyperText Markup Language</label>
        <label><input type="radio" name="q1" value="b"> High Transfer Markup Language</label>
        <label><input type="radio" name="q1" value="c"> HyperText Making Language</label>
      </fieldset>
      <fieldset>
        <legend>Question 2: Which tag is used for a paragraph?</legend>
        <label><input type="radio" name="q2" value="a"> &lt;div&gt;</label>
        <label><input type="radio" name="q2" value="b"> &lt;p&gt;</label>
        <label><input type="radio" name="q2" value="c"> &lt;span&gt;</label>
      </fieldset>
      <fieldset>
        <legend>Question 3: Which attribute is used for image source?</legend>
        <label><input type="radio" name="q3" value="a"> href</label>
        <label><input type="radio" name="q3" value="b"> src</label>
        <label><input type="radio" name="q3" value="c"> link</label>
      </fieldset>
      <button type="submit">Submit Quiz</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 86</titel>
  <LINK REL="stylesheet" HREF="quiz.css">
  <SCRIPT SRC="quiz.js" DEFER></SCRIPT>
</head>
<BODY>
  <H1>Online Quiz Portal</H1>
  <SECTION>
    <H2>HTML Basics Quiz</H2>
    <FORM ACTION="/submit-quiz" METHOD="post">
      <FIELDSET>
        <LEGEND>Question 1: What does HTML stand for?</LEGEND>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="a"> HyperText Markup Language</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="b"> High Transfer Markup Language</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q1" VALUE="c"> HyperText Making Language</LABEL>
      </FIELDSET>
      <FIELDSET>
        <LEGEND>Question 2: Which tag is used for a paragraph?</LEGEND>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="a"> &lt;div&gt;</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="b"> &lt;p&gt;</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q2" VALUE="c"> &lt;span&gt;</LABEL>
      </FIELDSET>
      <FIELDSET>
        <LEGEND>Question 3: Which attribute is used for image source?</LEGEND>
        <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="a"> href</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="b"> src</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="q3" VALUE="c"> link</LABEL>
      </FIELDSET>
      <BUTTON TYPE="submit">Submit Quiz</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FIELDSET, LEGEND, LABEL, INPUT, FORM, BUTTON sab uppercase. LINK, SCRIPT ke REL, HREF, SRC, DEFER bhi. TYPE, NAME, VALUE attributes fix karo. 'Charset', 'titel' bhi."
},

// ── H87 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 87</title>
</head>
<body>
  <h1>Real Estate Listings</h1>
  <section>
    <h2>Available Properties</h2>
    <article class="property">
      <h3>3-Bedroom House in Lahore</h3>
      <img src="house1.jpg" alt="House in Lahore" width="350" height="220">
      <ul>
        <li>Area: 10 Marla</li>
        <li>Bedrooms: 3</li>
        <li>Bathrooms: 2</li>
        <li>Price: Rs. 2.5 Crore</li>
      </ul>
      <a href="/property/101">View Details</a>
    </article>
    <article class="property">
      <h3>2-Bedroom Apartment in Karachi</h3>
      <img src="apt1.jpg" alt="Apartment in Karachi" width="350" height="220">
      <ul>
        <li>Area: 1200 sqft</li>
        <li>Bedrooms: 2</li>
        <li>Bathrooms: 2</li>
        <li>Price: Rs. 1.2 Crore</li>
      </ul>
      <a href="/property/102">View Details</a>
    </article>
  </section>
  <section>
    <h2>Search Properties</h2>
    <form action="/search" method="get">
      <label for="city">City:</label>
      <input type="text" id="city" name="city" placeholder="Enter city">
      <label for="type">Type:</label>
      <select id="type" name="type">
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="plot">Plot</option>
      </select>
      <button type="submit">Search</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 87</titel>
</head>
<BODY>
  <H1>Real Estate Listings</H1>
  <SECTION>
    <H2>Available Properties</H2>
    <ARTICLE CLASS="property">
      <H3>3-Bedroom House in Lahore</H3>
      <IMG SRC="house1.jpg" ALT="House in Lahore" WIDTH="350" HEIGHT="220">
      <UL>
        <LI>Area: 10 Marla</LI>
        <LI>Bedrooms: 3</LI>
        <LI>Bathrooms: 2</LI>
        <LI>Price: Rs. 2.5 Crore</LI>
      </UL>
      <A HREF="/property/101">View Details</A>
    </ARTICLE>
    <ARTICLE CLASS="property">
      <H3>2-Bedroom Apartment in Karachi</H3>
      <IMG SRC="apt1.jpg" ALT="Apartment in Karachi" WIDTH="350" HEIGHT="220">
      <UL>
        <LI>Area: 1200 sqft</LI>
        <LI>Bedrooms: 2</LI>
        <LI>Bathrooms: 2</LI>
        <LI>Price: Rs. 1.2 Crore</LI>
      </UL>
      <A HREF="/property/102">View Details</A>
    </ARTICLE>
  </SECTION>
  <SECTION>
    <H2>Search Properties</H2>
    <FORM ACTION="/search" METHOD="get">
      <LABEL FOR="city">City:</LABEL>
      <INPUT TYPE="text" ID="city" NAME="city" PLACEHOLDER="Enter city">
      <LABEL FOR="type">Type:</LABEL>
      <SELECT ID="type" NAME="type">
        <OPTION VALUE="house">House</OPTION>
        <OPTION VALUE="apartment">Apartment</OPTION>
        <OPTION VALUE="plot">Plot</OPTION>
      </SELECT>
      <BUTTON TYPE="submit">Search</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "ARTICLE, IMG, UL, LI, A, SECTION, FORM, LABEL, INPUT, SELECT, OPTION, BUTTON sab uppercase. SRC, ALT, WIDTH, HEIGHT, HREF, PLACEHOLDER, CLASS bhi fix karo. 'Charset', 'titel' bhi."
},

// ── H88 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 88</title>
  <link rel="stylesheet" href="edu.css">
</head>
<body>
  <header role="banner">
    <h1>EduLearn Online Academy</h1>
    <nav role="navigation" aria-label="Main Menu">
      <ul>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/instructors">Instructors</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="courses-heading">
      <h2 id="courses-heading">Our Courses</h2>
      <div class="course-grid">
        <article>
          <h3>Web Development</h3>
          <p>Learn HTML, CSS, and JavaScript from scratch.</p>
          <meter value="0.85" min="0" max="1">85%</meter>
          <a href="/course/webdev">Enroll Now</a>
        </article>
        <article>
          <h3>Data Science</h3>
          <p>Master Python, pandas, and machine learning.</p>
          <meter value="0.75" min="0" max="1">75%</meter>
          <a href="/course/datascience">Enroll Now</a>
        </article>
        <article>
          <h3>UI/UX Design</h3>
          <p>Design beautiful and usable interfaces.</p>
          <meter value="0.70" min="0" max="1">70%</meter>
          <a href="/course/uiux">Enroll Now</a>
        </article>
      </div>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 EduLearn. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 88</titel>
  <LINK REL="stylesheet" HREF="edu.css">
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>EduLearn Online Academy</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Menu">
      <UL>
        <LI><A HREF="/courses">Courses</A></LI>
        <LI><A HREF="/instructors">Instructors</A></LI>
        <LI><A HREF="/pricing">Pricing</A></LI>
        <LI><A HREF="/contact">Contact</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="courses-heading">
      <H2 ID="courses-heading">Our Courses</H2>
      <DIV CLASS="course-grid">
        <ARTICLE>
          <H3>Web Development</H3>
          <P>Learn HTML, CSS, and JavaScript from scratch.</P>
          <METER VALUE="0.85" MIN="0" MAX="1">85%</METER>
          <A HREF="/course/webdev">Enroll Now</A>
        </ARTICLE>
        <ARTICLE>
          <H3>Data Science</H3>
          <P>Master Python, pandas, and machine learning.</P>
          <METER VALUE="0.75" MIN="0" MAX="1">75%</METER>
          <A HREF="/course/datascience">Enroll Now</A>
        </ARTICLE>
        <ARTICLE>
          <H3>UI/UX Design</H3>
          <P>Design beautiful and usable interfaces.</P>
          <METER VALUE="0.70" MIN="0" MAX="1">70%</METER>
          <A HREF="/course/uiux">Enroll Now</A>
        </ARTICLE>
      </DIV>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 EduLearn. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 49,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, DIV, FOOTER, METER, SMALL sab uppercase. META, LINK ke attributes bhi. ARIA-LABEL, ARIA-LABELLEDBY, ROLE, VALUE, MIN, MAX bhi fix karo. 'Charset', 'titel' bhi."
},

// ── H89 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 89</title>
</head>
<body>
  <h1>Library Book Catalog</h1>
  <section>
    <h2>Search Books</h2>
    <form action="/search-books" method="get">
      <label for="keyword">Keyword:</label>
      <input type="search" id="keyword" name="keyword" placeholder="Search books...">
      <label for="category">Category:</label>
      <select id="category" name="category">
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Non-Fiction</option>
        <option value="science">Science</option>
        <option value="history">History</option>
        <option value="tech">Technology</option>
      </select>
      <button type="submit">Search</button>
    </form>
  </section>
  <section>
    <h2>Book Listings</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Available</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Clean Code</td>
          <td>Robert C. Martin</td>
          <td>Technology</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Sapiens</td>
          <td>Yuval Noah Harari</td>
          <td>History</td>
          <td>No</td>
        </tr>
        <tr>
          <td>The Alchemist</td>
          <td>Paulo Coelho</td>
          <td>Fiction</td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 89</titel>
</head>
<BODY>
  <H1>Library Book Catalog</H1>
  <SECTION>
    <H2>Search Books</H2>
    <FORM ACTION="/search-books" METHOD="get">
      <LABEL FOR="keyword">Keyword:</LABEL>
      <INPUT TYPE="search" ID="keyword" NAME="keyword" PLACEHOLDER="Search books...">
      <LABEL FOR="category">Category:</LABEL>
      <SELECT ID="category" NAME="category">
        <OPTION VALUE="fiction">Fiction</OPTION>
        <OPTION VALUE="nonfiction">Non-Fiction</OPTION>
        <OPTION VALUE="science">Science</OPTION>
        <OPTION VALUE="history">History</OPTION>
        <OPTION VALUE="tech">Technology</OPTION>
      </SELECT>
      <BUTTON TYPE="submit">Search</BUTTON>
    </FORM>
  </SECTION>
  <SECTION>
    <H2>Book Listings</H2>
    <TABLE>
      <THEAD>
        <TR>
          <TH SCOPE="col">Title</TH>
          <TH SCOPE="col">Author</TH>
          <TH SCOPE="col">Category</TH>
          <TH SCOPE="col">Available</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Clean Code</TD>
          <TD>Robert C. Martin</TD>
          <TD>Technology</TD>
          <TD>Yes</TD>
        </TR>
        <TR>
          <TD>Sapiens</TD>
          <TD>Yuval Noah Harari</TD>
          <TD>History</TD>
          <TD>No</TD>
        </TR>
        <TR>
          <TD>The Alchemist</TD>
          <TD>Paulo Coelho</TD>
          <TD>Fiction</TD>
          <TD>Yes</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "TABLE, THEAD, TBODY, TR, TH, TD, FORM, LABEL, INPUT, SELECT, OPTION, BUTTON sab uppercase. SCOPE, PLACEHOLDER, TYPE, ID, NAME, VALUE attributes bhi fix karo. 'Charset', 'titel' bhi."
},

// ── H90 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Smart Home Control Dashboard">
  <title>Hard Page 90</title>
  <link rel="stylesheet" href="dashboard.css">
  <script src="dashboard.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>SmartHome Dashboard</h1>
    <nav role="navigation" aria-label="Dashboard Navigation">
      <ul>
        <li><a href="/overview" aria-current="page">Overview</a></li>
        <li><a href="/lighting">Lighting</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/climate">Climate</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="status-heading">
      <h2 id="status-heading">Device Status</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Device</th>
            <th scope="col">Room</th>
            <th scope="col">Status</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smart Bulb</td>
            <td>Living Room</td>
            <td>ON</td>
            <td><meter value="0.6" min="0" max="1">60%</meter></td>
          </tr>
          <tr>
            <td>AC Unit</td>
            <td>Bedroom</td>
            <td>ON</td>
            <td><meter value="0.9" min="0" max="1">90%</meter></td>
          </tr>
          <tr>
            <td>Security Camera</td>
            <td>Entrance</td>
            <td>ON</td>
            <td><meter value="0.4" min="0" max="1">40%</meter></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Add New Device</h2>
      <form action="/add-device" method="post">
        <label for="dname">Device Name:</label>
        <input type="text" id="dname" name="device_name" required>
        <label for="room">Room:</label>
        <select id="room" name="room">
          <option value="living">Living Room</option>
          <option value="bedroom">Bedroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="entrance">Entrance</option>
        </select>
        <label for="dtype">Device Type:</label>
        <input type="text" id="dtype" name="device_type" list="device-types">
        <datalist id="device-types">
          <option value="Smart Bulb">
          <option value="Smart Lock">
          <option value="Thermostat">
          <option value="Camera">
        </datalist>
        <button type="submit" aria-label="Add device to dashboard">Add Device</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 SmartHome Inc. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Smart Home Control Dashboard">
  <titel>Hard Page 90</titel>
  <LINK REL="stylesheet" HREF="dashboard.css">
  <SCRIPT SRC="dashboard.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>SmartHome Dashboard</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Dashboard Navigation">
      <UL>
        <LI><A HREF="/overview" ARIA-CURRENT="page">Overview</A></LI>
        <LI><A HREF="/lighting">Lighting</A></LI>
        <LI><A HREF="/security">Security</A></LI>
        <LI><A HREF="/climate">Climate</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="status-heading">
      <H2 ID="status-heading">Device Status</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Device</TH>
            <TH SCOPE="col">Room</TH>
            <TH SCOPE="col">Status</TH>
            <TH SCOPE="col">Usage</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Smart Bulb</TD>
            <TD>Living Room</TD>
            <TD>ON</TD>
            <TD><METER VALUE="0.6" MIN="0" MAX="1">60%</METER></TD>
          </TR>
          <TR>
            <TD>AC Unit</TD>
            <TD>Bedroom</TD>
            <TD>ON</TD>
            <TD><METER VALUE="0.9" MIN="0" MAX="1">90%</METER></TD>
          </TR>
          <TR>
            <TD>Security Camera</TD>
            <TD>Entrance</TD>
            <TD>ON</TD>
            <TD><METER VALUE="0.4" MIN="0" MAX="1">40%</METER></TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Add New Device</H2>
      <FORM ACTION="/add-device" METHOD="post">
        <LABEL FOR="dname">Device Name:</LABEL>
        <INPUT TYPE="text" ID="dname" NAME="device_name" REQUIRED>
        <LABEL FOR="room">Room:</LABEL>
        <SELECT ID="room" NAME="room">
          <OPTION VALUE="living">Living Room</OPTION>
          <OPTION VALUE="bedroom">Bedroom</OPTION>
          <OPTION VALUE="kitchen">Kitchen</OPTION>
          <OPTION VALUE="entrance">Entrance</OPTION>
        </SELECT>
        <LABEL FOR="dtype">Device Type:</LABEL>
        <INPUT TYPE="text" ID="dtype" NAME="device_type" LIST="device-types">
        <DATALIST ID="device-types">
          <OPTION VALUE="Smart Bulb">
          <OPTION VALUE="Smart Lock">
          <OPTION VALUE="Thermostat">
          <OPTION VALUE="Camera">
        </DATALIST>
        <BUTTON TYPE="submit" ARIA-LABEL="Add device to dashboard">Add Device</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 SmartHome Inc. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega dashboard page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, METER, FORM, LABEL, INPUT, SELECT, OPTION, DATALIST, BUTTON, FOOTER, SMALL — sab uppercase. ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, ROLE, SCOPE, VALUE, MIN, MAX bhi fix karo. 'Charset', 'titel' bhi."
},

/* ── Paragraph Mistakes — Hard HTML Data (H91–H100) ──
   Hard: 45-50 mistakes per code

   'correct' field = poora sahi code
   'wrong'   field = galat version

   Mistakes:
     'case'    = wrong case (H1 → h1, BODY → body)
     'spelling'= spelling galat (titel → title, scirpt → script)
     'missing' = tag ya attribute ghayab hai
     'extra'   = extra/unwanted tag ya attribute
*/

// ── H91 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 91</title>
  <link rel="stylesheet" href="travel.css">
</head>
<body>
  <h1>Travel Booking Portal</h1>
  <header>
    <nav>
      <ul>
        <li><a href="/flights">Flights</a></li>
        <li><a href="/hotels">Hotels</a></li>
        <li><a href="/packages">Packages</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Search Flights</h2>
      <form action="/search-flights" method="post">
        <label for="from">From:</label>
        <input type="text" id="from" name="from" placeholder="Departure city" required>
        <label for="to">To:</label>
        <input type="text" id="to" name="to" placeholder="Destination city" required>
        <label for="depart">Departure Date:</label>
        <input type="date" id="depart" name="departure" required>
        <label for="return">Return Date:</label>
        <input type="date" id="return" name="return">
        <label for="class">Class:</label>
        <select id="class" name="class">
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
        <button type="submit">Search Flights</button>
      </form>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 TravelEase. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 91</titel>
  <LINK REL="stylesheet" HREF="travel.css">
</head>
<BODY>
  <H1>Travel Booking Portal</H1>
  <HEADER>
    <NAV>
      <UL>
        <LI><A HREF="/flights">Flights</A></LI>
        <LI><A HREF="/hotels">Hotels</A></LI>
        <LI><A HREF="/packages">Packages</A></LI>
        <LI><A HREF="/contact">Contact</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Search Flights</H2>
      <FORM ACTION="/search-flights" METHOD="post">
        <LABEL FOR="from">From:</LABEL>
        <INPUT TYPE="text" ID="from" NAME="from" PLACEHOLDER="Departure city" REQUIRED>
        <LABEL FOR="to">To:</LABEL>
        <INPUT TYPE="text" ID="to" NAME="to" PLACEHOLDER="Destination city" REQUIRED>
        <LABEL FOR="depart">Departure Date:</LABEL>
        <INPUT TYPE="date" ID="depart" NAME="departure" REQUIRED>
        <LABEL FOR="return">Return Date:</LABEL>
        <INPUT TYPE="date" ID="return" NAME="return">
        <LABEL FOR="class">Class:</LABEL>
        <SELECT ID="class" NAME="class">
          <OPTION VALUE="economy">Economy</OPTION>
          <OPTION VALUE="business">Business</OPTION>
          <OPTION VALUE="first">First Class</OPTION>
        </SELECT>
        <BUTTON TYPE="submit">Search Flights</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 TravelEase. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, FOOTER, SECTION, FORM, LABEL, INPUT, SELECT, OPTION, BUTTON sab uppercase hain. UL, LI, A, LINK ke attributes bhi fix karo. PLACEHOLDER, REQUIRED, TYPE, ID, NAME uppercase hain. 'Charset', 'titel' bhi theek karo."
},

// ── H92 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 92</title>
</head>
<body>
  <h1>Expense Tracker</h1>
  <section>
    <h2>Add New Expense</h2>
    <form action="/add-expense" method="post">
      <label for="desc">Description:</label>
      <input type="text" id="desc" name="description" required placeholder="e.g. Groceries">
      <label for="amount">Amount (Rs.):</label>
      <input type="number" id="amount" name="amount" min="1" required>
      <label for="category">Category:</label>
      <select id="category" name="category">
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="health">Health</option>
        <option value="education">Education</option>
        <option value="other">Other</option>
      </select>
      <label for="date">Date:</label>
      <input type="date" id="date" name="date" required>
      <button type="submit">Add Expense</button>
    </form>
  </section>
  <section>
    <h2>Monthly Summary</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Total Spent</th>
          <th scope="col">Budget</th>
          <th scope="col">Remaining</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Food</td>
          <td>Rs. 8,500</td>
          <td>Rs. 10,000</td>
          <td>Rs. 1,500</td>
        </tr>
        <tr>
          <td>Transport</td>
          <td>Rs. 3,200</td>
          <td>Rs. 5,000</td>
          <td>Rs. 1,800</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 92</titel>
</head>
<BODY>
  <H1>Expense Tracker</H1>
  <SECTION>
    <H2>Add New Expense</H2>
    <FORM ACTION="/add-expense" METHOD="post">
      <LABEL FOR="desc">Description:</LABEL>
      <INPUT TYPE="text" ID="desc" NAME="description" REQUIRED PLACEHOLDER="e.g. Groceries">
      <LABEL FOR="amount">Amount (Rs.):</LABEL>
      <INPUT TYPE="number" ID="amount" NAME="amount" MIN="1" REQUIRED>
      <LABEL FOR="category">Category:</LABEL>
      <SELECT ID="category" NAME="category">
        <OPTION VALUE="food">Food</OPTION>
        <OPTION VALUE="transport">Transport</OPTION>
        <OPTION VALUE="health">Health</OPTION>
        <OPTION VALUE="education">Education</OPTION>
        <OPTION VALUE="other">Other</OPTION>
      </SELECT>
      <LABEL FOR="date">Date:</LABEL>
      <INPUT TYPE="date" ID="date" NAME="date" REQUIRED>
      <BUTTON TYPE="submit">Add Expense</BUTTON>
    </FORM>
  </SECTION>
  <SECTION>
    <H2>Monthly Summary</H2>
    <TABLE>
      <THEAD>
        <TR>
          <TH SCOPE="col">Category</TH>
          <TH SCOPE="col">Total Spent</TH>
          <TH SCOPE="col">Budget</TH>
          <TH SCOPE="col">Remaining</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Food</TD>
          <TD>Rs. 8,500</TD>
          <TD>Rs. 10,000</TD>
          <TD>Rs. 1,500</TD>
        </TR>
        <TR>
          <TD>Transport</TD>
          <TD>Rs. 3,200</TD>
          <TD>Rs. 5,000</TD>
          <TD>Rs. 1,800</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. META ke NAME, CONTENT bhi. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, MIN, SCOPE sab fix karo. 'Charset', 'titel' bhi."
},

// ── H93 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 93</title>
  <script src="chat.js" defer></script>
</head>
<body>
  <h1>Customer Support Chat</h1>
  <section>
    <h2>Live Chat</h2>
    <div id="chat-box" role="log" aria-live="polite">
      <article class="message agent">
        <strong>Agent:</strong>
        <p>Hello! How can I help you today?</p>
      </article>
      <article class="message user">
        <strong>You:</strong>
        <p>I have an issue with my order #4521.</p>
      </article>
      <article class="message agent">
        <strong>Agent:</strong>
        <p>Let me look into that for you. Please hold on.</p>
      </article>
    </div>
    <form action="/send-message" method="post">
      <label for="msg">Your Message:</label>
      <textarea id="msg" name="message" rows="3" cols="40" placeholder="Type your message..."></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
  <aside>
    <h3>Support Hours</h3>
    <ul>
      <li>Monday – Friday: 9am – 6pm</li>
      <li>Saturday: 10am – 4pm</li>
      <li>Sunday: Closed</li>
    </ul>
  </aside>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 93</titel>
  <SCRIPT SRC="chat.js" DEFER></SCRIPT>
</head>
<BODY>
  <H1>Customer Support Chat</H1>
  <SECTION>
    <H2>Live Chat</H2>
    <DIV ID="chat-box" ROLE="log" ARIA-LIVE="polite">
      <ARTICLE CLASS="message agent">
        <STRONG>Agent:</STRONG>
        <P>Hello! How can I help you today?</P>
      </ARTICLE>
      <ARTICLE CLASS="message user">
        <STRONG>You:</STRONG>
        <P>I have an issue with my order #4521.</P>
      </ARTICLE>
      <ARTICLE CLASS="message agent">
        <STRONG>Agent:</STRONG>
        <P>Let me look into that for you. Please hold on.</P>
      </ARTICLE>
    </DIV>
    <FORM ACTION="/send-message" METHOD="post">
      <LABEL FOR="msg">Your Message:</LABEL>
      <TEXTAREA ID="msg" NAME="message" ROWS="3" COLS="40" PLACEHOLDER="Type your message..."></TEXTAREA>
      <BUTTON TYPE="submit">Send</BUTTON>
    </FORM>
  </SECTION>
  <ASIDE>
    <H3>Support Hours</H3>
    <UL>
      <LI>Monday – Friday: 9am – 6pm</LI>
      <LI>Saturday: 10am – 4pm</LI>
      <LI>Sunday: Closed</LI>
    </UL>
  </ASIDE>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "SCRIPT, SECTION, DIV, ARTICLE, STRONG, FORM, LABEL, TEXTAREA, BUTTON, ASIDE, UL sab uppercase. ROLE, ARIA-LIVE, CLASS, ID, SRC, DEFER, PLACEHOLDER, ROWS, COLS bhi fix karo. 'Charset', 'titel' bhi."
},

// ── H94 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Job portal for finding careers">
  <title>Hard Page 94</title>
  <link rel="stylesheet" href="jobs.css">
</head>
<body>
  <header>
    <h1>JobFinder Pakistan</h1>
    <nav aria-label="Main Navigation">
      <a href="/jobs">Browse Jobs</a>
      <a href="/post-job">Post a Job</a>
      <a href="/companies">Companies</a>
      <a href="/profile">My Profile</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Latest Job Listings</h2>
      <article class="job-card">
        <h3>Frontend Developer</h3>
        <p>Company: <strong>TechCorp Pvt. Ltd.</strong></p>
        <p>Location: Lahore | Experience: 2+ years</p>
        <p>Salary: Rs. 80,000 – 120,000/month</p>
        <a href="/job/201" class="btn">Apply Now</a>
      </article>
      <article class="job-card">
        <h3>Data Analyst</h3>
        <p>Company: <strong>DataViz Solutions</strong></p>
        <p>Location: Karachi | Experience: 1+ year</p>
        <p>Salary: Rs. 60,000 – 90,000/month</p>
        <a href="/job/202" class="btn">Apply Now</a>
      </article>
    </section>
  </main>
  <footer>
    <small>&copy; 2024 JobFinder. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="description" CONTENT="Job portal for finding careers">
  <titel>Hard Page 94</titel>
  <LINK REL="stylesheet" HREF="jobs.css">
</head>
<BODY>
  <HEADER>
    <H1>JobFinder Pakistan</H1>
    <NAV ARIA-LABEL="Main Navigation">
      <A HREF="/jobs">Browse Jobs</A>
      <A HREF="/post-job">Post a Job</A>
      <A HREF="/companies">Companies</A>
      <A HREF="/profile">My Profile</A>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Latest Job Listings</H2>
      <ARTICLE CLASS="job-card">
        <H3>Frontend Developer</H3>
        <P>Company: <STRONG>TechCorp Pvt. Ltd.</STRONG></P>
        <P>Location: Lahore | Experience: 2+ years</P>
        <P>Salary: Rs. 80,000 – 120,000/month</P>
        <A HREF="/job/201" CLASS="btn">Apply Now</A>
      </ARTICLE>
      <ARTICLE CLASS="job-card">
        <H3>Data Analyst</H3>
        <P>Company: <STRONG>DataViz Solutions</STRONG></P>
        <P>Location: Karachi | Experience: 1+ year</P>
        <P>Salary: Rs. 60,000 – 90,000/month</P>
        <A HREF="/job/202" CLASS="btn">Apply Now</A>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <SMALL>&copy; 2024 JobFinder. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, STRONG, SMALL sab uppercase. META ke NAME, CONTENT, LINK ke REL, HREF bhi. ARIA-LABEL, CLASS, HREF attributes fix karo. 'Charset', 'titel' bhi."
},

// ── H95 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 95</title>
  <link rel="stylesheet" href="gym.css">
  <script src="gym.js" defer></script>
</head>
<body>
  <h1>FitZone Gym Management</h1>
  <section>
    <h2>Member Registration</h2>
    <form action="/register-member" method="post" enctype="multipart/form-data">
      <label for="mname">Full Name:</label>
      <input type="text" id="mname" name="fullname" required>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="16" max="80" required>
      <label for="goal">Fitness Goal:</label>
      <select id="goal" name="goal">
        <option value="weightloss">Weight Loss</option>
        <option value="muscle">Muscle Gain</option>
        <option value="stamina">Stamina</option>
        <option value="flexibility">Flexibility</option>
      </select>
      <label for="plan">Membership Plan:</label>
      <fieldset>
        <legend>Choose Plan</legend>
        <label><input type="radio" name="plan" value="monthly"> Monthly – Rs. 3,000</label>
        <label><input type="radio" name="plan" value="quarterly"> Quarterly – Rs. 8,000</label>
        <label><input type="radio" name="plan" value="yearly"> Yearly – Rs. 25,000</label>
      </fieldset>
      <label for="photo">Upload Photo:</label>
      <input type="file" id="photo" name="photo" accept="image/*">
      <button type="submit">Register Member</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 95</titel>
  <LINK REL="stylesheet" HREF="gym.css">
  <SCRIPT SRC="gym.js" DEFER></SCRIPT>
</head>
<BODY>
  <H1>FitZone Gym Management</H1>
  <SECTION>
    <H2>Member Registration</H2>
    <FORM ACTION="/register-member" METHOD="post" ENCTYPE="multipart/form-data">
      <LABEL FOR="mname">Full Name:</LABEL>
      <INPUT TYPE="text" ID="mname" NAME="fullname" REQUIRED>
      <LABEL FOR="age">Age:</LABEL>
      <INPUT TYPE="number" ID="age" NAME="age" MIN="16" MAX="80" REQUIRED>
      <LABEL FOR="goal">Fitness Goal:</LABEL>
      <SELECT ID="goal" NAME="goal">
        <OPTION VALUE="weightloss">Weight Loss</OPTION>
        <OPTION VALUE="muscle">Muscle Gain</OPTION>
        <OPTION VALUE="stamina">Stamina</OPTION>
        <OPTION VALUE="flexibility">Flexibility</OPTION>
      </SELECT>
      <LABEL FOR="plan">Membership Plan:</LABEL>
      <FIELDSET>
        <LEGEND>Choose Plan</LEGEND>
        <LABEL><INPUT TYPE="radio" NAME="plan" VALUE="monthly"> Monthly – Rs. 3,000</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="plan" VALUE="quarterly"> Quarterly – Rs. 8,000</LABEL>
        <LABEL><INPUT TYPE="radio" NAME="plan" VALUE="yearly"> Yearly – Rs. 25,000</LABEL>
      </FIELDSET>
      <LABEL FOR="photo">Upload Photo:</LABEL>
      <INPUT TYPE="file" ID="photo" NAME="photo" ACCEPT="image/*">
      <BUTTON TYPE="submit">Register Member</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, FIELDSET, LEGEND, BUTTON sab uppercase. ENCTYPE, TYPE, ID, NAME, REQUIRED, MIN, MAX, VALUE, ACCEPT sab fix karo. LINK, SCRIPT ke attributes bhi. 'Charset', 'titel' bhi."
},

// ── H96 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 96</title>
  <link rel="stylesheet" href="news.css">
</head>
<body>
  <header role="banner">
    <h1>Daily Urdu News</h1>
    <nav role="navigation" aria-label="News Categories">
      <ul>
        <li><a href="/pakistan">Pakistan</a></li>
        <li><a href="/world">World</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/business">Business</a></li>
        <li><a href="/tech">Technology</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <article>
      <h2>PM Inaugurates New Motorway Project</h2>
      <p>Published: <time datetime="2024-09-15">September 15, 2024</time></p>
      <img src="motorway.jpg" alt="New motorway inauguration" width="600" height="300">
      <p>The Prime Minister today inaugurated a 120km motorway connecting Lahore to Multan, boosting trade and connectivity in the region.</p>
      <p>The project, worth Rs. 80 billion, was completed ahead of schedule with local engineering expertise.</p>
    </article>
    <aside>
      <h3>Breaking News</h3>
      <ul>
        <li><a href="/news/1">Economy grows by 4.5%</a></li>
        <li><a href="/news/2">Pakistan wins Asia Cup</a></li>
        <li><a href="/news/3">New education policy launched</a></li>
      </ul>
    </aside>
  </main>
  <footer role="contentinfo">
    <p>&copy; 2024 Daily Urdu News. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 96</titel>
  <LINK REL="stylesheet" HREF="news.css">
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Daily Urdu News</H1>
    <NAV ROLE="navigation" ARIA-LABEL="News Categories">
      <UL>
        <LI><A HREF="/pakistan">Pakistan</A></LI>
        <LI><A HREF="/world">World</A></LI>
        <LI><A HREF="/sports">Sports</A></LI>
        <LI><A HREF="/business">Business</A></LI>
        <LI><A HREF="/tech">Technology</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <ARTICLE>
      <H2>PM Inaugurates New Motorway Project</H2>
      <P>Published: <TIME DATETIME="2024-09-15">September 15, 2024</TIME></P>
      <IMG SRC="motorway.jpg" ALT="New motorway inauguration" WIDTH="600" HEIGHT="300">
      <P>The Prime Minister today inaugurated a 120km motorway connecting Lahore to Multan, boosting trade and connectivity in the region.</P>
      <P>The project, worth Rs. 80 billion, was completed ahead of schedule with local engineering expertise.</P>
    </ARTICLE>
    <ASIDE>
      <H3>Breaking News</H3>
      <UL>
        <LI><A HREF="/news/1">Economy grows by 4.5%</A></LI>
        <LI><A HREF="/news/2">Pakistan wins Asia Cup</A></LI>
        <LI><A HREF="/news/3">New education policy launched</A></LI>
      </UL>
    </ASIDE>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <P>&copy; 2024 Daily Urdu News. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, ARTICLE, ASIDE, FOOTER sab uppercase. TIME, IMG, UL, LI, A bhi. META ke NAME, CONTENT, LINK ke REL, HREF bhi. ROLE, ARIA-LABEL, DATETIME, SRC, ALT, WIDTH, HEIGHT fix karo. 'Charset', 'titel' bhi."
},

// ── H97 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 97</title>
</head>
<body>
  <h1>Online Banking Dashboard</h1>
  <section aria-labelledby="acc-heading">
    <h2 id="acc-heading">Account Summary</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Account</th>
          <th scope="col">Type</th>
          <th scope="col">Balance</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PK12-0001-1234</td>
          <td>Current</td>
          <td>Rs. 125,000</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>PK12-0001-5678</td>
          <td>Savings</td>
          <td>Rs. 450,000</td>
          <td>Active</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h2>Transfer Funds</h2>
    <form action="/transfer" method="post">
      <label for="from-acc">From Account:</label>
      <select id="from-acc" name="from_account">
        <option value="current">Current – PK12-0001-1234</option>
        <option value="savings">Savings – PK12-0001-5678</option>
      </select>
      <label for="to-acc">To Account:</label>
      <input type="text" id="to-acc" name="to_account" required placeholder="Enter IBAN">
      <label for="amount">Amount:</label>
      <input type="number" id="amount" name="amount" min="100" required>
      <label for="remarks">Remarks:</label>
      <input type="text" id="remarks" name="remarks" placeholder="Optional">
      <button type="submit">Transfer Now</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 97</titel>
</head>
<BODY>
  <H1>Online Banking Dashboard</H1>
  <SECTION ARIA-LABELLEDBY="acc-heading">
    <H2 ID="acc-heading">Account Summary</H2>
    <TABLE>
      <THEAD>
        <TR>
          <TH SCOPE="col">Account</TH>
          <TH SCOPE="col">Type</TH>
          <TH SCOPE="col">Balance</TH>
          <TH SCOPE="col">Status</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>PK12-0001-1234</TD>
          <TD>Current</TD>
          <TD>Rs. 125,000</TD>
          <TD>Active</TD>
        </TR>
        <TR>
          <TD>PK12-0001-5678</TD>
          <TD>Savings</TD>
          <TD>Rs. 450,000</TD>
          <TD>Active</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
  <SECTION>
    <H2>Transfer Funds</H2>
    <FORM ACTION="/transfer" METHOD="post">
      <LABEL FOR="from-acc">From Account:</LABEL>
      <SELECT ID="from-acc" NAME="from_account">
        <OPTION VALUE="current">Current – PK12-0001-1234</OPTION>
        <OPTION VALUE="savings">Savings – PK12-0001-5678</OPTION>
      </SELECT>
      <LABEL FOR="to-acc">To Account:</LABEL>
      <INPUT TYPE="text" ID="to-acc" NAME="to_account" REQUIRED PLACEHOLDER="Enter IBAN">
      <LABEL FOR="amount">Amount:</LABEL>
      <INPUT TYPE="number" ID="amount" NAME="amount" MIN="100" REQUIRED>
      <LABEL FOR="remarks">Remarks:</LABEL>
      <INPUT TYPE="text" ID="remarks" NAME="remarks" PLACEHOLDER="Optional">
      <BUTTON TYPE="submit">Transfer Now</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD, FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase. ARIA-LABELLEDBY, ID, SCOPE, TYPE, NAME, REQUIRED, PLACEHOLDER, MIN bhi fix karo. 'Charset', 'titel' bhi."
},

// ── H98 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 98</title>
  <link rel="stylesheet" href="recipe.css">
  <script src="recipe.js" defer></script>
</head>
<body>
  <header>
    <h1>Pakistani Recipe Book</h1>
    <nav aria-label="Recipe Categories">
      <ul>
        <li><a href="/rice">Rice Dishes</a></li>
        <li><a href="/curries">Curries</a></li>
        <li><a href="/breads">Breads</a></li>
        <li><a href="/desserts">Desserts</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>Chicken Biryani Recipe</h2>
      <img src="biryani.jpg" alt="Chicken Biryani" width="500" height="300">
      <section>
        <h3>Ingredients</h3>
        <ul>
          <li>1 kg Chicken</li>
          <li>3 cups Basmati Rice</li>
          <li>2 large Onions</li>
          <li>1 cup Yogurt</li>
          <li>Biryani Masala as needed</li>
        </ul>
      </section>
      <section>
        <h3>Instructions</h3>
        <ol>
          <li>Marinate chicken with yogurt and spices for 2 hours.</li>
          <li>Fry onions till golden brown.</li>
          <li>Cook rice till 70% done.</li>
          <li>Layer rice and chicken alternately.</li>
          <li>Steam on low flame for 30 minutes.</li>
        </ol>
      </section>
      <p>Preparation Time: <time datetime="PT2H30M">2 hours 30 minutes</time></p>
    </article>
  </main>
  <footer>
    <p>&copy; 2024 Recipe Book. All rights reserved.</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 98</titel>
  <LINK REL="stylesheet" HREF="recipe.css">
  <SCRIPT SRC="recipe.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER>
    <H1>Pakistani Recipe Book</H1>
    <NAV ARIA-LABEL="Recipe Categories">
      <UL>
        <LI><A HREF="/rice">Rice Dishes</A></LI>
        <LI><A HREF="/curries">Curries</A></LI>
        <LI><A HREF="/breads">Breads</A></LI>
        <LI><A HREF="/desserts">Desserts</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <ARTICLE>
      <H2>Chicken Biryani Recipe</H2>
      <IMG SRC="biryani.jpg" ALT="Chicken Biryani" WIDTH="500" HEIGHT="300">
      <SECTION>
        <H3>Ingredients</H3>
        <UL>
          <LI>1 kg Chicken</LI>
          <LI>3 cups Basmati Rice</LI>
          <LI>2 large Onions</LI>
          <LI>1 cup Yogurt</LI>
          <LI>Biryani Masala as needed</LI>
        </UL>
      </SECTION>
      <SECTION>
        <H3>Instructions</H3>
        <OL>
          <LI>Marinate chicken with yogurt and spices for 2 hours.</LI>
          <LI>Fry onions till golden brown.</LI>
          <LI>Cook rice till 70% done.</LI>
          <LI>Layer rice and chicken alternately.</LI>
          <LI>Steam on low flame for 30 minutes.</LI>
        </OL>
      </SECTION>
      <P>Preparation Time: <TIME DATETIME="PT2H30M">2 hours 30 minutes</TIME></P>
    </ARTICLE>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Recipe Book. All rights reserved.</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, ARTICLE, SECTION, FOOTER, IMG, TIME, OL, UL, LI, A sab uppercase. META ke NAME, CONTENT, LINK ke REL, HREF, SCRIPT ke SRC, DEFER bhi. ARIA-LABEL, SRC, ALT, WIDTH, HEIGHT, DATETIME fix karo. 'Charset', 'titel' bhi."
},

// ── H99 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 99</title>
  <link rel="stylesheet" href="event.css">
</head>
<body>
  <h1>Event Management System</h1>
  <section>
    <h2>Upcoming Events</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Event Name</th>
          <th scope="col">Date</th>
          <th scope="col">Venue</th>
          <th scope="col">Seats Left</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tech Summit 2024</td>
          <td><time datetime="2024-11-10">Nov 10, 2024</time></td>
          <td>Expo Centre Lahore</td>
          <td>120</td>
        </tr>
        <tr>
          <td>Startup Pitch Night</td>
          <td><time datetime="2024-11-20">Nov 20, 2024</time></td>
          <td>Arfa Tower Lahore</td>
          <td>45</td>
        </tr>
        <tr>
          <td>Digital Marketing Workshop</td>
          <td><time datetime="2024-12-05">Dec 5, 2024</time></td>
          <td>PC Hotel Karachi</td>
          <td>30</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h2>Register for Event</h2>
    <form action="/register-event" method="post">
      <label for="ename">Your Name:</label>
      <input type="text" id="ename" name="attendee_name" required>
      <label for="eemail">Email:</label>
      <input type="email" id="eemail" name="email" required>
      <label for="event">Select Event:</label>
      <select id="event" name="event">
        <option value="tech">Tech Summit 2024</option>
        <option value="startup">Startup Pitch Night</option>
        <option value="digital">Digital Marketing Workshop</option>
      </select>
      <label for="tickets">Number of Tickets:</label>
      <input type="number" id="tickets" name="tickets" min="1" max="5" value="1">
      <button type="submit">Register</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 99</titel>
  <LINK REL="stylesheet" HREF="event.css">
</head>
<BODY>
  <H1>Event Management System</H1>
  <SECTION>
    <H2>Upcoming Events</H2>
    <TABLE>
      <THEAD>
        <TR>
          <TH SCOPE="col">Event Name</TH>
          <TH SCOPE="col">Date</TH>
          <TH SCOPE="col">Venue</TH>
          <TH SCOPE="col">Seats Left</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Tech Summit 2024</TD>
          <TD><TIME DATETIME="2024-11-10">Nov 10, 2024</TIME></TD>
          <TD>Expo Centre Lahore</TD>
          <TD>120</TD>
        </TR>
        <TR>
          <TD>Startup Pitch Night</TD>
          <TD><TIME DATETIME="2024-11-20">Nov 20, 2024</TIME></TD>
          <TD>Arfa Tower Lahore</TD>
          <TD>45</TD>
        </TR>
        <TR>
          <TD>Digital Marketing Workshop</TD>
          <TD><TIME DATETIME="2024-12-05">Dec 5, 2024</TIME></TD>
          <TD>PC Hotel Karachi</TD>
          <TD>30</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
  <SECTION>
    <H2>Register for Event</H2>
    <FORM ACTION="/register-event" METHOD="post">
      <LABEL FOR="ename">Your Name:</LABEL>
      <INPUT TYPE="text" ID="ename" NAME="attendee_name" REQUIRED>
      <LABEL FOR="eemail">Email:</LABEL>
      <INPUT TYPE="email" ID="eemail" NAME="email" REQUIRED>
      <LABEL FOR="event">Select Event:</LABEL>
      <SELECT ID="event" NAME="event">
        <OPTION VALUE="tech">Tech Summit 2024</OPTION>
        <OPTION VALUE="startup">Startup Pitch Night</OPTION>
        <OPTION VALUE="digital">Digital Marketing Workshop</OPTION>
      </SELECT>
      <LABEL FOR="tickets">Number of Tickets:</LABEL>
      <INPUT TYPE="number" ID="tickets" NAME="tickets" MIN="1" MAX="5" VALUE="1">
      <BUTTON TYPE="submit">Register</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 48,
hint: "TABLE, THEAD, TBODY, TR, TH, TD, TIME, FORM, LABEL, INPUT, SELECT, OPTION, BUTTON sab uppercase. SCOPE, DATETIME, TYPE, ID, NAME, REQUIRED, MIN, MAX, VALUE bhi fix karo. LINK ke REL, HREF bhi. 'Charset', 'titel' bhi."
},

// ── H100 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="School management portal for students and teachers">
  <title>Hard Page 100</title>
  <link rel="stylesheet" href="school.css">
  <script src="school.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>EduPortal School Management</h1>
    <nav role="navigation" aria-label="School Navigation">
      <ul>
        <li><a href="/dashboard" aria-current="page">Dashboard</a></li>
        <li><a href="/students">Students</a></li>
        <li><a href="/teachers">Teachers</a></li>
        <li><a href="/timetable">Timetable</a></li>
        <li><a href="/results">Results</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="results-heading">
      <h2 id="results-heading">Student Results</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Roll No</th>
            <th scope="col">Student Name</th>
            <th scope="col">Class</th>
            <th scope="col">Marks</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>Ahmed Raza</td>
            <td>10-A</td>
            <td>485/500</td>
            <td>A+</td>
          </tr>
          <tr>
            <td>102</td>
            <td>Sara Malik</td>
            <td>10-A</td>
            <td>460/500</td>
            <td>A</td>
          </tr>
          <tr>
            <td>103</td>
            <td>Bilal Khan</td>
            <td>10-B</td>
            <td>390/500</td>
            <td>B+</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Add New Student</h2>
      <form action="/add-student" method="post">
        <label for="sname">Student Name:</label>
        <input type="text" id="sname" name="student_name" required>
        <label for="sclass">Class:</label>
        <select id="sclass" name="class">
          <option value="9a">Class 9-A</option>
          <option value="9b">Class 9-B</option>
          <option value="10a">Class 10-A</option>
          <option value="10b">Class 10-B</option>
        </select>
        <label for="semail">Parent Email:</label>
        <input type="email" id="semail" name="parent_email" required>
        <label for="sphone">Parent Phone:</label>
        <input type="tel" id="sphone" name="parent_phone" required>
        <label for="notes">Additional Notes:</label>
        <textarea id="notes" name="notes" rows="4" cols="40"></textarea>
        <button type="submit" aria-label="Add student to system">Add Student</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 EduPortal. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="School management portal for students and teachers">
  <titel>Hard Page 100</titel>
  <LINK REL="stylesheet" HREF="school.css">
  <SCRIPT SRC="school.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>EduPortal School Management</H1>
    <NAV ROLE="navigation" ARIA-LABEL="School Navigation">
      <UL>
        <LI><A HREF="/dashboard" ARIA-CURRENT="page">Dashboard</A></LI>
        <LI><A HREF="/students">Students</A></LI>
        <LI><A HREF="/teachers">Teachers</A></LI>
        <LI><A HREF="/timetable">Timetable</A></LI>
        <LI><A HREF="/results">Results</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="results-heading">
      <H2 ID="results-heading">Student Results</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Roll No</TH>
            <TH SCOPE="col">Student Name</TH>
            <TH SCOPE="col">Class</TH>
            <TH SCOPE="col">Marks</TH>
            <TH SCOPE="col">Grade</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>101</TD>
            <TD>Ahmed Raza</TD>
            <TD>10-A</TD>
            <TD>485/500</TD>
            <TD>A+</TD>
          </TR>
          <TR>
            <TD>Sara Malik</TD>
            <TD>10-A</TD>
            <TD>460/500</TD>
            <TD>A</TD>
          </TR>
          <TR>
            <TD>103</TD>
            <TD>Bilal Khan</TD>
            <TD>10-B</TD>
            <TD>390/500</TD>
            <TD>B+</TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Add New Student</H2>
      <FORM ACTION="/add-student" METHOD="post">
        <LABEL FOR="sname">Student Name:</LABEL>
        <INPUT TYPE="text" ID="sname" NAME="student_name" REQUIRED>
        <LABEL FOR="sclass">Class:</LABEL>
        <SELECT ID="sclass" NAME="class">
          <OPTION VALUE="9a">Class 9-A</OPTION>
          <OPTION VALUE="9b">Class 9-B</OPTION>
          <OPTION VALUE="10a">Class 10-A</OPTION>
          <OPTION VALUE="10b">Class 10-B</OPTION>
        </SELECT>
        <LABEL FOR="semail">Parent Email:</LABEL>
        <INPUT TYPE="email" ID="semail" NAME="parent_email" REQUIRED>
        <LABEL FOR="sphone">Parent Phone:</LABEL>
        <INPUT TYPE="tel" ID="sphone" NAME="parent_phone" REQUIRED>
        <LABEL FOR="notes">Additional Notes:</LABEL>
        <TEXTAREA ID="notes" NAME="notes" ROWS="4" COLS="40"></TEXTAREA>
        <BUTTON TYPE="submit" ARIA-LABEL="Add student to system">Add Student</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 EduPortal. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega school portal hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON, FOOTER, SMALL — sab uppercase. ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, ROLE, SCOPE, TYPE, ID, NAME, REQUIRED, ROWS, COLS bhi fix karo. 'Charset', 'titel' bhi. Aur H100 wrong mein row 102 ki pehli TD (roll number) missing hai."
},

/* ── Paragraph Mistakes — Hard HTML Data (H101–H110) ──
   Hard: 45-50 mistakes per code
   'correct' = poora sahi code
   'wrong'   = galat version (uppercase tags/attributes, 'titel', 'Charset')
*/

// ── H101 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 101</title>
</head>
<body>
  <h1>Airline Booking System</h1>
  <section>
    <h2>Search Flights</h2>
    <form action="/flights" method="post">
      <label for="origin">Origin:</label>
      <input type="text" id="origin" name="origin" required placeholder="From">
      <label for="dest">Destination:</label>
      <input type="text" id="dest" name="dest" required placeholder="To">
      <label for="class">Travel Class:</label>
      <select id="class" name="class">
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first">First Class</option>
      </select>
      <label for="pax">Passengers:</label>
      <input type="number" id="pax" name="pax" min="1" max="9" value="1">
      <button type="submit">Search</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 101</titel>
</head>
<BODY>
  <H1>Airline Booking System</H1>
  <SECTION>
    <H2>Search Flights</H2>
    <FORM ACTION="/flights" METHOD="post">
      <LABEL FOR="origin">Origin:</LABEL>
      <INPUT TYPE="text" ID="origin" NAME="origin" REQUIRED PLACEHOLDER="From">
      <LABEL FOR="dest">Destination:</LABEL>
      <INPUT TYPE="text" ID="dest" NAME="dest" REQUIRED PLACEHOLDER="To">
      <LABEL FOR="class">Travel Class:</LABEL>
      <SELECT ID="class" NAME="class">
        <OPTION VALUE="economy">Economy</OPTION>
        <OPTION VALUE="business">Business</OPTION>
        <OPTION VALUE="first">First Class</OPTION>
      </SELECT>
      <LABEL FOR="pax">Passengers:</LABEL>
      <INPUT TYPE="number" ID="pax" NAME="pax" MIN="1" MAX="9" VALUE="1">
      <BUTTON TYPE="submit">Search</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase hain. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, MIN, MAX, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H102 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 102</title>
</head>
<body>
  <h1>Movie Review Blog</h1>
  <article>
    <h2>Inception — A Mind-Bending Masterpiece</h2>
    <p>Reviewed by <strong>Ahmed Ali</strong> on <time datetime="2024-05-20">May 20, 2024</time></p>
    <figure>
      <img src="inception.jpg" alt="Inception Poster" width="400" height="600">
      <figcaption>Inception (2010) — Directed by Christopher Nolan</figcaption>
    </figure>
    <p>Inception explores the world of dreams within dreams.</p>
    <blockquote cite="https://imdb.com">
      <p>Your mind is the scene of the crime.</p>
    </blockquote>
    <h3>Pros</h3>
    <ul>
      <li>Stunning visuals</li>
      <li>Clever plot</li>
      <li>Great soundtrack</li>
    </ul>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 102</titel>
</head>
<BODY>
  <H1>Movie Review Blog</H1>
  <ARTICLE>
    <H2>Inception — A Mind-Bending Masterpiece</H2>
    <P>Reviewed by <STRONG>Ahmed Ali</STRONG> on <TIME DATETIME="2024-05-20">May 20, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="inception.jpg" ALT="Inception Poster" WIDTH="400" HEIGHT="600">
      <FIGCAPTION>Inception (2010) — Directed by Christopher Nolan</FIGCAPTION>
    </FIGURE>
    <P>Inception explores the world of dreams within dreams.</P>
    <BLOCKQUOTE CITE="https://imdb.com">
      <P>Your mind is the scene of the crime.</P>
    </BLOCKQUOTE>
    <H3>Pros</H3>
    <UL>
      <LI>Stunning visuals</LI>
      <LI>Clever plot</LI>
      <LI>Great soundtrack</LI>
    </UL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, UL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H103 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 103</title>
</head>
<body>
  <h1>Inventory Management</h1>
  <section>
    <h2>Stock Report</h2>
    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>P-001</td>
          <td>Laptop</td>
          <td>25</td>
          <td>Rs. 95,000</td>
        </tr>
        <tr>
          <td>P-002</td>
          <td>Mouse</td>
          <td>150</td>
          <td>Rs. 800</td>
        </tr>
        <tr>
          <td>P-003</td>
          <td>Keyboard</td>
          <td>80</td>
          <td>Rs. 1,500</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 103</titel>
</head>
<BODY>
  <H1>Inventory Management</H1>
  <SECTION>
    <H2>Stock Report</H2>
    <TABLE BORDER="1" CELLPADDING="6" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Product ID</TH>
          <TH SCOPE="col">Name</TH>
          <TH SCOPE="col">Quantity</TH>
          <TH SCOPE="col">Price</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>P-001</TD>
          <TD>Laptop</TD>
          <TD>25</TD>
          <TD>Rs. 95,000</TD>
        </TR>
        <TR>
          <TD>P-002</TD>
          <TD>Mouse</TD>
          <TD>150</TD>
          <TD>Rs. 800</TD>
        </TR>
        <TR>
          <TD>P-003</TD>
          <TD>Keyboard</TD>
          <TD>80</TD>
          <TD>Rs. 1,500</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H104 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 104</title>
</head>
<body>
  <h1>Feedback Form</h1>
  <section>
    <h2>Share Your Experience</h2>
    <form action="/feedback" method="post">
      <label for="fbname">Name:</label>
      <input type="text" id="fbname" name="name" required>
      <label for="fbrating">Rating:</label>
      <select id="fbrating" name="rating">
        <option value="5">Excellent</option>
        <option value="4">Good</option>
        <option value="3">Average</option>
        <option value="2">Poor</option>
        <option value="1">Very Poor</option>
      </select>
      <label for="fbtext">Comments:</label>
      <textarea id="fbtext" name="comments" rows="5" cols="40" placeholder="Tell us more..."></textarea>
      <label><input type="checkbox" name="contact"> Contact me back</label>
      <button type="submit">Submit Feedback</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 104</titel>
</head>
<BODY>
  <H1>Feedback Form</H1>
  <SECTION>
    <H2>Share Your Experience</H2>
    <FORM ACTION="/feedback" METHOD="post">
      <LABEL FOR="fbname">Name:</LABEL>
      <INPUT TYPE="text" ID="fbname" NAME="name" REQUIRED>
      <LABEL FOR="fbrating">Rating:</LABEL>
      <SELECT ID="fbrating" NAME="rating">
        <OPTION VALUE="5">Excellent</OPTION>
        <OPTION VALUE="4">Good</OPTION>
        <OPTION VALUE="3">Average</OPTION>
        <OPTION VALUE="2">Poor</OPTION>
        <OPTION VALUE="1">Very Poor</OPTION>
      </SELECT>
      <LABEL FOR="fbtext">Comments:</LABEL>
      <TEXTAREA ID="fbtext" NAME="comments" ROWS="5" COLS="40" PLACEHOLDER="Tell us more..."></TEXTAREA>
      <LABEL><INPUT TYPE="checkbox" NAME="contact"> Contact me back</LABEL>
      <BUTTON TYPE="submit">Submit Feedback</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON sab uppercase. TYPE, ID, NAME, REQUIRED, ROWS, COLS, PLACEHOLDER, VALUE bhi. 'Charset', 'titel' fix karo."
},

// ── H105 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 105</title>
  <link rel="stylesheet" href="cafe.css">
</head>
<body>
  <header>
    <h1>Corner Cafe</h1>
    <nav>
      <ul>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/location">Location</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Today's Specials</h2>
      <article class="dish">
        <img src="latte.jpg" alt="Caramel Latte" width="200" height="200">
        <h3>Caramel Latte</h3>
        <p>Rs. 450</p>
      </article>
      <article class="dish">
        <img src="sandwich.jpg" alt="Club Sandwich" width="200" height="200">
        <h3>Club Sandwich</h3>
        <p>Rs. 650</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Corner Cafe</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 105</titel>
  <LINK REL="stylesheet" HREF="cafe.css">
</head>
<BODY>
  <HEADER>
    <H1>Corner Cafe</H1>
    <NAV>
      <UL>
        <LI><A HREF="/menu">Menu</A></LI>
        <LI><A HREF="/about">About</A></LI>
        <LI><A HREF="/location">Location</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Today's Specials</H2>
      <ARTICLE CLASS="dish">
        <IMG SRC="latte.jpg" ALT="Caramel Latte" WIDTH="200" HEIGHT="200">
        <H3>Caramel Latte</H3>
        <P>Rs. 450</P>
      </ARTICLE>
      <ARTICLE CLASS="dish">
        <IMG SRC="sandwich.jpg" ALT="Club Sandwich" WIDTH="200" HEIGHT="200">
        <H3>Club Sandwich</H3>
        <P>Rs. 650</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Corner Cafe</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H106 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 106</title>
</head>
<body>
  <h1>Photo Gallery</h1>
  <section>
    <h2>Nature Collection</h2>
    <div class="gallery">
      <figure>
        <img src="mountain.jpg" alt="Mountain" width="300" height="200" loading="lazy">
        <figcaption>Snowy Mountain</figcaption>
      </figure>
      <figure>
        <img src="lake.jpg" alt="Lake" width="300" height="200" loading="lazy">
        <figcaption>Calm Lake</figcaption>
      </figure>
      <figure>
        <img src="forest.jpg" alt="Forest" width="300" height="200" loading="lazy">
        <figcaption>Green Forest</figcaption>
      </figure>
      <figure>
        <img src="desert.jpg" alt="Desert" width="300" height="200" loading="lazy">
        <figcaption>Golden Desert</figcaption>
      </figure>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 106</titel>
</head>
<BODY>
  <H1>Photo Gallery</H1>
  <SECTION>
    <H2>Nature Collection</H2>
    <DIV CLASS="gallery">
      <FIGURE>
        <IMG SRC="mountain.jpg" ALT="Mountain" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Snowy Mountain</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="lake.jpg" ALT="Lake" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Calm Lake</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="forest.jpg" ALT="Forest" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Green Forest</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="desert.jpg" ALT="Desert" WIDTH="300" HEIGHT="200" LOADING="lazy">
        <FIGCAPTION>Golden Desert</FIGCAPTION>
      </FIGURE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, FIGURE, FIGCAPTION, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT, LOADING attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H107 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 107</title>
</head>
<body>
  <h1>Survey Form</h1>
  <form action="/survey" method="post">
    <fieldset>
      <legend>How often do you exercise?</legend>
      <label><input type="radio" name="exercise" value="daily"> Daily</label>
      <label><input type="radio" name="exercise" value="weekly"> Weekly</label>
      <label><input type="radio" name="exercise" value="rarely"> Rarely</label>
    </fieldset>
    <fieldset>
      <legend>Which activities do you enjoy?</legend>
      <label><input type="checkbox" name="act" value="running"> Running</label>
      <label><input type="checkbox" name="act" value="swimming"> Swimming</label>
      <label><input type="checkbox" name="act" value="cycling"> Cycling</label>
    </fieldset>
    <button type="submit">Submit Survey</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 107</titel>
</head>
<BODY>
  <H1>Survey Form</H1>
  <FORM ACTION="/survey" METHOD="post">
    <FIELDSET>
      <LEGEND>How often do you exercise?</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="exercise" VALUE="daily"> Daily</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="exercise" VALUE="weekly"> Weekly</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="exercise" VALUE="rarely"> Rarely</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Which activities do you enjoy?</LEGEND>
      <LABEL><INPUT TYPE="checkbox" NAME="act" VALUE="running"> Running</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="act" VALUE="swimming"> Swimming</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="act" VALUE="cycling"> Cycling</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Submit Survey</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H108 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 108</title>
</head>
<body>
  <h1>Weather App</h1>
  <section>
    <h2>5-Day Forecast</h2>
    <div class="forecast">
      <article class="day">
        <h3>Monday</h3>
        <img src="sunny.png" alt="Sunny" width="60" height="60">
        <p>32°C</p>
      </article>
      <article class="day">
        <h3>Tuesday</h3>
        <img src="cloudy.png" alt="Cloudy" width="60" height="60">
        <p>28°C</p>
      </article>
      <article class="day">
        <h3>Wednesday</h3>
        <img src="rainy.png" alt="Rainy" width="60" height="60">
        <p>24°C</p>
      </article>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 108</titel>
</head>
<BODY>
  <H1>Weather App</H1>
  <SECTION>
    <H2>5-Day Forecast</H2>
    <DIV CLASS="forecast">
      <ARTICLE CLASS="day">
        <H3>Monday</H3>
        <IMG SRC="sunny.png" ALT="Sunny" WIDTH="60" HEIGHT="60">
        <P>32°C</P>
      </ARTICLE>
      <ARTICLE CLASS="day">
        <H3>Tuesday</H3>
        <IMG SRC="cloudy.png" ALT="Cloudy" WIDTH="60" HEIGHT="60">
        <P>28°C</P>
      </ARTICLE>
      <ARTICLE CLASS="day">
        <H3>Wednesday</H3>
        <IMG SRC="rainy.png" ALT="Rainy" WIDTH="60" HEIGHT="60">
        <P>24°C</P>
      </ARTICLE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, ARTICLE, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H109 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 109</title>
</head>
<body>
  <h1>FAQ Page</h1>
  <section>
    <h2>Frequently Asked Questions</h2>
    <details open>
      <summary>How do I reset my password?</summary>
      <p>Click on "Forgot Password" on the login page.</p>
    </details>
    <details>
      <summary>How do I contact support?</summary>
      <p>Email us at support@example.com anytime.</p>
    </details>
    <details>
      <summary>Can I change my plan later?</summary>
      <p>Yes, you can upgrade or downgrade anytime.</p>
    </details>
    <details>
      <summary>Is my data secure?</summary>
      <p>Yes, we use end-to-end encryption.</p>
    </details>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 109</titel>
</head>
<BODY>
  <H1>FAQ Page</H1>
  <SECTION>
    <H2>Frequently Asked Questions</H2>
    <DETAILS OPEN>
      <SUMMARY>How do I reset my password?</SUMMARY>
      <P>Click on "Forgot Password" on the login page.</P>
    </DETAILS>
    <DETAILS>
      <SUMMARY>How do I contact support?</SUMMARY>
      <P>Email us at support@example.com anytime.</P>
    </DETAILS>
    <DETAILS>
      <SUMMARY>Can I change my plan later?</SUMMARY>
      <P>Yes, you can upgrade or downgrade anytime.</P>
    </DETAILS>
    <DETAILS>
      <SUMMARY>Is my data secure?</SUMMARY>
      <P>Yes, we use end-to-end encryption.</P>
    </DETAILS>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DETAILS, SUMMARY, SECTION sab uppercase. OPEN attribute bhi. P aur H2, H1 bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H110 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete charity donation portal">
  <title>Hard Page 110</title>
  <link rel="stylesheet" href="charity.css">
  <script src="charity.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>HelpHands Charity</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/causes">Causes</a></li>
        <li><a href="/donate">Donate</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="donate-heading">
      <h2 id="donate-heading">Make a Donation</h2>
      <form action="/donate" method="post">
        <label for="dname">Your Name:</label>
        <input type="text" id="dname" name="donor_name" required>
        <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount" min="100" required>
        <label for="cause">Cause:</label>
        <select id="cause" name="cause">
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="food">Food</option>
        </select>
        <button type="submit" aria-label="Submit donation">Donate Now</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 HelpHands. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete charity donation portal">
  <titel>Hard Page 110</titel>
  <LINK REL="stylesheet" HREF="charity.css">
  <SCRIPT SRC="charity.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>HelpHands Charity</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/causes">Causes</A></LI>
        <LI><A HREF="/donate">Donate</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="donate-heading">
      <H2 ID="donate-heading">Make a Donation</H2>
      <FORM ACTION="/donate" METHOD="post">
        <LABEL FOR="dname">Your Name:</LABEL>
        <INPUT TYPE="text" ID="dname" NAME="donor_name" REQUIRED>
        <LABEL FOR="amount">Amount:</LABEL>
        <INPUT TYPE="number" ID="amount" NAME="amount" MIN="100" REQUIRED>
        <LABEL FOR="cause">Cause:</LABEL>
        <SELECT ID="cause" NAME="cause">
          <OPTION VALUE="education">Education</OPTION>
          <OPTION VALUE="health">Health</OPTION>
          <OPTION VALUE="food">Food</OPTION>
        </SELECT>
        <BUTTON TYPE="submit" ARIA-LABEL="Submit donation">Donate Now</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 HelpHands. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, NAME, CONTENT, REL, HREF, DEFER, SRC bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H111–H120) ──
   Hard: 45-50 mistakes per code
*/

// ── H111 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 111</title>
</head>
<body>
  <h1>Car Rental Service</h1>
  <section>
    <h2>Book a Car</h2>
    <form action="/rent" method="post">
      <label for="pickup">Pickup Location:</label>
      <input type="text" id="pickup" name="pickup" required placeholder="City">
      <label for="cartype">Car Type:</label>
      <select id="cartype" name="cartype">
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="van">Van</option>
      </select>
      <label for="days">Number of Days:</label>
      <input type="number" id="days" name="days" min="1" max="30" value="1">
      <button type="submit">Book Now</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 111</titel>
</head>
<BODY>
  <H1>Car Rental Service</H1>
  <SECTION>
    <H2>Book a Car</H2>
    <FORM ACTION="/rent" METHOD="post">
      <LABEL FOR="pickup">Pickup Location:</LABEL>
      <INPUT TYPE="text" ID="pickup" NAME="pickup" REQUIRED PLACEHOLDER="City">
      <LABEL FOR="cartype">Car Type:</LABEL>
      <SELECT ID="cartype" NAME="cartype">
        <OPTION VALUE="sedan">Sedan</OPTION>
        <OPTION VALUE="suv">SUV</OPTION>
        <OPTION VALUE="van">Van</OPTION>
      </SELECT>
      <LABEL FOR="days">Number of Days:</LABEL>
      <INPUT TYPE="number" ID="days" NAME="days" MIN="1" MAX="30" VALUE="1">
      <BUTTON TYPE="submit">Book Now</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, MIN, MAX, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H112 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 112</title>
</head>
<body>
  <h1>Book Club Blog</h1>
  <article>
    <h2>This Month's Pick: Atomic Habits</h2>
    <p>Posted by <strong>Sara Khan</strong> on <time datetime="2024-07-01">July 1, 2024</time></p>
    <figure>
      <img src="atomic-habits.jpg" alt="Atomic Habits Book" width="300" height="450">
      <figcaption>Atomic Habits by James Clear</figcaption>
    </figure>
    <p>A practical guide to building good habits and breaking bad ones.</p>
    <blockquote cite="https://jamesclear.com">
      <p>You do not rise to the level of your goals. You fall to the level of your systems.</p>
    </blockquote>
    <h3>Discussion Points</h3>
    <ol>
      <li>What habit do you want to build?</li>
      <li>Which chapter resonated most?</li>
      <li>How will you apply the 1% rule?</li>
    </ol>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 112</titel>
</head>
<BODY>
  <H1>Book Club Blog</H1>
  <ARTICLE>
    <H2>This Month's Pick: Atomic Habits</H2>
    <P>Posted by <STRONG>Sara Khan</STRONG> on <TIME DATETIME="2024-07-01">July 1, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="atomic-habits.jpg" ALT="Atomic Habits Book" WIDTH="300" HEIGHT="450">
      <FIGCAPTION>Atomic Habits by James Clear</FIGCAPTION>
    </FIGURE>
    <P>A practical guide to building good habits and breaking bad ones.</P>
    <BLOCKQUOTE CITE="https://jamesclear.com">
      <P>You do not rise to the level of your goals. You fall to the level of your systems.</P>
    </BLOCKQUOTE>
    <H3>Discussion Points</H3>
    <OL>
      <LI>What habit do you want to build?</LI>
      <LI>Which chapter resonated most?</LI>
      <LI>How will you apply the 1% rule?</LI>
    </OL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, OL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H113 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 113</title>
</head>
<body>
  <h1>Employee Directory</h1>
  <section>
    <h2>Staff List</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>E-01</td>
          <td>Ali Raza</td>
          <td>Engineering</td>
          <td>ali@company.com</td>
        </tr>
        <tr>
          <td>E-02</td>
          <td>Fatima Noor</td>
          <td>Marketing</td>
          <td>fatima@company.com</td>
        </tr>
        <tr>
          <td>E-03</td>
          <td>Usman Tariq</td>
          <td>Finance</td>
          <td>usman@company.com</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 113</titel>
</head>
<BODY>
  <H1>Employee Directory</H1>
  <SECTION>
    <H2>Staff List</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">ID</TH>
          <TH SCOPE="col">Name</TH>
          <TH SCOPE="col">Department</TH>
          <TH SCOPE="col">Email</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>E-01</TD>
          <TD>Ali Raza</TD>
          <TD>Engineering</TD>
          <TD>ali@company.com</TD>
        </TR>
        <TR>
          <TD>E-02</TD>
          <TD>Fatima Noor</TD>
          <TD>Marketing</TD>
          <TD>fatima@company.com</TD>
        </TR>
        <TR>
          <TD>E-03</TD>
          <TD>Usman Tariq</TD>
          <TD>Finance</TD>
          <TD>usman@company.com</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H114 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 114</title>
</head>
<body>
  <h1>Newsletter Signup</h1>
  <section>
    <h2>Stay Updated</h2>
    <form action="/subscribe" method="post">
      <label for="subname">Name:</label>
      <input type="text" id="subname" name="name" required>
      <label for="subemail">Email:</label>
      <input type="email" id="subemail" name="email" required placeholder="you@example.com">
      <label for="freq">Frequency:</label>
      <select id="freq" name="frequency">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <label><input type="checkbox" name="terms" required> I accept the terms</label>
      <button type="submit">Subscribe</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 114</titel>
</head>
<BODY>
  <H1>Newsletter Signup</H1>
  <SECTION>
    <H2>Stay Updated</H2>
    <FORM ACTION="/subscribe" METHOD="post">
      <LABEL FOR="subname">Name:</LABEL>
      <INPUT TYPE="text" ID="subname" NAME="name" REQUIRED>
      <LABEL FOR="subemail">Email:</LABEL>
      <INPUT TYPE="email" ID="subemail" NAME="email" REQUIRED PLACEHOLDER="you@example.com">
      <LABEL FOR="freq">Frequency:</LABEL>
      <SELECT ID="freq" NAME="frequency">
        <OPTION VALUE="daily">Daily</OPTION>
        <OPTION VALUE="weekly">Weekly</OPTION>
        <OPTION VALUE="monthly">Monthly</OPTION>
      </SELECT>
      <LABEL><INPUT TYPE="checkbox" NAME="terms" REQUIRED> I accept the terms</LABEL>
      <BUTTON TYPE="submit">Subscribe</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H115 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 115</title>
  <link rel="stylesheet" href="agency.css">
</head>
<body>
  <header>
    <h1>Creative Agency</h1>
    <nav>
      <ul>
        <li><a href="/work">Our Work</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Our Services</h2>
      <article class="service">
        <img src="branding.jpg" alt="Branding" width="250" height="180">
        <h3>Branding</h3>
        <p>Build a memorable brand identity.</p>
      </article>
      <article class="service">
        <img src="web.jpg" alt="Web Design" width="250" height="180">
        <h3>Web Design</h3>
        <p>Modern, responsive websites.</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Creative Agency</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 115</titel>
  <LINK REL="stylesheet" HREF="agency.css">
</head>
<BODY>
  <HEADER>
    <H1>Creative Agency</H1>
    <NAV>
      <UL>
        <LI><A HREF="/work">Our Work</A></LI>
        <LI><A HREF="/team">Team</A></LI>
        <LI><A HREF="/contact">Contact</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Our Services</H2>
      <ARTICLE CLASS="service">
        <IMG SRC="branding.jpg" ALT="Branding" WIDTH="250" HEIGHT="180">
        <H3>Branding</H3>
        <P>Build a memorable brand identity.</P>
      </ARTICLE>
      <ARTICLE CLASS="service">
        <IMG SRC="web.jpg" ALT="Web Design" WIDTH="250" HEIGHT="180">
        <H3>Web Design</H3>
        <P>Modern, responsive websites.</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Creative Agency</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H116 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 116</title>
</head>
<body>
  <h1>Online Library</h1>
  <section>
    <h2>Borrowed Books</h2>
    <div class="book-list">
      <article class="book">
        <img src="book1.jpg" alt="Clean Code" width="120" height="180">
        <h3>Clean Code</h3>
        <p>Due: <time datetime="2024-08-15">Aug 15, 2024</time></p>
      </article>
      <article class="book">
        <img src="book2.jpg" alt="The Pragmatic Programmer" width="120" height="180">
        <h3>The Pragmatic Programmer</h3>
        <p>Due: <time datetime="2024-08-20">Aug 20, 2024</time></p>
      </article>
      <article class="book">
        <img src="book3.jpg" alt="Refactoring" width="120" height="180">
        <h3>Refactoring</h3>
        <p>Due: <time datetime="2024-08-25">Aug 25, 2024</time></p>
      </article>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 116</titel>
</head>
<BODY>
  <H1>Online Library</H1>
  <SECTION>
    <H2>Borrowed Books</H2>
    <DIV CLASS="book-list">
      <ARTICLE CLASS="book">
        <IMG SRC="book1.jpg" ALT="Clean Code" WIDTH="120" HEIGHT="180">
        <H3>Clean Code</H3>
        <P>Due: <TIME DATETIME="2024-08-15">Aug 15, 2024</TIME></P>
      </ARTICLE>
      <ARTICLE CLASS="book">
        <IMG SRC="book2.jpg" ALT="The Pragmatic Programmer" WIDTH="120" HEIGHT="180">
        <H3>The Pragmatic Programmer</H3>
        <P>Due: <TIME DATETIME="2024-08-20">Aug 20, 2024</TIME></P>
      </ARTICLE>
      <ARTICLE CLASS="book">
        <IMG SRC="book3.jpg" ALT="Refactoring" WIDTH="120" HEIGHT="180">
        <H3>Refactoring</H3>
        <P>Due: <TIME DATETIME="2024-08-25">Aug 25, 2024</TIME></P>
      </ARTICLE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "DIV, ARTICLE, IMG, TIME, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT, DATETIME attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H117 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 117</title>
</head>
<body>
  <h1>Contact Us</h1>
  <section>
    <h2>Send a Message</h2>
    <form action="/contact" method="post">
      <label for="cname">Full Name:</label>
      <input type="text" id="cname" name="name" required>
      <label for="cemail">Email:</label>
      <input type="email" id="cemail" name="email" required>
      <label for="csubject">Subject:</label>
      <input type="text" id="csubject" name="subject">
      <label for="cmsg">Message:</label>
      <textarea id="cmsg" name="message" rows="6" cols="45" required></textarea>
      <button type="submit">Send Message</button>
      <button type="reset">Clear</button>
    </form>
  </section>
  <address>
    Office: 22 Mall Road, Lahore | Phone: <a href="tel:042111222">042-111-222</a>
  </address>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 117</titel>
</head>
<BODY>
  <H1>Contact Us</H1>
  <SECTION>
    <H2>Send a Message</H2>
    <FORM ACTION="/contact" METHOD="post">
      <LABEL FOR="cname">Full Name:</LABEL>
      <INPUT TYPE="text" ID="cname" NAME="name" REQUIRED>
      <LABEL FOR="cemail">Email:</LABEL>
      <INPUT TYPE="email" ID="cemail" NAME="email" REQUIRED>
      <LABEL FOR="csubject">Subject:</LABEL>
      <INPUT TYPE="text" ID="csubject" NAME="subject">
      <LABEL FOR="cmsg">Message:</LABEL>
      <TEXTAREA ID="cmsg" NAME="message" ROWS="6" COLS="45" REQUIRED></TEXTAREA>
      <BUTTON TYPE="submit">Send Message</BUTTON>
      <BUTTON TYPE="reset">Clear</BUTTON>
    </FORM>
  </SECTION>
  <ADDRESS>
    Office: 22 Mall Road, Lahore | Phone: <A HREF="tel:042111222">042-111-222</A>
  </ADDRESS>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, TEXTAREA, BUTTON, SECTION, ADDRESS, A sab uppercase. TYPE, ID, NAME, REQUIRED, ROWS, COLS, HREF bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H118 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 118</title>
</head>
<body>
  <h1>Podcast Episode</h1>
  <article>
    <h2>Episode 12: The Future of AI</h2>
    <p>Hosted by <strong>Hamza Ali</strong></p>
    <audio controls>
      <source src="episode12.mp3" type="audio/mpeg">
      <source src="episode12.ogg" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>
    <section>
      <h3>Show Notes</h3>
      <ul>
        <li>00:00 — Introduction</li>
        <li>05:30 — Guest interview</li>
        <li>25:00 — Audience questions</li>
        <li>40:00 — Closing thoughts</li>
      </ul>
    </section>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 118</titel>
</head>
<BODY>
  <H1>Podcast Episode</H1>
  <ARTICLE>
    <H2>Episode 12: The Future of AI</H2>
    <P>Hosted by <STRONG>Hamza Ali</STRONG></P>
    <AUDIO CONTROLS>
      <SOURCE SRC="episode12.mp3" TYPE="audio/mpeg">
      <SOURCE SRC="episode12.ogg" TYPE="audio/ogg">
      Your browser does not support the audio element.
    </AUDIO>
    <SECTION>
      <H3>Show Notes</H3>
      <UL>
        <LI>00:00 — Introduction</LI>
        <LI>05:30 — Guest interview</LI>
        <LI>25:00 — Audience questions</LI>
        <LI>40:00 — Closing thoughts</LI>
      </UL>
    </SECTION>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, AUDIO, SOURCE, SECTION, UL, LI sab uppercase. CONTROLS, SRC, TYPE attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H119 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 119</title>
</head>
<body>
  <h1>Project Dashboard</h1>
  <section>
    <h2>Task Progress</h2>
    <div class="task">
      <span>Design Phase:</span>
      <progress value="100" max="100"></progress>
      <span>100%</span>
    </div>
    <div class="task">
      <span>Development:</span>
      <progress value="65" max="100"></progress>
      <span>65%</span>
    </div>
    <div class="task">
      <span>Testing:</span>
      <progress value="30" max="100"></progress>
      <span>30%</span>
    </div>
    <div class="task">
      <span>Deployment:</span>
      <meter value="0.1" min="0" max="1">10%</meter>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 119</titel>
</head>
<BODY>
  <H1>Project Dashboard</H1>
  <SECTION>
    <H2>Task Progress</H2>
    <DIV CLASS="task">
      <SPAN>Design Phase:</SPAN>
      <PROGRESS VALUE="100" MAX="100"></PROGRESS>
      <SPAN>100%</SPAN>
    </DIV>
    <DIV CLASS="task">
      <SPAN>Development:</SPAN>
      <PROGRESS VALUE="65" MAX="100"></PROGRESS>
      <SPAN>65%</SPAN>
    </DIV>
    <DIV CLASS="task">
      <SPAN>Testing:</SPAN>
      <PROGRESS VALUE="30" MAX="100"></PROGRESS>
      <SPAN>30%</SPAN>
    </DIV>
    <DIV CLASS="task">
      <SPAN>Deployment:</SPAN>
      <METER VALUE="0.1" MIN="0" MAX="1">10%</METER>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, SPAN, PROGRESS, METER, SECTION sab uppercase. CLASS, VALUE, MAX, MIN attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H120 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete event ticketing portal">
  <title>Hard Page 120</title>
  <link rel="stylesheet" href="tickets.css">
  <script src="tickets.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>EventHub Ticketing</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/concerts">Concerts</a></li>
        <li><a href="/sports">Sports</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="book-heading">
      <h2 id="book-heading">Book Tickets</h2>
      <form action="/book-tickets" method="post">
        <label for="ev">Select Event:</label>
        <select id="ev" name="event">
          <option value="concert">Music Concert</option>
          <option value="match">Cricket Match</option>
          <option value="theatre">Theatre Show</option>
        </select>
        <label for="qty">Tickets:</label>
        <input type="number" id="qty" name="qty" min="1" max="10" value="1">
        <button type="submit" aria-label="Book tickets now">Book Now</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 EventHub. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete event ticketing portal">
  <titel>Hard Page 120</titel>
  <LINK REL="stylesheet" HREF="tickets.css">
  <SCRIPT SRC="tickets.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>EventHub Ticketing</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/concerts">Concerts</A></LI>
        <LI><A HREF="/sports">Sports</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="book-heading">
      <H2 ID="book-heading">Book Tickets</H2>
      <FORM ACTION="/book-tickets" METHOD="post">
        <LABEL FOR="ev">Select Event:</LABEL>
        <SELECT ID="ev" NAME="event">
          <OPTION VALUE="concert">Music Concert</OPTION>
          <OPTION VALUE="match">Cricket Match</OPTION>
          <OPTION VALUE="theatre">Theatre Show</OPTION>
        </SELECT>
        <LABEL FOR="qty">Tickets:</LABEL>
        <INPUT TYPE="number" ID="qty" NAME="qty" MIN="1" MAX="10" VALUE="1">
        <BUTTON TYPE="submit" ARIA-LABEL="Book tickets now">Book Now</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 EventHub. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, FORM, LABEL, SELECT, OPTION, INPUT, BUTTON, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, NAME, CONTENT, REL, HREF, DEFER, SRC, MIN, MAX, VALUE bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H121–H130) ──
   Hard: 45-50 mistakes per code
*/

// ── H121 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 121</title>
</head>
<body>
  <h1>Pizza Ordering App</h1>
  <section>
    <h2>Build Your Pizza</h2>
    <form action="/order-pizza" method="post">
      <label for="size">Size:</label>
      <select id="size" name="size">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <label for="crust">Crust:</label>
      <select id="crust" name="crust">
        <option value="thin">Thin</option>
        <option value="thick">Thick</option>
        <option value="stuffed">Stuffed</option>
      </select>
      <label>Toppings:</label>
      <label><input type="checkbox" name="top" value="cheese"> Extra Cheese</label>
      <label><input type="checkbox" name="top" value="olives"> Olives</label>
      <label><input type="checkbox" name="top" value="mushroom"> Mushrooms</label>
      <button type="submit">Order Now</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 121</titel>
</head>
<BODY>
  <H1>Pizza Ordering App</H1>
  <SECTION>
    <H2>Build Your Pizza</H2>
    <FORM ACTION="/order-pizza" METHOD="post">
      <LABEL FOR="size">Size:</LABEL>
      <SELECT ID="size" NAME="size">
        <OPTION VALUE="small">Small</OPTION>
        <OPTION VALUE="medium">Medium</OPTION>
        <OPTION VALUE="large">Large</OPTION>
      </SELECT>
      <LABEL FOR="crust">Crust:</LABEL>
      <SELECT ID="crust" NAME="crust">
        <OPTION VALUE="thin">Thin</OPTION>
        <OPTION VALUE="thick">Thick</OPTION>
        <OPTION VALUE="stuffed">Stuffed</OPTION>
      </SELECT>
      <LABEL>Toppings:</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="top" VALUE="cheese"> Extra Cheese</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="top" VALUE="olives"> Olives</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="top" VALUE="mushroom"> Mushrooms</LABEL>
      <BUTTON TYPE="submit">Order Now</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, SELECT, OPTION, INPUT, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, VALUE, ACTION, METHOD bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H122 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 122</title>
</head>
<body>
  <h1>Travel Diary</h1>
  <article>
    <h2>My Trip to Hunza Valley</h2>
    <p>Written by <strong>Ayesha Malik</strong> on <time datetime="2024-06-18">June 18, 2024</time></p>
    <figure>
      <img src="hunza.jpg" alt="Hunza Valley" width="500" height="350">
      <figcaption>The stunning view of Hunza Valley</figcaption>
    </figure>
    <p>Hunza is one of the most beautiful places in northern Pakistan.</p>
    <blockquote cite="https://traveldiary.com">
      <p>The mountains were calling, and I had to go.</p>
    </blockquote>
    <h3>Highlights</h3>
    <ul>
      <li>Attabad Lake boating</li>
      <li>Baltit Fort visit</li>
      <li>Local cherry orchards</li>
    </ul>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 122</titel>
</head>
<BODY>
  <H1>Travel Diary</H1>
  <ARTICLE>
    <H2>My Trip to Hunza Valley</H2>
    <P>Written by <STRONG>Ayesha Malik</STRONG> on <TIME DATETIME="2024-06-18">June 18, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="hunza.jpg" ALT="Hunza Valley" WIDTH="500" HEIGHT="350">
      <FIGCAPTION>The stunning view of Hunza Valley</FIGCAPTION>
    </FIGURE>
    <P>Hunza is one of the most beautiful places in northern Pakistan.</P>
    <BLOCKQUOTE CITE="https://traveldiary.com">
      <P>The mountains were calling, and I had to go.</P>
    </BLOCKQUOTE>
    <H3>Highlights</H3>
    <UL>
      <LI>Attabad Lake boating</LI>
      <LI>Baltit Fort visit</LI>
      <LI>Local cherry orchards</LI>
    </UL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, UL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H123 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 123</title>
</head>
<body>
  <h1>Sales Report</h1>
  <section>
    <h2>Quarterly Sales</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <caption>Sales Data 2024</caption>
      <thead>
        <tr>
          <th scope="col">Quarter</th>
          <th scope="col">Revenue</th>
          <th scope="col">Growth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Q1</td>
          <td>Rs. 1,200,000</td>
          <td>+8%</td>
        </tr>
        <tr>
          <td>Q2</td>
          <td>Rs. 1,450,000</td>
          <td>+12%</td>
        </tr>
        <tr>
          <td>Q3</td>
          <td>Rs. 1,600,000</td>
          <td>+10%</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td colspan="2">Rs. 4,250,000</td>
        </tr>
      </tfoot>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 123</titel>
</head>
<BODY>
  <H1>Sales Report</H1>
  <SECTION>
    <H2>Quarterly Sales</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <CAPTION>Sales Data 2024</CAPTION>
      <THEAD>
        <TR>
          <TH SCOPE="col">Quarter</TH>
          <TH SCOPE="col">Revenue</TH>
          <TH SCOPE="col">Growth</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Q1</TD>
          <TD>Rs. 1,200,000</TD>
          <TD>+8%</TD>
        </TR>
        <TR>
          <TD>Q2</TD>
          <TD>Rs. 1,450,000</TD>
          <TD>+12%</TD>
        </TR>
        <TR>
          <TD>Q3</TD>
          <TD>Rs. 1,600,000</TD>
          <TD>+10%</TD>
        </TR>
      </TBODY>
      <TFOOT>
        <TR>
          <TD>Total</TD>
          <TD COLSPAN="2">Rs. 4,250,000</TD>
        </TR>
      </TFOOT>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "TABLE, CAPTION, THEAD, TBODY, TFOOT, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE, COLSPAN attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H124 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 124</title>
</head>
<body>
  <h1>Login Page</h1>
  <section>
    <h2>Welcome Back</h2>
    <form action="/login" method="post" autocomplete="on">
      <label for="user">Username:</label>
      <input type="text" id="user" name="username" required autocomplete="username">
      <label for="pass">Password:</label>
      <input type="password" id="pass" name="password" required minlength="8" autocomplete="current-password">
      <label><input type="checkbox" name="remember"> Remember me</label>
      <a href="/forgot">Forgot password?</a>
      <button type="submit">Login</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 124</titel>
</head>
<BODY>
  <H1>Login Page</H1>
  <SECTION>
    <H2>Welcome Back</H2>
    <FORM ACTION="/login" METHOD="post" AUTOCOMPLETE="on">
      <LABEL FOR="user">Username:</LABEL>
      <INPUT TYPE="text" ID="user" NAME="username" REQUIRED AUTOCOMPLETE="username">
      <LABEL FOR="pass">Password:</LABEL>
      <INPUT TYPE="password" ID="pass" NAME="password" REQUIRED MINLENGTH="8" AUTOCOMPLETE="current-password">
      <LABEL><INPUT TYPE="checkbox" NAME="remember"> Remember me</LABEL>
      <A HREF="/forgot">Forgot password?</A>
      <BUTTON TYPE="submit">Login</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, LABEL, INPUT, BUTTON, A, SECTION sab uppercase. AUTOCOMPLETE, TYPE, ID, NAME, REQUIRED, MINLENGTH, HREF attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H125 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 125</title>
  <link rel="stylesheet" href="fitness.css">
</head>
<body>
  <header>
    <h1>FitLife Gym</h1>
    <nav>
      <ul>
        <li><a href="/classes">Classes</a></li>
        <li><a href="/trainers">Trainers</a></li>
        <li><a href="/join">Join</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Our Classes</h2>
      <article class="class-card">
        <img src="yoga.jpg" alt="Yoga Class" width="250" height="180">
        <h3>Yoga</h3>
        <p>Improve flexibility and calm your mind.</p>
      </article>
      <article class="class-card">
        <img src="hiit.jpg" alt="HIIT Class" width="250" height="180">
        <h3>HIIT</h3>
        <p>High-intensity interval training.</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 FitLife Gym</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 125</titel>
  <LINK REL="stylesheet" HREF="fitness.css">
</head>
<BODY>
  <HEADER>
    <H1>FitLife Gym</H1>
    <NAV>
      <UL>
        <LI><A HREF="/classes">Classes</A></LI>
        <LI><A HREF="/trainers">Trainers</A></LI>
        <LI><A HREF="/join">Join</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Our Classes</H2>
      <ARTICLE CLASS="class-card">
        <IMG SRC="yoga.jpg" ALT="Yoga Class" WIDTH="250" HEIGHT="180">
        <H3>Yoga</H3>
        <P>Improve flexibility and calm your mind.</P>
      </ARTICLE>
      <ARTICLE CLASS="class-card">
        <IMG SRC="hiit.jpg" ALT="HIIT Class" WIDTH="250" HEIGHT="180">
        <H3>HIIT</H3>
        <P>High-intensity interval training.</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 FitLife Gym</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H126 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 126</title>
</head>
<body>
  <h1>Recipe Collection</h1>
  <section>
    <h2>Quick Breakfast Ideas</h2>
    <div class="recipe-grid">
      <article class="recipe">
        <img src="omelette.jpg" alt="Omelette" width="200" height="150">
        <h3>Cheese Omelette</h3>
        <p>Ready in 10 minutes</p>
      </article>
      <article class="recipe">
        <img src="pancakes.jpg" alt="Pancakes" width="200" height="150">
        <h3>Fluffy Pancakes</h3>
        <p>Ready in 15 minutes</p>
      </article>
      <article class="recipe">
        <img src="smoothie.jpg" alt="Smoothie" width="200" height="150">
        <h3>Berry Smoothie</h3>
        <p>Ready in 5 minutes</p>
      </article>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 126</titel>
</head>
<BODY>
  <H1>Recipe Collection</H1>
  <SECTION>
    <H2>Quick Breakfast Ideas</H2>
    <DIV CLASS="recipe-grid">
      <ARTICLE CLASS="recipe">
        <IMG SRC="omelette.jpg" ALT="Omelette" WIDTH="200" HEIGHT="150">
        <H3>Cheese Omelette</H3>
        <P>Ready in 10 minutes</P>
      </ARTICLE>
      <ARTICLE CLASS="recipe">
        <IMG SRC="pancakes.jpg" ALT="Pancakes" WIDTH="200" HEIGHT="150">
        <H3>Fluffy Pancakes</H3>
        <P>Ready in 15 minutes</P>
      </ARTICLE>
      <ARTICLE CLASS="recipe">
        <IMG SRC="smoothie.jpg" ALT="Smoothie" WIDTH="200" HEIGHT="150">
        <H3>Berry Smoothie</H3>
        <P>Ready in 5 minutes</P>
      </ARTICLE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, ARTICLE, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H127 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 127</title>
</head>
<body>
  <h1>Course Enrollment</h1>
  <form action="/enroll" method="post">
    <fieldset>
      <legend>Choose Your Track</legend>
      <label><input type="radio" name="track" value="frontend"> Frontend Development</label>
      <label><input type="radio" name="track" value="backend"> Backend Development</label>
      <label><input type="radio" name="track" value="fullstack"> Full Stack</label>
    </fieldset>
    <fieldset>
      <legend>Schedule</legend>
      <label><input type="radio" name="time" value="morning"> Morning</label>
      <label><input type="radio" name="time" value="evening"> Evening</label>
      <label><input type="radio" name="time" value="weekend"> Weekend</label>
    </fieldset>
    <button type="submit">Enroll Now</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 127</titel>
</head>
<BODY>
  <H1>Course Enrollment</H1>
  <FORM ACTION="/enroll" METHOD="post">
    <FIELDSET>
      <LEGEND>Choose Your Track</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="track" VALUE="frontend"> Frontend Development</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="track" VALUE="backend"> Backend Development</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="track" VALUE="fullstack"> Full Stack</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Schedule</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="time" VALUE="morning"> Morning</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="time" VALUE="evening"> Evening</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="time" VALUE="weekend"> Weekend</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Enroll Now</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H128 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 128</title>
</head>
<body>
  <h1>Video Course</h1>
  <section>
    <h2>Lesson 5: CSS Grid</h2>
    <video width="640" height="360" controls poster="grid-thumb.jpg">
      <source src="lesson5.mp4" type="video/mp4">
      <source src="lesson5.webm" type="video/webm">
      <track kind="subtitles" src="lesson5-en.vtt" srclang="en" label="English">
      Your browser does not support video.
    </video>
    <h3>Topics Covered</h3>
    <ul>
      <li>Grid container</li>
      <li>Grid template columns</li>
      <li>Grid gaps</li>
      <li>Grid areas</li>
    </ul>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 128</titel>
</head>
<BODY>
  <H1>Video Course</H1>
  <SECTION>
    <H2>Lesson 5: CSS Grid</H2>
    <VIDEO WIDTH="640" HEIGHT="360" CONTROLS POSTER="grid-thumb.jpg">
      <SOURCE SRC="lesson5.mp4" TYPE="video/mp4">
      <SOURCE SRC="lesson5.webm" TYPE="video/webm">
      <TRACK KIND="subtitles" SRC="lesson5-en.vtt" SRCLANG="en" LABEL="English">
      Your browser does not support video.
    </VIDEO>
    <H3>Topics Covered</H3>
    <UL>
      <LI>Grid container</LI>
      <LI>Grid template columns</LI>
      <LI>Grid gaps</LI>
      <LI>Grid areas</LI>
    </UL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "VIDEO, SOURCE, TRACK, SECTION, UL, LI sab uppercase. WIDTH, HEIGHT, CONTROLS, POSTER, SRC, TYPE, KIND, SRCLANG, LABEL attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H129 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 129</title>
</head>
<body>
  <h1>Settings Panel</h1>
  <section>
    <h2>Account Preferences</h2>
    <details open>
      <summary>Notifications</summary>
      <label><input type="checkbox" name="email_notif" checked> Email notifications</label>
      <label><input type="checkbox" name="sms_notif"> SMS notifications</label>
    </details>
    <details>
      <summary>Privacy</summary>
      <label><input type="radio" name="profile" value="public"> Public</label>
      <label><input type="radio" name="profile" value="private"> Private</label>
    </details>
    <details>
      <summary>Theme</summary>
      <select name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </details>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 129</titel>
</head>
<BODY>
  <H1>Settings Panel</H1>
  <SECTION>
    <H2>Account Preferences</H2>
    <DETAILS OPEN>
      <SUMMARY>Notifications</SUMMARY>
      <LABEL><INPUT TYPE="checkbox" NAME="email_notif" CHECKED> Email notifications</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="sms_notif"> SMS notifications</LABEL>
    </DETAILS>
    <DETAILS>
      <SUMMARY>Privacy</SUMMARY>
      <LABEL><INPUT TYPE="radio" NAME="profile" VALUE="public"> Public</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="profile" VALUE="private"> Private</LABEL>
    </DETAILS>
    <DETAILS>
      <SUMMARY>Theme</SUMMARY>
      <SELECT NAME="theme">
        <OPTION VALUE="light">Light</OPTION>
        <OPTION VALUE="dark">Dark</OPTION>
      </SELECT>
    </DETAILS>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "DETAILS, SUMMARY, LABEL, INPUT, SELECT, OPTION, SECTION sab uppercase. OPEN, TYPE, NAME, CHECKED, VALUE attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H130 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete online banking dashboard">
  <title>Hard Page 130</title>
  <link rel="stylesheet" href="bank.css">
  <script src="bank.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>SecureBank Online</h1>
    <nav role="navigation" aria-label="Banking Navigation">
      <ul>
        <li><a href="/dashboard" aria-current="page">Dashboard</a></li>
        <li><a href="/transfer">Transfer</a></li>
        <li><a href="/history">History</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="balance-heading">
      <h2 id="balance-heading">Account Balance</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current</td>
            <td>Rs. 250,000</td>
          </tr>
          <tr>
            <td>Savings</td>
            <td>Rs. 800,000</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Quick Transfer</h2>
      <form action="/transfer" method="post">
        <label for="to">To Account:</label>
        <input type="text" id="to" name="to_account" required>
        <label for="amt">Amount:</label>
        <input type="number" id="amt" name="amount" min="1" required>
        <button type="submit" aria-label="Send transfer">Transfer</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 SecureBank. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete online banking dashboard">
  <titel>Hard Page 130</titel>
  <LINK REL="stylesheet" HREF="bank.css">
  <SCRIPT SRC="bank.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>SecureBank Online</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Banking Navigation">
      <UL>
        <LI><A HREF="/dashboard" ARIA-CURRENT="page">Dashboard</A></LI>
        <LI><A HREF="/transfer">Transfer</A></LI>
        <LI><A HREF="/history">History</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="balance-heading">
      <H2 ID="balance-heading">Account Balance</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Account</TH>
            <TH SCOPE="col">Balance</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Current</TD>
            <TD>Rs. 250,000</TD>
          </TR>
          <TR>
            <TD>Savings</TD>
            <TD>Rs. 800,000</TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Quick Transfer</H2>
      <FORM ACTION="/transfer" METHOD="post">
        <LABEL FOR="to">To Account:</LABEL>
        <INPUT TYPE="text" ID="to" NAME="to_account" REQUIRED>
        <LABEL FOR="amt">Amount:</LABEL>
        <INPUT TYPE="number" ID="amt" NAME="amount" MIN="1" REQUIRED>
        <BUTTON TYPE="submit" ARIA-LABEL="Send transfer">Transfer</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 SecureBank. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, FORM, LABEL, INPUT, BUTTON, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, SCOPE, NAME, CONTENT, REL, HREF, DEFER, SRC, MIN bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H131–H140) ──
   Hard: 45-50 mistakes per code
*/

// ── H131 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 131</title>
</head>
<body>
  <h1>Grocery Delivery</h1>
  <section>
    <h2>Place Your Order</h2>
    <form action="/grocery" method="post">
      <label for="item">Item:</label>
      <input type="text" id="item" name="item" required placeholder="e.g. Milk">
      <label for="category">Category:</label>
      <select id="category" name="category">
        <option value="dairy">Dairy</option>
        <option value="fruits">Fruits</option>
        <option value="bakery">Bakery</option>
      </select>
      <label for="qty">Quantity:</label>
      <input type="number" id="qty" name="qty" min="1" max="20" value="1">
      <button type="submit">Add to Cart</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 131</titel>
</head>
<BODY>
  <H1>Grocery Delivery</H1>
  <SECTION>
    <H2>Place Your Order</H2>
    <FORM ACTION="/grocery" METHOD="post">
      <LABEL FOR="item">Item:</LABEL>
      <INPUT TYPE="text" ID="item" NAME="item" REQUIRED PLACEHOLDER="e.g. Milk">
      <LABEL FOR="category">Category:</LABEL>
      <SELECT ID="category" NAME="category">
        <OPTION VALUE="dairy">Dairy</OPTION>
        <OPTION VALUE="fruits">Fruits</OPTION>
        <OPTION VALUE="bakery">Bakery</OPTION>
      </SELECT>
      <LABEL FOR="qty">Quantity:</LABEL>
      <INPUT TYPE="number" ID="qty" NAME="qty" MIN="1" MAX="20" VALUE="1">
      <BUTTON TYPE="submit">Add to Cart</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, MIN, MAX, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H132 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 132</title>
</head>
<body>
  <h1>Tech News Article</h1>
  <article>
    <h2>New Smartphone Launched in 2024</h2>
    <p>Reported by <strong>Bilal Ahmed</strong> on <time datetime="2024-09-05">September 5, 2024</time></p>
    <figure>
      <img src="phone.jpg" alt="New Smartphone" width="400" height="300">
      <figcaption>The latest flagship smartphone</figcaption>
    </figure>
    <p>The new device features a 200MP camera and all-day battery life.</p>
    <blockquote cite="https://technews.com">
      <p>This phone redefines mobile photography.</p>
    </blockquote>
    <h3>Key Features</h3>
    <ul>
      <li>200MP main camera</li>
      <li>6000mAh battery</li>
      <li>120Hz display</li>
    </ul>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 132</titel>
</head>
<BODY>
  <H1>Tech News Article</H1>
  <ARTICLE>
    <H2>New Smartphone Launched in 2024</H2>
    <P>Reported by <STRONG>Bilal Ahmed</STRONG> on <TIME DATETIME="2024-09-05">September 5, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="phone.jpg" ALT="New Smartphone" WIDTH="400" HEIGHT="300">
      <FIGCAPTION>The latest flagship smartphone</FIGCAPTION>
    </FIGURE>
    <P>The new device features a 200MP camera and all-day battery life.</P>
    <BLOCKQUOTE CITE="https://technews.com">
      <P>This phone redefines mobile photography.</P>
    </BLOCKQUOTE>
    <H3>Key Features</H3>
    <UL>
      <LI>200MP main camera</LI>
      <LI>6000mAh battery</LI>
      <LI>120Hz display</LI>
    </UL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, UL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H133 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 133</title>
</head>
<body>
  <h1>Attendance Sheet</h1>
  <section>
    <h2>Class 8 — Daily Attendance</h2>
    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Roll No</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Hassan Ali</td>
          <td>Present</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Maria Khan</td>
          <td>Absent</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Zain Abbas</td>
          <td>Present</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Hira Shah</td>
          <td>Present</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 133</titel>
</head>
<BODY>
  <H1>Attendance Sheet</H1>
  <SECTION>
    <H2>Class 8 — Daily Attendance</H2>
    <TABLE BORDER="1" CELLPADDING="6" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Roll No</TH>
          <TH SCOPE="col">Name</TH>
          <TH SCOPE="col">Status</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>1</TD>
          <TD>Hassan Ali</TD>
          <TD>Present</TD>
        </TR>
        <TR>
          <TD>2</TD>
          <TD>Maria Khan</TD>
          <TD>Absent</TD>
        </TR>
        <TR>
          <TD>3</TD>
          <TD>Zain Abbas</TD>
          <TD>Present</TD>
        </TR>
        <TR>
          <TD>4</TD>
          <TD>Hira Shah</TD>
          <TD>Present</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H134 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 134</title>
</head>
<body>
  <h1>Insurance Quote Form</h1>
  <section>
    <h2>Get a Quote</h2>
    <form action="/quote" method="post">
      <label for="qname">Full Name:</label>
      <input type="text" id="qname" name="name" required>
      <label for="qage">Age:</label>
      <input type="number" id="qage" name="age" min="18" max="80" required>
      <label for="qtype">Insurance Type:</label>
      <select id="qtype" name="type">
        <option value="life">Life</option>
        <option value="health">Health</option>
        <option value="auto">Auto</option>
      </select>
      <label for="qnotes">Additional Notes:</label>
      <textarea id="qnotes" name="notes" rows="4" cols="40"></textarea>
      <button type="submit">Get Quote</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 134</titel>
</head>
<BODY>
  <H1>Insurance Quote Form</H1>
  <SECTION>
    <H2>Get a Quote</H2>
    <FORM ACTION="/quote" METHOD="post">
      <LABEL FOR="qname">Full Name:</LABEL>
      <INPUT TYPE="text" ID="qname" NAME="name" REQUIRED>
      <LABEL FOR="qage">Age:</LABEL>
      <INPUT TYPE="number" ID="qage" NAME="age" MIN="18" MAX="80" REQUIRED>
      <LABEL FOR="qtype">Insurance Type:</LABEL>
      <SELECT ID="qtype" NAME="type">
        <OPTION VALUE="life">Life</OPTION>
        <OPTION VALUE="health">Health</OPTION>
        <OPTION VALUE="auto">Auto</OPTION>
      </SELECT>
      <LABEL FOR="qnotes">Additional Notes:</LABEL>
      <TEXTAREA ID="qnotes" NAME="notes" ROWS="4" COLS="40"></TEXTAREA>
      <BUTTON TYPE="submit">Get Quote</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, MIN, MAX, ROWS, COLS, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H135 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 135</title>
  <link rel="stylesheet" href="bakery.css">
</head>
<body>
  <header>
    <h1>Sweet Treats Bakery</h1>
    <nav>
      <ul>
        <li><a href="/cakes">Cakes</a></li>
        <li><a href="/cookies">Cookies</a></li>
        <li><a href="/order">Order</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Featured Items</h2>
      <article class="item">
        <img src="cake.jpg" alt="Chocolate Cake" width="250" height="180">
        <h3>Chocolate Cake</h3>
        <p>Rs. 1,800</p>
      </article>
      <article class="item">
        <img src="cookies.jpg" alt="Cookies" width="250" height="180">
        <h3>Butter Cookies</h3>
        <p>Rs. 500</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Sweet Treats Bakery</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 135</titel>
  <LINK REL="stylesheet" HREF="bakery.css">
</head>
<BODY>
  <HEADER>
    <H1>Sweet Treats Bakery</H1>
    <NAV>
      <UL>
        <LI><A HREF="/cakes">Cakes</A></LI>
        <LI><A HREF="/cookies">Cookies</A></LI>
        <LI><A HREF="/order">Order</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Featured Items</H2>
      <ARTICLE CLASS="item">
        <IMG SRC="cake.jpg" ALT="Chocolate Cake" WIDTH="250" HEIGHT="180">
        <H3>Chocolate Cake</H3>
        <P>Rs. 1,800</P>
      </ARTICLE>
      <ARTICLE CLASS="item">
        <IMG SRC="cookies.jpg" ALT="Cookies" WIDTH="250" HEIGHT="180">
        <H3>Butter Cookies</H3>
        <P>Rs. 500</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Sweet Treats Bakery</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H136 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 136</title>
</head>
<body>
  <h1>Team Members</h1>
  <section>
    <h2>Meet Our Team</h2>
    <div class="team-grid">
      <article class="member">
        <img src="ceo.jpg" alt="CEO" width="150" height="150">
        <h3>Ahmed Raza</h3>
        <p>Chief Executive Officer</p>
      </article>
      <article class="member">
        <img src="cto.jpg" alt="CTO" width="150" height="150">
        <h3>Sara Khan</h3>
        <p>Chief Technology Officer</p>
      </article>
      <article class="member">
        <img src="cfo.jpg" alt="CFO" width="150" height="150">
        <h3>Usman Ali</h3>
        <p>Chief Financial Officer</p>
      </article>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 136</titel>
</head>
<BODY>
  <H1>Team Members</H1>
  <SECTION>
    <H2>Meet Our Team</H2>
    <DIV CLASS="team-grid">
      <ARTICLE CLASS="member">
        <IMG SRC="ceo.jpg" ALT="CEO" WIDTH="150" HEIGHT="150">
        <H3>Ahmed Raza</H3>
        <P>Chief Executive Officer</P>
      </ARTICLE>
      <ARTICLE CLASS="member">
        <IMG SRC="cto.jpg" ALT="CTO" WIDTH="150" HEIGHT="150">
        <H3>Sara Khan</H3>
        <P>Chief Technology Officer</P>
      </ARTICLE>
      <ARTICLE CLASS="member">
        <IMG SRC="cfo.jpg" ALT="CFO" WIDTH="150" HEIGHT="150">
        <H3>Usman Ali</H3>
        <P>Chief Financial Officer</P>
      </ARTICLE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, ARTICLE, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H137 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 137</title>
</head>
<body>
  <h1>Poll Submission</h1>
  <form action="/poll" method="post">
    <fieldset>
      <legend>Favorite Programming Language?</legend>
      <label><input type="radio" name="lang" value="js"> JavaScript</label>
      <label><input type="radio" name="lang" value="py"> Python</label>
      <label><input type="radio" name="lang" value="java"> Java</label>
      <label><input type="radio" name="lang" value="cpp"> C++</label>
    </fieldset>
    <fieldset>
      <legend>Preferred OS?</legend>
      <label><input type="checkbox" name="os" value="windows"> Windows</label>
      <label><input type="checkbox" name="os" value="mac"> macOS</label>
      <label><input type="checkbox" name="os" value="linux"> Linux</label>
    </fieldset>
    <button type="submit">Submit Vote</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 137</titel>
</head>
<BODY>
  <H1>Poll Submission</H1>
  <FORM ACTION="/poll" METHOD="post">
    <FIELDSET>
      <LEGEND>Favorite Programming Language?</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="lang" VALUE="js"> JavaScript</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="lang" VALUE="py"> Python</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="lang" VALUE="java"> Java</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="lang" VALUE="cpp"> C++</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Preferred OS?</LEGEND>
      <LABEL><INPUT TYPE="checkbox" NAME="os" VALUE="windows"> Windows</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="os" VALUE="mac"> macOS</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="os" VALUE="linux"> Linux</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Submit Vote</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H138 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 138</title>
</head>
<body>
  <h1>Live Stream Page</h1>
  <section>
    <h2>Watch Live</h2>
    <video width="800" height="450" controls autoplay muted>
      <source src="stream.mp4" type="video/mp4">
      <source src="stream.webm" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <h3>Live Chat</h3>
    <div class="chat" role="log" aria-live="polite">
      <p><strong>Ali:</strong> Great stream!</p>
      <p><strong>Sara:</strong> Loving the content.</p>
      <p><strong>Usman:</strong> Hello from Lahore!</p>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 138</titel>
</head>
<BODY>
  <H1>Live Stream Page</H1>
  <SECTION>
    <H2>Watch Live</H2>
    <VIDEO WIDTH="800" HEIGHT="450" CONTROLS AUTOPLAY MUTED>
      <SOURCE SRC="stream.mp4" TYPE="video/mp4">
      <SOURCE SRC="stream.webm" TYPE="video/webm">
      Your browser does not support the video tag.
    </VIDEO>
    <H3>Live Chat</H3>
    <DIV CLASS="chat" ROLE="log" ARIA-LIVE="polite">
      <P><STRONG>Ali:</STRONG> Great stream!</P>
      <P><STRONG>Sara:</STRONG> Loving the content.</P>
      <P><STRONG>Usman:</STRONG> Hello from Lahore!</P>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "VIDEO, SOURCE, DIV, STRONG, SECTION sab uppercase. WIDTH, HEIGHT, CONTROLS, AUTOPLAY, MUTED, SRC, TYPE, CLASS, ROLE, ARIA-LIVE attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H139 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 139</title>
</head>
<body>
  <h1>Goal Tracker</h1>
  <section>
    <h2>2024 Goals</h2>
    <div class="goal">
      <span>Read 50 Books:</span>
      <progress value="35" max="50"></progress>
      <span>35/50</span>
    </div>
    <div class="goal">
      <span>Run 500 km:</span>
      <progress value="320" max="500"></progress>
      <span>320/500</span>
    </div>
    <div class="goal">
      <span>Save Rs. 100,000:</span>
      <meter value="0.6" min="0" max="1">60%</meter>
    </div>
    <div class="goal">
      <span>Learn Spanish:</span>
      <meter value="0.45" min="0" max="1">45%</meter>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 139</titel>
</head>
<BODY>
  <H1>Goal Tracker</H1>
  <SECTION>
    <H2>2024 Goals</H2>
    <DIV CLASS="goal">
      <SPAN>Read 50 Books:</SPAN>
      <PROGRESS VALUE="35" MAX="50"></PROGRESS>
      <SPAN>35/50</SPAN>
    </DIV>
    <DIV CLASS="goal">
      <SPAN>Run 500 km:</SPAN>
      <PROGRESS VALUE="320" MAX="500"></PROGRESS>
      <SPAN>320/500</SPAN>
    </DIV>
    <DIV CLASS="goal">
      <SPAN>Save Rs. 100,000:</SPAN>
      <METER VALUE="0.6" MIN="0" MAX="1">60%</METER>
    </DIV>
    <DIV CLASS="goal">
      <SPAN>Learn Spanish:</SPAN>
      <METER VALUE="0.45" MIN="0" MAX="1">45%</METER>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, SPAN, PROGRESS, METER, SECTION sab uppercase. CLASS, VALUE, MAX, MIN attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H140 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete restaurant reservation portal">
  <title>Hard Page 140</title>
  <link rel="stylesheet" href="restaurant.css">
  <script src="restaurant.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>Spice Garden Restaurant</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reserve">Reserve</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="reserve-heading">
      <h2 id="reserve-heading">Reserve a Table</h2>
      <form action="/reserve" method="post">
        <label for="rname">Name:</label>
        <input type="text" id="rname" name="name" required>
        <label for="rdate">Date:</label>
        <input type="date" id="rdate" name="date" required>
        <label for="guests">Guests:</label>
        <input type="number" id="guests" name="guests" min="1" max="12" value="2">
        <button type="submit" aria-label="Confirm reservation">Reserve</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 Spice Garden. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete restaurant reservation portal">
  <titel>Hard Page 140</titel>
  <LINK REL="stylesheet" HREF="restaurant.css">
  <SCRIPT SRC="restaurant.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Spice Garden Restaurant</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/menu">Menu</A></LI>
        <LI><A HREF="/reserve">Reserve</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="reserve-heading">
      <H2 ID="reserve-heading">Reserve a Table</H2>
      <FORM ACTION="/reserve" METHOD="post">
        <LABEL FOR="rname">Name:</LABEL>
        <INPUT TYPE="text" ID="rname" NAME="name" REQUIRED>
        <LABEL FOR="rdate">Date:</LABEL>
        <INPUT TYPE="date" ID="rdate" NAME="date" REQUIRED>
        <LABEL FOR="guests">Guests:</LABEL>
        <INPUT TYPE="number" ID="guests" NAME="guests" MIN="1" MAX="12" VALUE="2">
        <BUTTON TYPE="submit" ARIA-LABEL="Confirm reservation">Reserve</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 Spice Garden. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, FORM, LABEL, INPUT, BUTTON, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, NAME, CONTENT, REL, HREF, DEFER, SRC, MIN, MAX, VALUE bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H141–H150) ──
   Hard: 45-50 mistakes per code
*/

// ── H141 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 141</title>
</head>
<body>
  <h1>Coupon Redemption</h1>
  <section>
    <h2>Apply Coupon</h2>
    <form action="/redeem" method="post">
      <label for="code">Coupon Code:</label>
      <input type="text" id="code" name="code" required placeholder="Enter code">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <button type="submit">Redeem</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 141</titel>
</head>
<BODY>
  <H1>Coupon Redemption</H1>
  <SECTION>
    <H2>Apply Coupon</H2>
    <FORM ACTION="/redeem" METHOD="post">
      <LABEL FOR="code">Coupon Code:</LABEL>
      <INPUT TYPE="text" ID="code" NAME="code" REQUIRED PLACEHOLDER="Enter code">
      <LABEL FOR="email">Email:</LABEL>
      <INPUT TYPE="email" ID="email" NAME="email" REQUIRED>
      <BUTTON TYPE="submit">Redeem</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, LABEL, INPUT, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, ACTION, METHOD bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H142 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 142</title>
</head>
<body>
  <h1>Science Blog</h1>
  <article>
    <h2>The Wonders of Black Holes</h2>
    <p>By <strong>Dr. Imran</strong> on <time datetime="2024-10-02">October 2, 2024</time></p>
    <figure>
      <img src="blackhole.jpg" alt="Black Hole" width="500" height="350">
      <figcaption>An artist's depiction of a black hole</figcaption>
    </figure>
    <p>Black holes are regions where gravity is so strong nothing escapes.</p>
    <blockquote cite="https://nasa.gov">
      <p>Space is the final frontier.</p>
    </blockquote>
    <h3>Facts</h3>
    <ul>
      <li>Light cannot escape</li>
      <li>Time slows near them</li>
      <li>They can merge</li>
    </ul>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 142</titel>
</head>
<BODY>
  <H1>Science Blog</H1>
  <ARTICLE>
    <H2>The Wonders of Black Holes</H2>
    <P>By <STRONG>Dr. Imran</STRONG> on <TIME DATETIME="2024-10-02">October 2, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="blackhole.jpg" ALT="Black Hole" WIDTH="500" HEIGHT="350">
      <FIGCAPTION>An artist's depiction of a black hole</FIGCAPTION>
    </FIGURE>
    <P>Black holes are regions where gravity is so strong nothing escapes.</P>
    <BLOCKQUOTE CITE="https://nasa.gov">
      <P>Space is the final frontier.</P>
    </BLOCKQUOTE>
    <H3>Facts</H3>
    <UL>
      <LI>Light cannot escape</LI>
      <LI>Time slows near them</LI>
      <LI>They can merge</LI>
    </UL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, UL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H143 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 143</title>
</head>
<body>
  <h1>Order Summary</h1>
  <section>
    <h2>Your Cart</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Qty</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>T-Shirt</td>
          <td>2</td>
          <td>Rs. 2,400</td>
        </tr>
        <tr>
          <td>Jeans</td>
          <td>1</td>
          <td>Rs. 3,500</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total</td>
          <td>Rs. 5,900</td>
        </tr>
      </tfoot>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 143</titel>
</head>
<BODY>
  <H1>Order Summary</H1>
  <SECTION>
    <H2>Your Cart</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Item</TH>
          <TH SCOPE="col">Qty</TH>
          <TH SCOPE="col">Price</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>T-Shirt</TD>
          <TD>2</TD>
          <TD>Rs. 2,400</TD>
        </TR>
        <TR>
          <TD>Jeans</TD>
          <TD>1</TD>
          <TD>Rs. 3,500</TD>
        </TR>
      </TBODY>
      <TFOOT>
        <TR>
          <TD COLSPAN="2">Total</TD>
          <TD>Rs. 5,900</TD>
        </TR>
      </TFOOT>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TFOOT, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE, COLSPAN attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H144 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 144</title>
</head>
<body>
  <h1>Profile Update</h1>
  <section>
    <h2>Edit Your Profile</h2>
    <form action="/update-profile" method="post" enctype="multipart/form-data">
      <label for="pname">Display Name:</label>
      <input type="text" id="pname" name="name" required>
      <label for="pbio">Bio:</label>
      <textarea id="pbio" name="bio" rows="4" cols="40"></textarea>
      <label for="pavatar">Avatar:</label>
      <input type="file" id="pavatar" name="avatar" accept="image/*">
      <button type="submit">Save Changes</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 144</titel>
</head>
<BODY>
  <H1>Profile Update</H1>
  <SECTION>
    <H2>Edit Your Profile</H2>
    <FORM ACTION="/update-profile" METHOD="post" ENCTYPE="multipart/form-data">
      <LABEL FOR="pname">Display Name:</LABEL>
      <INPUT TYPE="text" ID="pname" NAME="name" REQUIRED>
      <LABEL FOR="pbio">Bio:</LABEL>
      <TEXTAREA ID="pbio" NAME="bio" ROWS="4" COLS="40"></TEXTAREA>
      <LABEL FOR="pavatar">Avatar:</LABEL>
      <INPUT TYPE="file" ID="pavatar" NAME="avatar" ACCEPT="image/*">
      <BUTTON TYPE="submit">Save Changes</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, LABEL, INPUT, TEXTAREA, BUTTON, SECTION sab uppercase. ENCTYPE, TYPE, ID, NAME, REQUIRED, ROWS, COLS, ACCEPT bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H145 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 145</title>
  <link rel="stylesheet" href="store.css">
</head>
<body>
  <header>
    <h1>Gadget Store</h1>
    <nav>
      <ul>
        <li><a href="/phones">Phones</a></li>
        <li><a href="/laptops">Laptops</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Best Sellers</h2>
      <article class="product">
        <img src="phone.jpg" alt="Smartphone" width="220" height="220">
        <h3>Smartphone X</h3>
        <p>Rs. 65,000</p>
      </article>
      <article class="product">
        <img src="laptop.jpg" alt="Laptop" width="220" height="220">
        <h3>Laptop Pro</h3>
        <p>Rs. 145,000</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Gadget Store</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 145</titel>
  <LINK REL="stylesheet" HREF="store.css">
</head>
<BODY>
  <HEADER>
    <H1>Gadget Store</H1>
    <NAV>
      <UL>
        <LI><A HREF="/phones">Phones</A></LI>
        <LI><A HREF="/laptops">Laptops</A></LI>
        <LI><A HREF="/cart">Cart</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Best Sellers</H2>
      <ARTICLE CLASS="product">
        <IMG SRC="phone.jpg" ALT="Smartphone" WIDTH="220" HEIGHT="220">
        <H3>Smartphone X</H3>
        <P>Rs. 65,000</P>
      </ARTICLE>
      <ARTICLE CLASS="product">
        <IMG SRC="laptop.jpg" ALT="Laptop" WIDTH="220" HEIGHT="220">
        <H3>Laptop Pro</H3>
        <P>Rs. 145,000</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Gadget Store</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H146 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 146</title>
</head>
<body>
  <h1>Wishlist</h1>
  <section>
    <h2>Saved Items</h2>
    <div class="wishlist-grid">
      <article class="wish">
        <img src="watch.jpg" alt="Watch" width="180" height="180">
        <h3>Smart Watch</h3>
        <p>Rs. 12,000</p>
      </article>
      <article class="wish">
        <img src="headphones.jpg" alt="Headphones" width="180" height="180">
        <h3>Headphones</h3>
        <p>Rs. 5,500</p>
      </article>
      <article class="wish">
        <img src="speaker.jpg" alt="Speaker" width="180" height="180">
        <h3>Bluetooth Speaker</h3>
        <p>Rs. 4,000</p>
      </article>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 146</titel>
</head>
<BODY>
  <H1>Wishlist</H1>
  <SECTION>
    <H2>Saved Items</H2>
    <DIV CLASS="wishlist-grid">
      <ARTICLE CLASS="wish">
        <IMG SRC="watch.jpg" ALT="Watch" WIDTH="180" HEIGHT="180">
        <H3>Smart Watch</H3>
        <P>Rs. 12,000</P>
      </ARTICLE>
      <ARTICLE CLASS="wish">
        <IMG SRC="headphones.jpg" ALT="Headphones" WIDTH="180" HEIGHT="180">
        <H3>Headphones</H3>
        <P>Rs. 5,500</P>
      </ARTICLE>
      <ARTICLE CLASS="wish">
        <IMG SRC="speaker.jpg" ALT="Speaker" WIDTH="180" HEIGHT="180">
        <H3>Bluetooth Speaker</H3>
        <P>Rs. 4,000</P>
      </ARTICLE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, ARTICLE, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H147 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 147</title>
</head>
<body>
  <h1>Registration Quiz</h1>
  <form action="/quiz-register" method="post">
    <fieldset>
      <legend>Select Difficulty</legend>
      <label><input type="radio" name="level" value="easy"> Easy</label>
      <label><input type="radio" name="level" value="medium"> Medium</label>
      <label><input type="radio" name="level" value="hard"> Hard</label>
    </fieldset>
    <fieldset>
      <legend>Topics</legend>
      <label><input type="checkbox" name="topic" value="html"> HTML</label>
      <label><input type="checkbox" name="topic" value="css"> CSS</label>
      <label><input type="checkbox" name="topic" value="js"> JavaScript</label>
    </fieldset>
    <button type="submit">Start Quiz</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 147</titel>
</head>
<BODY>
  <H1>Registration Quiz</H1>
  <FORM ACTION="/quiz-register" METHOD="post">
    <FIELDSET>
      <LEGEND>Select Difficulty</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="level" VALUE="easy"> Easy</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="level" VALUE="medium"> Medium</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="level" VALUE="hard"> Hard</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Topics</LEGEND>
      <LABEL><INPUT TYPE="checkbox" NAME="topic" VALUE="html"> HTML</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="topic" VALUE="css"> CSS</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="topic" VALUE="js"> JavaScript</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Start Quiz</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H148 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 148</title>
</head>
<body>
  <h1>Audio Library</h1>
  <section>
    <h2>Relaxing Sounds</h2>
    <article class="track">
      <h3>Ocean Waves</h3>
      <audio controls>
        <source src="ocean.mp3" type="audio/mpeg">
        <source src="ocean.ogg" type="audio/ogg">
        Your browser does not support audio.
      </audio>
    </article>
    <article class="track">
      <h3>Rain Sounds</h3>
      <audio controls>
        <source src="rain.mp3" type="audio/mpeg">
        <source src="rain.ogg" type="audio/ogg">
        Your browser does not support audio.
      </audio>
    </article>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 148</titel>
</head>
<BODY>
  <H1>Audio Library</H1>
  <SECTION>
    <H2>Relaxing Sounds</H2>
    <ARTICLE CLASS="track">
      <H3>Ocean Waves</H3>
      <AUDIO CONTROLS>
        <SOURCE SRC="ocean.mp3" TYPE="audio/mpeg">
        <SOURCE SRC="ocean.ogg" TYPE="audio/ogg">
        Your browser does not support audio.
      </AUDIO>
    </ARTICLE>
    <ARTICLE CLASS="track">
      <H3>Rain Sounds</H3>
      <AUDIO CONTROLS>
        <SOURCE SRC="rain.mp3" TYPE="audio/mpeg">
        <SOURCE SRC="rain.ogg" TYPE="audio/ogg">
        Your browser does not support audio.
      </AUDIO>
    </ARTICLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, AUDIO, SOURCE, SECTION sab uppercase. CLASS, CONTROLS, SRC, TYPE attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H149 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 149</title>
</head>
<body>
  <h1>Skill Levels</h1>
  <section>
    <h2>My Skills</h2>
    <div class="skill">
      <span>HTML:</span>
      <progress value="95" max="100"></progress>
      <span>95%</span>
    </div>
    <div class="skill">
      <span>CSS:</span>
      <progress value="85" max="100"></progress>
      <span>85%</span>
    </div>
    <div class="skill">
      <span>JavaScript:</span>
      <meter value="0.7" min="0" max="1">70%</meter>
    </div>
    <div class="skill">
      <span>React:</span>
      <meter value="0.6" min="0" max="1">60%</meter>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 149</titel>
</head>
<BODY>
  <H1>Skill Levels</H1>
  <SECTION>
    <H2>My Skills</H2>
    <DIV CLASS="skill">
      <SPAN>HTML:</SPAN>
      <PROGRESS VALUE="95" MAX="100"></PROGRESS>
      <SPAN>95%</SPAN>
    </DIV>
    <DIV CLASS="skill">
      <SPAN>CSS:</SPAN>
      <PROGRESS VALUE="85" MAX="100"></PROGRESS>
      <SPAN>85%</SPAN>
    </DIV>
    <DIV CLASS="skill">
      <SPAN>JavaScript:</SPAN>
      <METER VALUE="0.7" MIN="0" MAX="1">70%</METER>
    </DIV>
    <DIV CLASS="skill">
      <SPAN>React:</SPAN>
      <METER VALUE="0.6" MIN="0" MAX="1">60%</METER>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, SPAN, PROGRESS, METER, SECTION sab uppercase. CLASS, VALUE, MAX, MIN attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H150 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete online learning platform">
  <title>Hard Page 150</title>
  <link rel="stylesheet" href="learn.css">
  <script src="learn.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>LearnPro Academy</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="courses-heading">
      <h2 id="courses-heading">Popular Courses</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Course</th>
            <th scope="col">Students</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web Development</td>
            <td>1200</td>
            <td>4.8</td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>950</td>
            <td>4.6</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Quick Signup</h2>
      <form action="/signup" method="post">
        <label for="sname">Name:</label>
        <input type="text" id="sname" name="name" required>
        <label for="semail">Email:</label>
        <input type="email" id="semail" name="email" required>
        <button type="submit" aria-label="Create account">Sign Up</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 LearnPro. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete online learning platform">
  <titel>Hard Page 150</titel>
  <LINK REL="stylesheet" HREF="learn.css">
  <SCRIPT SRC="learn.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>LearnPro Academy</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/courses">Courses</A></LI>
        <LI><A HREF="/login">Login</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="courses-heading">
      <H2 ID="courses-heading">Popular Courses</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Course</TH>
            <TH SCOPE="col">Students</TH>
            <TH SCOPE="col">Rating</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Web Development</TD>
            <TD>1200</TD>
            <TD>4.8</TD>
          </TR>
          <TR>
            <TD>Data Science</TD>
            <TD>950</TD>
            <TD>4.6</TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Quick Signup</H2>
      <FORM ACTION="/signup" METHOD="post">
        <LABEL FOR="sname">Name:</LABEL>
        <INPUT TYPE="text" ID="sname" NAME="name" REQUIRED>
        <LABEL FOR="semail">Email:</LABEL>
        <INPUT TYPE="email" ID="semail" NAME="email" REQUIRED>
        <BUTTON TYPE="submit" ARIA-LABEL="Create account">Sign Up</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 LearnPro. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, FORM, LABEL, INPUT, BUTTON, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, SCOPE, NAME, CONTENT, REL, HREF, DEFER, SRC bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H151–H160) ──
   Hard: 45-50 mistakes per code
*/

// ── H151 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 151</title>
</head>
<body>
  <h1>Bus Ticket Booking</h1>
  <section>
    <h2>Book a Seat</h2>
    <form action="/book-bus" method="post">
      <label for="from">From:</label>
      <input type="text" id="from" name="from" required placeholder="Departure city">
      <label for="to">To:</label>
      <input type="text" id="to" name="to" required placeholder="Arrival city">
      <label for="seats">Seats:</label>
      <input type="number" id="seats" name="seats" min="1" max="6" value="1">
      <button type="submit">Book Ticket</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 151</titel>
</head>
<BODY>
  <H1>Bus Ticket Booking</H1>
  <SECTION>
    <H2>Book a Seat</H2>
    <FORM ACTION="/book-bus" METHOD="post">
      <LABEL FOR="from">From:</LABEL>
      <INPUT TYPE="text" ID="from" NAME="from" REQUIRED PLACEHOLDER="Departure city">
      <LABEL FOR="to">To:</LABEL>
      <INPUT TYPE="text" ID="to" NAME="to" REQUIRED PLACEHOLDER="Arrival city">
      <LABEL FOR="seats">Seats:</LABEL>
      <INPUT TYPE="number" ID="seats" NAME="seats" MIN="1" MAX="6" VALUE="1">
      <BUTTON TYPE="submit">Book Ticket</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, LABEL, INPUT, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, MIN, MAX, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H152 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 152</title>
</head>
<body>
  <h1>History Blog</h1>
  <article>
    <h2>The Fall of the Roman Empire</h2>
    <p>By <strong>Prof. Khalid</strong> on <time datetime="2024-03-12">March 12, 2024</time></p>
    <figure>
      <img src="rome.jpg" alt="Roman Ruins" width="500" height="350">
      <figcaption>Ancient Roman ruins</figcaption>
    </figure>
    <p>The Roman Empire fell due to many internal and external factors.</p>
    <blockquote cite="https://history.com">
      <p>Rome wasn't built in a day, nor did it fall in one.</p>
    </blockquote>
    <h3>Causes</h3>
    <ul>
      <li>Economic decline</li>
      <li>Military pressure</li>
      <li>Political instability</li>
    </ul>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 152</titel>
</head>
<BODY>
  <H1>History Blog</H1>
  <ARTICLE>
    <H2>The Fall of the Roman Empire</H2>
    <P>By <STRONG>Prof. Khalid</STRONG> on <TIME DATETIME="2024-03-12">March 12, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="rome.jpg" ALT="Roman Ruins" WIDTH="500" HEIGHT="350">
      <FIGCAPTION>Ancient Roman ruins</FIGCAPTION>
    </FIGURE>
    <P>The Roman Empire fell due to many internal and external factors.</P>
    <BLOCKQUOTE CITE="https://history.com">
      <P>Rome wasn't built in a day, nor did it fall in one.</P>
    </BLOCKQUOTE>
    <H3>Causes</H3>
    <UL>
      <LI>Economic decline</LI>
      <LI>Military pressure</LI>
      <LI>Political instability</LI>
    </UL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, UL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H153 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 153</title>
</head>
<body>
  <h1>Match Scoreboard</h1>
  <section>
    <h2>Cricket Scores</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Team</th>
          <th scope="col">Runs</th>
          <th scope="col">Wickets</th>
          <th scope="col">Overs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pakistan</td>
          <td>285</td>
          <td>6</td>
          <td>50</td>
        </tr>
        <tr>
          <td>India</td>
          <td>240</td>
          <td>9</td>
          <td>48</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 153</titel>
</head>
<BODY>
  <H1>Match Scoreboard</H1>
  <SECTION>
    <H2>Cricket Scores</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Team</TH>
          <TH SCOPE="col">Runs</TH>
          <TH SCOPE="col">Wickets</TH>
          <TH SCOPE="col">Overs</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>Pakistan</TD>
          <TD>285</TD>
          <TD>6</TD>
          <TD>50</TD>
        </TR>
        <TR>
          <TD>India</TD>
          <TD>240</TD>
          <TD>9</TD>
          <TD>48</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H154 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 154</title>
</head>
<body>
  <h1>Support Ticket</h1>
  <section>
    <h2>Submit a Ticket</h2>
    <form action="/ticket" method="post">
      <label for="tsubject">Subject:</label>
      <input type="text" id="tsubject" name="subject" required>
      <label for="tpriority">Priority:</label>
      <select id="tpriority" name="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label for="tdesc">Description:</label>
      <textarea id="tdesc" name="description" rows="5" cols="40" required></textarea>
      <button type="submit">Submit Ticket</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 154</titel>
</head>
<BODY>
  <H1>Support Ticket</H1>
  <SECTION>
    <H2>Submit a Ticket</H2>
    <FORM ACTION="/ticket" METHOD="post">
      <LABEL FOR="tsubject">Subject:</LABEL>
      <INPUT TYPE="text" ID="tsubject" NAME="subject" REQUIRED>
      <LABEL FOR="tpriority">Priority:</LABEL>
      <SELECT ID="tpriority" NAME="priority">
        <OPTION VALUE="low">Low</OPTION>
        <OPTION VALUE="medium">Medium</OPTION>
        <OPTION VALUE="high">High</OPTION>
      </SELECT>
      <LABEL FOR="tdesc">Description:</LABEL>
      <TEXTAREA ID="tdesc" NAME="description" ROWS="5" COLS="40" REQUIRED></TEXTAREA>
      <BUTTON TYPE="submit">Submit Ticket</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, ROWS, COLS, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H155 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 155</title>
  <link rel="stylesheet" href="florist.css">
</head>
<body>
  <header>
    <h1>Bloom Florist</h1>
    <nav>
      <ul>
        <li><a href="/bouquets">Bouquets</a></li>
        <li><a href="/plants">Plants</a></li>
        <li><a href="/order">Order</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Featured Flowers</h2>
      <article class="flower">
        <img src="roses.jpg" alt="Red Roses" width="250" height="180">
        <h3>Red Roses</h3>
        <p>Rs. 1,200</p>
      </article>
      <article class="flower">
        <img src="tulips.jpg" alt="Tulips" width="250" height="180">
        <h3>Tulips</h3>
        <p>Rs. 950</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Bloom Florist</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 155</titel>
  <LINK REL="stylesheet" HREF="florist.css">
</head>
<BODY>
  <HEADER>
    <H1>Bloom Florist</H1>
    <NAV>
      <UL>
        <LI><A HREF="/bouquets">Bouquets</A></LI>
        <LI><A HREF="/plants">Plants</A></LI>
        <LI><A HREF="/order">Order</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Featured Flowers</H2>
      <ARTICLE CLASS="flower">
        <IMG SRC="roses.jpg" ALT="Red Roses" WIDTH="250" HEIGHT="180">
        <H3>Red Roses</H3>
        <P>Rs. 1,200</P>
      </ARTICLE>
      <ARTICLE CLASS="flower">
        <IMG SRC="tulips.jpg" ALT="Tulips" WIDTH="250" HEIGHT="180">
        <H3>Tulips</H3>
        <P>Rs. 950</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Bloom Florist</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H156 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 156</title>
</head>
<body>
  <h1>Pet Adoption</h1>
  <section>
    <h2>Available Pets</h2>
    <div class="pet-grid">
      <article class="pet">
        <img src="dog.jpg" alt="Dog" width="200" height="200">
        <h3>Max — Labrador</h3>
        <p>Age: 2 years</p>
      </article>
      <article class="pet">
        <img src="cat.jpg" alt="Cat" width="200" height="200">
        <h3>Luna — Persian Cat</h3>
        <p>Age: 1 year</p>
      </article>
      <article class="pet">
        <img src="rabbit.jpg" alt="Rabbit" width="200" height="200">
        <h3>Coco — Rabbit</h3>
        <p>Age: 6 months</p>
      </article>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 156</titel>
</head>
<BODY>
  <H1>Pet Adoption</H1>
  <SECTION>
    <H2>Available Pets</H2>
    <DIV CLASS="pet-grid">
      <ARTICLE CLASS="pet">
        <IMG SRC="dog.jpg" ALT="Dog" WIDTH="200" HEIGHT="200">
        <H3>Max — Labrador</H3>
        <P>Age: 2 years</P>
      </ARTICLE>
      <ARTICLE CLASS="pet">
        <IMG SRC="cat.jpg" ALT="Cat" WIDTH="200" HEIGHT="200">
        <H3>Luna — Persian Cat</H3>
        <P>Age: 1 year</P>
      </ARTICLE>
      <ARTICLE CLASS="pet">
        <IMG SRC="rabbit.jpg" ALT="Rabbit" WIDTH="200" HEIGHT="200">
        <H3>Coco — Rabbit</H3>
        <P>Age: 6 months</P>
      </ARTICLE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, ARTICLE, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H157 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 157</title>
</head>
<body>
  <h1>Preference Form</h1>
  <form action="/preferences" method="post">
    <fieldset>
      <legend>Favorite Genre</legend>
      <label><input type="radio" name="genre" value="action"> Action</label>
      <label><input type="radio" name="genre" value="comedy"> Comedy</label>
      <label><input type="radio" name="genre" value="drama"> Drama</label>
    </fieldset>
    <fieldset>
      <legend>Watch Platforms</legend>
      <label><input type="checkbox" name="platform" value="netflix"> Netflix</label>
      <label><input type="checkbox" name="platform" value="prime"> Prime Video</label>
      <label><input type="checkbox" name="platform" value="disney"> Disney+</label>
    </fieldset>
    <button type="submit">Save Preferences</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 157</titel>
</head>
<BODY>
  <H1>Preference Form</H1>
  <FORM ACTION="/preferences" METHOD="post">
    <FIELDSET>
      <LEGEND>Favorite Genre</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="genre" VALUE="action"> Action</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="genre" VALUE="comedy"> Comedy</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="genre" VALUE="drama"> Drama</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Watch Platforms</LEGEND>
      <LABEL><INPUT TYPE="checkbox" NAME="platform" VALUE="netflix"> Netflix</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="platform" VALUE="prime"> Prime Video</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="platform" VALUE="disney"> Disney+</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Save Preferences</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H158 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 158</title>
</head>
<body>
  <h1>Tutorial Video</h1>
  <section>
    <h2>Cooking Tutorial</h2>
    <video width="700" height="400" controls poster="cook-thumb.jpg">
      <source src="cooking.mp4" type="video/mp4">
      <source src="cooking.webm" type="video/webm">
      <track kind="captions" src="cooking-en.vtt" srclang="en" label="English">
      Your browser does not support video.
    </video>
    <h3>Steps</h3>
    <ol>
      <li>Prepare ingredients</li>
      <li>Heat the pan</li>
      <li>Cook and serve</li>
    </ol>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 158</titel>
</head>
<BODY>
  <H1>Tutorial Video</H1>
  <SECTION>
    <H2>Cooking Tutorial</H2>
    <VIDEO WIDTH="700" HEIGHT="400" CONTROLS POSTER="cook-thumb.jpg">
      <SOURCE SRC="cooking.mp4" TYPE="video/mp4">
      <SOURCE SRC="cooking.webm" TYPE="video/webm">
      <TRACK KIND="captions" SRC="cooking-en.vtt" SRCLANG="en" LABEL="English">
      Your browser does not support video.
    </VIDEO>
    <H3>Steps</H3>
    <OL>
      <LI>Prepare ingredients</LI>
      <LI>Heat the pan</LI>
      <LI>Cook and serve</LI>
    </OL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "VIDEO, SOURCE, TRACK, SECTION, OL, LI sab uppercase. WIDTH, HEIGHT, CONTROLS, POSTER, SRC, TYPE, KIND, SRCLANG, LABEL attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H159 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 159</title>
</head>
<body>
  <h1>Storage Usage</h1>
  <section>
    <h2>Cloud Storage</h2>
    <div class="storage">
      <span>Documents:</span>
      <progress value="40" max="100"></progress>
      <span>40%</span>
    </div>
    <div class="storage">
      <span>Photos:</span>
      <progress value="70" max="100"></progress>
      <span>70%</span>
    </div>
    <div class="storage">
      <span>Videos:</span>
      <meter value="0.85" min="0" max="1">85%</meter>
    </div>
    <div class="storage">
      <span>Backups:</span>
      <meter value="0.3" min="0" max="1">30%</meter>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 159</titel>
</head>
<BODY>
  <H1>Storage Usage</H1>
  <SECTION>
    <H2>Cloud Storage</H2>
    <DIV CLASS="storage">
      <SPAN>Documents:</SPAN>
      <PROGRESS VALUE="40" MAX="100"></PROGRESS>
      <SPAN>40%</SPAN>
    </DIV>
    <DIV CLASS="storage">
      <SPAN>Photos:</SPAN>
      <PROGRESS VALUE="70" MAX="100"></PROGRESS>
      <SPAN>70%</SPAN>
    </DIV>
    <DIV CLASS="storage">
      <SPAN>Videos:</SPAN>
      <METER VALUE="0.85" MIN="0" MAX="1">85%</METER>
    </DIV>
    <DIV CLASS="storage">
      <SPAN>Backups:</SPAN>
      <METER VALUE="0.3" MIN="0" MAX="1">30%</METER>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, SPAN, PROGRESS, METER, SECTION sab uppercase. CLASS, VALUE, MAX, MIN attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H160 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete real estate listing portal">
  <title>Hard Page 160</title>
  <link rel="stylesheet" href="estate.css">
  <script src="estate.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>HomeFinder Realty</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/buy">Buy</a></li>
        <li><a href="/rent">Rent</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="listings-heading">
      <h2 id="listings-heading">Property Listings</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Location</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 Marla House</td>
            <td>Lahore</td>
            <td>Rs. 1.8 Crore</td>
          </tr>
          <tr>
            <td>2 Bed Apartment</td>
            <td>Karachi</td>
            <td>Rs. 95 Lac</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Search Properties</h2>
      <form action="/search" method="get">
        <label for="city">City:</label>
        <input type="text" id="city" name="city" required>
        <label for="budget">Max Budget:</label>
        <input type="number" id="budget" name="budget" min="100000">
        <button type="submit" aria-label="Search properties">Search</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 HomeFinder. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete real estate listing portal">
  <titel>Hard Page 160</titel>
  <LINK REL="stylesheet" HREF="estate.css">
  <SCRIPT SRC="estate.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>HomeFinder Realty</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/buy">Buy</A></LI>
        <LI><A HREF="/rent">Rent</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="listings-heading">
      <H2 ID="listings-heading">Property Listings</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Property</TH>
            <TH SCOPE="col">Location</TH>
            <TH SCOPE="col">Price</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>5 Marla House</TD>
            <TD>Lahore</TD>
            <TD>Rs. 1.8 Crore</TD>
          </TR>
          <TR>
            <TD>2 Bed Apartment</TD>
            <TD>Karachi</TD>
            <TD>Rs. 95 Lac</TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Search Properties</H2>
      <FORM ACTION="/search" METHOD="get">
        <LABEL FOR="city">City:</LABEL>
        <INPUT TYPE="text" ID="city" NAME="city" REQUIRED>
        <LABEL FOR="budget">Max Budget:</LABEL>
        <INPUT TYPE="number" ID="budget" NAME="budget" MIN="100000">
        <BUTTON TYPE="submit" ARIA-LABEL="Search properties">Search</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 HomeFinder. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, FORM, LABEL, INPUT, BUTTON, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, SCOPE, NAME, CONTENT, REL, HREF, DEFER, SRC, MIN bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H161–H170) ──
   Hard: 45-50 mistakes per code
*/

// ── H161 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 161</title>
</head>
<body>
  <h1>Train Booking</h1>
  <section>
    <h2>Reserve a Ticket</h2>
    <form action="/train" method="post">
      <label for="origin">Origin Station:</label>
      <input type="text" id="origin" name="origin" required placeholder="Station name">
      <label for="cls">Class:</label>
      <select id="cls" name="class">
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="ac">AC Sleeper</option>
      </select>
      <label for="pax">Passengers:</label>
      <input type="number" id="pax" name="pax" min="1" max="8" value="1">
      <button type="submit">Reserve</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 161</titel>
</head>
<BODY>
  <H1>Train Booking</H1>
  <SECTION>
    <H2>Reserve a Ticket</H2>
    <FORM ACTION="/train" METHOD="post">
      <LABEL FOR="origin">Origin Station:</LABEL>
      <INPUT TYPE="text" ID="origin" NAME="origin" REQUIRED PLACEHOLDER="Station name">
      <LABEL FOR="cls">Class:</LABEL>
      <SELECT ID="cls" NAME="class">
        <OPTION VALUE="economy">Economy</OPTION>
        <OPTION VALUE="business">Business</OPTION>
        <OPTION VALUE="ac">AC Sleeper</OPTION>
      </SELECT>
      <LABEL FOR="pax">Passengers:</LABEL>
      <INPUT TYPE="number" ID="pax" NAME="pax" MIN="1" MAX="8" VALUE="1">
      <BUTTON TYPE="submit">Reserve</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, MIN, MAX, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H162 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 162</title>
</head>
<body>
  <h1>Health Blog</h1>
  <article>
    <h2>Benefits of Daily Walking</h2>
    <p>By <strong>Dr. Nadia</strong> on <time datetime="2024-04-08">April 8, 2024</time></p>
    <figure>
      <img src="walking.jpg" alt="Person Walking" width="500" height="350">
      <figcaption>Walking improves overall health</figcaption>
    </figure>
    <p>Walking 30 minutes a day boosts heart health and mood.</p>
    <blockquote cite="https://health.com">
      <p>A short walk is better than no walk at all.</p>
    </blockquote>
    <h3>Benefits</h3>
    <ul>
      <li>Better heart health</li>
      <li>Improved mood</li>
      <li>Weight control</li>
    </ul>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 162</titel>
</head>
<BODY>
  <H1>Health Blog</H1>
  <ARTICLE>
    <H2>Benefits of Daily Walking</H2>
    <P>By <STRONG>Dr. Nadia</STRONG> on <TIME DATETIME="2024-04-08">April 8, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="walking.jpg" ALT="Person Walking" WIDTH="500" HEIGHT="350">
      <FIGCAPTION>Walking improves overall health</FIGCAPTION>
    </FIGURE>
    <P>Walking 30 minutes a day boosts heart health and mood.</P>
    <BLOCKQUOTE CITE="https://health.com">
      <P>A short walk is better than no walk at all.</P>
    </BLOCKQUOTE>
    <H3>Benefits</H3>
    <UL>
      <LI>Better heart health</LI>
      <LI>Improved mood</LI>
      <LI>Weight control</LI>
    </UL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, UL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H163 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 163</title>
</head>
<body>
  <h1>Leaderboard</h1>
  <section>
    <h2>Top Players</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Player</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ali</td>
          <td>9850</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sara</td>
          <td>9200</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Usman</td>
          <td>8700</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 163</titel>
</head>
<BODY>
  <H1>Leaderboard</H1>
  <SECTION>
    <H2>Top Players</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Rank</TH>
          <TH SCOPE="col">Player</TH>
          <TH SCOPE="col">Score</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>1</TD>
          <TD>Ali</TD>
          <TD>9850</TD>
        </TR>
        <TR>
          <TD>2</TD>
          <TD>Sara</TD>
          <TD>9200</TD>
        </TR>
        <TR>
          <TD>3</TD>
          <TD>Usman</TD>
          <TD>8700</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H164 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 164</title>
</head>
<body>
  <h1>Newsletter Preferences</h1>
  <section>
    <h2>Manage Subscription</h2>
    <form action="/preferences" method="post">
      <label for="pemail">Email:</label>
      <input type="email" id="pemail" name="email" required>
      <label for="ptopics">Topics:</label>
      <select id="ptopics" name="topics" multiple size="3">
        <option value="tech">Technology</option>
        <option value="sports">Sports</option>
        <option value="business">Business</option>
      </select>
      <label for="pmsg">Comments:</label>
      <textarea id="pmsg" name="comments" rows="4" cols="40"></textarea>
      <button type="submit">Update</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 164</titel>
</head>
<BODY>
  <H1>Newsletter Preferences</H1>
  <SECTION>
    <H2>Manage Subscription</H2>
    <FORM ACTION="/preferences" METHOD="post">
      <LABEL FOR="pemail">Email:</LABEL>
      <INPUT TYPE="email" ID="pemail" NAME="email" REQUIRED>
      <LABEL FOR="ptopics">Topics:</LABEL>
      <SELECT ID="ptopics" NAME="topics" MULTIPLE SIZE="3">
        <OPTION VALUE="tech">Technology</OPTION>
        <OPTION VALUE="sports">Sports</OPTION>
        <OPTION VALUE="business">Business</OPTION>
      </SELECT>
      <LABEL FOR="pmsg">Comments:</LABEL>
      <TEXTAREA ID="pmsg" NAME="comments" ROWS="4" COLS="40"></TEXTAREA>
      <BUTTON TYPE="submit">Update</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, MULTIPLE, SIZE, ROWS, COLS, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H165 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 165</title>
  <link rel="stylesheet" href="toys.css">
</head>
<body>
  <header>
    <h1>Toy World</h1>
    <nav>
      <ul>
        <li><a href="/cars">Cars</a></li>
        <li><a href="/dolls">Dolls</a></li>
        <li><a href="/games">Games</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>New Arrivals</h2>
      <article class="toy">
        <img src="car.jpg" alt="Toy Car" width="200" height="150">
        <h3>Remote Car</h3>
        <p>Rs. 2,500</p>
      </article>
      <article class="toy">
        <img src="doll.jpg" alt="Doll" width="200" height="150">
        <h3>Fashion Doll</h3>
        <p>Rs. 1,200</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Toy World</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 165</titel>
  <LINK REL="stylesheet" HREF="toys.css">
</head>
<BODY>
  <HEADER>
    <H1>Toy World</H1>
    <NAV>
      <UL>
        <LI><A HREF="/cars">Cars</A></LI>
        <LI><A HREF="/dolls">Dolls</A></LI>
        <LI><A HREF="/games">Games</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>New Arrivals</H2>
      <ARTICLE CLASS="toy">
        <IMG SRC="car.jpg" ALT="Toy Car" WIDTH="200" HEIGHT="150">
        <H3>Remote Car</H3>
        <P>Rs. 2,500</P>
      </ARTICLE>
      <ARTICLE CLASS="toy">
        <IMG SRC="doll.jpg" ALT="Doll" WIDTH="200" HEIGHT="150">
        <H3>Fashion Doll</H3>
        <P>Rs. 1,200</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Toy World</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H166 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 166</title>
</head>
<body>
  <h1>Art Gallery</h1>
  <section>
    <h2>Featured Artworks</h2>
    <div class="art-grid">
      <figure>
        <img src="art1.jpg" alt="Abstract Painting" width="250" height="200">
        <figcaption>Abstract Dreams</figcaption>
      </figure>
      <figure>
        <img src="art2.jpg" alt="Landscape" width="250" height="200">
        <figcaption>Mountain Sunset</figcaption>
      </figure>
      <figure>
        <img src="art3.jpg" alt="Portrait" width="250" height="200">
        <figcaption>The Thinker</figcaption>
      </figure>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 166</titel>
</head>
<BODY>
  <H1>Art Gallery</H1>
  <SECTION>
    <H2>Featured Artworks</H2>
    <DIV CLASS="art-grid">
      <FIGURE>
        <IMG SRC="art1.jpg" ALT="Abstract Painting" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>Abstract Dreams</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="art2.jpg" ALT="Landscape" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>Mountain Sunset</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="art3.jpg" ALT="Portrait" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>The Thinker</FIGCAPTION>
      </FIGURE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, FIGURE, FIGCAPTION, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H167 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 167</title>
</head>
<body>
  <h1>Exam Registration</h1>
  <form action="/exam-register" method="post">
    <fieldset>
      <legend>Exam Type</legend>
      <label><input type="radio" name="exam" value="midterm"> Midterm</label>
      <label><input type="radio" name="exam" value="final"> Final</label>
      <label><input type="radio" name="exam" value="retake"> Retake</label>
    </fieldset>
    <fieldset>
      <legend>Subjects</legend>
      <label><input type="checkbox" name="subj" value="math"> Math</label>
      <label><input type="checkbox" name="subj" value="physics"> Physics</label>
      <label><input type="checkbox" name="subj" value="chem"> Chemistry</label>
    </fieldset>
    <button type="submit">Register</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 167</titel>
</head>
<BODY>
  <H1>Exam Registration</H1>
  <FORM ACTION="/exam-register" METHOD="post">
    <FIELDSET>
      <LEGEND>Exam Type</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="exam" VALUE="midterm"> Midterm</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="exam" VALUE="final"> Final</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="exam" VALUE="retake"> Retake</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Subjects</LEGEND>
      <LABEL><INPUT TYPE="checkbox" NAME="subj" VALUE="math"> Math</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="subj" VALUE="physics"> Physics</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="subj" VALUE="chem"> Chemistry</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Register</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H168 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 168</title>
</head>
<body>
  <h1>Documentary Page</h1>
  <section>
    <h2>Wildlife Documentary</h2>
    <video width="720" height="405" controls poster="wild-thumb.jpg">
      <source src="wildlife.mp4" type="video/mp4">
      <source src="wildlife.webm" type="video/webm">
      <track kind="subtitles" src="wildlife-en.vtt" srclang="en" label="English">
      Your browser does not support video.
    </video>
    <h3>Episodes</h3>
    <ol>
      <li>The African Savanna</li>
      <li>Ocean Depths</li>
      <li>Rainforest Life</li>
    </ol>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 168</titel>
</head>
<BODY>
  <H1>Documentary Page</H1>
  <SECTION>
    <H2>Wildlife Documentary</H2>
    <VIDEO WIDTH="720" HEIGHT="405" CONTROLS POSTER="wild-thumb.jpg">
      <SOURCE SRC="wildlife.mp4" TYPE="video/mp4">
      <SOURCE SRC="wildlife.webm" TYPE="video/webm">
      <TRACK KIND="subtitles" SRC="wildlife-en.vtt" SRCLANG="en" LABEL="English">
      Your browser does not support video.
    </VIDEO>
    <H3>Episodes</H3>
    <OL>
      <LI>The African Savanna</LI>
      <LI>Ocean Depths</LI>
      <LI>Rainforest Life</LI>
    </OL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "VIDEO, SOURCE, TRACK, SECTION, OL, LI sab uppercase. WIDTH, HEIGHT, CONTROLS, POSTER, SRC, TYPE, KIND, SRCLANG, LABEL attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H169 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 169</title>
</head>
<body>
  <h1>Battery Status</h1>
  <section>
    <h2>Device Batteries</h2>
    <div class="battery">
      <span>Laptop:</span>
      <progress value="80" max="100"></progress>
      <span>80%</span>
    </div>
    <div class="battery">
      <span>Phone:</span>
      <progress value="45" max="100"></progress>
      <span>45%</span>
    </div>
    <div class="battery">
      <span>Tablet:</span>
      <meter value="0.2" min="0" max="1">20%</meter>
    </div>
    <div class="battery">
      <span>Watch:</span>
      <meter value="0.9" min="0" max="1">90%</meter>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 169</titel>
</head>
<BODY>
  <H1>Battery Status</H1>
  <SECTION>
    <H2>Device Batteries</H2>
    <DIV CLASS="battery">
      <SPAN>Laptop:</SPAN>
      <PROGRESS VALUE="80" MAX="100"></PROGRESS>
      <SPAN>80%</SPAN>
    </DIV>
    <DIV CLASS="battery">
      <SPAN>Phone:</SPAN>
      <PROGRESS VALUE="45" MAX="100"></PROGRESS>
      <SPAN>45%</SPAN>
    </DIV>
    <DIV CLASS="battery">
      <SPAN>Tablet:</SPAN>
      <METER VALUE="0.2" MIN="0" MAX="1">20%</METER>
    </DIV>
    <DIV CLASS="battery">
      <SPAN>Watch:</SPAN>
      <METER VALUE="0.9" MIN="0" MAX="1">90%</METER>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, SPAN, PROGRESS, METER, SECTION sab uppercase. CLASS, VALUE, MAX, MIN attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H170 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete music streaming portal">
  <title>Hard Page 170</title>
  <link rel="stylesheet" href="music.css">
  <script src="music.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>TuneStream Music</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/playlists">Playlists</a></li>
        <li><a href="/library">Library</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="top-heading">
      <h2 id="top-heading">Top Tracks</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Plays</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Skyfall</td>
            <td>Adele</td>
            <td>1.2M</td>
          </tr>
          <tr>
            <td>Believer</td>
            <td>Imagine Dragons</td>
            <td>980K</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Now Playing</h2>
      <audio controls>
        <source src="track.mp3" type="audio/mpeg">
        <source src="track.ogg" type="audio/ogg">
        Your browser does not support audio.
      </audio>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 TuneStream. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete music streaming portal">
  <titel>Hard Page 170</titel>
  <LINK REL="stylesheet" HREF="music.css">
  <SCRIPT SRC="music.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>TuneStream Music</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/playlists">Playlists</A></LI>
        <LI><A HREF="/library">Library</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="top-heading">
      <H2 ID="top-heading">Top Tracks</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Title</TH>
            <TH SCOPE="col">Artist</TH>
            <TH SCOPE="col">Plays</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Skyfall</TD>
            <TD>Adele</TD>
            <TD>1.2M</TD>
          </TR>
          <TR>
            <TD>Believer</TD>
            <TD>Imagine Dragons</TD>
            <TD>980K</TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Now Playing</H2>
      <AUDIO CONTROLS>
        <SOURCE SRC="track.mp3" TYPE="audio/mpeg">
        <SOURCE SRC="track.ogg" TYPE="audio/ogg">
        Your browser does not support audio.
      </AUDIO>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 TuneStream. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, AUDIO, SOURCE, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, SCOPE, CONTROLS, NAME, CONTENT, REL, HREF, DEFER, SRC, TYPE bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H171–H180) ──
   Hard: 45-50 mistakes per code
*/

// ── H171 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 171</title>
</head>
<body>
  <h1>Salon Appointment</h1>
  <section>
    <h2>Book a Service</h2>
    <form action="/salon" method="post">
      <label for="sname">Name:</label>
      <input type="text" id="sname" name="name" required placeholder="Your name">
      <label for="service">Service:</label>
      <select id="service" name="service">
        <option value="haircut">Haircut</option>
        <option value="facial">Facial</option>
        <option value="massage">Massage</option>
      </select>
      <label for="sdate">Date:</label>
      <input type="date" id="sdate" name="date" required>
      <button type="submit">Book Now</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 171</titel>
</head>
<BODY>
  <H1>Salon Appointment</H1>
  <SECTION>
    <H2>Book a Service</H2>
    <FORM ACTION="/salon" METHOD="post">
      <LABEL FOR="sname">Name:</LABEL>
      <INPUT TYPE="text" ID="sname" NAME="name" REQUIRED PLACEHOLDER="Your name">
      <LABEL FOR="service">Service:</LABEL>
      <SELECT ID="service" NAME="service">
        <OPTION VALUE="haircut">Haircut</OPTION>
        <OPTION VALUE="facial">Facial</OPTION>
        <OPTION VALUE="massage">Massage</OPTION>
      </SELECT>
      <LABEL FOR="sdate">Date:</LABEL>
      <INPUT TYPE="date" ID="sdate" NAME="date" REQUIRED>
      <BUTTON TYPE="submit">Book Now</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H172 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 172</title>
</head>
<body>
  <h1>Gaming Blog</h1>
  <article>
    <h2>Top Open-World Games of 2024</h2>
    <p>By <strong>Hamza Gamer</strong> on <time datetime="2024-08-22">August 22, 2024</time></p>
    <figure>
      <img src="game.jpg" alt="Open World Game" width="500" height="350">
      <figcaption>An expansive open world</figcaption>
    </figure>
    <p>Open-world games offer freedom to explore vast environments.</p>
    <blockquote cite="https://gamenews.com">
      <p>The best games let you write your own story.</p>
    </blockquote>
    <h3>Top Picks</h3>
    <ol>
      <li>Elden Ring</li>
      <li>Cyberpunk 2077</li>
      <li>The Witcher 3</li>
    </ol>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 172</titel>
</head>
<BODY>
  <H1>Gaming Blog</H1>
  <ARTICLE>
    <H2>Top Open-World Games of 2024</H2>
    <P>By <STRONG>Hamza Gamer</STRONG> on <TIME DATETIME="2024-08-22">August 22, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="game.jpg" ALT="Open World Game" WIDTH="500" HEIGHT="350">
      <FIGCAPTION>An expansive open world</FIGCAPTION>
    </FIGURE>
    <P>Open-world games offer freedom to explore vast environments.</P>
    <BLOCKQUOTE CITE="https://gamenews.com">
      <P>The best games let you write your own story.</P>
    </BLOCKQUOTE>
    <H3>Top Picks</H3>
    <OL>
      <LI>Elden Ring</LI>
      <LI>Cyberpunk 2077</LI>
      <LI>The Witcher 3</LI>
    </OL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, OL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H173 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 173</title>
</head>
<body>
  <h1>Flight Schedule</h1>
  <section>
    <h2>Departures</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Flight</th>
          <th scope="col">Destination</th>
          <th scope="col">Time</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PK-301</td>
          <td>Dubai</td>
          <td>08:30</td>
          <td>On Time</td>
        </tr>
        <tr>
          <td>PK-402</td>
          <td>London</td>
          <td>11:45</td>
          <td>Delayed</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 173</titel>
</head>
<BODY>
  <H1>Flight Schedule</H1>
  <SECTION>
    <H2>Departures</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Flight</TH>
          <TH SCOPE="col">Destination</TH>
          <TH SCOPE="col">Time</TH>
          <TH SCOPE="col">Status</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>PK-301</TD>
          <TD>Dubai</TD>
          <TD>08:30</TD>
          <TD>On Time</TD>
        </TR>
        <TR>
          <TD>PK-402</TD>
          <TD>London</TD>
          <TD>11:45</TD>
          <TD>Delayed</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H174 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 174</title>
</head>
<body>
  <h1>Complaint Form</h1>
  <section>
    <h2>Register a Complaint</h2>
    <form action="/complaint" method="post">
      <label for="cname">Name:</label>
      <input type="text" id="cname" name="name" required>
      <label for="cdept">Department:</label>
      <select id="cdept" name="dept">
        <option value="billing">Billing</option>
        <option value="service">Service</option>
        <option value="product">Product</option>
      </select>
      <label for="cdetails">Details:</label>
      <textarea id="cdetails" name="details" rows="6" cols="40" required></textarea>
      <button type="submit">Submit Complaint</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 174</titel>
</head>
<BODY>
  <H1>Complaint Form</H1>
  <SECTION>
    <H2>Register a Complaint</H2>
    <FORM ACTION="/complaint" METHOD="post">
      <LABEL FOR="cname">Name:</LABEL>
      <INPUT TYPE="text" ID="cname" NAME="name" REQUIRED>
      <LABEL FOR="cdept">Department:</LABEL>
      <SELECT ID="cdept" NAME="dept">
        <OPTION VALUE="billing">Billing</OPTION>
        <OPTION VALUE="service">Service</OPTION>
        <OPTION VALUE="product">Product</OPTION>
      </SELECT>
      <LABEL FOR="cdetails">Details:</LABEL>
      <TEXTAREA ID="cdetails" NAME="details" ROWS="6" COLS="40" REQUIRED></TEXTAREA>
      <BUTTON TYPE="submit">Submit Complaint</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, ROWS, COLS, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H175 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 175</title>
  <link rel="stylesheet" href="shoes.css">
</head>
<body>
  <header>
    <h1>Step Up Shoes</h1>
    <nav>
      <ul>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/sale">Sale</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>New Collection</h2>
      <article class="shoe">
        <img src="sneaker.jpg" alt="Sneakers" width="250" height="180">
        <h3>Running Sneakers</h3>
        <p>Rs. 6,500</p>
      </article>
      <article class="shoe">
        <img src="boots.jpg" alt="Boots" width="250" height="180">
        <h3>Leather Boots</h3>
        <p>Rs. 9,000</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Step Up Shoes</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 175</titel>
  <LINK REL="stylesheet" HREF="shoes.css">
</head>
<BODY>
  <HEADER>
    <H1>Step Up Shoes</H1>
    <NAV>
      <UL>
        <LI><A HREF="/men">Men</A></LI>
        <LI><A HREF="/women">Women</A></LI>
        <LI><A HREF="/sale">Sale</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>New Collection</H2>
      <ARTICLE CLASS="shoe">
        <IMG SRC="sneaker.jpg" ALT="Sneakers" WIDTH="250" HEIGHT="180">
        <H3>Running Sneakers</H3>
        <P>Rs. 6,500</P>
      </ARTICLE>
      <ARTICLE CLASS="shoe">
        <IMG SRC="boots.jpg" ALT="Boots" WIDTH="250" HEIGHT="180">
        <H3>Leather Boots</H3>
        <P>Rs. 9,000</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Step Up Shoes</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H176 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 176</title>
</head>
<body>
  <h1>Destination Guide</h1>
  <section>
    <h2>Top Destinations</h2>
    <div class="dest-grid">
      <figure>
        <img src="paris.jpg" alt="Paris" width="250" height="200">
        <figcaption>Paris, France</figcaption>
      </figure>
      <figure>
        <img src="tokyo.jpg" alt="Tokyo" width="250" height="200">
        <figcaption>Tokyo, Japan</figcaption>
      </figure>
      <figure>
        <img src="dubai.jpg" alt="Dubai" width="250" height="200">
        <figcaption>Dubai, UAE</figcaption>
      </figure>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 176</titel>
</head>
<BODY>
  <H1>Destination Guide</H1>
  <SECTION>
    <H2>Top Destinations</H2>
    <DIV CLASS="dest-grid">
      <FIGURE>
        <IMG SRC="paris.jpg" ALT="Paris" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>Paris, France</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="tokyo.jpg" ALT="Tokyo" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>Tokyo, Japan</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="dubai.jpg" ALT="Dubai" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>Dubai, UAE</FIGCAPTION>
      </FIGURE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, FIGURE, FIGCAPTION, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H177 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 177</title>
</head>
<body>
  <h1>Membership Signup</h1>
  <form action="/membership" method="post">
    <fieldset>
      <legend>Membership Type</legend>
      <label><input type="radio" name="type" value="basic"> Basic</label>
      <label><input type="radio" name="type" value="premium"> Premium</label>
      <label><input type="radio" name="type" value="vip"> VIP</label>
    </fieldset>
    <fieldset>
      <legend>Interests</legend>
      <label><input type="checkbox" name="interest" value="gym"> Gym</label>
      <label><input type="checkbox" name="interest" value="pool"> Pool</label>
      <label><input type="checkbox" name="interest" value="spa"> Spa</label>
    </fieldset>
    <button type="submit">Join Now</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 177</titel>
</head>
<BODY>
  <H1>Membership Signup</H1>
  <FORM ACTION="/membership" METHOD="post">
    <FIELDSET>
      <LEGEND>Membership Type</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="type" VALUE="basic"> Basic</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="type" VALUE="premium"> Premium</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="type" VALUE="vip"> VIP</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Interests</LEGEND>
      <LABEL><INPUT TYPE="checkbox" NAME="interest" VALUE="gym"> Gym</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="interest" VALUE="pool"> Pool</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="interest" VALUE="spa"> Spa</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Join Now</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H178 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 178</title>
</head>
<body>
  <h1>Webinar Replay</h1>
  <section>
    <h2>Digital Marketing Webinar</h2>
    <video width="800" height="450" controls poster="webinar-thumb.jpg">
      <source src="webinar.mp4" type="video/mp4">
      <source src="webinar.webm" type="video/webm">
      <track kind="subtitles" src="webinar-en.vtt" srclang="en" label="English">
      Your browser does not support video.
    </video>
    <h3>Agenda</h3>
    <ul>
      <li>SEO basics</li>
      <li>Social media strategy</li>
      <li>Email campaigns</li>
    </ul>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 178</titel>
</head>
<BODY>
  <H1>Webinar Replay</H1>
  <SECTION>
    <H2>Digital Marketing Webinar</H2>
    <VIDEO WIDTH="800" HEIGHT="450" CONTROLS POSTER="webinar-thumb.jpg">
      <SOURCE SRC="webinar.mp4" TYPE="video/mp4">
      <SOURCE SRC="webinar.webm" TYPE="video/webm">
      <TRACK KIND="subtitles" SRC="webinar-en.vtt" SRCLANG="en" LABEL="English">
      Your browser does not support video.
    </VIDEO>
    <H3>Agenda</H3>
    <UL>
      <LI>SEO basics</LI>
      <LI>Social media strategy</LI>
      <LI>Email campaigns</LI>
    </UL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "VIDEO, SOURCE, TRACK, SECTION, UL, LI sab uppercase. WIDTH, HEIGHT, CONTROLS, POSTER, SRC, TYPE, KIND, SRCLANG, LABEL attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H179 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 179</title>
</head>
<body>
  <h1>Download Manager</h1>
  <section>
    <h2>Active Downloads</h2>
    <div class="download">
      <span>movie.mp4:</span>
      <progress value="60" max="100"></progress>
      <span>60%</span>
    </div>
    <div class="download">
      <span>game.zip:</span>
      <progress value="25" max="100"></progress>
      <span>25%</span>
    </div>
    <div class="download">
      <span>album.zip:</span>
      <meter value="0.9" min="0" max="1">90%</meter>
    </div>
    <div class="download">
      <span>book.pdf:</span>
      <meter value="0.5" min="0" max="1">50%</meter>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 179</titel>
</head>
<BODY>
  <H1>Download Manager</H1>
  <SECTION>
    <H2>Active Downloads</H2>
    <DIV CLASS="download">
      <SPAN>movie.mp4:</SPAN>
      <PROGRESS VALUE="60" MAX="100"></PROGRESS>
      <SPAN>60%</SPAN>
    </DIV>
    <DIV CLASS="download">
      <SPAN>game.zip:</SPAN>
      <PROGRESS VALUE="25" MAX="100"></PROGRESS>
      <SPAN>25%</SPAN>
    </DIV>
    <DIV CLASS="download">
      <SPAN>album.zip:</SPAN>
      <METER VALUE="0.9" MIN="0" MAX="1">90%</METER>
    </DIV>
    <DIV CLASS="download">
      <SPAN>book.pdf:</SPAN>
      <METER VALUE="0.5" MIN="0" MAX="1">50%</METER>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, SPAN, PROGRESS, METER, SECTION sab uppercase. CLASS, VALUE, MAX, MIN attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H180 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete online pharmacy portal">
  <title>Hard Page 180</title>
  <link rel="stylesheet" href="pharmacy.css">
  <script src="pharmacy.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>MediQuick Pharmacy</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/medicines">Medicines</a></li>
        <li><a href="/orders">Orders</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="meds-heading">
      <h2 id="meds-heading">Available Medicines</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Medicine</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paracetamol</td>
            <td>Rs. 50</td>
            <td>In Stock</td>
          </tr>
          <tr>
            <td>Vitamin C</td>
            <td>Rs. 250</td>
            <td>Low Stock</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Upload Prescription</h2>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="presc">Prescription:</label>
        <input type="file" id="presc" name="prescription" accept="image/*" required>
        <button type="submit" aria-label="Upload prescription">Upload</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 MediQuick. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete online pharmacy portal">
  <titel>Hard Page 180</titel>
  <LINK REL="stylesheet" HREF="pharmacy.css">
  <SCRIPT SRC="pharmacy.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>MediQuick Pharmacy</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/medicines">Medicines</A></LI>
        <LI><A HREF="/orders">Orders</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="meds-heading">
      <H2 ID="meds-heading">Available Medicines</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Medicine</TH>
            <TH SCOPE="col">Price</TH>
            <TH SCOPE="col">Stock</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Paracetamol</TD>
            <TD>Rs. 50</TD>
            <TD>In Stock</TD>
          </TR>
          <TR>
            <TD>Vitamin C</TD>
            <TD>Rs. 250</TD>
            <TD>Low Stock</TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Upload Prescription</H2>
      <FORM ACTION="/upload" METHOD="post" ENCTYPE="multipart/form-data">
        <LABEL FOR="presc">Prescription:</LABEL>
        <INPUT TYPE="file" ID="presc" NAME="prescription" ACCEPT="image/*" REQUIRED>
        <BUTTON TYPE="submit" ARIA-LABEL="Upload prescription">Upload</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 MediQuick. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, FORM, LABEL, INPUT, BUTTON, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, SCOPE, ENCTYPE, ACCEPT, NAME, CONTENT, REL, HREF, DEFER, SRC bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H181–H190) ──
   Hard: 45-50 mistakes per code
*/

// ── H181 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 181</title>
</head>
<body>
  <h1>Cinema Booking</h1>
  <section>
    <h2>Book Movie Tickets</h2>
    <form action="/cinema" method="post">
      <label for="movie">Movie:</label>
      <select id="movie" name="movie">
        <option value="action">Action Movie</option>
        <option value="comedy">Comedy Movie</option>
        <option value="drama">Drama Movie</option>
      </select>
      <label for="seats">Seats:</label>
      <input type="number" id="seats" name="seats" min="1" max="8" value="2">
      <label for="show">Show Time:</label>
      <input type="time" id="show" name="show" required>
      <button type="submit">Book Tickets</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 181</titel>
</head>
<BODY>
  <H1>Cinema Booking</H1>
  <SECTION>
    <H2>Book Movie Tickets</H2>
    <FORM ACTION="/cinema" METHOD="post">
      <LABEL FOR="movie">Movie:</LABEL>
      <SELECT ID="movie" NAME="movie">
        <OPTION VALUE="action">Action Movie</OPTION>
        <OPTION VALUE="comedy">Comedy Movie</OPTION>
        <OPTION VALUE="drama">Drama Movie</OPTION>
      </SELECT>
      <LABEL FOR="seats">Seats:</LABEL>
      <INPUT TYPE="number" ID="seats" NAME="seats" MIN="1" MAX="8" VALUE="2">
      <LABEL FOR="show">Show Time:</LABEL>
      <INPUT TYPE="time" ID="show" NAME="show" REQUIRED>
      <BUTTON TYPE="submit">Book Tickets</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, LABEL, SELECT, OPTION, INPUT, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, VALUE, MIN, MAX, REQUIRED bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H182 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 182</title>
</head>
<body>
  <h1>Finance Blog</h1>
  <article>
    <h2>How to Start Investing in 2024</h2>
    <p>By <strong>Adeel Saeed</strong> on <time datetime="2024-02-14">February 14, 2024</time></p>
    <figure>
      <img src="invest.jpg" alt="Investing Chart" width="500" height="350">
      <figcaption>Investment growth over time</figcaption>
    </figure>
    <p>Investing early helps your money grow through compound interest.</p>
    <blockquote cite="https://finance.com">
      <p>The best time to invest was yesterday. The next best is today.</p>
    </blockquote>
    <h3>Tips</h3>
    <ul>
      <li>Start small</li>
      <li>Diversify</li>
      <li>Stay consistent</li>
    </ul>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 182</titel>
</head>
<BODY>
  <H1>Finance Blog</H1>
  <ARTICLE>
    <H2>How to Start Investing in 2024</H2>
    <P>By <STRONG>Adeel Saeed</STRONG> on <TIME DATETIME="2024-02-14">February 14, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="invest.jpg" ALT="Investing Chart" WIDTH="500" HEIGHT="350">
      <FIGCAPTION>Investment growth over time</FIGCAPTION>
    </FIGURE>
    <P>Investing early helps your money grow through compound interest.</P>
    <BLOCKQUOTE CITE="https://finance.com">
      <P>The best time to invest was yesterday. The next best is today.</P>
    </BLOCKQUOTE>
    <H3>Tips</H3>
    <UL>
      <LI>Start small</LI>
      <LI>Diversify</LI>
      <LI>Stay consistent</LI>
    </UL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, UL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H183 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 183</title>
</head>
<body>
  <h1>Class Schedule</h1>
  <section>
    <h2>Weekly Timetable</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Monday</th>
          <th scope="col">Tuesday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9 AM</td>
          <td>Math</td>
          <td>Science</td>
        </tr>
        <tr>
          <td>10 AM</td>
          <td>English</td>
          <td>History</td>
        </tr>
        <tr>
          <td>11 AM</td>
          <td>Physics</td>
          <td>Computer</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 183</titel>
</head>
<BODY>
  <H1>Class Schedule</H1>
  <SECTION>
    <H2>Weekly Timetable</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Time</TH>
          <TH SCOPE="col">Monday</TH>
          <TH SCOPE="col">Tuesday</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>9 AM</TD>
          <TD>Math</TD>
          <TD>Science</TD>
        </TR>
        <TR>
          <TD>10 AM</TD>
          <TD>English</TD>
          <TD>History</TD>
        </TR>
        <TR>
          <TD>11 AM</TD>
          <TD>Physics</TD>
          <TD>Computer</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H184 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 184</title>
</head>
<body>
  <h1>Donation Form</h1>
  <section>
    <h2>Donate to Charity</h2>
    <form action="/donate" method="post">
      <label for="dname">Donor Name:</label>
      <input type="text" id="dname" name="name" required>
      <label for="damount">Amount:</label>
      <input type="number" id="damount" name="amount" min="100" required>
      <label for="dcause">Cause:</label>
      <select id="dcause" name="cause">
        <option value="education">Education</option>
        <option value="health">Health</option>
        <option value="environment">Environment</option>
      </select>
      <label for="dmsg">Message:</label>
      <textarea id="dmsg" name="message" rows="4" cols="40"></textarea>
      <button type="submit">Donate</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 184</titel>
</head>
<BODY>
  <H1>Donation Form</H1>
  <SECTION>
    <H2>Donate to Charity</H2>
    <FORM ACTION="/donate" METHOD="post">
      <LABEL FOR="dname">Donor Name:</LABEL>
      <INPUT TYPE="text" ID="dname" NAME="name" REQUIRED>
      <LABEL FOR="damount">Amount:</LABEL>
      <INPUT TYPE="number" ID="damount" NAME="amount" MIN="100" REQUIRED>
      <LABEL FOR="dcause">Cause:</LABEL>
      <SELECT ID="dcause" NAME="cause">
        <OPTION VALUE="education">Education</OPTION>
        <OPTION VALUE="health">Health</OPTION>
        <OPTION VALUE="environment">Environment</OPTION>
      </SELECT>
      <LABEL FOR="dmsg">Message:</LABEL>
      <TEXTAREA ID="dmsg" NAME="message" ROWS="4" COLS="40"></TEXTAREA>
      <BUTTON TYPE="submit">Donate</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, MIN, ROWS, COLS, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H185 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 185</title>
  <link rel="stylesheet" href="furniture.css">
</head>
<body>
  <header>
    <h1>Comfort Furniture</h1>
    <nav>
      <ul>
        <li><a href="/sofas">Sofas</a></li>
        <li><a href="/beds">Beds</a></li>
        <li><a href="/tables">Tables</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Best Sellers</h2>
      <article class="furniture">
        <img src="sofa.jpg" alt="Sofa" width="250" height="180">
        <h3>3-Seater Sofa</h3>
        <p>Rs. 45,000</p>
      </article>
      <article class="furniture">
        <img src="bed.jpg" alt="Bed" width="250" height="180">
        <h3>King Size Bed</h3>
        <p>Rs. 65,000</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Comfort Furniture</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 185</titel>
  <LINK REL="stylesheet" HREF="furniture.css">
</head>
<BODY>
  <HEADER>
    <H1>Comfort Furniture</H1>
    <NAV>
      <UL>
        <LI><A HREF="/sofas">Sofas</A></LI>
        <LI><A HREF="/beds">Beds</A></LI>
        <LI><A HREF="/tables">Tables</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Best Sellers</H2>
      <ARTICLE CLASS="furniture">
        <IMG SRC="sofa.jpg" ALT="Sofa" WIDTH="250" HEIGHT="180">
        <H3>3-Seater Sofa</H3>
        <P>Rs. 45,000</P>
      </ARTICLE>
      <ARTICLE CLASS="furniture">
        <IMG SRC="bed.jpg" ALT="Bed" WIDTH="250" HEIGHT="180">
        <H3>King Size Bed</H3>
        <P>Rs. 65,000</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Comfort Furniture</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H186 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 186</title>
</head>
<body>
  <h1>Car Showroom</h1>
  <section>
    <h2>Featured Cars</h2>
    <div class="car-grid">
      <figure>
        <img src="sedan.jpg" alt="Sedan" width="250" height="180">
        <figcaption>Luxury Sedan</figcaption>
      </figure>
      <figure>
        <img src="suv.jpg" alt="SUV" width="250" height="180">
        <figcaption>Family SUV</figcaption>
      </figure>
      <figure>
        <img src="sports.jpg" alt="Sports Car" width="250" height="180">
        <figcaption>Sports Coupe</figcaption>
      </figure>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 186</titel>
</head>
<BODY>
  <H1>Car Showroom</H1>
  <SECTION>
    <H2>Featured Cars</H2>
    <DIV CLASS="car-grid">
      <FIGURE>
        <IMG SRC="sedan.jpg" ALT="Sedan" WIDTH="250" HEIGHT="180">
        <FIGCAPTION>Luxury Sedan</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="suv.jpg" ALT="SUV" WIDTH="250" HEIGHT="180">
        <FIGCAPTION>Family SUV</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="sports.jpg" ALT="Sports Car" WIDTH="250" HEIGHT="180">
        <FIGCAPTION>Sports Coupe</FIGCAPTION>
      </FIGURE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, FIGURE, FIGCAPTION, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H187 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 187</title>
</head>
<body>
  <h1>Workshop Registration</h1>
  <form action="/workshop" method="post">
    <fieldset>
      <legend>Workshop Topic</legend>
      <label><input type="radio" name="topic" value="design"> Web Design</label>
      <label><input type="radio" name="topic" value="coding"> Coding</label>
      <label><input type="radio" name="topic" value="marketing"> Marketing</label>
    </fieldset>
    <fieldset>
      <legend>Session Days</legend>
      <label><input type="checkbox" name="day" value="sat"> Saturday</label>
      <label><input type="checkbox" name="day" value="sun"> Sunday</label>
    </fieldset>
    <button type="submit">Register</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 187</titel>
</head>
<BODY>
  <H1>Workshop Registration</H1>
  <FORM ACTION="/workshop" METHOD="post">
    <FIELDSET>
      <LEGEND>Workshop Topic</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="topic" VALUE="design"> Web Design</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="topic" VALUE="coding"> Coding</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="topic" VALUE="marketing"> Marketing</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Session Days</LEGEND>
      <LABEL><INPUT TYPE="checkbox" NAME="day" VALUE="sat"> Saturday</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="day" VALUE="sun"> Sunday</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Register</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H188 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 188</title>
</head>
<body>
  <h1>Training Video</h1>
  <section>
    <h2>Employee Onboarding</h2>
    <video width="720" height="405" controls poster="onboard-thumb.jpg">
      <source src="onboarding.mp4" type="video/mp4">
      <source src="onboarding.webm" type="video/webm">
      <track kind="captions" src="onboarding-en.vtt" srclang="en" label="English">
      Your browser does not support video.
    </video>
    <h3>Modules</h3>
    <ol>
      <li>Company introduction</li>
      <li>Tools and software</li>
      <li>Team policies</li>
    </ol>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 188</titel>
</head>
<BODY>
  <H1>Training Video</H1>
  <SECTION>
    <H2>Employee Onboarding</H2>
    <VIDEO WIDTH="720" HEIGHT="405" CONTROLS POSTER="onboard-thumb.jpg">
      <SOURCE SRC="onboarding.mp4" TYPE="video/mp4">
      <SOURCE SRC="onboarding.webm" TYPE="video/webm">
      <TRACK KIND="captions" SRC="onboarding-en.vtt" SRCLANG="en" LABEL="English">
      Your browser does not support video.
    </VIDEO>
    <H3>Modules</H3>
    <OL>
      <LI>Company introduction</LI>
      <LI>Tools and software</LI>
      <LI>Team policies</LI>
    </OL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "VIDEO, SOURCE, TRACK, SECTION, OL, LI sab uppercase. WIDTH, HEIGHT, CONTROLS, POSTER, SRC, TYPE, KIND, SRCLANG, LABEL attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H189 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 189</title>
</head>
<body>
  <h1>Project Funding</h1>
  <section>
    <h2>Campaign Progress</h2>
    <div class="campaign">
      <span>Solar Project:</span>
      <progress value="75" max="100"></progress>
      <span>75%</span>
    </div>
    <div class="campaign">
      <span>Clean Water:</span>
      <progress value="50" max="100"></progress>
      <span>50%</span>
    </div>
    <div class="campaign">
      <span>Education Fund:</span>
      <meter value="0.4" min="0" max="1">40%</meter>
    </div>
    <div class="campaign">
      <span>Health Drive:</span>
      <meter value="0.95" min="0" max="1">95%</meter>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 189</titel>
</head>
<BODY>
  <H1>Project Funding</H1>
  <SECTION>
    <H2>Campaign Progress</H2>
    <DIV CLASS="campaign">
      <SPAN>Solar Project:</SPAN>
      <PROGRESS VALUE="75" MAX="100"></PROGRESS>
      <SPAN>75%</SPAN>
    </DIV>
    <DIV CLASS="campaign">
      <SPAN>Clean Water:</SPAN>
      <PROGRESS VALUE="50" MAX="100"></PROGRESS>
      <SPAN>50%</SPAN>
    </DIV>
    <DIV CLASS="campaign">
      <SPAN>Education Fund:</SPAN>
      <METER VALUE="0.4" MIN="0" MAX="1">40%</METER>
    </DIV>
    <DIV CLASS="campaign">
      <SPAN>Health Drive:</SPAN>
      <METER VALUE="0.95" MIN="0" MAX="1">95%</METER>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, SPAN, PROGRESS, METER, SECTION sab uppercase. CLASS, VALUE, MAX, MIN attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H190 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete freelance marketplace portal">
  <title>Hard Page 190</title>
  <link rel="stylesheet" href="freelance.css">
  <script src="freelance.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>WorkHub Freelance</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/jobs">Find Jobs</a></li>
        <li><a href="/post">Post a Job</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="jobs-heading">
      <h2 id="jobs-heading">Latest Jobs</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Budget</th>
            <th scope="col">Bids</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Logo Design</td>
            <td>Rs. 5,000</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Website Build</td>
            <td>Rs. 50,000</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Post a Job</h2>
      <form action="/post-job" method="post">
        <label for="jtitle">Job Title:</label>
        <input type="text" id="jtitle" name="title" required>
        <label for="jbudget">Budget:</label>
        <input type="number" id="jbudget" name="budget" min="500" required>
        <button type="submit" aria-label="Post the job">Post Job</button>
      </form>
    </section>
  </main>
  <footer role="contentinfo">
    <small>&copy; 2024 WorkHub. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Complete freelance marketplace portal">
  <titel>Hard Page 190</titel>
  <LINK REL="stylesheet" HREF="freelance.css">
  <SCRIPT SRC="freelance.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>WorkHub Freelance</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/jobs">Find Jobs</A></LI>
        <LI><A HREF="/post">Post a Job</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="jobs-heading">
      <H2 ID="jobs-heading">Latest Jobs</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Title</TH>
            <TH SCOPE="col">Budget</TH>
            <TH SCOPE="col">Bids</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Logo Design</TD>
            <TD>Rs. 5,000</TD>
            <TD>12</TD>
          </TR>
          <TR>
            <TD>Website Build</TD>
            <TD>Rs. 50,000</TD>
            <TD>8</TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Post a Job</H2>
      <FORM ACTION="/post-job" METHOD="post">
        <LABEL FOR="jtitle">Job Title:</LABEL>
        <INPUT TYPE="text" ID="jtitle" NAME="title" REQUIRED>
        <LABEL FOR="jbudget">Budget:</LABEL>
        <INPUT TYPE="number" ID="jbudget" NAME="budget" MIN="500" REQUIRED>
        <BUTTON TYPE="submit" ARIA-LABEL="Post the job">Post Job</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 WorkHub. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, FORM, LABEL, INPUT, BUTTON, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, SCOPE, NAME, CONTENT, REL, HREF, DEFER, SRC, MIN bhi. 'Charset', 'titel' fix karo."
},

/* ── Paragraph Mistakes — Hard HTML Data (H191–H200) ──
   Hard: 45-50 mistakes per code
*/

// ── H191 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 191</title>
</head>
<body>
  <h1>Spa Booking</h1>
  <section>
    <h2>Reserve a Session</h2>
    <form action="/spa" method="post">
      <label for="sname">Name:</label>
      <input type="text" id="sname" name="name" required placeholder="Your name">
      <label for="treatment">Treatment:</label>
      <select id="treatment" name="treatment">
        <option value="massage">Massage</option>
        <option value="facial">Facial</option>
        <option value="sauna">Sauna</option>
      </select>
      <label for="sdate">Date:</label>
      <input type="date" id="sdate" name="date" required>
      <button type="submit">Book Session</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 191</titel>
</head>
<BODY>
  <H1>Spa Booking</H1>
  <SECTION>
    <H2>Reserve a Session</H2>
    <FORM ACTION="/spa" METHOD="post">
      <LABEL FOR="sname">Name:</LABEL>
      <INPUT TYPE="text" ID="sname" NAME="name" REQUIRED PLACEHOLDER="Your name">
      <LABEL FOR="treatment">Treatment:</LABEL>
      <SELECT ID="treatment" NAME="treatment">
        <OPTION VALUE="massage">Massage</OPTION>
        <OPTION VALUE="facial">Facial</OPTION>
        <OPTION VALUE="sauna">Sauna</OPTION>
      </SELECT>
      <LABEL FOR="sdate">Date:</LABEL>
      <INPUT TYPE="date" ID="sdate" NAME="date" REQUIRED>
      <BUTTON TYPE="submit">Book Session</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, PLACEHOLDER, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H192 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 192</title>
</head>
<body>
  <h1>Photography Blog</h1>
  <article>
    <h2>Mastering Golden Hour Photography</h2>
    <p>By <strong>Zara Photographer</strong> on <time datetime="2024-07-19">July 19, 2024</time></p>
    <figure>
      <img src="golden.jpg" alt="Golden Hour" width="500" height="350">
      <figcaption>A perfect golden hour shot</figcaption>
    </figure>
    <p>Golden hour offers soft, warm light ideal for portraits.</p>
    <blockquote cite="https://photoblog.com">
      <p>Light makes photography. Embrace it.</p>
    </blockquote>
    <h3>Tips</h3>
    <ul>
      <li>Shoot during sunrise or sunset</li>
      <li>Use a low aperture</li>
      <li>Backlight your subject</li>
    </ul>
  </article>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 192</titel>
</head>
<BODY>
  <H1>Photography Blog</H1>
  <ARTICLE>
    <H2>Mastering Golden Hour Photography</H2>
    <P>By <STRONG>Zara Photographer</STRONG> on <TIME DATETIME="2024-07-19">July 19, 2024</TIME></P>
    <FIGURE>
      <IMG SRC="golden.jpg" ALT="Golden Hour" WIDTH="500" HEIGHT="350">
      <FIGCAPTION>A perfect golden hour shot</FIGCAPTION>
    </FIGURE>
    <P>Golden hour offers soft, warm light ideal for portraits.</P>
    <BLOCKQUOTE CITE="https://photoblog.com">
      <P>Light makes photography. Embrace it.</P>
    </BLOCKQUOTE>
    <H3>Tips</H3>
    <UL>
      <LI>Shoot during sunrise or sunset</LI>
      <LI>Use a low aperture</LI>
      <LI>Backlight your subject</LI>
    </UL>
  </ARTICLE>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "ARTICLE, STRONG, TIME, FIGURE, FIGCAPTION, IMG, BLOCKQUOTE, UL, LI sab uppercase. DATETIME, SRC, ALT, WIDTH, HEIGHT, CITE attributes bhi. 'Charset', 'titel' fix karo."
},

// ── H193 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 193</title>
</head>
<body>
  <h1>Currency Exchange</h1>
  <section>
    <h2>Today's Rates</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">Buy</th>
          <th scope="col">Sell</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>USD</td>
          <td>278</td>
          <td>280</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>300</td>
          <td>303</td>
        </tr>
        <tr>
          <td>GBP</td>
          <td>350</td>
          <td>354</td>
        </tr>
      </tbody>
    </table>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 193</titel>
</head>
<BODY>
  <H1>Currency Exchange</H1>
  <SECTION>
    <H2>Today's Rates</H2>
    <TABLE BORDER="1" CELLPADDING="8" CELLSPACING="0">
      <THEAD>
        <TR>
          <TH SCOPE="col">Currency</TH>
          <TH SCOPE="col">Buy</TH>
          <TH SCOPE="col">Sell</TH>
        </TR>
      </THEAD>
      <TBODY>
        <TR>
          <TD>USD</TD>
          <TD>278</TD>
          <TD>280</TD>
        </TR>
        <TR>
          <TD>EUR</TD>
          <TD>300</TD>
          <TD>303</TD>
        </TR>
        <TR>
          <TD>GBP</TD>
          <TD>350</TD>
          <TD>354</TD>
        </TR>
      </TBODY>
    </TABLE>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "TABLE, THEAD, TBODY, TR, TH, TD sab uppercase. BORDER, CELLPADDING, CELLSPACING, SCOPE attributes bhi. 'Charset', 'titel', HTML, BODY, SECTION fix karo."
},

// ── H194 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 194</title>
</head>
<body>
  <h1>Volunteer Signup</h1>
  <section>
    <h2>Join as Volunteer</h2>
    <form action="/volunteer" method="post">
      <label for="vname">Name:</label>
      <input type="text" id="vname" name="name" required>
      <label for="varea">Area of Interest:</label>
      <select id="varea" name="area">
        <option value="teaching">Teaching</option>
        <option value="cleanup">Cleanup Drives</option>
        <option value="fundraising">Fundraising</option>
      </select>
      <label for="vavail">Availability:</label>
      <textarea id="vavail" name="availability" rows="4" cols="40"></textarea>
      <button type="submit">Sign Up</button>
    </form>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 194</titel>
</head>
<BODY>
  <H1>Volunteer Signup</H1>
  <SECTION>
    <H2>Join as Volunteer</H2>
    <FORM ACTION="/volunteer" METHOD="post">
      <LABEL FOR="vname">Name:</LABEL>
      <INPUT TYPE="text" ID="vname" NAME="name" REQUIRED>
      <LABEL FOR="varea">Area of Interest:</LABEL>
      <SELECT ID="varea" NAME="area">
        <OPTION VALUE="teaching">Teaching</OPTION>
        <OPTION VALUE="cleanup">Cleanup Drives</OPTION>
        <OPTION VALUE="fundraising">Fundraising</OPTION>
      </SELECT>
      <LABEL FOR="vavail">Availability:</LABEL>
      <TEXTAREA ID="vavail" NAME="availability" ROWS="4" COLS="40"></TEXTAREA>
      <BUTTON TYPE="submit">Sign Up</BUTTON>
    </FORM>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "FORM, LABEL, INPUT, SELECT, OPTION, TEXTAREA, BUTTON, SECTION sab uppercase. TYPE, ID, NAME, REQUIRED, ROWS, COLS, VALUE bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H195 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hard Page 195</title>
  <link rel="stylesheet" href="books.css">
</head>
<body>
  <header>
    <h1>Book Haven</h1>
    <nav>
      <ul>
        <li><a href="/fiction">Fiction</a></li>
        <li><a href="/nonfiction">Non-Fiction</a></li>
        <li><a href="/kids">Kids</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Bestsellers</h2>
      <article class="book">
        <img src="novel.jpg" alt="Novel" width="180" height="250">
        <h3>The Silent Patient</h3>
        <p>Rs. 1,400</p>
      </article>
      <article class="book">
        <img src="biography.jpg" alt="Biography" width="180" height="250">
        <h3>Steve Jobs</h3>
        <p>Rs. 1,800</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Book Haven</p>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <titel>Hard Page 195</titel>
  <LINK REL="stylesheet" HREF="books.css">
</head>
<BODY>
  <HEADER>
    <H1>Book Haven</H1>
    <NAV>
      <UL>
        <LI><A HREF="/fiction">Fiction</A></LI>
        <LI><A HREF="/nonfiction">Non-Fiction</A></LI>
        <LI><A HREF="/kids">Kids</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN>
    <SECTION>
      <H2>Bestsellers</H2>
      <ARTICLE CLASS="book">
        <IMG SRC="novel.jpg" ALT="Novel" WIDTH="180" HEIGHT="250">
        <H3>The Silent Patient</H3>
        <P>Rs. 1,400</P>
      </ARTICLE>
      <ARTICLE CLASS="book">
        <IMG SRC="biography.jpg" ALT="Biography" WIDTH="180" HEIGHT="250">
        <H3>Steve Jobs</H3>
        <P>Rs. 1,800</P>
      </ARTICLE>
    </SECTION>
  </MAIN>
  <FOOTER>
    <P>&copy; 2024 Book Haven</P>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 47,
hint: "HEADER, NAV, MAIN, SECTION, ARTICLE, FOOTER, IMG, UL, LI, A sab uppercase. META, LINK ke NAME, CONTENT, REL, HREF, CLASS, SRC, ALT, WIDTH, HEIGHT bhi. 'Charset', 'titel' fix karo."
},

// ── H196 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 196</title>
</head>
<body>
  <h1>Wedding Gallery</h1>
  <section>
    <h2>Memorable Moments</h2>
    <div class="wedding-grid">
      <figure>
        <img src="ceremony.jpg" alt="Ceremony" width="250" height="200">
        <figcaption>The Ceremony</figcaption>
      </figure>
      <figure>
        <img src="reception.jpg" alt="Reception" width="250" height="200">
        <figcaption>Grand Reception</figcaption>
      </figure>
      <figure>
        <img src="couple.jpg" alt="Couple" width="250" height="200">
        <figcaption>Happy Couple</figcaption>
      </figure>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 196</titel>
</head>
<BODY>
  <H1>Wedding Gallery</H1>
  <SECTION>
    <H2>Memorable Moments</H2>
    <DIV CLASS="wedding-grid">
      <FIGURE>
        <IMG SRC="ceremony.jpg" ALT="Ceremony" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>The Ceremony</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="reception.jpg" ALT="Reception" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>Grand Reception</FIGCAPTION>
      </FIGURE>
      <FIGURE>
        <IMG SRC="couple.jpg" ALT="Couple" WIDTH="250" HEIGHT="200">
        <FIGCAPTION>Happy Couple</FIGCAPTION>
      </FIGURE>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "DIV, FIGURE, FIGCAPTION, IMG, SECTION sab uppercase. CLASS, SRC, ALT, WIDTH, HEIGHT attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H197 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 197</title>
</head>
<body>
  <h1>Tournament Registration</h1>
  <form action="/tournament" method="post">
    <fieldset>
      <legend>Game</legend>
      <label><input type="radio" name="game" value="football"> Football</label>
      <label><input type="radio" name="game" value="cricket"> Cricket</label>
      <label><input type="radio" name="game" value="tennis"> Tennis</label>
    </fieldset>
    <fieldset>
      <legend>Categories</legend>
      <label><input type="checkbox" name="cat" value="junior"> Junior</label>
      <label><input type="checkbox" name="cat" value="senior"> Senior</label>
    </fieldset>
    <button type="submit">Register Team</button>
  </form>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 197</titel>
</head>
<BODY>
  <H1>Tournament Registration</H1>
  <FORM ACTION="/tournament" METHOD="post">
    <FIELDSET>
      <LEGEND>Game</LEGEND>
      <LABEL><INPUT TYPE="radio" NAME="game" VALUE="football"> Football</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="game" VALUE="cricket"> Cricket</LABEL>
      <LABEL><INPUT TYPE="radio" NAME="game" VALUE="tennis"> Tennis</LABEL>
    </FIELDSET>
    <FIELDSET>
      <LEGEND>Categories</LEGEND>
      <LABEL><INPUT TYPE="checkbox" NAME="cat" VALUE="junior"> Junior</LABEL>
      <LABEL><INPUT TYPE="checkbox" NAME="cat" VALUE="senior"> Senior</LABEL>
    </FIELDSET>
    <BUTTON TYPE="submit">Register Team</BUTTON>
  </FORM>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "FORM, FIELDSET, LEGEND, LABEL, INPUT, BUTTON sab uppercase. TYPE, NAME, VALUE, ACTION, METHOD attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H198 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 198</title>
</head>
<body>
  <h1>Conference Talk</h1>
  <section>
    <h2>Keynote: The Future of Tech</h2>
    <video width="800" height="450" controls poster="keynote-thumb.jpg">
      <source src="keynote.mp4" type="video/mp4">
      <source src="keynote.webm" type="video/webm">
      <track kind="subtitles" src="keynote-en.vtt" srclang="en" label="English">
      Your browser does not support video.
    </video>
    <h3>Topics</h3>
    <ul>
      <li>Artificial Intelligence</li>
      <li>Quantum Computing</li>
      <li>Sustainable Tech</li>
    </ul>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 198</titel>
</head>
<BODY>
  <H1>Conference Talk</H1>
  <SECTION>
    <H2>Keynote: The Future of Tech</H2>
    <VIDEO WIDTH="800" HEIGHT="450" CONTROLS POSTER="keynote-thumb.jpg">
      <SOURCE SRC="keynote.mp4" TYPE="video/mp4">
      <SOURCE SRC="keynote.webm" TYPE="video/webm">
      <TRACK KIND="subtitles" SRC="keynote-en.vtt" SRCLANG="en" LABEL="English">
      Your browser does not support video.
    </VIDEO>
    <H3>Topics</H3>
    <UL>
      <LI>Artificial Intelligence</LI>
      <LI>Quantum Computing</LI>
      <LI>Sustainable Tech</LI>
    </UL>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 45,
hint: "VIDEO, SOURCE, TRACK, SECTION, UL, LI sab uppercase. WIDTH, HEIGHT, CONTROLS, POSTER, SRC, TYPE, KIND, SRCLANG, LABEL attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H199 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hard Page 199</title>
</head>
<body>
  <h1>Habit Tracker</h1>
  <section>
    <h2>Weekly Habits</h2>
    <div class="habit">
      <span>Water Intake:</span>
      <progress value="6" max="8"></progress>
      <span>6/8</span>
    </div>
    <div class="habit">
      <span>Exercise:</span>
      <progress value="4" max="7"></progress>
      <span>4/7</span>
    </div>
    <div class="habit">
      <span>Reading:</span>
      <meter value="0.7" min="0" max="1">70%</meter>
    </div>
    <div class="habit">
      <span>Sleep Goal:</span>
      <meter value="0.85" min="0" max="1">85%</meter>
    </div>
  </section>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <titel>Hard Page 199</titel>
</head>
<BODY>
  <H1>Habit Tracker</H1>
  <SECTION>
    <H2>Weekly Habits</H2>
    <DIV CLASS="habit">
      <SPAN>Water Intake:</SPAN>
      <PROGRESS VALUE="6" MAX="8"></PROGRESS>
      <SPAN>6/8</SPAN>
    </DIV>
    <DIV CLASS="habit">
      <SPAN>Exercise:</SPAN>
      <PROGRESS VALUE="4" MAX="7"></PROGRESS>
      <SPAN>4/7</SPAN>
    </DIV>
    <DIV CLASS="habit">
      <SPAN>Reading:</SPAN>
      <METER VALUE="0.7" MIN="0" MAX="1">70%</METER>
    </DIV>
    <DIV CLASS="habit">
      <SPAN>Sleep Goal:</SPAN>
      <METER VALUE="0.85" MIN="0" MAX="1">85%</METER>
    </DIV>
  </SECTION>
</BODY>
</HTML>`,
totalMistakes: 46,
hint: "DIV, SPAN, PROGRESS, METER, SECTION sab uppercase. CLASS, VALUE, MAX, MIN attributes bhi. 'Charset', 'titel', HTML, BODY fix karo."
},

// ── H200 ──
{
correct: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Final mega page for hard HTML practice batch">
  <title>Hard Page 200</title>
  <link rel="stylesheet" href="final.css">
  <link rel="manifest" href="manifest.json">
  <script src="final.js" defer></script>
</head>
<body>
  <header role="banner">
    <h1>Grand Finale Portal</h1>
    <nav role="navigation" aria-label="Main Navigation">
      <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  </header>
  <main role="main">
    <section aria-labelledby="stats-heading">
      <h2 id="stats-heading">User Statistics</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Metric</th>
            <th scope="col">Value</th>
            <th scope="col">Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tasks Done</td>
            <td>120</td>
            <td><meter value="0.8" min="0" max="1">80%</meter></td>
          </tr>
          <tr>
            <td>Points</td>
            <td>4500</td>
            <td><meter value="0.6" min="0" max="1">60%</meter></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Update Profile</h2>
      <form action="/update" method="post" enctype="multipart/form-data">
        <label for="uname">Name:</label>
        <input type="text" id="uname" name="name" required>
        <label for="ubio">Bio:</label>
        <textarea id="ubio" name="bio" rows="4" cols="40"></textarea>
        <label for="uavatar">Avatar:</label>
        <input type="file" id="uavatar" name="avatar" accept="image/*">
        <button type="submit" aria-label="Save profile">Save</button>
      </form>
    </section>
  </main>
  <aside>
    <h2>Quick Links</h2>
    <ul>
      <li><a href="/help">Help</a></li>
      <li><a href="/faq">FAQ</a></li>
    </ul>
  </aside>
  <footer role="contentinfo">
    <small>&copy; 2024 Grand Finale Portal. All rights reserved.</small>
  </footer>
</body>
</html>`,
wrong: `<!DOCTYPE html>
<HTML LANG="en">
<head>
  <meta Charset="UTF-8">
  <META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0">
  <META NAME="description" CONTENT="Final mega page for hard HTML practice batch">
  <titel>Hard Page 200</titel>
  <LINK REL="stylesheet" HREF="final.css">
  <LINK REL="manifest" HREF="manifest.json">
  <SCRIPT SRC="final.js" DEFER></SCRIPT>
</head>
<BODY>
  <HEADER ROLE="banner">
    <H1>Grand Finale Portal</H1>
    <NAV ROLE="navigation" ARIA-LABEL="Main Navigation">
      <UL>
        <LI><A HREF="/" ARIA-CURRENT="page">Home</A></LI>
        <LI><A HREF="/dashboard">Dashboard</A></LI>
        <LI><A HREF="/profile">Profile</A></LI>
        <LI><A HREF="/settings">Settings</A></LI>
      </UL>
    </NAV>
  </HEADER>
  <MAIN ROLE="main">
    <SECTION ARIA-LABELLEDBY="stats-heading">
      <H2 ID="stats-heading">User Statistics</H2>
      <TABLE>
        <THEAD>
          <TR>
            <TH SCOPE="col">Metric</TH>
            <TH SCOPE="col">Value</TH>
            <TH SCOPE="col">Progress</TH>
          </TR>
        </THEAD>
        <TBODY>
          <TR>
            <TD>Tasks Done</TD>
            <TD>120</TD>
            <TD><METER VALUE="0.8" MIN="0" MAX="1">80%</METER></TD>
          </TR>
          <TR>
            <TD>Points</TD>
            <TD>4500</TD>
            <TD><METER VALUE="0.6" MIN="0" MAX="1">60%</METER></TD>
          </TR>
        </TBODY>
      </TABLE>
    </SECTION>
    <SECTION>
      <H2>Update Profile</H2>
      <FORM ACTION="/update" METHOD="post" ENCTYPE="multipart/form-data">
        <LABEL FOR="uname">Name:</LABEL>
        <INPUT TYPE="text" ID="uname" NAME="name" REQUIRED>
        <LABEL FOR="ubio">Bio:</LABEL>
        <TEXTAREA ID="ubio" NAME="bio" ROWS="4" COLS="40"></TEXTAREA>
        <LABEL FOR="uavatar">Avatar:</LABEL>
        <INPUT TYPE="file" ID="uavatar" NAME="avatar" ACCEPT="image/*">
        <BUTTON TYPE="submit" ARIA-LABEL="Save profile">Save</BUTTON>
      </FORM>
    </SECTION>
  </MAIN>
  <ASIDE>
    <H2>Quick Links</H2>
    <UL>
      <LI><A HREF="/help">Help</A></LI>
      <LI><A HREF="/faq">FAQ</A></LI>
    </UL>
  </ASIDE>
  <FOOTER ROLE="contentinfo">
    <SMALL>&copy; 2024 Grand Finale Portal. All rights reserved.</SMALL>
  </FOOTER>
</BODY>
</HTML>`,
totalMistakes: 50,
hint: "Ye final mega page hai. META, LINK, SCRIPT, HEADER, NAV, MAIN, SECTION, TABLE, THEAD, TBODY, TR, TH, TD, METER, FORM, LABEL, INPUT, TEXTAREA, BUTTON, ASIDE, FOOTER, SMALL sab uppercase. ROLE, ARIA-LABEL, ARIA-LABELLEDBY, ARIA-CURRENT, SCOPE, VALUE, MIN, MAX, ENCTYPE, ACCEPT, ROWS, COLS, NAME, CONTENT, REL, HREF, DEFER, SRC bhi. 'Charset', 'titel' fix karo."
},

    ],
};