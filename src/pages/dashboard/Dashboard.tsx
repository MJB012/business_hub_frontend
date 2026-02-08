import { DollarSign, TrendingUp, Box } from "lucide-react";
import { StatCard } from "../../components/stat-card/StatCard";
import { BaseCard } from "../../components/base-card/BaseCard";

export default function Dashboard() {
  return (
    // CHANGED: Removed 'w-full', 'bg-white', 'min-h-screen'. 
    // Just use padding. The parent 'main' tag handles the rest.
    <div className=" p-8 w-full bg-white">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, John Smith!</h1>
        <p className="text-gray-500 mt-1">
          Here's an overview of your business
        </p>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        {/* Recent Sales */}
        <BaseCard title="Recent Sales" subtitle="Latest transactions">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">Coffee Mug</p>
                <p className="text-sm text-gray-500 mt-0.5">2026-01-15</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">$12.99</p>
                <p className="text-sm text-gray-500 mt-0.5">Qty: 1</p>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">Wireless Headphones</p>
                <p className="text-sm text-gray-500 mt-0.5">2026-01-15</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">$399.98</p>
                <p className="text-sm text-gray-500 mt-0.5">Qty: 2</p>
              </div>
            </div>
          </div>
        </BaseCard>

        {/* Inventory Alerts */}
        <BaseCard
          title="Inventory Alerts"
          subtitle="Items that need attention"
        >
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">Coffee Mug</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  MUG-001 · Threshold: 10
                </p>
              </div>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                5 left
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">T-Shirt</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  3 variations · Threshold: 5
                </p>
              </div>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                28 left
              </span>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  );
}