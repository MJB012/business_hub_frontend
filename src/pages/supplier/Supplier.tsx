"use client";

import { useState, useMemo } from "react";
import SearchBar from "../../components/search-bar/SearchBar";
import { type ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/data-table/DataTable";
import { StatCard } from "../../components/stat-card/StatCard";
import { Pencil, Trash2, Truck, Mail, Phone } from "lucide-react";
import EditSupplierModal from "../../components/edit-supplier-modal/EditSupplierModal";
import AddSupplierModal from "../../components/add-supplier-modal/AddSupplierModal";

interface Supplier {
  id: number;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  products: number;
  status: "active" | "inactive";
}

export default function SupplierManagement() {

  // Sample supplier data
  const suppliers: Supplier[] = [
    {
      id: 1,
      name: "Tech Supplier Co.",
      contactPerson: "Michael Chen",
      email: "michael@techsupplier.com",
      phone: "+1 555-0100",
      products: 1,
      status: "active",
    },
    {
      id: 2,
      name: "Kitchen Plus",
      contactPerson: "Sarah Johnson",
      email: "sarah@kitchenplus.com",
      phone: "+1 555-0200",
      products: 1,
      status: "active",
    },
    {
      id: 3,
      name: "Clothing Co.",
      contactPerson: "David Martinez",
      email: "david@clothingco.com",
      phone: "+1 555-0300",
      products: 1,
      status: "active",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [suppliersList, setSuppliersList] = useState<Supplier[]>(suppliers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(
    null
  );

  const handleAddSupplier = (newSupplier: any) => {
    const supplier: Supplier = {
      ...newSupplier,
      id: suppliersList.length + 1,
      products: 0,
    };
    setSuppliersList([...suppliersList, supplier]);
  };

  const handleEditSupplier = (updatedSupplier: Supplier) => {
    setSuppliersList(
      suppliersList.map((s) =>
        s.id === updatedSupplier.id ? updatedSupplier : s
      )
    );
  };

  const handleDeleteSupplier = (id: number) => {
    if (confirm("Are you sure you want to delete this supplier?")) {
      setSuppliersList(suppliersList.filter((s) => s.id !== id));
    }
  };

  const openEditModal = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setIsEditModalOpen(true);
  };

  // Filter suppliers based on searchTerm
  const filteredSuppliers = useMemo(() => {
    return suppliersList.filter((s) =>
      [s.name, s.contactPerson, s.email, s.phone].some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, suppliersList]);

  // Column definitions
  const supplierColumns: ColumnDef<Supplier>[] = [
    {
      header: "Supplier Name",
      accessorKey: "name",
      cell: ({ row }) => (
        <span className="font-medium text-gray-900">{row.original.name}</span>
      ),
    },
    {
      header: "Contact Person",
      accessorKey: "contactPerson",
      cell: ({ row }) => (
        <span className="text-gray-900">{row.original.contactPerson}</span>
      ),
    },
    {
      header: "Email",
      accessorKey: "email",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900">{row.original.email}</span>
        </div>
      ),
    },
    {
      header: "Phone",
      accessorKey: "phone",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900">{row.original.phone}</span>
        </div>
      ),
    },
    {
      header: "Products",
      accessorKey: "products",
      cell: ({ row }) => (
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          {row.original.products} product
        </span>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <span
          className={`px-4 py-1.5 rounded-full text-sm font-medium ${row.original.status === "active"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
            }`}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      header: "Actions",
      id: "actions",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => openEditModal(row.original)}
          >
            <Pencil className="w-4 h-4 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
            onClick={() => handleDeleteSupplier(row.original.id)}
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
      ),
    },
  ];

  // Stats — updated to use suppliersList
  const totalSuppliers = suppliersList.length;
  const activeSuppliers = suppliersList.filter((s) => s.status === "active")
    .length;
  const inactiveSuppliers = suppliersList.filter((s) => s.status === "inactive")
    .length;
  const avgProducts =
    suppliersList.reduce((sum, s) => sum + s.products, 0) /
    (suppliersList.length || 1);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Supplier Management
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your supplier information and contacts
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-black text-white px-4 py-2 flex justify-center items-center rounded-lg  transition font-medium text-sm shadow-sm"          >
            <span className="text-xl">+</span>
            Add Supplier
          </button>
        </div>

        {/* Search Bar */}
        <SearchBar
          placeholder="Search suppliers..."
          value={searchTerm}
          onChange={setSearchTerm}
          className="relative max-w-md"
        />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Suppliers" value={totalSuppliers.toString()} />
          <StatCard
            title="Active Suppliers"
            value={activeSuppliers.toString()}
          />
          <StatCard
            title="Inactive Suppliers"
            value={inactiveSuppliers.toString()}
          />
          <StatCard
            title="Avg Products/Supplier"
            value={avgProducts.toString()}
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-6 h-6 text-gray-700" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Suppliers</h2>
              <p className="text-sm text-gray-500">
                {filteredSuppliers.length} of {suppliersList.length} suppliers
              </p>
            </div>
          </div>
          <DataTable columns={supplierColumns} data={filteredSuppliers} />
        </div>

        <AddSupplierModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddSupplier}
        />

        <EditSupplierModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleEditSupplier}
          supplier={selectedSupplier}
        />
      </div>
    </div>
  );
}
