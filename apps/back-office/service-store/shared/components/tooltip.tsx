import React, { useState } from "react";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="tw-inline-block tw-relative"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`tw-absolute tw-rounded tw-left-5 
        tw-p-1 tw-z-100 tw-text-sm tw-leading-none  tw-inline-block  tw-mb-16  tw-translate-y-6  tw-px-3 
         tw-font-medium  rounded-lg shadow-sm tw-opacity-0 tw-transition-opacity
          dark:tw-bg-gray-700
         ${props.direction || "top"}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
