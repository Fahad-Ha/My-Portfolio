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
                <strong>1.2 Profile & Gameplay Data:</strong> Your display name
                (which is visible to other players in game rooms and on
                community content), in‑game stats, and gameplay history.
              </li>
              <li>
                <strong>1.3 User‑Generated Content:</strong> Categories and
                questions you create, and any cover images or question images
                you upload. Content you mark as public is stored on our servers
                and visible to other players; private content is only visible to
                you.
              </li>
              <li>
                <strong>1.4 Chat Messages:</strong> Messages you send to other
                players in game rooms are transmitted through our servers so
                they can be delivered to other participants. We may also
                temporarily process chat content for safety and moderation
                purposes.
              </li>
              <li>
                <strong>1.5 Feedback & Support:</strong> Any messages, feedback,
                or inquiries you submit through the app.
              </li>

              <li>
                <strong>1.6 Automatically Collected Information:</strong> Device
                type, operating system, usage statistics, crash reports, and
                diagnostic data to improve app performance.
              </li>
              <li>
                <strong>1.7 Third‑Party Services:</strong> If you interact with
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
              You can delete your account directly within the app.
            </p>
            <p className="pt-2 dark:text-gray-200">
              <strong>Important:</strong>{" "}
              <h2>What happens when you delete your account?</h2>
              <ul>
                <li>
                  <strong>Private content</strong> (your private categories and
                  questions) will be permanently removed—no trace will remain.
                </li>
                <li>
                  <strong>Public content</strong> (any categories or questions
                  you’ve shared publicly) will be anonymized and stay available
                  to the community.
                </li>
                <li>
                  <strong>Your personal data</strong> (profile info, email,
                  etc.) is wiped out entirely.
                </li>
              </ul>
              <blockquote>
                <p>
                  <strong>Want to remove public content, too?</strong>
                  <br />
                  Please reach out to our support team before deleting your
                  account, and we’ll take care of it for you.
                </p>
              </blockquote>
            </p>
            <p className="pt-2 dark:text-gray-200">
              If you encounter any issues, email&nbsp;
              <a
                className="dark:text-teal-400 text-teal-600 underline"
                href="mailto:support@fahad-labs.com"
              >
                support@fahad-labs.com
              </a>
              &nbsp;and we’ll assist you.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              4. Information Sharing
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>We do not sell your personal data.</li>
              <li>
                <strong>Other Players:</strong> Your display name, avatar,
                in‑game scores, and public community content are visible to
                other players you share game rooms or public community content
                with. Chat messages are visible only to the players in the
                specific game room where you send them — not to other players
                outside that room.
              </li>
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
              5. Data Retention
            </h4>
            <p className="dark:text-gray-200">
              We retain your account data for as long as your account is active.
              Chat messages are stored only for the duration of an active game
              session and are not persisted afterward. Moderation reports are
              retained for up to 12 months for safety review purposes. Game
              stats and history are retained for as long as your account exists.
              When you delete your account, personal data is removed as
              described in Section 3.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              6. Data Location
            </h4>
            <p className="dark:text-gray-200">
              Your data is processed and stored on servers operated by our
              hosting providers, which may be located outside your country of
              residence. We take reasonable steps to ensure adequate protection
              during international transfers, including using providers that
              offer industry‑standard security and contractual data protection
              safeguards.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              7. Children’s Privacy
            </h4>
            <p className="dark:text-gray-200">
              Sarkk is rated appropriately by store rating boards (IARC on
              Google Play and Apple&apos;s age‑rating system on the App Store)
              based on its features, including in‑app chat and user‑generated
              content. We do not knowingly collect personal data from children
              under 13.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              8. Third‑Party Services
            </h4>
            <p className="dark:text-gray-200">
              We may use third‑party tools like Google Analytics; their data
              practices are governed by their own privacy policies.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              9. Advertising and Measurement (Meta)
            </h4>
            <p className="dark:text-gray-200">
              We use advertising and measurement tools provided by Meta
              Platforms (Facebook) to understand how our advertising performs —
              specifically, to attribute app installs and subscription purchases
              to the ad campaigns that drove them, and to measure and improve
              our advertising.
            </p>
            <p className="pt-2 dark:text-gray-200">
              For this purpose we may share with Meta:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>
                <strong>Device‑level advertising identifiers</strong> — on
                Android, the Google Advertising ID and a Facebook‑generated app
                identifier; on iOS, aggregated, privacy‑preserving measurement
                via Apple&apos;s SKAdNetwork plus a Facebook app identifier used
                only for our own measurement.
              </li>
              <li>
                <strong>Information about subscription purchases,</strong>{" "}
                including the purchase and its value.
              </li>
            </ul>
            <p className="pt-2 dark:text-gray-200">
              We do not share your email address or other contact information
              with Meta for advertising. Meta processes this data under its own
              Data Policy (
              <a
                className="dark:text-teal-400 text-teal-600 underline"
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/privacy/policy
              </a>
              ). On Android you can reset or limit your advertising identifier in
              your device settings; on iOS, this measurement is aggregated and
              does not identify you individually.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              10. Community-Created Categories
            </h4>
            <p className="dark:text-gray-200">
              You can create your own custom categories and choose to keep them
              private just for yourself or share them publicly with the
              community.
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>
                <strong>Private:</strong> Only you can view, edit, or delete
                these at any time.
              </li>
              <li>
                <strong>Public:</strong> Visible to everyone—changes are final,
                but you can request removal by contacting our support team.
              </li>
            </ul>
            <p className="pt-2 dark:text-gray-200">
              Community content must follow our Community Standards (see Section
              11). If you need a public category taken down, please reach out to
              our team for assistance.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              11. Community Standards
            </h4>
            <p className="dark:text-gray-200">
              Sarkk is a social game. To keep it safe and welcoming, users must
              follow these rules when creating community content (categories,
              questions, images) or chatting with other players:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>
                <strong>No hate speech or harassment.</strong> Content targeting
                people based on race, ethnicity, religion, nationality, gender,
                sexual orientation, disability, or other protected attributes is
                prohibited.
              </li>
              <li>
                <strong>No sexual or sexually suggestive content.</strong> This
                includes images, questions, and chat messages.
              </li>
              <li>
                <strong>No violence or graphic content.</strong> No
                glorification of real violence, terrorism, or self‑harm.
              </li>
              <li>
                <strong>No illegal content.</strong> No content promoting drugs,
                weapons sales, fraud, or other illegal activity.
              </li>
              <li>
                <strong>No impersonation or fraud.</strong> Don&apos;t pose as
                someone else or use the app to deceive other players.
              </li>
              <li>
                <strong>No spam or commercial content.</strong> Don&apos;t use
                community categories or chat for advertising or promotion.
              </li>
              <li>
                <strong>Respect intellectual property.</strong> Don&apos;t
                upload images or questions copied from copyrighted sources
                without permission.
              </li>
            </ul>
            <p className="pt-2 dark:text-gray-200">
              <strong>Reporting violations.</strong> You can report users,
              categories, or questions through the in‑app report buttons. When
              you report a player, a snapshot of their recent ▎ in‑game chat is
              captured automatically and attached to the report. All reports are
              reviewed by our moderation team.
            </p>
            <p className="pt-2 dark:text-gray-200">
              <strong>Blocking and removal.</strong> Hosts can remove players
              from their game rooms. Our moderation team may remove content that
              violates these standards and suspend or permanently ban accounts
              for repeated or serious violations.
            </p>
            <p className="pt-2 dark:text-gray-200">
              <strong>Appeals.</strong> If you believe your content was removed
              or your account was suspended in error, contact{" "}
              <a
                className="dark:text-teal-400 text-teal-600 underline"
                href="mailto:support@fahad-labs.com"
              >
                support@fahad-labs.com
              </a>
              . We&apos;ll review and respond within 14 days.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              12. Changes to This Policy
            </h4>
            <p className="dark:text-gray-200">
              We may update this policy periodically. Changes take effect as
              soon as they’re posted in the app.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              13. Subscriptions
            </h4>
            <p className="dark:text-gray-200">
              Sarkk offers subscription-based premium features. Subscription
              payments are processed via your device’s app store; we do not
              store your payment details. By subscribing, you agree to the
              store’s terms and this Privacy Policy.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              14. Modifications and Maintenance
            </h4>
            <ul className="list-disc pl-5 dark:text-gray-200">
              <li>
                We reserve the right to modify or update the game at any time.
              </li>
              <li>
                We may temporarily suspend the service for maintenance or
                updates.
              </li>
              <li>These terms may be amended from time to time.</li>
            </ul>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              15. Disclaimer
            </h4>
            <p className="dark:text-gray-200">
              The game is provided “as is” without any warranties. We shall not
              be liable for any damages arising from the use of or inability to
              use our services.
            </p>

            <h4 className="text-xl font-semibold py-2 dark:text-teal-400">
              16. Contact Us
            </h4>
            <p className="dark:text-gray-200">
              Questions or concerns? Email us at{" "}
              <a
                className="dark:text-teal-400 text-teal-600"
                href="mailto:support@fahad-labs.com"
              >
                support@fahad-labs.com
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
