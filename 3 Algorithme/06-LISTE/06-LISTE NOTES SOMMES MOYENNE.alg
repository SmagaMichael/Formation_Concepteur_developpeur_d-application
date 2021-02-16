<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER MOYENNE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" totalBoucles="5000000" epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#NOTES" algoitem="NOTES EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#SOMMES" algoitem="SOMMES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#MOYENNE" algoitem="MOYENNE EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#NOTES#10:16:18:20:19:2:13#0" algoitem="NOTES[0] PREND_LA_VALEUR 10:16:18:20:19:2:13"/>
        <item code="5#SOMMES#0#pasliste" algoitem="SOMMES PREND_LA_VALEUR 0"/>
        <item code="12#I#0#6" algoitem="POUR I ALLANT_DE 0 A 6">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#NOTES#1#I" algoitem="AFFICHER NOTES[I]"/>
            <item code="5#SOMMES#SOMMES + NOTES[I]#pasliste" algoitem="SOMMES PREND_LA_VALEUR SOMMES + NOTES[I]"/>
            <item code="5#MOYENNE#SOMMES/I#pasliste" algoitem="MOYENNE PREND_LA_VALEUR SOMMES/I"/>
            <item code="3#SOMMES#1#pasliste" algoitem="AFFICHER SOMMES"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="3#MOYENNE#1#pasliste" algoitem="AFFICHER MOYENNE"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
