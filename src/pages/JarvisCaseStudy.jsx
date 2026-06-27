import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Brain, Mic, MessageSquare, Zap, Workflow, Plug, Settings, Volume2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Background from '../components/Background';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function JarvisCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: <Mic size={20} />, name: "Voice Recognition", desc: "Natural speech input with real-time audio processing and transcription" },
    { icon: <Brain size={20} />, name: "Contextual Memory", desc: "Maintains conversation context for multi-turn reasoning and follow-ups" },
    { icon: <MessageSquare size={20} />, name: "Natural Language Processing", desc: "Understands intent, extracts entities, and generates human-like responses" },
    { icon: <Workflow size={20} />, name: "Workflow Automation", desc: "Automates repetitive tasks like file operations, searches, and scheduling" },
    { icon: <Plug size={20} />, name: "API Integrations", desc: "Connects to external services for weather, news, calculations, and more" },
    { icon: <Volume2 size={20} />, name: "Text-to-Speech", desc: "Responds with natural-sounding voice output for a conversational experience" },
    { icon: <Settings size={20} />, name: "Extensible Architecture", desc: "Plugin-based design allows adding new capabilities without modifying core logic" },
    { icon: <Zap size={20} />, name: "Low Latency Responses", desc: "Optimized prompt engineering and caching for near-instant AI interactions" },
  ];

  const techStack = [
    { category: "Core Language", items: ["Python 3", "Object-Oriented Architecture", "Modular Design", "Error Handling"] },
    { category: "AI & NLP", items: ["OpenAI API", "Prompt Engineering", "Context Window Management", "Response Parsing"] },
    { category: "Voice & Audio", items: ["SpeechRecognition", "pyttsx3 / gTTS", "Audio Stream Processing", "Wake Word Detection"] },
    { category: "Integrations", items: ["Web Scraping", "REST API Calls", "File System Operations", "System Commands"] },
  ];

  const challenges = [
    {
      problem: "Maintaining conversation context across multiple turns without exceeding token limits",
      solution: "Implemented a sliding context window that summarizes older conversation history while preserving the most recent exchanges. This keeps the AI's responses contextually aware without hitting API token limits or degrading response quality."
    },
    {
      problem: "Handling ambiguous voice commands and noisy audio input",
      solution: "Built a multi-pass intent classification system. If the initial speech-to-text result is ambiguous, JARVIS asks clarifying questions before executing commands. Added noise filtering and confidence thresholds to reject low-quality audio input gracefully."
    },
    {
      problem: "Making the assistant extensible without tightly coupling new features to core logic",
      solution: "Designed a plugin-based architecture where each capability (weather, search, file operations) is a self-contained module. New features are added by creating a module with a standard interface — the core dispatcher routes commands automatically based on intent matching."
    },
    {
      problem: "Achieving responsive interactions despite API latency from external AI services",
      solution: "Implemented response streaming, prompt caching for common queries, and async processing for non-blocking operations. Simple commands (open app, play music) are handled locally without API calls, while complex reasoning tasks are routed to the AI backend."
    },
  ];

  const architecture = [
    { layer: "Input Layer", desc: "Captures voice via microphone or text via CLI. Processes audio through SpeechRecognition library with noise reduction." },
    { layer: "Intent Engine", desc: "Classifies the user's command into actionable intents (e.g., 'search', 'open', 'calculate', 'converse'). Routes to the appropriate handler module." },
    { layer: "AI Core", desc: "Sends complex queries to OpenAI API with carefully engineered system prompts. Manages conversation history and context injection." },
    { layer: "Action Executor", desc: "Handles local operations — opening apps, file management, web searches, system commands — without needing AI for simple tasks." },
    { layer: "Output Layer", desc: "Converts AI responses to speech via text-to-speech engine. Formats output for both voice and visual display." },
  ];

  return (
    <div className="relative min-h-screen text-white selection:bg-primary/30 overflow-x-hidden">
      <Background />
      
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/70 backdrop-blur-xl border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-6 flex items-center justify-between">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <a
            href={siteConfig.projects.jarvisAI.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>

      <main className="relative z-10 pt-28 pb-32 px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Hero Header */}
          <motion.div {...fadeUp} className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
              <span className="text-xs font-bold tracking-widest text-accent1 uppercase">Case Study</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 via-accent2 to-pink-500">JARVIS</span> AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              An intelligent voice-controlled desktop assistant powered by OpenAI, capable of natural conversation, task automation, and context-aware reasoning.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {[
              { label: "Features", value: "8+" },
              { label: "Integrations", value: "10+" },
              { label: "Architecture Layers", value: "5" },
              { label: "Type", value: "Desktop" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* The Vision */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-accent1 uppercase mb-4">The Vision</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">What if your computer could truly understand you?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-lg text-gray-400 leading-relaxed font-light space-y-4">
                <p>
                  Existing voice assistants are good at simple commands — "set a timer", "play music." But they break down the moment you need real reasoning. They can't help you debug code, summarize a document, or have a genuine back-and-forth conversation.
                </p>
                <p>
                  I wanted to build something that felt like having a brilliant co-pilot sitting next to you — one that listens, understands context, and can actually <strong className="text-white font-medium">do things</strong> on your computer.
                </p>
              </div>
              <div className="text-lg text-gray-400 leading-relaxed font-light space-y-4">
                <p>
                  JARVIS was born from the idea of combining <strong className="text-white font-medium">large language model intelligence</strong> with <strong className="text-white font-medium">local system control</strong>. It doesn't just chat — it opens applications, searches the web, manages files, and automates workflows through natural voice commands.
                </p>
                <p>
                  The name is, of course, an homage to Tony Stark's AI. The goal was to capture that same feeling of fluid, intelligent interaction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-accent1 uppercase mb-4">Core Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Intelligence meets automation.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent1 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.name}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Architecture */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-accent1 uppercase mb-4">System Architecture</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Five-layer pipeline design.</h3>
            <div className="flex flex-col gap-4">
              {architecture.map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent1/20 text-accent1 flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{layer.layer}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-accent1 uppercase mb-4">Tech Stack</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Purpose-built tooling.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((stack, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md"
                >
                  <h4 className="text-sm font-bold tracking-widest text-accent1 uppercase mb-4">{stack.category}</h4>
                  <div className="flex flex-col gap-2">
                    {stack.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 size={14} className="text-gray-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-accent1 uppercase mb-4">Engineering Challenges</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Where AI meets real-world constraints.</h3>
            <div className="flex flex-col gap-6">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <span className="text-xs font-bold tracking-widest text-red-400/80 uppercase block mb-2">Challenge</span>
                      <p className="text-white font-medium leading-relaxed">{challenge.problem}</p>
                    </div>
                    <div className="md:w-2/3">
                      <span className="text-xs font-bold tracking-widest text-green-400/80 uppercase block mb-2">Solution</span>
                      <p className="text-gray-400 leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-accent1 uppercase mb-4">Key Takeaways</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">What I learned building this.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Prompt Engineering Is Design", desc: "The quality of AI responses depends entirely on how you structure your prompts. System prompts, few-shot examples, and context injection are design decisions, not afterthoughts." },
                { title: "Voice UX Is Unforgiving", desc: "Unlike text interfaces, voice has no visual feedback. Every error, delay, or misunderstanding is immediately noticeable. Building graceful fallbacks is essential." },
                { title: "Modularity Enables Speed", desc: "The plugin architecture allowed me to add new features in hours instead of days. When the core is solid, extending functionality becomes a matter of writing small, focused modules." },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                  <h4 className="text-white font-semibold mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Footer */}
          <motion.div {...fadeUp} className="text-center">
            <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white mb-4">Explore the source code</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                JARVIS is open source. Dive into the codebase to see the architecture, prompt engineering, and voice processing implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteConfig.projects.jarvisAI.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform"
                >
                  View Repository →
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  ← Back to Portfolio
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
