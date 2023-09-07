// import logo from './logo.svg';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
