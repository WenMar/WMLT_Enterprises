
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, Star, Heart, MapPin, Calendar as CalendarIcon, Mail } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

const clubsData = [
  {
    id: "1",
    name: "Velvet Lounge",
    city: "New York",
    distance: "2.5 miles",
    rating: 5,
    reviewPreview: "Great vibes, well-managed!",
    isFavorite: false,
    images: [
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
    ],
    description: {
        floorFee: "£50 per night",
        rules: "Professional attire required. No outside drinks. Arrive 30 minutes before your shift.",
        dressCode: "Elegant & classy. Gowns or cocktail dresses.",
        clientele: "High-end professionals and tourists.",
    },
    ratings: {
        management: 5,
        venue: 5,
        dancerExperience: 4,
        pay: 5,
    },
    testimonials: [
        "The best management I've ever worked with. Super respectful.",
        "Great money, especially on weekends. The crowd is always high-end.",
        "Beautiful club, great sound system, and very safe.",
    ],
    contact: {
        email: "booking@velvetlounge.com",
        instagram: "https://instagram.com/velvetlounge",
        website: "https://velvetlounge.com"
    }
  },
  // Add other club details here...
];

const getClubById = (id: string) => {
    // In a real app, you would fetch this from an API.
    // For now, we'll find it in our mock data. We'll default to Velvet Lounge if not found.
    return clubsData.find(club => club.id === id) || clubsData[0];
}

export default function ClubDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const { toast } = useToast();
    const clubId = typeof params.clubId === 'string' ? params.clubId : '';
    const club = getClubById(clubId);

    const [isBooking, setIsBooking] = useState(false);
    const [date, setDate] = useState<DateRange | undefined>({ from: new Date(), to: addDays(new Date(), 4) });
    const [emailDraft, setEmailDraft] = useState("");

    const handleBookingClick = () => {
        setIsBooking(true);
        const dates = date?.from && date?.to ? `${format(date.from, "PPP")} to ${format(date.to, "PPP")}` : "the selected dates";
        setEmailDraft(`Hi ${club.name},\n\nI’m interested in working at your club on the following date(s): ${dates}.\n\nPlease let me know if availability is open.\n\nThanks!\nNina`);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(club.contact.email);
        toast({ title: "Email address copied to clipboard!" });
    }

    return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/clubs">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary truncate">{club.name}</h1>
            <Button variant="ghost" size="icon" className="text-white hover:text-destructive active:text-destructive">
                <Heart className={`w-6 h-6`} />
            </Button>
        </header>

        <main className="max-w-4xl mx-auto animate-fade-in-up space-y-8">
            <Carousel className="w-full">
                <CarouselContent>
                    {club.images.map((src, index) => (
                        <CarouselItem key={index}>
                            <Image src={src} alt={`${club.name} image ${index + 1}`} width={800} height={400} className="rounded-lg object-cover w-full aspect-video" data-ai-hint="nightclub interior" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>

            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Club Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-primary">Floor Fee</h4>
                        <p className="text-neutral-300">{club.description.floorFee}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-primary">Dress Code</h4>
                        <p className="text-neutral-300">{club.description.dressCode}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">Club Rules</h4>
                        <p className="text-neutral-300">{club.description.rules}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-primary">Clientele</h4>
                        <p className="text-neutral-300">{club.description.clientele}</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Ratings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Rating category="Management" value={club.ratings.management} />
                    <Rating category="Venue" value={club.ratings.venue} />
                    <Rating category="Dancer Experience" value={club.ratings.dancerExperience} />
                    <Rating category="Pay" value={club.ratings.pay} />
                </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Dancer Testimonials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {club.testimonials.map((quote, index) => (
                        <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-neutral-300">
                           "{quote}"
                        </blockquote>
                    ))}
                </CardContent>
            </Card>
            
            {!isBooking ? (
                 <Button onClick={handleBookingClick} size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg py-6">
                    Book this club
                </Button>
            ) : (
                <Card className="bg-card/80 border-primary/20">
                    <CardHeader>
                        <CardTitle>Book Your Dates</CardTitle>
                        <CardDescription>Select the dates you'd like to work.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row gap-8 items-start">
                        <Calendar
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={1}
                            className="rounded-md border p-0"
                        />
                        <div className="space-y-4 w-full">
                             <h3 className="font-semibold text-primary">Draft Your Email</h3>
                             <Textarea value={emailDraft} onChange={(e) => setEmailDraft(e.target.value)} rows={10} className="bg-background text-white"/>
                             <div className="flex flex-col sm:flex-row gap-2">
                                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                                    <a href={`mailto:${club.contact.email}?subject=Booking Inquiry from Nina&body=${encodeURIComponent(emailDraft)}`}>
                                        <Mail className="mr-2 h-4 w-4" /> Send Email
                                    </a>
                                </Button>
                                <Button variant="secondary" onClick={handleCopyToClipboard} className="w-full">
                                    Copy Email Address
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4 pt-6">
                         <h3 className="font-semibold text-primary">Contact Directly</h3>
                         <div className="flex flex-wrap gap-4 text-sm">
                            <a href={`mailto:${club.contact.email}`} className="text-white hover:underline">Email</a>
                            <a href={club.contact.website} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Website</a>
                            <a href={club.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Instagram</a>
                         </div>
                    </CardFooter>
                </Card>
            )}


        </main>
    </div>
    )
}

function Rating({ category, value }: { category: string, value: number }) {
    return (
        <div className="flex justify-between items-center">
            <p className="text-neutral-300">{category}</p>
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < value ? 'text-primary fill-primary' : 'text-neutral-600'}`} />
                ))}
            </div>
        </div>
    )
}
