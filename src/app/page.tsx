import ColoredDropdown from "./coloredDropdown";
import MultipleDropDown from "./multipleDropDown";
import styles from './page.module.css';


export default function Home() {
  return (
    < div className={styles.container}>
    <ColoredDropdown></ColoredDropdown>
    <MultipleDropDown></MultipleDropDown>
    </div>

  );
}
