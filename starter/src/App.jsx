import { useState } from "react";
import Title from "./components/Title";
import menu from "./data";
import Menu from "./components/Menu";
import Categories from "./components/categories";



const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItemm, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  // filter item
  const filterItems = (category) => {
    console.log(category);

    // if catego == all set menuItem = orgial menu and retrun
    if (category === "all") {
      setMenuItem(menu);
      return;
    }

    // if item category matches retrun category
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Categories categories={categories} filterItems={filterItems} />
        <Title title="Our menu" />
        <Menu items={menuItemm} />
      </section>
    </main>
  );
};
export default App;
