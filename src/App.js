import CartContainer from "./CartContainer";
import Navbar from "./Navbar";

function App() {
  return (
    <main >
      <Navbar />
      <div >
        <div className="container">
          <CartContainer />
        </div>
      </div>
    </main>
  );
}

export default App;
