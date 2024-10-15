import { Headers } from "./components/Headers";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen p-5 bg-neutral-light-gray flex flex-col items-center text-start font-Poppins">
      <Headers />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
