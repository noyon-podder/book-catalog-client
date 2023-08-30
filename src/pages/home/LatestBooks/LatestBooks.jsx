// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BookCard from "../../../components/BookCard/BookCard";
import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../../../redux/api/apiSlice";
import loading from "../../../assets/loading.gif";

const LatestBooks = () => {
  //! error show when implement the RTK Query
  const { data, isLoading } = useGetAllBooksQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src={loading} alt="" />
      </div>
    );
  }

  const latestBooks = data?.slice(0, 10);
  return (
    <div className="py-5 lg:py-10 container mx-auto">
      <SectionTitle
        heading="Latest Books"
        subHeading="The Most Popular Books Today are available in Book Library"
      />

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4  content-center justify-items-center">
          {latestBooks?.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-5 lg:my-10">
        <Link
          to="/all_books"
          className="px-12 rounded-lg py-4 bg-[#F86263] hover:bg-[#be4a4a] text-white text-lg font-semibold "
        >
          See All Books
        </Link>
      </div>
    </div>
  );
};

export default LatestBooks;
