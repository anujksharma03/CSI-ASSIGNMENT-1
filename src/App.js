// TODO :-
// .Create a React form with validation for required fields without using third party libraries,
// Display error messages, disable submission until fields are filled correctly, and show all the
// filled details on a new route post-successful submission. Fields required: First Name, Last Name,
// Username, E-mail, password (show/hide), PhoneNo. (country code ____ number), country (dropdown),
// city (dropdown), Pan No. & Aadhar No.

import Form from "./components/form/Form";
import Header from "./components/Header/Header";
import Success from "./components/Success/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <Form />
            </div>
          }
        />
        <Route
          path="/success"
          element={
            <>
              <Header />
              <Success />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
