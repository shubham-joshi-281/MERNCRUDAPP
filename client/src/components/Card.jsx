import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Card = ({
  name,
  email,
  address,
  age,
  contact,
  onDelete,
  onEdit,
  onView,
}) => {
  return (
    <>
      <div className="border-2 border-black w-[45vw] md:w-[20vw] py-1 px-2 rounded-md bg-black ">
        <div className="text-2xl font-medium text-center mb-2 text-green-400 ">
          {name}
        </div>
        <hr />
        <div className="text-lg font-medium text-center text-red-400 mt-2 mb-1 ">
          {email}
        </div>
        <p className="text-orange-300 text-center w-full text-md mb-1">
          <span className="text-white">Address:-</span> {address}
        </p>

        <div className="flex justify-evenly w-full text-center items-center py-1 mb-2 text-yellow-300 text-md gap-1 flex-wrap">
          <p>
            <span className="text-white">Age:- </span>
            {age}
          </p>
          <p>
            <span className="text-white">Contact:- </span>
            {contact}
          </p>
        </div>
        <div className="text-white w-full justify-evenly items-center flex pb-3">
          <button onClick={onView}>
            <FaEye />
          </button>
          <button>
            <FaEdit onClick={onEdit} />
          </button>
          <button>
            <MdDelete onClick={onDelete} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
