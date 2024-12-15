import { create } from "zustand";

interface UserStore {
  email: string;
  setEmail: (email: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  email: "", // Initial email state
  setEmail: (email) => set({ email }), // Function to update email
}));

export default useUserStore;