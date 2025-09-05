
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/settings">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Help & Support</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up">
            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-300">
                    <p>
                        If you have any questions, issues, or feedback, please don't hesitate to reach out to our support team. We're here to help!
                    </p>
                    <p>
                        You can email us directly at:
                    </p>
                    <a href="mailto:my-netwerk@gmail.com" className="font-semibold text-primary hover:underline">
                        my-netwerk@gmail.com
                    </a>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
