import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import fahad from "../public/dev-ed-wave.png";
import fahad2 from "../public/Avatar.jpg";
import design from "../public/design.png";
import clicker from "../public/clicker.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web4 from "../public/Meme-Gen-ScrShot.png";
import web3 from "../public/web3.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Fahad Ahmad Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons ">FAHAD PORTFOLIO</h1>
            <ul className="flex items-center">
              <li>
                {" "}
                <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />{" "}
              </li>
              <li>
                <a
                  target={"_blank"}
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1uMYntXz--uamuwnZDnZbfPfPDFJwnVl8/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Fahad Ahmad
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer | Civil Engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Highly motivated civil engineer and full-stack developer.
              Passionate about integrating engineering principles into web and
              mobile applications.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              {/* <AiFillTwitterCircle /> */}
              <a
                href="https://www.linkedin.com/in/fahad-ahmad-734250216/"
                target={"_blank"}
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Fahad-Ha" target={"_blank"}>
                <AiFillGithub />
              </a>
            </div>
            <div className="relative max-w-full mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={fahad2} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="py-20 mb-5">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-3xl p-5 min-w-[400px]">
            <h3 class="text-3xl py-1 dark:text-white justify-center items-center">
              Skills
            </h3>
            <div class="grid grid-cols-3 sm:grid-cols-5 gap-y-3 sm:gap-y-6 mt-8 min-w-[300px] ">
              <div class="flex flex-col items-center ">
                <img
                  src="https://skillicons.dev/icons?i=js"
                  alt="JavaScript"
                  className="sm:w-16 sm:h-16 mb-2 "
                />
                <span class="text-center dark: dark:text-white">
                  JavaScript
                </span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=ts"
                  alt="TypeScript"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">TypeScript</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=html"
                  alt="HTML"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">HTML</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=css"
                  alt="CSS"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">CSS</span>
              </div>

              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=python"
                  alt="Python"
                  class="sm:w-16 sm:h-166 mb-2"
                />
                <span class="text-center dark:text-white">Python</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=react"
                  alt="React"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">
                  React & React Native
                </span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=nodejs"
                  alt="Node.js"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">Node.js</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=express"
                  alt="Express.js"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">Express.js</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=django"
                  alt="Django"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">Django</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="MongoDB"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">MongoDB</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=mysql"
                  alt="MySQL"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">MySQL</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=git"
                  alt="Git"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">Git</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=redux"
                  alt="Redux"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">Redux</span>
              </div>
              <div class="flex flex-col items-center">
                <img
                  src="https://skillicons.dev/icons?i=figma"
                  alt="Figma"
                  class="sm:w-16 sm:h-16 mb-2"
                />
                <span class="text-center dark:text-white">Figma</span>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Web development.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating great desings suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Code a full web site for you.
              </h3>
              <p className="py-2">
                Creating great desings suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">NodeJs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating great desings suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section> */}
        <section className="pb-20">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="card basis-1/3 flex-1 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-xl">
              <a target="_blank" href="https://github.com/Fahad-Ha/BankProject">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
                <p className="text-center font-semibold mt-2 dark:text-white">
                  Bank Project
                </p>
              </a>
            </div>
            <div className="card basis-1/3 flex-1 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-xl">
              <a target="_blank" href="https://github.com/Fahad-Ha/Food-App">
                <Image
                  src={web2}
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
                <p className="text-center font-semibold mt-2 dark:text-white">
                  Delivery App Project
                </p>
              </a>
            </div>
            <div className="card basis-1/3 flex-1 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-xl">
              <a
                target="_blank"
                href="https://github.com/Fahad-Ha/FS-Project-Frontend"
              >
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
                <p className="text-center font-semibold mt-2 dark:text-white ">
                  Food Recipes Project
                </p>
              </a>
            </div>

            <div className="card basis-1/3 flex-1 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-xl">
              <a href="https://illustrious-cucurucho-279b5c.netlify.app/">
                <Image
                  src={clicker}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
                <p className="text-center font-semibold mt-2 dark:text-white">
                  Clicker Game Project
                </p>
              </a>
            </div>
            {/* <div className="card basis-1/3 flex-1">
              <a
                target="_blank"
                href="https://incandescent-meringue-731cc5.netlify.app/"
              >
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="card basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div> */}
          </div>
        </section>
      </main>
      <footer className="text-center  bg-white text-gray-800 pt-5 pb-2 dark:text-gray-200 dark:bg-gray-900">
        Made by Fahad
      </footer>
    </div>
  );
}
