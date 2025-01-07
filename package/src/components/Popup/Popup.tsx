import React from "react";
import { useEffect, useState } from "react";
import styles from "./Popup.module.css";
import Button from "../Button/Button";
import Text from "../Text/Text";

export interface PopupProps {
  buttonColor: string;
  buttonHoverColor: string;

  color: string;
  shadowColor: string;

  open?: boolean;

  onOK?: () => void;
  onCancel?: () => void;

  children?: React.ReactNode;
}

export default function Popup(props: PopupProps) {
  const [OKFocused, setOKFocused] = useState(false);
  const [cancelFocused, setCancelFocused] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          setOKFocused(false);
          setCancelFocused(true);
          break;
        case "ArrowLeft":
          setOKFocused(true);
          setCancelFocused(false);
          break;
        case "Enter":
          if (OKFocused) {
            props.onOK?.();
          }
          else {
            props.onCancel?.();
          }
          break;
        case "Escape":
          props.onCancel?.();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  if (!props.open) {
    return <></>;
  }

  return (
    <>
      <div className={styles.overlay} onClick={props.onCancel}></div>
      <div className={styles.container} style={{ backgroundColor: props.shadowColor }}>
        <div className={styles.inner} style={{ backgroundColor: props.color }}>
          {props.children}

          <div className={styles.buttons}>
            <Button
              color={props.buttonColor}
              hoverColor={props.buttonHoverColor}
              focused={OKFocused}
              onMouseEnter={() => {
                setOKFocused(true);
                setCancelFocused(false);
              }}
              onMouseLeave={() => setOKFocused(false)}
              onClick={props.onOK}
            >
              <Text text="< OK >" />
            </Button>

            <Button
              color={props.buttonColor}
              hoverColor={props.buttonHoverColor}
              focused={cancelFocused}
              onMouseEnter={() => {
                setOKFocused(false);
                setCancelFocused(true);
              }}
              onMouseLeave={() => setCancelFocused(false)}
              onClick={props.onCancel}
            >
              <Text text="< Cancel >" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
