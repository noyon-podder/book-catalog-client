import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/api/apiSlice";
import loading from "../../assets/loading.gif";
import SubBanner from "../SubBanner/SubBanner";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetSingleBookQuery(id);
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src={loading} alt="flex items-center justify-center" />
      </div>
    );
  }
  return (
    <div className="bg-gray-100">
      <SubBanner text="Book Details" />

      <div className="container mx-auto py-10 ">
        <div className="flex items-center justify-center">
          <div className="flex w-2/4 overflow-hidden bg-white rounded-lg shadow-lg ">
            <div
              className="w-1/3 bg-cover"
              style={{
                backgroundImage: `url(${data.images})`,
              }}
            ></div>

            <div className="w-2/3 p-4 md:p-4 md:py-5">
              <h1 className="text-xl font-bold text-gray-800 ">{data.title}</h1>

              {data.details ? (
                <p className="mt-2 text-sm text-gray-500 ">{data.details}</p>
              ) : (
                <p className="mt-2 text-sm text-gray-500 ">
                  Quickly unleash frictionless users via highly efficient
                  interfaces. Enthusiastically exploit team building core
                  competencies without optimal.
                </p>
              )}

              <div className="flex flex-col gap-y-1 my-3">
                <span className="text-sm text-gray-700 ">
                  <b>Author:</b> {data?.author}
                </span>
                <span className="text-sm text-gray-700 ">
                  <b>Genre:</b> {data?.genre}
                </span>
                <span className="text-sm text-gray-700 ">
                  <b>Publication Date:</b> {data?.publicationDate}
                </span>
              </div>

              {data?.authorEmail === user?.email && (
                <div className="flex justify-between mt-4 item-center ">
                  <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">
                    Edit Book
                  </button>
                  <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-600 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">
                    Delete Book
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
