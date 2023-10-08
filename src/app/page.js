import Sidebar from '@/components/sidebar/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
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
      <div className={styles.aboutSection}>
        <div className={styles.fiftey}>
          <div className={styles.textSection}>
            <span>about me</span>
            <span>from a very young age i've always been involved in the tech world&mdash;from jailbreaking my iphone se with a $120 ASUS notebook at the age of 12 to creating a wide range of open source software solutions and using enterprise-grade hardware every day, my only goal is to learn more about the world around me.</span>
          </div>
          <div className={styles.textSection}>
            <span>hobbies</span>
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
            <span>languages</span>
            <ul>
              <li>english [c2]</li>
              <li>french [b2]</li>
              <li>indoneian [a2]</li>
              <li>spanish [a2]</li>
            </ul>
          </div>
        </div>
        <div className={styles.container}>
          <div>
            <Link href="/media/satellite/meteor/satellite-full.png">
              <Image className={styles.border} alt="image from the meteor 2-3 satellite" src={'/media/satellite/meteor/satellite.jpg'} width={263} height={500} />
            </Link>
            <a rel='noreferer' target='_blank' href="https://en.wikipedia.org/wiki/Meteor_(satellite)#Meteor-M">Meteor M2-3</a>
          </div>
          <div className={styles.dumb}>
            <div>
              <Link href="/media/satellite/dmsp/dmsp-full.png">
                <Image className={styles.border} alt="image from dmsp 18" src={'/media/satellite/dmsp/dmsp.jpg'} width={250} height={250} />
              </Link>
              <a rel='noreferer' target='_blank' href="https://en.wikipedia.org/wiki/Defense_Meteorological_Satellite_Program">DMSP 18</a>
            </div>
            <div>
              <Link href="/media/satellite/goes/goes-full.png">
                <Image className={styles.border} alt="image from goes 18" src={'/media/satellite/goes/goes.jpg'} width={250} height={250} />
              </Link>
              <a rel='noreferer' target='_blank' href="https://en.wikipedia.org/wiki/GOES_18">GOES 18</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
