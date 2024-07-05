import { localFormatDate } from "~/helpers/local-format-date"
import { Link } from "~/components/Ui/Link"
import styles from "./ArticleHeader.module.css"

interface Props {
	title: string
	date: string
}

export const ArticleHeader: React.FC<Props> = ({ title, date }) => {
	const formattedDate = localFormatDate(date)

	return (
		<div className={styles.wrapper}>
			<Link className={styles.goHomeLink} href="/blog">
				← Volver al Blog
			</Link>
			<h1 className={styles.title}>{title}</h1>
			<span className={styles.date}>{formattedDate}</span>
		</div>
	)
}
