/**
 * @properties={typeid:24,uuid:"7D0467A5-2FD7-4A07-8B68-27F35E61EF45"}
 */
function selezione_GCT()
{
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriGCT(recSingolaDitta);
	else if (globals._filtroSuDitta) {

		var _form = globals.openProgram('ODL_GestCausTimbr');
		lookup(globals._filtroSuDitta, _form);

	} else {
		
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
                                         'ApriGCT', 'filtraDittaStandard', null, null, '', true);
	}
}

/**
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"340B68F6-D3EB-460D-A429-1B88DAD57170"}
 *
 */
function ApriGCT(_rec)
{
	if (_rec)
	{
		var _form = globals.openProgram('ODL_GestCausTimbr');
		lookup(_rec['idditta'], _form);
   	}
	
}

/**
 * @properties={typeid:24,uuid:"050936DB-83E1-4571-9EAF-C49EFD4276C9"}
 */
function selezione_RO()
{
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriRO(recSingolaDitta);
	else if (globals._filtroSuDitta) {

		var _form = globals.openProgram('ODL_RegoleOrarie');
		lookup(globals._filtroSuDitta, _form);

	} else {
		
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
                                         'ApriRO', 'filtraDittaPerRegoleOrarie', null, null, '', true);
	}
}

/**
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"402A8780-3798-4B23-ABB0-F58CB269A70B"}
 *
 */
function ApriRO(_rec)
{
	if (_rec)
	{
		var _form = globals.openProgram('ODL_RegoleOrarie');
		lookup(_rec['idditta'], _form);
		globals.svy_nav_setBrowserbar(globals.nav.mode,_form);
   	}
	
}

/**
 * @properties={typeid:24,uuid:"FBC69C19-F800-4667-880B-CD87282DB926"}
 */
function selezione_FO()
{
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriFO(recSingolaDitta);
	else if (globals._filtroSuDitta) {

		var _form = globals.openProgram('ODL_FasceOrarie');
		lookup(globals._filtroSuDitta, _form);

	} else {
		
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
                                         'ApriFO', 'filtraDittaStandard', null, null, '', true);
	}
}

/**
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"98B5E70B-1752-4560-A74B-B9758D6C7750"}
 *
 */
function ApriFO(_rec)
{
	if (_rec)
	{
		var _form = globals.openProgram('ODL_FasceOrarie');
		lookup(_rec['idditta'], _form);
   	}
	
}

/**
 * @properties={typeid:24,uuid:"671EAAED-91B7-463F-BEF4-79709503F1D4"}
 */
function selezione_RC()
{
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriRC(recSingolaDitta);
	else if (globals._filtroSuDitta) {

		var _form = globals.openProgram('ODL_RegoleCompensazione');
		lookup(globals._filtroSuDitta, _form);

	} else {
		
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
                                         'ApriRC', 'filtraDittaStandard', null, null, '', true);
	}
}

/**
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"04B9128D-7968-4344-9E07-706D3236182F"}
 *
 */
function ApriRC(_rec)
{
	if (_rec)
	{
		var _form = globals.openProgram('ODL_RegoleCompensazione');
		lookup(_rec['idditta'], _form);
   	}
	
}

/**
 * @properties={typeid:24,uuid:"9859DAE2-1CE1-4E5F-9EEE-CF0DC417CA7C"}
 */
function selezione_RA()
{
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriRA(recSingolaDitta);
	else if (globals._filtroSuDitta) {

		var _form = globals.openProgram('ODL_RegoleAssenza');
		lookup(globals._filtroSuDitta, _form);

	} else {
		
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
                                         'ApriRA', 'filtraDittaStandard', null, null, '', true);
	}
}

/**
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"CAEE5D7D-7F3F-4910-9DA2-0299CDCB2F57"}
 *
 */
function ApriRA(_rec)
{
	if (_rec)
	{
		var _form = globals.openProgram('ODL_RegoleAssenza');
		lookup(_rec['idditta'], _form);
   	}
	
}

/**
 * @properties={typeid:24,uuid:"F81FD29C-58C3-4555-B44E-710A9AA1C2A7"}
 */
function selezione_RS()
{
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriRS(recSingolaDitta);
	else
	if (globals._filtroSuDitta) {

		var _form = globals.openProgram('ODL_RegoleStraordinario');
		lookup(globals._filtroSuDitta, _form);

	} else {
		
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
                                         'ApriRS', 'filtraDittaStandard', null, null, '', true);
	}
}

/**
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"0F2A6734-406E-48DD-850A-06B6785A334E"}
 *
 */
function ApriRS(_rec)
{
	if (_rec)
	{
		var _form = globals.openProgram('ODL_RegoleStraordinario');
		lookup(_rec['idditta'], _form);
   	}
	
}

/**
 * @properties={typeid:24,uuid:"DB9047FD-2BF5-4799-9688-6B4193460522"}
 */
function selezione_RGE()
{
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriRGE(recSingolaDitta);
	else
	if (globals._filtroSuDitta) {

		var _form = globals.openProgram('ODL_RegoleGenerazioneEventi');
		lookup(globals._filtroSuDitta, _form);

	} else {
		
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", lkpDITTA,
                                         'ApriRGE', 'filtraDittaStandard', null, null, '', true);
	}
}

/**
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"D50106C5-034F-4555-AEB1-42E3A9A56650"}
 *
 */
function ApriRGE(_rec)
{
	if (_rec)
	{
		var _form = globals.openProgram('ODL_RegoleGenerazioneEventi');
		lookup(_rec['idditta'], _form);
   	}
	
}