const express = require("express"); // import thư viện express vaò project
const app = express(); // Gọi hàm express() để có thể sử dụng tất cả tính năng của thư viện express cho project
const port = 8080; // Tạo công cho localhost để chạy project

// Tạo 1 route cho trang web , và route này hiênr thị đoan text 'Hello World'
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Tạo 1 route có tên 'About' cho trang web , và route này hiênr thị đoan text 'I'm Felling happy'
app.get("/about", (req, res) => {
  res.send("I'm felling  happy");
});

app.listen(port, () => {
  console.log(`Examp app listening at http://localhost:${port}`);
});
