/*聖典提要*/

(function(){
const abstract=[
{id:"tipitaka",zh:"巴利三藏",en:"Tree basket",pli:"Tipiṭaka",
has:"#viniya#nikaya#abhidhamma"},
{id:"viniya",zh:"律部",en:"Viniya",pli:"Viniya",has:"#patimokkha"},
{id:"nikaya",zh:"經部",pli:"Nikāya",en:"Nikaya",has:"#dn#mn#sn#an#kn"},
{id:"abhidhamma",zh:"論部",en:"Abhidhamma",pli:"Abhidhamma"},

{id:"dn",zh:"長部",en:"Long length discourses",
pli:"Dīgha Nikāya",has:"#d1#d2#d3#d4#d5#d6#d7#d8#d9#d10#d11#d12#d13#d14#d15#d16#d17#d18#d19#d20#d21#d22#d23#d24#d25#d26#d27#d28#d29#d30#d31#d32#d33#d34",
pre:``},
{id:"mn",zh:"中部",en:"Middle length discourses",
pli:"Majjhima Nikāya",has:"#mn1-50#mn51-100#mn101-152",pre:``},
{id:'mn1-50',zh:"中部1-50",en:"mn1-50",pli:"mn1-50",has:"#m1#m2#m3#m4#m5#m6#m7#m8#m9#m10#m11#m12#m13#m14#m15#m16#m17#m18#m19#m20#m21#m22#m23#m24#m25#m26#m27#m28#m29#m30#m31#m32#m33#m34#m35#m36#m37#m38#m39#m40#m41#m42#m43#m44#m45#m46#m47#m48#m49#m50"},
{id:'mn51-100',zh:"中部51-100",en:"mn51-100",pli:"mn51-100",has:"#m51#m52#m53#m54#m55#m56#m57#m58#m59#m60#m61#m62#m63#m64#m65#m66#m67#m68#m69#m70#m71#m72#m73#m74#m75#m76#m77#m78#m79#m80#m81#m82#m83#m84#m85#m86#m87#m88#m89#m90#m91#m92#m93#m94#m95#m96#m97#m98#m99#m100"},
{id:'mn101-152',zh:"中部101-152",en:"mn101-152",pli:"mn101-152",has:"#m101#m102#m103#m104#m105#m106#m107#m108#m109#m110#m111#m112#m113#m114#m115#m116#m117#m118#m119#m120#m121#m122#m123#m124#m125#m126#m127#m128#m129#m130#m131#m132#m133#m134#m135#m136#m137#m138#m139#m140#m141#m142#m143#m144#m145#m146#m147#m148#m149#m150#m151#m152"},

{id:"iddhividha",zh:"神變",en:"psychic power",pli:"iddhividha"},

{id:"kammakarana",zh:"肉刑",en:"bodily punishments",pli:"kammakāraṇā",
content:"以鞭打、以籐打或以半杖打。或截手、截足、截手足、截耳、截鼻、截耳鼻。又課以酸粥鍋刑、課以貝禿刑、課以羅睺口刑；又課以火鬘刑、燭手刑；又課以驅行刑、皮衣刑、羚羊刑；又課以鉤肉刑、錢刑、灰汁刑、閂轉刑；又課以藁踏台刑；或又以沸騰油灑之、令狗喰之、活活杙刺、以劍斷頭。"
},

{id:"10asubha",zh:"十不淨",en:"foulness",content:"1.膨胀相(uddhumātaka；the bloated)，2.青瘀相(vinīlaka；the livid)，3.脓烂相(vipubbaka；festering)，4.断坏相(vicchiddaka；the cut-up)，5.食残相(vikkhāyitaka；the gnawed)，6.散乱相(vikkhittaka；the scattered)，7.斩斫相(hatavikkhittaka；the hacked and scattered)，8.血涂相(lohitaka；the bleeding)，9.虫聚相(puḷavaka；the worm-infested)，10.骸骨相(aṭṭhika；skeleton)。"},
{id:"samphassadukkha",zh:"觸惱",content:"sītassa purakkhato uṇhassa purakkhato 受寒受暑 ḍaṃsa-makasa-vātāta-pasarīsapa-samphassehi rissamāno 虻、蚊、風、熱、蛇等之觸所惱 khuppipāsāya mīyamāno 致命飢渴"},
{id:"m1",zh:"1根本法門經",pli:"1.Mūlapariyāyasutta",en:"The Root of All Things",content:"講解「凡夫、弟子、阿拉漢、佛」的#vithi;。最深奥的經典之一。"},

{id:"m2",zh:"2一切漏經",pli:"2.Sabbāsavasutta",en:"All the Defilements",content:"七種捨漏之法，漏是生死輪迴之因"},


{id:"m3",zh:"3法嗣經",pli:"3.Dhammadāyādasutta",en:"Heirs in the Teaching",content:"佛要我們成為#dhamma;的繼承者，不為物質的繼承者。#sariputta;接著講訓練方法"},

{id:"m4",zh:"4怖駭經",pli:"Bhayabheravasutta",en:"Fear and Dread",content:"對#brh_janussoni;講森林比庫應具備之素質，佛成道之前克服恐懼的經歷"},

{id:"m5",zh:"5無穢經",pli:"Anaṅgaṇasutta",en:"Unblemished",deliver:"#sariputta-deliver",person:"#moggallana#samiti#panduputta",content:"以銅盤喻身心之穢垢，知道自己有穢垢才會努力去除。在出家生活中，由各種不如意所引起的不滿。"},

{id:"m6",zh:"6願經",pli:"Ākaṅkheyyasutta",en:"One Might Wish",content:"謹慎守戒是修行成就（定力、觀智、各種神通）之基礎。"},
{id:"m7",zh:"7布喻經",pli:"Vatthasutta",en:"The Simile of the Cloth",place:"#bahuka-river",person:"#bharadvaja",content:"以布喻心的種種雜染。#brh_sundarika-bharadvaja;認為聖河能夠滌除罪惡，佛不同意此說。"},
{id:"m8",zh:"8削減經",pli:"Sallekhasutta",en:"Self-Effacement",person:"#mahacunda",content:"四禪八定不是削減。44種削減的方法：1不為害、2離殺生、3離不與取、4梵行、5離妄語、6離兩舌、7離粗惡語、8離綺語、9不貪欲、10離瞋恚心、11八正道、20正解脫、21離惛沈睡眠、22不掉舉、23離懷疑、24不忿怒、25不怨恨、26不覆偽、27不惱害、28不嫉妒、29不慳貪、30不詐誑、31不詐瞞、32不頑迷、33不過慢、34易說、35善友、36不放逸、37有信、38知慚、39知愧、40多聞、41發心精進、42確立正念、43成就智慧、44不染於世俗，不執自見，善捨。 #savakahitesina; #rukkhamulani;"},
{id:"m9",zh:"9正見經",pli:"Sammādiṭṭhisutta",en:"Right View",deliver:"#sariputta-deliver",content:"善與不善、#cattaroahara;、#4ariyasacca;、#12samuppada;、三漏"},
{id:"m10",zh:"10念處經",pli:"Satipaṭṭhānasutta",en:"Mindfulness Meditation",content:"最重要的經典之一，導向#nibbana;的#4satipatthana;"},
{id:"m11",zh:"11獅子吼小經",pli:"Cūḷasīhanādasutta",en:"The Shorter Discourse on the Lion’s Roar",content:"佛陀的教法完全否認#atta;的存在，才會有#ariya;"},
{id:"m12",zh:"12獅子吼大經",place:"#vesali",person:"#sariputta#nagasamala",pli:"Mahāsīhanādasutta",en:"The Longer Discourse on the Lion’s Roar",content:"駁#sunakkhatta;。如來#iddhividha;、如來十力、八會、四生、五趣、行四支具足之梵行（苦行者、貧穢行者、嫌厭行者、孤獨行者），外道之苦行（節食），除#suddhavasa;之外，佛皆曾投生。佛聖弟子之智慧，雖百歲不減。"},

{id:"m13",zh:"13苦蘊大經",pli:"Mahādukkhakkhandhasutta",en:"The Longer Discourse on the Mass of Suffering",content:"外道與佛說無差異？欲之味（五欲）、欲之患（#samphassadukkha; ，財物為王、盜賊、火、水、非愛之後嗣所奪，各種論諍，#kammakarana;）、欲之出離。色之味（少女），色之患（老女、觀#10asubha;），色之出離（捨欲貪）。受之味（#jhana;乃最上無害之味）受之患（無常、苦而可變之法），受之出離（捨欲貪）"},
{id:"m14",zh:"14苦蘊小經",pli:"Cūḷadukkhakkhandhasutta",en:"The Shorter Discourse on the Mass of Suffering",person:"#mahanama#jain",content:"貪瞋痴佔據俗家人之心。欲之味（五味）、欲之患（同#m13;），#jain;教徒長站不坐。駁#nigantha; 不#sukhenasukham;。 世尊七晝夜不動不語享受樂住，#bimbisara;無法比擬"},
{id:"m15",zh:"15思量經",deliver:"#moggallana-deliver",pli:"Anumānasutta",en:"Measuring Up",place:"#bhagga#bhesakalavana",ruby:"不適於教誨之特質： 惡欲(pāpikānaṃ_icchānaṃ)、 自讚毀他(attukkaṃsako)、 被忿怒所支配(kodhābhibhūto)、 忿怒而懷怨恨(upanāhī)、 執念(abhisaṅgī)、發隨恨之語、以訶責敵對、以訶責非難、以訶責反駁、回避於他方、不同意訓諭、嫉、慳、誑、詐瞞、誑者、詐瞞、染於世俗，固執自見。"},
{id:"m16",zh:"16心荒蕪經",pli:"Cetokhilasutta",en:"Emotional Barrenness",ruby:"五種心之 荒蕪(khila)。\n對老師、法、僧伽、 學(sikkhāya)「 有疑(kaṅkhati)、 猶豫(vicikiccha)、心 不決定(nādhimuccati)、又 不專精(na_sampasīdati)彼心即不向於 熱心(ātappa)、 專念(anuyoga)、 堅忍(sātacca)、 精進(padhāna)。對於 同行者(sabrahmacārīsu) 持 反感(kupito) 、懷不快之念(anattamano)， 而受其苦(āhatacitto)，生 不利(khilajāto)之感者。」 \n五種心之束縛：於 欲(kāma)、於 身(kāya)、於 色(rūpa)。未去 意欲(chanda) ，未去 愛著(pema)，未去 渴望(pipāsa)，未 去熱惱(pariḷāha)，未去 渴愛(taṇha)\n孵蛋諭"},
{id:"m",zh:"",pli:"",en:"",content:""},
{id:"m",zh:"",pli:"",en:"",content:""},
{id:"m",zh:"",pli:"",en:"",content:""},
{id:"m",zh:"",pli:"",en:"",content:""},
{id:"m",zh:"",pli:"",en:"",content:""},
{id:"m",zh:"",pli:"",en:"",content:""},
{id:"m",zh:"",pli:"",en:"",content:""},
{id:"m",zh:"",pli:"",en:"",content:""},
{id:"sn",zh:"相應部",en:"Connected discourses",
pli:"Saṃyutta Nikāya",pre:``},
{id:"an",zh:"增支部",en:"Numerical discourses",
pli:"Aṅguttara Nikāya",pre:``},
{id:"kn",zh:"小部",en:"Lesser discourses",
pli:"khuddaka  Nikāya",pre:``},
]
	if (typeof module!=="undefined") {
		module.exports=abstract;
	} else {
		window.rawdataset.push(abstract);
	}
})();