import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export default function EfhamniPrivacyPolicy() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Terms - Efhmani</title>
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
          {/* Header */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Terms of Use
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Last updated 27 July 2025
            </p>
          </div>

          {/* BODY */}
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
            {/* 0. Store-Level Agreements */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              Store-Level Agreements
            </h3>
            <p className="dark:text-gray-200">
              By installing or using <strong>Efhamni / إفهمني</strong> you
              confirm that you have read and agree to the applicable store terms{" "}
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
              The Game is rated 3+ on Google Play and 4+ on App Store. If you
              are under 13 you must have parental permission before playing or
              making purchases.
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
                Premium features include access to community-created categories,
                additional original categories, and the ability to create
                unlimited custom categories.
              </li>
              <li>
                Virtual items and features have no cash value and are
                non-transferable.
              </li>
              <li>
                <strong>Refunds :</strong> All sales are considered final;
                however, refund requests are handled directly by the App Store
                or Google Play and will follow their respective policies and any
                applicable consumer-protection laws.
              </li>
            </ul>

            {/* 3. User Conduct & Content */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              3. User Conduct & Content Guidelines
            </h3>
            <p className="dark:text-gray-200">You agree not to:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Upload offensive, inappropriate, or unlawful content</li>
              <li>Harass, abuse, or harm other users</li>
              <li>
                Cheat, exploit bugs, or use unauthorized third-party tools
              </li>
              <li>Reverse-engineer, decompile, or modify the Game</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate others or provide false information</li>
            </ul>
            <p className="dark:text-gray-200 mt-3">
              Violations may result in content removal, account suspension, or
              permanent termination.
            </p>

            {/* 4. Community Categories */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              4. Community-Created Categories
            </h3>
            <div className="dark:text-gray-200 space-y-3">
              <p>
                <strong>Access Requirements:</strong> Access to
                community-created categories typically requires an active
                subscription. However, we may occasionally offer free access to
                community categories during special promotions or events at our
                sole discretion. Free users can always play free original
                categories and their own custom categories.
              </p>
              <p>
                <strong>Content Ownership:</strong> When you create and share a
                category publicly:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You retain ownership of your content</li>
                <li>
                  You grant Efhamni a worldwide, non-exclusive, royalty-free
                  license to use, display, and distribute your content within
                  the app
                </li>
                <li>
                  Other users may play your categories as part of their
                  subscription benefits or during promotional free access
                  periods
                </li>
                <li>
                  You can edit or delete your public categories if active at any
                  time
                </li>
              </ul>
              <p>
                <strong>Content Moderation:</strong> We reserve the right to
                remove any content that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Violates these terms or community guidelines</li>
                <li>Is reported by multiple users</li>
                <li>Contains inappropriate, offensive, or harmful material</li>
                <li>Infringes on intellectual property rights</li>
              </ul>
              <p>
                <strong>Reporting System:</strong> Categories with 5+ reports
                are automatically hidden pending review. False reporting may
                result in restricted reporting privileges.
              </p>
              <p>
                <strong>Important Notice:</strong> When you edit a public
                category, all users who have played or saved it will see the
                updated version. Please ensure your edits maintain appropriate
                content standards.
              </p>
            </div>

            {/* 5. License to Use */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              5. License to Use
            </h3>
            <p className="dark:text-gray-200">
              We grant you a limited, non-exclusive, non-transferable license to
              use Efhamni for personal, non-commercial purposes. This license
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
                href="/efhamni-privacy-policy"
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
              intellectual property laws. The Efhamni name, logo, and all
              related names, logos, product and service names, designs, and
              slogans are our trademarks.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              13. Contact Us
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
        Made by Efhamni Team
      </footer>
    </div>
  );
}
