<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;s&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param nbDecimales="8" arrondiAuto="vrai" totalAffichages="1000" epaisseurLigne="2" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#DUREE" algoitem="DUREE EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#HEURES" algoitem="HEURES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#RESTE_MINUTES" algoitem="RESTE_MINUTES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#MINUTES" algoitem="MINUTES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#SECONDES" algoitem="SECONDES EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#DUREE#pasliste" algoitem="LIRE DUREE"/>
        <item code="5#RESTE_MINUTES#DUREE % 3600#pasliste" algoitem="RESTE_MINUTES PREND_LA_VALEUR DUREE % 3600"/>
        <item code="5#HEURES#(DUREE - RESTE_MINUTES) / 3600#pasliste" algoitem="HEURES PREND_LA_VALEUR (DUREE - RESTE_MINUTES) / 3600"/>
        <item code="5#MINUTES#(RESTE_MINUTES - RESTE_MINUTES % 60) /60#pasliste" algoitem="MINUTES PREND_LA_VALEUR (RESTE_MINUTES - RESTE_MINUTES % 60) /60"/>
        <item code="5#SECONDES#RESTE_MINUTES % 60#pasliste" algoitem="SECONDES PREND_LA_VALEUR RESTE_MINUTES % 60"/>
        <item code="3#HEURES#0#pasliste" algoitem="AFFICHER HEURES"/>
        <item code="4#h#0" algoitem="AFFICHER &quot;h&quot;"/>
        <item code="3#MINUTES#0#pasliste" algoitem="AFFICHER MINUTES"/>
        <item code="4#min#0" algoitem="AFFICHER &quot;min&quot;"/>
        <item code="3#SECONDES#0#pasliste" algoitem="AFFICHER SECONDES"/>
        <item code="4#s#0" algoitem="AFFICHER &quot;s&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
