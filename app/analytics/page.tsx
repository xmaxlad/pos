"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis,Label, Pie, PieChart, YAxis } from "recharts"
import { Revenue, ServicesSold, RevenueByCategory, TopServices } from "@/data/analytics"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useRouter } from "next/navigation"

export default function Page(){
  const router = useRouter()
    return(
        <div className='m-2'>
            <div className='flex flex-row'>
            <div className='cursor-pointer hover:underline text-lg' onClick={()=>{router.push('/')}}>Services</div>
            <div className='cursor-pointer hover:underline text-lg' onClick={()=>{router.push('/analytics')}}>Analytics</div>
            </div>
            <div className='my-8 grid grid-cols-1 sm:grid-cols-2 gap-12'>
                <RevenueChart/>
                <ServicesChart/>
                <RevenueByPercentageChart/>
                <TopServicesChart/> 
            </div>
        </div>
    )
}

function RevenueChart(){
    const chartConfig = {
        desktop: {
          label: "Revenue",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig 
    return(
        <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={Revenue}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="revenue" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 12% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue for the last 6 months 
        </div>
      </CardFooter>
    </Card>
    )
}

function ServicesChart(){
    const chartConfig = {
        desktop: {
          label: "Services Sold",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig 
    return(
        <Card>
      <CardHeader>
        <CardTitle>Services Sold</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={ServicesSold}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="service" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 20% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total services sold for the last 6 months 
        </div>
      </CardFooter>
    </Card>
    )
}

export function RevenueByPercentageChart() {
    const chartConfig = {
        visitors: {
          label: "Visitors",
        },
        chrome: {
          label: "Chrome",
          color: "hsl(var(--chart-1))",
        },
        safari: {
          label: "Safari",
          color: "hsl(var(--chart-2))",
        },
        firefox: {
          label: "Firefox",
          color: "hsl(var(--chart-3))",
        },
        other: {
          label: "Other",
          color: "hsl(var(--chart-5))",
        },
      } satisfies ChartConfig
      
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Revenue by category</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
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
                data={RevenueByCategory}
                dataKey="percentage"
                nameKey="category"
                innerRadius={60}
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Recerational remains the top category <TrendingUp className="h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    )
  }

  export function TopServicesChart() {
    const chartConfig = {
        desktop: {
          label: "numberofServicesSold",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig
    return (
      <Card>
        <CardHeader>
          <CardTitle>Top Services Sold</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={TopServices}
              layout="vertical"
            >
              <XAxis type="number" dataKey="numberofServicesSold" hide />
              <YAxis
                dataKey="name"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="numberofServicesSold" fill="var(--color-desktop)" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    )
  }