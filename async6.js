const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const mainTable = document.querySelector(".table-data");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((json_response) => {
      if (!json_response.ok) {
        throw new Error("Ошибка получения данных");
      }
      return json_response.json();
    })
    .then((response) => {
      let table = "<table>";

      table += "<tr>";
      Object.keys(response[0]).forEach((item) => {
        table += `<th>${item}</th>`;
      });
      table += "</tr>";

      for (let obj of response) {
        table += "<tr>";
        for (let item in obj) {
          if (typeof obj[item] === "object") {
            table += "<td>-</td>";
          } else {
            table += `<td>${obj[item]}</td>`;
          }
        }
        table += "</tr>";
      }
      table += "</table>";
      mainTable.innerHTML = table;
    })
    .catch(() => {
      mainTable.innerHTML = "Ошибка получения данных";
    });
});
