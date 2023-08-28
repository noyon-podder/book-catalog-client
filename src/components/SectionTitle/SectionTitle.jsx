import { FaBook } from "react-icons/fa";
import "./SectionTitle.css";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-full text-center mb-5 ">
      <h2 className="top-heading">{heading}</h2>
      <p className="sub-heading">{subHeading}</p>
      <div className="code-icon flex items-center justify-center ">
        <span className="relative icon-divider">
          {" "}
          <FaBook />
        </span>
      </div>
    </div>
  );
};

export default SectionTitle;
