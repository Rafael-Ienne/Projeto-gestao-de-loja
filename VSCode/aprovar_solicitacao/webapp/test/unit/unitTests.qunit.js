/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"desafio_abap85/aprovar_solicitacao/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
