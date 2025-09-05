import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClubDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
       <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl text-primary">Club Dashboard</h1>
        <p className="mt-2 text-neutral-300">Manage your venue and performers.</p>
      </header>
      <main>
        <Card className="bg-card/80 border-primary/20">
            <CardHeader>
                <CardTitle>Welcome, Club Manager</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Your club's profile, bookings, and talent management tools will be here.</p>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
