import deshranLogo from "@/assets/deshran-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <img src={deshranLogo} alt="DeshRan" className="w-12 h-12" />
            <div>
              <div className="font-bold text-foreground text-lg">DeshRan</div>
              <div className="text-sm text-muted-foreground">Democratizing Sports Talent</div>
            </div>
          </div>
          
          {/* Flag Colors Badge */}
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-primary" title="Saffron - Energy" />
            <div className="w-8 h-8 rounded-full bg-secondary" title="Green - Growth" />
            <div className="w-8 h-8 rounded-full bg-accent" title="Navy Blue - Trust" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
