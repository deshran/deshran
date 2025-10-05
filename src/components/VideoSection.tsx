const VideoSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See DeshRan in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover how we're democratizing sports talent assessment
          </p>
        </div>
        
        <div className="backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/20 rounded-3xl p-4 shadow-2xl animate-fade-in">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/vQrqP6C-zmA"
              title="DeshRan Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
