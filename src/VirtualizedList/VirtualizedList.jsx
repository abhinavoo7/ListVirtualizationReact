import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { throttle } from "../utils/utils";

const VirtualizedList = ({
  items = [],
  itemHeight = 20,
  containerHeight = 100,
}) => {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const totalHeight = items.length * itemHeight;

  const handleScroll = () => {
    throttle(()=>{
        setScrollTop(containerRef.current.scrollTop)
    }, 100)
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount, items.length);
  const visibleItems = useMemo(() => items.slice(startIndex, endIndex), [items, startIndex, endIndex]);

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflowY: "auto",
        position: "relative",
        border: '5px solid black'
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map(({id, name}, index) => (
          <div
            key={id}
            style={{
              position: "absolute",
              top: (startIndex + index) * itemHeight,
              height: itemHeight,
              width: "100%",
              border: '1px solid black'
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;

VirtualizedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  itemHeight: PropTypes.number,
  containerHeight: PropTypes.number,
};
