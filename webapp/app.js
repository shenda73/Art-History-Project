var data = [
	['Édouard Manet','Olympia','1865','1'],
	['Georges Seurat','Sunday Afternoon on the Island of La Grand Jatte','1884-86','2'],
	['Antoni Gaudí','Casa Mila','1905-1907','3'],
	['Pablo Picasso','Demoiselles d’Avignon','1907','4'],
	['Adolf Loos','Steiner House','1910','5'],
	['Umberto Boccioni','Unique Forms of Continuity in Space','1913','6'],
	['Wasily Kandinsky','Painting with Green Center','1913','7'],
	['Kazimir Malevich','0.10 exhibition','1915','8'],
	['Cabaret Voltaire','Hugo Ball dressed as the Magic Priest','1916','9'],
	['Marcel Duchamp','Fountain','1917','10'],
	['Hannah Höch','Cut with the Kitchen Knife Through the Last Weimar Beer-Belly Cultural Epoch in Germany','1919-20','11'],
	['Alexander Rodchenko','Oval Hanging Construction No. 12','1920','12'],
	['Piet Mondrian','Composition with Red','Yellow','and Blue','1921','13'],
	['Lazlo Moholy-Nagy','Berlin Radio Tower','1928','14'],
	['Claude Cahun','Self-Portrait','1928','15'],
	['Le Corbusier','Villa Savoye','1928-29','16'],
	['Tarsila do Amaral','Anthropophagia','1929','17'],
	['Salvador Dalí and Luis Buñuel','still from Le chien andalou','1929','18'],
	['x','Degenerate Art exhibition Munich','1938','19'],
	['David Alfaro Siqueiros','Portrait of the Bourgeoisie','1939-40','20'],
	['Jacob Lawrence','Migration series#60: And The Migrants Kept Coming','1940-42','21'],
	['Philip Johnson','The Glass House','1949','22'],
	['Jackson Pollock','Autumn Rhythm','1950','23'],
	['David Smith','Tanktotem','1952','24'],
	['Robert Rauschenberg','Rebus','1955','25'],
	['Jasper Johns','Target with Four Faces','1955','26'],
	['Lygia Clark','Bichos with other works','c. 1960','27'],
	['Andy Warhol','6 Marilyns (Marilyn Six Pack)','1962','28'],
	['Yoko Ono','Painting to be Constructed in Your Head','1962','29'],
	['Yoko Ono','Painting to be Constructed in Your Head','1962','30'],
	['Donald Judd','Untitled','1965','31'],
	['Eva Hesse','Contingent','1969','32'],
	['Adrian Piper','Mythic Being: I Embody Everything You Most Hate and Fear','1975','33'],
	['Ana Mendieta','Untitled','from Silhouette series','1976','34'],
	['Cindy Sherman','Untitled Film Still #21','1978','35'],
	['Félix González-Torres','Untitled (Perfect Lovers)','1987-1991','36'],
	['China/Avant-Garde exhibition','Beijing','1989','37'],
	['Fred Wilson','Mining the Museum detail of installation','1994','38'],
	['Frank Gehry','Guggenheim Bilbao','1997','39'],
	['Suzanne Lacy','Code 33: Emergency. Clear the Air','1999','40']
];

function init(){
	


	$("#new-people").click(function(){
		var testIdx = getRandomInt(0,39);
		$("#name").text(data[testIdx][0] + ' ' + data[testIdx][1] + ' ' + data[testIdx][2]);
		$("#pic").attr('src','img/ARTHI_1002_Final_Image_Li-'+ nameHelperFunc(testIdx) + ".jpg");
	});

}

function nameHelperFunc(idx){
	if (idx <= 9) {
		return "00"+ idx.toString();
	} else if (idx <= 99) {
		return "0" + idx.toString();
	} else if (idx <= 999) {
		return idx.toString();
	} else {
		return ""
	}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {
	init();
	var testIdx = getRandomInt(0,39);
	$("#name").text(data[testIdx][0] + ' ' + data[testIdx][1] + ' ' + data[testIdx][2]);
	$("#pic").attr('src','img/ARTHI_1002_Final_Image_Li-'+ nameHelperFunc(testIdx) + ".jpg");
	
}) 