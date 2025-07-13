import { BookOpen, TrendingUp, Clock, RocketIcon } from "lucide-react";

import NavBar from "../components/navigation";
import { Button } from "../components/ui/button";
import { AnimatedShinyText } from "../components/ui/animated-shiny-text";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <header className="pt-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex flex-col items-center gap-8 mb-8">
              <AnimatedShinyText
                shimmerWidth={200}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-accent"
              >
                <RocketIcon className="w-4 h-4" />
                For Micro-Learning Cravers
              </AnimatedShinyText>
              {/* <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-accent">
                <RocketIcon className="w-4 h-4" />
                For Micro-Learning Cravers
              </div> */}
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground animate-slide-up">
                Seamlessly weave learning
                <span className="text-primary block">
                  into your daily routine
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
                Receive personalized, bite-sized learning content crafted by AI
                and delivered to your inbox. Build lasting knowledge without
                disrupting your busy schedule.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Button className="px-8 h-14 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Learning Today
              </Button>
              <span className="text-sm text-muted-foreground">
                Try 7 days free. No auto-charge.
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Alexandria?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform scattered moments into meaningful learning opportunities
              with our intelligent micro-learning platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            {/* <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                AI-Personalized Content
              </h3>
              <p className="text-gray-600">
                Advanced AI crafts learning materials tailored to your
                interests, knowledge level, and learning pace.
              </p>
            </div> */}

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Effortless Integration
              </h3>
              <p className="text-gray-600">
                No apps to remember. Learning content arrives in your inbox when
                you want it, fitting seamlessly into your routine.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Track Your Progress
              </h3>
              <p className="text-gray-600">
                Monitor your learning streaks, explore new topics, and watch
                your knowledge grow over time.
              </p>
            </div>
          </div>
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
