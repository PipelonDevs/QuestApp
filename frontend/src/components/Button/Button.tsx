/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import {useReducer} from "react";
import {ProgressCircular} from "../../icons/ProgressCircular";
import "./style.css";

interface Props {
  loadingEnd: boolean;
  loadingStart: boolean;
  label: string;
  startIcon: boolean;
  endIcon: boolean;
  size: "large" | "medium" | "small";
  color:
    | "warning"
    | "inherit"
    | "info"
    | "success"
    | "secondary"
    | "primary"
    | "inherit-white"
    | "error";
  stateProp: "enabled" | "focused" | "hovered" | "loading" | "disabled";
  variant: "text" | "outlined" | "contained";
  className: any;
  buttonClassName: any;
}

export const Button = ({
  loadingEnd = false,
  loadingStart = true,
  label = "Label",
  startIcon = false,
  endIcon = false,
  size,
  color,
  stateProp,
  variant,
  className,
  buttonClassName,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "large",
    color: color || "primary",
    state: stateProp || "enabled",
    variant: variant || "contained",
  });

  return (
    <button
      className={`button ${state.variant} ${state.state} ${state.size} ${state.color} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}>
      {["disabled", "enabled", "hovered", "loading"].includes(state.state) && (
        <div className="base">
          {["disabled", "enabled", "hovered"].includes(state.state) && (
            <button className={`text-wrapper ${buttonClassName}`}>
              {label}
            </button>
          )}

          {state.state === "loading" && (
            <>
              <>
                {loadingStart && (
                  <ProgressCircular
                    className={`${
                      state.variant === "contained" && state.size === "large"
                        ? "class"
                        : "class-2"
                    }`}
                  />
                )}
              </>
            </>
          )}
        </div>
      )}

      {state.state === "focused" && (
        <>
          <img
            className="focus-ripple"
            alt="Focus ripple"
            src={
              state.color === "inherit" &&
              state.variant === "contained" &&
              state.size === "large"
                ? "/img/focusripple-71.svg"
                : state.color === "inherit-white" &&
                  state.variant === "contained" &&
                  state.size === "large"
                ? "/img/focusripple-70.svg"
                : state.variant === "contained" &&
                  state.color === "secondary" &&
                  state.size === "large"
                ? "/img/focusripple-69.svg"
                : state.variant === "contained" &&
                  state.color === "error" &&
                  state.size === "large"
                ? "/img/focusripple-68.svg"
                : state.color === "warning" &&
                  state.variant === "contained" &&
                  state.size === "large"
                ? "/img/focusripple-67.svg"
                : state.color === "info" &&
                  state.variant === "contained" &&
                  state.size === "large"
                ? "/img/focusripple-66.svg"
                : state.variant === "contained" &&
                  state.color === "success" &&
                  state.size === "large"
                ? "/img/focusripple-65.svg"
                : state.color === "primary" &&
                  state.variant === "contained" &&
                  state.size === "medium"
                ? "/img/focusripple-64.svg"
                : state.color === "inherit" &&
                  state.variant === "contained" &&
                  state.size === "medium"
                ? "/img/focusripple-63.svg"
                : state.color === "inherit-white" &&
                  state.variant === "contained" &&
                  state.size === "medium"
                ? "/img/focusripple-62.svg"
                : state.color === "secondary" &&
                  state.variant === "contained" &&
                  state.size === "medium"
                ? "/img/focusripple-61.svg"
                : state.variant === "contained" &&
                  state.color === "error" &&
                  state.size === "medium"
                ? "/img/focusripple-60.svg"
                : state.color === "warning" &&
                  state.variant === "contained" &&
                  state.size === "medium"
                ? "/img/focusripple-59.svg"
                : state.color === "info" &&
                  state.variant === "contained" &&
                  state.size === "medium"
                ? "/img/focusripple-58.svg"
                : state.variant === "contained" &&
                  state.color === "success" &&
                  state.size === "medium"
                ? "/img/focusripple-57.svg"
                : state.variant === "contained" &&
                  state.size === "small" &&
                  state.color === "primary"
                ? "/img/focusripple-56.svg"
                : state.color === "inherit" &&
                  state.size === "small" &&
                  state.variant === "contained"
                ? "/img/focusripple-55.svg"
                : state.size === "small" &&
                  state.variant === "contained" &&
                  state.color === "inherit-white"
                ? "/img/focusripple-54.svg"
                : state.variant === "contained" &&
                  state.size === "small" &&
                  state.color === "secondary"
                ? "/img/focusripple-53.svg"
                : state.variant === "contained" &&
                  state.size === "small" &&
                  state.color === "error"
                ? "/img/focusripple-52.svg"
                : state.size === "small" &&
                  state.color === "warning" &&
                  state.variant === "contained"
                ? "/img/focusripple-51.svg"
                : state.color === "info" &&
                  state.variant === "contained" &&
                  state.size === "small"
                ? "/img/focusripple-50.svg"
                : state.variant === "contained" &&
                  state.size === "small" &&
                  state.color === "success"
                ? "/img/focusripple-49.svg"
                : state.variant === "outlined" &&
                  state.color === "primary" &&
                  state.size === "large"
                ? "/img/focusripple-48.svg"
                : state.color === "inherit" &&
                  state.variant === "outlined" &&
                  state.size === "large"
                ? "/img/focusripple-47.svg"
                : state.color === "inherit-white" &&
                  state.variant === "outlined" &&
                  state.size === "large"
                ? "/img/focusripple-46.svg"
                : state.variant === "outlined" &&
                  state.color === "secondary" &&
                  state.size === "large"
                ? "/img/focusripple-45.svg"
                : state.variant === "outlined" &&
                  state.color === "error" &&
                  state.size === "large"
                ? "/img/focusripple-44.svg"
                : state.color === "warning" &&
                  state.variant === "outlined" &&
                  state.size === "large"
                ? "/img/focusripple-43.svg"
                : state.color === "info" &&
                  state.variant === "outlined" &&
                  state.size === "large"
                ? "/img/focusripple-42.svg"
                : state.variant === "outlined" &&
                  state.color === "success" &&
                  state.size === "large"
                ? "/img/focusripple-41.svg"
                : state.color === "primary" &&
                  state.variant === "outlined" &&
                  state.size === "medium"
                ? "/img/focusripple-40.svg"
                : state.color === "inherit" &&
                  state.variant === "outlined" &&
                  state.size === "medium"
                ? "/img/focusripple-39.svg"
                : state.color === "inherit-white" &&
                  state.variant === "outlined" &&
                  state.size === "medium"
                ? "/img/focusripple-38.svg"
                : state.color === "secondary" &&
                  state.variant === "outlined" &&
                  state.size === "medium"
                ? "/img/focusripple-37.svg"
                : state.variant === "outlined" &&
                  state.color === "error" &&
                  state.size === "medium"
                ? "/img/focusripple-36.svg"
                : state.color === "warning" &&
                  state.variant === "outlined" &&
                  state.size === "medium"
                ? "/img/focusripple-35.svg"
                : state.variant === "outlined" &&
                  state.color === "info" &&
                  state.size === "medium"
                ? "/img/focusripple-34.svg"
                : state.variant === "outlined" &&
                  state.color === "success" &&
                  state.size === "medium"
                ? "/img/focusripple-33.svg"
                : state.variant === "outlined" &&
                  state.size === "small" &&
                  state.color === "primary"
                ? "/img/focusripple-32.svg"
                : state.color === "inherit" &&
                  state.variant === "outlined" &&
                  state.size === "small"
                ? "/img/focusripple-31.svg"
                : state.color === "inherit-white" &&
                  state.variant === "outlined" &&
                  state.size === "small"
                ? "/img/focusripple-30.svg"
                : state.variant === "outlined" &&
                  state.size === "small" &&
                  state.color === "secondary"
                ? "/img/focusripple-29.svg"
                : state.variant === "outlined" &&
                  state.size === "small" &&
                  state.color === "error"
                ? "/img/focusripple-28.svg"
                : state.color === "warning" &&
                  state.variant === "outlined" &&
                  state.size === "small"
                ? "/img/focusripple-27.svg"
                : state.variant === "outlined" &&
                  state.color === "info" &&
                  state.size === "small"
                ? "/img/focusripple-26.svg"
                : state.variant === "outlined" &&
                  state.size === "small" &&
                  state.color === "success"
                ? "/img/focusripple-25.svg"
                : state.color === "primary" &&
                  state.variant === "text" &&
                  state.size === "medium"
                ? "/img/focusripple-24.svg"
                : state.color === "inherit" &&
                  state.variant === "text" &&
                  state.size === "medium"
                ? "/img/focusripple-23.svg"
                : state.color === "inherit-white" &&
                  state.variant === "text" &&
                  state.size === "medium"
                ? "/img/focusripple-22.svg"
                : state.color === "secondary" &&
                  state.variant === "text" &&
                  state.size === "medium"
                ? "/img/focusripple-21.svg"
                : state.variant === "text" &&
                  state.color === "error" &&
                  state.size === "medium"
                ? "/img/focusripple-20.svg"
                : state.color === "warning" &&
                  state.variant === "text" &&
                  state.size === "medium"
                ? "/img/focusripple-19.svg"
                : state.color === "info" &&
                  state.variant === "text" &&
                  state.size === "medium"
                ? "/img/focusripple-18.svg"
                : state.variant === "text" &&
                  state.color === "success" &&
                  state.size === "medium"
                ? "/img/focusripple-17.svg"
                : state.variant === "text" &&
                  state.color === "primary" &&
                  state.size === "large"
                ? "/img/focusripple-16.svg"
                : state.color === "inherit" &&
                  state.variant === "text" &&
                  state.size === "large"
                ? "/img/focusripple-15.svg"
                : state.color === "inherit-white" &&
                  state.variant === "text" &&
                  state.size === "large"
                ? "/img/focusripple-14.svg"
                : state.variant === "text" &&
                  state.color === "secondary" &&
                  state.size === "large"
                ? "/img/focusripple-13.svg"
                : state.variant === "text" &&
                  state.color === "error" &&
                  state.size === "large"
                ? "/img/focusripple-12.svg"
                : state.color === "warning" &&
                  state.variant === "text" &&
                  state.size === "large"
                ? "/img/focusripple-11.svg"
                : state.color === "info" &&
                  state.variant === "text" &&
                  state.size === "large"
                ? "/img/focusripple-10.svg"
                : state.variant === "text" &&
                  state.color === "success" &&
                  state.size === "large"
                ? "/img/focusripple-9.svg"
                : state.size === "small" &&
                  state.variant === "text" &&
                  state.color === "primary"
                ? "/img/focusripple-8.svg"
                : state.color === "inherit" &&
                  state.size === "small" &&
                  state.variant === "text"
                ? "/img/focusripple-7.svg"
                : state.color === "inherit-white" &&
                  state.size === "small" &&
                  state.variant === "text"
                ? "/img/focusripple-6.svg"
                : state.size === "small" &&
                  state.variant === "text" &&
                  state.color === "secondary"
                ? "/img/focusripple-5.svg"
                : state.size === "small" &&
                  state.variant === "text" &&
                  state.color === "error"
                ? "/img/focusripple-4.svg"
                : state.color === "warning" &&
                  state.size === "small" &&
                  state.variant === "text"
                ? "/img/focusripple-3.svg"
                : state.color === "info" &&
                  state.size === "small" &&
                  state.variant === "text"
                ? "/img/focusripple-2.svg"
                : state.size === "small" &&
                  state.variant === "text" &&
                  state.color === "success"
                ? "/img/focusripple-1.svg"
                : "/img/focusripple.svg"
            }
          />
          <div className="button-wrapper">
            <button className="text-wrapper-2">{label}</button>
          </div>
        </>
      )}
    </button>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

Button.propTypes = {
  loadingEnd: PropTypes.bool,
  loadingStart: PropTypes.bool,
  label: PropTypes.string,
  startIcon: PropTypes.bool,
  endIcon: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf([
    "warning",
    "inherit",
    "info",
    "success",
    "secondary",
    "primary",
    "inherit-white",
    "error",
  ]),
  stateProp: PropTypes.oneOf([
    "enabled",
    "focused",
    "hovered",
    "loading",
    "disabled",
  ]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
};
