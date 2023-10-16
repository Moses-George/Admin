import { create } from 'zustand';

const useToggleStore = create((set) => {
  return {
    isVisible: false,
    toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible }))
  };
});

export default useToggleStore;
