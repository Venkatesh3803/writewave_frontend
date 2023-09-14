import { Link } from "react-router-dom"
import "./category.css"

const Category = () => {

    const categoryList = [
        {
            id: 1,
            name: "Food",
            bg: "#ECC6C7"
        },
        {
            id: 2,
            name: "Travel",
            bg: "#ECE4C6"
        },
        {
            id: 3,
            name: "Technology",
            bg: "#BFC1EC"
        },
        {
            id: 4,
            name: "Sports",
            bg: "#ECBFE7"
        },
        {
            id: 5,
            name: "News",
            bg: "#C9ECBF"
        },
        {
            id: 6,
            name: "Business",
            bg: "#BFEAEC"
        },
    ]

    return (
        <div className="category">
            {categoryList.map(c => {
                return (
                    <div className="category-card" style={{ background: `${c.bg}`, color: "black" }} key={c.id}>
                        <Link to={"/blogs"} style={{ color: "black" }}>
                            {c.name}
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Category
