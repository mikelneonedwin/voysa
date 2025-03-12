import {
    Card,
    CardContent,
    CardHeader
} from "./ui/card";

const About = () => {
  return (
    <>
      <Card className="app-card">
        <CardHeader className="font-bold text-black">About Voysa</CardHeader>
        <CardContent className="space-y-4">
          <p>
            Blockchain trading is exciting but risky. Scams and rug pulls make
            it hard to trust new tokens. Voysa is built to change that.
          </p>
          <p>
            By leveraging Move smart contracts and real-time data, we provide
            transparent fraud analysis and growth potential scores.
          </p>
          <p>
            Designed for both traders and developers, Voysa ensures every trade
            is backed by reliable, on-chain insights—helping you make smarter
            moves with confidence.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
