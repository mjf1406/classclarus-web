/** @format */

import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions - ClassClarus",
  description:
    "ClassClarus Terms and Conditions. Please read these terms carefully before using our service.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-4xl prose prose-neutral dark:prose-invert">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground mb-8 text-center">
            <strong>Last Updated:</strong> August 14, 2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 id="section-1" className="text-2xl font-semibold mt-8 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                These Terms and Conditions constitute a legally binding
                agreement between you and <strong>ClassClarus</strong>{" "}
                concerning your access to and use of https://www.classclarus.com/ and all of its subdomains.
              </p>
              <br />
              <p className="text-muted-foreground">
                By accessing the Service, you agree to be bound by these Terms.
                If you are using the Service on behalf of a school or
                educational institution, you represent that you have the
                authority to bind that institution to these Terms.
              </p>
            </section>

            <section>
              <h2 id="section-2" className="text-2xl font-semibold mt-8 mb-4">
                2. Educational Service Provider Role
              </h2>
              <p className="text-muted-foreground">
                ClassClarus operates as a service provider to educators.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Data Ownership:</strong> You (the school, district, or
                  educator) maintain ownership and administrative control over
                  all student data and &ldquo;educational records&rdquo; (as
                  defined by FERPA) uploaded to the platform.
                </li>
                <li>
                  <strong>School Consent:</strong> Under COPPA, schools may act
                  as agents for parents and provide consent for the collection
                  of student information for educational purposes. By adding
                  students to the platform, you represent that you have
                  obtained the necessary School Consent or parental permission.
                </li>
              </ul>
            </section>

            <section>
              <h2 id="section-3" className="text-2xl font-semibold mt-8 mb-4">
                3. User Accounts & Authentication
              </h2>
              <p className="text-muted-foreground">
                ClassClarus is available in the cloud (app.classclarus.com), as a
                downloadable desktop app, and as a self-hosted install on your
                LAN. Authentication and billing differ by install type.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Cloud:</strong> Sign in with Google OAuth or email.
                  We do not store your Google password. A subscription (via
                  Polar) is required to create classes after your free trial.
                </li>
                <li>
                  <strong>Desktop &amp; self-host:</strong> Email and password
                  only. No Polar billing. The first account on a local instance
                  becomes the instance admin.
                </li>
                <li>
                  <strong>Security:</strong> You are responsible for keeping
                  your sign-in credentials secure. ClassClarus is not liable for
                  unauthorized access resulting from compromised accounts.
                </li>
                <li>
                  <strong>Accuracy:</strong> You must provide accurate
                  information when creating rosters and class records.
                </li>
              </ul>
            </section>

            <section>
              <h2 id="section-4" className="text-2xl font-semibold mt-8 mb-4">
                4. Prohibited Activities
              </h2>
              <p className="text-muted-foreground">
                Users agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  Knowingly input false or misleading student behavior or
                  academic records.
                </li>
                <li>
                  Bypass security measures or attempt to access data not
                  assigned to your authorized classroom or organization.
                </li>
                <li>
                  Use the platform for any purpose other than classroom
                  management and educational instruction.
                </li>
                <li>
                  Scrape or systematically retrieve data from the service for
                  use in third-party applications.
                </li>
              </ul>
            </section>

            <section>
              <h2 id="section-5" className="text-2xl font-semibold mt-8 mb-4">
                5. Purchases and Payment
              </h2>
              <p className="text-muted-foreground">
                Cloud subscriptions are processed by <strong>Polar</strong>.
                Desktop and self-hosting remain free. We do not store card
                details on ClassClarus servers.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Pricing:</strong> Cloud plans are $3/month or $30/year
                  after a 90-day trial. Prices may change; existing subscribers
                  are notified before changes take effect.
                </li>
                <li>
                  <strong>Refunds:</strong> Subscription cancellations take
                  effect at the end of the current billing cycle.
                </li>
              </ul>
            </section>

            <section>
              <h2 id="section-6" className="text-2xl font-semibold mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLASSCLARUS SHALL NOT
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES
                RESULTING FROM THE USE OR INABILITY TO USE THE SERVICE, OR
                ERRORS IN STUDENT DATA RECORDS. OUR AGGREGATE LIABILITY SHALL
                NOT EXCEED ONE HUNDRED DOLLARS ($100) OR THE TOTAL FEES PAID BY
                YOU IN THE PRECEDING MONTH.
              </p>
            </section>

            <section>
              <h2 id="section-7" className="text-2xl font-semibold mt-8 mb-4">
                7. Termination
              </h2>
              <p className="text-muted-foreground">
                You may delete your account at any time. Upon deletion, student
                records and class data are removed from our active databases in
                accordance with our Privacy Policy. We reserve the right to
                suspend accounts that violate these terms or compromise the
                privacy of other users.
              </p>
            </section>

            <section>
              <h2 id="section-8" className="text-2xl font-semibold mt-8 mb-4">
                8. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the State of Delaware,
                United States. Any disputes shall be resolved in the courts of
                Delaware.
              </p>
            </section>

            <section>
              <h2 id="section-9" className="text-2xl font-semibold mt-8 mb-4">
                9. Contact Us
              </h2>
              <p className="text-muted-foreground">
                Questions regarding these Terms should be sent to:
                <br />
                <strong>Email:</strong>{" "}
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