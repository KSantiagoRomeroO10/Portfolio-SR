import { create } from 'zustand'

const UseUserStore = create((set) => ({
  User:{
    Id: 0,
    Username: 'Santiago',
    Name: 'Santiago Romero',
    Email: 'KSantiagoRomeroO10@outlook.com'
  },
  SetUser: (NewUser) => set({ User: NewUser }),
  UpdateUser: (UpdateUser)=> set({ User: UpdateUser }),
  clearUser: () => set({ 
    user: { 
      id: 0, 
      username: "", 
      name: "", 
      email: "" 
    } 
  })
}))

export default UseUserStore
