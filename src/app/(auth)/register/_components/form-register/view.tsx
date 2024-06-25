"use client";

import Link from "next/link";
import { Eye, EyeOff, LoaderCircle, LogIn } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FullLogo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { routesMap } from "@/constants/routes-map";
import { useFormRegister } from "@/app/(auth)/register/_components/form-register/model";

export const FormRegisterView: React.FC<ReturnType<typeof useFormRegister>> = ({
  form,
  isVisiblePassword,
  isPending,
  onSubmit,
  setIsVisiblePassword,
}) => {
  return (
    <>
      <div className="mx-auto w-full max-w-sm rounded-lg bg-background p-6 lg:w-96">
        <div className="">
          <FullLogo />
          <div>
            <h2 className="mt-6 text-xl font-bold text-foreground">
              Crie sua conta
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Já possui conta?{" "}
              <Link
                href={routesMap.login}
                tabIndex={7}
                className="rounded border-none font-semibold text-primary"
              >
                Entre aqui
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          autoComplete="name"
                          autoFocus
                          id="name"
                          tabIndex={1}
                          max={100}
                          placeholder=" "
                          className="peer h-10 appearance-none"
                        />
                      </FormControl>
                      <Label
                        htmlFor="name"
                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded bg-background px-2 text-sm text-foreground duration-300 after:text-red-600 after:content-['_*'] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                      >
                        Nome completo{" "}
                      </Label>
                    </div>
                    <FormMessage className="absolute text-xs text-red-700" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          max={100}
                          tabIndex={2}
                          id="email"
                          type="email"
                          placeholder=""
                          autoComplete="email"
                          className="peer h-10 appearance-none"
                        />
                      </FormControl>
                      <Label
                        htmlFor="password"
                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded bg-background px-2 text-sm text-foreground duration-300 after:text-red-600 after:content-['_*'] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                      >
                        E-mail{" "}
                      </Label>
                    </div>
                    <FormMessage className="absolute text-xs text-red-700" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          min={6}
                          max={20}
                          tabIndex={3}
                          id="password"
                          type={isVisiblePassword ? "text" : "password"}
                          placeholder=" "
                          autoComplete="password"
                          className="peer h-10 appearance-none"
                        />
                      </FormControl>
                      <Label
                        htmlFor="password"
                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded bg-background px-2 text-sm text-foreground duration-300 after:text-red-600 after:content-['_*'] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                      >
                        Senha{" "}
                      </Label>
                      <Toggle
                        onClick={() => setIsVisiblePassword((prev) => !prev)}
                        className="absolute right-0 top-1/2 h-full -translate-y-1/2"
                      >
                        {!isVisiblePassword && (
                          <Eye className="size-5 text-muted-foreground" />
                        )}
                        {isVisiblePassword && (
                          <EyeOff className="size-5 text-muted-foreground" />
                        )}
                      </Toggle>
                    </div>
                    <FormMessage className="absolute text-xs text-red-700" />
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <Button
                  aria-label="Criar conta"
                  type="submit"
                  tabIndex={3}
                  disabled={isPending}
                  className="flex w-full items-center justify-center gap-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {isPending && (
                    <LoaderCircle className="size-4 animate-spin" />
                  )}
                  {!isPending && (
                    <>
                      <span>Criar conta</span>
                      <LogIn className="size-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
