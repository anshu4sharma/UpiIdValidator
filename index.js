const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const request = require("request"); //requiring request module

app.get("/", function (req, res) {
    res.send("hello from upi validator")
});
app.get("/upi/:upiId", function (req, res) {
    const { upiId } = req.params
    request.post(
        `https://upibankvalidator.com/api/upiValidation?upi=${upiId}`,
        function (error, response, body) {
            if (error) {
                res.status(500).send(error);
            }
            res.send(body);
        }
    );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})