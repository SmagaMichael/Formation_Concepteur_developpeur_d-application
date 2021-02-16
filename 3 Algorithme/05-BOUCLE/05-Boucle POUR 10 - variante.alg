<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_POUR" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalAffichages="1000" nbDecimales="8" epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#CHIFFRE" algoitem="CHIFFRE EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#MULTIPLE" algoitem="MULTIPLE EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#TABLE" algoitem="TABLE EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#CHIFFRE#pasliste" algoitem="LIRE CHIFFRE"/>
        <item code="12#TABLE#1#CHIFFRE" algoitem="POUR TABLE ALLANT_DE 1 A CHIFFRE">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="12#MULTIPLE#1#10" algoitem="POUR MULTIPLE ALLANT_DE 1 A 10">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="3#TABLE#0#pasliste" algoitem="AFFICHER TABLE"/>
                <item code="4#x#0" algoitem="AFFICHER &quot;x&quot;"/>
                <item code="3#MULTIPLE#0#pasliste" algoitem="AFFICHER MULTIPLE"/>
                <item code="4#=#0" algoitem="AFFICHER &quot;=&quot;"/>
                <item code="20#CHIFFRE*MULTIPLE#1" algoitem="AFFICHERCALCUL CHIFFRE*MULTIPLE"/>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
