import Head from "next/head";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export default function SarkkEula() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>EULA – Sarkk / سارك</title>
        <meta
          name="description"
          content="End‑User License Agreement of Sarkk – سارك"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Top Bar */}
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Sarkk</h1>
            <BsMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </nav>

          {/* Header */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              End‑User License Agreement (EULA)
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Last updated 23 June 2025
            </p>
          </div>

          {/* Body */}
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
            {/* Intro */}
            <p className="dark:text-gray-200">
              This End‑User License Agreement (<strong>EULA</strong>) is a legal
              agreement between you (<strong>User</strong>) and the individual
              developer of <strong>Sarkk / سارك</strong> (the{" "}
              <strong>Developer</strong>). It governs your download,
              installation, and use of the game <strong>Sarkk / سارك</strong>,
              including any related services, virtual items, content, and
              updates.
            </p>
            <p className="dark:text-gray-200">
              <strong>PLEASE READ CAREFULLY</strong> — By downloading,
              installing, accessing, or playing the Game you represent that you
              are at least <strong>4 years old</strong> (or the minimum age of
              digital consent in your jurisdiction, whichever is higher) and
              agree to be bound by this EULA. If you are under 13, you must have
              permission from a parent or legal guardian. If you do not agree,
              delete the Game from your device.
            </p>

            {/* 1. License Grant */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              1. License Grant
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Download and install one copy of the Game on each device you own
                or control.
              </li>
              <li>
                Use the Game solely for personal, non-commercial entertainment
                purposes.
              </li>
            </ul>
            <p className="dark:text-gray-200">
              All rights not expressly granted are reserved by the Developer.
            </p>

            {/* 2. Ownership */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              2. Ownership
            </h3>
            <p className="dark:text-gray-200">
              The Game (including all code, graphics, questions, sounds,
              characters, trademarks, software, documentation, and virtual
              items) is owned by the Developer or their licensors and is
              protected by intellectual property laws. You obtain no ownership
              interest by using the Game.
            </p>

            {/* 3. In‑App Purchases */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              3. Subscription & In‑App Purchases
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                <strong>RevenueCat SDK:</strong> Purchases are processed through
                RevenueCat; charges go through your store account.
              </li>
              <li>
                <strong>Auto‑renewing Subscriptions:</strong> Renew
                automatically unless canceled at least 24 hours before period
                end; manage in store settings.
              </li>
              <li>
                <strong>Virtual Items:</strong> Items (tokens, hints, skins)
                have no cash value, are non-transferable, and may be modified or
                discontinued at any time.
              </li>
              <li>
                <strong>No Refunds:</strong> Except where required by law or
                store policy, all purchases are final.
              </li>
            </ul>

            {/* 4. User Accounts & Data */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              4. User Accounts & Data
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                You are responsible for your account credentials and all
                activities on your account.
              </li>
              <li>
                Realtime and leaderboard data is transmitted via secure sockets
                to our servers.
              </li>
              <li>
                We collect and process data per our{" "}
                <a href="/privacy" className="text-teal-600 dark:text-teal-400">
                  Privacy Policy
                </a>
                ; use of the Game constitutes consent.
              </li>
            </ul>

            {/* 5. Acceptable Use */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              5. Acceptable Use & Conduct
            </h3>
            <p className="dark:text-gray-200">You agree not to:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Cheat, exploit bugs, or use unauthorized tools.</li>
              <li>Harass, threaten, or abuse other players.</li>
              <li>Post illegal, infringing, obscene, or hateful content.</li>
              <li>Reverse‑engineer or decompile the Game.</li>
              <li>Sell, sublicense, or exploit the Game or virtual items.</li>
              <li>Create multiple accounts to bypass restrictions.</li>
            </ul>
            <p className="dark:text-gray-200">
              Violations may result in suspension or termination.
            </p>

            {/* 6. Updates & Changes */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              6. Updates & Changes
            </h3>
            <p className="dark:text-gray-200">
              The Developer may modify, update, or discontinue the Game or
              virtual items at any time. Continued use after changes constitutes
              acceptance.
            </p>

            {/* 7. Third‑Party Services */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              7. Third‑Party Services
            </h3>
            <p className="dark:text-gray-200">
              The Game may integrate services such as RevenueCat or Firebase,
              subject to their terms and policies.
            </p>

            {/* 8. Disclaimer of Warranties */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              8. Disclaimer of Warranties
            </h3>
            <p className="dark:text-gray-200">
              THE GAME IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM
              EXTENT PERMITTED BY LAW, THE DEVELOPER DISCLAIMS ALL WARRANTIES,
              EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NONINFRINGEMENT. NO WARRANTY OF
              UNINTERRUPTED OR ERROR‑FREE OPERATION.
            </p>

            {/* 9. Limitation of Liability */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              9. Limitation of Liability
            </h3>
            <p className="dark:text-gray-200">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEVELOPER SHALL NOT BE
              LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES (INCLUDING LOST PROFITS OR DATA LOSS) ARISING
              FROM YOUR USE OF OR INABILITY TO USE THE GAME. TOTAL LIABILITY
              WILL NOT EXCEED THE AMOUNT PAID BY YOU IN THE PREVIOUS 12 MONTHS.
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        © 2025 Sarkk – Developed with ❤️ in Kuwait
      </footer>
    </div>
  );
}
