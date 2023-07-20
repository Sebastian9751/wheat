import styles from '@/styles/general/Card.module.css'
import Image from 'next/image'
import image from '@/public/images/restaurantOne.png'

export default function Card() {
    return (
        <div className={styles.card}>
            <Image src={image} alt='image' width={432} height={100}/>
        </div>
    )
}