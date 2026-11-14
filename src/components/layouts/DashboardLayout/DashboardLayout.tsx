import PageHead from "@/components/commons/PageHead";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { ReactNode, useState } from "react";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";
import { Navbar, NavbarMenuToggle } from "@nextui-org/react";

interface PropTypes{
    children: ReactNode;
    title?: string;
    type?: string;
    description?:string
}

const DashboardLayout = (props: PropTypes) => {
    const {children, description, title, type= 'admin'} = props
    const [open, setOpen] = useState(false)
    return (
        <>
    <PageHead title={title} />

    <div className="flex w-full">
      <DashboardLayoutSidebar
        sidebarItems={
          type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER
        }
        isOpen={open}
      />

      <main className="h-screen min-w-0 flex-1 overflow-y-auto">
        <Navbar
          className="flex justify-between bg-transparent px-4"
          isBlurred={false}
          classNames={{ wrapper: "p-0" }}
          position="static"
        >
          <h1 className="text-3xl font-bold">{title}</h1>

          <NavbarMenuToggle
            aria-label={open ? "Close Menu" : "Open Menu"}
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          />
        </Navbar>

        <div className="px-4">
          <p className="mb-4 text-small">{description}</p>
          {children}
        </div>
      </main>
    </div>
  </>
    )
}

export default DashboardLayout ;