import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`rounded-lg border border-gray-800 bg-gray-900 shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`p-6 flex flex-col space-y-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', ...props }: CardProps) {
  return (
    <h3 className={`font-semibold leading-none tracking-tight text-lg ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '', ...props }: CardProps) {
  return (
    <p className={`text-sm text-gray-400 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}
