
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/settings">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">About Us</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up">
            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Our Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-300">
                    <p>
                        RedHrs was founded by a team of former nightlife industry professionals who saw a need for a better, safer, and more empowering platform for dancers and clubs to connect.
                    </p>
                    <p>
                        We believe in creating a transparent and respectful community where performers can thrive, and venues can find the perfect talent to elevate their atmosphere. Our mission is to build the ultimate network for the nightlife world, built on trust and mutual success.
                    </p>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
