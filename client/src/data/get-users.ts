import { TUser } from "../types";

export async function getUsers(): Promise<TUser[]> {
  // wait 500ms
  await new Promise((resolve) => setTimeout(resolve, 500));

  const resp = await fetch(`${import.meta.env.VITE_BE_URL}/users`);

  if (!resp.ok) throw new Error("Failed to fetch users.");

  return resp.json();
}
