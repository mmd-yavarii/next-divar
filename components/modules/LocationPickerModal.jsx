import styles from '@/styles/LocationPickerModal.module.css';

import { FaSearch } from 'react-icons/fa';

import { iranProvinces } from '@/helper/helper';
import { useCityLocation } from '@/context/LocationProvider';
import { useState } from 'react';
import { useRouter } from 'next/router';

function LocationPickerModal() {
  const router = useRouter();

  const [display, setDisplay] = useState(iranProvinces);
  const [province, setProvince, isModalOpen, setSsModalOpen] = useCityLocation();
  const [selected, setSelected] = useState(province);

  // close modal handler
  function closeModal() {
    setSsModalOpen(false);
    router.replace(`/${province}`);
  }

  // set new province handler
  function setNewProvince(event) {
    event.stopPropagation();
    setProvince(selected);
    router.replace(`/${selected}`);
    setSsModalOpen(false);
  }

  // search province handler
  function search(event) {
    const value = event.target.value.trim();
    if (value) {
      const result = iranProvinces.filter((i) => i.name.includes(value));
      setDisplay(result);
    } else {
      setDisplay(iranProvinces);
    }
  }

  // select province handler
  function selectProvince(event) {
    event.stopPropagation();
    setSelected(event.target.innerText);
  }

  return isModalOpen ? (
    <div className={styles.modalBackground} onClick={closeModal}>
      <div className={styles.modal}>
        <div className={styles.search} onClick={(event) => event.stopPropagation()}>
          <FaSearch opacity="0.5" />
          <input type="text" placeholder="جست و جو در استان ها" onChange={search} />
        </div>

        <div className={styles.provinceContainer}>
          {display.map((i) => (
            <button className={selected == i.name ? styles.selected : styles.provinces} key={i.id} onClick={selectProvince}>
              {i.name}
            </button>
          ))}
        </div>

        <div className={styles.btnContainer}>
          <button onClick={closeModal}>انصزاف</button>
          <button onClick={setNewProvince}>تایید</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default LocationPickerModal;
