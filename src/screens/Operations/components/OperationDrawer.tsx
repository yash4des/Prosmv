import React, { useState } from "react";
import { Button } from "../../../components/ui/button";

interface OperationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OperationDrawer = ({ isOpen, onClose }: OperationDrawerProps): JSX.Element => {
  const [formData, setFormData] = useState({
    material: "",
    product: "",
    part: "",
    opType: "",
    subSelection: "",
    machine: "",
    skill: "",
    grade: "",
    description: "",
    smv: "",
    workAid: "",
    sl: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              Add New Operation
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
                    htmlFor="material"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Material<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    placeholder="Add material"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Product<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    placeholder="Enter product"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="part"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Part<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="part"
                    name="part"
                    value={formData.part}
                    onChange={handleInputChange}
                    placeholder="Enter part"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="opType"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    OP type<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="opType"
                    name="opType"
                    value={formData.opType}
                    onChange={handleInputChange}
                    placeholder="Enter OP type"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="subSelection"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Sub selection<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subSelection"
                    name="subSelection"
                    value={formData.subSelection}
                    onChange={handleInputChange}
                    placeholder="Enter sub selection"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="machine"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Machine<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="machine"
                    name="machine"
                    value={formData.machine}
                    onChange={handleInputChange}
                    placeholder="Enter machine"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="skill"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Skill<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="skill"
                    name="skill"
                    value={formData.skill}
                    onChange={handleInputChange}
                    placeholder="Enter skill"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="grade"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Grade<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    placeholder="Enter grade"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Description<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Write text here ..."
                  rows={4}
                  className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 resize-none"
                />
                <p className="mt-2 text-xs text-gray-500">A note for extra info</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="smv"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    SMV
                  </label>
                  <input
                    type="text"
                    id="smv"
                    name="smv"
                    value={formData.smv}
                    onChange={handleInputChange}
                    placeholder="Enter SMV"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="workAid"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Work AID
                  </label>
                  <input
                    type="text"
                    id="workAid"
                    name="workAid"
                    value={formData.workAid}
                    onChange={handleInputChange}
                    placeholder="Enter work AID"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sl"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    SL.
                  </label>
                  <input
                    type="text"
                    id="sl"
                    name="sl"
                    value={formData.sl}
                    onChange={handleInputChange}
                    placeholder="Enter SL"
                    className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
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
              Add operation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
