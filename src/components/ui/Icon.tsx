import {
  Activity,
  Award,
  Bell,
  BookOpen,
  Brain,
  Building2,
  ChartNoAxesColumnIncreasing,
  Flower2,
  Gift,
  Hand,
  HeartHandshake,
  Home,
  Layers,
  MessageCircle,
  Music,
  Puzzle,
  Smile,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

/** Maps the string icon keys used in /src/data to Lucide components. */
const icons: Record<string, LucideIcon> = {
  activity: Activity,
  award: Award,
  bell: Bell,
  book: BookOpen,
  brain: Brain,
  building: Building2,
  chart: ChartNoAxesColumnIncreasing,
  flower: Flower2,
  gift: Gift,
  hand: Hand,
  heart: HeartHandshake,
  home: Home,
  layers: Layers,
  message: MessageCircle,
  music: Music,
  puzzle: Puzzle,
  smile: Smile,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  target: Target,
  trending: TrendingUp,
  users: Users,
  wrench: Wrench,
};

export function Icon({ name, className, strokeWidth = 1.75 }: { name: string; className?: string; strokeWidth?: number }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

/** Brand icons (Lucide removed most brand marks, so these are small inline SVGs). */
export function SocialIcon({ name, className = 'h-4 w-4' }: { name: string; className?: string }) {
  const common = { className, fill: 'currentColor', 'aria-hidden': true, viewBox: '0 0 24 24' } as const;
  switch (name) {
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4z" />
        </svg>
      );
    case 'x':
      return (
        <svg {...common}>
          <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8c-.1-1.6-.4-3-1.6-4.2C19.1 2.6 17.6 2.2 16 2.1 14.4 2 9.6 2 8 2.1c-1.6.1-3 .4-4.2 1.6S2.2 6.4 2.1 8C2 9.6 2 14.4 2.1 16c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6 1.2-1.2 1.5-2.6 1.6-4.2.1-1.6.1-6.4 0-8zm-2.1 9.7a3.2 3.2 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.9.4s-4.6.1-5.9-.4a3.2 3.2 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7A3.2 3.2 0 0 1 6.2 4.5C7.5 4 10.5 4.1 12 4.1s4.6-.1 5.9.4a3.2 3.2 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common}>
          <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z" />
        </svg>
      );
    default:
      return null;
  }
}
