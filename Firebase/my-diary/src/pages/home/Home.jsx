import styles from "./Home.module.css";
import DiaryForm from "./DiaryForm";

export default function Home() {
    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm />
            </aside>
            <ul className={styles.content_list}>
                다이어리리스트
            </ul>
        </main>
    );
}
