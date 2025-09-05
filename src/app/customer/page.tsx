import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PartyPopper } from "lucide-react";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex items-center justify-center">
       <main className="text-center">
        <Card className="bg-card/80 border-primary/20 p-8">
            <CardHeader>
                <div className="flex justify-center mb-4">
                  <PartyPopper className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="font-headline text-4xl md:text-5xl text-primary">Coming Soon!</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mt-2 text-neutral-300 max-w-md">The ultimate customer experience is being crafted. Stay tuned for exclusive access to the best nightlife.</p>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
