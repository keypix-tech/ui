# keypix-ui

Минималистичный UI-kit для React + TypeScript.  

## Установка

```bash
npm install keypix-ui
```

## Использование

```tsx
import { Button } from "keypix-ui";

<Button variant="destructive">Удалить</Button>
```

## Варианты Button

- `variant`: `"default" | "destructive" | "outline" | "ghost" | "link"`
- `size`: `"sm" | "md" | "lg"`

## Пример

```tsx
<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
```

## Документация

- [Исходный код на GitHub](https://github.com/ВАШ-ГИТХАБ/keypix-ui) (если есть)
- Компоненты легко расширяются и стилизуются через TailwindCSS.

## Лицензия

MIT