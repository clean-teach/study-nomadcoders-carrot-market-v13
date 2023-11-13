import Button from '@/app/_components/button';
import Layout from '@/app/_components/layout';
import TextArea from '@/app/_components/textarea';
import type { NextPage } from 'next';

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="space-y-4 p-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
