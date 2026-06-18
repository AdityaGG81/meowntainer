"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// import {
//   LayoutIcon ,
//   GitBranch,
//   GithubLogo,
//   Gear,
// } from "@phosphor-icons/react";

import {
  Layout01Icon,
  GitBranchIcon,
  GithubIcon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";

import {
  DASHBOARD_NAV_ITEMS,
  type DashboardRoute,
} from "@/features/dashboard/lib/routes";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";


const NAV_ICONS = {
  "layout-dashboard": Layout01Icon ,
  "folder-git-2": GitBranchIcon,
  github: GithubIcon,
  settings: Settings01Icon,
} as const;

function isNavActive(pathname: string, href: DashboardRoute) {
  if (href === "/dashboard") {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workspace</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {DASHBOARD_NAV_ITEMS.map((item) => {
            const icon = NAV_ICONS[item.icon];
            const active = isNavActive(pathname, item.href);

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  isActive={active}
                  tooltip={item.title}
                  render={
                    <Link href={item.href}>
                      <HugeiconsIcon icon={icon} />
                      <span>{item.title}</span>
                    </Link>
                  }
                />
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}