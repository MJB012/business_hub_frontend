import React from "react";

interface StatCardProps {
    title: string;
    value: string;
    subtitle?: string;
    icon?: React.ReactNode; // now optional
    negative?: boolean;
}

export function StatCard({
    title,
    value,
    subtitle,
    icon,
    negative = false,
}: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between w-full hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between">
                <p className="text-black font-medium text-sm">{title}</p>

                {/* Only show icon if provided */}
                {icon ? (
                    <div className="text-black">{icon}</div>
                ) : (
                    <div /> // keeps layout identical, no shifting
                )}
            </div>

            <div className="mt-6">
                <h2 className={`text-2xl font-bold ${negative ? "text-red-500" : "text-gray-900"}`}>
                    {value}
                </h2>

                {subtitle && (
                    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
                )}
            </div>
        </div>
    );
}
