import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            Operations
          </p>
          <span className="text-2xl font-black text-blue-950">ReactiveAdmin</span>
        </div>
        <div className="flex items-center gap-3">
          {[NotificationsOutlinedIcon, LanguageOutlinedIcon, SettingsOutlinedIcon].map(
            (Icon, index) => (
              <button
                key={index}
                type="button"
                className="relative rounded-full border border-blue-100 bg-blue-50 p-2 text-blue-700 transition hover:bg-blue-100"
                aria-label={index === 0 ? "Notifications" : index === 1 ? "Language" : "Settings"}
              >
                <Icon fontSize="small" />
                {index < 2 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                    2
                  </span>
                )}
              </button>
            ),
          )}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wRwK8gNjNOr2aB5roetnKPA7TtegKrNb6w&usqp=CAU"
            alt="Admin profile"
            className="h-10 w-10 rounded-full border-2 border-blue-100 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
