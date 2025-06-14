import React from 'react';

/**
 * A high-fidelity component for the "AI" icon seen on the Apna website.
 * This version has been improved for better visual accuracy.
 * Pass any SVG props like className or style directly to this component.
 */
const AiIcon = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Allows passing custom props like className or style
  >
    {/* Main purple rounded square frame */}
    <path
      d="M24 4H8C5.79086 4 4 5.79086 4 8V24C4 26.2091 5.79086 28 8 28H24C26.2091 28 28 26.2091 28 24V8C28 5.79086 26.2091 4 24 4Z"
      fill="#7B2CBF"
    />
    {/* The letters "AI" drawn as white paths */}
    <path
      d="M14.6596 11.5L12.7596 17.5H13.8596L14.2096 16.5H16.0596L16.4096 17.5H17.5096L15.6096 11.5H14.6596ZM15.1346 15.35L15.5596 14.1C15.6096 13.95 15.6596 13.7 15.6596 13.7C15.6596 13.7 15.7096 13.95 15.7096 14.1L16.1346 15.35H15.1346Z"
      fill="white"
    />
    <path
      d="M18.1592 11.5H19.1592V17.5H18.1592V11.5Z"
      fill="white"
    />
    {/* The sparkle shape in the bottom-right corner */}
    <path
      d="M24.5 22.5L24 21.5L23.5 22.5L22.5 23L23.5 23.5L24 24.5L24.5 23.5L25.5 23L24.5 22.5Z"
      fill="#7B2CBF"
    />
  </svg>
);

export default AiIcon;