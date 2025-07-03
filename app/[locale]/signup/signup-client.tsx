"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  confirmPassword: z.string().min(8, validation.password.min),
  acceptTerms: z.boolean().refine(val => val === true, validation.terms),
}).refine((data) => data.password === data.confirmPassword, {
  message: validation.password.match,
  path: ["confirmPassword"],
});

export default function SignUpPageClient() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { $t, i18nLink } = useLangProviderContext();

  // 使用默认validation来避免Hook调用顺序问题
  const formSchema = createFormSchema($t?.auth?.validation || {
    email: "Please enter a valid email address",
    password: { 
      min: "Password must be at least 8 characters",
      match: "Passwords do not match" 
    },
    terms: "You must accept the terms and conditions"
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  // 安全检查，防止翻译未加载时报错
  if (!$t?.auth?.signup) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const auth = $t.auth.signup;

  function onSubmit(values: z.infer<typeof formSchema>) {
    // 从邮箱地址提取用户名（@符号前的部分）
    const username = values.email.split('@')[0];
    const submitData = {
      ...values,
      username,
    };
    
    // TODO: 实现注册逻辑
    console.log("Sign up:", submitData);
  }

  const handleGoogleSignUp = () => {
    // TODO: 实现Google注册逻辑
    console.log("Google sign up");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{auth.title}</CardTitle>
          <CardDescription>{auth.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Google注册按钮 */}
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignUp}
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

          {/* 注册表单 */}
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
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{auth.form.confirmPassword.label}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder={auth.form.confirmPassword.placeholder}
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
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
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal">
                        {auth.form.terms.prefix}{" "}
                        <Link 
                          href="/terms" 
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {auth.form.terms.termsOfService}
                        </Link>
                        {" "}{auth.form.terms.and}{" "}
                        <Link 
                          href="/privacy" 
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {auth.form.terms.privacyPolicy}
                        </Link>
                      </FormLabel>
                      <FormMessage />
                    </div>
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
              href={i18nLink("/signin")} 
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