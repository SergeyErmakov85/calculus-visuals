// ─────────────────────────────────────────────────────────────────────────────
// CourseSidebar — дерево «Разделы → темы» из topicMap.
// Активный раздел развёрнут, активная тема подсвечена. planned-темы приглушены.
// ─────────────────────────────────────────────────────────────────────────────
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TOPIC_MAP, topicHref, type Topic } from "@/content/topicMap";
import { sectionIcon } from "./sectionIcons";

const isActiveTopic = (topic: Topic, pathname: string): boolean =>
  pathname === topic.slug || (!!topic.route && pathname === topic.route);

interface CourseSidebarProps {
  /** id текущего раздела — он развёрнут по умолчанию. */
  activeSectionId?: string;
}

export const CourseSidebar = ({ activeSectionId }: CourseSidebarProps) => {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Разделы курса" className="text-sm">
      <ul className="space-y-1">
        {TOPIC_MAP.map((section) => {
          const Icon = sectionIcon(section.icon);
          const expanded = section.id === activeSectionId;
          return (
            <li key={section.id}>
              <Link
                to={section.slug}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 font-medium transition-colors",
                  expanded
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">
                  {section.num}. {section.title}
                </span>
              </Link>

              {expanded && (
                <ul className="mt-1 ml-3 border-l border-border pl-3 space-y-0.5">
                  {section.topics.map((topic) => {
                    const active = isActiveTopic(topic, pathname);
                    if (topic.status === "planned") {
                      return (
                        <li
                          key={topic.id}
                          className="flex items-center gap-1.5 px-2 py-1 text-muted-foreground/60 cursor-default"
                          title="Скоро"
                        >
                          <span className="truncate">{topic.title}</span>
                          <span className="text-[10px] uppercase tracking-wide opacity-70">
                            скоро
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={topic.id}>
                        <Link
                          to={topicHref(topic)}
                          className={cn(
                            "flex items-center gap-1 rounded px-2 py-1 transition-colors",
                            active
                              ? "text-accent font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          {active && <ChevronRight className="h-3 w-3 shrink-0" />}
                          <span className="truncate">{topic.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
