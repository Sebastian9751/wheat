import Header from "./Header";
import styles from "@/styles/general/Layout.module.css"

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header/>
      <div className={styles.background}>{children}</div>
    </div>
  );
}
