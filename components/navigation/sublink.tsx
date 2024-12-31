import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LuChevronDown, LuChevronRight } from "react-icons/lu";

import { Paths } from "@/lib/pageroutes";
import { cn } from "@/lib/utils";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { SheetClose } from "@/components/ui/sheet";

import Anchor from "@/components/navigation/anchor";
import { Button } from "@/components/ui/button";

function isRoute(item: Paths): item is Extract<Paths, { title: string; href: string }> {
  return "title" in item && "href" in item;
}

export default function SubLink(props: Paths & { level: number; isSheet: boolean }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(props.level < 2);

  useEffect(() => {
    if (isRoute(props) && props.href && path !== props.href && path.includes(props.href)) {
      setIsOpen(true);
    }
  }, [path, props]);

  if (!isRoute(props)) {
    return null;
  }

  const { title, href, items, noLink, level, isSheet } = props;

  const Comp = (
    <Anchor 
      className="transition-colors rounded duration-150 w-full block px-3 py-0.5 hover:bg-primary/15 relative pr-8"
      activeClassName="text-primary rounded font-medium bg-blue-100 w-full block px-3 py-0.5 dark:bg-slate-900 dark:text-blue-500"
      href={href}
      onClick={() => {
        if (items && !isOpen) {
          setIsOpen(true);
        }
      }}>
      {title}
      {items && (
        <span 
          className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          {!isOpen ? (
            <LuChevronRight className="h-3 w-3" />
          ) : (
            <LuChevronDown className="h-3 w-3" />
          )}
        </span>
      )}
    </Anchor>
  );

  const titleOrLink = !noLink ? (
    isSheet ? <SheetClose asChild>{Comp}</SheetClose> : Comp
  ) : (
    <h2 className="font-medium text-primary sm:text-sm">{title}</h2>
  );

  if (!items) {
    return (
      <div className="flex flex-col text-sm group">
        <div className="rounded transition-colors duration-150">
          {titleOrLink}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-0.5">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <div className="w-full">
            {titleOrLink}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="CollapsibleContent">
          <div
            className={cn(
              "mt-1 flex flex-col items-start gap-1.5 pl-3 text-sm border-l text-neutral-800 dark:text-neutral-300/85",
              level > 0 && "ml-1 pl-3 border-l"
            )}
          >
            {items?.map((innerLink) => {
              if (!isRoute(innerLink)) {
                return null;
              }

              const modifiedItems = {
                ...innerLink,
                href: `${href}${innerLink.href}`,
                level: level + 1,
                isSheet,
              };

              return <SubLink key={modifiedItems.href} {...modifiedItems} />;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
