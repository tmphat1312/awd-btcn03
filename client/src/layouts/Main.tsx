import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Container } from "../components/Container";

export function MainLayout() {
  return (
    <Container>
      <NavBar />
      <main className="max-w-lg mx-auto">
        <Outlet />
      </main>
    </Container>
  );
}
