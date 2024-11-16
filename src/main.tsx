import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Film from "./pages/Film/Film.tsx";
import ErrorPage from "@/pages/ErrorPage/ErrorPage.tsx";
import getFilmById from "@/backend/api/films/getFilmById.ts";

type filmId = string | undefined;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/film/:filmId",
      element: <Film />,
      loader: async (items) => {
        const filmId: filmId = items.params?.filmId;
        if (filmId) {
          const data = await getFilmById(filmId);
          return data;
        }
      },
      errorElement: <ErrorPage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </StrictMode>
);
