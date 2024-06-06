import React from "react";

export default function Getdata() {
  function getData() {
    fetch("http://localhost:3000/user")
      .then((user) => user.json())
      .then((data) => {
        console.log(data);
      });
  }

  getData();
  return <div>Getdata</div>;
}
