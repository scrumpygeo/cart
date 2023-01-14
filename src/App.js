import CartContainer from "./CartContainer";
import Navbar from "./Navbar";

function App() {
  return (
    <main >
      <Navbar />
      <div className="container">
        <h2><CartContainer /></h2>
      </div>
    </main>
  );
}

export default App;
