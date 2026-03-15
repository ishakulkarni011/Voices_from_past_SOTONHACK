import { create } from 'zustand';

interface SessionStore {
  userId:       string;
  sessionId:    string | null;
  monumentId:   string | null;
  monumentName: string | null;
  voiceType:    string | null;
  suggestions:  any[];
  setSession:   (data: Partial<SessionStore>) => void;
  loadUserId:   () => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  userId:       'user_' + Math.random().toString(36).slice(2, 9),
  sessionId:    null,
  monumentId:   null,
  monumentName: null,
  voiceType:    null,
  suggestions:  [],
  setSession:   (data) => set(data),
  loadUserId:   () => {},
  clearSession: () => set({ sessionId: null, monumentId: null, monumentName: null }),
}));