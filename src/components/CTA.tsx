import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const CTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleContinue = () => {
    window.open("https://deshran.github.io/demo/#/", "_blank");
    setIsDialogOpen(false);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Discovered?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join DeshRan today and take the first step towards professional recognition. Your talent deserves to be seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Download Button with Popup */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg shadow-2xl shadow-primary/30 group"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="text-center">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">
                    Coming Soon 
                  </DialogTitle>
                  <DialogDescription className="text-base mt-2">
                    This product is currently in development.  
                    Stay tuned for the official launch on Play Store & App Store!
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* View Demo Button with Popup */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-10 py-7 text-lg group"
                >
                  View Demo
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="text-center">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">
                  Beta Build Notice
                  </DialogTitle>
                  <DialogDescription className="text-base mt-2">
                     You are about to access an <b>in-development beta build</b>.<br />
                      Some features may not work as intended.<br />
                      For any queries, contact: <br />
                      <span className="text-accent font-medium">deshrankhelvikas@gmail.com</span>
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center gap-4 mt-6">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Go Back
                  </Button>
                  <Button onClick={handleContinue}>Continue</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Available soon on Play Store & App Store
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
