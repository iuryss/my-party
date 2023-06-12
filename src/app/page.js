import Image from 'next/image';
import styles from './styles/page.module.css';
import Navbar from './components/NavBar/navBar';
import Button from './components/Button/button';

export default function Home() {
  return (
    <>
    <Navbar />
    <main className={styles.main}>
      <div className={styles.leftContent}>
          <h1 className={styles.loginTitle}>Acesse sua Conta</h1>
          <input placeholder='E-mail' className={styles.emailInput} />
          <input placeholder='Senha' className={styles.passwordInput} />
          <span className={styles.forgotPasswordText}>Esqueceu a senha?</span>
          <Button containerClass={styles.containerButton} buttonClass={styles.buttonLogin}/>
      </div>
      <hr className={styles.divider} />
      <div className={styles.leftContent}>
          <h1 className={styles.loginTitle}>Acesse sua Conta</h1>
      </div>
    </main>
    </>
  )
}
