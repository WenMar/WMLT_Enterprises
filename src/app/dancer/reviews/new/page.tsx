
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const clubs = ["Velvet Lounge", "The Gold Room", "Platinum Lace", "Sapphire's"];

export default function NewReviewPage() {
    const { toast } = useToast();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Review Submitted!",
            description: "Thanks for sharing your experience.",
        });
        router.push('/dancer/reviews');
    };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/reviews">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Write a Review</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-8">
                <Card className="bg-card/80 border-primary/20">
                     <CardHeader>
                        <CardTitle>Select a Club</CardTitle>
                        <CardDescription>Which club are you reviewing?</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose a club..." />
                            </SelectTrigger>
                            <SelectContent>
                                {clubs.map(club => (
                                    <SelectItem key={club} value={club}>{club}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>

                <Card className="bg-card/80 border-primary/20">
                    <CardHeader>
                        <CardTitle>Share Your Thoughts</CardTitle>
                        <CardDescription>Tell us more about your experience. All fields are optional.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="review-liked">What did you like about the club?</Label>
                            <Textarea id="review-liked" placeholder="e.g., Great music, friendly staff..." className="bg-background text-white" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="review-management">How was the management?</Label>
                            <Textarea id="review-management" placeholder="e.g., Very supportive, disorganized..." className="bg-background text-white" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="review-venue">How was the venue?</Label>
                            <Textarea id="review-venue" placeholder="e.g., Clean, great atmosphere..." className="bg-background text-white" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="review-clientele">How was the clientele? (type and vibe)</Label>
                            <Textarea id="review-clientele" placeholder="e.g., Respectful, big spenders..." className="bg-background text-white" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="review-dancers">How were the other dancers (girls)?</Label>
                            <Textarea id="review-dancers" placeholder="e.g., Welcoming, competitive..." className="bg-background text-white" />
                        </div>
                    </CardContent>
                </Card>
                
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                    Submit Review
                </Button>
            </form>
        </main>
    </div>
  );
}
