import ColoredDropdown from "./coloredDropdown";
import MultipleSelectChip from "./coloredSelector";
import MultipleDropDown from "./multipleDropDown";
import styles from './page.module.css';
import BasicSelect from "./BasicSelect";


export default function Home() {
  return (
    < div className={styles.container}>
      <MultipleSelectChip></MultipleSelectChip>
      <BasicSelect></BasicSelect>
    </div>

  );
}
