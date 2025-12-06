import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export default function ActAndShoutTerms() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Terms of Use - Act & Shout</title>
        <meta name="description" content="Terms of Use for the Act & Shout App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Act & Shout</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          {/* Header */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Terms of Use
            </h2>
          </div>

          {/* BODY */}
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
            {/* 0. Store-Level Agreements */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              Store-Level Agreements
            </h3>
            <p className="dark:text-gray-200">
              By installing or using <strong>Act & Shout</strong> you
              confirm that you have read and agree to the applicable store terms{" "}
              <b>in addition to</b> the sections below:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                <strong>iOS / Apple&nbsp;App Store:</strong>&nbsp;
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
                <strong>Android / Google Play:</strong>&nbsp;
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
              The Game is rated 4+ on App Store and 3+ on Google Play. However,
              this app is intended for users aged 13 and older. If you are under
              13, you should not use this app.
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
                Subscription unlocks:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Extra categories beyond the free ones</li>
                  <li>Game configuration options (timer, rounds, etc.)</li>
                  <li>Ability to create custom categories with your own personalized word lists</li>
                </ul>
              </li>
              <li>
                Free users can play the free categories included in the app.
              </li>
              <li>
                Virtual items and features have no cash value and are
                non-transferable.
              </li>
              <li>
                <strong>Refunds:</strong> All sales are considered final;
                however, refund requests are handled directly by the App Store
                or Google Play and will follow their respective policies and any
                applicable consumer-protection laws.
              </li>
            </ul>

            {/* 3. User Conduct & Content */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              3. User Conduct Guidelines
            </h3>
            <p className="dark:text-gray-200">You agree not to:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Cheat, exploit bugs, or use unauthorized third-party tools
              </li>
              <li>Reverse-engineer, decompile, or modify the Game</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate others or provide false information</li>
            </ul>
            <p className="dark:text-gray-200 mt-3">
              Violations may result in account suspension or
              permanent termination.
            </p>

            {/* 4. Subscription Features & Custom Categories */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              4. Subscription Features & Custom Categories
            </h3>
            <div className="dark:text-gray-200 space-y-3">
              <p>
                <strong>Subscription Requirement:</strong> Premium features
                require an active subscription. This includes access to extra
                categories, game configuration options, and custom categories.
                Free users can play the free categories included in the app.
              </p>
              <p>
                <strong>Game Configuration:</strong> Subscribers can customize
                game settings such as timer duration, number of rounds, and other
                gameplay options.
              </p>
              <p>
                <strong>Private Use:</strong> Custom categories you create are
                private to your account. They are not shared with other users
                and are only accessible by you.
              </p>
              <p>
                <strong>Account Deletion:</strong> If you delete your account,
                all your custom categories will be permanently removed.
              </p>
            </div>

            {/* 5. License to Use */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              5. License to Use
            </h3>
            <p className="dark:text-gray-200">
              We grant you a limited, non-exclusive, non-transferable license to
              use Act & Shout for personal, non-commercial purposes. This license
              does not allow you to:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Modify or copy the app materials</li>
              <li>Use the materials for commercial purposes</li>
              <li>Attempt to reverse engineer any software</li>
              <li>Remove copyright or proprietary notations</li>
              <li>
                Transfer materials to another person or &quot;mirror&quot; on
                any server
              </li>
            </ul>

            {/* 6. Data & Privacy */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              6. Data & Privacy
            </h3>
            <p className="dark:text-gray-200">
              We collect gameplay analytics, account data, and user-generated
              content as described in our{" "}
              <Link
                href="/act-and-shout-privacy-policy"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                Privacy Policy
              </Link>
              . By using the app, you consent to our data practices.
            </p>

            {/* 7. Disclaimer of Warranties */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              7. Disclaimer of Warranties
            </h3>
            <p className="dark:text-gray-200">
              The app is provided &quot;as is&quot; without warranties of any
              kind. We do not guarantee that:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>The app will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The app is free of viruses or harmful components</li>
              <li>Results from using the app will be accurate or reliable</li>
            </ul>

            {/* 8. Limitation of Liability */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              8. Limitation of Liability
            </h3>
            <p className="dark:text-gray-200">
              To the fullest extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages resulting from your use or inability to use the app. Our
              total liability will not exceed the amounts you paid to us in the
              previous 12 months.
            </p>

            {/* 9. Updates and Modifications */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              9. Updates and Modifications
            </h3>
            <p className="dark:text-gray-200">We reserve the right to:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Modify or discontinue features at any time</li>
              <li>Update these terms without prior notice</li>
              <li>Require app updates for continued use</li>
              <li>Change subscription pricing with appropriate notice</li>
            </ul>

            {/* 10. Intellectual Property */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              10. Intellectual Property
            </h3>
            <p className="dark:text-gray-200">
              All app content, features, and functionality are owned by us and
              protected by international copyright, trademark, and other
              intellectual property laws. The Act & Shout name, logo, and all
              related names, logos, product and service names, designs, and
              slogans are our trademarks.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              11. Contact Us
            </h4>
            <p className="dark:text-gray-200">
              If you have questions or concerns about these Terms, please contact
              us:
            </p>
            <p className="dark:text-gray-200">
              Email:{" "}
              <a href="mailto:support@fahad-labs.com" className="text-teal-600 dark:text-teal-400 underline">
                support@fahad-labs.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <footer className="text-center bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        Made by Act & Shout Team
        <p>Last updated December 2025</p>
      </footer>
    </div>
  );
}
