import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchBox({ handleSearchBox }) {
  const [seachQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubit = (e) => {
    e.preventDefault();
    if (seachQuery) {
      navigate(`/search?query=${seachQuery}`);
    }
  };
  return (
    <div className="mt-4 relative">
      <form onSubmit={handleSubit}>
        <label className="input input-lg w-full">
          <input
            placeholder="Search Products"
            type="text"
            value={seachQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </form>
      <i
        class="ri-close-large-line absolute right-4 top-[25%] cursor-pointer"
        role="button"
      ></i>
    </div>
  );
}
