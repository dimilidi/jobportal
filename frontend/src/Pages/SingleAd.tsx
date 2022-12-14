import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ContactDetails from "../Components/ContactDetails";
import UniButton from "../Components/UniButton";

type Props = {};

const SingleAd = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth-required");
  };
  return (
    <div
      area-label="page-singleAd"
      className="text-Black flex justify-center relative"
    >
      {/* Circle and line in the background */}
      <div
        area-label="circle"
        className="hidden md:block md:absolute md:top-[50%] md:translate-y-[-50%] md:left-[-250px] md:w-[332px] md:h-[332px] md:rounded-full md:bg-lightGreen"
      />
      <div
        area-label="line"
        className="hidden md:block md:absolute md:top-[50%] md:translate-y-[-50%] md:left-0 border-b-2 border-lightGreen w-screen"
      />
      {/* Circle and line in background - END */}

      {/* Main part of single ad */}
      <div area-label="main" className="w-[80%] md:w-[65%] flex flex-col">
        {/* Browse Job button */}
        <div
          area-label="back-button-to-jobs"
          className="hidden md:flex md:items-center"
        >
          <span className="flex items-center w-[24px]">
            <div className="h-[14px] border-r-[2px] border-textBlack" />
            <IoMdArrowBack className="text-textBlack text-[20px]" />
          </span>
          <span className="text-darkGreen font-bold text-[20px] ">
            Browse Jobs
          </span>
        </div>
        {/* Browse Job button - END */}

        {/* Ad */}
        <div
          area-label="ad"
          className="z-10 py-5 px-9 mt-8 min-w-[270px] md:min-h-[400px] flex flex-col item-center rounded-[21px] bg-white shadow-standard"
        >
          <div>JOB LABEL</div>
          <div area-label="description" className="mt-3">
            <h3 className="text-[20px]">Description</h3>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              dignissimos expedita delectus ipsa, tempore, fugiat quae inventore
              dicta nihil aut, amet officia maiores eveniet? Neque nemo
              assumenda, incidunt eaque vero error, velit in optio voluptas nam
              impedit ab nostrum qui modi sequi, cum architecto quaerat
              laboriosam perspiciatis quo distinctio ea voluptatum. Magnam hic
              inventore iusto eveniet voluptates libero nemo, commodi itaque
              enim voluptatem in. Eum in odit vel, consequuntur labore debitis
              officiis ad quia ducimus provident tenetur voluptatum laboriosam
              nulla dolorum fugit. Modi corrupti necessitatibus perspiciatis
              temporibus ipsam doloremque molestiae similique explicabo ea!
              Dignissimos ipsum atque voluptate, placeat officia ipsa.
            </p>
          </div>
        </div>
        {/* Ad - END */}
        <UniButton
          text="Contact"
          onClick={handleClick}
          className="mb-10 md:mb-0 mt-7 self-center"
        />

        {/* If user exists, show ContactDetails - MOBILE */}
        <ContactDetails className="self-center rounded-t-[65px] w-[258px] h-[287px] md:hidden" />
      </div>
      {/* Main part of single ad */}

      {/* image */}
      <div>
        <img src="" alt="" />
      </div>
      {/* image - END */}

      {/* If user exists, show ContactDetails - DESKTOP */}
      <ContactDetails className="hidden absolute md:flex md:items-center md:right-[-150px] md:top-[50%] md:translate-y-[-50%] w-[265px] h-[173px] rounded-l-[65px]" />
    </div>
  );
};

export default SingleAd;
