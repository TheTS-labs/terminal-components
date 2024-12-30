import React from "react";

export interface TextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function Text(props: TextProps) {
  return <p style={{ ...props.style, ...{ fontFamily: "monospace" } }} className={props.className}>{props.text}</p>;
}
