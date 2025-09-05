
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, Search, Star, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const clubsData = [
  {
    id: "1",
    name: "Velvet Lounge",
    city: "New York",
    distance: "2.5 miles",
    rating: 5,
    reviewPreview: "Great vibes, well-managed!",
    isFavorite: false,
  },
  {
    id: "2",
    name: "The Gold Room",
    city: "New York",
    distance: "3.1 miles",
    rating: 4,
    reviewPreview: "Good money, but can be slow on weekdays.",
    isFavorite: true,
  },
  {
    id: "3",
    name: "Platinum Lace",
    city: "New York",
    distance: "4.8 miles",
    rating: 4,
    reviewPreview: "Management is super respectful.",
    isFavorite: false,
  },
    {
    id: "4",
    name: "Sapphire's",
    city: "New York",
    distance: "5.2 miles",
    rating: 3,
    reviewPreview: "The crowd is hit or miss.",
    isFavorite: false,
  },
];

type Club = typeof clubsData[0];

export default function FindClubsPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [clubs, setClubs] = useState<Club[]>(clubsData);
  const [searchTerm, setSearchTerm] = useState("New York");
  const [isLoading, setIsLoading] = useState(false);

  const handleFavoriteToggle = (e: React.MouseEvent, clubId: string) => {
    e.stopPropagation(); // Prevent card click event from firing
    e.preventDefault(); // Prevent link navigation
    setClubs(prevClubs =>
      prevClubs.map(club => {
        if (club.id === clubId) {
          const updatedClub = { ...club, isFavorite: !club.isFavorite };
          if (updatedClub.isFavorite) {
            toast({ title: `${updatedClub.name} added to favourites` });
          } else {
            toast({ title: `${updatedClub.name} removed from favourites` });
          }
          return updatedClub;
        }
        return club;
      })
    );
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
        setIsLoading(false);
        if(searchTerm.toLowerCase() !== "new york") {
            setClubs([]);
        } else {
            setClubs(clubsData);
        }
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <header className="flex items-center justify-between mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dancer">
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Link>
        </Button>
        <h1 className="font-headline text-3xl text-primary">Find Clubs</h1>
        <div className="w-10"></div>
      </header>

      <main className="max-w-2xl mx-auto animate-fade-in-up">
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <Input 
                placeholder="Enter city..." 
                className="pl-10 bg-white text-black border-neutral-300 shadow-sm" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit" variant="secondary" size="icon" disabled={isLoading}>
            <Search className="w-5 h-5" />
          </Button>
        </form>
         <Button variant="link" className="text-primary mb-8">
            <MapPin className="mr-2 w-4 h-4"/>
            Use my current location
        </Button>


        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Clubs near you</h2>
            {isLoading ? (
                <p className="text-neutral-300">Searching for clubs...</p>
            ) : clubs.length > 0 ? (
                clubs.map(club => (
                <ClubCard key={club.id} club={club} onFavoriteToggle={handleFavoriteToggle} />
                ))
            ) : (
                <div className="text-center py-12">
                    <p className="text-lg text-neutral-300">No clubs found in "{searchTerm}".</p>
                    <p className="text-sm text-neutral-500">Try a different city or check back later.</p>
                </div>
            )}
        </div>
      </main>
    </div>
  );
}

function ClubCard({ club, onFavoriteToggle }: { club: Club, onFavoriteToggle: (e: React.MouseEvent, id: string) => void }) {
  return (
    <Link href={`/dancer/clubs/${club.id}`} className="block">
    <Card className="bg-card/80 border-primary/20 hover:border-primary transition-colors duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                 <CardTitle className="text-white">{club.name}</CardTitle>
                 <CardDescription>{club.city} • {club.distance}</CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="text-white -mt-2 -mr-2 hover:text-destructive active:text-destructive" onClick={(e) => onFavoriteToggle(e, club.id)}>
                <Heart className={`w-6 h-6 transition-colors duration-300 ${club.isFavorite ? 'fill-destructive text-destructive' : 'text-white'}`} />
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < club.rating ? 'text-primary fill-primary' : 'text-neutral-600'}`} />
            ))}
        </div>
        <p className="text-neutral-300 italic">"{club.reviewPreview}"</p>
         <div className="text-primary text-sm hover:underline mt-2 inline-block">Read more reviews</div>
      </CardContent>
       <CardFooter>
          <Button className="w-full bg-accent hover:bg-accent/90 text-white">View Club</Button>
        </CardFooter>
    </Card>
    </Link>
  )
}
