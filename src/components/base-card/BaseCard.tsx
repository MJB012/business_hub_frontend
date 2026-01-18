interface BaseCardProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}


export function BaseCard({ title, subtitle, children }: BaseCardProps) {
    return (
        <div className="bg-white rounded-2xl border-[#0000001a] outline outline-[#0000001a] p-6 w-full">
            <div className="mb-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                {subtitle && (
                    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
                )}
            </div>
            {children}
        </div>
    );
}