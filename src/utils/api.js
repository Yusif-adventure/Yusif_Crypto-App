const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
};

export const registerUser = async (payload) => {
  return request("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const loginUser = async (payload) => {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const fetchProfile = async () => {
  return request("/api/auth/profile", {
    method: "GET",
  });
};

export const logoutUser = async () => {
  return request("/api/auth/logout", {
    method: "POST",
  });
};

// Crypto API functions
export const fetchAllCryptos = async () => {
  return request("/api/crypto", {
    method: "GET",
  });
};

export const fetchCryptoBySymbol = async (symbol) => {
  return request(`/api/crypto/${symbol}`, {
    method: "GET",
  });
};

export const fetchTopGainers = async () => {
  return request("/api/crypto/gainers", {
    method: "GET",
  });
};

export const fetchNewListings = async () => {
  return request("/api/crypto/new", {
    method: "GET",
  });
};

export const addCrypto = async (payload) => {
  return request("/api/crypto", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
