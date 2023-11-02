import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  description: 'my personal website :D'
}

const skills = [
  {
    title: 'frontend',
    skills: [
      {name: 'nextjs', icon: '/media/svgs/nextjs.svg'},
      {name: 'react', icon: '/media/svgs/react.svg'},
      {name: 'html', icon: '/media/svgs/html.svg'},
      {name: 'css', icon: '/media/svgs/css.svg'},
    ]
  },
  {
    title: 'backend',
    skills: [
      {name: 'nodejs', icon: '/media/svgs/nodejs.svg'},
      {name: 'bun', icon: '/media/svgs/bun.svg'},
      {name: 'express', icon: '/media/svgs/express.svg'},
      {name: 'elysia', icon: '/media/svgs/elysia.svg'},
    ]
  },
  {
    title: 'languages',
    skills: [
      {name: 'javascript', icon: '/media/svgs/js.svg'},
      {name: 'typescript', icon: '/media/svgs/ts.svg'},
      {name: 'python', icon: '/media/svgs/python.svg'},
      {name: 'c++', icon: '/media/svgs/cpp.svg'},
      {name: 'go', icon: '/media/svgs/go.svg'},
    ]
  },
  {
    title: 'databases',
    skills: [
      {name: 'mongodb', icon: '/media/svgs/mongodb.svg'},
      {name: 'sqlite', icon: '/media/svgs/sqlite.svg'},
    ]
  },
  {
    title: 'operating systems',
    skills: [
      {name: 'arch linux', icon: '/media/svgs/arch.svg'},
      {name: 'debian', icon: '/media/svgs/debian.svg'},
      {name: 'ubuntu', icon: '/media/svgs/ubuntu.svg'},
      {name: 'macos big sur', icon: '/media/svgs/macos.svg'},
      {name: 'windows', icon: '/media/svgs/windows.svg'},
      {name: 'opensuse leap', icon: '/media/svgs/leap.svg'},
      {name: 'proxmox ve', icon: '/media/svgs/proxmox.svg'},
    ]
  }
]

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <Navbar />
      <Sidebar />
      <div className={styles.landing}>
        <div className={styles.title}>
          <span>hey,</span>
          <span>{`i'm cameron`}</span>
        </div>
        <div className={styles.image}>
          <Image alt="an image of lain iwakura" src="/lain-square.jpg" width={425} height={425} />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.half}>
          <div className={styles.textSection}>
            <span className={styles.containerTitle}>about me</span>
            <span>from a very young age i&apos;ve always been involved in the tech world&mdash;from jailbreaking my iphone se with a $120 ASUS notebook at the age of 12 to creating a wide range of open source software solutions and using enterprise-grade hardware every day, my only goal is to learn more about the world around me.</span>
          </div>

          <div className={styles.textSection}>
            <span className={styles.containerTitle}>hobbies</span>
            <ul>
              <li>programming</li>
              <li>linguistics & language learning</li>
              <li>satellite communications</li>
              <li>networking & security</li>
              <li>electronics</li>
              <li>reverse engineering</li>
              <li>linux</li>
            </ul>
          </div>

          <div className={styles.textSection}>
            <span className={styles.containerTitle}>languages</span>
            <ul>
              <li>english [<span className={styles.blue}>c2</span>]</li>
              <li>french [<span className={styles.blue}>b2</span>]</li>
              <li>indonesian [<span className={styles.blue}>a2</span>]</li>
              <li>spanish [<span className={styles.blue}>a2</span>]</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.half} ${styles.imageContainer}`}>
          <span>some of my own captures :)</span>
          <div>

            <div className={styles.satImage}>
              <Link href="/media/satellite/meteor/satellite-full.png">
                <Image className={`${styles.border} ${styles.tall}`} alt="image from the meteor 2-3 satellite" src={'/media/satellite/meteor/satellite.jpg'} width={263} height={500} />
              </Link>
              <a rel='noreferer' target='_blank' href="https://en.wikipedia.org/wiki/Meteor_(satellite)#Meteor-M">Meteor M2-3</a>
            </div>

            <div className={styles.imageSquare}>
              <div className={styles.satImage}>
                <Link href="/media/satellite/dmsp/dmsp-full.png">
                  <Image className={`${styles.border} ${styles.square}`} alt="image from dmsp 18" src={'/media/satellite/dmsp/dmsp.jpg'} width={250} height={250} />
                </Link>
                <a rel='noreferer' target='_blank' href="https://en.wikipedia.org/wiki/Defense_Meteorological_Satellite_Program">DMSP 18</a>
              </div>

              <div className={styles.satImage}>
                <Link href="/media/satellite/goes/goes-full.png">
                  <Image className={`${styles.border} ${styles.square}`} alt="image from goes 18" src={'/media/satellite/goes/goes.jpg'} width={250} height={250} />
                </Link>
                <a rel='noreferer' target='_blank' href="https://en.wikipedia.org/wiki/Geostationary_Operational_Environmental_Satellite">GOES 18</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <div className={styles.projectContainer}></div> */}
      <div className={styles.skillsContainer}>
        <div className={styles.containerTitle}>
          <span>skills</span>
        </div>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillContainer}>
              <span className={styles.skillSubtitle}>{skill.title}</span>
              <div className={styles.skillCard}>
                {skill.skills && skill.skills.map((skill, index) => (
                  <div key={index} className={styles.skill}>
                    <Image alt={`${skill.name} icon`} src={skill.icon} width={50} height={50} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.educationContainer}>
        <div className={styles.containerTitle}>
          <span>education</span>
        </div>
        <div className={styles.education}>
          <div>
            <span className={styles.educationTitle}>high school diploma</span>
            <span className={styles.date}>september 2019 - may 2024</span>
            <span>sigourney high school</span>
            <span>sigourney, iowa</span>
          </div>
          <div>
            <span className={styles.educationSubtitle}>achievements</span>
            <ul>
              <li>tech club president + founder</li>
              <li>esports, overwatch 2 [healer]</li>
              <li>intern to science staff</li>
            </ul>
            <span className={styles.educationSubtitle}>relevant courses</span>
            <ul>
              <li>computer gaming & design</li>
              <li>engineering</li>
              <li>physics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.experienceContainer}>
        <div className={styles.containerTitle}>
          <span>experience</span>
        </div>
        <div className={styles.experience}>
          <div>
            <span className={styles.experienceTitle}>senior full-stack developer <span className={styles.note}>[volunteer]</span></span>
            <span className={styles.date}>may 2022 - present</span>
            <span>keokuk county economic development</span>
            <span>sigourney, iowa, united states</span>
          </div>
          <div>
            <span className={styles.experienceSubtitle}>about</span>
            <span>an initiave to bring economic development to the keokuk county area</span>
            <span className={styles.experienceSubtitle}>responsibilities</span>
            <ul>
              <li>developing a full-stack web application</li>
              <li>deploying software solutions to cloud vps providers</li>
              <li>practicing secure data handling + remote access protocols</li>
            </ul>
          </div>
        </div>
        <div className={styles.experience}>
          <div>
            <span className={styles.experienceTitle}>frontend developer <span className={styles.note}>[volunteer]</span></span>
            <span className={styles.date}>february 2022 - december 2022</span>
            <span>acauntertouos</span>
            <span>rouen, normandie, france</span>
          </div>
          <div>
            <span className={styles.experienceSubtitle}>about</span>
            <span>a collective aimed at reviving the norman language</span>
            <span className={styles.experienceSubtitle}>responsibilities</span>
            <ul>
              <li>developed multilingual frontend with dynamic language switching</li>
              <li>clearly communicated with management and backend teams for an effecient workflow</li>
            </ul>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.containerTitle}>
            <span>contact</span>
          </div>
          <div className={styles.contact}>
            <span>i usually respond quickly on most platforms, feel free to reach out for anything !</span>
            <span>you can find me here:</span>
            <a href="https://github.com/horsaen/horsaen/blob/main/key.asc">PGP Key</a>
            <ul>
              <li>discord [<span className={styles.blue}>gironde</span>]</li>
              <li>instagram [<span className={styles.blue}>ihatepapertowel</span>]</li>
              <li>email [<span className={styles.blue}><a href="mailto:atealltheglue@protonmail.com">atealltheglue@protonmail.com</a></span>]</li>
              <li>wechat [<span className={styles.blue}>horsaen</span>]</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
