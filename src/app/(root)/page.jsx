import Image from 'next/image';
import styles from '../styles/page.module.css';
import Navbar from '../components/NavBar/navBar';
import Button from '../components/Button/button';
import ButtonGoogle from '../components/ButtonGoogle/buttonGoogle';
import googleIcon from '../../../assets/googleIcon.png'
import CardSlider from '../components/CardSlider/cardSlide';
import { UserButton } from "@clerk/nextjs";

export default function Login() {

  const eventsPhotos = [
    '../assets/mp-',
    'https://liftlearning.com/wp-content/uploads/2020/09/default-image.png',
    'https://liftlearning.com/wp-content/uploads/2020/09/default-image.png',
  ]

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.leftContent}>
            <h1 className={styles.loginTitle}>Acesse sua Conta</h1>
            <input placeholder='E-mail' className={styles.emailInput} />
            <input placeholder='Senha' className={styles.passwordInput} />
            <span className={styles.forgotPasswordText}>Esqueceu a senha?</span>
            <Button padding={"1em 10.7em"} buttonText={'Entrar'} radius={"5px"}/>
            <ButtonGoogle buttonText={'Entrar com Google'} buttonIcon={googleIcon}/>
            <span className={styles.signUpText}>Não possui conta? <b>Cadastre-se</b></span>
        </div>
        <hr className={styles.divider} />
        <div className={styles.rightContent}>
            <CardSlider photos={eventsPhotos} />
            <Button padding={"1em 5em"} buttonText={'Saiba Mais'} radius={"5px"}/>
        </div>
      </main>
      {/* <UserButton afterSignOutUrl="/"/> */}
    </>
  )
}
