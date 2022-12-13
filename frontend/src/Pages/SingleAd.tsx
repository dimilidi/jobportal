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
    <div area-label="page-singleAd" className="ml-5">
      {/* Circle and line in background - START */}
      <div area-label="circle-line-background"></div>
      {/* Circle and line in background - END */}

      {/* Main part of single ad - START */}
      <div area-label="main">
        {/* Browse Job button - START */}
        <div area-label="back-button-to-jobs" className="flex items-center">
          <span className="flex items-center w-[24px]">
            <div className="h-[14px] border-r-[2px] border-textBlack" />
            <IoMdArrowBack className="text-textBlack text-[20px]" />
          </span>
          <span className="text-darkGreen font-bold text-[20px] ">
            Browse Jobs
          </span>
        </div>
        {/* Browse Job button - END */}

        {/* Ad - START */}
        <div
          area-label="ad"
          className="w-[801px] h-[398px] rounded-[21px] bg-white mt-9 shadow-standard "
        >
          <div></div>
          <div area-label="description">
            <h3>Description</h3>
            <p>
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
        <UniButton text="Contact" onClick={handleClick} />
      </div>
      {/* Main part of single ad - START */}

      {/* image - START */}
      <div>
        <img src="" alt="" />
      </div>
      {/* image - END */}

      {/* If user exists, show ContactDetails */}
      <ContactDetails />
    </div>
  );
};

export default SingleAd;
