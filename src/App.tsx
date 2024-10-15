import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen p-5 bg-neutral-light-gray flex flex-col items-center text-start font-Poppins">
      <h1 className="text-[1.9rem] font-light text-neutral-very-dark-blue text-center">
        CSS, Javascript, API
      </h1>
      <h1 className="text-[1.9rem] mb-3 font-bold text-neutral-very-dark-blue text-center">
        Contacts Application
      </h1>
      <p className="text-neutral-grayish-blue lgMin:px-[37%] lgMax:px-[25%] smMax:!px-[8%] text-center mb-[3rem]">
        View basic info of contacts in a 3x2 layout. Click on the magnifier icon
        to open a modal and view detailed contact info contact
      </p>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
