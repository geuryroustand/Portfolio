"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Shake the form on validation error
      const form = document.getElementById("contact-form");
      if (form) {
        form.classList.add("animate-shake");
        setTimeout(() => {
          form.classList.remove("animate-shake");
        }, 500);
      }
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoLink = `mailto:roustandgeury@gmail.com?subject=${subject}&body=${body}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Show success message
    setIsSubmitted(true);

    // Reset form after a delay
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            Email Client Opened!
          </h3>
          <p className="text-slate-300">
            Your default email client should have opened with your message. If
            not, please try again or contact me directly.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Name
            </Label>
            <div className="relative">
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={cn(
                  "bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-sky-400 transition-all",
                  errors.name ? "border-red-500 focus:border-red-500" : "",
                  "pr-10"
                )}
                placeholder="Your name"
              />
              {errors.name && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                </div>
              )}
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className={cn(
                  "bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-sky-400 transition-all",
                  errors.email ? "border-red-500 focus:border-red-500" : "",
                  "pr-10"
                )}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                </div>
              )}
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message
            </Label>
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className={cn(
                  "min-h-[150px] bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-sky-400 transition-all",
                  errors.message ? "border-red-500 focus:border-red-500" : ""
                )}
                placeholder="Your message..."
              />
              {errors.message && (
                <div className="absolute right-3 top-6 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                </div>
              )}
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-sky-400 hover:bg-sky-500 text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </>
      )}
    </form>
  );
}
