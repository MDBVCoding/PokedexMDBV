function pokedata() {
  const url = new URLSearchParams(window.location.search)
  const id = url.get("id");
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(function (response) {
    const data = response.data;
    console.log(data);

    document.getElementById("sprite").src = data.sprites.front_default;
    if (data.sprites.front_default) {
      document.getElementById("front-male").src = data.sprites.front_default;
    } else {
      document.getElementById("male").innerHTML += `<p>No existe foto frontal de un ${data.name} macho</p>`;
    }
    if (data.sprites.back_default) {
      document.getElementById("back-male").src = data.sprites.back_default;
    } else {
      document.getElementById("male").innerHTML += `<p>No existe foto trasera de un ${data.name} macho</p>`;
    }


    if (data.sprites.front_female) {
      document.getElementById("front-female").src = data.sprites.front_female;
    } else {
      document.getElementById("female").innerHTML += `<p>No existe foto frontal de un ${data.name} hembra</p>`;
    }
    if (data.sprites.back_female) {
      document.getElementById("back-female").src = data.sprites.back_female;
    } else {
      document.getElementById("female").innerHTML += `<p>No existe foto trasera de un ${data.name} hembra</p>`;
    }

    if (data.sprites.front_shiny) {
      document.getElementById("front-smale").src = data.sprites.front_shiny;
    } else {
      document.getElementById("shiny-male").innerHTML += `<p>No existe foto frontal de un ${data.name} shiny macho</p>`;
    }
    if (data.sprites.back_shiny) {
      document.getElementById("back-smale").src = data.sprites.back_shiny;
    } else {
      document.getElementById("shiny-male").innerHTML += `<p>No existe foto trasera de un ${data.name} shiny macho</p>`;
    }


    if (data.sprites.front_shiny_female) {
      document.getElementById("front-sfemale").src = data.sprites.front_shiny_female;
    } else {
      document.getElementById("shiny-female").innerHTML += `<p>No existe foto frontal de un ${data.name} shiny hembra</p>`;
    }
    if (data.sprites.back_shiny_female) {
      document.getElementById("back-sfemale").src = data.sprites.back_shiny_female;
    } else {
      document.getElementById("shiny-female").innerHTML += `<p>No existe foto trasera de un ${data.name} shiny hembra</p>`;
    }

    document.getElementById("name").innerHTML = data.name;
    document.getElementById("numero").innerHTML = data.id;
    document.getElementById("peso").innerHTML = data.weight / 10;
    document.getElementById("alto").innerHTML = data.height / 10;

    for (let tipos of data.types) {
      let output = "";

      output += `
        <li>${tipos.type.name}</li>
      `;
    

      document.querySelector("#tipos").innerHTML += output;

    }

    for (let statss of data.stats) {
        document.getElementById("stats").innerHTML += `<li>${statss.stat.name.toUpperCase()}:  ${statss.base_stat}/100</li>`;
    }


  })
  .catch(function (error) {
    console.log(error);
  })
}