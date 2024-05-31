import Navigation from "../components/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-2">
      <Navigation />
      <section className="flex flex-col">
        <div>Something here</div>
        {children}
      </section>
    </main>
  );
}
