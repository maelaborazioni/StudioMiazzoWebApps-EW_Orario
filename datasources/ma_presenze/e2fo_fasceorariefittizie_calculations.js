/**
 * @properties={type:8,typeid:36,uuid:"8C99EEBA-9826-4768-82DD-470BF746EF53"}
 */
function fineorario_number()
{
	return (fineorario / 100);
}

/**
 * @properties={type:8,typeid:36,uuid:"46CDA752-DD25-4BE2-A614-176259D8E67A"}
 */
function finepausa_number()
{
	return (finepausa / 100);
}

/**
 * @properties={type:8,typeid:36,uuid:"DE2840D1-CD9F-4F7B-88C6-4C31BCF8E262"}
 */
function inizioorario_number()
{
	return (inizioorario / 100);
}

/**
 * @properties={type:8,typeid:36,uuid:"52C5E485-CF3B-4990-8055-161D2D8C1794"}
 */
function iniziopausa_number()
{
	return (iniziopausa / 100);
}

/**
 * @properties={type:8,typeid:36,uuid:"3C4803C5-40D2-42B1-9E3B-DBF7AE264CB6"}
 */
function scalopausa_number()
{
	return 1;
}

/**
 * @properties={type:12,typeid:36,uuid:"FBA46911-F232-46D2-90E0-53FF1D82B730"}
 */
function inizio_orario_oremin()
{
	var hh = Math.abs(inizioorario / 100);
	if(hh <= 9)
		return '0' + hh + '.' + utils.stringRight(inizioorario.toString(),2);
	else
		return inizioorario.toString();
}

/**
 * @properties={typeid:36,uuid:"95945B7F-65F2-4513-821C-26E6C6FD3C41"}
 */
function inizio_pausa_oremin()
{
	var hh = Math.abs(iniziopausa / 100);
	if(hh <= 9)
		return '0' + hh + '.' + utils.stringRight(iniziopausa.toString(),2);
	else
		return iniziopausa.toString();
}

/**
 * @properties={type:12,typeid:36,uuid:"5C11D480-655A-42EE-8566-2375C7F60CBC"}
 */
function fine_pausa_oremin()
{
	var hh = Math.abs(finepausa / 100);
	if(hh <= 9)
		return '0' + hh + '.' + utils.stringRight(finepausa.toString(),2);
	else
		return finepausa.toString();
}

/**
 * @properties={type:12,typeid:36,uuid:"1EF244A5-DDBD-4F89-AC3E-CCCE95691ACD"}
 */
function fine_orario_oremin()
{
	var hh = Math.abs(fineorario / 100);
	if(hh <= 9)
		return '0' + hh + '.' + utils.stringRight(fineorario.toString(),2);
	else
		return fineorario.toString();
}
