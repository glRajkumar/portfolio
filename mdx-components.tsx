import * as AccordionComps from 'fumadocs-ui/components/accordion';
import * as StepsComps from 'fumadocs-ui/components/steps';
import * as TabsComps from 'fumadocs-ui/components/tabs';
import defaultComps from 'fumadocs-ui/mdx';

import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComps,
    ...AccordionComps,
    ...StepsComps,
    ...TabsComps,
    ...components,
  };
}