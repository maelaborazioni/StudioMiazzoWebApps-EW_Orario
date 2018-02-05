/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9D20D698-E92D-4D1A-8F18-331F24D6ACAF"}
 */
function onRecordSelection(event, _form) {
	
	var frmElems = forms.orario_regole_assenza_tab_dtl.elements;
	
	if(foundset.getSelectedRecord() 
			&& foundset.getSelectedRecord().arrotondatot != null)
	{
		frmElems.minuti.visible = true;
		frmElems.arrotondatot_fld.visible = true;
		
		frmElems.mult_min_e1_lbl.visible = false;
		frmElems.arrotondaeam_fld.visible = false;
		frmElems.mult_min_u1_lbl.visible = false;
		frmElems.arrotondauam_fld.visible = false;
		frmElems.mult_min_e2_lbl.visible = false;
		frmElems.arrotondaepm_fld.visible = false;
		frmElems.mult_min_u2_lbl.visible = false;
		frmElems.arrotondaupm_fld.visible = false;
		frmElems.mult_min_interm_lbl.visible = false;
		frmElems.arrotondainter_fld.visible = false;
		
	}else{
		
		frmElems.minuti.visible = false;
		frmElems.arrotondatot_fld.visible = false;
		
		frmElems.mult_min_e1_lbl.visible = true;
		frmElems.arrotondaeam_fld.visible = true;
		frmElems.mult_min_u1_lbl.visible = true;
		frmElems.arrotondauam_fld.visible = true;
		frmElems.mult_min_e2_lbl.visible = true;
		frmElems.arrotondaepm_fld.visible = true;
		frmElems.mult_min_u2_lbl.visible = true;
		frmElems.arrotondaupm_fld.visible = true;
		frmElems.mult_min_interm_lbl.visible = true;
		frmElems.arrotondainter_fld.visible = true;
	}
	
	return _super.onRecordSelection(event, _form);
}
