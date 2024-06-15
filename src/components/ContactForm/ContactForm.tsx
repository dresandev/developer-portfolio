import { sendMessageToEmail } from "~/actions/send-message"
import { Button } from "~/components/Ui/Button"
import { Label } from "~/components/Ui/Label"
import { Input } from "~/components/Ui/Input"
import { Textarea } from "~/components/Ui/TextArea"
import styles from "./ContactForm.module.css"

export const ContactForm = () => {
	return (
		<form className={styles.form} action={sendMessageToEmail}>
			<Label>
				<span className={styles.labelWrapper}>Nombre</span>
				<Input placeholder="Pepito Perez Pepian" name="name" autoComplete="name" required />
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Correo</span>
				<Input
					placeholder="pepito@perez.com"
					type="email"
					name="email"
					autoComplete="email"
					required
				/>
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Mensaje</span>
				<Textarea placeholder="Hola Dresan, (Tu increíble mensaje)" name="message" required />
			</Label>
			<Button size="medium">Enviar</Button>
		</form>
	)
}
