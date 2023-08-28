import "./BookCard.css";

const BookCard = ({ book }) => {
  const { images, title, author } = book;
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-sm border p-2 hover:cursor-pointer hover:shadow-md book-card">
      <img
        className="object-cover w-full h-56 transition-transform ease-in"
        src={images}
        alt="avatar"
      />

      <div className="py-5 text-center">
        <h2 className="text-[#333] text-lg font-bold ">{title}</h2>
        <span className="text-sm text-gray-700 ">{author}</span>
      </div>
    </div>
  );
};

export default BookCard;
