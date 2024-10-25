export async function createUser(data: { email: string; password: string }) {
  const resp = await fetch(`${import.meta.env.VITE_BE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await resp.json();

  if (!resp.ok) {
    throw new Error(json.message);
  }

  // wait 500ms
  await new Promise((resolve) => setTimeout(resolve, 500));

  return json;
}
