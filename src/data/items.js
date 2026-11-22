import { getCharacterInfo, VALID_SERIES } from './characters.js';

// 系列名也可作为角色标记填入 character：商品无具体角色时（原为"其他"），
// 可改填系列名（如"Aqours"），使该商品在系列筛选中归属于该系列。
// VALID_SERIES = SERIES_LIST 去掉"全部"（已在 characters.js 中定义，此处直接复用）
const SERIES_MARKERS = VALID_SERIES;

/**
 * 可选角色名（方便复制粘贴）：
 *   μ's: 高坂穗乃果 南小鸟 园田海未 西木野真姬 星空凛 小泉花阳 矢泽妮可 绚濑绘里 东条希
 *   Aqours: 高海千歌 樱内梨子 松浦果南 黑泽黛雅 渡边曜 津岛善子 国木田花丸 小原鞠莉 黑泽露比
 *   虹咲: 上原步梦 中须霞 樱坂雫 朝香果林 宫下爱 近江彼方 艾玛·维尔德 天王寺璃奈 三船栞子 米娅·泰勒 钟岚珠
 *   Liella!: 涩谷香音 唐可可 岚千砂都 平安名堇 叶月恋 樱小路希奈子 米女芽衣 若菜四季 鬼塚夏美 薇恩·玛格丽特 鬼塚冬毬
 *   莲之空: 日野下花帆 村野沙耶香 乙宗梢 夕雾缀理 大泽瑠璃乃 百生吟子 徒町小铃 安养寺姬芽 赛拉斯·柳田 大贺美沙知
 *   其他: 高坂雪穗 矢泽心 高海志满 渡边月
 *   无具体角色时可填系列名（μ's/Aqours/虹咲/Liella!/莲之空/其他），商品将归属该系列
 */

export const BASE_ITEMS = [];
export const TYPES = ["全部", "徽章", "透卡","色纸","贴纸","相卡","明信片","票根","台机卡片","卡片","杯垫","餐垫","立牌","亚克力砖","文具", "书籍","玩偶", "手办", "挂件", "服饰", "挂画", "海报", "画板", "饮食", "生活","影音", "其他"];
export const STATUS_OPTIONS = ["全部", "已拥有", "想要"];

// 种类字段支持多值（用 /、、、,、，分隔），返回去重后的种类列表
export const splitTypes = (type) => {
  if (!type) return [];
  return [...new Set(String(type).split(/[\/、,，]/).map(t => t.trim()).filter(Boolean))];
};

// 从商品名自动识别商品系列（如"格言Q版方形贴纸"→格言、"VV联动5弹"→VV联动5弹、"剧场版《...》"→剧场版、"(1弹)豆豆眼Q版 徽章"→1弹）
export const extractProductSeries = (name) => {
  const n = String(name || '').trim();
  if (!n) return '';
  const m1 = n.match(/^(.+?)系列/);
  if (m1) return m1[1].trim();
  if (/^剧场版/.test(n)) return '剧场版';
  const m2 = n.match(/^(VV联动\d+弹)/);
  if (m2) return m2[1];
  const m3 = n.match(/[（(]?第?(\d+)弹[）)]?/);
  if (m3) return `${m3[1]}弹`;
  return '';
};

export const getItemsWithMeta = () => {
  return BASE_ITEMS
    .map(item => {
      const chars = item.character.split(/[,，]/);
      const infos = chars.map(name => {
        const t = name.trim();
        const info = getCharacterInfo(t);
        // 填写的角色名是系列名时（如"初代"），作为系列标记使用
        const clean = t.replace(/[\(（][^\)）]*[\)）]/, '').trim();
        if (info.series === '未知' && SERIES_MARKERS.has(clean)) return { ...info, series: clean };
        return info;
      });
      const series = [...new Set(infos.map(i => i.series))].join(', ');
      const characterRomaji = infos.map(i => i.romaji || '').filter(Boolean).join(' ');
      const characterAlias = infos.map(i => i.alias || '').filter(Boolean).join(' ');
      return {
        ...item,
        series: series || '未知',
        productSeries: [item.productSeries || extractProductSeries(item.name)].flat().filter(Boolean),
        characterRomaji,
        characterAlias,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
};
