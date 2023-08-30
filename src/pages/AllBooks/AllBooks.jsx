import { Link } from "react-router-dom";
import SubBanner from "../../components/SubBanner/SubBanner";
import { FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";

const AllBooks = () => {
  //! dummy fetch
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);

  return (
    <div className="bg-gray-100 pb-10">
      <SubBanner text="All Books" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-x-4 lg:gap-x-20 mt-7">
          <div className=" w-full md:w-2/4 flex search-field my-5">
            {/* //TODO: search value to get react hook form  */}
            <input
              type="text"
              className="w-full py-3  px-4 outline-none "
              placeholder="Search your favorite book"
            />
            <Link
              to="/search"
              className=" px-4 py-2 text-white bg-[#F86263] text-lg font-semibold"
            >
              Search
            </Link>
          </div>

          <div>
            <label
              htmlFor="filter"
              className="text-[#333] text-lg flex items-center mb-2 gap-x-2"
            >
              <FaFilter />{" "}
              <span className="text-[#333] font-semibold">Filter</span>
            </label>
            <select name="" id="filter" className="outline-none px-4 py-2">
              <option value="">Choose your filter</option>
              <option value="publicationYear">Publication year</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 lg:mt-10">
          {books?.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
