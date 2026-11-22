export const SERIES_LIST = ['全部', "μ's", 'Aqours', '虹咲', 'Liella!', '莲之空', '其他'];
// 合法系列名集合（不含"全部"），用于判断 character 里写的是系列名而非真实角色
export const VALID_SERIES = new Set(SERIES_LIST.filter(s => s !== '全部'));
// 系列下拉/展示用的友好文案（内部值保持不变，避免与商品数据里的 series 值不一致）
export const SERIES_LABELS = {
  '其他': '其他（非偶像角色）',
};

const CHARACTER_DATABASE = [
  // μ's（LoveLive! 第一代）
  { name: '高坂穗乃果', series: "μ's", romaji: 'Kousaka Honoka', pinyin: 'gaobansuinaiguo' },
  { name: '南小鸟', series: "μ's", romaji: 'Minami Kotori', pinyin: 'nanxiaoniao' },
  { name: '园田海未', series: "μ's", romaji: 'Sonoda Umi', pinyin: 'yuantianhaiwei' },
  { name: '西木野真姬', series: "μ's", romaji: 'Nishikino Maki', pinyin: 'ximuyezhenji' },
  { name: '星空凛', series: "μ's", romaji: 'Hoshizora Rin', pinyin: 'xingkonglin' },
  { name: '小泉花阳', series: "μ's", romaji: 'Koizumi Hanayo', pinyin: 'xiaoquanhuayang' },
  { name: '矢泽妮可', series: "μ's", romaji: 'Yazawa Nico', alias: '矢泽日香', pinyin: 'shizenike' },
  { name: '绚濑绘里', series: "μ's", romaji: 'Ayase Eli', pinyin: 'xuansaihuili' },
  { name: '东条希', series: "μ's", romaji: 'Tojo Nozomi', pinyin: 'dongtiaoxi' },

  // Aqours（LoveLive! Sunshine!!）
  { name: '高海千歌', series: 'Aqours', romaji: 'Takami Chika', pinyin: 'gaohaiqiange' },
  { name: '樱内梨子', series: 'Aqours', romaji: 'Sakurauchi Riko', pinyin: 'yingneilizi' },
  { name: '松浦果南', series: 'Aqours', romaji: 'Matsuura Kanan', pinyin: 'songpuguonan' },
  { name: '黑泽黛雅', series: 'Aqours', romaji: 'Kurosawa Dia', pinyin: 'heizedaiya' },
  { name: '渡边曜', series: 'Aqours', romaji: 'Watanabe You', pinyin: 'dubianyao' },
  { name: '津岛善子', series: 'Aqours', romaji: 'Tsushima Yoshiko', alias: '夜羽', pinyin: 'jindaoshanzi' },
  { name: '国木田花丸', series: 'Aqours', romaji: 'Kunikida Hanamaru', pinyin: 'guomutianhuawan' },
  { name: '小原鞠莉', series: 'Aqours', romaji: 'Ohara Mari', pinyin: 'xiaoyuanjuli' },
  { name: '黑泽露比', series: 'Aqours', romaji: 'Kurosawa Ruby', pinyin: 'heizelubi' },

  // 虹咲（LoveLive! 虹咲学园学园偶像同好会）
  { name: '上原步梦', series: '虹咲', romaji: 'Uehara Ayumu', pinyin: 'shangyuanbumeng' },
  { name: '中须霞', series: '虹咲', romaji: 'Nakasu Kasumi', pinyin: 'zhongxuxia' },
  { name: '樱坂雫', series: '虹咲', romaji: 'Sakurazaka Shizuku', pinyin: 'yingbanshina' },
  { name: '朝香果林', series: '虹咲', romaji: 'Asaka Karin', pinyin: 'chaoxiangguolin' },
  { name: '宫下爱', series: '虹咲', romaji: 'Miyashita Ai', pinyin: 'gongxiaai' },
  { name: '近江彼方', series: '虹咲', romaji: 'Konoe Kanata', pinyin: 'jinjiangbifang' },
  { name: '艾玛·维尔德', series: '虹咲', romaji: 'Emma Verde', pinyin: 'aimaweierde' },
  { name: '天王寺璃奈', series: '虹咲', romaji: 'Tennoji Rina', pinyin: 'tianwangsilinai' },
  { name: '三船栞子', series: '虹咲', romaji: 'Mifune Shioriko', pinyin: 'sanchuankanzi' },
  { name: '米娅·泰勒', series: '虹咲', romaji: 'Mia Taylor', pinyin: 'miyataile' },
  { name: '钟岚珠', series: '虹咲', romaji: 'Zhong Lanzhu', pinyin: 'zhonglanzhu' },

  // Liella!（LoveLive! Superstar!!）
  { name: '涩谷香音', series: 'Liella!', romaji: 'Shibuya Kanon', pinyin: 'seiguxiangyin' },
  { name: '唐可可', series: 'Liella!', romaji: 'Tang Keke', pinyin: 'tangkeke' },
  { name: '岚千砂都', series: 'Liella!', romaji: 'Arashi Chisato', pinyin: 'lanqianshadu' },
  { name: '平安名堇', series: 'Liella!', romaji: 'Heanna Sumire', pinyin: 'pinganmingjin' },
  { name: '叶月恋', series: 'Liella!', romaji: 'Hazuki Ren', pinyin: 'yeyuelian' },
  { name: '樱小路希奈子', series: 'Liella!', romaji: 'Sakurakoji Kinako', pinyin: 'yingxiaoluxinaizi' },
  { name: '米女芽衣', series: 'Liella!', romaji: 'Komeno Mei', pinyin: 'minvmeiyi' },
  { name: '若菜四季', series: 'Liella!', romaji: 'Wakana Shiki', pinyin: 'ruocaisiji' },
  { name: '鬼塚夏美', series: 'Liella!', romaji: 'Onitsuka Natsumi', pinyin: 'guizhongxiamei' },
  { name: '薇恩·玛格丽特', series: 'Liella!', romaji: 'Wien Margarete', pinyin: 'weienmagelite' },
  { name: '鬼塚冬毬', series: 'Liella!', romaji: 'Onitsuka Tomari', pinyin: 'guizhongdongqiu' },

  // 莲之空（LoveLive! 莲之空女学院学园偶像俱乐部）
  { name: '日野下花帆', series: '莲之空', romaji: 'Hinoshita Kaho', pinyin: 'riyexiahuafan' },
  { name: '村野沙耶香', series: '莲之空', romaji: 'Murano Sayaka', pinyin: 'cunyeshayexiang' },
  { name: '乙宗梢', series: '莲之空', romaji: 'Otomune Kozue', pinyin: 'yizongshao' },
  { name: '夕雾缀理', series: '莲之空', romaji: 'Yugiri Tsuzuri', pinyin: 'xiwuzhuili' },
  { name: '大泽瑠璃乃', series: '莲之空', romaji: 'Osawa Rurino', pinyin: 'dazeliulinai' },
  { name: '百生吟子', series: '莲之空', romaji: 'Momose Ginko', pinyin: 'baishengyinzi' },
  { name: '徒町小铃', series: '莲之空', romaji: 'Kachimachi Koringo', pinyin: 'tutingxiaoling' },
  { name: '安养寺姬芽', series: '莲之空', romaji: 'Anyoji Hime', pinyin: 'anyangsijiya' },
  { name: '赛拉斯·柳田', series: '莲之空', romaji: 'Seras Yanagita', pinyin: 'sailasiliutian' },
  { name: '大贺美沙知', series: '莲之空', romaji: 'Ogami Sachi', pinyin: 'dahemeishazhi' },

  // 其他（非偶像角色：家人等）
  { name: '高坂雪穗', series: '其他', romaji: 'Kousaka Yukiho', pinyin: 'gaobanxuesui' },
  { name: '矢泽心', series: '其他', romaji: 'Yazawa Kokoro', pinyin: 'shizexin' },
  { name: '高海志满', series: '其他', romaji: 'Takami Shima', pinyin: 'gaohaizhiman' },
  { name: '渡边月', series: '其他', romaji: 'Watanabe Tsuki', pinyin: 'dubianyue' },
];

// 「其他」系列角色（非偶像角色）：不计入"单人/多人"的角色人数统计
export const OTHER_SERIES_CHARACTERS = new Set(
  CHARACTER_DATABASE.filter(c => c.series === '其他').map(c => c.name)
);

// 角色组合筛选（小队/组合）。点击组合后，只显示"角色恰好由这些成员组成"的商品
// （成员顺序无关，允许混写"其他"/系列名占位）。
// 注意：不要把整代主角团（如 μ's 全员）加成组合 —— 组合名与系列名相同时会拦截系列筛选。
// 新增组合只需在此数组追加一项。
export const CHARACTER_GROUPS = [
  { name: 'Printemps', characters: ['高坂穗乃果', '南小鸟', '小泉花阳'] },
  { name: 'BiBi', characters: ['绚濑绘里', '西木野真姬', '矢泽妮可'] },
  { name: 'lily white', characters: ['园田海未', '星空凛', '东条希'] },
  { name: 'CYaRon!', characters: ['高海千歌', '渡边曜', '黑泽露比'] },
  { name: 'AZALEA', characters: ['松浦果南', '黑泽黛雅', '国木田花丸'] },
  { name: 'Guilty Kiss', characters: ['樱内梨子', '津岛善子', '小原鞠莉'] },
  { name: 'DiverDiva', characters: ['朝香果林', '宫下爱'] },
  { name: 'QU4RTZ', characters: ['上原步梦', '中须霞', '近江彼方', '艾玛·维尔德'] },
];

export const getCharacterGroupByName = (name) =>
  CHARACTER_GROUPS.find(g => g.name === name) || null;

// 判断商品的 character 是否恰好等于某组合的成员集合
export const matchCharacterGroup = (characterField, groupCharacters) => {
  const set = new Set(
    String(characterField || '')
      .split(/[,，。、]/)
      .map(s => stripBrackets(s.trim()))
      .filter(Boolean)
      .filter(n => n !== '其他' && !VALID_SERIES.has(n))
  );
  if (set.size !== groupCharacters.length) return false;
  return [...set].every(n => groupCharacters.includes(n));
};

// 剥离字符串中的括号及其内容（如 "初版(初版)" → "初版"）。
// 注：分开处理半角/全角括号，避免正则字符类混用——rolldown 解析器对字符类中的中文括号识别有 bug。
const stripBrackets = (s) => String(s || '').replace(/\([^)]*\)/g, '').replace(/（[^）]*）/g, '').trim();

export const getCharacterInfo = (name) => {
  const clean = stripBrackets(name);
  return CHARACTER_DATABASE.find(c => c.name === name || c.name === clean) || { series: '未知', romaji: '', alias: '', pinyin: '' };
};

export const getCharactersBySeries = (series) => {
  return CHARACTER_DATABASE.filter(c => series === '全部' || c.series === series)
    .map(c => c.name)
    .sort((a, b) => a.localeCompare(b, 'zh-CN'));
};

export const ALL_CHARACTERS = CHARACTER_DATABASE.map(c => c.name);
// 真实角色名集合（不含虚拟项），用于快速判断 character 中哪些词是真实角色
export const REAL_CHARACTERS = new Set(ALL_CHARACTERS);

/**
 * 判断一件商品是否"不含真实角色"（即角色筛选「其他」/ 角色数「其他(不含角色)」的共同标准）：
 * character 拆分后，全是系列名 / "其他" / 空（不含任何真实角色名）。
 */
export const isCharacterless = (characterField) => {
  const parts = String(characterField || '')
    .split(/[,，。、]/)
    .map(s => s.trim())
    .filter(Boolean);
  if (parts.length === 0) return true;
  return parts.every(p =>
    p === '其他' ||
    VALID_SERIES.has(p) ||
    VALID_SERIES.has(stripBrackets(p))
  );
};

/**
 * 统计商品的"偶像角色数"（用于单人/多人/其他(不含角色) 计数）：
 * 排除系列名、"其他"字串、空项，以及「其他」系列的非偶像角色。
 */
export const countRealCharacters = (characterField) => {
  return String(characterField || '')
    .split(/[,，。、]/)
    .map(s => s.trim())
    .filter(Boolean)
    .filter(p => {
      const clean = stripBrackets(p);
      return p !== '其他'
        && !VALID_SERIES.has(p) && !VALID_SERIES.has(clean)
        && !OTHER_SERIES_CHARACTERS.has(p) && !OTHER_SERIES_CHARACTERS.has(clean);
    })
    .length;
};

// =============== 角色/系列 显示格式化 ===============
// 将 character 字符串拆分成有序去重、过滤"其他"/系列名 的真实角色名列表（用于展示）
const extractRealCharactersForDisplay = (characterField) => {
  return [...new Set(String(characterField || '')
    .split(/[,，。、]/)
    .map(s => s.trim())
    .filter(Boolean)
    .filter(p => {
      const clean = stripBrackets(p);
      return p !== '其他' && !VALID_SERIES.has(p) && !VALID_SERIES.has(clean);
    }))];
};

// 提取角色名 + 系列名以外剩余的原始标记（"其他"字串保留时）
const extractSeriesFromCharacter = (characterField) => {
  const names = String(characterField || '')
    .split(/[,，。、]/)
    .map(s => s.trim())
    .filter(Boolean);
  const result = [];
  for (const n of names) {
    const clean = stripBrackets(n);
    if (VALID_SERIES.has(n) || VALID_SERIES.has(clean)) result.push(VALID_SERIES.has(clean) ? clean : n);
    // "其他"字串不算系列，跳过
  }
  return [...new Set(result)];
};

/**
 * 卡片/弹窗/分享图用：展示"角色"标签的文字
 * - 无真实角色（characterless）: 返回系列名（从 series/computed 取，空时自动从 character 里的系列标记兜底）
 * - 有真实角色: 返回 "角色A 等N人"（forCardCompact=true）或 "A | B | C"（forCardCompact=false）
 */
export const formatCharacterDisplay = (characterField, seriesField, opts = {}) => {
  const { forCardCompact = false, separator = ' | ' } = opts;
  const realChars = extractRealCharactersForDisplay(characterField);
  if (realChars.length > 0) {
    if (forCardCompact) {
      if (realChars.length === 1) return realChars[0];
      return `${realChars[0]} 等${realChars.length}人`;
    }
    return realChars.join(separator);
  }
  // 无真实角色 → 显示系列名（直接显示名称本身，不出现"系列限定"/"系列"字样）
  let seriesList = [];
  if (seriesField) seriesList = String(seriesField).split(/[,，]/).map(s => s.trim()).filter(Boolean);
  if (seriesList.length === 0) seriesList = extractSeriesFromCharacter(characterField);
  // 排除 "未知" —— 那是 series 计算用的占位值，不适合展示
  seriesList = seriesList.filter(s => s !== '未知');
  if (seriesList.length === 0) {
    // 最后兜底：character 里有字的原样输出（通常是 "其他"，或其他手写标记）；完全没字才留空
    const rawParts = String(characterField || '').split(/[,，。、]/).map(s => s.trim()).filter(Boolean);
    return rawParts.join(separator) || '';
  }
  if (forCardCompact) {
    if (seriesList.length === 1) return seriesList[0];
    // 超过 2 个系列就用 "/" 紧凑拼接，避免 "等N人" / "等N系列" 语义混淆
    return seriesList.length <= 2 ? seriesList.join('/') : `${seriesList[0]}等${seriesList.length}`;
  }
  return seriesList.join(separator);
};

/** 根据输入匹配角色，支持中文名、拼音、英文romaji、别名 */
export const searchCharacters = (keyword) => {
  if (!keyword || !keyword.trim()) return [];
  const kw = keyword.toLowerCase().trim();
  return CHARACTER_DATABASE
    .filter(c => {
      if (c.name.includes(kw)) return true;
      if (c.pinyin && c.pinyin.toLowerCase().includes(kw)) return true;
      if (c.romaji && c.romaji.toLowerCase().includes(kw)) return true;
      if (c.alias && c.alias.toLowerCase().includes(kw)) return true;
      // 拼音首字母匹配 (e.g. "gbnhg" for "高坂穗乃果")
      if (c.pinyin) {
        const initials = c.pinyin.replace(/[^a-z]/g, '').replace(/([a-z])[a-z]*/g, '$1');
        if (initials.includes(kw)) return true;
      }
      return false;
    })
    .map(c => c.name)
    .slice(0, 8);
};
