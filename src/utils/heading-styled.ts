import type { ComponentProps } from "astro/types";
import Heading from '@components/ui/Heading.astro';

export type HeadingStyled = ComponentProps<typeof Heading>['styled'];

export function mergeHeadingStyled(base: NonNullable<HeadingStyled>, override?: HeadingStyled,): HeadingStyled {
  return { ...base, ...override }
}