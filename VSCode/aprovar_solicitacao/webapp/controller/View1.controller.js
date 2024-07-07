sap.ui.define([
    "sap/fe/core/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/mvc/Controller",
	"sap/m/ListBase",
	"sap/ui/base/ManagedObject",
	"sap/suite/ui/generic/template/ObjectPage/extensionAPI/ExtensionAPI"

],
function (BaseController, JSONModel,  Filter, FilterOperator, Controller, ListBase, ManagedObject,ExtensionAPI) {
    "use strict";

    return BaseController.extend("desafioabap85.aprovarsolicitacao.controller.View1", {

		onSolicitacaoSetTableUpdateFinished: function(oEvent){
			this.buscaPreco();
		},

		buscaPreco: function() {
			
			let oTable = this.byId("idSolicitacaoSetexpandToMaterialTable"); /*Pegando a instância da tabela*/
			let aItems = oTable.getItems(); /*pegando instância dos itens da tabela*/
			let that = this;

			if(aItems.length > 0){
				/*aEntry = entrada atual, i = indice do processamento, array = array inteiro*/
				aItems.forEach(async function(aEntry, i, array){
					let bc = aEntry.getBindingContext(); /*pega o ponteiro do registro especifico da entidade*/
					let obj = bc.getObject(); /* objeto com os dados da entidade principal*/
					let path = bc.getPath(); /* identificador único */
					let model = that.getView().getModel(); /*main service (serviço Odata) */
					let material = model.getProperty(path + '/ToMaterial'); /* para ter acesso ao código externo do material*/
					
					try{
						/*o await é para resolver a promise antes de seguir em frente */
						let request = await that.ajaxRequest(material.CodigoExterno);
						let dados = request[0].d; /*acessando o objeto d, que está dentro do objeto 0 */
						let preco = dados.UnitPrice; /* acessando o parametro UnitPrice, que está dentro
						do objeto d */
						model.setProperty(path + "/PreçoNovo", preco);
					} catch {

					}

				})
			}

		},

		ajaxRequest: function(idMaterial){

			/**/
			return new Promise((resolve, reject) => {
				/*ajax = conjunto de comandos da web para garantir comunicação entre sistemas */
				$.ajax({
					/*resolve questão de segurança*/
					url:"https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/Northwind/Northwind.svc/Products("+idMaterial+")", /*URL da API */
					method:'GET',
					dataType:"json",
					crossDomain:true, 
					success:(...args) => resolve(args), /* Callback: função chamada após outra função */
					error:(...args) => reject(args),
				})
			})

		},

		onInit: function () {
			
		},
	
		onExit: function () {
			
		},
			
		onAprovar: function() {
			let oTable = this.byId("idSolicitacaoSetexpandToMaterialTable");/*instancia da tabela */
			let aContexts = oTable.getSelectedContexts();/*linhas selecionadas na tabela */
			var model = this.getView().getModel();

			for(var i = 0; i < aContexts.length; i++) {
				let path = aContexts[i].getPath();
				path = path + '/Status';
				model.setProperty(path, 'A');
			}

			model.submitChanges(); /*mandando as alterações para o backend(o tipo, como GET ou POST,
			por exemplo, são determinados automaticamente) */

		},
		
		onRejeitar: function() {
			let oTable = this.byId("idSolicitacaoSetexpandToMaterialTable");/*instancia da tabela */
			let aContexts = oTable.getSelectedContexts();/*linhas selecionadas na tabela */
			var model = this.getView().getModel();

			for(var i = 0; i < aContexts.length; i++) {
				let path = aContexts[i].getPath();
				path = path + '/Status';
				model.setProperty(path, 'R');
			}

			model.submitChanges(); /*mandando as alterações para o backend(o tipo, como GET ou POST,
			por exemplo, são determinados automaticamente) */

		}
            
        });


    });

