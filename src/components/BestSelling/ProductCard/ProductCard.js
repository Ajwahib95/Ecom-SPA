import React from "react";
import classes from "./ProductCard.module.css";
import Link from "next/link";
import ProductColor from "../../UI/ProductColor/ProductColor";
import Rating from "../../UI/ProductColor/Rating/Rating";

const ProductCard = ({ product }) => {
  const colors = [
    {
      color: "black",
      quantity: 20,
      id: 1,
    },
    {
      color: "darkcyan",
      quantity: 10,
      id: 2,
    },
  ];

  return (
    <div className={classes.container}>
      <img className={classes.img} src={product.image} alt="" />
      <div className={classes.productDetails}>
        <Link href="">
          <a className={classes.pdctTitle}>{product.title}</a>
        </Link>
        <div className={classes.df}>
          <ProductColor colors={colors} />
          <span className={classes.sizeTxt}>MORE SIZES AVAILABLE</span>
        </div>
        <span className={classes.pdctPrice}>${product.price}</span>
        <Rating stars={product.rating.rate} />
      </div>
    </div>
  );
};

export default ProductCard;