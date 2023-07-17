import { create } from 'zustand';

interface InitialState {
  recipes: Recipe[];
  page: number;
  isLoading: boolean;
  setPage: (by: number) => void;
  setRecipes: (data: Recipe[]) => void;
  setIsLoading: (loadingState: boolean) => void;
}

const useRecipesStore = create<InitialState>()((set) => ({
  recipes: [],
  page: 1,
  isLoading: false,
  setRecipes: (data) => set({ recipes: data }),
  setPage: () => set((state) => ({ page: state.page + 1 })),
  setIsLoading: (loadingState) => set({ isLoading: loadingState }),
}));

export default useRecipesStore;
