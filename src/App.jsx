import DefaultLayout from "./layouts/DefaultLayout";
import EditAvatar from "./pages/EditAvatar";
import Home from "./pages/Home";
import ReactMemo from "./pages/ReactMemo";
import UseRef from "./pages/UseRef";
import { Route, BrowserRouter as Router, Routes } from "react-router";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/editAvatar" element={<EditAvatar />} />
            <Route path="/useRef" element={<UseRef />} />
            <Route path="/reactMeMo" element={<ReactMemo />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
