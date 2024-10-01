const Blog = require("../models/BLogmodel");

const createblog = async (req, res) => {
  try {
    const {
      title,
      content,
      author,
      image,
      category,
      created_at,
      updated_at,
      tags,
    } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }
    if (!author) {
      return res.status(400).json({ error: "Author is required" });
    }
    if (!image) {
      return res.status(400).json({ error: "Image is required" });
    }
    const blog = await Blog.create({
      title,
      content,
      author,
      image,
      category,
      created_at,
      updated_at,
      tags,
    });
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const getblog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const getblogbyid = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const deleteblog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  createblog,
  getblog,
  getblogbyid,
  deleteblog,
};
