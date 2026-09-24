import "./App.css";
import { useSelector } from "react-redux";

import PlatformSelector from "./components/PlatformSelector";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

function App() {
  const platform = useSelector((state) => state.platform.selected);

  return (
    <div className="container">

      <div className="stats-card">
        <h2>Statistics</h2>

        <p><strong>Total Posts :</strong> 1</p>
        <p><strong>Twitter :</strong> 1</p>
        <p><strong>LinkedIn :</strong> 0</p>
        <p><strong>Instagram :</strong> 0</p>
      </div>

      <h1>Redux Post Manager</h1>

      <PlatformSelector />

      <AddPost />

      <hr />

      <PostList />

    </div>
  );
}

export default App;