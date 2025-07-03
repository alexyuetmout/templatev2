"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLangProviderContext } from "@/context/useLangProvider";

export const Hero1Section = () => {
  const { $t } = useLangProviderContext();

  // 安全检查，防止配置未加载时报错
  if (!$t?.home?.hero) {
    return null;
  }

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* Badge徽章 */}
          <Badge
            variant="outline"
            className="text-sm py-2 px-4 bg-primary/10 border-primary/20"
          >
            <span className="mr-2">
              <Badge className="bg-primary text-primary-foreground">
                {$t.home.hero.badge.new}
              </Badge>
            </span>
            <span>🎉 {$t.home.hero.badge.announcement}</span>
          </Badge>

          {/* 主标题 - 三段式 */}
          <div className="max-w-screen-md mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-foreground">
                {$t.home.hero.title.prefix}{" "}
              </span>
              <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                {$t.home.hero.title.brand}
              </span>
              <span className="text-foreground">
                {$t.home.hero.title.suffix}
              </span>
            </h1>
          </div>

          {/* 描述文字 */}
          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {$t.home.hero.description}
          </p>

          {/* 按钮组 */}
          <div className="flex sm:flex-row gap-4 items-center justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold group/arrow"
            >
              <Link href={$t.home.hero.links.getStartedHref}>
                {$t.home.hero.buttons.getStarted}
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-secondary text-foreground hover:bg-muted px-8 py-3 rounded-lg font-semibold"
            >
              <Link href={$t.home.hero.links.repositoryHref} target="_blank">
                {$t.home.hero.buttons.repository}
              </Link>
            </Button>
          </div>

          {/* 折扣提示 */}
          {$t.home.hero.discount?.show && (
            <div className="flex items-center justify-center">
              <Badge
                variant="outline"
                className="bg-primary/10 border-primary/20 text-primary py-2 px-4"
              >
                {$t.home.hero.discount.text}
              </Badge>
            </div>
          )}

          {/* 社交证明 */}
          {$t.home.hero.socialProof?.show && (
            <div className="flex items-center justify-center gap-6 mt-8">
              {/* 左边：用户头像群组 */}
              <div className="flex -space-x-2">
                {$t.home.hero.socialProof.avatars.map((avatar, index) => (
                  <Image
                    key={index}
                    src={avatar}
                    alt={`User ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>

              {/* 右边：星星和文字 */}
              <div className="flex flex-col items-start gap-1">
                {/* 星星 */}
                <span className="text-yellow-400 whitespace-nowrap tracking-wide">
                  {$t.home.hero.socialProof.rating}
                </span>
                {/* 文字 */}
                <span className="text-sm text-muted-foreground">
                  {$t.home.hero.socialProof.text}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
