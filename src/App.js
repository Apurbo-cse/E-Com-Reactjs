import React from "react";

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Home/Include/Navbar";


export default function App() {

return (
<Router>
  
  
  <Routes>

    <Route path="/" element={<Navbar />} />
    

  </Routes>

</Router>
);


}

