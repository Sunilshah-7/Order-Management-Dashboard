import React from "react";
import { NavLink } from "react-router-dom";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";

const sections = [
  {
    title: "Dashboard",
    links: [
      { label: "Home", to: "/", icon: LineStyleIcon, end: true },
      { label: "Analytics", to: "/analytics", icon: TimelineIcon },
      { label: "Sales", to: "/sales", icon: TrendingUpIcon },
    ],
  },
  {
    title: "Quick Menu",
    links: [
      { label: "Users", to: "/users", icon: PersonOutlineOutlinedIcon },
      { label: "Products", to: "/products", icon: StorefrontOutlinedIcon },
      { label: "Transactions", to: "/transactions", icon: AttachMoneyOutlinedIcon },
      { label: "Business Reports", to: "/reports", icon: AssessmentOutlinedIcon },
    ],
  },
  {
    title: "Notifications",
    links: [
      { label: "Mail", to: "/mail", icon: MailOutlinedIcon },
      { label: "Feedback", to: "/feedback", icon: DynamicFeedOutlinedIcon },
      { label: "Messages", to: "/messages", icon: ChatBubbleOutlineOutlinedIcon },
    ],
  },
  {
    title: "Staff",
    links: [
      { label: "Manage", to: "/staff/manage", icon: WorkOutlineOutlinedIcon },
      { label: "Staff Reports", to: "/staff/reports", icon: ReportGmailerrorredOutlinedIcon },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-16 z-30 max-h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-b border-blue-100 bg-white/90 px-4 py-4 backdrop-blur lg:h-[calc(100vh-4rem)] lg:w-72 lg:border-b-0 lg:border-r lg:py-6">
      <nav className="grid gap-4 sm:grid-cols-2 lg:block lg:space-y-6" aria-label="Sidebar navigation">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="px-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
              {section.title}
            </h2>
            <div className="mt-2 space-y-1">
              {section.links.map((link) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition",
                        isActive
                          ? "bg-blue-600 !text-white shadow-sm shadow-blue-200 [&_span]:!text-white [&_svg]:!text-white"
                          : "text-slate-600 hover:bg-blue-50 hover:text-blue-700",
                      ].join(" ")
                    }
                  >
                    <Icon fontSize="small" />
                    <span>{link.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
