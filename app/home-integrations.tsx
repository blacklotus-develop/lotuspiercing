import type { ReactNode } from "react";
import type { Lang } from "./site";

/*
 * Místa pro budoucí integrace na hlavní stránce.
 * Dokud vrací null, sekce se vůbec nevykreslí (žádný prázdný prostor ani číslo v pořadí sekcí).
 * Po připojení Behold (Instagram) a Google Places API (recenze) stačí tyto funkce doplnit —
 * zbytek hlavní stránky se měnit nemusí.
 */

/** 03 / NAŠE PRÁCE — Instagram @lotus.piercing (Alex) + @maky.piercing (Maky). */
export function instagramSection(lang: Lang, index: string): ReactNode | null {
  void lang; void index;
  return null;
}

/** 05 / RECENZE — skutečné recenze Google (Piercingové studio Black Lotus). */
export function reviewsSection(lang: Lang, index: string): ReactNode | null {
  void lang; void index;
  return null;
}
