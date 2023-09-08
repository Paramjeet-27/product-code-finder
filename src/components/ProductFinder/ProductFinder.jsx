import { useState } from "react";
import ipdata from "./../../productList/productList.json";
import styles from "./ProductFinder.module.css";

const ProductFinder = () => {
  const [ip, setIp] = useState("");
  const [filtered, setFiltered] = useState(ipdata);

  const onChangeHandler = (e) => {
    const result = e.target.value.toLowerCase();
    setIp(result);
    const searched = ipdata.filter(
      (ele) => ele.Item_Name.toLowerCase().indexOf(ip) !== -1
    );
    setFiltered(searched);
  };

  const ipKeyHandler = (e) => {
    if (e.key === "Enter") {
      const searched = ipdata.filter(
        (ele) => ele.Item_Name.toLowerCase().indexOf(ip) !== -1
      );
      setFiltered(searched);
      setIp("");
    }
  };

  const allproducts = filtered.map((ele, index) => (
    <div key={index} className={styles.table}>
      <div className={styles.column1}>{ele.Pcode}</div>
      <div className={styles.column2}>{ele.Item_Name}</div>
      <div className={styles.column3}>{ele.IGST * 100}%</div>
      <div className={styles.column4}>{ele.Category}</div>
    </div>
  ));

  return (
    <>
      <h1>Product Finder</h1>
      <input
        type="text"
        onChange={onChangeHandler}
        value={ip}
        onKeyUp={ipKeyHandler}
        className={styles.ipBox}
      />
      <div className={styles.table}>
        <div
          className={styles.column1}
          style={{
            fontSize: "16pt",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          PCode
        </div>
        <div
          className={styles.column2}
          style={{
            fontSize: "16pt",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Product Name
        </div>
        <div
          className={styles.column3}
          style={{
            fontSize: "16pt",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          GST
        </div>
        <div
          className={styles.column4}
          style={{
            fontSize: "16pt",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Category
        </div>
      </div>
      {allproducts}
    </>
  );
};
export default ProductFinder;
