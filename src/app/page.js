import Image from 'next/image';
import styles from './styles/page.module.css';
import Navbar from './components/NavBar/navBar';
import Button from './components/Button/button';
import googleIcon from '../../assets/googleIcon.png'
import CardSlider from './components/CardSlider/cardSlide';

export default function Login() {

  const eventsPhotos = [
    'https://media.istockphoto.com/id/1354776457/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=w3OW0wX3LyiFRuDHo9A32Q0IUMtD4yjXEvQlqyYk9O4=',
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
            <Button buttonClass={styles.buttonLogin} buttonText={'Entrar'}/>
            <Button buttonClass={styles.buttonGoogle} buttonText={'Entrar com Google'} buttonIcon={googleIcon}/>
            <span className={styles.signUpText}>Não possui conta? <b>Cadastre-se</b></span>
        </div>
        <hr className={styles.divider} />
        <div className={styles.rightContent}>
            <CardSlider photos={eventsPhotos} />
            <Button buttonClass={styles.buttonAbout} buttonText={'Saiba Mais'}/>
        </div>
      </main>
    </>
  )
}
