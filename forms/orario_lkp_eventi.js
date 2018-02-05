/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E34D9848-C3FF-4E7B-9290-01E14FF613E9",variableType:4}
 */
var _idEvSelezionato = -1;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"FB85B3CE-360C-49B4-A21D-B6CF6B071187",variableType:-4}
 */
var _soloStatistici = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"272D4946-EF78-4919-B5E4-297876B196AD"}
 */
var _origSource = '';

/**
 * @properties={typeid:24,uuid:"E1EE2424-EC9F-4F42-A570-F17AE45DDB38"}
 */
function refreshTree()
{

	/** @type {JSFoundset<db:/ma_presenze/e2_eventipadre>} */    
    var categEvFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,'e2_eventipadre');
	if(_soloStatistici)
		categEvFs.addFoundSetFilterParam('idevento','=',670);
    categEvFs.sort('ordinediesposizione');    
    categEvFs.loadAllRecords();
	   
    var sqlEv = 'SELECT E.idEvento,E.Evento,E.descriz AS Evento_Descrizione,E.IdEventoClasse,E.IdGruppoEvento,E.Note,E.OrdineDiEsposizione, ' + 
                'E.IdEventoPadre FROM E2Eventi AS E ';
    if(_soloStatistici)
    	sqlEv += "INNER JOIN E2EventiClassi EC ON E.idEventoClasse = EC.idEventoClasse WHERE EC.Tipo = 'T'";
    var evDs = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlEv,null,1000);
    var evDS = evDs.createDataSource('evDS');
	
    //TODO modificare le icone della calculation in base alla categoria dell'evento padre
	if(solutionModel.getDataSourceNode(evDS).getCalculation('media_calc') != null)
	    solutionModel.getDataSourceNode(evDS).newCalculation('function media_calc(){'+ 
		                                'switch(ideventopadre){' + 
		                                    'case 612,670,607,854,618 : return \'media:///program_orange.png\';break;' +
		                                    'case 564,565,566,567,568,569,570 : return \'media:///program_orange.png\'; break;' + 
							                'case 571 : return \'media:///program_orange.png\'; break;' +
							                'default : return \'media:///program_orange.png\';' +
										'}' + 
								 '}',JSVariable.TEXT);
		
	var rel = solutionModel.getRelation('e2eventipadre_to_evDs'); 
	if(rel == null)
	{
		rel = solutionModel.newRelation('e2eventipadre_to_evDs',categEvFs.getDataSource(),evDS,JSRelation.INNER_JOIN);
	    rel.newRelationItem('idevento','=','ideventopadre');
	}
	if(categEvFs.getSize() === 0)
	{
		elements.eventi_tree.enabled = false;
	
	}else
	{
	    var binding_1 = elements.eventi_tree.createBinding(categEvFs.getDataSource());
	        binding_1.setImageURLDataprovider('calc_media_folder');
	        binding_1.setNRelationName(rel.name);
	        binding_1.setTextDataprovider('descriz');
            binding_1.setChildSortDataprovider('ordinediesposizione');

        var binding_2 = elements.eventi_tree.createBinding(evDS);
            binding_2.setImageURLDataprovider('media_calc');
            binding_2.setTextDataprovider('evento_descrizione');
            binding_2.setToolTipTextDataprovider('note');
            binding_2.setMethodToCallOnClick(aggiornaIdEventoSelezionato,'idevento');             
            binding_2.setMethodToCallOnDoubleClick(confermaSelezioneEvento,'idevento');
	}
	
	elements.eventi_tree.removeAllRoots();
	elements.eventi_tree.addRoots(categEvFs);

}

/** *
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"22360AA1-675E-4AC8-94C7-55F9A62F46F7"}
 */
function onShowForm(_firstShow, _event) {
	
	_super.onShowForm(_firstShow, _event);
    refreshTree();
}

/**
 * @properties={typeid:24,uuid:"6D81A916-F174-49CE-82FA-C933D14FA538"}
 */
function aggiornaIdEventoSelezionato(returnDataProvider, tableName, mouseX, mouseY)
{
	_idEvSelezionato = returnDataProvider;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2ADF4BAB-BEB8-4FE0-A0E8-435889719693"}
 */
function confermaSelezioneEvento(event) {
	
	globals.svy_mod_closeForm(event);
	
	var frm = forms.orario_regole_gen_eventi_tab_dtl;
	//Conferma la selezione dell'evento selezionato ed aggiorna in base all'origine della sselezione
	switch(_origSource)
	{
	   case 'btn_abb_oltre_a' :
	      frm.aggiornaOreStatistici(_idEvSelezionato);
          break;
	   case 'btn_assenze_entrata' :
	      frm.aggiornaAssenzeEntrata(_idEvSelezionato);
	      break;
	   case 'btn_assenze_uscita' :
		   frm.aggiornaAssenzeUscita(_idEvSelezionato);
		   break;
	   case 'btn_assenze_intermedie' :
		   frm.aggiornaAssenzeIntermedie(_idEvSelezionato);
		   break;
	   case 'btn_assenze_oltre' :
		   frm.aggiornaAssenzeOltre(_idEvSelezionato);
		   break;
	    default :
	    	break;
	}
}
