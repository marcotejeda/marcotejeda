/**
 * www.marcotejeda.com
 * @copyright 2015 Marco Tejeda
 */
var htmlBody = $("html, body");
var ventana = $(window);
var particleGround = $("#particleground");
var footerContenido = $("#footer-contenido");
/* ------------------------------------------------------------
 * @ iniciandoDocument
 * [ Iniciando el document ]
 * ------------------------------------------------------------ */
$(document).ready(iniciandoDocument);
function iniciandoDocument(){

	if(existe(particleGround)){
		particleGround.particleground({
		    dotColor: '#11b1a2',
		    lineColor: '#11b1a2'
		  });
	}

	posicionFooter();

}

/* ------------------------------------------------------------
 * @ resizeVentana
 * ------------------------------------------------------------ */
ventana.resize(resizeVentana);
function resizeVentana(){
	posicionFooter();
}

/* ------------------------------------------------------------
 * @ posicionFooter
 * [ Setamos la posicion del footer calculando el alto de la
 * ventana y el html-body ]
 * ------------------------------------------------------------ */
 function posicionFooter(){

 	if(existe(footerContenido)){
 		var ventanaAlto 	= ventana.height();
		var htmlBodyAlto 	= htmlBody.height();

		if(ventanaAlto < htmlBodyAlto)
			footerContenido.removeClass('footer-fixed');
		else
			footerContenido.addClass('footer-fixed');
	 }

 }

/* ------------------------------------------------------------
 * @ existe
 * [ Validamos si existe el identificador ]
 * ------------------------------------------------------------ */
function existe(id){
	if(id.length > 0)
		return true;
	else
		return false;
}
