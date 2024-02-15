import { useRef, useState } from "react";

export default function Player() {
  const userName = useRef(null);

  const [displayPlayerName, setDisplayPlayerName] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault(); // use only while work with (form) tag
    setDisplayPlayerName(userName.current.value);
    console.log(userName.current.value); 
    userName.current.value = ''
  };
  return (
    <section id="player">
      <h2>
        {displayPlayerName ? `Welcome ${displayPlayerName}` : `Welcome unknown entity`}
        {/* Welcome {displayPlayerName ?? `Welcome unknown entity`} */}

      </h2>

      <p>
        <input type="text" ref={userName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
