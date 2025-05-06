import Head from "next/head";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export default function EfhamniPrivacyPolicy() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Privacy Policy - Efhmani</title>
        <meta name="description" content="Privacy Policy of the Efhmani App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Efhmani</h1>
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
              Welcome to Efhmani! We are committed to protecting your privacy.
            </p>
          </div>
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-3xl font-bold py-2 dark:text-white">
              Privacy Policy for Efhmani
            </h3>
            <p className="py-2 dark:text-gray-200">
              Welcome to Efhmani! We are committed to protecting your privacy.
              This Privacy Policy outlines how we collect, use, and protect your
              information when you use our app.
            </p>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              1. Information We Collect
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>
                <strong>1.1 Information You Provide to Us:</strong> Account
                Information: If you sign in using a Google or social media
                account, we collect basic profile information such as your name,
                email address, and profile picture.
              </li>
              <li>
                Feedback: Any feedback, support requests, or inquiries submitted
                through the app.
              </li>
              <li>
                <strong>In-App Purchases:</strong> Information related to in-app
                purchases, such as purchase history, is collected via the app
                store and processed securely by the store.
              </li>
              <li>
                <strong>1.2 Automatically Collected Information:</strong> Device
                Information: Device type, operating system, and version. Game
                Data: In-game activities such as scores, game progress, and
                preferences. Usage Data: App usage statistics, crash reports,
                and diagnostic data.
              </li>
              <li>
                <strong>1.3 Third-Party Services:</strong> If you interact with
                third-party services (e.g., ads, analytics, or payment
                gateways), they may collect information per their privacy
                policies.
              </li>
            </ul>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              2. How We Use Your Information
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>Provide and improve the Efhmani app experience.</li>
              <li>Maintain and analyze app performance.</li>
              <li>Process in-app purchases securely.</li>
              <li>Respond to user inquiries or support requests.</li>
              <li>Show relevant advertisements or offers.</li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3. Information Sharing and Disclosure
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>We do not sell your personal data.</li>
              <li>
                <strong>With Service Providers:</strong> To help us analyze app
                performance, process purchases, or show advertisements.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> To comply with legal
                obligations or protect our rights.
              </li>
              <li>
                <strong>With Your Consent:</strong> If you explicitly agree to
                share your data.
              </li>
            </ul>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              4. Third-Party Services
            </h4>
            <p className="dark:text-gray-200">
              The app may include third-party tools, advertisements, or payment
              gateways. These services may collect data about you as outlined in
              their respective privacy policies. Examples include:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>Google Analytics</li>
              <li>Google AdMob</li>
              <li>App Store or Google Play (for in-app purchases)</li>
            </ul>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              5. Children&apos;s Privacy
            </h4>
            <p className="dark:text-gray-200">
              Efhmani is rated 3+ on the Play Store and 4+ on App Store to
              ensure it&apos;s appropriate for all ages. We do not knowingly
              collect personal data from children under 13.
            </p>
            <p className="dark:text-gray-200">
              Parents are encouraged to monitor app usage to ensure a safe and
              age-appropriate experience.
            </p>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              6. In-App Purchases
            </h4>
            <p className="dark:text-gray-200">
              Purchases are handled securely through the app store. We do not
              store payment information directly. Parents should ensure parental
              controls are set up to manage in-app purchases for children under
              their supervision.
            </p>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              7. Changes to This Privacy Policy
            </h4>
            <p className="dark:text-gray-200">
              We may update this Privacy Policy periodically. Any changes will
              be effective immediately upon posting in the app. We encourage you
              to review this policy regularly.
            </p>
            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              8. Contact Us
            </h4>
            <p className="dark:text-gray-200">
              If you have questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <p className="dark:text-gray-200">
              Email:{" "}
              <a href="mailto:fahad.devx@gmail.com">fahad.devx@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <footer className="text-center bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        Made by Fahad
      </footer>
    </div>
  );
}
