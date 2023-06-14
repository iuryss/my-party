import react from "react";
import Image from "next/image";
import styles from "../../styles/button.module.css"

const Button = ({containerClass, buttonClass, buttonText, buttonIcon}) => {
    return(
        <div className={containerClass}>
        <button className={buttonClass}>{buttonIcon ? <Image width={30} style={{marginRight: 10}} src={buttonIcon} ></Image> : null}{buttonText}</button>
      </div>
    )
}

export default Button;