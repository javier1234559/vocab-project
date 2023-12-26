import { Button } from '@nextui-org/button';
import MainLayout from '~/components/Layout/MainLayout';
import ThemeSwitcher from '~/components/ThemeSwitcher';

export default function Page() {
  return (
    <section className="p-8 flex flex-col h-full justify-center">
      <h1 className="text-3xl font-bold font-poppins">Next Starter ⚡</h1>
      <p className="text-lg">
        A highly opinionated and complete starter for Next.js projects ready
        to production
      </p>
      <Button className="">Click me</Button>
      <ThemeSwitcher />
      <MainLayout>
        <h1>Test</h1>
      </MainLayout>
    </section>
  )
}
