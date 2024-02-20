const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: ["https://8jlfxy.csb.app/"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

const formSubmissions = [];

app.post("/data", (req, res) => {
  const { fullName, email, message, userWhatsAppNumber } = req.body;

  console.log("req.body", req.body);

  formSubmissions.push({
    fullName,
    email,
    message,
    userWhatsAppNumber,
  });

  res.json({ success: true, message: "Form submitted successfully!" });
});

app.get("/data", (req, res) => {
  const htmlContent = `
    <html>
      <head>
        <title>Form Submissions</title>
      </head>
      <body>
        <h1>Form Submissions</h1>
        <pre>${JSON.stringify(formSubmissions, null, 2)}</pre>
      </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
