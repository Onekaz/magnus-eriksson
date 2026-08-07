// lib/data/languages.ts

export type LanguageOption = {
  id: string;
  label: string;
  value: string;
  isDivider?: boolean;
  flagUrl?: string | null;
};

export const TOP_LANGUAGES = [
  "English",
  "Mandarin",
  "Hindi",
  "Spanish",
  "Arabic",
  "French",
];

export const ADDITIONAL_LANGUAGES = [
  "Bengali",
  "Bulgarian",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "Estonian",
  "Filipino",
  "Finnish",
  "German",
  "Greek",
  "Hebrew",
  "Hungarian",
  "Indonesian",
  "Italian",
  "Japanese",
  "Korean",
  "Kurdish",
  "Latvian",
  "Lithuanian",
  "Malay",
  "Marathi",
  "Nepali",
  "Norwegian",
  "Persian",
  "Polish",
  "Portuguese",
  "Romanian",
  "Russian",
  "Serbian",
  "Slovak",
  "Slovenian",
  "Swedish",
  "Swahili",
  "Tamil",
  "Thai",
  "Turkish",
  "Ukrainian",
  "Urdu",
  "Vietnamese",
].sort((a, b) => a.localeCompare(b));

export const ALL_LANGUAGES = [
  ...TOP_LANGUAGES,
  "-",
  ...ADDITIONAL_LANGUAGES,
];

export const FLAG_LANGUAGES = [
  { code: "sa", label: "Arabic" },
  { code: "bd", label: "Bengali" },
  { code: "bg", label: "Bulgarian" },
  { code: "hr", label: "Croatian" },
  { code: "cz", label: "Czech" },
  { code: "dk", label: "Danish" },
  { code: "nl", label: "Dutch" },
  { code: "gb", label: "English" },
  { code: "ee", label: "Estonian" },
  { code: "ph", label: "Filipino" },
  { code: "fi", label: "Finnish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "gr", label: "Greek" },
  { code: "il", label: "Hebrew" },
  { code: "in", label: "Hindi" },
  { code: "hu", label: "Hungarian" },
  { code: "id", label: "Indonesian" },
  { code: "it", label: "Italian" },
  { code: "jp", label: "Japanese" },
  { code: "kr", label: "Korean" },
  { code: "lv", label: "Latvian" },
  { code: "lt", label: "Lithuanian" },
  { code: "my", label: "Malay" },
  { code: "cn", label: "Mandarin" },
  { code: "np", label: "Nepali" },
  { code: "no", label: "Norwegian" },
  { code: "ir", label: "Persian" },
  { code: "pl", label: "Polish" },
  { code: "pt", label: "Portuguese" },
  { code: "ro", label: "Romanian" },
  { code: "ru", label: "Russian" },
  { code: "rs", label: "Serbian" },
  { code: "sk", label: "Slovak" },
  { code: "si", label: "Slovenian" },
  { code: "es", label: "Spanish" },
  { code: "se", label: "Swedish" },
  { code: "tz", label: "Swahili" },
  { code: "th", label: "Thai" },
  { code: "tr", label: "Turkish" },
  { code: "ua", label: "Ukrainian" },
  { code: "pk", label: "Urdu" },
  { code: "vn", label: "Vietnamese" },
];

const LOCAL_LANGUAGE_FLAG_URL_BY_LABEL = new Map([
  ["Kurdish", "/flags/languages/ku.svg"],
  ["Marathi", "/flags/languages/mr.svg"],
  ["Tamil", "/flags/languages/ta.svg"],
]);

const LANGUAGE_FLAG_CODE_BY_LABEL = new Map(
  FLAG_LANGUAGES.map((item) => [item.label, item.code]),
);

export function getLanguageFlagUrl(language: string): string | null {
  const localFlagUrl = LOCAL_LANGUAGE_FLAG_URL_BY_LABEL.get(language);

  if (localFlagUrl) {
    return localFlagUrl;
  }

  const flagCode = LANGUAGE_FLAG_CODE_BY_LABEL.get(language);
  return flagCode ? `https://flagcdn.com/${flagCode}.svg` : null;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = ALL_LANGUAGES.map(
  (language, index) => {
    if (language === "-") {
      return {
        id: `language-divider-${index}`,
        label: "",
        value: `language-divider-${index}`,
        isDivider: true,
      };
    }

    return {
      id: `language-${language}`,
      label: language,
      value: language,
      flagUrl: getLanguageFlagUrl(language),
    };
  },
);