import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Details = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // Retrieve Data Functionality
  const getDetails = async () => {
    setLoading(false);
    try {
      const data = await axios.get(
        `http://localhost:8080/api/v1/crud/get/${id}`
      );
      setLoading(true);
      setDetails(data?.data?.getDetailsById);
    } catch (error) {
      setLoading(false);
    }
  };

  // useEffect For Fetching Data
  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <>
      {loading ? (
        <>
          <h1 className="text-4xl text-center w-full font-extrabold text-green-700 uppercase my-8 pb-2">
            {details?.name} -- Details
          </h1>
          <div className=" w-[100vw] flex flex-wrap justify-evenly gap-3 items-center">
            <Card
              name={details.name}
              email={details.email}
              address={details.address}
              age={details.age}
              contact={details.contact}
            >
              <img src="" alt="img" />
            </Card>
          </div>
          <div className="w-full text-center ">
            <button
              className="text-xl bg-yellow-500 font-bold text-violet-900 py-2 px-6 my-5 rounded-xl"
              onClick={() => navigate("/")}
            >
              Back To Home Page
            </button>
          </div>
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

export default Details;
