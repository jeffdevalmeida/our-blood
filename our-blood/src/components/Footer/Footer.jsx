import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <>
        <footer class="bg-light text-center text-lg-start">
            <div class="text-center p-3" style={{backgroundColor: "#F9EDED"}}>
            Feito com <FontAwesomeIcon icon={faCoffee} /> por estudantes da FMU
            </div>
        </footer>
        </>
    )
}