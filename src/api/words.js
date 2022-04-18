import apiClient from "./apiClient";

/**
 * Получить все слова для сайта
 * @returns
 */
export function GetWords() {
  return apiClient.get("https://api.minicen.ru/proc/sprWordsGetForSite", {
    params: {
      returntype: "all",
    },
  });
}
