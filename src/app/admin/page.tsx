import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl text-primary">Admin Dashboard</h1>
        <p className="mt-2 text-neutral-300">Oversee the entire RedHrs platform.</p>
      </header>
      <main>
        <Card className="bg-card/80 border-primary/20">
            <CardHeader>
                <CardTitle>Platform Management</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Administrative tools and platform statistics will be available here.</p>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
