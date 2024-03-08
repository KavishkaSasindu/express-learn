const express = require("express");

// application
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, name: "Kavishka", age: 24 },
  { id: 2, name: "Kapila", age: 24 },
];

// get request
app.get("/", (request, response) => {
  console.log("Hello World");
  response.status(201).send({ message: "Hello User" });
});

// get request
app.get("/api/users", (request, response) => {
  response.status(201).send({ message: users });
});

// get request
app.get("/api/users/:id", (request, response) => {
  const parseId = parseInt(request.params.id);
  console.log(parseId);
  if (parseId) {
    const user = users.find((user) => user.id === parseId);
    response.status(201).send({
      data: user,
      message: "Data retrieve successfully",
    });
  } else {
    response.status(400).send({
      message: "Bad request",
    });
  }
});

// post request
app.post("/api/postUsers", (request, response) => {
  console.log(request.body);
  return response.status(200).send({
    message: "Done",
    data: request.body,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
