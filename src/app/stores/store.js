import { create } from 'zustand'

//Conceptually, Zustand and Redux are quite similar, both are based on an immutable state model. 
//However, Redux requires your app to be wrapped in context providers; Zustand does not.

export const usebearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))