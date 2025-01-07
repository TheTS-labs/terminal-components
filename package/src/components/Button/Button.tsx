import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  color: string;
  hoverColor: string;

  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  focused?: boolean;

  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const style = {
    backgroundColor: props.focused ? props.hoverColor : props.color,
  };

  return (
    <button
      style={style}
      className={styles.button}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </button>
  );
}
