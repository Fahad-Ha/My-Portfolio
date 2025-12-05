import Head from "next/head";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export default function ActAndShoutSupport() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Support - Act & Shout</title>
        <meta name="description" content="Support page for Act & Shout App" />
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
              App Support
            </h2>
          </div>

          {/* BODY */}
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
            {/* About */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              About Act & Shout
            </h3>
            <p className="dark:text-gray-200">
              Act & Shout is a fun charades-style party game where players act out
              words while their teammates guess. Perfect for family game nights,
              parties, and gatherings with friends!
            </p>

            {/* Contact Support */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              Contact Support
            </h3>
            <p className="dark:text-gray-200">
              If you need help, have questions, or want to report an issue, please contact us:
            </p>
            <p className="dark:text-gray-200">
              Email:{" "}
              <a
                href="mailto:support@fahad-labs.com"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                support@fahad-labs.com
              </a>
            </p>

            {/* FAQ */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold dark:text-gray-100">
                  How do I play the game?
                </h4>
                <p className="dark:text-gray-200">
                  Simply download the app from the App Store or Google Play Store,
                  choose a category, and start acting! Hold the phone on your forehead
                  and have your teammates guess the word. Tilt down for correct, tilt
                  up to skip.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold dark:text-gray-100">
                  Is the app free?
                </h4>
                <p className="dark:text-gray-200">
                  The app is free to download and includes several free categories
                  to play. A subscription unlocks extra categories, game configuration
                  options, and the ability to create your own custom categories.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold dark:text-gray-100">
                  What does the subscription include?
                </h4>
                <p className="dark:text-gray-200">
                  With a subscription, you get access to:
                </p>
                <ul className="list-disc pl-5 mt-2 dark:text-gray-200">
                  <li><strong>Extra Categories:</strong> Unlock additional built-in categories beyond the free ones.</li>
                  <li><strong>Game Configuration:</strong> Customize game settings like timer duration, number of rounds, and more.</li>
                  <li><strong>Custom Categories:</strong> Create unlimited custom categories with your own words for specific themes, inside jokes, or educational purposes.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold dark:text-gray-100">
                  How do I cancel my subscription?
                </h4>
                <p className="dark:text-gray-200">
                  Subscriptions are managed through your App Store or Google Play
                  account. To cancel, go to your device settings, find your
                  subscriptions, and cancel Act & Shout from there.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold dark:text-gray-100">
                  How do I request a refund?
                </h4>
                <p className="dark:text-gray-200">
                  Refund requests are handled by the App Store or Google Play Store.
                  You can request a refund directly through your Apple account or
                  Google Play account.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold dark:text-gray-100">
                  I found a bug. How do I report it?
                </h4>
                <p className="dark:text-gray-200">
                  Please email us at{" "}
                  <a
                    href="mailto:support@fahad-labs.com"
                    className="text-teal-600 dark:text-teal-400 underline"
                  >
                    support@fahad-labs.com
                  </a>{" "}
                  with details about the issue and we&apos;ll look into it.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold dark:text-gray-100">
                  How can I delete my account or data?
                </h4>
                <p className="dark:text-gray-200">
                  To request account or data deletion, please contact us at{" "}
                  <a
                    href="mailto:support@fahad-labs.com"
                    className="text-teal-600 dark:text-teal-400 underline"
                  >
                    support@fahad-labs.com
                  </a>
                  . Your user account and all custom categories will be permanently deleted.
                </p>
              </div>
            </div>

            {/* Response Time */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              Response Time
            </h3>
            <p className="dark:text-gray-200">
              We typically respond to support requests within 24-48 hours during business days.
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
