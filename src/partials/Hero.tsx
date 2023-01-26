import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      socialButtons={' '}
      title={
        <>
          Hi there, I'm <GradientText>Noah</GradientText> 👋
        </>
      }
      description={
        <>
          I produce technical content for developers to educate them on both
          high-level concepts, and the{' '}
          <a
            className="text-cyan-400 hover:underline"
            target="_blank"
            href="https://egghead.io/courses/introduction-to-smart-contracts-with-ethereum-and-solidity-0a40bba0"
          >
            nitty gritty
          </a>
          . I also write daily as I believe that a daily writing habit is what
          brought me above the poverty line during the pandemic. You'll find a
          collection of my writings here, please let me know if you find any of
          them useful, I always want to talk to readers.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/lowpoly-man-removebg-preview.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
