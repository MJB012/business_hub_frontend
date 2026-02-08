import { useState, useMemo } from 'react';
import { X, Plus, Search, FolderOpen, Pencil, Trash2 } from 'lucide-react';
import { type ColumnDef } from '@tanstack/react-table';
import DataTable from '../../components/data-table/DataTable';
import SearchBar from '../../components/search-bar/SearchBar';

interface Category {
  id: number;
  name: string;
  description: string;
  products: number;
}

const Category = () => {
  // Mock Data
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Electronics', description: 'Electronic devices and accessories', products: 2 },
    { id: 2, name: 'Home & Kitchen', description: 'Home and kitchen products', products: 1 },
    { id: 3, name: 'Office Supplies', description: 'Office and stationery items', products: 0 }
  ]);

  // State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  // Filter Logic
  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers
  const handleAddCategory = () => {
    if (newCategory.name.trim()) {
      setCategories([...categories, {
        id: categories.length + 1,
        name: newCategory.name,
        description: newCategory.description,
        products: 0
      }]);
      setNewCategory({ name: '', description: '' });
      setIsAddModalOpen(false);
    }
  };

  const handleEditCategory = () => {
    if (editingCategory && editingCategory.name.trim()) {
      setCategories(categories.map(c =>
        c.id === editingCategory.id ? editingCategory : c
      ));
      setIsEditModalOpen(false);
      setEditingCategory(null);
    }
  };

  const handleDeleteCategory = (category: Category) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(cat => cat.id !== category.id));
    }
  };

  const openEditModal = (category: Category) => {
    setEditingCategory({ ...category });
    setIsEditModalOpen(true);
  };

  // --- React Table Column Definition ---
  const columns = useMemo<ColumnDef<Category>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Category Name',
        cell: ({ row }) => <span className="font-medium text-gray">{row.original.name}</span>,
      },
      {
        accessorKey: 'description',
        header: 'Description',
        cell: ({ row }) => <span className="text-gray-500">{row.original.description}</span>,
      },
      {
        accessorKey: 'products',
        header: 'Products',
        cell: ({ row }) => (
          <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-medium">
            {row.original.products} {row.original.products === 1 ? 'product' : 'products'}
          </span>
        ),
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button
              onClick={() => openEditModal(row.original)}
              className="p-2 text-black hover:text-black hover:bg-gray-100 rounded-lg transition"
        >
              <Pencil size={18} />
            </button>
            <button
              onClick={() => handleDeleteCategory(row.original)}
              className="p-2 text-red-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ),
      },
    ],
    // Dependencies needed so the buttons inside the table have access to current state functions
    [categories]
  );

  return (
    <div className="w-full p-8 bg-white min-h-screen">

      {/* Header Section */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Category Management</h1>
          <p className="text-gray-500 text-sm">Organize your products into categories</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-[#000000] text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* Search Bar */}
      <SearchBar
                placeholder="Search categories..."
                value={searchTerm}
                onChange={setSearchTerm}
                className="relative max-w-md"
              />

      {/* Main Content Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <FolderOpen size={18} className="text-gray-900" />
            <h2 className="text-base font-semibold text-gray-900">Categories</h2>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {filteredCategories.length} of {categories.length} categories
          </p>
        </div>

        {/* DataTable - Now using React Table */}
        <DataTable
          columns={columns}
          data={filteredCategories}
        />
      </div>

      {/* --- ADD CATEGORY MODAL (Same as before) --- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Add New Category</h2>
                <p className="text-sm text-gray-500 mt-1">Create a new category to organize your products</p>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Category Name</label>
                <input
                  type="text"
                  placeholder="Enter category name"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
                <textarea
                  placeholder="Enter category description"
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 resize-none bg-gray-50/50 transition"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 flex justify-end">
              <button onClick={handleAddCategory} className="bg-gray-500 text-white px-6 py-2.5 rounded-lg hover:bg-gray-600 transition font-medium text-sm shadow-sm">
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- EDIT CATEGORY MODAL (Same as before) --- */}
      {isEditModalOpen && editingCategory && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Edit Category</h2>
                <p className="text-sm text-gray-500 mt-1">Update category information</p>
              </div>
              <button onClick={() => setIsEditModalOpen(false)} className="text-black hover:text-black p-1 rounded-full hover:bg-gray-100 transition">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Category Name</label>
                <input
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
                <textarea
                  value={editingCategory.description}
                  onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none bg-gray-50/50 transition"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 flex justify-end">
              <button onClick={handleEditCategory} className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition font-medium">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;