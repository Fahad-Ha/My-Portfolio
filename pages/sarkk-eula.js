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
          content="End-User License Agreement of Sarkk – سارك"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ────────────── MAIN ────────────── */}
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* ─────────── Top Bar ─────────── */}
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Sarkk / سارك</h1>
            <BsMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </nav>

          {/* ─────────── Header ─────────── */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              End-User License Agreement (EULA)
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Last updated 23 June 2025
            </p>
          </div>

          {/* ─────────── Body ─────────── */}
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
            {/* Section 1 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              1. License Grant
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Download and install one copy of the Game on each device that
                you own or control; and
              </li>
              <li>
                Access and use the Game solely for your personal, non-commercial
                entertainment purposes.
              </li>
            </ul>
            <p className="dark:text-gray-200">
              All rights not expressly granted to you are reserved by the
              Developer.
            </p>

            {/* Section 2 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              2. Ownership
            </h3>
            <p className="dark:text-gray-200">
              The Game (including but not limited to all code, graphics,
              questions, sounds, characters, trademarks, trade dress, software,
              documentation, and virtual items) is owned by the Developer or
              his/her licensors and is protected by copyright and other
              intellectual-property laws. You obtain no ownership interest by
              downloading or using the Game.
            </p>

            {/* Section 3 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              3. Subscription, In-App Purchases &amp; Virtual Items
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                <strong>RevenueCat SDK&nbsp;:</strong> Purchases and
                subscriptions are processed through RevenueCat. When you confirm
                a purchase, the relevant App Store/Play Store account will be
                charged.
              </li>
              <li>
                <strong>Auto-renewing Subscriptions&nbsp;:</strong>{" "}
                Subscriptions renew automatically unless canceled at least 24
                hours before the end of the current period. You can manage or
                cancel them in your store settings.
              </li>
              <li>
                <strong>Virtual Items&nbsp;:</strong> Virtual goods (e.g.,
                tokens, hints, skins) have no cash value, are non-transferable,
                and may be modified or discontinued at any time without
                liability.
              </li>
              <li>
                <strong>No Refunds&nbsp;:</strong> Except where required by law
                or store policy, all purchases are final and non-refundable.
              </li>
            </ul>

            {/* Section 4 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              4. User Accounts &amp; Data
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                You are responsible for safeguarding your account credentials
                and for all activities under your account.
              </li>
              <li>
                Certain realtime and leaderboard data will be transmitted via
                secure sockets to our servers.
              </li>
              <li>
                We collect and process personal data in accordance with our{" "}
                <a href="/privacy" className="text-teal-600 dark:text-teal-400">
                  Privacy Policy
                </a>
                . By using the Game you consent to such processing.
              </li>
            </ul>

            {/* Section 5 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              5. Acceptable Use &amp; Conduct
            </h3>
            <p className="dark:text-gray-200">You agree not to:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Cheat, exploit bugs, use unauthorized third-party tools, or
                interfere with the Game’s networking infrastructure;
              </li>
              <li>Harass, threaten, or abuse other players;</li>
              <li>
                Post or transmit any content that is illegal, infringing,
                obscene, or hateful;
              </li>
              <li>
                Reverse-engineer, decompile, or otherwise attempt to derive
                source code from the Game;
              </li>
              <li>
                Sell, sublicense, or commercially exploit the Game, your
                account, or virtual items;
              </li>
              <li>
                Create multiple accounts to circumvent bans or restrictions.
              </li>
            </ul>
            <p className="dark:text-gray-200">
              We may suspend or terminate your access for any violation.
            </p>

            {/* Section 6 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              6. Updates &amp; Changes
            </h3>
            <p className="dark:text-gray-200">
              We may at any time modify, update, or discontinue the Game (in
              whole or in part), including virtual items and features. This EULA
              may also be updated; continued use after an update constitutes
              acceptance of the revised terms.
            </p>

            {/* Section 7 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              7. Third-Party Services
            </h3>
            <p className="dark:text-gray-200">
              The Game may integrate third-party services such as RevenueCat,
              Firebase, or social-login providers. Your use of those services is
              subject to their separate terms and privacy policies.
            </p>

            {/* Section 8 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              8. Disclaimer of Warranties
            </h3>
            <p className="dark:text-gray-200">
              THE GAME IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM
              EXTENT PERMITTED BY LAW, THE DEVELOPER DISCLAIMS ALL WARRANTIES,
              EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE GAME WILL BE
              UNINTERRUPTED, ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
            </p>

            {/* Section 9 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              9. Limitation of Liability
            </h3>
            <p className="dark:text-gray-200">
              TO THE FULLEST EXTENT PERMITTED BY LAW, THE DEVELOPER SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES (INCLUDING LOST PROFITS, LOSS OF DATA, OR
              BUSINESS INTERRUPTION) ARISING OUT OF OR RELATED TO YOUR USE OF OR
              INABILITY TO USE THE GAME, EVEN IF ADVISED OF THE POSSIBILITY OF
              SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU
              HAVE PAID TO US FOR THE GAME IN THE PREVIOUS TWELVE (12) MONTHS.
            </p>
            {/* Section 9 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              9. Limitation of Liability
            </h3>
            <p className="dark:text-gray-200">
              TO THE FULLEST EXTENT PERMITTED BY LAW, THE DEVELOPER SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES (INCLUDING LOST PROFITS, LOSS OF DATA, OR
              BUSINESS INTERRUPTION) ARISING OUT OF OR RELATED TO YOUR USE OF OR
              INABILITY TO USE THE GAME, EVEN IF ADVISED OF THE POSSIBILITY OF
              SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU
              HAVE PAID TO US FOR THE GAME IN THE PREVIOUS TWELVE (12) MONTHS.
            </p>

            {/* Section 10 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              10. Indemnification
            </h3>
            <p className="dark:text-gray-200">
              You agree to indemnify, defend, and hold harmless the Developer
              from any claims, damages, liabilities, and expenses —including
              reasonable attorneys’ fees—arising out of or related to (i) your
              misuse of the Game, (ii) any content you submit, or (iii) your
              breach of this EULA.
            </p>

            {/* Section 11 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              11. Termination
            </h3>
            <p className="dark:text-gray-200">
              We may terminate or suspend this EULA (and your license) at any
              time, with or without notice, if you violate its terms. Upon
              termination you must stop using the Game and delete all copies.
              Sections 2, 3, 8–15 survive termination.
            </p>

            {/* Section 12 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              12. Governing Law & Dispute Resolution
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                <strong>Governing Law :</strong> This EULA is governed by the
                laws of the State of Kuwait, excluding conflict-of-law rules.
              </li>
              <li>
                <strong>Informal Resolution :</strong> Contact us first at{" "}
                <a
                  href="mailto:sarkk.game@gmail.com"
                  className="text-teal-600 dark:text-teal-400"
                >
                  sarkk.game@gmail.com
                </a>{" "}
                to try to resolve any dispute.
              </li>
              <li>
                <strong>Arbitration / Courts :</strong> Unresolved disputes will
                be finally settled by binding arbitration in Kuwait City under
                the Arbitration Rules of the Kuwait Commercial Arbitration
                Centre. If arbitration is unenforceable, exclusive jurisdiction
                lies with the Kuwaiti courts, and you waive objections to venue
                or personal jurisdiction.
              </li>
            </ul>

            {/* Section 13 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              13. Severability
            </h3>
            <p className="dark:text-gray-200">
              If any provision of this EULA is found unenforceable, the
              remainder remains in full force. The invalid provision will be
              replaced by an enforceable one that most closely reflects the
              original intent.
            </p>

            {/* Section 14 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              14. Entire Agreement
            </h3>
            <p className="dark:text-gray-200">
              This EULA, together with our Privacy Policy and any in-app
              notices, forms the entire agreement between you and the Developer
              regarding the Game, superseding all prior agreements or
              understandings.
            </p>

            {/* Section 15 */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              15. Contact
            </h3>
            <p className="dark:text-gray-200">
              Questions? Email{" "}
              <a
                href="mailto:sarkk.game@gmail.com"
                className="text-teal-600 dark:text-teal-400"
              >
                sarkk.game@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* ────────────── FOOTER ────────────── */}
      <footer className="text-center bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        © 2025 Sarkk – Developed with ❤️ in Kuwait
      </footer>
    </div>
  );
}
