import { DOUDIZHU_GAME_HTML, TIAOYITIAO_GAME_HTML, TRUTH_OR_DARE_GAME_HTML } from "./game-builtin-html";
import type { GameTemplate } from "./game-types";

const now = "2026-06-06T00:00:00.000Z";

const EMPTY_PICKER_HTML = "<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"></head><body></body></html>";

function template(input: Omit<GameTemplate, "playNote" | "authorId" | "authorName" | "authorAvatar" | "source" | "version" | "purchaseCount" | "rating" | "likeCount" | "favoriteCount" | "commentCount" | "createdAt" | "updatedAt"> & Partial<Pick<GameTemplate, "playNote" | "version">>): GameTemplate {
  return {
    ...input,
    playNote: input.playNote || "系统内置小游戏，可直接安装试玩。",
    authorId: "builtin",
    authorName: "系统内置",
    authorAvatar: "",
    source: "builtin",
    version: input.version ?? 1,
    purchaseCount: 0,
    rating: 5,
    likeCount: 0,
    favoriteCount: 0,
    commentCount: 0,
    createdAt: now,
    updatedAt: now,
  };
}

export const GAME_BUILTIN_TEMPLATES: GameTemplate[] = [
  template({
    id: "builtin_game_doudizhu",
    title: "欢乐斗地主",
    codeName: "DOUDIZHU",
    subtitle: "AI 角色陪玩的经典牌局",
    synopsis: "选择小手机里的角色一起入座，叫地主、出牌、记牌，在一局斗地主里和角色自然互动。",
    playNote: "内置斗地主小游戏。游戏自带选人页，会读取可选角色、保存牌局进度，并可在关键节点写入小游戏记忆。",
    coverImage: "/game-covers/doudizhu.webp",
    tags: ["休闲", "互动"],
    roleSlots: [],
    pickerHtml: EMPTY_PICKER_HTML,
    gameHtml: DOUDIZHU_GAME_HTML,
    allowExternalControl: true,
  }),
  template({
    id: "builtin_game_tiaoyitiao",
    title: "跳一跳 · 对决",
    codeName: "HOP_HOP_DUEL",
    subtitle: "和 TA 轮流跳方块，比谁落点更稳",
    synopsis: "选一位角色当对手，在同一排方块上轮流蓄力起跳。简单、困难、地狱三档难度，跳到方块中央额外加分，跳空掉一条命。对手的准头按角色人设来定，但再强也会手滑。一局结束后，结果会写进角色的近期记忆。",
    playNote: "按住蓄力、松手起跳。可在开局选择简单 / 困难 / 地狱三档，并挑选自己的造型。对手会按人设决定水平，中途会开口吐槽或得意。每局结束写入角色记忆。",
    coverImage: "",
    tags: ["休闲", "互动"],
    roleSlots: [],
    pickerHtml: EMPTY_PICKER_HTML,
    gameHtml: TIAOYITIAO_GAME_HTML,
    allowExternalControl: true,
  }),
  template({
    id: "builtin_game_truth_or_dare",
    title: "真心话大冒险",
    codeName: "TRUTH_OR_DARE",
    subtitle: "夜色派对问答互动",
    synopsis: "选择几位角色围坐一桌，让真心话和大冒险推动暧昧、玩笑、试探和临场反应。",
    playNote: "内置真心话大冒险小游戏。游戏自带选人页，会调用角色轻量包、生成题目和回应，并可记录本局重要事件。",
    coverImage: "/game-covers/truth-or-dare.webp",
    tags: ["剧情", "互动"],
    roleSlots: [],
    pickerHtml: EMPTY_PICKER_HTML,
    gameHtml: TRUTH_OR_DARE_GAME_HTML,
    allowExternalControl: true,
  }),
];

export function getGameBuiltinTemplate(id: string): GameTemplate | undefined {
  return GAME_BUILTIN_TEMPLATES.find(game => game.id === id);
}
