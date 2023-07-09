import { FC } from "react";

import roflan from "../../assets/roflan.png";

import "./MainLayout.css";

interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="header">
        <div className="header__network-logo">
          <h1 className="header__network-name">
            <a href="/">РОФЛЕР</a>
          </h1>
          <img src={roflan} style={{ width: 30, height: 30 }} />
        </div>

        <div>
          <a href="/posts">Посты</a>
        </div>

        <div style={{ width: 100 }}>
          <a href="/login">Войти</a>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <p>Рофлер © 2023</p>
      </footer>
    </>
  );
};
