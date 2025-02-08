import { useState } from "react";
// eslint-disable-next-line import-x/no-named-as-default
import bar from "./foo";
import viteLogo from "/vite.svg"; // eslint correctly resolves root as public folder (vite feature)

// eslint-disable-next-line no-var, no-unused-vars
var donotusevar = "🙃";

/* eslint-disable react-refresh/only-export-components */
export const fofofo = () => {};
export default function () {}
/* eslint-enable react-refresh/only-export-components */

const alphabet = ["a", "b", "c", "d", "e", "f"];

/* eslint-disable valid-typeof, no-empty, use-isnan */
if (typeof alphabet === "x") {
} else if (alphabet[0] != NaN) {
}
/* eslint-enable valid-typeof, no-empty, use-isnan */

export function VanillaComponent() {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
    const [color, setColor] = useState("hotpink");
  }

  return (
    <>
      <h3>{bar + " " + "bar"}</h3>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://vite.dev" target="_blank">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={viteLogo} />
      </a>
      <ul>
        {alphabet.map((letter) => (
          // eslint-disable-next-line react/jsx-key
          <li /* key={letter} */>{letter}</li>
        ))}
      </ul>
    </>
  );
}
