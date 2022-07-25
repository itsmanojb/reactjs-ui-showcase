import { createContext, useContext } from 'react';

export const initialState = {
  loggedIn: true,
  user: {
    name: 'Angel Priya',
    username: 'pricess',
    profile_picture:
      'https://xsgames.co/randomusers/assets/avatars/female/69.jpg',
  },
};
export const AuthContext = createContext(initialState);

export default function useAuthContext() {
  return useContext(AuthContext);
}
