import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

/**
 * Terms and Conditions for Who's the Imposter
 * Applies to iOS & Android. References Apple Standard EULA and Google Play Terms.
 */
export default function ImposterGameTerms() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Terms and Conditions – Imposter Game</title>
        <meta
          name="description"
          content="Terms and Conditions for Who's the Imposter – applicable to iOS and Android"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* MAIN */}
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Top Bar */}
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Imposter Game</h1>
            <BsMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </nav>

          {/* Header */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Terms and Conditions
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Last Updated: November 2025
            </p>
          </div>

          {/* BODY */}
          <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
            {/* Store-Level Agreements */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              Store-Level Agreements
            </h3>
            <p className="dark:text-gray-200">
              By installing or using{" "}
              <strong>Imposter Game / Imposter Game</strong> you confirm that
              you have read and agree to the applicable store terms{" "}
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
                  href="https://play.google.com/intl/en_us/about/play-terms/"
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
              2. Subscriptions &amp; In-App Purchases
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                Payments are processed through your store account via{" "}
                <strong>RevenueCat</strong>.
              </li>
              <li>
                Premium VIP features include access to all game categories and
                chaos mode.
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
              <li>
                Subscriptions auto-renew unless canceled at least 24 hours
                before the end of the current period.
              </li>
            </ul>

            {/* 3. User Accounts */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              3. User Accounts (Future Feature)
            </h3>
            <p className="dark:text-gray-200">
              When account creation becomes available:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>You agree to provide accurate and complete information.</li>
              <li>
                You may delete your account at any time through the app
                settings.
              </li>
              <li>
                Upon account deletion, your personal data will be permanently
                removed.
              </li>
            </ul>

            {/* 4. Video Recording & Content Rights */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              4. Video Recording &amp; Content Rights
            </h3>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>
                <strong>Local Recording:</strong> All video recordings are
                stored locally on your device. We do not upload, store, or have
                access to your recorded videos.
              </li>
              <li>
                <strong>Content Ownership:</strong> You retain full ownership of
                all videos you record using the app.
              </li>
              <li>
                <strong>Social Media Sharing:</strong> You are free to share
                your recorded videos on social media platforms at your
                discretion.
              </li>
              <li>
                <strong>Marketing License:</strong> By recording videos with the
                app&apos;s watermark feature, you grant us a non-exclusive,
                royalty-free license to feature such watermarked content in our
                marketing materials and social media channels. This does not
                affect your ownership rights.
              </li>
              <li>
                <strong>Responsibility:</strong> You are solely responsible for
                the content you record and share. Do not record or share content
                that:
                <ul className="list-disc pl-5 mt-2">
                  <li>Violates others&apos; privacy or rights</li>
                  <li>
                    Contains offensive, inappropriate, or unlawful material
                  </li>
                  <li>Infringes on intellectual property rights</li>
                </ul>
              </li>
            </ul>

            {/* 5. User Conduct */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              5. User Conduct
            </h3>
            <p className="dark:text-gray-200">You agree not to:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Harass, abuse, or harm other users.</li>
              <li>
                Cheat, exploit bugs, or use unauthorized third-party tools.
              </li>
              <li>Reverse-engineer, decompile, or modify the Game.</li>
              <li>Violate any applicable laws or regulations.</li>
              <li>Impersonate others or provide false information.</li>
              <li>
                Record or share inappropriate content using the video feature.
              </li>
            </ul>
            <p className="dark:text-gray-200 mt-2">
              Violations may result in restricted features, account suspension
              (when accounts are available), or permanent termination of
              service.
            </p>

            {/* 6. License to Use */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              6. License to Use
            </h3>
            <p className="dark:text-gray-200">
              We grant you a limited, non-exclusive, non-transferable license to
              use Imposter Game for personal, non-commercial purposes. This
              license does not allow you to:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Modify or copy the app materials.</li>
              <li>Use the materials for commercial purposes.</li>
              <li>Attempt to reverse engineer any software.</li>
              <li>Remove copyright or proprietary notations.</li>
              <li>
                Transfer materials to another person or &quot;mirror&quot; on
                any server.
              </li>
            </ul>

            {/* 7. Data & Privacy */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              7. Data &amp; Privacy
            </h3>
            <p className="dark:text-gray-200">
              We collect gameplay analytics and device information as described
              in our{" "}
              <Link
                href="/imposter-game-privacy-policy"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                Privacy Policy
              </Link>
              . By using the app, you consent to our data practices.
            </p>

            {/* 8. Disclaimer of Warranties */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              8. Disclaimer of Warranties
            </h3>
            <p className="dark:text-gray-200">
              The app is provided &quot;as is&quot; without warranties of any
              kind. We do not guarantee that:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>The app will be uninterrupted or error-free.</li>
              <li>Defects will be corrected.</li>
              <li>The app is free of viruses or harmful components.</li>
              <li>Results from using the app will be accurate or reliable.</li>
              <li>
                Video recording will work on all devices or in all
                circumstances.
              </li>
            </ul>

            {/* 9. Limitation of Liability */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              9. Limitation of Liability
            </h3>
            <p className="dark:text-gray-200">
              To the fullest extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages resulting from your use or inability to use the app. Our
              total liability will not exceed the amounts you paid to us in the
              previous 12 months.
            </p>
            <p className="dark:text-gray-200 mt-2">
              We are not responsible for:
            </p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Content recorded or shared by users.</li>
              <li>Issues arising from video storage on your device.</li>
              <li>
                Loss of recorded videos due to device issues or app updates.
              </li>
            </ul>

            {/* 10. Updates and Modifications */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              10. Updates and Modifications
            </h3>
            <p className="dark:text-gray-200">We reserve the right to:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Modify or discontinue features at any time.</li>
              <li>Update these terms without prior notice.</li>
              <li>Require app updates for continued use.</li>
              <li>
                Change subscription pricing with appropriate notice to existing
                subscribers.
              </li>
            </ul>

            {/* 11. Intellectual Property */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              11. Intellectual Property
            </h3>
            <p className="dark:text-gray-200">
              All app content, features, and functionality are owned by us and
              protected by international copyright, trademark, and other
              intellectual property laws. The Imposter Game name, logo, and all
              related names, logos, product and service names, designs, and
              slogans are our trademarks.
            </p>

            {/* 12. Termination */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              12. Termination
            </h3>
            <p className="dark:text-gray-200">
              We may terminate or suspend your access to the app immediately,
              without prior notice or liability, for any reason, including
              breach of these Terms.
            </p>
            <p className="dark:text-gray-200 mt-2">Upon termination:</p>
            <ul className="list-disc pl-5 dark:text-gray-200 space-y-2">
              <li>Your right to use the app will cease immediately.</li>
              <li>
                Any subscriptions will be handled according to the applicable
                store&apos;s refund policy.
              </li>
              <li>
                Locally stored videos will remain on your device but you may not
                be able to create new recordings.
              </li>
            </ul>

            {/* 13. Governing Law */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              13. Governing Law
            </h3>
            <p className="dark:text-gray-200">
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law provisions.
            </p>

            {/* 14. Changes to Terms */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              14. Changes to Terms
            </h3>
            <p className="dark:text-gray-200">
              We reserve the right to modify these Terms at any time. Continued
              use of the app after changes constitutes acceptance of the new
              Terms.
            </p>

            {/* 15. Contact */}
            <h3 className="text-2xl font-semibold py-2 dark:text-teal-400">
              15. Contact Us
            </h3>
            <p className="dark:text-gray-200">
              If you have questions or concerns about these Terms, please
              contact us:
            </p>
            <p className="dark:text-gray-200">
              Email:{" "}
              <a
                href="mailto:fahad.devx@gmail.com"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                fahad.devx@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        2025 Imposter Game
      </footer>
    </div>
  );
}
