import fetch from "isomorphic-unfetch";

import { SERVER_BASE_URL } from "./constant";

const Auth = {
  current: async () => {
    const user = window.localStorage.getItem(`user`);
    const token = user && user.token;

    const response = await fetch(`/user`, {
      method: "GET",
      headers: {
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
    });
    const data = await response.json();

    return {
      ok: response.ok,
      data,
    };
  },

  login: async (email, password) => {
    const response = await fetch(`${SERVER_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { email, password } }),
    });
    const data = await response.json();

    return {
      ok: response.ok,
      data,
    };
  },

  register: async (username, email, password) => {
    const response = await fetch(`${SERVER_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { username, email, password } }),
    });
    const data = await response.json();

    return {
      ok: response.ok,
      data,
    };
  },

  save: async (user) => {
    const response = await fetch(`${SERVER_BASE_URL}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const data = await response.json();

    return {
      ok: response.ok,
      data,
    };
  },
};

export default {
  Auth,
};
