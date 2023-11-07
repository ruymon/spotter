import { create } from "zustand";

type SidebarContext = {
  isSidebarExpanded: boolean,
  setIsSidebarExpanded: () => void,
};

export const useSidebarContext = create<SidebarContext>(
  set => ({
    isSidebarExpanded: false,
    setIsSidebarExpanded: () => set(state => ({ isSidebarExpanded: !state.isSidebarExpanded })),
  })
);