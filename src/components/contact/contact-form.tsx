"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  recipientEmail: string;
  successMessage: string;
  initialMessage?: string;
}

export function ContactForm({
  recipientEmail,
  successMessage,
  initialMessage = "",
}: ContactFormProps) {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: initialMessage,
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[+()\-\s\d]{7,}$/.test(values.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!values.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    const subject = encodeURIComponent(`Website enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\nMessage:\n${values.message}`
    );

    setSubmitted(true);
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const inputClassName =
    "mt-2 w-full rounded-xl border border-blush-200 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-blush-400 focus:ring-2 focus:ring-blush-200";

  return (
    <div className="rounded-3xl border border-blush-100 bg-white p-6 shadow-sm sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange("name")}
            className={inputClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-blush-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              className={inputClassName}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="mt-2 text-sm text-blush-700">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-ink">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange("phone")}
              className={inputClassName}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone ? (
              <p id="phone-error" className="mt-2 text-sm text-blush-700">
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={handleChange("message")}
            className={inputClassName}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-blush-700">
              {errors.message}
            </p>
          ) : null}
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Message
        </Button>

        {submitted ? (
          <p className="rounded-2xl border border-blush-100 bg-blush-50 px-4 py-3 text-sm text-ink-muted">
            {successMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
