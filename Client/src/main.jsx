import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'; // Ensure this is imported
import router from './routes/router.jsx';
import { store } from './store/store.js'; // Your Redux store


// Render the app
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
