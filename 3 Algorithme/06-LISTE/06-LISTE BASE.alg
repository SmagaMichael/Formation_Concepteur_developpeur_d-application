<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER TABLEAU[2]" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8" maxBoucle="500000" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="TABLEAU EST_DU_TYPE LISTE" code="1#LISTE#TABLEAU"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="TABLEAU[0] PREND_LA_VALEUR 1:2:3:4" code="5#TABLEAU#1:2:3:4#0"/>
        <item algoitem="AFFICHER TABLEAU[2]" code="3#TABLEAU#0#2"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
