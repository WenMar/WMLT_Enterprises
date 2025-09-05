
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/settings">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Cookies Policy</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up">
            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>How We Use Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-300">
                    <p>
                        This is a placeholder for the Cookies Policy. This page would explain what cookies are and how RedHrs uses them.
                    </p>
                    <p>
                        We would list the types of cookies we use (e.g., essential, performance, functionality) and provide information on how users can manage their cookie preferences through their browser settings.
                    </p>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
