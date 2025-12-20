import Image from "next/image";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Advanced Reporting & Analytics",
    description: "Generate accurate transaction, inventory, and financial reports.",
    icon: CircleDot,
  },
  {
    title: "Inventory Control",
    description: "Monitor stock levels, movements, and item details with precision.",
    icon: Blend,
  },
  {
    title: "Expense Oversight",
    description: "Track operational expenses and maintain cost visibility.",
    icon: Diamond,
  },
  {
    title: "Customer & Vendor Insights",
    description: "Analyze transactions, balances, and relationships in one unified view.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Less Guesswork. More Growth. 🚀
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            From transactions to balance sheets—stay organized and in control.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="#hero-image">
                Get Started
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="https://app.kokonaat.com"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Start for free
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 w-full px-4 md:mt-20 md:px-6 lg:mt-24 lg:px-8" id="hero-image">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/hero.webp"
            alt="hero"
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};
