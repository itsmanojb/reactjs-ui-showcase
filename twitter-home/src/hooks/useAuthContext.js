import { createContext, useContext } from 'react';

export const initialState = {
  loggedIn: true,
  user: {
    name: 'Jack Persich',
    username: 'jack009',
    profile_picture:
      'https://xsgames.co/randomusers/assets/avatars/male/38.jpg',
  },
};
export const AuthContext = createContext(initialState);

export default function useAuthContext() {
  return useContext(AuthContext);
}
