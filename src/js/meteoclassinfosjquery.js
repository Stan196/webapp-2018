// MÉTHODE MODULE CLASS

class Meteo {

  constructor(infos) {
    this.infos = infos;
	  console.log(this.infos.villeID);
	  console.log(this.infos.units);
  }

  getMeteoInformations() {
	  
	  var maRequete = 'http://api.openweathermap.org/data/2.5/weather?id='+this.infos.villeID+'&units='+this.infos.units+'&lang=fr&APPID=0c98af945c8169d1e0fb538cd4ff153f';
    
    // ----------------------- OPENWEATHERMAP -----------------------
    $.ajax({
          'url': maRequete,
          'type': 'GET',
          'format': 'json',
          'cache': 'false', 
          'dataType': 'json'
                                                                                                                           
    }).done(function (data, textStatus, jqXHR) {

       // DONNÉES DE LA JOURNÉE.
      console.dir(data);

      //
      const tendance = data.weather[0].main;
      const tendanceFrancais = data.weather[0].description;
		
	
		
		//===================================
		
		
		$(".ville strong").html("<h2>" + data.name + "</h2>");
		
		$("#temperature").html("<p>" + data.main.temp + "ºC </p>");
		$("#humidite").html("<p>" + data.main.humidity + "% </p>");
		$("#tendance").html("<p>" + tendanceFrancais + "</p>");
		
		
		
		
		


      // CONSOLE
      console.log("Ville : " + data.name);
      console.log("Température : " + data.main.temp + "ºC");
	  console.log("Humidité : " + data.main.humidity);

      //====SVG
		
		let imgsource = "";
		const chemin = "img/";
		
		switch (tendance) {
			case "Rain":
					imgsource = chemin + "rain.svg";
					break;
			case "Clear":
					imgsource = chemin + "sunny.svg";
					break;
			case "Clouds":
					imgsource = chemin + "cloudy.svg";
					break;
			case "Snow":
					imgsource = chemin + "snow.svg";
					break;
			default:
					imgsource = chemin + "variable.svg";
			}
		
		$("#imgmeteo").html(`<img src="${imgsource}" alt="" width="128" height="128">`);
		
		
		
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        window.console.log('errorThrown : ' + textStatus);
    })
    .always(function (jqXHR, textStatus) {
      console.log('Fin de l\'exécution.');
    });
  
    
    return "****** getMeteoInformations() OK. Jquery.";
	  
	  
	  
	  

	  
	  
  }
	
	
	
	
	
	
	
	
	
}

export default Meteo
