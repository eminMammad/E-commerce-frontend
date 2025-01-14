import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            esse. Dicta accusamus obcaecati eligendi reiciendis repellendus,
            exercitationem atque tenetur! Eum, ipsum? Aliquam omnis quo sit,
            alias provident at molestias fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            maiores quas impedit cumque voluptate eveniet nostrum dolore
            adipisci unde, tempore veniam praesentium sit magni repudiandae
            porro, est distinctio tenetur provident!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quod
            atque voluptatibus quisquam necessitatibus et? Ducimus nam debitis
            nostrum, vitae nulla sit dolore animi magnam dignissimos a?
            Quibusdam, dolorem commodi.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"Why"} text2={"Choose Us?"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Qualitiy Assurance</b>
            <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dicta est voluptas tenetur. Tempore, eligendi! Quae blanditiis ex aliquid, quod neque ipsum nam perferendis modi beatae deserunt dicta itaque repudiandae!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience</b>
            <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dicta est voluptas tenetur. Tempore, eligendi! Quae blanditiis ex aliquid, quod neque ipsum nam perferendis modi beatae deserunt dicta itaque repudiandae!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service</b>
            <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dicta est voluptas tenetur. Tempore, eligendi! Quae blanditiis ex aliquid, quod neque ipsum nam perferendis modi beatae deserunt dicta itaque repudiandae!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
