import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center mt-20 mb-5">
        <Link href="" className="font-light text-center" passHref>
          {`Copyright © 2023 Nilima Bhujel`}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
