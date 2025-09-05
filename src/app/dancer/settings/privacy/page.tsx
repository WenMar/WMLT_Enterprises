
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/settings">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Privacy Policy</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up">
            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Your Privacy Matters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-300">
                    <p>
                        This is a placeholder for the Privacy Policy. In a real application, this page would detail how user data is collected, used, and protected. 
                    </p>
                    <p>
                        We would outline the types of personal information we gather (e.g., email, location, user-generated content), the purposes for processing this data (e.g., to provide services, for security), and the rights of users regarding their data (e.g., access, correction, deletion).
                    </p>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
