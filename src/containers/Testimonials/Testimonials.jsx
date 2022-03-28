import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrapper } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";

const Testimonials = () => {
  const [brandContent, setBrandContent] = useState([]);
  const [testimonialContent, setTestimonialContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const testimonialQuery = '*[_type == "testimonials"]';
    const brandQuery = '*[_type == "brands"]';

    client.fetch(testimonialQuery).then((testimonialData) => {
      setTestimonialContent(testimonialData);
    });

    client.fetch(brandQuery).then((brandData) => {
      setBrandContent(brandData);
    });
  }, []);

  const handleNextTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonialContent[currentIndex];

  return (
    <>
      {testimonialContent.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(currentTestimonial.imgurl)}
              alt={currentTestimonial.name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{currentTestimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{currentTestimonial.name}</h4>
                <h5 className="p-text">{currentTestimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleNextTestimonial(
                  currentIndex === 0
                    ? testimonialContent.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleNextTestimonial(
                  currentIndex === testimonialContent.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonials-brands app__flex">
        {brandContent.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrapper(Testimonials, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
