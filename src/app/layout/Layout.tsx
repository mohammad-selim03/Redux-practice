"use client";
import { store } from "@/app/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SessionProvider>
        <Provider store={store}>{children}</Provider>
      </SessionProvider>
    </div>
  );
};

export default Layout;
