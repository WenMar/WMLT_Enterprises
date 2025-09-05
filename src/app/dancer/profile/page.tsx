
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Edit, ChevronLeft } from "lucide-react";
import Link from "next/link";

const interests = ["Yoga", "Running", "Pole fitness", "Travelling", "Live music"];
const clubs = [
    { name: "Velvet Lounge", dates: "Jan 2024 – Mar 2024" },
    { name: "The Gold Room", dates: "Oct 2023 - Dec 2023" },
    { name: "Platinum Lace", dates: "Jul 2023 - Sep 2023" }
];

export default function DancerProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Profile</h1>
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/profile/edit">
                    <Edit className="w-5 h-5 text-primary" />
                </Link>
            </Button>
        </header>

      <main className="flex flex-col items-center animate-fade-in-up">
        <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
          <AvatarImage src="https://placehold.co/128x128.png" alt="Dancer Nina" data-ai-hint="portrait woman" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <h2 className="font-headline text-4xl text-white">Nina</h2>
        
        <Card className="bg-card/80 border-primary/20 w-full max-w-2xl mt-8">
            <CardHeader>
                <CardTitle>Bio</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-neutral-300">
                Creative, confident, and always ready to light up the stage. Experienced performer passionate about movement, music, and building a positive vibe wherever I go.
                </p>
            </CardContent>
        </Card>

        <Card className="bg-card/80 border-primary/20 w-full max-w-2xl mt-6">
            <CardHeader>
                <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {interests.map(interest => (
                    <Badge key={interest} variant="secondary" className="bg-secondary text-secondary-foreground text-sm py-1 px-3">
                        {interest}
                    </Badge>
                ))}
            </CardContent>
        </Card>
        
        <Card className="bg-card/80 border-primary/20 w-full max-w-2xl mt-6">
            <CardHeader>
                <CardTitle>Clubs Worked At</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {clubs.map(club => (
                    <div key={club.name} className="flex justify-between items-center p-3 bg-secondary/30 rounded-md">
                        <p className="font-semibold text-white">{club.name}</p>
                        <p className="text-sm text-neutral-400">{club.dates}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card className="bg-card/80 border-primary/20 w-full max-w-2xl mt-6">
            <CardHeader>
                <CardTitle>Check Your Reviews</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-neutral-300 mb-4">See what clubs have to say about your performances.</p>
                 <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/dancer/reviews">
                        View Reviews
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </main>
    </div>
  );
}
