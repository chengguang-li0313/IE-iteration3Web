import styles from "../../styles/Control.module.css";
import { Nav } from "../../component/Nav";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FoxControl() {
  const [data, setData] = useState("Not fucking setting");

  useEffect(async () => {
      const result = await axios.get("https://ie-iteration2.herokuapp.com/api2/fox");
      setData(result.data);
      setData(result.data);
      console.log(data)
      setData(result.data);
      console.log(data)

    }, []);
  
  return (
    <>
      <Nav></Nav>
      {/* {data.map((control) => 
          <div className={styles.controlInfo}>
          <div className={styles.controlVideo}>{control}</div>
          <div className={styles.controlDesc}></div>
          <div className={styles.middleGrid}></div>
          <div className={styles.leftGrid}></div>
          <div className={styles.rightGrid}></div>
        </div>
      )} */}
    </>
  );
}
