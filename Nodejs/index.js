const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Hello From middleware 1");
  req.myName = "Yash Bhawsae";
  next();
});

app.get("/users", (req, res) => {
  const html = `
      <ul>
      ${users.map((user) => `<li> ${user.first_name} </li>`).join("")}
      </ul>
      `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // Update user with Id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // Delete user with Id

    return res.json({ status: "pending" });
  });

// app.get("/api/users/:id");

app.post("/api/users", (req, res) => {
  // Create new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "success", id: users.length });
  });
});

// app.patch("/api/users/:id");

// app.delete("/api/users/:id");

app.listen(PORT, () => console.log(`Server Started At PORT: ${PORT}`));

// {
//     first_name: body.first_name,
//     last_name: body.last_name,
//     email: body.email,
//     gender: body.gender,
//     job_title: body.job_title,
//   }
