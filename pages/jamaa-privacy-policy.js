import Head from "next/head";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export default function JamaaPrivacyPolicy() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Privacy Policy - Jamaa</title>
        <meta
          name="description"
          content="Privacy Policy for Jamaa App"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Jamaa</h1>
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
              Last Updated: April 2026
            </p>
            <p className="text-md leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Welcome to Jamaa. We are committed to protecting your privacy.
            </p>
          </div>
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
            <p className="dark:text-gray-200">
              This Privacy Policy outlines how we collect, use, and protect your
              information when you use our app.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              1. Information We Collect
            </h4>

            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-semibold dark:text-gray-100">
                  1.1 Game Tracking Data:
                </h5>
                <p className="dark:text-gray-200">
                  We store minimal game statistics locally on your device (using
                  SharedPreferences) to:
                </p>
                <ul className="list-disc pl-5 dark:text-gray-200">
                  <li>Track game progress and statistics</li>
                  <li>Determine when to show premium features prompts</li>
                  <li>
                    This data stays on your device and is not transmitted to our
                    servers
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold dark:text-gray-100">
                  1.2 Analytics Information:
                </h5>
                <p className="dark:text-gray-200">
                  We use Firebase Analytics to collect:
                </p>
                <ul className="list-disc pl-5 dark:text-gray-200">
                  <li>Device type and operating system</li>
                  <li>
                    App usage patterns (e.g., games played, features used)
                  </li>
                  <li>Performance data and crash reports</li>
                </ul>
                <p className="dark:text-gray-200 mt-2">
                  This helps us understand how the app is used and improve the
                  user experience.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold dark:text-gray-100">
                  1.3 Feedback &amp; Support:
                </h5>
                <p className="dark:text-gray-200">
                  Any messages, feedback, or inquiries you submit through email
                  or support channels.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold dark:text-gray-100">
                  1.4 Automatically Collected Information:
                </h5>
                <p className="dark:text-gray-200">
                  Device type, operating system, usage statistics, crash
                  reports, and diagnostic data to improve app performance.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold dark:text-gray-100">
                  1.5 Third-Party Services:
                </h5>
                <p className="dark:text-gray-200">
                  If you interact with ads or analytics providers, they may
                  collect data per their own policies.
                </p>
              </div>
            </div>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              2. How We Use Your Information
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Provide and improve the Jamaa app experience.</li>
              <li>
                Maintain and analyze app performance through Firebase Analytics.
              </li>
              <li>Process in-app purchases securely through RevenueCat.</li>
              <li>Respond to user inquiries or support requests.</li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3. Information Sharing and Disclosure
            </h4>
            <p className="dark:text-gray-200">
              We do not sell your personal data.
            </p>

            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-semibold dark:text-gray-100">
                  With Service Providers:
                </h5>
                <ul className="list-disc pl-5 dark:text-gray-200">
                  <li>
                    Firebase Analytics: To analyze app performance and user
                    engagement
                  </li>
                  <li>RevenueCat: To process VIP subscription purchases</li>
                  <li>App Store/Google Play: For in-app purchase processing</li>
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold dark:text-gray-100">
                  For Legal Reasons:
                </h5>
                <p className="dark:text-gray-200">
                  To comply with legal obligations or protect our rights.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold dark:text-gray-100">
                  With Your Consent:
                </h5>
                <p className="dark:text-gray-200">
                  If you explicitly agree to share your data.
                </p>
              </div>
            </div>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              4. Third-Party Services
            </h4>
            <p className="dark:text-gray-200">
              The app includes third-party tools and services. These services
              may collect data about you as outlined in their respective privacy
              policies:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Firebase Analytics (Google):{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 underline"
                >
                  https://firebase.google.com/support/privacy
                </a>
              </li>
              <li>
                RevenueCat:{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 underline"
                >
                  https://www.revenuecat.com/privacy
                </a>
              </li>
              <li>App Store or Google Play: For in-app purchases</li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              5. Children&apos;s Privacy
            </h4>
            <p className="dark:text-gray-200">
              Jamaa is rated 3+ on the Play Store and 4+ on App Store to
              ensure it&apos;s appropriate for all ages. We do not knowingly
              collect personal data from children under 13.
            </p>
            <p className="dark:text-gray-200 mt-2">
              Parents are encouraged to:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Monitor app usage to ensure a safe and age-appropriate
                experience
              </li>
              <li>Set up parental controls to manage in-app purchases</li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              6. In-App Purchases &amp; Subscriptions
            </h4>
            <p className="dark:text-gray-200">
              Purchases are handled securely through the app store via
              RevenueCat. We do not store payment information directly.
            </p>
            <p className="dark:text-gray-200 mt-2">
              VIP subscriptions include:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Access to all game categories</li>
              <li>Extra game configurations (rounds, time limits, and more)</li>
              <li>Future VIP-exclusive games</li>
            </ul>
            <p className="dark:text-gray-200 mt-2">
              Subscriptions auto-renew unless canceled. Parents should ensure
              parental controls are set up to manage in-app purchases for
              children under their supervision.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              7. Data Retention
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                <strong>Game Data:</strong> Stored locally on your device
                until you uninstall the app or clear app data.
              </li>
              <li>
                <strong>Analytics:</strong> Retained by Firebase according to
                their data retention policies.
              </li>
              <li>
                <strong>Support Communications:</strong> Retained as long as
                necessary to provide support.
              </li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              8. Your Rights
            </h4>
            <p className="dark:text-gray-200">You have the right to:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Access information we collect about you</li>
              <li>Request deletion of your data</li>
              <li>
                Opt out of analytics (by disabling analytics in device settings)
              </li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              9. Data Security
            </h4>
            <p className="dark:text-gray-200">
              We implement appropriate security measures to protect your
              information. However, no method of transmission over the internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              10. International Data Transfers
            </h4>
            <p className="dark:text-gray-200">
              Analytics data may be transferred to and processed in countries
              other than your own, including the United States, where data
              protection laws may differ.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              11. Changes to This Privacy Policy
            </h4>
            <p className="dark:text-gray-200">
              We may update this Privacy Policy periodically. Any changes will
              be effective immediately upon posting in the app. We encourage you
              to review this policy regularly.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              12. Contact Us
            </h4>
            <p className="dark:text-gray-200">
              If you have questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <p className="dark:text-gray-200">
              Email:{" "}
              <a
                className="dark:text-teal-400 text-teal-600 underline"
                href="mailto:support@fahad-labs.com"
              >
                support@fahad-labs.com
              </a>
            </p>
            <p className="dark:text-gray-200 mt-4">
              By using Jamaa, you acknowledge that you have read and
              understood this Privacy Policy and agree to its terms.
            </p>
          </div>
        </section>
      </main>
      <footer className="text-center bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        2026 Jamaa
      </footer>
    </div>
  );
}
