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
            {/* …Sections 1 → 8 already included… */}

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

            {/* Closing note */}
            <p className="italic text-sm dark:text-gray-500">
              This template is provided for informational purposes and is not
              legal advice. Consult qualified counsel to tailor it to your
              situation.
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
