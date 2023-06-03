export default function CategoryCard({props}){
    const {categoryName,description,img} = props;
    return (
        <div className="categoryText">
            {/* <img src={img} alt={categoryName} /> */}
            <h3>{categoryName}</h3>
            <p>{description}</p>
        </div>
    )
}