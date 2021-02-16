<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_SINON"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" totalBoucles="5000000" arrondiAuto="vrai" epaisseurLigne="2" totalAffichages="1000" epaisseurPoint="2" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#AGE" algoitem="AGE EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Indiquer votre age#1" algoitem="AFFICHER &quot;Indiquer votre age&quot;"/>
        <item code="2#AGE#pasliste" algoitem="LIRE AGE"/>
        <item code="4#vous avez #0" algoitem="AFFICHER &quot;vous avez &quot;"/>
        <item code="3#AGE#0#pasliste" algoitem="AFFICHER AGE"/>
        <item code="4# ans#0" algoitem="AFFICHER &quot; ans&quot;"/>
        <item code="6#AGE >=18" algoitem="SI (AGE >=18) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4# vous etes majeur#0" algoitem="AFFICHER &quot; vous etes majeur&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4# vous etes mineur#0" algoitem="AFFICHER &quot; vous etes mineur&quot;"/>
                <item code="4#vous serez majeur dans #0" algoitem="AFFICHER &quot;vous serez majeur dans &quot;"/>
                <item code="20#18 - AGE#0" algoitem="AFFICHERCALCUL 18 - AGE"/>
                <item code="4# ans#0" algoitem="AFFICHER &quot; ans&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
