
import SignupForm from './_components/signup-form';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Suspense } from 'react';

function SignupContent({ role: roleParam }: { role?: string }) {
  const role = roleParam || 'customer';

  const roleTextMap: { [key:string]: string } = {
    dancer: 'Dancer',
    club: 'Club',
    customer: 'Customer',
  };

  const roleText = roleTextMap[role] || 'User';

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <Image src="https://placehold.co/1200x800/000000/000000.png" alt="Elegant background" layout="fill" objectFit="cover" className="opacity-10" data-ai-hint="dark sensual"/>
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-md animate-fade-in">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-center text-primary">Join as a {roleText}</CardTitle>
            <CardDescription className="text-center text-neutral-300">Create your RedHrs account.</CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm role={role} />
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <p className="text-sm text-neutral-400">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default function SignupPage({ searchParams }: { searchParams: { role?: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContent role={searchParams.role} />
    </Suspense>
  );
}
