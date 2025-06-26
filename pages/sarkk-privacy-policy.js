import Head from "next/head";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export default function SarkkPrivacyPolicy() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Privacy Policy - Sarkk</title>
        <meta name="description" content="Privacy Policy of the Sarkk App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Sarkk</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Privacy Policy
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Welcome to Sarkk! We are committed to protecting your privacy.
            </p>
          </div>
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-3xl font-bold py-2 dark:text-white">
              Privacy Policy for Sarkk
            </h3>
            <p className="py-2 dark:text-gray-200">
              This Privacy Policy describes how we collect, use, and protect
              your information when you use our app.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              1. Information We Collect
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>
                <strong>1.1 Account Information:</strong> When you sign in via
                Google Sign‑In, Apple Sign‑In, or other social providers, we
                collect basic profile details such as your name, email address,
                and profile picture.
              </li>
              <li>
                <strong>1.2 Feedback & Support:</strong> Any messages, feedback,
                or inquiries you submit through the app.
              </li>

              <li>
                <strong>1.3 Automatically Collected Information:</strong> Device
                type, operating system, usage statistics, crash reports, and
                diagnostic data to improve app performance.
              </li>
              <li>
                <strong>1.4 Third‑Party Services:</strong> If you interact with
                ads or analytics providers, they may collect data per their own
                policies.
              </li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              2. How We Use Your Information
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>Provide and improve the Sarkk gameplay experience.</li>
              <li>Analyze app performance and usage.</li>
              <li>Process in‑app purchases securely.</li>
              <li>Respond to your support requests.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3. Account Deletion
            </h4>
            <p className="dark:text-gray-200">
              Yo can delete your account directly within the app.
            </p>
            <p className="pt-2 dark:text-gray-200">
              <strong>Important:</strong> Any <em>public</em> categories you
              created will remain visible to the community after your account is
              deleted. Private categories are removed along with your data.
            </p>
            <p className="pt-2 dark:text-gray-200">
              If you encounter any issues, email&nbsp;
              <a
                className="dark:text-teal-400 text-teal-600 underline"
                href="mailto:sarkk.game@gmail.com"
              >
                sarkk.game@gmail.com
              </a>
              &nbsp;and we’ll assist you.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              4. Information Sharing
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>We do not sell your personal data.</li>
              <li>
                <strong>Service Providers:</strong> We share data with trusted
                partners for analytics and purchase processing.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with legal
                requirements or protect our rights.
              </li>
              <li>
                <strong>With Consent:</strong> Only when you explicitly agree to
                share your data.
              </li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              5. Children’s Privacy
            </h4>
            <p className="dark:text-gray-200">
              Sarkk is rated 3+ on Play Store and 4+ on App Store. We do not
              knowingly collect personal data from children under 13.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              6. Third‑Party Services
            </h4>
            <p className="dark:text-gray-200">
              We may use third‑party tools like Google Analytics; their data
              practices are governed by their own privacy policies.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              7. Community-Created Categories
            </h4>
            <p className="dark:text-gray-200">
              You can create your own custom categories and choose to keep them
              private just for yourself or share them publicly with the
              community.
              <ul className="list-disc pl-5 dark:text-gray-200">
                <li>
                  <strong>Private:</strong> Only you can view, edit, or delete
                  these at any time.
                </li>
                <li>
                  <strong>Public:</strong> Visible to everyone—changes are
                  final, but you can request removal by contacting our support
                  team.
                </li>
              </ul>
              Any inappropriate uploads violate our terms and may result in
              removal of the content or suspension/deletion of your account. If
              you need a public category taken down, please reach out to our
              team for assistance.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              8. Changes to This Policy
            </h4>
            <p className="dark:text-gray-200">
              We may update this policy periodically. Changes take effect as
              soon as they’re posted in the app.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              9. Subscriptions
            </h4>
            <p className="dark:text-gray-200">
              Sarkk offer subscription-based premium features. Subscription
              payments are processed via your device’s app store; we do not
              store your payment details. By subscribing, you agree to the
              store’s terms and this Privacy Policy.
            </p>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              10. Contact Us
            </h4>
            <p className="dark:text-gray-200">
              Questions or concerns? Email us at{" "}
              <a
                className="dark:text-teal-400 text-teal-600"
                href="mailto:fahad.devx@gmail.com"
              >
                fahad.devx@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <footer className="text-center bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        Made by the Sarkk Team
      </footer>
    </div>
  );
}
