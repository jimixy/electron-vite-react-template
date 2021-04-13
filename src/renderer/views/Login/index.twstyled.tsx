import { css, styled } from '@twstyled/core'

export const HeroHeading = styled.div`
  @tailwind font-semibold text-3xl md:text-4xl lg:text-5xl not-italic;
  line-height: 1.15;
`
export const styles = {
  heading1: css`
    @tailwind text-right mb-10;
  `,
  test: css`
    @tailwind flex justify-center mr-10;
  `
}
