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
              Last updated 16 July 2026
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

            {/* 3. Virtual Currency (Coins) */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              3. Virtual Currency (Coins)
            </h3>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3.1 Nature of Coins & Store Items
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Coins — whether purchased or earned in-game — are a limited,
                personal, revocable license to access features within the Game.
                They are not your property, have no cash or real-world value,
                and are not redeemable for real money or anything of value
                outside the Game.
              </li>
              <li>
                Coins cannot be transferred, sold, traded, or gifted between
                accounts or to other players.
              </li>
              <li>
                We may change coin prices, coin-pack contents, earning rates,
                and what coins can be used for at any time. Items offered in
                the in-game store (such as avatars and categories) may be
                modified, replaced, or removed at any time.
              </li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3.2 Earning Coins & Reward Integrity
            </h4>
            <p className="dark:text-gray-200">
              Coins may be awarded for in-game activity, such as receiving
              likes on your community categories, at rates we determine and may
              change at any time. Artificially inflating rewards — including
              fake likes, like-exchange schemes, the use of multiple accounts,
              or automation — is prohibited and may result in the removal of
              coins or items and the suspension or termination of your account.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3.3 Coin Packs (Consumable Purchases) & Refunds
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Coin packs are consumable in-app purchases billed by the App
                Store or Google Play through your store account. Purchased
                coins are delivered to your account upon completion of the
                purchase.
              </li>
              <li>
                All coin sales are final except as required by applicable law
                or the relevant store&apos;s refund policy. If a purchase is
                refunded, the corresponding coins — or any items bought with
                them — may be removed from your account.
              </li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3.4 Forfeiture
            </h4>
            <p className="dark:text-gray-200">
              Coins and store items — whether purchased or earned — are
              forfeited without compensation when your account is deleted or
              permanently banned.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              3.5 Bonus & Promotional Coins
            </h4>
            <p className="dark:text-gray-200">
              Bonus or promotional coins and redemption codes (including
              welcome grants and promotional offers) may be granted, modified,
              or revoked at our discretion at any time and have no cash value.
            </p>

            {/* 4. User Conduct */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              4. User Conduct
            </h3>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              4.1 Prohibited Conduct
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
                Artificially inflates coin rewards or engagement, such as fake
                likes or like exchanges (see Section 3.2)
              </li>
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
              4.2 Reporting and Moderation
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
              4.3 Appeals
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

            {/* 5. Data & Privacy */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              5. Data & Privacy
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

            {/* 6. Updates */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              6. Updates
            </h3>
            <p className="dark:text-gray-200">
              Features, content, or virtual items may change or be discontinued
              at any time.
            </p>

            {/* 7. Changes to these Terms */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              7. Changes to these Terms
            </h3>
            <p className="dark:text-gray-200">
              We may update these Terms from time to time by posting the
              revised version on this page. The &ldquo;Last updated&rdquo;
              date above reflects the effective date of the most recent
              revision, and we encourage you to review these Terms periodically.
              Your continued use of the Game after a revised version is posted
              constitutes acceptance of the updated Terms. If you do not agree,
              you must stop using the Game.
            </p>

            {/* 8. Limitation of Liability */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              8. Limitation of Liability
            </h3>
            <p className="dark:text-gray-200">
              To the fullest extent permitted by law, the Developer shall not be
              liable for indirect, incidental, or consequential damages. Total
              liability will not exceed amounts you paid in the previous 12
              months.
            </p>

            {/* 9. Contact */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              9. Contact
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
