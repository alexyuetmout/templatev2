"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { useLangProviderContext } from "@/context/useLangProvider";

export const FeaturesSection = () => {
  const { $t } = useLangProviderContext();
  
  // 安全检查，防止配置未加载时报错
  if (!$t?.home?.features?.show) {
    return null;
  }
  
  const features = $t.home.features;
  
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {features.subtitle}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {features.title}
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {features.description}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.items.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};