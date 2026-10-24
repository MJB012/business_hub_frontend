// components/SearchBar.tsx
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}: SearchBarProps) {
  return (
    <div className={`mb-6 relative max-w-md ${className}`}>
      <Search
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm
                   focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition"
      />
    </div>
  );
}
