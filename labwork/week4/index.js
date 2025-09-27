const express = require("express");
const SERVER_PORT = process.env.PORT || 3000;

//Create an instance of an Express application
const app = express();
//Middleware to serve static files form the "Public" folder
//app.use(express.static("public"));
app.use("/static", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World from Express");
});

app.get("/about", (req, res) => {
  //res.send("Hello World");

  res.status(200).send("About Page");
});

app.get("/college", (req, res) => {
  const college = {
    method: "GET",
    name: "George Brown College",
    location: "Toronto,Canada",
    established: 1967,
  };
  res.status(200).json(college);
});

app.post("/college", (req, res) => {
  const college = {
    method: "POST",
    name: "George Brown College",
    location: "Toronto,Canada",
    established: 1967,
  };
  res.status(200).json(college);
});

// app.get("/index.html", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

//http://localhost:3000/student?name=John&age=25
//req.query
app.get("/student", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const age = req.query.age;
  res.status(200).json({
    student_name: name,
    student_age: age,
  });
});
//Path Paramters
//http://localhost:3000/student/John/25
//req.params
app.get("/student/:name/:age/:city", (req, res) => {
  console.log(req.params);
  const name = req.params.name;
  const age = req.params.age;
  const city = req.params.city;
  res.status(200).json({
    student_name: name,
    student_age: age,
    student_city: city,
  });
});
//Body Paramaters as json
//req.body
app.post("/student", (req, res) => {
  const student = req.body;
  console.log(student);
  const { name, age } = student;

  if (!student.name || !student.age) {
    return res.status(400).json({ error: "Missing body parameters" });
  }

  res.json({
    student_name: student.name,
    student_age: student.age,
  });
});
/*

{
    name:"Yueyang",
    age:24
}

*/

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
