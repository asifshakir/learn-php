import { BrowserRouter, Routes } from "react-router-dom";
import createRoutes from './lib/createRoutes';

const routes = createRoutes();

export default function () {
  return (
    <BrowserRouter>
      <div className="container">        
        <div>
          <Routes>
            {routes}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
