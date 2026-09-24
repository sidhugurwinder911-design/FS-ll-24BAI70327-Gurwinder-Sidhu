import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePlatform } from "../redux/platformSlice";

const PlatformSelector = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.platform.selected);

  const platforms = ["Twitter", "LinkedIn", "Instagram"];

  return (
    <div className="platform-container">
      <h2>Select Platform</h2>

      <div className="platform-buttons">
        {platforms.map((platform) => (
          <button
            key={platform}
            className={selected === platform ? "active-btn" : "platform-btn"}
            onClick={() => dispatch(changePlatform(platform))}
          >
            {platform}
          </button>
        ))}
      </div>

      <p className="selected-platform">
        Current Platform: <strong>{selected}</strong>
      </p>
    </div>
  );
};

export default PlatformSelector;