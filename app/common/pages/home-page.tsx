import {
  BookOpen,
  RocketIcon,
  FileTextIcon,
  GlobeIcon,
  BellIcon,
  Activity,
  NotebookPen,
} from "lucide-react";

import NavBar from "../components/navigation";
import { Button } from "../components/ui/button";
import { AnimatedShinyText } from "../components/ui/animated-shiny-text";
import { Particles } from "../components/ui/particles";
import { BentoCard, BentoGrid } from "../components/ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Dive deeper into your content whenever you want",
    description:
      "We systematically archive your content, allowing you to browse past materials and explore them in greater depth.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: NotebookPen,
    name: "Create your own curriculum",
    description: "Pursue your own natural curiosity.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Activity,
    name: "Track your progress",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <div className="py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex flex-col items-center gap-7 mb-8">
              <AnimatedShinyText
                shimmerWidth={200}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-accent"
              >
                <RocketIcon className="w-4 h-4" />
                For Micro-Learning Cravers
              </AnimatedShinyText>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground animate-slide-up">
                Seamlessly weave learning
                <span className="text-primary block">into your daily life</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
                Receive micro-learning content on topics of your choice,
                delivered to your inbox daily. With AI, we create content
                specifically tailored to your curiosity.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Button className="px-8 h-13 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </Button>
              <span className="text-sm text-muted-foreground">
                Try 7 days free. No auto-charge.
              </span>
            </div>
          </div>
        </div>
        <Particles className="absolute top-0 w-full h-full" />
      </div>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl lg:text-5xl font-bold text-foreground mb-12">
            The Effortless Way to Cultivate Knowledge and Get Closer to Better
            Understanding of Anything.
          </h2>
          <BentoGrid className="auto-rows-fr">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in minutes and begin your personalized learning
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Choose Your Interests
              </h3>
              <p className="text-muted-foreground">
                Select topics that fascinate you - from physics and robotics to
                history and philosophy. Our AI adapts to your preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Customize Your Experience
              </h3>
              <p className="text-muted-foreground">
                Set your preferred learning frequency, content depth, and
                format. Preview sample content before committing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Learn Daily
              </h3>
              <p className="text-muted-foreground">
                Receive thoughtfully crafted micro-lessons in your inbox. Read,
                learn, and build knowledge habits that stick.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of curious minds who are building knowledge habits
            that last. Start your personalized learning journey today.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Alexandria</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Alexandria. Seamlessly weave learning into your daily
              routine.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
