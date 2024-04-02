export function useScrollToSection(sectionId: string) {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({
      behavior: "smooth",
    });
  }
};