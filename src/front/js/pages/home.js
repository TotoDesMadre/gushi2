import React, { useContext, useRef, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { userContext } from "./global_context";
import { Link } from "react-router-dom";
import { Fade } from "react-animation-components";
import { Transform } from "react-animation-components";
import image from "../../img/hero-img.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../../styles/home.css";

import { Audio } from "./audio";

export const Home = () => {
  const { ref: myRef, inView: elementIsVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: row2, inView: row2IsVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { auth, setAuth } = useContext(userContext);
  const { store, actions } = useContext(Context);

  if (!auth) {
    const [titleRef, titleInView] = useInView({
      triggerOnce: true,
      rootMargin: "-100px 0px",
    });
    //User NOT Logged In
    return (
      <div class="container-fluid p-0 ">
        <div className="row">
          <div
            className="col"
            style={{ height: "100vh", backgroundColor: "blue" }}
          >
            {/* <div id="hero d-flex align-items-center"></div> */}
          </div>
        </div>

        {/* <div className="row">
          <div
            className="col"
            style={{ height: "100vh", backgroundColor: "blue" }}
          >

          </div>
        </div> */}

        <div className="row">
          <div
            ref={myRef}
            className="col"
            style={{ height: "100vh", backgroundColor: "red" }}
          >
            {/* <div id="hero d-flex align-items-center"></div> */}
            <div className={`${elementIsVisible ? "box1" : ""}`}>
              <div style={{ color: "black" }}>
                <h1>This is a for viewport rendering</h1>
                <p>This is a test to see how it will look</p>
                <span>Glad you could join us</span>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "green",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //User Logged In
  return (
    <div className="text-center mt-5">
      <h1>Welcome to StoryTime</h1>
    </div>
  );
};
