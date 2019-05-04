const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

// 获取 cookie 的过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 3600 * 1000);
  console.log("d.toGMTString() is ", d.toGMTString());
  return d.toGMTString();
};

const handleUserRouter = (req, res) => {
  const method = req.method; //GET POST

  // 登录
  if (method === "GET" && req.path === "/api/user/login") {
    // const { username, password } = req.body;
    const { username, password } = req.query;
    const result = login(username, password);
    return result.then(data => {
      if (data.username) {
        req.session.username = data.username;
        req.session.realname = data.realname;
        return new SuccessModel("登录成功");
      }
      return new ErrorModel("登录失败");
    });
  }
  // 登录验证的测试
  if (method === "GET" && req.path === "/api/user/login-test") {
    if (req.session.username) {
      return Promise.resolve(new SuccessModel({ username: req.session }));
    }
    return Promise.resolve(new ErrorModel("尚未登录"));
  }
};

module.exports = handleUserRouter;
