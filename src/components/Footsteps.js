import React, { useState, useEffect, useRef } from "react";
import "./Roadmap.css";
import Pic from '../roadmap.png'

const FootstepsAnimation = ({ numFootsteps }) => {
  const [footsteps, setFootsteps] = useState([]);

  // Use a ref to keep track of the last added footstep
  const lastFootstepRef = useRef(null);

  // Add a new footstep to the array
  const addFootstep = () => {
    const newFootstep = (
      <img src={Pic} className="footstep" ref={lastFootstepRef} />
    );
    setFootsteps((prevFootsteps) => [...prevFootsteps, newFootstep]);
  };

  useEffect(() => {
    // Add one footstep at a time until the desired number is reached
    const intervalId = setInterval(() => {
      if (footsteps.length < numFootsteps) {
        addFootstep();
      } else {
        clearInterval(intervalId);
      }
    }, 500); // Change this value to adjust the speed of the animation

    // When a new footstep is added, move the last one to the right
    if (lastFootstepRef.current) {
      const newTransform = `translateX(${footsteps.length * 50}px)`;
      lastFootstepRef.current.style.transform = newTransform;
      lastFootstepRef.current.setAttribute('style', `transform: ${newTransform}`);
    }

    return () => clearInterval(intervalId);
  }, [footsteps.length, numFootsteps]);

  return <div className="footsteps-container">{footsteps}</div>;
};

export default FootstepsAnimation;