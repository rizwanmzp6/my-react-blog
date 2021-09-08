import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./styles.css";
import { initialPosts } from "./initialPosts";
import Home from "./pages/Home/Home";
import PostDetails from "./pages/PostDetails/PostDetails";
import NewPost from "./pages/NewPost/NewPost";

export default function App() {
  const [posts, setPosts] = useState(initialPosts);
  const history = useHistory();

  function onDelete(deleteId) {
    let searchBar = document.getElementById("searchInput");
    if (searchBar.innerText.trim() !== "") {
      let text = searchBar.innerText;
      searchBar.innerText = text;
    }

    for (let i = initialPosts.length - 1; i >= 0; --i) {
      if (initialPosts[i].id === deleteId) {
        initialPosts.splice(i, 1);
        break;
      }
    }
    history.push("/");
  }

  return (
    <div className="App">
      <main>
        <Nav initialPosts={initialPosts} posts={posts} setPosts={setPosts} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home posts={posts} setPosts={setPosts} handleDelete={onDelete} />
            )}
          />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/newpost" component={NewPost} />
        </Switch>
      </main>
    </div>
  );
}
