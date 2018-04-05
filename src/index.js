import './css/main.css';
import './scss/main.scss';


import moment from 'moment';
import 'moment/locale/fr';


//import Meteo from './js/meteoclassinfosjquery';
import Meteo from './js/meteoclassinfoshandlebars';

import * as outils from './js/module';





//====================== DATE ======================================

var datedujour = document.querySelector('.date');
var maintenant = moment();

function dateDuJour() {
	
	console.log("Date du jour : " + maintenant.format('LLLL'));
	
	datedujour.innerHTML = outils.capLettre(maintenant.format('LLLL'));
	
}

dateDuJour();

//====================== MÉTÉO ======================================

function meteoDuJour(){
	
	const infosMeteo = {
		"villeID":"2988507",
		"units":"metric",
		"lang":"fr"
	};


	const maMeteo = new Meteo( infosMeteo );
	const msgMeteo = maMeteo.getMeteoInformations();
	console.log(msgMeteo);
}


meteoDuJour();


//============================================================
