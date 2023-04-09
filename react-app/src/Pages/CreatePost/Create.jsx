import "./Create.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import ReactQuill from "react-quill";
import { NavLink, Link } from "react-router-dom";

import "react-quill/dist/quill.snow.css";
const Create = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [showImage, setShowImage] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = localStorage.getItem("Name");
    const userId = localStorage.getItem("Id");
    console.log(userName);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("userName", userName);
    formData.append("userId", userId);
    const response = await axios.post("http://localhost:3000/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response) {
      console.log("in toast");
      toast.success("Your post is created successfully!");
    }
    console.log(response.data);
    setTitle("");
    setContent("");
    setImage(null);
  };
  return (
    <div>
      <h1 className="mt-10 text-5xl " id="h1">
        Create <span className="font-bold">Post</span>
      </h1>
      <div className="create mb-20">
        <form onSubmit={handleSubmit} className="content">
          <label className="text-xl">Title:</label>
          <br></br>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Type here"
            className="text-black  input input-bordered border-gray-400 bg-transparent mb-5 input-md w-full max-w-xs"
          />
          <div>
            <label className="text-xl">Body:</label>
            <br></br>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="text-black  input input-bordered border-gray-400 bg-transparent mb-5 input-md w-full max-w-xs"
            />
          </div>
          {/* <div className="editor text-black mb-5 w-1/2 ">
            <label>Body:</label>
            <ReactQuill
              className="block"
              // value={content}
              theme="snow"
              value={value}
              onChange={setValue}
              // onChange={(event) => setContent(event.target.value)}
            />
          </div> */}
          {/* <br></br>
          <input
            type="file"
            className="mb-5  file-input file-input-bordered  border-gray-400 file-input-sm w-1/3 max-w-xs bg-transparent "
          /> */}
          <label className="text-xl">Image:</label>
          <br></br>
          <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer rounded-md  font-medium text-[#272B51] ">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </div>
          <br></br>{" "}
          <div className="mx-28">
            <button
              type="submit"
              className="btn btn-xs p-2 rounded-xl text-white capitalize bg-[#705D9D] hover:bg-[#565d9a] sm:btn-sm md:btn-md "
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
