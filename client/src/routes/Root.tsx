import { useQuery } from "@tanstack/react-query";

import { H1 } from "../components/H1";
import { H2 } from "../components/H2";
import { getUsers } from "../data/get-users";
import { User } from "../components/User";

export function RootRoute() {
  const {
    error,
    data: users,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return (
      <Layout>
        <p>Loading users...</p>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <p className="text-red-500">{error.message}</p>
      </Layout>
    );
  }

  if (!users || users.length === 0) {
    return (
      <Layout>
        <p>No users yet.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <ul className="divide-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="first-of-type:border-s-4 first-of-type:border-red-300 first-of-type:ps-2"
          >
            <User user={user} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4">
        <H1>Home</H1>
        <p>This page shows created users.</p>
      </div>

      <section>
        <H2>Current Users</H2>
        {children}
      </section>
    </section>
  );
}
