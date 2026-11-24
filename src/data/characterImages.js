// 角色头像
// - μ's / Aqours：官方 All Stars 全球站方形头像（420×420）
// - 虹咲 / Liella! / 莲之空 / 蓝鸟：lovelive-anime.jp 官方头肩图，已本地化到 src/assets/characters/（本地图优先，自动覆盖下面的远程图源）
// - 其他：萌娘百科 320px 缩略图（配合头像放大裁切）
// 注：虹咲在 OFFICIAL 中仍保留 All Stars 方图作为兜底，仅当本地图缺失时才会用到
const AS_BASE = 'https://lovelive-as-global.com/assets/img/member';
const MOEGIRL_BASE = 'https://storage.moegirl.org.cn';

// 本地自定义头像：把图片放进 src/assets/characters/，文件名 = 角色名（如 高桥波尔卡.png）
// 同名本地图优先于下面的远程图源
const LOCAL_AVATARS = import.meta.glob('../assets/characters/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});
const LOCAL_BY_NAME = {};
Object.entries(LOCAL_AVATARS).forEach(([path, url]) => {
  const fileName = path.split('/').pop() || '';
  LOCAL_BY_NAME[fileName.replace(/\.[^.]+$/, '')] = url;
});
const LOCAL_URLS = new Set(Object.values(LOCAL_BY_NAME));

const OFFICIAL = {
  // μ's
  '高坂穗乃果': `${AS_BASE}/ms/name_honoka_icon1.png`,
  '绚濑绘里': `${AS_BASE}/ms/name_eli_icon1.png`,
  '南小鸟': `${AS_BASE}/ms/name_kotori_icon1.png`,
  '园田海未': `${AS_BASE}/ms/name_umi_icon1.png`,
  '星空凛': `${AS_BASE}/ms/name_rin_icon1.png`,
  '西木野真姬': `${AS_BASE}/ms/name_maki_icon1.png`,
  '东条希': `${AS_BASE}/ms/name_nozomi_icon1.png`,
  '小泉花阳': `${AS_BASE}/ms/name_hanayo_icon1.png`,
  '矢泽妮可': `${AS_BASE}/ms/name_nico_icon1.png`,

  // Aqours
  '高海千歌': `${AS_BASE}/aqours/name_chika_icon1.png`,
  '樱内梨子': `${AS_BASE}/aqours/name_riko_icon1.png`,
  '松浦果南': `${AS_BASE}/aqours/name_kanan_icon1.png`,
  '黑泽黛雅': `${AS_BASE}/aqours/name_dia_icon1.png`,
  '渡边曜': `${AS_BASE}/aqours/name_you_icon1.png`,
  '津岛善子': `${AS_BASE}/aqours/name_yoshiko_icon1.png`,
  '国木田花丸': `${AS_BASE}/aqours/name_hanamaru_icon1.png`,
  '小原鞠莉': `${AS_BASE}/aqours/name_mari_icon1.png`,
  '黑泽露比': `${AS_BASE}/aqours/name_ruby_icon1.png`,

  // 虹咲
  '上原步梦': `${AS_BASE}/nijigasaki/name_ayumu_icon1.png`,
  '中须霞': `${AS_BASE}/nijigasaki/name_kasumi_icon1.png`,
  '樱坂雫': `${AS_BASE}/nijigasaki/name_shizuku_icon1.png`,
  '朝香果林': `${AS_BASE}/nijigasaki/name_karin_icon1.png`,
  '宫下爱': `${AS_BASE}/nijigasaki/name_ai_icon1.png`,
  '近江彼方': `${AS_BASE}/nijigasaki/name_kanata_icon1.png`,
  '优木雪菜': `${AS_BASE}/nijigasaki/name_setsuna_icon1.png`,
  '艾玛·维尔德': `${AS_BASE}/nijigasaki/name_verde_icon1.png`,
  '天王寺璃奈': `${AS_BASE}/nijigasaki/name_rina_icon1.png`,
  '三船栞子': `${AS_BASE}/nijigasaki/name_shioriko_icon1.png`,
  '米娅·泰勒': `${AS_BASE}/nijigasaki/name_mia_icon1.png`,
  '钟岚珠': `${AS_BASE}/nijigasaki/name_lanzhu_icon1.png`,
};

const MOEGIRL_PATHS = {
  // Liella!
  '涩谷香音': '/moegirl/commons/3/34/%E6%B6%A9%E8%B0%B7%E9%A6%99%E9%9F%B3_%E7%AB%8B%E7%BB%98.png',
  '唐可可': '/moegirl/commons/0/04/%E5%94%90%E5%8F%AF%E5%8F%AF_%E7%AB%8B%E7%BB%98.png',
  '岚千砂都': '/moegirl/commons/f/f0/%E5%B2%9A%E5%8D%83%E7%A0%82%E9%83%BD_%E7%AB%8B%E7%BB%98.png',
  '平安名堇': '/moegirl/commons/7/79/%E5%B9%B3%E5%AE%89%E5%90%8D%E5%A0%87_%E7%AB%8B%E7%BB%98.png',
  '叶月恋': '/moegirl/commons/d/df/%E5%8F%B6%E6%9C%88%E6%81%8B_%E7%AB%8B%E7%BB%98.png',
  '樱小路希奈子': '/moegirl/commons/6/67/%E6%A8%B1%E5%B0%8F%E8%B7%AF%E6%A0%91%E5%A5%88%E5%AD%90_%E7%AB%8B%E7%BB%98.png',
  '米女芽衣': '/moegirl/commons/8/8b/%E7%B1%B3%E5%A5%B3%E8%8A%BD%E8%A1%A3_%E7%AB%8B%E7%BB%98.png',
  '若菜四季': '/moegirl/commons/3/36/%E8%8B%A5%E8%8F%9C%E5%9B%9B%E5%AD%A3_%E7%AB%8B%E7%BB%98.png',
  '鬼塚夏美': '/moegirl/commons/6/68/%E9%AC%BC%E5%A1%9A%E5%A4%8F%E7%BE%8E_%E7%AB%8B%E7%BB%98.png',
  '薇恩·玛格丽特': '/moegirl/commons/a/ab/%E8%96%87%E6%81%A9%C2%B7%E7%8E%9B%E6%A0%BC%E4%B8%BD%E7%89%B9_%E7%AB%8B%E7%BB%98.png',
  '鬼塚冬毬': '/moegirl/commons/5/55/%E9%AC%BC%E5%86%A2%E5%86%AC%E6%AF%AC_%E7%AB%8B%E7%BB%98.png',

  // 莲之空
  '日野下花帆': '/moegirl/commons/9/90/Kaho_img2.png',
  '村野沙耶香': '/moegirl/commons/1/14/Muranosayaka_img2.png',
  '乙宗梢': '/moegirl/commons/f/f1/Kozue_img1.png',
  '夕雾缀理': '/moegirl/commons/a/af/Tsuzuri_img1.png',
  '大泽瑠璃乃': '/moegirl/commons/3/3e/Rurino_img2.png',
  '百生吟子': '/moegirl/commons/1/17/Ginko_img1.png',
  '徒町小铃': '/moegirl/commons/f/fe/Kosuzu_img1.png',
  '安养寺姬芽': '/moegirl/commons/7/79/Hime_img1.png',
  '大贺美沙知': '/moegirl/commons/a/a3/%E5%A4%A7%E8%B4%BA%E7%BE%8E%E6%B2%99%E7%9F%A5.jpg',
  '锦上莓果': '/moegirl/commons/4/4d/Maika_img.png',
  '令泽葵': '/moegirl/commons/2/2a/Aoi_img.png',
  '紫轮美音': '/moegirl/commons/4/4d/Mion_img.png',
  '桂城泉': '/moegirl/commons/3/39/Izumi_img_105.png',

  // 人生不易部（IKIZULIVE! LOVELIVE! BLUEBIRD）
  '高桥波尔卡': '/moegirl/commons/f/ff/Takahashi_Polka.png',
  '春宫悠可里': '/moegirl/commons/1/15/Harumiya_Yukuri.png',
  '麻布麻衣': '/moegirl/commons/e/e5/Azabu_Mai.png',
  '五桐玲': '/moegirl/commons/e/e1/Goto_Akira.png',
  '驹形花火': '/moegirl/commons/9/95/Komagata_Hanabi.png',
  '金泽奇迹': '/moegirl/commons/1/1d/Kanazawa_Miracle.png',
  '此花辉夜': '/moegirl/commons/5/53/Konohana_Aurora.png',
  '山田真绿': '/moegirl/commons/e/ed/Yamada_Midori.png',
  '佐佐木翔音': '/moegirl/commons/c/c1/Sasaki_Shion.png',

  // 其他
  '高坂雪穗': '/moegirl/commons/b/bc/Lovelive_KousakaYukihou.jpg',
  '矢泽心': '/moegirl/commons/0/06/Cocoro.jpg',
  '高海志满': '/moegirl/commons/f/fb/%E9%AB%98%E6%B5%B7%E5%BF%97%E6%BA%80.png',
  '渡边月': '/moegirl/commons/0/0c/%E6%9B%9C%E5%92%8C%E6%9C%88.jpeg',
};

/** 获取角色圆形头像地址；未收录时返回空字符串（由 UI 用首字兜底） */
export const getCharacterImage = (name) => {
  if (LOCAL_BY_NAME[name]) return LOCAL_BY_NAME[name];
  if (OFFICIAL[name]) return OFFICIAL[name];
  const path = MOEGIRL_PATHS[name];
  return path ? `${MOEGIRL_BASE}${path}!/fw/320` : '';
};

/** 是否已是头肩构图（本地自定义图 / 官方方图），这类图无需再放大裁切 */
export const isPreCroppedAvatar = (src) =>
  Boolean(src && (LOCAL_URLS.has(src) || src.includes('lovelive-as-global.com')));
