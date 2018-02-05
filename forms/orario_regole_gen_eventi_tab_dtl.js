/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"46B2DCDA-D4DD-4719-A313-999AE54BBC42"}
 * @AllowToRunInFind
 */
function FiltraEventiOreOrdinarie(_fs) {

	_fs.addFoundSetFilterParam('ideventoclasse','IN',[69,70,106,108,109,110]);	
    return _fs;
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"F3ECFA23-3B72-4202-8636-B165FD5ACD7A"}
 */
function AggiornaEventiOreOrdinarie(_rec)
{
	idevoreord = _rec['idevento'];
}
/**
 * @param {Number} idEvento
 *
 * @properties={typeid:24,uuid:"D097076D-3DFA-4965-BE8A-D1EA1B2844E8"}
 */
function aggiornaOreStatistici(idEvento)
{
   idevabbuono = idEvento; 
}

/**
 * @param {Number} idEvento
 *
 * @properties={typeid:24,uuid:"D7459F9C-EB51-418F-9097-BAD967E683DE"}
 */
function aggiornaAssenzeEntrata(idEvento)
{
	idevefinoa = idEvento;
}

/**
 * @param {Number} idEvento
 *
 * @properties={typeid:24,uuid:"96C223A3-EB7E-4BE9-B9CC-7616DABC627B"}
 */
function aggiornaAssenzeUscita(idEvento)
{
	idevufinoa = idEvento;
}

/**
 * @param {Number} idEvento
 *
 * @properties={typeid:24,uuid:"85A53D79-CF2F-4733-9F27-991DCF6974D1"}
 */
function aggiornaAssenzeIntermedie(idEvento)
{
   idevifinoa = idEvento;	
}

/**
 * @param {Number} idEvento
 *
 * @properties={typeid:24,uuid:"D04A1074-EC0D-4839-A232-42862E4C6893"}
 */
function aggiornaAssenzeOltre(idEvento)
{
	idevoltre = idEvento;
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"62E667B0-CF30-47B6-B49C-20424D2A801B"}
 */
function showLkpAlberoEventi(event)
{
	var frm = forms.orario_lkp_eventi;
	
	if(event.getSource().getName() == 'btn_abb_oltre_a')
		frm._soloStatistici = true;
	else
		frm._soloStatistici = false;
	
	frm._origSource = event.getSource().getName();
		
	globals.ma_utl_showFormInDialog(frm.controller.getName(),'Eventi selezionabili');
	
}


