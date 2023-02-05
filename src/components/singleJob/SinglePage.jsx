import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import CompanyInfo from "./CompanyInfo";
import Description from "./Description";
import JobTitle from "./JobTitle";
import ShortInfo from "./ShortInfo";

const SinglePage = () => {
  const id = useParams();
  useEffect(() => {
    console.log(id);
  });
  return (
    <>
      <Navbar />
      <div className="w-[80%] m-auto">
        <JobTitle />
        <div className="flex flex-wrap gap-4 pt-5">
          <div className="flex-1 pb-10">
            <Description />
          </div>
          <div className="xs:w-full sm:w-full md:w-[350px]">
            <ShortInfo />
            <CompanyInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
