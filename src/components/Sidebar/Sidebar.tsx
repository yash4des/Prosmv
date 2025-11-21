import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useLanguage } from "../../contexts/LanguageContext";

interface NavigationItem {
  icon: string;
  alt: string;
  labelKey: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  {
    icon: "/chart-pie.svg",
    alt: "Dashboard",
    labelKey: "dashboard",
    path: "/dashboard",
  },
  {
    icon: "/users-group.svg",
    alt: "Customer",
    labelKey: "customer",
    path: "/customers",
  },
  {
    icon: "/draw-square.svg",
    alt: "Style and order",
    labelKey: "style_and_order",
    path: "/style-and-order",
  },
  {
    icon: "/computer-speaker.svg",
    alt: "Machine",
    labelKey: "machine",
    path: "/machine",
  },
];

const secondaryNavigationItems: NavigationItem[] = [
  {
    icon: "/rectangle-list.svg",
    alt: "Operations",
    labelKey: "operations",
    path: "/operations",
  },
  {
    icon: "/ordored-list.svg",
    alt: "Operation sequence",
    labelKey: "operation_sequence",
    path: "/operation-sequence",
  },
  {
    icon: "/clock.svg",
    alt: "Pro SMV",
    labelKey: "pro_smv",
    path: "/pro-smv",
  },
  {
    icon: "/Frame.svg",
    alt: "Thread consumption",
    labelKey: "thread_consumption",
    path: "/thread-consumption",
  },
];

export const Sidebar = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed left-0 top-0 h-screen flex flex-col items-start gap-8 px-0 py-5 bg-white transition-all duration-300 ease-in-out shadow-sm z-50 ${
        isExpanded ? "w-[240px]" : "w-[60px]"
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`absolute top-5 -right-3 h-8 w-8 rounded-lg bg-white hover:bg-gray-100 transition-opacity duration-200 shadow-md border border-gray-200 z-10 ${
          isHovered || isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        {isExpanded ? (
          <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
        ) : (
          <ChevronRightIcon className="w-5 h-5 text-gray-700" />
        )}
      </Button>

      <div className={`flex items-center gap-3 px-3 w-full ${isExpanded ? "justify-start" : "justify-center"}`}>
        <img
          className="relative w-[32.43px] h-[32.43px]"
          alt="Frame"
          src="/frame-24.svg"
        />
        {isExpanded && (
          <span className="font-semibold text-gray-900 text-lg whitespace-nowrap">
            {t("pro_smv")}
          </span>
        )}
      </div>

      <nav className="relative self-stretch w-full flex flex-col items-start gap-2 px-2">
        {navigationItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={index}
              variant="ghost"
              onClick={() => navigate(item.path)}
              className={`w-full h-auto px-3 py-2.5 rounded-lg flex items-center gap-3 transition-all ${
                isExpanded ? "justify-start" : "justify-center"
              } ${
                isActive
                  ? "bg-[#ebf5ff] text-[#1c64f2]"
                  : "text-gray-700 hover:bg-gray-50"
              } group`}
            >
              <img
                className={`relative w-6 h-6 flex-shrink-0 transition-all ${
                  isActive
                    ? "brightness-0 saturate-100 [filter:invert(38%)_sepia(89%)_saturate(2262%)_hue-rotate(203deg)_brightness(98%)_contrast(95%)]"
                    : "brightness-0 saturate-100 [filter:invert(47%)_sepia(8%)_saturate(316%)_hue-rotate(182deg)_brightness(93%)_contrast(87%)] group-hover:[filter:invert(38%)_sepia(89%)_saturate(2262%)_hue-rotate(203deg)_brightness(98%)_contrast(95%)]"
                }`}
                alt={item.alt}
                src={item.icon}
              />
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {t(item.labelKey)}
                </span>
              )}
            </Button>
          );
        })}
      </nav>

      <div className="relative self-stretch w-full h-[2px] bg-gray-200" />

      <nav className="relative self-stretch w-full flex flex-col items-start gap-2 px-2">
        {secondaryNavigationItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={index}
              variant="ghost"
              onClick={() => navigate(item.path)}
              className={`w-full h-auto px-3 py-2.5 rounded-lg flex items-center gap-3 transition-all ${
                isExpanded ? "justify-start" : "justify-center"
              } ${
                isActive
                  ? "bg-[#ebf5ff] text-[#1c64f2]"
                  : "text-gray-700 hover:bg-gray-50"
              } group`}
            >
              <img
                className={`relative w-6 h-6 flex-shrink-0 transition-all ${
                  isActive
                    ? "brightness-0 saturate-100 [filter:invert(38%)_sepia(89%)_saturate(2262%)_hue-rotate(203deg)_brightness(98%)_contrast(95%)]"
                    : "brightness-0 saturate-100 [filter:invert(47%)_sepia(8%)_saturate(316%)_hue-rotate(182deg)_brightness(93%)_contrast(87%)] group-hover:[filter:invert(38%)_sepia(89%)_saturate(2262%)_hue-rotate(203deg)_brightness(98%)_contrast(95%)]"
                }`}
                alt={item.alt}
                src={item.icon}
              />
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {t(item.labelKey)}
                </span>
              )}
            </Button>
          );
        })}
      </nav>

      <div className="flex flex-col items-center justify-end gap-4 pt-0 pb-6 px-2 flex-1 grow relative self-stretch w-full">
        <Button
          variant="ghost"
          className={`w-full h-auto px-3 py-2.5 rounded-lg flex items-center gap-3 transition-all ${
            isExpanded ? "justify-start" : "justify-center"
          } text-gray-700 hover:bg-gray-50 group`}
        >
          <img
            className="relative w-6 h-6 flex-shrink-0 transition-all brightness-0 saturate-100 [filter:invert(47%)_sepia(8%)_saturate(316%)_hue-rotate(182deg)_brightness(93%)_contrast(87%)] group-hover:[filter:invert(38%)_sepia(89%)_saturate(2262%)_hue-rotate(203deg)_brightness(98%)_contrast(95%)]"
            alt="Setting"
            src="/cog.svg"
          />
          {isExpanded && (
            <span className="text-sm font-medium whitespace-nowrap">
              {t("setting")}
            </span>
          )}
        </Button>

        <Button
          variant="ghost"
          className={`w-full h-auto px-3 py-2.5 rounded-lg flex items-center gap-3 transition-all ${
            isExpanded ? "justify-start" : "justify-center"
          } text-red-600 hover:bg-red-50 group`}
        >
          <img
            className="relative w-6 h-6 flex-shrink-0 transition-all brightness-0 saturate-100 [filter:invert(32%)_sepia(66%)_saturate(3243%)_hue-rotate(342deg)_brightness(92%)_contrast(95%)]"
            alt="Log out"
            src="/arrow-right-to-bracket-outline.svg"
          />
          {isExpanded && (
            <span className="text-sm font-medium whitespace-nowrap">
              {t("log_out")}
            </span>
          )}
        </Button>
      </div>
    </aside>
  );
};
