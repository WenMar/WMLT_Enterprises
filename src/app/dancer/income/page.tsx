
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { ChevronLeft, PlusCircle, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const earningsData = [
    {
        id: "1",
        date: new Date(new Date().setDate(new Date().getDate() - 2)),
        club: "Velvet Lounge",
        earnings: 350,
    },
    {
        id: "2",
        date: new Date(new Date().setDate(new Date().getDate() - 3)),
        club: "The Gold Room",
        earnings: 480,
    },
     {
        id: "3",
        date: new Date(new Date().setDate(new Date().getDate() - 5)),
        club: "Velvet Lounge",
        earnings: 410,
    }
];

export default function IncomeTrackerPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const totalEarnings = earningsData.reduce((acc, entry) => acc + entry.earnings, 0);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <header className="flex items-center justify-between mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dancer">
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Link>
        </Button>
        <h1 className="font-headline text-3xl text-primary">Income Tracker</h1>
        <div className="w-10"></div>
      </header>

      <main className="max-w-4xl mx-auto animate-fade-in-up space-y-8">
        <Card className="bg-card/80 border-primary/20">
            <CardHeader>
                <CardTitle>Total Earnings</CardTitle>
                <CardDescription>Your total recorded earnings.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-4xl font-bold text-primary">£{totalEarnings.toFixed(2)}</p>
            </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
             <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                <Link href="/dancer/income/new">
                    <PlusCircle className="mr-2 h-4 w-4"/>
                    Log New Earning
                </Link>
            </Button>
             <Button asChild className="w-full" variant="secondary">
                <Link href="/dancer/income/insights">
                    <BarChart2 className="mr-2 h-4 w-4"/>
                    View Insights
                </Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
             <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Earnings Calendar</CardTitle>
                    <CardDescription>Select a day to view or add entries.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Recent Entries</CardTitle>
                    <CardDescription>Your last few logged earnings.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Club</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {earningsData.map((entry) => (
                                <TableRow key={entry.id}>
                                    <TableCell>{entry.date.toLocaleDateString()}</TableCell>
                                    <TableCell>{entry.club}</TableCell>
                                    <TableCell className="text-right font-medium text-primary">£{entry.earnings.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
