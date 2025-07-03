"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLangProviderContext } from "@/context/useLangProvider";
import { GoogleIcon } from "@/components/icons/google-icon";

// 将schema定义移到组件内部，这样可以使用翻译文件
const createFormSchema = (validation: any) => z.object({
  email: z.string().email(validation.email),
  password: z.string().min(8, validation.password.min),
  rememberMe: z.boolean().default(false),
});

export default function SignInPageClient() {
  const [showPassword, setShowPassword] = useState(false);
  const { $t, i18nLink } = useLangProviderContext();

  // 使用默认validation来避免Hook调用顺序问题
  const formSchema = createFormSchema($t?.auth?.validation || {
    email: "Please enter a valid email address",
    password: { min: "Password must be at least 8 characters" }
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // 安全检查，防止翻译未加载时报错
  if (!$t?.auth?.signin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const auth = $t.auth.signin;

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: 实现登录逻辑
    console.log("Sign in:", values);
  }

  const handleGoogleSignIn = () => {
    // TODO: 实现Google登录逻辑
    console.log("Google sign in");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{auth.title}</CardTitle>
          <CardDescription>{auth.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Google登录按钮 */}
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignIn}
          >
            <GoogleIcon className="mr-2 h-4 w-4" />
            {auth.google.button}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {auth.divider}
              </span>
            </div>
          </div>

          {/* 登录表单 */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{auth.form.email.label}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={auth.form.email.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{auth.form.password.label}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder={auth.form.password.placeholder}
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {auth.form.rememberMe}
                      </FormLabel>
                    </div>
                    <Link
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      {auth.form.forgotPassword}
                    </Link>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                {auth.form.submit}
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm text-muted-foreground">
            {auth.footer.text}{" "}
            <Link
              href={i18nLink("/signup")}
              className="text-primary hover:underline"
            >
              {auth.footer.link}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}