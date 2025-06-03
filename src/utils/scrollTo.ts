import { Sections } from "@/enums/sections";

export function scrollTo(
  section: Sections,
  block: ScrollLogicalPosition = "start",
) {
  const element = document.getElementById(section);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block });
  }
}
