const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

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
  console.log("Body", body);
  res.json({ status: "pending" });
});

// app.patch("/api/users/:id");

// app.delete("/api/users/:id");

app.listen(PORT, () => console.log(`Server Started At PORT: ${PORT}`));
