export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Intro Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            About <span className="text-green-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are the <strong className="text-white">C4 Team for Good Guys</strong>. 
            With SmartEnv, you bring the holiday vibe, we take care of the rest of the technology.
          </p>
        </section>

        {/* Team Section */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-white text-center">Meet the team</h2>
          
          <div className="flex justify-center">
            {/* Team Member Card */}
            <div className="glass p-6 rounded-2xl border border-white/5 w-full max-w-sm text-center flex flex-col items-center card-hover">
              <div className="w-48 h-64 rounded-2xl overflow-hidden mb-6 border-4 border-green-500/20 glow-green-sm">
                <img 
                  src="https://www.image2url.com/r2/default/images/1777154807339-c5a59847-53bd-4dcc-ba78-b8b08ea653b3.png" 
                  alt="Durne Casian-Viorel"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Durne Casian-Viorel</h3>
              <p className="text-green-400 font-medium">Engineer, doctor and CEO</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
