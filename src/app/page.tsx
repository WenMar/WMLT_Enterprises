
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function OnboardingPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1200x800/000000/000000.png"
          alt="Elegant background with a sensual, luxurious feel"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-20 animate-kenburns"
          data-ai-hint="dark luxury"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-headline text-6xl md:text-8xl font-bold text-primary">
            RedHrs
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">
            Feel the vibe. Join our hot community.
          </p>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <RoleButton href="/signup?role=dancer">I'm a Dancer</RoleButton>
          <RoleButton href="/signup?role=club">I'm a Club</RoleButton>
          <RoleButton href="/signup?role=customer">I'm a Customer</RoleButton>
        </div>
      </main>
    </div>
  );
}

function RoleButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} passHref>
      <Button
        variant="outline"
        size="lg"
        className="w-64 sm:w-auto text-lg px-8 py-6 border-primary text-primary bg-transparent hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        {children}
      </Button>
    </Link>
  );
}
