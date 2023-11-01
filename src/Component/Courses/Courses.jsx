import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selected, setselected] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [credits, setCredits] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handelSelcted = (a) => {
    const isExist = selected.find((item) => item.id == a.id);
    let credit = a.credit;

    let price = a.price;
    if (isExist) {
      alert("All Ready selected");
    } else {
      selected.forEach((item) => {
        credit = credit + item.credit;

        price = price + item.price;
      });
      const newSelectCourse = [...selected, a];
      setselected(newSelectCourse);
    }
    const remining = 20 - credit;

    if (credit > 20) {
      return alert("There are not enough credit points");
    } else {
      setPrice(price);
      setCredits(credit);
      setRemaining(remining);
    }
  };
  return (
    <div className="flex">
      <div className="w-9/12  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-6 mt-3">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handelSelcted={handelSelcted}
          />
        ))}
      </div>
      <div className="w-96 card bg-white p-6 m-3 h-96">
        <h2 className="text-xl text-[#2e80ec] pb-2 font-bold">
          Credit Hour Remaining {remaining} hr.
        </h2>
        <hr />
        <h2 className="text-xl pb-2 font-bold">Course Name </h2>
        <Cart key={selected.id} selected={selected} />
        <hr />
        <p className=" py-2 font-semibold ">Total Credit Hour : {credits}</p>
        <hr />
        <h2 className="text-xl pt-2 font-bold">Total Price :{price} USD</h2>
      </div>
    </div>
  );
};

export default Courses;
