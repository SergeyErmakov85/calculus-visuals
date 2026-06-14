// ─────────────────────────────────────────────────────────────────────────────
// GlobalSearch — палитра команд (⌘K / Ctrl-K) для поиска по всем разделам и темам.
// Источник данных — topicMap (единый источник истины). Доступна из Header.
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { sectionIcon } from "@/components/navigation/sectionIcons";
import { TOPIC_MAP, topicHref } from "@/content/topicMap";

export const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // ⌘K / Ctrl-K открывают палитру из любого места.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Поиск по материалам (Ctrl+K)"
        className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-accent hover:border-accent/50"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline">Поиск</span>
        <kbd className="hidden lg:inline pointer-events-none rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
          Ctrl K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Поиск темы или раздела…" />
        <CommandList>
          <CommandEmpty>Ничего не найдено.</CommandEmpty>
          {TOPIC_MAP.map((section) => {
            const Icon = sectionIcon(section.icon);
            return (
              <CommandGroup
                key={section.id}
                heading={`${section.num}. ${section.title}`}
              >
                {/* Сам раздел-хаб */}
                <CommandItem
                  value={`${section.title} ${section.description} раздел хаб обзор`}
                  onSelect={() => go(section.slug)}
                >
                  <Icon className="mr-2 h-4 w-4 text-accent shrink-0" />
                  <span>Обзор раздела «{section.title}»</span>
                </CommandItem>
                {/* Темы раздела */}
                {section.topics.map((topic) => (
                  <CommandItem
                    key={topic.id}
                    value={`${topic.title} ${topic.tags.join(" ")} ${section.title}`}
                    onSelect={() => go(topicHref(topic))}
                  >
                    <Icon className="mr-2 h-4 w-4 text-muted-foreground shrink-0" />
                    <span>{topic.title}</span>
                    {topic.status === "planned" && (
                      <span className="ml-auto text-[10px] text-muted-foreground/70">
                        скоро
                      </span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
};
