import create from "zustand";

type FormStore = {
  sectionStep: number;
  subsectionStep: number;
  increaseSectionStep: () => void;
  decreaseSectionStep: () => void;
  increaseSubsectionStep: () => void;
  decreaseSubsectionStep: () => void;
  resetSectionStep: () => void;
  resetSubsectionStep: () => void;
  resetForm: () => void;
};

const useFormStore = create<FormStore>((set) => ({
  subsectionStep: 0,
  sectionStep: 0,
  increaseSubsectionStep: () => {
    set((state) => ({
      subsectionStep: state.subsectionStep + 1,
    }));
  },
  decreaseSubsectionStep: () => {
    set((state) => ({
      subsectionStep: state.subsectionStep - 1,
    }));
  },
  increaseSectionStep: () => {
    set((state) => ({
      subsectionStep: 0,
      sectionStep: state.sectionStep + 1,
    }));
  },
  decreaseSectionStep: () => {
    set((state) => ({
      sectionStep: state.sectionStep - 1,
    }));
  },
  resetSectionStep: () => {
    set(() => ({
      sectionStep: 0,
    }));
  },
  resetSubsectionStep: () => {
    set(() => ({
      subsectionStep: 0,
    }));
  },
  resetForm: () => {
    set(() => ({
      sectionStep: 0,
      subsectionStep: 0,
    }));
  },
}));

export default useFormStore;
