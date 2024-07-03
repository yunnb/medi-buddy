import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [
        {
          menuName: "Medsearch",
          link: "/medsearch",
        },
        {
          menuName: "HealthNews",
          link: "/healthnews",
        },
      ],
    };
  }

  render() {
    const { menus } = this.state;

    return (
      <main className="HOME">
        <h1>HOME</h1>
        <div className="HOME_menubox">
          {menus.map((menu, idx) => (
            <Link key={idx} to={menu.link}>
              <div className="HOME_menubox_menu">{menu.menuName}</div>
            </Link>
          ))}
        </div>
      </main>
    );
  }
}

export default Home;
