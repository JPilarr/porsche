import { FormSection } from "interfaces";

export const getFormProgress = (
  sections: FormSection[],
  sectionStep: number,
  subsectionStep: number
) => {
  const { totalSubsections, doneSubsections } = sections.reduce(
    (acc, section, index) => {
      if (sectionStep > index) {
        return {
          totalSubsections: acc.totalSubsections + section.sub_sections.length,
          doneSubsections: acc.doneSubsections + section.sub_sections.length,
        };
      }

      if (sectionStep < index) {
        return {
          totalSubsections: acc.totalSubsections + section.sub_sections.length,
          doneSubsections: acc.doneSubsections,
        };
      }

      if (sectionStep === index) {
        return {
          totalSubsections: acc.totalSubsections + section.sub_sections.length,
          doneSubsections: acc.doneSubsections + subsectionStep,
        };
      }

      return acc;
    },
    { totalSubsections: 0, doneSubsections: 0 }
  );

  return (doneSubsections / totalSubsections) * 100;
};
