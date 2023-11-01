import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";

const Course = ({ course, handelSelcted }) => {
  const { courseName, details, img, price, credit, id } = course;

  return (
    <div className="card bg-base-100 shadow-xl pb-2">
      <figure>
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
      <div className="px-3">
        <h2 className="card-title  h-12 my-1">{courseName}</h2>
        <p className="text-justify">{details}</p>
        <div className="flex justify-between font-semibold	py-2">
          <div className="badge border-0 ">
            <p>$ Price:{price}</p>
          </div>
          <div className="badge border-0">
            <HiOutlineBookOpen className="pr-2 text-3xl" />
            <span>Credit : {credit}hr</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          handelSelcted(course);
        }}
        className="bg-[#2e80ec] text-white font-semibold py-1 rounded-lg text-xl mx-2"
      >
        Select
      </button>
    </div>
  );
};

export default Course;
