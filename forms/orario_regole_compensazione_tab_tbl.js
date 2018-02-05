/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BB4C8912-8D24-4EEE-BDDF-FC800AB92C7B"}
 * @SuppressWarnings(unused)
 */
function onRecordSelection(event, _form) {
	
	var _currAssTab = forms.orario_regole_compensazione_dtl.elements.tab_reg_comp_ass
	var _currStraTab = forms.orario_regole_compensazione_dtl.elements.tab_reg_comp_stra
	var _tabAss1 = 'orario_regole_compensazione_dtl_assenze_1'
	var _tabAss2 = 'orario_regole_compensazione_dtl_assenze_2'	
	var _tabStra1 = 'orario_regole_compensazione_dtl_stra_1'
	var _tabStra2 = 'orario_regole_compensazione_dtl_stra_2'	
	
	_currAssTab.removeAllTabs()
	_currStraTab.removeAllTabs()
	
	if(!foundset || !foundset.getSelectedRecord() || foundset.getSelectedRecord().susolareass)
		_currAssTab.addTab(_tabAss2,'','','Regole compensazione assenze',null,null,null,'e2fo_compensazioni_to_e2fo_compensazioni',1)
    else
	    _currAssTab.addTab(_tabAss1,'','','Regole compensazione assenze',null,null,null,'e2fo_compensazioni_to_e2fo_compensazioni',1)
		
	if(foundset.getSelectedRecord().susolarestr)
		_currStraTab.addTab(_tabStra2,'','','Regole compensazione straordinari',null,null,null,'e2fo_compensazioni_to_e2fo_compensazioni',1)	
	else 
	    _currStraTab.addTab(_tabStra2,'','','Regole compensazione straordinari',null,null,null,'e2fo_compensazioni_to_e2fo_compensazioni',1)
		
	return _super.onRecordSelection(event, _form)
}
