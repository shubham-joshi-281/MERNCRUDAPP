import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Retrieve Data Functionality
  const getDetails = async () => {
    setLoading(false);
    try {
      const data = await axios.get(`http://localhost:8080/api/v1/crud/get`);
      setLoading(true);
      setDetails(data?.data?.getDetails);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // UseEffect For Showing All Data
  useEffect(() => {
    getDetails();
  }, []);

  // Delete Functionality
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/crud/delete/${id}`
      );
      if (!res?.data?.deleteDetailsById) {
        toast.error(` error `, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      toast.success(
        ` User Name ${res?.data?.deleteDetailsById?.name} is Now Deleted `,
        {
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );

      // Update state by filtering out the deleted item
      setDetails((prevDetails) => prevDetails.filter((ele) => ele._id !== id));
    } catch (error) {
      console.log("deleted Item");
    }
  };
  return (
    <>
      {loading ? (
        <>
          <h1 className="text-4xl text-center w-full font-extrabold text-green-700 uppercase my-8 pb-2">
            All Users Details
          </h1>
          {details.length > 0 ? (
            <>
              <div className=" w-[95vw] mb-6 mx-auto flex flex-wrap justify-evenly gap-3 items-center">
                {details?.map((ele) => {
                  return (
                    <Card
                      key={ele._id}
                      {...ele}
                      onView={() => navigate(`view/${ele._id}`)}
                      onEdit={() => navigate(`edit/${ele._id}`)}
                      onDelete={() => handleDelete(ele._id)}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <div className="w-full text-center ">
              <h1 className="text-4xl flex flex-col gap-3">
                <span className="text-red-900 font-bold"> OPPS!!</span>
                <span className="text-blue-900 font-bold">
                  NO DETAILS PRESENT...
                </span>
                <span className="text-green-600 font-bold">
                  Register Your Details...
                </span>
              </h1>
              <button
                className="text-xl bg-black font-bold text-yellow-500 py-3 px-6 my-5 rounded-xl"
                onClick={() => navigate("/register")}
              >
                CLICK HERE TO ADD DETAILS
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-[90vh] ">
          <img
            className="mix-blend-multiply "
            src="../src/assets/loader.gif"
            alt="Loading indicator"
          />
        </div>
      )}
    </>
  );
};

export default Home;
