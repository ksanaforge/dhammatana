(function(){
const savaka=[
{id:"sariputta",zh:"舍利弗",en:"sariputta"},
{id:"sariputta-deliver",zh:"舍利弗主講"},
{id:"sunakkhatta",zh:"善星",role:"謗法者"},
{id:"moggallana-deliver",zh:"目睷連主講"},
{id:"moggallana",zh:"目睷連",pli:"Moggallāna"},
{id:"mahacunda",zh:"大周那",pli:"Mahācunda"},
{id:"bharadvaja ",zh:"巴羅多瓦奢",pli:"Bhāradvāja",is:"#arahat"},
{id:"nagasamala",zh:"那伽沙蔓羅",pli:"Nāgasamāla"},
{id:"samiti",zh:"三彌提",pli:"Samīti",role:"造車"},
{id:"panduputta",zh:"盤陀子",pli:"paṇḍuputta",role:"裸身苦行者"},
{id:"bimbisara",zh:"頻毘娑羅",has:"magadha",pli:"Seniya Bimbisāra"},
{id:"mahanama",zh:"摩訶那摩",pli:"Mahānāma",is:"#sakyan"},
/* brahmin*/
{id:"brh_janussoni",zh:"生漏(婆羅門)",pli:"Jāṇussoṇi",en:"janussoni"},
{id:"brh_sundarika-bharadvaja",zh:"孫陀利伽．巴羅多瓦奢(婆羅門)"
,pli:"Sundarika-bharadvāja",ordian:"#bharadvaja"}

]
	if (typeof module!=="undefined") {
		module.exports=savaka;
	} else {
		window.rawdataset.push(savaka);
	}
})();