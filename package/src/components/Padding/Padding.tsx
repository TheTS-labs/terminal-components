import React from "react";

export type PaddingProps = {
  right: number;
  left: number;

  children?: React.ReactNode;
};

export default function Padding(props: PaddingProps) {
  const styles = {
    display: "inline-block",
    paddingLeft: `${props.left ?? 0}ch`,
    paddingRight: `${props.right ?? 0}ch`,
  };

  return <span style={styles}>{props.children}</span>;
}
