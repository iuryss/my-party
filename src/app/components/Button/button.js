import react from "react";
import styles from "../../styles/button.module.css"

const Button = ({containerClass, buttonClass}) => {
    return(
        <div className={containerClass}>
        <button className={buttonClass}>Entrar</button>
      </div>
    )
}

export default Button;