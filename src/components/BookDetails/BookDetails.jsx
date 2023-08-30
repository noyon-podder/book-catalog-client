import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/api/apiSlice";
import loading from "../../assets/loading.gif";
import SubBanner from "../SubBanner/SubBanner";

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
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
    <div>
      <SubBanner text="Book Details" />
    </div>
  );
};

export default BookDetails;
