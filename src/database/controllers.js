const { models } = require('./models');

const controller = {};

const authorizedUser = user => {};

controller.getAllTicketByRut = async (req, res) => {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	let ticket = await models.getAllTicketByTicketNumber(req.params.rut);

	res.status(200).json(ticket);
};

controller.getAllTicketByTicketNumber = async (req, res) => {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	let ticket = await models.getAllTicketByTicketNumber(req.params.ticketNumber);

	res.status(200).json(ticket);
};

controller.CreateOrUpdateTicket = async (req, res) => {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	let dataTicket = {
		'N° Boleto': 109,
		Rut: '18.060.922-9',
		Nombre: 'Moody Medina',
		Fecha: '07-04-2021 12:57:54',
		Origen: 'Ruda',
		Destino: 'Porto Cesareo',
		'N° Personal': '9 9853 7061',
		'N° Emergencia': '9 7676 1923',
		'N° de Piso': 1,
		'N° de Asiento': 30,
		pasajerosExtras: [
			{
				'N° Boleto': 107,
				Rut: '18.060.922-9',
				Nombre: 'Moody Medina',
				Fecha: '07-04-2021 12:57:54',
				Origen: 'Ruda',
				Destino: 'Porto Cesareo',
				'N° Personal': '9 9853 7061',
				'N° Emergencia': '9 7676 1923',
				'N° de Piso': 1,
				'N° de Asiento': 30,
				pasajerosExtras: [],
			},
			{
				'N° Boleto': 107,
				Rut: '18.060.922-9',
				Nombre: 'Moody Medina',
				Fecha: '07-04-2021 12:57:54',
				Origen: 'Ruda',
				Destino: 'Porto Cesareo',
				'N° Personal': '9 9853 7061',
				'N° Emergencia': '9 7676 1923',
				'N° de Piso': 1,
				'N° de Asiento': 30,
				pasajerosExtras: [],
			},
		],
	};

	const statusCode = await models.CreateOrUpdateTicket(dataTicket);

	res
		.status(statusCode)
		.json({ statusCode, location: `http://localhost:3000/v1/tickets/ticket/${dataTicket['N° Boleto']}` });
};

controller.notFound = (req, res) => res.status(404).json({ statusCode: 404, statusText: 'Not Found' });

/*
400 Solicitud incorrecta: esto significa que la entrada del lado del cliente falla en la validación.
401 no autorizado: esto significa que el usuario no está autorizado para acceder a un recurso. Por lo general, vuelve cuando el usuario no está autenticado.
403 Prohibido: esto significa que el usuario está autenticado, pero no se le permite acceder a un recurso.
404 No encontrado: esto indica que no se encontró un recurso.
500 Error interno del servidor: este es un error genérico del servidor. Probablemente no debería lanzarse explícitamente.
502 Bad Gateway : esto indica una respuesta no válida de un servidor ascendente.
503 Servicio no disponible: esto indica que sucedió algo inesperado en el lado del servidor (puede ser algo como sobrecarga del servidor, fallas en algunas partes del sistema, etc.). 
*/

module.exports = { controller };
