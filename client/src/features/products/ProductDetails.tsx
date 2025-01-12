import { Product } from "@/app/models/product";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();

  return <div>ProductDetails</div>;
}
