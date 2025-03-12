import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/hero";
import About from "./components/abour";
import TokenForm from "./components/TokenForm";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="mt-24 mb-8 space-y-5">
        <Hero />
        <TokenForm />
        <About />
      </main>
      <Analytics />
    </QueryClientProvider>
  );
}
