import Footer from "@/components/footer";
import { FC, ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return <div className='content'> About </div>;
};
export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
