import { motion } from "framer-motion";
import { Camera, Video, Sparkles, Keyboard, Bell, Settings, Download, Github, ChevronRight, Monitor, Square, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import trayIcon from "@/assets/tinyclips-store-icon.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const features = [
  { icon: Camera, title: "Screenshots", desc: "Capture a region, full screen, or window. Saves as PNG or JPEG with instant clipboard copy." },
  { icon: Video, title: "Video Recording", desc: "Record any region or your full screen to H.264 MP4. Built-in timer and stop controls." },
  { icon: Sparkles, title: "GIF Capture", desc: "Record animated GIFs with configurable frame rate. Perfect for quick demos and bug reports." },
  { icon: Keyboard, title: "Global Hotkeys", desc: "Trigger captures from any app. Fully customizable keyboard shortcuts in settings." },
  { icon: Bell, title: "Toast Notifications", desc: "Get notified when captures complete. Click to open the file or its location." },
  { icon: Settings, title: "Highly Configurable", desc: "Save location, naming templates, countdown timer, image format, GIF framerate, and more." },
];

const steps = [
  { num: "01", title: "Download", desc: "Grab the latest release for your architecture from GitHub Releases.", code: "TinyClips-x64.zip  or  TinyClips-arm64.zip" },
  { num: "02", title: "Extract", desc: "Unzip to any folder, for example:", code: "C:\\Program Files\\TinyClips\\" },
  { num: "03", title: "Run", desc: "Launch TinyClips.exe. It appears in your system tray — right-click to capture.", code: 'Enable "Launch at login" in Settings → General' },
];

const shortcuts = [
  { action: "Screenshot", keys: ["Ctrl", "Alt", "Shift", "5"] },
  { action: "Record Video", keys: ["Ctrl", "Alt", "Shift", "6"] },
  { action: "Record GIF", keys: ["Ctrl", "Alt", "Shift", "7"] },
  { action: "Stop Recording", keys: ["Ctrl", "."] },
  { action: "Region mode", keys: ["R"] },
  { action: "Screen mode", keys: ["S"] },
  { action: "Window mode", keys: ["W"] },
  { action: "Cancel", keys: ["Esc"] },
];

const Kbd = ({ children }: { children: string }) => (
  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border min-w-[28px]">
    {children}
  </span>
);

const ScrollArrow = ({ targetId }: { targetId: string }) => (
  <motion.button
    className="flex justify-center w-full pt-8 cursor-pointer bg-transparent border-none p-2"
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
    aria-label="Scroll to next section"
  >
    <ChevronRight className="w-5 h-5 text-muted-foreground rotate-90" />
  </motion.button>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <img src={trayIcon} alt="TinyClips icon" className="w-36 h-36 mx-auto mb-8 drop-shadow-2xl" />
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="text-gradient">TinyClips</span>
            <br />
            <span className="text-foreground/80 text-3xl sm:text-4xl font-semibold">for Windows</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Screen capture made simple. Screenshots, video, and GIF — all from your system tray.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <Button size="lg" className="gap-2 text-base px-8 glow-primary" asChild>
              <a href="https://github.com/janode/tiny-clips-win/releases/latest">
                <Download className="w-5 h-5" />
                Download Latest
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 glass" asChild>
              <a href="https://github.com/janode/tiny-clips-win">
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer bg-transparent border-none p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to features"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground rotate-90" />
        </motion.button>
      </section>

      {/* Features */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need,{" "}
              <span className="text-gradient">nothing you don't</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Lightweight, fast, and sits quietly in your tray until you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="group glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <ScrollArrow targetId="installation" />
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Up and running in{" "}
              <span className="text-gradient">seconds</span>
            </h2>
            <p className="text-muted-foreground text-lg">No installer required. Just download, extract, and go.</p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="glass rounded-2xl p-6 flex gap-6 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
              >
                <span className="text-3xl font-extrabold text-gradient shrink-0 w-12">{s.num}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                  <code className="block text-xs px-4 py-2.5 rounded-lg bg-background/60 text-muted-foreground font-mono border border-border/50 overflow-x-auto">
                    {s.code}
                  </code>
                </div>
              </motion.div>
            ))}
          </div>
          <ScrollArrow targetId="shortcuts" />
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section id="shortcuts" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Keyboard</span> shortcuts
            </h2>
            <p className="text-muted-foreground text-lg">All shortcuts are fully customizable in settings.</p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className="divide-y divide-border/50">
              {shortcuts.map((s, i) => (
                <div key={s.action} className="flex items-center justify-between px-6 py-4 hover:bg-secondary/30 transition-colors">
                  <span className="text-sm font-medium">{s.action}</span>
                  <div className="flex items-center gap-1.5">
                    {s.keys.map((k, ki) => (
                      <span key={ki} className="flex items-center gap-1.5">
                        <Kbd>{k}</Kbd>
                        {ki < s.keys.length - 1 && <span className="text-muted-foreground text-xs">+</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <ScrollArrow targetId="cta" />
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <motion.div
          className="max-w-2xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to capture?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            TinyClips is free, open-source, and built for speed. Give it a try.
          </p>
          <Button size="lg" className="gap-2 text-base px-10 glow-primary" asChild>
            <a href="https://github.com/janode/tiny-clips-win/releases/latest">
              <Download className="w-5 h-5" />
              Download TinyClips
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={trayIcon} alt="" className="w-5 h-5" />
            <span className="font-medium text-foreground/80">TinyClips for Windows</span>
          </div>
          <p>Open source · MIT License</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
