import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../utils/motion";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false); // State to control visibility of additional cards

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle showMore state
  };

  return (
    <>
      <a className="anchor" id="portfolio"></a>
      <motion.div
        className="portfolio py-5"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container">
          <div className="row">
            <div className="col px-0 portfolio-heading px-3">
              <motion.h1 variants={fadeIn("up", "tween", 0.5, 1)}>
                My Latest Works
              </motion.h1>
            </div>
          </div>

          <div className="row ">
            <div className="col px-0 portfolio-details my-3 px-3">
              <motion.p
                variants={fadeIn("down", "tween", 0.4, 1)}
                className="work-exp"
              >
                Perfect solution for digital experience
              </motion.p>
              <motion.p
                variants={fadeIn("down", "tween", 0.4, 1)}
                className="explore"
                onClick={handleShowMore} // Trigger showMore toggle on click
                style={{ cursor: "pointer", color: "orange", textDecoration: "underline" }}
              >
                {showMore ? "Show Less" : "Explore More Works"}
              </motion.p>
            </div>
          </div>

          <div className="row portfolio-images">
            <div className="col-md-4 mb-5">
              <a
                href="https://skblogs-33.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  variants={fadeIn("down", "tween", 0.8, 1)}
                  src={"skblogs.png"}
                  alt=""
                  width="90%"
                />
              </a>
            </div>
            <div className="col-md-4 mb-5">
              <a
                href="https://khazany-shoes33.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  variants={fadeIn("down", "tween", 0.6, 1)}
                  src={"Untitled3.png"}
                  alt=""
                  width="90%"
                />
              </a>
            </div>
            <div className="col-md-4 mb-5">
              <a
                href="https://abcbookies.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  variants={fadeIn("down", "tween", 0.7, 1)}
                  src={"Untitled2.png"}
                  alt=""
                  width="90%"
                />
              </a>
            </div>

            {/* Initially hidden cards */}
            {showMore && (
              <>
                <div className="col-md-4 mb-5">
                  <a
                    href="https://finaltodo33.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      // variants={fadeIn("down", "tween", 0.7, 1)}
                      src="todo.png"
                      alt=""
                      width="90%"
                    />
                  </a>
                </div>
                <div className="col-md-4 mb-5">
                  <a
                    href="https://mark-cyan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      // variants={fadeIn("down", "tween", 0.7, 1)}
                      src="mark.png"
                      alt=""
                      width="90%"
                    />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
