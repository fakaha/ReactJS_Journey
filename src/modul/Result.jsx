import React, { useState } from "react";
import Search from "./Search";

const Result = ({ searchTitle, kodeData }) => {
    // const itemList = [
    //     "Babi",
    //     "Orange",
    //     "Banana",
    //     "Cherry",
    //     "Milk",
    //     "Peanuts",
    //     "Butter",
    //     "Tomato"
    //   ];
    const filteredTitles = kodeData.filter((title) =>
    title.toLowerCase().includes(searchTitle.toLowerCase())
  );

      const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };



//   const titles = []; // Array judul kosong

//   const filteredTitles = titles.filter((title) =>
//     title.toLowerCase().includes(searchTitle.toLowerCase())
//   );

    return(
        <>
        <Search />
        {/* <input id="search-box" onChange={filterBySearch} /> */}
        <div id="item-list">
        <ol>
        {filteredTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
        </ol>
      </div>
        </>
    )
}

export default Result;