import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

/**
 * Terms of Use – Sarkk / سارك
 * Applies to iOS & Android. References Apple Standard EULA and Google Play Terms.
 */
export default function SarkkTerms() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Terms of Use – Sarkk / سارك</title>
        <meta
          name="description"
          content="Terms of Use for Sarkk / سارك – applicable to iOS and Android"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* MAIN */}
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Top Bar */}
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Sarkk / سارك</h1>
            <BsMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </nav>

          {/* Header */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Terms of Use
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Last updated 9 May 2026
            </p>
          </div>

          {/* BODY */}
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
            {/* 0. Store-Level Agreements */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              Store-Level Agreements
            </h3>
            <p className="dark:text-gray-200">
              By installing or using <strong>Sarkk / سارك</strong> you confirm
              that you have read and agree to the applicable store terms{" "}
              <b>in addition to</b> the sections below:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                <strong>iOS / Apple&nbsp;App Store :</strong>&nbsp;
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 underline"
                >
                  Apple Standard End-User License Agreement (EULA)
                </a>
              </li>
              <li>
                <strong>Android / Google Play :</strong>&nbsp;
                <a
                  href="https://play.google.com/intl/en/about/play-terms.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 underline"
                >
                  Google Play Terms of Service
                </a>
              </li>
            </ul>

            {/* 1. Age Requirement */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              1. Age Requirement
            </h3>
            <p className="dark:text-gray-200">
              The Game is rated 4+. If you are under 13 you must have parental
              permission before playing or making purchases.
            </p>

            {/* 2. Subscriptions & Purchases */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              2. Subscriptions & In-App Purchases
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Payments are processed through your store account via{" "}
                <strong>RevenueCat</strong>.
              </li>
              <li>
                Unlockable skins, custom categories, and premium features are
                available while your subscription is active; they have no cash
                value and are non-transferable.
              </li>
              <li>
                <strong>Refunds :</strong> All sales are considered final;
                however, refund requests are handled directly by the App Store
                or Google Play and will follow their respective policies and any
                applicable consumer-protection laws.
              </li>
            </ul>

            {/* 3. User Conduct */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              3. User Conduct
            </h3>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3.1 Prohibited Conduct
            </h4>
            <p className="dark:text-gray-200">
              You agree not to engage in conduct that:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Harasses, threatens, intimidates, or bullies other players
              </li>
              <li>
                Uses hate speech, slurs, or content targeting race, religion,
                gender, sexual orientation, nationality, or disability
              </li>
              <li>
                Contains sexual, violent, or otherwise unlawful content
              </li>
              <li>
                Impersonates others or uses an offensive display name or avatar
              </li>
              <li>Cheats, exploits bugs, or uses automated tools</li>
              <li>
                Deliberately disrupts gameplay (e.g., persistent inactivity,
                sabotage)
              </li>
              <li>
                Reverse-engineers, modifies, or redistributes any part of the
                Game
              </li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3.2 Reporting and Moderation
            </h4>
            <p className="dark:text-gray-200">
              The Game provides in-app tools to report other players whose
              conduct violates these Terms. Reports are reviewed by our
              moderation team and may result in warnings, kicks, or
              permanent bans. Hosts of private rooms may also remove disruptive
              players directly. We may take action against accounts at our
              discretion based on report patterns, content review, or system
              signals.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3.3 Appeals
            </h4>
            <p className="dark:text-gray-200">
              If you believe an action was taken against your account in error,
              contact{" "}
              <a
                href="mailto:support@fahad-labs.com"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                support@fahad-labs.com
              </a>{" "}
              with your account details and the date of the incident.
            </p>

            {/* 4. Data & Privacy */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              4. Data & Privacy
            </h3>
            <p className="dark:text-gray-200">
              We collect gameplay analytics and account data as described in our{" "}
              <Link
                href="/sarkk-privacy-policy"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* 5. Updates */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              5. Updates
            </h3>
            <p className="dark:text-gray-200">
              Features, content, or virtual items may change or be discontinued
              at any time.
            </p>

            {/* 6. Limitation of Liability */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              6. Limitation of Liability
            </h3>
            <p className="dark:text-gray-200">
              To the fullest extent permitted by law, the Developer shall not be
              liable for indirect, incidental, or consequential damages. Total
              liability will not exceed amounts you paid in the previous 12
              months.
            </p>

            {/* 7. Contact */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              7. Contact
            </h3>
            <p className="dark:text-gray-200">
              Questions? Email&nbsp;
              <a
                href="mailto:support@fahad-labs.com"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                support@fahad-labs.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        © 2025 Sarkk – Developed with ❤️ in Kuwait
      </footer>
    </div>
  );
}
