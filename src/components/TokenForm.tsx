"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TokenData from "./TokenData";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  address: z.string().min(60, {
    message: "SUI token doesn't have a valid length",
  }),
});

const pageUrl = new URL(location.href);
const TokenForm = () => {
  const [token, setToken] = useState(pageUrl.searchParams.get("token") || "");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: token,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setToken(values.address);
  }
  return (
    <>
      <Card className="app-card bg-white ">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Sniff out scams, spot the cookers—your SUI degen edge.
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-4 flex-col sm:flex-row">
                        <Input
                          {...field}
                          placeholder="Enter your SUI address"
                          className="bg-white"
                        />
                        <Button
                          type="submit"
                          className="w-full sm:w-auto text-white"
                        >
                          Check
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
      {token && <TokenData token={token} />}
    </>
  );
};

export default TokenForm;
