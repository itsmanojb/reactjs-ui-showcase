import { createContext, useContext } from 'react';

export const initialState = {
  loggedIn: true,
  user: {
    name: 'John Doe',
    username: 'john',
    profile_picture:
      'https://xsgames.co/randomusers/assets/avatars/male/42.jpg',
  },
};
export const AuthContext = createContext(initialState);

export default function useAuthContext() {
  return useContext(AuthContext);
}
