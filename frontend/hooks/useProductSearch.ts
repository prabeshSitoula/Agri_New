import { useState } from "react";

export default function useProductSearch(products: { name: string }[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { searchTerm, setSearchTerm, filteredProducts };
}
