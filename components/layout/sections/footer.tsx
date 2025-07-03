"use client";

import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import GithubIcon from "@/components/icons/github-icon";
import DiscordIcon from "@/components/icons/discord-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import EmailIcon from "@/components/icons/email-icon";
import { useLangProviderContext } from "@/context/useLangProvider";

export const FooterSection = () => {
  const { $t } = useLangProviderContext();

  // 安全检查，防止配置未加载时报错
  if (!$t?.home?.footer?.show) {
    return null;
  }

  const footer = $t.home.footer;

  return (
    <footer id="footer" className="container py-8 pb-4">
      <div className="px-4 py-8 bg-card">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link
              href={footer.brand.href}
              className="flex font-bold items-center mb-3"
            >
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">{footer.brand.name}</h3>
            </Link>

            {/* 品牌描述 */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs">
              一个现代化的 SaaS
              项目模板，通过丰富的组件和功能快速启动您的创业项目。
            </p>

            {/* 社交媒体图标 */}
            <div className="flex items-center gap-3">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </Link>

              <Link
                href="https://discord.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <DiscordIcon className="w-4 h-4" />
              </Link>

              <Link
                href="mailto:hello@example.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <EmailIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {footer.sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">{section.title}</h3>
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  <Link
                    href={link.href}
                    className="opacity-60 hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            <span dangerouslySetInnerHTML={{ __html: footer.copyright.text }} />
            <Link
              target="_blank"
              href={footer.copyright.author.href}
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              {footer.copyright.author.name}
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
