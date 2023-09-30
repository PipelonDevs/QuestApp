/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ProgressCircular = ({className}: Props): JSX.Element => {
  return (
    <svg
      className={`progress-circular ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 17 26"
      width="17"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className="path"
        d="M8 6C8.91925 6 9.82951 6.18106 10.6788 6.53284C11.5281 6.88463 12.2997 7.40024 12.9497 8.05025C13.5998 8.70026 14.1154 9.47194 14.4672 10.3212C14.8189 11.1705 15 12.0807 15 13C15 13.9193 14.8189 14.8295 14.4672 15.6788C14.1154 16.5281 13.5998 17.2997 12.9497 17.9497C12.2997 18.5998 11.5281 19.1154 10.6788 19.4672C9.8295 19.8189 8.91925 20 8 20C7.08074 20 6.17049 19.8189 5.32121 19.4672C4.47193 19.1154 3.70026 18.5998 3.05025 17.9497C2.40024 17.2997 1.88462 16.5281 1.53284 15.6788C1.18106 14.8295 1 13.9192 1 13C1 12.0807 1.18106 11.1705 1.53284 10.3212C1.88463 9.47193 2.40024 8.70026 3.05026 8.05025C3.70027 7.40024 4.47194 6.88462 5.32122 6.53284C6.1705 6.18106 7.08075 6 8 6L8 6Z"
        opacity="0"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M8 5C9.05057 5 10.0909 5.20693 11.0615 5.60896C12.0321 6.011 12.914 6.60028 13.6569 7.34315C14.3997 8.08602 14.989 8.96793 15.391 9.93853C15.7931 10.9091 16 11.9494 16 13C16 14.0506 15.7931 15.0909 15.391 16.0615C14.989 17.0321 14.3997 17.914 13.6568 18.6569C12.914 19.3997 12.0321 19.989 11.0615 20.391C10.0909 20.7931 9.05057 21 7.99999 21C6.94942 21 5.90913 20.7931 4.93853 20.391C3.96792 19.989 3.08601 19.3997 2.34314 18.6569"
        stroke="black"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeOpacity="0.38"
        strokeWidth="2"
      />
    </svg>
  );
};
