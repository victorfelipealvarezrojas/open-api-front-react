import {  Outlet } from "react-router-dom";

import './dashboardLayout.css'

export const DashboardLayout = () => {
  return (
    <main className="container">
      <nav className="menu">
        <h1 className="">
          ReactGPT<span className="text-indigo-500">.</span>
        </h1>
        <span className="">Bienvenido</span>
        {/* Opciones del menú */}
      </nav>

      <section className="content">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};