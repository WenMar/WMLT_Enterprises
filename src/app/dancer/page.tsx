
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DollarSign, BookOpen, Search, Star, QrCode, Menu, User, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const featureCards = [
  {
    title: "Find Clubs",
    description: "Browse and discover clubs",
    icon: <Search className="w-8 h-8 text-primary" />,
    href: "/dancer/clubs"
  },
  {
    title: "Review Club",
    description: "Leave or read club reviews",
    icon: <Star className="w-8 h-8 text-primary" />,
    href: "/dancer/reviews"
  },
  {
    title: "Income Tracker",
    description: "Log your earnings & expenses",
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    href: "/dancer/income"
  },
  {
    title: "Share QR Code",
    description: "Share a private QR code",
    icon: <QrCode className="w-8 h-8 text-primary" />,
    href: "/dancer/qrcode"
  },
  {
    title: "Education",
    description: "Courses and tips",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    href: "/dancer/education"
  },
];

export default function DancerDashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-black/80 backdrop-blur-sm border-b border-primary/20">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6 text-primary" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-card border-primary/20 text-white w-72 p-0">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full">
              <div className="p-6 text-center">
                 <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Dancer" data-ai-hint="portrait woman" />
                    <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-headline text-primary">Nina</h2>
                <p className="text-sm text-neutral-300">Stage Name</p>
              </div>
              <Separator className="bg-primary/20" />
              <nav className="flex-1 p-4 space-y-2">
                <Link href="/dancer/profile" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20">
                  <User className="w-5 h-5 text-primary" />
                  <span>Profile</span>
                </Link>
                <Link href="/dancer/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20">
                  <Settings className="w-5 h-5 text-primary" />
                  <span>Account Settings</span>
                </Link>
              </nav>
              <Separator className="bg-primary/20" />
              <div className="p-4">
                 <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-destructive/20 text-destructive">
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="font-headline text-2xl text-primary">RedHrs</h1>
         <div className="w-8"></div>
      </header>

      <main className="p-4 md:p-8">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl font-headline text-white">Welcome Back Sexy</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featureCards.map((feature, index) => (
            <Link href={feature.href} key={feature.title} className="block animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="bg-card/80 border-primary/20 h-full hover:border-primary hover:bg-card transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  {feature.icon}
                  <CardTitle className="text-xl font-body text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
