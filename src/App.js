import  { useState } from "react";
import { Parent } from "./Parent";

const getSearchableValue = (current) => {
  return current.searchString
}


function createUsers(from = 0, to = 100000) {
  return Array.from({ length: to - from }, (_, i) => ({
      id: i + from,
      name: `User ${i + from}`,
      searchString: generateRandomStringWithSpaces(Math.floor(Math.random() * 10))
  }));
}


function generateRandomStringWithSpaces(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
}


const App = () => {
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(()=>createUsers(0,100))
console.log(data)
  var users = data;

  if (users && searchString !== "") {
    users = users.filter((current) => {
      var valueToSearchIn = getSearchableValue(current).toLowerCase();
      var valueToSearch = searchString.toLowerCase();
      return valueToSearchIn.includes(valueToSearch);
    })
  }


  return (
    <>
      <input onChange={(e) => setSearchString(e.target.value)} />
      <Parent setData={(d)=>setData(d)} users={users} />
    </>
  );
};

export default App;
