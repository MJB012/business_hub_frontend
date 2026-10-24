import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar - Fixed width, does not shrink */}
      <aside className="w-64 flex-shrink-0 fixed h-screen bg-white border-r border-gray-200 z-50">
        <Sidebar />
      </aside>
      
      {/* Main Content Area */}
      {/* ml-64 pushes it past the fixed sidebar */}
      {/* w-full ensures it grabs all available width */}
      <main className="flex-1 ml-64 w-full min-h-screen">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;