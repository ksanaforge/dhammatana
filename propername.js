(function(){
const propername=[
{id:"sanjiva",zh:"等活地獄",en:"-",pli:"Sañjiva",def:"A Niraya. Beings born there are subjected to numerous tortures, but contrive to survive them; hence the name. J.v.266, 270. PPND 想辦法從種種酷刑中存活故得名"},
{id:"kalasutta",zh:"黑繩地獄",en:"-",pli:"（kāḷasutta）、",def:"One of the principal hells (J.v.266, 267, 268). Beings born there are placed on a floor of heated iron, marked with a black thread made red hot, and then cut into pieces along the markings (J.v.270).。PPND 在鐵地板上，被熾紅的線按照標示切割成塊。"},
{id:"sanghata",zh:"眾合地獄",en:"-",pli:"Sanghāta",def:"It is so called because massive rocks of heated iron meet and crush the victims. J.v.256, 270.。"},
{id:"roruva",zh:"號叫地獄",en:"-",pli:"roruva",def:"Beings were presumably born there as a result of casting aspersions on the Dhamma (S.i.30) miserliness (e.g., J.iii.299) adultery (J.vi.237)Sometimes (J.v.266) two Roruvas are mentioned which the scholiast (J.v.271) explains as being Jālaroruva and Dhūmaroruva; in the first beings have red hot flames blown into their bodies, and in the second, noxious gases (khāradhūma).Buddhaghosa says (SA.i.64) that Jālaroruva is another name for Avīci, and that the Niraya is so called because beings shout while being burnt there (aggimhi jalante punappunam ravanti).。PPND 推測是謗法者投生處，吝嗇、通奸有時也會。學者稱有兩種，羅網號叫Jālaroruva和毒煙號叫Dhūmaroruva，第一種被熱焰吹燒。覺者尊者認為jalaroruva 是阿鼻地獄的別名"},
{id:"maharoruva",zh:"大號叫地獄",en:"-",pli:"Mahāroruva",def:"S.i.92; DhA.iv.79.。"},
{id:"tapana",zh:"燃燒地獄",en:"-",pli:"tapana",def:"Beings born there are pierced by heated stakes and they remain transfixed, motionless. J.v.266, 271, 275.。PPND 被熱矛釘住動不了"},
{id:"mahatapana",zh:"大燃燒地獄",en:"-",pli:"mahātāpana",def:"-"},
{id:"avici",zh:"阿鼻地獄|無間地獄",has:"#anantariya",en:"-",pli:"avīci",def:"One of the eight great purgatories (mahāniraya) (J.v.266). It is ten thousand leagues in extent and forms part of a cakkavāla (SnA.ii.443).",def:"當中阿鼻地獄又是最下層及為恐怖在每一個大地獄的四方各有小，因此一共百三十六  個地獄。 個地獄。 個地獄。概要精解pg180"},

{id:"tiracchanayoni",zh:"畜生道",def:"雖然畜道的痛苦並不像地獄那麼悲慘，但由於其處的痛苦還是遠超越快樂，以及在並沒有適合的時機造善業，所以把它歸納於惡趣地。",en:"the animal kingdom",pli:"tiracchānayoni"},
{id:"pettivisaya",zh:"餓鬼道",def:"時常受到飢餓、口渴及其他病痛。餓鬼並沒有自己的世界。他們與人類住在同一個世界，如在森林、沼澤墳場裡等。一般上人們並不能看到他們，除非把自己顯現出來給人看。天眼通的人也能看到他們。",en:"the sphere of petas",pli:"pettivisaya"},
{id:"asurakaya",zh:"阿修羅道",def:"阿修羅包括了幾種有情。諸論師指出，在惡趣地裡的阿修羅是與餓鬼類似長期遭受折磨的有情。應區別惡趣地的阿修羅和在三十天與諸神鬥爭，後者是屬於三十天的神。後者是屬於三十天的神。",en:"the host of asura",pli:"asurakaya"},

{id:"catummaharajika",zh:"四大王天",def:"壽命500天年。約人間九百萬年。Dhatarattha of the East, Virūlhaka of the South, Virūpakkha of the West, and Vessavaṇa of the North (D.ii.207f; iii.194f).PPND 東方持國天王，統領#gandhabba;。南方增長天王，統領#kumbhanda;。西方廣目天王，統領諸#naga;北方多聞天王毗沙門，統領#yakkha;眾",en:"realm of the four great kings",pli:"cātummahārājika"},
{id:"tavatimsa",zh:"三十三天|帝釋天",def:"壽命1000天年。約人間三千六百萬年。古時有三十位把自己的生命奉獻於 成為他人的福利善男子投生處。該界的大王是帝釋（Sakka），亦名為「因陀羅」 （ Indra），住在該界首府「善見」（Sudassana）裡的最勝殿Vejayanta",en:"realm of the thirty-three gods",pli:"tāvatiṃsa"},
{id:"sakka",zh:"帝釋",en:"-",pli:"Sakka"},

{id:"yama",zh:"夜摩天",def:"2000天年，約人間一億四千四百萬年。",en:"realm of the yāma Gods",pli:"yāmā"},
{id:"tusita",zh:"兜率天",def:"4000天年，約人間五億七千六百萬年。",en:"delightful realm",pli:"tusitā"},
{id:"nimmanarati",zh:"化樂天",def:"8000天年，約人間二十三億四百萬年。",en:"realm of gods who rejoice in their own creation",pli:"nimmānarati"},
{id:"paranimmitavasavatti",zh:"他化自在天",def:"16000天年，約人間九十二億一千六百萬年。",en:"real of gods who lord over the creations of others",pli:"paranimmitavasavatti"},

{id:"gandhabba",zh:"乾達婆",def:"以香氣為滋養的神,服侍帝釋的樂神之一。It is a disgrace for a monk to be born in the Gandhabba-world (D.ii.221, 251, 273f). PPND。比庫投生為乾達婆是一種恥辱。",pli:"gandhabba"},
{id:"kumbhanda",zh:"鳩槃荼",def:"睪丸有如甕形的夜叉",stem:"陰囊（aṇḍa）狀如甕形（kumbha），故得此名",pli:"kumbhaṇḍa"},

{id:"yakkha",zh:"夜叉",def:"非人的一種，是地位比諸天低但又具有諸天威力的一類鬼神，為北方韋沙瓦納天王所統領。亞卡的種類很多，有些是兇殘暴戾、能傷害人類的惡鬼，有些是依止山川樹木而居的樹神、地居天，還有些則是如有大福德、大威勢的諸天。在《中部·小愛行盡經》中，甚至把沙咖天帝也稱為亞卡。漢傳佛教依梵語yakùa音譯為夜叉、藥叉等。",en:"kind of ghost,goblin. or ogre",pli:"yakkha"},
{id:"naga",zh:"龍",def:"身長無足、類似蛇的有情類，多居住在江河湖海中，有呼云喚雨之神力",en:"dragon",pli:"nāga"},
{id:"pathamajjhanabhumi",zh:"初禪天",en:"first jhana plane",pli:"paṭhamajjhānabhūmi",has:"#brahmaparisajja#brahmapurohita#mahabrahma"},
{id:"brahmaparisajja",zh:"梵衆天",def:"1/3 中劫",en:"brahma's retinue",pli:"brahmapārisajja"},
{id:"brahmapurohita",zh:"梵輔天",def:"1/2 中劫",en:"brahma ministers",pli:"brahmapurohita"},
{id:"mahabrahma",zh:"大梵天",def:"1中劫",en:"maha brahma",pli:"mahābrahmā"},
{id:"dutiyajjhanabhumi",zh:"二禪天",en:"second jhana plane",pli:"dutiyajjhānabhūmi",has:"#parittabha#appamanabha#abhassara"},
{id:"parittabha",zh:"少光天",def:"2#mahakappa;",en:"minor lustre",pli:"parittābha"},
{id:"appamanabha",zh:"無量光天",def:"4#mahakappa;",en:"infinite lustre",pli:"appamāṇābha"},
{id:"abhassara",zh:"光音天",def:"8#mahakappa;",en:"radiant lustre",pli:"ābhassara"},   

{id:"tatiyajjhanabhumi",zh:"三禪天",en:"third jhana plane",pli:"tatiyajjhānabhūmi",has:"#parittasubha#appamanasubha#subhakinha"},
{id:"parittasubha",zh:"少淨天",def:"16#mahakappa;",en:"minor aura",pli:"parittasubha"},
{id:"appamanasubha",zh:"無量淨天",def:"32#mahakappa;",en:"infinite aura",pli:"appamāṇasubha"},
{id:"subhakinha",zh:"遍淨天",def:"64#mahakappa;",en:"steady aura",pli:"subhakiṇha"},

{id:"catutthajjhanabhumi",zh:"四禪天",en:"fourth jhana plane",pli:"catukkhajjhānabhūmi",has:"#vehapphala#asannasatta#suddhavasa"},

{id:"vehapphala",zh:"廣果天 ",def:"500#mahakappa;",en:"great reward",pli:"vehapphala"},
{id:"asannasatta",zh:"無想有情天",def:"500#mahakappa;",en:"non-percipient beings",pli:"asaññasattā"},
{id:"suddhavasa",zh:"5淨居天",has:"#aviha#atappa#sudassa#sudassi#akanittha",def:"限三果聖者投生",en:"pure abodes",pli:"suddhāvāsa"},
{id:"aviha",zh:"無煩天",def:"1000#mahakappa;",en:"durable realm",pli:"avihā"},
{id:"atappa",zh:"無熱天",def:"2000#mahakappa;",en:"serene realm",pli:"atappā"},
{id:"sudassa",zh:"善現天",def:"4000#mahakappa;",en:"beautiful realm",pli:"sudassā"},
{id:"sudassi",zh:"善見天",def:"8000#mahakappa;",en:"clear sighted realm",pli:"sudassī"},
{id:"akanittha",zh:"色究竟天",def:"16000#mahakappa;",en:"highest realm",pli:"akaniṭṭhā"},

{id:"mahakappa",zh:"大劫",def:"100年用絲布拭7由旬寬高的花岡岩（S.15:5/ii, 181-82)",en:"great aeon",pli:"māhakappa"},

{id:"akasanancayatanabhumi",zh:"空無邊處",def:"20000#mahakappa;",en:"realm of infinite space",pli:"ākasānañcāyatanabhūmi"},
{id:"vinnanancayatanabhumi",zh:"識無邊處",def:"40000#mahakappa;",en:"realm of infinite consciousness",pli:"viññāṇañcāyatanabhūmi"},
{id:"akincannayatanabhumi",zh:"無所有處",def:"60000#mahakappa;",en:"realm of nothingness",pli:"ākincaññāyatanabhūmi"},
{id:"nevasannanasannayatanabhumi",zh:"非想非非想處",def:"84000#mahakappa;",en:"real of neither perception nor non-perception",pli:"ākincaññāyatanabhūmi"},

]
	if (typeof module!=="undefined") {
		module.exports=propername;
	} else {
		window.rawdataset.push(propername);
	}
})();