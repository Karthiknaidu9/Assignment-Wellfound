"use client";

import { Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { browser: "Delivered", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Out for Delivery", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Intransit", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Pending", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Exception", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Delivered",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Out for Delivery",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Intransit",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Pending",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Exception",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
          />
        </PieChart>
      </ChartContainer>
    </CardContent>
  );
}
