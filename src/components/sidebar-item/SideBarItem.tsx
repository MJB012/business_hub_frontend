// src/components/sidebar-item/SideBarItem.tsx
import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export const SidebarItem = ({ icon, label, active }: SidebarItemProps) => {
  return (
    <div
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer font-medium
        ${
          active
            ? "bg-black text-white" // Active: Black BG, White Text (Matches Image)
            : "text-black hover:bg-gray-100 hover:text-black" // Inactive
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};