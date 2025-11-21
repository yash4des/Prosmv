import { BellIcon, MoonIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLanguage, Language } from "../../contexts/LanguageContext";

const timePeriods = [
  { label: "3M", value: "3M", position: 0 },
  { label: "6M", value: "6M", position: 53 },
  { label: "9M", value: "9M", position: 106 },
  { label: "12M", value: "12M", position: 159 },
  { label: "All", value: "All", position: 214 },
];

const languages = [
  { code: "en" as Language, nameKey: "english", displayName: "English", flag: "/flags---us.svg" },
  { code: "hi" as Language, nameKey: "hindi", displayName: "हिंदी", flag: "/flags---us.svg" },
  { code: "bn" as Language, nameKey: "bengali", displayName: "বাংলা", flag: "/flags---us.svg" },
  { code: "zh" as Language, nameKey: "chinese", displayName: "中文", flag: "/flags---us.svg" },
];

export const TopBar = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState("6M");
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const getSliderPosition = () => {
    const period = timePeriods.find(p => p.value === selectedPeriod);
    return period ? period.position : 53;
  };

  const getSliderWidth = () => {
    const period = timePeriods.find(p => p.value === selectedPeriod);
    return period ? period.position + 14 : 67;
  };

  return (
    <header className="flex items-center justify-between px-0 py-6 w-full">
      <div className="inline-flex flex-col items-start justify-center gap-1">
        <h1 className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#202224] text-[32px] tracking-[-0.11px] leading-normal">
          {t("hi_user")}
        </h1>
        <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-[#6b7280] text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-base-font-normal-font-style)]">
          {t("welcome")}
        </p>
      </div>

      <div className="inline-flex items-center gap-5">
        <div className="relative w-[274px] h-[42px] bg-[#f9fafb] rounded-md border border-solid border-[#d1d5db]">
          <img
            className="absolute top-2 left-3 w-6 h-6"
            alt="Calendar month"
            src="/calendar-month.svg"
          />

          <div className="absolute top-[9px] right-3 w-[214px] h-1.5 bg-gray-200 rounded">
            <div
              className="absolute h-full top-0 left-0 bg-[#1a56db] rounded transition-all duration-300 ease-in-out"
              style={{ width: `${getSliderWidth()}px` }}
            />

            <img
              className="absolute -top-1 w-[21px] h-[19px] transition-all duration-300 ease-in-out"
              alt="Polygon"
              src="/polygon-4.svg"
              style={{ left: `${getSliderPosition()}px` }}
            />
          </div>

          <div className="inline-flex h-[22px] items-center gap-[29px] absolute top-[20px] left-[48px]">
            {timePeriods.map((period) => (
              <button
                key={period.value}
                onClick={() => setSelectedPeriod(period.value)}
                className={`relative flex items-center justify-center w-fit font-text-xs-font-normal font-[number:var(--text-xs-font-normal-font-weight)] text-[length:var(--text-xs-font-normal-font-size)] text-center tracking-[var(--text-xs-font-normal-letter-spacing)] leading-[var(--text-xs-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-normal-font-style)] transition-colors duration-200 ${
                  selectedPeriod === period.value
                    ? "text-[#1a56db] font-semibold"
                    : "text-[#6b7280] hover:text-[#1a56db]"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="inline-flex items-start px-4 py-3 h-auto bg-gray-50 rounded-lg border border-solid border-[#d1d5db]"
        >
          <div className="inline-flex items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex items-center justify-center w-fit font-leading-tight-text-sm-font-semibold font-[number:var(--leading-tight-text-sm-font-semibold-font-weight)] text-[#6b7280] text-[length:var(--leading-tight-text-sm-font-semibold-font-size)] tracking-[var(--leading-tight-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-tight-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-tight-text-sm-font-semibold-font-style)]">
                {t("methoddemo")}
              </span>
              <img
                className="w-3.5 h-3.5"
                alt="Chevron down"
                src="/chevron-down-1.svg"
              />
            </div>
          </div>
        </Button>

        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-3 h-auto bg-gray-50 rounded-lg border border-solid border-[#d1d5db]"
              >
                <div className="inline-flex items-center gap-2">
                  <img className="w-3.5 h-3" alt="Flag" src={currentLanguage.flag} />
                  <span className="relative flex items-center justify-center w-fit font-leading-tight-text-sm-font-semibold font-[number:var(--leading-tight-text-sm-font-semibold-font-weight)] text-[#6b7280] text-[length:var(--leading-tight-text-sm-font-semibold-font-size)] tracking-[var(--leading-tight-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-tight-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-tight-text-sm-font-semibold-font-style)]">
                    {currentLanguage.displayName}
                  </span>
                  <img
                    className="w-3.5 h-3.5"
                    alt="Chevron down"
                    src="/chevron-down-1.svg"
                  />
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[160px]">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? "bg-gray-100" : ""}
                >
                  <div className="flex items-center gap-2 w-full">
                    <img className="w-3.5 h-3" alt={lang.displayName} src={lang.flag} />
                    <span className="text-sm text-gray-700">{lang.displayName}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
          <BellIcon className="w-6 h-6 text-gray-700" />
        </Button>

        <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
          <MoonIcon className="w-6 h-6 text-gray-700" />
        </Button>

        <div className="inline-flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/avatar.png" alt="Rajesh" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
          <span className="relative w-fit font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-[#1f2a37] text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-medium-font-style)]">
            Rajesh
          </span>
        </div>
      </div>
    </header>
  );
};
