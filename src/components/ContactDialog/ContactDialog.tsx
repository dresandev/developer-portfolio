import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/Ui/Dialog"
import { ContactForm } from "~/components/ContactForm"
import styles from "./ContactDialog.module.css"

interface Props {
	trigger: React.ReactNode
}

export const ContactDialog: React.FC<Props> = ({ trigger }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogTitle>Contáctame</DialogTitle>
				<ContactForm />
			</DialogContent>
		</Dialog>
	)
}
