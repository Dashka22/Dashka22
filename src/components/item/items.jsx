import styles from "./item.module.css";

const shopItems = [
  {
    imageUrl: "/images/item.png",
    name: "Hoodies & Sweatshirt",
  },
  {
    imageUrl: "/images/item.png",
    name: "Hoodies & Sweatshirt",
  },
  {
    imageUrl: "/images/item.png",
    name: "Hoodies & Sweatshirt",
  },
  {
    imageUrl: "/images/item.png",
    name: "Hoodies & Sweatshirt",
  },
  {
    imageUrl: "/images/item.png",
    name: "Hoodies & Sweatshirt",
  },
  {
    imageUrl: "/images/item.png",
    name: "Hoodies & Sweatshirt",
  },
];

export const Items = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>NEW ARRIVALS</p>
      <div className={styles.grid}>
        {shopItems.map((item, i) => {
          return (
            <Item key={i + item.name} imgUrl={item.imageUrl} name={item.name} />
          );
        })}
      </div>
    </div>
  );
};

const Item = ({ imgUrl, name }) => {
  return (
    <div>
      <img src={imgUrl} />
      <p className={styles.topText}>{name}</p>
      <p className={styles.bottomText}>Explore Now !</p>
    </div>
  );
};
