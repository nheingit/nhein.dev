import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletter</GradientText>
        </>
      }
      description="I'll be honest with you this button doesn't do anything. But I figured if I put it here
      it would eventually shame me into plugging this into revue or convertkit or something. If you read this and want to hear from me in newsletter form, tell me as much on Twitter!"
      />
  </Section>
);

export { CTA };
