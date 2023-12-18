// import logo from './logo.svg';
// import './App.css';
import Listing from "./components/Listing";
import { FormContextProvider } from "./context/formContext";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="bg-customWhite h-screen">
      <FormContextProvider>
        <Listing />
        <ToastContainer 
          theme="dark"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </FormContextProvider>
    </div>
  );
}

export default App;
