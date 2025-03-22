const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');

  const html = `
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Danh sách học viên</title>
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <h1>Danh sách học viên</h1>
    <table>
      <tr>
        <th>MSHV</th>
        <th>Họ tên</th>
        <th>Ngày sinh</th>
        <th>Quê quán</th>
        <th>Email</th>
        <th>SĐT</th>
      </tr>
      <tr>
        <td>M2524003</td>
        <td>Lê Hoàng Dũng</td>
        <td>01/01/2001</td>
        <td>Cần Thơ</td>
        <td>nguyenvana@example.com</td>
        <td>0912345678</td>
      </tr>
      <tr>
        <td>M2524004</td>
        <td>Nguyễn Văn A</td>
        <td>01/01/2001</td>
        <td>Cần Thơ</td>
        <td>nguyenvana@example.com</td>
        <td>0912345678</td>
      </tr>
      <tr>
        <td>...</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </body>
  </html>
`;


  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});
