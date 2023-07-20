import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { Poppins } from 'next/font/google'
import style from '@/styles/general/layout.module.css'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300'],
})

export default function Logo() {
  return (
    <div className={style.logo}>
      <Image src={logo} alt='Logo' width={36} />
      <h1 className={`${style.title} ${poppins.className}`}>Wheat</h1>
    </div>
  )
}
