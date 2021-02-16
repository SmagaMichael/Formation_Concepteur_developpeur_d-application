<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_POUR"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurPoint="2" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai" maxBoucle="500000" nbDecimales="8" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="NOMBRES EST_DU_TYPE LISTE" code="1#LISTE#NOMBRES"/>
        <item algoitem="I EST_DU_TYPE NOMBRE" code="1#NOMBRE#I"/>
        <item algoitem="TEMP EST_DU_TYPE NOMBRE" code="1#NOMBRE#TEMP"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="NOMBRES[0] PREND_LA_VALEUR 4:25:1:36:24" code="5#NOMBRES#4:25:1:36:24#0"/>
        <item algoitem="I PREND_LA_VALEUR 0" code="5#I#0#pasliste"/>
        <item algoitem="TANT_QUE (I &lt; 5) FAIRE" code="15#I &lt; 5">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="SI (NOMBRES[I] > NOMBRES[I+1]) ALORS" code="6#NOMBRES[I] > NOMBRES[I+1]">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="TEMP PREND_LA_VALEUR NOMBRES[I]" code="5#TEMP#NOMBRES[I]#pasliste"/>
                <item algoitem="NOMBRES[I] PREND_LA_VALEUR NOMBRES[I+1]" code="5#NOMBRES#NOMBRES[I+1]#I"/>
                <item algoitem="NOMBRES[I+1] PREND_LA_VALEUR TEMP" code="5#NOMBRES#TEMP#I+1"/>
                <item algoitem="I PREND_LA_VALEUR 0" code="5#I#0#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="I PREND_LA_VALEUR I+1" code="5#I#I+1#pasliste"/>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="POUR I ALLANT_DE 0 A 4" code="12#I#0#4">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER NOMBRES[I]" code="3#NOMBRES#1#I"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
