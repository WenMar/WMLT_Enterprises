
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";


export default function SettingsPage() {
    const router = useRouter();
    const { toast } = useToast();

    const handleDeleteAccount = () => {
        // Here you would handle the account deletion logic
        toast({
            variant: "destructive",
            title: "Account Deleted",
            description: "Your account has been permanently deleted.",
        });
        router.push('/');
    };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/dancer">
                    <ChevronLeft className="w-6 h-6 text-primary" />
                </Link>
            </Button>
            <h1 className="font-headline text-3xl text-primary">Account Settings</h1>
            <div className="w-10"></div>
        </header>

        <main className="max-w-2xl mx-auto animate-fade-in-up space-y-6">
            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>Manage your account settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <SettingsItem label="Change Password" />
                    <SettingsItem label="Update Location" />
                     <div className="flex items-center justify-between p-3">
                        <span className="text-white">Logged In Email</span>
                        <span className="text-neutral-400">nina@example.com</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                    <CardTitle>About</CardTitle>
                    <CardDescription>Learn more about the app and policies.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <SettingsItem label="About Us" href="/dancer/settings/about" />
                    <SettingsItem label="Help & Support" href="/dancer/settings/help" />
                    <SettingsItem label="Privacy Policy" href="/dancer/settings/privacy" />
                    <SettingsItem label="Terms of Licence" href="/dancer/settings/terms" />
                    <SettingsItem label="Cookies Policy" href="/dancer/settings/cookies" />
                </CardContent>
            </Card>

            <Card className="bg-card/80 border-destructive/50">
                <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                </CardHeader>
                <CardContent>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                             <Button variant="destructive" className="w-full">
                                Delete Account
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive hover:bg-destructive/90">
                                Continue
                            </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardContent>
                 <CardFooter>
                     <p className="text-xs text-neutral-400">Logging out will sign you out from this device.</p>
                </CardFooter>
            </Card>
        </main>
    </div>
  );
}

const SettingsItem = ({ label, href }: { label: string; href?: string }) => {
    const content = (
        <div className="flex items-center justify-between p-3 hover:bg-secondary/30 rounded-md transition-colors">
            <span className="text-white">{label}</span>
            <ChevronRight className="w-5 h-5 text-neutral-500" />
        </div>
    );
    if (href) {
        return <Link href={href}>{content}</Link>;
    }
    return <button className="w-full text-left">{content}</button>;
};

