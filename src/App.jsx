import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { navItems } from "./nav-items";

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <Routes>
        {navItems.map(({ to, page }) => (
          <Route key={to} path={to} element={page} />
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
