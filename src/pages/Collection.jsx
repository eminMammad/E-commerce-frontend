import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {

  const {products ,search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  {
    /* Just testing Category update*/
  }
  // useEffect(() => {
  //   console.log(category);
  // }, [category]);

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  {
    /* Just testing subCategory update*/
  }
  // useEffect(() => {
  //   console.log(subCategory);
  // }, [subCategory]);

  const applyFilters = () => {
    let tempProducts = products.slice();

    if (showSearch && search) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }


    if (category.length > 0) {
      tempProducts = tempProducts.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      tempProducts = tempProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    setFilteredProducts(tempProducts);
  };

  const sortProducts = () => {
    let tempProducts = filteredProducts.slice();
    if (sortType === "low-high") {
      setFilteredProducts(tempProducts.sort((a, b) => a.price - b.price));
    } else if (sortType === "high-low") {
      setFilteredProducts(tempProducts.sort((a, b) => b.price - a.price));
    }
  };

  // useEffect(() => {
  //   setFilteredProducts(products);
  // }, []);

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="dropdown icon"
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* Filter by Category */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* Subcategory filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>

        <div className="flex justify-center border rounded-md border-r-15 border-gray-200">
          <button className="">Not Functioning Button</button>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"Collections"} />
          {/* Product sort*/}
          <select
            className="border-2 border-gray-300 text-sm px-2 text-right"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant" className="text-center p-0">
              Sort by: Relevance
            </option>
            <option value="low-high" className="text-center">
              Sort by: Low to High
            </option>
            <option value="high-low" className="text-center">
              Sort by: High to Low
            </option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((product, index) => {
            return (
              <ProductItem
                key={index}
                name={product.name}
                id={product._id}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
