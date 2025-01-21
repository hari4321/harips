import PropTypes from "prop-types";
import "./Sidebar.css";

export const Sidebar = ({ heading, categories, selectedCategory, onCategoryClick }) => {
  return (
    <div className="sidebar glassmorphism">
      <div className="text-center sidebar-title mb-3">{heading}</div>
      <ul className="list-group">
        <li
          className={`list-group-item ${selectedCategory === "All" ? "active" : ""}`}
          onClick={() => onCategoryClick("All")}
          style={{ cursor: "pointer" }}
        >
          All
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`list-group-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => onCategoryClick(category)}
            style={{ cursor: "pointer" }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes for validation
Sidebar.propTypes = {
  heading: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};
