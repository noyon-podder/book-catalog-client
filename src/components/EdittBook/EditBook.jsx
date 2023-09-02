import { useState } from "react";
import { useForm } from "react-hook-form";
import loading from "../../assets/loading.gif";
import { toast } from "react-hot-toast";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../redux/api/apiSlice";
import { useParams } from "react-router-dom";

// const IMAGE_HOSTING_KEY = `${import.meta.env.VITE_IMAGE_TOKEN}`;

const EditBook = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const formatDateToMonthName = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const { id } = useParams();

  const { data: book } = useGetSingleBookQuery(id);
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  // const image_url = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (isLoading) {
    return <img src={loading} alt="" />;
  }

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const updateBookData = {
      title: data.title,
      details: data.details,
      author: data.author,
      genre: data.genre,
      publicationDate: formatDateToMonthName(selectedDate),
    };
    const response = await updateBook({ id, ...updateBookData });

    if (response.error) {
      toast.error("Something went wrong", response.error);
      reset();
    } else {
      toast.success("Book Data update Successfully");
    }

    console.log(data, "publicaton Data", formatDateToMonthName(selectedDate));
  };

  console.log(errors);
  return (
    <div className="lg:py-8 p-3 bg-gray-100">
      <div className="bg-white shadow-md lg:w-3/4 mx-auto px-8 py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-xl font-semibold text-gray-900 mb-4"
            >
              Book Title<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true, maxLength: 100 })}
              defaultValue={book?.title}
              placeholder="Recipe name"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.name && (
              <span className="text-red-600 text-sm mt-2">
                Recipe name is required
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-gray-900 mb-4"
              >
                Author Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                {...register("author", { required: true, maxLength: 100 })}
                defaultValue={book?.author}
                placeholder="Author Name"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.name && (
                <span className="text-red-600 text-sm mt-2">
                  Author name is required
                </span>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-gray-900 mb-4"
              >
                Genre<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                {...register("genre", { required: true, maxLength: 100 })}
                defaultValue={book?.genre}
                placeholder="Genre"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.name && (
                <span className="text-red-600 text-sm mt-2">
                  Genre is required
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <div>
              <label
                htmlFor="image"
                className="block text-xl font-semibold text-gray-900 mb-4"
              >
                Book Image<span className="text-red-600">*</span>
              </label>

              <input
                type="file"
                {...register("image", {})}
                className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full   placeholder-gray-400/70  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   "
              />
            </div>
            {errors.image && (
              <span className="text-red-600 text-sm mt-2">
                Book details is required
              </span>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-gray-900 mb-4"
              >
                Already published:
                <span className="text-red-600 text-sm">
                  {" "}
                  {book?.publicationDate}
                </span>
              </label>

              <input
                type="date"
                {...register("publicationDate", {})}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                placeholder="John Doe"
                className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40    "
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="details"
              className="block text-xl font-semibold text-gray-900 mb-4"
            >
              Book Details<span className="text-red-600">*</span>
            </label>
            <textarea
              placeholder="Recipe Details"
              {...register("details", {})}
              defaultValue={book?.details}
              className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 "
            ></textarea>
            {errors.details && (
              <span className="text-red-600 text-sm mt-2">
                Book details is required
              </span>
            )}
          </div>

          <input
            type="submit"
            value="Add Book"
            className="px-10 cursor-pointer py-3 text-xl font-semibold rounded text-white bg-[#ea5368] hover:bg-[#a12838] mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default EditBook;
