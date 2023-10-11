import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Cars from './containers/Cars';
import CreateForm from './containers/Cars/CreateForm';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: 'cars',
        element: <Cars />,
      },
      {
        path: 'cars/create',
        element: <CreateForm />,
      },
    ],
  },
]);
