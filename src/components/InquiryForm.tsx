"use client";

import { FormEvent, useState } from "react";
import { mailtoInquiry, site } from "@/lib/site";

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Partnership");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `ZEHARIA Inquiry — ${interest} — ${name || "Private"}`;
    const body = [
      `Name: ${name || "—"}`,
      `Email: ${email || "—"}`,
      `Interest: ${interest}`,
      "",
      message || "(No message provided)",
    ].join("\n");
    window.location.href = mailtoInquiry(subject, body);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-luxury">
            Name
          </label>
          <input
            id="name"
            className="input-luxury"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="label-luxury">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input-luxury"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="label-luxury">
          Interest
        </label>
        <select
          id="interest"
          className="input-luxury"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          <option>Partnership</option>
          <option>Private Art Acquisition</option>
          <option>Vision / Fashion Collaboration</option>
          <option>Press / Media</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label-luxury">
          Message
        </label>
        <textarea
          id="message"
          className="input-luxury min-h-[160px] resize-y"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share context for a private conversation…"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          Open Private Inquiry
        </button>
        <p className="text-xs text-muted">
          Opens your email client to{" "}
          <a href={`mailto:${site.email}`} className="text-brass hover:underline">
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}
