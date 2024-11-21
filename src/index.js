import ReactDOM from "react";
import { createBrowserRouter, BrowserRouter } from 'react-router-dom';
import App from "./App";
import MainPage from "./components/mainPage";
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
], {
  future: {
    v7_startTransition: true,
  },
});


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <BrowserRouter future={{ v7_startTransition: true }}>
    <App />
  </BrowserRouter>
);
