import React from "react";
import ContactDetails from "../Components/ContactDetails";

type Props = {};

const SingleAd = (props: Props) => {
  return (
    <div>
      {/* Circle and line in background - START */}
      <div area-label="circle-line-background"></div>
      {/* Circle and line in background - END */}

      {/* Main part of single ad - START */}
      <div area-label="main"></div>
      {/* Main part of single ad - START */}

      {/* image - START */}
      <div></div>
      {/* image - START */}

      {/* If user exists, show ContactDetails */}
      <ContactDetails />
    </div>
  );
};

export default SingleAd;
