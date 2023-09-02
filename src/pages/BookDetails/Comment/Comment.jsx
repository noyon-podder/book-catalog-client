import { useContext, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { AuthContext } from "../../../context/AuthProvider";
import {
  useCommentAddMutation,
  useGetCommentQuery,
} from "../../../redux/api/apiSlice";

const Comment = ({ id }) => {
  const [commentAdd, { isError }] = useCommentAddMutation();
  const { data } = useGetCommentQuery(id, {
    pollingInterval: 5000,
  });

  const { user } = useContext(AuthContext);
  const [textareaValue, setTextareaValue] = useState("");

  const handlePost = () => {
    const options = {
      id: id,
      data: {
        email: user.email,
        comment: textareaValue,
      },
    };

    commentAdd(options);
    setTextareaValue("");
    if (isError) {
      console.log(isError);
    }
  };

  const handleChange = (e) => {
    setTextareaValue(e.target.value);
  };
  return (
    <div>
      <div className="flex gap-x-3 lg:w-2/4 mx-auto mt-8">
        <div className="w-full">
          <textarea
            onChange={handleChange}
            value={textareaValue}
            placeholder="Enter your Books experience"
            className="block  border  w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 w-full"
          ></textarea>
        </div>
        <div>
          <button
            onClick={handlePost}
            disabled={textareaValue?.trim === ""}
            className="px-4 py-2 bg-pink-500 mt-2 rounded-md text-white font-bold"
          >
            <BsSend />
          </button>
        </div>
      </div>

      <div className="mt-3 lg:w-2/4 mx-auto">
        {data?.comments?.map((message, index) => (
          <div key={index} className="flex gap-x-3 items-center my-2">
            <span>
              <BiSolidUserCircle className="w-5 h-5 text-[#333]" />
            </span>
            <p className="text-[#333] ">{message?.data?.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
