import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarItem } from "../../components/sidebar-item/SideBarItem";
import { 
  LayoutDashboard, 
  FolderOpen, 
  Truck, 
  Package, 
  DollarSign, 
  Receipt, 
  Users, 
  Settings,
  Store
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FolderOpen size={20} />, label: 'Categories', path: '/categories' },
    { icon: <Truck size={20} />, label: 'Suppliers', path: '/suppliers' },
    { icon: <Package size={20} />, label: 'Inventory', path: '/inventory' },
    { icon: <DollarSign size={20} />, label: 'Sales', path: '/sales' },
    { icon: <Receipt size={20} />, label: 'Expenses', path: '/expenses' },
    { icon: <Users size={20} />, label: 'Team', path: '/team' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    // Changed: Removed 'fixed' positioning. 
    // Uses 'h-full' to fill the parent aside element.
    <div className="flex flex-col h-full bg-white">
      
      {/* Logo/Brand */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Store className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold text-gray-900">Business Hub</span>
        </div>
      </div>

      {/* Menu Items */}
      {/* Changed: Removed overflow-y-auto to prevent scrollbar */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.path} onClick={() => navigate(item.path)}>
            <SidebarItem
              icon={item.icon}
              label={item.label }
              active={location.pathname === item.path}
            />
          </div>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-100 mb-2">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
          {/* Placeholder Avatar */}
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium">
            JS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">John Smith</span>
            <span className="text-xs text-gray-500 bg-black text-white px-2 py-1 rounded-lg flex justify-center items-center mt-2"> Owner</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;