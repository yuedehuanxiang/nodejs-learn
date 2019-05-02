const getList = (author, keyword) => {
  // 先返回假数据 （格式是正确的）
  return [
    {
      id: 1,
      title: "标题a",
      content: "内容a",
      createTime: 1556786941595,
      author: "zhangsan"
    },
    {
      id: 2,
      title: "标题b",
      content: "内容b",
      createTime: 1556786941000,
      author: "lisi"
    }
  ];
};

const getDetail = id => {
  return [
    {
      id: 1,
      title: "标题a",
      content: "内容a",
      createTime: 1556786941595,
      author: "zhangsan"
    }
  ];
};

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content 属性
  return {
    id: 3 // 表示新建博客，插入到数据表里面的 id
  };
};

const updateBlog = (id, blogData = {}) => {
  // id 就是要更新博客的id
  // blogData 是一个博客对象， 包含 title content 属性
  return true;
};

const delBlog = id => {
  // id 就是要删除博客的id
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
