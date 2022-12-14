import React from "react";

type Props = {
  className: string;
};

const ContactDetails = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="bg-lightGreen w-[inherit] h-[inherit] text-white px-6 py-12 rounded-[inherit]">
        <h3>Victoria Schulz</h3>
        <p>etwas@etwas.de</p>
      </div>
    </div>
  );
};

export default ContactDetails;
