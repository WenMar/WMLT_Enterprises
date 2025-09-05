
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Calendar as CalendarIcon, Clock, PoundSterling } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const clubs = ["Velvet Lounge", "The Gold Room", "Platinum Lace", "Sapphire's"];

export default function NewEarningPage() {
    const { toast } = useToast();
    const router = useRouter();
    const [date, setDate] = useState<Date | undefined>(new Date());


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Earning Logged!",
            description: "Your new entry has been saved.",
        });
        router.push('/dancer/income');
    };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/income">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Log Earning</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up">
            <form onSubmit={handleSubmit}>
                <Card className="bg-card/80 border-primary/20">
                    <CardHeader>
                        <CardTitle>New Entry</CardTitle>
                        <CardDescription>Fill in the details for your work shift.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                           <Label>Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                                </PopoverContent>
                            </Popover>
                        </div>
                         <div className="space-y-2">
                            <Label>Club Name</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a club" />
                                </SelectTrigger>
                                <SelectContent>
                                    {clubs.map(club => (
                                        <SelectItem key={club} value={club}>{club}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="hours">Hours Worked</Label>
                                <Input id="hours" type="number" placeholder="e.g. 8" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="earnings">Total Earnings (£)</Label>
                                <Input id="earnings" type="number" placeholder="e.g. 450" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes">Notes (Optional)</Label>
                            <Textarea id="notes" placeholder="e.g. Slow night, private event..." className="bg-background text-white" />
                        </div>

                    </CardContent>
                </Card>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6 mt-6">
                    Save Entry
                </Button>
            </form>
        </main>
    </div>
  );
}
