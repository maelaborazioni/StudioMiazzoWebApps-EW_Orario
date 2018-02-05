/**
 * @properties={typeid:24,uuid:"92969A85-B15E-40B0-B2FA-C653E2143B37"}
 */
function getButtonObject()
{
	var _enabled = globals.ma_utl_hasKey(globals.Key.GEST_ANAG_DITTA);
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: _enabled };
		btnObj.btn_edit = { enabled: _enabled };
		btnObj.btn_delete = { enabled: _enabled };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}

/**
 * @properties={typeid:24,uuid:"3FF71D19-C625-4FCD-9AC3-39F6FF4767D7"}
 */
function FiltraDitta(_fs)
{
	_fs.addFoundsetFilterParams('idditta','=',idditta);
	return _fs;
}

/**
 * @param {JSEvent} _event
 * @param {String} _triggerForm
 *
 * @properties={typeid:24,uuid:"1A3395F6-C969-4866-A854-C8BC2548BB9E"}
 */
function dc_new(_event,_triggerForm)
{
	_super.dc_new(_event,_triggerForm);
}

/**
 * @param {JSEvent} _event
 * @param {String} _triggerForm
 *
 * @properties={typeid:24,uuid:"40194DCF-2AB6-46C4-AF17-1FE21EE4AC98"}
 */
function dc_edit(_event,_triggerForm)
{
	_super.dc_edit(_event,_triggerForm);
}

/**
 * @param {JSEvent} _event
 * @param {String} _triggerForm
 *
 * @properties={typeid:24,uuid:"4FB397B9-E194-4CD6-8775-3ADD36C890BA"}
 */
function dc_delete(_event,_triggerForm)
{
	_super.dc_delete(_event,_triggerForm);
}

/**
 * @param {JSEvent} _event
 * @param {String} _triggerForm
 *
 * @properties={typeid:24,uuid:"0D4F219F-FE19-4117-A4BF-CE6ADF5EFF94"}
 */
function dc_save(_event,_triggerForm)
{
	var rec = foundset.getSelectedRecord();
	rec.f1tipodiperiodicita = 'R';
	rec.f2compensazorariostraordin = 0;
	rec.f2tipodicompensazione = 'S';
	rec.f3scattastraordinari = 0;
	rec.f1sovrascrivofasceorarie = 0;
	rec.totaleoreperiodo = totaleore * 100;
	_super.dc_save(_event,_triggerForm);
}

/**
 * @param {JSEvent} _event
 * @param {String} _triggerForm
 *
 * @properties={typeid:24,uuid:"74B13143-00AD-4F68-BABF-4417C8DF5A02"}
 */
function dc_cancel(_event,_triggerForm)
{
	_super.dc_cancel(_event,_triggerForm);
}
