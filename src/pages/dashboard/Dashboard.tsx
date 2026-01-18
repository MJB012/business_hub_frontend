import {
  Home,
  LayoutDashboard,
  Layers,
  Truck,
  Package,
  DollarSign,
  CreditCard,
  Users,
  Settings,
  TrendingUp,
  Box,
} from "lucide-react";

import { StatCard } from "../../components/stat-card/StatCard";
import { BaseCard } from "../../components/base-card/BaseCard";
import { SidebarItem } from "../../components/sidebar-item/SideBarItem";

export default function Dashboard() {
  return (
<div className="flex min-h-screen w-screen overflow-x-hidden bg-white-50">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 p-6 text-xl font-bold">
            <Home className="w-6 h-6" />
            Business Hub
          </div>

          <nav className="space-y-1 px-4">
            <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active />
            <SidebarItem icon={<Layers />} label="Categories" />
            <SidebarItem icon={<Truck />} label="Suppliers" />
            <SidebarItem icon={<Package />} label="Inventory" />
            <SidebarItem icon={<DollarSign />} label="Sales" />
            <SidebarItem icon={<CreditCard />} label="Expenses" />
            <SidebarItem icon={<Users />} label="Team" />
            <SidebarItem icon={<Settings />} label="Settings" />
          </nav>
        </div>

        {/* User */}
        <div className="p-4 border-t flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
            JS
          </div>
          <div>
            <p className="font-semibold">John Smith</p>
            <span className="text-xs bg-black text-white px-2 py-0.5 rounded">
              Owner
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Welcome back, John Smith!</h1>
        <p className="text-gray-500 mt-1">
          Here's an overview of your business
        </p>

        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatCard
            title="Total Sales"
            value="$412.97"
            subtitle="$412.97 today"
            icon={<DollarSign />}
          />
          <StatCard
            title="Total Expenses"
            value="$1275.50"
            subtitle="$1200.00 today"
            icon={<TrendingUp />}
          />
          <StatCard
            title="Net Profit"
            value="-$862.53"
            subtitle="-208.9% margin"
            negative
            icon={<TrendingUp />}
          />
          <StatCard
            title="Inventory Value"
            value="$5064.70"
            subtitle="3 items in stock"
            icon={<Box />}
          />
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          {/* Recent Sales */}
          <BaseCard title="Recent Sales" subtitle="Latest transactions">
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Coffee Mug</p>
                  <p className="text-sm text-gray-500">2026-01-15</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$12.99</p>
                  <p className="text-sm text-gray-500">Qty: 1</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Wireless Headphones</p>
                  <p className="text-sm text-gray-500">2026-01-15</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$399.98</p>
                  <p className="text-sm text-gray-500">Qty: 2</p>
                </div>
              </div>
            </div>
          </BaseCard>

          {/* Inventory Alerts */}
          <BaseCard
            title="Inventory Alerts"
            subtitle="Items that need attention"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Coffee Mug</p>
                  <p className="text-sm text-gray-500">
                    MUG-001 · Threshold: 10
                  </p>
                </div>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  5 left
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">T-Shirt</p>
                  <p className="text-sm text-gray-500">
                    3 variations · Threshold: 5
                  </p>
                </div>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  28 left
                </span>
              </div>
            </div>
          </BaseCard>
        </div>
      </main>
    </div>
  );
}
