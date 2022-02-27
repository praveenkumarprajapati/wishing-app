import { RWebShare } from "react-web-share";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-red-600">Hello</h1>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share 🔗</button>
      </RWebShare>
    </div>
  );
}

export default App;
