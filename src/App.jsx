import { Suspense } from "react";
import Gallery from "./Gallery";
import Logo from "./Logo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Logo />
        {/* <Buttons /> */}
        <Gallery />
      </Suspense>
    </div>
  );
}

