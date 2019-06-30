const http = require("http");
const querystring = require("querystring");

// 一个综合实例
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0];
  const query = querystring.parse(url.split("?")[1]);

  // 设置返回格式为 json
  res.setHeader("Content-Type", "application/json");

  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query
  };

  // 返回
  if (method === "GET") {
    // 返回的一定是字符串(或者二进制数据)，然后 content-type 规定的是字符串的 类型是json
    res.end(JSON.stringify(resData));
  }
  if (method === "POST") {
    let postData = "";
    req.on("data", chunk => {
      console.log(chunk);
      postData += chunk.toString();
    });
    req.on("end", () => {
      console.log(postData);
      console.log(typeof postData);
      resData.postData = postData;
      res.end(JSON.stringify(resData));
    });
  }
});

server.listen(3000);
console.log("ok");
