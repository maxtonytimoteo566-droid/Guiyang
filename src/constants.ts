import { Attraction, Food, MetroLine } from './types';

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'jiaxiu',
    name: '甲秀楼',
    description: '贵阳的标志性建筑，始建于明代，屹立于南明河中的巨石之上，夜景尤为迷人。',
    imageUrl: 'https://picsum.photos/seed/jiaxiu/800/600',
    tags: ['古建筑', '地标', '夜景']
  },
  {
    id: 'qianling',
    name: '黔灵山公园',
    description: '国家4A级旅游景区，以山幽、林密、泉清、气爽著称，山上还有成群的野生猕猴。',
    imageUrl: 'https://picsum.photos/seed/qianling/800/600',
    tags: ['自然风光', '动物', '爬山']
  },
  {
    id: 'qingyan',
    name: '青岩古镇',
    description: '贵州四大古镇之一，明清风格的古建筑保存完好，古镇内的青石板路极具韵味。',
    imageUrl: 'https://picsum.photos/seed/qingyan/800/600',
    tags: ['古镇', '文化', '美食']
  },
  {
    id: 'huaxi',
    name: '花溪夜郎谷',
    description: '由艺术家宋培伦老先生耗时二十余年打造的石头城堡，充满了神秘的夜郎文化气息。',
    imageUrl: 'https://picsum.photos/seed/yelang/800/600',
    tags: ['艺术', '奇观', '摄影']
  }
];

export const FOODS: Food[] = [
  {
    id: 'suantangyu',
    name: '凯里酸汤鱼',
    description: '贵州的灵魂美食，以野生西红柿发酵而成的红酸汤为底，鱼肉鲜嫩，酸辣开胃。',
    imageUrl: 'https://picsum.photos/seed/suantangyu/800/600',
    priceRange: '¥¥'
  },
  {
    id: 'siwawa',
    name: '丝娃娃',
    description: '贵阳特色小吃，用小面皮包裹各种蔬菜丝，再注入特制的酸汤，口感丰富清爽。',
    imageUrl: 'https://picsum.photos/seed/siwawa/800/600',
    priceRange: '¥'
  },
  {
    id: 'changwangmian',
    name: '肠旺面',
    description: '以肥肠和血旺为主要配料，面条劲道，汤色红亮，是贵阳人最爱的早餐之一。',
    imageUrl: 'https://picsum.photos/seed/changwangmian/800/600',
    priceRange: '¥'
  },
  {
    id: 'lianaitoufu',
    name: '恋爱豆腐果',
    description: '切开的烤豆腐中塞入折耳根、辣椒等调料，外焦里嫩，香辣可口。',
    imageUrl: 'https://picsum.photos/seed/tofu/800/600',
    priceRange: '¥'
  }
];

export const METRO_LINES: MetroLine[] = [
  {
    id: 'line1',
    name: '地铁1号线',
    color: '#0072BC',
    description: '连接贵阳北站与贵阳火车站，贯穿南北，是游客最常用的线路。',
    stations: ['窦官', '下麦西', '林城西路', '观山湖公园', '贵阳北站', '雅关', '北京路', '中山西路', '河滨公园', '贵阳火车站', '望城坡', '小孟工业园']
  },
  {
    id: 'line2',
    name: '地铁2号线',
    color: '#F15A24',
    description: '连接龙洞堡机场与市中心，方便乘机旅客快速抵达市区。',
    stations: ['白云北路', '泉湖公园', '金阳医院', '观山西路', '延安西路', '喷水池', '阳明祠', '森林公园', '龙洞堡机场', '中兴路']
  },
  {
    id: 'line3',
    name: '地铁3号线',
    color: '#8B5CF6',
    description: '连接花溪大学城与新添寨，覆盖了众多的教育与生活区域。',
    stations: ['洛湾', '东风镇', '师范学院', '大营坡', '黔灵山公园', '延安南路', '中曹司', '花溪公园', '贵州大学', '桐木岭']
  }
];
