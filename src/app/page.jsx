import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    
    
    <div className={styles.page}>
    
              <Header/>
    
        <main className={styles.main}>
          <footer className={styles.footer}>
            <a>
             <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
              
              />
              &copy; 2025 MeuSite. Todos os direitos reservados
        </a>
        </footer>
        </main>
      
    </div>
  );
}
