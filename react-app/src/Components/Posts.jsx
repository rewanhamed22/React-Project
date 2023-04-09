import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditPost from "./EditPost";
import { Link } from "react-router-dom";
import Trash from "./Trash";
import EditBtn from "./EditBtn";
import { ToastContainer, toast } from "react-toastify";
// import FullPost from "./FullPost";

const Posts = (props) => {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [showEdit, setShow] = useState(false);
  const navigate = useNavigate();
  console.log(showEdit);

  useEffect(() => {
    let post = [...data];
    async function getPosts() {
      try {
        post = await axios.get("http://localhost:3000/posts");

        setData(post.data);
        return post.data;
      } catch (err) {}
    }

    getPosts();
  }, []);
  const handleReadMore = (id) => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        navigate(`/postdetails/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        setData(data.filter((post) => post.id !== id));
        const discardChanges = window.confirm(
          "Are you sure you want to delete this post ?"
        );
        toast.success("The post has been deleted successfully ");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry.., something went wrong. Please try again later");
      });
  };

  if (!data) return <Loader />;
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      {/* <h1 className="text-[#705D9D] font-bold text-4xl text-center ">
        Popular Posts
      </h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 mx-5  gap-12 pt-4 ">
        {data.map((post) => (
          <div
            key={post.id}
            className="border shadow-xl rounded-3xl  hover:scale-105 duration-300"
          >
            {/* <div className="fixed z-500  top-0 left-50%  max-w-1/2  hidden ">
              <EditPost data={post} setData={setData} />
            </div> */}
            <img
              className="w-full h-[300px] object-cover rounded-t-lg "
              src={`Data/${post.image}`}
              alt="Album"
            />
            <div className="card-body lg:w-full ">
              <div className=" flex flex-col-3 justify-between gap-6 ">
                <h2 className="card-title text-3xl text-[#705D9D]">
                  {post.title}{" "}
                </h2>

                <div className="mx-5">
                  {localStorage.getItem("userToken") ? (
                    post.userId == JSON.parse(localStorage.getItem("Id")) ? (
                      <>
                        <button>
                          <Link to={`edit/${post.id}`}>
                            <EditBtn />
                          </Link>
                        </button>
                      </>
                    ) : (
                      ""
                    )
                  ) : (
                    " "
                  )}{" "}
                  {localStorage.getItem("userToken") ? (
                    post.userId == JSON.parse(localStorage.getItem("Id")) ? (
                      <>
                        <button onClick={() => handleDelete(post.id)}>
                          <Trash />
                        </button>
                      </>
                    ) : (
                      ""
                    )
                  ) : (
                    " "
                  )}{" "}
                </div>
              </div>
              <p className="text-xl text-[#487EB0]">
                {post.content.substring(0, 70) + "..."}
              </p>
              <Link to={`postdetails/${post.id}`}>
                <button
                  className="btn btn-sm bg-[#705D9D] border-[#705D9D] p-auto  text-lg text-center capitalize rounded-xl w-3/7 mt-4 ml-32 lg:ml-64 border-none  text-white hover:bg-white hover:text-[#705D9D] hover:scale-110 ease-in-out duration-300"
                  onClick={() => handleReadMore(props.id)}
                >
                  Read More
                </button>
              </Link>

              <div className="flex flex-row-2 ">
                <div className="avatar ">
                  <div className=" w-12 h-12 mt-2 rounded-full">
                    <img src="data:image/png;base64,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" />
                  </div>
                </div>

                <span className="mx-2 mt-4 text-lg text-[#705D9D] ">
                  {post.userName}
                </span>
                {/* <span className="mx-3 text-zinc-400 text-sm ">
                    {new Date().toDateString()}
                  </span> */}
              </div>
            </div>
            {/* <button className="mb-3 mt-6 flex justify-start text-center  hover:text-white  text-gray-500 dark:text-gray-500  cursor-pointer order-solid border-2 border-gray-400 w-40 rounded-sm py-2 hover:bg-black hover:border-black ease-in duration-300 ">
              <div className="flex m-auto">
                <div>
                  <Link to={`post/${post.id}`}>Read More</Link>
                </div>
              </div>
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
