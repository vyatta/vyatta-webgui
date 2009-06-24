/*;;;
    Document   ; utm_language_en.js;;
    Created on ; Mar 23, 2009, 2;18;11:00 PM
    Author     ; Kevin.Choi;;
    Description;;;
*/

var g_lang =
{
    ///////////////////////////////////////////////////////////////////;English;French;
    // Menu;;;
    m_menu_dashboard : "tableau de bord", 
    m_menu_des_dashboard : "tableau de bord",
    m_menu_firewall : "pare-feu", 
    m_menu_des_firewall : "pare-feu", 
    m_menu_idp : "pr�vention d'intrusion", 
    m_menu_des_idp : "pr�vention d'intrusion", 
    m_menu_avs : "anti-virus", 
    m_menu_des_avs : "anti-virus", 
    m_menu_asp : "anti-spam", 
    m_menu_des_asp : "anti-spam", 
    m_menu_webf : "filtrage web",
    m_menu_des_webf: "filtrage web",
    m_menu_imp2p : "filtrage MI & P2P",
    m_menu_des_imp2p : "filtrage MI & P2P", 
    m_menu_vpn : "VPN", 
    m_menu_des_vpn : "VPN", 
    m_menu_log : "logs", 
    m_menu_des_log : "logs", 
    m_menu_zone_mgt : "gestion des zones", 
    m_menu_des_zone_mgt : "gestion des zones", 
    m_menu_easy_mode : "mode facile", 
    m_menu_des_easy_mode : "mode facile", 
    m_menu_expert_mode : "mode expert", 
    m_menu_des_expert_mode : "mode expert", 
    m_menu_easy_filtering : "mode facile", 
    m_menu_des_easy_filtering : "mode facile", 
    m_menu_expert_filtering : "mode expert", 
    m_menu_des_expert_filtering : "mode expert", 
    m_menu_overview : "overview", 
    m_menu_des_overview : "overview",
    m_menu_s2s : "site � site", 
    m_menu_des_s2s : "site � site", 
    m_menu_remote_users : "utilisateurs nomades", 
    m_menu_des_remote_users : "utilisateurs nomades", 
    m_menu_des_add_zone : "ajouter une zone", 
    m_menu_des_update_zone : "modifier une zone", 
    m_menu_des_custom_firewall : "pare-feu personnalis�", 
    m_menu_des_authorized_urls : "URLs autoris�es", 
    m_menu_des_ban_keyword : "mots interdits dans URL",

    ///////////////////////////////////////////////////////////////////;;
    // Network configuration menu    ;;
    m_menu_lan_multi : "LAN / multi LAN", 
	m_menu_lan : "LAN",
	m_menu_lan2 : "LAN2", 
	m_menu_dmz : "DMZ", 
	m_menu_nat_pat : "NAT/PAT", 
	m_menu_csc_router : "routeur cascad�", 
	m_menu_des_csc_router : "routeur cascad�", 
	m_menu_dns : "DNS", 
    m_menu_port_config : "param�trage des ports", 
	m_menu_des_port_config : "param�trage des ports", 

    ///////////////////////////////////////////////////////////////////;;
    // Dash board screen;;

    ////////////////////////////////////////////////////////////////////;;
    // common;;
    m_tableTooltip1 : "cliquez ici pour trier", 
    m_name : "nom", 
    m_enabled : "activer",
    m_delete : "supprimer",
    m_group : "groupe",
    m_username : "utilisateur",
    m_status : "statut",
    m_ipAddr : "adresse IP",
    m_invalidIpAddr : "Invalid IP adresse",
    m_ipaddrTitle : "IP adresse validation", 
    m_underConstruction : "en construction",
    m_applyTip : "sauvegarder les modifications",
    m_cancelTip : "annuler les modifications", 
    m_confModify : "les modifications effectu�es n'ont pas �t� sauvegard�es. Voulez-vous continuer ?",

    ///////////////////////////////////////////////////////////////////;;
    // VPN Overview;;
    m_vpnOVSource : 'source',
    m_vpnOVDest : 'destination',
    m_vpnOVPeerDomainName : "adresse du site distant / nom de domaine",
    m_vpnOVConfNode : 'mode de configuration',
    m_vpnOVLocal : 'local',
    m_vpnOVS2S : "connexions site � site",
    m_vpnOVRemote : "utilisateurs nomades",

    ///////////////////////////////////////////////////////////////////;;
    // VPN RemoteUser View;;
    m_vpnRemoteviewHeader : "Cette page vous permet de configurer un serveur VPN pour connecter des utilisateurs nomades",

    ///////////////////////////////////////////////////////////////////;;
    // Firewall Security Level;;
    m_fireActiveHeader : "Active Zone Table",	
    m_fireLevelColName : "niveaux de s�curit�",
    m_fireLevelColSelect : "s�lectionner", 
    m_fireLevelColDir : "direction", 
    m_fireLevelColFrom : "de",
    m_fireLevelColTo : "vers",
    m_fireLevelHdDef : "Default",	
    m_fireLevelBdDef : "All traffic blocked",
    m_fireLevelBdLANtoDMZ_Def : "All incoming traffic blocked/outgoing traffic allowed.",
    m_fireLevelBdDMZtoLAN : "All incoming traffic allowed/outgoing traffic blocked.",
    m_fireLevelBdStand_WtoL : "All incoming traffic allowed except Netbios/outgoing traffic blocked.",	
    m_fireLevelHdAuth : "faible", 
    m_fireLevelBdAuth : "Le pare-feu est d�sactiv�. Tout trafic sortant est autoris�", 
    m_fireLevelHdStand : "moyen", 
    m_fireLevelBdStand : "Tout trafic sortant est autoris�, except� les services Netbios",
    m_fireLevelHdAdvan : "�lev�", 
    m_fireLevelBdAdvan : "seuls les services Web et mail sont autoris�s depuis votre r�seau local",
    m_fireLevelHdCustom : "personnalis�",
    m_fireLevelBdCustom : "personnalisation du profil �lev�",
    m_fireLevelHdBlock : "bloquer tout", 
    m_fireLevelBdBlock : "l'acc�s internet est bloqu� � tout utilisateur", 
    m_fireLevelCustConfTip : "personnaliser votre niveau de s�curit�", 
    m_fireLevelApplyTip : "sauvegarder les modifications", 
    m_fireLevelCancelTip : "annuler les modifications", 

    ///////////////////////////////////////////////////////////////////;;
    // Firewall Zone Management;;
    m_fireZMAddTip : "cr�er une nouvelle zone",
    m_fireZMApplyTip : "sauvegarder les modifications",
    m_fireZMZoneName : "nom de la zone", 
    m_fireZMMember : "membres de la zone", 
    m_fireZMMemIncluded : "inclus", 
    m_fireZMMemAvail : "disponible", 
    m_fireZMDesc : "description",
    m_fireZMEnable : "activer", 
    m_fireZMMemIncTip : "Double cliquer sur l'�l�ment s�lectionn� pour l'enlever de la zone", 
    m_fireZMMemAvailTip : "Double cliquer sur l'�l�ment s�lectionn� pour l'inclure dans la zone", 
    m_fireZMMemError : "le champ membre(s) ne peut pas rester vide. Veuillez au moins en s�lectionner un.", 
    m_fireZMNameError : "le champ nom de la zone ne peut rester vide.",

    ///////////////////////////////////////////////////////////////////;;
    // Firewall Security Customize Level;;
    m_fireDeleteConfirm : "Etes-vous s�r de vouloir supprimer cette r�gle ?",
    m_fireCustDeleteConfirmHeader : "supprimer",
    m_discardConfirm : "Vous aller effacer toutes les modifications effectu�es. Etes vous s�r de vouloir annuler ?", 
    m_fireCustDiscardConfirmHeader : "Effacer tous les changements?", 
    m_fireResetConfirm : "Vous allez recharger ",
    m_fireCustResetConfirmHeader : "Reset Customize Rules", 
    m_fireCustSubHeader : "r�gles sp�cifiques", 
    m_fireCustDirection : "direction", 
    m_fireCustAppService : "application<br>/service",
    m_fireCustProtocol : "protocole", 
    m_fireCustSrcIpAddr : "adresse IP d'origine", 
    m_fireCustSrcMaskIpAddr : "masque d'origine", 
    m_fireCustSrcPort : "port d'origine<small><br>port or<br>plage<br>(200-300)</small>", 
    m_fireCustDestIpAddr : "adresse IP de destination", 
    m_fireCustDestMaskIpAddr : "masque de destination", 
    m_fireCustDestPort: "port de destination<small><br>port or<br>plage<br>(200-300)</small>", 
    m_fireCustInternIpAddr : "internal IP<br>Address<small><br>Single IP or an IP<br>range</small>", 
    m_fireCustInternPort : "internal<br>port<small><br>Enter single<br>port number <br>or port range<br>(200-300)</small>",
    m_fireCustAction : "action", 
    m_fireCustLog : "log",
    m_fireCustOrder : "ordre", 
    m_fireCustEnable : "activer", 
    m_fireCustDelete : "supprimer",
    m_fireCustRuleOption  : "Affichage des r�gles par direction", 
    m_fireCustApplyTip : "sauvegarder les modifications", 
    m_fireCustCancelTip : "annuler les modifications", 
    m_fireCustResetTip : "r�initialiser", 
    m_fireCustBackTip : "retour � la page pr�c�dente", 
    m_fireCustAddTip : "ajouter une nouvelle r�gle",
    m_fireCustLogEnabled : "Log is enabled",
    m_fireCustEnableEnabled : "Enable field is enabled",
    m_fireCustDeleteNotAllow : "Delete is not allowed",	

    ////////////////////////////////////////////////////////////////////;;
    // network configuration NAT/PAT;;
    m_nwNatPatHeader :  "Cette page vous permet de param�trer des r�gles de NAT/PAT."  + 
                        "Saisir un num�ro de port unique ou une plage de ports (ex: 200-300)" + 
                        "Assurez-vous de ne pas avoir filtr� ces ports dans le pare-feu.",

    ////////////////////////////////////////////////////////////////////;;
    // network configuration Routing;;
    m_nwRoutHeader : "Cette page vous permet de configurer une table de routage statique.",
    m_nwRoutDestNetwork : "r�seau de destination",
    m_nwRoutDestNwMask : "masque du r�seau de destination", 
    m_nwRoutConf : "configurer l'option", 
    m_nwRoutGwInterface : "interface de<br>l'Open Appliance", 
    m_nwRoutMetric : "m�trique",


    ///////////////////////////////////////////////////////////////////;;
    // VPN General;;
    m_vpn_BasicSettings : "param�tres de base", 
	m_vpn_auth : "authentification", 
	m_vpn_TunnelSettings : "param�tres du tunnel", 
	m_vpn_TunnelConfigMode : "mode de configuration",
	m_vpn_PresharedKey : "clef partag�e", 
	m_vpn_Confirm : "confirmer", 
    m_vpn_IKEnegPhase1 : "n�gociation IKE (Phase 1)",
    m_vpn_IKE_p1_proto : "type/protocole", 
    m_vpn_IKE_p1_ex_mode : "mode d'�change",
    m_vpn_Encrypt : "cryptage", 
    m_vpn_Diffle : "groupe Diffie Hellmann", 
    m_vpn_LifeTime : "dur�e de vie (en secondes)", 
    m_vpn_IKEphase2 : "IKE (Phase 2)", 
	m_vpn_LocalNetwork : "r�seau local", 
	m_vpn_RemoteNetwork : "r�seau distant",
	m_vpn_EZ : "facile",
	m_vpn_Expert : "expert",
    m_vpn_DFS : "groupe DFS",
	m_vpn_Users : "utilisateurs",

    ///////////////////////////////////////////////////////////////////;;
    // VPN Site 2 Site;;
    m_vpnS2S_VpnConSettings : "param�tres de connexion VPN", 

    m_vpnS2S_TunnelName : "nom du tunnel", 
	m_vpnS2S_DomainName : "adresse du site distant / nom de domaine", 
	m_vpnS2S_RemoteVPNdevice : "�quipement VPN du site distant", 

    ///////////////////////////////////////////////////////////////////;;
    // VPN Remote User Group;;
    m_vpnRUG_GroupSettings : "param�tres du groupe", 
    m_vpnRUG_ProfileName : "nom du groupe", 
    m_vpnRUG_VPNsoft : "logiciel VPN", 
    m_vpnRUG_UsrSettings : "param�tres utilisateurs", 
    m_vpnRUG_IPAlloc : "attribution d'adresses IP", 
    m_vpnRUG_InternetAccess : "acc�s internet",

    ///////////////////////////////////////////////////////////////////;;
    // VPN Remote User Add;;
    m_vpnRUadd_RemoteUserSettings : "param�tres utilisateur nomade",
    m_vpnRUadd_UserName : "nom d'utilisateur",
    m_vpnRUadd_UserPasswd : "mot de passe d'utilisateur ",
    m_vpnRUadd_VPNGroup : "groupe VPN",

	///////////////////////////////////////////////////////////////////
    // URL Filtering;;
    m_url_ezByCat : "par cat�gorie", 
    m_url_ezLegal : "l�gale",
    m_url_ezProf : "professionnelle",
    m_url_ezStrict : "stricte", 
    m_url_ezByUrl : "par URLs autoris�es",
    m_url_ezByWord : "par mots interdits dans les URLs",
    m_url_ezFilterPolicy : "politique de filtrage",
    m_url_ezFilterPolicyImp : "application de la politique de filtrage",
    m_url_ezDay : "jour",
    m_url_ezDayArray: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    m_url_ezTime : "plage horaire", 
    m_url_ezAlways : "filtrage", 
    m_url_ezOn : "activ�", 
	m_url_ezOff : "d�sactiv�", 
	m_url_ezWebSiteAddress : "adresses de sites web", 
    m_url_ezBannedKeywordInUrl : "mots interdits dans URLs", 
	m_url_expertSubscribeP1 : "Ce mode est seulement disponible avec la brique de service UTM Orange fournie par Netasq.<br/><br/>" + 
	                          "Cette mode vous permettra de :",
    m_url_ezDeleteConfirm : "Etes-vous s�r de vouloir supprimer cette ligne?", 
    m_url_ezPolicyDisableConfirm : "Vous n'avez s�lectionner aucune option de politique de filtrage. Etes-vous s�r de ne pas vouloir param�trer cette fonction ?", 
	m_url_ezBLsubUnSelected : "Merci de bien vouloir s�lectionner au moins une cat�gorie",
	m_url_ezConfigureWL : "Param�trer les URLs autoris�es", 
	m_url_ezConfigureKeyword : "Param�trer les mots interdits dans les URLs",

	m_url_expertSubscribeListItem1 : "b�n�ficier de cat�gories d'URL enrichies que vous pouvez aussi personnaliser.",
	m_url_expertSubscribeListItem2 : "appliquer une politique de filtrage sp�cifique par groupe d'utilisateurs",
	m_url_expertSubscribeListItem3 : "combiner les diff�rentes fonctions de filtrage propos�es (cat�gories / URLs autoris�es / mots interdits).",
	m_url_expertSubscribeP2 : "Pour obtenir ces services avanc�s, veuillez cliquer sur le bouton \"souscrire\" ci-dessous.",

	///////////////////////////////////////////////////////////////////";;
    // IDS/IPS;;
	m_ids_Subscribe : "Ce mode est seulement disponible avec la brique de service UTM Orange fournie par Netasq.<br/><br/>" +
	                  "Cette mode vous permettra de b�n�ficier d'une base de signatures IDS /IPS enrichie que vous pourrez aussi personnaliser.<br/><br/>",

    m_ids_ezEnable : "Pour obtenir ces services avanc�s, veuillez cliquer sur le bouton \"souscrire\" ci-dessous.",

	///////////////////////////////////////////////////////////////////";;
    // Anti-virus;;
	m_avs_Subscribe : "La protection anti-virus (pour PCs / ordinateurs portables et serveurs)  est seulement disponible avec la brique de service UTM Orange fournie par Netasq.<br/><br/>" + 
					  "Pour obtenir cette protection, veuillez cliquer sur le bouton \"souscrire\" ci-dessous.",

	///////////////////////////////////////////////////////////////////";;
    // Anti-spam;;
	m_asm_Subscribe : "La protection anti-spam (pour PCs / ordinateurs portables et serveurs)  est seulement disponible avec la brique de service UTM Orange fournie par Netasq.<br/><br/>" + 
					  "Pour obtenir cette protection, veuillez cliquer sur le bouton \"souscrire\" ci-dessous.",

	///////////////////////////////////////////////////////////////////";;
    // IM&P2P filtering;;
	m_imp2p_Subscribe : "Le filtrage messageries instantan�es et applications peer to peer est seulement disponible avec la brique de service UTM Orange fournie par Netasq.<br/><br/>" +
					    "Pour obtenir ces services avanc�s, veuillez cliquer sur le bouton \"souscrire\" ci-dessous.",

    ///////////////////////////////////////////////////////////////////;;
    // DNS;;
       m_dns_setServer : "Set DNS server",
       m_dns_autoDhcp : "automatically via DHCP", 
       m_dns_manual : "manually", 
       m_dns : "DNS", 
       m_dns_Primary : "primary", 
       m_dns_Secondary : "secondary", 
       m_dns_header : "This page enables you to configure DNS servers",

    ///////////////////////////////////////////////////////////////////;;
    // Port config;;
    m_portconf_port : "Ports", 
    m_portconf_LAN : "LAN",
    m_portconf_LAN2 : "LAN2",
    m_portconf_DMZ : "DMZ",
    m_portconf_WAN : "WAN",
	m_portconf_attach: "Affectation des ports",
	m_portconf_interface: "interface",
	
    ///////////////////////////////////////////////////////////////////;;
    // Buttons and Images;;
    m_imageDir : 'images/fr/',
	m_ok : 'ok',
	m_error : 'erreur',
	m_info : 'information',
	m_subscribe : 'Souscrire',
	m_tooltip_cancel : "supprimer les modifications", 
	m_tooltip_apply : "sauvegarder les modifications",
	m_tooltip_add : "ajouter une nouvelle ligne",
	m_tooltip_delete : "supprimer une ligne", 
	m_tooltip_back: "revenir � l'�cran pr�c�dent",
    m_remindSaveChange : "Vos modifications n'ont pas �t� sauvegard�es. Voulez-vous les sauvegarder maintenant ?",

    /////////////////////////////////////////;
    // plesae do not edit beyound dummy;
    dummy : ''
};
