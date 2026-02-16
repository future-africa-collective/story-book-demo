export const mockUser = {
  id: "user-1",
  name: "Jane Doe",
  email: "jane@example.com",
  role: "admin" as const,
  avatar: "",
};

export const mockUsers = [
  mockUser,
  {
    id: "user-2",
    name: "John Smith",
    email: "john@example.com",
    role: "editor" as const,
    avatar: "",
  },
  {
    id: "user-3",
    name: "Emily Chen",
    email: "emily@example.com",
    role: "viewer" as const,
    avatar: "",
  },
];

export const mockCredentials = {
  email: "jane@example.com",
  password: "password123",
};
