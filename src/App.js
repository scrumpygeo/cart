import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <>
        <div className="container text-center my-5">
          <h2>Loading...</h2>
        </div>
      </>
    )
  }
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
