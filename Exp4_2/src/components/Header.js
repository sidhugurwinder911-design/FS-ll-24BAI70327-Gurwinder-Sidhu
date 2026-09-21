import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>⚡ PERFORMANCE OPTIMIZED EVENT SCHEDULER</h1>

      <p>
        React.memo • useMemo • useCallback • React Testing Library
      </p>
    </header>
  );
}

export default React.memo(Header);