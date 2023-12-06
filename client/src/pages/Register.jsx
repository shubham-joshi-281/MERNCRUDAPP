import { useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    contact: "",
    address: "",
  });

  //    Change Handler Logic
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  //   Submit Handler Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming 'input' is your state holding form data
    const { name, email, age, contact, address } = input;
    if (
      !input.name ||
      !input.email ||
      !input.age ||
      !input.contact ||
      !input.address
    ) {
      toast.error("All Fields Are Required !!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (input.contact.length !== 10) {
      toast.error("Contact Length Should Be Not Be Less Than 10!! ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/crud/create`, {
        name,
        email,
        age,
        contact,
        address,
      });

      if (!res?.data?.details) {
        toast.error("Error: Unable to retrieve data", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.success("Data created successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);

      // Handle specific error cases and display user-friendly messages
      if (error.response) {
        console.error("Server Error:", error.response.data);
        // Handle server error, e.g., display an error message to the user
      } else if (error.request) {
        console.error("Request Error:", error.request);
        // Handle request error, e.g., network issue
      } else {
        console.error("Other Error:", error.message);
        // Handle other types of errors
      }
    }
  };
  return (
    <div className="md:w-[40vw] lg:w-[30vw] w-[90vw] mx-auto rounded-xl flex gap-2 justify-center items-start p-2 flex-col border-2 border-gray-400 my-5 bg-pink-50">
      <h1 className="text-3xl text-center w-full font-bold text-blue-700 mt-3">
        Register
      </h1>
      <Input
        label="Name"
        type="text"
        value={input.name}
        name="name"
        onChange={handleChange}
        autoComplete="off"
        required={true}
        placeholder="Enter Your Name."
      />
      <Input
        label="Email"
        type="email"
        value={input.email}
        name="email"
        onChange={handleChange}
        autoComplete="off"
        required={true}
        placeholder="Enter Your Email."
      />
      <Input
        label="Age"
        type="number"
        value={input.age}
        name="age"
        onChange={handleChange}
        autoComplete="off"
        required={true}
        placeholder="Enter Your Age."
      />
      <Input
        label="Phone"
        type="number"
        value={input.contact}
        name="contact"
        onChange={handleChange}
        autoComplete="off"
        required={true}
        placeholder="Enter Your Contact."
      />
      <Input
        label="Address"
        type="text"
        value={input.address}
        name="address"
        onChange={handleChange}
        autoComplete="off"
        required={true}
        placeholder="Enter Your Address."
      />
      <div className="my-2 mx-auto">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-600 px-2 py-1.5 rounded-lg text-center  text-white text-lg"
        >
          Add Details
        </button>
      </div>
    </div>
  );
};

export default Register;
