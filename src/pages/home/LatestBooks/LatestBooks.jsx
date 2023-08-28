import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BookCard from "../../../components/BookCard/BookCard";

const LatestBooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const latestBooks = data.slice(0, 10);
  return (
    <div className="py-5 lg:py-10 container mx-auto">
      <SectionTitle
        heading="Latest Books"
        subHeading="The Most Popular Books Today are available in Book Library"
      />

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4  content-center justify-items-center">
          {latestBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBooks;
