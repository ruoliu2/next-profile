import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Head from "next/head";

const socialLinks = [
  {
    icon: <EnvelopeClosedIcon className="w-5 h-5" />,
    href: "mailto:ruoliu.dev@gmail.com",
    label: "Email",
  },
  // {
  //   icon: <TwitterLogoIcon className="w-5 h-5" />,
  //   href: "https://twitter.com/yourusername",
  //   label: "Twitter",
  // },
  {
    icon: <GitHubLogoIcon className="w-5 h-5" />,
    href: "https://github.com/ruoliu2",
    label: "GitHub",
  },
  // {
  //   icon: <LinkedInLogoIcon className="w-5 h-5" />,
  //   href: "https://linkedin.com/in/yourusername",
  //   label: "LinkedIn",
  // },
  // {
  //   icon: <InstagramLogoIcon className="w-5 h-5" />,
  //   href: "https://instagram.com/yourusername",
  //   label: "Instagram",
  // },
];

export default function Bio() {
  return (
    <>
      <Head>
        <title>Ruo Liu - Software Engineer</title>
        <meta
          name="description"
          content="Ruo Liu is a software engineer at Apple."
        />
        <meta
          name="keywords"
          content="Ruo Liu, UIUC, Software Engineer, Distributed Systems, Machine Learning, Apple"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ruoliu.dev" />
      </Head>

      <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 pt-24">
        <div className="w-full max-w-[44%] mx-auto min-w-[300px] px-4 sm:px-6">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                Ruo Liu.
              </h2>
              <a
                href="/resume.pdf"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              ></a>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a software engineer at Apple currently.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I graduated from the University of Illinois at Urbana-Champaign
              with a B.S. in Computer Science.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">My interests include:</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>Distributed systems</li>
                <li>Machine learning</li>
                <li>Software engineering</li>
              </ul>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}