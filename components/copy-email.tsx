"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

/**
 * A mailto link only works when the visitor has an email app set as the default,
 * so the address is also shown with a button that copies it.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the address is still visible to copy by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 font-mono text-sm text-muted transition hover:border-line hover:text-line"
      aria-label={`Copy ${email}`}
    >
      {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      {copied ? "copied!" : "copy"}
    </button>
  );
}
