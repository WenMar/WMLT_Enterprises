'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

// Mock Firebase login and role fetching
const loginWithEmail = async (email: string, password: string) => {
  console.log('Logging in:', { email, password });
  // In a real app, this would call Firebase Auth.
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Then it would fetch the user's role from Firestore.
  // For this mock, we'll assign a role based on the email.
  let role = 'customer';
  if (email.includes('dancer')) role = 'dancer';
  if (email.includes('club')) role = 'club';
  if (email.includes('admin')) role = 'admin';
  
  return { success: true, user: { uid: 'mock_uid', role } };
};

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    try {
      const result = await loginWithEmail(values.email, values.password);
      if (result.success) {
        toast({
          title: 'Logged In Successfully!',
          description: "Welcome back! Redirecting you now...",
        });
        // Redirect to role-specific dashboard
        router.push(`/${result.user.role}`);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Please check your credentials and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoComplete="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" autoComplete="current-password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
          {isLoading ? 'Logging In...' : 'Log In'}
        </Button>
      </form>
    </Form>
  );
}
