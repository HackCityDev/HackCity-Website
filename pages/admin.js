import { useState } from "react";
import Body from "../components/Admin/Body";
import Lock from "../components/Admin/Lock";

export default function Admin() {
  let password = "HackCity";
  const [value, setValue] = useState(null);
  const [openLock, setOpenLock] = useState(false);
  function checkPassword() {
    if (value === password) {
      setOpenLock(true);
      return;
    } else alert("You can do better");
  }
  return (
    <main style={{ position: "relative" }}>
      {!openLock && <Lock setValue={setValue} func={checkPassword} />}
      <Body />
    </main>
  );
}
