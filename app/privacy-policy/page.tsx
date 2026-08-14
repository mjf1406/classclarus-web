/** @format */

import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - ClassClarus",
  description:
    "ClassClarus Privacy Policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-4xl prose prose-neutral dark:prose-invert">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-2">
            <strong>Last Updated:</strong> August 14, 2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 id="section-0" className="text-2xl font-semibold mt-8 mb-4">
                1. Our Commitment to Privacy
              </h2>
              <p className="text-muted-foreground">
                ClassClarus (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) prioritizes the privacy of educators and
                students.{" "}
                <strong>
                  We do not sell user data to any third party, nor do we
                  transfer data to third parties for marketing or commercial
                  purposes.
                </strong>
              </p>
            </section>

            <section>
              <h2 id="section-1" className="text-2xl font-semibold mt-8 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                We collect information necessary to provide educational tools,
                maintain security, and ensure FERPA compliance.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-2">Account Data</h3>
              <p className="text-muted-foreground">
                On <strong>cloud</strong> (app.classclarus.com), when you sign in
                with Google, we collect:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>First name and last name</li>
                <li>Email address</li>
                <li>Google profile photo URL</li>
              </ul>
                    <br />
              <p className="text-muted-foreground">
                On <strong>cloud</strong>, when you sign in with email, or on{" "}
                <strong>desktop and self-host</strong> installs, we collect:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Email address</li>
                <li>Optional: First name and last name are optionally set by the user</li>
                <li>Optional: Avatar image is optionally set by the user</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-2">
                Student and Class Data
              </h3>
              <p className="text-muted-foreground">
                The following data is optionally created or provided by the teacher to manage their classroom about their students. This data is only visible to the teacher, their students, and their parents or guardians, and school/district administrators:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>First and last names</li>
                <li>Roster numbers</li>
                <li>Seat assignments</li>
                <li>Gender</li>
                <li>Behavior records</li>
                <li>
                  Academic metrics: grades, reading scores, tasks, and
                  assignments
                </li>
                <li>Administrative data: attendance and expectations</li>
                <li>Point redemption and reward records</li>
                <li>Group assignments</li>
                <li>Team assignments</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-2">
                Third-Party Services
              </h3>
              <p className="text-muted-foreground">
                On cloud, we use <strong>Google OAuth</strong> for sign-in. We
                do not import data from Google Classroom.
              </p>
              <p className="text-muted-foreground mt-4">
                Cloud subscriptions are processed by{" "}
                <strong>Polar</strong>. Polar handles payment details, tax
                calculation, and invoicing — ClassClarus does not store your
                card information.
              </p>
              <p className="text-muted-foreground mt-4">
                On <strong>desktop and self-host</strong> installs, billing is
                disabled and classroom data (users, classes, uploads) is stored
                locally on the teacher&apos;s machine or your Docker volume, not
                on our cloud infrastructure.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-2">Usage Logs</h3>
              <p className="text-muted-foreground">
                To comply with FERPA audit requirements and ensure platform
                security, we log:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>IP address and User ID</li>
                <li>Access timestamps</li>
                <li>Specific data records viewed by the user</li>
              </ul>
            </section>

            <section>
              <h2 id="section-2" className="text-2xl font-semibold mt-8 mb-4">
                3. Family Educational Rights and Privacy Act (FERPA)
              </h2>
              <p className="text-muted-foreground">
                ClassClarus is designed to meet FERPA requirements regarding the
                protection of student education records.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Administrative Control:</strong> Schools and districts
                  maintain absolute control over their data. Administrators have
                  the authority to manage, modify, or delete data at any time.
                </li>
                <li>
                  <strong>Data Access & Transparency:</strong> All student data
                  is immediately available to authorized users, including
                  school/district administrators, the student&apos;s assigned
                  teacher(s), and their verified parents or guardians.
                </li>
                <li>
                  <strong>Auditability:</strong> Our usage logs provide a clear
                  record of which authorized users have accessed specific
                  educational data, supporting school compliance audits.
                </li>
              </ul>
            </section>

            <section>
              <h2 id="section-3" className="text-2xl font-semibold mt-8 mb-4">
                4. Data Security and Infrastructure
              </h2>
              <p className="text-muted-foreground">
                We employ rigorous technical measures to ensure your data
                remains secure:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Storage:</strong> All data is stored on Amazon Web
                  Services (AWS) in the <strong>US East-1</strong> region.
                </li>
                <li>
                  <strong>Encryption at Rest:</strong> Data stored on our
                  servers is encrypted at rest using industry-standard AES-256
                  protocols.
                </li>
                <li>
                  <strong>Encryption in Transit:</strong> All communication
                  between the server and client is encrypted via{" "}
                  <strong>TLS and HTTPS</strong>.
                </li>
              </ul>
            </section>

            <section>
              <h2 id="section-4" className="text-2xl font-semibold mt-8 mb-4">
                5. Data Retention and Deletion
              </h2>
              <p className="text-muted-foreground">
                Users maintain control over the lifecycle of their data.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Immediate Deletion:</strong> Upon a request for
                  deletion by an authorized official, data is removed from our
                  active databases immediately.
                </li>
                <li>
                  <strong>Data Portability:</strong> Users may export their data
                  in our supported format prior to deletion if they wish to
                  retain records.
                </li>
              </ul>
            </section>

            <section>
              <h2 id="section-5" className="text-2xl font-semibold mt-8 mb-4">
                6. Children&apos;s Privacy (COPPA)
              </h2>
              <p className="text-muted-foreground">
                We comply with the Children&apos;s Online Privacy Protection Act
                (COPPA). We rely on the school&apos;s authorization to act on
                behalf of parents to provide consent for the collection of
                student information for educational purposes, known as{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions#N.%20COPPA%20AND%20SCHOOLS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  School Consent
                </a>
                .
              </p>
            </section>

            <section>
              <h2 id="section-6" className="text-2xl font-semibold mt-8 mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground">
                For questions regarding security protocols or compliance, please
                contact:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>ClassClarus</strong>
                <br />
                Email:{" "}
                <a
                  href="mailto:admin@classclarus.com"
                  className="text-primary hover:underline"
                >
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