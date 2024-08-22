import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './store'
import { Container, GlobalStyle } from "./styles";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/add',
    element: <AddContact />
  }
])

export type ContactType = {
  name: string
  email: string
  phone: string
  avatar: string
  description: string
}

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
