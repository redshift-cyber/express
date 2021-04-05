const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <body style = "background-color: #000">
<h1 style="text-align: center; color: #fff;">Welcome to Iron Coder's exprees Server</h1>
<h3 style="text-align: center;color: #fff;">Iron coder is a little guy building his iron man suit from code</h3>

<h5 style = "color: #fff;">Villians with whom I have fought with:</h5>
<ul>
<li style = "color: #fff;">Ultron</li>
<li style = "color: #fff;">My examinations</li>
<li style = "color: #fff;">Learning super hard JS</li>
</ul>
</body>
    `)
});

app.get("/contact", function (req, res) {
    res.send("Contact me at :myemail@email.com")
})


app.get("/about", function (req, res) {
    res.send('<h3 style = "text-align: center;">Iron Coder is the name beating up bad guys is my game</h3>')
})

app.listen(3000, () => {
    console.log('Server Listening on Port: 3000')
})