import { useState } from "react";
import "./BookCard.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const [wishList, setWishList] = useState(false);
  const { _id, images, title, author, genre, publicationDate } = book;
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-sm border p-2 py-4 hover:cursor-pointer hover:shadow-md book-card relative">
      <img
        className="object-cover w-full h-56 transition-transform ease-in"
        src={images}
        alt="avatar"
      />

      <div>
        {wishList ? (
          <>
            <AiFillHeart
              onClick={() => setWishList(!wishList)}
              className="text-red-600 text-2xl cursor-pointer absolute right-5 top-4"
            ></AiFillHeart>
          </>
        ) : (
          <>
            <AiOutlineHeart
              onClick={() => setWishList(!wishList)}
              className="text-[#da3b3b] text-2xl cursor-pointer absolute right-5 top-4"
            ></AiOutlineHeart>
          </>
        )}
      </div>

      <div className="pt-5 pb-3 px-4">
        <h2 className="text-center text-[#333] text-lg font-bold mb-2">
          {title}
        </h2>
        <div className="flex flex-col gap-y-1">
          <span className="text-sm text-gray-700 ">
            <b>Author:</b> {author}
          </span>
          <span className="text-sm text-gray-700 ">
            <b>Genre:</b> {genre}
          </span>
          <span className="text-sm text-gray-700 ">
            <b>Publication Date:</b> {publicationDate}
          </span>
        </div>

        <div className="mt-3">
          <Link to={`/books/${_id}`}>
            <button className="px-2 py-1 rounded bg-[#F86263] hover:bg-[#c94646] text-white">
              Book Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
