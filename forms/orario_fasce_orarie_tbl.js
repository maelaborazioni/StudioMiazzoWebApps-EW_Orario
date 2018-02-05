/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 *
 * @private
 *
 * @properties={typeid:24,uuid:"15E9CF32-F9B4-49A9-B45E-54E6607088C4"}
 */
function onRecordSelection(event, _form) {
	
	var _currTab = forms.orario_fasce_orarie_tab.elements.tab_fasce_orarie_dtl 
		
	if(!foundset || !foundset.getSelectedRecord() || !foundset.getSelectedRecord().conteggioseccotimbrature)
		_currTab.tabIndex = 'conteggio_no_tab';
	else
		_currTab.tabIndex = 'conteggio_si_tab';
	
	return _super.onRecordSelection(event, _form)
}
