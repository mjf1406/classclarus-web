/** @format */

import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy - ClassClarus",
  description: "ClassClarus Cookie Policy regarding authentication cookies.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-4xl prose prose-neutral dark:prose-invert">
          <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Last Updated:</strong> August 14, 2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Strictly Necessary Cookies
              </h2>
              <p className="text-muted-foreground">
                ClassClarus only uses <strong>Strictly Necessary</strong> cookies.
                These are essential for you to browse the website and use its
                features, specifically our secure login system on cloud.
              </p>
              <p className="text-muted-foreground mt-4">
                We do not use any cookies for advertising, tracking, or
                behavioral analytics. Desktop and self-host installs run locally
                and do not use this marketing site&apos;s cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. Authentication Provider
              </h2>
              <p className="text-muted-foreground">
                On <strong>cloud</strong>, our application uses{" "}
                <strong>Google OAuth</strong> to manage secure user
                authentication. These cookies are required to verify your
                identity and maintain your session.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Cookie</th>
                      <th className="border border-border p-3 text-left">Provider</th>
                      <th className="border border-border p-3 text-left">Purpose</th>
                      <th className="border border-border p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-mono">g_state</td>
                      <td className="border border-border p-3">Google</td>
                      <td className="border border-border p-3">Stores OAuth login state</td>
                      <td className="border border-border p-3">Session/Persistent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Managing Cookies
              </h2>
              <p className="text-muted-foreground">
                You can set your browser to block or alert you about these 
                cookies, but if you block the authentication cookies, the entire site will become non-functional for you.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li>
                  <strong>Chrome:</strong> Settings &gt; Privacy and security &gt; 
                  Cookies and other site data
                </li>
                <li>
                  <strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; 
                  Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Contact
              </h2>
              <p className="text-muted-foreground">
                For questions regarding our use of functional cookies, contact:
                <br />
                <a href="mailto:admin@classclarus.com" className="text-primary hover:underline">
                  admin@classclarus.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}