<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHERCALCUL PRIXHT + (PRIXHT*TAUX/100)"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" nbDecimales="8" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#PRIXHT" algoitem="PRIXHT EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#TAUX" algoitem="TAUX EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Quel est ton prix à convertir ? #0" algoitem="AFFICHER &quot;Quel est ton prix à convertir ? &quot;"/>
        <item code="2#PRIXHT#pasliste" algoitem="LIRE PRIXHT"/>
        <item code="4#Quel est le taux de TVA ? (exemple 20 pour 20%)#0" algoitem="AFFICHER &quot;Quel est le taux de TVA ? (exemple 20 pour 20%)&quot;"/>
        <item code="2#TAUX#pasliste" algoitem="LIRE TAUX"/>
        <item code="20#PRIXHT + (PRIXHT*TAUX/100)#0" algoitem="AFFICHERCALCUL PRIXHT + (PRIXHT*TAUX/100)"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
