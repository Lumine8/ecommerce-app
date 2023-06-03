export default function Sidebar({ props }) {
  const {
    sorter,
    filterCategory,
    searchWith,
    resetCategory,
    categoryFiltered,
    filters,
    ratingFilter,
  } = props;
  const { sortBy, ratingBy } = filters;

  return (
    <div className="side-bar">
      <p onClick={resetCategory}>Reset Filters</p>
      <div className="priceSorting">
        <input
          type="radio"
          name="sort"
          checked={sortBy === "min"}
          onClick={() => sorter("min")}
        />
        <label htmlFor="sort">Price - Low to High</label>
        <input
          type="radio"
          name="sort"
          checked={sortBy === "max"}
          onClick={() => sorter("max")}
        />
        <label htmlFor="sort">Price - High to Low</label>
      </div>
      <input
        type="text"
        onChange={(event) => {
          searchWith(event.target.value);
        }}
        placeholder="Seach Here..."
        value={filters.search}
        style={{ fontStyle: "italic" }}
      />
      <div className="sortCategory">
        <input
          type="checkbox"
          name="category"
          onChange={() => filterCategory("Chocolate")}
          defaultChecked={false}
          checked={categoryFiltered["Chocolate"]}
        />
        <label htmlFor="category">Chocolate</label>
        <input
          type="checkbox"
          name="category"
          onChange={() => filterCategory("Beverage")}
          defaultChecked={false}
          checked={categoryFiltered["Beverage"]}
        />
        <label htmlFor="category">Beverages</label>
        <input
          type="checkbox"
          name="category"
          onChange={() => filterCategory("Cake")}
          defaultChecked={false}
          checked={categoryFiltered["Cake"]}
        />
        <label htmlFor="category">Cake</label>
      </div>
      <input
        type="range"
        onChange={(e) => ratingFilter(e.target.value)}
        min="0"
        max="5"
        value={ratingBy}
      />
      <span>{ratingBy}</span>
    </div>
  );
}
