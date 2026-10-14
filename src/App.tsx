import "./index.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";

export function App() {
  return (
    <div className="app">
      <Header />
      <main className="form-outer-container">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
