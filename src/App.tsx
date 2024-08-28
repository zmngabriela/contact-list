import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from './store'
import { Container, GlobalStyle } from "./styles";

import Home from "./pages/Home";
import AddContactPage from "./pages/AddContactPage";
import ContactInfoPage from "./pages/ContactInfoPage";
import EditContactPage from "./pages/EditContactPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/add',
    element: <AddContactPage />
  },
  {
    path: '/contact/:name',
    element: <ContactInfoPage />
  },
  {
    path: '/contact/:name/edit',
    element: <EditContactPage />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  );
}

export default App;
