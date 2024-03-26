import React, { useState, useEffect } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  useEffect(() => {
    // Select "All" by default when component mounts
    setSelectedTab("All");
  }, []);

  const tabStyles = {
    tab: {
      marginRight: "10px",
      padding: "8px 12px",
      borderRadius: "8px",
      cursor: "pointer",
    },
    selectedTab: {
      backgroundColor: "green",
      color: "white",
    },
    defaultTab: {
      backgroundColor: "white",
      color: "black",
    },
  };

  const handleTabClick = (filter) => {
    setSelectedTab(filter);
  };

  return (
    <div className="uael-post__header-filters-wrap">
      <ul
        className="uael-post__header-filters"
        aria-label="Taxonomy Filter"
        style={{ display: "flex", listStyleType: "none", padding: 0, flexWrap: "wrap" }}
      >
        <li
          style={{
            ...tabStyles.tab,
            ...(selectedTab === "All"
              ? tabStyles.selectedTab
              : tabStyles.defaultTab),
          }}
          data-filter="*"
          onClick={() => handleTabClick("All")}
        >
          All
        </li>
        <li
          style={{
            ...tabStyles.tab,
            ...(selectedTab === "Freezone Offers"
              ? tabStyles.selectedTab
              : tabStyles.defaultTab),
          }}
          data-filter=".freezone-offers"
          onClick={() => handleTabClick("Freezone Offers")}
        >
          Freezone Offers
        </li>
        <li
          style={{
            ...tabStyles.tab,
            ...(selectedTab === "IFZA"
              ? tabStyles.selectedTab
              : tabStyles.defaultTab),
          }}
          data-filter=".ifza"
          onClick={() => handleTabClick("IFZA")}
        >
          IFZA
        </li>
        <li
          style={{
            ...tabStyles.tab,
            ...(selectedTab === "Mainland Offers"
              ? tabStyles.selectedTab
              : tabStyles.defaultTab),
          }}
          data-filter=".mainland-offers"
          onClick={() => handleTabClick("Mainland Offers")}
        >
          Mainland Offers
        </li>
        <li
          style={{
            ...tabStyles.tab,
            ...(selectedTab === "MEYDAN"
              ? tabStyles.selectedTab
              : tabStyles.defaultTab),
          }}
          data-filter=".meydan"
          onClick={() => handleTabClick("MEYDAN")}
        >
          MEYDAN
        </li>
        <li
          style={{
            ...tabStyles.tab,
            ...(selectedTab === "SHAMS"
              ? tabStyles.selectedTab
              : tabStyles.defaultTab),
          }}
          data-filter=".shams"
          onClick={() => handleTabClick("SHAMS")}
        >
          SHAMS
        </li>
        <li
          style={{
            ...tabStyles.tab,
            ...(selectedTab === "SPC FreeZone"
              ? tabStyles.selectedTab
              : tabStyles.defaultTab),
          }}
          data-filter=".spc"
          onClick={() => handleTabClick("SPC FreeZone")}
        >
          SPC FreeZone
        </li>
        <li
          style={{
            ...tabStyles.tab,
            ...(selectedTab === "SRTIP"
              ? tabStyles.selectedTab
              : tabStyles.defaultTab),
          }}
          data-filter=".srtip"
          onClick={() => handleTabClick("SRTIP")}
        >
          SRTIP
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
