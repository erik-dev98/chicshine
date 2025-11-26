import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('font-headline text-2xl font-bold text-primary', className)}>
      Chic&Shine
    </Link>
  );
}