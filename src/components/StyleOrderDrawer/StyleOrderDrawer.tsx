import React, { useState } from "react";
import { Button } from "../ui/button";

interface StyleOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StyleOrderDrawer = ({ isOpen, onClose }: StyleOrderDrawerProps): JSX.Element => {
  const [formData, setFormData] = useState({
    factory: "",
    brand: "",
    range: "",
    styleCode: "",
    sizeGrid: "",
    notes: "",
    description: "",
    season: "",
    costSMV: "",
    customer: "",
    category: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return <></>;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 h-full w-[600px] bg-white shadow-xl z-50 transform transition-transform">
        <div className="h-full flex flex-col">
          <div className="relative h-[88px] flex items-center justify-between px-6" style={{
            backgroundImage: 'url("/Banner%201..png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#d4a537'
          }}>
            <h2 className="text-white text-[20px] font-semibold tracking-normal">
              Create Style And Order
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-white/90 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="factory"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Select factory
                  </label>
                  <select
                    id="factory"
                    name="factory"
                    value={formData.factory}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2.5 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select factory</option>
                    <option value="factory1">Factory 1</option>
                    <option value="factory2">Factory 2</option>
                    <option value="factory3">Factory 3</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Brand
                  </label>
                  <select
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2.5 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select brand</option>
                    <option value="brand1">Brand 1</option>
                    <option value="brand2">Brand 2</option>
                    <option value="brand3">Brand 3</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="range"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Range
                  </label>
                  <select
                    id="range"
                    name="range"
                    value={formData.range}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2.5 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select range</option>
                    <option value="range1">Range 1</option>
                    <option value="range2">Range 2</option>
                    <option value="range3">Range 3</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="styleCode"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    StyleCode<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="styleCode"
                    name="styleCode"
                    value={formData.styleCode}
                    onChange={handleInputChange}
                    placeholder="Enter StyleCode"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sizeGrid"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Size grid<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sizeGrid"
                    name="sizeGrid"
                    value={formData.sizeGrid}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2.5 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select size grid</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Notes
                  </label>
                  <input
                    type="text"
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Enter notes"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Description<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter description"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="season"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Season<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="season"
                    name="season"
                    value={formData.season}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2.5 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select season</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="costSMV"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Cost SMV<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="costSMV"
                    name="costSMV"
                    value={formData.costSMV}
                    onChange={handleInputChange}
                    placeholder="Cost SMV"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="customer"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Customer<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="customer"
                    name="customer"
                    value={formData.customer}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2.5 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select customer</option>
                    <option value="customer1">Customer 1</option>
                    <option value="customer2">Customer 2</option>
                    <option value="customer3">Customer 3</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Category<span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2.5 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </select>
              </div>
            </div>
          </form>

          <div className="border-t border-gray-200 p-6 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#1c64f2] rounded-lg hover:bg-[#1a56db] focus:ring-4 focus:ring-blue-300"
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
