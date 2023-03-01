async function pokedex() {
    const url = new URLSearchParams(window.location.search)
    const gen = url.get("gen");
    let limitend;
    let limitbegin;
    if (!gen || gen == "1") {
        limitend = 151;
        limitbegin = 1;
    } else if (gen == "2") {
        limitend = 251;
        limitbegin = 152;
    } else if (gen == "3") {
        limitend = 386;
        limitbegin = 252;
    } else if (gen == "4") {
        limitend = 493;
        limitbegin = 387;
    } else if (gen == "5") {
        limitend = 649;
        limitbegin = 494;
    } else if (gen == "6") {
        limitend = 721;
        limitbegin = 650;
    } else if (gen == "7") {
        limitend = 809;
        limitbegin = 722;
    } else if (gen == "8") {
        limitend = 898;
        limitbegin = 810;
    } 

    for(var i= limitbegin; i <= limitend; i++) {

     let axres = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
  
    const data = axres.data;

    var output = "";


      output += `
        <tr>
          <td>
            <img class="img" src=${data.sprites.front_default} />
          </td>
          <td>${data.name}</td>
          <td>${data.id}</td>
          <td>
            <a href="./view.html?id=${data.id}"> Ver mas... </a>
          </td>
          
        </tr>
      `;
    

    document.querySelector("#_tbody").innerHTML += output;
    //sortTable(2);
  
  }
 }  


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("mytable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {

    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
    
      if (dir == "asc") {
        if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
        
          shouldSwitch = true;
          break;
        }
      } 
    }
    if (shouldSwitch) {
     
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount ++;
    } else {
     
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}