export const signup = (username, password) => {
  return fetch('http://localhost:7891/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json());
};

export const login = (username, password) => {
  return fetch('http://localhost:7891/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json());
};

export const verifySession = () => {
  return fetch('http://localhost:7891/api/auth/verify', {
    credentials: 'include',
  })
    .then(res => res.json());
};
