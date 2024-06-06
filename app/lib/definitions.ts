export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Post = {
  id: string;
  title: string;
  description: string;
  status: "legal" | "illegal" | "unknown";
  source: string;
};
