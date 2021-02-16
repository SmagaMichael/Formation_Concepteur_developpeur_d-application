<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_TANT_QUE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" epaisseurPoint="2" totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#CHIFFRE" algoitem="CHIFFRE EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#CHIFFRE1" algoitem="CHIFFRE1 EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#CHIFFRE#pasliste" algoitem="LIRE CHIFFRE"/>
        <item code="15#CHIFFRE1 != CHIFFRE*10" algoitem="TANT_QUE (CHIFFRE1 != CHIFFRE*10) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#CHIFFRE1#CHIFFRE1 + CHIFFRE#pasliste" algoitem="CHIFFRE1 PREND_LA_VALEUR CHIFFRE1 + CHIFFRE"/>
            <item code="20#CHIFFRE1#1" algoitem="AFFICHERCALCUL CHIFFRE1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
