const defalutOpt = {
	validationLevel: 'strict',
	validationAction: 'error',
};

const scheme = {
	EMPRESAS_TRANSPORTE: { ...defalutOpt },
	TIPOS_ASIENTOS: { ...defalutOpt },
	ROLES: { ...defalutOpt },
	USUARIOS: {
		...defalutOpt,
		// validator: {
		// 	$jsonSchema: {
		// 		bsonType: 'object',
		// 		require: ['fkIdRol'],
		// 		properties: {
		// 			fkIdRol: {
		// 				bsonType: 'object',
		// 				descrition: 'Must be a object and is required ',
		// 			},
		// 		},
		// 	},
		// },
	},
	BOLETOS: {
		...defalutOpt,
		// validator: {
		// 	$jsonScheme: {
		// 		bsonType: 'object',
		// 		require: ['fkRut', 'fkIdTipoAsiento', 'fkIdEmpresa', 'fkIdTicketVuelta'],
		// 		properties: {
		// 			fkRut: {
		// 				bsonType: 'object',
		// 				descrition: 'Must be a object and is required ',
		// 			},
		// 			fkIdTipoAsiento: {
		// 				bsonType: 'object',
		// 				descrition: 'Must be a object and is required ',
		// 			},
		// 			fkIdEmpresa: {
		// 				bsonType: 'object',
		// 				descrition: 'Must be a object and is required ',
		// 			},
		// 			fkIdTicketVuelta: {
		// 				bsonType: 'object',
		// 				descrition: 'Must be a object and is required ',
		// 			},
		// 		},
		// 	},
		// },
	},
};

module.exports = { scheme };
