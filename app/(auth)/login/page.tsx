"use client";

import { login } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export default function Login() {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newFormData = { ...prev, [name]: value };
      try {
        schema.parse(newFormData);
        setError(null);
      } catch (error) {
        if (error instanceof z.ZodError) {
          let errObj: any = {};
          error.errors.map((err) => {
            errObj[err.path[0]] = err.message;
          });
          setError(errObj);
        }
      }
      return newFormData;
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      schema.parse(formData);
      let res = await login({ ...formData });

      console.log({ res });

      toast(JSON.stringify(res));
    } catch (error) {
      console.log({ error });

      if (error instanceof z.ZodError) {
        let errObj: any = {};
        error.errors.map((err) => {
          errObj[err.path[0]] = err.message;
        });
        setError(errObj);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-[300px] mx-auto p-4 border rounded-md space-y-3">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(error?.email && "outline-none border-red-500")}
          />
          <div className="text-sm text-red-500">{error?.email}</div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={cn(error?.password && "outline-none border-red-500")}
          />
          <div className="text-sm text-red-500 ">{error?.password}</div>
        </div>

        <Button
          disabled={loading}
          type="submit"
          className="mt-3 w-full"
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </div>
    </div>
  );
}
