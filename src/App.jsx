import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Index from "./project/Index";
import TicTacToe from "./project/tic-tac-toe/TicTacToe";
import MagicSquare from "./project/magic-square/MagicSquare";

function App() {
  const projectLinks = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/tic-tac-toe",
      text: "Tic Tac Toe",
      element: <TicTacToe />,
    },
    {
      path: "/magic-square",
      text: "Magic Square",
      element: <MagicSquare />,
    },
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index projectLinks={projectLinks} />,
      children: projectLinks,
    },
    // {
    //   path: "tic-tac-toe",
    //   element: <TicTacToe />,
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
