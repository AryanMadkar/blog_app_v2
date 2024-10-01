import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image2 from "/uplo.jpg";
const Addblogs = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    content: "",
    author: "",
    image: image,
    category: "",
    created_at: "",
    updated_at: "",
  });

  const onsubmithandler = async (e) => {
    e.preventDefault();

    try {
      //   const res = await axios.post(
      //     "http://localhost:5000/user/createblog",
      //     data,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     }
      //   );
      //   if (res.data.success) {
      //     toast.success(res.data.message);
      //     setImage(false);
      // } else {
      //     toast.error(res.data.message);
      // }
      console.log(data);
    } catch (error) {
      console.error("Error uploading image", error);
      toast.error("Failed to upload the blog.");
    }
  };

  return (
    <div className="m-[1rem]">
      <form onSubmit={onsubmithandler} className="pt-5  px-5 sm:pt-12 sm:pl-16">
        <div className="flex flex-row items-center justify-around">
          <div>
            <p className="text-xl">Uplode Thumbnail</p>
            <label htmlFor="image">
              <img
                width={140}
                height={70}
                alt=""
                className="mt-4 cursor-pointer "
                src={!image ? image2 : URL.createObjectURL(image)}
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
              type="file"
              id="image"
              required
              hidden
            />
          </div>
        </div>

        <div>
          {" "}
          <p className="text-xl mt-4 ">Blog title</p>
          <input
            name="title"
            onChange={(e) => setData({ ...data, title: e.target.value })}
            value={data.title}
            type="text"
            placeholder="Enter the blog title "
            required
            className="w-full mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] border-black"
          />
        </div>
        <div className="w-full flex flex-row justify-around items-center ">
          <div>
            {" "}
            <p className="text-xl mt-4 ">Blog title</p>
            <input
              name="author"
              onChange={(e) => setData({ ...data, author: e.target.value })}
              value={data.author}
              type="text"
              placeholder="Enter the author "
              required
              className="min-w-1/2 mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] border-black"
            />
          </div>
          <div className="w-1/2 mt-4 fex flex-col justify-center items-center gap-2">
            <p className="text-xl mb-4">BLog tags</p>
            <input
              type="text"
              onChange={(e) => setData({ ...data, tags: e.target.value })}
              value={data.tags}
              placeholder="Enter the tags"
              className="px-4 py-3 border hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] border-black"
            />
          </div>
        </div>

        <div>
          <p className="text-xl mt-4 ">Blog</p>
          <textarea
            name="content"
            onChange={(e) => setData({ ...data, content: e.target.value })}
            value={data.content}
            type="text"
            placeholder="Enter the blog content "
            required
            className="w-full mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(254,0,0,_0.7)] border-black"
          />
        </div>
        <div className="w-full flex flex-row justify-around items-center ">
          <div>
            {" "}
            <p className="text-xl mt-4 ">Created at</p>
            <input
              name="created_at"
              onChange={(e) => setData({ ...data, created_at: e.target.value })}
              value={data.created_at}
              type="text"
              placeholder="Enter the created_at "
              required
              className="min-w-1/2 mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] border-black"
            />
          </div>
          <div className="w-1/2 mt-4 fex flex-col justify-center items-center gap-2">
            <p className="text-xl ">Updated at</p>
            <input
              name="updated_at"
              onChange={(e) => setData({ ...data, updated_at: e.target.value })}
              value={data.updated_at}
              type="text"
              placeholder="Enter the updated_at "
              required
              className="min-w-1/2 mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] border-black"
            />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div>
            <p className="text-xl mt-4">Blog Categeory</p>
            <select
              name="category"
              onChange={(e) => setData({ ...data, category: e.target.value })}
              value={data.category}
              className="w-40 mt-4 px-4 py-3 border text-gray-500"
            >
              <option>Select Categeory</option>
              <option value="startup">Startup</option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-outline m-[1rem] w-[15vw]  btn-accent"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addblogs;
