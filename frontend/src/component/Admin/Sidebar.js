import React, { Fragment, useState, useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";

const Sidebar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 850) {
      setShowMediaIcons(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Fragment>
      <button
        className=" mobile-settingMenu2"
        onClick={() => setShowMediaIcons(!showMediaIcons)}
      >
        {showMediaIcons ? <ListIcon /> : <WidgetsIcon />}
      </button>

      <div
        className={showMediaIcons ? "mobile-sidebar" : "sidebar"}
        onClick={() => setShowMediaIcons(false)}
      >
        <Link to="/admin/dashboard">
          <p>
            <DashboardIcon /> Dashboard
          </p>
        </Link>

        <TreeView
          className="tree"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <nav>
              <Link to="/admin/products">
                <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
              </Link>
            </nav>
            <nav>
              <Link to="/admin/product">
                <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
              </Link>
            </nav>
          </TreeItem>
        </TreeView>

        <Link to="/admin/orders">
          <p>
            <ListAltIcon />
            Orders
          </p>
        </Link>

        <Link to="/admin/users">
          <p>
            <PeopleIcon /> Users
          </p>
        </Link>

        <Link to="/admin/reviews">
          <p>
            <RateReviewIcon />
            Reviews
          </p>
        </Link>
      </div>
    </Fragment>
  );
};

export default Sidebar;
