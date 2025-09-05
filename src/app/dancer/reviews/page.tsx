
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Star, PlusCircle } from "lucide-react";
import Link from "next/link";

const clubsToReview = [
    {
        name: "Club Étoile",
        city: "Paris"
    },
    {
        name: "Moonlight Bar",
        city: "Berlin"
    }
];

const reviews = [
    {
        club: "Platinum Lace",
        review: "Loved the club, but I’m not sure about the management.",
        rating: 4,
        date: "2024-08-15"
    },
    {
        club: "Velvet Lounge",
        review: "Great atmosphere and the staff were really supportive. Music was on point all night.",
        rating: 5,
        date: "2024-07-22"
    },
    {
        club: "The Gold Room",
        review: "Decent place. The crowd was a bit mixed, but the security team was very professional.",
        rating: 3,
        date: "2024-06-05"
    }
]

export default function DancerReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Club Reviews</h1>
             <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up space-y-12">
            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Write a New Review</CardTitle>
                    <CardDescription>Share your experience at a club you've recently worked at.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {clubsToReview.map((club) => (
                         <Card key={club.name} className="bg-secondary/30 p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-white">{club.name}</h3>
                                <p className="text-sm text-neutral-400">{club.city}</p>
                            </div>
                            <Button asChild>
                                <Link href="/dancer/reviews/new">Write a Review</Link>
                            </Button>
                        </Card>
                    ))}
                    <div className="text-center pt-2">
                        <Button variant="link" asChild className="text-primary h-auto whitespace-normal">
                            <Link href="/dancer/reviews/new">
                                <PlusCircle className="mr-2 h-4 w-4 shrink-0" />
                                <span>Can't find the club? Write a review anyway.</span>
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Your Past Reviews</CardTitle>
                    <CardDescription>Here are the reviews you've shared with the community.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {reviews.map((review, index) => (
                        <div key={index}>
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-white text-lg">{review.club}</h3>
                                        <p className="text-sm text-neutral-400">{new Date(review.date).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-primary fill-primary' : 'text-neutral-600'}`} />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-neutral-300 italic">"{review.review}"</p>
                            </div>
                            {index < reviews.length - 1 && <Separator className="my-6 bg-primary/20" />}
                        </div>
                    ))}
                     {reviews.length === 0 && (
                        <div className="text-center py-8 text-neutral-400">
                            <p>You haven't written any reviews yet.</p>
                            <Button variant="link" asChild className="text-primary mt-2">
                                <Link href="/dancer/reviews/new">Write your first review</Link>
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
