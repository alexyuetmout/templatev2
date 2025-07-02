'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from 'next/navigation'

interface LanguageItem {
  lang: LocaleLang
  name: string
  short: string
}

const languageList: LanguageItem[] = [
  { lang: 'en', name: 'English', short: 'EN' },
  { lang: 'zh', name: '简体中文', short: '简' },
  { lang: 'tw', name: '繁體中文', short: '繁' },
]

interface LanguageSwitcherProps {
  locale: LocaleLang
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const currentLanguage = languageList.find(item => item.lang === locale)

  const switchLanguage = (newLocale: LocaleLang) => {
    const segments = pathname.split('/').filter(Boolean)
    
    if (languageList.some(item => item.lang === segments[0])) {
      segments[0] = newLocale
    } else {
      segments.unshift(newLocale)
    }
    
    router.replace(`/${segments.join('/')}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          {currentLanguage?.short}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languageList.map(item => (
          <DropdownMenuItem 
            key={item.lang}
            onClick={() => switchLanguage(item.lang)}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}