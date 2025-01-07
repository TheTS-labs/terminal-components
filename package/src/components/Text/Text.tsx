import React from "react";
import styles from "./Text.module.css";

export interface TextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function Text(props: TextProps) {
  return (
    <p
      style={props.style}
      className={`${props.className} ${styles.terminal_text}`}
    >
      {props.text}
    </p>
  );
}
