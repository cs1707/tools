import { BaseStyles, ThemeProvider } from "@primer/react";
import { SideBar } from "../SideBar";
import { Outlet } from "react-router-dom";
import { usePageInfo } from "@/hooks/usePageInfo";
import { Helmet } from "react-helmet";

export const PageLayout = () => {
  const pageInfo = usePageInfo();

  return (
    <>
      <Helmet>
        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
      </Helmet>
      <ThemeProvider>
        <BaseStyles>
          <div>
            <div className="grid grid-cols-auto lg:grid-cols-[240px_auto] h-[100vh]">
              <div className="hidden lg:block">
                <SideBar />
              </div>
              <main className="min-w-0">
                <Outlet />
              </main>
            </div>
          </div>
        </BaseStyles>
      </ThemeProvider>
    </>
  );
};
