import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import { Products } from '@/components/Products';
import { TechStack } from '@/components/TechStack';
import SparklesText from '@/components/ui/sparkles-text';

export default function Home() {
  return (
    <Container>
      <div className='flex items-center gap-2 flex-wrap'>
        <span className='text-4xl'>👋 </span>
        <div className='flex flex-wrap items-center gap-2'>
          <Heading className='text-3xl'>
            Hello there! I&apos;m Josh — a marketer turned entrepreneur turned
            full-stack developer.
          </Heading>
        </div>
      </div>
      <Paragraph className='max-w-xl mt-4'>
        Freelance software engineer at{' '}
        <Highlight>[insert your company here]</Highlight>; 3x entrepreneur at
        Moniker Branding, Roxberry Juice Co., and We Are The Allans; amatuer
        foodie at @rvagrubs; girl dad at home.
      </Paragraph>
      <Heading
        as='h2'
        className='font-black text-lg md:text-lg lg:text-lg mt-20 mb-4'
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
