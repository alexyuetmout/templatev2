"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLangProviderContext } from "@/context/useLangProvider";
import { website } from "@/configs/website";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { locale, $t, i18nLink } = useLangProviderContext();

  // 安全检查，防止数据未加载时报错
  if (!$t?.common?.header?.navigation) {
    return null; // 或者返回loading状态
  }

  const navigation = $t.common.header.navigation;
  const auth = $t.common.header.auth;
  const routeList = navigation.routes;
  const featuresConfig = navigation.features;

  return (
    <header className="backdrop-blur-sm bg-background/80 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto sticky top-0 z-40 flex justify-between items-center px-4 py-3 transition-all duration-300">
      {website.logo.show && (
        <Link href={i18nLink('/')} className="font-bold text-lg flex items-center">
          <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
          {website.logo.name}
        </Link>
      )}

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  {website.logo.show && (
                    <Link href={i18nLink('/')} className="flex items-center">
                      <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                      {website.logo.name}
                    </Link>
                  )}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {/* Features mobile menu item */}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href={featuresConfig.href}>{featuresConfig.label}</Link>
                </Button>

                {/* Other navigation items */}
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href.startsWith('#') ? href : i18nLink(href)}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-2 w-full mb-4">
                <Button asChild size="sm" variant="ghost" className="justify-start">
                  <Link href={i18nLink('/signin')}>
                    {auth.signIn}
                  </Link>
                </Button>
                <Button asChild size="sm" variant="default" className="justify-start">
                  <Link href={i18nLink('/signup')}>
                    {auth.getStarted}
                  </Link>
                </Button>
              </div>
              
              {website.themeSwitcher.open && <ToggleTheme />}
              <LanguageSwitcher locale={locale} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList className="gap-1">
          {/* Features section - dropdown or link based on config */}
          <NavigationMenuItem>
            {featuresConfig.dropdown ? (
              <>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted/30 text-base">
                  {featuresConfig.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                    <Image
                      src="https://avatars.githubusercontent.com/u/75042455?v=4"
                      alt="RadixLogo"
                      className="h-full w-full rounded-md object-cover"
                      width={600}
                      height={600}
                    />
                    <ul className="flex flex-col gap-2">
                      {featuresConfig.items.map(({ title, description }) => (
                        <li
                          key={title}
                          className="rounded-md p-3 text-sm hover:bg-muted/20 cursor-pointer transition-colors"
                        >
                          <p className="mb-1 font-semibold leading-none text-foreground">
                            {title}
                          </p>
                          <p className="line-clamp-2 text-muted-foreground">
                            {description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={featuresConfig.href}
                  className="text-base px-4 py-2 rounded-md hover:bg-muted/20 transition-colors"
                >
                  {featuresConfig.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>

          {/* Other navigation items */}
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href.startsWith('#') ? href : i18nLink(href)}
                  className="text-base px-4 py-2 rounded-md hover:bg-muted/20 transition-colors"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-2">
        <LanguageSwitcher locale={locale} />
        {website.themeSwitcher.open && <ToggleTheme />}

        {/* Auth Buttons */}
        <Button asChild size="sm" variant="ghost">
          <Link href={i18nLink('/signin')}>
            {auth.signIn}
          </Link>
        </Button>

        <Button asChild size="sm" variant="default">
          <Link href={i18nLink('/signup')}>
            {auth.getStarted}
          </Link>
        </Button>

      </div>
    </header>
  );
};
