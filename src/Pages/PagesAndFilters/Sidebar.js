import "./SideBar.css";
import "./Slider.css";
import "./TextInput.css"

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
    <div className="side-bar" style={{textAlign:"left", fontWeight:"bold"}}>
      <h2>Filter by</h2>
      <div>
        <input
          type="text"
          onChange={(event) => {
            searchWith(event.target.value);
          }}
          placeholder="Search Product Here..."
          value={filters.search}
          style={{ fontStyle: "italic" }}
        />
      </div>
      <div>
        <h4>Price</h4>

        <div className="priceSorting">
          <div className="sortedPrice">
            <input
              type="radio"
              name="sort"
              checked={sortBy === "min"}
              onClick={() => sorter("min")}
            />
            <label htmlFor="sort">Low to High</label>
          </div>
          <div className="sortedPrice">
            <input
              type="radio"
              name="sort"
              checked={sortBy === "max"}
              onClick={() => sorter("max")}
            />
            <label htmlFor="sort">High to Low</label>
          </div>
        </div>
      </div>
      <div>
        <h4>Categories</h4>
        <div className="sortCategory">
          <div>
            <input
            style={{margin:"5px 10px"}}
              type="checkbox"
              name="category"
              onChange={() => filterCategory("Chocolate")}
              defaultChecked={false}
              checked={categoryFiltered["Chocolate"]}
            />
            <label htmlFor="category">Chocolate</label>
          </div>
          <div>
            <input style={{margin:"5px 10px"}}
              type="checkbox"
              name="category"
              onChange={() => filterCategory("Beverage")}
              defaultChecked={false}
              checked={categoryFiltered["Beverage"]}
            />
            <label htmlFor="category">Beverages</label>
          </div>
          <div>
            <input style={{margin:"5px 10px"}}
              type="checkbox"
              name="category"
              onChange={() => filterCategory("Cake")}
              defaultChecked={false}
              checked={categoryFiltered["Cake"]}
            />
            <label htmlFor="category">Cake</label>
          </div>
        </div>
      </div>
      <div>
        <input
          type="range"
          onChange={(e) => ratingFilter(e.target.value)}
          min="0"
          max="5"
          value={ratingBy}
        />
        <p style={{textAlign:"center"}}>Rating: <span>{ratingBy}</span></p>
      </div>
      <div style={{paddingBottom:"1rem"}}></div>
      <p onClick={resetCategory} style={{textAlign:"center"}}>Reset Filters</p>
    </div>
  );
}
