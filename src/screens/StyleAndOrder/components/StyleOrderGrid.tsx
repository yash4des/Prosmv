import React from "react";
import { Card } from "../../../components/ui/card";

interface StyleOrder {
  id: number;
  style: string;
  customerName: string;
  factoryName: string;
  customerType: string;
  costSMV: number;
  orders: number;
  sizeGrid: string;
  prodSMV: string;
  image: string;
}

interface StyleOrderGridProps {
  data: StyleOrder[];
}

const mockCardData = [
  {
    id: 1,
    title: "Skirt dress",
    factoryName: "EcoFabrics",
    customerType: "Distributor",
    costSMV: "12.01",
    orders: "12000",
    sizeGrid: "XXL, Medium",
    prodSMV: "13.0099",
  },
  {
    id: 2,
    title: "T-shirt",
    factoryName: "StyleThreads",
    customerType: "Retailer",
    costSMV: "8.75",
    orders: "25000",
    sizeGrid: "S, M, L, XL",
    prodSMV: "10.345",
  },
  {
    id: 3,
    title: "Jeans",
    factoryName: "DenimWorks",
    customerType: "Wholesale",
    costSMV: "15.50",
    orders: "8000",
    sizeGrid: "30, 32, 34, 36",
    prodSMV: "16.789",
  },
  {
    id: 4,
    title: "Blazer",
    factoryName: "TailoredFits",
    customerType: "Online Retailer",
    costSMV: "20.30",
    orders: "5000",
    sizeGrid: "S, M, L",
    prodSMV: "21.456",
  },
];

export const StyleOrderGrid = ({ data }: StyleOrderGridProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mockCardData.map((item) => (
        <Card key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
          <div className="p-0">
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="#374151">
                <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
              </svg>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-[#1f2a37] mb-4">{item.title}</h3>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Factory Name</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">{item.factoryName}</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Customer type</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">{item.customerType}</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Cost SMV</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">{item.costSMV}</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Orders</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">{item.orders}</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Size grid</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">{item.sizeGrid}</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Prod. SMV</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">{item.prodSMV}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-200">
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#06b6d4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
