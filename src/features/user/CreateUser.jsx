import { useState } from "react";
import Button from "../../ui/Button";

const inputStyle =
  "md:6px w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none  focus:ring focus:ring-yellow-400 md:px-3";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`${inputStyle} mb-8 w-72 `}
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
