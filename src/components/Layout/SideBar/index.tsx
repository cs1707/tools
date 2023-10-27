import { tools } from "@/constant/page-info";
import { NavList, TextInput } from "@primer/react";
import { useMemo, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

export const SideBar = () => {
  const [search, setSearch] = useState("");

  const { pathname } = useLocation();

  const filteredRoutes = useMemo(() => {
    if (!search?.trim()) {
      return tools;
    }
    return tools.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <aside className="border-r border-r-light-50  px-[16px] bg-gray-5 h-full overflow-auto fixed left-0 bottom-0 top-0 w-[240px]">
      <div className="sticky top-0 bg-gray-5 z-10 pb-[8px]">
        <Link
          to="/"
          className="h-[52px] font-semibold  text-[16px] mb-[16px] border-b border-b-light-50 flex gap-[10px] items-center text-gray-80"
        >
          <img src="/favicon.svg" className="w-[20px] h-[20px]" alt="" />
          FE Tools
        </Link>
        <TextInput
          aria-label="Search"
          name="search"
          placeholder="Search"
          autoComplete="off"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-full"
        />
      </div>
      <NavList aria-labelledby="workflows-heading">
        {filteredRoutes.map(({ path, title }) => (
          <NavList.Item
            key={path}
            as={Link}
            to={path}
            aria-current={matchPath(path, pathname) ? "page" : undefined}
          >
            {title}
          </NavList.Item>
        ))}
      </NavList>
    </aside>
  );
};
