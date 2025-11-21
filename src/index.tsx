import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";
import { Customers } from "./screens/Customers";
import { StyleAndOrder } from "./screens/StyleAndOrder";
import { Machine } from "./screens/Machine";
import { Operations } from "./screens/Operations";
import { OperationSequence } from "./screens/OperationSequence";
import { ProSMV } from "./screens/ProSMV";
import { ThreadConsumption } from "./screens/ThreadConsumption";
import { Sidebar } from "./components/Sidebar";
import { LanguageProvider } from "./contexts/LanguageContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-[60px]">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/style-and-order" element={<StyleAndOrder />} />
              <Route path="/machine" element={<Machine />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/operation-sequence" element={<OperationSequence />} />
              <Route path="/pro-smv" element={<ProSMV />} />
              <Route path="/thread-consumption" element={<ThreadConsumption />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
);
