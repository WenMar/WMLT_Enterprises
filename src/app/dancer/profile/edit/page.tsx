
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function EditDancerProfilePage() {
    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle form submission to your backend
        toast({
            title: "Profile Updated",
            description: "Your changes have been saved successfully.",
        });
        router.push('/dancer/profile');
    };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
             <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/profile">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Edit Profile</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex flex-col items-center space-y-4">
                    <Avatar className="w-32 h-32 border-4 border-primary">
                        <AvatarImage src="https://placehold.co/128x128.png" alt="Dancer Nina" data-ai-hint="portrait woman" />
                        <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                     <Button asChild variant="outline">
                        <label htmlFor="image-upload">
                            Edit Image
                            <input id="image-upload" type="file" className="sr-only" />
                        </label>
                    </Button>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="name">Name or Stage Name</Label>
                    <Input id="name" defaultValue="Nina" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" rows={5} defaultValue="Creative, confident, and always ready to light up the stage. Experienced performer passionate about movement, music, and building a positive vibe wherever I go." />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="interests">Interests (comma separated)</Label>
                    <Input id="interests" defaultValue="Yoga, Running, Pole fitness, Travelling, Live music" />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Button variant="ghost" type="button" onClick={() => router.back()}>Cancel</Button>
                    <Button type="submit" className="bg-accent hover:bg-accent/90">Save Changes</Button>
                </div>
            </form>
        </main>
    </div>
  );
}
