/* eslint-disable @stylistic/max-statements-per-line */
"use client";

import { Button, Padding, Text, Popup } from "package";
import { useState } from "react";

export default function Term() {
  const [buttonColor, setButtonColor] = useState("#1E3E62");
  const [hoverColor, setHoverColor] = useState("#0B192C");
  const [popupColor, setPopupColor] = useState("#1E3E62");
  const [popupShadowColor, setPopupShadowColor] = useState("#0B192C");

  const [choice, setChoice] = useState<"OK" | "Cancel" | null>(null);
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <label>Button color</label>
        <input type="color" value={buttonColor} onChange={e => setButtonColor(e.target.value)} />
        <label>Hover color</label>
        <input type="color" value={hoverColor} onChange={e => setHoverColor(e.target.value)} />
        <label>Popup color</label>
        <input type="color" value={popupColor} onChange={e => setPopupColor(e.target.value)} />
        <label>Popup shadow color</label>
        <input type="color" value={popupShadowColor} onChange={e => setPopupShadowColor(e.target.value)} />
      </div>

      <br />
      <br />
      <br />

      <div>
        <Text text={choice === null ? "Open popup and make your decision 👉" : choice} />

        <Button
          color={buttonColor}
          hoverColor={hoverColor}
          focused={focused}
          onMouseEnter={() => setFocused(true)}
          onMouseLeave={() => setFocused(false)}
          onClick={() => setOpen(true)}
        >
          <Padding left={5} right={5}><Text text="< Open popup >" /></Padding>
        </Button>
      </div>

      <Popup
        buttonColor={buttonColor}
        buttonHoverColor={hoverColor}
        color={popupColor}
        shadowColor={popupShadowColor}
        open={open}
        onCancel={() => { setOpen(false); setChoice("Cancel"); }}
        onOK={() => { setOpen(false); setChoice("OK"); }}
      >
        <Text style={{ textAlign: "center" }} text="Do you want to close this popup?" />
        <Text text="Your choice doesn't really matter btw. Use arrows, Enter and mouse to navigate" />
      </Popup>
    </>
  );
}
