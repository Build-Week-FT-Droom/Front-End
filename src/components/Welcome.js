import React, { useRef, useEffect } from "react";
import { Button } from "reactstrap";
import JobList from "./Joblist";
import { Route, Link } from "react-router-dom";
import { gsap,TweenMax, Power3 } from "gsap";

export default function Welcome() {
  let myImg = useRef(null);
  let myH2 = useRef(null);
  let myH1 = useRef(null);
  useEffect(() => {
    // gsap.from(myImg, 3, { x: 200, rotation: 90, opacity: 0, delay: 1,ease: Power3.easeout});
    // TweenMax.from(myH2, 3, { x: -200, rotation: 90, opacity: 0, delay: 0.5});
    // TweenMax.from(myH1, 3, { x: -200, opacity: 0 });
    TweenMax.staggerFrom([myH1, myH2, myImg], 3, { x: 200, rotation: 90, opacity: 0, delay: 1,ease: Power3.easeout}, 0.5)
  }, []);

  return (
    <div className="welcome">
      <div className="welcome2">
        <h1 
          ref={el => {
            myH1 = el;
          }}
        >
          Welcome to Droom
        </h1>
        <h2
          ref={el => {
            myH2 = el;
          }}
        >
          Search for your dream jobs
        </h2>
      </div>
      <img
        ref={el => {
          myImg = el;
        }}
        src ="https://images.unsplash.com/photo-1450150713862-56d28b961558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
        // src="https://images.unsplash.com/photo-1525876183281-0d0d9308010d?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=525&q=60"
        alt="droom"
      ></img>
    </div>
  );
}
