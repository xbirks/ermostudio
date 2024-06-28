"use client";

import React, { useEffect, useRef } from 'react';
import './cursor.scss';

const Cursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const prevX = useRef(0);
  const prevY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);

  const moveCursor = (e) => {
    targetX.current = e.clientX;
    targetY.current = e.clientY;
  };

  const animateCursor = () => {
    prevX.current += (targetX.current - prevX.current) * 1;
    prevY.current += (targetY.current - prevY.current) * 1;

    if (cursorRef.current) {
      cursorRef.current.style.left = `${prevX.current}px`;
      cursorRef.current.style.top = `${prevY.current}px`;
    }

    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    document.addEventListener('mousemove', moveCursor);
    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, .interactive');

    const addHoverClass = () => cursorRef.current.classList.add('hover');
    const removeHoverClass = () => cursorRef.current.classList.remove('hover');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);

  return <div ref={cursorRef} className="curzr-big-circle"><div className="circle"></div><div className="dot"></div></div>;
};

export default Cursor;