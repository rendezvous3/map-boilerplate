import App from './App';
import Home from './pages/Home';

const routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true
      },
      {
        ...Home,
        path: "/home",
        exact: true
      }
    ]
  }
]

export default routes;