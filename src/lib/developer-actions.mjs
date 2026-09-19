/** Only canonical GitHub HTTPS repository roots may become shell commands. */
export function githubCloneCommand(input) {
  if (typeof input !== "string") return null;
  if (/[^\x21-\x7e]/.test(input)) return null;
  // Existing GitHub accounts can have a trailing hyphen (for example omni-).
  const match = /^https:\/\/github\.com\/([a-z0-9][a-z0-9-]{0,38})\/([a-z0-9_.-]{1,100})\/?$/i.exec(input);
  if (!match) return null;
  const repository = match[2].replace(/\.git$/i, "");
  if (!repository || repository === "." || repository === "..") return null;
  return `git clone https://github.com/${match[1]}/${repository}.git`;
}

/** A resolved clipboard write is the only success signal; callers provide recovery UI. */
export async function copyDeveloperText(text, clipboard) {
  try {
    if (typeof text !== "string" || !text || !clipboard?.writeText) return false;
    await clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export const helloJevSource = Object.freeze({
  package: "@typesafe-ai/sdk",
  version: "0.6.0",
  commit: "66880ccded6cb642dc1809620c2b108c33730214",
  readme: "https://github.com/typesafe-ai/typesafe-sdk-js/blob/66880ccded6cb642dc1809620c2b108c33730214/README.md",
  client: "https://github.com/typesafe-ai/typesafe-sdk-js/blob/66880ccded6cb642dc1809620c2b108c33730214/src/client.ts#L291",
  questions: "https://github.com/typesafe-ai/typesafe-sdk-js/blob/66880ccded6cb642dc1809620c2b108c33730214/src/questions.ts#L51",
});

// These are real SDK calls. The expanded example supplies the imports and client.
export const helloJevPreview = [
  'const nextStep = choice("What next?", { login: null, askUser: null, retry: null });',
  'const { answers } = await client.systemOne({ state: "Login form is ready", questions: { nextStep } });',
  'console.log(answers.nextStep.choice);',
].join("\n");

// Keep secrets on the server. The site displays this string; it never imports the SDK.
export const helloJevSnippet = [
  '// Node.js 20+ | Save as hello-jev.mjs, then run: node hello-jev.mjs',
  '// Install: npm install @typesafe-ai/sdk@0.6.0',
  '// Set TYPESAFE_API_KEY in your server environment before running.',
  '// Never put the key or this API call in browser code.',
  'import { choice, TypeSafeClient } from "@typesafe-ai/sdk";',
  '',
  'const client = new TypeSafeClient();',
  helloJevPreview,
].join("\n");

export const developerActionCopy = {
  zh: {
    intro: "给出当前状态和几个选项，让 Jev 为 Agent 选下一步。",
    preview: "核心调用 · 初始化见完整示例",
    copyExample: "复制完整示例",
    copied: "已复制",
    failed: "自动复制失败。请选中下方文本，手动复制。",
    expand: "展开完整示例",
    collapse: "收起完整示例",
    setup: "Node.js 20+ · 在服务端设置 TYPESAFE_API_KEY。此页面只展示代码，不会发起模型调用。",
    source: "查看 SDK 源码",
    codeRegion: "Jev 代码示例，可横向滚动",
    manualExample: "手动复制完整代码",
    clone: "复制 Clone 命令",
    cloneText: "Clone",
    manualClone: "手动复制 Clone 命令",
    cloneCopied: "Clone 命令已复制",
    dismiss: "收起手动复制",
  },
  en: {
    intro: "Give Jev the current state and a few options. Get the Agent’s next step.",
    preview: "Core call · setup in the full example",
    copyExample: "Copy full example",
    copied: "Copied",
    failed: "Could not copy automatically. Select the text below and copy it manually.",
    expand: "Show full example",
    collapse: "Hide full example",
    setup: "Node.js 20+ · Set TYPESAFE_API_KEY on your server. This page shows code and makes no model requests.",
    source: "View SDK source",
    codeRegion: "Jev code example, horizontally scrollable",
    manualExample: "Copy the full code manually",
    clone: "Copy Git clone command",
    cloneText: "Clone",
    manualClone: "Copy the clone command manually",
    cloneCopied: "Clone command copied",
    dismiss: "Hide manual copy",
  },
  ja: {
    intro: "現在の状態と選択肢を渡すと、Jev が Agent の次の一手を選びます。",
    preview: "呼び出しの要点 · 初期設定は完全な例に記載",
    copyExample: "完全な例をコピー",
    copied: "コピー済み",
    failed: "自動コピーに失敗しました。下のテキストを選択して手動でコピーしてください。",
    expand: "完全な例を表示",
    collapse: "完全な例を閉じる",
    setup: "Node.js 20+ · TYPESAFE_API_KEY はサーバー側で設定します。このページはコード表示のみで、モデルを呼び出しません。",
    source: "SDK のソースを見る",
    codeRegion: "横にスクロールできる Jev のコード例",
    manualExample: "完全なコードを手動でコピー",
    clone: "Git clone コマンドをコピー",
    cloneText: "Clone",
    manualClone: "Clone コマンドを手動でコピー",
    cloneCopied: "Clone コマンドをコピーしました",
    dismiss: "手動コピーを閉じる",
  },
  ko: {
    intro: "현재 상태와 선택지를 전달하면 Jev가 Agent의 다음 행동을 선택합니다.",
    preview: "핵심 호출 · 초기 설정은 전체 예제에 포함",
    copyExample: "전체 예제 복사",
    copied: "복사됨",
    failed: "자동 복사에 실패했습니다. 아래 텍스트를 선택해 직접 복사해 주세요.",
    expand: "전체 예제 보기",
    collapse: "전체 예제 접기",
    setup: "Node.js 20+ · 서버에서 TYPESAFE_API_KEY를 설정하세요. 이 페이지는 코드만 표시하며 모델을 호출하지 않습니다.",
    source: "SDK 소스 보기",
    codeRegion: "가로로 스크롤할 수 있는 Jev 코드 예제",
    manualExample: "전체 코드를 직접 복사",
    clone: "Git clone 명령 복사",
    cloneText: "Clone",
    manualClone: "Clone 명령 직접 복사",
    cloneCopied: "Clone 명령이 복사되었습니다",
    dismiss: "직접 복사 접기",
  },
};
