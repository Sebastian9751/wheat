import Link from "next/link";

import styles from "@/styles/general/Layout.module.css";

export default function Options() {
  return (
    <ul className={styles.headerOptions}>
      <li>
        <Link href={""}>Inicio</Link>
      </li>
      <li>
        <Link href={""}>Categorias</Link>
      </li>
      <li>
        <Link href={""}>Iniciar sesión</Link>
      </li>
    </ul>
  );
}
