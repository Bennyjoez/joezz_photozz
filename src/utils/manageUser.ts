interface User {
  id: string,
  name: string,
  email: string,
  contact: string
}

export const saveUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const whichUser = () => {
  const user = localStorage.getItem('user');
  return user
}