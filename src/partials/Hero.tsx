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
          I'm a Developer Advocate, which means a lot of different things, to
          many people. Mainly I produce technical content for developers to
          educate them on both high-level concepts, and the{' '}
          <a
            className="text-cyan-400 hover:underline"
            target="_blank"
            href="https://egghead.io/courses/introduction-to-smart-contracts-with-ethereum-and-solidity-0a40bba0"
          >
            nitty gritty
          </a>
          . Right now I work in the Blockchain space, trying to build a world
          where access to a global financial system only requires an internet
          connection. I work at{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://phantom.app"
            target="_blank"
          >
            Phantom
          </a>{' '}
          currently. Before that, I lead the DevRel team at{' '}
          <a
            className="text-cyan-400 hover:underline"
            target="_blank"
            href="https://quicknode.com"
          >
            QuickNode
          </a>
          . I'm also a proud{' '}
          <a
            className="text-cyan-400 hover:underline"
            target="_blank"
            href="https://egghead.io/q/resources-by-noah-hein"
          >
            Egghead Instructor
          </a>
          .
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
