
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/settings">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Terms of Licence</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up">
            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Terms and Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-300">
                    <p>
                        This is a placeholder for the Terms of Licence. A real terms of service agreement would be a legal document outlining the rules and regulations for using RedHrs.
                    </p>
                    <p>
                       It would cover user responsibilities, acceptable use, intellectual property rights, disclaimers, and limitation of liability. Users would be required to agree to these terms to use the service.
                    </p>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
