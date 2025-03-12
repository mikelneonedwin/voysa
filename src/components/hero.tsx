import MetricCard from "./MetricCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BarChart3, ShieldCheck, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <>
      <Card className="app-card">
        <CardHeader className="space-y-4">
          <CardTitle className="text-center text-2xl font-bold text-black">
            Voysa – Trade Smarter, Spot the Scams
          </CardTitle>
          <CardDescription className="text-center">
            A powerful on-chain watchdog for SUI, giving you instant fraud
            detection and pump potential scores—because every trader deserves an
            edge.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Metrics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            <MetricCard icon={BarChart3} value="12,845" label="Tokens Vetted" />
            <MetricCard
              icon={ShieldCheck}
              value="2,319"
              label="Trusted Tokens"
            />
            <MetricCard
              icon={TrendingUp}
              value="68%"
              label="Avg. Fraud Score"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Hero;
