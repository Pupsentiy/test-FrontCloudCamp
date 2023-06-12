import { BrowserRouter as Router } from "react-router-dom";

import InternalRoutes from "./routes/Routes";

function App() {
  return (
    <main className="main-container">
      <Router>
        <InternalRoutes />
      </Router>
    </main>
  );
}

export default App;
