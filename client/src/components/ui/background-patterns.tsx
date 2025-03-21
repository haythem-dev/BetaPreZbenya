import React from "react";
import { cn } from "@/lib/utils";

interface PatternProps {
  className?: string;
  children?: React.ReactNode;
}

export function DotsPattern({ className, children }: PatternProps) {
  return (
    <div className={cn("pattern-overlay relative", className)}>
      {children}
    </div>
  );
}

export function HeroPattern({ className, children }: PatternProps) {
  return (
    <div className={cn("hero-pattern relative", className)}>
      {children}
    </div>
  );
}

export function GradientBackground({ className, children }: PatternProps) {
  return (
    <div className={cn("gradient-subtle relative", className)}>
      {children}
    </div>
  );
}

export function PrimaryGradient({ className, children }: PatternProps) {
  return (
    <div className={cn("gradient-primary relative", className)}>
      {children}
    </div>
  );
}

export function BackgroundWithCircles({ className, children }: PatternProps) {
  return (
    <div className={cn("bg-gradient-to-br from-primary/5 to-primary/10 relative", className)}>
      {children}
    </div>
  );
}
