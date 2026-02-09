import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//this is dashboard interface state which is used to manage state of dashboard page
interface DashboardState {
  date: string;
  user: string;
  isSidebarOpen: boolean; 
  isMenuOpen: boolean; 
}

const initialState: DashboardState = {
  date: 'Today',
  user: 'All Users',
  isSidebarOpen: true,
  isMenuOpen: false,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => { state.date = action.payload; },
    setUser: (state, action: PayloadAction<string>) => { state.user = action.payload; },
    toggleSidebar: (state) => { state.isSidebarOpen = !state.isSidebarOpen; },
    toggleMenu: (state) => { state.isMenuOpen = !state.isMenuOpen; },
    closeMenu: (state) => { state.isMenuOpen = false; },
  },
});

export const { setDate, setUser, toggleSidebar, toggleMenu, closeMenu } = dashboardSlice.actions;
export default dashboardSlice.reducer;