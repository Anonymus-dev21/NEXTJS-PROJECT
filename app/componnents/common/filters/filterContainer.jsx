"use client";
import { Filter } from "./filter";
export const FilterContainer = ({
  categoryTarget,
  categoria,
  precios,
  priceTarget,
}) => {
  return (
    <Filter
      categoryTarget={categoryTarget}
      categoria={categoria}
      priceTarget={priceTarget}
      precios={precios}
    />
  );
};
