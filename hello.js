// console.log("Hello World");
export default function Hello(app) {
  app.get("/hello", (req, res) => {
    res.send("Hello World! 345");
  });
  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  });
}
