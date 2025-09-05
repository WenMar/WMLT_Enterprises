
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const weeklyData = [
  { name: 'Week 1', earnings: 1200 },
  { name: 'Week 2', earnings: 1850 },
  { name: 'Week 3', earnings: 1500 },
  { name: 'Week 4', earnings: 2100 },
];

const clubPerformance = [
    { name: 'Velvet Lounge', avgDaily: 420, totalHours: 40 },
    { name: 'The Gold Room', avgDaily: 550, totalHours: 32 },
    { name: 'Platinum Lace', avgDaily: 380, totalHours: 48 },
]

export default function InsightsPage() {

  const incomeGoal = 8000;
  const currentIncome = weeklyData.reduce((acc, week) => acc + week.earnings, 0);
  const progress = (currentIncome / incomeGoal) * 100;

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer/income">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Earnings Insights</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-4xl mx-auto animate-fade-in-up space-y-8">
            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Monthly Goal Progress</CardTitle>
                    <CardDescription>You've earned £{currentIncome} of your £{incomeGoal} goal this month.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={progress} className="w-full" />
                    <p className="text-right text-sm text-primary mt-2">{progress.toFixed(0)}% Complete</p>
                </CardContent>
            </Card>


            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Weekly Earnings</CardTitle>
                    <CardDescription>Your earnings trend over the last month.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={weeklyData}>
                             <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                            <YAxis stroke="hsl(var(--muted-foreground))" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "hsl(var(--card))",
                                    borderColor: "hsl(var(--border))",
                                }}
                            />
                            <Legend />
                            <Bar dataKey="earnings" fill="hsl(var(--primary))" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Club Performance</CardTitle>
                    <CardDescription>Comparison of your earnings across different clubs.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Club</TableHead>
                            <TableHead>Avg. Daily Earnings</TableHead>
                            <TableHead className="text-right">Total Hours</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clubPerformance.map((club) => (
                                <TableRow key={club.name}>
                                    <TableCell className="font-semibold">{club.name}</TableCell>
                                    <TableCell className="text-primary">£{club.avgDaily.toFixed(2)}</TableCell>
                                    <TableCell className="text-right">{club.totalHours}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
