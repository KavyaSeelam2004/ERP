import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Departments from "../components/Departments";

const FormSuccess = () => {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    const dept = localStorage.getItem("selectedDepartment");
    if (dept) {
      setSelectedDepartment(dept);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="container">
      <Departments selectedDepartment={selectedDepartment} />
    </div>
  );
};

export default FormSuccess;