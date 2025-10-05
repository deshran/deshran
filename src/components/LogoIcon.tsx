interface LogoIconProps {
  className?: string;
  size?: number;
}

const LogoIcon = ({ className = "", size = 120 }: LogoIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle - Saffron */}
      <circle cx="60" cy="60" r="58" fill="hsl(var(--primary))" opacity="0.15" />
      
      {/* Main Circle with gradient */}
      <circle cx="60" cy="60" r="50" fill="url(#logoGradient)" />
      
      {/* Running figure silhouette */}
      <path
        d="M45 35C45 31 48 28 52 28C56 28 59 31 59 35C59 39 56 42 52 42C48 42 45 39 45 35Z"
        fill="white"
      />
      <path
        d="M50 45L55 55L52 75L48 85M55 55L65 60L75 65M52 75L58 85M48 85L42 95M58 85L62 95"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* AI Circuit pattern overlay */}
      <circle cx="75" cy="45" r="3" fill="hsl(var(--accent))" opacity="0.8" />
      <circle cx="70" cy="75" r="2" fill="hsl(var(--secondary))" opacity="0.8" />
      <circle cx="35" cy="55" r="2.5" fill="hsl(var(--accent))" opacity="0.8" />
      
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="hsl(var(--secondary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;
