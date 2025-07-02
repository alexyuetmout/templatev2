# 添加新语言完整指南

本文档详细说明如何在项目中添加新的语言支持。**请严格按照顺序执行，遗漏任何步骤都可能导致错误。**

## 示例：添加日语 (ja) 支持

### 步骤 1: 更新类型定义
**文件**: `types/global.d.ts`

```typescript
// 修改前
type LocaleLang = 'en' | 'zh' | 'tw'

// 修改后
type LocaleLang = 'en' | 'zh' | 'tw' | 'ja'
```

### 步骤 2: 创建新语言包目录和文件
**创建目录**: `i18n/ja/`

**文件 1**: `i18n/ja/common.json`
```json
{
  "metadata": {
    "title": "ShadcnLanding",
    "description": "Shadcnからのランディングページテンプレート"
  },
  "header": {
    "nav": {
      "home": "ホーム",
      "features": "機能",
      "customers": "顧客"
    }
  },
  "hero": {
    "title": "SaaSランディングページ",
    "subtitle": "これはSaaS製品のランディングページのデモンストレーションです"
  },
  "features": {
    "title": "機能",
    "subtitle": "これは機能のサブタイトルです。"
  },
  "pricing": {
    "title": "価格",
    "subtitle": "あなたのニーズに合ったプランを選択してください。"
  }
}
```

**文件 2**: `i18n/ja/index.ts`
```typescript
import common from './common.json'

export const ja = {
  common,
}
```

### 步骤 3: 更新主要 i18n 配置
**文件**: `i18n/index.ts`

**3.1 添加导入**
```typescript
// 在文件顶部添加
import { ja } from './ja'
```

**3.2 更新类型检查对象**
```typescript
const _checkDictionaries: Record<LocaleLang, Dictionary> = {
  en,
  zh,
  tw,
  ja, // ← 添加这行
}
```

**3.3 更新字典对象**
```typescript
export const dictionaries: Record<LocaleLang, Dictionary> = {
  en,
  zh,
  tw,
  ja, // ← 添加这行
}
```

**3.4 更新动态导入的 switch 语句**
```typescript
switch (locale) {
  case 'zh':
    module = await import('./zh')
    dictionary = module.zh
    break
  case 'tw':
    module = await import('./tw')
    dictionary = module.tw
    break
  case 'ja': // ← 添加这个 case
    module = await import('./ja')
    dictionary = module.ja
    break
  default:
    dictionary = en
}
```

**3.5 更新语言转换函数**
```typescript
export function languageConvert(locale: LocaleLang) {
  const languageMap: Record<LocaleLang, string> = {
    en: 'en',
    zh: 'zh-Hans',
    tw: 'zh-Hant',
    ja: 'ja', // ← 添加这行
  }

  return languageMap[locale] || 'en'
}
```

### 步骤 4: 更新语言加载器
**文件**: `i18n/languageLoader.ts`

**4.1 更新缓存对象**
```typescript
const languageCache: Record<LocaleLang, Dictionary | null> = {
  en: null,
  zh: null,
  tw: null,
  ja: null, // ← 添加这行
}
```

**4.2 更新加载状态对象**
```typescript
const loadingStatus: Record<LocaleLang, boolean> = {
  en: false,
  zh: false,
  tw: false,
  ja: false, // ← 添加这行
}
```

**4.3 更新动态导入函数**
```typescript
async function dynamicImportLanguage(locale: LocaleLang): Promise<Dictionary> {
  switch (locale) {
    case 'en':
      return (await import('@/i18n/en')).en
    case 'zh':
      return (await import('@/i18n/zh')).zh
    case 'tw':
      return (await import('@/i18n/tw')).tw
    case 'ja': // ← 添加这个 case
      return (await import('@/i18n/ja')).ja
    default:
      return (await import('@/i18n/en')).en
  }
}
```

### 步骤 5: 更新网站配置
**文件**: `configs/website.ts`

```typescript
i18n: {
  locales: ['en', 'zh', 'tw', 'ja'], // ← 添加 'ja'
  defaultLocale: 'en',
  basePath: '/',
  localeDetector: false,
  serverSetCookie: 'never',
},
```

### 步骤 6: 更新语言切换器
**文件**: `components/layout/LanguageSwitcher.tsx`

```typescript
const languageList: LanguageItem[] = [
  { lang: 'en', name: 'English', short: 'EN' },
  { lang: 'zh', name: '简体中文', short: '简' },
  { lang: 'tw', name: '繁體中文', short: '繁' },
  { lang: 'ja', name: '日本語', short: '日' }, // ← 添加这行
]
```

## 验证清单

完成上述步骤后，请验证以下功能：

- [ ] TypeScript 编译无错误
- [ ] 访问 `/ja/` 路径正常显示
- [ ] 语言切换器显示新语言选项
- [ ] 点击语言切换正常工作
- [ ] 页面内容显示为新语言
- [ ] HTML lang 属性正确设置
- [ ] 浏览器开发者工具无错误

## 注意事项

1. **严格按顺序执行**：每个步骤都有依赖关系，跳跃执行可能导致错误
2. **文件命名一致**：确保语言代码在所有文件中保持一致
3. **语言代码标准**：使用标准的 ISO 639-1 语言代码
4. **翻译质量**：确保翻译内容准确和本地化适配
5. **测试完整性**：添加新语言后务必完整测试所有功能

## 常见错误

- **忘记更新 languageLoader.ts**：导致动态加载失败
- **类型定义不匹配**：TypeScript 报错
- **路由配置遗漏**：访问新语言路径 404
- **语言切换器未更新**：新语言选项不显示

## 回滚方法

如果添加过程中出现问题，可以通过以下步骤回滚：

1. 删除新创建的语言包目录 `i18n/ja/`
2. 从所有修改的文件中移除新语言相关的代码
3. 恢复 `types/global.d.ts` 中的类型定义
4. 重启开发服务器

---

**重要提醒**：每次添加新语言后，建议提交 Git 备份，以便出现问题时快速回滚。